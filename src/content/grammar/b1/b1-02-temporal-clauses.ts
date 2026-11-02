import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-02-temporal-clauses',
  level: 'B1',
  unit: 1,
  order: 2,
  title: 'nachdem and bevor: one thing after another',
  germanTerm: 'Temporalsätze: nachdem, bevor',
  tags: ['conjunctions', 'subordinate clauses', 'time', 'word order'],
  summary: 'nachdem (after) and bevor (before) put two events in order. Both send the verb to the end; after nachdem the clause is one tense further back.',
  steps: [
    {
      title: 'What nachdem and bevor do',
      text: `
A **temporal clause** (*Temporalsatz*) tells you **when** something happens. **nachdem** means *after*, **bevor** means *before*. Each one starts a subordinate clause (a clause that cannot stand alone), so the verb goes to the **end** of that clause.

With *nachdem* and *bevor* you can put two events in order without a string of short sentences.
`,
      examples: [
        { de: 'Bevor ich esse, wasche ich mir die Hände.', en: 'Before I eat, I wash my hands.' },
        { de: 'Nachdem wir gegessen hatten, gingen wir spazieren.', en: 'After we had eaten, we went for a walk.' },
        { de: 'Ich dusche, bevor ich frühstücke.', en: 'I shower before I have breakfast. (verb at the end: frühstücke)' },
      ],
    },
    {
      title: 'Verb last, then the main clause',
      text: `
Two things to remember. In the temporal clause the **verb goes last**: *bevor ich ins Bett **gehe***. If the temporal clause comes **first**, the main clause starts with its **verb**, because the whole clause counts as position one: *Bevor ich ins Bett gehe, **lese** ich.*

You can also put the main clause first. Both orders are correct; the comma always separates the two clauses.
`,
      examples: [
        { de: 'Bevor ich ins Bett gehe, lese ich ein Buch.', en: 'Before I go to bed, I read a book. (main clause starts with lese)' },
        { de: 'Ich lese ein Buch, bevor ich ins Bett gehe.', en: 'I read a book before I go to bed. (same meaning, other order)' },
        { de: 'Nachdem er gefrühstückt hatte, ging er zur Arbeit.', en: 'After he had eaten breakfast, he went to work.' },
      ],
    },
    {
      title: 'nachdem: one tense further back',
      text: `
The *nachdem* event happens **earlier**, so its clause is one step further in the past than the main clause.

| nachdem clause | main clause |
|---|---|
| Plusquamperfekt: *Nachdem wir gegessen **hatten**,* | Präteritum: *gingen wir spazieren.* |
| Perfekt: *Nachdem wir gegessen **haben**,* | Präsens: *gehen wir spazieren.* |

In a past story use the first row. For habits and plans use the second row.
`,
      examples: [
        { de: 'Nachdem sie gegessen hatten, gingen sie spazieren.', en: 'After they had eaten, they went for a walk. (Plusquamperfekt + Präteritum)' },
        { de: 'Nachdem ich gegessen habe, gehe ich spazieren.', en: 'After I have eaten, I go for a walk. (Perfekt + Präsens)' },
        { de: 'Nachdem die Gäste gegangen waren, räumten wir auf.', en: 'After the guests had left, we tidied up.' },
      ],
    },
    {
      title: 'bevor: the same tense twice',
      text: `
**bevor** is easier. The *bevor* clause names the **later** event, and both clauses stand in the **same tense**: present with present, Präteritum with Präteritum.

So you never need the Plusquamperfekt after *bevor* itself. It can appear in the **main** clause, if that event happened long before.
`,
      examples: [
        { de: 'Bevor ich schlafen gehe, putze ich mir die Zähne.', en: 'Before I go to sleep, I brush my teeth. (present + present)' },
        { de: 'Bevor wir ins Kino gingen, aßen wir eine Pizza.', en: 'Before we went to the cinema, we ate a pizza. (Präteritum + Präteritum)' },
        { de: 'Sie hatte noch nie Sushi gegessen, bevor sie nach Japan fuhr.', en: 'She had never eaten sushi before she went to Japan.' },
      ],
    },
    {
      title: 'bevor and nachdem vs vor and nach',
      text: `
Do not mix the conjunctions with the prepositions. **vor** and **nach** are followed by a **noun**: *nach dem Essen*, *vor der Arbeit*. **bevor** and **nachdem** are followed by a **whole clause with a verb**: *nachdem wir gegessen hatten*.

If you can say it with a noun, use *vor / nach*. If you need a verb, use *bevor / nachdem*.
`,
      examples: [
        { de: 'Nach dem Essen gehen wir spazieren.', en: 'After the meal we go for a walk. (nach + noun)' },
        { de: 'Nachdem wir gegessen haben, gehen wir spazieren.', en: 'After we have eaten, we go for a walk. (nachdem + clause)' },
        { de: 'Vor der Arbeit trinke ich einen Kaffee.', en: 'Before work I drink a coffee. (vor + noun)' },
        { de: 'Bevor ich arbeite, trinke ich einen Kaffee.', en: 'Before I work, I drink a coffee. (bevor + clause)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'Temporal clauses follow the same rule: the verb goes to the end.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'bevor and nachdem were introduced there; here they are used in full.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'als and wenn are temporal conjunctions too; nachdem and bevor add before and after.' },
    { topicId: 'b1-01-plusquamperfekt', note: 'nachdem is the conjunction that most often needs the Plusquamperfekt.' },
    { topicId: 'b1-02b-waehrend-seit-bis', note: 'The sister topic: während, seit(dem), bis, sobald and solange.' },
  ],
  edgeCases: [
    'After **nachdem** the two clauses are in **different** tenses (Plusquamperfekt + Präteritum). After **bevor** they are in the **same** tense.',
    'The helper goes to the very end: *nachdem wir gegessen **hatten***, not *nachdem wir hatten gegessen*.',
    '**nach dem Essen** (preposition + noun) but **nachdem wir gegessen haben** (conjunction + clause). *nach* can never start a clause with a verb.',
    'If the temporal clause comes first, the main clause starts with its verb: *Bevor ich gehe, **rufe** ich an*, not *Bevor ich gehe, ich rufe an*.',
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
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex02',
      prompt: 'First the pizza, then the cinema. Complete: "___ wir ins Kino gingen, aßen wir eine Pizza."',
      options: ['Bevor', 'Nachdem', 'Seit'],
      answer: 0,
      explanation: 'The pizza came before the cinema, so the cinema clause is the later event: bevor. Nachdem would turn the order around.',
    },
    {
      type: 'fill',
      id: 'b1-02-temporal-clauses-ex03',
      prompt: 'Wir räumten auf, ___ die Gäste gegangen waren. (after)',
      answer: ['nachdem'],
      explanation: 'after + a clause with a verb = nachdem. The guests left first (Plusquamperfekt), then we tidied up.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex04',
      prompt: 'Complete: "Bevor ich ins Bett gehe, ___"',
      options: ['putze ich mir die Zähne.', 'ich putze mir die Zähne.', 'ich mir die Zähne putze.'],
      answer: 0,
      explanation: 'The bevor clause fills position one, so the main clause must start with its verb: putze ich.',
    },
    {
      type: 'order',
      id: 'b1-02-temporal-clauses-ex05',
      prompt: 'Build the sentence: "He showers before he has breakfast."',
      words: ['bevor', 'Er', 'frühstückt.', 'er', 'duscht,'],
      answer: ['Er duscht, bevor er frühstückt.'],
      explanation: 'Main clause first, then a comma, then the bevor clause with the verb frühstückt at the end.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex06',
      prompt: 'Which tense combination is typical with nachdem in a past story?',
      options: ['Plusquamperfekt in the nachdem clause, Präteritum in the main clause', 'Präsens in both clauses', 'Futur in the nachdem clause, Perfekt in the main clause'],
      answer: 0,
      explanation: 'The nachdem event happens earlier, so it is one step further back: Nachdem wir gegessen hatten, gingen wir spazieren.',
    },
    {
      type: 'fill',
      id: 'b1-02-temporal-clauses-ex07',
      prompt: 'Nachdem wir gegessen ___, gingen wir spazieren. (haben)',
      answer: ['hatten'],
      explanation: 'Plusquamperfekt in the nachdem clause: hatten + gegessen, and the helper goes to the very end.',
    },
    {
      type: 'fill',
      id: 'b1-02-temporal-clauses-ex08',
      prompt: 'Nachdem ich die Hausaufgaben gemacht ___, sah ich fern. (haben)',
      answer: ['hatte'],
      explanation: 'The main clause is Präteritum (sah), so the nachdem clause needs the Plusquamperfekt: hatte, placed after gemacht.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex09',
      prompt: 'Which sentence is correct for a daily habit?',
      options: ['Nachdem wir gegessen haben, gehen wir spazieren.', 'Nachdem wir gegessen hatten, gehen wir spazieren.', 'Nachdem wir essen, gingen wir spazieren.'],
      answer: 0,
      explanation: 'With a present main clause (gehen) the nachdem clause takes the Perfekt (gegessen haben). Plusquamperfekt only goes with a past main clause.',
    },
    {
      type: 'mc',
      id: 'b1-02-temporal-clauses-ex10',
      prompt: 'Complete: "___ dem Essen gehen wir spazieren."',
      options: ['Nach', 'Nachdem', 'Bevor'],
      answer: 0,
      explanation: 'dem Essen is a noun, not a clause with a verb, so you need the preposition nach. nachdem would need a verb: nachdem wir gegessen haben.',
    },
    {
      type: 'translate',
      id: 'b1-02-temporal-clauses-ex11',
      prompt: 'Translate: "Before I go to bed, I read a book."',
      answer: ['Bevor ich ins Bett gehe, lese ich ein Buch.', 'Bevor ich schlafen gehe, lese ich ein Buch.', 'Ich lese ein Buch, bevor ich ins Bett gehe.', 'Ich lese ein Buch, bevor ich schlafen gehe.'],
      hint: 'ins Bett gehen = to go to bed',
      explanation: 'bevor sends gehe to the end of its clause. If the bevor clause comes first, the main clause starts with lese.',
    },
    {
      type: 'translate',
      id: 'b1-02-temporal-clauses-ex12',
      prompt: 'Translate: "After she had eaten, she went to bed."',
      answer: ['Nachdem sie gegessen hatte, ging sie ins Bett.', 'Nachdem sie gegessen hatte, ging sie schlafen.', 'Sie ging ins Bett, nachdem sie gegessen hatte.', 'Sie ging schlafen, nachdem sie gegessen hatte.'],
      hint: 'essen = to eat, ins Bett gehen = to go to bed',
      explanation: 'nachdem + Plusquamperfekt (gegessen hatte, helper last), main clause in the Präteritum (ging).',
    },
  ],
};

export default topic;
