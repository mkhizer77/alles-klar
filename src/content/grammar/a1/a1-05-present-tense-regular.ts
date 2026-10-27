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
  explanation: `
### What conjugation is

In English the verb barely changes: *I play, you play, he play**s***. German changes the verb for **every** subject. This changing is called **conjugation** (*Konjugation*). It sounds technical, but it is just: *take the verb, cut off the ending, add the right new ending.*

### Step 1: find the stem

Every verb in the dictionary ends in **-en** (sometimes **-n**): *kommen, wohnen, lernen, machen*. This is the **infinitive** (*Infinitiv*). Cut off the **-en** and you have the **stem** (*Stamm*):

- komm**en** → **komm**
- wohn**en** → **wohn**
- arbeit**en** → **arbeit**

### Step 2: add the ending

| pronoun | ending | wohnen (to live) | lernen (to learn) |
|---|---|---|---|
| ich | **-e** | ich wohn**e** | ich lern**e** |
| du | **-st** | du wohn**st** | du lern**st** |
| er / sie / es | **-t** | er wohn**t** | er lern**t** |
| wir | **-en** | wir wohn**en** | wir lern**en** |
| ihr | **-t** | ihr wohn**t** | ihr lern**t** |
| sie / Sie | **-en** | sie wohn**en** | sie lern**en** |

Three patterns make this easier to remember:

1. **wir** and **sie / Sie** are always the same as the infinitive.
2. **er / sie / es** and **ihr** are both **-t**.
3. **du** is the only one with **-st**.

Verbs that follow this pattern are called **regular** (*regelmäßig*). Most German verbs do: *machen, spielen, kaufen, gehen, trinken, hören, fragen, sagen, kochen, lieben …*

### Only one present tense

German has **no** separate "-ing" form. *Ich lerne* means both *I learn* and *I am learning*. There is also no *do* in questions or negatives: *Lernst du?* = *Do you learn? / Are you learning?* This makes German simpler than English here.

The present tense is also used for the **future** when the time is clear: *Morgen lerne ich.* – *Tomorrow I will learn.*

### Small spelling adjustments

Some stems would be hard to say with the plain endings, so a letter is added or removed:

| stem ends in | what happens | example |
|---|---|---|
| **-t, -d** | add **-e-** before -st and -t | du arbeit**est**, er arbeit**et**, ihr find**et** |
| **-s, -ß, -z** | du ending is just **-t** (the s is already there) | du hei**ßt**, du tan**zt** (not heißst) |
| **-er, -el** | ich and the infinitive have no -e- | ich wand**re** / wand**ere**, wir wand**ern** |

These are not irregular verbs. The endings are the same; only the spelling bends a little so the word can be pronounced.

### Why it matters

Once you know these six endings you can use **thousands** of verbs. Every later verb topic (irregular verbs, separable verbs, modal verbs) starts from this pattern and only changes a detail. Practise until the endings feel automatic: hear *du* and your mouth should already want to say *-st*.
`,
  examples: [
    { de: 'Ich wohne in Hamburg.', en: 'I live in Hamburg. (ich + -e)' },
    { de: 'Wo wohnst du?', en: 'Where do you live? (du + -st, no "do")' },
    { de: 'Er lernt Deutsch.', en: 'He is learning German. (er + -t, no -ing form)' },
    { de: 'Wir spielen Fußball.', en: 'We play football. (wir = infinitive)' },
    { de: 'Ihr trinkt Kaffee.', en: 'You (all) drink coffee. (ihr + -t)' },
    { de: 'Sie arbeitet bei Siemens.', en: 'She works at Siemens. (stem ends in -t: arbeit-e-t)' },
    { de: 'Du heißt Lena, oder?', en: 'Your name is Lena, right? (stem ends in -ß: just -t)' },
    { de: 'Morgen kaufe ich ein Auto.', en: 'Tomorrow I am buying a car. (present tense for the future)' },
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
