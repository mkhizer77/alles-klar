import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-32-ordinal-numbers-dates',
  level: 'A2',
  unit: 10,
  order: 38,
  title: 'Ordinal numbers and dates',
  germanTerm: 'Ordinalzahlen, Datum',
  tags: ['numbers', 'dates', 'ordinals', 'adjective endings', 'time'],
  summary: 'Ordinal numbers (erste, zweite, dritte …) are adjectives: -e after der (Heute ist der dritte Mai), -en after am (am dritten Mai). Remember the irregular erste, dritte, siebte, achte.',
  steps: [
    {
      title: 'What ordinal numbers are for',
      text: `
**Ordinal numbers** (*Ordinalzahlen*) are the numbers for order: first, second, third. You need them above all for **dates**: *Heute ist der dritte Mai.* They also name floors and birthdays.

In German they are **adjectives**, so they stand before a noun and take an ending: der dritt**e** Mai, im viert**en** Stock.
`,
      examples: [
        { de: 'Heute ist der erste Mai.', en: 'Today is the first of May.' },
        { de: 'Wir wohnen im vierten Stock.', en: 'We live on the fourth floor.' },
        { de: 'Der Wievielte ist heute?', en: 'What is the date today? (literally: the how-many-th)' },
      ],
    },
    {
      title: 'Building ordinals: -t and -st',
      text: `
Take the number and add **-t** up to 19, **-st** from 20. Then the adjective ending follows.

| range | rule | examples |
|---|---|---|
| 1 to 19 | number + **-t** | zwei**t**-, vier**t**-, zehn**t**-, neunzehn**t**- |
| 20 and up | number + **-st** | zwanzig**st**-, einunddreißig**st**-, hundert**st**- |

In writing, a number with a **full stop** after it is an ordinal: *der 3. Mai* is read *der dritte Mai*. The dot replaces the ending, so never write *3te* or *3.te*.
`,
      examples: [
        { de: 'Heute ist der zweite Tag.', en: 'Today is the second day. (zwei + t + e)' },
        { de: 'Der zwanzigste Juni ist ein Samstag.', en: 'The twentieth of June is a Saturday. (zwanzig + st + e)' },
        { de: 'Das ist die zehnte Übung.', en: 'This is the tenth exercise. (zehn + t + e)' },
      ],
    },
    {
      title: 'The irregular four: erste, dritte, siebte, achte',
      text: `
Four ordinals do not follow the rule and must be learned:

| | regular would be | real form |
|---|---|---|
| 1. | *einst-* | **erst-** (der erste) |
| 3. | *dreit-* | **dritt-** (der dritte) |
| 7. | *siebent-* | **siebt-** (der siebte) |
| 8. | *achtt-* | **acht-** (der achte, only one t) |

All the others are regular: *der zweite, der vierte, der neunte*.
`,
      examples: [
        { de: 'Das ist das dritte Kind.', en: 'That is the third child. (dritte, not dreite)' },
        { de: 'Der siebte Juni ist ein Montag.', en: 'The seventh of June is a Monday. (siebte, not siebente)' },
        { de: 'Sie wohnt im achten Stock.', en: 'She lives on the eighth floor. (achte, one t)' },
      ],
    },
    {
      title: 'The ending: -e after der, -en after am',
      text: `
Because ordinals are adjectives, the ending changes with case and gender, exactly like *alt* or *groß*.

| | after der / die / das | after am / im / vom (Dative) |
|---|---|---|
| masculine | der erst**e** Tag | am erst**en** Tag |
| feminine | die zweit**e** Woche | in der zweit**en** Woche |
| neuter | das dritt**e** Kind | im dritt**en** Stock |

Good news: dates only ever need two endings. **-e** after *der*, **-en** after *am*, *vom* and *bis zum*.
`,
      examples: [
        { de: 'Heute ist der erste Mai.', en: 'Today is the first of May. (der + -e)' },
        { de: 'Ich habe am ersten Mai frei.', en: 'I have the first of May off. (am + -en)' },
        { de: 'In der zweiten Woche fahren wir weg.', en: 'In the second week we go away. (in der + -en)' },
      ],
    },
    {
      title: 'Saying and writing dates',
      text: `
*Der* + **-e** when the date is the subject: *Heute ist der 3. Oktober.* **Am** + **-en** when you say when something happens: *am 21. Mai*. A period runs **vom … bis zum …**, both with *-en*.

In the heading of a letter the date takes **den**: *Berlin, den 12. August*. Months and the year follow the day: 12.08.2025.
`,
      examples: [
        { de: 'Heute ist der dritte Oktober.', en: 'Today is the third of October. (subject: der + -e)' },
        { de: 'Ich habe am einundzwanzigsten Mai Geburtstag.', en: 'My birthday is on the 21st of May. (am + -sten)' },
        { de: 'Der Kurs geht vom ersten bis zum fünften März.', en: 'The course runs from the 1st to the 5th of March.' },
        { de: 'Berlin, den zwölften August', en: 'Berlin, 12 August (letter heading: den + -en)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-32b-years-fractions', note: 'The sibling topic: saying years (1995, 2024), halves, quarters and decimals.' },
    { topicId: 'a1-08-numbers-time', note: 'The ordinals are built on the cardinal numbers (eins, zwei, drei …) from A1.' },
    { topicId: 'a1-28-time-prepositions', note: 'am and im are the prepositions that go with dates and months: am 3. Mai, im Mai.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Ordinals take the adjective endings after der / die / das: der erste, am ersten.' },
    { topicId: 'a1-24-dative', note: 'am, im and vom are Dative, which is why dates end in -en after them.' },
  ],
  edgeCases: [
    'The irregular four: **erste** (not einte), **dritte** (not dreite), **siebte** (not siebente, though you may see it in older texts), **achte** (one t).',
    'A full stop after a number makes it ordinal: *der 3. Mai* = *der dritte Mai*. Writing *3te* or *3.te* is wrong.',
    'In a letter heading the date is written with **den** (Accusative): *Berlin, den 5. März*. Inside a sentence use *am 5. März*.',
    'After *am* the ordinal always ends in **-en**, even from 20 up: *am zwanzig**sten** Juni*, *am einunddreißig**sten** Dezember*.',
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
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex02',
      prompt: 'How do you write "the third of May" with digits?',
      options: ['der 3. Mai', 'der 3te Mai', 'der 3.te Mai'],
      answer: 0,
      explanation: 'A full stop after the number marks the ordinal and replaces the ending: der 3. Mai is read der dritte Mai.',
    },
    {
      type: 'match',
      id: 'a2-32-ordinal-numbers-dates-ex03',
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
      id: 'a2-32-ordinal-numbers-dates-ex04',
      prompt: 'How do you read "der 7. Juni"?',
      options: ['der siebente Juni', 'der siebte Juni', 'der siebe Juni'],
      answer: 1,
      explanation: 'The seventh is irregular: siebte (the -en of sieben is dropped). siebente exists in older texts but siebte is standard today.',
    },
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex05',
      prompt: 'Ich habe am ___ Oktober Geburtstag. (3.)',
      answer: ['dritten'],
      explanation: 'The third is irregular: dritt-. After am (Dative) the ending is -en: am dritten Oktober.',
    },
    {
      type: 'mc',
      id: 'a2-32-ordinal-numbers-dates-ex06',
      prompt: 'Which ending is correct? "Wir wohnen im ___ Stock." (2.)',
      options: ['zweite', 'zweiten', 'zweitem'],
      answer: 1,
      explanation: 'im = in dem (Dative). After a definite article in the Dative the adjective ending is -en: im zweiten Stock.',
    },
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex07',
      prompt: 'Der Kurs dauert vom ersten bis zum ___ März. (20.)',
      answer: ['zwanzigsten'],
      explanation: 'From 20 the ordinal takes -st, and after zum (Dative) the ending is -en: zwanzigsten.',
    },
    {
      type: 'fill',
      id: 'a2-32-ordinal-numbers-dates-ex08',
      prompt: 'Letter heading: "Berlin, ___ 5. März" (the article)',
      answer: ['den'],
      explanation: 'In a letter heading the date stands in the Accusative: Berlin, den 5. März. Inside a sentence you would say am 5. März.',
    },
    {
      type: 'order',
      id: 'a2-32-ordinal-numbers-dates-ex09',
      prompt: 'Build the sentence: "My birthday is on the twelfth of August."',
      words: ['Geburtstag.', 'zwölften', 'am', 'Ich', 'August', 'habe'],
      answer: ['Ich habe am zwölften August Geburtstag.'],
      explanation: 'Geburtstag haben + am + ordinal with -en + month. zwölf + -t + -en = zwölften.',
    },
    {
      type: 'translate',
      id: 'a2-32-ordinal-numbers-dates-ex10',
      prompt: 'Translate: "Today is the third of May."',
      answer: ['Heute ist der dritte Mai.', 'Heute ist der 3. Mai.'],
      hint: 'der Wievielte ist heute? – Heute ist der …',
      explanation: 'The date as subject takes der + -e. The third is irregular: dritte.',
    },
  ],
};

export default topic;
