import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-14-es-gibt-demonstratives',
  level: 'A1',
  unit: 2,
  order: 15,
  title: 'es gibt and das ist',
  germanTerm: 'es gibt, das ist',
  tags: ['es gibt', 'das ist', 'das sind', 'accusative', 'introducing'],
  summary: 'es gibt says that something exists (there is / there are) and takes the Accusative (einen Park); das ist / das sind introduce or point at a person or thing and keep the Nominative.',
  steps: [
    {
      title: 'es gibt: there is, there are',
      text: `
**es gibt** says that something **exists** or is **available**: *there is* or *there are*. It is one fixed phrase and never changes. For the plural you still say **es gibt**, never *es geben*.
`,
      examples: [
        { de: 'Es gibt hier ein Café.', en: 'There is a café here.' },
        { de: 'Es gibt viele Parks in Berlin.', en: 'There are many parks in Berlin. (es gibt stays the same)' },
        { de: 'Heute gibt es Pizza.', en: 'Today there is pizza. (verb second: gibt es)' },
      ],
    },
    {
      title: 'After es gibt: einen, keinen',
      text: `
The noun after *es gibt* is in the **Accusative** (*Akkusativ*, the object case). For now that means one thing: masculine **ein** becomes **einen**, and masculine **kein** becomes **keinen**. Feminine, neuter and plural look the same as always.

| gender | after es gibt |
|---|---|
| masculine | es gibt **einen** Bahnhof, **keinen** Bahnhof |
| feminine | es gibt **eine** Bank, **keine** Bank |
| neuter | es gibt **ein** Kino, **kein** Kino |
| plural | es gibt Restaurants, **keine** Restaurants |
`,
      examples: [
        { de: 'Es gibt hier einen Supermarkt.', en: 'There is a supermarket here. (masculine: ein → einen)' },
        { de: 'Es gibt keinen Parkplatz.', en: 'There is no parking space. (kein → keinen)' },
        { de: 'Es gibt eine Bank.', en: 'There is a bank. (feminine: no change)' },
        { de: 'Es gibt kein Kino.', en: 'There is no cinema. (neuter: no change)' },
      ],
    },
    {
      title: 'Questions: Gibt es …?',
      text: `
A yes/no question puts **gibt** first, and **es** follows: *Gibt es …?* The *es* never disappears. *Gibt hier ein Café?* is wrong.
`,
      examples: [
        { de: 'Gibt es hier ein Hotel?', en: 'Is there a hotel here?' },
        { de: 'Gibt es hier einen Supermarkt?', en: 'Is there a supermarket here? (einen after es gibt)' },
        { de: 'Was gibt es heute?', en: 'What is there today? (W-question: was, then gibt es)' },
      ],
    },
    {
      title: 'das ist, das sind: introducing',
      text: `
**das ist** (singular) and **das sind** (plural) introduce a person or thing. Here *das* is **not** the neuter article. It is a fixed pointer word that works for **every gender**: *Das ist mein Bruder* (masculine, still *das*).

For a plural noun the verb changes: **das sind**.
`,
      examples: [
        { de: 'Das ist mein Bruder.', en: 'This is my brother. (das for a masculine person)' },
        { de: 'Das ist eine Lampe.', en: 'That is a lamp.' },
        { de: 'Das sind meine Eltern.', en: 'These are my parents. (plural → sind)' },
      ],
    },
    {
      title: 'das ist keeps ein, es gibt takes einen',
      text: `
After *das ist* the noun stays in the **Nominative**, because *sein* does not take an object: *Das ist **ein** Hund*, not *einen*. After *es gibt* it is Accusative: *Es gibt **einen** Hund*.

The rule in one line: **das ist ein, es gibt einen** (masculine only).
`,
      examples: [
        { de: 'Das ist ein Park.', en: 'That is a park. (sein: ein)' },
        { de: 'Es gibt hier einen Park.', en: 'There is a park here. (es gibt: einen)' },
        { de: 'Das ist kein Problem.', en: 'That is no problem. (neuter: no change either way)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-12-indefinite-articles', note: 'After es gibt you use ein / eine / ein, with the masculine changed to einen.' },
    { topicId: 'a1-11-nominative', note: 'After das ist the noun stays in the Nominative: Das ist ein Hund.' },
    { topicId: 'a1-13-negation', note: 'Es gibt keinen / keine / kein negates existence.' },
    { topicId: 'a1-14b-demonstratives', note: 'To say "this table" with a noun, use dieser / diese / dieses; that is the sibling topic.' },
    { topicId: 'a1-20-accusative', note: 'The Accusative after es gibt is explained in full there.' },
  ],
  edgeCases: [
    '**es gibt** never becomes *es geben* for the plural. *Es gibt viele Leute*, not *Es geben viele Leute*.',
    'After **es gibt** the masculine takes **einen / keinen**: *Es gibt einen Park*. After **das ist** it stays **ein**: *Das ist ein Park*.',
    '**das ist** works for all genders: *Das ist mein Vater* (masculine), *Das ist meine Mutter* (feminine). Do not say *Der ist mein Vater* when introducing someone.',
    'Plural needs **das sind**: *Das sind meine Kinder*. *Das ist meine Kinder* is wrong.',
    'In **Gibt es …?** the *es* stays. Drop it and the sentence is wrong.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex01',
      prompt: 'Es ___ hier ein Kino. (geben)',
      answer: ['gibt'],
      explanation: 'The fixed phrase is es gibt (gibt = es form of geben).',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex02',
      prompt: 'Complete: "Es gibt ___ Park." (der Park)',
      options: ['ein', 'einen', 'eine'],
      answer: 1,
      explanation: 'After es gibt the noun is in the Accusative. For a masculine noun ein becomes einen.',
    },
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex03',
      prompt: 'Es gibt hier ___ Bank. (a – die Bank)',
      answer: ['eine'],
      explanation: 'Bank is feminine. Only the masculine changes after es gibt; feminine eine stays eine.',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex04',
      prompt: 'How do you say "There are many cafés here"?',
      options: ['Es geben hier viele Cafés.', 'Es gibt hier viele Cafés.', 'Es sind hier viele Cafés gibt.'],
      answer: 1,
      explanation: 'es gibt never changes for the plural: Es gibt viele Cafés.',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex05',
      prompt: 'Which question is correct?',
      options: ['Gibt hier ein Café?', 'Gibt es hier ein Café?', 'Es gibt hier ein Café?'],
      answer: 1,
      explanation: 'A yes/no question puts gibt first, and es stays: Gibt es hier ein Café? Without es the sentence is wrong.',
    },
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex06',
      prompt: '___ ist meine Schwester. (this)',
      answer: ['Das'],
      explanation: 'To introduce a person use das ist, whatever the gender of the person.',
    },
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex07',
      prompt: 'Das ___ meine Eltern. (sein)',
      answer: ['sind'],
      explanation: 'With a plural noun (Eltern) use das sind.',
    },
    {
      type: 'order',
      id: 'a1-14-es-gibt-demonstratives-ex08',
      prompt: 'Build the question: "Is there a hotel here?"',
      words: ['Hotel?', 'hier', 'ein', 'Gibt', 'es'],
      answer: ['Gibt es hier ein Hotel?'],
      explanation: 'A yes/no question puts gibt first, es stays, then hier and ein Hotel (neuter, so ein).',
    },
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex09',
      prompt: 'Es gibt hier ___ Bahnhof. (no – der Bahnhof)',
      answer: ['keinen'],
      explanation: 'kein follows ein: masculine after es gibt → keinen Bahnhof.',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex10',
      prompt: 'Which pair is correct? "Das ist ___ Hund. Es gibt ___ Hund."',
      options: ['ein / ein', 'ein / einen', 'einen / einen'],
      answer: 1,
      explanation: 'After das ist (sein) the noun stays Nominative: ein Hund. After es gibt it is Accusative: einen Hund.',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex11',
      prompt: 'Which sentence is correct?',
      options: ['Das ist meine Kinder.', 'Das sind meine Kinder.', 'Diese sind meine Kinder.'],
      answer: 1,
      explanation: 'A plural needs das sind. "Diese sind" is not how you introduce people; das sind is the natural phrase.',
    },
    {
      type: 'translate',
      id: 'a1-14-es-gibt-demonstratives-ex12',
      prompt: 'Translate: "There is a supermarket here."',
      answer: ['Es gibt hier einen Supermarkt.', 'Hier gibt es einen Supermarkt.'],
      hint: 'der Supermarkt, hier = here',
      explanation: 'es gibt + Accusative. Supermarkt is masculine, so einen. You can start with Hier, then gibt es follows (verb second).',
    },
  ],
};

export default topic;
