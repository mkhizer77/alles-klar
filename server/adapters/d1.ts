import type { Database, Statement } from '../core/database.ts';

/** Minimal shape of Cloudflare's D1 binding that this adapter uses. */
export interface D1Like {
  prepare(sql: string): {
    bind(...params: unknown[]): {
      first<T>(): Promise<T | null>;
      all<T>(): Promise<{ results: T[] }>;
      run(): Promise<unknown>;
    };
  };
  batch(statements: unknown[]): Promise<unknown>;
}

/** Database adapter for Cloudflare D1 (SQLite at the edge, free tier). */
export class D1Database implements Database {
  private readonly d1: D1Like;

  constructor(d1: D1Like) {
    this.d1 = d1;
  }

  async get<T>(sql: string, params: unknown[] = []) {
    return (await this.d1.prepare(sql).bind(...params).first<T>()) ?? undefined;
  }

  async all<T>(sql: string, params: unknown[] = []) {
    return (await this.d1.prepare(sql).bind(...params).all<T>()).results;
  }

  async run(sql: string, params: unknown[] = []) {
    await this.d1.prepare(sql).bind(...params).run();
  }

  async batch(statements: Statement[]) {
    if (!statements.length) return;
    await this.d1.batch(statements.map((s) => this.d1.prepare(s.sql).bind(...(s.params ?? []))));
  }
}
