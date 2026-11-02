import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-02b-waehrend-seit-bis',
  level: 'B1',
  unit: 1,
  order: 3,
  title: 'während, seit(dem), bis, sobald, solange',
  germanTerm: 'Temporalsätze (2)',
  tags: ['conjunctions', 'subordinate clauses', 'time', 'word order'],
  summary: 'Five more time conjunctions: während (while), seit(dem) (since), bis (until), sobald (as soon as), solange (as long as). All send the verb to the end; seit(dem) takes the present.',
  steps: [
    {
      title: 'Five more ways to say when',
      text: `
These five conjunctions (joining words) also answer **when?** Each starts a subordinate clause (a clause that cannot stand alone), so the verb goes to the **end**.

| conjunction | meaning |
|---|---|
| **während** | while, at the same time |
| **seit / seitdem** | since (a time) |
| **bis** | until |
| **sobald** | as soon as |
| **solange** | as long as |
`,
      examples: [
        { de: 'Während ich koche, hört er Musik.', en: 'While I cook, he listens to music.' },
        { de: 'Ich warte hier, bis du zurückkommst.', en: 'I will wait here until you come back.' },
        { de: 'Du kannst hier bleiben, solange du willst.', en: 'You can stay here as long as you want.' },
      ],
    },
    {
      title: 'Verb last, main clause either side',
      text: `
In the time clause the **verb goes last**: *… sobald ich die Nachricht **bekomme***. A separable verb comes back together there: *… bis der Regen **aufhört***.

If the time clause comes **first**, the main clause starts with its **verb**, because the whole clause counts as position one. The main clause can also come first. The comma always separates the two.
`,
      examples: [
        { de: 'Sobald ich die Nachricht bekomme, rufe ich dich an.', en: 'As soon as I get the message, I will call you. (main clause starts with rufe)' },
        { de: 'Ich rufe dich an, sobald ich die Nachricht bekomme.', en: 'I will call you as soon as I get the message. (other order)' },
        { de: 'Sobald der Regen aufhört, gehen wir raus.', en: 'As soon as the rain stops, we go out. (aufhört together at the end)' },
      ],
    },
    {
      title: 'Same tense, except seit(dem) + present',
      text: `
These conjunctions take the **same tense** in both clauses: *Solange es **regnet**, **bleiben** wir drinnen.*

**seit / seitdem** describes something that started in the past and **still continues**. English says "has been living"; German uses the **present**: *Seit er in Deutschland **wohnt**, …*. Not *gewohnt hat*.
`,
      examples: [
        { de: 'Seit er in Deutschland wohnt, spricht er besser Deutsch.', en: 'Since he has been living in Germany, he speaks better German. (present: wohnt)' },
        { de: 'Seitdem ich hier arbeite, habe ich viele Freunde.', en: 'Since I started working here, I have many friends.' },
        { de: 'Solange es regnet, bleiben wir drinnen.', en: 'As long as it rains, we stay inside. (present + present)' },
      ],
    },
    {
      title: 'sobald vs solange, and bis',
      text: `
Do not confuse **sobald** (as soon as: a **point** in time) with **solange** (as long as: a **duration**). *Sobald du fertig bist* = the moment you are done. *Solange du arbeitest* = the whole time you are working.

**bis** names an end point and is used alone: *bis du kommst*, never *bis dass du kommst*.
`,
      examples: [
        { de: 'Sobald du fertig bist, fahren wir los.', en: 'As soon as you are done, we leave. (one moment)' },
        { de: 'Solange du arbeitest, bleibe ich leise.', en: 'As long as you are working, I stay quiet. (a duration)' },
        { de: 'Warte, bis ich komme.', en: 'Wait until I come. (bis, no dass)' },
      ],
    },
    {
      title: 'während: conjunction or preposition?',
      text: `
**während** has two jobs. As a **conjunction** it starts a clause with a verb at the end: *während wir **essen***. As a **preposition** it is followed by a **noun** in the Genitive (the "of" case): *während **des** Essens*.

Check what follows: a verb at the end means conjunction, a noun with an article means preposition.
`,
      examples: [
        { de: 'Während wir essen, spricht niemand.', en: 'While we eat, nobody talks. (conjunction: verb at the end)' },
        { de: 'Während des Essens spricht niemand.', en: 'During the meal nobody talks. (preposition + Genitive noun)' },
        { de: 'Während des Konzerts darf man nicht fotografieren.', en: 'During the concert you may not take photos. (preposition)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-02-temporal-clauses', note: 'The sister topic: nachdem and bevor, including the tenses after nachdem.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The same rule: the verb goes to the end of the subordinate clause.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'bis and seit(dem) were introduced there; here they are used in full.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'als and wenn are temporal conjunctions too; this topic adds the rest of the set.' },
    { topicId: 'a2-14-genitive', note: 'The preposition während takes the Genitive: während des Essens.' },
  ],
  edgeCases: [
    '**seit / seitdem** + present tense, not Perfekt: *Seit ich hier wohne* (not *gewohnt habe*), because the situation continues.',
    '**während** is also a Genitive preposition (*während des Essens*). As a conjunction it is followed by a clause with a verb at the end.',
    '**bis** as a conjunction has no *dass*: *bis du kommst*, not *bis dass du kommst*.',
    'Do not confuse **solange** (as long as, duration) with **sobald** (as soon as, a point in time).',
    'A separable verb comes together at the end of the clause: *sobald der Regen **aufhört***, not *sobald der Regen hört auf*.',
  ],
  exercises: [
    {
      type: 'match',
      id: 'b1-02b-waehrend-seit-bis-ex01',
      prompt: 'Match each conjunction with its meaning.',
      pairs: [
        ['während', 'while'],
        ['seitdem', 'since'],
        ['bis', 'until'],
        ['sobald', 'as soon as'],
        ['solange', 'as long as'],
      ],
      explanation: 'All five are subordinating conjunctions: the verb goes to the end of their clause.',
    },
    {
      type: 'mc',
      id: 'b1-02b-waehrend-seit-bis-ex02',
      prompt: 'Complete: "Ich warte hier, ___ du zurückkommst."',
      options: ['bis', 'seit', 'nachdem'],
      answer: 0,
      explanation: 'bis = until: the waiting ends when you come back.',
    },
    {
      type: 'fill',
      id: 'b1-02b-waehrend-seit-bis-ex03',
      prompt: '___ ich die Nachricht bekomme, rufe ich dich an. (as soon as)',
      answer: ['Sobald'],
      explanation: 'sobald = as soon as: the call happens immediately after the message arrives.',
    },
    {
      type: 'fill',
      id: 'b1-02b-waehrend-seit-bis-ex04',
      prompt: '___ er in Deutschland wohnt, spricht er viel besser Deutsch. (since)',
      answer: ['Seit', 'Seitdem'],
      explanation: 'seit or seitdem introduces something that started in the past and is still true. Note the present tense wohnt.',
    },
    {
      type: 'mc',
      id: 'b1-02b-waehrend-seit-bis-ex05',
      prompt: 'Complete: "Du kannst hier bleiben, ___ du willst."',
      options: ['solange', 'bis', 'nachdem'],
      answer: 0,
      explanation: 'solange = as long as: the staying lasts exactly as long as the wanting. bis would need an end point (bis du gehen musst).',
    },
    {
      type: 'order',
      id: 'b1-02b-waehrend-seit-bis-ex06',
      prompt: 'Build the sentence: "While I cook, he listens to music."',
      words: ['hört', 'koche,', 'Während', 'Musik.', 'er', 'ich'],
      answer: ['Während ich koche, hört er Musik.'],
      explanation: 'Verb at the end of the während clause (koche), then the main clause starts with its verb (hört) because the subordinate clause fills position one.',
    },
    {
      type: 'mc',
      id: 'b1-02b-waehrend-seit-bis-ex07',
      prompt: 'Complete: "Seit ich hier ___, habe ich viele Freunde."',
      options: ['wohne', 'gewohnt habe', 'wohnte'],
      answer: 0,
      explanation: 'After seit the situation still continues, so German uses the present tense: wohne. English "have been living" is a trap here.',
    },
    {
      type: 'mc',
      id: 'b1-02b-waehrend-seit-bis-ex08',
      prompt: 'Which sentence has the correct word order?',
      options: ['Sobald der Regen aufhört, gehen wir raus.', 'Sobald der Regen hört auf, gehen wir raus.', 'Sobald hört der Regen auf, wir gehen raus.'],
      answer: 0,
      explanation: 'In the subordinate clause the separable verb comes together at the end (aufhört). The main clause then starts with gehen.',
    },
    {
      type: 'order',
      id: 'b1-02b-waehrend-seit-bis-ex09',
      prompt: 'Build the sentence: "Until the bus comes, we read the newspaper."',
      words: ['Zeitung.', 'Bus', 'lesen', 'Bis', 'die', 'kommt,', 'wir', 'der'],
      answer: ['Bis der Bus kommt, lesen wir die Zeitung.'],
      explanation: 'bis clause first with kommt at its end, then the main clause begins with the verb lesen.',
    },
    {
      type: 'mc',
      id: 'b1-02b-waehrend-seit-bis-ex10',
      prompt: 'Which sentence is correct?',
      options: ['Ich bleibe, bis du kommst.', 'Ich bleibe, bis dass du kommst.', 'Ich bleibe, bis kommst du.'],
      answer: 0,
      explanation: 'bis is a conjunction on its own: no dass after it, and the verb kommst goes to the end.',
    },
    {
      type: 'mc',
      id: 'b1-02b-waehrend-seit-bis-ex11',
      prompt: 'In which sentence is während a conjunction (followed by a clause)?',
      options: ['Während er isst, telefoniert er.', 'Während des Essens telefoniert er.', 'Während der Pause telefoniert er.'],
      answer: 0,
      explanation: 'Only the first has a verb at the end of the während part (isst). In the others während is a preposition followed by a Genitive noun.',
    },
    {
      type: 'translate',
      id: 'b1-02b-waehrend-seit-bis-ex12',
      prompt: 'Translate: "As soon as I am at home, I will call you."',
      answer: ['Sobald ich zu Hause bin, rufe ich dich an.', 'Sobald ich zuhause bin, rufe ich dich an.', 'Ich rufe dich an, sobald ich zu Hause bin.', 'Ich rufe dich an, sobald ich zuhause bin.'],
      hint: 'zu Hause sein = to be at home, anrufen = to call',
      explanation: 'sobald sends bin to the end of its clause. The main clause uses the present for the future, and the prefix an goes to the end: rufe ich dich an.',
    },
  ],
};

export default topic;
