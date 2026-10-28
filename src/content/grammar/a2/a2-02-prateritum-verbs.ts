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
  explanation: `
### What it is

The **Präteritum** (the simple past) is a past tense with one word and no helper verb: *Ich machte* = *I made / did*, *er ging* = *he went*. You already know it from *war, hatte* and the modal verbs (*konnte, musste …*). This topic shows how the other verbs form it.

At A2 the main job is to **recognise** this tense when you read: novels, newspapers, fairy tales and reports are written in it. When you speak, you keep using the Perfekt (*ich habe gemacht*). So learn the pattern for regular verbs, and learn to recognise the most common irregular forms.

### Regular verbs: add -te

Take the stem (infinitive without *-en*) and add the endings. They are the same endings you used with the modals.

| | machen (stem mach-) | arbeiten (stem arbeit-) |
|---|---|---|
| ich | mach**te** | arbeit**ete** |
| du | mach**test** | arbeit**etest** |
| er / sie / es | mach**te** | arbeit**ete** |
| wir | mach**ten** | arbeit**eten** |
| ihr | mach**tet** | arbeit**etet** |
| sie / Sie | mach**ten** | arbeit**eten** |

If the stem ends in **-t** or **-d** (*arbeiten, warten, reden, baden*), add an **-e-** before the ending so you can pronounce it: *arbeitete, wartete, redete*.

### Irregular verbs: the vowel changes

Irregular verbs do **not** add *-te*. Instead the vowel in the stem changes: *gehen → ging*, *kommen → kam*. The *ich* and *er / sie / es* forms have **no ending at all** (*ich ging, er ging*); *wir* and *sie* add *-en* (*wir gingen*).

There is no rule for the vowel change; you learn it with the verb, usually as a trio: *gehen – ging – gegangen*. At A2 you do not need to produce all of these. You need to **recognise** the common ones when you read a story:

| infinitive | Präteritum | | infinitive | Präteritum |
|---|---|---|---|---|
| sein | war | | sehen | sah |
| haben | hatte | | geben | gab |
| werden | wurde | | nehmen | nahm |
| gehen | ging | | sprechen | sprach |
| kommen | kam | | essen | aß |
| fahren | fuhr | | trinken | trank |
| finden | fand | | schreiben | schrieb |
| bleiben | blieb | | lesen | las |
| laufen | lief | | schlafen | schlief |

### A few verbs do both

A small group changes the vowel **and** adds *-te*: *bringen – brachte*, *denken – dachte*, *wissen – wusste*, *kennen – kannte*. Watch out: *kannte* means *knew (a person or place)*, not *could* (*konnte*).

### Why it matters

Once you know the pattern you can follow any German text about the past. A few forms are also used in speech: *war, hatte, wurde, wusste, es gab* (there was). Learn these first. For the rest, start with the table above and add verbs as you meet them in reading texts.
`,
  examples: [
    { de: 'Gestern arbeitete ich bis acht Uhr.', en: 'Yesterday I worked until eight. (stem ends in -t: -ete)' },
    { de: 'Er ging nach Hause und schlief sofort ein.', en: 'He went home and fell asleep at once. (irregular: ging, schlief)' },
    { de: 'Wir kauften Brot und Käse.', en: 'We bought bread and cheese. (regular: kauften)' },
    { de: 'Die Kinder spielten den ganzen Tag im Garten.', en: 'The children played in the garden all day.' },
    { de: 'Sie schrieb mir einen langen Brief.', en: 'She wrote me a long letter. (schreiben → schrieb)' },
    { de: 'Ich wusste nichts davon.', en: "I didn't know anything about it. (mixed verb: wusste)" },
    { de: 'Es gab damals kein Internet.', en: 'There was no internet back then. (geben → gab)' },
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
