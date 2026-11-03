import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import type { Level, Word } from '../content/types';
import { store } from '../lib/store';
import { keys } from '../lib/models';
import { getSettings, recordActivity } from '../lib/progress';
import { newCard, schedule, type Grade } from '../lib/srs';
import { todayStr } from '../lib/date';
import { reviseQueue, deckTitle } from '../lib/vocab';
import { WordFront, WordDetails } from '../components/WordCard';
import { Button, LinkButton, ProgressBar } from '../components/ui';
import { XIcon } from '../components/icons';

export default function VocabRevise() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const settings = useMemo(() => getSettings(), []);
  const setId = params.get('set');
  const level = ((params.get('level') as Level | null) ?? settings.vocabLevel) as Level;
  const title = deckTitle(setId, level);
  const [queue, setQueue] = useState<Word[]>(() => reviseQueue(setId, level));
  const [i, setI] = useState(0);
  const [stats, setStats] = useState({ seen: 0, right: 0 });
  const requeued = useRef(new Set<string>());
  const word = queue[i];

  const grade = (g: Grade) => {
    const today = todayStr();
    const card = store.get<ReturnType<typeof newCard> | null>(keys.word(word.id), null) ?? newCard(today);
    store.set(keys.word(word.id), schedule(card, g, settings.scheduler, today));
    recordActivity('words');
    setStats((s) => ({ seen: s.seen + 1, right: s.right + (g >= 2 ? 1 : 0) }));
    if (g === 0 && !requeued.current.has(word.id)) {
      requeued.current.add(word.id);
      setQueue((q) => [...q, word]); // a missed word comes back once at the end
    }
    setI(i + 1);
  };

  if (queue.length === 0) {
    return (
      <div className="text-center pt-16 max-w-sm mx-auto">
        <h1 className="text-xl font-bold">Nothing to revise yet</h1>
        <p className="text-muted mt-1">Learn a few words at {title} first. Every card you swipe through joins your revision.</p>
        <div className="mt-6 grid gap-2">
          <LinkButton to={setId ? `/vocab/learn?set=${setId}` : `/vocab/learn?level=${level}`}>Learn new words</LinkButton>
          <Link to="/vocab" className="text-muted text-sm">Back to vocabulary</Link>
        </div>
      </div>
    );
  }

  if (!word) {
    const pct = stats.seen ? Math.round((stats.right / stats.seen) * 100) : 0;
    return (
      <div className="text-center pt-10 max-w-sm mx-auto">
        <div className="text-5xl font-black text-success">{pct}%</div>
        <h1 className="mt-2 text-xl font-bold">Revision done</h1>
        <p className="text-muted mt-1">
          {stats.seen} cards · {stats.right} known · {stats.seen - stats.right} to see again
        </p>
        <div className="mt-8 grid gap-2">
          <Button
            size="lg"
            full
            onClick={() => {
              requeued.current.clear();
              setQueue(reviseQueue(setId, level));
              setI(0);
              setStats({ seen: 0, right: 0 });
            }}
          >
            Revise more
          </Button>
          <Button size="lg" full variant="secondary" onClick={() => navigate('/vocab')}>
            Done
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <button type="button" onClick={() => navigate('/vocab')} className="p-1 -ml-1 text-muted" aria-label="Exit">
          <XIcon />
        </button>
        <ProgressBar value={i} max={queue.length} className="flex-1" />
        <span className="text-sm text-muted tabular-nums">
          {i + 1}/{queue.length}
        </span>
      </div>
      <div className="text-sm text-muted mb-4">Revising {title}</div>
      <div key={`${word.id}-${i}`} className="animate-pop flex flex-col">
        <RevealCard word={word} onGrade={grade} autoSpeak={settings.autoSpeak} scheduler={settings.scheduler} />
      </div>
    </div>
  );
}

function RevealCard({ word, onGrade, autoSpeak, scheduler }: { word: Word; onGrade: (g: Grade) => void; autoSpeak: boolean; scheduler: 'sm2' | 'leitner' }) {
  const [revealed, setRevealed] = useState(false);
  const labels = scheduler === 'leitner' ? ['Wrong', 'Hard', 'Right', 'Easy'] : ['Again', 'Hard', 'Good', 'Easy'];
  const tones = ['bg-danger-soft text-danger', 'bg-accent/15 text-accent', 'bg-success-soft text-success', 'bg-info-soft text-primary'];
  return (
    <div className="flex-1 flex flex-col">
      <div className="rounded-3xl border border-line bg-surface shadow-md p-6 min-h-[18rem] flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <WordFront w={word} autoSpeak={autoSpeak} />
          {revealed ? (
            <>
              <div className="my-4 border-t border-line" />
              <WordDetails w={word} className="animate-pop" />
            </>
          ) : (
            <p className="mt-6 text-center text-sm text-muted">Say the meaning to yourself, then check.</p>
          )}
        </div>
        {!revealed && (
          <Button size="lg" full className="mt-5" onClick={() => setRevealed(true)} autoFocus>
            Show meaning
          </Button>
        )}
      </div>
      {revealed ? (
        <div className="grid grid-cols-4 gap-2 pt-4">
          {labels.map((l, g) => (
            <button key={l} type="button" onClick={() => onGrade(g as Grade)} className={`py-3 rounded-xl font-bold ${tones[g]} active:scale-[0.97]`}>
              {l}
            </button>
          ))}
        </div>
      ) : (
        <p className="pt-4 text-center text-xs text-muted">Did you know it? You rate yourself after the reveal.</p>
      )}
    </div>
  );
}
