import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-02-temporal-clauses',
  level: 'B1',
  unit: 1,
  order: 2,
  title: 'Temporal clauses: nachdem, bevor, während, seit(dem), bis, sobald, solange',
  germanTerm: 'Temporalsätze',
  tags: ['conjunctions', 'subordinate clauses', 'time', 'word order'],
  summary: 'Temporal clauses answer "when?" with a subordinating conjunction (nachdem, bevor, während …) that sends the verb to the end of the clause.',
  explanation: `
### What it is

A **temporal clause** (*Temporalsatz*) is a subordinate clause that tells you **when** something happens: *before* I eat, *after* we arrived, *while* she works, *until* the bus comes. Each one starts with a **subordinating conjunction** (*Subjunktion*), and like every subordinate clause in German, it sends the conjugated verb to the **end**.

- **Bevor** ich esse, wasche ich mir die Hände. – *Before I eat, I wash my hands.*

### The seven conjunctions

| conjunction | meaning | typical use |
|---|---|---|
| **nachdem** | after | earlier event; often with Plusquamperfekt |
| **bevor** | before | the later event; same tense as the main clause |
| **während** | while | two things at the same time |
| **seit / seitdem** | since (a time) | something that started and is still true |
| **bis** | until | an end point |
| **sobald** | as soon as | one thing immediately after another |
| **solange** | as long as | two things that last the same time |

### Word order

Two things to remember:

1. In the temporal clause the **verb goes last**: *… während ich **koche** …*
2. If the temporal clause comes **first**, the main clause starts with its **verb** (the whole clause counts as position one): *Während ich koche, **hört** er Musik.*

You can also put the main clause first: *Er hört Musik, während ich koche.* Both orders are correct; the comma always separates the two clauses.

### Tenses: which one where?

Most of these conjunctions take the **same tense** in both clauses: *Bevor ich ins Bett **gehe**, **lese** ich.* / *Solange es **regnet**, **bleiben** wir drinnen.*

**nachdem** is the exception. The *nachdem* clause is one step further in the past than the main clause:

| nachdem clause | main clause |
|---|---|
| Plusquamperfekt: *Nachdem wir gegessen **hatten**,* | Präteritum: *gingen wir spazieren.* |
| Perfekt: *Nachdem wir gegessen **haben**,* | Präsens: *gehen wir spazieren.* |

**seit / seitdem** describes something that started in the past and still continues, so German uses the **present**: *Seit er in Deutschland **wohnt**, spricht er besser Deutsch.* (English says "has been living"; German says *wohnt*.)

### bevor and nachdem vs vor and nach

Do not mix the conjunctions with the prepositions. *Vor* and *nach* are followed by a **noun** (*nach dem Essen*); *bevor* and *nachdem* are followed by a **whole clause with a verb** (*nachdem wir gegessen hatten*).

### Why it matters

Temporal clauses let you connect events in time without a string of short sentences. In the B1 exam you are expected to write *Nachdem ich … hatte, …* and *Sobald …, …* naturally, both in letters and in spoken stories. They also prepare you for *als* vs *wenn*, which you already know from A2, and for the other subordinate clauses in Unit 7.
`,
  examples: [
    { de: 'Bevor ich esse, wasche ich mir die Hände.', en: 'Before I eat, I wash my hands.' },
    { de: 'Nachdem wir gegessen hatten, gingen wir spazieren.', en: 'After we had eaten, we went for a walk. (nachdem + Plusquamperfekt)' },
    { de: 'Während ich koche, hört er Musik.', en: 'While I cook, he listens to music.' },
    { de: 'Seit er in Deutschland wohnt, spricht er viel besser Deutsch.', en: 'Since he has been living in Germany, he speaks much better German. (present tense in German)' },
    { de: 'Ich warte hier, bis du zurückkommst.', en: 'I will wait here until you come back.' },
    { de: 'Sobald ich die Nachricht bekomme, rufe ich dich an.', en: 'As soon as I get the message, I will call you.' },
    { de: 'Du kannst hier bleiben, solange du willst.', en: 'You can stay here as long as you want.' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'Temporal clauses follow the same rule: the verb goes to the end.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'bis, seit(dem), bevor and nachdem were introduced there; here they are used in full.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'als and wenn are temporal conjunctions too; this topic adds the rest of the set.' },
    { topicId: 'b1-01-plusquamperfekt', note: 'nachdem is the conjunction that most often needs the Plusquamperfekt.' },
  ],
  edgeCases: [
    'After **nachdem** the two clauses are in **different** tenses (Plusquamperfekt + Präteritum). After **bevor** they are in the **same** tense.',
    '**seit / seitdem** + present tense, not Perfekt: *Seit ich hier wohne* (not *gewohnt habe*), because the situation continues.',
    '**während** is also a genitive preposition (*während des Essens*). As a conjunction it is followed by a clause with a verb at the end.',
    '**bis** as a conjunction has no *dass*: *bis du kommst*, not *bis dass du kommst*.',
    'Do not confuse **solange** (as long as, duration) with **sobald** (as soon as, a point in time).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex01',
      prompt: 'Complete: "___ ich esse, wasche ich mir die Hände."',
      options: ['Bevor', 'Nachdem', 'Solange'],
      answer: 0,
      explanation: 'You wash your hands before eating, so bevor. Nachdem would mean after; solange would mean as long as.',
    },
    {
      type: 'fill',
      id: 'b1-02-temporal-clauses-ex02',
      prompt: '___ er in Deutschland wohnt, spricht er viel besser Deutsch. (since)',
      answer: ['Seit', 'Seitdem'],
      explanation: 'seit or seitdem introduces something that started in the past and is still true. Note the present tense wohnt.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex03',
      prompt: 'Complete: "Ich warte hier, ___ du zurückkommst."',
      options: ['bis', 'seit', 'nachdem'],
      answer: 0,
      explanation: 'bis = until: the waiting ends when you come back.',
    },
    {
      type: 'match',
      id: 'b1-02-temporal-clauses-ex04',
      prompt: 'Match each conjunction with its meaning.',
      pairs: [
        ['nachdem', 'after'],
        ['bevor', 'before'],
        ['während', 'while'],
        ['sobald', 'as soon as'],
        ['solange', 'as long as'],
        ['bis', 'until'],
      ],
      explanation: 'All six are subordinating conjunctions: the verb goes to the end of their clause.',
    },
    {
      type: 'order',
      id: 'b1-02-temporal-clauses-ex05',
      prompt: 'Build the sentence: "While I cook, he listens to music."',
      words: ['hört', 'koche,', 'Während', 'Musik.', 'er', 'ich'],
      answer: ['Während ich koche, hört er Musik.'],
      explanation: 'Verb at the end of the während clause (koche), then the main clause starts with its verb (hört) because the subordinate clause fills position one.',
    },
    {
      type: 'fill',
      id: 'b1-02-temporal-clauses-ex06',
      prompt: '___ ich die Nachricht bekomme, rufe ich dich an. (as soon as)',
      answer: ['Sobald'],
      explanation: 'sobald = as soon as: the call happens immediately after the message arrives.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex07',
      prompt: 'Which tense combination is typical with nachdem in a past story?',
      options: ['Plusquamperfekt in the nachdem clause, Präteritum in the main clause', 'Präsens in both clauses', 'Futur in the nachdem clause, Perfekt in the main clause'],
      answer: 0,
      explanation: 'The nachdem event happens earlier, so it is one step further back: Nachdem wir gegessen hatten, gingen wir spazieren.',
    },
    {
      type: 'fill',
      id: 'b1-02-temporal-clauses-ex08',
      prompt: 'Nachdem wir gegessen ___, gingen wir spazieren. (haben)',
      answer: ['hatten'],
      explanation: 'Plusquamperfekt in the nachdem clause: hatten + gegessen, and the helper goes to the very end.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex09',
      prompt: 'Complete: "Du kannst hier bleiben, ___ du willst."',
      options: ['solange', 'bis', 'nachdem'],
      answer: 0,
      explanation: 'solange = as long as: the staying lasts exactly as long as the wanting. bis would need an end point (bis du gehen musst).',
    },
    {
      type: 'translate',
      id: 'b1-02-temporal-clauses-ex10',
      prompt: 'Translate: "Before I go to bed, I read a book."',
      answer: ['Bevor ich ins Bett gehe, lese ich ein Buch.', 'Bevor ich schlafen gehe, lese ich ein Buch.', 'Ich lese ein Buch, bevor ich ins Bett gehe.', 'Ich lese ein Buch, bevor ich schlafen gehe.'],
      hint: 'ins Bett gehen = to go to bed',
      explanation: 'bevor sends gehe to the end of its clause. If the bevor clause comes first, the main clause starts with lese.',
    },
    {
      type: 'order',
      id: 'b1-02-temporal-clauses-ex11',
      prompt: 'Build the sentence: "Until the bus comes, we read the newspaper."',
      words: ['Zeitung.', 'Bus', 'lesen', 'Bis', 'die', 'kommt,', 'wir', 'der'],
      answer: ['Bis der Bus kommt, lesen wir die Zeitung.'],
      explanation: 'bis clause first with kommt at its end, then the main clause begins with the verb lesen.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex12',
      prompt: 'Which sentence has the correct word order?',
      options: ['Sobald der Regen aufhört, gehen wir raus.', 'Sobald der Regen hört auf, gehen wir raus.', 'Sobald hört der Regen auf, wir gehen raus.'],
      answer: 0,
      explanation: 'In the subordinate clause the separable verb comes together at the end (aufhört). The main clause then starts with gehen.',
    },
  ],
};

export default topic;
