import type { Level } from '../content/types';
import type { Scheduler } from './srs';

export interface Settings {
  newWordsPerDay: number;
  /** 0 = Sunday … 6 = Saturday */
  reviewDays: number[];
  vocabMode: 'flashcard' | 'mc' | 'type' | 'mixed';
  scheduler: Scheduler;
  feedback: 'instant' | 'end';
  theme: 'system' | 'light' | 'dark';
  autoSpeak: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  newWordsPerDay: 10,
  reviewDays: [0, 1, 2, 3, 4, 5, 6],
  vocabMode: 'mixed',
  scheduler: 'sm2',
  feedback: 'instant',
  theme: 'system',
  autoSpeak: false,
};

export interface TopicProgress {
  readAt?: string;
  attempts: number;
  bestScore: number;
  lastScore: number;
  lastAt?: string;
  /** last result per exercise id */
  results: Record<string, boolean>;
}

export const EMPTY_TOPIC: TopicProgress = { attempts: 0, bestScore: 0, lastScore: 0, results: {} };

export type Activity = Record<string, { exercises: number; words: number }>;
export const EMPTY_ACTIVITY: Activity = {};

export interface TestAttempt {
  id: string;
  level: Level;
  date: string;
  right: number;
  total: number;
  percent: number;
  byUnit: Record<string, [number, number]>;
  byTopic: Record<string, [number, number]>;
  vocab: [number, number];
}
export const EMPTY_TESTS: TestAttempt[] = [];

export const keys = {
  settings: 'settings',
  topic: (id: string) => `topic:${id}`,
  word: (id: string) => `word:${id}`,
  activity: 'activity',
  tests: 'tests',
};
