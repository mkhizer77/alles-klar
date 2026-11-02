import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-15-irregular-present',
  level: 'A1',
  unit: 3,
  order: 17,
  title: 'Irregular present tense: stem-changing verbs',
  germanTerm: 'unregelmäßige Verben',
  tags: ['verbs', 'present tense', 'irregular', 'stem change', 'umlaut'],
  summary: 'Some common verbs change their stem vowel in the du and er / sie / es forms only (fahren → du fährst, sprechen → er spricht); the endings stay regular.',
  steps: [
    {
      title: 'Only du and er change',
      text: `
Some frequent verbs are **irregular** (*unregelmäßig*): the vowel in the **stem** (the verb without -en) changes. The **endings** stay regular, and only **du** and **er / sie / es** change.

| | sprechen | fahren |
|---|---|---|
| ich | spreche | fahre |
| du | **sprichst** | **fährst** |
| er / sie / es | **spricht** | **fährt** |
| wir | sprechen | fahren |
| ihr | sprecht | fahrt |
| sie / Sie | sprechen | fahren |

Rule: **du and er change, the rest stay**.
`,
      examples: [
        { de: 'Ich spreche Deutsch, und du sprichst Englisch.', en: 'I speak German, and you speak English. (e → i only in du)' },
        { de: 'Er fährt nach Hamburg.', en: 'He drives to Hamburg. (a → ä)' },
        { de: 'Wir fahren und ihr fahrt auch.', en: 'We drive and you all drive too. (wir and ihr keep the vowel)' },
      ],
    },
    {
      title: 'e → i: sprechen, essen, geben, nehmen',
      text: `
The first group changes **e → i**: *sprechen, essen, geben, nehmen, helfen, treffen, vergessen*.

One verb changes more than the vowel: **nehmen** → *du nimmst, er nimmt*. The *h* goes and the *m* doubles.
`,
      examples: [
        { de: 'Was isst du gern?', en: 'What do you like to eat? (essen → isst)' },
        { de: 'Er nimmt den Bus.', en: 'He takes the bus. (nehmen → nimmt, h gone, mm)' },
        { de: 'Sie gibt mir das Buch.', en: 'She gives me the book. (geben → gibt)' },
        { de: 'Hilfst du mir?', en: 'Are you helping me? (helfen → hilfst)' },
      ],
    },
    {
      title: 'e → ie: lesen, sehen',
      text: `
A small group changes **e → ie**: *lesen, sehen, empfehlen*.

Spelling note: when the stem ends in **-s, -ss** or **-ß**, the du form adds only **-t**, not *-st*. So *du liest* and *er liest* look the same, and so do *du isst* and *er isst*.
`,
      examples: [
        { de: 'Sie liest ein Buch.', en: 'She reads a book. (lesen → liest)' },
        { de: 'Siehst du den Film?', en: 'Are you watching the film? (sehen → siehst)' },
        { de: 'Du liest sehr schnell.', en: 'You read very fast. (stem in -s: du liest, not liesst)' },
      ],
    },
    {
      title: 'a → ä: fahren, schlafen, tragen',
      text: `
The biggest group changes **a → ä**: *fahren, schlafen, tragen, waschen, fallen, halten, lassen*. **laufen** does the same with **au → äu**: *er läuft*.

Spelling note: **halten** ends in -t, but the changed forms do **not** add an extra *-e-*: *du hältst, er hält* (not *hältet*).
`,
      examples: [
        { de: 'Das Kind schläft.', en: 'The child is sleeping. (schlafen → schläft)' },
        { de: 'Er läuft sehr schnell.', en: 'He runs very fast. (au → äu)' },
        { de: 'Der Bus hält hier.', en: 'The bus stops here. (halten → hält, no extra -e-)' },
      ],
    },
    {
      title: 'wissen, and how to spot the rest',
      text: `
**wissen** (to know a fact) is special: the whole singular changes. *ich weiß, du weißt, er weiß*, then regular *wir wissen, ihr wisst, sie wissen*.

You cannot see from the infinitive whether a verb changes: *fahren* does, *machen* does not. Dictionaries show it as *fahren (fährt)*. So learn the **er form** with each new verb; the du form follows from it.
`,
      examples: [
        { de: 'Ich weiß nicht.', en: "I don't know. (wissen: weiß in the singular)" },
        { de: 'Weißt du das?', en: 'Do you know that? (du weißt)' },
        { de: 'Er lernt Deutsch und macht Hausaufgaben.', en: 'He learns German and does homework. (lernen, machen: regular)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-05-present-tense-regular', note: 'The endings are the regular ones; only the stem vowel is new.' },
    { topicId: 'a1-04-sein-haben', note: 'sein and haben are irregular in a different, more complete way.' },
    { topicId: 'a1-18-imperative', note: 'The e → i change also shows in the du imperative: Sprich! Nimm! Lies!' },
    { topicId: 'a1-17-modal-verbs', note: 'Modal verbs also change their vowel, but in all singular forms, not only du and er.' },
    { topicId: 'a1-16-separable-verbs', note: 'Separable verbs with these stems change too: er fährt ab, sie sieht fern.' },
  ],
  edgeCases: [
    'Only **du** and **er / sie / es** change. *Wir fähren*, *ihr sprecht* with a changed vowel, or *ich spriche* are wrong.',
    '**nehmen** → *du nimmst, er nimmt*: the h disappears and m doubles. *Er nehmt* and *er niehmt* are both wrong.',
    '**halten** → *er hält*, **raten** → *er rät*: no extra -e- despite the stem ending in -t.',
    '**wissen** has *weiß* in the whole singular: *ich weiß, du weißt, er weiß*. Do not confuse it with *kennen* (to know a person or place), which is regular.',
    '*laufen* changes **au → äu**: *du läufst, er läuft*. *kaufen* looks similar but is regular: *er kauft*.',
    'Not every verb with e or a changes: *gehen, stehen, machen, sagen, lernen* are regular.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-15-irregular-present-ex01',
      prompt: 'Er ___ nach Berlin. (fahren)',
      answer: ['fährt'],
      explanation: 'fahren changes a → ä in the er form: er fährt.',
    },
    {
      type: 'fill',
      id: 'a1-15-irregular-present-ex02',
      prompt: 'Du ___ sehr gut Deutsch. (sprechen)',
      answer: ['sprichst'],
      explanation: 'sprechen changes e → i in the du form: du sprichst.',
    },
    {
      type: 'fill',
      id: 'a1-15-irregular-present-ex03',
      prompt: 'Sie ___ gern Krimis. (lesen – she)',
      answer: ['liest'],
      explanation: 'lesen changes e → ie: sie liest. The stem ends in -s, so only -t is added.',
    },
    {
      type: 'mc',
      id: 'a1-15-irregular-present-ex04',
      prompt: 'Which form is correct?',
      options: ['er nehmt', 'er nimmt', 'er niemt'],
      answer: 1,
      explanation: 'nehmen is the most changed verb: er nimmt (h dropped, m doubled).',
    },
    {
      type: 'match',
      id: 'a1-15-irregular-present-ex05',
      prompt: 'Match the infinitive with its er / sie / es form.',
      pairs: [
        ['essen', 'isst'],
        ['schlafen', 'schläft'],
        ['sehen', 'sieht'],
        ['geben', 'gibt'],
        ['laufen', 'läuft'],
      ],
      explanation: 'e → i (isst, gibt), e → ie (sieht), a → ä (schläft), au → äu (läuft).',
    },
    {
      type: 'mc',
      id: 'a1-15-irregular-present-ex06',
      prompt: 'Which sentence is wrong?',
      options: ['Wir fahren nach Köln.', 'Ihr fährt nach Köln.', 'Du fährst nach Köln.'],
      answer: 1,
      explanation: 'Only du and er change. The ihr form keeps the a: ihr fahrt.',
    },
    {
      type: 'fill',
      id: 'a1-15-irregular-present-ex07',
      prompt: 'Was ___ du zum Frühstück? (essen)',
      answer: ['isst'],
      explanation: 'essen → du isst. The stem ends in -ss, so the du ending is only -t, and du isst = er isst.',
    },
    {
      type: 'mc',
      id: 'a1-15-irregular-present-ex08',
      prompt: 'Which of these verbs is regular (no vowel change)?',
      options: ['tragen', 'kaufen', 'treffen'],
      answer: 1,
      explanation: 'kaufen is regular: er kauft. tragen → er trägt, treffen → er trifft.',
    },
    {
      type: 'fill',
      id: 'a1-15-irregular-present-ex09',
      prompt: 'Ich ___ es nicht. (wissen)',
      answer: ['weiß'],
      explanation: 'wissen has weiß in the whole singular: ich weiß, du weißt, er weiß.',
    },
    {
      type: 'order',
      id: 'a1-15-irregular-present-ex10',
      prompt: 'Build the sentence: "He takes the bus."',
      words: ['Bus.', 'nimmt', 'Er', 'den'],
      answer: ['Er nimmt den Bus.'],
      explanation: 'nehmen → er nimmt. den Bus is the object (Accusative).',
    },
    {
      type: 'translate',
      id: 'a1-15-irregular-present-ex11',
      prompt: 'Translate: "She is sleeping."',
      answer: ['Sie schläft.'],
      hint: 'schlafen = to sleep',
      explanation: 'schlafen changes a → ä in the sie form: sie schläft.',
    },
    {
      type: 'mc',
      id: 'a1-15-irregular-present-ex12',
      prompt: 'Complete: "Der Bus ___ hier." (halten)',
      options: ['haltet', 'hält', 'hältet'],
      answer: 1,
      explanation: 'halten changes a → ä and takes no extra -e- in the er form: er hält. ihr haltet is the ihr form.',
    },
  ],
};

export default topic;
