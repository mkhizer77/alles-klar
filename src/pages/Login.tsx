import { useState, type FormEvent } from 'react';
import { useAuth } from '../lib/auth';
import { Button } from '../components/ui';
import { LockIcon } from '../components/icons';
import { asset } from '../lib/assets';

export default function Login() {
  const { login, register, continueLocally, offline } = useAuth();
  const apiConfigured = Boolean(import.meta.env.VITE_API_URL) || window.location.hostname === 'localhost';
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      if (mode === 'login') await login(username.trim(), password);
      else await register(username.trim(), password);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img src={asset('icons/icon.svg')} alt="" className="w-20 h-20 rounded-3xl shadow-lg" />
          <h1 className="mt-4 text-3xl font-black tracking-tight">Alles Klar</h1>
          <p className="text-muted mt-1 text-center">German from A1 to B1, explained in easy English.</p>
        </div>

        <form onSubmit={submit} className="bg-surface border border-line rounded-2xl p-5 grid gap-3">
          <div className="grid grid-cols-2 bg-surface-2 rounded-xl p-1 text-sm font-semibold">
            <button type="button" onClick={() => setMode('login')} className={`py-2 rounded-lg ${mode === 'login' ? 'bg-surface shadow-sm' : 'text-muted'}`}>Sign in</button>
            <button type="button" onClick={() => setMode('register')} className={`py-2 rounded-lg ${mode === 'register' ? 'bg-surface shadow-sm' : 'text-muted'}`}>Create account</button>
          </div>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Username</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} autoCapitalize="off" autoCorrect="off" autoComplete="username" required className="px-3 py-2.5 rounded-xl border border-line bg-bg outline-none focus:border-primary" placeholder="any name you like" />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} required minLength={6} className="px-3 py-2.5 rounded-xl border border-line bg-bg outline-none focus:border-primary" placeholder={mode === 'register' ? 'at least 6 characters' : ''} />
          </label>
          {error && <p className="text-sm text-danger">{error}</p>}
          {offline && <p className="text-sm text-muted">You are offline. Sign in needs a connection the first time.</p>}
          <Button type="submit" size="lg" disabled={busy}>
            {busy ? '…' : mode === 'login' ? 'Sign in' : 'Create account'}
          </Button>
          <p className="text-xs text-muted flex gap-1.5 items-start mt-1">
            <LockIcon size={14} className="mt-0.5 shrink-0" />
            <span>No email, no personal data. The account only stores a username, a password hash, and your learning progress.</span>
          </p>
          {!apiConfigured && <p className="text-xs text-accent">No sync server is configured for this site, so accounts are not available yet.</p>}
        </form>
        <button type="button" onClick={continueLocally} className="mt-4 w-full text-sm text-muted hover:text-text">
          Continue without an account (progress stays on this device)
        </button>
      </div>
    </div>
  );
}
