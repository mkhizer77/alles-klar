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
  explanation: `
### What it is

When you tell a story in the past, sometimes you need to step **one more step back**. English does this with "had": *When I arrived, the train **had** already left.* German does the same with the **Plusquamperfekt** (*Plusquamperfekt*, also called the past perfect).

- Als ich ankam, **war** der Zug schon **abgefahren**. – *When I arrived, the train had already left.*

The arriving is in the past. The leaving is **before** that. The Plusquamperfekt marks the earlier event.

### How it works

The form is easy if you know the Perfekt. Take the Perfekt and swap the helper verb into the **Präteritum**:

| Perfekt (A1) | Plusquamperfekt (B1) |
|---|---|
| ich **habe** gegessen | ich **hatte** gegessen |
| ich **bin** gegangen | ich **war** gegangen |

So the formula is **hatte / war + Partizip II**. The Partizip II goes to the end of the clause, exactly as in the Perfekt.

| | haben-verbs | sein-verbs |
|---|---|---|
| ich | **hatte** gelesen | **war** gefahren |
| du | **hattest** gelesen | **warst** gefahren |
| er / sie / es | **hatte** gelesen | **war** gefahren |
| wir | **hatten** gelesen | **waren** gefahren |
| ihr | **hattet** gelesen | **wart** gefahren |
| sie / Sie | **hatten** gelesen | **waren** gefahren |

**Which helper?** The same rule as in the Perfekt: *sein* for movement and change of state (gehen, fahren, aufstehen, einschlafen) and for *sein* and *bleiben*; *haben* for everything else.

### Two events, two tenses

The Plusquamperfekt almost never stands alone. It needs a second, later event in the Präteritum or Perfekt. The typical pattern:

| earlier event | later event |
|---|---|
| **Nachdem** ich gefrühstückt **hatte**, | **ging** ich zur Arbeit. |
| Er **hatte** das Buch schon **gelesen**, | bevor der Film ins Kino **kam**. |
| Sie **war** müde, weil sie nicht **geschlafen hatte**. | |

The conjunction **nachdem** (*after*) is the classic partner: the clause with *nachdem* takes the Plusquamperfekt, the main clause takes the Präteritum. In a *nachdem* clause the helper verb goes to the very end, after the participle: *nachdem ich gefrühstückt **hatte***.

### Why it matters

- It lets you **order events** clearly when you tell a story or explain why something happened: *Ich war nervös, weil ich die Prüfung noch nie gemacht hatte.*
- It is expected in the B1 writing and speaking exams whenever you narrate in the past.
- The same shape (*hatte / war* + Partizip II) comes back in the past Konjunktiv II (*hätte gemacht, wäre gegangen*), so learning it now pays twice.

A good habit: whenever you write *schon* (already) or *noch nie* (never before) in a past story, check whether that verb should be Plusquamperfekt.
`,
  examples: [
    { de: 'Als wir ins Kino kamen, hatte der Film schon begonnen.', en: 'When we got to the cinema, the film had already started. (began before we came)' },
    { de: 'Nachdem sie gegessen hatten, gingen sie spazieren.', en: 'After they had eaten, they went for a walk.' },
    { de: 'Ich war müde, weil ich die ganze Nacht nicht geschlafen hatte.', en: 'I was tired because I had not slept all night.' },
    { de: 'Der Zug war schon abgefahren.', en: 'The train had already left. (sein-verb → war)' },
    { de: 'Er hatte den Schlüssel verloren und konnte nicht ins Haus.', en: 'He had lost the key and could not get into the house.' },
    { de: 'Sie hatte noch nie Sushi gegessen, bevor sie nach Japan fuhr.', en: 'She had never eaten sushi before she went to Japan.' },
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
