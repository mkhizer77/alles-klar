import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-06-als-vs-wenn',
  level: 'A2',
  unit: 2,
  order: 6,
  title: 'als, wenn and immer wenn: three ways to say "when"',
  germanTerm: 'als / wenn',
  tags: ['subordinate clauses', 'conjunctions', 'time', 'als', 'wenn', 'immer wenn', 'jedes Mal', 'jedes Mal, wenn', 'wann', 'when'],
  summary: 'Three ways to say "when": als for one time in the past, wenn for the present, the future or a condition, and immer wenn / jedes Mal, wenn for every time something happens.',
  explanation: `
### What it is

English uses **when** for everything: *When I was a child*, *When I have time*, *Whenever he visited*. German has three ways to say it, and the choice depends on **time** and **how often**:

- **als** = one time in the past: *Als ich Kind war, hatte ich einen Hund.* – *When I was a child, I had a dog.*
- **wenn** = now, in the future, or a condition: *Wenn ich Zeit habe, lese ich.* – *When I have time, I read.*
- **immer wenn** / **jedes Mal, wenn** = every time: *Immer wenn er kam, brachte er Blumen mit.* – *Every time he came, he brought flowers.*

All three start a subordinate clause (*Nebensatz*, the part of the sentence that cannot stand alone), so the **verb goes to the end** of that clause.

### The rule of thumb

| | als | wenn | immer wenn / jedes Mal, wenn |
|---|---|---|---|
| time | past only | present or future | past, present or future |
| how often | **once** (one event or one period) | not about the past; a condition or a time | **every time** |
| English | when (that one time) | when / if | whenever, every time |
| example | **Als** ich 18 war, machte ich den Führerschein. | **Wenn** ich müde bin, gehe ich früh ins Bett. | **Immer wenn** ich müde war, ging ich früh ins Bett. |

### als: one time in the past

Use **als** for one moment in the past:

- **Als** er ankam, war niemand da. – *When he arrived, nobody was there.*
- **Als** ich das hörte, war ich sehr froh. – *When I heard that, I was very happy.*

Use **als** also for one long period in the past, if it happened only once in your life:

- **Als** ich Kind war, wohnten wir in Hamburg. – *When I was a child, we lived in Hamburg.* (you were a child only once)
- **Als** ich in Berlin studierte, … – *When I was studying in Berlin, …*

### wenn: present, future or a condition

- **Wenn** ich Zeit habe, lese ich. – *When I have time, I read.*
- **Wenn** du morgen kommst, kochen wir zusammen. – *If / when you come tomorrow, we'll cook together.*
- **Wenn** es regnet, bleiben wir zu Hause. – *If it rains, we stay at home.*

### immer wenn / jedes Mal, wenn: every time

For something that happened **again and again**, German uses **wenn**, even in the past. The signal words **immer wenn** (whenever) and **jedes Mal, wenn** (every time) make this clear:

- **Immer wenn** er kam, brachte er Blumen mit. – *Whenever he came, he brought flowers.*
- **Jedes Mal, wenn** sie anrief, freute ich mich. – *Every time she called, I was happy.*
- **Immer wenn** ich in Berlin bin, besuche ich meine Tante. – *Whenever I am in Berlin, I visit my aunt.* (present: also fine)

Note the comma after *jedes Mal*: *Jedes Mal, wenn …*. With *immer wenn* there is no comma between the two words.

### A quick test

Ask two questions:

1. Is it in the **past**? If no → **wenn**.
2. If yes: did it happen **once** (one event, or one period like childhood)? → **als**. Did it happen **again and again**? → **immer wenn** or **jedes Mal, wenn** (or simply **wenn**).

### And wann?

**wann** is only a question word: *Wann kommst du?* and in indirect questions *Ich weiß nicht, wann er kommt.* It never joins two clauses in the sense of *when … then*.

### Why it matters

*als* is the word you need for every story about your past: *Als ich jung war …*, *Als wir in Spanien waren …*. Using *wenn* there is one of the most common learner mistakes, because *wenn* in the past means it happened many times. Get the three apart (one time → als, every time → immer wenn, now or future → wenn) and your stories immediately sound natural.
`,
  examples: [
    { de: 'Als ich Kind war, hatte ich einen Hund.', en: 'When I was a child, I had a dog. (one period in the past → als)' },
    { de: 'Als er nach Hause kam, war es schon dunkel.', en: 'When he came home, it was already dark. (one event → als)' },
    { de: 'Wenn ich Zeit habe, lese ich ein Buch.', en: 'When I have time, I read a book. (present → wenn)' },
    { de: 'Wenn du morgen kommst, kochen wir zusammen.', en: "If you come tomorrow, we'll cook together. (future → wenn)" },
    { de: 'Immer wenn er kam, brachte er Blumen mit.', en: 'Whenever he came, he brought flowers. (every time, in the past → immer wenn)' },
    { de: 'Jedes Mal, wenn sie anrief, freute ich mich.', en: 'Every time she called, I was happy. (jedes Mal, wenn = every time)' },
    { de: 'Immer wenn ich in Berlin bin, besuche ich meine Tante.', en: 'Whenever I am in Berlin, I visit my aunt. (every time, present → immer wenn)' },
    { de: 'Wann kommst du?', en: 'When are you coming? (question → wann)' },
  ],
  connections: [
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'wenn as a condition and wann in indirect questions.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'als and wenn both send the verb to the end of the clause.' },
    { topicId: 'a2-02-prateritum-verbs', note: 'als-clauses about the past are often written in the Präteritum.' },
    { topicId: 'b1-02-temporal-clauses', note: 'More time conjunctions (nachdem, bevor, während, sobald) build on als and wenn.' },
  ],
  edgeCases: [
    '**Als** is used for a long period too, as long as it happened once: *Als ich in Paris wohnte* (I lived there once, for years). Learners often wrongly reach for wenn here.',
    '**wenn** in the past means "every time": *Wenn ich ihn sah, grüßte er.* If you mean one specific time, it must be **als**.',
    '**wann** is only for questions. *Wann ich kam, war es dunkel* ✗ → *Als ich kam, war es dunkel* ✓.',
    'The signal words **immer wenn** and **jedes Mal, wenn** always go with *wenn*, never with *als*: *immer als* does not exist.',
    'Comma: *Jedes Mal, wenn …* (comma after jedes Mal), but *Immer wenn …* (no comma).',
    '*als* also means "than" in comparisons (*größer als ich*). Context tells you which one it is.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-06-als-vs-wenn-ex01',
      prompt: 'Complete: "___ ich gestern nach Hause kam, war es schon dunkel."',
      options: ['Als', 'Wenn', 'Wann'],
      answer: 0,
      explanation: 'A single event in the past (yesterday, once) → als. wenn would mean every time; wann only asks a question.',
    },
    {
      type: 'mc',
      id: 'a2-06-als-vs-wenn-ex02',
      prompt: 'Complete: "___ ich Zeit habe, lese ich."',
      options: ['Als', 'Wenn', 'Wann'],
      answer: 1,
      explanation: 'Present tense (habe) and a repeated situation → wenn. als can only be used for the past.',
    },
    {
      type: 'fill',
      id: 'a2-06-als-vs-wenn-ex03',
      prompt: '___ ich Kind war, wohnten wir in Hamburg. (when)',
      answer: ['Als'],
      explanation: 'Childhood is one period in the past that happened once, so it is als.',
    },
    {
      type: 'fill',
      id: 'a2-06-als-vs-wenn-ex04',
      prompt: 'Immer ___ er kam, brachte er Blumen mit. (when)',
      answer: ['wenn'],
      explanation: 'immer signals a repeated event. Repeated past = wenn, even though the sentence is in the past.',
    },
    {
      type: 'match',
      id: 'a2-06-als-vs-wenn-ex05',
      prompt: 'Match the clause beginnings with their endings.',
      pairs: [
        ['Als ich 18 war,', 'machte ich den Führerschein.'],
        ['Wenn ich müde bin,', 'gehe ich früh ins Bett.'],
        ['Jedes Mal, wenn sie anrief,', 'freute ich mich.'],
        ['Als er ankam,', 'war niemand da.'],
      ],
      explanation: 'als pairs with single past events (18 sein, ankommen); wenn with the present (müde sein) and with repeated past events (jedes Mal).',
    },
    {
      type: 'order',
      id: 'a2-06-als-vs-wenn-ex06',
      prompt: 'Build the sentence: "When I was young, I played football."',
      words: ['jung', 'Als', 'Fußball.', 'ich', 'spielte', 'war,', 'ich'],
      answer: ['Als ich jung war, spielte ich Fußball.'],
      explanation: 'als-clause first with war at its end, comma, then the main verb spielte directly after the comma.',
    },
    {
      type: 'mc',
      id: 'a2-06-als-vs-wenn-ex07',
      prompt: 'Complete the question: "___ kommst du morgen?"',
      options: ['Als', 'Wenn', 'Wann'],
      answer: 2,
      explanation: 'This is a direct question asking for a time, so it needs the question word wann.',
    },
    {
      type: 'fill',
      id: 'a2-06-als-vs-wenn-ex08',
      prompt: '___ es morgen regnet, bleiben wir zu Hause. (if / when)',
      answer: ['Wenn'],
      explanation: 'Future (morgen) and a condition → wenn. als is never used for the future.',
    },
    {
      type: 'mc',
      id: 'a2-06-als-vs-wenn-ex09',
      prompt: 'Which sentence is correct for "When I lived in Berlin, I had no car"?',
      options: ['Als ich in Berlin wohnte, hatte ich kein Auto.', 'Wenn ich in Berlin wohnte, hatte ich kein Auto.', 'Wann ich in Berlin wohnte, hatte ich kein Auto.'],
      answer: 0,
      explanation: 'Living in Berlin was one period in the past, so als. It does not matter that the period was long.',
    },
    {
      type: 'translate',
      id: 'a2-06-als-vs-wenn-ex10',
      prompt: 'Translate: "When I was a child, I had a dog."',
      answer: ['Als ich ein Kind war, hatte ich einen Hund.', 'Als ich Kind war, hatte ich einen Hund.'],
      hint: 'das Kind = child, der Hund = dog',
      explanation: 'One past period → als. After the comma the main verb hatte comes first, then ich.',
    },
    {
      type: 'translate',
      id: 'a2-06-als-vs-wenn-ex11',
      prompt: 'Translate: "When I have time, I cook."',
      answer: ['Wenn ich Zeit habe, koche ich.'],
      hint: 'Zeit haben = to have time, kochen = to cook',
      explanation: 'Present, repeated → wenn. Verb habe at the end of the wenn-clause, koche right after the comma.',
    },
    {
      type: 'fill',
      id: 'a2-06-als-vs-wenn-ex12',
      prompt: 'Ich war sehr glücklich, ___ ich die Nachricht bekam. (when)',
      answer: ['als'],
      explanation: 'Receiving the news happened once, in the past → als. The als-clause can also come second.',
    },
    {
      type: 'match',
      id: 'a2-06-als-vs-wenn-ex13',
      prompt: 'Match each sentence with the reason for its "when" word.',
      pairs: [
        ['Als ich zehn war, bekam ich ein Fahrrad.', 'one time in the past → als'],
        ['Wenn ich morgen Zeit habe, rufe ich dich an.', 'future → wenn'],
        ['Immer wenn wir Oma besuchten, gab es Kuchen.', 'every time → immer wenn'],
        ['Wann fängt der Film an?', 'question → wann'],
      ],
      explanation: 'als = one time in the past; wenn = present, future or condition; immer wenn / jedes Mal, wenn = every time; wann = only in questions.',
    },
    {
      type: 'mc',
      id: 'a2-06-als-vs-wenn-ex14',
      prompt: 'Fill the three gaps in order: "___ ich klein war, hatte ich Angst vor Hunden. ___ ich heute einen Hund sehe, freue ich mich. ___ wir im Park waren, spielte ich mit den Hunden."',
      options: ['Als / Wenn / Immer wenn', 'Wenn / Als / Immer wenn', 'Immer wenn / Wenn / Als'],
      answer: 0,
      explanation: 'Being small is one period in the past → als. Seeing a dog today is present → wenn. Being in the park happened again and again → immer wenn.',
    },
    {
      type: 'fill',
      id: 'a2-06-als-vs-wenn-ex15',
      prompt: 'Jedes ___, wenn ich ihn sehe, lacht er. (every time)',
      answer: ['Mal'],
      explanation: 'jedes Mal, wenn = every time. Note the comma after Mal and the verb (sehe) at the end of the wenn-clause.',
    },
  ],
};

export default topic;
