// Alles Klar API. Stores only a username, a password hash, and the learner's
// progress (a key/value store per user). No email, no personal data.
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { getCookie, setCookie, deleteCookie } from 'hono/cookie';
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { openDb } from './db.ts';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const PROD = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.API_PORT || 8787);
const DB_PATH = process.env.DB_PATH || join(root, 'data', 'alles-klar.db');
const SESSION_DAYS = 90;
const COOKIE = 'ak_session';

const db = openDb(DB_PATH);

type Variables = { userId: number; username: string };
const app = new Hono<{ Variables: Variables }>();

// ---------- helpers ----------
const now = () => Date.now();
const hashPassword = (password: string, salt: string) => scryptSync(password, salt, 64).toString('hex');
const validUsername = (u: unknown): u is string => typeof u === 'string' && /^[a-zA-Z0-9_.-]{3,32}$/.test(u);
const validPassword = (p: unknown): p is string => typeof p === 'string' && p.length >= 6 && p.length <= 200;

// very small brute-force brake: per IP, 20 failed logins per 15 minutes
const failures = new Map<string, { n: number; reset: number }>();
function tooManyFailures(ip: string) {
  const f = failures.get(ip);
  if (!f || f.reset < now()) return false;
  return f.n >= 20;
}
function recordFailure(ip: string) {
  const f = failures.get(ip);
  if (!f || f.reset < now()) failures.set(ip, { n: 1, reset: now() + 15 * 60_000 });
  else f.n++;
}

function createSession(userId: number) {
  const token = randomBytes(32).toString('base64url');
  const t = now();
  db.prepare('INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)').run(token, userId, t, t + SESSION_DAYS * 86_400_000);
  return token;
}

function setSessionCookie(c: Parameters<typeof setCookie>[0], token: string) {
  setCookie(c, COOKIE, token, {
    httpOnly: true,
    sameSite: 'Lax',
    secure: PROD,
    path: '/',
    maxAge: SESSION_DAYS * 86_400,
  });
}

// ---------- auth middleware ----------
app.use('/api/*', async (c, next) => {
  const token = getCookie(c, COOKIE);
  if (token) {
    const row = db
      .prepare('SELECT s.user_id AS userId, u.username AS username FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ? AND s.expires_at > ?')
      .get(token, now()) as { userId: number; username: string } | undefined;
    if (row) {
      c.set('userId', row.userId);
      c.set('username', row.username);
    }
  }
  await next();
});

const requireAuth = (c: any) => {
  const id = c.get('userId');
  if (!id) return c.json({ error: 'Not signed in' }, 401);
  return null;
};

// ---------- auth routes ----------
app.post('/api/auth/register', async (c) => {
  const body = await c.req.json().catch(() => ({}));
  const { username, password } = body as Record<string, unknown>;
  if (!validUsername(username)) return c.json({ error: 'Username: 3–32 letters, numbers, . _ -' }, 400);
  if (!validPassword(password)) return c.json({ error: 'Password: at least 6 characters' }, 400);
  const exists = db.prepare('SELECT 1 FROM users WHERE username = ?').get(username);
  if (exists) return c.json({ error: 'That username is taken' }, 409);
  const salt = randomBytes(16).toString('hex');
  const res = db.prepare('INSERT INTO users (username, pass_hash, salt, created_at) VALUES (?, ?, ?, ?)').run(username, hashPassword(password, salt), salt, now());
  const token = createSession(Number(res.lastInsertRowid));
  setSessionCookie(c, token);
  return c.json({ username });
});

app.post('/api/auth/login', async (c) => {
  const ip = c.req.header('x-forwarded-for') || 'local';
  if (tooManyFailures(ip)) return c.json({ error: 'Too many attempts, try again in 15 minutes' }, 429);
  const body = await c.req.json().catch(() => ({}));
  const { username, password } = body as Record<string, unknown>;
  if (!validUsername(username) || typeof password !== 'string') return c.json({ error: 'Wrong username or password' }, 401);
  const user = db.prepare('SELECT id, username, pass_hash, salt FROM users WHERE username = ?').get(username) as
    | { id: number; username: string; pass_hash: string; salt: string }
    | undefined;
  if (!user) {
    recordFailure(ip);
    return c.json({ error: 'Wrong username or password' }, 401);
  }
  const given = Buffer.from(hashPassword(password, user.salt), 'hex');
  const stored = Buffer.from(user.pass_hash, 'hex');
  if (given.length !== stored.length || !timingSafeEqual(given, stored)) {
    recordFailure(ip);
    return c.json({ error: 'Wrong username or password' }, 401);
  }
  const token = createSession(user.id);
  setSessionCookie(c, token);
  return c.json({ username: user.username });
});

app.post('/api/auth/logout', (c) => {
  const token = getCookie(c, COOKIE);
  if (token) db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
  deleteCookie(c, COOKIE, { path: '/' });
  return c.json({ ok: true });
});

app.get('/api/auth/me', (c) => {
  const id = c.get('userId');
  if (!id) return c.json({ user: null });
  return c.json({ user: { username: c.get('username') } });
});

app.delete('/api/auth/account', (c) => {
  const err = requireAuth(c);
  if (err) return err;
  db.prepare('DELETE FROM users WHERE id = ?').run(c.get('userId'));
  deleteCookie(c, COOKIE, { path: '/' });
  return c.json({ ok: true });
});

// ---------- progress store ----------
// Each entry: { key, value (JSON string), updatedAt }. Last write wins by updatedAt.
app.get('/api/kv', (c) => {
  const err = requireAuth(c);
  if (err) return err;
  const rows = db.prepare('SELECT key, value, updated_at AS updatedAt FROM kv WHERE user_id = ?').all(c.get('userId')) as {
    key: string;
    value: string;
    updatedAt: number;
  }[];
  return c.json({ entries: rows });
});

app.put('/api/kv', async (c) => {
  const err = requireAuth(c);
  if (err) return err;
  const body = (await c.req.json().catch(() => null)) as { entries?: { key: string; value: string; updatedAt: number }[] } | null;
  if (!body || !Array.isArray(body.entries)) return c.json({ error: 'Bad body' }, 400);
  const userId = c.get('userId');
  const upsert = db.prepare(`
    INSERT INTO kv (user_id, key, value, updated_at) VALUES (?, ?, ?, ?)
    ON CONFLICT(user_id, key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
    WHERE excluded.updated_at >= kv.updated_at
  `);
  db.exec('BEGIN');
  try {
    for (const e of body.entries) {
      if (typeof e.key !== 'string' || e.key.length > 200 || typeof e.value !== 'string' || e.value.length > 200_000) continue;
      upsert.run(userId, e.key, e.value, Number(e.updatedAt) || now());
    }
    db.exec('COMMIT');
  } catch (ex) {
    db.exec('ROLLBACK');
    throw ex;
  }
  const rows = db.prepare('SELECT key, value, updated_at AS updatedAt FROM kv WHERE user_id = ?').all(userId);
  return c.json({ entries: rows });
});

app.get('/api/health', (c) => c.json({ ok: true }));

// ---------- static (production) ----------
if (PROD) {
  const dist = join(root, 'dist');
  app.use('/*', serveStatic({ root: 'dist' }));
  const index = existsSync(join(dist, 'index.html')) ? readFileSync(join(dist, 'index.html'), 'utf8') : '<h1>Build the app first: pnpm build</h1>';
  app.get('*', (c) => c.html(index));
}

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`Alles Klar API on http://localhost:${PORT} (${PROD ? 'production' : 'development'}), db: ${DB_PATH}`);
});
