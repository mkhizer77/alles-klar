import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-05b-relative-wo-was-wer',
  level: 'B1',
  unit: 2,
  order: 7,
  title: 'Relative clauses with wo, was and wer',
  germanTerm: 'Relativsatz: wo / was / wer',
  tags: ['relative clauses', 'pronouns', 'wo', 'was', 'subordinate clauses'],
  summary: 'Three special relative words: wo for places (die Stadt, wo …), was after alles / etwas / nichts / das Beste and after a whole sentence, and wer at the start meaning "whoever".',
  steps: [
    {
      title: 'wo for places',
      text: `
If the noun is a **place**, you can replace *in dem / in der / an dem …* with **wo** (where). *Die Stadt, in der ich geboren bin* = *die Stadt, **wo** ich geboren bin*.

For movement use **wohin** (where to) and **woher** (where from). Use *wo* only for places and times, **never for people**.
`,
      examples: [
        { de: 'Die Stadt, wo ich geboren bin, liegt am Meer.', en: 'The town where I was born is by the sea. (wo replaces in der)' },
        { de: 'Das Café, wo wir uns getroffen haben, ist geschlossen.', en: 'The café where we met is closed.' },
        { de: 'Die Stadt, wohin wir fahren, ist klein.', en: 'The town we are going to is small. (movement → wohin)' },
      ],
    },
    {
      title: 'was after alles, etwas, nichts',
      text: `
The pronoun **was** is used after words that mean "things in general": **alles, etwas, nichts, viel, wenig**. It is also used after **das** and after a neuter superlative used as a noun: *das Beste, **was** …*, *das Schönste, **was** …*.

Do not use *das* here: *alles, **was** ich habe*, not *alles, das ich habe*.
`,
      examples: [
        { de: 'Das ist alles, was ich weiß.', en: 'That is all I know. (alles → was)' },
        { de: 'Es gibt nichts, was mich interessiert.', en: 'There is nothing that interests me. (nichts → was)' },
        { de: 'Das ist das Beste, was ich je gesehen habe.', en: 'That is the best thing I have ever seen. (superlative → was)' },
      ],
    },
    {
      title: 'was after a whole sentence',
      text: `
**was** can also refer to a **whole sentence**, not to one noun. In *Er hat die Prüfung bestanden, was mich sehr freut* the thing that pleases me is the whole fact that he passed.

English says "which" here. German always uses *was*, with a comma before it and the verb at the end.
`,
      examples: [
        { de: 'Er hat die Prüfung bestanden, was mich sehr freut.', en: 'He passed the exam, which makes me very happy. (was = the whole fact)' },
        { de: 'Sie kommt nicht, was ich schade finde.', en: 'She is not coming, which I think is a pity.' },
      ],
    },
    {
      title: 'was + preposition becomes wo(r)-',
      text: `
If *was* needs a preposition (for example *sich freuen **über***), the two merge into a **wo(r)-** word: *über was* → **worüber**, *für was* → **wofür**, *auf was* → **worauf**. The *r* appears when the preposition starts with a vowel.

Recognise these forms when you read them; *etwas, **worüber** ich mich freue* means *something I am happy about*.
`,
      examples: [
        { de: 'Es gibt nichts, worüber ich mich freue.', en: 'There is nothing I am happy about. (über was → worüber)' },
        { de: 'Das ist etwas, wofür ich Zeit habe.', en: 'That is something I have time for. (für was → wofür)' },
      ],
    },
    {
      title: 'You may also see wer as whoever',
      text: `
**wer** at the start of a sentence can mean *whoever, anyone who*. The second clause often starts with **der**: *Wer fragt, **der** lernt.* You will read it in rules and sayings.

Recognise it; you do not need to build sentences with it yet. The comma and the second clause tell you it is not a question.
`,
      examples: [
        { de: 'Wer zu spät kommt, muss draußen warten.', en: 'Whoever comes late has to wait outside. (wer = whoever)' },
        { de: 'Wer zuerst kommt, der bekommt den besten Platz.', en: 'Whoever comes first gets the best seat. (wer … der)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'The sister topic: relative clauses with a preposition in front (mit dem, in der), which wo can replace for places.' },
    { topicId: 'a2-23-relative-clauses-nom-acc', note: 'The normal relative pronouns der / die / das; wo, was and wer are the special cases.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'worüber, wofür, woran are the wo-compounds, used after etwas / nichts / alles.' },
    { topicId: 'b1-14-adjectives-as-nouns', note: 'das Beste, das Schönste: neuter adjectives used as nouns take was as relative pronoun.' },
  ],
  edgeCases: [
    '**wo** is for places and times only. For people use the pronoun: *die Frau, **mit der** ich arbeite*.',
    'After **alles, etwas, nichts** and **das Beste / das Schönste** use **was**, not *das*: *alles, was ich habe*.',
    'With *was* + preposition use **wo(r)-**: *etwas, **worauf** ich mich freue*, not *auf was*.',
    '**wer** at the start of a sentence can be a question (*Wer kommt?*) or mean *whoever* (*Wer kommt, bekommt Kuchen.*). The comma and the second clause tell you which.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-05b-relative-wo-was-wer-ex01',
      prompt: 'Which word can replace "in der" in "Die Stadt, in der ich geboren bin"?',
      options: ['wo', 'was', 'wer'],
      answer: 0,
      explanation: 'For places, wo can replace preposition + pronoun: die Stadt, wo ich geboren bin.',
    },
    {
      type: 'fill',
      id: 'b1-05b-relative-wo-was-wer-ex02',
      prompt: 'Das ist alles, ___ ich weiß.',
      answer: ['was'],
      explanation: 'After alles the relative pronoun is was.',
    },
    {
      type: 'fill',
      id: 'b1-05b-relative-wo-was-wer-ex03',
      prompt: 'Das ist etwas, ___ ich nicht verstehe.',
      answer: ['was'],
      explanation: 'etwas means "something in general", so the relative pronoun is was, never das.',
    },
    {
      type: 'mc',
      id: 'b1-05b-relative-wo-was-wer-ex04',
      prompt: 'Which sentence is correct?',
      options: ['Die Frau, mit der ich arbeite, ist nett.', 'Die Frau, wo ich arbeite, ist nett.', 'Die Frau, was ich arbeite, ist nett.'],
      answer: 0,
      explanation: 'wo is only for places, was only for things in general. For a person you need the pronoun with its preposition: mit der.',
    },
    {
      type: 'match',
      id: 'b1-05b-relative-wo-was-wer-ex05',
      prompt: 'Match each beginning with the right relative word.',
      pairs: [
        ['alles, ___ ich habe', 'was'],
        ['das Dorf, ___ ich wohne', 'wo'],
        ['die Stadt, ___ wir fahren', 'wohin'],
        ['etwas, ___ ich mich freue', 'worüber'],
      ],
      explanation: 'alles → was; a place → wo; movement to a place → wohin; was + über (sich freuen über) → worüber.',
    },
    {
      type: 'mc',
      id: 'b1-05b-relative-wo-was-wer-ex06',
      prompt: 'Complete: "Er hat die Prüfung bestanden, ___ mich sehr freut."',
      options: ['was', 'das', 'dass'],
      answer: 0,
      explanation: 'The relative clause refers to the whole fact (he passed), not to one noun. For that German uses was.',
    },
    {
      type: 'fill',
      id: 'b1-05b-relative-wo-was-wer-ex07',
      prompt: 'Das ist das Beste, ___ mir je passiert ist.',
      answer: ['was'],
      explanation: 'das Beste is a neuter superlative used as a noun, so the relative pronoun is was.',
    },
    {
      type: 'order',
      id: 'b1-05b-relative-wo-was-wer-ex08',
      prompt: 'Build the sentence: "That is the most beautiful thing I have ever seen."',
      words: ['gesehen', 'je', 'das', 'ich', 'was', 'Schönste,', 'ist', 'habe.', 'Das'],
      answer: ['Das ist das Schönste, was ich je gesehen habe.'],
      explanation: 'After a neuter superlative used as a noun (das Schönste) the relative pronoun is was. The verb habe goes to the end.',
    },
    {
      type: 'order',
      id: 'b1-05b-relative-wo-was-wer-ex09',
      prompt: 'Build the sentence: "She is not coming, which I think is a pity."',
      words: ['schade', 'nicht,', 'Sie', 'finde.', 'was', 'kommt', 'ich'],
      answer: ['Sie kommt nicht, was ich schade finde.'],
      explanation: 'was refers to the whole first sentence (she is not coming). Comma before was, verb finde at the end.',
    },
    {
      type: 'mc',
      id: 'b1-05b-relative-wo-was-wer-ex10',
      prompt: 'Complete: "Es gibt nichts, ___ ich mich freue."',
      options: ['worüber', 'über was', 'über dem'],
      answer: 0,
      explanation: 'After nichts you need was; with a preposition (sich freuen über) it becomes the wo(r)-form: worüber.',
    },
    {
      type: 'mc',
      id: 'b1-05b-relative-wo-was-wer-ex11',
      prompt: 'You read: "Wer zu spät kommt, muss draußen warten." What does "wer" mean here?',
      options: ['whoever', 'who? (a question)', 'where'],
      answer: 0,
      explanation: 'With a comma and a second clause, wer means whoever / anyone who. A question would end after kommt with a question mark.',
    },
    {
      type: 'translate',
      id: 'b1-05b-relative-wo-was-wer-ex12',
      prompt: 'Translate: "The town where I live is small."',
      answer: ['Die Stadt, wo ich wohne, ist klein.', 'Die Stadt, in der ich wohne, ist klein.'],
      hint: 'die Stadt = town, klein = small',
      explanation: 'A place can take wo instead of in der. Both are correct; wo is shorter and very common in speech.',
    },
  ],
};

export default topic;
