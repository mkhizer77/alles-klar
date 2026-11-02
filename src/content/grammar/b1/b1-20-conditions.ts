import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-20-conditions',
  level: 'B1',
  unit: 7,
  order: 29,
  title: 'Conditions: falls, wenn, sofern, es sei denn',
  germanTerm: 'konditional',
  tags: ['connectors', 'subordinate clauses', 'conditions', 'word order'],
  summary: 'Conditional connectors say under what condition something happens: wenn and falls mean "if", sofern means "provided that", and es sei denn means "unless".',
  steps: [
    {
      title: 'What a condition is',
      text: `
A **conditional clause** (*Konditionalsatz*, an "if" clause) says that one thing only happens if another thing is true. At A2 you learned **wenn** for this. B1 adds a few more precise words.

*wenn, falls* and *sofern* are subjunctions (words that start a subordinate clause): the verb goes to the **end**. When the condition comes first, the main clause starts with its verb, often with *dann* in between.
`,
      examples: [
        { de: 'Wenn ich Zeit habe, besuche ich dich.', en: 'If I have time, I will visit you. (habe at the end, then besuche ich)' },
        { de: 'Wenn du Zeit hast, dann komm vorbei.', en: 'If you have time, then come round.' },
      ],
    },
    {
      title: 'falls: only "if", not "when"',
      text: `
**wenn** is the all-rounder, but it also means "when / whenever", so it can be unclear. **falls** (in case) is only "if", never "when". Use it when the condition is **possible but not expected**: *falls* you have questions (maybe you will not).
`,
      examples: [
        { de: 'Falls du Fragen hast, ruf mich an.', en: 'In case you have questions, call me.' },
        { de: 'Falls der Bus nicht kommt, nehme ich ein Taxi.', en: 'In case the bus does not come, I will take a taxi. (possible but not expected)' },
        { de: 'Wenn es regnet, bleiben wir zu Hause.', en: 'If it rains, we stay at home. (wenn: neutral)' },
      ],
    },
    {
      title: 'sofern: provided that',
      text: `
**sofern** (provided that, as long as) sets a **requirement**: the result happens only on this condition. It sounds a little formal and is common in rules and offers. Same word order: verb at the end.
`,
      examples: [
        { de: 'Du kannst mitkommen, sofern du pünktlich bist.', en: 'You can come along, provided that you are on time.' },
        { de: 'Sie bekommen den Job, sofern Sie die Prüfung bestehen.', en: 'You get the job provided that you pass the exam.' },
        { de: 'Sofern das Wetter gut ist, grillen wir.', en: 'Provided the weather is good, we will have a barbecue.' },
      ],
    },
    {
      title: 'es sei denn: unless',
      text: `
**es sei denn** means "unless": the result happens **except** in this one case. It is a fixed phrase between commas. After it comes either a **main clause** with normal order (*es sei denn, ich bin krank*) or **dass** + subordinate clause (*es sei denn, dass ich krank bin*).

It already means "unless", so do not add *nicht*.
`,
      examples: [
        { de: 'Wir gehen wandern, es sei denn, es regnet.', en: 'We are going hiking unless it rains. (main clause after es sei denn)' },
        { de: 'Ich komme morgen, es sei denn, ich bin krank.', en: 'I will come tomorrow unless I am ill.' },
        { de: 'Ich komme, es sei denn, dass ich krank bin.', en: 'I will come unless I am ill. (dass: verb at the end)' },
      ],
    },
    {
      title: 'Without a clause: sonst and bei',
      text: `
Two short forms need no "if" clause. **sonst** (otherwise) is an adverb: it stands in position 1 and the verb comes **right after** it.

**bei** + Dative noun (in the event of) replaces a whole clause: *bei Regen* = *wenn es regnet*.
`,
      examples: [
        { de: 'Du musst jetzt gehen, sonst kommst du zu spät.', en: 'You have to go now, otherwise you will be late. (sonst + verb)' },
        { de: 'Beeil dich, sonst verpassen wir den Zug.', en: 'Hurry up, otherwise we will miss the train.' },
        { de: 'Bei schlechtem Wetter fällt das Spiel aus.', en: 'In bad weather the game is cancelled. (bei + noun replaces a clause)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'wenn as a conditional subjunction was introduced there; falls and sofern follow the same word order.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'wenn can also be temporal; falls is a way to make the conditional meaning unmistakable.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'sonst is a position-1 adverb: the verb comes right after it.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'Irreal conditions (wenn ich reich wäre) use the same wenn-clause with Konjunktiv II.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'falls and sofern are subjunctions like obwohl and damit: the verb goes to the end.' },
  ],
  edgeCases: [
    '**wenn** can mean "if" or "whenever". If you mean only "if", *falls* makes it clear.',
    'After **es sei denn** the clause has normal main-clause order (*es sei denn, ich bin krank*), unless you add *dass* (*es sei denn, dass ich krank bin*).',
    'Do not add *nicht* after **es sei denn**: it already means "unless". *Ich komme, es sei denn, es regnet* = I come unless it rains.',
    '**sonst** is not a subjunction: the verb comes right after it, not at the end. *Beeil dich, sonst **verpassen** wir den Zug.*',
    '**bei** + noun needs a noun, not a clause: *bei Regen*, *bei Problemen*, but never *bei es regnet*.',
    'You may also see a condition without *wenn*, starting with the verb: **Hast du Fragen**, dann ruf mich an. It means *Wenn du Fragen hast*. Recognise it; you do not need to use it.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-20-conditions-ex01',
      prompt: 'Complete to mean "unless it rains": "Wir gehen wandern, ___ es regnet."',
      options: ['es sei denn,', 'falls', 'sofern'],
      answer: 0,
      explanation: 'es sei denn = unless. falls would mean "if it rains, we go hiking", sofern "provided that it rains" – both the opposite of what we want.',
    },
    {
      type: 'fill',
      id: 'b1-20-conditions-ex02',
      prompt: '___ du Fragen hast, ruf mich an. (in case)',
      answer: ['Falls', 'Wenn'],
      explanation: 'falls is the precise word for "in case". wenn is also correct but could be read as "whenever".',
    },
    {
      type: 'fill',
      id: 'b1-20-conditions-ex03',
      prompt: 'Du kannst mitkommen, ___ du pünktlich bist. (provided that)',
      answer: ['sofern', 'wenn'],
      explanation: 'sofern sets a requirement: only on this condition. wenn would also be grammatical but less precise.',
    },
    {
      type: 'mc',
      id: 'b1-20-conditions-ex04',
      prompt: 'Complete: "Ich komme morgen, es sei denn, ___."',
      options: ['ich bin krank', 'ich krank bin', 'bin ich krank'],
      answer: 0,
      explanation: 'After es sei denn comes a normal main clause: subject, then verb. The verb-at-end form only works with dass: es sei denn, dass ich krank bin.',
    },
    {
      type: 'order',
      id: 'b1-20-conditions-ex05',
      prompt: 'Build the sentence: "If I have time, I will visit you."',
      words: ['Zeit', 'ich', 'Wenn', 'besuche', 'habe,', 'dich.', 'ich'],
      answer: ['Wenn ich Zeit habe, besuche ich dich.'],
      explanation: 'The wenn-clause has the verb at the end (habe). Because it fills position 1, the main clause starts with the verb: besuche ich dich.',
    },
    {
      type: 'match',
      id: 'b1-20-conditions-ex06',
      prompt: 'Match each word with its meaning.',
      pairs: [
        ['wenn', 'if / when'],
        ['falls', 'in case'],
        ['sofern', 'provided that'],
        ['es sei denn', 'unless'],
        ['sonst', 'otherwise'],
        ['bei + Dativ', 'in the event of'],
      ],
      explanation: 'wenn, falls and sofern introduce subordinate clauses. es sei denn is a fixed phrase, sonst an adverb, bei a preposition with a noun.',
    },
    {
      type: 'fill',
      id: 'b1-20-conditions-ex07',
      prompt: 'Beeil dich, ___ verpassen wir den Zug. (otherwise)',
      answer: ['sonst'],
      explanation: 'sonst is an adverb in position 1, so the verb verpassen follows immediately.',
    },
    {
      type: 'translate',
      id: 'b1-20-conditions-ex08',
      prompt: 'Translate: "In case you have questions, write me an email." (use du)',
      answer: [
        'Falls du Fragen hast, schreib mir eine E-Mail.',
        'Falls du Fragen hast, schreibe mir eine E-Mail.',
        'Wenn du Fragen hast, schreib mir eine E-Mail.',
        'Wenn du Fragen hast, schreibe mir eine E-Mail.',
      ],
      hint: 'falls; die E-Mail; schreiben = to write (imperative: schreib)',
      explanation: 'falls introduces the condition with the verb hast at the end. The main clause is an imperative: schreib mir eine E-Mail.',
    },
    {
      type: 'mc',
      id: 'b1-20-conditions-ex09',
      prompt: 'Complete: "___ Regen findet das Konzert in der Halle statt."',
      options: ['Bei', 'Wenn', 'Falls'],
      answer: 0,
      explanation: 'Regen is a noun, not a clause. Only the preposition bei can take a noun: bei Regen = in the event of rain.',
    },
    {
      type: 'order',
      id: 'b1-20-conditions-ex10',
      prompt: 'Build the sentence: "I will help you, unless you do not want that."',
      words: ['helfe', 'Ich', 'es', 'dir,', 'denn,', 'sei', 'willst', 'du', 'nicht.', 'das'],
      answer: ['Ich helfe dir, es sei denn, du willst das nicht.'],
      explanation: 'es sei denn is placed between commas and followed by a main clause with normal order: du willst das nicht.',
    },
    {
      type: 'mc',
      id: 'b1-20-conditions-ex11',
      prompt: 'Which sentence is correct?',
      options: [
        'Sofern das Wetter gut ist, grillen wir.',
        'Sofern das Wetter ist gut, grillen wir.',
        'Sofern ist das Wetter gut, grillen wir.',
      ],
      answer: 0,
      explanation: 'sofern is a subjunction, so the verb ist goes to the end of its clause. The main clause then begins with the verb grillen.',
    },
  ],
};

export default topic;
