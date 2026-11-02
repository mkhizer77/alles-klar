import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-18-cause-consequence-concession',
  level: 'B1',
  unit: 7,
  order: 25,
  title: 'Cause and consequence: da, weil, sodass, deshalb',
  germanTerm: 'kausal / konsekutiv',
  tags: ['connectors', 'subordinate clauses', 'word order', 'argumentation'],
  summary: 'Cause connectors (weil, da, denn) give the reason and consequence connectors (deshalb, also, sodass) give the result; each type of connector puts the verb in its own place.',
  steps: [
    {
      title: 'Reason and result',
      text: `
When you explain something, you link two ideas. A **cause** (*kausal*) answers *Warum?* – why. A **consequence** (*konsekutiv*) answers *Mit welchem Ergebnis?* – with what result.

German has several connectors for each. They mean nearly the same inside a group, but they put the **verb in different places**. That is the real thing to learn here.
`,
      examples: [
        { de: 'Ich bleibe zu Hause, weil ich krank bin.', en: 'I stay at home because I am ill. (cause)' },
        { de: 'Ich bin krank, deshalb bleibe ich zu Hause.', en: 'I am ill, so I stay at home. (consequence)' },
      ],
    },
    {
      title: 'Three word-order types',
      text: `
Every connector in this lesson belongs to one of three types:

| Type | Where the verb goes |
|---|---|
| **subjunction** (starts a subordinate clause) | verb at the **end** |
| **adverb connector** (position 1) | verb **right after** it |
| **position-0 conjunction** | normal order: subject, then verb |

Learn the type with the word, and the word order takes care of itself.
`,
      examples: [
        { de: 'Er geht früh ins Bett, weil er müde ist.', en: 'He goes to bed early because he is tired. (subjunction: ist at the end)' },
        { de: 'Er ist müde, deshalb geht er früh ins Bett.', en: 'He is tired, so he goes to bed early. (adverb: geht right after deshalb)' },
        { de: 'Er geht früh ins Bett, denn er ist müde.', en: 'He goes to bed early, because he is tired. (position 0: er ist, normal order)' },
      ],
    },
    {
      title: 'Cause: weil, da, denn',
      text: `
**weil** and **da** are subjunctions: verb at the end. *da* is more formal and likes to **start** the sentence, often for a reason the listener already knows.

**denn** is a position-0 conjunction: the clause after it keeps normal order. **nämlich** (you see) also gives a reason, but it sits **after the verb**, never at the start.
`,
      examples: [
        { de: 'Da es spät ist, gehe ich jetzt nach Hause.', en: 'Since it is late, I am going home now. (da-clause first, verb at the end)' },
        { de: 'Ich habe keinen Hunger, denn ich habe gerade gegessen.', en: 'I am not hungry, because I have just eaten. (denn: normal order)' },
        { de: 'Ich komme nicht mit. Ich bin nämlich krank.', en: 'I am not coming. You see, I am ill. (nämlich after the verb)' },
      ],
    },
    {
      title: 'Result: deshalb, deswegen, daher, also',
      text: `
**deshalb, deswegen, daher, darum** all mean "therefore". **also** means "so". All five are adverb connectors: they point **back** to a reason, so the reason comes first. They take position 1, and the verb comes **right after** them.
`,
      examples: [
        { de: 'Es regnet, deshalb bleiben wir zu Hause.', en: 'It is raining, so we stay at home. (deshalb + verb)' },
        { de: 'Sie hat viel gelernt, daher hat sie bestanden.', en: 'She studied a lot, therefore she passed.' },
        { de: 'Der Zug war weg, also haben wir ein Taxi genommen.', en: 'The train had gone, so we took a taxi.' },
      ],
    },
    {
      title: 'Result as a clause: sodass, so … dass',
      text: `
**sodass** (so that, with the result that) is a subjunction: it introduces the result as a subordinate clause, verb at the end.

If you want to stress **how strong** the cause was, split it: **so** goes with the adjective or adverb in the main clause, **dass** starts the result clause.
`,
      examples: [
        { de: 'Der Film war langweilig, sodass wir früher gegangen sind.', en: 'The film was boring, so we left earlier.' },
        { de: 'Sie hat so laut gesungen, dass die Nachbarn aufgewacht sind.', en: 'She sang so loudly that the neighbours woke up. (so + laut … dass)' },
        { de: 'Er ist so müde, dass er sofort einschläft.', en: 'He is so tired that he falls asleep at once.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'weil introduced the verb-at-the-end rule; da and sodass work exactly the same way.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'deshalb is a position-1 adverb from A2; deswegen, daher, darum and also join the same group.' },
    { topicId: 'a1-34-coordinating-conjunctions', note: 'denn is a position-0 conjunction: the clause after it keeps normal word order.' },
    { topicId: 'a2-15-genitive-prepositions', note: 'wegen + Genitive gives a cause with a noun instead of a clause: wegen des Regens.' },
    { topicId: 'b1-18b-concession', note: 'The sibling topic: obwohl and trotzdem say "although", with the same three word-order types.' },
  ],
  edgeCases: [
    '**denn** and **weil** both mean "because" but have different word order: *denn ich bin krank* (position 0) vs *weil ich krank bin* (verb at the end).',
    '**nämlich** never starts a sentence. It sits after the verb: *Ich komme nicht, ich bin nämlich krank.*',
    '**sodass** is one word when it starts the clause. It splits into **so … dass** when *so* belongs to an adjective or adverb: *so müde, dass …*',
    '**deshalb** points back, so the reason must come first: *Es regnet, deshalb bleibe ich*, not *Deshalb bleibe ich, es regnet*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex01',
      prompt: 'Which connector sends the verb to the end of its clause?',
      options: ['weil', 'denn', 'deshalb', 'also'],
      answer: 0,
      explanation: 'weil is a subjunction and starts a subordinate clause. deshalb and also are adverbs (the verb follows them), denn is position 0 (normal order).',
    },
    {
      type: 'fill',
      id: 'b1-18-cause-consequence-concession-ex02',
      prompt: 'Es regnet, ___ bleiben wir zu Hause. (therefore)',
      answer: ['deshalb', 'deswegen', 'daher', 'darum', 'also'],
      explanation: 'deshalb, deswegen, daher, darum and also all introduce a consequence. They take position 1, so the verb (bleiben) comes immediately after.',
    },
    {
      type: 'fill',
      id: 'b1-18-cause-consequence-concession-ex03',
      prompt: 'Er lernt viel, ___ er die Prüfung bestehen will. (because, verb at the end)',
      answer: ['weil', 'da'],
      explanation: 'The verb will is at the end, so we need a subjunction: weil or da. denn would need normal order (denn er will …).',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex04',
      prompt: 'Complete: "Ich bleibe zu Hause, denn ___."',
      options: ['ich bin krank', 'ich krank bin', 'bin ich krank'],
      answer: 0,
      explanation: 'denn is a position-0 conjunction, so the clause after it has normal main-clause order: subject, then verb. ich krank bin would be the weil-order.',
    },
    {
      type: 'match',
      id: 'b1-18-cause-consequence-concession-ex05',
      prompt: 'Match each connector with its meaning and word order.',
      pairs: [
        ['weil', 'cause, verb at the end'],
        ['denn', 'cause, position 0, normal order'],
        ['deshalb', 'consequence, verb right after it'],
        ['sodass', 'consequence, verb at the end'],
      ],
      explanation: 'Each meaning has a subjunction (verb at the end) and an adverb or conjunction (normal order). Choose by meaning first, then apply the right word order.',
    },
    {
      type: 'order',
      id: 'b1-18-cause-consequence-concession-ex06',
      prompt: 'Build the sentence: "Since I was tired, I went to bed early."',
      words: ['ich', 'müde', 'Da', 'war,', 'früh', 'bin', 'ich', 'ins', 'gegangen.', 'Bett'],
      answer: ['Da ich müde war, bin ich früh ins Bett gegangen.'],
      explanation: 'The da-clause comes first with the verb at the end (war). The whole clause is position 1, so the main verb bin comes next, then the subject ich.',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex07',
      prompt: 'Complete: "Der Film war ___ langweilig, dass ich eingeschlafen bin."',
      options: ['so', 'sodass', 'also'],
      answer: 0,
      explanation: 'When the cause has an adjective (langweilig), so goes before the adjective and dass starts the result clause: so langweilig, dass …',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex08',
      prompt: 'Complete: "Sie hat lange gearbeitet, ___ sie jetzt sehr müde ist."',
      options: ['sodass', 'denn', 'deshalb'],
      answer: 0,
      explanation: 'Being tired is the result of working long. The verb ist stands at the end, so the connector must be a subjunction: sodass. denn and deshalb need normal word order.',
    },
    {
      type: 'order',
      id: 'b1-18-cause-consequence-concession-ex09',
      prompt: 'Build the sentence: "He is tired, so he goes to bed early."',
      words: ['müde,', 'Er', 'geht', 'also', 'ist', 'ins', 'er', 'Bett.', 'früh'],
      answer: ['Er ist müde, also geht er früh ins Bett.'],
      explanation: 'also is an adverb connector in position 1 of the second clause, so the verb geht follows it directly and the subject er comes after.',
    },
    {
      type: 'translate',
      id: 'b1-18-cause-consequence-concession-ex10',
      prompt: 'Translate: "I am staying at home because I am ill."',
      answer: [
        'Ich bleibe zu Hause, weil ich krank bin.',
        'Ich bleibe zu Hause, da ich krank bin.',
        'Ich bleibe zu Hause, denn ich bin krank.',
        'Weil ich krank bin, bleibe ich zu Hause.',
        'Da ich krank bin, bleibe ich zu Hause.',
      ],
      hint: 'zu Hause bleiben = to stay at home; krank = ill',
      explanation: 'With weil or da the verb bin goes to the end of its clause. With denn the clause keeps normal order: denn ich bin krank.',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex11',
      prompt: 'Complete: "Ich komme nicht mit, ich bin ___ krank."',
      options: ['nämlich', 'denn', 'weil'],
      answer: 0,
      explanation: 'nämlich gives the reason from inside the clause, after the verb. denn would have to stand at the start (denn ich bin krank), weil would move the verb to the end.',
    },
  ],
};

export default topic;
