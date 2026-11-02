import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-23-relative-clauses-nom-acc',
  level: 'A2',
  unit: 8,
  order: 26,
  title: 'Relative clauses in the Nominative and Accusative',
  germanTerm: 'Relativsatz',
  tags: ['relative clauses', 'pronouns', 'subordinate clauses', 'nominative', 'accusative'],
  summary: 'A relative clause gives extra information about a noun; it starts with der / die / das (or den in the Accusative), is set off by commas, and sends the verb to the end.',
  steps: [
    {
      title: 'A mini-sentence that describes a noun',
      text: `
A **relative clause** (*Relativsatz*) is a mini-sentence that describes a noun, like English *the man **who lives next door*** or *the book **that I am reading***.

The word that opens the clause (*der, das*) is the **relative pronoun** (*Relativpronomen*). It stands for the noun before the comma. With it you join two short sentences into one.
`,
      examples: [
        { de: 'Das ist der Mann, der nebenan wohnt.', en: 'That is the man who lives next door. (der = the man)' },
        { de: 'Das ist das Buch, das ich gerade lese.', en: 'That is the book that I am reading. (das = the book)' },
        { de: 'Ich habe einen Freund, der in Wien wohnt.', en: 'I have a friend who lives in Vienna. (two sentences joined into one)' },
      ],
    },
    {
      title: 'Comma, verb at the end',
      text: `
Three rules of shape:

1. A **comma** separates the relative clause from the main clause, before it and, if the sentence continues, after it.
2. The **verb goes to the end** of the relative clause, like in every subordinate clause. In the Perfekt, *habe* or *bin* goes last.
3. The clause comes **directly after its noun**, even if that cuts the main clause in two.
`,
      examples: [
        { de: 'Die Frau, die dort wartet, ist meine Lehrerin.', en: 'The woman who is waiting there is my teacher. (the clause cuts the main clause in two)' },
        { de: 'Kennst du das Café, das neu eröffnet hat?', en: 'Do you know the café that has just opened? (hat at the end)' },
        { de: 'Das Auto, das ich gekauft habe, ist rot.', en: 'The car that I bought is red. (Perfekt: habe last)' },
      ],
    },
    {
      title: 'The pronouns look like der, die, das',
      text: `
Good news: in the Nominative (the subject case) and Accusative (the object case) the relative pronouns are the same as the definite articles.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | **der** | **die** | **das** | **die** |
| Accusative | **den** | **die** | **das** | **die** |

The pronoun takes the **gender and number** of the noun it describes. Only the masculine Accusative is different: **der → den**.
`,
      examples: [
        { de: 'Der Bus, der hier hält, fährt zum Bahnhof.', en: 'The bus that stops here goes to the station. (masculine: der)' },
        { de: 'Das Kind, das dort sitzt, ist müde.', en: 'The child who is sitting there is tired. (neuter: das)' },
        { de: 'Die Kinder, die im Garten spielen, sind laut.', en: 'The children who are playing in the garden are loud. (plural: die)' },
      ],
    },
    {
      title: 'Subject or object? Pick the case',
      text: `
The **case** of the pronoun depends on its job **inside the relative clause**, not on the main clause. Ask what the pronoun does there:

- It does the verb (the **subject**)? → **Nominative**: *der Mann, **der** dort steht* (he stands).
- The action is done to it (the **object**)? → **Accusative**: *der Mann, **den** ich getroffen habe* (I met him).
`,
      examples: [
        { de: 'Der Mann, der dort steht, ist mein Chef.', en: 'The man who is standing there is my boss. (he stands: subject, der)' },
        { de: 'Der Mann, den ich getroffen habe, ist mein Chef.', en: 'The man whom I met is my boss. (I met him: object, den)' },
        { de: 'Ich sehe den Hund, der im Garten schläft.', en: 'I see the dog that is sleeping in the garden. (den in the main clause, but der inside: the dog sleeps)' },
      ],
    },
    {
      title: 'Join two sentences in three moves',
      text: `
To combine two sentences: find the repeated person or thing, replace it in the second sentence with the relative pronoun, and move that pronoun to the front and the verb to the end.

*Ich habe einen Kollegen. Ich treffe **ihn** jeden Tag.* → *Ich habe einen Kollegen, **den** ich jeden Tag treffe.* (*ihn* was the object, so *den*.)
`,
      examples: [
        { de: 'Ich habe einen Kollegen, den ich jeden Tag treffe.', en: 'I have a colleague whom I meet every day. (ihn → den)' },
        { de: 'Das ist die Lehrerin, die uns Deutsch unterrichtet.', en: 'That is the teacher who teaches us German. (sie → die)' },
        { de: 'Das ist der Film, den ich gestern gesehen habe.', en: 'That is the film that I saw yesterday. (ihn → den)' },
      ],
    },
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
    'The **plural** relative pronoun is **die** for all genders: *die Männer, die …*, *die Kinder, die …*.',
    'The relative clause sits **right after its noun**. *Der Mann ist nett, der dort steht* sounds wrong; say *Der Mann, **der dort steht**, ist nett*.',
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
