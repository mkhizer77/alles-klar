import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-09-gender-articles',
  level: 'A1',
  unit: 2,
  order: 10,
  title: 'Noun gender: der, die, das',
  germanTerm: 'Genus, bestimmter Artikel',
  tags: ['nouns', 'gender', 'articles', 'der die das'],
  summary: 'Every German noun has one of three genders, shown by its definite article der, die or das; the gender is mostly arbitrary, but endings and word groups give useful clues.',
  steps: [
    {
      title: 'Every noun has a gender',
      text: `
In German every noun belongs to one of three groups. These groups are called **genders** (*Genus*). You see the gender in the word for *the*, the **definite article** (*bestimmter Artikel*).

| gender | article | example |
|---|---|---|
| masculine | **der** | der Tisch (the table) |
| feminine | **die** | die Lampe (the lamp) |
| neuter | **das** | das Bett (the bed) |
`,
      examples: [
        { de: 'Der Tisch ist groß.', en: 'The table is big. (masculine)' },
        { de: 'Die Lampe ist neu.', en: 'The lamp is new. (feminine)' },
        { de: 'Das Bett ist bequem.', en: 'The bed is comfortable. (neuter)' },
      ],
    },
    {
      title: 'Learn the article with the noun',
      text: `
For people the gender usually matches: *der Vater* (father), *die Mutter* (mother). For things there is no logic to find. A table is masculine, a lamp is feminine, a bed is neuter. That is simply a property of the word.

So learn the article **together with the noun**, as one unit. Never learn *Tisch*; learn **der Tisch**. Say the article out loud every time you repeat a word.
`,
      examples: [
        { de: 'Der Vater ist müde.', en: 'The father is tired. (a man: der)' },
        { de: 'Die Mutter arbeitet.', en: 'The mother is working. (a woman: die)' },
        { de: 'Der Stuhl ist alt.', en: 'The chair is old. (a chair is masculine: no reason, just learn it)' },
      ],
    },
    {
      title: 'The plural is always die',
      text: `
In the **plural** the three genders disappear. Every noun takes **die**, whatever its gender: *die Tische, die Lampen, die Betten*.

So *die* has two jobs: feminine singular and every plural.
`,
      examples: [
        { de: 'Die Tische sind groß.', en: 'The tables are big. (der Tisch → die Tische)' },
        { de: 'Die Kinder spielen.', en: 'The children are playing. (das Kind → die Kinder)' },
        { de: 'Die Lampen sind an.', en: 'The lamps are on. (die Lampe → die Lampen)' },
      ],
    },
    {
      title: 'Clues from the ending',
      text: `
There is no complete rule, but some endings are very reliable.

| ending | gender | example |
|---|---|---|
| -ung, -heit, -keit, -ion, -tät | **die** (almost always) | die Zeitung |
| -e (two syllables) | **die** (about 90 %) | die Lampe |
| -er (people, tools) | **der** | der Lehrer |
| -chen, -lein | **das** (always) | das Mädchen |
| -ment, -um | **das** | das Dokument |
| Ge- at the start | **das** (mostly) | das Gebäude |
`,
      examples: [
        { de: 'Die Zeitung liegt hier.', en: 'The newspaper is lying here. (-ung → die)' },
        { de: 'Das Mädchen heißt Lena.', en: 'The girl is called Lena. (-chen → das, even for a girl)' },
        { de: 'Der Lehrer ist nett.', en: 'The teacher is nice. (-er for a person → der)' },
        { de: 'Die Universität ist alt.', en: 'The university is old. (-tät → die)' },
      ],
    },
    {
      title: 'Clues from meaning',
      text: `
Some groups of words share one gender.

| group | gender | examples |
|---|---|---|
| days, months, seasons, weather | **der** | der Montag, der Mai, der Regen |
| alcoholic drinks (except Bier) | **der** | der Wein |
| colours, languages, verbs used as nouns | **das** | das Blau, das Essen |
| metals, letters of the alphabet | **das** | das Gold, das A |

Female job titles add **-in** and are always **die**: *der Arzt → die Ärztin*.
`,
      examples: [
        { de: 'Der Montag ist ein Arbeitstag.', en: 'Monday is a working day. (days are der)' },
        { de: 'Der Winter ist kalt.', en: 'The winter is cold. (seasons are der)' },
        { de: 'Die Ärztin heißt Weber.', en: 'The (female) doctor is called Weber. (-in → die)' },
      ],
    },
    {
      title: 'When you must guess',
      text: `
Later forms are built on the gender. The pronoun for a thing follows it: **der** Tisch → **er**, **die** Lampe → **sie**, **das** Bett → **es**. A wrong gender makes every later form wrong too, so always say the article with the noun.

When you really do not know, guess **die**: almost half of all German nouns are feminine, especially the long abstract ones.
`,
      examples: [
        { de: 'Der Tisch ist neu. Er ist groß.', en: 'The table is new. It is big. (der → er)' },
        { de: 'Die Lampe ist neu. Sie ist schön.', en: 'The lamp is new. It is pretty. (die → sie)' },
        { de: 'Die Freundschaft ist wichtig.', en: 'Friendship is important. (long abstract noun: die)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-10-plural', note: 'In the plural all nouns take die; the plural endings are a separate topic.' },
    { topicId: 'a1-11-nominative', note: 'der / die / das are the Nominative forms; the other cases change them.' },
    { topicId: 'a1-12-indefinite-articles', note: 'ein / eine / ein follow the same three genders.' },
    { topicId: 'a1-03-personal-pronouns', note: 'The pronoun for a thing depends on its gender: der → er, die → sie, das → es.' },
    { topicId: 'a1-20-accusative', note: 'In the Accusative only the masculine article changes: der → den.' },
  ],
  edgeCases: [
    '**das Mädchen** (girl) and **das Fräulein** are neuter because of the ending *-chen / -lein*, although they mean female people. The ending wins.',
    '**die** has two jobs: feminine singular and every plural. *Die Frau* (one woman) and *die Männer* (several men) both take *die*.',
    '**-e** is a strong hint for *die*, but not a rule: *der Name, der Käse, der Junge, das Auge, das Ende* are exceptions.',
    '**-er** is often *der* for people and tools, but *die Mutter, die Butter, das Fenster, das Wasser* break it.',
    'Female job titles add **-in** and are always *die*: *der Arzt → die Ärztin*, *der Student → die Studentin*.',
    'Some words have different genders with different meanings: *der See* (lake) vs *die See* (sea), *der Band* (volume) vs *die Band* (music band).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-09-gender-articles-ex01',
      prompt: 'Which article goes with "Zeitung" (newspaper)?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanation: 'Nouns ending in -ung are always feminine: die Zeitung.',
    },
    {
      type: 'mc',
      id: 'a1-09-gender-articles-ex02',
      prompt: 'Which article goes with "Mädchen" (girl)?',
      options: ['der', 'die', 'das'],
      answer: 2,
      explanation: 'The ending -chen makes a noun neuter, even when it means a female person: das Mädchen.',
    },
    {
      type: 'match',
      id: 'a1-09-gender-articles-ex03',
      prompt: 'Match each noun with its article.',
      pairs: [
        ['Tisch', 'der'],
        ['Lampe', 'die'],
        ['Bett', 'das'],
      ],
      explanation: 'These three have to be memorised with the noun. Lampe follows the -e → die pattern.',
    },
    {
      type: 'fill',
      id: 'a1-09-gender-articles-ex04',
      prompt: '___ Universität ist alt. (the)',
      answer: ['Die'],
      explanation: 'Nouns in -tät are feminine: die Universität.',
    },
    {
      type: 'fill',
      id: 'a1-09-gender-articles-ex05',
      prompt: '___ Montag ist mein erster Arbeitstag. (the)',
      answer: ['Der'],
      explanation: 'Days of the week, months and seasons are masculine: der Montag, der Mai, der Sommer.',
    },
    {
      type: 'match',
      id: 'a1-09-gender-articles-ex06',
      prompt: 'Match the ending with the gender it usually signals.',
      pairs: [
        ['-ung', 'die'],
        ['-chen', 'das'],
        ['-er (jobs)', 'der'],
        ['-ion', 'die (foreign words)'],
      ],
      explanation: '-ung and -ion → die; -chen → das; -er for people and tools → der.',
    },
    {
      type: 'mc',
      id: 'a1-09-gender-articles-ex07',
      prompt: 'Which article do ALL nouns take in the plural?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanation: 'In the plural the gender difference disappears: die Tische, die Lampen, die Betten.',
    },
    {
      type: 'fill',
      id: 'a1-09-gender-articles-ex08',
      prompt: 'Der Arzt heißt Müller, ___ Ärztin heißt Weber. (the)',
      answer: ['die'],
      explanation: 'The female form of a job ends in -in and is always feminine: die Ärztin.',
    },
    {
      type: 'mc',
      id: 'a1-09-gender-articles-ex09',
      prompt: 'Which noun is an exception to the "-e → die" pattern?',
      options: ['die Blume', 'der Name', 'die Küche'],
      answer: 1,
      explanation: 'der Name is masculine despite ending in -e. Other common exceptions: der Käse, der Junge, das Auge.',
    },
    {
      type: 'fill',
      id: 'a1-09-gender-articles-ex10',
      prompt: '___ Brötchen ist frisch. (the)',
      answer: ['Das'],
      explanation: 'Brötchen (bread roll) ends in -chen, so it is neuter: das Brötchen.',
    },
    {
      type: 'mc',
      id: 'a1-09-gender-articles-ex11',
      prompt: 'You meet a new long noun ending in -heit and do not know it. Best guess for the article?',
      options: ['der', 'die', 'das'],
      answer: 1,
      explanation: '-heit (like -keit, -ung, -schaft) is always feminine: die Freiheit, die Gesundheit.',
    },
    {
      type: 'translate',
      id: 'a1-09-gender-articles-ex12',
      prompt: 'Translate: "The lamp is new."',
      answer: ['Die Lampe ist neu.'],
      hint: 'die Lampe = lamp, neu = new',
      explanation: 'Lampe ends in -e and is feminine: Die Lampe. Verb second (ist), then the adjective.',
    },
  ],
};

export default topic;
