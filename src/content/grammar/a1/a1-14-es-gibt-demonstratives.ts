import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-14-es-gibt-demonstratives',
  level: 'A1',
  unit: 2,
  order: 14,
  title: 'es gibt, das ist and demonstratives',
  germanTerm: 'es gibt, Demonstrativa',
  tags: ['es gibt', 'das ist', 'demonstratives', 'dieser', 'pointing'],
  summary: 'es gibt says that something exists (there is / there are), das ist / das sind introduce or point at things, and dieser / diese / dieses mean "this".',
  explanation: `
### Three ways to point at the world

When you describe a room, a town or a menu, you need three small tools: **es gibt** (there is / there are), **das ist / das sind** (this is / these are) and the **demonstratives** (*Demonstrativa*) *dieser, diese, dieses* (this). They look simple but each has one rule that trips learners up.

### es gibt – there is / there are

*es gibt* says that something **exists** or is **available**. It is always **es gibt**: it never changes for the plural.

| German | English |
|---|---|
| **Es gibt** einen Park. | There **is** a park. |
| **Es gibt** viele Parks. | There **are** many parks. |
| **Gibt es** hier ein Café? | **Is there** a café here? |
| **Es gibt** keinen Kaffee. | There is no coffee. |

The important rule: the noun after *es gibt* is in the **Accusative**. For now that means one thing: **masculine *ein* becomes *einen***, and **masculine *kein* becomes *keinen***. Feminine, neuter and plural look the same as always.

| gender | after es gibt |
|---|---|
| masculine | es gibt **einen** Bahnhof / **keinen** Bahnhof |
| feminine | es gibt **eine** Bank / **keine** Bank |
| neuter | es gibt **ein** Kino / **kein** Kino |
| plural | es gibt Restaurants / **keine** Restaurants |

Questions put *gibt* first: ***Gibt es** hier einen Supermarkt?* And *es* never disappears: *Gibt hier ein Café?* is wrong.

### das ist / das sind – introducing and pointing

*das ist* (singular) and *das sind* (plural) introduce a person or thing. Here **das** is **not** the neuter article; it is a fixed pointer word that works for every gender:

- **Das ist** mein Bruder. – This is my brother. (masculine, still *das*)
- **Das ist** eine Lampe. – That is a lamp.
- **Das sind** meine Eltern. – These are my parents. (plural → *sind*)

The noun after *das ist / das sind* is in the **Nominative**, because *sein* does not take an object: *Das ist **ein** Hund* (not *einen*). Contrast this with *es gibt*: *Es gibt **einen** Hund.*

### dieser, diese, dieses – this

To say *this* with a noun, German uses *dieser*. It takes the **same endings as der / die / das**:

| gender | definite | this |
|---|---|---|
| masculine | der Mann | **dieser** Mann |
| feminine | die Frau | **diese** Frau |
| neuter | das Kind | **dieses** Kind |
| plural | die Kinder | **diese** Kinder |

- **Dieser** Tisch ist frei. – This table is free.
- **Diese** Jacke ist teuer. – This jacket is expensive.
- **Dieses** Buch ist gut. – This book is good.

For *that* (further away) German usually just uses *der / die / das* with stress, or adds **da**: *Der Tisch **da** ist frei.* The word *jener* (that) exists but is rare in speech.

### der / die / das as "that one"

In spoken German the definite article is often used alone as a pointer, like *that one*:

- *Welches Buch? – **Das** ist gut.* – Which book? – That one is good.
- *Kennst du Herrn Weber? – Ja, **den** kenne ich.* – Yes, I know him. (that one; Accusative)

### Why it matters

With *es gibt*, *das ist* and *dieser* you can describe any place and present any person: *In meiner Stadt gibt es einen Markt. Das ist das Rathaus. Dieses Café ist gut.* The *einen* after *es gibt* is your first contact with the Accusative, which gets its own topic later.
`,
  examples: [
    { de: 'Es gibt hier einen Supermarkt.', en: 'There is a supermarket here. (masculine → einen after es gibt)' },
    { de: 'Es gibt viele Restaurants in Berlin.', en: 'There are many restaurants in Berlin. (es gibt stays singular)' },
    { de: 'Gibt es hier ein Hotel?', en: 'Is there a hotel here?' },
    { de: 'Es gibt keinen Parkplatz.', en: 'There is no parking space. (kein → keinen)' },
    { de: 'Das ist mein Bruder.', en: 'This is my brother. (das for a masculine person)' },
    { de: 'Das sind meine Freunde.', en: 'These are my friends. (plural → sind)' },
    { de: 'Dieser Platz ist frei.', en: 'This seat is free. (der → dieser)' },
    { de: 'Diese Jacke ist zu teuer.', en: 'This jacket is too expensive. (die → diese)' },
  ],
  connections: [
    { topicId: 'a1-12-indefinite-articles', note: 'After es gibt you use ein / eine / ein, with the masculine changed to einen.' },
    { topicId: 'a1-11-nominative', note: 'After das ist the noun stays in the Nominative: Das ist ein Hund.' },
    { topicId: 'a1-13-negation', note: 'Es gibt keinen / keine / kein negates existence.' },
    { topicId: 'a1-20-accusative', note: 'The Accusative after es gibt is explained in full there.' },
    { topicId: 'a1-09-gender-articles', note: 'dieser / diese / dieses copy the endings of der / die / das.' },
  ],
  edgeCases: [
    '**es gibt** never becomes *es geben* for the plural. *Es gibt viele Leute*, not *Es geben viele Leute*.',
    'After **es gibt** the masculine takes **einen / keinen**: *Es gibt einen Park*. After **das ist** it stays **ein**: *Das ist ein Park*.',
    '**das ist** works for all genders: *Das ist mein Vater* (masculine), *Das ist meine Mutter* (feminine). Do not say *Der ist mein Vater* when introducing someone.',
    'Plural needs **das sind**: *Das sind meine Kinder*. *Das ist meine Kinder* is wrong.',
    '**dieses** (neuter) is often shortened to *dies* in speech when it stands alone: *Dies ist mein Haus*. With a noun, use the full form: *dieses Haus*.',
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
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex03',
      prompt: 'How do you say "There are many cafés here"?',
      options: ['Es geben hier viele Cafés.', 'Es gibt hier viele Cafés.', 'Es sind hier viele Cafés gibt.'],
      answer: 1,
      explanation: 'es gibt never changes for the plural: Es gibt viele Cafés.',
    },
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex04',
      prompt: '___ ist meine Schwester. (this)',
      answer: ['Das'],
      explanation: 'To introduce a person use das ist, whatever the gender of the person.',
    },
    {
      type: 'fill',
      id: 'a1-14-es-gibt-demonstratives-ex05',
      prompt: 'Das ___ meine Eltern. (sein)',
      answer: ['sind'],
      explanation: 'With a plural noun (Eltern) use das sind.',
    },
    {
      type: 'match',
      id: 'a1-14-es-gibt-demonstratives-ex06',
      prompt: 'Match the noun with the correct form of "this".',
      pairs: [
        ['Tisch', 'dieser'],
        ['Lampe', 'diese'],
        ['Buch', 'dieses'],
        ['Bücher', 'diese (plural)'],
      ],
      explanation: 'dieser follows der / die / das: der → dieser, die → diese, das → dieses, plural → diese.',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex07',
      prompt: 'Which pair is correct? "Das ist ___ Hund. Es gibt ___ Hund."',
      options: ['ein / ein', 'ein / einen', 'einen / einen'],
      answer: 1,
      explanation: 'After das ist (sein) the noun stays Nominative: ein Hund. After es gibt it is Accusative: einen Hund.',
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
      type: 'translate',
      id: 'a1-14-es-gibt-demonstratives-ex10',
      prompt: 'Translate: "This jacket is expensive."',
      answer: ['Diese Jacke ist teuer.'],
      hint: 'die Jacke = jacket, teuer = expensive',
      explanation: 'Jacke is feminine, so this = diese. The verb ist is second.',
    },
    {
      type: 'translate',
      id: 'a1-14-es-gibt-demonstratives-ex11',
      prompt: 'Translate: "There is a supermarket here."',
      answer: ['Es gibt hier einen Supermarkt.', 'Hier gibt es einen Supermarkt.'],
      hint: 'der Supermarkt, hier = here',
      explanation: 'es gibt + Accusative. Supermarkt is masculine, so einen. You can start with Hier, then gibt es follows (verb second).',
    },
    {
      type: 'mc',
      id: 'a1-14-es-gibt-demonstratives-ex12',
      prompt: 'Which sentence is correct?',
      options: ['Das ist meine Kinder.', 'Das sind meine Kinder.', 'Diese sind meine Kinder.'],
      answer: 1,
      explanation: 'A plural needs das sind. "Diese sind" is not how you introduce people; das sind is the natural phrase.',
    },
  ],
};

export default topic;
