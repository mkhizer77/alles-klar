import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-16-separable-verbs',
  level: 'A1',
  unit: 3,
  order: 18,
  title: 'Separable verbs: the prefix goes to the end',
  germanTerm: 'trennbare Verben',
  tags: ['verbs', 'separable', 'prefix', 'word order', 'sentence bracket'],
  summary: 'Many verbs have a prefix (an-, auf-, ein-, mit- …) that splits off in a sentence and goes to the very end; the conjugated part stays in position 2.',
  steps: [
    {
      title: 'A prefix changes the meaning',
      text: `
German builds new verbs by putting a **prefix** (*Präfix*, a short piece in front) on a basic verb. *kommen* (to come) gives **an**kommen (to arrive), **mit**kommen (to come along) and **zurück**kommen (to come back).

Many prefixes are **separable** (*trennbar*): in a sentence they split off from the verb. Listen to the end of a sentence, because the prefix can change everything: *anmachen* (turn on) vs *ausmachen* (turn off).
`,
      examples: [
        { de: 'Ich komme um acht an.', en: 'I arrive at eight. (ankommen)' },
        { de: 'Kommst du mit?', en: 'Are you coming along? (mitkommen)' },
        { de: 'Ich mache das Licht an.', en: 'I turn the light on. (anmachen)' },
        { de: 'Ich mache das Licht aus.', en: 'I turn the light off. (ausmachen)' },
      ],
    },
    {
      title: 'The prefix goes to the end',
      text: `
In a statement or question, the verb is conjugated as usual and takes **position 2**. The prefix goes to the **very end** of the sentence, after time, place and objects.

| infinitive | sentence |
|---|---|
| **auf**stehen | Er **steht** um sieben Uhr **auf**. |
| **an**rufen | Ich **rufe** dich morgen **an**. |
| **ein**kaufen | Wir **kaufen** am Samstag **ein**. |

Verb and prefix form a **bracket** (*Satzklammer*) around the rest of the sentence.
`,
      examples: [
        { de: 'Ich stehe um sechs Uhr auf.', en: 'I get up at six. (aufstehen)' },
        { de: 'Rufst du mich heute Abend an?', en: 'Will you call me this evening? (anrufen)' },
        { de: 'Der Zug kommt um neun an.', en: 'The train arrives at nine. (ankommen)' },
        { de: 'Wir kaufen morgen ein.', en: 'We are going shopping tomorrow. (einkaufen)' },
      ],
    },
    {
      title: 'Which prefixes separate',
      text: `
The common separable prefixes are all words that can also stand alone, mostly prepositions and adverbs:

**ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-, los-, fern-**

In speech the **stress** is on the prefix: **AN**rufen, **AUF**stehen. If the prefix is stressed, the verb separates.
`,
      examples: [
        { de: 'Sie sieht abends fern.', en: 'She watches TV in the evening. (fernsehen)' },
        { de: 'Er kommt um zehn zurück.', en: 'He comes back at ten. (zurückkommen)' },
        { de: 'Wann fängt der Film an?', en: 'When does the film start? (anfangen)' },
      ],
    },
    {
      title: 'When the prefix stays attached',
      text: `
The prefix only splits off when the verb is the conjugated verb in position 2. After a **modal verb** (*können, müssen, wollen …*) the separable verb is an **infinitive** (the -en form) at the end, and it stays in **one piece**.

Later you will see the same thing in the past: the *ge-* goes between prefix and verb (*aufgestanden, angerufen*).
`,
      examples: [
        { de: 'Ich muss früh aufstehen.', en: 'I have to get up early. (infinitive after a modal: not separated)' },
        { de: 'Ich will mitkommen.', en: 'I want to come along. (mitkommen stays whole)' },
        { de: 'Kannst du mich anrufen?', en: 'Can you call me? (anrufen stays whole)' },
      ],
    },
    {
      title: 'The imperative',
      text: `
In a command (the **imperative**, *Imperativ*) the verb comes first and the prefix still goes to the **end**. This works for all three forms: *du*, *ihr* and *Sie*.
`,
      examples: [
        { de: 'Steh bitte auf!', en: 'Please get up! (du)' },
        { de: 'Ruf mich an!', en: 'Call me! (du)' },
        { de: 'Kommen Sie mit!', en: 'Come along! (Sie)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-16b-inseparable-verbs', note: 'Some prefixes (be-, ver-, er- …) never separate; that is the sibling topic.' },
    { topicId: 'a1-06-verb-second', note: 'The conjugated part stays in position 2; the prefix forms the other end of the bracket.' },
    { topicId: 'a1-05-present-tense-regular', note: 'The main verb part takes the normal endings: ich rufe an, du rufst an.' },
    { topicId: 'a1-17-modal-verbs', note: 'After a modal the separable verb stays in one piece at the end of the sentence.' },
    { topicId: 'a1-18-imperative', note: 'In commands the prefix goes to the end: Steh auf!' },
    { topicId: 'a1-31-perfekt-haben', note: 'The past participle puts -ge- inside: angerufen, aufgestanden.' },
  ],
  edgeCases: [
    'The prefix goes to the **very end**, after everything else: *Ich rufe dich morgen um acht an*, not *Ich rufe an dich morgen*.',
    'After a **modal verb** the separable verb stays whole at the end: *Ich will mitkommen*, not *Ich will kommen mit*.',
    'A few prefixes (**um-, über-, unter-, durch-, wieder-**) can be either, depending on the verb and stress. At A1 just learn each verb: *umsteigen* (separable), *wiederholen* (inseparable).',
    'Stress tells you: **AN**kommen is separable, be**KOM**men is not.',
    'The prefix can change the meaning completely: *anmachen* (turn on), *ausmachen* (turn off), *aufmachen* (open), *zumachen* (close).',
  ],
  exercises: [
    {
      type: 'order',
      id: 'a1-16-separable-verbs-ex01',
      prompt: 'Build the sentence: "I get up at seven." (aufstehen)',
      words: ['um', 'stehe', 'auf.', 'Ich', 'sieben'],
      answer: ['Ich stehe um sieben auf.'],
      explanation: 'The conjugated part stehe is second; the prefix auf goes to the end.',
    },
    {
      type: 'fill',
      id: 'a1-16-separable-verbs-ex02',
      prompt: 'Ich rufe dich morgen ___. (anrufen – prefix)',
      answer: ['an'],
      explanation: 'anrufen separates: rufe … an. The prefix an goes to the end of the sentence.',
    },
    {
      type: 'mc',
      id: 'a1-16-separable-verbs-ex03',
      prompt: 'Which sentence is correct for "The train arrives at nine"?',
      options: ['Der Zug ankommt um neun.', 'Der Zug kommt um neun an.', 'Der Zug kommt an um neun.'],
      answer: 1,
      explanation: 'The prefix an goes to the very end, after the time: kommt um neun an.',
    },
    {
      type: 'match',
      id: 'a1-16-separable-verbs-ex04',
      prompt: 'Match the separable verb with its meaning.',
      pairs: [
        ['aufstehen', 'to get up'],
        ['einkaufen', 'to go shopping'],
        ['anrufen', 'to call (phone)'],
        ['fernsehen', 'to watch TV'],
        ['mitkommen', 'to come along'],
      ],
      explanation: 'All five are everyday separable verbs. In a sentence the prefix (auf, ein, an, fern, mit) goes to the end.',
    },
    {
      type: 'fill',
      id: 'a1-16-separable-verbs-ex05',
      prompt: 'Er ___ um zehn zurück. (zurückkommen – verb part)',
      answer: ['kommt'],
      explanation: 'zurückkommen separates: the conjugated part kommt takes position 2, the prefix zurück is already at the end.',
    },
    {
      type: 'order',
      id: 'a1-16-separable-verbs-ex06',
      prompt: 'Build the question: "Are you coming along?" (mitkommen, du)',
      words: ['mit?', 'du', 'Kommst'],
      answer: ['Kommst du mit?'],
      explanation: 'In a yes/no question the conjugated part comes first and the prefix still goes to the end: Kommst du mit?',
    },
    {
      type: 'fill',
      id: 'a1-16-separable-verbs-ex07',
      prompt: 'Sie sieht jeden Abend ___. (fernsehen – prefix)',
      answer: ['fern'],
      explanation: 'fernsehen separates: sieht … fern. Note the stem change e → ie in sieht.',
    },
    {
      type: 'order',
      id: 'a1-16-separable-verbs-ex08',
      prompt: 'Build the question: "When does the film start?" (anfangen)',
      words: ['der', 'an?', 'fängt', 'Wann', 'Film'],
      answer: ['Wann fängt der Film an?'],
      explanation: 'After the question word, the conjugated part fängt is second (with a → ä) and the prefix an goes to the end.',
    },
    {
      type: 'mc',
      id: 'a1-16-separable-verbs-ex09',
      prompt: 'Complete: "Ich muss morgen früh ___."',
      options: ['aufstehen', 'stehen auf', 'auf stehen'],
      answer: 0,
      explanation: 'After a modal verb (muss) the separable verb is an infinitive and stays in one piece: aufstehen.',
    },
    {
      type: 'translate',
      id: 'a1-16-separable-verbs-ex10',
      prompt: 'Translate: "We are going shopping tomorrow."',
      answer: ['Wir kaufen morgen ein.', 'Morgen kaufen wir ein.'],
      hint: 'einkaufen = to go shopping, morgen = tomorrow',
      explanation: 'kaufen is second, ein at the end. Starting with Morgen is also fine: the verb stays second and ein stays last.',
    },
    {
      type: 'translate',
      id: 'a1-16-separable-verbs-ex11',
      prompt: 'Translate: "Please call me." (informal, one person)',
      answer: ['Ruf mich bitte an.', 'Ruf mich bitte an!', 'Bitte ruf mich an.', 'Bitte ruf mich an!'],
      hint: 'anrufen = to call, mich = me',
      explanation: 'In the du imperative the verb has no ending and the prefix goes to the end: Ruf … an.',
    },
  ],
};

export default topic;
