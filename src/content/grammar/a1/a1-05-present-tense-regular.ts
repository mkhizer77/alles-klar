import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-05-present-tense-regular',
  level: 'A1',
  unit: 1,
  order: 5,
  title: 'Regular present tense: what conjugation is',
  germanTerm: 'Konjugation, Präsens',
  tags: ['verbs', 'present tense', 'conjugation', 'endings'],
  summary: 'Conjugation means changing the verb ending to match the subject; in the present tense regular verbs take the endings -e, -st, -t, -en, -t, -en.',
  steps: [
    {
      title: 'What conjugation is',
      text: `
In English the verb barely changes: *I play, you play, he play**s***. German changes the verb for **every** subject. This changing is called **conjugation** (*Konjugation*).

It sounds technical, but it is only this: take the verb, cut off its ending, add the right new ending for the subject.
`,
      examples: [
        { de: 'Ich wohne in Hamburg.', en: 'I live in Hamburg. (wohn + e)' },
        { de: 'Du wohnst in Hamburg.', en: 'You live in Hamburg. (wohn + st)' },
        { de: 'Er wohnt in Hamburg.', en: 'He lives in Hamburg. (wohn + t)' },
      ],
    },
    {
      title: 'Step 1: find the stem',
      text: `
Every verb in the dictionary ends in **-en** (sometimes **-n**): *kommen, wohnen, lernen, machen*. This is the **infinitive** (*Infinitiv*). Cut off the **-en** and you have the **stem** (*Stamm*):

- komm**en** → **komm**
- wohn**en** → **wohn**
- arbeit**en** → **arbeit**
`,
      examples: [
        { de: 'Wir kommen aus Berlin.', en: 'We come from Berlin. (kommen: stem komm-)' },
        { de: 'Ich lerne Deutsch.', en: 'I am learning German. (lernen: stem lern-)' },
        { de: 'Er macht Sport.', en: 'He does sport. (machen: stem mach-)' },
      ],
    },
    {
      title: 'Step 2: add the ending',
      text: `
| pronoun | ending | wohnen (to live) |
|---|---|---|
| ich | **-e** | ich wohn**e** |
| du | **-st** | du wohn**st** |
| er / sie / es | **-t** | er wohn**t** |
| wir | **-en** | wir wohn**en** |
| ihr | **-t** | ihr wohn**t** |
| sie / Sie | **-en** | sie wohn**en** |

Three patterns make it easy: **wir** and **sie / Sie** look like the infinitive; **er** and **ihr** both take **-t**; only **du** takes **-st**. Verbs that follow this pattern are **regular** (*regelmäßig*), and most German verbs do.
`,
      examples: [
        { de: 'Wo wohnst du?', en: 'Where do you live? (du + -st)' },
        { de: 'Er lernt Deutsch.', en: 'He is learning German. (er + -t)' },
        { de: 'Wir spielen Fußball.', en: 'We play football. (wir = infinitive)' },
        { de: 'Ihr trinkt Kaffee.', en: 'You (all) drink coffee. (ihr + -t)' },
      ],
    },
    {
      title: 'Only one present tense',
      text: `
German has **no** separate "-ing" form. *Ich lerne* means both *I learn* and *I am learning*. There is also no *do* in questions: *Lernst du?* means *Do you learn?* and *Are you learning?*

The present tense is also used for the **future** when the time is clear: *Morgen lerne ich.*
`,
      examples: [
        { de: 'Ich arbeite.', en: 'I work. I am working. (one form for both)' },
        { de: 'Spielst du Tennis?', en: 'Do you play tennis? (no "do")' },
        { de: 'Morgen kaufe ich ein Auto.', en: 'Tomorrow I am buying a car. (present tense for the future)' },
      ],
    },
    {
      title: 'Small spelling adjustments',
      text: `
Some stems would be hard to say with the plain endings, so a letter is added or removed. These verbs are still regular.

| stem ends in | what happens | example |
|---|---|---|
| **-t, -d** | add **-e-** before -st and -t | du arbeit**est**, er arbeit**et**, ihr find**et** |
| **-s, -ß, -z** | du ending is just **-t** | du hei**ßt**, du tan**zt** |
| **-er, -el** | wir and sie have no -e-: just **-n** | wir wand**ern**, sie sammeln |
`,
      examples: [
        { de: 'Sie arbeitet bei Siemens.', en: 'She works at Siemens. (arbeit-e-t)' },
        { de: 'Findest du das gut?', en: 'Do you think that is good? (find-e-st)' },
        { de: 'Du heißt Lena, oder?', en: 'Your name is Lena, right? (stem ends in -ß: just -t)' },
        { de: 'Wir wandern gern.', en: 'We like hiking. (wander + n)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-03-personal-pronouns', note: 'Each ending belongs to one pronoun; the pronoun table is the key to this one.' },
    { topicId: 'a1-04-sein-haben', note: 'sein and haben break the regular pattern; learn them separately.' },
    { topicId: 'a1-15-irregular-present', note: 'Some verbs change their vowel in du and er (fahren → du fährst); the endings stay the same.' },
    { topicId: 'a1-16-separable-verbs', note: 'Separable verbs conjugate the same way, but their prefix moves to the end.' },
    { topicId: 'a1-06-verb-second', note: 'The conjugated verb always stands in second position in a statement.' },
  ],
  edgeCases: [
    'There is no **-ing** form. *Ich bin lernen* is wrong. *Ich lerne* already means *I am learning*.',
    'No **do / does** in questions: *Spielst du Tennis?*, not *Machst du spielen Tennis?*',
    'Stems in **-t** or **-d** need an extra **-e-**: *er arbeitet, du findest, ihr wartet*. Without it the words are unpronounceable.',
    'Stems in **-s, -ß, -z** take only **-t** for du: *du heißt, du reist, du sitzt*. *Du heißst* is wrong.',
    '**wir** and **sie / Sie** forms always look exactly like the infinitive. If you ever doubt a form, that one is safe.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-05-present-tense-regular-ex01',
      prompt: 'What is the stem of "machen"?',
      options: ['mach', 'mache', 'machen'],
      answer: 0,
      explanation: 'Cut the -en off the infinitive: mach-. Then add the endings: ich mache, du machst …',
    },
    {
      type: 'fill',
      id: 'a1-05-present-tense-regular-ex02',
      prompt: 'Ich ___ in Berlin. (wohnen)',
      answer: ['wohne'],
      explanation: 'ich takes -e: wohn + e = wohne.',
    },
    {
      type: 'fill',
      id: 'a1-05-present-tense-regular-ex03',
      prompt: 'Du ___ Deutsch. (lernen)',
      answer: ['lernst'],
      explanation: 'du is the only pronoun with -st: lernst.',
    },
    {
      type: 'fill',
      id: 'a1-05-present-tense-regular-ex04',
      prompt: 'Er ___ Fußball. (spielen)',
      answer: ['spielt'],
      explanation: 'er / sie / es takes -t: spielt.',
    },
    {
      type: 'match',
      id: 'a1-05-present-tense-regular-ex05',
      prompt: 'Match the pronoun with the correct form of "kommen".',
      pairs: [
        ['ich', 'komme'],
        ['du', 'kommst'],
        ['er', 'kommt'],
        ['wir', 'kommen'],
      ],
      explanation: '-e, -st, -t, -en. ihr would be kommt (like er) and sie / Sie kommen (like wir).',
    },
    {
      type: 'mc',
      id: 'a1-05-present-tense-regular-ex06',
      prompt: 'Which is correct for "sie" meaning "they"?',
      options: ['sie trinkt', 'sie trinken', 'sie trinkst'],
      answer: 1,
      explanation: 'They (plural) takes -en: sie trinken. sie trinkt would be "she drinks".',
    },
    {
      type: 'fill',
      id: 'a1-05-present-tense-regular-ex07',
      prompt: 'Sie ___ bei der Post. (arbeiten – she)',
      answer: ['arbeitet'],
      explanation: 'The stem arbeit- ends in -t, so an extra -e- is added before the -t ending: arbeitet.',
    },
    {
      type: 'mc',
      id: 'a1-05-present-tense-regular-ex08',
      prompt: 'Which form is correct?',
      options: ['du heißst', 'du heißt', 'du heißest'],
      answer: 1,
      explanation: 'After a stem ending in -ß (or -s, -z) the du ending is only -t, because the s sound is already there: du heißt.',
    },
    {
      type: 'mc',
      id: 'a1-05-present-tense-regular-ex09',
      prompt: 'How do you say "I am working"?',
      options: ['Ich bin arbeiten.', 'Ich arbeite.', 'Ich bin arbeitend.'],
      answer: 1,
      explanation: 'German has no -ing form. The simple present Ich arbeite covers both "I work" and "I am working".',
    },
    {
      type: 'order',
      id: 'a1-05-present-tense-regular-ex10',
      prompt: 'Build the sentence: "You (all) are drinking tea."',
      words: ['Tee.', 'trinkt', 'Ihr'],
      answer: ['Ihr trinkt Tee.'],
      explanation: 'ihr takes -t, just like er / sie / es: ihr trinkt.',
    },
    {
      type: 'translate',
      id: 'a1-05-present-tense-regular-ex11',
      prompt: 'Translate: "Do you play tennis?" (informal, one person)',
      answer: ['Spielst du Tennis?'],
      hint: 'spielen = to play',
      explanation: 'No "do" in German. The verb with the du ending -st goes first: Spielst du Tennis?',
    },
    {
      type: 'fill',
      id: 'a1-05-present-tense-regular-ex12',
      prompt: 'Wann ___ ihr? (warten – you all)',
      answer: ['wartet'],
      explanation: 'ihr takes -t, and because the stem wart- ends in -t, an -e- is inserted: wartet.',
    },
  ],
};

export default topic;
