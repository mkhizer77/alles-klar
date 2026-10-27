import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-15-genitive-prepositions',
  level: 'A2',
  unit: 5,
  order: 15,
  title: 'Genitive prepositions: wegen, trotz, während, statt',
  germanTerm: 'Präpositionen mit Genitiv',
  tags: ['prepositions', 'Genitive', 'cases', 'wegen', 'trotz', 'während', 'statt'],
  summary: 'The prepositions wegen (because of), trotz (despite), während (during) and statt (instead of) are followed by the Genitive in standard German: wegen des Regens, trotz des Wetters.',
  explanation: `
### What it is

You already know prepositions that take the Accusative (*für, ohne*) and the Dative (*mit, nach*). A fourth group takes the **Genitive** (*Genitiv*). The four most useful ones at A2:

| preposition | meaning | example |
|---|---|---|
| **wegen** | because of | wegen **des** Regen**s** – because of the rain |
| **trotz** | despite, in spite of | trotz **des** Wetter**s** – despite the weather |
| **während** | during | während **der** Ferien – during the holidays |
| **statt / anstatt** | instead of | statt **eines** Brief**es** – instead of a letter |

These prepositions let you add a **reason**, a **contrast**, a **time** or an **alternative** to a sentence in just two or three words, instead of a whole clause: *wegen des Regens* = *weil es geregnet hat*.

### How it works

After these prepositions the article and noun take the Genitive forms from the previous topic:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| definite | wegen **des** Sturm**s** | wegen **der** Krankheit | wegen **des** Wetter**s** | wegen **der** Kinder |
| indefinite | statt **eines** Brief**es** | statt **einer** E-Mail | statt **eines** Geschenk**s** | – |
| possessive | trotz **meines** Fehler**s** | trotz **seiner** Hilfe | trotz **unseres** Problem**s** | trotz **ihrer** Fehler |

Remember: masculine and neuter nouns add **-s / -es**; feminine and plural nouns do not change.

A few more examples:

- **Wegen** der Baustelle ist die Straße gesperrt. – *Because of the roadworks the street is closed.*
- **Trotz** seiner Erkältung geht er arbeiten. – *Despite his cold he goes to work.*
- **Während** des Essens spricht er nicht. – *During the meal he doesn't talk.*
- **Statt** einer Pizza nehme ich einen Salat. – *Instead of a pizza I'll have a salad.*

### Word order

A preposition phrase can start the sentence. Then the verb comes right after it (verb second):

- **Wegen des Regens** bleiben wir zu Hause.
- Wir bleiben **wegen des Regens** zu Hause.

### Spoken German: the Dative creeps in

In everyday speech many Germans use the **Dative** after these prepositions: *wegen dem Regen, trotz dem Wetter*. You will hear it a lot, and with *wegen* it is widely accepted in casual talk. But in **writing, exams and formal speech** the Genitive is the correct form, so that is what you should learn and use. When a plural noun has no article at all, the Dative is actually standard: *wegen Umbauarbeiten geschlossen* (closed because of building work).

With pronouns, *wegen* has special forms: **meinetwegen** (because of me / as far as I'm concerned), **deinetwegen**, **seinetwegen**. In speech you will also hear *wegen mir*.

### trotz vs trotzdem, während as a conjunction

- **trotz** is a preposition and needs a noun: *trotz des Regens*. **trotzdem** is an adverb meaning *nevertheless* and starts a new clause: *Es regnet. Trotzdem gehen wir raus.*
- **während** can also be a conjunction (*while*): *Während ich koche, deckst du den Tisch.* Then the verb goes to the end of the clause.

### Why it matters

These four prepositions are the Genitive's main job in everyday German. They make your sentences shorter and more precise, and they appear constantly in signs, emails and news: *wegen Krankheit geschlossen*, *trotz aller Probleme*, *während der Arbeitszeit*.
`,
  examples: [
    { de: 'Wegen des Regens bleiben wir zu Hause.', en: 'Because of the rain we are staying at home. (masculine: des Regens)' },
    { de: 'Trotz des schlechten Wetters gehen wir spazieren.', en: 'Despite the bad weather we go for a walk. (neuter: des Wetters)' },
    { de: 'Während der Ferien arbeite ich im Café.', en: 'During the holidays I work in the café. (plural: der Ferien)' },
    { de: 'Statt einer Pizza nehme ich einen Salat.', en: 'Instead of a pizza I will have a salad. (feminine: einer Pizza)' },
    { de: 'Wegen seiner Krankheit konnte er nicht kommen.', en: "Because of his illness he couldn't come. (possessive: seiner Krankheit)" },
    { de: 'Während des Essens spricht er nicht.', en: "During the meal he doesn't talk. (neuter: des Essens)" },
    { de: 'Das Geschäft ist wegen Umbau geschlossen.', en: 'The shop is closed because of renovation. (no article: no Genitive ending)' },
  ],
  connections: [
    { topicId: 'a2-14-genitive', note: 'The Genitive articles and noun endings that these prepositions require.' },
    { topicId: 'a1-22-accusative-prepositions', note: 'Compare: für, ohne, durch always take the Accusative.' },
    { topicId: 'a1-25-dative-prepositions', note: 'Compare: mit, nach, von, zu always take the Dative.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'trotzdem and deshalb say the same as trotz and wegen, but with a whole clause.' },
    { topicId: 'b1-26-genitive-prepositions-depth', note: 'More Genitive prepositions at B1: innerhalb, außerhalb, aufgrund, mithilfe.' },
  ],
  edgeCases: [
    'In writing use the **Genitive**: *wegen des Regens*. *wegen dem Regen* (Dative) is common in speech but not standard.',
    '**trotz** + noun (*trotz des Regens*) vs **trotzdem** + clause (*Es regnet, trotzdem gehen wir*). Do not write *trotzdem des Regens*.',
    'Masculine and neuter nouns need their **-s / -es**: *während des Tag**es***, *wegen des Sturm**s***. Forgetting the noun ending is the most common slip.',
    'A plural noun with **no article** takes no Genitive marking and is usually Dative: *wegen Bauarbeiten gesperrt*, *trotz Problemen*.',
    '**während** as a conjunction (*while*) sends the verb to the end: *Während ich koche, liest er.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex01',
      prompt: 'Complete: "Wegen ___ Regens bleiben wir zu Hause."',
      options: ['des', 'dem', 'der'],
      answer: 0,
      explanation: 'wegen takes the Genitive. Regen is masculine, so des Regens.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex02',
      prompt: 'Trotz ___ Wetters gehen wir spazieren. (the, neuter)',
      answer: ['des'],
      explanation: 'trotz + Genitive. Wetter is neuter → des Wetters.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex03',
      prompt: 'Während ___ Ferien arbeite ich. (the, plural)',
      answer: ['der'],
      explanation: 'während + Genitive. Plural Genitive is der, and the noun does not change: der Ferien.',
    },
    {
      type: 'match',
      id: 'a2-15-genitive-prepositions-ex04',
      prompt: 'Match each preposition with its meaning.',
      pairs: [
        ['wegen', 'because of'],
        ['trotz', 'despite'],
        ['während', 'during'],
        ['statt', 'instead of'],
      ],
      explanation: 'All four take the Genitive: wegen (reason), trotz (contrast), während (time), statt (alternative).',
    },
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex05',
      prompt: 'Complete: "Statt ___ Autos kaufe ich ein Fahrrad."',
      options: ['eines', 'einem', 'ein'],
      answer: 0,
      explanation: 'statt + Genitive. Auto is neuter, so the indefinite article is eines and the noun adds -s: eines Autos.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex06',
      prompt: 'Wegen ___ Krankheit konnte er nicht kommen. (his)',
      answer: ['seiner'],
      explanation: 'Krankheit is feminine. Genitive feminine of sein = seiner. The noun stays unchanged.',
    },
    {
      type: 'order',
      id: 'a2-15-genitive-prepositions-ex07',
      prompt: 'Build the sentence: "Despite the rain the children are playing outside."',
      words: ['Regens', 'Kinder', 'Trotz', 'draußen.', 'spielen', 'des', 'die'],
      answer: ['Trotz des Regens spielen die Kinder draußen.'],
      explanation: 'The preposition phrase (Trotz des Regens) is position 1, so the verb spielen comes next, then the subject.',
    },
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex08',
      prompt: 'Complete: "Während ___ Essens spricht er nicht."',
      options: ['des', 'dem', 'den'],
      answer: 0,
      explanation: 'während + Genitive. das Essen is neuter → des Essens.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex09',
      prompt: 'Wegen des ___ fahren heute keine Züge. (Sturm)',
      answer: ['Sturms', 'Sturmes'],
      explanation: 'Sturm is masculine and needs a Genitive ending. Both Sturms and Sturmes are correct; Sturms is more common.',
    },
    {
      type: 'translate',
      id: 'a2-15-genitive-prepositions-ex10',
      prompt: 'Translate: "despite the rain"',
      answer: ['trotz des Regens'],
      hint: 'der Regen = rain',
      explanation: 'trotz + Genitive masculine: des Regens. Do not forget the -s on the noun.',
    },
    {
      type: 'mc',
      id: 'a2-15-genitive-prepositions-ex11',
      prompt: 'Which form is correct in standard written German?',
      options: ['wegen dem Wetter', 'wegen des Wetters', 'wegen das Wetter'],
      answer: 1,
      explanation: 'In writing wegen takes the Genitive: wegen des Wetters. wegen dem Wetter is heard in speech but is not standard.',
    },
    {
      type: 'fill',
      id: 'a2-15-genitive-prepositions-ex12',
      prompt: 'Statt ___ Pizza essen wir heute Salat. (a, feminine)',
      answer: ['einer'],
      explanation: 'statt + Genitive. Pizza is feminine → einer Pizza, no change to the noun.',
    },
  ],
};

export default topic;
