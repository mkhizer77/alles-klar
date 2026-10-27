import { useState } from 'react';
import { Link } from 'react-router';
import { vocabSets, levels } from '../content';
import type { Word } from '../content/types';
import { store, useStoreVersion } from '../lib/store';
import { getSettings, vocabStats } from '../lib/progress';
import { keys } from '../lib/models';
import type { Card as SrsCard } from '../lib/srs';
import { todayStr } from '../lib/date';
import { speak, canSpeak } from '../lib/tts';
import { Badge, Card, LinkButton, LevelPill, PageHeader, ProgressBar } from '../components/ui';
import { SpeakerIcon, ChevronRight } from '../components/icons';

export default function Vocab() {
  useStoreVersion();
  const settings = getSettings();
  const vs = vocabStats();
  const newLeft = Math.max(0, settings.newWordsPerDay - vs.newToday);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <PageHeader title="Vocabulary" subtitle="A few new words a day, reviewed just before you would forget them." />
      <Card className="mb-4">
        <div className="grid grid-cols-3 text-center">
          <div>
            <div className="text-2xl font-bold">{vs.due}</div>
            <div className="text-xs text-muted">due now</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{newLeft}</div>
            <div className="text-xs text-muted">new today</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{vs.introduced}</div>
            <div className="text-xs text-muted">of {vs.total} started</div>
          </div>
        </div>
        <ProgressBar value={vs.introduced} max={vs.total} className="mt-3" />
        <div className="mt-4 flex gap-2 flex-wrap">
          <LinkButton to="/vocab/session" size="lg">
            Start session
          </LinkButton>
          <LinkButton to="/settings" variant="secondary" size="lg">
            {settings.newWordsPerDay} new/day · {settings.vocabMode}
          </LinkButton>
        </div>
      </Card>

      <h2 className="font-bold text-lg mb-2">Word lists</h2>
      <p className="text-sm text-muted mb-3">Browse by theme, or practise one list on its own.</p>
      <div className="grid gap-4">
        {levels.map((l) => {
          const sets = vocabSets.filter((s) => s.level === l);
          if (!sets.length) return null;
          return (
            <section key={l}>
              <div className="flex items-center gap-2 mb-2">
                <LevelPill level={l} />
                <span className="text-sm text-muted">{sets.reduce((n, s) => n + s.words.length, 0)} words</span>
              </div>
              <div className="grid gap-1.5">
                {sets.map((s) => {
                  const started = s.words.filter((w) => store.getRaw(keys.word(w.id))).length;
                  const isOpen = open === s.id;
                  return (
                    <div key={s.id} className="rounded-xl bg-surface border border-line">
                      <button type="button" onClick={() => setOpen(isOpen ? null : s.id)} className="w-full flex items-center gap-3 px-3 py-2.5 text-left">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{s.theme}</div>
                          <div className="text-xs text-muted">
                            Unit {s.unit} · {started}/{s.words.length} started
                          </div>
                        </div>
                        <ChevronRight className={`text-muted transition ${isOpen ? 'rotate-90' : ''}`} size={18} />
                      </button>
                      {isOpen && (
                        <div className="px-3 pb-3">
                          <Link to={`/vocab/session?set=${s.id}`} className="inline-block mb-2 text-sm font-semibold text-primary">
                            Practise this list →
                          </Link>
                          <ul className="grid gap-1">
                            {s.words.map((w) => (
                              <WordRow key={w.id} w={w} />
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function WordRow({ w }: { w: Word }) {
  const card = store.get<SrsCard | null>(keys.word(w.id), null);
  const today = todayStr();
  const status = !card ? null : card.due <= today ? <Badge tone="accent">due</Badge> : <Badge tone="success">box {card.box}</Badge>;
  return (
    <li className="flex items-center gap-2 py-1.5 border-b border-line last:border-0 text-sm">
      {canSpeak() && (
        <button type="button" onClick={() => speak(w.article ? `${w.article} ${w.de}` : w.de)} className="text-primary shrink-0" aria-label="Listen">
          <SpeakerIcon size={16} />
        </button>
      )}
      <span className="font-medium">
        {w.article && <span className="text-muted">{w.article} </span>}
        {w.de}
        {w.plural && <span className="text-muted font-normal">, {w.plural.replace(/^die /, '')}</span>}
      </span>
      <span className="text-muted flex-1 truncate">– {w.en}</span>
      {status}
    </li>
  );
}
