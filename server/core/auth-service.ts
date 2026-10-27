import type { PasswordHasher } from './password.ts';
import { SessionRepository, UserRepository } from './repositories.ts';

export class AuthError extends Error {
  readonly status: 400 | 401 | 409 | 429;

  constructor(message: string, status: 400 | 401 | 409 | 429) {
    super(message);
    this.status = status;
  }
}

export interface AuthDeps {
  users: UserRepository;
  sessions: SessionRepository;
  hasher: PasswordHasher;
  now: () => number;
  randomToken: () => string;
  sessionTtlMs: number;
}

const USERNAME = /^[a-zA-Z0-9_.-]{3,32}$/;

/** Everything about accounts and sessions, independent of HTTP. */
export class AuthService {
  private readonly failures = new Map<string, { n: number; reset: number }>();

  private readonly deps: AuthDeps;

  constructor(deps: AuthDeps) {
    this.deps = deps;
  }

  static validUsername(u: unknown): u is string {
    return typeof u === 'string' && USERNAME.test(u);
  }

  static validPassword(p: unknown): p is string {
    return typeof p === 'string' && p.length >= 6 && p.length <= 200;
  }

  async register(username: unknown, password: unknown) {
    if (!AuthService.validUsername(username)) throw new AuthError('Username: 3–32 letters, numbers, . _ -', 400);
    if (!AuthService.validPassword(password)) throw new AuthError('Password: at least 6 characters', 400);
    if (await this.deps.users.findByUsername(username)) throw new AuthError('That username is taken', 409);
    const user = await this.deps.users.create(username, await this.deps.hasher.hash(password), this.deps.now());
    return { username: user.username, token: await this.openSession(user.id) };
  }

  async login(username: unknown, password: unknown, clientKey: string) {
    if (this.tooManyFailures(clientKey)) throw new AuthError('Too many attempts, try again in 15 minutes', 429);
    const user = AuthService.validUsername(username) ? await this.deps.users.findByUsername(username) : undefined;
    const ok = user && typeof password === 'string' && (await this.deps.hasher.verify(password, user.passHash));
    if (!user || !ok) {
      this.recordFailure(clientKey);
      throw new AuthError('Wrong username or password', 401);
    }
    return { username: user.username, token: await this.openSession(user.id) };
  }

  resolve(token: string) {
    return this.deps.sessions.resolve(token, this.deps.now());
  }

  logout(token: string) {
    return this.deps.sessions.delete(token);
  }

  deleteAccount(userId: number) {
    return this.deps.users.delete(userId);
  }

  private async openSession(userId: number) {
    const token = this.deps.randomToken();
    await this.deps.sessions.create(token, userId, this.deps.now(), this.deps.sessionTtlMs);
    return token;
  }

  // A small brake against password guessing: 20 failures per 15 minutes per client.
  private tooManyFailures(key: string) {
    const f = this.failures.get(key);
    return !!f && f.reset > this.deps.now() && f.n >= 20;
  }

  private recordFailure(key: string) {
    const f = this.failures.get(key);
    if (!f || f.reset < this.deps.now()) this.failures.set(key, { n: 1, reset: this.deps.now() + 15 * 60_000 });
    else f.n++;
  }
}
