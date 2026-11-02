import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-30b-nouns-from-verbs',
  level: 'A2',
  unit: 10,
  order: 35,
  title: 'Nouns from verbs: -ung, -er, -in',
  germanTerm: 'Wortbildung: -ung, -er, -in',
  tags: ['nouns', 'word formation', 'suffixes', 'gender', 'vocabulary'],
  summary: 'German makes nouns from verbs with endings: -ung for the action (always die), -er for the person or tool (der), -in for the female person (die, plural -innen).',
  steps: [
    {
      title: '-ung: the action or its result',
      text: `
Take a verb, drop the *-en*, add **-ung**: you get a noun for the action or its result. *wohnen* → **die Wohnung** (the flat, the place where you live), *einladen* → **die Einladung** (the invitation).

Every **-ung** noun is **feminine** (*die*), and the plural is always **-en**: *die Wohnungen*.

| verb | noun |
|---|---|
| üben | **die** Übung (exercise) |
| erklären | **die** Erklärung (explanation) |
| bestellen | **die** Bestellung (order) |
`,
      examples: [
        { de: 'Die Wohnung hat drei Zimmer.', en: 'The flat has three rooms. (wohnen → die Wohnung)' },
        { de: 'Vielen Dank für die Einladung!', en: 'Thank you for the invitation! (einladen → die Einladung)' },
        { de: 'Die Übungen sind leicht.', en: 'The exercises are easy. (plural -en)' },
      ],
    },
    {
      title: '-er: the person or tool that does it',
      text: `
Add **-er** to the verb stem for the person who does it: *lehren* → **der Lehrer**, *fahren* → **der Fahrer**. The same ending also names a **tool** or machine: *drucken* → **der Drucker** (the printer).

These nouns are always **masculine** (*der*) and the plural has **no ending**: *der Lehrer, die Lehrer*. Some stems take an umlaut: *backen* → der B**ä**cker, *verkaufen* → der Verk**ä**ufer.
`,
      examples: [
        { de: 'Der Fahrer wartet vor dem Haus.', en: 'The driver is waiting in front of the house. (fahren → der Fahrer)' },
        { de: 'Der Drucker ist kaputt.', en: 'The printer is broken. (drucken → der Drucker, a tool)' },
        { de: 'Die Lehrer sind nett.', en: 'The teachers are nice. (plural: no ending)' },
        { de: 'Der Bäcker macht Brot.', en: 'The baker makes bread. (backen → Bäcker, with umlaut)' },
      ],
    },
    {
      title: '-in: the female form',
      text: `
Add **-in** to the male form for the female person: *der Lehrer* → **die Lehrerin**, *der Fahrer* → **die Fahrerin**. These are **feminine** (*die*), and the plural is **-innen**: *die Lehrerinnen*.

The same ending works for jobs that are not built with *-er*. Some of these add an umlaut: *der Arzt* → die **Ä**rztin, *der Koch* → die K**ö**chin.
`,
      examples: [
        { de: 'Meine Ärztin ist sehr nett.', en: 'My doctor (female) is very nice. (der Arzt → die Ärztin, with umlaut)' },
        { de: 'Die Lehrerin erklärt die Übung.', en: 'The teacher (female) explains the exercise. (der Lehrer → die Lehrerin)' },
        { de: 'Zwei Köchinnen arbeiten hier.', en: 'Two cooks (female) work here. (plural -innen)' },
      ],
    },
    {
      title: 'The ending tells you the gender',
      text: `
This is the pay-off: you can **guess the gender** of thousands of words without a dictionary.

| ending | gender | plural |
|---|---|---|
| **-ung** | die | -en |
| **-er** (person or tool) | der | no ending |
| **-in** | die | -innen |

*Bestellung*? You have never seen it, but it ends in *-ung*, so it is *die Bestellung*, and it comes from *bestellen*.
`,
      examples: [
        { de: 'Die Bestellung ist da.', en: 'The order has arrived. (-ung → die)' },
        { de: 'Der Verkäufer hilft mir.', en: 'The sales assistant (male) helps me. (-er → der)' },
        { de: 'Die Verkäuferin hilft mir.', en: 'The sales assistant (female) helps me. (-in → die)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-30-word-formation-compounds', note: 'The sibling topic: nouns built by gluing words together, with the gender from the last part.' },
    { topicId: 'a1-09-gender-articles', note: 'The ending decides the gender: -ung is always die, -er for people is always der.' },
    { topicId: 'a1-10-plural', note: '-ung nouns take -en in the plural, -in nouns take -nen, -er nouns take no ending.' },
    { topicId: 'b1-30-suffixes', note: 'At B1 more noun endings (-heit, -keit, -schaft) follow the same idea as -ung and -er.' },
  ],
  edgeCases: [
    '**-er** makes a person or tool, not an action: *der Drucker* is the printer (machine). The action noun is *das Drucken* (the capitalised infinitive) or an **-ung** noun.',
    'Some professions are not formed with -er: *der Arzt / die **Ärztin***, *der Koch / die **Köchin***. The -in ending still works for the female form.',
    'The umlaut in **-in** words follows the male form if it already has one, and some add it: *Bäcker → Bäckerin* (no change), *Arzt → Ärztin* (added).',
    'With a separable verb the prefix stays in the noun: *einladen → die **Einladung***, *anmelden → die **Anmeldung***.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-30b-nouns-from-verbs-ex01',
      prompt: 'What is the gender of "Bestellung" (from bestellen)?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanation: 'Every noun ending in -ung is feminine: die Bestellung.',
    },
    {
      type: 'fill',
      id: 'a2-30b-nouns-from-verbs-ex02',
      prompt: 'wohnen → die ___ (noun with -ung)',
      answer: ['Wohnung'],
      explanation: 'Verb stem wohn- + -ung = die Wohnung. All -ung nouns are feminine.',
    },
    {
      type: 'fill',
      id: 'a2-30b-nouns-from-verbs-ex03',
      prompt: 'fahren → der ___ (the person who drives)',
      answer: ['Fahrer'],
      explanation: 'Verb stem fahr- + -er = der Fahrer. People formed with -er are masculine.',
    },
    {
      type: 'mc',
      id: 'a2-30b-nouns-from-verbs-ex04',
      prompt: 'What is the plural of "die Erklärung"?',
      options: ['die Erklärunge', 'die Erklärungen', 'die Erklärungs'],
      answer: 1,
      explanation: 'All -ung nouns form the plural with -en: die Erklärungen.',
    },
    {
      type: 'match',
      id: 'a2-30b-nouns-from-verbs-ex05',
      prompt: 'Match the verb with the noun made from it.',
      pairs: [
        ['üben', 'die Übung'],
        ['lehren', 'der Lehrer'],
        ['kochen', 'die Köchin'],
        ['backen', 'der Bäcker'],
        ['bestellen', 'die Bestellung'],
      ],
      explanation: '-ung gives the action (Übung, Bestellung), -er the person (Lehrer, Bäcker with umlaut), -in the female person (Köchin from der Koch).',
    },
    {
      type: 'fill',
      id: 'a2-30b-nouns-from-verbs-ex06',
      prompt: 'der Arzt → die ___ (female doctor)',
      answer: ['Ärztin'],
      explanation: 'Add -in for the female form. Arzt takes an umlaut: Ärztin.',
    },
    {
      type: 'mc',
      id: 'a2-30b-nouns-from-verbs-ex07',
      prompt: 'What is the plural of "der Fahrer"?',
      options: ['die Fahrer', 'die Fahrers', 'die Fahreren'],
      answer: 0,
      explanation: 'Nouns in -er have no plural ending: der Fahrer, die Fahrer. Only the article shows the plural.',
    },
    {
      type: 'fill',
      id: 'a2-30b-nouns-from-verbs-ex08',
      prompt: 'Eine Lehrerin, zwei ___. (plural)',
      answer: ['Lehrerinnen'],
      explanation: 'The plural of -in is -innen, with a double n: die Lehrerinnen.',
    },
    {
      type: 'mc',
      id: 'a2-30b-nouns-from-verbs-ex09',
      prompt: 'Which word is a tool or machine, not a person?',
      options: ['der Lehrer', 'der Drucker', 'der Bäcker'],
      answer: 1,
      explanation: 'der Drucker is the printer (machine) from drucken. Lehrer and Bäcker are people.',
    },
    {
      type: 'fill',
      id: 'a2-30b-nouns-from-verbs-ex10',
      prompt: 'einladen → die ___ (invitation)',
      answer: ['Einladung'],
      explanation: 'The separable prefix stays: einlad- + -ung = die Einladung.',
    },
    {
      type: 'translate',
      id: 'a2-30b-nouns-from-verbs-ex11',
      prompt: 'Translate: "The teacher (female) is explaining the exercise."',
      answer: ['Die Lehrerin erklärt die Übung.', 'Die Lehrerin erklärt die Aufgabe.'],
      hint: 'lehren → der Lehrer → die Lehrerin; üben → die Übung',
      explanation: 'Lehrer + -in = die Lehrerin. üben + -ung = die Übung (feminine, Accusative die).',
    },
  ],
};

export default topic;
