import { useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { vocabSets, wordsForLevel, words as allWords } from '../content';
import type { Word, Level } from '../content/types';
import { store } from '../lib/store';
import { keys } from '../lib/models';
import { getSettings, recordActivity } from '../lib/progress';
import { newCard, schedule, isDue, type Card as SrsCard, type Grade } from '../lib/srs';
import { todayStr } from '../lib/date';
import { shuffle } from '../lib/check';
import { normalizeAnswer } from '../lib/check';
import { speak, canSpeak } from '../lib/tts';
import { Button, ProgressBar, Badge } from '../components/ui';
import { SpeakerIcon, XIcon, CheckIcon } from '../components/icons';

type Mode = 'flashcard' | 'mc' | 'type';
interface Item {
  word: Word;
  isNew: boolean;
  mode: Mode;
}

function pickMode(setting: ReturnType<typeof getSettings>['vocabMode'], isNew: boolean, n: number): Mode {
  if (setting !== 'mixed') return setting;
  if (isNew) return 'flashcard';
  return n % 3 === 0 ? 'flashcard' : n % 3 === 1 ? 'mc' : 'type';
}

function buildQueue(setId: string | null, level: Level | null): Item[] {
  const settings = getSettings();
  const today = todayStr();
  let pool: Word[];
  if (setId) pool = vocabSets.find((s) => s.id === setId)?.words ?? [];
  else if (level) pool = wordsForLevel(level);
  else pool = (['A1', 'A2', 'B1'] as Level[]).flatMap(wordsForLevel);

  if (setId) {
    // practise a specific list: all of its words, due or not
    return shuffle(pool).map((word, n) => {
      const card = store.get<SrsCard | null>(keys.word(word.id), null);
      return { word, isNew: !card, mode: pickMode(settings.vocabMode, !card, n) };
    });
  }

  const due: Word[] = [];
  const fresh: Word[] = [];
  let newToday = 0;
  for (const w of pool) {
    const card = store.get<SrsCard | null>(keys.word(w.id), null);
    if (!card) fresh.push(w);
    else {
      if (card.introduced === today) newToday++;
      if (isDue(card, today)) due.push(w);
    }
  }
  due.sort((a, b) => (store.get<SrsCard>(keys.word(a.id), newCard()).due < store.get<SrsCard>(keys.word(b.id), newCard()).due ? -1 : 1));
  const newCount = Math.max(0, settings.newWordsPerDay - newToday);
  const newWords = fresh.slice(0, newCount);
  const reviews = shuffle(due.slice(0, 60));
  // interleave: 3 reviews, then 1 new
  const items: Item[] = [];
  let r = 0;
  let n = 0;
  let k = 0;
  while (r < reviews.length || n < newWords.length) {
    for (let i = 0; i < 3 && r < reviews.length; i++) items.push({ word: reviews[r++], isNew: false, mode: pickMode(settings.vocabMode, false, k++) });
    if (n < newWords.length) items.push({ word: newWords[n++], isNew: true, mode: pickMode(settings.vocabMode, true, k++) });
  }
  return items;
}

export default function VocabSession() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const setId = params.get('set');
  const level = params.get('level') as Level | null;
  const settings = useMemo(() => getSettings(), []);
  const [queue, setQueue] = useState<Item[]>(() => buildQueue(setId, level));
  const [i, setI] = useState(0);
  const [stats, setStats] = useState({ seen: 0, right: 0, newWords: 0 });
  const requeued = useRef(new Set<string>());
  const item = queue[i];

  const grade = (g: Grade) => {
    const today = todayStr();
    const existing = store.get<SrsCard | null>(keys.word(item.word.id), null);
    const card = existing ?? newCard(today);
    store.set(keys.word(item.word.id), schedule(card, g, settings.scheduler, today));
    recordActivity('words');
    setStats((s) => ({ seen: s.seen + 1, right: s.right + (g >= 2 ? 1 : 0), newWords: s.newWords + (item.isNew ? 1 : 0) }));
    let next = queue;
    if (g === 0 && !requeued.current.has(item.word.id)) {
      requeued.current.add(item.word.id);
      next = [...queue, { ...item, isNew: false, mode: 'flashcard' }];
      setQueue(next);
    }
    setI(i + 1);
  };

  if (queue.length === 0) {
    return (
      <div className="text-center pt-16 max-w-sm mx-auto">
        <div className="text-5xl">🎉</div>
        <h1 className="mt-3 text-xl font-bold">Nothing to do right now</h1>
        <p className="text-muted mt-1">No cards are due and you have reached today's new-word limit. Raise it in Settings or practise a specific list.</p>
        <div className="mt-6 grid gap-2">
          <Link to="/vocab" className="text-primary font-semibold">Browse word lists</Link>
          <Link to="/settings" className="text-muted">Settings</Link>
        </div>
      </div>
    );
  }

  if (!item) {
    const pct = stats.seen ? Math.round((stats.right / stats.seen) * 100) : 0;
    return (
      <div className="text-center pt-10 max-w-sm mx-auto">
        <div className="text-5xl font-black text-success">{pct}%</div>
        <h1 className="mt-2 text-xl font-bold">Session done</h1>
        <p className="text-muted mt-1">
          {stats.seen} cards · {stats.newWords} new words · {stats.right} known
        </p>
        <Button size="lg" full className="mt-8" onClick={() => navigate('/vocab')}>
          Done
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[70dvh]">
      <div className="flex items-center gap-3 mb-5">
        <button type="button" onClick={() => navigate('/vocab')} className="p-1 -ml-1 text-muted" aria-label="Exit"><XIcon /></button>
        <ProgressBar value={i} max={queue.length} className="flex-1" />
        <span className="text-sm text-muted tabular-nums">{i + 1}/{queue.length}</span>
      </div>
      <div className="mb-3 flex gap-2">
        {item.isNew && <Badge tone="accent">New word</Badge>}
        <Badge tone="info">{item.mode === 'flashcard' ? 'Flashcard' : item.mode === 'mc' ? 'Choose' : 'Type'}</Badge>
      </div>
      <div key={`${item.word.id}-${i}`} className="animate-pop flex-1 flex flex-col">
        {item.mode === 'flashcard' && <Flashcard item={item} onGrade={grade} autoSpeak={settings.autoSpeak} />}
        {item.mode === 'mc' && <McCard item={item} onGrade={grade} autoSpeak={settings.autoSpeak} />}
        {item.mode === 'type' && <TypeCard item={item} onGrade={grade} />}
      </div>
    </div>
  );
}

function WordFront({ w, autoSpeak }: { w: Word; autoSpeak: boolean }) {
  const text = w.article ? `${w.article} ${w.de}` : w.de;
  useMemo(() => {
    if (autoSpeak) setTimeout(() => speak(text), 150);
  }, [text, autoSpeak]);
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">
        {w.article && <span className="text-muted font-medium">{w.article} </span>}
        {w.de}
      </div>
      <div className="text-sm text-muted mt-1">{posLabel(w)}</div>
      {canSpeak() && (
        <button type="button" onClick={() => speak(text)} className="mt-3 inline-flex items-center gap-1.5 text-primary font-medium" aria-label="Listen">
          <SpeakerIcon /> Listen
        </button>
      )}
    </div>
  );
}

function WordBack({ w }: { w: Word }) {
  return (
    <div className="mt-5 pt-5 border-t border-line text-center animate-pop">
      <div className="text-2xl font-semibold">{w.en}</div>
      {w.plural && <div className="text-sm text-muted mt-1">Plural: {w.plural}</div>}
      {w.forms && (
        <div className="text-sm text-muted mt-1">
          er/sie {w.forms.er} · {w.forms.prat} · {w.forms.perfekt}
        </div>
      )}
      <div className="mt-3 p-3 rounded-xl bg-surface-2 text-left">
        <div className="flex items-start gap-2">
          {canSpeak() && (
            <button type="button" onClick={() => speak(w.example.de)} className="text-primary mt-0.5 shrink-0" aria-label="Listen"><SpeakerIcon size={16} /></button>
          )}
          <div>
            <div className="font-medium">{w.example.de}</div>
            <div className="text-sm text-muted">{w.example.en}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function posLabel(w: Word) {
  return { noun: 'noun', verb: 'verb', adj: 'adjective', adv: 'adverb', prep: 'preposition', conj: 'conjunction', pron: 'pronoun', num: 'number', phrase: 'phrase', other: '' }[w.pos];
}

function GradeButtons({ onGrade, scheduler }: { onGrade: (g: Grade) => void; scheduler: 'sm2' | 'leitner' }) {
  const labels = scheduler === 'leitner' ? ['Wrong', 'Hard', 'Right', 'Easy'] : ['Again', 'Hard', 'Good', 'Easy'];
  const tones = ['bg-danger-soft text-danger', 'bg-accent/15 text-accent', 'bg-success-soft text-success', 'bg-info-soft text-primary'];
  return (
    <div className="grid grid-cols-4 gap-2 mt-auto pt-6">
      {labels.map((l, g) => (
        <button key={l} type="button" onClick={() => onGrade(g as Grade)} className={`py-3 rounded-xl font-bold ${tones[g]} active:scale-[0.97]`}>
          {l}
        </button>
      ))}
    </div>
  );
}

function Flashcard({ item, onGrade, autoSpeak }: { item: Item; onGrade: (g: Grade) => void; autoSpeak: boolean }) {
  const [flipped, setFlipped] = useState(false);
  const settings = getSettings();
  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-surface border border-line rounded-3xl p-6 shadow-sm">
        <WordFront w={item.word} autoSpeak={autoSpeak} />
        {flipped && <WordBack w={item.word} />}
      </div>
      {flipped ? (
        <GradeButtons onGrade={onGrade} scheduler={settings.scheduler} />
      ) : (
        <Button size="lg" full className="mt-auto" onClick={() => setFlipped(true)} autoFocus>
          Show answer
        </Button>
      )}
    </div>
  );
}

function McCard({ item, onGrade, autoSpeak }: { item: Item; onGrade: (g: Grade) => void; autoSpeak: boolean }) {
  const options = useMemo(() => {
    const pool = wordsForLevel(item.word.level).filter((w) => w.id !== item.word.id && w.en !== item.word.en);
    const same = shuffle(pool.filter((w) => w.pos === item.word.pos)).slice(0, 3);
    const extra = shuffle(pool).filter((w) => !same.includes(w)).slice(0, 3 - same.length);
    return shuffle([item.word, ...same, ...extra]).map((w) => w.en);
  }, [item.word]);
  const [chosen, setChosen] = useState<string | null>(null);
  const ok = chosen === item.word.en;
  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-surface border border-line rounded-3xl p-6 shadow-sm">
        <WordFront w={item.word} autoSpeak={autoSpeak} />
        {chosen && <WordBack w={item.word} />}
      </div>
      <div className="grid gap-2 mt-4">
        {options.map((o) => {
          let cls = 'border-line bg-surface';
          if (chosen) cls = o === item.word.en ? 'border-success bg-success-soft' : o === chosen ? 'border-danger bg-danger-soft' : 'border-line opacity-60';
          return (
            <button key={o} type="button" disabled={!!chosen} onClick={() => setChosen(o)} className={`px-4 py-3 rounded-xl border-2 text-left font-medium ${cls}`}>
              {o}
            </button>
          );
        })}
      </div>
      {chosen && (
        <Button size="lg" full className="mt-auto pt-3" variant={ok ? 'success' : 'danger'} onClick={() => onGrade(ok ? 2 : 0)} autoFocus>
          {ok ? 'Correct · Next' : 'Wrong · Next'}
        </Button>
      )}
    </div>
  );
}

function TypeCard({ item, onGrade }: { item: Item; onGrade: (g: Grade) => void }) {
  const [v, setV] = useState('');
  const [checked, setChecked] = useState(false);
  const w = item.word;
  const accepted = [w.de, w.article ? `${w.article} ${w.de}` : '', ...Object.values(allWords).filter((x) => x.en === w.en && x.id !== w.id).map((x) => x.de)].filter(Boolean);
  const ok = checked && accepted.some((a) => normalizeAnswer(a) === normalizeAnswer(v));
  const insert = (ch: string) => setV((s) => s + ch);
  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-surface border border-line rounded-3xl p-6 shadow-sm text-center">
        <div className="text-sm text-muted">{posLabel(w)}{w.pos === 'noun' ? ' · with article' : ''}</div>
        <div className="text-3xl font-bold mt-1">{w.en}</div>
        <input
          value={v}
          disabled={checked}
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="auf Deutsch …"
          onChange={(e) => setV(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (!checked) setChecked(true);
              else onGrade(ok ? 2 : 0);
            }
          }}
          className={`mt-5 w-full text-center text-xl px-3 py-3 rounded-xl border-2 bg-bg outline-none ${checked ? (ok ? 'border-success text-success' : 'border-danger text-danger') : 'border-line focus:border-primary'}`}
        />
        {!checked && (
          <div className="flex justify-center gap-1.5 mt-2">
            {['ä', 'ö', 'ü', 'ß'].map((ch) => (
              <button key={ch} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(ch)} className="w-9 h-9 rounded-lg bg-surface-2 font-semibold">{ch}</button>
            ))}
          </div>
        )}
        {checked && (
          <div className="mt-3">
            <div className={`inline-flex items-center gap-1 font-bold ${ok ? 'text-success' : 'text-danger'}`}>{ok ? <CheckIcon /> : <XIcon />} {ok ? 'Richtig' : 'Not quite'}</div>
            <WordBack w={w} />
          </div>
        )}
      </div>
      {checked ? (
        <Button size="lg" full className="mt-auto" variant={ok ? 'success' : 'danger'} onClick={() => onGrade(ok ? 2 : 0)} autoFocus>
          {ok ? 'Next' : 'Got it · Next'}
        </Button>
      ) : (
        <Button size="lg" full className="mt-auto" disabled={!v.trim()} onClick={() => setChecked(true)}>
          Check
        </Button>
      )}
    </div>
  );
}
