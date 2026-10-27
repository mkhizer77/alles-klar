// Entry point for development and self-hosting: API plus the built app on one port.
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createApp } from './core/app.ts';
import { migrate } from './core/database.ts';
import { Pbkdf2Hasher } from './core/password.ts';
import { NodeSqliteDatabase } from './adapters/node-sqlite.ts';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const PROD = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.API_PORT || 8787);
const DB_PATH = process.env.DB_PATH || join(root, 'data', 'alles-klar.db');

const db = new NodeSqliteDatabase(DB_PATH);
await migrate(db);

const app = createApp({
  db,
  hasher: new Pbkdf2Hasher(Number(process.env.PBKDF2_ITERATIONS || 100_000)),
  allowedOrigins: (process.env.ALLOWED_ORIGINS || '*').split(','),
});

if (PROD) {
  const index = join(root, 'dist', 'index.html');
  app.use('/*', serveStatic({ root: 'dist' }));
  const html = existsSync(index) ? readFileSync(index, 'utf8') : '<h1>Build the app first: pnpm build</h1>';
  app.get('*', (c) => c.html(html));
}

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`Alles Klar API on http://localhost:${PORT} (${PROD ? 'production' : 'development'}), db: ${DB_PATH}`);
});
