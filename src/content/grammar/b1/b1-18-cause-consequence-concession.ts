import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-18-cause-consequence-concession',
  level: 'B1',
  unit: 7,
  order: 18,
  title: 'Cause, consequence, concession: da, sodass, obwohl, trotzdem, dennoch',
  germanTerm: 'kausal / konsekutiv / konzessiv',
  tags: ['connectors', 'subordinate clauses', 'word order', 'argumentation'],
  summary: 'Cause connectors (weil, da, denn) give the reason, consequence connectors (deshalb, sodass) give the result, and concession connectors (obwohl, trotzdem) say "even though" – each with its own word order.',
  explanation: `
### Three ways to link two ideas

When you explain something, two sentences usually stand in one of three relationships:

- **Cause** (*kausal*): *Why?* – It rains, **so** we stay home.
- **Consequence** (*konsekutiv*): *With what result?* – It rained so much **that** the street flooded.
- **Concession** (*konzessiv*): *In spite of what?* – It rains, **but we still** go out.

German has several connectors for each. They mean almost the same thing inside a group, but they put the **verb in different places**. That is the real thing to learn here.

### The three word-order types

| Type | Position | What happens to the verb |
|---|---|---|
| **Subjunction** (*Subjunktion*) | starts a subordinate clause | verb goes to the **end** |
| **Conjunction** (*Konjunktion*) | position 0 | normal main-clause order after it |
| **Adverb** (*Konjunktionaladverb*) | position 1 (or midfield) | verb comes **right after** it |

### Cause: giving the reason

| Connector | Type | Example |
|---|---|---|
| **weil** | subjunction | Ich bleibe zu Hause, **weil** ich krank **bin**. |
| **da** | subjunction | **Da** ich krank **bin**, bleibe ich zu Hause. |
| **denn** | position 0 | Ich bleibe zu Hause, **denn** ich **bin** krank. |
| **nämlich** | midfield adverb | Ich bleibe zu Hause. Ich **bin nämlich** krank. |

*da* and *weil* are interchangeable, but *da* is more formal and likes to **start** the sentence, often for a reason the listener already knows. *nämlich* never stands at the beginning: it sits after the verb.

### Consequence: giving the result

| Connector | Type | Example |
|---|---|---|
| **deshalb / deswegen / daher / darum** | adverb | Es regnet, **deshalb bleiben** wir zu Hause. |
| **also** | adverb | Es regnet, **also bleiben** wir zu Hause. |
| **sodass** | subjunction | Es regnete stark, **sodass** die Straße überflutet **wurde**. |
| **so … dass** | subjunction | Es regnete **so** stark, **dass** die Straße überflutet **wurde**. |

*deshalb* and its friends point **back** to the reason: reason first, then *deshalb* + result. *sodass* introduces the result as a subordinate clause. If you want to stress how strong the cause was, split it: *so* goes with the adjective, *dass* starts the clause.

### Concession: "although / nevertheless"

| Connector | Type | Example |
|---|---|---|
| **obwohl** | subjunction | **Obwohl** es regnet, **gehen** wir spazieren. |
| **trotzdem / dennoch** | adverb | Es regnet, **trotzdem gehen** wir spazieren. |
| **trotz** + Genitive | preposition | **Trotz des Regens** gehen wir spazieren. |
| **zwar … aber** | two-part | Es regnet **zwar**, **aber** wir gehen spazieren. |

*obwohl* goes in the clause with the **obstacle**; *trotzdem* goes in the clause with the **surprising result**. *dennoch* means the same as *trotzdem* but sounds more formal and written.

### Why it matters

Reasons, results and "although" are the backbone of every argument. In the B1 exam you write a complaint, give advice in a forum post and discuss pros and cons. Using *obwohl*, *deshalb* and *sodass* correctly – with the verb in the right place – is what moves a text from A2 to B1.
`,
  examples: [
    { de: 'Da es spät ist, gehe ich jetzt nach Hause.', en: 'Since it is late, I am going home now. (da-clause first, verb at the end)' },
    { de: 'Ich habe keinen Hunger, denn ich habe gerade gegessen.', en: 'I am not hungry, because I have just eaten. (denn: normal order)' },
    { de: 'Er ist müde, deshalb geht er früh ins Bett.', en: 'He is tired, so he goes to bed early. (deshalb + verb)' },
    { de: 'Sie hat so laut gesungen, dass die Nachbarn aufgewacht sind.', en: 'She sang so loudly that the neighbours woke up.' },
    { de: 'Der Film war langweilig, sodass wir früher gegangen sind.', en: 'The film was boring, so (that) we left earlier.' },
    { de: 'Obwohl er wenig Zeit hat, hilft er mir immer.', en: 'Although he has little time, he always helps me.' },
    { de: 'Es war teuer. Dennoch habe ich es gekauft.', en: 'It was expensive. Nevertheless I bought it. (dennoch = formal trotzdem)' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'weil introduced the verb-at-the-end rule; da, sodass and obwohl work exactly the same way.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'deshalb and trotzdem are position-1 adverbs from A2; dennoch, daher and also join the same group.' },
    { topicId: 'a1-34-coordinating-conjunctions', note: 'denn is a position-0 conjunction: the clause after it keeps normal word order.' },
    { topicId: 'a2-15-genitive-prepositions', note: 'trotz and wegen express concession and cause with a noun instead of a clause.' },
    { topicId: 'b1-17-two-part-conjunctions', note: 'zwar … aber is the two-part way to express concession.' },
  ],
  edgeCases: [
    '*denn* and *weil* both mean "because" but have different word order: *denn ich bin krank* (position 0) vs *weil ich krank bin* (verb at end).',
    '*trotzdem* and *obwohl* are not interchangeable: *obwohl* starts the clause with the obstacle, *trotzdem* starts the clause with the result. *Obwohl es regnet, gehen wir* = *Es regnet, trotzdem gehen wir*.',
    '*nämlich* never starts a sentence. It sits after the verb: *Ich komme nicht, ich bin nämlich krank.*',
    'Do not combine *obwohl* and *trotzdem* in one sentence pair: *Obwohl es regnet, gehen wir trotzdem* is heard in speech but is doubled.',
    '*sodass* is written as one word when it starts the clause. *so … dass* is split when *so* belongs to an adjective or adverb: *so müde, dass …*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex01',
      prompt: 'Which connector sends the verb to the end of its clause?',
      options: ['obwohl', 'trotzdem', 'denn', 'deshalb'],
      answer: 0,
      explanation: 'obwohl is a subjunction and starts a subordinate clause. trotzdem and deshalb are adverbs (verb follows them), denn is position 0 (normal order).',
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
      prompt: '___ es regnet, gehen wir spazieren. (although)',
      answer: ['Obwohl'],
      explanation: 'obwohl introduces the obstacle as a subordinate clause (verb regnet at the end). The main clause then starts with the verb: gehen wir.',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex04',
      prompt: 'Complete: "Er ist krank. ___ geht er zur Arbeit."',
      options: ['Trotzdem', 'Obwohl', 'Deshalb', 'Weil'],
      answer: 0,
      explanation: 'Going to work while ill is a surprising result, so we need concession in the result clause: trotzdem. Obwohl would send the verb to the end; deshalb would mean "therefore".',
    },
    {
      type: 'order',
      id: 'b1-18-cause-consequence-concession-ex05',
      prompt: 'Build the sentence: "Since I was tired, I went to bed early."',
      words: ['ich', 'müde', 'Da', 'war,', 'früh', 'bin', 'ich', 'ins', 'gegangen.', 'Bett'],
      answer: ['Da ich müde war, bin ich früh ins Bett gegangen.'],
      explanation: 'The da-clause comes first with the verb at the end (war). The whole clause is position 1, so the main verb bin comes next, then the subject ich.',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex06',
      prompt: 'Complete: "Der Film war ___ langweilig, dass ich eingeschlafen bin."',
      options: ['so', 'sodass', 'also'],
      answer: 0,
      explanation: 'When the cause has an adjective (langweilig), so goes before the adjective and dass starts the result clause: so langweilig, dass …',
    },
    {
      type: 'match',
      id: 'b1-18-cause-consequence-concession-ex07',
      prompt: 'Match each connector with its meaning and word order.',
      pairs: [
        ['weil', 'cause, verb at the end'],
        ['denn', 'cause, position 0, normal order'],
        ['deshalb', 'consequence, verb right after it'],
        ['sodass', 'consequence, verb at the end'],
        ['obwohl', 'concession, verb at the end'],
        ['trotzdem', 'concession, verb right after it'],
      ],
      explanation: 'Each meaning has a subjunction (verb at end) and an adverb or conjunction (normal order). Choose by meaning first, then apply the right word order.',
    },
    {
      type: 'fill',
      id: 'b1-18-cause-consequence-concession-ex08',
      prompt: 'Er lernt viel, ___ er die Prüfung bestehen will. (because, verb at the end)',
      answer: ['weil', 'da'],
      explanation: 'The verb will is at the end, so we need a subjunction: weil or da. denn would need normal order (denn er will …).',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex09',
      prompt: 'Complete: "Sie hat lange gearbeitet, ___ sie jetzt sehr müde ist."',
      options: ['sodass', 'denn', 'deshalb'],
      answer: 0,
      explanation: 'Being tired is the result of working long. The verb ist stands at the end, so the connector must be a subjunction: sodass. denn and deshalb need normal word order.',
    },
    {
      type: 'translate',
      id: 'b1-18-cause-consequence-concession-ex10',
      prompt: 'Translate: "Although it is cold, we are going swimming."',
      answer: ['Obwohl es kalt ist, gehen wir schwimmen.', 'Wir gehen schwimmen, obwohl es kalt ist.'],
      hint: 'obwohl; schwimmen gehen = to go swimming',
      explanation: 'obwohl sends ist to the end of its clause. If the obwohl-clause comes first, the main clause starts with the verb: gehen wir.',
    },
    {
      type: 'order',
      id: 'b1-18-cause-consequence-concession-ex11',
      prompt: 'Build the sentence: "It was cold, nevertheless we went swimming."',
      words: ['kalt,', 'war', 'Es', 'wir', 'trotzdem', 'gegangen.', 'sind', 'schwimmen'],
      answer: ['Es war kalt, trotzdem sind wir schwimmen gegangen.'],
      explanation: 'trotzdem is an adverb in position 1 of the second clause, so the verb sind follows it directly and the subject wir comes after.',
    },
    {
      type: 'mc',
      id: 'b1-18-cause-consequence-concession-ex12',
      prompt: 'Complete: "Ich komme nicht mit, ich bin ___ krank."',
      options: ['nämlich', 'denn', 'weil'],
      answer: 0,
      explanation: 'nämlich gives the reason from inside the clause, after the verb. denn would have to stand at the start (denn ich bin krank), weil would move the verb to the end.',
    },
  ],
};

export default topic;
