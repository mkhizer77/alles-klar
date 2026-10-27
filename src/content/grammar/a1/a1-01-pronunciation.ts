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
  explanation: `
### Why this is good news

German spelling is much more **regular** than English. A letter (or a group of letters) nearly always makes the same sound. Learn about twenty rules and you can pronounce new words you have never heard.

### The alphabet (*das Alphabet*)

You need the letter names to spell your name or email. Most are close to English, but a few are traps.

| letter | name sounds like | letter | name sounds like |
|---|---|---|---|
| A | "ah" | J | "yot" |
| E | "eh" (like *ay* in *say*, but short) | V | "fow" (rhymes with *cow*) |
| I | "ee" | W | "veh" |
| Y | "üpsilon" | Z | "tset" |

The extra letters are **ä, ö, ü** (*Umlaute*) and **ß** (*Eszett*). When spelling out loud you say "a-Umlaut", "o-Umlaut", "u-Umlaut" and "Eszett".

### Vowels: long or short

A vowel is usually **long** when doubled (*Boot*), followed by **h** (*Bahn*), or followed by only **one** consonant (*Name*). It is **short** before a **double consonant** (*Mutter*, *kommen*).

The umlauts are separate sounds:

| letter | how to make it | example |
|---|---|---|
| **ä** | like *e* in *bed* (long: like *ai* in *fair*) | *Männer*, *spät* |
| **ö** | say "eh" but round your lips as for "oh" | *schön*, *können* |
| **ü** | say "ee" but round your lips as for "oo" | *über*, *fünf* |

### Letter groups you must know

| letters | sound | examples |
|---|---|---|
| **ei** | like English *eye* | *mein*, *nein*, *drei* |
| **ie** | long *ee* | *sie*, *vier*, *Liebe* |
| **eu / äu** | like *oy* in *boy* | *neu*, *heute*, *Häuser* |
| **au** | like *ow* in *cow* | *Haus*, *Auto* |
| **sch** | English *sh* | *Schule*, *schön* |
| **sp / st** at the start of a word | *shp / sht* | *sprechen*, *Straße* |
| **ch** after a, o, u, au | rough sound in the throat, like Scottish *loch* | *Buch*, *auch*, *Nacht* |
| **ch** after e, i, ä, ö, ü, l, n, r | soft hiss, like the *h* in *huge* | *ich*, *nicht*, *Milch* |
| **-ig** at the end of a word | sounds like *-ich* | *zwanzig*, *richtig* |

Memory aid for **ei** and **ie**: say the **second** letter's English name. *ei* = "I", *ie* = "E".

### Single consonants that differ from English

| letter | sound | examples |
|---|---|---|
| **w** | English *v* | *Wasser*, *wir* |
| **v** | usually English *f* | *Vater*, *vier*, *von* |
| **z** | *ts* (as in *cats*) | *zehn*, *Zeit*, *Zug* |
| **s** before a vowel | English *z* (buzzing) | *Sonne*, *sieben*, *lesen* |
| **s** at the end, **ss**, **ß** | sharp *s* | *Haus*, *essen*, *Straße* |
| **j** | English *y* | *ja*, *Januar* |
| **r** | in the throat; at the end of a word almost "ah" | *rot*, *Mutter* |
| **b, d, g** at the end of a word | become *p, t, k* | *halb*, *Hund*, *Tag* |

**ß** and **ss** both make a sharp *s*: **ß** after a **long** vowel or double vowel (*Straße*, *heißen*), **ss** after a **short** vowel (*essen*, *Fluss*).

### Spelling conventions

- Every **noun** starts with a **capital letter**: *der Tisch*, *die Zeit*. This is the most visible German spelling rule.
- *Sie* (polite *you*) is always capitalised; *sie* (she / they) is not.
- Stress is normally on the **first syllable**: **AR**-beit, **MOR**-gen. Words from French or Latin often stress the end: *Stu-DENT*, *Mu-SIK*.
- Without an umlaut key you may write *ae, oe, ue, ss*. In the app, always use the real letters.

### Why it matters

If you can read new words aloud correctly from the start, you remember them better, and people understand you even when your grammar is not perfect yet.
`,
  examples: [
    { de: 'Ich heiße Anna.', en: 'My name is Anna. (ß = sharp s after the long ei)' },
    { de: 'Wie bitte? Buchstabieren Sie das bitte.', en: 'Pardon? Please spell that.' },
    { de: 'Mein Name ist Weber: W-E-B-E-R.', en: 'My name is Weber. (W is said "veh")' },
    { de: 'Vier, sieben, zwanzig.', en: 'Four, seven, twenty. (v = f, ie = ee, z = ts, -ig = -ich)' },
    { de: 'Ich spreche nicht viel Deutsch.', en: 'I do not speak much German. (sp = shp, ch soft, eu = oy)' },
    { de: 'Das Haus ist neu und schön.', en: 'The house is new and nice. (au = ow, eu = oy, sch = sh, ö rounded)' },
    { de: 'Heute ist Dienstag.', en: 'Today is Tuesday. (Nouns and day names are capitalised.)' },
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
    '**h** after a vowel is silent and only shows the vowel is long: *gehen*, *Uhr*, *zehn*.',
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
