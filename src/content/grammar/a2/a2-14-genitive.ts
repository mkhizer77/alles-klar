import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-14-genitive',
  level: 'A2',
  unit: 5,
  order: 15,
  title: 'The Genitive case and possession with von',
  germanTerm: 'Genitiv',
  tags: ['cases', 'Genitive', 'possession', 'articles', 'nouns'],
  summary: 'The Genitive is the "of / belonging to" case (das Auto des Vaters, Annas Buch): masculine and neuter take des + -s, feminine and plural take der, and in speech people say von + Dative instead.',
  steps: [
    {
      title: 'What the Genitive is for',
      text: `
The **Genitive** (*Genitiv*, the "of" case) is the fourth and last German case. It answers **wessen?** (whose?) and shows that one thing belongs to another: *das Auto **des Vaters*** = the father's car.

English uses *'s* or *of*. In German the Genitive phrase comes **after** the noun it belongs to: *das Auto* first, then *des Vaters*.
`,
      examples: [
        { de: 'Das ist das Auto des Vaters.', en: "That is the father's car. (des Vaters = of the father)" },
        { de: 'Der Name der Straße ist lang.', en: 'The name of the street is long.' },
        { de: 'Wessen Jacke ist das?', en: 'Whose jacket is that? (wessen asks for the Genitive)' },
      ],
    },
    {
      title: 'Masculine and neuter: des and -s',
      text: `
For masculine and neuter nouns the article is **des**, and the noun itself gets an **-s**: *des Vaters, des Autos*.

Short nouns of one syllable, and nouns that end in *-s*, get **-es** so you can say them: *des Mannes, des Kindes, des Hauses*.

| | masculine | neuter |
|---|---|---|
| Genitive | **des** Vater**s** | **des** Haus**es** |
`,
      examples: [
        { de: 'Die Farbe des Autos gefällt mir.', en: 'I like the colour of the car. (Auto + s)' },
        { de: 'Das Haus des Mannes ist alt.', en: "The man's house is old. (one syllable: -es)" },
        { de: 'Die Tür des Hauses ist grün.', en: 'The door of the house is green. (ends in -s: -es)' },
      ],
    },
    {
      title: 'Feminine and plural: der, no change',
      text: `
For feminine and plural nouns the article is **der**, and the noun does **not** change: *der Frau, der Kinder*.

Careful: feminine Genitive *der* looks exactly like the Dative (*Ich helfe der Frau*). Ask *wessen?* If the answer is "whose", it is the Genitive.

| | feminine | plural |
|---|---|---|
| Genitive | **der** Frau | **der** Kinder |
`,
      examples: [
        { de: 'Der Name der Frau ist Anna.', en: "The woman's name is Anna. (feminine: der)" },
        { de: 'Das Spielzeug der Kinder liegt überall.', en: "The children's toys are everywhere. (plural: der)" },
        { de: 'Die Tasche der Lehrerin ist neu.', en: "The teacher's bag is new." },
      ],
    },
    {
      title: 'mein and ein take the same endings',
      text: `
*ein* and the possessive articles (*mein, dein, sein …*) take the **same endings** as *des / der*: **meines** Vaters, **meiner** Mutter, **eines** Kindes. The noun still adds -s in the masculine and neuter.

The Genitive phrase always comes **after** the noun: *das Haus meiner Eltern*, never *meiner Eltern Haus*.
`,
      examples: [
        { de: 'Das ist das Haus meiner Eltern.', en: "That is my parents' house. (meiner: plural)" },
        { de: 'Die Farbe meines Autos ist rot.', en: 'The colour of my car is red. (meines + s)' },
        { de: 'Das Zimmer eines Kindes ist oft unordentlich.', en: "A child's room is often messy. (eines Kindes)" },
      ],
    },
    {
      title: 'Names: add -s, no apostrophe',
      text: `
Names simply add **-s**, with **no apostrophe**: *Peters Auto, Annas Buch, Frau Müllers Büro*. The name goes **before** the noun, like in English.

Only a name that already ends in *-s* gets an apostrophe instead of a second s: *Klaus' Auto*.
`,
      examples: [
        { de: 'Annas Buch liegt auf dem Tisch.', en: "Anna's book is on the table. (no apostrophe)" },
        { de: 'Das ist Frau Müllers Büro.', en: "That is Ms Müller's office." },
        { de: 'Peters Schwester wohnt in Köln.', en: "Peter's sister lives in Cologne." },
      ],
    },
    {
      title: 'In speech: von + Dative',
      text: `
In conversation most people avoid the Genitive and say **von + Dative** instead: *das Auto von meinem Vater*. Both are correct. Use *von* when you speak and the Genitive when you write.

You still need to **recognise** the Genitive: every text, sign and news report uses it.
`,
      examples: [
        { de: 'Das Auto von meinem Vater ist neu.', en: "My father's car is new. (spoken: von + Dative)" },
        { de: 'Das Auto meines Vaters ist neu.', en: "My father's car is new. (written: Genitive)" },
        { de: 'Der Hund von den Nachbarn bellt.', en: "The neighbours' dog is barking. (von den: Dative plural)" },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-24-dative', note: 'The Dative is the case after von in the spoken alternative.' },
    { topicId: 'a1-21-possessive-articles', note: 'mein, dein, sein … are the everyday way to show possession; the Genitive is the formal one.' },
    { topicId: 'a1-09-gender-articles', note: 'You need the gender to choose des (masculine / neuter) or der (feminine / plural).' },
    { topicId: 'a2-15-genitive-prepositions', note: 'wegen, trotz, während and statt require the Genitive.' },
    { topicId: 'b1-13-n-declension', note: 'You may see des Jungen, des Kollegen: a few masculine nouns take -n instead of -s. That is B1 material.' },
  ],
  edgeCases: [
    'Only **masculine and neuter** nouns take -s / -es. Feminine and plural nouns never change: *der Frau, der Kinder*.',
    'Names take **-s without an apostrophe**: *Peters Auto*, not *Peter\'s Auto*. Only *Klaus\' Auto* (name ends in -s) uses one.',
    'The Genitive phrase comes **after** the noun: *das Haus meiner Eltern*, not *meiner Eltern Haus*. Only names go in front: *Annas Haus*.',
    'In speech, **von + Dative** is the norm: *das Auto von meinem Bruder*. Do not mix the two: *von meines Bruders* ✗.',
    'Feminine Genitive **der** looks like the Dative: *der Name der Frau* (Genitive) vs *Ich helfe der Frau* (Dative). Ask *wessen?* to check.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-14-genitive-ex01',
      prompt: 'Complete: "Das ist das Auto ___ Vaters."',
      options: ['des', 'dem', 'der'],
      answer: 0,
      explanation: 'Vater is masculine. Genitive masculine = des, and the noun takes -s: des Vaters.',
    },
    {
      type: 'fill',
      id: 'a2-14-genitive-ex02',
      prompt: 'Der Name ___ Frau ist Anna. (the)',
      answer: ['der'],
      explanation: 'Feminine Genitive is der. The noun Frau does not change.',
    },
    {
      type: 'fill',
      id: 'a2-14-genitive-ex03',
      prompt: 'Das Haus des ___ ist alt. (Mann)',
      answer: ['Mannes'],
      explanation: 'Mann is a one-syllable masculine noun, so it takes -es in the Genitive: des Mannes.',
    },
    {
      type: 'match',
      id: 'a2-14-genitive-ex04',
      prompt: 'Match each Nominative with its Genitive form.',
      pairs: [
        ['der Mann', 'des Mannes'],
        ['die Frau', 'der Frau'],
        ['das Kind', 'des Kindes'],
        ['die Kinder', 'der Kinder'],
      ],
      explanation: 'Masculine and neuter: des + noun with -es. Feminine and plural: der, no change to the noun.',
    },
    {
      type: 'mc',
      id: 'a2-14-genitive-ex05',
      prompt: 'How do you say "das Fahrrad meiner Schwester" in casual speech?',
      options: ['das Fahrrad von meiner Schwester', 'das Fahrrad von meine Schwester', 'das Fahrrad von meines Schwester'],
      answer: 0,
      explanation: 'The spoken alternative is von + Dative. Schwester is feminine, so von meiner Schwester.',
    },
    {
      type: 'fill',
      id: 'a2-14-genitive-ex06',
      prompt: 'Das ist ___ Buch. (Anna → whose book)',
      answer: ['Annas'],
      explanation: 'Names add -s with no apostrophe and go before the noun: Annas Buch.',
    },
    {
      type: 'fill',
      id: 'a2-14-genitive-ex07',
      prompt: 'Die Farbe ___ Autos ist rot. (my)',
      answer: ['meines'],
      explanation: 'Auto is neuter. Genitive neuter of mein = meines, and Auto adds -s: meines Autos.',
    },
    {
      type: 'order',
      id: 'a2-14-genitive-ex08',
      prompt: 'Build the sentence: "That is the house of my parents."',
      words: ['Haus', 'ist', 'Eltern.', 'Das', 'meiner', 'das'],
      answer: ['Das ist das Haus meiner Eltern.'],
      explanation: 'The Genitive phrase (meiner Eltern, plural) comes after the noun it belongs to: das Haus meiner Eltern.',
    },
    {
      type: 'mc',
      id: 'a2-14-genitive-ex09',
      prompt: 'Complete: "das Dach des ___" (Haus)',
      options: ['Hauses', 'Haus', 'Hause'],
      answer: 0,
      explanation: 'Haus is neuter and ends in -s, so the Genitive adds -es: des Hauses.',
    },
    {
      type: 'fill',
      id: 'a2-14-genitive-ex10',
      prompt: '___ Jacke ist das? (whose)',
      answer: ['Wessen'],
      explanation: 'wessen is the question word for the Genitive: Wessen Jacke ist das? – Das ist Peters Jacke.',
    },
    {
      type: 'translate',
      id: 'a2-14-genitive-ex11',
      prompt: 'Translate (written style, Genitive): "the colour of the car"',
      answer: ['die Farbe des Autos'],
      hint: 'die Farbe = colour, das Auto = car',
      explanation: 'Auto is neuter: des Autos. Auto ends in a vowel, so it takes just -s.',
    },
    {
      type: 'mc',
      id: 'a2-14-genitive-ex12',
      prompt: 'Which is the correct way to write "Peter\'s car"?',
      options: ['Peters Auto', "Peter's Auto", "Peters' Auto"],
      answer: 0,
      explanation: 'German names take -s without an apostrophe: Peters Auto. An apostrophe is only used when the name already ends in -s (Klaus\' Auto).',
    },
  ],
};

export default topic;
