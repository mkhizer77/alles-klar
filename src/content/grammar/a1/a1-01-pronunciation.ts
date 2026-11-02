import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-01-pronunciation',
  level: 'A1',
  unit: 1,
  order: 1,
  title: 'Alphabet, pronunciation and spelling',
  germanTerm: 'Aussprache',
  tags: ['pronunciation', 'alphabet', 'spelling', 'sounds'],
  summary: 'German spelling is very regular: once you know how each letter and letter group sounds, you can read almost any word out loud correctly.',
  steps: [
    {
      title: 'The alphabet: letter names',
      text: `
German spelling is much more regular than English: a letter nearly always makes the same sound. First you need the **letter names**, to spell your name or email. Most are close to English, but a few are traps.

| letter | name sounds like | letter | name sounds like |
|---|---|---|---|
| A | "ah" | J | "yot" |
| E | "eh" | V | "fow" (rhymes with cow) |
| I | "ee" | W | "veh" |
| Y | "üpsilon" | Z | "tset" |

The extra letters are **ä, ö, ü** (*Umlaute*) and **ß** (*Eszett*). Out loud you say "a-Umlaut", "o-Umlaut", "u-Umlaut", "Eszett".
`,
      examples: [
        { de: 'Buchstabieren Sie das bitte.', en: 'Please spell that.' },
        { de: 'Mein Name ist Weber: W-E-B-E-R.', en: 'My name is Weber. (W is said "veh")' },
        { de: 'Ich heiße Jana: J-A-N-A.', en: 'My name is Jana. (J is said "yot")' },
      ],
    },
    {
      title: 'Vowels: long or short',
      text: `
Every vowel is either **long** or **short**. A vowel is long when it is doubled (*Boot*), followed by **h** (*Bahn*), or followed by only **one** consonant (*Name*). It is short before a **double consonant** (*Mutter*, *kommen*).

The **h** after a vowel is silent: it only shows that the vowel is long.
`,
      examples: [
        { de: 'der Name', en: 'the name (long a: only one consonant follows)' },
        { de: 'die Mutter', en: 'the mother (short u: double consonant)' },
        { de: 'die Bahn', en: 'the train (long a: silent h)' },
        { de: 'das Boot', en: 'the boat (long o: double vowel)' },
      ],
    },
    {
      title: 'The umlauts: ä, ö, ü',
      text: `
The dots change the vowel into a new sound. These are separate letters, not decoration.

| letter | how to make it | example |
|---|---|---|
| **ä** | like *e* in *bed*; long like *ai* in *fair* | Männer, spät |
| **ö** | say "eh" but round your lips as for "oh" | schön, können |
| **ü** | say "ee" but round your lips as for "oo" | über, fünf |
`,
      examples: [
        { de: 'spät', en: 'late (long ä)' },
        { de: 'schön', en: 'beautiful (ö: "eh" with rounded lips)' },
        { de: 'fünf', en: 'five (ü: "ee" with rounded lips)' },
        { de: 'die Männer', en: 'the men (short ä, like e in bed)' },
      ],
    },
    {
      title: 'Letter pairs: ei, ie, eu, au',
      text: `
Four vowel pairs appear in hundreds of A1 words:

| letters | sound | examples |
|---|---|---|
| **ei** | like English *eye* | mein, nein, drei |
| **ie** | long *ee* | sie, vier, Liebe |
| **eu, äu** | like *oy* in *boy* | neu, heute, Häuser |
| **au** | like *ow* in *cow* | Haus, Auto |

Memory aid for **ei** and **ie**: say the **second** letter's English name. *ei* = "I", *ie* = "E".
`,
      examples: [
        { de: 'nein', en: 'no (ei = eye)' },
        { de: 'vier', en: 'four (ie = ee)' },
        { de: 'heute', en: 'today (eu = oy)' },
        { de: 'das Haus', en: 'the house (au = ow)' },
      ],
    },
    {
      title: 'ch, sch, sp, st and z',
      text: `
**ch** has two sounds. After **a, o, u, au** it is rough in the throat, like Scottish *loch*: *Buch, auch, Nacht*. After **e, i, ä, ö, ü, l, n, r** it is a soft hiss, like the *h* in *huge*: *ich, nicht, Milch*. A final **-ig** sounds like *-ich*: *zwanzig*.

**sch** is English *sh*. At the start of a word, **sp** and **st** are said *shp* and *sht*. **z** is always *ts*, as in *cats*.
`,
      examples: [
        { de: 'das Buch', en: 'the book (rough ch after u)' },
        { de: 'Ich spreche nicht.', en: 'I do not speak. (sp = shp, soft ch in nicht)' },
        { de: 'Straße, Schule', en: 'street, school (st = sht, sch = sh)' },
        { de: 'zehn, zwanzig', en: 'ten, twenty (z = ts, -ig = -ich)' },
      ],
    },
    {
      title: 'w, v, j, s and r',
      text: `
These single letters sound different from English:

| letter | sound | examples |
|---|---|---|
| **w** | English *v* | Wasser, wir |
| **v** | usually English *f* | Vater, vier |
| **j** | English *y* | ja, Januar |
| **s** before a vowel | buzzing *z* | Sonne, lesen |
| **ss, ß**, final **s** | sharp *s* | essen, Straße, Haus |
| **r** | in the throat; at the end almost "ah" | rot, Mutter |

**ß** follows a **long** vowel (*Straße*), **ss** a **short** one (*essen*).
`,
      examples: [
        { de: 'das Wasser', en: 'the water (w = English v)' },
        { de: 'der Vater', en: 'the father (v = f)' },
        { de: 'ja', en: 'yes (j = y)' },
        { de: 'die Sonne', en: 'the sun (s before a vowel buzzes like z)' },
      ],
    },
    {
      title: 'Capital letters and stress',
      text: `
Two spelling rules you see in every sentence. Every **noun** starts with a **capital letter**: *der Tisch, die Zeit, Dienstag*. The polite **Sie** (you) is always capitalised; *sie* (she, they) is not.

Stress is normally on the **first syllable**: **AR**-beit, **MOR**-gen. Words from French or Latin often stress the end: *Stu-DENT*, *Mu-SIK*.
`,
      examples: [
        { de: 'Heute ist Dienstag.', en: 'Today is Tuesday. (nouns and day names are capitalised)' },
        { de: 'Ich habe einen Hund.', en: 'I have a dog. (only the noun Hund gets a capital)' },
        { de: 'Kommen Sie aus Berlin?', en: 'Are you from Berlin? (polite Sie with a capital S)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-02-greetings', note: 'Your first conversations include spelling your name, which uses the letter names from here.' },
    { topicId: 'a1-08-numbers-time', note: 'Numbers are full of the tricky sounds: zwei, drei, vier, zwanzig.' },
    { topicId: 'a1-09-gender-articles', note: 'Capitalising nouns helps you spot them, and every noun needs its article.' },
  ],
  edgeCases: [
    '**ei** and **ie** are the most common mix-up: *sein* (to be) has the *eye* sound, *sie* (she) has the *ee* sound.',
    '**w** is an English *v* and **v** is usually an English *f*: *Wein* sounds like "vine", *Vater* like "fahter". In recent loanwords **v** is a real *v*: *Vase*, *Video*.',
    '**ch** is never a *k* or a *ch* as in *church*, except in a few loanwords (*Chef*, *Chance* with *sh*; *Chor*, *Christ* with *k*).',
    'The **ß** never starts a word and never follows a short vowel. After a short vowel write **ss**: *dass*, *muss*, *Fluss*. Swiss German does not use ß at all.',
    'Final **-e** is always pronounced as a short, weak "uh": *Name* has two syllables, *bitte* has two syllables.',
    '**b, d, g** at the end of a word sound like *p, t, k*: *halb*, *Hund*, *Tag*. The spelling does not change.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex01',
      prompt: 'How is "ei" pronounced in "mein"?',
      options: ['like "ee" in "see"', 'like "eye"', 'like "ay" in "day"'],
      answer: 1,
      explanation: 'ei always sounds like the English word "eye". Memory aid: say the second letter, I, in English.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex02',
      prompt: 'How is "ie" pronounced in "sie"?',
      options: ['like "eye"', 'like "ee" in "see"', 'like "i" in "sit"'],
      answer: 1,
      explanation: 'ie is a long "ee". The second letter, E, gives the English sound.',
    },
    {
      type: 'match',
      id: 'a1-01-pronunciation-ex03',
      prompt: 'Match each German letter with the English sound it usually makes.',
      pairs: [
        ['w', 'v as in "very"'],
        ['v', 'f as in "father"'],
        ['z', 'ts as in "cats"'],
        ['j', 'y as in "yes"'],
      ],
      explanation: 'w = v, v = f, z = ts, j = y. These four cause most mispronunciations by English speakers.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex04',
      prompt: 'In which word is "ch" the rough throat sound (like Scottish "loch")?',
      options: ['ich', 'Buch', 'nicht', 'Milch'],
      answer: 1,
      explanation: 'After a, o, u and au the ch is rough: Buch. After e, i, l, n, r it is the soft hiss: ich, nicht, Milch.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex05',
      prompt: 'Which word has the "oy" sound (as in "boy")?',
      options: ['Haus', 'heute', 'drei', 'vier'],
      answer: 1,
      explanation: 'eu (and äu) sounds like "oy": heute, neu, Häuser. Haus has "ow", drei has "eye", vier has "ee".',
    },
    {
      type: 'match',
      id: 'a1-01-pronunciation-ex06',
      prompt: 'Match each letter group with its sound.',
      pairs: [
        ['sch', 'sh as in "ship"'],
        ['au', 'ow as in "cow"'],
        ['eu', 'oy as in "boy"'],
        ['ei', 'eye'],
        ['ie', 'ee as in "see"'],
      ],
      explanation: 'These five groups appear in hundreds of A1 words: Schule, Haus, neu, mein, sie.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex07',
      prompt: 'Which spelling is correct?',
      options: ['Strasse', 'Straße', 'Straße with short a'],
      answer: 1,
      explanation: 'The a in Straße is long, so the sharp s is written ß. After a short vowel you write ss (essen, Fluss).',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex08',
      prompt: 'How does the German letter "W" sound when you say the alphabet?',
      options: ['"double-u"', '"veh"', '"vay-ah"'],
      answer: 1,
      explanation: 'The name of W is "veh". V is "fow", which is why people confuse them when spelling.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex09',
      prompt: 'Which sentence is spelled correctly?',
      options: ['ich habe einen hund.', 'Ich habe einen Hund.', 'Ich Habe Einen Hund.'],
      answer: 1,
      explanation: 'Only nouns (Hund) and the first word of a sentence are capitalised. Verbs and articles are not.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex10',
      prompt: 'How is the ending "-ig" pronounced in "zwanzig"?',
      options: ['like "-ig" in "big"', 'like "-ich" (soft ch)', 'like "-eek"'],
      answer: 1,
      explanation: 'In standard German a final -ig sounds like -ich: zwanzig, richtig, wichtig all end in the soft ch sound.',
    },
    {
      type: 'mc',
      id: 'a1-01-pronunciation-ex11',
      prompt: 'Which vowel is SHORT?',
      options: ['the a in "Name"', 'the u in "Mutter"', 'the o in "Boot"', 'the a in "Bahn"'],
      answer: 1,
      explanation: 'A double consonant (tt) makes the vowel before it short. Name (one consonant), Boot (double vowel) and Bahn (vowel + h) all have long vowels.',
    },
    {
      type: 'match',
      id: 'a1-01-pronunciation-ex12',
      prompt: 'Match the letter with how you say its name when spelling out loud.',
      pairs: [
        ['J', '"yot"'],
        ['Z', '"tset"'],
        ['V', '"fow"'],
        ['ß', '"Eszett"'],
        ['Ü', '"u-Umlaut"'],
      ],
      explanation: 'These are the letter names that English speakers get wrong most often when spelling a name or an email address.',
    },
  ],
};

export default topic;
