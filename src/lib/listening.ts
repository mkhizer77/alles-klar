// Builds dictation sets from sentences the learner has already met: topic
// examples and vocabulary example sentences of a unit (or a whole level).
import type { Level, ListenExercise, Example } from '../content/types';
import { levelOf, topics, vocabSets } from '../content';
import { shuffle, seededRandom } from './check';

const MAX_WORDS = 12;

function candidates(level: Level, unit?: number): { ex: Example; source: string }[] {
  const lvl = levelOf(level);
  const units = unit ? lvl.units.filter((u) => u.unit === unit) : lvl.units;
  const out: { ex: Example; source: string }[] = [];
  for (const u of units) {
    for (const t of u.topics) {
      const topic = topics[t.id];
      if (!topic) continue;
      for (const ex of topic.examples) out.push({ ex, source: t.id });
    }
    for (const set of vocabSets.filter((s) => s.level === level && s.unit === u.unit)) {
      for (const w of set.words) out.push({ ex: w.example, source: set.id });
    }
  }
  return out.filter(({ ex }) => ex.de.split(/\s+/).length <= MAX_WORDS && !/[(/]/.test(ex.de));
}

export function buildListeningSet(level: Level, unit: number | undefined, count: number, seed = Date.now()): ListenExercise[] {
  const rnd = seededRandom(seed);
  const pool = shuffle(candidates(level, unit), rnd);
  const seen = new Set<string>();
  const picked: ListenExercise[] = [];
  for (const { ex, source } of pool) {
    const key = ex.de.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    picked.push({
      type: 'listen',
      id: `listen-${source}-${picked.length}-${seed}`,
      text: ex.de,
      translation: ex.en.replace(/\s*\([^)]*\)\s*$/, ''),
      explanation: `"${ex.de}" – ${ex.en.replace(/\s*\([^)]*\)\s*$/, '')}`,
    });
    if (picked.length >= count) break;
  }
  return picked;
}

export const listeningAvailable = (level: Level, unit?: number) => candidates(level, unit).length;
