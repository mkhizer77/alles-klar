import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-32b-years-fractions',
  level: 'A2',
  unit: 10,
  order: 39,
  title: 'Years, fractions and decimals',
  germanTerm: 'Jahreszahlen, Brüche',
  tags: ['numbers', 'years', 'fractions', 'decimals', 'time'],
  summary: 'Years before 2000 are said in hundreds (neunzehnhundert…), from 2000 as zweitausend…, and never with "in". Halves and quarters use halb and Viertel; decimals use Komma.',
  steps: [
    {
      title: 'Years up to 1999: in hundreds',
      text: `
A **year** (*die Jahreszahl*) before 2000 is said in **hundreds**, not thousands: 1989 is **neunzehnhundert**neunundachtzig (nineteen hundred eighty-nine). There is no *und* between the hundreds and the rest.

- 1750 = **siebzehnhundert**fünfzig
- 1900 = **neunzehnhundert**
`,
      examples: [
        { de: 'Sie ist neunzehnhundertfünfundneunzig geboren.', en: 'She was born in 1995. (neunzehnhundert + fünfundneunzig)' },
        { de: 'Das Haus ist von achtzehnhundertzwanzig.', en: 'The house is from 1820. (achtzehnhundert + zwanzig)' },
        { de: 'Neunzehnhundertneunundachtzig fiel die Mauer.', en: 'In 1989 the Wall came down. (nineteen hundred eighty-nine)' },
      ],
    },
    {
      title: 'Years from 2000: zweitausend…',
      text: `
From 2000 on, a year is a normal number: 2005 is **zweitausend**fünf, 2024 is **zweitausend**vierundzwanzig. Do not say *zwanzighundert*.

A year stands **alone** or with **im Jahr**. German never uses *in* with a year: not *in 1990*, but *1990* or *im Jahr 1990*.
`,
      examples: [
        { de: 'Wir sind seit zweitausendzehn verheiratet.', en: 'We have been married since 2010. (zweitausend + zehn)' },
        { de: 'Ich bin 1990 geboren.', en: 'I was born in 1990. (the year alone, no in)' },
        { de: 'Ich bin im Jahr 1990 geboren.', en: 'I was born in 1990. (im Jahr + year)' },
      ],
    },
    {
      title: 'Halves and quarters',
      text: `
A few **fractions** (*Brüche*) come up every day, in shopping, recipes and times.

| fraction | German |
|---|---|
| 1/2 | **halb** (adjective: eine halb**e** Stunde, ein halb**es** Kilo) / **die Hälfte** (noun) |
| 1/4 | **ein Viertel** |
| 3/4 | **drei Viertel** |
| 1/3 | **ein Drittel** |

*Viertel* and *Drittel* are the ordinal + **-el** and are neuter nouns: *das Viertel*.
`,
      examples: [
        { de: 'Ich brauche ein halbes Kilo Mehl.', en: 'I need half a kilo of flour. (halb + adjective ending)' },
        { de: 'Die Hälfte der Klasse fehlt heute.', en: 'Half of the class is missing today. (die Hälfte: noun)' },
        { de: 'Ein Viertel Liter Milch, bitte.', en: 'A quarter of a litre of milk, please.' },
        { de: 'Ein Drittel der Schüler kommt aus Spanien.', en: 'A third of the pupils come from Spain.' },
      ],
    },
    {
      title: 'Decimals with Komma, and percentages',
      text: `
German **decimals** (*Dezimalzahlen*) use a **comma**, not a point, and you read it as **Komma**: 2,5 = *zwei Komma fünf*. One and a half is also **eineinhalb**. The point is for thousands: 1.000 = *tausend*.

**Percent** is *Prozent*: 50 % = *fünfzig Prozent*.
`,
      examples: [
        { de: 'Das Paket wiegt zwei Komma fünf Kilo.', en: 'The parcel weighs 2.5 kilos. (2,5 = zwei Komma fünf)' },
        { de: 'Wir warten schon eineinhalb Stunden.', en: 'We have already been waiting for an hour and a half. (1,5 = eineinhalb)' },
        { de: 'Fünfzig Prozent der Leute sagen Ja.', en: 'Fifty percent of the people say yes. (50 %)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-32-ordinal-numbers-dates', note: 'The sibling topic: ordinals and dates (am dritten Mai), which fractions like Viertel are built on.' },
    { topicId: 'a1-08-numbers-time', note: 'Years and decimals are built on the cardinal numbers from A1.' },
    { topicId: 'a1-08b-telling-the-time', note: 'Viertel nach drei and halb vier use the same halb and Viertel.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'halb is an adjective and takes the usual endings: ein halbes Kilo, eine halbe Stunde.' },
  ],
  edgeCases: [
    'Years before 2000 are said in **hundreds**: 1999 = *neunzehnhundertneunundneunzig*, never *eintausendneunhundert…*.',
    'Do not say *in 1990*. Say **1990** alone or **im Jahr 1990**.',
    'Decimals use a **comma** in German: *2,5* = *zwei Komma fünf*. The point is used for thousands: *1.000* = *tausend*.',
    '**halb** is an adjective and needs an ending: *ein halb**es** Kilo*, *eine halb**e** Stunde*. **die Hälfte** is the noun: *die Hälfte der Klasse*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-32b-years-fractions-ex01',
      prompt: 'How do you say the year 1987?',
      options: ['eintausendneunhundertsiebenundachtzig', 'neunzehnhundertsiebenundachtzig', 'neunzehn siebenundachtzig'],
      answer: 1,
      explanation: 'Years before 2000 are said in hundreds: neunzehnhundert + siebenundachtzig.',
    },
    {
      type: 'mc',
      id: 'a2-32b-years-fractions-ex02',
      prompt: 'How do you say the year 2024?',
      options: ['zwanzighundertvierundzwanzig', 'zweitausendvierundzwanzig', 'zwanzig vierundzwanzig'],
      answer: 1,
      explanation: 'From 2000 on a year is a normal number: zweitausend + vierundzwanzig. zwanzighundert is not used.',
    },
    {
      type: 'mc',
      id: 'a2-32b-years-fractions-ex03',
      prompt: 'Which sentence is correct?',
      options: ['Ich bin in 1992 geboren.', 'Ich bin 1992 geboren.', 'Ich bin am 1992 geboren.'],
      answer: 1,
      explanation: 'German uses the year on its own (or im Jahr 1992). in 1992 is an English pattern.',
    },
    {
      type: 'fill',
      id: 'a2-32b-years-fractions-ex04',
      prompt: 'Wir sind ___ Jahr 2010 nach Berlin gezogen. (in the)',
      answer: ['im'],
      explanation: 'With the word Jahr you say im Jahr 2010 (in + dem). Without Jahr the year stands alone: 2010 nach Berlin gezogen.',
    },
    {
      type: 'fill',
      id: 'a2-32b-years-fractions-ex05',
      prompt: 'Ich brauche ein ___ Kilo Mehl. (half)',
      answer: ['halbes'],
      explanation: 'halb is an adjective. After ein with the neuter noun Kilo the ending is -es: ein halbes Kilo.',
    },
    {
      type: 'fill',
      id: 'a2-32b-years-fractions-ex06',
      prompt: 'Ich möchte ein ___ der Pizza. (1/4)',
      answer: ['Viertel'],
      explanation: 'Fractions are ordinal + -el: viert- + -el = das Viertel. It is a neuter noun, so it is capitalised.',
    },
    {
      type: 'match',
      id: 'a2-32b-years-fractions-ex07',
      prompt: 'Match the number with the German.',
      pairs: [
        ['1/2 Stunde', 'eine halbe Stunde'],
        ['1/4', 'ein Viertel'],
        ['3/4', 'drei Viertel'],
        ['1/3', 'ein Drittel'],
        ['1,5', 'eins Komma fünf'],
      ],
      explanation: 'halb is an adjective with an ending; Viertel and Drittel are ordinal + -el; a decimal is read with Komma.',
    },
    {
      type: 'mc',
      id: 'a2-32b-years-fractions-ex08',
      prompt: 'How do you read "2,5 Kilo"?',
      options: ['zwei Punkt fünf Kilo', 'zwei Komma fünf Kilo', 'zwei und fünf Kilo'],
      answer: 1,
      explanation: 'German decimals use a comma, which is read as Komma: zwei Komma fünf.',
    },
    {
      type: 'mc',
      id: 'a2-32b-years-fractions-ex09',
      prompt: 'How do you read "1.000 Euro"?',
      options: ['eins Komma null null null Euro', 'tausend Euro', 'ein Punkt tausend Euro'],
      answer: 1,
      explanation: 'The point separates thousands in German: 1.000 = tausend. Only the comma marks a decimal.',
    },
    {
      type: 'fill',
      id: 'a2-32b-years-fractions-ex10',
      prompt: 'Die ___ der Klasse ist krank. (half, as a noun)',
      answer: ['Hälfte'],
      explanation: 'The noun for a half is die Hälfte. halb is the adjective (ein halbes Kilo); die Hälfte stands on its own with der + noun after it.',
    },
    {
      type: 'translate',
      id: 'a2-32b-years-fractions-ex11',
      prompt: 'Translate: "She was born in 1995."',
      answer: ['Sie ist 1995 geboren.', 'Sie ist im Jahr 1995 geboren.', 'Sie wurde 1995 geboren.', 'Sie wurde im Jahr 1995 geboren.'],
      hint: 'geboren sein = to be born; the year stands alone or after im Jahr',
      explanation: 'No in before the year. Sie ist 1995 geboren, read neunzehnhundertfünfundneunzig, or im Jahr 1995.',
    },
  ],
};

export default topic;
