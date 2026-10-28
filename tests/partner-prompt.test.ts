import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSystemPrompt, parseFeedback, parseTurn, toMessages, type Turn } from '../src/lib/partner-prompt.ts';
import scenario from '../src/content/speaking/a1-u1-speaking.ts';

const ctx = { scenario, unitTitle: 'Getting started', grammarTerms: ['Begrüßung', 'sein / haben'] };

test('system prompt carries role, register, goals and opener', () => {
  const p = buildSystemPrompt(ctx);
  assert.match(p, /You are Frau Berger, receptionist/);
  assert.match(p, /formally with "Sie"/);
  assert.match(p, /1\. greet her and say your name/);
  assert.match(p, /4\. ask what time the course starts/);
  assert.ok(p.includes(scenario.opener));
  assert.match(p, /A1: short main clauses/);
});

test('parseTurn normalises goals and drops empty corrections', () => {
  const t = parseTurn(JSON.stringify({ reply: 'Guten Tag, Herr Khan!', replyEn: 'Hello, Mr Khan!', correction: { original: '', better: '', why: '' }, goalsDone: [1, 1, 9, 2.5, 3], hint: { de: 'Ich komme aus …', en: 'I come from …' }, closing: false }), 4);
  assert.equal(t.correction, null);
  assert.deepEqual(t.goalsDone, [1, 3]);
  assert.equal(t.hint.de, 'Ich komme aus …');
  assert.equal(t.closing, false);
});

test('parseTurn keeps a real correction and tolerates missing fields', () => {
  const t = parseTurn(JSON.stringify({ reply: 'Ah, aus Pakistan!', correction: { original: 'ich komme von pakistan', better: 'Ich komme aus Pakistan.', why: 'Countries take "aus".' } }), 4);
  assert.equal(t.correction?.better, 'Ich komme aus Pakistan.');
  assert.equal(t.replyEn, '');
  assert.deepEqual(t.goalsDone, []);
});

test('parseTurn rejects an answer without a reply', () => {
  assert.throws(() => parseTurn('{"replyEn":"x"}', 4), /did not answer/);
});

test('parseFeedback filters corrections and goals', () => {
  const f = parseFeedback(JSON.stringify({ summary: 'Good start.', strengths: ['clear greeting', ''], improve: [{ original: 'a', better: 'a', why: 'same' }, { original: 'ich bin kommen', better: 'ich komme', why: 'present tense' }], goalsDone: [4, 2] }), 4);
  assert.deepEqual(f.strengths, ['clear greeting']);
  assert.equal(f.improve.length, 1);
  assert.deepEqual(f.goalsDone, [2, 4]);
});

test('toMessages starts with the learner, merges same-role turns and caps length', () => {
  const turns: Turn[] = [
    { role: 'partner', text: 'Wie heißen Sie?' },
    { role: 'learner', text: 'Ich heiße Khan.' },
    { role: 'learner', text: 'Khan, K-H-A-N.' },
    { role: 'partner', text: 'Danke, Herr Khan.' },
  ];
  const m = toMessages(turns);
  assert.deepEqual(m, [
    { role: 'user', content: 'Ich heiße Khan.\nKhan, K-H-A-N.' },
    { role: 'assistant', content: 'Danke, Herr Khan.' },
  ]);
  const many: Turn[] = Array.from({ length: 60 }, (_, i) => ({ role: i % 2 ? 'partner' : 'learner', text: `t${i}` }));
  assert.equal(toMessages(many, 10).length, 10);
  assert.equal(toMessages(many, 10)[0].role, 'user');
});
