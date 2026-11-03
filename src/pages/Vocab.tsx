import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { vocabSets, levels } from '../content';
import type { Word, Level, PartOfSpeech } from '../content/types';
import { store, useStoreVersion } from '../lib/store';
import { getSettings } from '../lib/progress';
import { keys } from '../lib/models';
import type { Card as SrsCard } from '../lib/srs';
import { todayStr } from '../lib/date';
import { speak, canSpeak } from '../lib/tts';
import { addMyWord, findExisting, isMyWord, removeMyWord, searchWords, useMyWords, MY_WORDS_SET, type NewWord } from '../lib/my-words';
import { deckWords, deckStats, getPosition, LEVEL_INFO } from '../lib/vocab';
import { Badge, Button, Card, Chip, LevelPill, PageHeader, ProgressBar } from '../components/ui';
import { SpeakerIcon, ChevronRight, SearchIcon, PlusIcon, TrashIcon, XIcon, CardsIcon, CheckIcon } from '../components/icons';

const POS: { value: PartOfSpeech; label: string }[] = [
  { value: 'noun', label: 'noun' },
  { value: 'verb', label: 'verb' },
  { value: 'adj', label: 'adjective' },
  { value: 'adv', label: 'adverb' },
  { value: 'phrase', label: 'phrase' },
  { value: 'prep', label: 'preposition' },
  { value: 'conj', label: 'conjunction' },
  { value: 'pron', label: 'pronoun' },
  { value: 'num', label: 'number' },
  { value: 'other', label: 'other' },
];

export default function Vocab() {
  useStoreVersion();
  const settings = getSettings();
  const level = settings.vocabLevel;
  const setLevel = (l: Level) => store.set(keys.settings, { ...settings, vocabLevel: l });
  const [open, setOpen] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const [adding, setAdding] = useState(false);
  const [prefill, setPrefill] = useState('');
  const mine = useMyWords();
  const hits = useMemo(() => searchWords(q), [q, mine]);
  const searching = q.trim().length > 0;

  const startAdd = (word = '') => {
    setPrefill(word);
    setAdding(true);
  };

  return (
    <div>
      <PageHeader title="Vocabulary" subtitle="Pick a level. Learn new words by swiping, then revise the ones you know." />

      <div className="grid grid-cols-3 gap-2 mb-3" role="radiogroup" aria-label="Level">
        {levels.map((l) => {
          const active = l === level;
          return (
            <button
              key={l}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setLevel(l)}
              className={`rounded-2xl border-2 px-3 py-2.5 text-left transition ${active ? 'border-primary bg-info-soft' : 'border-line bg-surface hover:border-muted'}`}
            >
              <LevelPill level={l} />
              <div className={`mt-1 font-semibold text-sm truncate ${active ? 'text-primary' : ''}`}>{LEVEL_INFO[l].name}</div>
              <div className="hidden sm:block text-xs text-muted mt-0.5">{LEVEL_INFO[l].hint}</div>
            </button>
          );
        })}
      </div>

      <LevelOptions level={level} />

      <h2 className="font-bold text-lg mb-2 mt-6">All words</h2>
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a word in German or English"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Search words"
            className="w-full pl-10 pr-9 py-3 rounded-2xl border border-line bg-surface outline-none focus:border-primary text-base"
          />
          {searching && (
            <button type="button" onClick={() => setQ('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-text" aria-label="Clear search">
              <XIcon size={18} />
            </button>
          )}
        </div>
        <Button variant="secondary" onClick={() => (adding ? setAdding(false) : startAdd())} className="shrink-0 px-3" aria-expanded={adding} aria-label="Add a word">
          <PlusIcon size={18} /> <span className="hidden sm:inline">Add word</span>
        </Button>
      </div>

      {adding && <AddWordForm initialDe={prefill} onClose={() => setAdding(false)} onAdded={() => { setAdding(false); setQ(''); }} />}

      {searching ? (
        <section className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-lg">Results</h2>
            <span className="text-sm text-muted">{hits.length === 60 ? '60+' : hits.length} found</span>
          </div>
          {hits.length === 0 ? (
            <Card>
              <p className="text-muted">Nothing found for “{q.trim()}”.</p>
              <Button className="mt-3" onClick={() => startAdd(q.trim())}>
                <PlusIcon size={18} /> Add “{q.trim()}” as a new word
              </Button>
            </Card>
          ) : (
            <ul className="grid gap-1 rounded-xl bg-surface border border-line px-3">
              {hits.map((w) => (
                <WordRow key={w.id} w={w} showLevel />
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
          <MyWordsSection words={mine} onAdd={() => startAdd()} />

          <h2 className="font-bold text-lg mb-2">Word lists</h2>
          <p className="text-sm text-muted mb-3">Browse by theme, or learn and revise one list on its own.</p>
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
                              <ListActions setId={s.id} />
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
        </>
      )}
    </div>
  );
}

/** The two ways in at the chosen level: continue the learn deck, or revise what is already started. */
function LevelOptions({ level }: { level: Level }) {
  const words = deckWords(null, level);
  const st = deckStats(words);
  const pos = getPosition(null, level, words.length);
  const started = st.learned > 0;
  const next = words[pos];
  const nextLabel = next ? (next.article ? `${next.article} ${next.de}` : next.de) : '';
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      <Link to={`/vocab/learn?level=${level}`} className="group rounded-2xl p-4 bg-gradient-to-br from-primary to-primary-strong text-on-primary shadow-sm active:scale-[0.99] transition">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide opacity-80">
          <CardsIcon size={16} /> Learn new
        </div>
        <div className="mt-2 text-xl font-bold">{started ? 'Continue' : 'Start'} at word {Math.min(pos + 1, words.length)} of {words.length}</div>
        <div className="text-sm opacity-85 mt-0.5 truncate">{next ? `Next up: ${nextLabel}` : 'Every word seen – swipe back through them'}</div>
        <ProgressBar value={st.learned} max={st.total} color="bg-white/90" className="mt-3 !bg-white/25" />
        <div className="mt-1.5 text-xs opacity-80">{st.learned} of {st.total} words learned · {st.newToday} today</div>
      </Link>
      <Link
        to={`/vocab/revise?level=${level}`}
        aria-disabled={!started}
        className={`rounded-2xl p-4 border-2 bg-surface shadow-sm active:scale-[0.99] transition ${started ? 'border-line hover:border-primary' : 'border-dashed border-line opacity-70'}`}
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted">
          <CheckIcon size={16} /> Revise
        </div>
        <div className="mt-2 text-xl font-bold">{started ? (st.due > 0 ? `${st.due} due now` : 'Nothing due') : 'Learn first'}</div>
        <div className="text-sm text-muted mt-0.5">
          {started ? `Tap to see the meaning, then rate yourself. ${st.learned} words to pick from.` : 'Words you swipe through in Learn show up here for testing.'}
        </div>
      </Link>
    </div>
  );
}

function ListActions({ setId }: { setId: string }) {
  return (
    <div className="flex gap-4 mb-2 text-sm font-semibold">
      <Link to={`/vocab/learn?set=${setId}`} className="text-primary">Learn this list →</Link>
      <Link to={`/vocab/revise?set=${setId}`} className="text-primary">Revise this list →</Link>
    </div>
  );
}

function MyWordsSection({ words, onAdd }: { words: Word[]; onAdd: () => void }) {
  const [open, setOpen] = useState(false);
  const started = words.filter((w) => store.getRaw(keys.word(w.id))).length;
  return (
    <section className="mb-6">
      <h2 className="font-bold text-lg mb-2">My words</h2>
      {words.length === 0 ? (
        <Card>
          <p className="text-sm text-muted">Words you add here join your daily sessions like any other card.</p>
          <Button variant="secondary" size="sm" className="mt-3" onClick={onAdd}>
            <PlusIcon size={16} /> Add your first word
          </Button>
        </Card>
      ) : (
        <div className="rounded-xl bg-surface border border-line">
          <button type="button" onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 px-3 py-2.5 text-left">
            <div className="flex-1 min-w-0">
              <div className="font-medium">Your own list</div>
              <div className="text-xs text-muted">
                {words.length} {words.length === 1 ? 'word' : 'words'} · {started}/{words.length} started
              </div>
            </div>
            <ChevronRight className={`text-muted transition ${open ? 'rotate-90' : ''}`} size={18} />
          </button>
          {open && (
            <div className="px-3 pb-3">
              <ListActions setId={MY_WORDS_SET} />
              <ul className="grid gap-1">
                {words.map((w) => (
                  <WordRow key={w.id} w={w} showLevel removable />
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function AddWordForm({ initialDe, onClose, onAdded }: { initialDe: string; onClose: () => void; onAdded: () => void }) {
  const [de, setDe] = useState(initialDe);
  const [en, setEn] = useState('');
  const [article, setArticle] = useState<'' | 'der' | 'die' | 'das'>('');
  const [plural, setPlural] = useState('');
  const [pos, setPos] = useState<PartOfSpeech>('noun');
  const [level, setLevel] = useState<Level>(() => defaultLevel());
  const [exampleDe, setExampleDe] = useState('');
  const [exampleEn, setExampleEn] = useState('');
  const [saved, setSaved] = useState<string | null>(null);
  const existing = useMemo(() => (de.trim() ? findExisting(de, article || undefined) : undefined), [de, article]);
  const valid = de.trim().length > 0 && en.trim().length > 0;
  const insert = (setter: (fn: (s: string) => string) => void, ch: string) => setter((s) => s + ch);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const input: NewWord = { de, en, pos, level, exampleDe, exampleEn };
    if (pos === 'noun') {
      if (article) input.article = article;
      input.plural = plural;
    }
    const w = addMyWord(input);
    setSaved(w.article ? `${w.article} ${w.de}` : w.de);
    setDe('');
    setEn('');
    setPlural('');
    setArticle('');
    setExampleDe('');
    setExampleEn('');
  };

  const field = 'w-full px-3 py-2.5 rounded-xl border border-line bg-bg outline-none focus:border-primary';
  return (
    <Card as="section" className="mb-4">
      <form onSubmit={submit} className="grid gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg">Add a word</h2>
          <button type="button" onClick={saved ? onAdded : onClose} className="p-1 text-muted hover:text-text" aria-label="Close">
            <XIcon size={20} />
          </button>
        </div>
        {saved && (
          <div className="text-sm rounded-xl bg-success-soft text-success px-3 py-2">
            Added <strong>{saved}</strong>. It will come up as a new word in your next session.
          </div>
        )}
        <div className="flex gap-2 flex-wrap">
          {POS.map((p) => (
            <Chip key={p.value} active={pos === p.value} onClick={() => setPos(p.value)}>
              {p.label}
            </Chip>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-1 text-sm">
            <label htmlFor="add-de" className="text-muted">German</label>
            <div className="flex gap-2">
              {pos === 'noun' && (
                <select value={article} onChange={(e) => setArticle(e.target.value as typeof article)} className="px-2 py-2.5 rounded-xl border border-line bg-bg outline-none focus:border-primary" aria-label="Article">
                  <option value="">der/die/das</option>
                  <option value="der">der</option>
                  <option value="die">die</option>
                  <option value="das">das</option>
                </select>
              )}
              <input id="add-de" value={de} onChange={(e) => setDe(e.target.value)} required autoFocus autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder={pos === 'noun' ? 'Haus' : pos === 'verb' ? 'machen' : '…'} className={field} />
            </div>
            <div className="flex gap-1.5">
              {['ä', 'ö', 'ü', 'ß'].map((ch) => (
                <button key={ch} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(setDe, ch)} className="w-8 h-8 rounded-lg bg-surface-2 font-semibold">
                  {ch}
                </button>
              ))}
            </div>
          </div>
          <label className="grid gap-1 text-sm content-start">
            <span className="text-muted">English</span>
            <input value={en} onChange={(e) => setEn(e.target.value)} required autoCapitalize="off" placeholder={pos === 'noun' ? 'house' : pos === 'verb' ? 'to do, to make' : '…'} className={field} />
          </label>
          {pos === 'noun' && (
            <label className="grid gap-1 text-sm content-start">
              <span className="text-muted">Plural (optional)</span>
              <input value={plural} onChange={(e) => setPlural(e.target.value)} autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder="Häuser" className={field} />
            </label>
          )}
          <div className="grid gap-1 text-sm content-start">
            <span className="text-muted">Level</span>
            <div className="flex gap-2">
              {levels.map((l) => (
                <Chip key={l} active={level === l} onClick={() => setLevel(l)}>
                  {l}
                </Chip>
              ))}
            </div>
          </div>
          <label className="grid gap-1 text-sm content-start">
            <span className="text-muted">Example sentence (optional)</span>
            <input value={exampleDe} onChange={(e) => setExampleDe(e.target.value)} autoCapitalize="sentences" placeholder="Das Haus ist alt." className={field} />
          </label>
          <label className="grid gap-1 text-sm content-start">
            <span className="text-muted">Example in English (optional)</span>
            <input value={exampleEn} onChange={(e) => setExampleEn(e.target.value)} placeholder="The house is old." className={field} />
          </label>
        </div>
        {existing && (
          <p className="text-sm text-muted">
            Already in the course: <strong>{existing.word.article ? `${existing.word.article} ${existing.word.de}` : existing.word.de}</strong> – {existing.word.en} ({existing.word.level} · {existing.theme}). You can still add your own version.
          </p>
        )}
        <div className="flex gap-2">
          <Button type="submit" disabled={!valid}>
            <PlusIcon size={18} /> Add word
          </Button>
          <Button type="button" variant="ghost" onClick={saved ? onAdded : onClose}>
            {saved ? 'Done' : 'Cancel'}
          </Button>
        </div>
      </form>
    </Card>
  );
}

/** The highest level the learner has already started words in, so a new word lands where they are studying. */
function defaultLevel(): Level {
  const started = new Set<string>();
  for (const s of vocabSets) if (s.words.some((w) => store.getRaw(keys.word(w.id)))) started.add(s.level);
  return ([...levels].reverse().find((l) => started.has(l)) ?? 'A1') as Level;
}

function WordRow({ w, showLevel, removable }: { w: Word; showLevel?: boolean; removable?: boolean }) {
  const card = store.get<SrsCard | null>(keys.word(w.id), null);
  const today = todayStr();
  const status = !card ? null : card.due <= today ? <Badge tone="accent">due</Badge> : <Badge tone="success">box {card.box}</Badge>;
  const [confirm, setConfirm] = useState(false);
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
      {showLevel && (isMyWord(w) ? <Badge tone="info">mine</Badge> : <LevelPill level={w.level} />)}
      {status}
      {removable &&
        (confirm ? (
          <span className="flex items-center gap-1 shrink-0">
            <button type="button" onClick={() => removeMyWord(w.id)} className="text-xs font-semibold text-danger px-1.5 py-0.5 rounded-md bg-danger-soft">
              Remove
            </button>
            <button type="button" onClick={() => setConfirm(false)} className="text-xs text-muted px-1">
              Keep
            </button>
          </span>
        ) : (
          <button type="button" onClick={() => setConfirm(true)} className="text-muted hover:text-danger shrink-0" aria-label={`Remove ${w.de}`}>
            <TrashIcon size={16} />
          </button>
        ))}
    </li>
  );
}
