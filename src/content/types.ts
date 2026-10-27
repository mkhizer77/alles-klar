// Content schema for Alles Klar. Every topic, word list and test is plain data
// that matches these types. Adding content = adding a file that exports one of them.

export type Level = 'A1' | 'A2' | 'B1';

export interface Example {
  de: string;
  en: string;
}

/** Multiple choice: exactly one correct option. */
export interface McExercise {
  type: 'mc';
  id: string;
  prompt: string;
  options: string[];
  /** index into options */
  answer: number;
  explanation: string;
}

/** Fill the blank. Prompt contains exactly one "___". All accepted answers listed. */
export interface FillExercise {
  type: 'fill';
  id: string;
  prompt: string;
  answer: string[];
  hint?: string;
  explanation: string;
}

/** Put the words in the right order. `words` is shuffled; `answer` lists accepted sentences. */
export interface OrderExercise {
  type: 'order';
  id: string;
  prompt: string;
  words: string[];
  answer: string[];
  explanation: string;
}

/** Match left items to right items. 4–6 pairs. */
export interface MatchExercise {
  type: 'match';
  id: string;
  prompt: string;
  pairs: [string, string][];
  explanation: string;
}

/** Translate a short English sentence into German. All accepted answers listed. */
export interface TranslateExercise {
  type: 'translate';
  id: string;
  prompt: string;
  answer: string[];
  hint?: string;
  explanation: string;
}

export type Exercise =
  | McExercise
  | FillExercise
  | OrderExercise
  | MatchExercise
  | TranslateExercise;

export interface Connection {
  topicId: string;
  note: string;
}

export interface Topic {
  id: string;
  level: Level;
  unit: number;
  /** position within the level, 1-based */
  order: number;
  title: string;
  germanTerm: string;
  tags: string[];
  /** one sentence shown in search results and lists */
  summary: string;
  /** markdown, easy English */
  explanation: string;
  examples: Example[];
  connections: Connection[];
  /** markdown bullets */
  edgeCases: string[];
  exercises: Exercise[];
}

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adj'
  | 'adv'
  | 'prep'
  | 'conj'
  | 'pron'
  | 'num'
  | 'phrase'
  | 'other';

export interface Word {
  id: string;
  de: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  en: string;
  pos: PartOfSpeech;
  level: Level;
  theme: string;
  example: Example;
  /** for verbs: er/sie/es present, Präteritum, Perfekt */
  forms?: { er: string; prat: string; perfekt: string };
}

export interface VocabSet {
  id: string;
  level: Level;
  unit: number;
  theme: string;
  words: Word[];
}

export interface GlossaryTerm {
  term: string;
  english: string;
  definition: string;
  topicIds: string[];
}

export interface CurriculumTopic {
  id: string;
  title: string;
  germanTerm: string;
}

export interface CurriculumUnit {
  unit: number;
  title: string;
  subtitle: string;
  vocabTheme: string;
  topics: CurriculumTopic[];
}

export interface CurriculumLevel {
  level: Level;
  name: string;
  description: string;
  units: CurriculumUnit[];
}
