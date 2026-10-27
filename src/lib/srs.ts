// Two spaced-repetition schedulers. Both work on the same Card shape so the
// learner can switch in Settings without losing progress.
import { addDays, todayStr } from './date';

export interface Card {
  /** YYYY-MM-DD when the card should be reviewed next */
  due: string;
  /** days */
  interval: number;
  ease: number;
  reps: number;
  lapses: number;
  /** Leitner box 1–5 */
  box: number;
  introduced: string;
  last?: string;
}

export type Grade = 0 | 1 | 2 | 3; // again, hard, good, easy
export type Scheduler = 'sm2' | 'leitner';

export function newCard(today = todayStr()): Card {
  return { due: today, interval: 0, ease: 2.5, reps: 0, lapses: 0, box: 1, introduced: today };
}

const LEITNER_DAYS = [0, 1, 2, 4, 8, 16];

export function schedule(card: Card, grade: Grade, scheduler: Scheduler, today = todayStr()): Card {
  const c = { ...card, last: today };
  if (scheduler === 'leitner') {
    if (grade === 0) {
      c.box = 1;
      c.lapses++;
    } else if (grade === 1) {
      c.box = Math.max(1, c.box);
    } else if (grade === 2) {
      c.box = Math.min(5, c.box + 1);
    } else {
      c.box = Math.min(5, c.box + 2);
    }
    c.reps++;
    c.interval = LEITNER_DAYS[c.box];
    c.due = addDays(today, c.interval);
    return c;
  }
  // SM-2 (simplified, Anki-like)
  if (grade === 0) {
    c.reps = 0;
    c.lapses++;
    c.ease = Math.max(1.3, c.ease - 0.2);
    c.interval = 0;
    c.due = today; // comes back within the session / tomorrow
    c.box = 1;
    return c;
  }
  if (grade === 1) c.ease = Math.max(1.3, c.ease - 0.15);
  if (grade === 3) c.ease = c.ease + 0.15;
  if (c.reps === 0) c.interval = grade === 1 ? 1 : grade === 2 ? 1 : 3;
  else if (c.reps === 1) c.interval = grade === 1 ? 2 : grade === 2 ? 4 : 7;
  else c.interval = Math.max(c.interval + 1, Math.round(c.interval * (grade === 1 ? 1.2 : grade === 2 ? c.ease : c.ease * 1.3)));
  c.reps++;
  c.box = Math.min(5, Math.max(1, Math.ceil(Math.log2(c.interval + 1))));
  c.due = addDays(today, c.interval);
  return c;
}

export function isDue(card: Card, today = todayStr()) {
  return card.due <= today;
}
