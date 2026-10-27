import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-32-ordinal-numbers-dates',
  level: 'A2',
  unit: 10,
  order: 32,
  title: 'Numbers in depth: ordinals, dates, fractions, years',
  germanTerm: 'Ordinalzahlen',
  tags: ['numbers', 'dates', 'ordinals', 'adjective endings', 'time'],
  summary: 'Ordinal numbers (erste, zweite, dritte …) behave like adjectives and are the key to saying dates (am 3. Mai), years (1998, 2024) and fractions (ein Drittel, drei Viertel).',
  explanation: `
### What it is

**Ordinal numbers** (*Ordinalzahlen*) are the numbers for order: first, second, third. In German they are **adjectives**, so they take adjective endings. You need them for dates, floors, birthdays, rankings and fractions.

### Building ordinals

| range | rule | examples |
|---|---|---|
| 1 to 19 | number + **-t** | zwei**t**-, vier**t**-, zehn**t**-, neunzehn**t**- |
| 20 and up | number + **-st** | zwanzig**st**-, einunddreißig**st**-, hundert**st**- |

Four of them are irregular and must be learned:

| | regular would be | real form |
|---|---|---|
| 1. | *einst-* | **erst-** (der erste) |
| 3. | *dreit-* | **dritt-** (der dritte) |
| 7. | *siebent-* | **siebt-** (der siebte) |
| 8. | *achtt-* | **acht-** (der achte, only one t) |

In writing, an ordinal is a number followed by a **full stop**: *der 3. Mai* is read *der dritte Mai*. The dot replaces the ending, so never write *der 3.te Mai*.

### Adjective endings

Because ordinals are adjectives, the ending changes with case and gender, exactly like *alt* or *groß*:

| | after der / die / das | after am / im / vom (Dative) |
|---|---|---|
| masculine | der erst**e** Tag | am erst**en** Tag |
| feminine | die zweit**e** Woche | in der zweit**en** Woche |
| neuter | das dritt**e** Kind | im dritt**en** Stock |

Luckily, dates only ever need two endings: **-e** after *der* and **-en** after *am / vom / bis zum*.

### Dates

| question | answer | reading |
|---|---|---|
| Der Wievielte ist heute? | Heute ist **der 3. Oktober**. | der dritt**e** Oktober |
| Wann hast du Geburtstag? | **Am 21. Mai**. | am einundzwanzig**sten** Mai |
| Wann ist der Kurs? | **Vom 1. bis zum 5. März**. | vom erst**en** bis zum fünft**en** März |
| Der Wievielte? (writing) | **Berlin, den 12.08.2025** | den zwölften achten |

Rule of thumb: *der* + **-e** when the date is the subject (*Heute ist der 3.*); *am* + **-en** when it says when something happens (*am 3.*).

### Years

Years are read in **hundreds** up to 1999 and as normal numbers from 2000:

- 1989 = **neunzehnhundert**neunundachtzig
- 1750 = **siebzehnhundert**fünfzig
- 2005 = **zweitausend**fünf
- 2024 = **zweitausend**vierundzwanzig

Important: German says the year **alone** or with *im Jahr*, never with *in*:

- Ich bin **1990** geboren. / Ich bin **im Jahr 1990** geboren. (not *in 1990*)

### Fractions and decimals

| fraction | German |
|---|---|
| 1/2 | **ein halb** (as an adjective: *eine halbe Stunde*) / die Hälfte |
| 1/3 | **ein Drittel** |
| 1/4 | **ein Viertel** |
| 3/4 | **drei Viertel** |
| 1/5, 1/10 | ein Fünftel, ein Zehntel |
| 1,5 | **eins Komma fünf** / eineinhalb / anderthalb |
| 50 % | fünfzig Prozent |

Fractions are made from the ordinal + **-el** and are neuter nouns: *das Drittel, das Viertel*. Decimals use a **comma**, not a point: 3,5 = *drei Komma fünf*.

### Why it matters

Every appointment, form and conversation about birthdays needs a date, and every date needs an ordinal with the right ending. Years come up in any biography (*Ich bin 1995 geboren*). Fractions appear in recipes, times (*Viertel nach drei*) and prices (*ein halbes Kilo*).
`,
  examples: [
    { de: 'Heute ist der erste Mai.', en: 'Today is the first of May. (der + -e)' },
    { de: 'Ich habe am dritten Oktober Geburtstag.', en: 'My birthday is on the third of October. (am + -en; dritte is irregular)' },
    { de: 'Der Kurs geht vom siebten bis zum zwanzigsten Juni.', en: 'The course runs from the 7th to the 20th of June. (siebte is irregular; -ste from 20)' },
    { de: 'Wir wohnen im vierten Stock.', en: 'We live on the fourth floor. (im + -en)' },
    { de: 'Sie ist 1995 geboren.', en: 'She was born in 1995. (neunzehnhundertfünfundneunzig; no "in")' },
    { de: 'Wir sind seit 2010 verheiratet.', en: 'We have been married since 2010. (zweitausendzehn)' },
    { de: 'Ich brauche ein halbes Kilo Mehl und ein Viertel Liter Milch.', en: 'I need half a kilo of flour and a quarter litre of milk.' },
    { de: 'Der Wievielte ist heute?', en: 'What is the date today? (literally: the how-many-th)' },
  ],
  connections: [
    { topicId: 'a1-08-numbers-time', note: 'The ordinals are built on the cardinal numbers (eins, zwei, drei …) from A1.' },
    { topicId: 'a1-28-time-prepositions', note: 'am and im are the prepositions that go with dates and months: am 3. Mai, im Mai.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Ordinals take the adjective endings after der / die / das: der erste, am ersten.' },
    { topicId: 'a1-24-dative', note: 'am, im and vom are Dative, which is why dates end in -en after them.' },
  ],
  edgeCases: [
    'The irregular four: **erste** (not einte), **dritte** (not dreite), **siebte** (not siebente, though you may see it in older texts), **achte** (one t).',
    'A full stop after a number makes it ordinal: *der 3. Mai* = *der dritte Mai*. Writing *3te* or *3.te* is wrong.',
    'Years before 2000 are said in **hundreds**: 1999 = *neunzehnhundertneunundneunzig*, never *eintausendneunhundert…*.',
    'Do not say *in 1990*. Say **1990** alone or **im Jahr 1990**.',
    'Decimals use a **comma** in German: *2,5* = *zwei Komma fünf*. The point is used for thousands: *1.000* = *tausend*.',
    'In a letter heading the date is written with **den** (Accusative): *Berlin, den 5. März*. Inside a sentence use *am 5. März*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex01',
      prompt: 'Heute ist der ___ Mai. (1.)',
      answer: ['erste'],
      explanation: 'The first is irregular: erste. After der (Nominative) the ending is -e.',
    },
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex02',
      prompt: 'Ich habe am ___ Oktober Geburtstag. (3.)',
      answer: ['dritten'],
      explanation: 'The third is irregular: dritt-. After am (Dative) the ending is -en: am dritten Oktober.',
    },
    {
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex03',
      prompt: 'How do you read "der 7. Juni"?',
      options: ['der siebente Juni', 'der siebte Juni', 'der siebe Juni'],
      answer: 1,
      explanation: 'The seventh is irregular: siebte (the -en of sieben is dropped). siebente exists in older texts but siebte is standard today.',
    },
    {
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex04',
      prompt: 'Which ending is correct? "Wir wohnen im ___ Stock." (2.)',
      options: ['zweite', 'zweiten', 'zweitem'],
      answer: 1,
      explanation: 'im = in dem (Dative). After a definite article in the Dative the adjective ending is -en: im zweiten Stock.',
    },
    {
      type: 'match',
      id: 'a2-32-ordinal-numbers-dates-ex05',
      prompt: 'Match the number with the ordinal (base form).',
      pairs: [
        ['1.', 'erst-'],
        ['3.', 'dritt-'],
        ['8.', 'acht-'],
        ['20.', 'zwanzigst-'],
        ['100.', 'hundertst-'],
      ],
      explanation: 'Up to 19 add -t (with erst-, dritt-, siebt-, acht- irregular); from 20 add -st.',
    },
    {
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex06',
      prompt: 'How do you say the year 1987?',
      options: ['eintausendneunhundertsiebenundachtzig', 'neunzehnhundertsiebenundachtzig', 'neunzehn siebenundachtzig'],
      answer: 1,
      explanation: 'Years before 2000 are said in hundreds: neunzehnhundert + siebenundachtzig.',
    },
    {
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex07',
      prompt: 'Which sentence is correct?',
      options: ['Ich bin in 1992 geboren.', 'Ich bin 1992 geboren.', 'Ich bin am 1992 geboren.'],
      answer: 1,
      explanation: 'German uses the year on its own (or im Jahr 1992). in 1992 is an English pattern.',
    },
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex08',
      prompt: 'Der Kurs dauert vom ersten bis zum ___ März. (20.)',
      answer: ['zwanzigsten'],
      explanation: 'From 20 the ordinal takes -st, and after zum (Dative) the ending is -en: zwanzigsten.',
    },
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex09',
      prompt: 'Ich möchte ein ___ der Pizza. (1/4)',
      answer: ['Viertel'],
      explanation: 'Fractions are ordinal + -el: viert- + -el = das Viertel. It is a neuter noun, so it is capitalised.',
    },
    {
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex10',
      prompt: 'How do you read "2,5 Kilo"?',
      options: ['zwei Punkt fünf Kilo', 'zwei Komma fünf Kilo', 'zwei und fünf Kilo'],
      answer: 1,
      explanation: 'German decimals use a comma, which is read as Komma: zwei Komma fünf.',
    },
    {
      type: 'order',
      id: 'a2-32-ordinal-numbers-dates-ex11',
      prompt: 'Build the sentence: "My birthday is on the twelfth of August."',
      words: ['Geburtstag.', 'zwölften', 'am', 'Ich', 'August', 'habe'],
      answer: ['Ich habe am zwölften August Geburtstag.'],
      explanation: 'Geburtstag haben + am + ordinal with -en + month. zwölf + -t + -en = zwölften.',
    },
    {
      type: 'translate',
      id: 'a2-32-ordinal-numbers-dates-ex12',
      prompt: 'Translate: "Today is the third of May."',
      answer: ['Heute ist der dritte Mai.', 'Heute ist der 3. Mai.'],
      hint: 'der Wievielte ist heute? – Heute ist der …',
      explanation: 'The date as subject takes der + -e. The third is irregular: dritte.',
    },
  ],
};

export default topic;
