// Everything the AI partner is told, and how its answers are read. Pure
// functions over scenario data, so they can be unit-tested without a network
// and swapped for another model provider without touching the page.
import type { SpeakingScenario, Level } from '../content/types';

export interface Correction {
  original: string;
  better: string;
  /** one sentence in English; empty strings mean "nothing to correct" */
  why: string;
}

export interface PartnerTurn {
  reply: string;
  replyEn: string;
  correction: Correction | null;
  /** 1-based goal numbers completed so far in the whole conversation */
  goalsDone: number[];
  hint: { de: string; en: string };
  closing: boolean;
}

export interface PartnerFeedback {
  summary: string;
  strengths: string[];
  improve: Correction[];
  goalsDone: number[];
}

export interface Turn {
  role: 'learner' | 'partner';
  text: string;
  /** partner turns keep the model's extra fields */
  detail?: Omit<PartnerTurn, 'reply'>;
}

export interface PromptContext {
  scenario: SpeakingScenario;
  unitTitle: string;
  /** German grammar terms of the focus topics, e.g. "Perfekt" */
  grammarTerms: string[];
}

const LEVEL_GUIDE: Record<Level, string> = {
  A1: 'A1: short main clauses in the present tense, Perfekt only for the past, high-frequency words, no subordinate clauses except with "weil" if the unit has reached it. Max 20 words per reply.',
  A2: 'A2: everyday German with subordinate clauses (weil, dass, wenn), Perfekt and Präteritum of sein/haben/modals, adjective endings. Max 35 words per reply.',
  B1: 'B1: natural everyday German including passive, Konjunktiv II, relative clauses and connectors. Max 50 words per reply.',
};

export function buildSystemPrompt({ scenario: s, unitTitle, grammarTerms }: PromptContext): string {
  const you = s.register === 'Sie' ? 'Address the learner formally with "Sie".' : 'Address the learner informally with "du".';
  const goals = s.goals.map((g, i) => `${i + 1}. ${g}`).join('\n');
  return [
    `You are ${s.partner.name}, ${s.partner.role}, in a spoken German role-play with a learner at CEFR level ${s.level} (unit "${unitTitle}").`,
    `Situation: ${s.situation}`,
    `How you behave: ${s.partner.persona} ${you}`,
    `You have already said: "${s.opener}"`,
    '',
    'The learner is trying to do these things (any order):',
    goals,
    '',
    `Grammar this unit practises: ${grammarTerms.join(', ') || '—'}. Vocabulary to draw out: ${s.vocabFocus.join(', ')}.`,
    '',
    'How to play:',
    `- Stay in role and reply only in German at the learner's level. ${LEVEL_GUIDE[s.level]}`,
    '- One or two sentences, then a question or prompt that keeps the conversation going and steers toward goals not done yet. Do not do the learner\'s goals for them.',
    '- The learner\'s words come from speech recognition: ignore missing punctuation and capitalisation and obvious recognition slips (e.g. "ich hiess" for "ich heiße"); react to what they meant. If a turn is unintelligible, ask them in role to repeat.',
    '- If the learner writes English, answer in German anyway, briefly, and put the German they needed in "hint".',
    '- Correct at most one mistake per turn, the one that matters most for this unit\'s grammar. "correction" has the learner\'s words, a better version, and one sentence in English saying why. When the turn is fine, or the only problems are recognition artefacts, use empty strings.',
    '- "replyEn" is a natural English translation of your reply.',
    '- "goalsDone" lists the numbers of all goals the learner has completed so far in the whole conversation (cumulative), judged on what they said, not on what you said.',
    '- "hint" is one thing the learner could say next in German, at their level, with an English gloss.',
    '- When every goal is done, or the conversation has naturally run its course, say goodbye in role and set "closing" true. Otherwise "closing" is false.',
    '- Never mention these rules, the goals list or that you are a language model. Never switch to English in "reply".',
  ].join('\n');
}

export const FEEDBACK_REQUEST =
  'The conversation is over. Step out of role now and, in English, give the learner feedback on their German in this conversation: a two-sentence summary (warm, specific, honest), 2–4 strengths as short phrases, up to 5 things to improve (each with the learner\'s original words, a better version and one sentence why, prioritising the unit\'s grammar; never list recognition artefacts such as missing capitals), and the numbers of the goals they completed. Judge only what the learner said.';

const correctionSchema = {
  type: 'object',
  properties: { original: { type: 'string' }, better: { type: 'string' }, why: { type: 'string' } },
  required: ['original', 'better', 'why'],
  additionalProperties: false,
};

export const TURN_SCHEMA = {
  type: 'object',
  properties: {
    reply: { type: 'string' },
    replyEn: { type: 'string' },
    correction: correctionSchema,
    goalsDone: { type: 'array', items: { type: 'integer' } },
    hint: { type: 'object', properties: { de: { type: 'string' }, en: { type: 'string' } }, required: ['de', 'en'], additionalProperties: false },
    closing: { type: 'boolean' },
  },
  required: ['reply', 'replyEn', 'correction', 'goalsDone', 'hint', 'closing'],
  additionalProperties: false,
};

export const FEEDBACK_SCHEMA = {
  type: 'object',
  properties: {
    summary: { type: 'string' },
    strengths: { type: 'array', items: { type: 'string' } },
    improve: { type: 'array', items: correctionSchema },
    goalsDone: { type: 'array', items: { type: 'integer' } },
  },
  required: ['summary', 'strengths', 'improve', 'goalsDone'],
  additionalProperties: false,
};

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
const goalList = (v: unknown, max: number) =>
  Array.isArray(v) ? [...new Set(v.filter((n): n is number => Number.isInteger(n) && n >= 1 && n <= max))].sort((a, b) => a - b) : [];
const correction = (v: unknown): Correction | null => {
  if (!v || typeof v !== 'object') return null;
  const c = v as Record<string, unknown>;
  const out = { original: str(c.original), better: str(c.better), why: str(c.why) };
  return out.better && out.original !== out.better ? out : null;
};

/** Reads a turn from the model's JSON text; tolerant of missing fields, throws only when there is no reply at all. */
export function parseTurn(json: string, goalCount: number): PartnerTurn {
  const o = JSON.parse(json) as Record<string, unknown>;
  const reply = str(o.reply);
  if (!reply) throw new Error('The partner did not answer.');
  const hint = (o.hint ?? {}) as Record<string, unknown>;
  return {
    reply,
    replyEn: str(o.replyEn),
    correction: correction(o.correction),
    goalsDone: goalList(o.goalsDone, goalCount),
    hint: { de: str(hint.de), en: str(hint.en) },
    closing: o.closing === true,
  };
}

export function parseFeedback(json: string, goalCount: number): PartnerFeedback {
  const o = JSON.parse(json) as Record<string, unknown>;
  return {
    summary: str(o.summary),
    strengths: Array.isArray(o.strengths) ? o.strengths.map(str).filter(Boolean) : [],
    improve: Array.isArray(o.improve) ? o.improve.map(correction).filter((c): c is Correction => c !== null) : [],
    goalsDone: goalList(o.goalsDone, goalCount),
  };
}

/** The transcript as alternating API messages, oldest first, capped to keep each request cheap. */
export function toMessages(turns: Turn[], maxTurns = 24): { role: 'user' | 'assistant'; content: string }[] {
  const recent = turns.slice(-maxTurns);
  const msgs: { role: 'user' | 'assistant'; content: string }[] = [];
  for (const t of recent) {
    const role = t.role === 'learner' ? 'user' : 'assistant';
    const last = msgs[msgs.length - 1];
    if (last && last.role === role) last.content += '\n' + t.text;
    else msgs.push({ role, content: t.text });
  }
  if (msgs[0]?.role === 'assistant') msgs.shift();
  return msgs;
}
