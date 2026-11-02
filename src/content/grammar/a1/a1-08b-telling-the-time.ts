import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-08b-telling-the-time',
  level: 'A1',
  unit: 1,
  order: 9,
  title: 'Telling the time',
  germanTerm: 'Uhrzeit',
  tags: ['time', 'clock', 'Uhrzeit', 'halb', 'Viertel'],
  summary: 'The time is told either officially with the 24-hour clock (dreizehn Uhr dreißig) or in everyday style with nach, vor, Viertel and halb; remember that halb zwei is 1:30.',
  steps: [
    {
      title: 'Asking and saying the time',
      text: `
To ask the time: **Wie spät ist es?** or **Wie viel Uhr ist es?** The answer starts with **Es ist …** and the full hour takes the word **Uhr**: *Es ist acht Uhr.*

To say *at* a time you use **um**: *Der Kurs beginnt **um** neun Uhr.*
`,
      examples: [
        { de: 'Wie spät ist es?', en: 'What time is it?' },
        { de: 'Es ist acht Uhr.', en: 'It is eight o\'clock.' },
        { de: 'Der Kurs beginnt um neun Uhr.', en: 'The course starts at nine o\'clock. (um = at)' },
      ],
    },
    {
      title: 'Official time: the 24-hour clock',
      text: `
Train stations, TV and offices use the **24-hour clock**. You read the digits with **Uhr** in the middle: hour, *Uhr*, minutes.

| written | spoken |
|---|---|
| 8:00 | acht Uhr |
| 13:30 | dreizehn Uhr dreißig |
| 17:45 | siebzehn Uhr fünfundvierzig |
| 20:05 | zwanzig Uhr fünf |
`,
      examples: [
        { de: 'Es ist dreizehn Uhr dreißig.', en: 'It is 13:30.' },
        { de: 'Der Zug fährt um siebzehn Uhr fünfundvierzig.', en: 'The train leaves at 17:45.' },
        { de: 'Die Sendung beginnt um zwanzig Uhr fünf.', en: 'The programme starts at 20:05.' },
      ],
    },
    {
      title: 'Everyday time: nach, vor and Viertel',
      text: `
Among friends people use a **12-hour** system. Minutes after the hour take **nach** (past), minutes before the next hour take **vor** (to). A quarter is **Viertel**, written with a capital because it is a noun.

| time | everyday German |
|---|---|
| 1:05 | fünf **nach** eins |
| 1:15 | **Viertel nach** eins |
| 1:45 | **Viertel vor** zwei |
| 1:55 | fünf **vor** zwei |
`,
      examples: [
        { de: 'Es ist fünf nach eins.', en: 'It is five past one.' },
        { de: 'Es ist Viertel nach eins.', en: 'It is a quarter past one.' },
        { de: 'Es ist Viertel vor zwei.', en: 'It is a quarter to two.' },
        { de: 'Es ist zehn vor neun.', en: 'It is ten to nine.' },
      ],
    },
    {
      title: 'halb: half towards the next hour',
      text: `
The trap is **halb**. *Halb zwei* means **1:30**, not 2:30. German counts the half hour *towards* the coming hour: "half on the way to two".

So *halb drei* = 2:30, *halb acht* = 7:30, *halb zwölf* = 11:30. Always think "half of the next hour".
`,
      examples: [
        { de: 'Es ist halb zwei.', en: 'It is half past one. (1:30, not 2:30)' },
        { de: 'Wir treffen uns um halb acht.', en: 'We meet at half past seven. (7:30)' },
        { de: 'Der Film beginnt um halb zwölf.', en: 'The film starts at half past eleven. (11:30)' },
      ],
    },
    {
      title: 'eins or ein Uhr, morgens or abends',
      text: `
Two small details. The number one is **eins** when it stands alone, but **ein** before *Uhr*: *Es ist eins* but *Es ist ein Uhr.*

If the 12-hour form could mean two different times, add a part of the day: **morgens** (in the morning), **nachmittags** (in the afternoon), **abends** (in the evening).
`,
      examples: [
        { de: 'Es ist eins.', en: 'It is one. (eins on its own)' },
        { de: 'Es ist ein Uhr.', en: 'It is one o\'clock. (ein before Uhr)' },
        { de: 'Wir essen um acht Uhr abends.', en: 'We eat at eight in the evening. (8 pm)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-08-numbers-time', note: 'The numbers 1 to 59 that build every clock time are taught there.' },
    { topicId: 'a1-07-questions', note: 'Wie spät ist es? is a W-question with wie.' },
    { topicId: 'a1-28-time-prepositions', note: 'um (at) for clock times, am for days, im for months: that topic covers them all.' },
  ],
  edgeCases: [
    '**halb zwei = 1:30.** German counts towards the coming hour. *halb drei* = 2:30, *halb zwölf* = 11:30.',
    '**eins** alone, **ein** before Uhr: *Es ist eins* but *Es ist ein Uhr*. *Eins Uhr* is wrong.',
    '**Viertel** is capitalised in time phrases (*Viertel vor acht*), because it is a noun.',
    'Do not mix the two systems. Official: *dreizehn Uhr dreißig*. Everyday: *halb zwei*. *Halb vierzehn* does not exist.',
    'Use **um** for *at* a clock time: *um acht Uhr*. English *at* is never *an* or *in* here.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-08b-telling-the-time-ex01',
      prompt: 'Der Film beginnt ___ acht Uhr. (at)',
      answer: ['um'],
      explanation: 'A clock time takes um: um acht Uhr = at eight o\'clock.',
    },
    {
      type: 'fill',
      id: 'a1-08b-telling-the-time-ex02',
      prompt: 'Der Zug fährt um dreizehn ___ dreißig. (13:30, official)',
      answer: ['Uhr'],
      explanation: 'Official time: hour + Uhr + minutes. dreizehn Uhr dreißig = 13:30.',
    },
    {
      type: 'mc',
      id: 'a1-08b-telling-the-time-ex03',
      prompt: 'How do you say 17:45 in official 24-hour style?',
      options: ['siebzehn Uhr fünfundvierzig', 'fünf Uhr fünfundvierzig', 'siebzehn fünfundvierzig Uhr'],
      answer: 0,
      explanation: 'Read the digits with Uhr in the middle: siebzehn Uhr fünfundvierzig. Uhr always sits between the hour and the minutes.',
    },
    {
      type: 'mc',
      id: 'a1-08b-telling-the-time-ex04',
      prompt: 'What time is "zehn nach neun"?',
      options: ['9:10', '8:50', '9:50'],
      answer: 0,
      explanation: 'nach means past: ten past nine = 9:10. 8:50 would be zehn vor neun.',
    },
    {
      type: 'fill',
      id: 'a1-08b-telling-the-time-ex05',
      prompt: 'Es ist Viertel ___ acht. (7:45)',
      answer: ['vor'],
      explanation: '7:45 is a quarter to eight: Viertel vor acht. vor = to, nach = past.',
    },
    {
      type: 'mc',
      id: 'a1-08b-telling-the-time-ex06',
      prompt: 'What time is "halb drei"?',
      options: ['3:30', '2:30', '3:00'],
      answer: 1,
      explanation: 'halb counts towards the next hour: halb drei = half way to three = 2:30.',
    },
    {
      type: 'match',
      id: 'a1-08b-telling-the-time-ex07',
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
      type: 'order',
      id: 'a1-08b-telling-the-time-ex08',
      prompt: 'Build the sentence: "The train leaves at nine o\'clock."',
      words: ['um', 'Der', 'Uhr.', 'fährt', 'neun', 'Zug'],
      answer: ['Der Zug fährt um neun Uhr.'],
      explanation: 'Subject (Der Zug), verb (fährt), then um + the time with Uhr at the end.',
    },
    {
      type: 'translate',
      id: 'a1-08b-telling-the-time-ex09',
      prompt: 'Translate: "It is a quarter past nine."',
      answer: ['Es ist Viertel nach neun.'],
      hint: 'Viertel = quarter, nach = past',
      explanation: 'Viertel nach + the hour. Viertel is a noun, so it is capitalised.',
    },
    {
      type: 'mc',
      id: 'a1-08b-telling-the-time-ex10',
      prompt: '"Wie spät ist es?" – It is 1:00. What is the correct answer?',
      options: ['Es ist eins Uhr.', 'Es ist ein Uhr.', 'Es ist einundzwanzig.'],
      answer: 1,
      explanation: 'Before Uhr you say ein, not eins: ein Uhr. Alone it would be "Es ist eins".',
    },
    {
      type: 'translate',
      id: 'a1-08b-telling-the-time-ex11',
      prompt: 'Translate: "It is half past seven." (everyday style)',
      answer: ['Es ist halb acht.'],
      hint: 'halb = half; think of the next hour',
      explanation: '7:30 is half way to eight, so German says halb acht, not halb sieben.',
    },
    {
      type: 'mc',
      id: 'a1-08b-telling-the-time-ex12',
      prompt: 'A friend says: "Wir treffen uns um halb vier." When do you meet?',
      options: ['3:30', '4:30', '3:45'],
      answer: 0,
      explanation: 'halb vier = half way to four = 3:30. If you turn up at 4:30 you are an hour late.',
    },
  ],
};

export default topic;
