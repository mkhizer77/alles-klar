import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-09-gender-articles',
  level: 'A1',
  unit: 2,
  order: 9,
  title: 'Noun gender: der, die, das',
  germanTerm: 'Genus, bestimmter Artikel',
  tags: ['nouns', 'gender', 'articles', 'der die das'],
  summary: 'Every German noun has one of three genders, shown by its definite article der, die or das; the gender is mostly arbitrary, but endings and word groups give useful clues.',
  explanation: `
### Every noun has a gender

In German every noun belongs to one of three groups, called **genders** (*Genus*): **masculine**, **feminine** or **neuter**. The gender is shown by the word for *the*, the **definite article** (*bestimmter Artikel*):

| gender | article | example |
|---|---|---|
| masculine (*maskulin*) | **der** | der Tisch (the table), der Mann (the man) |
| feminine (*feminin*) | **die** | die Lampe (the lamp), die Frau (the woman) |
| neuter (*neutral*) | **das** | das Bett (the bed), das Kind (the child) |

In the **plural** every noun takes **die**, whatever its gender: *die Tische, die Lampen, die Kinder*.

### Gender is grammar, not biology

For people the gender usually matches: *der Vater* (father), *die Mutter* (mother). For things it is simply a property of the word: a table is masculine, a lamp feminine, a bed neuter. There is no logic to find; you learn the article **together with the noun** as one unit. Never learn *Tisch*; learn **der Tisch**.

A helpful trick: colour-code your vocabulary (for example blue for der, red for die, green for das) or always say the article out loud when you repeat a word.

### Clues from the ending

Although there is no complete rule, some endings are very reliable. These cover a large share of the nouns you will meet:

| ending | gender | examples |
|---|---|---|
| **-ung, -heit, -keit, -schaft, -ion, -tät, -ie, -ik** | **die** (almost 100 %) | die Zeitung, die Freiheit, die Nation, die Universität, die Musik |
| **-e** (two-syllable nouns) | **die** (about 90 %) | die Lampe, die Küche, die Blume |
| **-er** (people, jobs, tools) | **der** | der Lehrer, der Computer, der Fahrer |
| **-ig, -ling, -ismus** | **der** | der Honig, der Frühling, der Tourismus |
| **-chen, -lein** | **das** (always) | das Mädchen, das Brötchen, das Fräulein |
| **-ment, -um, -ma** | **das** | das Dokument, das Zentrum, das Thema |
| **Ge-** at the start | **das** (mostly) | das Gebäude, das Gemüse, das Gespräch |

### Clues from meaning

| group | gender | examples |
|---|---|---|
| days, months, seasons, weather | **der** | der Montag, der Mai, der Winter, der Regen |
| alcoholic drinks (except Bier) | **der** | der Wein, der Schnaps |
| motorbikes, ships, aeroplane names | **die** | die BMW, die Titanic |
| colours, languages, verbs used as nouns | **das** | das Blau, das Deutsch, das Essen |
| metals, letters of the alphabet | **das** | das Gold, das A |

### Why it matters

The article is not decoration. It changes in the other cases (*der → den → dem*), and the pronoun that replaces a noun depends on it (*der Tisch → er*). Adjective endings also follow it. If you learn the gender wrong, every later form built on it is wrong too. So the small effort of always saying *der Tisch* instead of *Tisch* saves a great deal of trouble later.

When you are not sure, **die** is the statistically best guess: almost half of German nouns are feminine, especially the long abstract ones.
`,
  examples: [
    { de: 'Der Tisch ist groß.', en: 'The table is big. (masculine)' },
    { de: 'Die Lampe ist neu.', en: 'The lamp is new. (feminine, ends in -e)' },
    { de: 'Das Bett ist bequem.', en: 'The bed is comfortable. (neuter)' },
    { de: 'Die Zeitung liegt hier.', en: 'The newspaper is lying here. (-ung → die)' },
    { de: 'Das Mädchen heißt Lena.', en: 'The girl is called Lena. (-chen → das, even for a girl)' },
    { de: 'Der Montag ist ein Arbeitstag.', en: 'Monday is a working day. (days are der)' },
    { de: 'Die Kinder spielen.', en: 'The children are playing. (plural is always die)' },
    { de: 'Der Lehrer und die Lehrerin sind nett.', en: 'The (male) teacher and the (female) teacher are nice. (-in makes the female form, always die)' },
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
