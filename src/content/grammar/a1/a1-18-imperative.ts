import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-18-imperative',
  level: 'A1',
  unit: 3,
  order: 18,
  title: 'The imperative: giving instructions',
  germanTerm: 'Imperativ',
  tags: ['verbs', 'imperative', 'commands', 'requests', 'du ihr Sie'],
  summary: 'The imperative is the form for instructions and requests; it has three versions, one each for du, ihr and Sie, and the verb always comes first.',
  explanation: `
### What the imperative is

The **imperative** (*Imperativ*) is the verb form for telling someone to do something: *Come in! Sit down! Please wait.* It covers orders, instructions, recipes, advice and polite requests. Because German has three words for *you*, it has **three imperative forms**. The verb always stands **first** in the sentence, and the sentence often ends with an exclamation mark.

### The three forms

| who you speak to | how to build it | kommen | warten |
|---|---|---|---|
| **du** (one friend) | du form **without -st** and **without du** | Komm! | Warte! |
| **ihr** (several friends) | ihr form **without ihr** | Kommt! | Wartet! |
| **Sie** (formal) | infinitive + **Sie** (verb first) | Kommen Sie! | Warten Sie! |

**du**: take *du kommst*, remove *-st* and the pronoun: **Komm!** This works for almost every verb: *du gehst → Geh!*, *du machst → Mach!*, *du trinkst → Trink!* Older books add an *-e* (*Komme!*, *Gehe!*); today that sounds formal or poetic. The *-e* is only needed when the stem ends in **-t, -d** or a consonant cluster, to make it pronounceable: *Warte! Arbeite! Öffne!*

**ihr**: simply the normal *ihr* form without the pronoun: *ihr kommt → Kommt!*, *ihr wartet → Wartet!* No changes at all.

**Sie**: the infinitive, then *Sie*. It looks like a question with the verb first, but the voice goes down: *Kommen Sie bitte herein.* Always keep *Sie*; dropping it is wrong.

### Irregular verbs in the du form

Verbs with the **e → i / ie** change keep the change in the du imperative, because it is built from the du form:

| infinitive | du form | imperative |
|---|---|---|
| sprechen | du sprichst | **Sprich** lauter! |
| nehmen | du nimmst | **Nimm** das! |
| lesen | du liest | **Lies** das! |
| essen | du isst | **Iss**! |
| geben | du gibst | **Gib** mir das Buch! |

Verbs with the **a → ä** change **lose** the umlaut in the imperative: *du fährst → **Fahr** langsam!*, *du schläfst → **Schlaf** gut!*, *du läufst → **Lauf**!*

### sein and haben

| | du | ihr | Sie |
|---|---|---|---|
| sein | **Sei** ruhig! | **Seid** ruhig! | **Seien Sie** ruhig! |
| haben | **Hab** Geduld! | **Habt** Geduld! | **Haben Sie** Geduld! |

*Sei* and *Seien Sie* are special forms you need to memorise. *Seien Sie so nett* (be so kind) is a useful polite phrase.

### Separable verbs

The prefix goes to the end, as always: *aufstehen → **Steh** auf! **Steht** auf! **Stehen Sie** auf!*; *mitkommen → **Komm** mit!*

### Making it polite

A bare imperative can sound harsh. German softens it with **bitte** (please), **mal** (just, a little) or **doch**, in the middle or at the end:

- Komm **bitte** herein. – Please come in.
- Warte **mal**! – Just wait a second.
- Setzen Sie sich **doch**. – Do sit down.

Even more polite is a question with a modal: *Können Sie mir bitte helfen?* or *Könnten Sie …?*

### Why it matters

You hear the imperative constantly: on signs (*Drücken* – push, *Ziehen* – pull), in recipes, in directions (*Gehen Sie geradeaus*), from teachers and in every request. Knowing which of the three forms to use, and softening it with *bitte* or *mal*, keeps you from sounding rude.
`,
  examples: [
    { de: 'Komm bitte herein!', en: 'Please come in! (du: no -st, no pronoun)' },
    { de: 'Wartet hier!', en: 'Wait here! (ihr: normal ihr form without the pronoun)' },
    { de: 'Nehmen Sie Platz, bitte.', en: 'Please take a seat. (Sie: infinitive + Sie)' },
    { de: 'Sprich bitte langsamer.', en: 'Please speak more slowly. (e → i stays)' },
    { de: 'Fahr vorsichtig!', en: 'Drive carefully! (no umlaut in the imperative)' },
    { de: 'Sei nicht traurig.', en: 'Don\'t be sad. (sein → sei)' },
    { de: 'Steh auf!', en: 'Get up! (separable: prefix at the end)' },
    { de: 'Gehen Sie geradeaus und dann links.', en: 'Go straight ahead and then left. (directions, formal)' },
  ],
  connections: [
    { topicId: 'a1-05-present-tense-regular', note: 'The du and ihr imperatives are built from the present-tense du and ihr forms.' },
    { topicId: 'a1-15-irregular-present', note: 'The e → i / ie stem change survives in the du imperative; a → ä does not.' },
    { topicId: 'a1-16-separable-verbs', note: 'Separable prefixes go to the end of a command: Ruf an!' },
    { topicId: 'a1-02-greetings', note: 'The du / Sie decision from the first topic decides which imperative you use.' },
    { topicId: 'a1-17-modal-verbs', note: 'A question with können is the politest way to ask for something.' },
  ],
  edgeCases: [
    'The **du** imperative has **no -st** and **no pronoun**: *Komm!*, not *Kommst!* or *Komm du!* (unless for strong contrast).',
    '**a → ä** verbs drop the umlaut: *Fahr!*, *Schlaf!*, *Lauf!*. *Fähr!* is wrong. But **e → i** stays: *Sprich!*, *Nimm!*, *Lies!*',
    'Stems in **-t / -d** keep an **-e**: *Warte!*, *Arbeite!*, *Rede!*. *Wart!* is heard in speech but not written.',
    '**Sie** must stay in the formal imperative: *Kommen Sie!*, never just *Kommen!* (that is a sign or an infinitive, not a request to a person).',
    '**sein** is irregular: *Sei!*, *Seid!*, *Seien Sie!*. *Bist!* does not exist.',
    'An infinitive alone is used for general instructions on signs and in recipes: *Nicht rauchen! Zwiebeln klein schneiden.* It is not addressed to one person.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-18-imperative-ex01',
      prompt: '___ bitte! (kommen – du)',
      answer: ['Komm'],
      explanation: 'Take du kommst, drop -st and the pronoun: Komm!',
    },
    {
      type: 'fill',
      id: 'a1-18-imperative-ex02',
      prompt: '___ Sie bitte hier. (warten – formal)',
      answer: ['Warten'],
      explanation: 'The Sie imperative is the infinitive followed by Sie: Warten Sie!',
    },
    {
      type: 'fill',
      id: 'a1-18-imperative-ex03',
      prompt: '___ leise, Kinder! (sein – ihr)',
      answer: ['Seid'],
      explanation: 'The ihr imperative of sein is Seid, the same as ihr seid without the pronoun.',
    },
    {
      type: 'mc',
      id: 'a1-18-imperative-ex04',
      prompt: 'What is the du imperative of "sprechen"?',
      options: ['Sprech!', 'Sprich!', 'Sprichst!'],
      answer: 1,
      explanation: 'The e → i change stays because the form comes from du sprichst; then -st is removed: Sprich!',
    },
    {
      type: 'mc',
      id: 'a1-18-imperative-ex05',
      prompt: 'What is the du imperative of "fahren"?',
      options: ['Fähr!', 'Fahr!', 'Fahre du!'],
      answer: 1,
      explanation: 'a → ä verbs lose the umlaut in the imperative: Fahr! The pronoun du is not used.',
    },
    {
      type: 'match',
      id: 'a1-18-imperative-ex06',
      prompt: 'Match the command with the person it is addressed to.',
      pairs: [
        ['Komm mit!', 'one friend (du)'],
        ['Kommt mit!', 'several friends (ihr)'],
        ['Kommen Sie mit!', 'formal (Sie)'],
      ],
      explanation: 'du: bare stem; ihr: -t ending; Sie: infinitive + Sie. The separable prefix mit goes to the end in all three.',
    },
    {
      type: 'order',
      id: 'a1-18-imperative-ex07',
      prompt: 'Build the formal request: "Please take a seat."',
      words: ['bitte', 'Sie', 'Nehmen', 'Platz.'],
      answer: ['Nehmen Sie bitte Platz.'],
      explanation: 'Verb first (Nehmen), then Sie, then the rest. Platz nehmen = to take a seat.',
    },
    {
      type: 'fill',
      id: 'a1-18-imperative-ex08',
      prompt: '___ bitte das Fenster! (öffnen – du)',
      answer: ['Öffne'],
      explanation: 'The stem öffn- ends in a consonant cluster, so the du imperative keeps -e: Öffne!',
    },
    {
      type: 'mc',
      id: 'a1-18-imperative-ex09',
      prompt: 'Which is the correct du imperative of "aufstehen"?',
      options: ['Aufsteh!', 'Steh auf!', 'Stehst auf!'],
      answer: 1,
      explanation: 'The separable prefix goes to the end and -st is removed: Steh auf!',
    },
    {
      type: 'mc',
      id: 'a1-18-imperative-ex10',
      prompt: 'Which sentence is the most polite way to ask a stranger for help?',
      options: ['Hilf mir!', 'Helfen Sie mir!', 'Können Sie mir bitte helfen?'],
      answer: 2,
      explanation: 'A question with können and bitte is softer than any imperative. Hilf mir is du and abrupt; Helfen Sie mir is correct but blunt.',
    },
    {
      type: 'translate',
      id: 'a1-18-imperative-ex11',
      prompt: 'Translate: "Read the text, please." (one friend)',
      answer: ['Lies den Text, bitte.', 'Lies bitte den Text.', 'Lies den Text, bitte!', 'Lies bitte den Text!'],
      hint: 'lesen = to read, der Text',
      explanation: 'lesen has e → ie in the du form (du liest), so the imperative is Lies. The object den Text follows.',
    },
    {
      type: 'translate',
      id: 'a1-18-imperative-ex12',
      prompt: 'Translate: "Be quiet!" (formal)',
      answer: ['Seien Sie ruhig!', 'Seien Sie ruhig.', 'Seien Sie leise!', 'Seien Sie leise.'],
      hint: 'sein = to be, ruhig / leise = quiet',
      explanation: 'The formal imperative of sein is the special form Seien Sie.',
    },
  ],
};

export default topic;
