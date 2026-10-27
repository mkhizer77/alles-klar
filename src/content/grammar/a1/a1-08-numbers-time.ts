import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-08-numbers-time',
  level: 'A1',
  unit: 1,
  order: 8,
  title: 'Numbers, prices and the time',
  germanTerm: 'Zahlen, Uhrzeit',
  tags: ['numbers', 'time', 'prices', 'clock', 'euro'],
  summary: 'German numbers are built from a few blocks (with the units said before the tens: vierundzwanzig), and the time is told either officially (13:30) or in everyday style (halb zwei).',
  explanation: `
### 0 to 12: learn these by heart

| 0 null | 1 eins | 2 zwei | 3 drei | 4 vier | 5 fünf | 6 sechs |
|---|---|---|---|---|---|---|
| 7 sieben | 8 acht | 9 neun | 10 zehn | 11 elf | 12 zwölf | |

### 13 to 19: unit + zehn

Add **-zehn** to the unit: *dreizehn, vierzehn, fünfzehn, siebzehn, achtzehn, neunzehn*. Two shorten: **sechzehn** (not sechszehn) and **siebzehn** (not siebenzehn).

### The tens

| 20 **zwanzig** | 30 **dreißig** | 40 vierzig | 50 fünfzig |
|---|---|---|---|
| 60 sechzig | 70 siebzig | 80 achtzig | 90 neunzig |

*dreißig* is written with **ß**; all the others end in **-zig**. *sechzig* and *siebzig* are shortened like 16 and 17.

### 21 to 99: units first, then "and", then tens

This is the part that surprises English speakers. German says *four-and-twenty*, like the old nursery rhyme:

| number | German | literally |
|---|---|---|
| 21 | ein**und**zwanzig | one-and-twenty |
| 24 | vier**und**zwanzig | four-and-twenty |
| 35 | fünf**und**dreißig | five-and-thirty |
| 99 | neun**und**neunzig | nine-and-ninety |

Note **ein-** (not *eins*) inside a number: *einundzwanzig*. Everything is written as **one word**, however long.

### Hundreds and thousands

- 100 **(ein)hundert**, 200 **zweihundert**, 300 dreihundert …
- 1000 **(ein)tausend**, 2000 zweitausend, 10 000 zehntausend
- 1 000 000 **eine Million**

Combine from the top down: 245 = *zweihundertfünfundvierzig*, 1 999 = *eintausendneunhundertneunundneunzig*. Years are said in hundreds: 1995 = *neunzehnhundertfünfundneunzig*; but 2024 = *zweitausendvierundzwanzig*.

### Prices

The currency is **der Euro** and **der Cent**. In writing: **12,50 €** (comma, not point). In speech: *zwölf Euro fünfzig*, often without *Cent*. Full form: *zwölf Euro und fünfzig Cent*. The words *Euro* and *Cent* do **not** take a plural *-s* after a number: *zehn Euro*, *neunzig Cent*. Shop questions: **Was kostet das?** / **Wie viel kostet das?** – *Das kostet drei Euro.*

### Official time: 24-hour clock

Train stations, TV and offices use the 24-hour clock, read digit by digit with **Uhr** in the middle:

| written | spoken |
|---|---|
| 8:00 | acht Uhr |
| 13:30 | dreizehn Uhr dreißig |
| 17:45 | siebzehn Uhr fünfundvierzig |
| 20:05 | zwanzig Uhr fünf |

**Wie spät ist es?** / **Wie viel Uhr ist es?** – *Es ist dreizehn Uhr dreißig.* **Um** says *at*: *Der Zug fährt **um** 13:30.*

### Everyday time: 12-hour clock

Among friends people use a 12-hour system with **nach** (past), **vor** (to), **Viertel** (quarter) and **halb** (half).

| time | everyday German | note |
|---|---|---|
| 1:00 / 13:00 | ein Uhr | |
| 1:05 | fünf **nach** eins | five past one |
| 1:15 | **Viertel nach** eins | quarter past one |
| 1:30 | **halb zwei** | half **to** two! |
| 1:45 | **Viertel vor** zwei | quarter to two |
| 1:55 | fünf **vor** zwei | five to two |

The trap is **halb**: *halb zwei* means **1:30**, not 2:30. German counts the half hour *towards* the next hour: "half on the way to two". Also note **ein Uhr** but **eins** when the hour stands alone: *Es ist eins.*

If the 12-hour form is unclear, add a time of day: *um acht Uhr **morgens*** (8 am) / ***abends*** (8 pm).

### Why it matters

Numbers appear in prices, phone numbers, addresses, ages, dates and every appointment. Practise saying them out loud: the reversed order (*vierundzwanzig*) and *halb* are the two things to get automatic.
`,
  examples: [
    { de: 'Ich bin vierunddreißig Jahre alt.', en: 'I am 34 years old. (four-and-thirty)' },
    { de: 'Das kostet zwölf Euro fünfzig.', en: 'That costs 12.50 euros. (written 12,50 €)' },
    { de: 'Meine Telefonnummer ist null eins sieben sechs …', en: 'My phone number is 0176 … (phone numbers digit by digit)' },
    { de: 'Der Zug fährt um dreizehn Uhr dreißig.', en: 'The train leaves at 13:30. (official time)' },
    { de: 'Es ist halb zwei.', en: 'It is half past one. (1:30, not 2:30)' },
    { de: 'Wir treffen uns um Viertel vor acht.', en: 'We meet at a quarter to eight.' },
    { de: 'Das Haus hat zweihundertfünfzig Quadratmeter.', en: 'The house has 250 square metres. (one word)' },
    { de: 'Wie spät ist es? – Es ist zehn nach neun.', en: 'What time is it? – It is ten past nine.' },
  ],
  connections: [
    { topicId: 'a1-01-pronunciation', note: 'Numbers are full of ei, ie, z and -ig: zwei, vier, zehn, zwanzig.' },
    { topicId: 'a1-07-questions', note: 'Wie viel kostet das? and Wie spät ist es? are W-questions.' },
    { topicId: 'a1-28-time-prepositions', note: 'um (at) for clock times, am for days, im for months: that topic covers them all.' },
    { topicId: 'a1-10-plural', note: 'Euro and Cent have no plural ending after a number, unlike most nouns.' },
  ],
  edgeCases: [
    '**halb zwei = 1:30.** German counts towards the coming hour. *halb drei* = 2:30, *halb zwölf* = 11:30.',
    'Units come **before** tens: 24 = *vierundzwanzig*. Saying *zwanzigvier* is a very common beginner error.',
    '**eins** alone, **ein-** inside a number or before Uhr: *eins*, *einundzwanzig*, *ein Uhr*. *Es ist eins* but *Es ist ein Uhr*.',
    '**sechzehn, siebzehn, sechzig, siebzig**: the *s* of *sechs* and the *-en* of *sieben* are dropped.',
    'Decimal **comma**, not point: *2,50 €* is read *zwei Euro fünfzig*. A point separates thousands: *1.000*.',
    '**Viertel** is capitalised in time phrases (*Viertel vor acht*), because it is a noun.',
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
      type: 'match',
      id: 'a1-08-numbers-time-ex03',
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
      id: 'a1-08-numbers-time-ex04',
      prompt: '21 = ___',
      answer: ['einundzwanzig'],
      explanation: 'Inside a number "one" is ein-, not eins: einundzwanzig.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex05',
      prompt: 'How do you say 12,50 €?',
      options: ['zwölf Euros fünfzig', 'zwölf Euro fünfzig', 'zwölf Punkt fünfzig Euro'],
      answer: 1,
      explanation: 'Euro has no plural -s after a number, and the cents simply follow: zwölf Euro fünfzig.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex06',
      prompt: 'What time is "halb drei"?',
      options: ['3:30', '2:30', '3:00'],
      answer: 1,
      explanation: 'halb counts towards the next hour: halb drei = half way to three = 2:30.',
    },
    {
      type: 'match',
      id: 'a1-08-numbers-time-ex07',
      prompt: 'Match the clock time with the everyday German.',
      pairs: [
        ['7:15', 'Viertel nach sieben'],
        ['7:30', 'halb acht'],
        ['7:45', 'Viertel vor acht'],
        ['7:55', 'fünf vor acht'],
      ],
      explanation: 'nach = past, vor = to, halb = half towards the next hour. 7:30 is therefore halb acht.',
    },
    {
      type: 'fill',
      id: 'a1-08-numbers-time-ex08',
      prompt: 'Der Zug fährt um dreizehn ___ dreißig. (13:30, official)',
      answer: ['Uhr'],
      explanation: 'Official time: hour + Uhr + minutes. dreizehn Uhr dreißig = 13:30.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex09',
      prompt: 'Which is the correct written form of 245?',
      options: ['zwei hundert fünf und vierzig', 'zweihundertfünfundvierzig', 'zweihundertvierzigfünf'],
      answer: 1,
      explanation: 'Numbers are one word: zweihundert + fünfundvierzig. Units still come before tens inside it.',
    },
    {
      type: 'translate',
      id: 'a1-08-numbers-time-ex10',
      prompt: 'Translate: "It is a quarter past nine."',
      answer: ['Es ist Viertel nach neun.'],
      hint: 'Viertel = quarter, nach = past',
      explanation: 'Viertel nach + the hour. Viertel is a noun, so it is capitalised.',
    },
    {
      type: 'mc',
      id: 'a1-08-numbers-time-ex11',
      prompt: '"Wie spät ist es?" – It is 1:00. What is the correct answer?',
      options: ['Es ist eins Uhr.', 'Es ist ein Uhr.', 'Es ist einundzwanzig.'],
      answer: 1,
      explanation: 'Before Uhr you say ein, not eins: ein Uhr. Alone it would be "Es ist eins".',
    },
    {
      type: 'translate',
      id: 'a1-08-numbers-time-ex12',
      prompt: 'Translate: "That costs three euros."',
      answer: ['Das kostet drei Euro.'],
      hint: 'kosten = to cost',
      explanation: 'Euro stays Euro after a number, no plural ending. kostet is the es form of kosten (stem ends in -t, so -et).',
    },
  ],
};

export default topic;
