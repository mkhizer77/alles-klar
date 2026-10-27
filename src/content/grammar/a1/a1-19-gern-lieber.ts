import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-19-gern-lieber',
  level: 'A1',
  unit: 3,
  order: 19,
  title: 'gern, lieber, am liebsten: likes and preferences',
  germanTerm: 'Vorlieben',
  tags: ['adverbs', 'likes', 'preferences', 'gern', 'mögen'],
  summary: 'gern is the little word you add to a verb to say you like doing something; lieber and am liebsten turn it into "prefer" and "like most of all".',
  explanation: `
### What it is

In English you say *I like swimming* or *I like to swim*. German does not build this with a verb meaning "like". Instead it keeps the normal verb and adds the small word **gern** (gladly, with pleasure). *Gern* is an **adverb** (*Adverb*), a word that describes how you do something.

- Ich schwimme **gern**. – *I like swimming.* (literally: I swim gladly.)
- Er kocht **gern**. – *He likes cooking.*
- Wir reisen **gern**. – *We like travelling.*

So the recipe is simple: **subject + verb + gern**. The verb stays exactly as it is.

### Where gern goes

*Gern* comes **after the verb**. If there is an object (a thing), *gern* usually stands **before** that object:

- Ich trinke **gern** Kaffee. – *I like drinking coffee.*
- Sie liest **gern** Bücher. – *She likes reading books.*

To say you do **not** like something, put **nicht** in front: **nicht gern**.

- Ich stehe **nicht gern** früh auf. – *I don't like getting up early.*

### The three steps: gern, lieber, am liebsten

*Gern* has two more forms. They work like *good – better – best* in English.

| form | meaning | example |
|---|---|---|
| **gern** | like (doing) | Ich spiele **gern** Fußball. |
| **lieber** | prefer, would rather | Ich spiele **lieber** Tennis. |
| **am liebsten** | like most of all | Ich spiele **am liebsten** Schach. |

To compare two things with *lieber*, use **als** (than):

- Ich trinke **lieber** Tee **als** Kaffee. – *I prefer tea to coffee.*
- Wir fahren **lieber** mit dem Zug **als** mit dem Bus. – *We'd rather take the train than the bus.*

A question with *lieber* often offers two choices with **oder**:

- Trinkst du **lieber** Tee **oder** Kaffee? – *Do you prefer tea or coffee?*

### gern vs mögen vs möchten

Learners mix up three words that all look like "like". Keep them apart like this:

| word | use with | example |
|---|---|---|
| **gern** | a **verb** (an activity) | Ich tanze **gern**. |
| **mögen** (ich mag) | a **noun** (a thing or person) | Ich **mag** Musik. Ich **mag** dich. |
| **möchten** (ich möchte) | a wish right now: "would like" | Ich **möchte** einen Kaffee, bitte. |

*Mögen* is irregular: ich mag, du magst, er/sie/es mag, wir mögen, ihr mögt, sie/Sie mögen. *Möchten* is polite "want", not "like". *Ich möchte Kaffee* means you want one now; *Ich mag Kaffee* means you like coffee in general.

### Why it matters

Talking about hobbies, food and free time is one of the first things you do in any conversation, and it is a fixed part of A1 speaking tests: *Was machst du gern in deiner Freizeit?* With just *gern*, *lieber*, *am liebsten* and *mögen* you can describe all your likes and dislikes without learning any new verbs. *Lieber* also comes back later as the comparative of *gern*, so you are already learning a piece of the comparison system.

Note: *gern* and *gerne* are both correct. *Gerne* is just a slightly softer, more spoken variant. On its own, **Gern!** or **Gerne!** means *Gladly!* or *You're welcome!*
`,
  examples: [
    { de: 'Ich spiele gern Gitarre.', en: 'I like playing the guitar. (verb + gern)' },
    { de: 'Isst du gern Pizza?', en: 'Do you like eating pizza?' },
    { de: 'Er geht nicht gern ins Kino.', en: 'He does not like going to the cinema. (nicht gern)' },
    { de: 'Ich trinke lieber Wasser als Cola.', en: 'I prefer water to cola. (lieber ... als)' },
    { de: 'Am liebsten schlafe ich lange.', en: 'Most of all I like sleeping in. (am liebsten first, verb second)' },
    { de: 'Wir mögen unsere Nachbarn.', en: 'We like our neighbours. (mögen + noun)' },
    { de: 'Fährst du lieber Rad oder gehst du lieber zu Fuß?', en: 'Would you rather cycle or walk?' },
  ],
  connections: [
    { topicId: 'a1-05-present-tense-regular', note: 'gern simply attaches to a normally conjugated present-tense verb.' },
    { topicId: 'a1-17-modal-verbs', note: 'möchten (would like) is a modal verb; do not confuse it with gern and mögen.' },
    { topicId: 'a1-06-verb-second', note: 'When am liebsten or lieber starts the sentence, the verb still stays in second position.' },
    { topicId: 'a1-35-comparative-basics', note: 'gern – lieber – am liebsten is an irregular comparison, like gut – besser – am besten.' },
  ],
  edgeCases: [
    'There is no verb "to like doing" in German. *Ich like schwimmen* and *Ich mag schwimmen* are wrong; say **Ich schwimme gern**.',
    '**mögen** goes with nouns, **gern** with verbs: *Ich mag Tee* but *Ich trinke gern Tee*. Both mean you like tea.',
    '**möchten** is a wish, not a like: *Ich möchte ein Eis* = I would like an ice cream (now). *Ich esse gern Eis* = I like ice cream (in general).',
    'The comparative of gern is **lieber**, never *gerner*. The superlative is **am liebsten**, never *am gernsten*.',
    'With a separable verb, gern sits between verb and prefix: *Ich stehe gern früh auf*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-19-gern-lieber-ex01',
      prompt: 'How do you say "I like reading" in German?',
      options: ['Ich mag lesen.', 'Ich lese gern.', 'Ich möchte lesen.'],
      answer: 1,
      explanation: 'An activity (a verb) takes gern: Ich lese gern. Ich möchte lesen means I would like to read now.',
    },
    {
      type: 'fill',
      id: 'a1-19-gern-lieber-ex02',
      prompt: 'Wir spielen ___ Fußball. (like)',
      answer: ['gern', 'gerne'],
      explanation: 'gern comes after the verb and before the object. gerne is also correct.',
    },
    {
      type: 'fill',
      id: 'a1-19-gern-lieber-ex03',
      prompt: 'Ich ___ Schokolade. (mögen)',
      answer: ['mag'],
      explanation: 'Schokolade is a noun, so you need mögen. The ich-form is mag (irregular, no -e).',
    },
    {
      type: 'order',
      id: 'a1-19-gern-lieber-ex04',
      prompt: 'Build the sentence: "She likes drinking tea."',
      words: ['gern', 'Tee.', 'trinkt', 'Sie'],
      answer: ['Sie trinkt gern Tee.'],
      explanation: 'Subject, verb, gern, then the object: Sie trinkt gern Tee.',
    },
    {
      type: 'mc',
      id: 'a1-19-gern-lieber-ex05',
      prompt: 'Complete: "Ich esse ___ Fisch." (I don\'t like eating fish.)',
      options: ['kein gern', 'gern nicht', 'nicht gern'],
      answer: 2,
      explanation: 'The negative is nicht gern, with nicht in front: Ich esse nicht gern Fisch.',
    },
    {
      type: 'match',
      id: 'a1-19-gern-lieber-ex06',
      prompt: 'Match the German form with its English meaning.',
      pairs: [
        ['gern', 'like (doing)'],
        ['lieber', 'prefer, would rather'],
        ['am liebsten', 'like most of all'],
        ['mögen', 'like (a thing or person)'],
        ['möchten', 'would like (a wish)'],
      ],
      explanation: 'gern, lieber, am liebsten are the three steps for activities; mögen is for nouns; möchten is a polite wish.',
    },
    {
      type: 'fill',
      id: 'a1-19-gern-lieber-ex07',
      prompt: 'Ich trinke lieber Kaffee ___ Tee. (than)',
      answer: ['als'],
      explanation: 'A comparison with lieber uses als, like better ... than in English.',
    },
    {
      type: 'order',
      id: 'a1-19-gern-lieber-ex08',
      prompt: 'Build the sentence: "Most of all I like swimming."',
      words: ['schwimme', 'ich.', 'liebsten', 'Am'],
      answer: ['Am liebsten schwimme ich.'],
      explanation: 'Am liebsten takes position one, so the verb comes second and the subject ich moves after it.',
    },
    {
      type: 'mc',
      id: 'a1-19-gern-lieber-ex09',
      prompt: 'Which sentence means "I would like a tea, please" (a wish right now)?',
      options: ['Ich trinke gern Tee, bitte.', 'Ich mag Tee, bitte.', 'Ich möchte einen Tee, bitte.'],
      answer: 2,
      explanation: 'möchten expresses a wish right now. gern and mögen describe what you like in general.',
    },
    {
      type: 'fill',
      id: 'a1-19-gern-lieber-ex10',
      prompt: 'Fährst du ___ Rad oder gehst du lieber zu Fuß? (prefer)',
      answer: ['lieber'],
      explanation: 'A question offering two choices uses lieber ... oder. lieber is the comparative of gern.',
    },
    {
      type: 'translate',
      id: 'a1-19-gern-lieber-ex11',
      prompt: 'Translate: "We like cooking."',
      answer: ['Wir kochen gern.', 'Wir kochen gerne.'],
      hint: 'kochen = to cook',
      explanation: 'No "like" verb is needed: conjugate kochen and add gern.',
    },
    {
      type: 'translate',
      id: 'a1-19-gern-lieber-ex12',
      prompt: 'Translate: "He prefers tea to coffee."',
      answer: ['Er trinkt lieber Tee als Kaffee.', 'Er mag lieber Tee als Kaffee.'],
      hint: 'trinken = to drink, als = than',
      explanation: 'Use lieber for "prefer" and als for "to / than". Er trinkt lieber Tee als Kaffee is the most natural version.',
    },
  ],
};

export default topic;
