import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-34-coordinating-conjunctions',
  level: 'A1',
  unit: 8,
  order: 34,
  title: 'Coordinating conjunctions: und, aber, oder, denn, sondern',
  germanTerm: 'Konjunktionen (Position 0)',
  tags: ['conjunctions', 'word order', 'sentences'],
  summary: 'und, aber, oder, denn and sondern join two sentences without changing the word order of either one; they sit in "position 0".',
  explanation: `
### What it is

A **conjunction** (*Konjunktion*) joins two parts of a sentence. The five in this topic are the easiest in German because they **do not change the word order**. The second sentence keeps its verb in position 2, as if the conjunction were not there. That is why they are said to be in **position 0**:

| first sentence | position 0 | position 1 | position 2 | rest |
|---|---|---|---|---|
| Ich bleibe zu Hause, | **denn** | ich | bin | müde. |
| Er trinkt Kaffee, | **aber** | sie | trinkt | Tee. |
| Wir gehen ins Kino | **oder** | wir | bleiben | hier. |

### The five conjunctions

| conjunction | meaning | use |
|---|---|---|
| **und** | and | adds something |
| **aber** | but | contrast |
| **oder** | or | choice |
| **denn** | because, for | gives a reason |
| **sondern** | but rather, but instead | corrects a negative statement |

- Ich lerne Deutsch **und** ich arbeite in Berlin.
- Das Hotel ist schön, **aber** es ist teuer.
- Möchtest du Tee **oder** Kaffee?
- Ich gehe nicht aus, **denn** ich habe keine Zeit.
- Ich komme nicht aus Spanien, **sondern** aus Portugal.

### aber vs sondern

Both translate as *but*, so this pair needs care. Use **sondern** only when the first part is **negative** (*nicht*, *kein*) and the second part **replaces** it with the correct information:

- Das ist **nicht** mein Auto, **sondern** das Auto von Lena. (not X but Y)
- Ich trinke **keinen** Kaffee, **sondern** Tee.

Use **aber** for a normal contrast, even after a negative, when the second part does not replace the first:

- Ich trinke keinen Kaffee, **aber** ich mag den Geruch. (contrast, no replacement)
- Das Auto ist alt, **aber** es fährt gut.

Test: can you say *not … but rather …* in English? Then it is *sondern*.

### Comma and shortening

- A **comma** always goes before **aber**, **denn** and **sondern**.
- Before **und** and **oder** there is usually **no comma**.
- If both halves have the **same subject**, you can leave it out after *und*, *oder*, *aber* and *sondern*: *Ich koche **und** esse zu Hause.* Not after *denn*: *denn* always needs a full sentence with its own subject.

### denn vs weil

*Denn* and *weil* both mean *because*. The difference is word order: after **denn** the verb stays in position 2; after **weil** the verb goes to the end (*weil ich müde **bin***). *Weil* is an A2 topic. At A1, use *denn* and keep the normal order.

### Why it matters

These five words let you build longer, more natural sentences from the simple ones you already know, with no new grammar. They are everywhere in speaking and writing: *Ich heiße Ana und ich komme aus Brasilien. Ich lerne Deutsch, denn ich wohne jetzt in Hamburg.* Learning that they sit in position 0 also prepares you for the big contrast at A2, where *weil*, *dass* and *wenn* push the verb to the end.
`,
  examples: [
    { de: 'Ich komme aus Italien und ich wohne in Berlin.', en: 'I come from Italy and I live in Berlin. (und, verb still second)' },
    { de: 'Das Essen ist gut, aber das Restaurant ist teuer.', en: 'The food is good, but the restaurant is expensive. (aber = contrast)' },
    { de: 'Fahren wir mit dem Bus oder gehen wir zu Fuß?', en: 'Shall we take the bus or walk? (oder = choice)' },
    { de: 'Ich bleibe heute zu Hause, denn ich bin krank.', en: 'I am staying at home today, because I am ill. (denn + normal order)' },
    { de: 'Er ist nicht Lehrer, sondern Arzt.', en: 'He is not a teacher but a doctor. (sondern after a negative)' },
    { de: 'Ich gehe einkaufen und koche dann.', en: 'I go shopping and then cook. (same subject left out after und)' },
    { de: 'Sie spricht kein Deutsch, aber sie versteht viel.', en: 'She speaks no German, but she understands a lot. (negative + aber: contrast, not replacement)' },
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
