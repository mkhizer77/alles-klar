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

/** Dictation: the app reads `text` aloud, the learner types what they hear. */
export interface ListenExercise {
  type: 'listen';
  id: string;
  /** German sentence to be spoken and typed */
  text: string;
  /** English meaning, shown after checking */
  translation: string;
  explanation: string;
}

export type Exercise =
  | McExercise
  | FillExercise
  | OrderExercise
  | MatchExercise
  | TranslateExercise
  | ListenExercise;

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

/** A short text for one unit with comprehension questions. */
export interface ReadingText {
  id: string;
  level: Level;
  unit: number;
  title: string;
  /** what kind of text and the situation, in English, one sentence */
  intro: string;
  /** one reading strategy tip in English for this text */
  tip: string;
  /** German paragraphs */
  paragraphs: string[];
  /** hard words from the text with English */
  glossary: { de: string; en: string }[];
  questions: Exercise[];
}

export type WritingTextType = 'email' | 'message' | 'note' | 'post' | 'letter' | 'story' | 'description' | 'opinion';
export type Register = 'informal' | 'formal' | 'neutral';

export interface UsefulPhrase {
  de: string;
  en: string;
  /** greeting/closing are used for automatic checks on emails, letters and messages */
  role: 'greeting' | 'closing' | 'connector' | 'phrase';
}

/** A cheap automatic check: the text must match `pattern` (a RegExp source, case-insensitive) at least `min` times. */
export interface RequiredPattern {
  label: string;
  pattern: string;
  min: number;
}

/** A guided writing task for one unit, with a model answer and a self-check list. */
export interface WritingTask {
  id: string;
  level: Level;
  unit: number;
  title: string;
  textType: WritingTextType;
  register: Register;
  /** the situation and what to write, in English */
  task: string;
  /** 3–4 content points the text must cover, in English */
  points: string[];
  minWords: number;
  maxWords: number;
  usefulPhrases: UsefulPhrase[];
  /** topic ids whose grammar the task practises */
  grammarFocus: string[];
  /** automatic checks run on the learner's text */
  mustUse: RequiredPattern[];
  /** self-check items the learner ticks after comparing with the model, in English */
  checklist: string[];
  /** model answer, paragraphs of German */
  model: string[];
  /** why the model works, English bullets (markdown inline) */
  modelNotes: string[];
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

/** A role-play conversation for one unit, run by an AI partner with speech in and out. */
export interface SpeakingScenario {
  id: string;
  level: Level;
  unit: number;
  title: string;
  /** the situation and who the learner talks to, in English */
  situation: string;
  partner: {
    name: string;
    /** e.g. "receptionist at a language school" */
    role: string;
    /** how the partner behaves, in English, for the AI: friendly, a bit hurried, asks follow-up questions … */
    persona: string;
  };
  register: 'du' | 'Sie';
  /** 3–4 things the learner must do in the conversation, in English */
  goals: string[];
  /** the partner's first line, in German */
  opener: string;
  usefulPhrases: Example[];
  /** topic ids whose grammar the conversation practises */
  grammarFocus: string[];
  /** German words and chunks from the unit the learner should try to use */
  vocabFocus: string[];
  /** learner turns before the conversation can be wrapped up */
  minTurns: number;
}

/* ------------------------------------------------------------------ */
/* Mock exams: full papers in the format of the official B1 exams.    */
/* ------------------------------------------------------------------ */

export type ExamProvider = 'goethe-oesd' | 'telc' | 'dtz';
export type ExamSkill = 'lesen' | 'hoeren' | 'sprachbausteine' | 'schreiben' | 'sprechen';

/** A reading text, an advert, a notice … shown next to the items. `label` is the letter for adverts (A–J). */
export interface ExamText {
  label?: string;
  title?: string;
  /** markdown paragraphs */
  body: string[];
}

/** A listening text spoken by the device's German voice. Dialogues: one line per turn, "Name: text". */
export interface ExamAudio {
  id: string;
  /** shown to the learner, e.g. "Text 1 · Nachricht auf dem Anrufbeantworter" */
  label: string;
  /** the script; lines starting with "Name:" are spoken as turns */
  text: string;
  /** how often the real exam plays it */
  plays: 1 | 2;
}

/** A writing or speaking task with a model and the official criteria turned into a self-check list. */
export interface ExamTask {
  id: string;
  title: string;
  /** the instructions in German, as on the paper */
  instructions: string;
  /** the material the task refers to (the email you received, the forum post, the slides …), markdown */
  situation?: string[];
  /** Leitpunkte / Folien in German */
  points: string[];
  /** target length "circa" */
  words?: number;
  minutes?: number;
  /** model answer paragraphs (writing) or a worked outline with example sentences (speaking) */
  model: string[];
  /** English notes on why the model works */
  modelNotes: string[];
  /** self-check items in English, derived from the official assessment criteria */
  criteria: string[];
  /** speaking: a SpeakingScenario id to rehearse this task with the AI partner */
  scenarioId?: string;
}

export interface ExamPart {
  id: string;
  skill: ExamSkill;
  /** "Teil 1", "Aufgabe 2" … */
  title: string;
  /** what the part tests, in English (e.g. "Reading correspondence: a blog post, 6 true/false items") */
  goal: string;
  /** instructions in German, as on the paper */
  instructions: string;
  /** working time suggested on the paper */
  minutes?: number;
  texts?: ExamText[];
  audio?: ExamAudio[];
  /** scored items: mc (Richtig/Falsch, a/b/c, Ja/Nein, letters for matching) or fill (word-bank cloze) */
  items: Exercise[];
  tasks?: ExamTask[];
  /** course topic ids the part draws on; used in the report to point the learner to what to revise */
  topicIds: string[];
  /** points per correct item in the official scoring (default 1) */
  pointsPerItem?: number;
}

export interface ExamModule {
  skill: ExamSkill;
  title: string;
  minutes: number;
  /** maximum points in the official scoring of this module */
  maxPoints: number;
  /** percent needed to pass this module (or the written part it belongs to) */
  passPercent: number;
  parts: ExamPart[];
}

export interface MockExam {
  id: string;
  level: Level;
  provider: ExamProvider;
  title: string;
  subtitle: string;
  /** English description of the exam and what to expect */
  intro: string;
  /** the official paper this mock follows */
  modelledOn: string;
  /** how the official exam is passed, in English */
  passRule: string;
  modules: ExamModule[];
  /** role-plays for the speaking tasks, run by the AI partner; ids are referenced from ExamTask.scenarioId */
  scenarios?: SpeakingScenario[];
}
