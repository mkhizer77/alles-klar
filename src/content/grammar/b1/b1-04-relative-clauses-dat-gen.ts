import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-04-relative-clauses-dat-gen',
  level: 'B1',
  unit: 2,
  order: 4,
  title: 'Relative clauses in the Dative and Genitive',
  germanTerm: 'Relativsatz (Dativ / Genitiv)',
  tags: ['relative clauses', 'pronouns', 'Dative', 'Genitive', 'subordinate clauses'],
  summary: 'The relative pronoun takes the Dative (dem, der, denen) when it is an indirect object or follows a Dative verb, and the Genitive (dessen, deren) when it means "whose".',
  explanation: `
### What it is

A **relative clause** (*Relativsatz*) adds information about a noun: *the man **who** lives next door*, *the book **that** I read*. At A2 you learned the relative pronouns (*Relativpronomen*) in the Nominative and Accusative. Now we add the **Dative** (*the man **to whom** I gave the key*) and the **Genitive** (*the man **whose** car is broken*).

### The full table of relative pronouns

The relative pronouns look almost exactly like the definite articles. Only the Genitive forms and the Dative plural are different (in bold):

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der | die | das | die |
| Accusative | den | die | das | die |
| Dative | dem | der | dem | **denen** |
| Genitive | **dessen** | **deren** | **dessen** | **deren** |

### Two rules decide the form

1. **Gender and number** come from the noun **before** the clause (the noun you are describing).
2. **Case** comes from the job the pronoun does **inside** the relative clause.

Take *der Mann*: masculine singular. Now look inside the clause:

- Der Mann, **der** dort steht … (he stands → subject → Nominative)
- Der Mann, **den** ich kenne … (I know him → object → Accusative)
- Der Mann, **dem** ich helfe … (I help him → helfen takes Dative → Dative)
- Der Mann, **dessen** Auto kaputt ist … (his car → whose → Genitive)

### The Dative

You need the Dative pronoun when, inside the clause, the pronoun is:

- an **indirect object** (someone who receives something): *die Frau, **der** ich das Buch gegeben habe*
- the object of a **Dative verb** (helfen, danken, gefallen, gehören, vertrauen …): *die Kinder, **denen** wir geholfen haben*

Watch the plural: *die Leute, **denen** das Restaurant gehört* – not *die*.

### The Genitive = "whose"

**dessen** (masculine and neuter) and **deren** (feminine and plural) mean **whose**. Two important points:

- They do **not** change for case. *dessen* stays *dessen* whatever happens in the clause.
- The noun after them has **no article**: *der Freund, dessen Auto …* (not *dessen das Auto*).

| the noun before | pronoun | example |
|---|---|---|
| der Freund | dessen | der Freund, **dessen** Auto kaputt ist |
| die Kollegin | deren | die Kollegin, **deren** Mann aus Spanien kommt |
| das Kind | dessen | das Kind, **dessen** Eltern Ärzte sind |
| die Nachbarn | deren | die Nachbarn, **deren** Hund immer bellt |

### Word order

As in every subordinate clause, the conjugated verb goes to the **end**, and the relative clause is separated by commas. It usually comes directly after the noun it describes: *Die Frau, **der** ich geholfen habe, ist meine Tante.*

### Why it matters

Relative clauses are the main way to describe people and things precisely, in job applications (*die Firma, deren Produkte ich kenne*), in presentations and in everyday talk. Getting the Dative and Genitive right is a clear sign of B1 level, and the next topic builds on this with prepositions (*der Mann, **mit dem** …*).
`,
  examples: [
    { de: 'Der Mann, dem ich geholfen habe, ist mein Nachbar.', en: 'The man I helped is my neighbour. (helfen + Dative → dem)' },
    { de: 'Die Frau, der ich das Buch gegeben habe, ist Lehrerin.', en: 'The woman I gave the book to is a teacher. (indirect object → der)' },
    { de: 'Die Kinder, denen wir Geschenke gebracht haben, waren glücklich.', en: 'The children we brought presents to were happy. (plural Dative → denen)' },
    { de: 'Der Freund, dessen Auto kaputt ist, fährt mit dem Bus.', en: 'The friend whose car is broken takes the bus. (masculine → dessen)' },
    { de: 'Die Kollegin, deren Mann aus Spanien kommt, spricht drei Sprachen.', en: 'The colleague whose husband is from Spain speaks three languages. (feminine → deren)' },
    { de: 'Die Leute, denen das Restaurant gehört, sind sehr nett.', en: 'The people who own the restaurant are very nice. (gehören + Dative)' },
  ],
  connections: [
    { topicId: 'a2-23-relative-clauses-nom-acc', note: 'The Nominative and Accusative relative pronouns and the basic word order come from there.' },
    { topicId: 'a1-26-dative-verbs', note: 'helfen, danken, gefallen, gehören … force the Dative pronoun dem / der / denen.' },
    { topicId: 'a1-24-dative', note: 'The indirect object is in the Dative, inside relative clauses too.' },
    { topicId: 'a2-14-genitive', note: 'dessen / deren express possession, like the Genitive case.' },
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'Next step: relative clauses with prepositions, wo, was and wer.' },
  ],
  edgeCases: [
    'The Dative plural is **denen**, not *den*: *die Leute, denen ich vertraue*.',
    '**dessen / deren** never change for case and are followed by a noun **without** an article: *der Mann, dessen Frau …*',
    'The case of the pronoun comes from **inside** the relative clause, not from the main clause: *Ich kenne den Mann, **der** dort steht* (he stands → Nominative).',
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
      prompt: 'Complete: "Der Freund, ___ Auto kaputt ist, fährt mit dem Bus."',
      options: ['dessen', 'deren', 'dem'],
      answer: 0,
      explanation: 'Whose car → Genitive. der Freund is masculine → dessen.',
    },
    {
      type: 'fill',
      id: 'b1-04-relative-clauses-dat-gen-ex05',
      prompt: 'Die Kollegin, ___ Mann aus Spanien kommt, spricht drei Sprachen.',
      answer: ['deren'],
      explanation: 'die Kollegin is feminine, and the meaning is whose → deren.',
    },
    {
      type: 'match',
      id: 'b1-04-relative-clauses-dat-gen-ex06',
      prompt: 'Match each beginning with the right relative pronoun.',
      pairs: [
        ['der Lehrer, ___ ich danke', 'dem'],
        ['die Firma, ___ Chef sehr streng ist', 'deren'],
        ['das Kind, ___ Eltern Ärzte sind', 'dessen'],
        ['die Nachbarn, ___ wir helfen', 'denen'],
      ],
      explanation: 'danken and helfen take the Dative (dem, denen). "Whose" is dessen for masculine / neuter and deren for feminine / plural.',
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
      prompt: 'Das Mädchen, ___ Hund weggelaufen ist, weint.',
      answer: ['dessen'],
      explanation: 'das Mädchen is neuter (even though it means girl). Neuter whose = dessen.',
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
      prompt: 'Complete: "Der Autor, ___ Bücher ich liebe, kommt nach Berlin."',
      options: ['dessen', 'deren', 'den'],
      answer: 0,
      explanation: 'Whose books → Genitive. The pronoun matches der Autor (masculine), not die Bücher: dessen.',
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
