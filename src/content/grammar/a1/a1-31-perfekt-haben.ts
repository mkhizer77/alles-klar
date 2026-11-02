import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-31-perfekt-haben',
  level: 'A1',
  unit: 7,
  order: 35,
  title: 'The Perfekt with haben: Partizip II',
  germanTerm: 'Perfekt, Partizip II',
  tags: ['past tense', 'perfekt', 'participle', 'haben'],
  summary: 'The Perfekt is the everyday past tense: a form of haben in position 2 plus the Partizip II (ge-mach-t, ge-trunk-en) at the end of the sentence.',
  steps: [
    {
      title: 'The everyday past tense',
      text: `
When Germans talk about the past in conversation, they almost always use the **Perfekt**. It covers both English *I did* and *I have done*.

It has two parts: a **helper verb** (*Hilfsverb*) in position 2, for most verbs **haben**, and a special verb form at the end, the **Partizip II** (past participle).
`,
      examples: [
        { de: 'Ich habe gestern Pizza gegessen.', en: 'I ate pizza yesterday. (habe … gegessen)' },
        { de: 'Wir haben einen Film gesehen.', en: 'We watched a film. (haben … gesehen)' },
        { de: 'Hast du schon gefrühstückt?', en: 'Have you had breakfast yet? (hast … gefrühstückt)' },
      ],
    },
    {
      title: 'haben and the participle form a bracket',
      text: `
The helper verb and the participle frame the rest of the sentence, exactly like a modal verb and its infinitive. **haben** is conjugated normally: *ich habe, du hast, er hat, wir haben, ihr habt, sie haben*. The participle never changes and is always the **last word**.

| position 1 | position 2 | midfield | end |
|---|---|---|---|
| Ich | **habe** | gestern viel | **gearbeitet**. |
| Gestern | **habe** | ich viel | **gearbeitet**. |
| **Hast** | du | das Buch | **gelesen**? |
`,
      examples: [
        { de: 'Ich habe gestern viel gearbeitet.', en: 'I worked a lot yesterday.' },
        { de: 'Gestern habe ich viel gearbeitet.', en: 'Yesterday I worked a lot. (time first, habe second)' },
        { de: 'Hast du das Buch gelesen?', en: 'Did you read the book? (question: hast first, participle last)' },
        { de: 'Was hast du am Wochenende gemacht?', en: 'What did you do at the weekend? (the most common A1 question)' },
      ],
    },
    {
      title: 'Regular verbs: ge- + stem + -t',
      text: `
For regular (weak) verbs, take the stem, put **ge-** in front and **-t** at the end: *machen → **ge**mach**t***, *kaufen → gekauft*, *spielen → gespielt*, *lernen → gelernt*.

If the stem ends in **-t** or **-d**, the ending is **-et**, so you can hear it: *arbeiten → gearbeitet*.
`,
      examples: [
        { de: 'Ich habe Fußball gespielt.', en: 'I played football. (ge-spiel-t)' },
        { de: 'Sie hat ein Auto gekauft.', en: 'She bought a car. (ge-kauf-t)' },
        { de: 'Wir haben heute viel gearbeitet.', en: 'We worked a lot today. (stem ends in -t: -et)' },
      ],
    },
    {
      title: 'Irregular verbs: ge- + stem + -en',
      text: `
Irregular (strong) verbs take **ge-** and **-en**, and the vowel often changes. There is no rule to predict it, so learn each pair like vocabulary: *trinken – getrunken*.

| infinitive | Partizip II |
|---|---|
| essen | **gegessen** |
| trinken | **getrunken** |
| sehen | **gesehen** |
| lesen | **gelesen** |
| schreiben | **geschrieben** |
| finden | **gefunden** |
`,
      examples: [
        { de: 'Wir haben Pizza gegessen.', en: 'We ate pizza. (essen → gegessen)' },
        { de: 'Hast du den Kaffee getrunken?', en: 'Did you drink the coffee? (trinken → getrunken)' },
        { de: 'Er hat einen Brief geschrieben.', en: 'He wrote a letter. (schreiben → geschrieben)' },
      ],
    },
    {
      title: 'Separable verbs: prefix + ge + stem',
      text: `
With separable verbs the **ge-** goes between the prefix and the stem: *einkaufen → ein**ge**kauft*, *aufräumen → aufgeräumt*, *anrufen → angerufen*. The whole participle stays one word at the end of the sentence.
`,
      examples: [
        { de: 'Sie hat am Samstag eingekauft.', en: 'She went shopping on Saturday. (ein-ge-kauft)' },
        { de: 'Ich habe mein Zimmer aufgeräumt.', en: 'I tidied my room. (auf-ge-räumt)' },
        { de: 'Er hat mich gestern angerufen.', en: 'He called me yesterday. (an-ge-rufen)' },
      ],
    },
    {
      title: 'No ge- at all',
      text: `
Two groups never take **ge-**. Verbs with the prefixes **be-, ver-, er-, ent-, emp-, ge-, zer-**: *besuchen → besucht*, *verstehen → verstanden*, *bekommen → bekommen*. And verbs ending in **-ieren**: *studieren → studiert*, *telefonieren → telefoniert*.

Both groups keep the *-t* or *-en* ending; they just skip the *ge-*.
`,
      examples: [
        { de: 'Er hat seine Oma besucht.', en: 'He visited his grandma. (be-: no ge-)' },
        { de: 'Ich habe das nicht verstanden.', en: 'I did not understand that. (ver-: no ge-)' },
        { de: 'Ich habe zwei Stunden telefoniert.', en: 'I was on the phone for two hours. (-ieren: no ge-)' },
      ],
    },
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
