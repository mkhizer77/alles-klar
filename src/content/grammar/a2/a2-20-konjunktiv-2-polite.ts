import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-20-konjunktiv-2-polite',
  level: 'A2',
  unit: 7,
  order: 22,
  title: 'Konjunktiv II for polite requests (würde, hätte, wäre, könnte)',
  germanTerm: 'Konjunktiv II (Höflichkeit)',
  tags: ['verbs', 'mood', 'politeness', 'Konjunktiv', 'requests'],
  summary: 'Konjunktiv II is the "would" form; at A2 you need four verbs (würde, hätte, wäre, könnte) to make polite requests and questions: Könnten Sie …?, Ich hätte gern …',
  steps: [
    {
      title: 'The "would" form',
      text: `
**Konjunktiv II** is the verb form for things that are **not real** (yet): wishes, polite requests, imagined situations. English uses *would*, *could* and *had*: *I would like …*, *Could you …?*

At A2 you need just **four verbs**: **würde** (would), **hätte** (would have), **wäre** (would be), **könnte** (could). With them you can be polite in every shop and office.
`,
      examples: [
        { de: 'Könnten Sie mir bitte helfen?', en: 'Could you help me, please? (könnte)' },
        { de: 'Ich hätte gern einen Kaffee.', en: 'I would like a coffee. (hätte)' },
        { de: 'Das wäre sehr nett.', en: 'That would be very nice. (wäre)' },
        { de: 'Würden Sie bitte das Fenster schließen?', en: 'Would you please close the window? (würde)' },
      ],
    },
    {
      title: 'The four forms',
      text: `
| verb | Konjunktiv II | English |
|---|---|---|
| werden | **würde** | would |
| haben | **hätte** | would have |
| sein | **wäre** | would be |
| können | **könnte** | could |

Tip: each form is the Präteritum (*wurde, hatte, war, konnte*) plus an **umlaut** and the ending **-e**. The other modal verbs work the same way: *müssen* → **müsste**, *dürfen* → **dürfte**, *sollen* → **sollte** (no umlaut).
`,
      examples: [
        { de: 'Ich hatte Zeit. Ich hätte Zeit.', en: 'I had time. I would have time. (hatte → hätte)' },
        { de: 'Ich konnte kommen. Ich könnte kommen.', en: 'I was able to come. I could come. (konnte → könnte)' },
        { de: 'Dürfte ich kurz stören?', en: 'May I interrupt for a moment? (dürfte)' },
      ],
    },
    {
      title: 'The endings',
      text: `
The endings are the same for all four verbs; the *ich* and *er* forms are identical.

| | hätte | könnte |
|---|---|---|
| ich | hätte | könnte |
| du | hätte**st** | könnte**st** |
| er / sie / es | hätte | könnte |
| wir | hätte**n** | könnte**n** |
| ihr | hätte**t** | könnte**t** |
| sie / Sie | hätte**n** | könnte**n** |

*würde* and *wäre* follow the same pattern: *du würdest, wir würden, du wärst, ihr wärt*.
`,
      examples: [
        { de: 'Hättest du morgen Zeit?', en: 'Would you have time tomorrow? (du: -st)' },
        { de: 'Wir könnten Ihnen helfen.', en: 'We could help you. (wir: -n)' },
        { de: 'Hättet ihr Lust auf Pizza?', en: 'Would you fancy pizza? (ihr: -t)' },
      ],
    },
    {
      title: 'würde + infinitive: the all-purpose "would"',
      text: `
For almost every other verb you do not need a special form. Use **würde** + infinitive at the **end** of the sentence, exactly like a modal verb: *Ich würde gern nach Japan reisen.*

Do not use *würde* for *sein, haben* and the modals: say *Ich wäre*, not *Ich würde sein*.
`,
      examples: [
        { de: 'Ich würde gern mit dem Chef sprechen.', en: 'I would like to speak to the boss. (würde … sprechen)' },
        { de: 'Würdest du mir helfen?', en: 'Would you help me? (würdest … helfen)' },
        { de: 'Er würde das Auto kaufen.', en: 'He would buy the car.' },
      ],
    },
    {
      title: 'Polite requests: Könnten Sie, Würden Sie',
      text: `
A direct question (*Können Sie mir helfen?*) is correct but a little blunt. The Konjunktiv II makes it softer, like English *could* instead of *can*.

Start the question with **Könnten Sie …?** or **Würden Sie …?**, add *bitte*, and put the infinitive at the end.
`,
      examples: [
        { de: 'Könnten Sie das bitte wiederholen?', en: 'Could you please repeat that?' },
        { de: 'Würden Sie mir bitte die Rechnung bringen?', en: 'Would you please bring me the bill?' },
        { de: 'Könntest du mir das Salz geben?', en: 'Could you pass me the salt? (du form)' },
      ],
    },
    {
      title: 'Ordering and asking politely',
      text: `
The most useful phrase in a café or shop is **Ich hätte gern …** (I would like …) + noun. No *bitte* is needed.

Polite questions use *hätte* and *wäre* too: **Hätten Sie …?** (Would you have …?), **Wäre es möglich …?** (Would it be possible …?), **Wären Sie so nett …?** (Would you be so kind …?).
`,
      examples: [
        { de: 'Ich hätte gern zwei Brötchen.', en: 'I would like two bread rolls. (ordering)' },
        { de: 'Hätten Sie einen Moment Zeit?', en: 'Would you have a moment?' },
        { de: 'Wären Sie so nett, mir zu helfen?', en: 'Would you be so kind as to help me?' },
        { de: 'Wäre es möglich, morgen zu kommen?', en: 'Would it be possible to come tomorrow?' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-20b-wishes-suggestions', note: 'The sister topic: the same four forms for wishes (Ich hätte gern mehr Zeit) and suggestions (Wir könnten …).' },
    { topicId: 'a1-17-modal-verbs', note: 'könnte, müsste, sollte are the polite versions of the modal verbs; the sentence bracket is the same.' },
    { topicId: 'a1-33-war-hatte', note: 'wäre and hätte are built from war and hatte plus an umlaut.' },
    { topicId: 'a2-01-prateritum-modals', note: 'konnte → könnte: the Konjunktiv II of a modal is its Präteritum with an umlaut.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'At B1 the same forms are used for unreal conditions: Wenn ich reich wäre …' },
    { topicId: 'a2-31-reading-writing-email', note: 'Könnten Sie … and Ich würde gern … are the standard polite phrases in a semi-formal email.' },
  ],
  edgeCases: [
    'The umlaut makes the difference: **konnte** = could (in the past, real), **könnte** = could (polite / possible).',
    '**sollte** and **wollte** have no umlaut, so they look like the Präteritum. The context tells you which one is meant.',
    'Use *hätte gern* with a **noun** and *würde gern* with a **verb**: *Ich hätte gern einen Tee* / *Ich würde gern Tee trinken*.',
    'For *sein*, *haben* and the modals do **not** use würde: say *Ich wäre*, not *Ich würde sein*.',
    'Polite questions can start with the verb (*Könnten Sie …?*) or be statements with *gern*: *Ich hätte gern …* No *bitte* is needed in that case.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex01',
      prompt: 'Make it polite: "___ Sie mir bitte helfen?"',
      options: ['Können', 'Könnten', 'Konnten'],
      answer: 1,
      explanation: 'Könnten (with umlaut) is the Konjunktiv II and sounds polite. Konnten is the past tense; Können is correct but more direct.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex02',
      prompt: 'Ich ___ gern einen Kaffee. (haben)',
      answer: ['hätte'],
      explanation: 'Ich hätte gern + noun is the standard way to order something.',
    },
    {
      type: 'match',
      id: 'a2-20-konjunktiv-2-polite-ex03',
      prompt: 'Match each verb with its Konjunktiv II (ich form).',
      pairs: [
        ['haben', 'hätte'],
        ['sein', 'wäre'],
        ['können', 'könnte'],
        ['werden', 'würde'],
        ['müssen', 'müsste'],
      ],
      explanation: 'Take the Präteritum (hatte, war, konnte, wurde, musste), add an umlaut and the ending -e.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex04',
      prompt: '___ du mir bitte das Salz geben? (werden)',
      answer: ['Würdest'],
      explanation: 'du + würde = würdest. würde + infinitive turns almost any verb into a polite request.',
    },
    {
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex05',
      prompt: 'Which sentence is the most polite way to order in a bakery?',
      options: ['Ich will zwei Brötchen.', 'Gib mir zwei Brötchen.', 'Ich hätte gern zwei Brötchen.'],
      answer: 2,
      explanation: 'Ich hätte gern … is the normal polite phrase. Ich will sounds like a demand and Gib mir is a du-imperative to a stranger.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex06',
      prompt: '___ Sie einen Moment Zeit? (haben, polite)',
      answer: ['Hätten'],
      explanation: 'Sie + hätte = Hätten. Hätten Sie …? is the polite way to ask whether someone has something; Haben Sie …? is correct but more direct.',
    },
    {
      type: 'order',
      id: 'a2-20-konjunktiv-2-polite-ex07',
      prompt: 'Build the polite request: "Could you please repeat that?"',
      words: ['bitte', 'Sie', 'wiederholen?', 'das', 'Könnten'],
      answer: ['Könnten Sie das bitte wiederholen?'],
      explanation: 'The polite modal Könnten starts the yes/no question, Sie follows, and the infinitive wiederholen goes to the end.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex08',
      prompt: '___ du mir kurz helfen? (können, polite)',
      answer: ['Könntest'],
      explanation: 'du + könnte = könntest: the Konjunktiv II takes the ending -st in the du form, like the Präteritum konntest, plus the umlaut.',
    },
    {
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex09',
      prompt: 'Complete: "Das ___ sehr nett von Ihnen."',
      options: ['wäre', 'würde', 'war'],
      answer: 0,
      explanation: 'sein has its own Konjunktiv II form, wäre. würde alone has no meaning here, and war is the real past (that was nice).',
    },
    {
      type: 'translate',
      id: 'a2-20-konjunktiv-2-polite-ex10',
      prompt: 'Translate politely: "Could you help me, please?" (Sie form)',
      answer: ['Könnten Sie mir bitte helfen?', 'Könnten Sie mir helfen, bitte?'],
      hint: 'helfen + Dative (mir)',
      explanation: 'Könnten Sie + Dative pronoun + bitte + infinitive. This is the standard polite request.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex11',
      prompt: '___ ich Sie etwas fragen? (dürfen, polite)',
      answer: ['Dürfte'],
      explanation: 'dürfen works like können: Präteritum durfte + umlaut = dürfte. Dürfte ich …? is a very polite way to ask for permission.',
    },
  ],
};

export default topic;
