import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-12-verbs-with-prepositions',
  level: 'A2',
  unit: 4,
  order: 13,
  title: 'Verbs with fixed prepositions (warten auf, denken an)',
  germanTerm: 'Verben mit Präpositionen',
  tags: ['verbs', 'prepositions', 'Accusative', 'Dative', 'collocations'],
  summary: 'Many German verbs come with a fixed preposition and case (warten auf + Accusative, träumen von + Dative) that you must learn together with the verb, because the preposition cannot be guessed from English.',
  steps: [
    {
      title: 'Learn verb, preposition and case together',
      text: `
Some verbs always come with a particular **preposition** (*Präposition*: a word like *auf, mit, für*), and that preposition decides the **case** of the noun after it. English has this too (*wait for, think of*), but the German preposition is often a different one: *warten **auf*** (not *für*), *denken **an*** (not *von*).

The preposition has lost its normal meaning here, so you cannot translate it. Learn the three parts as **one unit**: *warten auf + Accusative*.
`,
      examples: [
        { de: 'Ich warte auf den Bus.', en: 'I am waiting for the bus. (warten auf, not für)' },
        { de: 'Er denkt oft an seine Kindheit.', en: 'He often thinks of his childhood. (denken an, not von)' },
        { de: 'Sie interessiert sich für Musik.', en: 'She is interested in music. (sich interessieren für, not in)' },
      ],
    },
    {
      title: 'Verbs with the Accusative',
      text: `
**für** and **um** always take the Accusative. **auf, über, an** and **in** can take two cases, but in these fixed pairs they take the **Accusative**:

**warten auf** (to wait for), **denken an** (to think of), **sich erinnern an** (to remember), **glauben an** (to believe in), **sich interessieren für** (to be interested in), **sich bedanken für** (to thank for), **sprechen über** (to talk about), **sich ärgern über** (to be annoyed about), **sich kümmern um** (to take care of), **bitten um** (to ask for), **sich verlieben in** (to fall in love with).
`,
      examples: [
        { de: 'Ich warte auf meinen Freund.', en: 'I am waiting for my friend. (auf + Accusative: meinen)' },
        { de: 'Wir sprechen über das Problem.', en: 'We are talking about the problem. (über + Accusative)' },
        { de: 'Sie kümmert sich um den Hund.', en: 'She takes care of the dog. (um + Accusative)' },
        { de: 'Er hat sich in sie verliebt.', en: 'He has fallen in love with her. (sich verlieben in + Accusative)' },
      ],
    },
    {
      title: 'Verbs with the Dative',
      text: `
**mit, nach, von** and **bei** always take the Dative. **vor** takes the Dative in these pairs, and so does **an** with *teilnehmen*:

**träumen von** (to dream of), **erzählen von** (to tell about), **fragen nach** (to ask about), **sprechen mit** (to speak with), **anfangen / aufhören mit** (to start / stop doing), **Angst haben vor** (to be afraid of), **teilnehmen an** (to take part in).
`,
      examples: [
        { de: 'Ich träume von einem Haus am Meer.', en: 'I dream of a house by the sea. (von + Dative)' },
        { de: 'Hast du Angst vor Spinnen?', en: 'Are you afraid of spiders? (vor + Dative)' },
        { de: 'Er nimmt an dem Deutschkurs teil.', en: 'He takes part in the German course. (teilnehmen an + Dative)' },
        { de: 'Sie fragt nach dem Weg.', en: 'She asks the way. (nach + Dative)' },
      ],
    },
    {
      title: 'auf or über after sich freuen?',
      text: `
One verb can take two prepositions with two meanings. **sich freuen auf** = to look forward to (it is still coming). **sich freuen über** = to be happy about (you already have it). Both take the Accusative.

In the same way, **sprechen mit** is with a person, **sprechen über** is about a topic.
`,
      examples: [
        { de: 'Wir freuen uns auf die Ferien.', en: 'We are looking forward to the holidays. (auf: still to come)' },
        { de: 'Ich freue mich über das Geschenk.', en: 'I am happy about the present. (über: already here)' },
        { de: 'Ich spreche mit dir über das Problem.', en: 'I am talking to you about the problem. (mit a person, über a topic)' },
      ],
    },
    {
      title: 'Asking about a person',
      text: `
To ask about a **person**, put the preposition in front of **wen** (Accusative) or **wem** (Dative): *Auf **wen** wartest du?* (Who are you waiting for?), *Mit **wem** sprichst du?* (Who are you talking to?).

For a **thing** German glues *wo* to the preposition: *Worauf wartest du?* That is the next topic.
`,
      examples: [
        { de: 'Auf wen wartest du?', en: 'Who are you waiting for? (auf + wen: Accusative)' },
        { de: 'Mit wem sprichst du?', en: 'Who are you talking to? (mit + wem: Dative)' },
        { de: 'An wen denkst du?', en: 'Who are you thinking of? (an + wen)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-22-accusative-prepositions', note: 'für, um, durch, gegen always take the Accusative, also after verbs.' },
    { topicId: 'a1-25-dative-prepositions', note: 'mit, nach, von, zu always take the Dative, also after verbs.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'Many of these verbs are reflexive as well: sich freuen auf, sich interessieren für.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'How to ask Worauf? and answer darauf when the object is a thing.' },
    { topicId: 'b1-27-verb-preposition-b1', note: 'The longer B1 list of verb + preposition combinations.' },
  ],
  edgeCases: [
    'The preposition is **not** the English one: *warten **auf*** (not für), *denken **an*** (not von), *sich interessieren **für*** (not in), *Angst haben **vor*** (not von).',
    '**sich freuen auf** (looking forward, future) vs **sich freuen über** (happy about, present). Both take the Accusative.',
    'With two-way prepositions in these combinations, **auf / über / in** take the Accusative, **vor** the Dative: *auf den Bus warten* but *vor dem Hund Angst haben*.',
    '**an** is Accusative with denken, sich erinnern, glauben, but Dative with teilnehmen: *Ich nehme an **dem** Kurs teil.*',
    '**sprechen mit** (with a person) vs **sprechen über** (about a topic): *Ich spreche mit dir über das Problem.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-12-verbs-with-prepositions-ex01',
      prompt: 'Complete: "Ich warte ___ den Bus."',
      options: ['auf', 'an', 'für'],
      answer: 0,
      explanation: 'warten goes with auf + Accusative. für is the English "for" trap.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex02',
      prompt: 'Sie interessiert sich ___ Musik.',
      answer: ['für'],
      explanation: 'sich interessieren für + Accusative. English says "interested in", German says für.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex03',
      prompt: 'Er denkt oft ___ seine Kindheit.',
      answer: ['an'],
      explanation: 'denken an + Accusative (seine Kindheit). Not von, even though English says "think of".',
    },
    {
      type: 'match',
      id: 'a2-12-verbs-with-prepositions-ex04',
      prompt: 'Match each verb with its fixed preposition.',
      pairs: [
        ['warten', 'auf'],
        ['sich interessieren', 'für'],
        ['träumen', 'von'],
        ['fragen', 'nach'],
        ['sich kümmern', 'um'],
      ],
      explanation: 'warten auf, sich interessieren für, träumen von, fragen nach, sich kümmern um. Learn each verb with its preposition.',
    },
    {
      type: 'mc',
      id: 'a2-12-verbs-with-prepositions-ex05',
      prompt: 'You have just received a present. "Ich freue mich ___ das Geschenk."',
      options: ['über', 'auf', 'an'],
      answer: 0,
      explanation: 'The present is already here, so you are happy about it: sich freuen über. auf would mean you are still waiting for it.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex06',
      prompt: 'Wir sprechen ___ das Problem.',
      answer: ['über'],
      explanation: 'sprechen über + Accusative = to talk about a topic. (sprechen mit = with a person.)',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex07',
      prompt: 'Ich habe Angst ___ Spinnen.',
      answer: ['vor'],
      explanation: 'Angst haben vor + Dative. English "afraid of" tempts you to say von, but it is vor.',
    },
    {
      type: 'mc',
      id: 'a2-12-verbs-with-prepositions-ex08',
      prompt: 'Which case? "Ich warte auf ___ Freund."',
      options: ['meinen', 'meinem', 'mein'],
      answer: 0,
      explanation: 'warten auf takes the Accusative. Freund is masculine → meinen Freund.',
    },
    {
      type: 'order',
      id: 'a2-12-verbs-with-prepositions-ex09',
      prompt: 'Build the sentence: "She is looking forward to the holidays."',
      words: ['die', 'sich', 'Sie', 'Ferien.', 'auf', 'freut'],
      answer: ['Sie freut sich auf die Ferien.'],
      explanation: 'Verb, then the reflexive pronoun sich, then auf + Accusative plural (die Ferien).',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex10',
      prompt: 'Er nimmt ___ dem Deutschkurs teil.',
      answer: ['an'],
      explanation: 'teilnehmen an + Dative (dem Kurs). This is one of the few an-verbs that take the Dative.',
    },
    {
      type: 'translate',
      id: 'a2-12-verbs-with-prepositions-ex11',
      prompt: 'Translate: "I am waiting for my sister."',
      answer: ['Ich warte auf meine Schwester.'],
      hint: 'warten auf = to wait for, die Schwester = sister',
      explanation: 'warten auf + Accusative. Schwester is feminine, so meine Schwester.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex12',
      prompt: 'Sie hat sich ___ ihn verliebt.',
      answer: ['in'],
      explanation: 'sich verlieben in + Accusative (ihn). English says "fall in love with", German says in.',
    },
  ],
};

export default topic;
