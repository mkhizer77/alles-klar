import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-17-two-part-conjunctions',
  level: 'B1',
  unit: 7,
  order: 24,
  title: 'Two-part conjunctions: entweder … oder, sowohl … als auch, je … desto',
  germanTerm: 'zweiteilige Konnektoren',
  tags: ['conjunctions', 'connectors', 'word order', 'comparison'],
  summary: 'Two-part conjunctions are pairs of words (entweder … oder, sowohl … als auch, je … desto) that link two ideas and tell the listener in advance how the ideas belong together.',
  steps: [
    {
      title: 'Two words that work as a team',
      text: `
A **two-part conjunction** (*zweiteiliger Konnektor*, a pair of linking words) is two words that belong together. The first word announces what is coming; the second word completes it. English has them too: *either … or*, *both … and*.

The simplest pair is **entweder … oder** (either … or). It offers two choices.
`,
      examples: [
        { de: 'Entweder du hilfst mir, oder ich mache es allein.', en: 'Either you help me, or I do it alone.' },
        { de: 'Wir fahren entweder mit dem Zug oder mit dem Bus.', en: 'We go either by train or by bus.' },
        { de: 'Entweder kommst du mit, oder du bleibst hier.', en: 'Either you come along, or you stay here.' },
      ],
    },
    {
      title: 'Pairs for adding and listing',
      text: `
Three pairs join two things in one list:

| German | English |
|---|---|
| **sowohl … als auch** | both … and |
| **nicht nur … sondern auch** | not only … but also |
| **weder … noch** | neither … nor |

The word order inside each part stays normal. One warning: **weder … noch** is already negative. Do not add *nicht* or *kein*.
`,
      examples: [
        { de: 'Er trinkt sowohl Kaffee als auch Tee.', en: 'He drinks both coffee and tea.' },
        { de: 'Sie ist nicht nur schnell, sondern auch sehr genau.', en: 'She is not only fast, but also very precise.' },
        { de: 'Ich habe weder ein Auto noch ein Fahrrad.', en: 'I have neither a car nor a bike. (no extra nicht or kein)' },
      ],
    },
    {
      title: 'Pairs for weighing two sides',
      text: `
Two pairs put two sides of an argument next to each other:

- **zwar … aber** (admittedly … but): you admit a point, then limit it. *zwar* sits inside the first clause; *aber* is position 0, so normal order follows.
- **einerseits … andererseits** (on the one hand … on the other hand): both are adverbs in position 1, so the **verb comes right after** them.
`,
      examples: [
        { de: 'Das Essen war zwar gut, aber zu teuer.', en: 'The food was good, admittedly, but too expensive.' },
        { de: 'Zwar ist das Hotel teuer, aber es ist sehr schön.', en: 'Admittedly the hotel is expensive, but it is very beautiful.' },
        { de: 'Einerseits möchte ich reisen, andererseits habe ich kein Geld.', en: 'On the one hand I want to travel, on the other hand I have no money. (verb right after each adverb)' },
      ],
    },
    {
      title: 'je … desto: the more, the more',
      text: `
**je … desto** says that one thing depends on another: *the more …, the more …*. Both halves need a **comparative** (the -er form: *mehr, besser, schneller*).

The word order is special. The *je*-part is a subordinate clause (a dependent clause): verb at the **end**. The *desto*-part is a main clause: *desto* + comparative takes position 1, and the verb comes **right after**. **umso** can replace *desto*.
`,
      examples: [
        { de: 'Je mehr du liest, desto besser wird dein Wortschatz.', en: 'The more you read, the better your vocabulary gets. (liest at the end; wird right after desto besser)' },
        { de: 'Je länger ich warte, desto nervöser werde ich.', en: 'The longer I wait, the more nervous I get.' },
        { de: 'Je früher, umso besser.', en: 'The earlier, the better. (umso = desto)' },
      ],
    },
    {
      title: 'Where entweder can stand',
      text: `
**entweder** has two correct places. In position 1, the verb comes next: *Entweder **kommst** du …*. Before the subject, the verb stays after the subject: *Entweder **du kommst** …*. Both are fine.

**oder** is always position 0: the clause after it keeps normal order, subject first.
`,
      examples: [
        { de: 'Entweder bleibst du hier, oder du gehst nach Hause.', en: 'Either you stay here, or you go home. (entweder in position 1)' },
        { de: 'Entweder du bleibst hier, oder du gehst nach Hause.', en: 'Either you stay here, or you go home. (entweder before the subject)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-34-coordinating-conjunctions', note: 'oder, aber and sondern are the position-0 conjunctions you already know; here they get a partner word.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'einerseits / andererseits and desto behave like position-1 adverbs: the verb follows immediately.' },
    { topicId: 'a2-10-comparative-superlative', note: 'je … desto always needs comparative forms (mehr, besser, schneller).' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The je-clause is a subordinate clause with the verb at the end.' },
    { topicId: 'b1-18b-concession', note: 'zwar … aber is the two-part way to say "although"; obwohl and trotzdem are the other ways.' },
    { topicId: 'b1-32-opinions-speaking', note: 'einerseits … andererseits and zwar … aber are key phrases for weighing arguments in a talk.' },
  ],
  edgeCases: [
    'In *je … desto* the **desto-part is a main clause**: *desto besser **werde** ich*, not *desto besser ich werde*.',
    '**weder … noch** is already negative. *Ich habe weder Zeit noch Geld* – never *weder keine Zeit*.',
    'The comma goes before **sondern**: *nicht nur billig, sondern auch gut*. Before **als auch** there is no comma.',
    '**Entweder** in position 1 pulls the verb next (*Entweder bleibst du …*); before the subject the verb stays second (*Entweder du bleibst …*). Both are correct.',
    '**zwar** on its own means "namely" (*und zwar*). The "admittedly" meaning needs the partner *aber*.',
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
