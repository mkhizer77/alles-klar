import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-25-dative-prepositions',
  level: 'A1',
  unit: 5,
  order: 29,
  title: 'Dative prepositions: aus, bei, mit, nach, seit, von, zu',
  germanTerm: 'Präpositionen mit Dativ',
  tags: ['prepositions', 'dative', 'cases'],
  summary: 'Seven very common prepositions – aus, bei, mit, nach, seit, von, zu – are always followed by the Dative.',
  steps: [
    {
      title: 'Seven prepositions that always take the Dative',
      text: `
Just as *durch, für, gegen, ohne, um* always take the Accusative, these seven **always** take the **Dative** (*Dativ*):

- **aus** – from (origin), out of
- **bei** – at (a person's place, a company)
- **mit** – with, by (transport)
- **nach** – to (cities, countries), after
- **seit** – since, for (time still going on)
- **von** – from, of
- **zu** – to (people, places)

Learn them as one row: *aus, bei, mit, nach, seit, von, zu*. The list never changes.
`,
      examples: [
        { de: 'Ich komme aus der Türkei.', en: 'I come from Turkey. (aus + Dative: der)' },
        { de: 'Er fährt mit dem Bus.', en: 'He goes by bus. (mit + Dative: dem)' },
        { de: 'Das ist ein Brief von meiner Tante.', en: 'This is a letter from my aunt. (von + Dative: meiner)' },
      ],
    },
    {
      title: 'The noun after them takes the Dative',
      text: `
After these seven words you use the Dative forms you already know: **dem, der, dem, den + -n**, and **einem, einer, einem** or **meinem, meiner, meinem, meinen**.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| mit + the | mit **dem** Mann | mit **der** Frau | mit **dem** Kind | mit **den** Kindern |
| mit + my | mit **meinem** Mann | mit **meiner** Frau | mit **meinem** Kind | mit **meinen** Kindern |
`,
      examples: [
        { de: 'Wir fahren mit dem Zug nach München.', en: 'We travel by train to Munich. (mit dem)' },
        { de: 'Sie wohnt noch bei ihren Eltern.', en: 'She still lives with her parents. (bei ihren + plural)' },
        { de: 'Er lernt seit einem Jahr Deutsch.', en: 'He has been learning German for a year. (seit einem)' },
        { de: 'Das Geschenk ist von einer Freundin.', en: 'The present is from a friend. (von einer)' },
      ],
    },
    {
      title: 'The short forms beim, vom, zum, zur',
      text: `
Some of these prepositions merge with **dem** or **der** so often that the short form is the normal one: bei + dem → **beim**, von + dem → **vom**, zu + dem → **zum**, zu + der → **zur**. These are standard German, not slang; *zu dem Arzt* sounds stiff.
`,
      examples: [
        { de: 'Ich gehe zum Arzt.', en: 'I am going to the doctor. (zu dem = zum)' },
        { de: 'Sie geht zur Schule.', en: 'She goes to school. (zu der = zur)' },
        { de: 'Er ist beim Zahnarzt.', en: 'He is at the dentist. (bei dem = beim)' },
        { de: 'Wir kommen vom Bahnhof.', en: 'We are coming from the station. (von dem = vom)' },
      ],
    },
    {
      title: 'nach or zu for "to"?',
      text: `
Both mean "to". Use **nach** for cities, countries and directions with no article: *nach Berlin, nach Italien, nach links*. Use **zu** for people, shops and buildings: *zu Anna, zum Arzt, zur Post*.

A fixed pair: **nach Hause** = going home, **zu Hause** = being at home.
`,
      examples: [
        { de: 'Wir fliegen nach Spanien.', en: 'We fly to Spain. (country: nach)' },
        { de: 'Ich gehe heute zu Anna.', en: "I am going to Anna's today. (person: zu)" },
        { de: 'Nach dem Kurs gehe ich nach Hause.', en: 'After the course I go home. (nach Hause = going home)' },
        { de: 'Ich bin heute zu Hause.', en: 'I am at home today. (zu Hause = being at home)' },
      ],
    },
    {
      title: 'seit goes with the present tense',
      text: `
**seit** means "since" or "for" when something started in the past and is **still true**. German uses the **present tense** with it: *Ich wohne seit drei Jahren hier* = I have lived here for three years. Do not use *für* here.
`,
      examples: [
        { de: 'Ich wohne seit drei Jahren hier.', en: 'I have lived here for three years. (present tense + seit)' },
        { de: 'Er arbeitet seit einem Monat hier.', en: 'He has been working here for a month.' },
        { de: 'Seit wann lernst du Deutsch?', en: 'Since when have you been learning German?' },
      ],
    },
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
    '**aus** vs **von**, both "from": *aus* for where you come from or out of a container (*aus Polen, aus der Flasche*); *von* for a person or a starting point (*von meiner Mutter*).',
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
