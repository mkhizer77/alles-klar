import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-11-als-ob',
  level: 'B1',
  unit: 4,
  order: 15,
  title: 'als ob: irreal comparisons',
  germanTerm: 'als ob',
  tags: ['Konjunktiv II', 'als ob', 'comparison', 'subordinate clauses'],
  summary: 'als ob + Konjunktiv II makes an unreal comparison: "he acts as if he knew everything". The verb goes to the end after als ob; after als alone it comes right after als.',
  steps: [
    {
      title: 'What als ob is for',
      text: `
Sometimes you compare a situation with something that is **not true**: *He acts **as if** he knew everything* (he does not). German does this with **als ob** (as if). Because the comparison is unreal, the verb is in **Konjunktiv II** (the "would" form): *wäre, hätte, wüsste, könnte* or *würde + Infinitiv*.
`,
      examples: [
        { de: 'Er tut so, als ob er alles wüsste.', en: 'He acts as if he knew everything. (he does not)' },
        { de: 'Sie sieht aus, als ob sie krank wäre.', en: 'She looks as if she were ill.' },
        { de: 'Er redet, als ob er mich nicht kennen würde.', en: 'He talks as if he did not know me. (würde + Infinitiv)' },
      ],
    },
    {
      title: 'Verb at the end after als ob',
      text: `
**als ob** is a subordinating conjunction (a joining word that sends the verb to the end). So the Konjunktiv II verb stands at the **end** of the clause, after a comma. With *würde* the infinitive comes first and **würde** last.
`,
      examples: [
        { de: 'Er tut, als ob er müde wäre.', en: 'He acts as if he were tired. (wäre at the end)' },
        { de: 'Sie tut so, als ob sie mich nicht kennen würde.', en: 'She acts as if she did not know me. (kennen würde at the end)' },
        { de: 'Es scheint, als ob es gleich regnen würde.', en: 'It seems as if it is going to rain soon.' },
      ],
    },
    {
      title: 'An "as if" situation in the past',
      text: `
If the imagined situation lies in the **past**, use the past Konjunktiv II from the last topic: **hätte / wäre + Partizip II**. The helper still goes to the very end.
`,
      examples: [
        { de: 'Er redet, als ob er alles schon gesehen hätte.', en: 'He talks as if he had already seen everything. (gesehen hätte)' },
        { de: 'Sie tut so, als ob sie nie dort gewesen wäre.', en: 'She acts as if she had never been there. (gewesen wäre)' },
      ],
    },
    {
      title: 'als without ob: verb right after als',
      text: `
You will often read **als** without *ob*. It means exactly the same, but the word order changes: the verb comes **directly after als**, and the subject follows it.

Recognise this form when you read it. In your own sentences use **als ob** with the verb at the end, because that follows the normal rule for subordinate clauses.
`,
      examples: [
        { de: 'Er tut, als wäre er müde.', en: 'He acts as if he were tired. (= als ob er müde wäre)' },
        { de: 'Sie spricht, als wäre sie die Chefin.', en: 'She talks as if she were the boss.' },
        { de: 'Es sieht aus, als hätte es geregnet.', en: 'It looks as if it had rained.' },
      ],
    },
    {
      title: 'Typical openers',
      text: `
A few main clauses almost always come before *als ob*. Learn them as fixed openers:

| German | English |
|---|---|
| Er tut (so), als ob … | He acts as if … |
| Es sieht (so) aus, als ob … | It looks as if … |
| Es scheint, als ob … | It seems as if … |

Watch out: **als** also means "when" for a single past event (*Als ich klein war …*). With Konjunktiv II it means "as if".
`,
      examples: [
        { de: 'Es sieht so aus, als ob es gleich regnen würde.', en: 'It looks as if it is going to rain soon.' },
        { de: 'Es scheint, als ob er recht hätte.', en: 'It seems as if he were right.' },
        { de: 'Als ich klein war, hatte ich einen Hund.', en: 'When I was small, I had a dog. (als = when, not as if)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'The Konjunktiv II forms (wäre, hätte, wüsste, würde) used after als ob.' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'For an "as if" situation in the past you need hätte / wäre + Partizip II.' },
    { topicId: 'b1-09b-irreal-wishes-advice', note: 'Wishes and soft suggestions use the same Konjunktiv II.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'als also means "when" (one-time past). After a comma with Konjunktiv II it means "as if".' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'als ob sends the verb to the end, like weil and dass.' },
  ],
  edgeCases: [
    '**als ob** is a subordinating conjunction: the verb goes to the **end**: *als ob er krank **wäre***. If you read *als **wäre** er krank* (no *ob*), it means the same.',
    'After *als ob* use **Konjunktiv II**, not the normal present form: *als ob er krank **wäre***, not *als ob er krank ist* (heard in speech, but not standard).',
    '*als* has two meanings: ***Als** ich klein war* (when, Präteritum) and *…, **als ob** er müde wäre* (as if, Konjunktiv II).',
    'For a past comparison the helper is last: *als ob er es **gesehen hätte***, not *als ob er es hätte gesehen*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex01',
      prompt: 'Complete: "Er tut so, als ob er alles ___."',
      options: ['wüsste', 'weiß', 'wissen'],
      answer: 0,
      explanation: 'An unreal comparison needs Konjunktiv II: wissen → wüsste, at the end of the als ob clause.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex02',
      prompt: 'Sie sieht aus, als ob sie krank ___. (sein)',
      answer: ['wäre'],
      explanation: 'An unreal comparison needs Konjunktiv II, and als ob sends the verb to the end. sein → wäre.',
    },
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex03',
      prompt: 'Which word order is correct after als ob?',
      options: ['Er tut, als ob er müde wäre.', 'Er tut, als ob wäre er müde.', 'Er tut, als ob er wäre müde.'],
      answer: 0,
      explanation: 'als ob is a subordinating conjunction, so the verb (wäre) goes to the very end of the clause.',
    },
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex04',
      prompt: 'What does "Es sieht so aus, als ob es gleich regnen würde." mean?',
      options: ['It looks as if it is going to rain soon.', 'It rained a moment ago.', 'It would be nice if it rained.'],
      answer: 0,
      explanation: 'Es sieht so aus, als ob … = it looks as if …; gleich = soon.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex05',
      prompt: 'Es scheint, als ob es gleich regnen ___. (werden, Konjunktiv II)',
      answer: ['würde'],
      explanation: 'regnen is a normal verb, so würde + Infinitiv. In the als ob clause the infinitive regnen comes first and würde goes to the very end.',
    },
    {
      type: 'order',
      id: 'b1-11-als-ob-ex06',
      prompt: 'Build the sentence: "She acts as if she did not know me."',
      words: ['mich', 'Sie', 'als', 'nicht', 'tut', 'ob', 'würde.', 'so,', 'kennen', 'sie'],
      answer: ['Sie tut so, als ob sie mich nicht kennen würde.'],
      explanation: 'als ob clause with würde at the very end: kennen würde. so after tut is optional but common.',
    },
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex07',
      prompt: 'Which sentence means the same as "Er tut, als ob er müde wäre."?',
      options: ['Er tut, als wäre er müde.', 'Er tut, als er müde wäre.', 'Er tut, als müde er wäre.'],
      answer: 0,
      explanation: 'Without ob the verb comes directly after als: als wäre er müde. The meaning does not change.',
    },
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex08',
      prompt: 'In which sentence does als mean "as if"?',
      options: ['Er spricht, als wäre er der Chef.', 'Als ich klein war, hatte ich einen Hund.', 'Sie ist älter als ich.'],
      answer: 0,
      explanation: 'als + Konjunktiv II after a comma = as if. Als ich klein war = when (one-time past); älter als = than.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex09',
      prompt: 'Er redet, als ob er alles schon ___ hätte. (sehen)',
      answer: ['gesehen'],
      explanation: 'The "as if" situation is in the past, so past Konjunktiv II: gesehen hätte.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex10',
      prompt: 'Er tut so, als ob er den Film schon gesehen ___. (haben)',
      answer: ['hätte'],
      explanation: 'The "as if" situation is in the past, so past Konjunktiv II: gesehen hätte, with hätte at the end of the als ob clause.',
    },
    {
      type: 'translate',
      id: 'b1-11-als-ob-ex11',
      prompt: 'Translate: "She looks as if she were tired."',
      answer: ['Sie sieht aus, als ob sie müde wäre.', 'Sie sieht so aus, als ob sie müde wäre.', 'Sie sieht aus, als wäre sie müde.', 'Sie sieht so aus, als wäre sie müde.'],
      hint: 'aussehen = to look (appearance), müde = tired',
      explanation: 'Opener Sie sieht (so) aus, then als ob with wäre at the end. als wäre sie müde (verb right after als) is also correct.',
    },
  ],
};

export default topic;
