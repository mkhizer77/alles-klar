import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-15-participles-as-adjectives',
  level: 'B1',
  unit: 6,
  order: 15,
  title: 'Participles as adjectives (der laufende Hund, die gekochte Suppe)',
  germanTerm: 'Partizipien als Adjektive',
  tags: ['participles', 'adjectives', 'declension', 'Partizip I', 'Partizip II'],
  summary: 'Partizip I (laufend = running) and Partizip II (gekocht = cooked) can stand in front of a noun like adjectives and take the normal adjective endings.',
  explanation: `
### What it is for

This is how you describe a thing by what it is doing or by what has been done to it, in one word instead of a whole clause:

- der **laufende** Hund – *the running dog* (the dog that is running)
- die **gekochte** Suppe – *the cooked soup* (the soup that has been cooked)

A **participle** (*Partizip*) is a verb form that can behave like an adjective. German has two:

- **Partizip I** (*Partizip Präsens*, "present participle"): *laufend* (running), *lachend* (laughing). It describes something that is **happening now**.
- **Partizip II** (*Partizip Perfekt*, "past participle"): *gekocht* (cooked), *geschrieben* (written). It describes something **finished**, usually something that was done to the noun.

Put either one in front of a noun and it works exactly like an adjective, with the usual **adjective endings**.

### Partizip I: how to form it

**Infinitive + d**: laufen → laufen**d**, lachen → lachen**d**, schlafen → schlafen**d**. There are no exceptions.

| infinitive | Partizip I | with a noun |
|---|---|---|
| laufen | laufend | das laufend**e** Kind |
| schlafen | schlafend | der schlafend**e** Mann |
| kochen | kochend | das kochend**e** Wasser |
| lachen | lachend | die lachend**en** Kinder |

The meaning is active and ongoing: *das kochende Wasser* = the water that **is boiling**. In English this is the "-ing" form.

### Partizip II: the same form as in the Perfekt

You already know the Partizip II from the Perfekt: *gekocht, gebaut, geschrieben, zerbrochen, gebraucht*. In front of a noun it means **finished** and (for verbs with an object) **passive**:

| infinitive | Partizip II | with a noun |
|---|---|---|
| kochen | gekocht | die gekocht**e** Suppe (the soup that has been cooked) |
| gebrauchen | gebraucht | ein gebraucht**es** Auto (a used car) |
| schreiben | geschrieben | der geschrieben**e** Test (the written test) |
| zerbrechen | zerbrochen | die zerbrochen**en** Fenster (the broken windows) |

For verbs with *sein* the meaning is active but finished: *der angekommene Zug* = the train that **has arrived**.

### Same verb, two meanings

| Partizip I (happening) | Partizip II (done) |
|---|---|
| das **kochende** Wasser – the boiling water | das **gekochte** Wasser – the boiled water |
| der **schreibende** Student – the student who is writing | der **geschriebene** Brief – the letter that was written |
| die **wachsende** Stadt – the growing city | die **gewachsene** Stadt – the city that has grown |

### The endings

Nothing new: the participle takes the ending the adjective would take in that position.

| | definite | indefinite | no article |
|---|---|---|---|
| Nom. m | der laufend**e** Hund | ein laufend**er** Hund | laufend**er** Hund |
| Acc. m | den laufend**en** Hund | einen laufend**en** Hund | laufend**en** Hund |
| Dat. m | dem laufend**en** Hund | einem laufend**en** Hund | laufend**em** Hund |
| Nom. pl | die lachend**en** Kinder | – lachend**e** Kinder | lachend**e** Kinder |

### Participles without a noun

Without a noun, a participle can describe **how** something is done; then it has no ending: *Sie kam **lachend** ins Zimmer.* – *She came into the room laughing.*

You may also see longer groups in newspapers, such as *das **vor zwei Jahren gebaute** Haus* (the house built two years ago). They mean the same as a relative clause (*das Haus, das vor zwei Jahren gebaut wurde*). At B1 you only need to recognise them, not write them.

### Why it matters

Participles as adjectives are everywhere in newspapers and official texts (*die geplante Reform*, *das steigende Interesse*, *die betroffenen Familien*). Understanding them makes B1 reading texts much easier, and using *gebraucht, gekocht, folgend* correctly in front of nouns is expected in writing.
`,
  examples: [
    { de: 'Der laufende Hund ist schnell.', en: 'The running dog is fast. (Partizip I + -e)' },
    { de: 'Die gekochte Suppe schmeckt gut.', en: 'The cooked soup tastes good. (Partizip II + -e)' },
    { de: 'Das schlafende Kind sitzt im Auto.', en: 'The sleeping child is sitting in the car.' },
    { de: 'Ich habe ein gebrauchtes Auto gekauft.', en: 'I bought a used car. (ein + neuter → -es)' },
    { de: 'Die zerbrochenen Fenster müssen repariert werden.', en: 'The broken windows have to be repaired. (plural after die → -en)' },
    { de: 'Sie kam lachend ins Zimmer.', en: 'She came into the room laughing. (participle without a noun, no ending)' },
  ],
  connections: [
    { topicId: 'a1-31-perfekt-haben', note: 'The Partizip II forms (gekocht, geschrieben) are the ones you learned for the Perfekt.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Participles in front of a noun take exactly these adjective endings.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'ein gebrauchtes Auto, einen laufenden Hund: the endings after ein-words.' },
    { topicId: 'b1-06-passive-present-past', note: 'A Partizip II in front of a noun often has passive meaning: die gekochte Suppe = die Suppe, die gekocht wurde.' },
    { topicId: 'b1-16-adjective-declension-review', note: 'The full ending table that participles share with ordinary adjectives.' },
  ],
  edgeCases: [
    'Partizip I is always **infinitive + d**: *laufend*, never *laufing*. Then add the adjective ending: *laufend + e*.',
    '*kochend* (boiling, happening) and *gekocht* (boiled, done) are different words. Choose by meaning: is it happening or finished?',
    'Partizip II of **inseparable** verbs has no ge-: *die **bezahlte** Rechnung*, *das **zerbrochene** Glas*.',
    'Used without a noun, to say **how** something is done, the participle takes **no ending**: *Er ging **singend** nach Hause*.',
    'Some participles have become normal adjectives with their own meaning: *spannend* (exciting), *bekannt* (well-known), *anstrengend* (tiring), *verheiratet* (married).',
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
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex02',
      prompt: 'Die ___ Suppe schmeckt gut. (kochen, the soup that has been cooked)',
      answer: ['gekochte'],
      explanation: 'Finished → Partizip II gekocht, plus -e after die.',
    },
    {
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex03',
      prompt: 'Das ___ Kind sitzt im Auto. (schlafen, the child that is sleeping)',
      answer: ['schlafende'],
      explanation: 'Partizip I: schlafen + d, then -e after das in the Nominative.',
    },
    {
      type: 'match',
      id: 'b1-15-participles-as-adjectives-ex04',
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
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex05',
      prompt: 'Which phrase means "the boiled water" (water that has been boiled)?',
      options: ['das gekochte Wasser', 'das kochende Wasser', 'das kochen Wasser'],
      answer: 0,
      explanation: 'Finished action → Partizip II gekocht. das kochende Wasser means the water that is boiling right now.',
    },
    {
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex06',
      prompt: 'Ich habe ein ___ Auto gekauft. (gebrauchen, used)',
      answer: ['gebrauchtes'],
      explanation: 'Partizip II gebraucht + the ending after ein for a neuter noun in the Accusative: -es.',
    },
    {
      type: 'order',
      id: 'b1-15-participles-as-adjectives-ex07',
      prompt: 'Build the sentence: "The laughing children are playing in the garden."',
      words: ['Garten.', 'spielen', 'Kinder', 'Die', 'im', 'lachenden'],
      answer: ['Die lachenden Kinder spielen im Garten.'],
      explanation: 'Plural after die → lachenden (-en). Then verb second, place at the end.',
    },
    {
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex08',
      prompt: 'Complete: "Ich spreche mit dem ___ Mann." (schlafen)',
      options: ['schlafenden', 'schlafende', 'schlafender'],
      answer: 0,
      explanation: 'mit + Dative, masculine after dem → -en: schlafenden.',
    },
    {
      type: 'fill',
      id: 'b1-15-participles-as-adjectives-ex09',
      prompt: 'Die ___ Fenster müssen repariert werden. (zerbrechen, broken)',
      answer: ['zerbrochenen'],
      explanation: 'Partizip II zerbrochen (inseparable verb, no ge-) + plural ending -en after die.',
    },
    {
      type: 'translate',
      id: 'b1-15-participles-as-adjectives-ex10',
      prompt: 'Translate: "The written test is difficult."',
      answer: ['Der geschriebene Test ist schwer.', 'Der geschriebene Test ist schwierig.', 'Die geschriebene Prüfung ist schwer.', 'Die geschriebene Prüfung ist schwierig.'],
      hint: 'schreiben (geschrieben) = to write, der Test / die Prüfung = test, schwer / schwierig = difficult',
      explanation: 'Partizip II geschrieben + -e after der (masculine Nominative) or after die (feminine).',
    },
    {
      type: 'mc',
      id: 'b1-15-participles-as-adjectives-ex11',
      prompt: 'In which sentence does the participle describe how something is done (no noun, no ending)?',
      options: ['Sie kam lachend ins Zimmer.', 'Die lachende Frau ist meine Tante.', 'Das lachende Kind spielt.'],
      answer: 0,
      explanation: 'lachend without a noun and without an ending tells you how she came. In the other sentences it describes a noun and takes an ending.',
    },
  ],
};

export default topic;
