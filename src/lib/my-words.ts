// Words the learner adds themself. Each one is its own store entry
// (myword:<id>) so adding on two devices never overwrites; a deleted word is
// kept as a null tombstone so the deletion syncs too.
import { useSyncExternalStore } from 'react';
import { store } from './store';
import { vocabSets, words as builtIn } from '../content';
import type { Word, Level, PartOfSpeech } from '../content/types';

export const MY_WORDS_SET = 'my-words';
export const MY_WORDS_THEME = 'My words';
const PREFIX = 'myword:';

export interface NewWord {
  de: string;
  en: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  pos: PartOfSpeech;
  level: Level;
  exampleDe?: string;
  exampleEn?: string;
}

let cache: { version: number; list: Word[] } | null = null;

/** All of the learner's own words, newest last. */
export function myWords(): Word[] {
  if (cache && cache.version === store.version) return cache.list;
  const list = store
    .keysWithPrefix(PREFIX)
    .map((k) => store.get<Word | null>(k, null))
    .filter((w): w is Word => !!w)
    .sort((a, b) => a.id.localeCompare(b.id));
  cache = { version: store.version, list };
  return list;
}

export function useMyWords(): Word[] {
  return useSyncExternalStore(store.subscribe, myWords);
}

export function isMyWord(w: Word) {
  return w.id.startsWith('my-');
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export function addMyWord(input: NewWord): Word {
  const de = input.de.trim();
  const en = input.en.trim();
  const id = `my-${Date.now().toString(36)}-${slug(de)}`;
  const word: Word = {
    id,
    de: input.pos === 'noun' ? de.charAt(0).toUpperCase() + de.slice(1) : de,
    en,
    pos: input.pos,
    level: input.level,
    theme: MY_WORDS_THEME,
    example: { de: input.exampleDe?.trim() ?? '', en: input.exampleEn?.trim() ?? '' },
  };
  if (input.pos === 'noun' && input.article) word.article = input.article;
  const plural = input.plural?.trim();
  if (input.pos === 'noun' && plural) word.plural = /^die\s/i.test(plural) ? plural : `die ${plural}`;
  store.set(PREFIX + id, word);
  return word;
}

export function removeMyWord(id: string) {
  store.set(PREFIX + id, null);
}

/** A built-in word with the same headword, so the learner can be told it already exists. */
export function findExisting(de: string, article?: string): { word: Word; theme: string } | undefined {
  const key = `${article ?? ''} ${de}`.trim().toLowerCase();
  const bare = de.trim().toLowerCase();
  for (const s of vocabSets) {
    for (const w of s.words) {
      const wk = `${w.article ?? ''} ${w.de}`.trim().toLowerCase();
      if (wk === key || w.de.toLowerCase() === bare) return { word: w, theme: s.theme };
    }
  }
  return undefined;
}

/** Built-in words plus the learner's own. */
export function allWords(): Word[] {
  return [...Object.values(builtIn), ...myWords()];
}

const fold = (s: string) => s.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');

/** Search every word by German, English, plural or example sentence. Headword matches rank first. */
export function searchWords(query: string, limit = 60): Word[] {
  const q = fold(query.trim());
  if (!q) return [];
  const scored: { w: Word; score: number }[] = [];
  for (const w of allWords()) {
    const de = fold(w.de);
    const en = fold(w.en);
    let score = 0;
    if (de === q || en === q) score = 5;
    else if (de.startsWith(q) || en.split(/[,;] ?/).some((p) => p.startsWith(q))) score = 4;
    else if (de.includes(q) || en.includes(q)) score = 3;
    else if (w.plural && fold(w.plural).includes(q)) score = 2;
    else if (fold(w.example.de).includes(q) || fold(w.example.en).includes(q)) score = 1;
    if (score) scored.push({ w, score });
  }
  return scored
    .sort((a, b) => b.score - a.score || a.w.de.localeCompare(b.w.de, 'de'))
    .slice(0, limit)
    .map((s) => s.w);
}
