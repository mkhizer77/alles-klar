import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-14-genitive',
  level: 'A2',
  unit: 5,
  order: 14,
  title: 'The Genitive case and possession with von',
  germanTerm: 'Genitiv',
  tags: ['cases', 'Genitive', 'possession', 'articles', 'nouns'],
  summary: 'The Genitive is the "of / belonging to" case (das Auto des Vaters, der Name der Frau, Annas Buch); masculine and neuter nouns add -s, and in speech people usually say von + Dative instead.',
  explanation: `
### What it is

The **Genitive** (*Genitiv*) is the fourth and last German case. It answers the question **wessen?** (whose?) and shows that one thing **belongs to** or is **part of** another:

- das Auto **des Vaters** – *the father's car / the car of the father*
- der Name **der Straße** – *the name of the street*
- die Farbe **des Hauses** – *the colour of the house*

English does the same with *'s* or *of*. In German the Genitive phrase always comes **after** the noun it belongs to: *das Auto* first, then *des Vaters*.

### How it works: des and der

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| the | **des** Vater**s** | **der** Frau | **des** Haus**es** | **der** Kinder |

Two patterns to remember:

- Masculine and neuter: **des**, and the noun itself gets an **-s** (*des Vaters, des Autos*). Short nouns and nouns ending in *-s* get **-es** so you can say them: *des Mannes, des Kindes, des Hauses*.
- Feminine and plural: **der**, and the noun does **not** change: *der Frau, der Kinder*.

*mein, dein, sein …* and *ein* follow the same pattern: **meines** Vaters, **meiner** Mutter, **eines** Kindes. The ending is the same as on *des / der*.

Note that feminine Genitive *der* looks exactly like the Dative *der Frau*; the question *wessen?* tells you which it is.

### Names

Names simply add **-s**, with **no apostrophe**: **Peters** Auto, **Annas** Buch, **Frau Müllers** Büro. The name goes **before** the noun, like in English. (Only a name that already ends in *-s* gets an apostrophe instead: *Klaus' Auto*.)

### Spoken German: von + Dative

In conversation most people avoid the Genitive and say **von + Dative** instead:

| written / formal (Genitive) | spoken (von + Dative) |
|---|---|
| das Auto meines Vaters | das Auto **von meinem Vater** |
| die Tasche der Lehrerin | die Tasche **von der Lehrerin** |
| der Hund der Nachbarn | der Hund **von den Nachbarn** |

Both are correct. Use *von* when you speak; use the Genitive in writing and in fixed phrases. You still need to **recognise** the Genitive, because every text, sign and news report uses it.

### Why it matters

The Genitive appears in every written text, in fixed expressions (*Anfang des Jahres, Ende der Woche*) and after *wegen* (because of), which is the next topic. Once you know *des + -s* for masculine / neuter and *der* for feminine / plural, you can read it anywhere, and *von + Dative* gives you an easy spoken alternative.
`,
  examples: [
    { de: 'Das ist das Auto meines Vaters.', en: "That is my father's car. (masculine: meines Vaters)" },
    { de: 'Der Name der Straße ist sehr lang.', en: 'The name of the street is very long. (feminine: der, no noun ending)' },
    { de: 'Die Farbe des Hauses gefällt mir.', en: 'I like the colour of the house. (neuter, -es after -s)' },
    { de: 'Das Spielzeug der Kinder liegt überall.', en: "The children's toys are everywhere. (plural: der Kinder)" },
    { de: 'Annas Buch liegt auf dem Tisch.', en: "Anna's book is on the table. (name + s, no apostrophe)" },
    { de: 'Das ist das Fahrrad von meiner Schwester.', en: "That is my sister's bike. (spoken: von + Dative)" },
    { de: 'Wessen Jacke ist das?', en: 'Whose jacket is that? (wessen asks for the Genitive)' },
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
