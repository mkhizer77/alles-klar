import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-20-konjunktiv-2-polite',
  level: 'A2',
  unit: 7,
  order: 20,
  title: 'Konjunktiv II for polite requests and wishes (würde, hätte, wäre, könnte)',
  germanTerm: 'Konjunktiv II (Höflichkeit)',
  tags: ['verbs', 'mood', 'politeness', 'Konjunktiv', 'requests'],
  summary: 'Konjunktiv II is the "would" form; at A2 you use it mainly to be polite (Könnten Sie …?, Ich hätte gern …) and to express wishes (Ich würde gern …).',
  explanation: `
### What it is

**Konjunktiv II** (*Konjunktiv II*) is a verb form for things that are **not real** (yet): wishes, polite requests, imagined situations. English does this with *would*, *could* and *had*: *I would like …*, *Could you …?*

At A2 you do not need the whole system. You need **four verbs** that are used all the time:

| verb | Konjunktiv II | English |
|---|---|---|
| werden | **würde** + infinitive | would … |
| haben | **hätte** | would have |
| sein | **wäre** | would be |
| können | **könnte** | could |

### The forms

| | würde | hätte | wäre | könnte |
|---|---|---|---|---|
| ich | würde | hätte | wäre | könnte |
| du | würdest | hättest | wärst / wärest | könntest |
| er / sie / es | würde | hätte | wäre | könnte |
| wir | würden | hätten | wären | könnten |
| ihr | würdet | hättet | wärt / wäret | könntet |
| sie / Sie | würden | hätten | wären | könnten |

Tip: these look like the Präteritum (*hatte, war, konnte*) plus an **umlaut** and the ending **-e**. The *ich* and *er* forms are identical.

Other modal verbs work the same way: *müssen* → **müsste**, *dürfen* → **dürfte**, *sollen* → **sollte** (no umlaut), *wollen* → **wollte** (no umlaut).

### würde + infinitive: the all-purpose "would"

For almost every other verb, do not learn a special form. Use **würde** + infinitive at the end, exactly like a modal verb:

- Ich **würde** gern nach Japan **reisen**. – *I would like to travel to Japan.*
- **Würdest** du mir **helfen**? – *Would you help me?*

### Polite requests

A direct question (*Können Sie mir helfen?*) is correct but a little blunt. The Konjunktiv II makes it softer, like English *could* instead of *can*:

- **Könnten** Sie mir bitte helfen? – *Could you help me, please?*
- **Würden** Sie bitte das Fenster schließen? – *Would you please close the window?*
- **Hätten** Sie einen Moment Zeit? – *Would you have a moment?*
- **Wäre** es möglich, später zu kommen? – *Would it be possible to come later?*

### Wishes and ordering things

The most useful phrase in a café, shop or restaurant is **Ich hätte gern …** (*I would like …*):

- Ich **hätte gern** einen Kaffee. – *I would like a coffee.*
- Ich **würde gern** einen Tisch reservieren. – *I would like to reserve a table.*
- Ich **wäre** jetzt **gern** am Strand. – *I would like to be on the beach now.*

Pattern: *hätte gern* + noun, *würde gern* + verb, *wäre gern* + place or adjective.

### Suggestions and advice

- Wir **könnten** ins Kino gehen. – *We could go to the cinema.*
- Du **solltest** mehr schlafen. – *You should sleep more.*

### Why it matters

Politeness in German is partly grammar. *Ich will einen Kaffee* sounds like a demand; *Ich hätte gern einen Kaffee* sounds normal. Learning these four verbs gives you polite German in every shop and office, and prepares you for the full Konjunktiv II at B1.
`,
  examples: [
    { de: 'Könnten Sie mir bitte helfen?', en: 'Could you help me, please? (polite request)' },
    { de: 'Ich hätte gern ein Glas Wasser.', en: 'I would like a glass of water. (ordering)' },
    { de: 'Würdest du bitte die Tür schließen?', en: 'Would you please close the door?' },
    { de: 'Das wäre sehr nett.', en: 'That would be very nice.' },
    { de: 'Ich würde gern mit dem Chef sprechen.', en: 'I would like to speak to the boss. (würde gern + verb)' },
    { de: 'Wir könnten am Wochenende wandern gehen.', en: 'We could go hiking at the weekend. (suggestion)' },
    { de: 'Du solltest zum Arzt gehen.', en: 'You should go to the doctor. (advice)' },
    { de: 'Hätten Sie morgen Zeit?', en: 'Would you have time tomorrow?' },
  ],
  connections: [
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
    'Polite questions can start with the verb (*Könnten Sie …?*) or be statements with *bitte*: *Ich hätte gern …* No *bitte* is needed in that case.',
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
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex03',
      prompt: '___ du mir bitte das Salz geben? (werden)',
      answer: ['Würdest'],
      explanation: 'du + würde = würdest. würde + infinitive turns almost any verb into a polite request.',
    },
    {
      type: 'match',
      id: 'a2-20-konjunktiv-2-polite-ex04',
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
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex05',
      prompt: 'Complete: "Es ___ schön, wenn du kommen könntest."',
      options: ['war', 'wäre', 'würde'],
      answer: 1,
      explanation: 'For sein use the special form wäre, not würde sein. war is the real past.',
    },
    {
      type: 'order',
      id: 'a2-20-konjunktiv-2-polite-ex06',
      prompt: 'Build the polite request: "Could you please repeat that?"',
      words: ['bitte', 'Sie', 'wiederholen?', 'das', 'Könnten'],
      answer: ['Könnten Sie das bitte wiederholen?'],
      explanation: 'The polite modal Könnten starts the yes/no question, Sie follows, and the infinitive wiederholen goes to the end.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex07',
      prompt: 'Wir ___ gern das Zimmer sehen. (werden)',
      answer: ['würden'],
      explanation: 'würde gern + verb = would like to do something. wir + würde = würden.',
    },
    {
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex08',
      prompt: 'Which sentence is the most polite way to order in a bakery?',
      options: ['Ich will zwei Brötchen.', 'Gib mir zwei Brötchen.', 'Ich hätte gern zwei Brötchen.'],
      answer: 2,
      explanation: 'Ich hätte gern … is the normal polite phrase. Ich will sounds like a demand and Gib mir is a du-imperative to a stranger.',
    },
    {
      type: 'fill',
      id: 'a2-20-konjunktiv-2-polite-ex09',
      prompt: 'Ich ___ jetzt gern am Strand. (sein)',
      answer: ['wäre'],
      explanation: 'A wish about being somewhere uses wäre gern. The Konjunktiv II of sein is wäre.',
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
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex11',
      prompt: 'Complete: "___ ihr Lust, mit uns ins Kino zu gehen?"',
      options: ['Hättet', 'Hätten', 'Hattet'],
      answer: 0,
      explanation: 'ihr + hätte = hättet. Hattet is the real past tense (did you have?), Hätten is the wir / Sie form.',
    },
    {
      type: 'mc',
      id: 'a2-20-konjunktiv-2-polite-ex12',
      prompt: 'Which sentence gives advice with the Konjunktiv II?',
      options: ['Du sollst mehr schlafen.', 'Du solltest mehr schlafen.', 'Du schläfst mehr.'],
      answer: 1,
      explanation: 'solltest is the Konjunktiv II of sollen and means "you should" as friendly advice. Du sollst is a stronger order from someone else.',
    },
  ],
};

export default topic;
