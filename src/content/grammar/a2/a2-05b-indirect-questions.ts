import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-05b-indirect-questions',
  level: 'A2',
  unit: 2,
  order: 6,
  title: 'Indirect questions: Weißt du, wo …?',
  germanTerm: 'indirekte Fragen',
  tags: ['word order', 'subordinate clauses', 'questions', 'indirect questions', 'question words'],
  summary: 'An indirect question is a question inside another sentence: keep the question word (wo, wann, warum …), put the verb at the end, and you sound polite and fluent.',
  steps: [
    {
      title: 'A question inside a sentence',
      text: `
An **indirect question** (*indirekte Frage*) is a question that sits inside another sentence: *I don't know **where he lives**.*

You already report yes/no questions with **ob**: *Ich weiß nicht, ob er kommt.* If the question starts with a **W-word** (*wo, wann, warum, wie, was, wer*), keep that word instead of *ob*. The W-word becomes the joining word, and the verb goes to the **end**.
`,
      examples: [
        { de: 'Wo wohnt sie?', en: 'Where does she live? (direct question)' },
        { de: 'Ich weiß nicht, wo sie wohnt.', en: "I don't know where she lives. (indirect: wohnt at the end)" },
        { de: 'Ich weiß nicht, ob sie kommt.', en: "I don't know whether she is coming. (yes/no question → ob)" },
      ],
    },
    {
      title: 'Keep the W-word, move the verb',
      text: `
Turn the direct question into the indirect one in two moves: keep the W-word, send the verb to the end. Everything else stays in order.

|direct question|indirect question|
|---|---|
|Wo wohnt sie?|Ich weiß nicht, **wo** sie **wohnt**.|
|Wann beginnt der Film?|Weißt du, **wann** der Film **beginnt**?|
|Warum lacht er?|Ich frage mich, **warum** er **lacht**.|
|Wie viel kostet das?|Können Sie mir sagen, **wie viel** das **kostet**?|

With two verbs, the conjugated one is last: *…, warum sie nicht geantwortet **hat**.*
`,
      examples: [
        { de: 'Weißt du, wann der Film beginnt?', en: 'Do you know when the film starts?' },
        { de: 'Ich frage mich, warum er lacht.', en: 'I wonder why he is laughing.' },
        { de: 'Ich frage mich, warum sie nicht geantwortet hat.', en: "I wonder why she didn't reply. (Perfekt: hat at the end)" },
      ],
    },
    {
      title: 'Useful opening phrases',
      text: `
Indirect questions hang on a short main clause. Learn these openers as fixed phrases: **Ich weiß nicht, … / Weißt du, … / Kannst du mir sagen, … / Können Sie mir sagen, … / Ich frage mich, … / Ich möchte wissen, …**

The main clause decides the final punctuation. A question (*Weißt du, …*) ends with **?**; a statement (*Ich weiß nicht, …*) ends with a full stop.
`,
      examples: [
        { de: 'Ich möchte wissen, wo der Bahnhof ist.', en: 'I would like to know where the station is. (statement: full stop)' },
        { de: 'Weißt du, wann der Bus abfährt?', en: 'Do you know when the bus leaves? (question: question mark; abfährt joined)' },
        { de: 'Ich weiß nicht, wer das war.', en: "I don't know who that was." },
      ],
    },
    {
      title: 'The polite way to ask',
      text: `
A direct question is fine, but an indirect one is **friendlier** and sounds much more fluent, especially with strangers. *Wo ist der Bahnhof?* is correct; *Können Sie mir sagen, wo der Bahnhof ist?* is the polite version. Use it when you ask for help, directions or information.
`,
      examples: [
        { de: 'Wo ist der Bahnhof?', en: 'Where is the station? (direct, a bit blunt)' },
        { de: 'Können Sie mir sagen, wo der Bahnhof ist?', en: 'Can you tell me where the station is? (polite)' },
        { de: 'Kannst du mir sagen, wie spät es ist?', en: 'Can you tell me what time it is?' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'ob reports a yes/no question; this topic covers questions with a W-word.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The basic Nebensatz rule (verb at the end) that indirect questions follow.' },
    { topicId: 'a1-07-questions', note: 'The direct W-questions that indirect questions are built from.' },
    { topicId: 'a1-16-separable-verbs', note: 'In an indirect question a separable verb joins back together at the end: wann der Bus abfährt.' },
  ],
  edgeCases: [
    'The verb goes to the end: *Ich weiß nicht, wo er **wohnt*** ✓, not *wo wohnt er* ✗. Keeping question word order is the most common mistake.',
    '**wann** (at what time) is the W-word for time questions: *Ich weiß nicht, wann er kommt.* Do not replace it with *wenn*.',
    'Two-word question phrases stay together: *Können Sie mir sagen, **wie viel** das kostet?* / *…, **wie lange** das dauert?*',
    'The main clause decides the final punctuation: *Weißt du, wo er wohnt**?*** but *Ich weiß nicht, wo er wohnt**.***',
    'A separable verb joins back together at the end: *Wann fährt der Bus ab?* → *…, wann der Bus **abfährt**.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-05b-indirect-questions-ex01',
      prompt: 'Complete: "Ich weiß nicht, ___ er wohnt."',
      options: ['wo', 'ob', 'dass'],
      answer: 0,
      explanation: 'The direct question is "Wo wohnt er?". It has a W-word, so you keep wo. ob is only for yes/no questions.',
    },
    {
      type: 'fill',
      id: 'a2-05b-indirect-questions-ex02',
      prompt: 'Weißt du, ___ der Bus abfährt? (at what time)',
      answer: ['wann'],
      explanation: 'The direct question is "Wann fährt der Bus ab?". Keep the question word wann and put the verb (abfährt) at the end.',
    },
    {
      type: 'fill',
      id: 'a2-05b-indirect-questions-ex03',
      prompt: 'Ich frage mich, ___ er so laut lacht. (why)',
      answer: ['warum'],
      explanation: '"Warum lacht er so laut?" keeps its W-word warum in the indirect question; lacht moves to the end.',
    },
    {
      type: 'match',
      id: 'a2-05b-indirect-questions-ex04',
      prompt: 'Match each direct question with its indirect form.',
      pairs: [
        ['Kommt er?', 'ob er kommt'],
        ['Wo wohnt sie?', 'wo sie wohnt'],
        ['Warum lacht er?', 'warum er lacht'],
        ['Hat sie Zeit?', 'ob sie Zeit hat'],
      ],
      explanation: 'Yes/no questions become ob-clauses; W-questions keep their W-word. In every case the verb moves to the end.',
    },
    {
      type: 'mc',
      id: 'a2-05b-indirect-questions-ex05',
      prompt: 'Make "Wann beginnt der Film?" indirect after "Ich weiß nicht, …"',
      options: ['Ich weiß nicht, wann der Film beginnt.', 'Ich weiß nicht, wann beginnt der Film.', 'Ich weiß nicht, ob der Film beginnt.'],
      answer: 0,
      explanation: 'Keep wann, move the verb to the end. The second option has main-clause word order; the third changes the meaning (whether it begins at all).',
    },
    {
      type: 'order',
      id: 'a2-05b-indirect-questions-ex06',
      prompt: 'Build the polite question: "Can you tell me where the station is?"',
      words: ['sagen,', 'du', 'der', 'ist?', 'wo', 'Kannst', 'mir', 'Bahnhof'],
      answer: ['Kannst du mir sagen, wo der Bahnhof ist?'],
      explanation: 'Main clause question (Kannst du mir sagen), comma, then wo + der Bahnhof + ist at the end.',
    },
    {
      type: 'fill',
      id: 'a2-05b-indirect-questions-ex07',
      prompt: 'Können Sie mir sagen, ___ das kostet? (how much)',
      answer: ['wie viel'],
      explanation: 'The direct question is "Wie viel kostet das?". The question phrase wie viel stays together, and kostet goes to the end.',
    },
    {
      type: 'mc',
      id: 'a2-05b-indirect-questions-ex08',
      prompt: 'Which is the polite version of "Wo ist die Toilette?"',
      options: ['Können Sie mir sagen, wo die Toilette ist?', 'Können Sie mir sagen, wo ist die Toilette?', 'Können Sie mir sagen, ob die Toilette ist?'],
      answer: 0,
      explanation: 'Keep wo and move ist to the end. The second option keeps direct-question word order; the third uses ob, which is for yes/no questions and makes no sense here.',
    },
    {
      type: 'mc',
      id: 'a2-05b-indirect-questions-ex09',
      prompt: 'Which sentence is written correctly?',
      options: ['Weißt du, wann der Zug fährt?', 'Weißt du, wann der Zug fährt.', 'Weißt du, wann fährt der Zug?'],
      answer: 0,
      explanation: 'The main clause (Weißt du) is a question, so the sentence ends with a question mark. The verb fährt must be at the end of the wann-clause.',
    },
    {
      type: 'order',
      id: 'a2-05b-indirect-questions-ex10',
      prompt: 'Build the sentence: "I don\'t know why she isn\'t coming."',
      words: ['warum', 'Ich', 'kommt.', 'nicht,', 'sie', 'weiß', 'nicht'],
      answer: ['Ich weiß nicht, warum sie nicht kommt.'],
      explanation: 'Statement main clause (Ich weiß nicht), comma, then warum + sie nicht + kommt at the end. The sentence ends with a full stop.',
    },
    {
      type: 'fill',
      id: 'a2-05b-indirect-questions-ex11',
      prompt: 'Weißt du, wer das Fenster geöffnet ___? (haben)',
      answer: ['hat'],
      explanation: 'Two verbs in the indirect question: the participle geöffnet comes first and the conjugated helper hat is the last word.',
    },
    {
      type: 'translate',
      id: 'a2-05b-indirect-questions-ex12',
      prompt: 'Translate: "Do you know where she lives?"',
      answer: ['Weißt du, wo sie wohnt?', 'Wissen Sie, wo sie wohnt?'],
      hint: 'wohnen = to live',
      explanation: 'Weißt du, + wo + sie + wohnt. Keep the W-word, verb at the end, question mark because the main clause is a question.',
    },
  ],
};

export default topic;
