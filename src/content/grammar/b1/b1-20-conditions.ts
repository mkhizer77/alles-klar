import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-20-conditions',
  level: 'B1',
  unit: 7,
  order: 20,
  title: 'Conditions: falls, wenn, sofern, es sei denn',
  germanTerm: 'konditional',
  tags: ['connectors', 'subordinate clauses', 'conditions', 'word order'],
  summary: 'Conditional connectors say under what condition something happens: wenn and falls mean "if", sofern means "provided that", and es sei denn means "unless".',
  explanation: `
### What it is for

A condition says that one thing only happens if another thing is true: *if it rains, we stay at home*.

- **Wenn** es regnet, bleiben wir zu Hause. – *If it rains, we stay at home.*
- **Falls** du Fragen hast, ruf mich an. – *In case you have questions, call me.*

A **conditional clause** (*Konditionalsatz*, an "if" clause) names such a condition. At A2 you learned *wenn* for this. B1 adds a few more precise words so that your German sounds natural and less repetitive.

### The connectors

| Connector | Meaning | Word order | Example |
|---|---|---|---|
| **wenn** | if / when (neutral) | verb at the end | **Wenn** es regnet, bleiben wir zu Hause. |
| **falls** | in case, if (less likely) | verb at the end | **Falls** du Fragen hast, ruf mich an. |
| **sofern** | provided that, as long as | verb at the end | Du kannst mitkommen, **sofern** du pünktlich bist. |
| **es sei denn, (dass)** | unless | fixed phrase, see below | Ich komme, **es sei denn**, ich bin krank. |
| **sonst** | otherwise | adverb, verb right after | Beeil dich, **sonst** verpassen wir den Zug. |
| **bei** + Dative | in the event of | preposition + noun | **Bei Regen** findet das Konzert in der Halle statt. |

### How to choose

- **wenn** is the all-rounder. It also means "when / whenever", so it can be unclear.
- **falls** is only "if", never "when". Use it when the condition is **possible but not expected**: *falls* you have questions (maybe you will not).
- **sofern** sets a **requirement**: the result happens only on this condition. It sounds a little formal.
- **es sei denn** means "unless": the result happens **except** in this one case. It is followed by either a **main clause** with normal word order (*es sei denn, ich bin krank*) or by *dass* + subordinate clause (*es sei denn, dass ich krank bin*).
- **sonst** is an adverb. It stands in position 1 and the verb follows: *sonst **verpassen** wir …*

### Word order reminders

*wenn, falls* and *sofern* push the verb to the **end** of their clause. When the condition comes first, the main clause starts with its verb, often with *dann* in between:

*Wenn du Zeit hast, (dann) **komm** vorbei.*

You may also see conditions without *wenn*, starting with the verb: *Hast du Fragen, dann ruf mich an.* It means the same as *Wenn du Fragen hast, …*. You only need to recognise this form.

### Why it matters

Instructions, rules, offers and advice all need conditions: *falls* something goes wrong, *sofern* the deadline is met, *es sei denn* the weather is bad. Being able to vary your connectors is a clear sign of B1-level control. It is also the base for the irreal conditions with *Konjunktiv II* in Unit 4.
`,
  examples: [
    { de: 'Wenn ich Zeit habe, besuche ich dich.', en: 'If I have time, I will visit you.' },
    { de: 'Falls der Bus nicht kommt, nehme ich ein Taxi.', en: 'In case the bus does not come, I will take a taxi. (possible but not expected)' },
    { de: 'Sie bekommen den Job, sofern Sie die Prüfung bestehen.', en: 'You get the job provided that you pass the exam.' },
    { de: 'Wir gehen wandern, es sei denn, es regnet.', en: 'We are going hiking unless it rains. (main clause after es sei denn)' },
    { de: 'Du musst jetzt gehen, sonst kommst du zu spät.', en: 'You have to go now, otherwise you will be late.' },
    { de: 'Bei schlechtem Wetter fällt das Spiel aus.', en: 'In bad weather the game is cancelled. (bei + noun replaces a clause)' },
  ],
  connections: [
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'wenn as a conditional subjunction was introduced there; falls and sofern follow the same word order.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'wenn can also be temporal; falls is a way to make the conditional meaning unmistakable.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'sonst is a position-1 adverb: the verb comes right after it.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'Irreal conditions (wenn ich reich wäre) use the same wenn-clause with Konjunktiv II.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'falls and sofern are subjunctions like obwohl and damit: the verb goes to the end.' },
  ],
  edgeCases: [
    '*wenn* can mean "if" or "whenever". If you mean only "if", *falls* makes it clear.',
    'After *es sei denn* the clause has **normal main-clause order** (*es sei denn, ich bin krank*), unless you add *dass* (*es sei denn, dass ich krank bin*).',
    'Do not add *nicht* after *es sei denn*: it already means "unless". *Ich komme, es sei denn, es regnet* = I come unless it rains.',
    '*sonst* is not a subjunction: the verb comes right after it, not at the end. *Beeil dich, sonst **verpassen** wir den Zug.*',
    '*bei* + noun needs a noun, not a clause: *bei Regen*, *bei Problemen*, but never *bei es regnet*.',
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
      id: 'b1-20-conditions-ex07',
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
      id: 'b1-20-conditions-ex08',
      prompt: 'Beeil dich, ___ verpassen wir den Zug. (otherwise)',
      answer: ['sonst'],
      explanation: 'sonst is an adverb in position 1, so the verb verpassen follows immediately.',
    },
    {
      type: 'translate',
      id: 'b1-20-conditions-ex09',
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
      id: 'b1-20-conditions-ex10',
      prompt: 'Complete: "___ Regen findet das Konzert in der Halle statt."',
      options: ['Bei', 'Wenn', 'Falls'],
      answer: 0,
      explanation: 'Regen is a noun, not a clause. Only the preposition bei can take a noun: bei Regen = in the event of rain.',
    },
    {
      type: 'order',
      id: 'b1-20-conditions-ex11',
      prompt: 'Build the sentence: "I will help you, unless you do not want that."',
      words: ['helfe', 'Ich', 'es', 'dir,', 'denn,', 'sei', 'willst', 'du', 'nicht.', 'das'],
      answer: ['Ich helfe dir, es sei denn, du willst das nicht.'],
      explanation: 'es sei denn is placed between commas and followed by a main clause with normal order: du willst das nicht.',
    },
    {
      type: 'mc',
      id: 'b1-20-conditions-ex12',
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
