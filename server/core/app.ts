// HTTP layer: turns requests into service calls. Runtime-agnostic (Node or
// Cloudflare Workers) because it only depends on the ports in this folder.
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Database } from './database.ts';
import type { PasswordHasher } from './password.ts';
import { KvRepository, SessionRepository, UserRepository, type KvEntry } from './repositories.ts';
import { AuthError, AuthService } from './auth-service.ts';

export interface AppOptions {
  db: Database;
  hasher: PasswordHasher;
  /** Origins allowed to call the API from a browser; '*' for any. */
  allowedOrigins: string[];
  now?: () => number;
  randomToken?: () => string;
  sessionTtlMs?: number;
}

type Variables = { auth?: { userId: number; username: string; token: string } };

const MAX_KEY = 200;
const MAX_VALUE = 200_000;

function defaultRandomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function isKvEntry(e: unknown): e is KvEntry {
  if (!e || typeof e !== 'object') return false;
  const { key, value, updatedAt } = e as Record<string, unknown>;
  return typeof key === 'string' && key.length > 0 && key.length <= MAX_KEY && typeof value === 'string' && value.length <= MAX_VALUE && typeof updatedAt === 'number';
}

export function createApp(opts: AppOptions) {
  const now = opts.now ?? (() => Date.now());
  const auth = new AuthService({
    users: new UserRepository(opts.db),
    sessions: new SessionRepository(opts.db),
    hasher: opts.hasher,
    now,
    randomToken: opts.randomToken ?? defaultRandomToken,
    sessionTtlMs: opts.sessionTtlMs ?? 90 * 86_400_000,
  });
  const kv = new KvRepository(opts.db);

  const app = new Hono<{ Variables: Variables }>();

  app.use(
    '/api/*',
    cors({
      origin: (origin) => (opts.allowedOrigins.includes('*') || opts.allowedOrigins.includes(origin) ? origin : ''),
      allowHeaders: ['Authorization', 'Content-Type'],
      allowMethods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      maxAge: 86_400,
    }),
  );

  app.use('/api/*', async (c, next) => {
    const header = c.req.header('authorization') ?? '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    if (token) {
      const session = await auth.resolve(token);
      if (session) c.set('auth', { ...session, token });
    }
    await next();
  });

  app.onError((err, c) => {
    if (err instanceof AuthError) return c.json({ error: err.message }, err.status);
    console.error(err);
    return c.json({ error: 'Server error' }, 500);
  });

  const body = async (c: { req: { json: () => Promise<unknown> } }) => (await c.req.json().catch(() => ({}))) as Record<string, unknown>;
  const clientKey = (c: { req: { header: (n: string) => string | undefined } }) => c.req.header('cf-connecting-ip') ?? c.req.header('x-forwarded-for') ?? 'local';

  app.get('/api/health', (c) => c.json({ ok: true }));

  app.post('/api/auth/register', async (c) => {
    const { username, password } = await body(c);
    return c.json(await auth.register(username, password));
  });

  app.post('/api/auth/login', async (c) => {
    const { username, password } = await body(c);
    return c.json(await auth.login(username, password, clientKey(c)));
  });

  app.get('/api/auth/me', (c) => {
    const a = c.get('auth');
    return c.json({ user: a ? { username: a.username } : null });
  });

  app.post('/api/auth/logout', async (c) => {
    const a = c.get('auth');
    if (a) await auth.logout(a.token);
    return c.json({ ok: true });
  });

  app.delete('/api/auth/account', async (c) => {
    const a = c.get('auth');
    if (!a) return c.json({ error: 'Not signed in' }, 401);
    await auth.deleteAccount(a.userId);
    return c.json({ ok: true });
  });

  app.get('/api/kv', async (c) => {
    const a = c.get('auth');
    if (!a) return c.json({ error: 'Not signed in' }, 401);
    return c.json({ entries: await kv.list(a.userId) });
  });

  app.put('/api/kv', async (c) => {
    const a = c.get('auth');
    if (!a) return c.json({ error: 'Not signed in' }, 401);
    const { entries } = await body(c);
    if (!Array.isArray(entries)) return c.json({ error: 'Bad body' }, 400);
    const valid = entries.filter(isKvEntry);
    if (valid.length) await kv.upsertMany(a.userId, valid);
    return c.json({ entries: await kv.list(a.userId) });
  });

  return app;
}
