import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-28b-time-subjunctions',
  level: 'A2',
  unit: 10,
  order: 32,
  title: 'Time clauses: bevor, nachdem, bis, seit(dem)',
  germanTerm: 'temporale Subjunktionen',
  tags: ['subordinate clauses', 'conjunctions', 'time clauses', 'word order', 'tenses', 'verb final'],
  summary: 'bevor (before), nachdem (after), bis (until) and seit(dem) (since) open a time clause with the verb at the end; after nachdem the tense goes one step back.',
  steps: [
    {
      title: 'Four time words, verb at the end',
      text: `
These four subjunctions (*Subjunktionen*: joining words that send the verb to the end) say **when** something happens. They work exactly like *weil* and *dass*: comma, subjunction, verb at the end. If the time clause comes first, the main clause starts with its verb.

| subjunction | meaning |
|---|---|
| **bevor** | before |
| **nachdem** | after |
| **bis** | until |
| **seit / seitdem** | since |
`,
      examples: [
        { de: 'Ich warte, bis du kommst.', en: 'I will wait until you come. (kommst at the end)' },
        { de: 'Bevor ich gehe, rufe ich dich an.', en: 'Before I leave, I will call you. (clause first, then rufe)' },
      ],
    },
    {
      title: 'bevor and bis',
      text: `
**bevor** says that the main clause happens **before** the other event. **bis** says that the main clause goes on **until** the other event starts.

Both normally use the present tense; there is no tense shift. A separable verb joins up again at the end of the clause: *bis du zurückkommst*.
`,
      examples: [
        { de: 'Ich dusche, bevor ich frühstücke.', en: 'I shower before I have breakfast.' },
        { de: 'Bevor ich schlafen gehe, lese ich ein bisschen.', en: 'Before I go to sleep, I read a little.' },
        { de: 'Wir warten hier, bis der Regen aufhört.', en: 'We will wait here until the rain stops. (separable: aufhört)' },
        { de: 'Ich bleibe hier, bis du zurückkommst.', en: 'I will stay here until you come back.' },
      ],
    },
    {
      title: 'seit and seitdem: since',
      text: `
**seit** and **seitdem** mean the same: *since the time when*. Something started then and is **still going on**. German uses the **present tense** for this, where English says *have been doing*.

Careful: *seit* is also a preposition (*seit zwei Jahren*). If a full clause with a verb follows, it is the subjunction.
`,
      examples: [
        { de: 'Seit ich in Berlin wohne, fahre ich Rad.', en: 'Since I have lived in Berlin, I cycle. (present: still true)' },
        { de: 'Seitdem ich hier arbeite, bin ich glücklicher.', en: 'Since I started working here, I am happier.' },
        { de: 'Seit ich hier wohne, lerne ich Deutsch.', en: 'I have been learning German since I moved here. (German: present)' },
      ],
    },
    {
      title: 'nachdem: one step back',
      text: `
**nachdem** means *after*. The *nachdem*-clause happened **first**, so it stands one step further back in time. With a main clause in the present, the *nachdem*-clause takes the **Perfekt**.

In a story about the past you will see *hatte / war* + Partizip II: *Nachdem ich gegessen hatte, ging ich spazieren.* That tense is taught at B1; for now just recognise it.
`,
      examples: [
        { de: 'Nachdem ich gegessen habe, gehe ich spazieren.', en: 'After I have eaten, I go for a walk. (Perfekt, then present)' },
        { de: 'Nachdem wir gefrühstückt haben, fahren wir los.', en: 'After we have had breakfast, we set off.' },
        { de: 'Er zieht sich an, nachdem er geduscht hat.', en: 'He gets dressed after he has showered. (hat at the end)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'obwohl and damit are the other two subjunctions of this unit; same word order, different meaning.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The verb-at-the-end rule is exactly the same as with weil and dass.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'als and wenn are the time clauses you already know; bevor, nachdem, bis and seit(dem) add four more.' },
    { topicId: 'b1-01-plusquamperfekt', note: 'At B1 you learn the tense for nachdem in past stories: Nachdem ich gegessen hatte, …' },
    { topicId: 'b1-02-temporal-clauses', note: 'B1 unit 1 teaches nachdem and bevor in full, with the tense rules.' },
    { topicId: 'b1-02b-waehrend-seit-bis', note: 'At B1 the time subjunctions are extended with während, sobald and solange.' },
  ],
  edgeCases: [
    'Do not confuse **bis** (until) and **bevor** (before). *Ich warte, bis du kommst* (until you come) vs *Ich gehe, bevor du kommst* (before you come).',
    'After **nachdem** the tense is one step back: *Nachdem ich gegessen habe, …*, not *esse*.',
    'With **seit / seitdem** German uses the **present tense** for something still going on: *Seit ich hier wohne, lerne ich Deutsch* (English: have been learning).',
    'Keep the verb at the end: *bis der Bus **kommt***, not *bis kommt der Bus*. A separable verb is written as one word there: *bis er **ankommt***.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a2-28b-time-subjunctions-ex01',
      prompt: 'Wir warten, ___ der Bus kommt. (until)',
      answer: ['bis'],
      explanation: 'bis = until: the waiting ends when the bus comes.',
    },
    {
      type: 'fill',
      id: 'a2-28b-time-subjunctions-ex02',
      prompt: 'Ich dusche, ___ ich frühstücke. (before)',
      answer: ['bevor'],
      explanation: 'bevor = before. The showering happens first, then breakfast. Both verbs stay in the present tense.',
    },
    {
      type: 'match',
      id: 'a2-28b-time-subjunctions-ex03',
      prompt: 'Match the subjunction with its meaning.',
      pairs: [
        ['bevor', 'before'],
        ['nachdem', 'after'],
        ['bis', 'until'],
        ['seitdem', 'since'],
      ],
      explanation: 'Four time words. All of them send the verb to the end of the clause.',
    },
    {
      type: 'mc',
      id: 'a2-28b-time-subjunctions-ex04',
      prompt: 'Complete: "___ ich in Deutschland wohne, spreche ich jeden Tag Deutsch."',
      options: ['Seitdem', 'Bis', 'Nachdem'],
      answer: 0,
      explanation: 'The speaking started when the living in Germany started and is still going on: seitdem (since). Note the present tense.',
    },
    {
      type: 'mc',
      id: 'a2-28b-time-subjunctions-ex05',
      prompt: 'Which sentence has the correct word order?',
      options: ['Seit ich wohne in Berlin, fahre ich Rad.', 'Seit ich in Berlin wohne, ich fahre Rad.', 'Seit ich in Berlin wohne, fahre ich Rad.'],
      answer: 2,
      explanation: 'In the seit-clause the verb goes to the end (in Berlin wohne). The main clause after it starts with its verb (fahre ich).',
    },
    {
      type: 'order',
      id: 'a2-28b-time-subjunctions-ex06',
      prompt: 'Build the sentence: "Before I go to sleep, I read a little."',
      words: ['lese', 'Bevor', 'ich', 'bisschen.', 'gehe,', 'ein', 'schlafen', 'ich'],
      answer: ['Bevor ich schlafen gehe, lese ich ein bisschen.'],
      explanation: 'Subordinate clause first with gehe at its end, comma, then the main clause begins with the verb lese.',
    },
    {
      type: 'fill',
      id: 'a2-28b-time-subjunctions-ex07',
      prompt: 'Nachdem ich gefrühstückt ___, gehe ich zur Arbeit. (haben)',
      answer: ['habe'],
      explanation: 'The main clause is in the present, so the nachdem-clause uses the Perfekt: gefrühstückt habe.',
    },
    {
      type: 'mc',
      id: 'a2-28b-time-subjunctions-ex08',
      prompt: 'Complete: "Seitdem er in Hamburg ___, hat er viele Freunde."',
      options: ['wohnt', 'gewohnt hat', 'wohnte'],
      answer: 0,
      explanation: 'He still lives in Hamburg, so the seitdem-clause takes the present tense: wohnt. English would say "has lived".',
    },
    {
      type: 'mc',
      id: 'a2-28b-time-subjunctions-ex09',
      prompt: 'Complete: "Ich warte hier, ___ du mit der Arbeit fertig bist."',
      options: ['bis', 'bevor', 'nachdem'],
      answer: 0,
      explanation: 'The waiting goes on until you are finished: bis = until. bevor (before) would not make sense, and nachdem would need the Perfekt.',
    },
    {
      type: 'order',
      id: 'a2-28b-time-subjunctions-ex10',
      prompt: 'Build the sentence: "After we have eaten, we go for a walk."',
      words: ['machen', 'gegessen', 'Nachdem', 'einen', 'wir', 'haben,', 'Spaziergang.', 'wir'],
      answer: ['Nachdem wir gegessen haben, machen wir einen Spaziergang.'],
      explanation: 'nachdem-clause in the Perfekt with haben at its end, comma, then the main clause starts with machen.',
    },
    {
      type: 'translate',
      id: 'a2-28b-time-subjunctions-ex11',
      prompt: 'Translate: "I will wait until the rain stops."',
      answer: ['Ich warte, bis der Regen aufhört.'],
      hint: 'warten = to wait, aufhören = to stop',
      explanation: 'bis = until. The separable verb aufhören joins up as one word at the end of the clause: aufhört. German uses the present for this future idea.',
    },
  ],
};

export default topic;
