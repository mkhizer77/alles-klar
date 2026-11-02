import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-08-numbers-time',
  level: 'A1',
  unit: 1,
  order: 8,
  title: 'Numbers and prices',
  germanTerm: 'Zahlen, Preise',
  tags: ['numbers', 'prices', 'euro', 'counting'],
  summary: 'German numbers are built from a few blocks, with the units said before the tens (vierundzwanzig = four-and-twenty), and prices are read as Euro plus the cents.',
  steps: [
    {
      title: '0 to 12: learn these by heart',
      text: `
The first thirteen numbers are single words with no pattern, so learn them as a set:

**null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf**

You need them for ages, phone numbers and prices. Phone numbers are read **digit by digit**.
`,
      examples: [
        { de: 'Ich habe zwei Kinder.', en: 'I have two children.' },
        { de: 'Mein Sohn ist acht Jahre alt.', en: 'My son is eight years old.' },
        { de: 'Meine Telefonnummer ist null eins sieben sechs.', en: 'My phone number is 0176. (digit by digit)' },
      ],
    },
    {
      title: '13 to 19: unit + zehn',
      text: `
Add **-zehn** to the unit: *dreizehn, vierzehn, fünfzehn, achtzehn, neunzehn*. Two are shortened: **sechzehn** (not *sechszehn*) and **siebzehn** (not *siebenzehn*).
`,
      examples: [
        { de: 'Sie ist siebzehn Jahre alt.', en: 'She is seventeen years old. (sieben loses -en)' },
        { de: 'Mein Bruder ist sechzehn.', en: 'My brother is sixteen. (sechs loses the s)' },
        { de: 'Wir sind dreizehn Personen.', en: 'We are thirteen people.' },
      ],
    },
    {
      title: 'The tens',
      text: `
**zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig**

All of them end in **-zig** except **dreißig**, which is written with **ß**. *Sechzig* and *siebzig* are shortened just like 16 and 17.
`,
      examples: [
        { de: 'Mein Vater ist fünfzig.', en: 'My father is fifty.' },
        { de: 'Das Hotel hat dreißig Zimmer.', en: 'The hotel has thirty rooms. (dreißig with ß)' },
        { de: 'Wir haben zwanzig Minuten.', en: 'We have twenty minutes.' },
      ],
    },
    {
      title: '21 to 99: units before tens',
      text: `
This is the part that surprises English speakers. German says *four-and-twenty*, like the old nursery rhyme, and writes it as **one word**.

| number | German | literally |
|---|---|---|
| 21 | ein**und**zwanzig | one-and-twenty |
| 24 | vier**und**zwanzig | four-and-twenty |
| 35 | fünf**und**dreißig | five-and-thirty |
| 99 | neun**und**neunzig | nine-and-ninety |

Note **ein-** (not *eins*) inside a number: *einundzwanzig*.
`,
      examples: [
        { de: 'Ich bin vierunddreißig Jahre alt.', en: 'I am 34 years old. (four-and-thirty)' },
        { de: 'Meine Oma ist achtundsiebzig.', en: 'My grandma is 78. (eight-and-seventy)' },
        { de: 'Das Zimmer hat die Nummer einundzwanzig.', en: 'The room has the number 21. (ein-, not eins)' },
      ],
    },
    {
      title: 'Hundreds and thousands',
      text: `
100 is **(ein)hundert**, 200 **zweihundert**, 1000 **(ein)tausend**, 2000 **zweitausend**, and 1 000 000 **eine Million**.

Combine from the top down, still as one word: 245 = *zweihundertfünfundvierzig*. Years before 2000 are said in hundreds: 1995 = *neunzehnhundertfünfundneunzig*; but 2024 = *zweitausendvierundzwanzig*.
`,
      examples: [
        { de: 'Das Haus hat zweihundertfünfzig Quadratmeter.', en: 'The house has 250 square metres. (one word)' },
        { de: 'Das kostet tausend Euro.', en: 'That costs a thousand euros.' },
        { de: 'Ich bin neunzehnhundertfünfundneunzig geboren.', en: 'I was born in 1995. (years in hundreds)' },
      ],
    },
    {
      title: 'Prices',
      text: `
The currency is **der Euro** and **der Cent**. In writing: **12,50 €**, with a **comma**, not a point. In speech: *zwölf Euro fünfzig*, usually without the word *Cent*.

**Euro** and **Cent** do **not** add a plural *-s* after a number: *zehn Euro*, *neunzig Cent*. To ask the price: **Was kostet das?** or **Wie viel kostet das?**
`,
      examples: [
        { de: 'Was kostet das?', en: 'How much is that?' },
        { de: 'Das kostet zwölf Euro fünfzig.', en: 'That costs 12.50 euros. (written 12,50 €)' },
        { de: 'Zehn Euro, bitte.', en: 'Ten euros, please. (Euro, not Euros)' },
        { de: 'Das kostet neunzig Cent.', en: 'That costs ninety cents.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-08b-telling-the-time', note: 'Clock times are built from these numbers: dreizehn Uhr dreißig, halb zwei.' },
    { topicId: 'a1-01-pronunciation', note: 'Numbers are full of ei, ie, z and -ig: zwei, vier, zehn, zwanzig.' },
    { topicId: 'a1-07-questions', note: 'Wie viel kostet das? is a W-question with wie viel.' },
    { topicId: 'a1-10-plural', note: 'Euro and Cent have no plural ending after a number, unlike most nouns.' },
  ],
  edgeCases: [
    'Units come **before** tens: 24 = *vierundzwanzig*. Saying *zwanzigvier* is a very common beginner error.',
    '**eins** alone, **ein-** inside a number: *eins*, but *einundzwanzig*, *einhundert*.',
    '**sechzehn, siebzehn, sechzig, siebzig**: the *s* of *sechs* and the *-en* of *sieben* are dropped.',
    'Decimal **comma**, not point: *2,50 €* is read *zwei Euro fünfzig*. A point separates thousands: *1.000*.',
    '**Euro** and **Cent** never take *-s* after a number: *fünf Euro*, not *fünf Euros*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex01',
      prompt: 'What is 24 in German?',
      options: ['zwanzigvier', 'vierundzwanzig', 'zweiundvierzig'],
      answer: 1,
      explanation: 'Units first, then und, then the tens: vier-und-zwanzig. zweiundvierzig would be 42.',
    },
    {
      type: 'fill',
      id: 'a1-08-numbers-time-ex02',
      prompt: '17 = ___',
      answer: ['siebzehn'],
      explanation: 'sieben loses its -en before -zehn: siebzehn. The same happens in siebzig (70).',
    },
    {
      type: 'fill',
      id: 'a1-08-numbers-time-ex03',
      prompt: '21 = ___',
      answer: ['einundzwanzig'],
      explanation: 'Inside a number "one" is ein-, not eins: einundzwanzig.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex04',
      prompt: 'What is 60 in German?',
      options: ['sechszig', 'sechzig', 'sechsig'],
      answer: 1,
      explanation: 'Like sechzehn, the s of sechs is dropped: sechzig. All tens except dreißig end in -zig.',
    },
    {
      type: 'match',
      id: 'a1-08-numbers-time-ex05',
      prompt: 'Match the number with the German word.',
      pairs: [
        ['30', 'dreißig'],
        ['16', 'sechzehn'],
        ['60', 'sechzig'],
        ['100', 'hundert'],
        ['1000', 'tausend'],
      ],
      explanation: 'dreißig has ß; sechzehn and sechzig drop the s of sechs; hundert and tausend can stand without ein-.',
    },
    {
      type: 'fill',
      id: 'a1-08-numbers-time-ex06',
      prompt: 'Ich bin ___ Jahre alt. (42)',
      answer: ['zweiundvierzig'],
      explanation: '42 = two-and-forty: zwei + und + vierzig, written as one word.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex07',
      prompt: 'How do you say 12,50 €?',
      options: ['zwölf Euros fünfzig', 'zwölf Euro fünfzig', 'zwölf Punkt fünfzig Euro'],
      answer: 1,
      explanation: 'Euro has no plural -s after a number, and the cents simply follow: zwölf Euro fünfzig.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex08',
      prompt: 'Which is the correct written form of 245?',
      options: ['zwei hundert fünf und vierzig', 'zweihundertfünfundvierzig', 'zweihundertvierzigfünf'],
      answer: 1,
      explanation: 'Numbers are one word: zweihundert + fünfundvierzig. Units still come before tens inside it.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex09',
      prompt: 'What is 2000 in German?',
      options: ['zweitausend', 'zwei tausend', 'zweihundert'],
      answer: 0,
      explanation: 'tausend works like hundert: zweitausend, one word. zweihundert is 200.',
    },
    {
      type: 'order',
      id: 'a1-08-numbers-time-ex10',
      prompt: 'Build the question: "How much does that cost?"',
      words: ['kostet', 'Wie', 'das?', 'viel'],
      answer: ['Wie viel kostet das?'],
      explanation: 'Wie viel (how much) takes position 1, the verb kostet is second, then das.',
    },
    {
      type: 'translate',
      id: 'a1-08-numbers-time-ex11',
      prompt: 'Translate: "That costs three euros."',
      answer: ['Das kostet drei Euro.'],
      hint: 'kosten = to cost',
      explanation: 'Euro stays Euro after a number, no plural ending. kostet is the es form of kosten (stem ends in -t, so -et).',
    },
    {
      type: 'fill',
      id: 'a1-08-numbers-time-ex12',
      prompt: 'Das kostet drei Euro ___. (3,20 €)',
      answer: ['zwanzig'],
      explanation: 'The cents follow the word Euro as a plain number: drei Euro zwanzig. The word Cent is usually left out.',
    },
  ],
};

export default topic;
