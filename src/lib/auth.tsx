import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { store, LS_USER } from './store';

interface User {
  username: string;
}

interface AuthCtx {
  user: User | null;
  loading: boolean;
  offline: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>(null!);

async function post(path: string, body?: unknown) {
  const res = await fetch(path, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || 'Something went wrong');
  return data;
}

function adoptUser(username: string) {
  const previous = localStorage.getItem(LS_USER);
  if (previous && previous !== username) store.reset();
  localStorage.setItem(LS_USER, username);
  store.signedIn = true;
  void store.pull();
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const on = () => setOffline(false);
    const off = () => setOffline(true);
    window.addEventListener('online', on);
    window.addEventListener('offline', off);
    return () => {
      window.removeEventListener('online', on);
      window.removeEventListener('offline', off);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const remembered = localStorage.getItem(LS_USER);
      try {
        const res = await fetch('/api/auth/me', { credentials: 'same-origin' });
        const data = (await res.json()) as { user: User | null };
        if (cancelled) return;
        if (data.user) {
          adoptUser(data.user.username);
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        // offline: continue with the remembered user and local data
        if (!cancelled && remembered) {
          store.signedIn = true;
          setUser({ username: remembered });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const value: AuthCtx = {
    user,
    loading,
    offline,
    async login(username, password) {
      const data = (await post('/api/auth/login', { username, password })) as User;
      adoptUser(data.username);
      setUser(data);
    },
    async register(username, password) {
      const data = (await post('/api/auth/register', { username, password })) as User;
      adoptUser(data.username);
      setUser(data);
    },
    async logout() {
      await store.push();
      await post('/api/auth/logout').catch(() => {});
      store.signedIn = false;
      setUser(null);
    },
    async deleteAccount() {
      const res = await fetch('/api/auth/account', { method: 'DELETE', credentials: 'same-origin' });
      if (!res.ok) throw new Error('Could not delete the account');
      store.signedIn = false;
      store.reset();
      localStorage.removeItem(LS_USER);
      setUser(null);
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
