// The learn deck and the revise queue.
//
// Learning is a swipe through the words of one level in course order. The
// position is kept per level (or per list) so the learner continues where they
// left off. Seeing a card introduces the word, so Revise can test it later.
import { vocabSets, wordsForLevel } from '../content';
import type { Level, Word, VocabSet } from '../content/types';
import { store } from './store';
import { keys } from './models';
import { newCard, isDue, type Card } from './srs';
import { todayStr } from './date';
import { myWords, MY_WORDS_SET, MY_WORDS_THEME } from './my-words';
import { recordActivity } from './progress';
import { shuffle } from './check';

export const LEVEL_INFO: Record<Level, { name: string; hint: string }> = {
  A1: { name: 'Beginner', hint: 'the everyday basics' },
  A2: { name: 'Everyday', hint: 'daily life in more detail' },
  B1: { name: 'Advanced', hint: 'work, news and opinions' },
};

/** The words of a deck in course order: one list, or a whole level plus the learner's own words at that level. */
export function deckWords(setId: string | null, level: Level): Word[] {
  if (setId === MY_WORDS_SET) return myWords();
  if (setId) return vocabSets.find((s) => s.id === setId)?.words ?? [];
  return [...wordsForLevel(level), ...myWords().filter((w) => w.level === level)];
}

export function deckTitle(setId: string | null, level: Level): string {
  if (setId === MY_WORDS_SET) return MY_WORDS_THEME;
  if (setId) return vocabSets.find((s) => s.id === setId)?.theme ?? 'Word list';
  return `${level} · ${LEVEL_INFO[level].name}`;
}

const setById = new Map<string, VocabSet>();
for (const s of vocabSets) for (const w of s.words) setById.set(w.id, s);

/** The list a built-in word belongs to, for the "Unit 2 · Home and food" label. */
export function setOfWord(w: Word): VocabSet | undefined {
  return setById.get(w.id);
}

const posKey = (setId: string | null, level: Level) => keys.vocabPos(setId ?? level);

/** The index to resume the deck at: the card the learner last looked at. */
export function getPosition(setId: string | null, level: Level, length: number): number {
  const n = store.get<number>(posKey(setId, level), 0);
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(Math.floor(n), Math.max(0, length - 1));
}

export function setPosition(setId: string | null, level: Level, index: number) {
  if (store.get<number>(posKey(setId, level), -1) !== index) store.set(posKey(setId, level), index);
}

export function cardOf(w: Word): Card | null {
  return store.get<Card | null>(keys.word(w.id), null);
}

/** Looking at a card in the deck starts the word: it gets a review card and counts as today's work. */
export function introduce(w: Word) {
  if (cardOf(w)) return;
  store.set(keys.word(w.id), newCard(todayStr()));
  recordActivity('words');
}

export function deckStats(words: Word[]) {
  const today = todayStr();
  let learned = 0;
  let due = 0;
  let newToday = 0;
  for (const w of words) {
    const c = cardOf(w);
    if (!c) continue;
    learned++;
    if (c.introduced === today) newToday++;
    if (isDue(c, today)) due++;
  }
  return { total: words.length, learned, due, newToday };
}

export const REVISE_MAX = 30;

/**
 * What to revise: a specific list is taken whole, shuffled. Otherwise the
 * level's learned words, due ones first (oldest due date first), then the ones
 * reviewed longest ago, up to REVISE_MAX cards.
 */
export function reviseQueue(setId: string | null, level: Level): Word[] {
  const pool = deckWords(setId, level);
  if (setId) return shuffle(pool);
  const today = todayStr();
  const due: [Word, Card][] = [];
  const rest: [Word, Card][] = [];
  for (const w of pool) {
    const c = cardOf(w);
    if (!c) continue;
    (isDue(c, today) ? due : rest).push([w, c]);
  }
  due.sort((a, b) => a[1].due.localeCompare(b[1].due));
  rest.sort((a, b) => (a[1].last ?? a[1].introduced).localeCompare(b[1].last ?? b[1].introduced));
  return [...shuffle(due.slice(0, REVISE_MAX)), ...rest.slice(0, Math.max(0, REVISE_MAX - due.length))].map(([w]) => w);
}
