// HTTP client for the Alles Klar API. The API may live on another origin
// (GitHub Pages app + Cloudflare Worker API), so auth is a Bearer token.

export interface KvEntryDto {
  key: string;
  value: string;
  updatedAt: number;
}

const TOKEN_KEY = 'ak:token';

export class ApiError extends Error {
  readonly status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  get token(): string | null {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  }

  setToken(token: string | null) {
    try {
      if (token) localStorage.setItem(TOKEN_KEY, token);
      else localStorage.removeItem(TOKEN_KEY);
    } catch {
      /* storage unavailable */
    }
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = { ...(init.headers as Record<string, string>) };
    if (init.body) headers['content-type'] = 'application/json';
    const token = this.token;
    if (token) headers.authorization = `Bearer ${token}`;
    const res = await fetch(this.baseUrl + path, { ...init, headers });
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    if (!res.ok) throw new ApiError(data.error || `Request failed (${res.status})`, res.status);
    return data as T;
  }

  register(username: string, password: string) {
    return this.request<{ username: string; token: string }>('/api/auth/register', { method: 'POST', body: JSON.stringify({ username, password }) });
  }

  login(username: string, password: string) {
    return this.request<{ username: string; token: string }>('/api/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) });
  }

  me() {
    return this.request<{ user: { username: string } | null }>('/api/auth/me');
  }

  logout() {
    return this.request<{ ok: true }>('/api/auth/logout', { method: 'POST', body: '{}' });
  }

  deleteAccount() {
    return this.request<{ ok: true }>('/api/auth/account', { method: 'DELETE' });
  }

  pullKv() {
    return this.request<{ entries: KvEntryDto[] }>('/api/kv');
  }

  pushKv(entries: KvEntryDto[]) {
    return this.request<{ entries: KvEntryDto[] }>('/api/kv', { method: 'PUT', body: JSON.stringify({ entries }) });
  }
}

export const api = new ApiClient(import.meta.env.VITE_API_URL ?? '');
