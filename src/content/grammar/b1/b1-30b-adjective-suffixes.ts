import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-30b-adjective-suffixes',
  level: 'B1',
  unit: 10,
  order: 41,
  title: 'Adjective suffixes: -lich, -ig, -isch, -bar, -los',
  germanTerm: 'Suffixe: Adjektive',
  tags: ['word formation', 'suffixes', 'adjectives', 'vocabulary'],
  summary: 'The endings -lich, -ig, -isch, -bar and -los turn nouns and verbs into adjectives with a predictable meaning: -bar means "can be done", -los means "without".',
  steps: [
    {
      title: 'What an adjective suffix does',
      text: `
An adjective suffix turns a **noun** or a **verb** into an adjective: *der Freund* → **freundlich** (friendly), *essen* → **essbar** (edible). Each ending adds its own meaning, so you can guess new words and build your own.

These adjectives behave like any other: they take the normal adjective endings (*die freundliche Frau*).
`,
      examples: [
        { de: 'Die Verkäuferin war sehr freundlich.', en: 'The shop assistant was very friendly. (Freund + -lich)' },
        { de: 'Diese Pilze sind nicht essbar.', en: 'These mushrooms are not edible. (essen + -bar)' },
        { de: 'Das Wetter ist heute sonnig.', en: 'The weather is sunny today. (Sonne + -ig)' },
      ],
    },
    {
      title: '-lich and -ig',
      text: `
**-lich** means "having the quality of", often English "-ly": *täglich* (daily), *gefährlich* (dangerous), *verständlich* (understandable).

**-ig** means "having, full of", often English "-y": *sonnig* (sunny), *hungrig* (hungry), *ruhig* (quiet), *wichtig* (important).

An **umlaut** often appears: *Kraft* → *kräftig*, *Hunger* → *hungrig*, *Mann* → *männlich*.
`,
      examples: [
        { de: 'Ich gehe täglich joggen.', en: 'I go jogging daily. (Tag + -lich)' },
        { de: 'Die Straße ist bei Eis sehr gefährlich.', en: 'The road is very dangerous when icy. (Gefahr + -lich)' },
        { de: 'Nach dem Sport bin ich immer hungrig.', en: 'After sport I am always hungry. (Hunger + -ig, with umlaut)' },
        { de: 'Der Hund ist sehr kräftig.', en: 'The dog is very strong. (Kraft + -ig, with umlaut)' },
      ],
    },
    {
      title: '-isch: belonging to, in the manner of',
      text: `
**-isch** means "belonging to" or "in the manner of": *typisch* (typical), *praktisch* (practical). It also builds **nationalities and languages**: *europäisch, italienisch, englisch*.

Watch one pair: **kindlich** (child-like, innocent, positive) vs **kindisch** (childish, immature, negative). The same base, a different ending, a different tone.
`,
      examples: [
        { de: 'Das ist typisch deutsch.', en: 'That is typically German. (Typ + -isch)' },
        { de: 'Ich liebe italienisches Essen.', en: 'I love Italian food. (Italien + -isch)' },
        { de: 'Er benimmt sich manchmal kindisch.', en: 'He sometimes behaves childishly. (negative)' },
      ],
    },
    {
      title: '-bar: can be done',
      text: `
**-bar** goes on a **verb** stem and means "can be done", like English "-able": *lesen* → *lesbar* (readable), *machen* → *machbar* (doable), *trinken* → *trinkbar*.

It is a short way to say *kann man* + verb: *Das Wasser ist **trinkbar*** = *Das Wasser kann man trinken*.
`,
      examples: [
        { de: 'Das Wasser ist hier nicht trinkbar.', en: 'The water here is not drinkable. (= kann man nicht trinken)' },
        { de: 'Dieser Plan ist leider nicht machbar.', en: 'Unfortunately this plan is not feasible. (machen + -bar)' },
        { de: 'Seine Schrift ist kaum lesbar.', en: 'His handwriting is hardly readable. (lesen + -bar)' },
      ],
    },
    {
      title: '-los: without',
      text: `
**-los** goes on a **noun** and means "without", like English "-less": *die Arbeit* → *arbeitslos* (unemployed), *die Kosten* → *kostenlos* (free of charge), *die Hoffnung* → *hoffnungslos* (hopeless).

An **-s-** is often inserted between noun and ending: *arbeit**s**los*, *hoffnung**s**los*. It is not a plural.

You may also see **-voll** (full of: *wertvoll*) and **-reich** (rich in: *erfolgreich*); they work the same way.
`,
      examples: [
        { de: 'Er ist seit einem Jahr arbeitslos.', en: 'He has been unemployed for a year. (Arbeit + -s- + -los)' },
        { de: 'Der Eintritt ist heute kostenlos.', en: 'Entrance is free of charge today. (Kosten + -los)' },
        { de: 'Die Lage ist nicht hoffnungslos.', en: 'The situation is not hopeless. (Hoffnung + -s- + -los)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-30-suffixes', note: 'The sibling topic: -heit, -keit, -ung and -schaft build feminine nouns the same way.' },
    { topicId: 'b1-29-prefixes', note: 'Prefixes change the meaning at the front; suffixes change the word type at the end.' },
    { topicId: 'b1-08b-passive-alternatives', note: '-bar adjectives are one of the ways to say "can be done" without the passive.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Adjectives built with suffixes take the normal adjective endings: die freundliche Frau.' },
  ],
  edgeCases: [
    '**-lich** and **-isch** can give different meanings from the same base: *kindlich* (child-like, positive) vs *kindisch* (childish, negative).',
    'Watch for the inserted **-s-**: *arbeitslos*, *hoffnungslos*, *hilfsbereit*. It is not a plural.',
    '**-bar** only works on verbs: *essbar, lesbar, machbar*. For "without" use *-los* on a noun: *kostenlos*, not *kostenbar*.',
    'The umlaut comes with the suffix: *Kraft* → **kräftig**, *Mann* → **männlich**, but *Sonne* → **sonnig** (no umlaut on o here).',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-30b-adjective-suffixes-ex01',
      prompt: 'Das Adjektiv zu "essen" mit der Bedeutung "man kann es essen" ist ___.',
      answer: ['essbar'],
      explanation: '-bar means "can be done": essbar = edible, can be eaten.',
    },
    {
      type: 'mc',
      id: 'b1-30b-adjective-suffixes-ex02',
      prompt: 'What does "arbeitslos" mean?',
      options: ['unemployed', 'hard-working', 'employed'],
      answer: 0,
      explanation: '-los = without. arbeitslos = without work, unemployed. Note the inserted -s-.',
    },
    {
      type: 'fill',
      id: 'b1-30b-adjective-suffixes-ex03',
      prompt: 'Heute scheint die Sonne. Es ist ___. (Sonne + -ig)',
      answer: ['sonnig'],
      explanation: '-ig means "having, full of": Sonne → sonnig (sunny). The final -e of Sonne drops.',
    },
    {
      type: 'match',
      id: 'b1-30b-adjective-suffixes-ex04',
      prompt: 'Match each adjective with its meaning.',
      pairs: [
        ['trinkbar', 'drinkable'],
        ['hoffnungslos', 'hopeless'],
        ['täglich', 'daily'],
        ['typisch', 'typical'],
        ['hungrig', 'hungry'],
      ],
      explanation: 'trinken + -bar, Hoffnung + -s- + -los, Tag + -lich, Typ + -isch, Hunger + -ig (with umlaut).',
    },
    {
      type: 'mc',
      id: 'b1-30b-adjective-suffixes-ex05',
      prompt: 'Which adjective means "daily"?',
      options: ['täglich', 'tagbar', 'taglos'],
      answer: 0,
      explanation: '-lich gives "having the quality of": Tag → täglich (daily), with an umlaut. -bar and -los do not fit the meaning.',
    },
    {
      type: 'mc',
      id: 'b1-30b-adjective-suffixes-ex06',
      prompt: 'Complete: "Er benimmt sich wie ein kleines Kind. Das ist ___."',
      options: ['kindisch', 'kindlich'],
      answer: 0,
      explanation: 'kindisch is negative (childish, immature). kindlich is neutral or positive (child-like).',
    },
    {
      type: 'fill',
      id: 'b1-30b-adjective-suffixes-ex07',
      prompt: 'Er hat großen Hunger. Er ist sehr ___. (Hunger + -ig)',
      answer: ['hungrig'],
      explanation: 'Hunger → hungrig: the -e- of the base drops and -ig is added. hungrig = hungry.',
    },
    {
      type: 'mc',
      id: 'b1-30b-adjective-suffixes-ex08',
      prompt: 'What does "verständlich" (from verstehen) mean?',
      options: ['understandable', 'understood', 'understanding (noun)'],
      answer: 0,
      explanation: '-lich on a verb stem gives "can be / having the quality of": verständlich = understandable, clear.',
    },
    {
      type: 'fill',
      id: 'b1-30b-adjective-suffixes-ex09',
      prompt: 'Diese Idee ist leider nicht ___. (machen + -bar)',
      answer: ['machbar'],
      explanation: 'machbar = feasible, can be done. -bar says the same as kann man machen.',
    },
    {
      type: 'mc',
      id: 'b1-30b-adjective-suffixes-ex10',
      prompt: 'Which is the correct adjective for "Italian" (from Italien)?',
      options: ['italienisch', 'italienlich', 'italienbar'],
      answer: 0,
      explanation: 'Nationalities and languages are built with -isch: italienisch, englisch, europäisch.',
    },
    {
      type: 'order',
      id: 'b1-30b-adjective-suffixes-ex11',
      prompt: 'Build the sentence: "The water here is not drinkable."',
      words: ['ist', 'Wasser', 'Das', 'nicht', 'hier', 'trinkbar.'],
      answer: ['Das Wasser ist hier nicht trinkbar.', 'Das Wasser hier ist nicht trinkbar.'],
      explanation: 'trinken + -bar = trinkbar (can be drunk). The adjective after sein has no ending and stands at the end.',
    },
    {
      type: 'translate',
      id: 'b1-30b-adjective-suffixes-ex12',
      prompt: 'Translate: "The entrance is free of charge."',
      answer: ['Der Eintritt ist kostenlos.'],
      hint: 'der Eintritt = entrance (fee); Kosten + -los',
      explanation: '-los = without: kostenlos = free of charge, without costs.',
    },
  ],
};

export default topic;
