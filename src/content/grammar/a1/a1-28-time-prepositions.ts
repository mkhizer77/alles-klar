import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-28-time-prepositions',
  level: 'A1',
  unit: 6,
  order: 28,
  title: 'Prepositions of time: am, um, im, von … bis, seit, vor, nach',
  germanTerm: 'temporale Präpositionen',
  tags: ['prepositions', 'time', 'dative', 'calendar'],
  summary: 'am for days and dates, um for clock times, im for months and seasons, plus von … bis, seit, vor and nach to say when something happens.',
  explanation: `
### What it is

To say **when** something happens, German uses a small set of prepositions, each tied to a kind of time: a day, a clock time, a month. These are the **temporal prepositions** (*temporale Präpositionen*). English has the same idea (*on Monday, at 8, in May*), but the pairs do not always match, so learn each German word with its own job.

### The core three: am, um, im

| preposition | used for | examples |
|---|---|---|
| **am** (an + dem) | days, parts of the day, dates | **am** Montag, **am** Morgen, **am** Wochenende, **am** 3. Mai |
| **um** | clock times | **um** 8 Uhr, **um** halb neun, **um** Mitternacht |
| **im** (in + dem) | months, seasons, longer periods | **im** Januar, **im** Sommer, **im** Jahr 2020 |

A quick test: if you can put a clock on it, use **um**. If it is a day, use **am**. If it is longer than a day, use **im**.

One exception inside *am*: the night is feminine, so it is **in der Nacht**, not *am Nacht*.

### Start and end: von … bis, ab

- **von … bis** = from … to: *von Montag bis Freitag*, *von 9 bis 17 Uhr*.
- **bis** alone = until: *bis morgen*, *bis 18 Uhr*, *Bis später!* (see you later).
- **ab** = from (a point onwards): *ab morgen*, *ab Montag*, *ab 1. Juni*.

### Before, after, ago: vor, nach, seit, in

These four take the **Dative**:

| preposition | meaning | example |
|---|---|---|
| **vor** | before; ago | **vor dem** Essen (before the meal); **vor** zwei Jahren (two years ago) |
| **nach** | after | **nach dem** Kurs (after the course); **nach** Weihnachten |
| **seit** | since, for (still going on) | **seit** 2019; **seit einem** Monat |
| **in** | in (time from now) | **in** zwei Wochen (in two weeks); **in einer** Stunde |

*Vor* with a number means **ago**: *vor drei Tagen* = three days ago. The English word order is reversed: *ago* comes last, *vor* comes first.

*Seit* always goes with the **present tense** for something that started in the past and is still true: *Ich lerne seit einem Jahr Deutsch* (I have been learning German for a year).

### Years and no preposition

Years take **no** preposition on their own: *Ich bin 1990 geboren.* If you want a preposition, it is *im Jahr 1990*, never *in 1990* (that is an English habit that sounds wrong in German).

Some time words also work without a preposition at all: *heute, morgen, gestern, jeden Tag, nächste Woche, letztes Jahr*.

### Why it matters

Appointments, opening hours, timetables and simple plans all depend on these words: *Der Kurs ist am Dienstag um 18 Uhr. Die Praxis ist von 8 bis 12 Uhr geöffnet. Ich bin seit März in Berlin.* They are short, fixed and very frequent, so a few minutes of practice removes a lot of small errors. The Dative forms you learned in unit 5 (*dem, der, einem*) show up again here, which is good revision.
`,
  examples: [
    { de: 'Der Kurs beginnt am Montag.', en: 'The course starts on Monday. (am + day)' },
    { de: 'Wir treffen uns um 19 Uhr.', en: 'We meet at 7 pm. (um + clock time)' },
    { de: 'Im Winter ist es kalt.', en: 'In winter it is cold. (im + season)' },
    { de: 'Das Geschäft ist von 9 bis 18 Uhr geöffnet.', en: 'The shop is open from 9 to 6. (von … bis)' },
    { de: 'Ich wohne seit drei Jahren in Wien.', en: 'I have lived in Vienna for three years. (seit + present tense)' },
    { de: 'Vor einer Woche war ich krank.', en: 'A week ago I was ill. (vor + Dative = ago)' },
    { de: 'Nach dem Essen trinken wir Kaffee.', en: 'After the meal we drink coffee. (nach + Dative)' },
    { de: 'In zwei Tagen fliege ich nach Rom.', en: 'In two days I fly to Rome. (in + time from now)' },
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
