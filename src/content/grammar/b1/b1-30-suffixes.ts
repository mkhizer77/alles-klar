import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-30-suffixes',
  level: 'B1',
  unit: 10,
  order: 30,
  title: 'Suffixes: -heit, -keit, -ung, -schaft, -lich, -ig, -isch, -bar, -los',
  germanTerm: 'Suffixe',
  tags: ['word formation', 'suffixes', 'nouns', 'adjectives', 'vocabulary'],
  summary: 'Suffixes are endings that turn one word type into another: -heit, -keit, -ung and -schaft make feminine nouns, while -lich, -ig, -isch, -bar and -los make adjectives – each with a predictable meaning and, for nouns, a predictable gender.',
  explanation: `
### What a suffix does

A few endings let you build new words from ones you know, and tell you the gender for free:

- *frei* (free) → **die Freiheit** (freedom)
- *essen* (to eat) → **essbar** (edible, can be eaten)

A **suffix** (*Suffix*) is attached to the **end** of a word. Unlike a prefix, it usually changes the **word type**: an adjective becomes a noun (*frei* → *Freiheit*), a verb becomes a noun (*wohnen* → *Wohnung*), a noun becomes an adjective (*Freund* → *freundlich*). The best news: noun suffixes also fix the **gender**, so you never have to guess the article.

### Noun suffixes: all feminine

| Suffix | Made from | Meaning | Examples |
|---|---|---|---|
| **-heit** | adjectives | a quality, a state | die Frei**heit**, die Gesund**heit**, die Schön**heit**, die Kind**heit** |
| **-keit** | adjectives ending in -lich, -ig, -bar, -sam | a quality | die Möglich**keit**, die Freundlich**keit**, die Schwierig**keit** |
| **-ung** | verbs | the action or its result | die Wohn**ung**, die Mein**ung**, die Üb**ung**, die Entscheid**ung** |
| **-schaft** | nouns, adjectives | a group or relationship | die Freund**schaft**, die Wissen**schaft**, die Mann**schaft** |

Other feminine suffixes you will meet: **-ei** (die Bäcker**ei**), **-tion** (die Informa**tion**), **-tät** (die Universi**tät**), **-ie** (die Energ**ie**). All of these nouns are **die**, and the plural is **-en** (*die Wohnungen, die Möglichkeiten*).

**-heit or -keit?** The base adjective decides. After **-lich, -ig, -bar, -sam** use *-keit*: *freundlich* → *Freundlichkeit*, *ehrlich* → *Ehrlichkeit*. After other adjectives use *-heit*: *frei* → *Freiheit*, *krank* → *Krankheit*.

### Adjective suffixes

| Suffix | Meaning | Examples |
|---|---|---|
| **-lich** | having the quality of; often "-ly" | freund**lich**, täg**lich**, gefähr**lich**, verständ**lich** |
| **-ig** | having, full of; "-y" | hungr**ig**, sonn**ig**, ruh**ig**, wicht**ig** |
| **-isch** | belonging to, in the manner of; nationalities | typ**isch**, europä**isch**, kind**isch**, prakt**isch** |
| **-bar** | can be done ("-able") | ess**bar**, mach**bar**, les**bar**, trink**bar** |
| **-los** | without ("-less") | arbeits**los**, kosten**los**, hoffnungs**los**, hilf**los** |

You may also see **-voll** (full of: *wertvoll*, *sinnvoll*) and **-reich** (rich in: *erfolgreich*). They work the same way.

**-bar** is especially useful: it means "can be done". *Das Wasser ist trinkbar* = *Das Wasser kann man trinken* (the water can be drunk).

Some pairs look similar but differ in tone: **kindlich** (child-like, innocent, positive) vs **kindisch** (childish, immature, negative).

### Small sound changes

- An **umlaut** often appears: *Kraft* → *kräftig*, *Hunger* → *hungrig*, *Mann* → *männlich*.
- An **-s-** or **-n-** is sometimes inserted: *Hoffnung* → *hoffnung**s**los*, *Arbeit* → *arbeit**s**los*.

### Why it matters

With suffixes you can **grow** your vocabulary from words you already know: from *möglich* you get *Möglichkeit*, from *lesen* you get *lesbar*, from *Freund* you get *freundlich* and *Freundschaft*. In the B1 reading part, recognising *-heit / -keit / -ung* tells you instantly that a word is a feminine noun and what family it belongs to.
`,
  examples: [
    { de: 'Freiheit ist für mich sehr wichtig.', en: 'Freedom is very important to me. (frei + -heit = feminine noun)' },
    { de: 'Es gibt keine andere Möglichkeit.', en: 'There is no other possibility. (möglich + -keit)' },
    { de: 'Jeden Tag mache ich eine Übung.', en: 'Every day I do an exercise. (üben + -ung)' },
    { de: 'Unsere Freundschaft ist mir wichtig.', en: 'Our friendship is important to me. (Freund + -schaft)' },
    { de: 'Das Wetter ist heute sonnig.', en: 'The weather is sunny today. (Sonne + -ig)' },
    { de: 'Diese Pilze sind nicht essbar.', en: 'These mushrooms are not edible. (essen + -bar = can be eaten)' },
    { de: 'Er ist seit einem Jahr arbeitslos.', en: 'He has been unemployed for a year. (Arbeit + -s- + -los = without work)' },
    { de: 'Das ist typisch deutsch.', en: 'That is typically German. (Typ + -isch)' },
  ],
  connections: [
    { topicId: 'a2-30-word-formation-compounds', note: 'Word formation 1 introduced -ung, -er and -in; here the full set of suffixes follows.' },
    { topicId: 'a1-09-gender-articles', note: 'Noun suffixes decide the gender: every -heit, -keit, -ung, -schaft noun is die.' },
    { topicId: 'b1-29-prefixes', note: 'Prefixes go at the front and change meaning; suffixes go at the end and change word type.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: '-bar adjectives are one of the alternatives to the passive with können.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Adjectives built with suffixes take the normal adjective endings: die freundliche Frau.' },
  ],
  edgeCases: [
    '*-heit* vs *-keit*: after **-lich, -ig, -bar, -sam** always *-keit* (*Freundlichkeit*), otherwise *-heit* (*Freiheit*). Never *Freundlichheit*.',
    '*-lich* and *-isch* can give **different meanings** from the same base: *kindlich* (child-like, positive) vs *kindisch* (childish, negative).',
    'Not every verb can take *-ung*. Many use a different noun: *arbeiten* → *die Arbeit* (not *Arbeitung*), *fahren* → *die Fahrt*.',
    'Watch for the inserted **-s-**: *arbeitslos*, *hoffnungslos*, *hilfsbereit*. It is not a plural.',
    'The plural of all *-heit / -keit / -ung / -schaft* nouns is **-en**: *die Übungen*, *die Freundschaften*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex01',
      prompt: 'Which article goes with "Freundschaft"?',
      options: ['die', 'der', 'das'],
      answer: 0,
      explanation: 'All nouns ending in -schaft are feminine: die Freundschaft.',
    },
    {
      type: 'fill',
      id: 'b1-30-suffixes-ex02',
      prompt: 'Das Nomen zu "frei" ist die ___.',
      answer: ['Freiheit'],
      explanation: 'frei is a plain adjective (not -lich / -ig / -bar), so it takes -heit: die Freiheit.',
    },
    {
      type: 'fill',
      id: 'b1-30-suffixes-ex03',
      prompt: 'Das Adjektiv zu "essen" mit der Bedeutung "man kann es essen" ist ___.',
      answer: ['essbar'],
      explanation: '-bar means "can be done": essbar = edible, can be eaten.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex04',
      prompt: 'What does "arbeitslos" mean?',
      options: ['unemployed', 'hard-working', 'employed'],
      answer: 0,
      explanation: '-los = without. arbeitslos = without work, unemployed. Note the inserted -s-.',
    },
    {
      type: 'match',
      id: 'b1-30-suffixes-ex05',
      prompt: 'Match each word with its meaning.',
      pairs: [
        ['Möglichkeit', 'possibility'],
        ['Wohnung', 'flat, apartment'],
        ['Wissenschaft', 'science'],
        ['trinkbar', 'drinkable'],
        ['hoffnungslos', 'hopeless'],
        ['sonnig', 'sunny'],
      ],
      explanation: 'möglich + -keit, wohnen + -ung, Wissen + -schaft, trinken + -bar, Hoffnung + -s- + -los, Sonne + -ig.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex06',
      prompt: 'Which is the correct noun from "freundlich"?',
      options: ['Freundlichkeit', 'Freundlichheit', 'Freundlichung'],
      answer: 0,
      explanation: 'After -lich the suffix is always -keit: Freundlichkeit.',
    },
    {
      type: 'fill',
      id: 'b1-30-suffixes-ex07',
      prompt: 'Jeden Tag mache ich eine ___. (noun from üben)',
      answer: ['Übung'],
      explanation: 'Verb stem + -ung gives a feminine noun for the action: üben → die Übung.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex08',
      prompt: 'Complete: "Er benimmt sich wie ein kleines Kind. Das ist ___."',
      options: ['kindisch', 'kindlich'],
      answer: 0,
      explanation: 'kindisch is negative (childish, immature). kindlich is neutral or positive (child-like).',
    },
    {
      type: 'translate',
      id: 'b1-30-suffixes-ex09',
      prompt: 'Translate: "The entrance is free of charge."',
      answer: ['Der Eintritt ist kostenlos.'],
      hint: 'der Eintritt = entrance (fee); Kosten + -los',
      explanation: '-los = without: kostenlos = free of charge, without costs.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex10',
      prompt: 'What does "verständlich" (from verstehen) mean?',
      options: ['understandable', 'understood', 'understanding (noun)'],
      answer: 0,
      explanation: '-lich on a verb stem gives "can be / having the quality of": verständlich = understandable, clear.',
    },
    {
      type: 'fill',
      id: 'b1-30-suffixes-ex11',
      prompt: 'Diese Idee ist leider nicht ___. (machen + -bar)',
      answer: ['machbar'],
      explanation: 'machbar = feasible, can be done. -bar says the same as kann man machen.',
    },
    {
      type: 'order',
      id: 'b1-30-suffixes-ex12',
      prompt: 'Build the sentence: "Health is the most important thing in life."',
      words: ['ist', 'Gesundheit', 'Die', 'Wichtigste', 'das', 'Leben.', 'im'],
      answer: ['Die Gesundheit ist das Wichtigste im Leben.'],
      explanation: 'gesund + -heit = die Gesundheit (feminine). das Wichtigste is a superlative used as a noun.',
    },
  ],
};

export default topic;
