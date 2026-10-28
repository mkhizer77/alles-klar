import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-24-dieser-jeder-welcher',
  level: 'A2',
  unit: 9,
  order: 24,
  title: 'dieser, jeder, welcher, alle, mancher',
  germanTerm: 'Demonstrativ- und Indefinitartikel',
  tags: ['articles', 'determiners', 'cases', 'der-words', 'endings'],
  summary: 'dieser (this), jeder (every), welcher (which), alle (all) and mancher (some) are "der-words": they take the same endings as der / die / das in every case.',
  explanation: `
### What it is

Besides *der / die / das* and *ein / eine*, German has a group of small words that go in front of a noun and **behave like der / die / das**: *dieser Pullover* (this sweater), *jeden Tag* (every day), *welches Buch?* (which book?). Grammar books call them **der-words** because they take the endings of *der*. The most useful are:

| der-word | meaning | note |
|---|---|---|
| **dieser** | this, these | points at something |
| **jeder** | every, each | singular only |
| **alle** | all | plural only (the plural of *jeder*) |
| **welcher** | which? | question word |
| **mancher** | some | mostly plural: *manche Leute* |

(You may also see **jener** = that, in formal or old texts. In speech people say *der … dort* instead.)

Once you know the endings of *der / die / das* in the Nominative, Accusative and Dative, you know the endings of all these words.

### The endings

Take the last letter(s) of the definite article and attach them to the stem *dies-*, *jed-*, *welch-*, *all-*, *manch-*.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | dies**er** (der) | dies**e** (die) | dies**es** (das) | dies**e** (die) |
| Accusative | dies**en** (den) | dies**e** (die) | dies**es** (das) | dies**e** (die) |
| Dative | dies**em** (dem) | dies**er** (der) | dies**em** (dem) | dies**en** (den) |

The only surprise is the **neuter**: *das* becomes **-es** (*dieses Haus, welches Buch, jedes Kind*), not *-as*.

Examples with the other words:

- **Jeder** Schüler bekommt ein Buch. – *Every pupil gets a book.* (masc. Nom.)
- Ich kenne **jeden** Nachbarn. – *I know every neighbour.* (masc. Acc.)
- **Welche** Farbe magst du? – *Which colour do you like?* (fem. Nom. / Acc.)
- Mit **welchem** Bus fährst du? – *Which bus do you take?* (masc. Dat.)
- **Alle** Kinder spielen. – *All the children are playing.* (pl. Nom.)
- Ich habe **manche** Wörter vergessen. – *I have forgotten some words.* (pl. Acc.)

### jeder vs alle

*jeder* is singular: it looks at the group one person at a time. *alle* is plural: it looks at the whole group.

- **Jeder** Student hat einen Laptop. – *Every student has a laptop.*
- **Alle** Studenten haben einen Laptop. – *All students have a laptop.*

The meaning is almost the same, but the verb must agree: *jeder … hat* (singular), *alle … haben* (plural).

### Used alone

All of these words can also stand **without a noun**, as pronouns. The endings stay the same:

- Welches Hemd nimmst du? – **Dieses**. – *Which shirt are you taking? This one.*
- Ich habe zwei Brüder. **Jeder** hat ein Auto. – *Each has a car.*

### Why it matters

These words are everywhere: *jeden Tag* (every day), *diese Woche* (this week), *welche Größe?* (which size?), *alle zusammen* (all together). Learning them as der-words also prepares you for adjective endings: after a der-word the adjective takes the same endings as after *der / die / das* (*dieser große Hund, jedes kleine Kind*).
`,
  examples: [
    { de: 'Dieser Pullover ist zu groß.', en: 'This sweater is too big. (masculine Nominative: -er like der)' },
    { de: 'Ich nehme diese Tasche.', en: 'I will take this bag. (feminine Accusative: -e like die)' },
    { de: 'Welches Buch liest du?', en: 'Which book are you reading? (neuter: -es like das)' },
    { de: 'Jeden Morgen trinke ich Kaffee.', en: 'Every morning I drink coffee. (masculine Accusative for time: jeden Morgen)' },
    { de: 'Alle Gäste sind schon da.', en: 'All the guests are already here. (plural, verb plural)' },
    { de: 'Mit welchem Zug fährst du?', en: 'Which train are you taking? (masculine Dative: -em like dem)' },
    { de: 'Manche Leute mögen keinen Kaffee.', en: 'Some people do not like coffee. (manche: plural)' },
    { de: 'Welche Jacke? – Diese hier.', en: 'Which jacket? This one here. (used alone as a pronoun)' },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'The endings of dieser, jeder, welcher copy the endings of der / die / das.' },
    { topicId: 'a1-14-es-gibt-demonstratives', note: 'das / der as pointing words (Das ist …) are the A1 version of demonstratives; dieser is the full set.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'After a der-word the adjective takes the "definite" endings: dieser alte Mann, jedes neue Haus.' },
    { topicId: 'a1-24-dative', note: 'In the Dative the der-words end in -em / -er / -em / -en, like dem / der / dem / den.' },
  ],
  edgeCases: [
    'The **neuter** form ends in **-es**, not *-as*: *dieses Kind, welches Auto, jedes Jahr*. (You may hear *dies Kind* in speech, but *dieses* is the standard form.)',
    '**jeder** has no plural. For a plural group use **alle**: *jeder Tag* → *alle Tage*.',
    'Time expressions use the **Accusative**: *jeden Tag, jede Woche, jedes Jahr, diesen Sommer*.',
    '**welcher** as a question word must agree with the noun: *Welcher Tag?* (der Tag), *Welche Uhrzeit?* (die Uhrzeit), *Welches Datum?* (das Datum).',
    'In the Dative plural the noun gets **-n** too: *mit allen Kindern, in diesen Häusern*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-24-dieser-jeder-welcher-ex01',
      prompt: 'Complete: "___ Pullover gefällt mir." (this; der Pullover)',
      options: ['Dieser', 'Diese', 'Dieses'],
      answer: 0,
      explanation: 'Pullover is masculine and the subject, so take the ending of der: dieser.',
    },
    {
      type: 'fill',
      id: 'a2-24-dieser-jeder-welcher-ex02',
      prompt: '___ Buch möchtest du lesen? (which; das Buch)',
      answer: ['Welches'],
      explanation: 'Buch is neuter. The neuter ending of a der-word is -es: welches.',
    },
    {
      type: 'fill',
      id: 'a2-24-dieser-jeder-welcher-ex03',
      prompt: 'Ich trinke ___ Morgen einen Kaffee. (every; der Morgen)',
      answer: ['jeden'],
      explanation: 'Time expressions take the Accusative. Morgen is masculine, so den → jeden.',
    },
    {
      type: 'mc',
      id: 'a2-24-dieser-jeder-welcher-ex04',
      prompt: 'Complete: "___ Kinder haben Hunger." (all)',
      options: ['Alle', 'Jede', 'Jeder'],
      answer: 0,
      explanation: 'Kinder is plural, so you need alle. jeder only exists in the singular.',
    },
    {
      type: 'match',
      id: 'a2-24-dieser-jeder-welcher-ex05',
      prompt: 'Match the definite article with the matching form of dieser.',
      pairs: [
        ['der', 'dieser'],
        ['den', 'diesen'],
        ['dem', 'diesem'],
        ['das', 'dieses'],
        ['die', 'diese'],
      ],
      explanation: 'The der-word takes the last letters of the article: -er, -en, -em, -es, -e.',
    },
    {
      type: 'fill',
      id: 'a2-24-dieser-jeder-welcher-ex06',
      prompt: 'Mit ___ Bus fahren wir? (which; der Bus)',
      answer: ['welchem'],
      explanation: 'mit takes the Dative. Bus is masculine, so dem → welchem.',
    },
    {
      type: 'mc',
      id: 'a2-24-dieser-jeder-welcher-ex07',
      prompt: 'Which sentence is correct?',
      options: ['Jeder Schüler haben ein Buch.', 'Jeder Schüler hat ein Buch.', 'Alle Schüler hat ein Buch.'],
      answer: 1,
      explanation: 'jeder is singular, so the verb is hat. alle is plural and would need haben.',
    },
    {
      type: 'order',
      id: 'a2-24-dieser-jeder-welcher-ex08',
      prompt: 'Build the question: "Which jacket do you want to buy?"',
      words: ['du', 'kaufen?', 'willst', 'Jacke', 'Welche'],
      answer: ['Welche Jacke willst du kaufen?'],
      explanation: 'Jacke is feminine and the object, so welche. The question word + noun fill position 1, then the verb.',
    },
    {
      type: 'fill',
      id: 'a2-24-dieser-jeder-welcher-ex09',
      prompt: 'Ich kenne ___ Nachbarn in meiner Straße. (every; der Nachbar)',
      answer: ['jeden'],
      explanation: 'kennen takes the Accusative. Nachbar is masculine, so jeden. (The noun itself becomes Nachbarn here; a few masculine nouns add -n like this.)',
    },
    {
      type: 'translate',
      id: 'a2-24-dieser-jeder-welcher-ex10',
      prompt: 'Translate: "I would like this bag." (die Tasche)',
      answer: ['Ich möchte diese Tasche.', 'Ich hätte gern diese Tasche.'],
      hint: 'die Tasche = the bag',
      explanation: 'Tasche is feminine and the object. Feminine is die in Nominative and Accusative, so diese.',
    },
    {
      type: 'mc',
      id: 'a2-24-dieser-jeder-welcher-ex11',
      prompt: 'Complete: "In ___ Häusern wohnen viele Familien." (these; Dative plural)',
      options: ['diese', 'diesen', 'dieser'],
      answer: 1,
      explanation: 'In + wo? takes the Dative. Dative plural is den → diesen, and the noun also gets -n: Häusern.',
    },
    {
      type: 'fill',
      id: 'a2-24-dieser-jeder-welcher-ex12',
      prompt: 'Welches Auto ist deins? – ___ dort. (this one; das Auto)',
      answer: ['Dieses', 'Das'],
      explanation: 'Used alone as a pronoun, dieser keeps its ending. Auto is neuter, so dieses. (In speech people also just say Das dort.)',
    },
  ],
};

export default topic;
