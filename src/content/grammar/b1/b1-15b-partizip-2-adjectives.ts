import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-15b-partizip-2-adjectives',
  level: 'B1',
  unit: 6,
  order: 21,
  title: 'Partizip II as an adjective: die gekochte Suppe',
  germanTerm: 'Partizip II als Adjektiv',
  tags: ['participles', 'adjectives', 'declension', 'Partizip II', 'passive'],
  summary: 'The Partizip II you know from the Perfekt (gekocht, geschrieben) can stand in front of a noun with an adjective ending and means finished: die gekochte Suppe = the soup that has been cooked.',
  steps: [
    {
      title: 'What the Partizip II is for',
      text: `
This is how you describe a thing by **what has been done to it**, in one word: *die **gekochte** Suppe* = *die Suppe, die gekocht wurde* (the soup that has been cooked).

The **Partizip II** (*Partizip Perfekt*, the "past participle") is the same form you use in the Perfekt: *gekocht, gebaut, geschrieben, zerbrochen*. In front of a noun it works like an adjective.
`,
      examples: [
        { de: 'Die gekochte Suppe schmeckt gut.', en: 'The cooked soup tastes good. (gekocht, as in ich habe gekocht)' },
        { de: 'Ich habe ein gebrauchtes Auto gekauft.', en: 'I bought a used car. (gebraucht = used)' },
        { de: 'Der geschriebene Brief liegt auf dem Tisch.', en: 'The written letter is lying on the table.' },
      ],
    },
    {
      title: 'The meaning: finished, and usually passive',
      text: `
For verbs with an object (Perfekt with *haben*), the Partizip II means **which has been …ed**: something was done to the noun. *Das **gebaute** Haus* = the house that **has been built**.

For verbs of movement and change (Perfekt with *sein*), it means **which has …ed**: the noun did it itself, and it is finished. *Der **angekommene** Zug* = the train that **has arrived**.
`,
      examples: [
        { de: 'Das neu gebaute Haus ist teuer.', en: 'The newly built house is expensive. (which has been built)' },
        { de: 'Die bezahlte Rechnung liegt im Ordner.', en: 'The paid bill is in the folder. (which has been paid)' },
        { de: 'Der angekommene Zug steht auf Gleis drei.', en: 'The train that has arrived is on platform three. (sein-verb: which has arrived)' },
      ],
    },
    {
      title: 'The endings are the adjective endings',
      text: `
Nothing new here: the Partizip II takes the ending an **adjective** would take after that article, in that gender and case.

| | definite | indefinite |
|---|---|---|
| Nominative, feminine | die gekocht**e** Suppe | eine gekocht**e** Suppe |
| Nominative, neuter | das gebraucht**e** Auto | ein gebraucht**es** Auto |
| Dative, masculine | dem geschrieben**en** Brief | einem geschrieben**en** Brief |
| Nominative, plural | die zerbrochen**en** Fenster | zerbrochen**e** Fenster |
`,
      examples: [
        { de: 'Die zerbrochenen Fenster müssen repariert werden.', en: 'The broken windows have to be repaired. (plural after die: -en)' },
        { de: 'Er fährt ein gebrauchtes Auto.', en: 'He drives a used car. (ein + neuter: -es)' },
        { de: 'Wir sprechen über den geplanten Umzug.', en: 'We are talking about the planned move. (über + Accusative: -en)' },
      ],
    },
    {
      title: 'Same verb, two meanings',
      text: `
From one verb you get two different words. The **Partizip I** says the action is **happening**; the **Partizip II** says it is **done**. Choose by meaning.

| Partizip I (happening) | Partizip II (done) |
|---|---|
| das **kochende** Wasser (boiling) | das **gekochte** Wasser (boiled) |
| der **schreibende** Student (who is writing) | der **geschriebene** Brief (which was written) |
| die **wachsende** Stadt (growing) | die **gewachsene** Stadt (which has grown) |

In newspapers you may also see longer groups like *das **vor zwei Jahren gebaute** Haus*. You only need to recognise them.
`,
      examples: [
        { de: 'Das kochende Wasser ist gefährlich.', en: 'The boiling water is dangerous. (happening now)' },
        { de: 'Das gekochte Wasser ist jetzt kalt.', en: 'The boiled water is cold now. (finished)' },
        { de: 'Die wachsende Stadt braucht neue Schulen.', en: 'The growing city needs new schools. (happening now)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-31-perfekt-haben', note: 'The Partizip II forms (gekocht, geschrieben) are the ones you learned for the Perfekt.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'A Partizip II in front of a noun takes exactly these adjective endings.' },
    { topicId: 'b1-06-passive-present-past', note: 'A Partizip II in front of a noun often has passive meaning: die gekochte Suppe = die Suppe, die gekocht wurde.' },
    { topicId: 'b1-15-participles-as-adjectives', note: 'The sibling topic: Partizip I (der laufende Hund) says the action is happening now.' },
    { topicId: 'b1-16-adjective-declension-review', note: 'The full ending tables that participles share with ordinary adjectives.' },
  ],
  edgeCases: [
    '*kochend* (boiling, happening) and *gekocht* (boiled, done) are different words. Choose by meaning: is it happening or finished?',
    'Partizip II of **inseparable** verbs has no ge-: *die **bezahlte** Rechnung*, *das **zerbrochene** Glas*. Separable verbs put ge- in the middle: *der **angekommene** Zug*.',
    'Some Partizip II forms have become normal adjectives with their own meaning: *bekannt* (well-known), *verheiratet* (married), *geöffnet* (open).',
    'Longer groups like *das **vor zwei Jahren gebaute** Haus* mean the same as a relative clause (*das Haus, das vor zwei Jahren gebaut wurde*). Recognise them; you do not need to write them.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-15b-partizip-2-adjectives-ex01',
      prompt: 'Die ___ Suppe schmeckt gut. (kochen, the soup that has been cooked)',
      answer: ['gekochte'],
      explanation: 'Finished → Partizip II gekocht, plus -e after die.',
    },
    {
      type: 'match',
      id: 'b1-15b-partizip-2-adjectives-ex02',
      prompt: 'Match each infinitive with its Partizip II.',
      pairs: [
        ['kochen', 'gekocht'],
        ['bauen', 'gebaut'],
        ['schreiben', 'geschrieben'],
        ['bezahlen', 'bezahlt'],
        ['ankommen', 'angekommen'],
      ],
      explanation: 'These are the Perfekt forms: ge- + -t for regular verbs, ge- + -en for strong verbs, no ge- for inseparable verbs like bezahlen.',
    },
    {
      type: 'mc',
      id: 'b1-15b-partizip-2-adjectives-ex03',
      prompt: 'Which phrase means "the boiled water" (water that has been boiled)?',
      options: ['das gekochte Wasser', 'das kochende Wasser', 'das kochen Wasser'],
      answer: 0,
      explanation: 'Finished action → Partizip II gekocht. das kochende Wasser means the water that is boiling right now.',
    },
    {
      type: 'fill',
      id: 'b1-15b-partizip-2-adjectives-ex04',
      prompt: 'Ich habe ein ___ Auto gekauft. (gebrauchen, used)',
      answer: ['gebrauchtes'],
      explanation: 'Partizip II gebraucht + the ending after ein for a neuter noun in the Accusative: -es.',
    },
    {
      type: 'fill',
      id: 'b1-15b-partizip-2-adjectives-ex05',
      prompt: 'Die ___ Rechnung liegt im Ordner. (bezahlen, paid)',
      answer: ['bezahlte'],
      explanation: 'bezahlen is inseparable, so the Partizip II has no ge-: bezahlt. Then -e after die.',
    },
    {
      type: 'mc',
      id: 'b1-15b-partizip-2-adjectives-ex06',
      prompt: 'What does "der angekommene Zug" mean?',
      options: ['the train that has arrived', 'the train that is arriving', 'the train that was expected'],
      answer: 0,
      explanation: 'ankommen forms its Perfekt with sein, so the Partizip II means which has arrived: active, but finished.',
    },
    {
      type: 'fill',
      id: 'b1-15b-partizip-2-adjectives-ex07',
      prompt: 'Die ___ Fenster müssen repariert werden. (zerbrechen, broken)',
      answer: ['zerbrochenen'],
      explanation: 'Partizip II zerbrochen (inseparable verb, no ge-) + plural ending -en after die.',
    },
    {
      type: 'mc',
      id: 'b1-15b-partizip-2-adjectives-ex08',
      prompt: 'Complete: "Vorsicht, das ___ Wasser ist heiß!" (the water that is boiling right now)',
      options: ['kochende', 'gekochte', 'gekocht'],
      answer: 0,
      explanation: 'Happening now → Partizip I kochend + -e. gekochte would mean the water that has already been boiled.',
    },
    {
      type: 'translate',
      id: 'b1-15b-partizip-2-adjectives-ex09',
      prompt: 'Translate: "The written test is difficult."',
      answer: ['Der geschriebene Test ist schwer.', 'Der geschriebene Test ist schwierig.', 'Die geschriebene Prüfung ist schwer.', 'Die geschriebene Prüfung ist schwierig.'],
      hint: 'schreiben (geschrieben) = to write, der Test / die Prüfung = test, schwer / schwierig = difficult',
      explanation: 'Partizip II geschrieben + -e after der (masculine Nominative) or after die (feminine).',
    },
    {
      type: 'translate',
      id: 'b1-15b-partizip-2-adjectives-ex10',
      prompt: 'Translate: "The planned trip is expensive."',
      answer: ['Die geplante Reise ist teuer.'],
      hint: 'planen (geplant) = to plan, die Reise = trip, teuer = expensive',
      explanation: 'The trip has been planned → Partizip II geplant + -e after die (feminine Nominative).',
    },
  ],
};

export default topic;
