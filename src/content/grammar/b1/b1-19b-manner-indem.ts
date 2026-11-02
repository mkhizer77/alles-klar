import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-19b-manner-indem',
  level: 'B1',
  unit: 7,
  order: 28,
  title: 'Manner: indem, dadurch dass',
  germanTerm: 'modal: indem',
  tags: ['connectors', 'subordinate clauses', 'manner', 'method'],
  summary: 'indem and dadurch, dass say how something is done, by what means; both start a subordinate clause with the verb at the end, like English "by doing".',
  steps: [
    {
      title: 'indem: by doing something',
      text: `
A **clause of manner** (*Modalsatz*) answers *Wie?* – how, by what means. The everyday connector is **indem** (by doing). English says *by + -ing*: *by speaking it every day*.

*indem* is a subjunction (a word that starts a subordinate clause): the verb goes to the **end**.
`,
      examples: [
        { de: 'Man lernt eine Sprache, indem man sie jeden Tag spricht.', en: 'You learn a language by speaking it every day. (spricht at the end)' },
        { de: 'Er verbessert sein Deutsch, indem er viel liest.', en: 'He improves his German by reading a lot.' },
        { de: 'Sie spart Geld, indem sie zu Fuß geht.', en: 'She saves money by walking.' },
      ],
    },
    {
      title: 'The indem-clause names the method',
      text: `
The main clause gives the **result**; the indem-clause gives the **method** that produces it. The indem-clause can also come first. Then the main clause starts with its verb, because the whole indem-clause fills position 1.
`,
      examples: [
        { de: 'Indem du viel übst, wirst du besser.', en: 'By practising a lot, you get better. (indem-clause first, then wirst du)' },
        { de: 'Man bleibt gesund, indem man viel Sport macht.', en: 'You stay healthy by doing a lot of sport.' },
      ],
    },
    {
      title: 'dadurch, dass: the heavier form',
      text: `
**dadurch, dass** (by the fact that) means the same as *indem*, but sounds a bit more formal. **dadurch** sits in the main clause; **dass** opens the subordinate clause, with the verb at the end. There is a comma between the two words.
`,
      examples: [
        { de: 'Sie spart Geld dadurch, dass sie zu Fuß geht.', en: 'She saves money by walking. (dadurch in the main clause, dass starts the clause)' },
        { de: 'Er hat dadurch bestanden, dass er jeden Tag gelernt hat.', en: 'He passed by studying every day.' },
        { de: 'Man spart Strom dadurch, dass man das Licht ausmacht.', en: 'You save electricity by switching off the light.' },
      ],
    },
    {
      title: 'indem is not about time',
      text: `
**indem** looks like *in dem*, but it has nothing to do with time or place. It only means "by doing". For "while" (two things at the same time) use **während**.
`,
      examples: [
        { de: 'Ich lerne Wörter, indem ich Karten schreibe.', en: 'I learn words by writing cards. (method)' },
        { de: 'Ich höre Musik, während ich koche.', en: 'I listen to music while I cook. (time: während, not indem)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-19-purpose-manner', note: 'The sibling topic: damit and um … zu answer "what for?", indem answers "how?".' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'indem and dass clauses put the conjugated verb at the end, like weil.' },
    { topicId: 'b1-02b-waehrend-seit-bis', note: 'während is the word for "while"; indem never means that.' },
  ],
  edgeCases: [
    '**indem** looks like *in dem* but means "by doing". For "while" use *während*: *während ich koche*, not *indem ich koche*.',
    '**dadurch, dass** always has a comma before *dass*: *dadurch, dass sie zu Fuß geht*. *dadurch* alone can also stand at the start: *Dadurch, dass …, spart sie Geld.*',
    'After **indem** comes a subject and a conjugated verb, never *zu* + infinitive: *indem man liest*, not *indem zu lesen*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-19b-manner-indem-ex01',
      prompt: 'Man lernt eine Sprache am besten, ___ man sie jeden Tag spricht. (by)',
      answer: ['indem'],
      explanation: 'indem answers "how?". It introduces a subordinate clause: the verb spricht goes to the end.',
    },
    {
      type: 'mc',
      id: 'b1-19b-manner-indem-ex02',
      prompt: 'Which question does an indem-clause answer?',
      options: ['Wie?', 'Wann?', 'Warum?', 'Wozu?'],
      answer: 0,
      explanation: 'indem gives the method, so it answers Wie? (how?). Warum? is answered by weil, Wozu? by damit or um … zu, Wann? by als, wenn or während.',
    },
    {
      type: 'mc',
      id: 'b1-19b-manner-indem-ex03',
      prompt: 'Complete: "Sie spart Geld, indem sie ___."',
      options: ['zu Fuß geht', 'geht zu Fuß', 'zu Fuß zu gehen'],
      answer: 0,
      explanation: 'indem starts a subordinate clause, so the conjugated verb geht goes to the end. zu + infinitive belongs to um … zu, not to indem.',
    },
    {
      type: 'order',
      id: 'b1-19b-manner-indem-ex04',
      prompt: 'Build the sentence: "He improves his German by reading a lot."',
      words: ['sein', 'verbessert', 'Er', 'indem', 'Deutsch,', 'liest.', 'viel', 'er'],
      answer: ['Er verbessert sein Deutsch, indem er viel liest.'],
      explanation: 'Main clause first (verb second: verbessert), then the indem-clause with the verb liest at the end.',
    },
    {
      type: 'fill',
      id: 'b1-19b-manner-indem-ex05',
      prompt: 'Sie spart Strom dadurch, ___ sie das Licht ausmacht.',
      answer: ['dass'],
      explanation: 'dadurch, dass is the two-word version of indem. dadurch sits in the main clause, dass opens the subordinate clause.',
    },
    {
      type: 'match',
      id: 'b1-19b-manner-indem-ex06',
      prompt: 'Match each connector with its meaning.',
      pairs: [
        ['indem', 'by doing (method)'],
        ['dadurch, dass', 'by the fact that (method, formal)'],
        ['während', 'while (time)'],
        ['um … zu', 'in order to (purpose)'],
      ],
      explanation: 'indem and dadurch, dass give the method. während gives the time, um … zu the goal. Only the first two answer "how?".',
    },
    {
      type: 'mc',
      id: 'b1-19b-manner-indem-ex07',
      prompt: 'Complete: "Ich höre Musik, ___ ich koche." (while)',
      options: ['während', 'indem', 'dadurch'],
      answer: 0,
      explanation: 'Listening and cooking happen at the same time; that is während. indem would claim that cooking is the method for listening to music.',
    },
    {
      type: 'mc',
      id: 'b1-19b-manner-indem-ex08',
      prompt: 'Which sentence is correct?',
      options: [
        'Man bleibt gesund, indem man viel Sport macht.',
        'Man bleibt gesund, indem macht man viel Sport.',
        'Man bleibt gesund, indem viel Sport zu machen.',
      ],
      answer: 0,
      explanation: 'indem needs a subject (man) and the conjugated verb at the end (macht). Option 2 has main-clause order; option 3 uses zu + infinitive, which indem never takes.',
    },
    {
      type: 'translate',
      id: 'b1-19b-manner-indem-ex09',
      prompt: 'Translate: "She learns vocabulary by reading a lot."',
      answer: ['Sie lernt Vokabeln, indem sie viel liest.', 'Sie lernt Vokabeln dadurch, dass sie viel liest.'],
      hint: 'Vokabeln lernen = to learn vocabulary; lesen = to read',
      explanation: 'indem sie viel liest gives the method; the verb liest stands at the end. dadurch, dass sie viel liest is the formal alternative.',
    },
    {
      type: 'order',
      id: 'b1-19b-manner-indem-ex10',
      prompt: 'Build the sentence: "We save money by walking." (use dadurch, dass)',
      words: ['Geld', 'sparen', 'Wir', 'dass', 'dadurch,', 'zu', 'wir', 'gehen.', 'Fuß'],
      answer: ['Wir sparen Geld dadurch, dass wir zu Fuß gehen.'],
      explanation: 'dadurch closes the main clause, then the comma and dass open the subordinate clause with gehen at the end.',
    },
  ],
};

export default topic;
