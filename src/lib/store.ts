// Offline-first progress store. Every value lives in memory + localStorage and
// is synced to the server as {key, value, updatedAt}; last write wins.
import { useSyncExternalStore } from 'react';

interface Entry {
  value: unknown;
  updatedAt: number;
}

const LS_KEY = 'ak:kv';
export const LS_USER = 'ak:user';

class Store {
  private entries = new Map<string, Entry>();
  private listeners = new Set<() => void>();
  private dirty = new Set<string>();
  private pushTimer: ReturnType<typeof setTimeout> | null = null;
  version = 0;
  syncState: 'idle' | 'syncing' | 'offline' | 'error' = 'idle';
  signedIn = false;

  constructor() {
    this.loadLocal();
    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.push());
    }
  }

  private loadLocal() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const obj = JSON.parse(raw) as { entries: Record<string, Entry>; dirty: string[] };
        for (const [k, v] of Object.entries(obj.entries || {})) this.entries.set(k, v);
        for (const k of obj.dirty || []) this.dirty.add(k);
      }
    } catch {
      /* ignore */
    }
  }

  private saveLocal() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify({ entries: Object.fromEntries(this.entries), dirty: [...this.dirty] }));
    } catch {
      /* ignore */
    }
  }

  private emit() {
    this.version++;
    for (const l of this.listeners) l();
  }

  subscribe = (fn: () => void) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };

  getRaw(key: string): unknown {
    return this.entries.get(key)?.value;
  }

  get<T>(key: string, fallback: T): T {
    const e = this.entries.get(key);
    return e === undefined ? fallback : (e.value as T);
  }

  set(key: string, value: unknown) {
    this.entries.set(key, { value, updatedAt: Date.now() });
    this.dirty.add(key);
    this.saveLocal();
    this.emit();
    this.schedulePush();
  }

  update<T>(key: string, fallback: T, fn: (current: T) => T) {
    this.set(key, fn(this.get(key, fallback)));
  }

  keysWithPrefix(prefix: string): string[] {
    return [...this.entries.keys()].filter((k) => k.startsWith(prefix));
  }

  reset() {
    this.entries.clear();
    this.dirty.clear();
    this.saveLocal();
    this.emit();
  }

  private schedulePush() {
    if (!this.signedIn) return;
    if (this.pushTimer) clearTimeout(this.pushTimer);
    this.pushTimer = setTimeout(() => this.push(), 1500);
  }

  private merge(entries: { key: string; value: string; updatedAt: number }[]) {
    let changed = false;
    for (const e of entries) {
      const local = this.entries.get(e.key);
      if (!local || (local.updatedAt < e.updatedAt && !this.dirty.has(e.key))) {
        try {
          this.entries.set(e.key, { value: JSON.parse(e.value), updatedAt: e.updatedAt });
          changed = true;
        } catch {
          /* skip bad entry */
        }
      }
    }
    if (changed) {
      this.saveLocal();
      this.emit();
    }
  }

  async pull() {
    if (!this.signedIn || !navigator.onLine) return;
    this.syncState = 'syncing';
    this.emit();
    try {
      const res = await fetch('/api/kv', { credentials: 'same-origin' });
      if (res.ok) {
        const data = (await res.json()) as { entries: { key: string; value: string; updatedAt: number }[] };
        this.merge(data.entries);
        this.syncState = 'idle';
      } else this.syncState = 'error';
    } catch {
      this.syncState = 'offline';
    }
    this.emit();
    if (this.dirty.size) await this.push();
  }

  async push() {
    if (!this.signedIn) return;
    if (!navigator.onLine) {
      this.syncState = 'offline';
      this.emit();
      return;
    }
    if (!this.dirty.size) return;
    const sending = [...this.dirty].map((key) => ({ key, value: JSON.stringify(this.entries.get(key)!.value), updatedAt: this.entries.get(key)!.updatedAt }));
    this.syncState = 'syncing';
    this.emit();
    try {
      const res = await fetch('/api/kv', { method: 'PUT', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ entries: sending }) });
      if (res.ok) {
        for (const s of sending) if (this.entries.get(s.key)?.updatedAt === s.updatedAt) this.dirty.delete(s.key);
        const data = (await res.json()) as { entries: { key: string; value: string; updatedAt: number }[] };
        this.merge(data.entries);
        this.saveLocal();
        this.syncState = 'idle';
      } else if (res.status === 401) {
        this.signedIn = false;
        this.syncState = 'error';
      } else this.syncState = 'error';
    } catch {
      this.syncState = 'offline';
    }
    this.emit();
  }
}

export const store = new Store();

export function useStoreValue<T>(key: string, fallback: T): T {
  return useSyncExternalStore(store.subscribe, () => (store.getRaw(key) === undefined ? fallback : (store.getRaw(key) as T)));
}

export function useStoreVersion(): number {
  return useSyncExternalStore(store.subscribe, () => store.version);
}
