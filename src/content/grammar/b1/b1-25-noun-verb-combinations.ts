import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-25-noun-verb-combinations',
  level: 'B1',
  unit: 8,
  order: 35,
  title: 'Noun–verb combinations (eine Entscheidung treffen)',
  germanTerm: 'Nomen-Verb-Verbindungen',
  tags: ['verbs', 'vocabulary', 'collocations', 'formal style'],
  summary: 'Noun–verb combinations are fixed pairs like eine Entscheidung treffen or eine Frage stellen, where the noun carries the meaning and the verb is just the partner that must be used with it.',
  steps: [
    {
      title: 'What they are: fixed noun plus verb',
      text: `
Some everyday ideas are said with a **noun plus a fixed verb**, and the verb is not the one English would choose. German does not "make" a decision; it *treffen* ("meets") it. It does not "ask" a question; it *stellen* ("puts") it.

A **noun–verb combination** (*Nomen-Verb-Verbindung*) is such a pair. The noun carries the meaning; the verb is just its partner. The verb is **not free**, so learn each pair as one unit.
`,
      examples: [
        { de: 'Wir müssen eine Entscheidung treffen.', en: 'We have to make a decision. (treffen, not machen)' },
        { de: 'Darf ich eine Frage stellen?', en: 'May I ask a question? (stellen, not fragen)' },
        { de: 'Sie hat einen Fehler gemacht.', en: 'She made a mistake. (here machen is right)' },
      ],
    },
    {
      title: 'Pairs with nehmen and treffen',
      text: `
**nehmen** (to take) is the partner of several nouns: **Platz nehmen** (to sit down), **Abschied nehmen von** (to say goodbye to), **Rücksicht nehmen auf** (to show consideration for). **treffen** goes with **eine Entscheidung treffen** (to make a decision).
`,
      examples: [
        { de: 'Bitte nehmen Sie Platz.', en: 'Please take a seat.' },
        { de: 'Er nimmt Abschied von seinen Kollegen.', en: 'He says goodbye to his colleagues.' },
        { de: 'Du musst auf deine Nachbarn Rücksicht nehmen.', en: 'You have to show consideration for your neighbours.' },
        { de: 'Ich habe eine Entscheidung getroffen.', en: 'I have made a decision. (Perfekt: getroffen)' },
      ],
    },
    {
      title: 'Pairs with stellen, geben and sagen',
      text: `
**eine Frage stellen** means to ask a question. **sich Mühe geben** means to make an effort (with a Dative pronoun: *mir, dir, sich*). **Bescheid sagen** or **Bescheid geben** means to let someone know; *sagen* is informal, *geben* is neutral.
`,
      examples: [
        { de: 'Darf ich Ihnen eine Frage stellen?', en: 'May I ask you a question?' },
        { de: 'Sie hat sich große Mühe gegeben.', en: 'She made a great effort. (Perfekt: gegeben)' },
        { de: 'Sag mir bitte Bescheid, wenn du kommst.', en: 'Please let me know when you are coming.' },
      ],
    },
    {
      title: 'Pairs with spielen, haben, führen, treiben',
      text: `
A few more pairs you meet at B1: **eine Rolle spielen** (to play a role, to matter), **Interesse haben an** + Dative (to be interested in), **ein Gespräch führen** (to have a conversation), **Sport treiben** or **Sport machen** (to do sport).
`,
      examples: [
        { de: 'Geld spielt bei dieser Entscheidung keine Rolle.', en: 'Money plays no role in this decision.' },
        { de: 'Ich habe Interesse an Kunst.', en: 'I am interested in art. (an + Dative)' },
        { de: 'Wir haben ein langes Gespräch geführt.', en: 'We had a long conversation.' },
        { de: 'Er treibt jeden Tag Sport.', en: 'He does sport every day.' },
      ],
    },
    {
      title: 'Pairs with a preposition inside',
      text: `
In some pairs the noun sits inside a **prepositional phrase**: **zur Verfügung stehen** (to be available), **zur Verfügung stellen** (to make available), **in Frage kommen** (to be an option), **zu Ende gehen** (to come to an end). Watch *stehen* (something is available) against *stellen* (someone makes it available).
`,
      examples: [
        { de: 'Das Auto steht dir zur Verfügung.', en: 'The car is available to you. (stehen: it is available)' },
        { de: 'Ich stelle dir mein Auto zur Verfügung.', en: 'I make my car available to you. (stellen: I make it available)' },
        { de: 'Das kommt nicht in Frage.', en: 'That is out of the question.' },
        { de: 'Die Ferien gehen bald zu Ende.', en: 'The holidays are coming to an end soon.' },
      ],
    },
    {
      title: 'How the pairs behave in a sentence',
      text: `
The noun is usually in the **Accusative** (the object case: *eine Entscheidung*, *Platz*) or inside a prepositional phrase (*zur Verfügung*). The verb conjugates normally and keeps its usual Perfekt form.

In a main clause the noun goes towards the **end**, like a separable prefix. An extra object with its fixed preposition stands before it.
`,
      examples: [
        { de: 'Er nimmt auf die Kinder Rücksicht.', en: 'He shows consideration for the children. (noun at the end)' },
        { de: 'Wir haben gestern eine Entscheidung getroffen.', en: 'We made a decision yesterday. (normal Perfekt)' },
        { de: 'Der Film ist leider schon zu Ende gegangen.', en: 'The film has unfortunately already come to an end.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-20-accusative', note: 'The noun in most combinations is a direct object in the Accusative.' },
    { topicId: 'b1-27-verb-preposition-b1', note: 'Many combinations carry a fixed preposition: Rücksicht nehmen auf, Interesse haben an.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The noun part sits at the end of the midfield, like a separable prefix.' },
    { topicId: 'b1-31-register-formal-informal', note: 'Noun–verb combinations are typical of formal letters and official texts.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Many of the nouns here are -ung nouns built from verbs: Entscheidung, Verfügung.' },
  ],
  edgeCases: [
    'Do not translate the verb from English: **eine Entscheidung treffen** (not *machen*), **eine Frage stellen** (not *machen* or *fragen*).',
    '**Platz nehmen** (to sit down) is different from **Platz haben** (to have room). Both exist, but with different meanings.',
    '**Bescheid sagen** is informal, **Bescheid geben** is neutral; both mean "to let someone know".',
    '**zur Verfügung stellen** (someone makes something available) vs **zur Verfügung stehen** (something is available): *Ich stelle dir mein Auto zur Verfügung* / *Das Auto steht dir zur Verfügung*.',
    'The fixed preposition belongs to the combination, not to the verb: **Rücksicht nehmen auf**, but **Abschied nehmen von**.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-25-noun-verb-combinations-ex01',
      prompt: 'Complete: "Wir müssen heute eine Entscheidung ___."',
      options: ['treffen', 'machen', 'nehmen'],
      answer: 0,
      explanation: 'The fixed partner of Entscheidung is treffen. machen is the English-style mistake; nehmen goes with Platz, Abschied and Rücksicht.',
    },
    {
      type: 'fill',
      id: 'b1-25-noun-verb-combinations-ex02',
      prompt: 'Darf ich Ihnen eine Frage ___? (to ask)',
      answer: ['stellen'],
      explanation: 'eine Frage stellen = to ask a question. The verb fragen is never used with the noun Frage.',
    },
    {
      type: 'match',
      id: 'b1-25-noun-verb-combinations-ex03',
      prompt: 'Match each noun with the verb that goes with it.',
      pairs: [
        ['Abschied', 'nehmen'],
        ['eine Rolle', 'spielen'],
        ['Bescheid', 'sagen'],
        ['zur Verfügung', 'stehen'],
        ['Sport', 'treiben'],
        ['sich Mühe', 'geben'],
      ],
      explanation: 'Each noun has one or two fixed partner verbs. Abschied nehmen, eine Rolle spielen, Bescheid sagen, zur Verfügung stehen, Sport treiben, sich Mühe geben.',
    },
    {
      type: 'mc',
      id: 'b1-25-noun-verb-combinations-ex04',
      prompt: 'Rewrite "Er hat sich entschieden." with a noun–verb combination: "Er hat eine Entscheidung ___."',
      options: ['getroffen', 'gemacht', 'genommen'],
      answer: 0,
      explanation: 'The Perfekt of treffen is getroffen: Er hat eine Entscheidung getroffen.',
    },
    {
      type: 'fill',
      id: 'b1-25-noun-verb-combinations-ex05',
      prompt: 'Bitte ___ Sie Platz. (to sit down)',
      answer: ['nehmen'],
      explanation: 'Platz nehmen = to take a seat. In the Sie-imperative the verb comes first: Nehmen Sie Platz.',
    },
    {
      type: 'order',
      id: 'b1-25-noun-verb-combinations-ex06',
      prompt: 'Build the sentence: "The holidays unfortunately come to an end next week."',
      words: ['gehen', 'Ferien', 'Die', 'leider', 'Woche', 'nächste', 'zu', 'Ende.'],
      answer: ['Die Ferien gehen leider nächste Woche zu Ende.'],
      explanation: 'zu Ende gehen: the verb gehen stands in position 2 and the noun part zu Ende goes to the end, after the time phrase.',
    },
    {
      type: 'mc',
      id: 'b1-25-noun-verb-combinations-ex07',
      prompt: 'Complete: "Du musst auf deine Kollegen Rücksicht ___."',
      options: ['nehmen', 'haben', 'geben'],
      answer: 0,
      explanation: 'Rücksicht nehmen auf + Akkusativ = to show consideration for. The noun Rücksicht stands at the end of the clause.',
    },
    {
      type: 'fill',
      id: 'b1-25-noun-verb-combinations-ex08',
      prompt: 'Ich habe mir große ___ gegeben. (effort)',
      answer: ['Mühe'],
      explanation: 'sich Mühe geben = to make an effort. The reflexive pronoun is in the Dative (mir).',
    },
    {
      type: 'translate',
      id: 'b1-25-noun-verb-combinations-ex09',
      prompt: 'Translate: "I am interested in art." (use Interesse haben)',
      answer: ['Ich habe Interesse an Kunst.', 'Ich habe Interesse an der Kunst.'],
      hint: 'Interesse haben an + Dativ; die Kunst = art',
      explanation: 'Interesse haben an + Dativ. Without an article, Kunst stays as it is: an Kunst.',
    },
    {
      type: 'mc',
      id: 'b1-25-noun-verb-combinations-ex10',
      prompt: 'Which phrase means the same as "in Frage kommen"?',
      options: ['möglich sein', 'eine Frage stellen', 'kommen'],
      answer: 0,
      explanation: 'in Frage kommen = möglich sein (to be an option). Das kommt nicht in Frage = that is out of the question.',
    },
    {
      type: 'order',
      id: 'b1-25-noun-verb-combinations-ex11',
      prompt: 'Build the sentence: "The film has unfortunately already come to an end."',
      words: ['ist', 'Film', 'Der', 'Ende', 'leider', 'gegangen.', 'zu', 'schon'],
      answer: ['Der Film ist leider schon zu Ende gegangen.'],
      explanation: 'zu Ende gehen takes sein in the Perfekt (gehen). The noun part zu Ende goes right before the participle gegangen.',
    },
    {
      type: 'mc',
      id: 'b1-25-noun-verb-combinations-ex12',
      prompt: 'Which combination is wrong?',
      options: ['einen Fehler machen', 'eine Frage machen', 'Sport machen'],
      answer: 1,
      explanation: 'A question is asked with stellen, never machen. einen Fehler machen and Sport machen are both correct.',
    },
  ],
};

export default topic;
