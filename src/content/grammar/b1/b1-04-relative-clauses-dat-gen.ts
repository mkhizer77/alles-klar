import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-04-relative-clauses-dat-gen',
  level: 'B1',
  unit: 2,
  order: 4,
  title: 'Relative clauses in the Dative and Genitive',
  germanTerm: 'Relativsatz (Dativ / Genitiv)',
  tags: ['relative clauses', 'pronouns', 'Dative', 'Genitive', 'subordinate clauses'],
  summary: 'The relative pronoun takes the Dative (dem, der, denen) when it is an indirect object or follows a Dative verb; the Genitive forms dessen / deren ("whose") are there to recognise.',
  explanation: `
### What it is

A **relative clause** (*Relativsatz*) adds information about a noun: *the man **who** lives next door*, *the book **that** I read*. At A2 you learned the relative pronouns (*Relativpronomen*, the words *der / die / das* that start the clause) in the Nominative and Accusative. Now we add the **Dative**, which you need whenever the person in the clause is helped, thanked or given something:

- Der Mann, **dem** ich geholfen habe, ist mein Nachbar. – *The man I helped is my neighbour.*

### The table of relative pronouns

The relative pronouns look almost exactly like the definite articles (*der, die, das*). Only the Dative plural is different (in bold):

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der | die | das | die |
| Accusative | den | die | das | die |
| Dative | dem | der | dem | **denen** |

### Two rules decide the form

1. **Gender and number** come from the noun **before** the clause (the noun you are describing).
2. **Case** comes from the job the pronoun does **inside** the relative clause.

Take *der Mann*: masculine singular. Now look inside the clause:

- Der Mann, **der** dort steht … (he stands → subject → Nominative)
- Der Mann, **den** ich kenne … (I know him → object → Accusative)
- Der Mann, **dem** ich helfe … (I help him → helfen takes Dative → Dative)

### The Dative

You need the Dative pronoun when, inside the clause, the pronoun is:

- an **indirect object** (someone who receives something): *die Frau, **der** ich das Buch gegeben habe*
- the object of a **Dative verb** (helfen, danken, gefallen, gehören, vertrauen …): *die Kinder, **denen** wir geholfen haben*

Watch the plural: *die Leute, **denen** das Restaurant gehört* – not *die*.

A quick check: say the clause as a normal sentence with a pronoun. *Ich helfe **ihm*** → Dative → *der Mann, **dem** ich helfe*. *Ich kenne **ihn*** → Accusative → *der Mann, **den** ich kenne*.

### Word order

As in every subordinate clause, the conjugated verb goes to the **end**, and the relative clause is separated by commas. It usually comes directly after the noun it describes: *Die Frau, **der** ich geholfen habe, ist meine Tante.*

### You may also see …

German also has a relative pronoun for **whose**, the Genitive: **dessen** (masculine and neuter) and **deren** (feminine and plural). *Der Freund, **dessen** Auto kaputt ist, fährt mit dem Bus.* – *The friend whose car is broken takes the bus.* The noun after *dessen / deren* has no article. You will meet this in reading texts at B1; you do not need to produce it yet. If you want to say the same thing, a second sentence is fine: *Sein Auto ist kaputt. Er fährt mit dem Bus.*

### Why it matters

Relative clauses are the main way to describe people and things precisely, in job applications (*die Firma, bei der ich gearbeitet habe*), in presentations and in everyday talk. Getting the Dative right is a clear sign of B1 level, and the next topic builds on this with prepositions (*der Mann, **mit dem** …*).
`,
  examples: [
    { de: 'Der Mann, dem ich geholfen habe, ist mein Nachbar.', en: 'The man I helped is my neighbour. (helfen + Dative → dem)' },
    { de: 'Die Frau, der ich das Buch gegeben habe, ist Lehrerin.', en: 'The woman I gave the book to is a teacher. (indirect object → der)' },
    { de: 'Die Kinder, denen wir Geschenke gebracht haben, waren glücklich.', en: 'The children we brought presents to were happy. (plural Dative → denen)' },
    { de: 'Das ist der Arzt, dem ich vertraue.', en: 'That is the doctor I trust. (vertrauen + Dative → dem)' },
    { de: 'Die Leute, denen das Restaurant gehört, sind sehr nett.', en: 'The people who own the restaurant are very nice. (gehören + Dative)' },
    { de: 'Der Freund, dessen Auto kaputt ist, fährt mit dem Bus.', en: 'The friend whose car is broken takes the bus. (dessen = whose, for recognition)' },
  ],
  connections: [
    { topicId: 'a2-23-relative-clauses-nom-acc', note: 'The Nominative and Accusative relative pronouns and the basic word order come from there.' },
    { topicId: 'a1-26-dative-verbs', note: 'helfen, danken, gefallen, gehören … force the Dative pronoun dem / der / denen.' },
    { topicId: 'a1-24-dative', note: 'The indirect object is in the Dative, inside relative clauses too.' },
    { topicId: 'a2-14-genitive', note: 'dessen / deren ("whose") belong to the Genitive case; you only need to recognise them at B1.' },
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'Next step: relative clauses with prepositions, wo, was and wer.' },
  ],
  edgeCases: [
    'The Dative plural is **denen**, not *den*: *die Leute, denen ich vertraue*.',
    'The case of the pronoun comes from **inside** the relative clause, not from the main clause: *Ich kenne den Mann, **der** dort steht* (he stands → Nominative).',
    'If you read **dessen** or **deren**, it means *whose*: *der Mann, dessen Frau …* = *the man whose wife …*.',
    'Do not use *wo* for people. *Die Frau, **der** ich helfe*, not *die Frau, wo ich helfe* (this is dialect, not standard German).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-04-relative-clauses-dat-gen-ex01',
      prompt: 'Complete: "Der Mann, ___ ich geholfen habe, ist mein Nachbar."',
      options: ['dem', 'den', 'der'],
      answer: 0,
      explanation: 'helfen takes the Dative. Masculine Dative = dem.',
    },
    {
      type: 'fill',
      id: 'b1-04-relative-clauses-dat-gen-ex02',
      prompt: 'Die Frau, ___ ich das Buch gegeben habe, ist Lehrerin.',
      answer: ['der'],
      explanation: 'Inside the clause the woman receives the book: indirect object → Dative. Feminine Dative = der.',
    },
    {
      type: 'fill',
      id: 'b1-04-relative-clauses-dat-gen-ex03',
      prompt: 'Die Kinder, ___ wir Geschenke gebracht haben, waren glücklich.',
      answer: ['denen'],
      explanation: 'Plural noun, and the children receive something (Dative). Dative plural = denen.',
    },
    {
      type: 'mc',
      id: 'b1-04-relative-clauses-dat-gen-ex04',
      prompt: 'Complete: "Das ist die Kollegin, ___ ich oft bei der Arbeit helfe."',
      options: ['der', 'die', 'denen'],
      answer: 0,
      explanation: 'helfen takes the Dative. die Kollegin is feminine singular → Dative der. denen would be plural.',
    },
    {
      type: 'fill',
      id: 'b1-04-relative-clauses-dat-gen-ex05',
      prompt: 'Das ist das Kind, ___ ich ein Eis gekauft habe.',
      answer: ['dem'],
      explanation: 'Inside the clause the child receives the ice cream: indirect object → Dative. Neuter Dative = dem.',
    },
    {
      type: 'match',
      id: 'b1-04-relative-clauses-dat-gen-ex06',
      prompt: 'Match each beginning with the right relative pronoun.',
      pairs: [
        ['der Lehrer, ___ ich danke', 'dem'],
        ['die Freundin, ___ ich vertraue', 'der'],
        ['die Nachbarn, ___ wir helfen', 'denen'],
        ['der Film, ___ ich gestern gesehen habe', 'den'],
      ],
      explanation: 'danken, vertrauen and helfen take the Dative (dem, der, denen). sehen takes the Accusative, so the film is den.',
    },
    {
      type: 'order',
      id: 'b1-04-relative-clauses-dat-gen-ex07',
      prompt: 'Build the sentence: "That is the doctor I trust."',
      words: ['Arzt,', 'ich', 'ist', 'vertraue.', 'Das', 'dem', 'der'],
      answer: ['Das ist der Arzt, dem ich vertraue.'],
      explanation: 'vertrauen takes the Dative, so dem. The verb vertraue goes to the end of the relative clause.',
    },
    {
      type: 'mc',
      id: 'b1-04-relative-clauses-dat-gen-ex08',
      prompt: 'Why is it "denen" in: "Die Leute, denen das Restaurant gehört, sind sehr nett."?',
      options: ['gehören takes the Dative, and die Leute is plural', 'The relative clause always uses denen for people', 'denen is the Genitive plural'],
      answer: 0,
      explanation: 'The case comes from the verb inside the clause: gehören + Dative. Plural Dative = denen.',
    },
    {
      type: 'fill',
      id: 'b1-04-relative-clauses-dat-gen-ex09',
      prompt: 'Das Mädchen, ___ das Buch gefällt, liest jeden Abend.',
      answer: ['dem'],
      explanation: 'gefallen takes the Dative: the book pleases the girl. das Mädchen is neuter (even though it means girl) → dem.',
    },
    {
      type: 'translate',
      id: 'b1-04-relative-clauses-dat-gen-ex10',
      prompt: 'Translate: "The woman I am helping is my aunt."',
      answer: ['Die Frau, der ich helfe, ist meine Tante.'],
      hint: 'helfen + Dative, die Tante = aunt',
      explanation: 'helfen takes the Dative, so the feminine pronoun is der. Commas around the relative clause, helfe at its end.',
    },
    {
      type: 'mc',
      id: 'b1-04-relative-clauses-dat-gen-ex11',
      prompt: 'You read: "Der Autor, dessen Bücher ich liebe, kommt nach Berlin." What does "dessen" mean here?',
      options: ['whose', 'to whom', 'which'],
      answer: 0,
      explanation: 'dessen (and deren) mean whose: the author whose books I love. You only need to recognise this form at B1.',
    },
    {
      type: 'order',
      id: 'b1-04-relative-clauses-dat-gen-ex12',
      prompt: 'Build the sentence: "The students who like the course learn a lot."',
      words: ['lernen', 'denen', 'Kurs', 'Die', 'viel.', 'der', 'Studenten,', 'gefällt,'],
      answer: ['Die Studenten, denen der Kurs gefällt, lernen viel.'],
      explanation: 'gefallen takes the Dative: the course pleases the students → denen. The relative clause sits right after Studenten.',
    },
  ],
};

export default topic;
