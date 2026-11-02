import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-18b-concession',
  level: 'B1',
  unit: 7,
  order: 26,
  title: 'Concession: obwohl, trotzdem, dennoch',
  germanTerm: 'konzessiv',
  tags: ['connectors', 'subordinate clauses', 'word order', 'concession'],
  summary: 'Concession connectors say that something happens even though there is an obstacle: obwohl goes in the clause with the obstacle (verb at the end), trotzdem and dennoch in the clause with the surprising result (verb right after).',
  steps: [
    {
      title: 'obwohl: although',
      text: `
A **concession** (*konzessiv*, "in spite of") links an obstacle with a surprising result: it rains, but we still go out.

**obwohl** (although) is a subjunction (a word that starts a subordinate clause): it goes in the clause with the **obstacle**, and the verb moves to the **end**. When the obwohl-clause comes first, the main clause starts with its verb.
`,
      examples: [
        { de: 'Obwohl es regnet, gehen wir spazieren.', en: 'Although it is raining, we go for a walk. (regnet at the end; then gehen wir)' },
        { de: 'Er hilft mir immer, obwohl er wenig Zeit hat.', en: 'He always helps me, although he has little time.' },
        { de: 'Obwohl sie müde ist, lernt sie weiter.', en: 'Although she is tired, she keeps studying.' },
      ],
    },
    {
      title: 'trotzdem and dennoch: nevertheless',
      text: `
**trotzdem** (nevertheless, all the same) is an adverb connector. It goes in the clause with the **surprising result**, takes position 1, and the verb comes **right after** it.

**dennoch** means the same as *trotzdem* but sounds more formal and written.
`,
      examples: [
        { de: 'Es regnet, trotzdem gehen wir spazieren.', en: 'It is raining, nevertheless we go for a walk. (gehen right after trotzdem)' },
        { de: 'Er ist krank. Trotzdem geht er zur Arbeit.', en: 'He is ill. Nevertheless he goes to work.' },
        { de: 'Es war teuer. Dennoch habe ich es gekauft.', en: 'It was expensive. Nevertheless I bought it. (dennoch = formal trotzdem)' },
      ],
    },
    {
      title: 'obwohl or trotzdem? Pick the clause',
      text: `
Both say the same thing, but they sit in **different clauses**. *obwohl* marks the obstacle; *trotzdem* marks the result. So one sentence needs only **one** of them. *Obwohl es regnet, gehen wir* = *Es regnet, trotzdem gehen wir*. Do not use both together.
`,
      examples: [
        { de: 'Obwohl es kalt ist, gehen wir schwimmen.', en: 'Although it is cold, we go swimming. (obwohl with the obstacle)' },
        { de: 'Es ist kalt, trotzdem gehen wir schwimmen.', en: 'It is cold, nevertheless we go swimming. (trotzdem with the result)' },
      ],
    },
    {
      title: 'Two short forms: trotz and zwar … aber',
      text: `
**trotz** + Genitive (the "of" case) says "in spite of" with a noun instead of a clause: *trotz des Regens*.

**zwar … aber** (admittedly … but) is the two-part way: you admit the obstacle with *zwar*, then give the result after *aber* in normal order.
`,
      examples: [
        { de: 'Trotz des Regens gehen wir spazieren.', en: 'In spite of the rain we go for a walk. (trotz + Genitive noun)' },
        { de: 'Es regnet zwar, aber wir gehen spazieren.', en: 'It is raining, admittedly, but we go for a walk.' },
        { de: 'Das Hotel ist zwar teuer, aber sehr schön.', en: 'The hotel is expensive, admittedly, but very beautiful.' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-18-cause-consequence-concession', note: 'The sibling topic: the same three word-order types with weil, denn, deshalb and sodass.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'obwohl was introduced there as a subjunction with the verb at the end.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'trotzdem is a position-1 adverb from A2; dennoch joins the same group.' },
    { topicId: 'a2-15-genitive-prepositions', note: 'trotz + Genitive expresses concession with a noun instead of a clause.' },
    { topicId: 'b1-17-two-part-conjunctions', note: 'zwar … aber is the two-part way to express concession.' },
  ],
  edgeCases: [
    '**trotzdem** and **obwohl** are not interchangeable: *obwohl* starts the clause with the obstacle, *trotzdem* starts the clause with the result.',
    'Do not combine **obwohl** and **trotzdem** in one sentence: *Obwohl es regnet, gehen wir trotzdem* is heard in speech but is doubled.',
    '**trotz** takes the Genitive: *trotz des Regens*, *trotz der Kälte*. It needs a noun, never a clause: not *trotz es regnet*.',
    '**dennoch** is the same as *trotzdem*, only more formal. Both take position 1 with the verb right after.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-18b-concession-ex01',
      prompt: 'Which connector sends the verb to the end of its clause?',
      options: ['obwohl', 'trotzdem', 'denn', 'deshalb'],
      answer: 0,
      explanation: 'obwohl is a subjunction and starts a subordinate clause. trotzdem and deshalb are adverbs (verb follows them), denn is position 0 (normal order).',
    },
    {
      type: 'fill',
      id: 'b1-18b-concession-ex02',
      prompt: '___ es regnet, gehen wir spazieren. (although)',
      answer: ['Obwohl'],
      explanation: 'obwohl introduces the obstacle as a subordinate clause (verb regnet at the end). The main clause then starts with the verb: gehen wir.',
    },
    {
      type: 'mc',
      id: 'b1-18b-concession-ex03',
      prompt: 'Complete: "Er ist krank. ___ geht er zur Arbeit."',
      options: ['Trotzdem', 'Obwohl', 'Deshalb', 'Weil'],
      answer: 0,
      explanation: 'Going to work while ill is a surprising result, so we need concession in the result clause: trotzdem. Obwohl would send the verb to the end; deshalb would mean "therefore".',
    },
    {
      type: 'fill',
      id: 'b1-18b-concession-ex04',
      prompt: 'Es war teuer. ___ habe ich es gekauft. (nevertheless, formal)',
      answer: ['Dennoch', 'Trotzdem'],
      explanation: 'dennoch is the formal twin of trotzdem. Both take position 1, so the verb habe comes right after.',
    },
    {
      type: 'match',
      id: 'b1-18b-concession-ex05',
      prompt: 'Match each connector with its meaning and word order.',
      pairs: [
        ['obwohl', 'although: verb at the end'],
        ['trotzdem', 'nevertheless: verb right after it'],
        ['dennoch', 'nevertheless, formal: verb right after it'],
        ['trotz', 'in spite of: noun in the Genitive'],
        ['zwar … aber', 'admittedly … but: two-part pair'],
      ],
      explanation: 'obwohl is a subjunction, trotzdem and dennoch are adverbs, trotz is a preposition and zwar … aber is a two-part conjunction. Same meaning, different word order.',
    },
    {
      type: 'mc',
      id: 'b1-18b-concession-ex06',
      prompt: 'Complete: "___ des Regens gehen wir spazieren."',
      options: ['Trotz', 'Obwohl', 'Trotzdem'],
      answer: 0,
      explanation: 'des Regens is a noun in the Genitive, not a clause. Only the preposition trotz can take a noun: trotz des Regens = in spite of the rain.',
    },
    {
      type: 'order',
      id: 'b1-18b-concession-ex07',
      prompt: 'Build the sentence: "It was cold, nevertheless we went swimming."',
      words: ['kalt,', 'war', 'Es', 'wir', 'trotzdem', 'gegangen.', 'sind', 'schwimmen'],
      answer: ['Es war kalt, trotzdem sind wir schwimmen gegangen.'],
      explanation: 'trotzdem is an adverb in position 1 of the second clause, so the verb sind follows it directly and the subject wir comes after.',
    },
    {
      type: 'mc',
      id: 'b1-18b-concession-ex08',
      prompt: 'Which sentence is correct?',
      options: [
        'Obwohl er wenig Zeit hat, hilft er mir.',
        'Obwohl er hat wenig Zeit, hilft er mir.',
        'Obwohl er wenig Zeit hat, er hilft mir.',
      ],
      answer: 0,
      explanation: 'obwohl sends hat to the end of its clause. The obwohl-clause fills position 1, so the main clause must start with the verb: hilft er mir.',
    },
    {
      type: 'translate',
      id: 'b1-18b-concession-ex09',
      prompt: 'Translate: "Although it is cold, we are going swimming."',
      answer: ['Obwohl es kalt ist, gehen wir schwimmen.', 'Wir gehen schwimmen, obwohl es kalt ist.'],
      hint: 'obwohl; schwimmen gehen = to go swimming',
      explanation: 'obwohl sends ist to the end of its clause. If the obwohl-clause comes first, the main clause starts with the verb: gehen wir.',
    },
    {
      type: 'mc',
      id: 'b1-18b-concession-ex10',
      prompt: 'Say the same with trotzdem: "Obwohl es kalt ist, gehen wir raus."',
      options: [
        'Es ist kalt, trotzdem gehen wir raus.',
        'Es ist kalt, deshalb gehen wir raus.',
        'Es ist kalt, trotzdem wir gehen raus.',
      ],
      answer: 0,
      explanation: 'trotzdem goes in the result clause and the verb follows it directly: trotzdem gehen wir. deshalb would mean "therefore", the opposite idea.',
    },
    {
      type: 'fill',
      id: 'b1-18b-concession-ex11',
      prompt: 'Das Hotel ist ___ teuer, aber sehr schön. (admittedly)',
      answer: ['zwar'],
      explanation: 'zwar … aber admits the obstacle (teuer) and then gives the result after aber. zwar sits inside the first clause, aber is position 0.',
    },
  ],
};

export default topic;
