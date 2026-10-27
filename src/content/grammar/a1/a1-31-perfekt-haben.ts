import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-31-perfekt-haben',
  level: 'A1',
  unit: 7,
  order: 31,
  title: 'The Perfekt with haben: Partizip II',
  germanTerm: 'Perfekt, Partizip II',
  tags: ['past tense', 'perfekt', 'participle', 'haben'],
  summary: 'The Perfekt is the everyday past tense: a form of haben in position 2 plus the Partizip II (ge-mach-t, ge-trunk-en) at the end of the sentence.',
  explanation: `
### What it is

When Germans talk about the past in conversation, they almost always use the **Perfekt**. It corresponds to both English *I did* and *I have done*:

- Ich **habe** gestern Pizza **gegessen**. – *I ate pizza yesterday.*
- Wir **haben** einen Film **gesehen**. – *We watched a film.*
- **Hast** du schon **gefrühstückt**? – *Have you had breakfast yet?*

The Perfekt has two parts: a **helper verb** (*Hilfsverb*) in position 2 – for most verbs **haben** – and a special verb form at the end called the **Partizip II** (past participle).

### The sentence bracket again

The helper verb and the participle form a bracket around the rest of the sentence, exactly like a modal verb and its infinitive:

| position 1 | position 2 | midfield | end |
|---|---|---|---|
| Ich | **habe** | gestern viel | **gearbeitet**. |
| Gestern | **habe** | ich viel | **gearbeitet**. |
| **Hast** | du | das Buch | **gelesen**? |

*Haben* is conjugated normally: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.

### Building the Partizip II

**1. Regular (weak) verbs: ge- + stem + -t**

| infinitive | Partizip II |
|---|---|
| machen | **ge**mach**t** |
| kaufen | **ge**kauf**t** |
| spielen | **ge**spiel**t** |
| lernen | **ge**lern**t** |
| arbeiten | **ge**arbeit**et** (stem ends in -t, so -et) |

**2. Irregular (strong) verbs: ge- + (changed) stem + -en**

| infinitive | Partizip II |
|---|---|
| essen | **ge**g**essen** |
| trinken | **ge**tr**u**nk**en** |
| sehen | **ge**seh**en** |
| lesen | **ge**les**en** |
| schreiben | **ge**schr**ie**b**en** |
| finden | **ge**f**u**nd**en** |
| sprechen | **ge**spr**o**ch**en** |
| nehmen | **ge**n**omm**en |

The vowel often changes, and there is no rule to predict it. You learn each one with its infinitive, like a vocabulary pair: *trinken – getrunken*.

**3. Separable verbs: prefix + ge + stem**

The **ge-** goes between the prefix and the stem: *einkaufen → ein**ge**kauft*, *aufräumen → auf**ge**räumt*, *anrufen → an**ge**rufen*.

**4. No ge- at all**

Two groups never take ge-:
- Verbs with the inseparable prefixes **be-, ver-, er-, ent-, emp-, ge-, zer-**: *besuchen → besucht*, *verstehen → verstanden*, *erklären → erklärt*, *bekommen → bekommen*.
- Verbs ending in **-ieren**: *studieren → studiert*, *telefonieren → telefoniert*, *passieren → passiert*.

Both groups keep the *-t* or *-en* ending; they just skip the *ge-*.

### Why it matters

Without the Perfekt you cannot say what you did yesterday, at the weekend or on holiday. It is the main past tense of spoken German and of emails and messages; the written Präteritum (*ich machte*) comes later. The bracket structure is the same one you already use with modal verbs and separable verbs, so the only new work is learning the participles. The next topic covers the verbs that use **sein** instead of *haben* (*ich bin gegangen*).
`,
  examples: [
    { de: 'Ich habe gestern Fußball gespielt.', en: 'I played football yesterday. (regular: gespielt)' },
    { de: 'Wir haben Pizza gegessen.', en: 'We ate pizza. (irregular: gegessen)' },
    { de: 'Hast du den Film gesehen?', en: 'Did you see the film? (question: hast first, participle last)' },
    { de: 'Sie hat am Samstag eingekauft.', en: 'She went shopping on Saturday. (separable: ein-ge-kauft)' },
    { de: 'Er hat seine Oma besucht.', en: 'He visited his grandma. (be- prefix: no ge-)' },
    { de: 'Ich habe zwei Stunden telefoniert.', en: 'I was on the phone for two hours. (-ieren: no ge-)' },
    { de: 'Was hast du am Wochenende gemacht?', en: 'What did you do at the weekend? (the most common A1 question)' },
  ],
  connections: [
    { topicId: 'a1-04-sein-haben', note: 'The helper verb haben is conjugated exactly as you learned it.' },
    { topicId: 'a1-30-word-order-midfield', note: 'haben … Partizip II is a sentence bracket, like a modal verb and its infinitive.' },
    { topicId: 'a1-16-separable-verbs', note: 'Separable verbs put ge- between prefix and stem: eingekauft.' },
    { topicId: 'a1-32-perfekt-sein', note: 'Verbs of movement and change use sein instead of haben: ich bin gegangen.' },
    { topicId: 'a1-33-war-hatte', note: 'For sein and haben themselves, speakers prefer the simple forms war and hatte.' },
  ],
  edgeCases: [
    'The participle goes to the **end** of the sentence, after objects and places: *Ich habe gestern im Park Fußball **gespielt***.',
    'Stems ending in **-t** or **-d** add **-et**: *gearbeitet, geredet, gewartet*, so the ending can be heard.',
    'Verbs ending in **-ieren** and verbs with **be-, ver-, er-, ent-, emp-, ge-, zer-** have **no ge-**: *studiert, besucht, verstanden, bekommen*.',
    'Irregular participles cannot be guessed: *gegessen* (not *geesst*), *getrunken* (not *getrinkt*). Learn infinitive and participle together.',
    'English *have done* and *did* are both the Perfekt in spoken German. There is no "present perfect vs simple past" distinction to worry about.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-31-perfekt-haben-ex01',
      prompt: 'Which two words form the Perfekt in "Ich habe gestern Musik gehört."?',
      options: ['Ich … gestern', 'habe … gehört', 'gestern … Musik'],
      answer: 1,
      explanation: 'habe is the helper verb in position 2; gehört is the Partizip II at the end. Together they make the Perfekt.',
    },
    {
      type: 'fill',
      id: 'a1-31-perfekt-haben-ex02',
      prompt: 'Wir haben gestern Tennis ___. (spielen)',
      answer: ['gespielt'],
      explanation: 'spielen is regular: ge- + spiel + -t = gespielt.',
    },
    {
      type: 'fill',
      id: 'a1-31-perfekt-haben-ex03',
      prompt: 'Ich habe heute viel ___. (arbeiten)',
      answer: ['gearbeitet'],
      explanation: 'The stem arbeit- ends in -t, so the ending is -et: gearbeitet.',
    },
    {
      type: 'fill',
      id: 'a1-31-perfekt-haben-ex04',
      prompt: 'Hast du den Kaffee ___? (trinken)',
      answer: ['getrunken'],
      explanation: 'trinken is irregular: the vowel changes and the ending is -en: getrunken.',
    },
    {
      type: 'match',
      id: 'a1-31-perfekt-haben-ex05',
      prompt: 'Match each infinitive with its Partizip II.',
      pairs: [
        ['essen', 'gegessen'],
        ['sehen', 'gesehen'],
        ['kaufen', 'gekauft'],
        ['schreiben', 'geschrieben'],
        ['lernen', 'gelernt'],
      ],
      explanation: 'Regular verbs take ge- … -t (gekauft, gelernt). Irregular verbs take ge- … -en, often with a vowel change (gegessen, geschrieben).',
    },
    {
      type: 'mc',
      id: 'a1-31-perfekt-haben-ex06',
      prompt: 'What is the Partizip II of "einkaufen"?',
      options: ['geeinkauft', 'eingekauft', 'einkauft'],
      answer: 1,
      explanation: 'With separable verbs, ge- goes between the prefix and the stem: ein-ge-kauft.',
    },
    {
      type: 'mc',
      id: 'a1-31-perfekt-haben-ex07',
      prompt: 'What is the Partizip II of "besuchen"?',
      options: ['gebesucht', 'besucht', 'begesucht'],
      answer: 1,
      explanation: 'be- is an inseparable prefix, so there is no ge-: besucht.',
    },
    {
      type: 'fill',
      id: 'a1-31-perfekt-haben-ex08',
      prompt: 'Sie hat in Berlin ___. (studieren)',
      answer: ['studiert'],
      explanation: 'Verbs ending in -ieren never take ge-: studiert.',
    },
    {
      type: 'order',
      id: 'a1-31-perfekt-haben-ex09',
      prompt: 'Build the sentence: "We watched a film yesterday."',
      words: ['gesehen.', 'Film', 'haben', 'Wir', 'gestern', 'einen'],
      answer: ['Wir haben gestern einen Film gesehen.'],
      explanation: 'haben in position 2, the participle gesehen at the end. Time (gestern) comes before the object.',
    },
    {
      type: 'order',
      id: 'a1-31-perfekt-haben-ex10',
      prompt: 'Build the question: "What did you do at the weekend?" (informal)',
      words: ['am', 'du', 'gemacht?', 'Wochenende', 'Was', 'hast'],
      answer: ['Was hast du am Wochenende gemacht?'],
      explanation: 'In a W-question, hast takes position 2 after Was, and gemacht closes the bracket.',
    },
    {
      type: 'fill',
      id: 'a1-31-perfekt-haben-ex11',
      prompt: 'Er ___ seine Hausaufgaben gemacht. (haben)',
      answer: ['hat'],
      explanation: 'The helper verb is conjugated: er hat. The participle gemacht does not change.',
    },
    {
      type: 'translate',
      id: 'a1-31-perfekt-haben-ex12',
      prompt: 'Translate: "I read the book."',
      answer: ['Ich habe das Buch gelesen.'],
      hint: 'lesen – gelesen',
      explanation: 'lesen is irregular: gelesen. habe in position 2, participle at the end.',
    },
  ],
};

export default topic;
