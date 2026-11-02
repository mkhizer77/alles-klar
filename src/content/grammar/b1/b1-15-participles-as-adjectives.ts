import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-15-participles-as-adjectives',
  level: 'B1',
  unit: 6,
  order: 20,
  title: 'Partizip I as an adjective: der laufende Hund',
  germanTerm: 'Partizip I als Adjektiv',
  tags: ['participles', 'adjectives', 'declension', 'Partizip I'],
  summary: 'The Partizip I (laufend = running) is the infinitive + d; put it in front of a noun with a normal adjective ending to say what the noun is doing: der laufende Hund.',
  steps: [
    {
      title: 'What the Partizip I is for',
      text: `
This is how you describe a thing by **what it is doing**, in one word instead of a whole clause: *der **laufende** Hund* = *der Hund, der läuft* (the dog that is running).

A **participle** (*Partizip*) is a verb form that can behave like an adjective. The **Partizip I** (*Partizip Präsens*, the "-ing" form) describes something that is **happening now**.
`,
      examples: [
        { de: 'Der laufende Hund ist schnell.', en: 'The running dog is fast. (the dog that is running)' },
        { de: 'Das schlafende Kind sitzt im Auto.', en: 'The sleeping child is sitting in the car.' },
      ],
    },
    {
      title: 'How to form it: infinitive + d',
      text: `
Take the **infinitive** (the dictionary form) and add **-d**: *laufen → laufen**d***, *lachen → lachen**d***, *schlafen → schlafen**d***. There are no exceptions.

| infinitive | Partizip I | with a noun |
|---|---|---|
| laufen | laufend | das laufend**e** Kind |
| schlafen | schlafend | der schlafend**e** Mann |
| kochen | kochend | das kochend**e** Wasser |
| lachen | lachend | die lachend**en** Kinder |
`,
      examples: [
        { de: 'Das kochende Wasser ist heiß.', en: 'The boiling water is hot. (kochen + d)' },
        { de: 'Die lachenden Kinder spielen im Garten.', en: 'The laughing children are playing in the garden. (lachen + d)' },
        { de: 'Ein weinendes Kind sitzt im Bus.', en: 'A crying child is sitting in the bus. (weinen + d)' },
      ],
    },
    {
      title: 'The meaning: which is …ing',
      text: `
The meaning is **active** and **ongoing**: the noun is doing the action right now. *Die **wartenden** Gäste* are the guests **who are waiting**.

You can always turn it back into a relative clause (a "who / which" clause) with the present tense: *die Gäste, die warten*. That is a good check when you read a text.
`,
      examples: [
        { de: 'Die wartenden Gäste sind müde.', en: 'The waiting guests are tired. (= die Gäste, die warten)' },
        { de: 'Der fahrende Zug ist sehr laut.', en: 'The moving train is very loud. (= der Zug, der fährt)' },
        { de: 'Das steigende Interesse freut uns.', en: 'The growing interest pleases us. (= das Interesse, das steigt)' },
      ],
    },
    {
      title: 'The endings are the adjective endings',
      text: `
Nothing new here: in front of a noun the participle takes the ending an **adjective** would take in that position. Look at the article, the gender and the case, as always.

| | definite | indefinite |
|---|---|---|
| Nominative, masculine | der laufend**e** Hund | ein laufend**er** Hund |
| Accusative, masculine | den laufend**en** Hund | einen laufend**en** Hund |
| Dative, masculine | dem laufend**en** Hund | einem laufend**en** Hund |
| Nominative, plural | die lachend**en** Kinder | lachend**e** Kinder |
`,
      examples: [
        { de: 'Ich spreche mit dem schlafenden Mann.', en: 'I am talking to the sleeping man. (mit + Dative: -en)' },
        { de: 'Siehst du den laufenden Hund?', en: 'Do you see the running dog? (Accusative masculine: -en)' },
        { de: 'Ein singender Mann steht vor der Tür.', en: 'A singing man is standing at the door. (ein + masculine: -er)' },
      ],
    },
    {
      title: 'Without a noun: no ending',
      text: `
Without a noun, the Partizip I describes **how** something is done, like an adverb. Then it has **no ending**: *Sie kam **lachend** ins Zimmer.* (She came into the room laughing.)

The next topic shows the other participle, the **Partizip II**, which describes something **finished**: *die gekochte Suppe*.
`,
      examples: [
        { de: 'Sie kam lachend ins Zimmer.', en: 'She came into the room laughing. (no noun: no ending)' },
        { de: 'Er ging singend nach Hause.', en: 'He went home singing.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-07-adjective-endings-definite', note: 'Participles in front of a noun take exactly these adjective endings.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'ein laufender Hund, einen laufenden Hund: the endings after ein-words.' },
    { topicId: 'a2-23-relative-clauses-nom-acc', note: 'der laufende Hund = der Hund, der läuft: a Partizip I replaces a relative clause.' },
    { topicId: 'b1-15b-partizip-2-adjectives', note: 'The sibling topic: Partizip II in front of a noun means finished (die gekochte Suppe).' },
    { topicId: 'b1-16-adjective-declension-review', note: 'The full ending tables that participles share with ordinary adjectives.' },
  ],
  edgeCases: [
    'Partizip I is always **infinitive + d**: *laufend*, never *laufing*. Then add the adjective ending: *laufend + e*.',
    'Used without a noun, to say **how** something is done, the participle takes **no ending**: *Er ging **singend** nach Hause*.',
    'Some Partizip I forms have become normal adjectives with their own meaning: *spannend* (exciting), *anstrengend* (tiring), *folgend* (following).',
    'Do not confuse **kochend** (boiling, happening now) with **gekocht** (boiled, finished). The finished form is the Partizip II, the next topic.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex01',
      prompt: 'Complete: "Der ___ Hund ist schnell." (laufen, the dog that is running)',
      options: ['laufende', 'gelaufene', 'laufend'],
      answer: 0,
      explanation: 'Happening now → Partizip I: laufen + d = laufend, plus the ending -e after der.',
    },
    {
      type: 'match',
      id: 'b1-15-participles-as-adjectives-ex02',
      prompt: 'Match each infinitive with its Partizip I.',
      pairs: [
        ['lachen', 'lachend'],
        ['singen', 'singend'],
        ['weinen', 'weinend'],
        ['fahren', 'fahrend'],
        ['kochen', 'kochend'],
      ],
      explanation: 'Partizip I = infinitive + d, with no exceptions.',
    },
    {
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex03',
      prompt: 'Das ___ Kind sitzt im Auto. (schlafen, the child that is sleeping)',
      answer: ['schlafende'],
      explanation: 'Partizip I: schlafen + d, then -e after das in the Nominative.',
    },
    {
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex04',
      prompt: 'Vorsicht, das ___ Wasser ist heiß! (kochen, the water that is boiling)',
      answer: ['kochende'],
      explanation: 'The water is boiling right now → Partizip I kochend, plus -e after das.',
    },
    {
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex05',
      prompt: 'What does "die wartenden Gäste" mean?',
      options: ['the guests who are waiting', 'the guests who have waited', 'the guests who were expected'],
      answer: 0,
      explanation: 'Partizip I is active and ongoing: die Gäste, die warten = the guests who are waiting.',
    },
    {
      type: 'order',
      id: 'b1-15-participles-as-adjectives-ex06',
      prompt: 'Build the sentence: "The laughing children are playing in the garden."',
      words: ['Garten.', 'spielen', 'Kinder', 'Die', 'im', 'lachenden'],
      answer: ['Die lachenden Kinder spielen im Garten.'],
      explanation: 'Plural after die → lachenden (-en). Then verb second, place at the end.',
    },
    {
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex07',
      prompt: 'Complete: "Ich spreche mit dem ___ Mann." (schlafen)',
      options: ['schlafenden', 'schlafende', 'schlafender'],
      answer: 0,
      explanation: 'mit + Dative, masculine after dem → -en: schlafenden.',
    },
    {
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex08',
      prompt: 'Ein ___ Kind sitzt im Bus. (weinen)',
      answer: ['weinendes'],
      explanation: 'Partizip I weinend. ein shows nothing in the neuter Nominative, so the participle takes -es.',
    },
    {
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex09',
      prompt: 'In which sentence does the participle describe how something is done (no noun, no ending)?',
      options: ['Sie kam lachend ins Zimmer.', 'Die lachende Frau ist meine Tante.', 'Das lachende Kind spielt.'],
      answer: 0,
      explanation: 'lachend without a noun and without an ending tells you how she came. In the other sentences it describes a noun and takes an ending.',
    },
    {
      type: 'translate',
      id: 'b1-15-participles-as-adjectives-ex10',
      prompt: 'Translate: "The sleeping cat is lying on the sofa."',
      answer: ['Die schlafende Katze liegt auf dem Sofa.'],
      hint: 'schlafen = to sleep, die Katze = cat, liegen = to lie, das Sofa',
      explanation: 'Partizip I schlafend + -e after die (feminine Nominative). auf + Dative for the place: auf dem Sofa.',
    },
  ],
};

export default topic;
