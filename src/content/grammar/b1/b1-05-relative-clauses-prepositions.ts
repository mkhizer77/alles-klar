import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-05-relative-clauses-prepositions',
  level: 'B1',
  unit: 2,
  order: 6,
  title: 'Relative clauses with prepositions (mit dem, für die)',
  germanTerm: 'Relativsatz mit Präposition',
  tags: ['relative clauses', 'prepositions', 'pronouns', 'subordinate clauses'],
  summary: 'When the relative clause needs a preposition, the preposition comes first and decides the case of the pronoun: der Freund, mit dem ich spiele; die Frau, auf die ich warte.',
  steps: [
    {
      title: 'The preposition moves to the front',
      text: `
Many verbs come with a preposition (a small word like *mit, auf, über*): *warten **auf***, *sprechen **über***, *spielen **mit***. When such a verb is inside a relative clause (a clause that describes a noun), the preposition moves to the **front**, right before the relative pronoun.

English often puts the preposition at the end: *the friend I play tennis **with***. German **never** does.
`,
      examples: [
        { de: 'Das ist der Freund, mit dem ich Tennis spiele.', en: 'That is the friend I play tennis with. (mit dem at the front)' },
        { de: 'Die Frau, auf die ich warte, kommt zu spät.', en: 'The woman I am waiting for is late. (auf die at the front)' },
        { de: 'Der Film, über den wir gesprochen haben, läuft heute.', en: 'The film we talked about is on today.' },
      ],
    },
    {
      title: 'The preposition decides the case',
      text: `
Three steps. First, find the **preposition** that belongs to the verb or the meaning (*warten auf*, *wohnen in*). Second, the **preposition decides the case** of the pronoun: *mit* + Dative, *für* + Accusative, *in* + Dative for a place. Third, **gender and number** still come from the noun before the clause.

So *der Freund* + *mit* (Dative) → *mit dem*. *Die Frau* + *warten auf* (Accusative) → *auf die*.
`,
      examples: [
        { de: 'Das Haus, in dem wir wohnen, ist alt.', en: 'The house we live in is old. (in + Dative, neuter → dem)' },
        { de: 'Der Chef, für den ich arbeite, ist streng.', en: 'The boss I work for is strict. (für + Accusative, masculine → den)' },
        { de: 'Die Firma, bei der ich gearbeitet habe, ist groß.', en: 'The company I worked at is big. (bei + Dative, feminine → der)' },
      ],
    },
    {
      title: 'The most common combinations',
      text: `
Here are the forms you will use most. The pronoun is the same table as before; the preposition just tells you which row.

| noun before | preposition + pronoun |
|---|---|
| der Freund | mit **dem** |
| die Frau | auf **die** |
| das Haus | in **dem** |
| die Kollegen | mit **denen** |
| der Film | über **den** |
`,
      examples: [
        { de: 'Die Kollegen, mit denen ich arbeite, sind sehr nett.', en: 'The colleagues I work with are very nice. (mit + Dative plural → denen)' },
        { de: 'Das Thema, über das wir sprechen, ist wichtig.', en: 'The topic we are talking about is important. (über + Accusative, neuter → das)' },
        { de: 'Der Bus, mit dem ich fahre, ist oft voll.', en: 'The bus I take is often full. (mit + Dative, masculine → dem)' },
      ],
    },
    {
      title: 'Verb at the end, commas around',
      text: `
Everything else works as in every relative clause. The conjugated verb goes to the **end**, the clause is separated by **commas**, and it usually follows the noun it describes directly.

So the pattern is: noun, comma, **preposition + pronoun**, the rest of the clause, **verb**, comma, the main clause goes on.
`,
      examples: [
        { de: 'Die Stadt, in der ich geboren bin, liegt am Meer.', en: 'The town I was born in is by the sea. (bin at the end, then liegt)' },
        { de: 'Das ist der Mann, von dem ich dir erzählt habe.', en: 'That is the man I told you about.' },
      ],
    },
    {
      title: 'A quick check with a pronoun',
      text: `
Not sure which form? Say the clause as a normal sentence with a personal pronoun. *Ich spiele mit **ihm*** → Dative → *mit dem*. *Ich warte auf **sie*** → Accusative → *auf die*. *Wir wohnen in **ihm*** (dem Haus) → Dative → *in dem*.

The preposition and the case are the same as in the normal sentence; only the pronoun changes into *dem, die, den, denen*.
`,
      examples: [
        { de: 'Die Freundin, mit der ich reise, kommt aus Wien.', en: 'The friend I travel with is from Vienna. (ich reise mit ihr → mit der)' },
        { de: 'Das Kind, auf das wir warten, kommt gleich.', en: 'The child we are waiting for is coming soon. (wir warten auf es → auf das)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-04-relative-clauses-dat-gen', note: 'The full relative pronoun table; here the preposition decides which row you need.' },
    { topicId: 'b1-05b-relative-wo-was-wer', note: 'The sister topic: wo for places, was after alles / etwas / nichts, wer as "whoever".' },
    { topicId: 'a2-12-verbs-with-prepositions', note: 'You need to know the fixed preposition of the verb (warten auf, sprechen über) before you can build the clause.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'in, an, auf take the Dative for a place (in dem Haus) and the Accusative for a direction.' },
  ],
  edgeCases: [
    'The preposition **never** goes to the end of the clause: *der Freund, mit dem ich spiele*, not *der Freund, dem ich mit spiele*.',
    'The **preposition** decides the case, not the verb: *die Frau, **auf die** ich warte* (warten auf + Accusative), even though *die Frau* is the person waited for.',
    'For people use the pronoun, not *wo*: *die Frau, **mit der** ich arbeite*, never *die Frau, wo ich arbeite*.',
    'Plural Dative is **denen**: *die Kollegen, mit denen ich arbeite*, not *mit den*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-05-relative-clauses-prepositions-ex01',
      prompt: 'Complete: "Das ist der Freund, ___ ich oft Tennis spiele."',
      options: ['mit dem', 'mit den', 'mit der'],
      answer: 0,
      explanation: 'mit takes the Dative. der Freund is masculine → mit dem.',
    },
    {
      type: 'mc',
      id: 'b1-05-relative-clauses-prepositions-ex02',
      prompt: 'Which sentence is correct?',
      options: ['Der Freund, mit dem ich spiele, heißt Tom.', 'Der Freund, dem ich mit spiele, heißt Tom.', 'Der Freund, dem ich spiele mit, heißt Tom.'],
      answer: 0,
      explanation: 'In German the preposition always stands directly before the relative pronoun: mit dem. It never moves to the end as in English.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex03',
      prompt: 'Die Stadt, in ___ ich geboren bin, liegt am Meer.',
      answer: ['der'],
      explanation: 'in + Dative for a place. die Stadt is feminine → Dative der.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex04',
      prompt: 'Der Film, ___ den wir gesprochen haben, läuft heute. (about)',
      answer: ['über'],
      explanation: 'sprechen über + Accusative. The preposition goes before the pronoun den.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex05',
      prompt: 'Die Kollegen, mit ___ ich arbeite, sind sehr nett.',
      answer: ['denen'],
      explanation: 'mit takes the Dative, and die Kollegen is plural: Dative plural = denen.',
    },
    {
      type: 'match',
      id: 'b1-05-relative-clauses-prepositions-ex06',
      prompt: 'Match each beginning with the right relative pronoun.',
      pairs: [
        ['die Freundin, mit ___ ich reise', 'der'],
        ['der Chef, für ___ ich arbeite', 'den'],
        ['das Haus, in ___ wir wohnen', 'dem'],
        ['die Kollegen, mit ___ ich arbeite', 'denen'],
        ['die Frau, auf ___ ich warte', 'die'],
      ],
      explanation: 'mit + Dative feminine → der; für + Accusative masculine → den; in + Dative neuter → dem; mit + Dative plural → denen; auf + Accusative feminine → die.',
    },
    {
      type: 'order',
      id: 'b1-05-relative-clauses-prepositions-ex07',
      prompt: 'Build the sentence: "The woman I am waiting for is late."',
      words: ['warte,', 'auf', 'spät.', 'Die', 'kommt', 'ich', 'Frau,', 'die', 'zu'],
      answer: ['Die Frau, auf die ich warte, kommt zu spät.'],
      explanation: 'warten auf + Accusative: feminine Accusative is die. The preposition stands directly before the pronoun.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex08',
      prompt: 'Die Firma, bei ___ ich gearbeitet habe, ist sehr groß.',
      answer: ['der'],
      explanation: 'bei always takes the Dative. die Firma is feminine → Dative der.',
    },
    {
      type: 'fill',
      id: 'b1-05-relative-clauses-prepositions-ex09',
      prompt: 'Das ist das Thema, über ___ wir gestern gesprochen haben.',
      answer: ['das'],
      explanation: 'sprechen über + Accusative. das Thema is neuter, and the neuter Accusative pronoun is das.',
    },
    {
      type: 'order',
      id: 'b1-05-relative-clauses-prepositions-ex10',
      prompt: 'Build the sentence: "That is the man I told you about."',
      words: ['dem', 'ich', 'Mann,', 'erzählt', 'Das', 'dir', 'ist', 'von', 'habe.', 'der'],
      answer: ['Das ist der Mann, von dem ich dir erzählt habe.'],
      explanation: 'erzählen von + Dative: masculine Dative is dem, so von dem. The verb habe goes to the end of the relative clause.',
    },
    {
      type: 'translate',
      id: 'b1-05-relative-clauses-prepositions-ex11',
      prompt: 'Translate: "The house in which we live is old."',
      answer: ['Das Haus, in dem wir wohnen, ist alt.', 'Das Haus, wo wir wohnen, ist alt.'],
      hint: 'wohnen in + Dative, alt = old',
      explanation: 'in + Dative with neuter das Haus → in dem. Because it is a place, wo is also possible (see the sister topic).',
    },
    {
      type: 'translate',
      id: 'b1-05-relative-clauses-prepositions-ex12',
      prompt: 'Translate: "The friends I travel with are nice."',
      answer: ['Die Freunde, mit denen ich reise, sind nett.', 'Die Freunde, mit denen ich reise, sind sehr nett.'],
      hint: 'reisen mit + Dative, nett = nice',
      explanation: 'mit takes the Dative, and die Freunde is plural → mit denen. The preposition stays in front, reise goes to the end of the clause.',
    },
  ],
};

export default topic;
