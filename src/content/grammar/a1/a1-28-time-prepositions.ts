import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-28-time-prepositions',
  level: 'A1',
  unit: 6,
  order: 32,
  title: 'Prepositions of time: am, um, im, von … bis, seit, vor, nach',
  germanTerm: 'temporale Präpositionen',
  tags: ['prepositions', 'time', 'dative', 'calendar'],
  summary: 'am for days and dates, um for clock times, im for months and seasons, plus von … bis, seit, vor and nach to say when something happens.',
  steps: [
    {
      title: 'am, um, im: the core three',
      text: `
To say **when** something happens, German uses prepositions (small words like *on, at, in*). The three you need most are **am**, **um** and **im**. Each one is tied to one kind of time.

| | used for |
|---|---|
| **am** | days, parts of the day, dates |
| **um** | clock times |
| **im** | months, seasons, years |

A quick test: can you put a clock on it? Then **um**. Is it a day? **am**. Longer than a day? **im**.
`,
      examples: [
        { de: 'Der Kurs beginnt am Montag.', en: 'The course starts on Monday. (am + day)' },
        { de: 'Wir treffen uns um 19 Uhr.', en: 'We meet at 7 pm. (um + clock time)' },
        { de: 'Im Winter ist es kalt.', en: 'In winter it is cold. (im + season)' },
        { de: 'Am 3. Mai habe ich Geburtstag.', en: 'My birthday is on 3 May. (am + date)' },
      ],
    },
    {
      title: 'Start and end: von … bis, ab',
      text: `
For a period with a start and an end, use **von … bis** (from … to). **bis** on its own means *until*. **ab** means *from* a point onwards. These words usually have no article after them: *bis Freitag*, *ab Montag*, *von 9 bis 17 Uhr*.
`,
      examples: [
        { de: 'Die Bank ist von 9 bis 16 Uhr geöffnet.', en: 'The bank is open from 9 to 4. (von … bis)' },
        { de: 'Ich bleibe bis morgen.', en: 'I am staying until tomorrow. (bis = until)' },
        { de: 'Ab Montag habe ich Urlaub.', en: 'From Monday I am on holiday. (ab = from … onwards)' },
        { de: 'Bis später!', en: 'See you later!' },
      ],
    },
    {
      title: 'vor, nach, seit, in take the Dative',
      text: `
Four more time words take the **Dative** (the case with *dem, der, einem*): **vor** (before), **nach** (after), **seit** (since, for) and **in** (in … from now). So it is *vor dem Essen*, *nach dem Kurs*, *seit einem Monat*, *in einer Stunde*.

**in** here points to the future: *in zwei Wochen* = two weeks from now.
`,
      examples: [
        { de: 'Vor dem Kurs trinke ich einen Kaffee.', en: 'Before the course I drink a coffee. (vor + Dative)' },
        { de: 'Nach dem Essen trinken wir Kaffee.', en: 'After the meal we drink coffee. (nach + Dative)' },
        { de: 'In zwei Tagen fliege ich nach Rom.', en: 'In two days I fly to Rome. (in + time from now)' },
        { de: 'Seit einem Monat wohne ich hier.', en: 'I have been living here for a month. (seit + Dative)' },
      ],
    },
    {
      title: 'vor means ago, seit means still going on',
      text: `
**vor** with a number means **ago**: *vor drei Tagen* = three days ago. English puts *ago* last; German puts *vor* first.

**seit** is for something that started in the past and is **still true now**. It always goes with the **present tense**: *Ich lerne seit einem Jahr Deutsch* = I have been learning German for a year.
`,
      examples: [
        { de: 'Vor einer Woche war ich krank.', en: 'A week ago I was ill. (vor + Dative = ago)' },
        { de: 'Vor zwei Jahren war ich in Rom.', en: 'Two years ago I was in Rome.' },
        { de: 'Ich wohne seit drei Jahren in Wien.', en: 'I have lived in Vienna for three years. (seit + present tense)' },
        { de: 'Sie arbeitet seit Mai hier.', en: 'She has been working here since May.' },
      ],
    },
    {
      title: 'Years take no preposition',
      text: `
A year on its own takes **no** preposition: *Ich bin 1990 geboren.* If you want a preposition, say **im Jahr 1990**, never *in 1990*; that is an English habit.

Some time words also work without any preposition: *heute, morgen, gestern, jeden Tag, nächste Woche, letztes Jahr*.
`,
      examples: [
        { de: 'Ich bin 1990 geboren.', en: 'I was born in 1990. (no preposition)' },
        { de: 'Mein Bruder ist 2001 geboren.', en: 'My brother was born in 2001.' },
        { de: 'Jeden Tag lerne ich Deutsch.', en: 'Every day I learn German. (no preposition)' },
        { de: 'Nächste Woche habe ich frei.', en: 'Next week I am off.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-08-numbers-time', note: 'Clock times (um 8 Uhr, halb neun) and dates (am 3. Mai) are built with the numbers learned there.' },
    { topicId: 'a1-25-dative-prepositions', note: 'seit, nach and von are Dative prepositions; here they are used for time.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'an and in are two-way prepositions; with time they are always Dative (am, im).' },
    { topicId: 'a1-30-word-order-midfield', note: 'Time expressions often take position one or come early in the midfield.' },
  ],
  edgeCases: [
    '**in 2020** is an English habit. In German say **2020** alone or **im Jahr 2020**.',
    '**am** covers days and parts of the day (*am Abend*), but night is **in der Nacht**.',
    '**vor** + time = **ago**, and it comes first: *vor zwei Jahren* = two years ago.',
    '**seit** needs the **present** tense: *Ich arbeite seit Mai hier*, not *Ich habe seit Mai hier gearbeitet*.',
    'The month and the season take **im**, but a date with a day takes **am**: *im Mai* but *am 1. Mai*.',
    '**bis** usually has no article: *bis Freitag*, *bis 10 Uhr*. For a precise "until the …" you can say *bis zum* (*bis zum Wochenende*).',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-28-time-prepositions-ex01',
      prompt: 'Der Film beginnt ___ 20 Uhr. (at)',
      answer: ['um'],
      explanation: 'Clock times always take um.',
    },
    {
      type: 'fill',
      id: 'a1-28-time-prepositions-ex02',
      prompt: 'Ich habe ___ Freitag frei. (on)',
      answer: ['am'],
      explanation: 'Days of the week take am (an + dem).',
    },
    {
      type: 'fill',
      id: 'a1-28-time-prepositions-ex03',
      prompt: '___ Sommer fahren wir ans Meer. (in)',
      answer: ['Im'],
      explanation: 'Seasons and months take im (in + dem).',
    },
    {
      type: 'match',
      id: 'a1-28-time-prepositions-ex04',
      prompt: 'Match each preposition with the kind of time it is used for.',
      pairs: [
        ['um', 'clock time (8 Uhr)'],
        ['am', 'day or date (Montag, 3. Mai)'],
        ['im', 'month or season (Juli, Herbst)'],
        ['seit', 'since / for, still going on'],
        ['vor', 'before / ago'],
      ],
      explanation: 'Each time preposition is tied to one kind of time expression. Learn the pairs as fixed combinations.',
    },
    {
      type: 'mc',
      id: 'a1-28-time-prepositions-ex05',
      prompt: 'Complete: "Ich bin ___ 1995 geboren."',
      options: ['in', 'im', '(no preposition)'],
      answer: 2,
      explanation: 'Years take no preposition on their own: Ich bin 1995 geboren. im Jahr 1995 would also be correct, but in 1995 is wrong.',
    },
    {
      type: 'mc',
      id: 'a1-28-time-prepositions-ex06',
      prompt: 'How do you say "two years ago"?',
      options: ['zwei Jahre vor', 'vor zwei Jahren', 'seit zwei Jahren'],
      answer: 1,
      explanation: 'vor + Dative = ago, and vor comes first. seit zwei Jahren would mean for two years (and still now).',
    },
    {
      type: 'fill',
      id: 'a1-28-time-prepositions-ex07',
      prompt: 'Ich lerne ___ einem Jahr Deutsch. (for / since)',
      answer: ['seit'],
      explanation: 'The learning started a year ago and is still going on, so seit with the present tense.',
    },
    {
      type: 'fill',
      id: 'a1-28-time-prepositions-ex08',
      prompt: 'Die Bank ist von 9 ___ 16 Uhr geöffnet. (to / until)',
      answer: ['bis'],
      explanation: 'von … bis marks the start and the end of a period.',
    },
    {
      type: 'order',
      id: 'a1-28-time-prepositions-ex09',
      prompt: 'Build the sentence: "After the course I go home."',
      words: ['nach', 'Hause.', 'Kurs', 'gehe', 'Nach', 'ich', 'dem'],
      answer: ['Nach dem Kurs gehe ich nach Hause.'],
      explanation: 'Nach dem Kurs (Dative) takes position one, so the verb gehe comes second and ich follows it. nach Hause = home.',
    },
    {
      type: 'mc',
      id: 'a1-28-time-prepositions-ex10',
      prompt: 'Which sentence is correct?',
      options: ['Am Nacht schlafe ich.', 'In der Nacht schlafe ich.', 'Im Nacht schlafe ich.'],
      answer: 1,
      explanation: 'Night is the exception: in der Nacht (feminine Dative), not am Nacht.',
    },
    {
      type: 'translate',
      id: 'a1-28-time-prepositions-ex11',
      prompt: 'Translate: "The course starts on Tuesday at 6 pm."',
      answer: ['Der Kurs beginnt am Dienstag um 18 Uhr.', 'Der Kurs beginnt am Dienstag um sechs Uhr.', 'Der Kurs fängt am Dienstag um 18 Uhr an.'],
      hint: 'beginnen = to start, der Dienstag = Tuesday',
      explanation: 'am for the day, um for the clock time. The day usually comes before the time.',
    },
    {
      type: 'fill',
      id: 'a1-28-time-prepositions-ex12',
      prompt: '___ zwei Wochen habe ich Urlaub. (in, from now)',
      answer: ['In'],
      explanation: 'A point in the future measured from now takes in + Dative: in zwei Wochen.',
    },
  ],
};

export default topic;
