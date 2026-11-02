import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-26-dative-verbs',
  level: 'A1',
  unit: 5,
  order: 30,
  title: 'Verbs that take the Dative (helfen, gefallen, danken …)',
  germanTerm: 'Dativverben',
  tags: ['verbs', 'dative', 'objects'],
  summary: 'A small group of verbs – helfen, danken, gefallen, gehören, schmecken and others – take their only object in the Dative instead of the Accusative.',
  steps: [
    {
      title: 'Some verbs want the Dative',
      text: `
Most verbs with one object use the Accusative: *Ich sehe **den** Mann.* But a handful of common verbs use the **Dative** for their one and only object. They are called **Dative verbs** (*Dativverben*).

There is no rule you can work out. You learn these verbs **together with the Dative**, the way you learn a noun with its article.
`,
      examples: [
        { de: 'Ich helfe dem Mann.', en: 'I help the man. (helfen + Dative: dem)' },
        { de: 'Sie dankt der Lehrerin.', en: 'She thanks the teacher. (danken + Dative: der)' },
        { de: 'Das Auto gehört meinem Bruder.', en: 'The car belongs to my brother. (gehören + Dative: meinem)' },
      ],
    },
    {
      title: 'The list for A1',
      text: `
**helfen** (help), **danken** (thank), **gefallen** (please, be liked), **gehören** (belong to), **schmecken** (taste good to), **antworten** (answer someone), **gratulieren** (congratulate), **passen** (fit, suit), **fehlen** (be missing to), **glauben** (believe a person), **zuhören** (listen to), **folgen** (follow).

Many of them are about a **person being affected**: helped, thanked, pleased, congratulated. That helps you remember the group.
`,
      examples: [
        { de: 'Er antwortet dem Lehrer.', en: 'He answers the teacher.' },
        { de: 'Wir gratulieren der Kollegin.', en: 'We congratulate our colleague.' },
        { de: 'Folgen Sie dem Weg.', en: 'Follow the path.' },
        { de: 'Ich glaube dir.', en: 'I believe you.' },
      ],
    },
    {
      title: 'The flipped verbs: gefallen, schmecken, gehören',
      text: `
Some of these verbs work the other way round from English. In *I like the film*, English makes *I* the subject. German says *the film pleases me*: **Der Film gefällt mir.**

With **gefallen, schmecken, gehören, passen, fehlen** the **thing** is the subject (Nominative) and the **person** is in the Dative.
`,
      examples: [
        { de: 'Der Pullover gefällt mir.', en: 'I like the jumper. (the jumper pleases me)' },
        { de: 'Die Pizza schmeckt den Kindern.', en: 'The children like the pizza. (the pizza tastes good to them)' },
        { de: 'Das Haus gehört uns.', en: 'The house belongs to us.' },
        { de: 'Du fehlst mir.', en: 'I miss you. (you are missing to me)' },
      ],
    },
    {
      title: 'The thing controls the verb ending',
      text: `
Because the thing is the subject, it decides the verb form. If the thing is plural, the verb is plural too: *Die Schuhe **gefallen** mir*, not *gefällt*. One shoe: *Der Schuh **gefällt** mir.*
`,
      examples: [
        { de: 'Die Schuhe gefallen mir.', en: 'I like the shoes. (plural subject, plural verb)' },
        { de: 'Die Schuhe passen mir nicht.', en: 'The shoes do not fit me.' },
        { de: 'Der Kuchen schmeckt den Gästen.', en: 'The guests like the cake. (singular subject: schmeckt)' },
      ],
    },
    {
      title: 'Everyday phrases built on the Dative',
      text: `
Some of the most useful sentences in German are built on this pattern: **Wie geht es dir / Ihnen?** (How are you? – literally: how goes it to you), **Es tut mir leid.** (I am sorry.), **Das ist mir egal.** (I do not mind.), **Mir ist kalt.** (I am cold.)
`,
      examples: [
        { de: 'Wie geht es Ihnen?', en: 'How are you? (formal)' },
        { de: 'Es tut mir leid.', en: 'I am sorry.' },
        { de: 'Mir ist kalt.', en: 'I am cold.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-24-dative', note: 'The Dative articles dem, der, dem, den are used after these verbs.' },
    { topicId: 'a1-27-dative-pronouns', note: 'With pronouns these verbs take mir, dir, ihm: Hilf mir! Das gefällt ihr.' },
    { topicId: 'a1-20-accusative', note: 'Most other verbs take the Accusative; this list is the exception you memorise.' },
    { topicId: 'a1-19-gern-lieber', note: 'gern, mögen and gefallen are three different ways of saying "like"; gefallen flips subject and object.' },
  ],
  edgeCases: [
    '**helfen** takes the Dative even though English "help someone" looks like a direct object: *Ich helfe **dir***, never *Ich helfe dich*.',
    'With **gefallen / schmecken / gehören / passen / fehlen** the **thing** is the subject. *Die Schuhe gefallen mir* has a plural verb because die Schuhe is plural.',
    '**antworten** takes a Dative person: *Ich antworte dem Chef*. But "answer a question" is *eine Frage beantworten* with the Accusative.',
    '**glauben** takes a Dative for a person (*Ich glaube dir*) but an Accusative for a thing (*Ich glaube das*).',
    '*gefallen* is used for looks and general liking; *schmecken* only for food and drink. *Das Essen gefällt mir* sounds odd; say *Das Essen schmeckt mir*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-26-dative-verbs-ex01',
      prompt: 'Which verb takes the Dative?',
      options: ['sehen', 'helfen', 'kaufen', 'suchen'],
      answer: 1,
      explanation: 'helfen is a Dative verb: Ich helfe dem Mann. The other three take the Accusative.',
    },
    {
      type: 'fill',
      id: 'a1-26-dative-verbs-ex02',
      prompt: 'Ich helfe ___ Kind. (the)',
      answer: ['dem'],
      explanation: 'helfen takes the Dative. Kind is neuter, so das becomes dem.',
    },
    {
      type: 'fill',
      id: 'a1-26-dative-verbs-ex03',
      prompt: 'Das Fahrrad gehört ___ Nachbarin. (the)',
      answer: ['der'],
      explanation: 'gehören takes the Dative. Nachbarin is feminine, so die becomes der.',
    },
    {
      type: 'mc',
      id: 'a1-26-dative-verbs-ex04',
      prompt: 'How do you say "I like the film" using gefallen?',
      options: ['Ich gefalle den Film.', 'Der Film gefällt mir.', 'Der Film gefällt mich.'],
      answer: 1,
      explanation: 'With gefallen the thing is the subject and the person is Dative: Der Film gefällt mir.',
    },
    {
      type: 'match',
      id: 'a1-26-dative-verbs-ex05',
      prompt: 'Match each Dative verb with its meaning.',
      pairs: [
        ['danken', 'to thank'],
        ['gehören', 'to belong to'],
        ['schmecken', 'to taste good to'],
        ['gratulieren', 'to congratulate'],
        ['passen', 'to fit'],
      ],
      explanation: 'All of these take their person in the Dative. Learn them as a group.',
    },
    {
      type: 'fill',
      id: 'a1-26-dative-verbs-ex06',
      prompt: 'Die Suppe ___ (schmecken) den Kindern.',
      answer: ['schmeckt'],
      explanation: 'The subject is die Suppe (singular), so the verb is schmeckt. The children are in the Dative plural.',
    },
    {
      type: 'fill',
      id: 'a1-26-dative-verbs-ex07',
      prompt: 'Die Schuhe ___ (gefallen) mir sehr.',
      answer: ['gefallen'],
      explanation: 'The subject is die Schuhe (plural), so the verb is plural: gefallen. mir is the person who likes them.',
    },
    {
      type: 'order',
      id: 'a1-26-dative-verbs-ex08',
      prompt: 'Build the sentence: "We thank the teacher." (teacher = female)',
      words: ['danken', 'Lehrerin.', 'Wir', 'der'],
      answer: ['Wir danken der Lehrerin.'],
      explanation: 'danken takes the Dative. Lehrerin is feminine → der Lehrerin.',
    },
    {
      type: 'mc',
      id: 'a1-26-dative-verbs-ex09',
      prompt: 'Which sentence is correct?',
      options: ['Ich antworte den Lehrer.', 'Ich antworte dem Lehrer.', 'Ich antworte der Lehrer.'],
      answer: 1,
      explanation: 'antworten takes a Dative person. Lehrer is masculine, so dem Lehrer.',
    },
    {
      type: 'fill',
      id: 'a1-26-dative-verbs-ex10',
      prompt: 'Wie geht es ___? (you, formal)',
      answer: ['Ihnen'],
      explanation: 'The fixed phrase Wie geht es ...? takes the Dative. Formal you in the Dative is Ihnen, with a capital I.',
    },
    {
      type: 'translate',
      id: 'a1-26-dative-verbs-ex11',
      prompt: 'Translate: "The bag belongs to my brother."',
      answer: ['Die Tasche gehört meinem Bruder.'],
      hint: 'gehören = to belong to, die Tasche = bag',
      explanation: 'gehören takes the Dative. Bruder is masculine → meinem Bruder.',
    },
  ],
};

export default topic;
