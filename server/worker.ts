// Entry point for Cloudflare Workers (free tier) with a D1 database binding.
import { createApp } from './core/app.ts';
import { migrate } from './core/database.ts';
import { Pbkdf2Hasher } from './core/password.ts';
import { D1Database, type D1Like } from './adapters/d1.ts';

interface Env {
  DB: D1Like;
  ALLOWED_ORIGINS?: string;
  PBKDF2_ITERATIONS?: string;
}

let app: ReturnType<typeof createApp> | undefined;
let ready: Promise<void> | undefined;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const db = new D1Database(env.DB);
    ready ??= migrate(db);
    await ready;
    app ??= createApp({
      db,
      hasher: new Pbkdf2Hasher(Number(env.PBKDF2_ITERATIONS || 20_000)),
      allowedOrigins: (env.ALLOWED_ORIGINS || '*').split(','),
    });
    return app.fetch(request);
  },
};
