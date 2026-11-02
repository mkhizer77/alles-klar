import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-19-gern-lieber',
  level: 'A1',
  unit: 3,
  order: 23,
  title: 'gern, lieber, am liebsten: likes and preferences',
  germanTerm: 'Vorlieben',
  tags: ['adverbs', 'likes', 'preferences', 'gern', 'mögen'],
  summary: 'gern is the little word you add to a verb to say you like doing something; lieber and am liebsten turn it into "prefer" and "like most of all".',
  steps: [
    {
      title: 'verb + gern = I like doing it',
      text: `
In English you say *I like swimming*. German has no verb for "like doing". It keeps the normal verb and adds the small word **gern** (gladly, with pleasure). *gern* is an **adverb** (*Adverb*, a word that says how you do something).

So the recipe is: **subject + verb + gern**. The verb stays exactly as it is.
`,
      examples: [
        { de: 'Ich schwimme gern.', en: 'I like swimming. (literally: I swim gladly)' },
        { de: 'Er kocht gern.', en: 'He likes cooking.' },
        { de: 'Wir reisen gern.', en: 'We like travelling.' },
      ],
    },
    {
      title: 'Where gern goes',
      text: `
*gern* comes **after the verb**. If there is an object (a thing), *gern* usually stands **before** that object.

To say you do **not** like something, put *nicht* in front: **nicht gern**.
`,
      examples: [
        { de: 'Ich trinke gern Kaffee.', en: 'I like drinking coffee. (gern before the object)' },
        { de: 'Sie liest gern Bücher.', en: 'She likes reading books.' },
        { de: 'Ich stehe nicht gern früh auf.', en: "I don't like getting up early. (nicht gern)" },
      ],
    },
    {
      title: 'lieber: prefer',
      text: `
*gern* has two more forms, like *good – better – best* in English. The first is **lieber** (prefer, would rather).

To compare two things, use **als** (than): *lieber Tee **als** Kaffee*. A question with *lieber* often offers two choices with **oder** (or).
`,
      examples: [
        { de: 'Ich spiele lieber Tennis.', en: 'I prefer playing tennis.' },
        { de: 'Ich trinke lieber Tee als Kaffee.', en: 'I prefer tea to coffee. (lieber … als)' },
        { de: 'Trinkst du lieber Tee oder Kaffee?', en: 'Do you prefer tea or coffee? (lieber … oder)' },
      ],
    },
    {
      title: 'am liebsten: most of all',
      text: `
The top step is **am liebsten** (like most of all). The three steps together:

| form | meaning |
|---|---|
| **gern** | like (doing) |
| **lieber** | prefer, would rather |
| **am liebsten** | like most of all |

*am liebsten* can start the sentence; then the verb still comes second.
`,
      examples: [
        { de: 'Ich spiele am liebsten Schach.', en: 'Most of all I like playing chess.' },
        { de: 'Am liebsten schlafe ich lange.', en: 'Most of all I like sleeping in. (am liebsten first, verb second)' },
        { de: 'Was isst du am liebsten?', en: 'What do you like eating most?' },
      ],
    },
    {
      title: 'gern, mögen and möchten',
      text: `
Three words look like "like". Keep them apart: **gern** goes with a **verb** (an activity). **mögen** (*ich mag*) goes with a **noun** (a thing or person). **möchten** (*ich möchte*) is a wish right now: "would like".

*mögen* is irregular: *ich mag, du magst, er mag, wir mögen, ihr mögt, sie mögen*.
`,
      examples: [
        { de: 'Ich tanze gern.', en: 'I like dancing. (gern + verb)' },
        { de: 'Ich mag Musik.', en: 'I like music. (mögen + noun)' },
        { de: 'Ich möchte einen Kaffee, bitte.', en: 'I would like a coffee, please. (möchten: a wish now)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-05-present-tense-regular', note: 'gern simply attaches to a normally conjugated present-tense verb.' },
    { topicId: 'a1-17b-modal-verbs-2', note: 'möchten (would like) is a modal verb; do not confuse it with gern and mögen.' },
    { topicId: 'a1-06-verb-second', note: 'When am liebsten or lieber starts the sentence, the verb still stays in second position.' },
    { topicId: 'a1-35-comparative-basics', note: 'gern – lieber – am liebsten is an irregular comparison, like gut – besser – am besten.' },
  ],
  edgeCases: [
    'There is no verb "to like doing" in German. *Ich like schwimmen* and *Ich mag schwimmen* are wrong; say **Ich schwimme gern**.',
    '**mögen** goes with nouns, **gern** with verbs: *Ich mag Tee* but *Ich trinke gern Tee*. Both mean you like tea.',
    '**möchten** is a wish, not a like: *Ich möchte ein Eis* = I would like an ice cream (now). *Ich esse gern Eis* = I like ice cream (in general).',
    'The comparative of gern is **lieber**, never *gerner*. The superlative is **am liebsten**, never *am gernsten*.',
    'With a separable verb, gern sits between verb and prefix: *Ich stehe gern früh auf*.',
    '**gern** and **gerne** are both correct; *gerne* is a softer, more spoken variant. On its own, *Gern!* means "Gladly!" or "You\'re welcome!"',
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
