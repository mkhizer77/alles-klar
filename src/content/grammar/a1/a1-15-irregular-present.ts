import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-15-irregular-present',
  level: 'A1',
  unit: 3,
  order: 15,
  title: 'Irregular present tense: stem-changing verbs',
  germanTerm: 'unregelmäßige Verben',
  tags: ['verbs', 'present tense', 'irregular', 'stem change', 'umlaut'],
  summary: 'Some common verbs change their stem vowel in the du and er / sie / es forms only (fahren → du fährst, sprechen → er spricht); the endings stay regular.',
  explanation: `
### What changes, and what does not

A group of frequent verbs is called **irregular** (*unregelmäßig*) or **stem-changing**. The name sounds worse than the reality: the **endings** are exactly the regular ones (-e, -st, -t, -en, -t, -en). Only the **vowel in the stem** changes, and only in **two** forms: **du** and **er / sie / es**.

| | sprechen (to speak) | fahren (to drive) |
|---|---|---|
| ich | sprech**e** | fahr**e** |
| du | **sprich**st | **fähr**st |
| er / sie / es | **sprich**t | **fähr**t |
| wir | sprech**en** | fahr**en** |
| ihr | sprech**t** | fahr**t** |
| sie / Sie | sprech**en** | fahr**en** |

*ich, wir, ihr, sie* always keep the dictionary vowel. If you remember "**du and er change, the rest stay**", you have the whole rule.

### The three kinds of change

| change | verbs | du / er forms |
|---|---|---|
| **e → i** | sprechen, essen, geben, nehmen, helfen, treffen, vergessen, werfen | du sprichst / er spricht, du isst / er isst, du gibst / er gibt, du **nimmst** / er **nimmt**, du hilfst / er hilft, du triffst / er trifft |
| **e → ie** | lesen, sehen, empfehlen | du liest / er liest, du siehst / er sieht, er empfiehlt |
| **a → ä** | fahren, schlafen, tragen, waschen, laufen (au → äu), fallen, fangen, halten, lassen | du fährst / er fährt, du schläfst / er schläft, du trägst / er trägt, du wäschst / er wäscht, du läufst / er läuft, er hält |

These lists cover almost all A1 stem-changers. Only verbs with **e** or **a** (and **au**) in the stem can change; a verb like *kommen* or *trinken* is safe.

### Spelling details

- **nehmen** changes more than the vowel: *du nimmst, er nimmt* (the *h* goes, the *m* doubles).
- Stems that end in **-s, -ss, -ß** take only *-t* for du: *du liest* (lesen), *du isst* (essen). So *du isst* and *er isst* look the same.
- **halten** and **raten** end in -t, but in the changed forms they do **not** add the extra *-e-*: *er hält* (not *hältet*), *du hältst*.
- **wissen** (to know a fact) is a special case: *ich weiß, du weißt, er weiß, wir wissen, ihr wisst, sie wissen*. The singular looks like a different verb.

### Which verbs are irregular?

There is no way to see it from the infinitive: *fahren* changes, *machen* does not; *sprechen* changes, *lernen* does not. Dictionaries mark the change, often as *fahren (fährt)* or *sprechen (spricht)*. The **er form** is the one to memorise with each new verb; the du form follows from it (*er fährt → du fährst*).

### The imperative preview

The *e → i / ie* change also appears when you give an order to one friend: *Sprich lauter! Lies das! Nimm das!* The *a → ä* change does **not**: *Fahr vorsichtig!* This comes back in the imperative topic.

### Why it matters

These are among the most frequent verbs in the language: eating, sleeping, reading, speaking, driving, giving, taking. Using *er fahrt* or *du sprechst* is understood but sounds very foreign, and the same verbs are irregular again in the past tense. Memorise the *er* form of each one as you meet it.
`,
  examples: [
    { de: 'Ich spreche Deutsch, und du sprichst Englisch.', en: 'I speak German, and you speak English. (e → i only in du)' },
    { de: 'Er fährt nach Hamburg.', en: 'He drives to Hamburg. (a → ä)' },
    { de: 'Sie liest ein Buch.', en: 'She reads a book. (e → ie)' },
    { de: 'Was isst du gern?', en: 'What do you like to eat? (essen → isst)' },
    { de: 'Er nimmt den Bus.', en: 'He takes the bus. (nehmen → nimmt, with spelling change)' },
    { de: 'Das Kind schläft.', en: 'The child is sleeping. (schlafen → schläft)' },
    { de: 'Wir fahren und ihr fahrt auch.', en: 'We drive and you (all) drive too. (wir and ihr keep the vowel)' },
    { de: 'Ich weiß nicht.', en: 'I don\'t know. (wissen: weiß in the singular)' },
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
