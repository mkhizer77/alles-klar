import { useState, type FormEvent } from 'react';
import { useAuth } from '../lib/auth';
import { Button } from '../components/ui';
import { LockIcon } from '../components/icons';
import { asset } from '../lib/assets';

/**
 * One form for everyone: a free name creates the account, a known name signs
 * in. The same name and password on another device brings the progress along.
 */
export default function Login() {
  const { enter, continueLocally, offline } = useAuth();
  const apiConfigured = Boolean(import.meta.env.VITE_API_URL) || window.location.hostname === 'localhost';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      await enter(username.trim(), password);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const field = 'px-3 py-3 rounded-xl border border-line bg-bg outline-none focus:border-primary text-base';

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <img src={asset('icons/icon.svg')} alt="" className="w-20 h-20 rounded-3xl shadow-lg" />
          <h1 className="mt-4 text-3xl font-black tracking-tight">Alles Klar</h1>
          <p className="text-muted mt-1 text-center">German from A1 to B1, explained in easy English.</p>
        </div>

        <form onSubmit={submit} className="bg-surface border border-line rounded-2xl p-5 grid gap-3">
          <div>
            <h2 className="font-bold text-lg">Sign in</h2>
            <p className="text-sm text-muted mt-0.5">Pick any name and a password. Use the same two on your phone and laptop and your progress follows you.</p>
          </div>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Name</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="username"
              required
              minLength={3}
              maxLength={32}
              pattern="[A-Za-z0-9._\-]+"
              title="3–32 letters, numbers, . _ -"
              className={field}
              placeholder="e.g. anna_k"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Password</span>
            <div className="relative">
              <input
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                minLength={6}
                className={`${field} w-full pr-16`}
                placeholder="at least 6 characters"
              />
              <button type="button" onClick={() => setShow((v) => !v)} className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary px-2 py-1" aria-pressed={show}>
                {show ? 'Hide' : 'Show'}
              </button>
            </div>
          </label>
          {error && <p className="text-sm text-danger">{error}</p>}
          {offline && <p className="text-sm text-muted">You are offline. Signing in needs a connection the first time.</p>}
          <Button type="submit" size="lg" disabled={busy || !apiConfigured}>
            {busy ? '…' : 'Continue'}
          </Button>
          <p className="text-xs text-muted">New name? The account is created for you. Known name? You are signed in and your progress is loaded.</p>
          <p className="text-xs text-muted flex gap-1.5 items-start">
            <LockIcon size={14} className="mt-0.5 shrink-0" />
            <span>No email, no personal data. The server keeps only the name, a password hash and your learning progress. A forgotten password cannot be reset, so pick one you will remember.</span>
          </p>
          {!apiConfigured && <p className="text-xs text-accent">No sync server is configured for this site yet, so accounts are not available. You can still learn on this device.</p>}
        </form>
        <button type="button" onClick={continueLocally} className="mt-4 w-full text-sm text-muted hover:text-text">
          Continue without an account (progress stays on this device)
        </button>
      </div>
    </div>
  );
}
