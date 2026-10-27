import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import type { Database, Statement } from '../core/database.ts';

/** Database adapter for local development and self-hosting on Node 24+. */
export class NodeSqliteDatabase implements Database {
  private readonly db: DatabaseSync;

  constructor(path: string) {
    if (path !== ':memory:') mkdirSync(dirname(path), { recursive: true });
    this.db = new DatabaseSync(path);
    this.db.exec('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;');
  }

  async get<T>(sql: string, params: unknown[] = []) {
    return this.db.prepare(sql).get(...(params as never[])) as T | undefined;
  }

  async all<T>(sql: string, params: unknown[] = []) {
    return this.db.prepare(sql).all(...(params as never[])) as T[];
  }

  async run(sql: string, params: unknown[] = []) {
    this.db.prepare(sql).run(...(params as never[]));
  }

  async batch(statements: Statement[]) {
    this.db.exec('BEGIN');
    try {
      for (const s of statements) this.db.prepare(s.sql).run(...((s.params ?? []) as never[]));
      this.db.exec('COMMIT');
    } catch (e) {
      this.db.exec('ROLLBACK');
      throw e;
    }
  }
}
