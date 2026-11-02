import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-01-plusquamperfekt',
  level: 'B1',
  unit: 1,
  order: 1,
  title: 'Plusquamperfekt',
  germanTerm: 'Plusquamperfekt',
  tags: ['tenses', 'past', 'verbs', 'narration'],
  summary: 'The Plusquamperfekt (past perfect) is "the past before the past": hatte / war + Partizip II, used to show that one past event happened before another.',
  steps: [
    {
      title: 'The past before the past',
      text: `
When you tell a story in the past, sometimes you need to step **one more step back**. English uses "had": *the train **had** left*. German uses the **Plusquamperfekt** (past perfect).

In *Als ich ankam, war der Zug schon abgefahren* the arriving is in the past. The leaving happened **before** that. The Plusquamperfekt marks the earlier event.
`,
      examples: [
        { de: 'Als ich ankam, war der Zug schon abgefahren.', en: 'When I arrived, the train had already left. (left before I arrived)' },
        { de: 'Der Zug war schon abgefahren.', en: 'The train had already left.' },
        { de: 'Sie hatte das Buch schon gelesen.', en: 'She had already read the book.' },
      ],
    },
    {
      title: 'hatte or war + Partizip II',
      text: `
The form is easy if you know the Perfekt. Take the Perfekt and put the helper verb into the Präteritum (simple past): **habe → hatte**, **bin → war**.

| Perfekt | Plusquamperfekt |
|---|---|
| ich habe gegessen | ich **hatte** gegessen |
| ich bin gegangen | ich **war** gegangen |

The Partizip II (past participle, *gegessen*) stays the same and goes to the end of the clause, exactly as in the Perfekt.
`,
      examples: [
        { de: 'Ich hatte schon gegessen.', en: 'I had already eaten. (habe → hatte)' },
        { de: 'Wir waren nach Hause gegangen.', en: 'We had gone home. (sind → waren)' },
        { de: 'Er hatte den Schlüssel verloren.', en: 'He had lost the key.' },
      ],
    },
    {
      title: 'Which helper: hatte or war?',
      text: `
Choose the helper exactly as in the Perfekt. **war** for movement and change of state (gehen, fahren, aufstehen, einschlafen) and for *sein* and *bleiben*. **hatte** for everything else.

| | haben-verbs | sein-verbs |
|---|---|---|
| ich, er, sie, es | hatte | war |
| du | hattest | warst |
| wir, sie, Sie | hatten | waren |
| ihr | hattet | wart |
`,
      examples: [
        { de: 'Das Kind war schon eingeschlafen.', en: 'The child had already fallen asleep. (change of state → war)' },
        { de: 'Das Kind hatte gut geschlafen.', en: 'The child had slept well. (no change → hatte)' },
        { de: 'Ihr wart lange geblieben.', en: 'You had stayed a long time. (bleiben → war)' },
      ],
    },
    {
      title: 'Two events, two tenses',
      text: `
The Plusquamperfekt almost never stands alone. It needs a second, later event in the Präteritum or Perfekt.

The classic partner is **nachdem** (after): the *nachdem* clause takes the Plusquamperfekt, the main clause takes the Präteritum. **weil** (because) works the same way when the reason happened earlier.
`,
      examples: [
        { de: 'Nachdem ich gefrühstückt hatte, ging ich zur Arbeit.', en: 'After I had eaten breakfast, I went to work.' },
        { de: 'Nachdem sie gegessen hatten, gingen sie spazieren.', en: 'After they had eaten, they went for a walk.' },
        { de: 'Ich war müde, weil ich nicht geschlafen hatte.', en: 'I was tired because I had not slept.' },
      ],
    },
    {
      title: 'The helper goes to the very end',
      text: `
A *nachdem*, *weil* or *dass* clause is a subordinate clause (a clause that cannot stand alone), so its verb goes to the end. With the Plusquamperfekt that means: first the Partizip II, then the helper. *nachdem er gegessen **hatte***, not *nachdem er hatte gegessen*.

When the subordinate clause comes first, the main clause starts with its verb.
`,
      examples: [
        { de: 'Nachdem die Gäste gegangen waren, räumten wir auf.', en: 'After the guests had left, we tidied up. (participle, then waren)' },
        { de: 'Weil sie nicht geschlafen hatte, war sie müde.', en: 'Because she had not slept, she was tired. (main clause starts with war)' },
        { de: 'Er sagte, dass er den Film schon gesehen hatte.', en: 'He said that he had already seen the film.' },
      ],
    },
    {
      title: 'A quick check: schon and noch nie',
      text: `
Do not use the Plusquamperfekt for every past event. It only marks the **earlier** of two past events. One event alone is Perfekt or Präteritum.

A good habit: when you write **schon** (already) or **noch nie** (never before) in a past story, check whether that verb should be Plusquamperfekt. It usually should.
`,
      examples: [
        { de: 'Sie hatte noch nie Sushi gegessen, bevor sie nach Japan fuhr.', en: 'She had never eaten sushi before she went to Japan.' },
        { de: 'Als wir ins Kino kamen, hatte der Film schon begonnen.', en: 'When we got to the cinema, the film had already started.' },
        { de: 'Gestern habe ich Pizza gegessen.', en: 'Yesterday I ate pizza. (one event: Perfekt, not Plusquamperfekt)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-31-perfekt-haben', note: 'The Plusquamperfekt is the Perfekt with hatte instead of habe; the Partizip II is the same.' },
    { topicId: 'a1-32-perfekt-sein', note: 'Verbs that take sein in the Perfekt take war in the Plusquamperfekt.' },
    { topicId: 'a1-33-war-hatte', note: 'war and hatte are the helper verbs you need here.' },
    { topicId: 'b1-02-temporal-clauses', note: 'nachdem is the conjunction that most often triggers the Plusquamperfekt.' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'hätte / wäre + Partizip II uses exactly the same structure.' },
  ],
  edgeCases: [
    'Do not use the Plusquamperfekt for every past event. It only marks the **earlier** of two past events. One event alone is Perfekt or Präteritum.',
    'After **nachdem** the helper verb goes **after** the participle: *nachdem er gegessen **hatte***, not *nachdem er hatte gegessen*.',
    'The helper is chosen exactly as in the Perfekt: *war eingeschlafen* (change of state), *hatte geschlafen* (no change).',
    'In speech many Germans simplify and use the Perfekt twice (*Als ich gekommen bin, ist er schon gegangen*). This is common, but in writing the Plusquamperfekt is expected.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-01-plusquamperfekt-ex01',
      prompt: 'Which sentence is in the Plusquamperfekt?',
      options: ['Ich habe gegessen.', 'Ich hatte gegessen.', 'Ich aß.'],
      answer: 1,
      explanation: 'Plusquamperfekt = hatte / war + Partizip II. "Ich habe gegessen" is Perfekt, "Ich aß" is Präteritum.',
    },
    {
      type: 'fill',
      id: 'b1-01-plusquamperfekt-ex02',
      prompt: 'Als ich ankam, ___ der Zug schon abgefahren. (sein)',
      answer: ['war'],
      explanation: 'abfahren is a movement verb, so it takes sein. In the Plusquamperfekt sein becomes war.',
    },
    {
      type: 'fill',
      id: 'b1-01-plusquamperfekt-ex03',
      prompt: 'Wir ___ schon gegessen, als er kam. (haben)',
      answer: ['hatten'],
      explanation: 'essen takes haben. The subject is wir, so the Präteritum of haben is hatten.',
    },
    {
      type: 'mc',
      id: 'b1-01-plusquamperfekt-ex04',
      prompt: 'Complete: "Nachdem sie die Prüfung ___ hatte, feierte sie."',
      options: ['bestanden', 'bestehen', 'besteht'],
      answer: 0,
      explanation: 'With hatte you need the Partizip II. bestehen is inseparable, so the participle has no ge-: bestanden.',
    },
    {
      type: 'match',
      id: 'b1-01-plusquamperfekt-ex05',
      prompt: 'Match each infinitive with its Plusquamperfekt (er-form).',
      pairs: [
        ['gehen', 'war gegangen'],
        ['lesen', 'hatte gelesen'],
        ['einschlafen', 'war eingeschlafen'],
        ['kaufen', 'hatte gekauft'],
        ['bleiben', 'war geblieben'],
      ],
      explanation: 'Movement and change of state (gehen, einschlafen) and the verb bleiben take war; lesen and kaufen take hatte.',
    },
    {
      type: 'order',
      id: 'b1-01-plusquamperfekt-ex06',
      prompt: 'Build the sentence: "After he had eaten breakfast, he went to work."',
      words: ['ging', 'Nachdem', 'hatte,', 'er', 'Arbeit.', 'gefrühstückt', 'zur', 'er'],
      answer: ['Nachdem er gefrühstückt hatte, ging er zur Arbeit.'],
      explanation: 'In the nachdem clause the helper hatte goes to the very end. The main clause then starts with the verb (ging), because the whole nachdem clause fills position one.',
    },
    {
      type: 'fill',
      id: 'b1-01-plusquamperfekt-ex07',
      prompt: 'Sie war müde, weil sie die ganze Nacht nicht ___ hatte. (schlafen)',
      answer: ['geschlafen'],
      explanation: 'Not sleeping happened before being tired, so Plusquamperfekt: hatte + geschlafen. schlafen is no change of state, so it takes haben.',
    },
    {
      type: 'mc',
      id: 'b1-01-plusquamperfekt-ex08',
      prompt: 'Complete: "Er ___ das Buch schon gelesen, bevor der Film ins Kino kam."',
      options: ['hatte', 'war', 'ist'],
      answer: 0,
      explanation: 'lesen takes haben, and the reading happened before the film came, so Präteritum of haben: hatte.',
    },
    {
      type: 'translate',
      id: 'b1-01-plusquamperfekt-ex09',
      prompt: 'Translate: "She had already left."',
      answer: ['Sie war schon gegangen.', 'Sie war bereits gegangen.', 'Sie war schon weggegangen.', 'Sie war bereits weggegangen.'],
      hint: 'gehen / weggehen = to leave, schon = already',
      explanation: 'gehen takes sein, so the Plusquamperfekt is war gegangen. schon or bereits both mean already.',
    },
    {
      type: 'mc',
      id: 'b1-01-plusquamperfekt-ex10',
      prompt: 'In "Als wir ins Kino kamen, hatte der Film schon begonnen.", which event happened first?',
      options: ['Wir kamen ins Kino.', 'Der Film begann.'],
      answer: 1,
      explanation: 'The Plusquamperfekt (hatte begonnen) marks the earlier event. The film started, then we arrived.',
    },
    {
      type: 'order',
      id: 'b1-01-plusquamperfekt-ex11',
      prompt: 'Build the sentence: "I had lost the key."',
      words: ['verloren.', 'den', 'Ich', 'Schlüssel', 'hatte'],
      answer: ['Ich hatte den Schlüssel verloren.'],
      explanation: 'Helper verb in position two (hatte), Partizip II at the end (verloren), object in the middle.',
    },
    {
      type: 'fill',
      id: 'b1-01-plusquamperfekt-ex12',
      prompt: 'Nachdem die Gäste ___ waren, räumten wir auf. (gehen)',
      answer: ['gegangen'],
      explanation: 'gehen takes sein, so waren + gegangen. The guests left first, then we tidied up.',
    },
  ],
};

export default topic;
