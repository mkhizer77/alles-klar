import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-25-dative-prepositions',
  level: 'A1',
  unit: 5,
  order: 25,
  title: 'Dative prepositions: aus, bei, mit, nach, seit, von, zu',
  germanTerm: 'Präpositionen mit Dativ',
  tags: ['prepositions', 'dative', 'cases'],
  summary: 'Seven very common prepositions – aus, bei, mit, nach, seit, von, zu – are always followed by the Dative.',
  explanation: `
### What it is

Just as *durch, für, gegen, ohne, um* always take the Accusative, there is a group of prepositions that **always** take the **Dative** (*Dativ*). The seven most important ones at A1 are:

| preposition | meaning | example |
|---|---|---|
| **aus** | from (origin), out of | Ich komme **aus der** Schweiz. |
| **bei** | at (a person's place, a company), near | Sie wohnt **bei ihren** Eltern. |
| **mit** | with, by (transport) | Er fährt **mit dem** Bus. |
| **nach** | to (cities, countries), after | Wir fliegen **nach** Spanien. / **nach dem** Essen |
| **seit** | since, for (a time still going on) | Ich lerne **seit einem** Jahr Deutsch. |
| **von** | from, of, by | Das Geschenk ist **von meiner** Oma. |
| **zu** | to (people, places), for (occasions) | Ich gehe **zum** Arzt. |

Many learners remember them in a row that can be sung to a simple tune: *aus, bei, mit, nach, seit, von, zu*. Fix the list in your memory; it never changes.

### How it works

The noun after these prepositions takes the Dative article:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| mit + the | mit **dem** Mann | mit **der** Frau | mit **dem** Kind | mit **den** Kinder**n** |
| mit + a | mit **einem** Mann | mit **einer** Frau | mit **einem** Kind | mit – Kinder**n** |
| mit + my | mit **meinem** Mann | mit **meiner** Frau | mit **meinem** Kind | mit **meinen** Kinder**n** |

### Contractions

Some of these prepositions merge with **dem** or **der** so often that the short form is the normal one:

- bei + dem → **beim** (beim Arzt – at the doctor's)
- von + dem → **vom** (vom Bahnhof – from the station)
- zu + dem → **zum** (zum Supermarkt – to the supermarket)
- zu + der → **zur** (zur Schule – to school)

### Meanings to watch

**nach vs zu** (both mean "to"):
- **nach** for cities, countries and directions with no article: *nach Berlin, nach Italien, nach Hause* (home), *nach links*.
- **zu** for people, shops and buildings: *zu Anna, zum Arzt, zur Post, zu Hause* (at home).

Note the fixed pair: **nach Hause** = going home, **zu Hause** = being at home.

**aus vs von** (both mean "from"):
- **aus** for where you come from, or out of a container: *aus Polen, aus der Flasche*.
- **von** for a person or a starting point: *von meiner Mutter, von hier bis dort*.

**seit** = since / for, used with the **present tense** when something started in the past and is still true: *Ich wohne seit drei Jahren hier.* (I have lived here for three years.) Do not use *für* here.

**bei** = at someone's place or workplace: *bei Lena* (at Lena's), *bei Siemens* (at Siemens), *beim Zahnarzt*.

### Why it matters

These seven words appear in almost every German conversation: how you travel (*mit dem Zug*), where you are from (*aus Indien*), who something is from (*von Tom*), where you are going (*zur Arbeit*). If you learn the list and the Dative forms together, you remove one of the biggest sources of article errors at A1 in one go. The contrasting Accusative list from unit 4 and the two-way prepositions in unit 6 then fall into place.
`,
  examples: [
    { de: 'Ich komme aus der Türkei.', en: 'I come from Turkey. (aus + feminine Dative: der)' },
    { de: 'Wir fahren mit dem Zug nach München.', en: 'We travel by train to Munich. (mit dem; nach + city)' },
    { de: 'Sie wohnt noch bei ihren Eltern.', en: 'She still lives with her parents. (bei + plural Dative: ihren)' },
    { de: 'Ich gehe zum Arzt.', en: 'I am going to the doctor. (zu + dem = zum)' },
    { de: 'Er arbeitet seit einem Monat hier.', en: 'He has been working here for a month. (seit + present tense)' },
    { de: 'Das ist ein Brief von meiner Tante.', en: 'This is a letter from my aunt. (von + feminine: meiner)' },
    { de: 'Nach dem Kurs gehe ich nach Hause.', en: 'After the course I go home. (nach dem Kurs; nach Hause)' },
  ],
  connections: [
    { topicId: 'a1-24-dative', note: 'These prepositions use the Dative articles dem, der, dem, den learned in the previous topic.' },
    { topicId: 'a1-22-accusative-prepositions', note: 'The Accusative group (durch, für, gegen, ohne, um) is the contrasting fixed list.' },
    { topicId: 'a1-28-time-prepositions', note: 'seit, nach and von … bis come back as time expressions.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'in, an, auf and others take the Dative only for location; these seven take it always.' },
  ],
  edgeCases: [
    '**seit** goes with the **present** tense in German: *Ich wohne seit 2020 in Köln*, not *Ich habe gewohnt*. And it is never *für zwei Jahre* for a period still going on.',
    '**nach Hause** (going home) vs **zu Hause** (at home): *Ich gehe nach Hause. Ich bin zu Hause.*',
    'Countries with an article use **in** for "to", not nach: *in die Schweiz, in die Türkei, in die USA*. Only article-less countries take nach (*nach Deutschland*).',
    '**mit** for transport always takes the article: *mit dem Auto, mit der Bahn*, never *mit Auto*. But *zu Fuß* (on foot) has no article.',
    'The contractions **beim, vom, zum, zur** are standard, not slang. *zu dem Arzt* sounds stiff; say *zum Arzt*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-25-dative-prepositions-ex01',
      prompt: 'Which of these always takes the Dative?',
      options: ['für', 'mit', 'ohne', 'durch'],
      answer: 1,
      explanation: 'mit is one of the Dative seven. für, ohne and durch belong to the Accusative group.',
    },
    {
      type: 'fill',
      id: 'a1-25-dative-prepositions-ex02',
      prompt: 'Ich fahre mit ___ Bus. (the)',
      answer: ['dem'],
      explanation: 'mit takes the Dative. Bus is masculine, so der becomes dem.',
    },
    {
      type: 'fill',
      id: 'a1-25-dative-prepositions-ex03',
      prompt: 'Sie kommt aus ___ Schweiz. (the)',
      answer: ['der'],
      explanation: 'aus takes the Dative. Schweiz is feminine (die Schweiz), so the Dative is der.',
    },
    {
      type: 'match',
      id: 'a1-25-dative-prepositions-ex04',
      prompt: 'Match each preposition with its main meaning.',
      pairs: [
        ['aus', 'from (origin), out of'],
        ['bei', 'at (someone\'s place)'],
        ['mit', 'with'],
        ['seit', 'since, for (time)'],
        ['zu', 'to (a person or place)'],
      ],
      explanation: 'All five take the Dative. nach and von complete the list of seven.',
    },
    {
      type: 'mc',
      id: 'a1-25-dative-prepositions-ex05',
      prompt: 'Which contraction is correct?',
      options: ['zu + der = zum', 'zu + dem = zur', 'zu + der = zur'],
      answer: 2,
      explanation: 'zur = zu der (feminine). zum = zu dem (masculine or neuter).',
    },
    {
      type: 'fill',
      id: 'a1-25-dative-prepositions-ex06',
      prompt: 'Wir fliegen morgen ___ Italien. (to)',
      answer: ['nach'],
      explanation: 'Countries without an article take nach, not zu.',
    },
    {
      type: 'fill',
      id: 'a1-25-dative-prepositions-ex07',
      prompt: 'Er wohnt seit ___ Jahr in Hamburg. (a)',
      answer: ['einem'],
      explanation: 'seit takes the Dative. Jahr is neuter, so ein becomes einem.',
    },
    {
      type: 'order',
      id: 'a1-25-dative-prepositions-ex08',
      prompt: 'Build the sentence: "I am going to the doctor."',
      words: ['Arzt.', 'Ich', 'zum', 'gehe'],
      answer: ['Ich gehe zum Arzt.'],
      explanation: 'zu + dem Arzt contracts to zum Arzt. zu is used for people and places like the doctor.',
    },
    {
      type: 'mc',
      id: 'a1-25-dative-prepositions-ex09',
      prompt: 'Complete: "Ich bin heute ___ Hause."',
      options: ['nach', 'zu', 'bei'],
      answer: 1,
      explanation: 'zu Hause = at home (location). nach Hause = (going) home (direction).',
    },
    {
      type: 'fill',
      id: 'a1-25-dative-prepositions-ex10',
      prompt: 'Das Buch ist von ___ Lehrerin. (my)',
      answer: ['meiner'],
      explanation: 'von takes the Dative. Lehrerin is feminine → meiner.',
    },
    {
      type: 'translate',
      id: 'a1-25-dative-prepositions-ex11',
      prompt: 'Translate: "She lives with her parents."',
      answer: ['Sie wohnt bei ihren Eltern.'],
      hint: 'bei = at someone\'s place, die Eltern = parents',
      explanation: 'bei is the preposition for living at someone\'s place. Eltern is plural, so the possessive is ihren (Dative plural).',
    },
    {
      type: 'mc',
      id: 'a1-25-dative-prepositions-ex12',
      prompt: '"I have lived here for two years." Which is correct?',
      options: ['Ich wohne für zwei Jahre hier.', 'Ich wohne seit zwei Jahren hier.', 'Ich habe seit zwei Jahre hier gewohnt.'],
      answer: 1,
      explanation: 'A period that started in the past and still continues uses seit with the present tense. Jahren is Dative plural with -n.',
    },
  ],
};

export default topic;
