import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-30-suffixes',
  level: 'B1',
  unit: 10,
  order: 40,
  title: 'Noun suffixes: -heit, -keit, -ung, -schaft',
  germanTerm: 'Suffixe: Nomen',
  tags: ['word formation', 'suffixes', 'nouns', 'gender', 'vocabulary'],
  summary: 'The endings -heit, -keit, -ung and -schaft turn adjectives, verbs and nouns into new nouns. Every one of them is feminine (die) and takes the plural -en.',
  steps: [
    {
      title: 'What a noun suffix does',
      text: `
A **suffix** (*Suffix*) is an ending attached to the **end** of a word. It changes the word type: *frei* (free) → **die Freiheit** (freedom), *wohnen* (to live) → **die Wohnung** (flat).

The best news: these four suffixes also fix the **gender**. Every noun ending in **-heit, -keit, -ung, -schaft** is **die**. You never have to guess the article.
`,
      examples: [
        { de: 'Freiheit ist für mich sehr wichtig.', en: 'Freedom is very important to me. (frei + -heit)' },
        { de: 'Jeden Tag mache ich eine Übung.', en: 'Every day I do an exercise. (üben + -ung)' },
        { de: 'Unsere Freundschaft ist mir wichtig.', en: 'Our friendship is important to me. (Freund + -schaft)' },
      ],
    },
    {
      title: '-heit and -keit: from adjectives',
      text: `
**-heit** and **-keit** turn an **adjective** into a noun for a quality or a state: *gesund* → *die Gesundheit*, *möglich* → *die Möglichkeit*.

Which one? The base adjective decides. After **-lich, -ig, -bar, -sam** use **-keit**: *freundlich* → *Freundlichkeit*, *schwierig* → *Schwierigkeit*. After other adjectives use **-heit**: *frei* → *Freiheit*, *krank* → *Krankheit*, *schön* → *Schönheit*.
`,
      examples: [
        { de: 'Die Gesundheit ist das Wichtigste im Leben.', en: 'Health is the most important thing in life. (gesund + -heit)' },
        { de: 'Es gibt keine andere Möglichkeit.', en: 'There is no other possibility. (möglich + -keit)' },
        { de: 'Ihre Freundlichkeit hat mich sehr gefreut.', en: 'Her friendliness pleased me a lot. (freundlich + -keit)' },
        { de: 'Das ist eine große Schwierigkeit.', en: 'That is a big difficulty. (schwierig + -keit)' },
      ],
    },
    {
      title: '-ung: from verbs',
      text: `
**-ung** turns a **verb** into a noun for the action or its result. Take the verb stem (the infinitive without *-en*) and add *-ung*: *wohnen* → *die Wohnung*, *meinen* → *die Meinung*, *entscheiden* → *die Entscheidung*, *prüfen* → *die Prüfung*.

Not every verb takes *-ung*. Some have their own noun: *arbeiten* → *die Arbeit*, *fahren* → *die Fahrt*.
`,
      examples: [
        { de: 'Wir haben eine Entscheidung getroffen.', en: 'We have made a decision. (entscheiden + -ung)' },
        { de: 'Was ist deine Meinung dazu?', en: 'What is your opinion on that? (meinen + -ung)' },
        { de: 'Die Wohnung hat drei Zimmer.', en: 'The flat has three rooms. (wohnen + -ung)' },
      ],
    },
    {
      title: '-schaft: a group or a relationship',
      text: `
**-schaft** mostly goes on a **noun** and names a group of people or a relationship between them: *der Freund* → *die Freundschaft* (friendship), *der Mann* → *die Mannschaft* (team), *der Nachbar* → *die Nachbarschaft* (neighbourhood). From *wissen* comes *die Wissenschaft* (science).
`,
      examples: [
        { de: 'Unsere Mannschaft hat das Spiel gewonnen.', en: 'Our team won the game. (Mann + -schaft)' },
        { de: 'Die Nachbarschaft ist sehr ruhig.', en: 'The neighbourhood is very quiet. (Nachbar + -schaft)' },
        { de: 'Er arbeitet in der Wissenschaft.', en: 'He works in science. (Wissen + -schaft)' },
      ],
    },
    {
      title: 'Plural -en and small changes',
      text: `
The plural of all these nouns is **-en**: *die Übungen, die Möglichkeiten, die Freundschaften*.

Two small changes to watch: the verb loses its **-en** before *-ung* (*üben* → *Üb-ung*, not *Übenung*), and *-keit* sits directly on the **-ig / -lich** adjective (*Schwierig-keit*).

Other endings that are also always **die**: **-ei** (*die Bäckerei*), **-tion** (*die Information*), **-tät** (*die Universität*), **-ie** (*die Energie*).
`,
      examples: [
        { de: 'Die Übungen sind nicht schwer.', en: 'The exercises are not difficult. (plural -en)' },
        { de: 'Es gibt viele Möglichkeiten.', en: 'There are many possibilities. (plural -en)' },
        { de: 'Die Universität ist sehr alt.', en: 'The university is very old. (-tät: also die)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-30b-adjective-suffixes', note: 'The sibling topic: -lich, -ig, -isch, -bar and -los build adjectives the same way.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Word formation 1 introduced -ung, -er and -in; here the full set of noun suffixes follows.' },
    { topicId: 'a1-09-gender-articles', note: 'Noun suffixes decide the gender: every -heit, -keit, -ung, -schaft noun is die.' },
    { topicId: 'b1-29-prefixes', note: 'Prefixes go at the front and change meaning; suffixes go at the end and change word type.' },
    { topicId: 'a1-10-plural', note: 'These nouns all take the plural -en, one of the regular plural patterns.' },
  ],
  edgeCases: [
    '**-heit** vs **-keit**: after *-lich, -ig, -bar, -sam* always *-keit* (*Freundlichkeit*), otherwise *-heit* (*Freiheit*). Never *Freundlichheit*.',
    'Not every verb can take **-ung**. Many use a different noun: *arbeiten* → *die Arbeit* (not *Arbeitung*), *fahren* → *die Fahrt*.',
    'The plural of all **-heit / -keit / -ung / -schaft** nouns is *-en*: *die Übungen*, *die Freundschaften*.',
    'Nouns from adjectives keep the umlaut of the base: *schön* → **die Schönheit**, *möglich* → **die Möglichkeit**. Do not add or remove one.',
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
      type: 'mc',
      id: 'b1-30-suffixes-ex03',
      prompt: 'Which article goes with "Entscheidung"?',
      options: ['die', 'das', 'der'],
      answer: 0,
      explanation: 'Every noun ending in -ung is feminine: die Entscheidung.',
    },
    {
      type: 'match',
      id: 'b1-30-suffixes-ex04',
      prompt: 'Match each noun with its meaning.',
      pairs: [
        ['Möglichkeit', 'possibility'],
        ['Wohnung', 'flat, apartment'],
        ['Wissenschaft', 'science'],
        ['Freiheit', 'freedom'],
        ['Entscheidung', 'decision'],
      ],
      explanation: 'möglich + -keit, wohnen + -ung, Wissen + -schaft, frei + -heit, entscheiden + -ung. All five are die.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex05',
      prompt: 'Which is the correct noun from "freundlich"?',
      options: ['Freundlichkeit', 'Freundlichheit', 'Freundlichung'],
      answer: 0,
      explanation: 'After -lich the suffix is always -keit: Freundlichkeit.',
    },
    {
      type: 'fill',
      id: 'b1-30-suffixes-ex06',
      prompt: 'Jeden Tag mache ich eine ___. (noun from üben)',
      answer: ['Übung'],
      explanation: 'Verb stem + -ung gives a feminine noun for the action: üben → die Übung. The -en of the infinitive goes.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex07',
      prompt: 'Which is the correct noun from "krank"?',
      options: ['Krankheit', 'Krankkeit', 'Krankung'],
      answer: 0,
      explanation: 'krank is a plain adjective, so it takes -heit: die Krankheit (illness). -keit only follows -lich, -ig, -bar, -sam.',
    },
    {
      type: 'fill',
      id: 'b1-30-suffixes-ex08',
      prompt: 'Wir müssen eine ___ treffen. (noun from entscheiden)',
      answer: ['Entscheidung'],
      explanation: 'entscheiden → die Entscheidung. With treffen it forms the noun–verb combination eine Entscheidung treffen (to make a decision).',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex09',
      prompt: 'What is the plural of "die Möglichkeit"?',
      options: ['die Möglichkeiten', 'die Möglichkeits', 'die Möglichkeite'],
      answer: 0,
      explanation: 'All -heit, -keit, -ung and -schaft nouns take the plural -en: die Möglichkeiten.',
    },
    {
      type: 'mc',
      id: 'b1-30-suffixes-ex10',
      prompt: 'Which verb does NOT form its noun with -ung?',
      options: ['arbeiten', 'wohnen', 'prüfen'],
      answer: 0,
      explanation: 'arbeiten has its own noun, die Arbeit; there is no Arbeitung. wohnen → die Wohnung, prüfen → die Prüfung.',
    },
    {
      type: 'translate',
      id: 'b1-30-suffixes-ex11',
      prompt: 'Translate: "Our team has won."',
      answer: ['Unsere Mannschaft hat gewonnen.'],
      hint: 'Mann + -schaft = die Mannschaft (team); gewinnen, Partizip II gewonnen',
      explanation: 'die Mannschaft is feminine, so the possessive is unsere. The Perfekt of gewinnen is hat gewonnen.',
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
