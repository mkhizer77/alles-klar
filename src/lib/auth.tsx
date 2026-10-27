import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { store, LS_USER } from './store';
import { api } from './api';
import { ApiSyncBackend } from './sync';

/** Marker for "progress lives only on this device". */
export const LOCAL_USER = '__local__';

interface User {
  username: string;
  /** true when no account: nothing leaves the device */
  local: boolean;
}

interface AuthCtx {
  user: User | null;
  loading: boolean;
  offline: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  continueLocally: () => void;
  logout: () => Promise<void>;
  deleteAccount: () => Promise<void>;
}

const Ctx = createContext<AuthCtx>(null!);
const backend = new ApiSyncBackend(api);

function remembered(): string | null {
  try {
    return localStorage.getItem(LS_USER);
  } catch {
    return null;
  }
}

function remember(username: string | null) {
  try {
    if (username) localStorage.setItem(LS_USER, username);
    else localStorage.removeItem(LS_USER);
  } catch {
    /* ignore */
  }
}

/** Switch the store to an account. Device-only progress is kept and uploaded; another account's progress is cleared. */
function adoptAccount(username: string, token: string) {
  const previous = remembered();
  if (previous === LOCAL_USER) store.markAllDirty();
  else if (previous && previous !== username) store.reset();
  remember(username);
  api.setToken(token);
  store.setBackend(backend);
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
      const name = remembered();
      if (name === LOCAL_USER) {
        setUser({ username: name, local: true });
        setLoading(false);
        return;
      }
      if (!api.token) {
        setLoading(false);
        return;
      }
      try {
        const { user: me } = await api.me();
        if (cancelled) return;
        if (me) {
          remember(me.username);
          store.setBackend(backend);
          setUser({ username: me.username, local: false });
        } else {
          api.setToken(null);
        }
      } catch {
        // offline: continue with the remembered account and local data
        if (!cancelled && name) {
          store.setBackend(backend);
          setUser({ username: name, local: false });
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
      const data = await api.login(username, password);
      adoptAccount(data.username, data.token);
      setUser({ username: data.username, local: false });
    },
    async register(username, password) {
      const data = await api.register(username, password);
      adoptAccount(data.username, data.token);
      setUser({ username: data.username, local: false });
    },
    continueLocally() {
      remember(LOCAL_USER);
      store.setBackend(null);
      setUser({ username: LOCAL_USER, local: true });
    },
    async logout() {
      if (user && !user.local) {
        await store.push();
        await api.logout().catch(() => {});
        api.setToken(null);
      }
      store.setBackend(null);
      remember(null);
      setUser(null);
    },
    async deleteAccount() {
      if (user && !user.local) await api.deleteAccount();
      api.setToken(null);
      store.setBackend(null);
      store.reset();
      remember(null);
      setUser(null);
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
