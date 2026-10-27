import type { Level, Topic, VocabSet, Word, GlossaryTerm } from './types';
import { curriculum } from './curriculum';
import { glossary } from './glossary';

const topicModules = import.meta.glob<{ default: Topic }>('./grammar/*/*.ts', { eager: true });
const vocabModules = import.meta.glob<{ default: VocabSet }>('./vocab/*.ts', { eager: true });

export const topics: Record<string, Topic> = {};
for (const m of Object.values(topicModules)) topics[m.default.id] = m.default;

// A headword that appears at two levels is kept only at the lower level, so a
// learner never gets the same card twice.
const seenHeadwords = new Set<string>();
export const vocabSets: VocabSet[] = Object.values(vocabModules)
  .map((m) => m.default)
  .sort((a, b) => a.level.localeCompare(b.level) || a.unit - b.unit)
  .map((set) => ({
    ...set,
    words: set.words.filter((w) => {
      const key = `${w.article ?? ''} ${w.de}`.trim().toLowerCase();
      if (seenHeadwords.has(key)) return false;
      seenHeadwords.add(key);
      return true;
    }),
  }));

export const words: Record<string, Word> = {};
for (const s of vocabSets) for (const w of s.words) words[w.id] = w;

export const levels: Level[] = ['A1', 'A2', 'B1'];

export function levelOf(level: Level) {
  return curriculum.find((l) => l.level === level)!;
}

export function topicsForLevel(level: Level): Topic[] {
  return levelOf(level)
    .units.flatMap((u) => u.topics)
    .map((t) => topics[t.id])
    .filter(Boolean);
}

export function wordsForLevel(level: Level): Word[] {
  return vocabSets.filter((s) => s.level === level).flatMap((s) => s.words);
}

/** The ordered list of all topic ids in the curriculum (content may not exist yet for some). */
export const orderedTopicIds: string[] = curriculum.flatMap((l) => l.units.flatMap((u) => u.topics.map((t) => t.id)));

export function unitOfTopic(id: string) {
  for (const l of curriculum) for (const u of l.units) if (u.topics.some((t) => t.id === id)) return { level: l, unit: u };
  return null;
}

export interface SearchHit {
  kind: 'topic' | 'term';
  score: number;
  topic?: Topic;
  term?: GlossaryTerm;
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss');

export function searchConcepts(query: string, level?: Level): SearchHit[] {
  const q = norm(query.trim());
  if (!q) return [];
  const terms = q.split(/\s+/);
  const hits: SearchHit[] = [];
  const scoreText = (fields: [string, number][]) => {
    let score = 0;
    for (const [text, weight] of fields) {
      const t = norm(text);
      for (const term of terms) {
        if (t === term) score += weight * 3;
        else if (t.split(/[^a-z0-9]+/).includes(term)) score += weight * 2;
        else if (t.includes(term)) score += weight;
      }
    }
    return score;
  };
  for (const t of Object.values(topics)) {
    if (level && t.level !== level) continue;
    const score = scoreText([
      [t.title, 5],
      [t.germanTerm, 6],
      [t.tags.join(' '), 3],
      [t.summary, 2],
      [t.explanation.slice(0, 1500), 0.5],
    ]);
    if (score > 0) hits.push({ kind: 'topic', score, topic: t });
  }
  for (const g of glossary) {
    const score = scoreText([
      [g.term, 6],
      [g.english, 5],
      [g.definition, 1],
    ]);
    if (score > 0) hits.push({ kind: 'term', score, term: g });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, 30);
}

export { curriculum, glossary };
