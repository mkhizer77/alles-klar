import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-05-wenn-ob-indirect-questions',
  level: 'A2',
  unit: 2,
  order: 5,
  title: 'wenn and ob: if and whether',
  germanTerm: 'Nebensatz: wenn / ob',
  tags: ['word order', 'subordinate clauses', 'conjunctions', 'wenn', 'ob'],
  summary: 'wenn means "if / when" for a condition or a time, ob means "whether" for a reported yes/no question; both send the verb to the end of the clause.',
  steps: [
    {
      title: 'Two more words that move the verb',
      text: `
*weil* and *dass* push the verb to the end of the clause. Two more small words do exactly the same:

- **wenn** = if / when (a condition or a time)
- **ob** = whether (a reported yes/no question)

Both start a **Nebensatz** (a subordinate clause, the part that cannot stand alone), so the conjugated verb is the last word and a comma separates the two parts.
`,
      examples: [
        { de: 'Wenn ich Zeit habe, koche ich.', en: 'When I have time, I cook. (habe at the end)' },
        { de: 'Ich weiß nicht, ob sie kommt.', en: "I don't know whether she is coming. (kommt at the end)" },
      ],
    },
    {
      title: 'wenn: if or when',
      text: `
**wenn** introduces a condition or a time that is now, in the future or repeated. English *if* and *when* are both **wenn** here.

When the wenn-clause comes first, the main verb follows straight after the comma: *Wenn es regnet, **bleiben** wir zu Hause.*
`,
      examples: [
        { de: 'Wenn es regnet, bleiben wir zu Hause.', en: 'If it rains, we stay at home. (condition)' },
        { de: 'Ich rufe dich an, wenn ich zu Hause bin.', en: "I'll call you when I'm home. (future time)" },
        { de: 'Wenn du morgen kommst, kochen wir zusammen.', en: "If you come tomorrow, we'll cook together." },
      ],
    },
    {
      title: 'ob: reporting a yes/no question',
      text: `
Use **ob** to report a question that has no question word, a **yes/no question**. The direct question *Kommt er heute?* becomes *…, ob er heute kommt.* The verb that was at the front moves to the end.

|direct question|indirect question|
|---|---|
|Kommt er heute?|Ich weiß nicht, **ob** er heute **kommt**.|
|Hat sie Zeit?|Weißt du, **ob** sie Zeit **hat**?|
|Ist das Geschäft offen?|Ich frage mich, **ob** das Geschäft offen **ist**.|

The main clause decides the final punctuation: *Weißt du, ob …?* but *Ich weiß nicht, ob … .*
`,
      examples: [
        { de: 'Ich weiß nicht, ob er heute kommt.', en: "I don't know whether he is coming today." },
        { de: 'Weißt du, ob das Museum montags offen ist?', en: 'Do you know whether the museum is open on Mondays?' },
        { de: 'Ich frage mich, ob sie das Buch gelesen hat.', en: 'I wonder whether she has read the book. (Perfekt: hat at the end)' },
      ],
    },
    {
      title: 'The whether test',
      text: `
English **if** has two meanings, and German keeps them apart. Ask: can you say **whether** instead? *I don't know if he's coming* = *whether he's coming* → **ob**. *If it rains, we stay home*: you cannot say *whether* → **wenn**.

**wann** (at what time?) is only a question word, not a joining word for conditions.
`,
      examples: [
        { de: 'Frag ihn, ob er Zeit hat.', en: 'Ask him if he has time. (= whether → ob)' },
        { de: 'Ich komme, wenn ich Zeit habe.', en: "I'll come if I have time. (condition → wenn)" },
        { de: 'Ich weiß nicht, ob ich Zeit habe.', en: "I don't know if I have time. (= whether → ob)" },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The basic Nebensatz rule (verb at the end) that wenn and ob follow.' },
    { topicId: 'a2-05b-indirect-questions', note: 'When the reported question has a W-word (wo, wann, warum), keep the W-word instead of ob.' },
    { topicId: 'a1-07-questions', note: 'The direct yes/no questions that ob-clauses are built from.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'When "when" is about a single past event, German uses als instead of wenn.' },
    { topicId: 'b1-20-conditions', note: 'falls, sofern and other ways to express conditions build on wenn.' },
  ],
  edgeCases: [
    'English **if** has two meanings. For a condition (*if it rains*) use **wenn**; for a reported yes/no question (*I wonder if he\'s coming* = whether) use **ob**.',
    'The verb goes to the end: *Ich weiß nicht, ob er **kommt*** ✓, not *ob kommt er* ✗.',
    '**wann** is only a question word (*Wann kommst du?*). For "when" as a joining word use **wenn** or **als**.',
    'The main clause decides the final punctuation: *Weißt du, ob er kommt**?*** but *Ich weiß nicht, ob er kommt**.***',
    'When the wenn-clause comes first, the main verb follows straight after the comma: *Wenn ich Zeit habe, **koche** ich.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex01',
      prompt: 'Complete: "Ich weiß nicht, ___ er heute kommt."',
      options: ['wenn', 'ob', 'dass'],
      answer: 1,
      explanation: 'The original question is "Kommt er heute?" (yes/no), so the indirect question needs ob (= whether).',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex02',
      prompt: 'Complete: "___ es morgen regnet, bleiben wir zu Hause."',
      options: ['Wenn', 'Ob', 'Wann'],
      answer: 0,
      explanation: 'This is a condition (if it rains), so it is wenn. ob only reports yes/no questions, and wann only asks questions.',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex03',
      prompt: 'Wir kochen zusammen, ___ du morgen kommst. (if)',
      answer: ['wenn'],
      explanation: 'Your coming is a condition for cooking together, and you cannot say "whether" here, so it is wenn.',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex04',
      prompt: 'Ich frage mich, ___ sie das Buch gelesen hat. (whether)',
      answer: ['ob'],
      explanation: '"Hat sie das Buch gelesen?" is a yes/no question, so the indirect form uses ob. Note hat at the very end.',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex05',
      prompt: 'Which sentence is correct?',
      options: ['Ich weiß nicht, ob er kommt.', 'Ich weiß nicht, ob kommt er.', 'Ich weiß nicht, wenn er kommt.'],
      answer: 0,
      explanation: 'ob reports the yes/no question "Kommt er?" and sends kommt to the end. The second option keeps question word order; the third uses wenn, which cannot report a question.',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex06',
      prompt: 'Ich rufe dich an, ___ ich zu Hause bin. (when)',
      answer: ['wenn'],
      explanation: '"When I am home" is a future time / condition, so it is wenn. (als would be for a single past event.)',
    },
    {
      type: 'order',
      id: 'a2-05-wenn-ob-indirect-questions-ex07',
      prompt: 'Build the question: "Do you know whether the museum is open today?"',
      words: ['heute', 'Weißt', 'ist?', 'das', 'ob', 'du,', 'Museum', 'offen'],
      answer: ['Weißt du, ob das Museum heute offen ist?'],
      explanation: 'Main clause question (Weißt du), comma, then ob + das Museum heute offen + ist at the end. The main clause is a question, so the sentence ends with a question mark.',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex08',
      prompt: '"Ask him if he has time." Which word translates "if" here?',
      options: ['wenn', 'ob', 'wann'],
      answer: 1,
      explanation: 'You can replace this "if" with "whether" (ask him whether he has time), so it is ob: Frag ihn, ob er Zeit hat.',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex09',
      prompt: 'Complete: "Wenn ich Zeit habe, ___ dich an."',
      options: ['rufe ich', 'ich rufe', 'ich anrufe'],
      answer: 0,
      explanation: 'The wenn-clause is position 1, so the main verb rufe comes right after the comma, then ich. The prefix an stays at the end of the main clause.',
    },
    {
      type: 'translate',
      id: 'a2-05-wenn-ob-indirect-questions-ex10',
      prompt: 'Translate: "I don\'t know whether she is coming."',
      answer: ['Ich weiß nicht, ob sie kommt.'],
      hint: 'wissen = to know, kommen = to come',
      explanation: 'Ich weiß nicht, + ob + sie + kommt. The verb of the ob-clause is the last word.',
    },
    {
      type: 'translate',
      id: 'a2-05-wenn-ob-indirect-questions-ex11',
      prompt: 'Translate: "Do you know whether he has time?"',
      answer: ['Weißt du, ob er Zeit hat?', 'Wissen Sie, ob er Zeit hat?'],
      hint: 'Zeit haben = to have time',
      explanation: 'Weißt du, + ob + er Zeit + hat. The main clause is a question, so the whole sentence ends with a question mark.',
    },
    {
      type: 'translate',
      id: 'a2-05-wenn-ob-indirect-questions-ex12',
      prompt: 'Translate: "If it rains, I\'ll stay at home."',
      answer: ['Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnet, bleibe ich zuhause.'],
      hint: 'regnen = to rain, zu Hause bleiben = to stay at home',
      explanation: 'wenn-clause first (verb regnet at its end), comma, then the main verb bleibe immediately, then ich.',
    },
  ],
};

export default topic;
