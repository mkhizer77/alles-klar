import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import type { Level, Word } from '../content/types';
import { useStoreVersion } from '../lib/store';
import { getSettings } from '../lib/progress';
import { deckWords, deckTitle, deckStats, getPosition, setPosition, introduce, setOfWord } from '../lib/vocab';
import { WordFront, WordDetails } from '../components/WordCard';
import { ProgressBar, LinkButton, Button } from '../components/ui';
import { XIcon, ChevronLeft, ChevronRight } from '../components/icons';

type Dir = 'left' | 'right';
/** How the front card arrived: lifted from the back of the stack (after a swipe left) or back from the left edge (after a swipe right). */
type Enter = 'none' | 'from-left' | null;

const SLOP = 8;
const OUT_MS = 220;

export default function VocabLearn() {
  useStoreVersion();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const settings = getSettings();
  const setId = params.get('set');
  const level = ((params.get('level') as Level | null) ?? settings.vocabLevel) as Level;
  const words = useMemo(() => deckWords(setId, level), [setId, level]);
  const title = deckTitle(setId, level);
  const stats = deckStats(words);

  const [i, setI] = useState(() => getPosition(setId, level, words.length));
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState<Dir | null>(null);
  const [enter, setEnter] = useState<Enter>(null);
  const start = useRef<{ x: number; y: number; locked: boolean } | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const atEnd = i >= words.length;
  const word: Word | undefined = words[i];
  const hasNext = i < words.length; // the last card can still be swiped to the end card
  const hasPrev = i > 0;

  // Looking at a card starts the word and remembers the position.
  useEffect(() => {
    if (word) {
      introduce(word);
      setPosition(setId, level, i);
    }
  }, [word, i, setId, level]);

  const go = useCallback(
    (dir: Dir) => {
      if (leaving) return;
      if (dir === 'left') {
        if (!hasNext) return;
        setLeaving('left');
        setTimeout(() => {
          setI((n) => n + 1);
          setDx(0);
          setLeaving(null);
          setEnter('none');
        }, OUT_MS);
      } else {
        if (!hasPrev) return;
        setI((n) => n - 1);
        setDx(0);
        setEnter('from-left');
      }
    },
    [leaving, hasNext, hasPrev],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go('left');
      else if (e.key === 'ArrowLeft') go('right');
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (leaving || e.button !== 0) return;
    start.current = { x: e.clientX, y: e.clientY, locked: false };
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = start.current;
    if (!s) return;
    const mx = e.clientX - s.x;
    const my = e.clientY - s.y;
    if (!s.locked) {
      if (Math.abs(my) > SLOP && Math.abs(my) > Math.abs(mx)) {
        start.current = null; // the finger is scrolling the page
        return;
      }
      if (Math.abs(mx) < SLOP) return;
      s.locked = true;
      setDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    setDx(mx);
  };
  const onPointerEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = start.current;
    start.current = null;
    if (!s?.locked) return;
    setDragging(false);
    const mx = e.clientX - s.x;
    const threshold = Math.min(110, (cardRef.current?.offsetWidth ?? 320) * 0.28);
    if (mx < -threshold && hasNext) go('left');
    else if (mx > threshold && hasPrev) go('right');
    else setDx(0);
  };

  if (words.length === 0) {
    return (
      <div className="text-center pt-16 max-w-sm mx-auto">
        <h1 className="text-xl font-bold">No words here yet</h1>
        <p className="text-muted mt-1">This list is empty. Add a word or choose another level.</p>
        <LinkButton to="/vocab" className="mt-6">Back to vocabulary</LinkButton>
      </div>
    );
  }

  const frontStyle: CSSProperties = leaving
    ? { transform: `translateX(${leaving === 'left' ? '-130%' : '130%'}) rotate(${leaving === 'left' ? -14 : 14}deg)`, opacity: 0, transition: `transform ${OUT_MS}ms ease-in, opacity ${OUT_MS}ms ease-in` }
    : { transform: `translateX(${dx}px) rotate(${dx / 22}deg)`, transition: dragging ? 'none' : 'transform 220ms cubic-bezier(.2,.8,.3,1.1)' };
  const pull = Math.min(1, Math.abs(dx) / 120);
  const nextHint = dx < -SLOP && hasNext;
  const prevHint = dx > SLOP && hasPrev;
  const backWord = words[i + 1];

  return (
    <div className="flex flex-col min-h-[75dvh]">
      <div className="flex items-center gap-3 mb-3">
        <button type="button" onClick={() => navigate('/vocab')} className="p-1 -ml-1 text-muted" aria-label="Back to vocabulary">
          <XIcon />
        </button>
        <ProgressBar value={Math.min(i + 1, words.length)} max={words.length} className="flex-1" />
        <span className="text-sm text-muted tabular-nums">
          {Math.min(i + 1, words.length)}/{words.length}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm text-muted mb-4">
        <span className="font-medium text-text truncate">{title}</span>
        <span className="shrink-0">
          {stats.newToday} new today{settings.newWordsPerDay ? ` · goal ${settings.newWordsPerDay}` : ''}
        </span>
      </div>

      <div className="relative flex-1 min-h-[24rem] max-h-[36rem] select-none" style={{ touchAction: 'pan-y' }}>
        {/* the next card peeks out from behind and rises into place as the front one leaves */}
        {!atEnd && (
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl border border-line bg-surface shadow-sm overflow-hidden"
            style={{ transform: leaving === 'left' ? 'none' : `scale(${0.94 + 0.06 * pull}) translateY(${14 - 14 * pull}px)`, transition: dragging ? 'none' : `transform ${OUT_MS}ms ease` }}
          >
            {backWord && (
              <div className="p-6 h-full flex flex-col opacity-40">
                <CardBody w={backWord} autoSpeak={false} />
              </div>
            )}
          </div>
        )}

        <div
          key={i}
          ref={cardRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          onAnimationEnd={() => setEnter(null)}
          className={`absolute inset-0 rounded-3xl border border-line bg-surface shadow-md p-6 flex flex-col overflow-y-auto ${dragging ? 'cursor-grabbing' : 'cursor-grab'} ${enter === 'from-left' ? 'deck-from-left' : enter === null ? 'animate-pop' : ''}`}
          style={frontStyle}
          aria-live="polite"
        >
          {word ? (
            <>
              <div className="text-xs text-muted mb-4 flex items-center justify-between">
                <span className="truncate">{labelFor(word, setId)}</span>
                {stats.learned > 0 && <span className="shrink-0">{stats.learned} learned</span>}
              </div>
              <CardBody w={word} autoSpeak={settings.autoSpeak && !leaving} />
            </>
          ) : (
            <EndCard title={title} count={words.length} setId={setId} level={level} onRestart={() => { setPosition(setId, level, 0); setI(0); setEnter('from-left'); }} />
          )}
          {nextHint && <Corner side="left">Next</Corner>}
          {prevHint && <Corner side="right">Back</Corner>}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-muted">
        <span className="inline-flex items-center gap-1">
          <ChevronLeft size={14} /> swipe right for the previous word
        </span>
        <span className="inline-flex items-center gap-1">
          swipe left for the next <ChevronRight size={14} />
        </span>
      </div>
    </div>
  );
}

function labelFor(w: Word, setId: string | null) {
  const set = setOfWord(w);
  if (set && !setId) return `Unit ${set.unit} · ${set.theme}`;
  if (set) return `Unit ${set.unit}`;
  return w.theme;
}

function CardBody({ w, autoSpeak }: { w: Word; autoSpeak: boolean }) {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <WordFront w={w} autoSpeak={autoSpeak} />
      <div className="my-4 border-t border-line" />
      <WordDetails w={w} />
    </div>
  );
}

function Corner({ side, children }: { side: 'left' | 'right'; children: string }) {
  return (
    <div className={`absolute top-4 ${side === 'left' ? 'left-4 -rotate-6' : 'right-4 rotate-6'} px-2 py-0.5 rounded-md border-2 border-primary text-primary font-bold text-sm uppercase tracking-wide`}>
      {children}
    </div>
  );
}

function EndCard({ title, count, setId, level, onRestart }: { title: string; count: number; setId: string | null; level: Level; onRestart: () => void }) {
  const revise = setId ? `/vocab/revise?set=${setId}` : `/vocab/revise?level=${level}`;
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="text-5xl">🎉</div>
      <h2 className="mt-3 text-xl font-bold">That was every word</h2>
      <p className="text-muted mt-1">
        {count} words in {title}. Revise them until they stick, or pick a harder level.
      </p>
      <div className="mt-6 grid gap-2 w-full max-w-xs">
        <LinkButton to={revise}>Revise these words</LinkButton>
        <Button variant="secondary" onClick={onRestart}>
          Start again from the first word
        </Button>
        <Link to="/vocab" className="text-sm text-muted mt-1">
          Change level
        </Link>
      </div>
    </div>
  );
}
