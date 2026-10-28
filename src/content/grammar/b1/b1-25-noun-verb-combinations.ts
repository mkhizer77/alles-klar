import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-25-noun-verb-combinations',
  level: 'B1',
  unit: 8,
  order: 25,
  title: 'Noun–verb combinations (eine Entscheidung treffen)',
  germanTerm: 'Nomen-Verb-Verbindungen',
  tags: ['verbs', 'vocabulary', 'collocations', 'formal style'],
  summary: 'Noun–verb combinations are fixed pairs like eine Entscheidung treffen or eine Frage stellen, where the noun carries the meaning and the verb is just the partner that must be used with it.',
  explanation: `
### What they are for

Some everyday ideas are said with a noun plus a fixed verb, and the verb is not the one English would choose:

- Wir müssen **eine Entscheidung treffen**. – *We have to make a decision.* (literally "meet" a decision)
- Darf ich **eine Frage stellen**? – *May I ask a question?* (literally "put" a question)

A **noun–verb combination** (*Nomen-Verb-Verbindung*) is such a fixed pair: a noun that carries the meaning plus a verb that has lost most of its own meaning. English has them too: *to make a decision*, *to take a photo*, *to have a look*.

The important point: the verb is **not free**. You cannot "make" a decision in German; you *treffen* it. You cannot "make" a question; you *stellen* it. Learners who choose the verb by translating from English make mistakes here, so these pairs must be learned as units.

### The most useful combinations at B1

| Combination | Simple verb | English |
|---|---|---|
| eine Entscheidung **treffen** | sich entscheiden | to make a decision |
| eine Frage **stellen** | fragen | to ask a question |
| Abschied **nehmen** (von) | sich verabschieden | to say goodbye |
| Platz **nehmen** | sich setzen | to take a seat |
| Rücksicht **nehmen** (auf) | – | to show consideration |
| Bescheid **sagen / geben** | informieren | to let someone know |
| eine Rolle **spielen** | wichtig sein | to play a role, to matter |
| sich Mühe **geben** | sich anstrengen | to make an effort |
| Sport **treiben / machen** | – | to do sport |
| einen Fehler **machen** | – | to make a mistake |
| ein Gespräch **führen** | sprechen | to have a conversation |
| Interesse **haben** (an) | sich interessieren | to be interested |
| zur Verfügung **stehen / stellen** | – | to be / make available |
| in Frage **kommen** | möglich sein | to be an option |
| zu Ende **gehen** | enden | to come to an end |

Notice the small group of verbs that come up again and again: **treffen, stellen, nehmen, geben, führen, kommen, gehen, haben, machen**. Learning which noun goes with which is the whole task.

### How they behave

- The noun is usually in the **Accusative** (*eine Entscheidung*, *Platz*) or sits inside a **prepositional phrase** (*zur Verfügung*, *in Frage*, *zu Ende*).
- The verb conjugates normally and takes its usual Perfekt form: *Ich **habe** eine Entscheidung **getroffen**.*
- Some combinations come with a fixed preposition for the extra object: *Rücksicht nehmen **auf** + Akk*, *Interesse haben **an** + Dat*.
- In a main clause the noun goes towards the **end**, like a separable prefix: *Er **nimmt** auf die Kinder **Rücksicht***.

### Why it matters

These combinations are the sound of **natural and written German**: letters, news, work emails and the B1 reading texts are full of them. Using them makes your own writing more precise and more natural. And since the verb is unpredictable, every pair you memorise is one mistake you will not make.
`,
  examples: [
    { de: 'Wir müssen bald eine Entscheidung treffen.', en: 'We have to make a decision soon.' },
    { de: 'Darf ich Ihnen eine Frage stellen?', en: 'May I ask you a question?' },
    { de: 'Bitte nehmen Sie Platz.', en: 'Please take a seat.' },
    { de: 'Sag mir bitte Bescheid, wenn du kommst.', en: 'Please let me know when you are coming.' },
    { de: 'Geld spielt bei dieser Entscheidung keine Rolle.', en: 'Money plays no role in this decision.' },
    { de: 'Die Ferien gehen leider bald zu Ende.', en: 'Unfortunately the holidays are coming to an end soon.' },
    { de: 'Ich stelle Ihnen mein Auto gern zur Verfügung.', en: 'I am happy to make my car available to you.' },
    { de: 'Sie hat sich große Mühe gegeben.', en: 'She made a great effort. (Perfekt: gegeben)' },
  ],
  connections: [
    { topicId: 'a1-20-accusative', note: 'The noun in most combinations is a direct object in the Accusative.' },
    { topicId: 'b1-27-verb-preposition-b1', note: 'Many combinations carry a fixed preposition: Rücksicht nehmen auf, Interesse haben an.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The noun part sits at the end of the midfield, like a separable prefix.' },
    { topicId: 'b1-31-register-formal-informal', note: 'Noun–verb combinations are typical of formal letters and official texts.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Many of the nouns here are -ung nouns built from verbs: Entscheidung, Verfügung.' },
  ],
  edgeCases: [
    'Do not translate the verb from English: *eine Entscheidung **treffen*** (not *machen*), *eine Frage **stellen*** (not *machen* or *fragen*).',
    '*Platz nehmen* (to sit down) is different from *Platz haben* (to have room). Both exist, but with different meanings.',
    '*Bescheid sagen* is informal, *Bescheid geben* is neutral; both mean "to let someone know".',
    'Watch the pair *zur Verfügung **stellen*** (someone makes something available) vs *zur Verfügung **stehen*** (something is available): *Ich stelle dir mein Auto zur Verfügung* / *Das Auto steht dir zur Verfügung*.',
    'The fixed preposition belongs to the combination, not to the verb: *Rücksicht nehmen **auf***, but *Abschied nehmen **von***.',
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
