import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { store, useStoreValue } from '../lib/store';
import { keys, DEFAULT_SETTINGS, type Settings } from '../lib/models';
import { Button, Card, Chip, PageHeader } from '../components/ui';

const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export default function SettingsPage() {
  const { user, logout, deleteAccount } = useAuth();
  const stored = useStoreValue<Partial<Settings>>(keys.settings, DEFAULT_SETTINGS);
  const s: Settings = { ...DEFAULT_SETTINGS, ...stored };
  const set = (patch: Partial<Settings>) => store.set(keys.settings, { ...s, ...patch });
  const [confirmDelete, setConfirmDelete] = useState(false);

  const toggleDay = (d: number) => {
    const days = s.reviewDays.includes(d) ? s.reviewDays.filter((x) => x !== d) : [...s.reviewDays, d].sort();
    set({ reviewDays: days });
  };

  return (
    <div className="grid gap-4">
      <PageHeader title="Settings" />

      <Card>
        <h2 className="font-bold mb-1">Vocabulary</h2>
        <p className="text-sm text-muted mb-3">How many new words to introduce per day.</p>
        <div className="flex gap-2 flex-wrap">
          {[5, 10, 15, 20, 30].map((n) => (
            <Chip key={n} active={s.newWordsPerDay === n} onClick={() => set({ newWordsPerDay: n })}>
              {n} / day
            </Chip>
          ))}
        </div>

        <p className="text-sm text-muted mt-5 mb-2">Review days. Cards still come due on other days; the home screen just will not nag you.</p>
        <div className="flex gap-1.5">
          {dayNames.map((n, d) => (
            <button key={d} type="button" onClick={() => toggleDay(d)} className={`w-10 h-10 rounded-xl text-sm font-semibold ${s.reviewDays.includes(d) ? 'bg-primary text-on-primary' : 'bg-surface-2 text-muted'}`}>
              {n}
            </button>
          ))}
        </div>
        <div className="mt-2 flex gap-2 text-xs">
          <button type="button" className="text-primary font-semibold" onClick={() => set({ reviewDays: [0, 1, 2, 3, 4, 5, 6] })}>Daily</button>
          <button type="button" className="text-primary font-semibold" onClick={() => set({ reviewDays: [1, 3, 5] })}>Mon / Wed / Fri</button>
          <button type="button" className="text-primary font-semibold" onClick={() => set({ reviewDays: [2, 6] })}>Tue / Sat</button>
        </div>

        <p className="text-sm text-muted mt-5 mb-2">How you are quizzed.</p>
        <div className="flex gap-2 flex-wrap">
          {(
            [
              ['mixed', 'Mixed'],
              ['flashcard', 'Flashcards'],
              ['mc', 'Multiple choice'],
              ['type', 'Type the word'],
            ] as const
          ).map(([v, l]) => (
            <Chip key={v} active={s.vocabMode === v} onClick={() => set({ vocabMode: v })}>
              {l}
            </Chip>
          ))}
        </div>
        <p className="text-xs text-muted mt-2">Mixed: new words as flashcards, reviews rotate through flashcard, choice and typing. Typing is the strongest test of recall.</p>

        <p className="text-sm text-muted mt-5 mb-2">Scheduling method.</p>
        <div className="flex gap-2 flex-wrap">
          <Chip active={s.scheduler === 'sm2'} onClick={() => set({ scheduler: 'sm2' })}>Spaced repetition (SM-2)</Chip>
          <Chip active={s.scheduler === 'leitner'} onClick={() => set({ scheduler: 'leitner' })}>Leitner boxes</Chip>
        </div>
        <p className="text-xs text-muted mt-2">
          SM-2 (the Anki method) grows the gap between reviews based on how easy each card felt. Leitner uses five boxes with fixed gaps of 1, 2, 4, 8 and 16 days; a wrong answer sends the card back to box 1. Both use the same cards, so you can switch any time.
        </p>
      </Card>

      <Card>
        <h2 className="font-bold mb-1">Exercises</h2>
        <p className="text-sm text-muted mb-3">Default feedback timing. You can change it before each practice set too; tests are always at the end.</p>
        <div className="flex gap-2 flex-wrap">
          <Chip active={s.feedback === 'instant'} onClick={() => set({ feedback: 'instant' })}>After each answer</Chip>
          <Chip active={s.feedback === 'end'} onClick={() => set({ feedback: 'end' })}>Report at the end</Chip>
        </div>
      </Card>

      <Card>
        <h2 className="font-bold mb-1">Sound and appearance</h2>
        <label className="flex items-center justify-between py-2">
          <span className="text-sm">Read new words aloud automatically</span>
          <input type="checkbox" checked={s.autoSpeak} onChange={(e) => set({ autoSpeak: e.target.checked })} className="w-5 h-5 accent-primary" />
        </label>
        <p className="text-xs text-muted mb-3">Uses the free German voice built into your phone or computer.</p>
        <p className="text-sm text-muted mb-2">Speech speed (also for listening exercises).</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {(
            [
              [0.7, 'Slow'],
              [0.9, 'Normal'],
              [1.05, 'Fast'],
            ] as const
          ).map(([rate, label]) => (
            <Chip key={rate} active={s.speechRate === rate} onClick={() => set({ speechRate: rate })}>
              {label}
            </Chip>
          ))}
        </div>
        <p className="text-sm text-muted mb-2">Theme.</p>
        <div className="flex gap-2 flex-wrap">
          {(['system', 'light', 'dark'] as const).map((t) => (
            <Chip key={t} active={s.theme === t} onClick={() => set({ theme: t })}>
              {t[0].toUpperCase() + t.slice(1)}
            </Chip>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="font-bold mb-1">Account</h2>
        {user?.local ? (
          <p className="text-sm text-muted">No account. Your progress is stored only in this browser. Create an account to keep it safe and use it on other devices; what you have done so far will be uploaded.</p>
        ) : (
          <p className="text-sm text-muted">
            Signed in as <span className="font-semibold text-text">{user?.username}</span>. Stored on the server: this username, a password hash, and your progress (words, exercise results, test scores, these settings). Nothing else.
          </p>
        )}
        <div className="mt-3 flex gap-2 flex-wrap">
          <Button variant="secondary" onClick={() => logout()}>{user?.local ? 'Sign in or create account' : 'Sign out'}</Button>
          {!confirmDelete ? (
            <Button variant="ghost" className="!text-danger" onClick={() => setConfirmDelete(true)}>{user?.local ? 'Delete all progress on this device' : 'Delete account and all progress'}</Button>
          ) : (
            <Button variant="danger" onClick={() => deleteAccount()}>Yes, delete everything</Button>
          )}
        </div>
      </Card>

      <p className="text-xs text-muted text-center">
        Install on your phone: open this site in Safari or Chrome, then “Add to Home Screen”. It works offline; progress syncs when you are back online.
      </p>
    </div>
  );
}
