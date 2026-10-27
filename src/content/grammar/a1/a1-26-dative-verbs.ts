import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-26-dative-verbs',
  level: 'A1',
  unit: 5,
  order: 26,
  title: 'Verbs that take the Dative (helfen, gefallen, danken …)',
  germanTerm: 'Dativverben',
  tags: ['verbs', 'dative', 'objects'],
  summary: 'A small group of verbs – helfen, danken, gefallen, gehören, schmecken and others – take their only object in the Dative instead of the Accusative.',
  explanation: `
### What it is

Most verbs with one object use the Accusative: *Ich sehe **den** Mann.* But a handful of common verbs use the **Dative** for their one and only object. They are called **Dative verbs** (*Dativverben*):

- Ich helfe **dem** Mann. – *I help the man.*
- Sie dankt **der** Lehrerin. – *She thanks the teacher.*
- Das Auto gehört **meinem** Bruder. – *The car belongs to my brother.*

There is no logical reason you could work out. You simply learn these verbs **together with the Dative**, the way you learn a noun with its article.

### The list for A1

| verb | meaning | example |
|---|---|---|
| **helfen** | to help | Kannst du **mir** helfen? |
| **danken** | to thank | Ich danke **Ihnen**. |
| **gefallen** | to please, to be liked | Das Bild gefällt **mir**. |
| **gehören** | to belong to | Die Tasche gehört **der** Frau. |
| **schmecken** | to taste (good) to | Die Suppe schmeckt **dem** Kind. |
| **antworten** | to answer (someone) | Er antwortet **dem** Lehrer. |
| **gratulieren** | to congratulate | Wir gratulieren **dir**! |
| **passen** | to fit, to suit | Die Jacke passt **mir**. |
| **fehlen** | to be missing (to someone) | Du fehlst **mir**. |
| **glauben** | to believe (a person) | Ich glaube **dir**. |
| **zuhören** | to listen to | Hör **mir** zu! |
| **folgen** | to follow | Folgen Sie **dem** Weg. |

Notice that many of them are about a **person being affected**: helped, thanked, pleased, congratulated. That is a useful way to remember the group, even if it does not explain every verb.

### The "flipped" verbs: gefallen, schmecken, gehören, passen, fehlen

Four or five of these verbs work the opposite way round from English. In *I like the film*, English makes *I* the subject. German says *The film pleases me*:

- Der Film **gefällt mir**. – *I like the film.* (literally: the film pleases me)
- Die Pizza **schmeckt mir**. – *I like the pizza.* (the pizza tastes good to me)
- Das Haus **gehört uns**. – *The house belongs to us.*
- Du **fehlst mir**. – *I miss you.* (you are missing to me)

The **thing** is the subject (Nominative) and controls the verb ending; the **person** is in the Dative. If the thing is plural, the verb is plural too: *Die Schuhe gefallen mir.*

### A few fixed phrases

Some of the most useful everyday sentences are built on the Dative:

- **Wie geht es dir / Ihnen?** – How are you? (literally: how goes it to you)
- **Es tut mir leid.** – I'm sorry.
- **Das ist mir egal.** – I don't mind.
- **Mir ist kalt / warm.** – I'm cold / warm.

### Why it matters

These verbs are among the first you need in real life: asking for help, saying thank you, saying what you like. If you use the Accusative with them (*Ich helfe dich*), people will understand you, but it sounds clearly wrong. Learn the short list and the flipped pattern of *gefallen* now; together with the Dative pronouns (*mir, dir, ihm …*) in the next topic you will be able to use all of them naturally.
`,
  examples: [
    { de: 'Ich helfe meiner Mutter.', en: 'I help my mother. (helfen + Dative: meiner)' },
    { de: 'Wir danken dem Lehrer.', en: 'We thank the teacher. (danken + Dative: dem)' },
    { de: 'Der Pullover gefällt mir.', en: 'I like the jumper. (the jumper pleases me)' },
    { de: 'Das Handy gehört dem Kind.', en: 'The phone belongs to the child.' },
    { de: 'Der Kuchen schmeckt den Gästen.', en: 'The guests like the cake. (Dative plural: den Gästen)' },
    { de: 'Die Schuhe passen mir nicht.', en: 'The shoes do not fit me. (plural subject, plural verb)' },
    { de: 'Wie geht es Ihnen?', en: 'How are you? (formal; fixed phrase with the Dative)' },
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
