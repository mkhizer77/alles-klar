import type { Database } from './database.ts';

export interface User {
  id: number;
  username: string;
  passHash: string;
}

export interface KvEntry {
  key: string;
  value: string;
  updatedAt: number;
}

export class UserRepository {
  private readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  findByUsername(username: string) {
    return this.db.get<User>('SELECT id, username, pass_hash AS passHash FROM users WHERE username = ?', [username]);
  }

  async create(username: string, passHash: string, now: number): Promise<User> {
    await this.db.run('INSERT INTO users (username, pass_hash, created_at) VALUES (?, ?, ?)', [username, passHash, now]);
    const user = await this.findByUsername(username);
    if (!user) throw new Error('user not created');
    return user;
  }

  delete(id: number) {
    return this.db.run('DELETE FROM users WHERE id = ?', [id]);
  }
}

export class SessionRepository {
  private readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  create(token: string, userId: number, now: number, ttlMs: number) {
    return this.db.run('INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)', [token, userId, now, now + ttlMs]);
  }

  resolve(token: string, now: number) {
    return this.db.get<{ userId: number; username: string }>(
      'SELECT s.user_id AS userId, u.username AS username FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ? AND s.expires_at > ?',
      [token, now],
    );
  }

  delete(token: string) {
    return this.db.run('DELETE FROM sessions WHERE token = ?', [token]);
  }
}

export class KvRepository {
  private readonly db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  list(userId: number) {
    return this.db.all<KvEntry>('SELECT key, value, updated_at AS updatedAt FROM kv WHERE user_id = ?', [userId]);
  }

  /** Last write wins: an older update never overwrites a newer value. */
  upsertMany(userId: number, entries: KvEntry[]) {
    return this.db.batch(
      entries.map((e) => ({
        sql: `INSERT INTO kv (user_id, key, value, updated_at) VALUES (?, ?, ?, ?)
              ON CONFLICT(user_id, key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
              WHERE excluded.updated_at >= kv.updated_at`,
        params: [userId, e.key, e.value, e.updatedAt],
      })),
    );
  }
}
