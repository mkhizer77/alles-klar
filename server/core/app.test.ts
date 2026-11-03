import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from './app.ts';
import { migrate } from './database.ts';
import { Pbkdf2Hasher } from './password.ts';
import { NodeSqliteDatabase } from '../adapters/node-sqlite.ts';

async function makeApp() {
  const db = new NodeSqliteDatabase(':memory:');
  await migrate(db);
  return createApp({ db, hasher: new Pbkdf2Hasher(1000), allowedOrigins: ['*'] });
}

const json = (body: unknown, token?: string) => ({
  method: 'POST',
  headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
  body: JSON.stringify(body),
});

test('register, me, logout', async () => {
  const app = await makeApp();
  const reg = await app.request('/api/auth/register', json({ username: 'anna', password: 'secret1' }));
  assert.equal(reg.status, 200);
  const { token, username } = (await reg.json()) as { token: string; username: string };
  assert.equal(username, 'anna');
  assert.ok(token.length > 20);

  const me = await app.request('/api/auth/me', { headers: { authorization: `Bearer ${token}` } });
  assert.deepEqual(await me.json(), { user: { username: 'anna' } });

  await app.request('/api/auth/logout', json({}, token));
  const after = await app.request('/api/auth/me', { headers: { authorization: `Bearer ${token}` } });
  assert.deepEqual(await after.json(), { user: null });
});

test('rejects bad usernames, duplicates and wrong passwords', async () => {
  const app = await makeApp();
  assert.equal((await app.request('/api/auth/register', json({ username: 'a', password: 'secret1' }))).status, 400);
  assert.equal((await app.request('/api/auth/register', json({ username: 'anna', password: 'secret1' }))).status, 200);
  assert.equal((await app.request('/api/auth/register', json({ username: 'Anna', password: 'secret1' }))).status, 409);
  assert.equal((await app.request('/api/auth/login', json({ username: 'anna', password: 'wrong' }))).status, 401);
  assert.equal((await app.request('/api/auth/login', json({ username: 'anna', password: 'secret1' }))).status, 200);
});

test('enter creates a new name and signs an existing one in', async () => {
  const app = await makeApp();
  const first = await app.request('/api/auth/enter', json({ username: 'lena', password: 'secret1' }));
  assert.equal(first.status, 200);
  const a = (await first.json()) as { username: string; token: string; created: boolean };
  assert.equal(a.created, true);
  assert.ok(a.token.length > 20);

  const again = await app.request('/api/auth/enter', json({ username: 'lena', password: 'secret1' }));
  const b = (await again.json()) as { username: string; token: string; created: boolean };
  assert.equal(b.created, false);
  assert.notEqual(b.token, a.token);
  const me = await app.request('/api/auth/me', { headers: { authorization: `Bearer ${b.token}` } });
  assert.deepEqual(await me.json(), { user: { username: 'lena' } });

  assert.equal((await app.request('/api/auth/enter', json({ username: 'lena', password: 'other12' }))).status, 401);
  assert.equal((await app.request('/api/auth/enter', json({ username: 'x', password: 'secret1' }))).status, 400);
});

test('kv store keeps the newest value per key', async () => {
  const app = await makeApp();
  const reg = await app.request('/api/auth/register', json({ username: 'anna', password: 'secret1' }));
  const { token } = (await reg.json()) as { token: string };
  const auth = { authorization: `Bearer ${token}` };

  assert.equal((await app.request('/api/kv')).status, 401);

  await app.request('/api/kv', { ...json({ entries: [{ key: 'settings', value: '{"a":1}', updatedAt: 10 }] }, token), method: 'PUT' });
  await app.request('/api/kv', { ...json({ entries: [{ key: 'settings', value: '{"a":0}', updatedAt: 5 }] }, token), method: 'PUT' });
  const res = await app.request('/api/kv', { headers: auth });
  const { entries } = (await res.json()) as { entries: { key: string; value: string; updatedAt: number }[] };
  assert.deepEqual(entries, [{ key: 'settings', value: '{"a":1}', updatedAt: 10 }]);
});

test('password hasher round-trips and rejects', async () => {
  const h = new Pbkdf2Hasher(500);
  const stored = await h.hash('pa55word');
  assert.ok(stored.startsWith('pbkdf2$500$'));
  assert.equal(await h.verify('pa55word', stored), true);
  assert.equal(await h.verify('pa55word!', stored), false);
});
