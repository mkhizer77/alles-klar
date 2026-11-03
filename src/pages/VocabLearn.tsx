import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import type { Level, Word } from '../content/types';
import { useStoreVersion } from '../lib/store';
import { getSettings } from '../lib/progress';
import { deckWords, deckTitle, deckStats, getPosition, setPosition, introduce, setOfWord } from '../lib/vocab';
import { WordFront, WordDetails } from '../components/WordCard';
import { ProgressBar, LinkButton, Button } from '../components/ui';
import { XIcon, ChevronLeft, ChevronRight } from '../components/icons';

/** 'left': the front card is thrown away to the left (next word). 'right': the previous card is pulled back in from the left. */
type Dir = 'left' | 'right';

const SLOP = 8;
const SETTLE_MS = 220;
/** px/ms: a quick flick commits even when the finger did not travel the full distance */
const FLICK = 0.5;
const PREV_OFFSET = 'calc(-100% - 24px)';

interface Drag {
  x: number;
  y: number;
  locked: boolean;
  lastX: number;
  lastT: number;
  prevX: number;
  prevT: number;
}

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
  const iRef = useRef(i);
  iRef.current = i;
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [settling, setSettling] = useState<Dir | null>(null);
  const [prevShown, setPrevShown] = useState(false);
  const [fresh, setFresh] = useState(true); // first card pops in; later ones arrive by gesture
  const pending = useRef<Dir | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = useRef<Drag | null>(null);
  const deckRef = useRef<HTMLDivElement>(null);

  const word: Word | undefined = words[i];
  const atEnd = i >= words.length;
  const hasNext = i < words.length; // the last word can still be swiped away to reach the end card
  const hasPrev = i > 0;

  // Looking at a card starts the word and remembers the position.
  useEffect(() => {
    if (word) {
      introduce(word);
      setPosition(setId, level, i);
    }
  }, [word, i, setId, level]);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    },
    [],
  );

  /** Apply a committed swipe now (normally when its animation ends, earlier when a new gesture starts). */
  const finishSettle = useCallback(() => {
    if (!timer.current) return;
    clearTimeout(timer.current);
    timer.current = null;
    const dir = pending.current;
    pending.current = null;
    if (dir) {
      iRef.current += dir === 'left' ? 1 : -1;
      setI(iRef.current);
    }
    setSettling(null);
    setPrevShown(false);
    setDx(0);
    setFresh(false);
  }, []);

  const commit = useCallback(
    (dir: Dir) => {
      finishSettle();
      const cur = iRef.current;
      if (dir === 'left' ? cur >= words.length : cur <= 0) {
        setDx(0);
        return;
      }
      if (dir === 'right') setPrevShown(true);
      pending.current = dir;
      setSettling(dir);
      timer.current = setTimeout(finishSettle, SETTLE_MS);
    },
    [finishSettle, words.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') commit('left');
      else if (e.key === 'ArrowLeft') commit('right');
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [commit]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    finishSettle();
    const now = performance.now();
    drag.current = { x: e.clientX, y: e.clientY, locked: false, lastX: e.clientX, lastT: now, prevX: e.clientX, prevT: now };
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const mx = e.clientX - d.x;
    const my = e.clientY - d.y;
    if (!d.locked) {
      if (Math.abs(my) > SLOP && Math.abs(my) > Math.abs(mx)) {
        drag.current = null; // the finger is scrolling the page
        return;
      }
      if (Math.abs(mx) < SLOP) return;
      d.locked = true;
      setDragging(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        /* capture is a nicety; the gesture works without it */
      }
    }
    d.prevX = d.lastX;
    d.prevT = d.lastT;
    d.lastX = e.clientX;
    d.lastT = performance.now();
    setDx(mx);
    if (mx > 0 && iRef.current > 0) {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      setPrevShown(true);
    }
  };
  const onPointerEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    drag.current = null;
    if (!d?.locked) return;
    setDragging(false);
    const mx = e.clientX - d.x;
    const dt = performance.now() - d.prevT;
    const v = dt > 0 ? (e.clientX - d.prevX) / dt : 0;
    const threshold = Math.min(100, (deckRef.current?.offsetWidth ?? 320) * 0.25);
    const flick = Math.abs(mx) > 30 && Math.abs(v) > FLICK && Math.sign(v) === Math.sign(mx);
    if (mx < 0 && (mx < -threshold || flick)) commit('left');
    else if (mx > 0 && (mx > threshold || flick)) commit('right');
    else {
      setDx(0);
      hideTimer.current = setTimeout(() => setPrevShown(false), SETTLE_MS);
    }
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

  const width = deckRef.current?.offsetWidth ?? 320;
  const ease = dragging ? 'none' : `transform ${SETTLE_MS}ms cubic-bezier(.2,.8,.3,1), opacity ${SETTLE_MS}ms ease`;
  // how far the gesture has progressed, 0–1, in whichever direction it is going
  const pullLeft = settling === 'left' ? 1 : Math.min(1, Math.max(0, -dx) / 120);
  const pullRight = settling === 'right' ? 1 : Math.min(1, Math.max(0, dx) / width);
  const pullingPrev = hasPrev && (dx > 0 || settling === 'right');

  let frontStyle: CSSProperties;
  if (settling === 'left') frontStyle = { transform: 'translateX(-130%) rotate(-14deg)', opacity: 0, transition: ease };
  else if (pullingPrev) frontStyle = { transform: `scale(${1 - 0.06 * pullRight}) translateY(${14 * pullRight}px)`, transition: ease };
  else if ((dx > 0 && !hasPrev) || (dx < 0 && !hasNext)) frontStyle = { transform: `translateX(${dx / 3}px)`, transition: ease }; // nothing there: resist
  else frontStyle = { transform: `translateX(${dx}px) rotate(${dx / 22}deg)`, transition: ease };

  const prevStyle: CSSProperties =
    settling === 'right' || !prevShown || dx <= 0
      ? { transform: `translateX(${settling === 'right' ? '0' : PREV_OFFSET}) rotate(${settling === 'right' ? 0 : -8}deg)`, transition: ease }
      : { transform: `translateX(calc(${PREV_OFFSET} + ${dx}px)) rotate(${-8 * (1 - pullRight)}deg)`, transition: 'none' };

  const backWord = words[i + 1];
  const prevWord = words[i - 1];

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

      <div
        ref={deckRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        className={`relative flex-1 min-h-[24rem] max-h-[36rem] select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ touchAction: 'pan-y', WebkitTouchCallout: 'none' }}
      >
        {/* the next card peeks out from behind and rises into place as the front one is thrown away */}
        {!atEnd && (
          <div aria-hidden className="absolute inset-0 rounded-3xl border border-line bg-surface shadow-sm overflow-hidden" style={{ transform: `scale(${0.94 + 0.06 * pullLeft}) translateY(${14 - 14 * pullLeft}px)`, transition: ease }}>
            {backWord && (
              <div className="p-6 h-full flex flex-col opacity-40">
                <CardBody w={backWord} autoSpeak={false} />
              </div>
            )}
          </div>
        )}

        <div
          key={i}
          className={`absolute inset-0 rounded-3xl border border-line bg-surface shadow-md p-6 flex flex-col overflow-y-auto ${fresh ? 'animate-pop' : ''}`}
          style={frontStyle}
          aria-live="polite"
        >
          {word ? (
            <>
              <div className="text-xs text-muted mb-4 flex items-center justify-between">
                <span className="truncate">{labelFor(word, setId)}</span>
                {stats.learned > 0 && <span className="shrink-0">{stats.learned} learned</span>}
              </div>
              <CardBody w={word} autoSpeak={settings.autoSpeak && !settling} />
            </>
          ) : (
            <EndCard title={title} count={words.length} setId={setId} level={level} onRestart={() => { setPosition(setId, level, 0); iRef.current = 0; setI(0); setFresh(true); }} />
          )}
          {dx < -SLOP && hasNext && <Corner side="left">Next</Corner>}
        </div>

        {/* the previous card is pulled back in from the left, on top of everything */}
        {prevShown && prevWord && (
          <div aria-hidden className="absolute inset-0 rounded-3xl border border-line bg-surface shadow-lg p-6 flex flex-col overflow-hidden" style={prevStyle}>
            <div className="text-xs text-muted mb-4 flex items-center justify-between">
              <span className="truncate">{labelFor(prevWord, setId)}</span>
            </div>
            <CardBody w={prevWord} autoSpeak={false} />
            <Corner side="right">Back</Corner>
          </div>
        )}
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
