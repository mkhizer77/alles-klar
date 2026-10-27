import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { HomeIcon, BookIcon, CardsIcon, SearchIcon, TestIcon, SettingsIcon } from './icons';
import { useAuth } from '../lib/auth';
import { useStoreVersion, store } from '../lib/store';

const nav = [
  { to: '/', label: 'Home', icon: HomeIcon, end: true },
  { to: '/learn', label: 'Learn', icon: BookIcon },
  { to: '/vocab', label: 'Vocab', icon: CardsIcon },
  { to: '/concepts', label: 'Concepts', icon: SearchIcon },
  { to: '/tests', label: 'Tests', icon: TestIcon },
];

function Brand() {
  return (
    <div className="flex items-center gap-2.5">
      <img src="/icons/icon.svg" alt="" className="w-8 h-8 rounded-lg" />
      <span className="font-bold text-lg tracking-tight">Alles Klar</span>
    </div>
  );
}

function SyncDot() {
  useStoreVersion();
  const { offline } = useAuth();
  const state = offline ? 'offline' : store.syncState;
  const color = state === 'idle' ? 'bg-success' : state === 'syncing' ? 'bg-accent animate-pulse' : state === 'offline' ? 'bg-muted' : 'bg-danger';
  const label = state === 'idle' ? 'Synced' : state === 'syncing' ? 'Syncing' : state === 'offline' ? 'Offline – saved on this device' : 'Sync error';
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-muted" title={label}>
      <span className={`w-2 h-2 rounded-full ${color}`} /> <span className="hidden sm:inline">{label}</span>
    </span>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  return (
    <div className="min-h-dvh md:flex">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-60 shrink-0 border-r border-line bg-surface sticky top-0 h-dvh p-4">
        <Brand />
        <nav className="mt-6 flex flex-col gap-1">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-xl font-medium ${isActive ? 'bg-info-soft text-primary' : 'text-muted hover:text-text hover:bg-surface-2'}`}
            >
              <Icon size={20} /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          <NavLink to="/settings" className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-xl font-medium ${isActive ? 'bg-info-soft text-primary' : 'text-muted hover:text-text hover:bg-surface-2'}`}>
            <SettingsIcon size={20} /> Settings
          </NavLink>
          <div className="px-3 flex items-center justify-between text-xs text-muted">
            <span className="truncate">{user?.username}</span>
            <SyncDot />
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-20 bg-bg/90 backdrop-blur border-b border-line safe-top">
        <div className="flex items-center justify-between px-4 h-14">
          <Brand />
          <div className="flex items-center gap-3">
            <SyncDot />
            <NavLink to="/settings" className="p-2 -mr-2 rounded-lg text-muted hover:text-text" aria-label="Settings">
              <SettingsIcon size={22} />
            </NavLink>
          </div>
        </div>
      </div>

      <main className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-4 py-5 pb-28 md:pb-10 md:px-8">{children}</div>
      </main>

      {/* Mobile bottom tabs */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-20 bg-surface border-t border-line safe-bottom">
        <div className="grid grid-cols-5 h-16">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `flex flex-col items-center justify-center gap-0.5 text-[11px] font-medium ${isActive ? 'text-primary' : 'text-muted'}`}>
              <Icon size={22} /> {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
