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

When the modal stands alone (the other verb is understood), it has a regular participle with *ge-*:

| modal | Partizip II | example |
|---|---|---|
| können | gekonnt | Ich habe das nicht **gekonnt**. |
| müssen | gemusst | Er hat das **gemusst**. |
| wollen | gewollt | Sie hat das nicht **gewollt**. |
| dürfen | gedurft | Wir haben das nicht **gedurft**. |
| sollen | gesollt | Das hat er nicht **gesollt**. |
| mögen | gemocht | Ich habe ihn nie **gemocht**. |

*Gemocht* is common (with a noun object). The others are rare, but you will see them.

### Word order in a subordinate clause

Normally the conjugated verb goes to the very end of a *dass* or *weil* clause. With a double infinitive this is the one exception: **haben** goes **before** the two infinitives.

- Er sagt, dass er gestern **hat arbeiten müssen**. (not *arbeiten müssen hat*)
- Ich weiß, dass sie nicht **hat kommen können**.

### Why it matters

In practice Germans **prefer the Präteritum** for modals (*ich musste, ich konnte*) even in speech, because it is shorter. So you will mostly **hear and read** the double infinitive rather than produce it. But you need to recognise it, and the same structure returns in the past Konjunktiv II (*ich hätte arbeiten müssen* – I should have worked) and in the passive with modals, both B1 topics. Learn the shape now and those will feel familiar.
`,
  examples: [
    { de: 'Ich habe gestern lange arbeiten müssen.', en: 'I had to work late yesterday. (double infinitive at the end)' },
    { de: 'Er hat nicht kommen können.', en: 'He was not able to come.' },
    { de: 'Wir haben den Film nicht sehen dürfen.', en: 'We were not allowed to watch the film.' },
    { de: 'Das Kind hat nicht schlafen wollen.', en: 'The child did not want to sleep.' },
    { de: 'Ich habe das leider nicht gekonnt.', en: 'Unfortunately I was not able to (do it). (modal alone → gekonnt)' },
    { de: 'Sie sagt, dass sie früher hat aufstehen müssen.', en: 'She says that she had to get up earlier. (haben before the double infinitive)' },
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
    'In a **dass** / **weil** clause, haben moves in front of the double infinitive: *…, dass er hat arbeiten müssen.*',
    'Modal **alone** → Partizip II with ge-: *Ich habe das gewollt.* Modal **with a verb** → double infinitive: *Ich habe es machen wollen.*',
    'The same double infinitive appears with **lassen**, **sehen** and **hören**: *Ich habe ihn kommen sehen.*',
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
      prompt: 'Complete the subordinate clause: "Er sagt, dass er gestern ___."',
      options: ['hat arbeiten müssen', 'arbeiten müssen hat', 'arbeiten hat müssen'],
      answer: 0,
      explanation: 'Exception to the verb-last rule: with a double infinitive, hat goes in front of the two infinitives.',
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
      prompt: 'Build the sentence: "I know that she wanted to come."',
      words: ['sie', 'kommen', 'dass', 'Ich', 'weiß,', 'wollen.', 'hat'],
      answer: ['Ich weiß, dass sie hat kommen wollen.'],
      explanation: 'In the dass clause the helper hat moves in front of the double infinitive kommen wollen.',
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
