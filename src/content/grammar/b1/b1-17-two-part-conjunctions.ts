import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-17-two-part-conjunctions',
  level: 'B1',
  unit: 7,
  order: 17,
  title: 'Two-part conjunctions: entweder … oder, sowohl … als auch, je … desto',
  germanTerm: 'zweiteilige Konnektoren',
  tags: ['conjunctions', 'connectors', 'word order', 'comparison'],
  summary: 'Two-part conjunctions are pairs of words (entweder … oder, sowohl … als auch, je … desto) that link two ideas and tell the listener in advance how the ideas belong together.',
  explanation: `
### What they are

A **two-part conjunction** (*zweiteiliger Konnektor*) is a pair of words that work as a team. The first word announces what is coming; the second word completes it. English has them too: *either … or*, *both … and*, *not only … but also*.

They are very common in B1 writing and speaking, because they let you compare, list and weigh ideas in one neat sentence.

### The main pairs

| German | English | Example |
|---|---|---|
| **entweder … oder** | either … or | Entweder gehen wir ins Kino, **oder** wir bleiben zu Hause. |
| **sowohl … als auch** | both … and | Sie spricht **sowohl** Deutsch **als auch** Englisch. |
| **nicht nur … sondern auch** | not only … but also | Er ist **nicht nur** klug, **sondern auch** freundlich. |
| **weder … noch** | neither … nor | Ich habe **weder** Zeit **noch** Lust. |
| **zwar … aber** | admittedly … but | Das Hotel ist **zwar** teuer, **aber** sehr schön. |
| **einerseits … andererseits** | on the one hand … on the other hand | **Einerseits** ist die Stadt schön, **andererseits** ist sie laut. |
| **je … desto / umso** | the … the (more … the more) | **Je** mehr ich übe, **desto** besser werde ich. |

### Where the verb goes

Most pairs just connect two words or two main clauses. The word order inside each part stays normal. Only two pairs change the verb position, so watch these:

| Pair | Word order |
|---|---|
| entweder … oder | *entweder* can take position 1 (then the verb follows: *Entweder **kommst** du …*) or stand before the subject (*Entweder du kommst …*). *oder* is position 0: the clause after it has normal order. |
| zwar … aber | *zwar* sits in the midfield or in position 1 (*Zwar ist es teuer, …*). *aber* is position 0. |
| einerseits … andererseits | both are adverbs in position 1, so the verb comes **right after** them. |
| je … desto | the *je*-part is a subordinate clause (verb at the **end**). The *desto*-part is a main clause: *desto* + comparative takes position 1, the verb comes **immediately after**. |

The *je … desto* pattern is the one learners get wrong most often. Both halves need a **comparative** (*mehr, besser, schneller*):

- **Je** länger ich warte, **desto** nervöser **werde** ich.
- **Je** größer die Wohnung ist, **desto** höher ist die Miete.

*umso* can replace *desto* with the same meaning: *Je früher, umso besser.*

### Negation with weder … noch

*weder … noch* already contains the negation. Do **not** add *nicht* or *kein*: *Ich trinke weder Kaffee noch Tee* (not *keinen Kaffee*).

### Why it matters

These pairs are exactly what you need for the B1 exam tasks: giving both sides of an argument (*einerseits … andererseits*), listing advantages (*sowohl … als auch*), admitting a point before you disagree (*zwar … aber*) and describing how one thing depends on another (*je … desto*). Learning them as fixed pairs makes your German sound organised and confident.
`,
  examples: [
    { de: 'Entweder du hilfst mir, oder ich mache es allein.', en: 'Either you help me, or I do it alone.' },
    { de: 'Er trinkt sowohl Kaffee als auch Tee.', en: 'He drinks both coffee and tea.' },
    { de: 'Sie ist nicht nur schnell, sondern auch sehr genau.', en: 'She is not only fast, but also very precise.' },
    { de: 'Ich habe weder ein Auto noch ein Fahrrad.', en: 'I have neither a car nor a bike. (no extra nicht / kein)' },
    { de: 'Das Essen war zwar gut, aber zu teuer.', en: 'The food was good, admittedly, but too expensive.' },
    { de: 'Je mehr du liest, desto besser wird dein Wortschatz.', en: 'The more you read, the better your vocabulary gets. (je-clause: verb at end; desto-clause: verb second)' },
    { de: 'Einerseits möchte ich reisen, andererseits habe ich kein Geld.', en: 'On the one hand I want to travel, on the other hand I have no money.' },
  ],
  connections: [
    { topicId: 'a1-34-coordinating-conjunctions', note: 'oder, aber and sondern are the position-0 conjunctions you already know; here they get a partner word.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'einerseits / andererseits and desto behave like position-1 adverbs: the verb follows immediately.' },
    { topicId: 'a2-10-comparative-superlative', note: 'je … desto always needs comparative forms (mehr, besser, schneller).' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The je-clause is a subordinate clause with the verb at the end.' },
    { topicId: 'b1-32-opinions-speaking', note: 'einerseits … andererseits and zwar … aber are key phrases for weighing arguments in a talk.' },
  ],
  edgeCases: [
    'In *je … desto* the **desto-part is a main clause**: *desto besser **werde** ich*, not *desto besser ich werde*.',
    '*weder … noch* is already negative. *Ich habe weder Zeit noch Geld* – never *weder keine Zeit*.',
    'After *sondern auch* the comma is before *sondern*: *nicht nur billig, sondern auch gut*. After *als auch* there is **no** comma.',
    'When *entweder* stands in position 1, the verb comes next (*Entweder **bleibst** du …*). When it stands before the subject (*Entweder du bleibst …*), the verb stays second after the subject. Both are correct.',
    '*zwar* on its own means "in fact / namely" (*und zwar*). The concessive meaning needs the partner *aber*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-17-two-part-conjunctions-ex01',
      prompt: 'Which pair means "neither … nor"?',
      options: ['weder … noch', 'entweder … oder', 'sowohl … als auch', 'zwar … aber'],
      answer: 0,
      explanation: 'weder … noch excludes both things. entweder … oder is "either … or", sowohl … als auch is "both … and".',
    },
    {
      type: 'fill',
      id: 'b1-17-two-part-conjunctions-ex02',
      prompt: 'Ich trinke ___ Kaffee noch Tee. (neither)',
      answer: ['weder'],
      explanation: 'The partner of noch is weder. The pair already carries the negation, so no nicht or kein is added.',
    },
    {
      type: 'fill',
      id: 'b1-17-two-part-conjunctions-ex03',
      prompt: 'Sie spricht nicht nur Deutsch, ___ auch Französisch. (but)',
      answer: ['sondern'],
      explanation: 'nicht nur is always completed by sondern auch, with a comma before sondern.',
    },
    {
      type: 'mc',
      id: 'b1-17-two-part-conjunctions-ex04',
      prompt: 'Complete: "Je mehr du übst, ___."',
      options: ['desto besser wirst du', 'desto du wirst besser', 'desto besser du wirst'],
      answer: 0,
      explanation: 'The desto-part is a main clause. desto + comparative fills position 1, so the verb comes immediately after: desto besser wirst du.',
    },
    {
      type: 'match',
      id: 'b1-17-two-part-conjunctions-ex05',
      prompt: 'Match the first part of each conjunction with its partner.',
      pairs: [
        ['entweder', 'oder'],
        ['sowohl', 'als auch'],
        ['weder', 'noch'],
        ['je', 'desto'],
        ['nicht nur', 'sondern auch'],
        ['zwar', 'aber'],
      ],
      explanation: 'These pairs are fixed. Learn them as units: the first word tells the listener which second word is coming.',
    },
    {
      type: 'order',
      id: 'b1-17-two-part-conjunctions-ex06',
      prompt: 'Build the sentence: "The more I read, the more I understand."',
      words: ['mehr', 'ich', 'Je', 'desto', 'lese,', 'verstehe', 'mehr', 'ich.'],
      answer: ['Je mehr ich lese, desto mehr verstehe ich.'],
      explanation: 'je-clause: verb at the end (lese). desto-clause: desto mehr in position 1, then the verb (verstehe), then the subject.',
    },
    {
      type: 'fill',
      id: 'b1-17-two-part-conjunctions-ex07',
      prompt: 'Er ist ___ müde, aber er arbeitet weiter. (admittedly)',
      answer: ['zwar'],
      explanation: 'zwar … aber admits a point first and then limits it. zwar sits in the midfield of the first clause.',
    },
    {
      type: 'mc',
      id: 'b1-17-two-part-conjunctions-ex08',
      prompt: 'Which sentence is correct?',
      options: [
        'Entweder kommst du mit, oder du bleibst zu Hause.',
        'Entweder du mitkommst, oder du bleibst zu Hause.',
        'Entweder kommst du mit, oder bleibst du zu Hause.',
      ],
      answer: 0,
      explanation: 'Entweder in position 1 pushes the verb to position 2 (kommst du mit). oder is position 0, so the second clause keeps normal order: du bleibst. Option 3 puts the verb first after oder, which would make a question.',
    },
    {
      type: 'translate',
      id: 'b1-17-two-part-conjunctions-ex09',
      prompt: 'Translate: "She speaks both German and English."',
      answer: ['Sie spricht sowohl Deutsch als auch Englisch.'],
      hint: 'sowohl … als auch; sprechen = to speak',
      explanation: 'sowohl … als auch joins two equal items. There is no comma inside this pair.',
    },
    {
      type: 'order',
      id: 'b1-17-two-part-conjunctions-ex10',
      prompt: 'Build the sentence: "On the one hand the city is beautiful, on the other hand it is expensive."',
      words: ['die', 'Einerseits', 'Stadt', 'ist', 'andererseits', 'schön,', 'sie', 'ist', 'teuer.'],
      answer: ['Einerseits ist die Stadt schön, andererseits ist sie teuer.'],
      explanation: 'einerseits and andererseits are adverbs in position 1, so each is followed directly by the verb (ist).',
    },
    {
      type: 'mc',
      id: 'b1-17-two-part-conjunctions-ex11',
      prompt: 'Complete: "Je ___ die Wohnung, desto höher die Miete."',
      options: ['größer', 'groß', 'am größten'],
      answer: 0,
      explanation: 'Both halves of je … desto need a comparative: größer … höher. This short form without verbs is common in speech and headlines.',
    },
    {
      type: 'fill',
      id: 'b1-17-two-part-conjunctions-ex12',
      prompt: '___ kälter es wird, umso mehr heize ich. (The)',
      answer: ['Je'],
      explanation: 'umso is an alternative to desto, so the first part is still je. The je-clause has the verb at the end (wird).',
    },
  ],
};

export default topic;
