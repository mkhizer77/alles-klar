import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-03-modals-perfekt',
  level: 'B1',
  unit: 1,
  order: 4,
  title: 'Modal verbs in the Perfekt (double infinitive)',
  germanTerm: 'Modalverben im Perfekt',
  tags: ['modal verbs', 'Perfekt', 'tenses', 'word order'],
  summary: 'When a modal verb goes into the Perfekt with another verb, both stay in the infinitive at the end: Ich habe arbeiten müssen (the "double infinitive").',
  steps: [
    {
      title: 'Two infinitives instead of a participle',
      text: `
You know the modal verbs (*Modalverben*: können, müssen, wollen, dürfen, sollen, mögen) in the present and in the Präteritum (*ich musste*). Sometimes you also need them in the **Perfekt**, for example in a spoken story.

The surprising part: there is **no Partizip II** (past participle) at the end. Instead you see **two infinitives**: *arbeiten müssen*. This is called the **double infinitive**.
`,
      examples: [
        { de: 'Ich habe gestern lange arbeiten müssen.', en: 'I had to work late yesterday. (two infinitives at the end)' },
        { de: 'Er hat nicht kommen können.', en: 'He was not able to come.' },
        { de: 'Das Kind hat nicht schlafen wollen.', en: 'The child did not want to sleep.' },
      ],
    },
    {
      title: 'haben + verb + modal',
      text: `
The rule: **modal + another verb → haben + infinitive + modal infinitive**. Compare the three tenses:

| Präsens | Präteritum | Perfekt |
|---|---|---|
| Ich muss arbeiten. | Ich musste arbeiten. | Ich **habe** arbeiten **müssen**. |
| Er kann nicht kommen. | Er konnte nicht kommen. | Er **hat** nicht kommen **können**. |
| Wir dürfen den Film sehen. | Wir durften den Film sehen. | Wir **haben** den Film sehen **dürfen**. |
`,
      examples: [
        { de: 'Wir haben den Film nicht sehen dürfen.', en: 'We were not allowed to watch the film.' },
        { de: 'Sie hat das Auto nicht kaufen können.', en: 'She was not able to buy the car.' },
        { de: 'Ich habe früh aufstehen müssen.', en: 'I had to get up early.' },
      ],
    },
    {
      title: 'Always haben, verb before modal',
      text: `
Two things are fixed. The helper is **always haben**, even with movement verbs that normally take *sein*: *Ich **habe** nach Hause gehen müssen*, not *bin*.

And the order at the end never changes: first the **main verb**, then the **modal**: *gehen müssen*, not *müssen gehen*.
`,
      examples: [
        { de: 'Ich habe nach Hause gehen müssen.', en: 'I had to go home. (haben, although gehen alone takes sein)' },
        { de: 'Sie hat früher aufstehen müssen.', en: 'She had to get up earlier. (haben, not sein)' },
        { de: 'Er hat nicht mitkommen wollen.', en: 'He did not want to come along. (main verb first, modal last)' },
      ],
    },
    {
      title: 'Modal alone: normal Partizip II',
      text: `
When the modal stands **alone**, because the other verb is understood from the context, it has a normal participle with **ge-**. The three you will actually meet:

| modal | Partizip II |
|---|---|
| können | gekonnt |
| wollen | gewollt |
| mögen | gemocht |

*gemocht* is the common one, with a noun object: *Ich habe den Film gemocht.*
`,
      examples: [
        { de: 'Ich habe das leider nicht gekonnt.', en: 'Unfortunately I was not able to. (modal alone → gekonnt)' },
        { de: 'Sie hat das nicht gewollt.', en: 'She did not want that.' },
        { de: 'Ich habe ihn nie gemocht.', en: 'I never liked him. (mögen + noun object → gemocht)' },
      ],
    },
    {
      title: 'Germans usually say musste',
      text: `
In practice Germans **prefer the Präteritum** for modals (*ich musste, ich konnte*), even in speech, because it is shorter. So you will mostly **hear and read** the double infinitive rather than produce it.

In a *dass* or *weil* clause you may read **haben** in front of the two infinitives: *…, dass er **hat** arbeiten müssen*. Recognise it; in your own sentences write *…, dass er arbeiten **musste***.
`,
      examples: [
        { de: 'Ich musste gestern arbeiten.', en: 'I had to work yesterday. (Präteritum, the more common choice)' },
        { de: 'Er sagt, dass er gestern hat arbeiten müssen.', en: 'He says that he had to work yesterday. (recognise this pattern)' },
        { de: 'Er sagt, dass er gestern arbeiten musste.', en: 'He says that he had to work yesterday. (write this one)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'The modal verbs themselves and their present-tense forms.' },
    { topicId: 'a2-01-prateritum-modals', note: 'musste, konnte, wollte … are the simpler and more common past forms of modals.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The Perfekt with haben is the frame; the double infinitive replaces the Partizip II.' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'hätte … machen sollen uses exactly the same double-infinitive structure.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'The passive with modals in the Perfekt also ends in a double infinitive.' },
  ],
  edgeCases: [
    'Always **haben**, never sein: *Ich **habe** gehen müssen*, even though gehen alone takes sein.',
    'Order at the end: **main verb first, modal last**: *arbeiten müssen*, not *müssen arbeiten*.',
    'Modal **alone** → Partizip II with ge-: *Ich habe das gewollt.* Modal **with a verb** → double infinitive: *Ich habe es machen wollen.*',
    'In a **dass** / **weil** clause you may read *…, dass er **hat** arbeiten müssen*. Recognise it, but write *…, dass er arbeiten **musste*** yourself.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-03-modals-perfekt-ex01',
      prompt: 'Complete: "Ich habe gestern lange ___."',
      options: ['arbeiten müssen', 'gearbeitet müssen', 'arbeiten gemusst'],
      answer: 0,
      explanation: 'Modal + verb in the Perfekt = two infinitives: arbeiten müssen. No participle at all.',
    },
    {
      type: 'fill',
      id: 'b1-03-modals-perfekt-ex02',
      prompt: 'Er hat nicht kommen ___. (können)',
      answer: ['können'],
      explanation: 'With another verb (kommen) the modal stays in the infinitive: hat kommen können.',
    },
    {
      type: 'mc',
      id: 'b1-03-modals-perfekt-ex03',
      prompt: 'Which sentence is correct when the modal stands alone?',
      options: ['Sie hat das nicht gewollt.', 'Sie hat das nicht wollen.', 'Sie ist das nicht gewollt.'],
      answer: 0,
      explanation: 'No second verb, so the modal uses its normal Partizip II gewollt, with haben.',
    },
    {
      type: 'order',
      id: 'b1-03-modals-perfekt-ex04',
      prompt: 'Build the sentence: "We were not allowed to watch the film."',
      words: ['Film', 'dürfen.', 'den', 'Wir', 'sehen', 'haben', 'nicht'],
      answer: ['Wir haben den Film nicht sehen dürfen.'],
      explanation: 'haben in position two, then the object, nicht, and the double infinitive sehen dürfen at the end.',
    },
    {
      type: 'fill',
      id: 'b1-03-modals-perfekt-ex05',
      prompt: 'Ich ___ früher aufstehen müssen. (haben)',
      answer: ['habe'],
      explanation: 'The helper is always haben in this structure, even though aufstehen alone would take sein.',
    },
    {
      type: 'mc',
      id: 'b1-03-modals-perfekt-ex06',
      prompt: 'Which sentence is correct?',
      options: ['Sie hat früher aufstehen müssen.', 'Sie ist früher aufstehen müssen.', 'Sie hat früher aufgestanden müssen.'],
      answer: 0,
      explanation: 'The helper is always haben, even with aufstehen, and both verbs stay in the infinitive: aufstehen müssen.',
    },
    {
      type: 'match',
      id: 'b1-03-modals-perfekt-ex07',
      prompt: 'Match each Präteritum sentence with the same sentence in the Perfekt.',
      pairs: [
        ['Ich musste gehen.', 'Ich habe gehen müssen.'],
        ['Er konnte schwimmen.', 'Er hat schwimmen können.'],
        ['Wir wollten bleiben.', 'Wir haben bleiben wollen.'],
        ['Sie durfte fahren.', 'Sie hat fahren dürfen.'],
      ],
      explanation: 'Both versions mean the same. The Präteritum is shorter and more common; the Perfekt ends in main verb + modal infinitive.',
    },
    {
      type: 'translate',
      id: 'b1-03-modals-perfekt-ex08',
      prompt: 'Translate using the Perfekt: "I had to work yesterday."',
      answer: ['Ich habe gestern arbeiten müssen.', 'Gestern habe ich arbeiten müssen.'],
      hint: 'arbeiten = to work, gestern = yesterday',
      explanation: 'habe + arbeiten müssen. In the Präteritum it would be Ich musste gestern arbeiten.',
    },
    {
      type: 'fill',
      id: 'b1-03-modals-perfekt-ex09',
      prompt: 'Das Kind hat nicht schlafen ___. (wollen)',
      answer: ['wollen'],
      explanation: 'Modal with another verb (schlafen) → infinitive wollen, not gewollt.',
    },
    {
      type: 'mc',
      id: 'b1-03-modals-perfekt-ex10',
      prompt: 'Both are correct. Which one do Germans use more often in everyday speech?',
      options: ['Ich musste gehen.', 'Ich habe gehen müssen.'],
      answer: 0,
      explanation: 'For modal verbs the Präteritum (musste) is preferred even in speech because it is shorter. The double infinitive is mostly something you need to recognise.',
    },
    {
      type: 'order',
      id: 'b1-03-modals-perfekt-ex11',
      prompt: 'Build the sentence: "She wanted to come."',
      words: ['kommen', 'Sie', 'wollen.', 'hat'],
      answer: ['Sie hat kommen wollen.'],
      explanation: 'hat in position two, then the double infinitive: main verb kommen first, modal wollen last.',
    },
    {
      type: 'fill',
      id: 'b1-03-modals-perfekt-ex12',
      prompt: 'Ich habe das leider nicht ___. (können, no other verb)',
      answer: ['gekonnt'],
      explanation: 'The modal stands alone (das is the object), so it takes its regular Partizip II: gekonnt.',
    },
  ],
};

export default topic;
