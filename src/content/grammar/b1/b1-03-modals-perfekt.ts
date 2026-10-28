import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-03-modals-perfekt',
  level: 'B1',
  unit: 1,
  order: 3,
  title: 'Modal verbs in the Perfekt (double infinitive)',
  germanTerm: 'Modalverben im Perfekt',
  tags: ['modal verbs', 'Perfekt', 'tenses', 'word order'],
  summary: 'When a modal verb goes into the Perfekt with another verb, both stay in the infinitive at the end: Ich habe arbeiten müssen (the "double infinitive").',
  explanation: `
### What it is

You know the modal verbs (*Modalverben*: können, müssen, wollen, dürfen, sollen, mögen) in the present and in the Präteritum (*ich musste, ich konnte*). Sometimes you also need them in the **Perfekt**, for example in a spoken story: *Ich **habe** gestern lange **arbeiten müssen**.* – *I had to work late yesterday.*

The surprising part: there is **no Partizip II** at the end. Instead you see **two infinitives**: *arbeiten müssen*. This is called the **double infinitive** (*Ersatzinfinitiv* or *doppelter Infinitiv*).

### How it works

**Rule 1: Modal + another verb → haben + Infinitiv + Modal-Infinitiv.**

| Präsens | Präteritum | Perfekt |
|---|---|---|
| Ich muss arbeiten. | Ich musste arbeiten. | Ich **habe** arbeiten **müssen**. |
| Er kann nicht kommen. | Er konnte nicht kommen. | Er **hat** nicht kommen **können**. |
| Wir dürfen den Film sehen. | Wir durften den Film sehen. | Wir **haben** den Film sehen **dürfen**. |
| Sie will nicht schlafen. | Sie wollte nicht schlafen. | Sie **hat** nicht schlafen **wollen**. |

The helper verb is **always haben**, even with movement verbs: *Ich **habe** nach Hause gehen müssen* (not *bin*). The order at the end is fixed: first the main verb, then the modal.

**Rule 2: Modal without another verb → normal Partizip II.**

When the modal stands alone (the other verb is understood from the context), it has a normal participle with *ge-*. The three you will actually meet:

| modal | Partizip II | example |
|---|---|---|
| können | gekonnt | Ich habe das nicht **gekonnt**. – *I was not able to.* |
| wollen | gewollt | Sie hat das nicht **gewollt**. – *She did not want that.* |
| mögen | gemocht | Ich habe ihn nie **gemocht**. – *I never liked him.* |

*Gemocht* is the common one (with a noun object: *ich habe den Film gemocht*). *Gemusst, gedurft* and *gesollt* exist too, but they are rare.

### You may also see …

In a *dass* or *weil* clause the helper verb normally goes to the very end. With a double infinitive you will see **haben** in front of the two infinitives instead: *Er sagt, dass er gestern **hat arbeiten müssen**.* Just recognise this pattern when you read it. In your own sentences use the Präteritum: *Er sagt, dass er gestern **arbeiten musste**.*

### Why it matters

In practice Germans **prefer the Präteritum** for modals (*ich musste, ich konnte*) even in speech, because it is shorter. So you will mostly **hear and read** the double infinitive rather than produce it. But you need to recognise it, and the same shape returns in the past Konjunktiv II (*ich hätte arbeiten müssen* – I should have worked) and in the passive with modals, both B1 topics. Learn the shape now and those will feel familiar.
`,
  examples: [
    { de: 'Ich habe gestern lange arbeiten müssen.', en: 'I had to work late yesterday. (double infinitive at the end)' },
    { de: 'Er hat nicht kommen können.', en: 'He was not able to come.' },
    { de: 'Wir haben den Film nicht sehen dürfen.', en: 'We were not allowed to watch the film.' },
    { de: 'Das Kind hat nicht schlafen wollen.', en: 'The child did not want to sleep.' },
    { de: 'Ich habe das leider nicht gekonnt.', en: 'Unfortunately I was not able to (do it). (modal alone → gekonnt)' },
    { de: 'Sie hat früher aufstehen müssen.', en: 'She had to get up earlier. (haben, even though aufstehen alone takes sein)' },
    { de: 'Ich musste gestern arbeiten.', en: 'I had to work yesterday. (Präteritum, the more common choice)' },
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
