import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-23-relative-clauses-nom-acc',
  level: 'A2',
  unit: 8,
  order: 23,
  title: 'Relative clauses in the Nominative and Accusative',
  germanTerm: 'Relativsatz',
  tags: ['relative clauses', 'pronouns', 'subordinate clauses', 'nominative', 'accusative'],
  summary: 'A relative clause gives extra information about a noun; it starts with der / die / das (or den in the Accusative), is set off by commas, and sends the verb to the end.',
  explanation: `
### What it is

A **relative clause** (*Relativsatz*) is a mini-sentence that describes a noun, like English *the man **who lives next door*** or *the book **that I am reading***.

- Das ist der Mann, **der** nebenan wohnt. – *That is the man who lives next door.*
- Das ist das Buch, **das** ich gerade lese. – *That is the book that I am reading.*

The word that opens the clause (*der, das*) is the **relative pronoun** (*Relativpronomen*). It stands for the noun before the comma.

### Three rules

1. A **comma** always separates the relative clause from the main clause (before and, if the sentence continues, after it).
2. The **verb goes to the end** of the relative clause, like in every subordinate clause.
3. The relative pronoun agrees with the noun in **gender and number**, but its **case** depends on its job inside the relative clause.

### The pronouns

Good news: in the Nominative and Accusative the relative pronouns look exactly like the definite articles.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | **der** | **die** | **das** | **die** |
| Accusative | **den** | **die** | **das** | **die** |

Only the masculine Accusative changes: **der → den**.

### Choosing the case

Step 1: find the noun the clause describes. Its gender and number give you the row or column.

Step 2: ask what the pronoun **does** inside the relative clause.

- Is it the **subject** (who does the verb)? → **Nominative**.
- Is it the **object** (what is acted on)? → **Accusative**.

Compare:

- Der Mann, **der** dort steht, ist mein Chef. – The man stands there. He is the subject → Nominative *der*.
- Der Mann, **den** ich gestern getroffen habe, ist mein Chef. – I met him. He is the object → Accusative *den*.

The main clause does not matter for this choice. *Der Mann* is the subject of the main clause in both examples, but inside the relative clause its job changes.

### Where the relative clause goes

The relative clause normally comes **directly after the noun** it describes, even if that breaks the main clause in two:

- Die Frau, **die** neben mir wohnt, **ist** Ärztin.

If the noun is at the end of the main clause, the relative clause simply follows:

- Ich kenne die Frau, **die** neben dir wohnt.

### Why it matters

Relative clauses let you combine two short sentences into one, which makes your German sound much more fluent: instead of *Ich habe einen Freund. Er wohnt in Wien* you say *Ich habe einen Freund, der in Wien wohnt*. They are also everywhere in reading texts, so recognising the comma + der / die / das + verb-at-the-end pattern will speed up your understanding.
`,
  examples: [
    { de: 'Das ist der Mann, der nebenan wohnt.', en: 'That is the man who lives next door. (masculine, subject → der)' },
    { de: 'Das ist der Mann, den ich gestern gesehen habe.', en: 'That is the man whom I saw yesterday. (masculine, object → den)' },
    { de: 'Die Frau, die dort wartet, ist meine Lehrerin.', en: 'The woman who is waiting there is my teacher. (feminine → die)' },
    { de: 'Das Buch, das ich lese, ist spannend.', en: 'The book that I am reading is exciting. (neuter → das)' },
    { de: 'Die Kinder, die im Garten spielen, sind laut.', en: 'The children who are playing in the garden are loud. (plural → die)' },
    { de: 'Ich habe einen Hund, der sehr alt ist.', en: 'I have a dog that is very old. (the main clause has Akkusativ einen Hund, but inside the relative clause the dog is the subject)' },
    { de: 'Kennst du das Café, das neu eröffnet hat?', en: 'Do you know the café that has just opened?' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'A relative clause is a subordinate clause: comma, then the verb at the end.' },
    { topicId: 'a1-09-gender-articles', note: 'The relative pronoun takes the gender of the noun: der Mann → der / den, das Kind → das.' },
    { topicId: 'a1-20-accusative', note: 'Only the masculine changes in the Accusative: der → den, also for relative pronouns.' },
    { topicId: 'b1-04-relative-clauses-dat-gen', note: 'At B1 you add the Dative (dem, der, denen) and Genitive (dessen, deren) forms.' },
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'Relative clauses can also start with a preposition (mit dem …) or with wo, was, wer.' },
  ],
  edgeCases: [
    'The case of the relative pronoun comes from its job **inside** the relative clause, not from the noun in the main clause. *Ich sehe den Mann, **der** lacht* (den in the main clause, der in the relative clause).',
    'The **plural** relative pronoun is *die* for all genders: *die Männer, die …*, *die Kinder, die …*.',
    'The relative clause sits **right after its noun**. *Der Mann ist nett, der dort steht* sounds wrong; say *Der Mann, der dort steht, ist nett*.',
    'In the Perfekt the auxiliary goes last: *das Buch, das ich **gekauft habe***, not *das ich habe gekauft*.',
    'German does not drop the relative pronoun like English (*the book I read*). You always need it: *das Buch, **das** ich lese*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-23-relative-clauses-nom-acc-ex01',
      prompt: 'Complete: "Das ist der Mann, ___ nebenan wohnt."',
      options: ['der', 'den', 'das'],
      answer: 0,
      explanation: 'Mann is masculine and inside the clause he is the subject (he lives), so Nominative der.',
    },
    {
      type: 'fill',
      id: 'a2-23-relative-clauses-nom-acc-ex02',
      prompt: 'Das ist die Frau, ___ im zweiten Stock wohnt.',
      answer: ['die'],
      explanation: 'Frau is feminine. The feminine relative pronoun is die in both the Nominative and the Accusative.',
    },
    {
      type: 'mc',
      id: 'a2-23-relative-clauses-nom-acc-ex03',
      prompt: 'Complete: "Das ist der Film, ___ ich gestern gesehen habe."',
      options: ['der', 'den', 'dem'],
      answer: 1,
      explanation: 'Film is masculine and inside the clause it is the object (I saw it), so Accusative den.',
    },
    {
      type: 'fill',
      id: 'a2-23-relative-clauses-nom-acc-ex04',
      prompt: 'Das Buch, ___ auf dem Tisch liegt, gehört mir.',
      answer: ['das'],
      explanation: 'Buch is neuter and is the subject of liegt, so das.',
    },
    {
      type: 'match',
      id: 'a2-23-relative-clauses-nom-acc-ex05',
      prompt: 'Match the noun with the relative pronoun in the Nominative.',
      pairs: [
        ['der Lehrer', 'der'],
        ['die Lehrerin', 'die'],
        ['das Kind', 'das'],
        ['die Kinder', 'die (plural)'],
      ],
      explanation: 'The Nominative relative pronouns are identical to the definite articles.',
    },
    {
      type: 'order',
      id: 'a2-23-relative-clauses-nom-acc-ex06',
      prompt: 'Build the sentence: "I have a friend who lives in Vienna."',
      words: ['Freund,', 'einen', 'in', 'Ich', 'wohnt.', 'der', 'Wien', 'habe'],
      answer: ['Ich habe einen Freund, der in Wien wohnt.'],
      explanation: 'Main clause (Ich habe einen Freund), comma, relative pronoun der (masculine, subject), and the verb wohnt at the end.',
    },
    {
      type: 'mc',
      id: 'a2-23-relative-clauses-nom-acc-ex07',
      prompt: 'Which sentence has the correct word order?',
      options: ['Die Frau, die wohnt neben mir, ist Ärztin.', 'Die Frau, die neben mir wohnt, ist Ärztin.', 'Die Frau ist Ärztin, die neben mir wohnt.'],
      answer: 1,
      explanation: 'The verb goes to the end of the relative clause (wohnt) and the clause stays right after Frau.',
    },
    {
      type: 'fill',
      id: 'a2-23-relative-clauses-nom-acc-ex08',
      prompt: 'Die Kinder, ___ im Park spielen, sind meine Neffen.',
      answer: ['die'],
      explanation: 'Plural nouns always take die as the relative pronoun, in Nominative and Accusative.',
    },
    {
      type: 'fill',
      id: 'a2-23-relative-clauses-nom-acc-ex09',
      prompt: 'Ich sehe den Hund, ___ im Garten schläft.',
      answer: ['der'],
      explanation: 'In the main clause the dog is an object (den Hund), but inside the relative clause it is the subject of schläft. The case comes from the relative clause: der.',
    },
    {
      type: 'translate',
      id: 'a2-23-relative-clauses-nom-acc-ex10',
      prompt: 'Translate: "That is the book that I am reading."',
      answer: ['Das ist das Buch, das ich lese.', 'Das ist das Buch, das ich gerade lese.'],
      hint: 'lesen = to read',
      explanation: 'Buch is neuter and is the object of lese (I read it), so Accusative das. The verb lese ends the clause.',
    },
    {
      type: 'mc',
      id: 'a2-23-relative-clauses-nom-acc-ex11',
      prompt: 'Combine: "Ich habe einen Kollegen. Ich treffe ihn jeden Tag." → "Ich habe einen Kollegen, ___ ich jeden Tag treffe."',
      options: ['der', 'den', 'die'],
      answer: 1,
      explanation: 'The second sentence has ihn (Accusative object). Kollege is masculine, so the relative pronoun is den.',
    },
    {
      type: 'order',
      id: 'a2-23-relative-clauses-nom-acc-ex12',
      prompt: 'Build the sentence: "The car that I bought is red."',
      words: ['gekauft', 'ist', 'Auto,', 'habe,', 'Das', 'rot.', 'ich', 'das'],
      answer: ['Das Auto, das ich gekauft habe, ist rot.'],
      explanation: 'The relative clause interrupts the main clause: Das Auto, das ich gekauft habe, ist rot. The Perfekt verb habe goes to the end of the relative clause.',
    },
  ],
};

export default topic;
