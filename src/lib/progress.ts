// Derived progress helpers used by several screens.
import { store } from './store';
import { keys, EMPTY_TOPIC, EMPTY_ACTIVITY, type TopicProgress, type Activity, type Settings, DEFAULT_SETTINGS } from './models';
import { todayStr, addDays } from './date';
import { topics, orderedTopicIds, wordsForLevel } from '../content';
import type { Level } from '../content/types';
import { isDue, type Card } from './srs';

export function getSettings(): Settings {
  return { ...DEFAULT_SETTINGS, ...store.get<Partial<Settings>>(keys.settings, {}) };
}

export function topicProgress(id: string): TopicProgress {
  return store.get(keys.topic(id), EMPTY_TOPIC);
}

export function recordActivity(kind: 'exercises' | 'words', n = 1) {
  const today = todayStr();
  store.update<Activity>(keys.activity, EMPTY_ACTIVITY, (a) => {
    const day = a[today] || { exercises: 0, words: 0 };
    return { ...a, [today]: { ...day, [kind]: day[kind] + n } };
  });
}

export function streak(activity: Activity): number {
  let day = todayStr();
  let n = 0;
  const active = (d: string) => (activity[d]?.exercises || 0) + (activity[d]?.words || 0) > 0;
  if (!active(day)) day = addDays(day, -1);
  while (active(day)) {
    n++;
    day = addDays(day, -1);
  }
  return n;
}

export function levelStats(level: Level) {
  const ids = orderedTopicIds.filter((id) => id.startsWith(level.toLowerCase()));
  const withContent = ids.filter((id) => topics[id]);
  let practiced = 0;
  let mastered = 0;
  for (const id of withContent) {
    const p = topicProgress(id);
    if (p.attempts > 0) practiced++;
    if (p.bestScore >= 80) mastered++;
  }
  return { total: ids.length, withContent: withContent.length, practiced, mastered };
}

export function nextTopicId(): string | null {
  for (const id of orderedTopicIds) {
    if (!topics[id]) continue;
    const p = topicProgress(id);
    if (p.bestScore < 80) return id;
  }
  return null;
}

export function vocabStats(level?: Level) {
  const today = todayStr();
  const levels: Level[] = level ? [level] : ['A1', 'A2', 'B1'];
  let introduced = 0;
  let due = 0;
  let newToday = 0;
  let total = 0;
  for (const l of levels) {
    for (const w of wordsForLevel(l)) {
      total++;
      const card = store.get<Card | null>(keys.word(w.id), null);
      if (!card) continue;
      introduced++;
      if (card.introduced === today) newToday++;
      if (isDue(card, today)) due++;
    }
  }
  return { total, introduced, due, newToday, remaining: total - introduced };
}
