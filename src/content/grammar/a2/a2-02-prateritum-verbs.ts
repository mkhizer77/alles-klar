import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-02-prateritum-verbs',
  level: 'A2',
  unit: 1,
  order: 2,
  title: 'Präteritum of regular and common irregular verbs',
  germanTerm: 'Präteritum',
  tags: ['past tense', 'Präteritum', 'verbs', 'irregular verbs'],
  summary: 'The Präteritum is the one-word past tense (machte, ging, kam) you mostly read in stories and news; regular verbs add -te, and the most common irregular verbs (ging, kam, gab) are worth recognising.',
  steps: [
    {
      title: 'The past tense you read',
      text: `
The **Präteritum** (the simple past) is a past tense with one word and no helper verb: *ich machte* = I made, *er ging* = he went. You know it from *war, hatte* and the modals (*konnte, musste*).

At A2 your main job is to **recognise** it when you read: novels, newspapers, fairy tales and reports are written in it. When you speak, you keep using the Perfekt (*ich habe gemacht*).
`,
      examples: [
        { de: 'Er ging nach Hause und schlief sofort ein.', en: 'He went home and fell asleep at once. (ging, schlief)' },
        { de: 'Wir kauften Brot und Käse.', en: 'We bought bread and cheese. (kauften)' },
        { de: 'Es gab damals kein Internet.', en: 'There was no internet back then. (gab)' },
      ],
    },
    {
      title: 'Regular verbs: add -te',
      text: `
Take the stem (the infinitive without *-en*) and add **-te** plus the person ending. These are the same endings as the modals.

| |machen|
|---|---|
|ich|machte|
|du|machtest|
|er, sie, es|machte|
|wir|machten|
|ihr|machtet|
|sie, Sie|machten|

The ich-form and the er-form are the same: *ich machte, er machte*.
`,
      examples: [
        { de: 'Die Kinder spielten den ganzen Tag im Garten.', en: 'The children played in the garden all day. (spiel- + -ten)' },
        { de: 'Sie lernte Deutsch in Berlin.', en: 'She learned German in Berlin. (lern- + -te)' },
        { de: 'Ich machte gestern die Hausaufgaben.', en: 'I did the homework yesterday.' },
      ],
    },
    {
      title: 'Stems in -t or -d: add -e-',
      text: `
If the stem ends in **-t** or **-d** (*arbeiten, warten, reden, baden*), put an **-e-** before the ending so you can say it: *arbeit-e-te, wart-e-te, red-e-te*. Without the extra -e- the word cannot be pronounced.
`,
      examples: [
        { de: 'Gestern arbeitete ich bis acht Uhr.', en: 'Yesterday I worked until eight. (arbeit- + -ete)' },
        { de: 'Wir warteten eine Stunde.', en: 'We waited for an hour. (wart- + -eten)' },
        { de: 'Er redete sehr lange.', en: 'He talked for a very long time. (red- + -ete)' },
      ],
    },
    {
      title: 'Irregular verbs: the vowel changes',
      text: `
Irregular verbs do **not** add *-te*. The vowel in the stem changes instead: *gehen → ging*, *kommen → kam*. The ich-form and the er-form have **no ending** (*ich ging, er ging*); *wir* and *sie* add *-en* (*wir gingen*).

There is no rule for the vowel. Learn to recognise the common ones:

|infinitive|Präteritum|infinitive|Präteritum|
|---|---|---|---|
|gehen|ging|sehen|sah|
|kommen|kam|geben|gab|
|fahren|fuhr|nehmen|nahm|
|bleiben|blieb|essen|aß|
|schreiben|schrieb|trinken|trank|
|lesen|las|finden|fand|
`,
      examples: [
        { de: 'Sie schrieb mir einen langen Brief.', en: 'She wrote me a long letter. (schreiben → schrieb)' },
        { de: 'Wir fuhren nach Berlin.', en: 'We drove to Berlin. (fahren → fuhren)' },
        { de: 'Er aß einen Apfel und trank Tee.', en: 'He ate an apple and drank tea. (aß, trank: no ending)' },
      ],
    },
    {
      title: 'A few verbs do both',
      text: `
A small group changes the vowel **and** adds *-te*: *bringen → brachte*, *denken → dachte*, *wissen → wusste*, *kennen → kannte*.

Watch out: **kannte** (from *kennen*) means knew a person or place. **konnte** (from *können*) means could.
`,
      examples: [
        { de: 'Ich wusste nichts davon.', en: "I didn't know anything about it. (wissen → wusste)" },
        { de: 'Sie brachte mir ein Geschenk.', en: 'She brought me a present. (bringen → brachte)' },
        { de: 'Er kannte den Mann nicht.', en: "He didn't know the man. (kennen → kannte)" },
      ],
    },
    {
      title: 'Which forms to say, not just read',
      text: `
A few Präteritum forms are also normal in speech: **war, hatte, wurde, wusste** and **es gab** (there was). Learn these first and use them when you talk. For all other verbs, start with the table above and add verbs as you meet them in reading texts.
`,
      examples: [
        { de: 'Es gab viele Leute auf der Party.', en: 'There were lots of people at the party. (es gab)' },
        { de: 'Er wurde Lehrer.', en: 'He became a teacher. (werden → wurde)' },
        { de: 'Das wusste ich nicht.', en: "I didn't know that. (wusste)" },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-33-war-hatte', note: 'war and hatte are the first two Präteritum forms you learned.' },
    { topicId: 'a2-01-prateritum-modals', note: 'The modal verbs use the same -te endings as regular verbs.' },
    { topicId: 'a1-15-irregular-present', note: 'Many verbs that change their vowel in the present (fahren → fährt) are also irregular in the past.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The Partizip II is the third form of each verb trio (gehen – ging – gegangen).' },
    { topicId: 'a2-03-perfekt-vs-prateritum', note: 'When to choose the Präteritum and when the Perfekt.' },
  ],
  edgeCases: [
    'Irregular verbs have **no ending** in the ich- and er-forms: *ich ging, er kam*, never *ich gingte* or *er kamte*.',
    'Stems ending in **-t / -d** need an extra **-e-**: *arbeitete, wartete, redete*. Without it the word cannot be pronounced.',
    '**kannte** (from kennen, to know a person or place) is easy to confuse with **konnte** (from können, could).',
    'Some verbs look regular but are not: *bringen → brachte* (not *bringte*), *denken → dachte*, *wissen → wusste*.',
    'The Präteritum of *werden* is **wurde**: *Er wurde Lehrer* = he became a teacher.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-02-prateritum-verbs-ex01',
      prompt: 'What is the Präteritum of "er macht"?',
      options: ['er machte', 'er machtet', 'er gemacht'],
      answer: 0,
      explanation: 'Regular verb: stem mach- + -te for er. machtet is the ihr-form; gemacht is the Partizip II.',
    },
    {
      type: 'fill',
      id: 'a2-02-prateritum-verbs-ex02',
      prompt: 'Gestern ___ wir den ganzen Tag. (arbeiten)',
      answer: ['arbeiteten'],
      explanation: 'The stem arbeit- ends in -t, so an extra -e- is inserted: arbeit-ete-n for wir.',
    },
    {
      type: 'fill',
      id: 'a2-02-prateritum-verbs-ex03',
      prompt: 'Er ___ nach Hause. (gehen)',
      answer: ['ging'],
      explanation: 'gehen is irregular: the vowel changes to i and the er-form has no ending: ging.',
    },
    {
      type: 'match',
      id: 'a2-02-prateritum-verbs-ex04',
      prompt: 'Match each verb with its Präteritum (er-form).',
      pairs: [
        ['kommen', 'kam'],
        ['sehen', 'sah'],
        ['fahren', 'fuhr'],
        ['essen', 'aß'],
        ['schreiben', 'schrieb'],
        ['finden', 'fand'],
      ],
      explanation: 'All six are irregular: the stem vowel changes and the er-form takes no ending.',
    },
    {
      type: 'mc',
      id: 'a2-02-prateritum-verbs-ex05',
      prompt: 'You read in a story: "Sie schlief sehr lange." Which verb is this?',
      options: ['schlafen (to sleep)', 'schließen (to close)', 'schleifen (to drag)'],
      answer: 0,
      explanation: 'schlief is the Präteritum of schlafen: the vowel changes (a → ie) and the er / sie-form has no ending.',
    },
    {
      type: 'fill',
      id: 'a2-02-prateritum-verbs-ex06',
      prompt: 'Sie ___ nichts davon. (wissen, she)',
      answer: ['wusste'],
      explanation: 'wissen is a mixed verb: vowel change i → u plus the -te ending: wusste.',
    },
    {
      type: 'order',
      id: 'a2-02-prateritum-verbs-ex07',
      prompt: 'Build the sentence: "He came home late."',
      words: ['nach', 'Er', 'spät', 'Hause.', 'kam'],
      answer: ['Er kam spät nach Hause.'],
      explanation: 'kam (from kommen) is in position 2; the time word spät comes before the place nach Hause.',
    },
    {
      type: 'mc',
      id: 'a2-02-prateritum-verbs-ex08',
      prompt: 'Which form is correct? "Ich ___ das Buch." (kaufen)',
      options: ['kaufte', 'kief', 'kaufete'],
      answer: 0,
      explanation: 'kaufen is regular: kauf- + -te. The stem does not end in -t or -d, so no extra -e-.',
    },
    {
      type: 'fill',
      id: 'a2-02-prateritum-verbs-ex09',
      prompt: 'Wir ___ ihm ein Geschenk. (bringen)',
      answer: ['brachten'],
      explanation: 'bringen is a mixed verb: bring- becomes brach- and takes -ten for wir: brachten.',
    },
    {
      type: 'fill',
      id: 'a2-02-prateritum-verbs-ex10',
      prompt: 'Die Kinder ___ im Garten. (spielen)',
      answer: ['spielten'],
      explanation: 'Die Kinder is plural (= sie), so the ending is -ten: spielten.',
    },
    {
      type: 'translate',
      id: 'a2-02-prateritum-verbs-ex11',
      prompt: 'Translate (written style, Präteritum): "He wrote a letter."',
      answer: ['Er schrieb einen Brief.'],
      hint: 'schreiben = to write, der Brief = letter',
      explanation: 'schreiben → schrieb. Brief is masculine and a direct object, so it is einen Brief.',
    },
    {
      type: 'mc',
      id: 'a2-02-prateritum-verbs-ex12',
      prompt: 'Why is it "ich wartete" and not "ich wartte"?',
      options: ['Because warten is irregular', 'Because the stem ends in -t, so an -e- is added', 'Because ich always takes -ete'],
      answer: 1,
      explanation: 'warten is regular, but its stem wart- ends in -t. An extra -e- keeps the ending pronounceable: wartete.',
    },
  ],
};

export default topic;
