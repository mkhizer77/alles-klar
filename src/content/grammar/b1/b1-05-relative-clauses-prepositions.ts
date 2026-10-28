import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-05-relative-clauses-prepositions',
  level: 'B1',
  unit: 2,
  order: 5,
  title: 'Relative clauses with prepositions, wo, was, wer',
  germanTerm: 'Relativsatz mit Präposition',
  tags: ['relative clauses', 'prepositions', 'pronouns', 'subordinate clauses'],
  summary: 'When the relative clause needs a preposition, the preposition comes first and decides the case (mit dem, auf die); places can use wo, and alles / etwas / nichts take was.',
  explanation: `
### What it is

Many verbs come with a preposition: *warten **auf***, *sprechen **über***, *spielen **mit***. When such a verb is inside a relative clause, the preposition moves to the **front** of the clause, right before the relative pronoun:

- Das ist der Freund, **mit dem** ich Tennis spiele. – *That is the friend I play tennis with.*

In English the preposition often goes to the end (*the friend I play tennis **with***). In German it **never** does. It always stands directly before the pronoun.

### How it works

Three steps:

1. Find the **preposition** that belongs to the verb or to the meaning (*warten auf*, *wohnen in*).
2. The **preposition** decides the **case** of the pronoun (*mit* + Dative, *für* + Accusative, *in* + Dative for a place).
3. **Gender and number** still come from the noun before the clause.

| noun before | preposition + pronoun | example |
|---|---|---|
| der Freund | mit **dem** | der Freund, mit dem ich spiele |
| die Frau | auf **die** | die Frau, auf die ich warte |
| das Haus | in **dem** | das Haus, in dem wir wohnen |
| die Kollegen | mit **denen** | die Kollegen, mit denen ich arbeite |
| der Film | über **den** | der Film, über den wir gesprochen haben |

### wo for places

If the noun is a **place**, you can replace *in dem / in der / an dem …* with **wo** (where):

- die Stadt, **in der** ich geboren bin = die Stadt, **wo** ich geboren bin
- das Café, **in dem** wir uns getroffen haben = das Café, **wo** wir uns getroffen haben

For movement use **wohin** (where to) and **woher** (where from): *die Stadt, **wohin** wir fahren*. Use *wo* only for places and times, never for people.

### was for "things in general"

The pronoun **was** is used after:

- **alles, etwas, nichts, viel, wenig**: *alles, **was** ich weiß*; *nichts, **was** mich interessiert*
- **das** and a neuter superlative: *das Beste, **was** ich je gesehen habe*
- a **whole sentence**: *Er hat die Prüfung bestanden, **was** mich sehr freut.* (what pleases me is the whole fact)

If *was* needs a preposition, use the **wo(r)-** form: *etwas, **worüber** ich mich freue*; *nichts, **wofür** ich Zeit habe*.

### You may also see …

**wer** at the start of a sentence can mean *whoever, anyone who*: *Wer zu spät kommt, muss draußen warten.* – *Whoever comes late has to wait outside.* You will read it in rules and sayings. Recognise it; you do not need to build sentences with it yet.

### Why it matters

Verbs with prepositions are everywhere in German, so relative clauses with prepositions are too. *Wo* and *was* let you avoid clumsy sentences and sound natural. The B1 exam loves *das Beste, was …* and *…, was mich freut* in letters and opinions.
`,
  examples: [
    { de: 'Das ist der Freund, mit dem ich oft Tennis spiele.', en: 'That is the friend I often play tennis with. (mit + Dative → dem)' },
    { de: 'Die Frau, auf die ich warte, kommt zu spät.', en: 'The woman I am waiting for is late. (warten auf + Accusative → die)' },
    { de: 'Die Stadt, in der ich geboren bin, liegt am Meer.', en: 'The town where I was born is by the sea. (in + Dative, place)' },
    { de: 'Die Stadt, wo ich geboren bin, liegt am Meer.', en: 'The town where I was born is by the sea. (wo replaces in der)' },
    { de: 'Das ist alles, was ich weiß.', en: 'That is all I know. (alles → was)' },
    { de: 'Er hat die Prüfung bestanden, was mich sehr freut.', en: 'He passed the exam, which makes me very happy. (was refers to the whole sentence)' },
    { de: 'Wer zu spät kommt, muss draußen warten.', en: 'Whoever comes late has to wait outside. (wer = whoever, for recognition)' },
  ],
  connections: [
    { topicId: 'b1-04-relative-clauses-dat-gen', note: 'The full relative pronoun table; here the preposition decides which row you need.' },
    { topicId: 'a2-12-verbs-with-prepositions', note: 'You need to know the fixed preposition of the verb (warten auf, sprechen über) before you can build the clause.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'worüber, wofür, woran are the wo-compounds, used after etwas / nichts / alles.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'in, an, auf take the Dative for a place (in dem Haus) and the Accusative for a direction.' },
  ],
  edgeCases: [
    'The preposition **never** goes to the end of the clause: *der Freund, mit dem ich spiele*, not *der Freund, dem ich mit spiele*.',
    '**wo** is for places and times only. For people use the pronoun: *die Frau, **mit der** ich arbeite*.',
    'After **alles, etwas, nichts** and **das Beste / das Schönste** use **was**, not *das*: *alles, was ich habe*.',
    'With *was* + preposition use **wo(r)-**: *etwas, **worauf** ich mich freue*, not *auf was*.',
    '**wer** at the start of a sentence can be a question (*Wer kommt?*) or mean *whoever* (*Wer kommt, bekommt Kuchen.*). The comma and the second clause tell you which.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-05-relative-clauses-prepositions-ex01',
      prompt: 'Complete: "Das ist der Freund, ___ ich oft Tennis spiele."',
      options: ['mit dem', 'mit den', 'mit der'],
      answer: 0,
      explanation: 'mit takes the Dative. der Freund is masculine → mit dem.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex02',
      prompt: 'Die Stadt, in ___ ich geboren bin, liegt am Meer.',
      answer: ['der'],
      explanation: 'in + Dative for a place. die Stadt is feminine → Dative der.',
    },
    {
      type: 'mc',
      id: 'b1-05-relative-clauses-prepositions-ex03',
      prompt: 'Which word can replace "in der" in "Die Stadt, in der ich geboren bin"?',
      options: ['wo', 'was', 'wer'],
      answer: 0,
      explanation: 'For places, wo can replace preposition + pronoun: die Stadt, wo ich geboren bin.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex04',
      prompt: 'Das ist alles, ___ ich weiß.',
      answer: ['was'],
      explanation: 'After alles the relative pronoun is was.',
    },
    {
      type: 'mc',
      id: 'b1-05-relative-clauses-prepositions-ex05',
      prompt: 'Complete: "Es gibt nichts, ___ ich mich freue."',
      options: ['worüber', 'über was', 'über dem'],
      answer: 0,
      explanation: 'After nichts you need was; with a preposition (sich freuen über) it becomes the wo(r)-form: worüber.',
    },
    {
      type: 'order',
      id: 'b1-05-relative-clauses-prepositions-ex06',
      prompt: 'Build the sentence: "The woman I am waiting for is late."',
      words: ['warte,', 'auf', 'spät.', 'Die', 'kommt', 'ich', 'Frau,', 'die', 'zu'],
      answer: ['Die Frau, auf die ich warte, kommt zu spät.'],
      explanation: 'warten auf + Accusative: feminine Accusative is die. The preposition stands directly before the pronoun.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex07',
      prompt: 'Die Kollegen, mit ___ ich arbeite, sind sehr nett.',
      answer: ['denen'],
      explanation: 'mit takes the Dative, and die Kollegen is plural: Dative plural = denen.',
    },
    {
      type: 'match',
      id: 'b1-05-relative-clauses-prepositions-ex08',
      prompt: 'Match each beginning with the right relative word.',
      pairs: [
        ['alles, ___ ich sehe', 'was'],
        ['der Ort, ___ wir uns treffen', 'wo'],
        ['die Freundin, mit ___ ich reise', 'der'],
        ['der Chef, für ___ ich arbeite', 'den'],
        ['das Haus, in ___ wir wohnen', 'dem'],
      ],
      explanation: 'alles → was; a place → wo; mit + Dative feminine → der; für + Accusative masculine → den; in + Dative neuter → dem.',
    },
    {
      type: 'mc',
      id: 'b1-05-relative-clauses-prepositions-ex09',
      prompt: 'Complete: "Er hat die Prüfung bestanden, ___ mich sehr freut."',
      options: ['was', 'das', 'dass'],
      answer: 0,
      explanation: 'The relative clause refers to the whole fact (he passed), not to one noun. For that German uses was.',
    },
    {
      type: 'translate',
      id: 'b1-05-relative-clauses-prepositions-ex10',
      prompt: 'Translate: "The house in which we live is old."',
      answer: ['Das Haus, in dem wir wohnen, ist alt.', 'Das Haus, wo wir wohnen, ist alt.'],
      hint: 'wohnen in + Dative, alt = old',
      explanation: 'in + Dative with neuter das Haus → in dem. Because it is a place, wo is also possible.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex11',
      prompt: 'Der Film, ___ den wir gesprochen haben, läuft heute. (about)',
      answer: ['über'],
      explanation: 'sprechen über + Accusative. The preposition goes before the pronoun den.',
    },
    {
      type: 'order',
      id: 'b1-05-relative-clauses-prepositions-ex12',
      prompt: 'Build the sentence: "That is the most beautiful thing I have ever seen."',
      words: ['gesehen', 'je', 'das', 'ich', 'was', 'Schönste,', 'ist', 'habe.', 'Das'],
      answer: ['Das ist das Schönste, was ich je gesehen habe.'],
      explanation: 'After a neuter superlative used as a noun (das Schönste) the relative pronoun is was. The verb habe goes to the end.',
    },
  ],
};

export default topic;
