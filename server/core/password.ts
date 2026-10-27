// Password hashing with PBKDF2-SHA256 through Web Crypto, which exists in both
// Node and Cloudflare Workers. The iteration count is stored with the hash so
// it can be raised later without invalidating existing accounts.

export interface PasswordHasher {
  hash(password: string): Promise<string>;
  verify(password: string, stored: string): Promise<boolean>;
}

const enc = new TextEncoder();

const toB64 = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes));
const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function derive(password: string, salt: Uint8Array, iterations: number): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: salt as BufferSource, iterations }, key, 256);
  return new Uint8Array(bits);
}

export class Pbkdf2Hasher implements PasswordHasher {
  /**
   * @param iterations Cloudflare's free plan allows ~10 ms CPU per request, which
   * caps practical PBKDF2 work; the data protected is language-learning progress,
   * so a moderate count is a reasonable trade. Self-hosted Node can use more.
   */
  private readonly iterations: number;

  constructor(iterations = 20_000) {
    this.iterations = iterations;
  }

  async hash(password: string): Promise<string> {
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const out = await derive(password, salt, this.iterations);
    return `pbkdf2$${this.iterations}$${toB64(salt)}$${toB64(out)}`;
  }

  async verify(password: string, stored: string): Promise<boolean> {
    const [scheme, iter, saltB64, hashB64] = stored.split('$');
    if (scheme !== 'pbkdf2') return false;
    const out = await derive(password, fromB64(saltB64), Number(iter));
    return constantTimeEqual(out, fromB64(hashB64));
  }
}
