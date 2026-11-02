import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-34-coordinating-conjunctions',
  level: 'A1',
  unit: 8,
  order: 38,
  title: 'Coordinating conjunctions: und, aber, oder, denn, sondern',
  germanTerm: 'Konjunktionen (Position 0)',
  tags: ['conjunctions', 'word order', 'sentences'],
  summary: 'und, aber, oder, denn and sondern join two sentences without changing the word order of either one; they sit in "position 0".',
  steps: [
    {
      title: 'Joining sentences in position 0',
      text: `
A **conjunction** (*Konjunktion*) joins two sentences. The five in this topic are the easiest in German because they **do not change the word order**. The second sentence keeps its verb in position 2, as if the conjunction were not there. That is why they are said to sit in **position 0**.
`,
      examples: [
        { de: 'Ich bleibe zu Hause, denn ich bin müde.', en: 'I am staying at home, because I am tired. (denn, then ich bin: verb second)' },
        { de: 'Er trinkt Kaffee, aber sie trinkt Tee.', en: 'He drinks coffee, but she drinks tea.' },
        { de: 'Wir gehen ins Kino oder wir bleiben hier.', en: 'We go to the cinema or we stay here.' },
      ],
    },
    {
      title: 'The five words and their jobs',
      text: `
Learn the five with what they do.

| conjunction | meaning |
|---|---|
| **und** | and: adds something |
| **aber** | but: contrast |
| **oder** | or: choice |
| **denn** | because: gives a reason |
| **sondern** | but rather: corrects a negative |
`,
      examples: [
        { de: 'Ich lerne Deutsch und ich arbeite in Berlin.', en: 'I learn German and I work in Berlin. (und)' },
        { de: 'Das Hotel ist schön, aber es ist teuer.', en: 'The hotel is nice, but it is expensive. (aber)' },
        { de: 'Möchtest du Tee oder Kaffee?', en: 'Would you like tea or coffee? (oder)' },
        { de: 'Ich gehe nicht aus, denn ich habe keine Zeit.', en: 'I am not going out, because I have no time. (denn)' },
      ],
    },
    {
      title: 'aber or sondern?',
      text: `
Both mean *but*. Use **sondern** only when the first part is **negative** (*nicht*, *kein*) and the second part **replaces** it with the correct information: *not X but Y*.

Use **aber** for a normal contrast, even after a negative, when the second part does not replace the first. Test: can you say *not … but rather …* in English? Then it is *sondern*.
`,
      examples: [
        { de: 'Ich komme nicht aus Spanien, sondern aus Portugal.', en: 'I am not from Spain but from Portugal. (nicht … sondern)' },
        { de: 'Ich trinke keinen Kaffee, sondern Tee.', en: 'I do not drink coffee but tea. (kein … sondern)' },
        { de: 'Ich trinke keinen Kaffee, aber ich mag den Geruch.', en: 'I do not drink coffee, but I like the smell. (contrast, no replacement: aber)' },
        { de: 'Das Auto ist alt, aber es fährt gut.', en: 'The car is old, but it runs well. (aber)' },
      ],
    },
    {
      title: 'Comma and dropping the subject',
      text: `
A **comma** always goes before **aber**, **denn** and **sondern**. Before **und** and **oder** there is usually no comma.

If both halves have the same subject, you can leave it out after *und, oder, aber* and *sondern*. Not after **denn**: *denn* always needs a full sentence with its own subject.
`,
      examples: [
        { de: 'Ich koche und esse zu Hause.', en: 'I cook and eat at home. (same subject, left out after und)' },
        { de: 'Ich gehe einkaufen und koche dann.', en: 'I go shopping and then cook.' },
        { de: 'Ich bleibe hier, denn ich bin müde.', en: 'I am staying here, because I am tired. (denn keeps its subject)' },
      ],
    },
    {
      title: 'denn, not weil, at A1',
      text: `
*denn* and *weil* both mean *because*. The difference is word order: after **denn** the verb stays in position 2; after *weil* the verb goes to the end. *weil* is an A2 topic. At A1, use **denn** and keep the normal order.
`,
      examples: [
        { de: 'Ich lerne Deutsch, denn ich wohne in Hamburg.', en: 'I learn German, because I live in Hamburg. (denn ich wohne)' },
        { de: 'Sie kommt nicht, denn sie ist krank.', en: 'She is not coming, because she is ill. (denn sie ist)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-06-verb-second', note: 'After these conjunctions the verb stays in position 2; the rule is not broken.' },
    { topicId: 'a1-13-negation', note: 'sondern can only follow a negative with nicht or kein.' },
    { topicId: 'a1-36-writing-short-messages', note: 'und, aber and denn make short emails and notes flow naturally.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'At A2, weil and dass send the verb to the end: the opposite of position 0.' },
  ],
  edgeCases: [
    'Position 0 means **no change**: *Ich bin müde, denn ich **habe** viel gearbeitet*, not *denn ich viel gearbeitet habe* (that is the weil order).',
    '**sondern** needs a negative before it: *nicht … sondern*, *kein … sondern*. Without a negative, use *aber*.',
    'A negative followed by a simple contrast still takes **aber**: *Ich habe kein Auto, **aber** ich habe ein Fahrrad.*',
    'Comma before **aber, denn, sondern**; usually no comma before **und, oder**.',
    '**denn** cannot start a conversation on its own and cannot drop the subject: *Ich bleibe, denn **ich** bin müde.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-34-coordinating-conjunctions-ex01',
      prompt: 'What happens to the word order after und, aber, oder, denn and sondern?',
      options: ['The verb goes to the end.', 'The verb comes first.', 'Nothing changes; the verb stays in position 2.'],
      answer: 2,
      explanation: 'These conjunctions sit in position 0. The sentence after them keeps its normal order.',
    },
    {
      type: 'fill',
      id: 'a1-34-coordinating-conjunctions-ex02',
      prompt: 'Ich lerne Deutsch, ___ ich wohne in Deutschland. (because)',
      answer: ['denn'],
      explanation: 'denn gives a reason and keeps the verb in position 2: denn ich wohne.',
    },
    {
      type: 'fill',
      id: 'a1-34-coordinating-conjunctions-ex03',
      prompt: 'Das Hotel ist schön, ___ es ist teuer. (but)',
      answer: ['aber'],
      explanation: 'A normal contrast uses aber. There is no negative in the first part, so sondern is impossible.',
    },
    {
      type: 'mc',
      id: 'a1-34-coordinating-conjunctions-ex04',
      prompt: 'Complete: "Ich komme nicht aus Spanien, ___ aus Mexiko."',
      options: ['aber', 'sondern', 'denn'],
      answer: 1,
      explanation: 'The first part is negative (nicht) and the second part replaces it with the correct information: sondern.',
    },
    {
      type: 'mc',
      id: 'a1-34-coordinating-conjunctions-ex05',
      prompt: 'Complete: "Ich habe kein Auto, ___ ich habe ein Fahrrad."',
      options: ['sondern', 'aber', 'oder'],
      answer: 1,
      explanation: 'The second part does not correct the first; it adds a contrast. Even after kein, that is aber.',
    },
    {
      type: 'match',
      id: 'a1-34-coordinating-conjunctions-ex06',
      prompt: 'Match each conjunction with its meaning.',
      pairs: [
        ['und', 'and'],
        ['aber', 'but (contrast)'],
        ['oder', 'or'],
        ['denn', 'because'],
        ['sondern', 'but rather (after a negative)'],
      ],
      explanation: 'All five sit in position 0 and leave the word order unchanged.',
    },
    {
      type: 'order',
      id: 'a1-34-coordinating-conjunctions-ex07',
      prompt: 'Build the sentence: "I am staying at home, because I am tired."',
      words: ['Hause,', 'Ich', 'bin', 'müde.', 'ich', 'bleibe', 'zu', 'denn'],
      answer: ['Ich bleibe zu Hause, denn ich bin müde.'],
      explanation: 'Comma before denn; after it the subject ich comes first and the verb bin stays second.',
    },
    {
      type: 'mc',
      id: 'a1-34-coordinating-conjunctions-ex08',
      prompt: 'Which sentence is correct?',
      options: ['Er kommt nicht, denn er krank ist.', 'Er kommt nicht, denn er ist krank.', 'Er kommt nicht, denn ist er krank.'],
      answer: 1,
      explanation: 'After denn the normal order stays: subject (er), verb (ist), rest. The verb does not move to the end or to the front.',
    },
    {
      type: 'fill',
      id: 'a1-34-coordinating-conjunctions-ex09',
      prompt: 'Möchtest du Tee ___ Kaffee? (or)',
      answer: ['oder'],
      explanation: 'oder offers a choice. No comma is needed before oder.',
    },
    {
      type: 'mc',
      id: 'a1-34-coordinating-conjunctions-ex10',
      prompt: 'Where does a comma go?',
      options: ['Ich koche, und er spült.', 'Ich koche und er spült.', 'Both are accepted.'],
      answer: 2,
      explanation: 'Before und the comma is optional in current German spelling. Before aber, denn and sondern it is required.',
    },
    {
      type: 'translate',
      id: 'a1-34-coordinating-conjunctions-ex11',
      prompt: 'Translate: "He is not a teacher but a doctor."',
      answer: ['Er ist nicht Lehrer, sondern Arzt.', 'Er ist kein Lehrer, sondern Arzt.', 'Er ist kein Lehrer, sondern ein Arzt.'],
      hint: 'der Lehrer = teacher, der Arzt = doctor',
      explanation: 'A negative followed by the correction uses sondern. Professions after sein usually have no article.',
    },
  ],
};

export default topic;
