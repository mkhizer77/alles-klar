import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-04-subordinate-clauses-weil-dass',
  level: 'A2',
  unit: 2,
  order: 4,
  title: 'Subordinate clauses: the verb goes to the end (weil, dass)',
  germanTerm: 'Nebensatz',
  tags: ['word order', 'subordinate clauses', 'conjunctions', 'weil', 'dass'],
  summary: 'After weil (because) and dass (that) the conjugated verb moves to the very end of the clause, and the clause is separated by a comma.',
  explanation: `
### What it is

A **subordinate clause** (*Nebensatz*) is a part of a sentence that cannot stand alone. It hangs on a main clause and is introduced by a small joining word, a **subordinating conjunction** (*Subjunktion*; a joining word that sends the verb to the end). The two most important ones are:

- **weil** = because
- **dass** = that

The big rule: in a Nebensatz, the **conjugated verb goes to the very end**.

- Ich bleibe zu Hause. + Ich bin krank. → Ich bleibe zu Hause, **weil** ich krank **bin**.
- Ich glaube. + Er kommt morgen. → Ich glaube, **dass** er morgen **kommt**.

A **comma** always separates the main clause from the Nebensatz.

### How it works: the verb at the end

| main clause | | Nebensatz | verb at end |
|---|---|---|---|
| Ich bleibe zu Hause, | weil | ich krank | **bin**. |
| Sie lernt Deutsch, | weil | sie in Berlin | **arbeitet**. |
| Ich hoffe, | dass | du Zeit | **hast**. |
| Er sagt, | dass | er müde | **ist**. |

What goes to the end is the verb that carries the ending: *bin, arbeitet, hast, ist*. Everything else keeps its normal order.

### Two verbs in the Nebensatz

If the clause has a modal verb or is in the Perfekt, the **conjugated** part (modal / haben / sein) goes last, right after the infinitive or participle:

- …, weil ich heute **arbeiten muss**. (modal last)
- …, dass er gestern **gekommen ist**. (Perfekt: participle, then sein)
- …, weil sie den Film **gesehen hat**.

**Separable verbs** join back together at the end: *Er ruft mich an.* → *…, dass er mich **anruft**.*

### Nebensatz first

You can also start with the Nebensatz. Then the whole clause counts as position 1, so the main-clause verb comes **right after the comma** (verb second rule!), and the two verbs meet in the middle:

- **Weil** ich krank **bin**, **bleibe** ich zu Hause.
- **Dass** er kommt, **weiß** ich schon.

### weil vs denn

Both mean *because*, but **denn** works like *und* and *aber*: it simply joins two normal sentences (it sits in "position 0"), so the word order after it does **not** change.

- Ich bleibe zu Hause, **denn** ich **bin** krank. (verb stays second)
- Ich bleibe zu Hause, **weil** ich krank **bin**. (verb at end)

### Why it matters

*weil* and *dass* turn short, choppy A1 sentences into real explanations and opinions: *Ich finde, dass …*, *Ich denke, dass …*, *…, weil …*. Almost every other conjunction you learn from now on (*wenn, ob, obwohl, damit, als*) follows exactly the same verb-at-the-end rule, so this pattern is the key to all of A2 word order.
`,
  examples: [
    { de: 'Ich bleibe zu Hause, weil ich krank bin.', en: "I'm staying at home because I'm ill. (bin at the end)" },
    { de: 'Sie glaubt, dass er recht hat.', en: 'She thinks that he is right.' },
    { de: 'Wir kommen nicht, weil wir arbeiten müssen.', en: "We're not coming because we have to work. (modal last)" },
    { de: 'Ich weiß, dass du gestern im Kino gewesen bist.', en: 'I know that you were at the cinema yesterday. (Perfekt: participle, then bist)' },
    { de: 'Er sagt, dass er mich morgen anruft.', en: 'He says he will call me tomorrow. (separable verb joins back together)' },
    { de: 'Weil es regnet, bleiben wir zu Hause.', en: "Because it's raining, we're staying at home. (Nebensatz first: main verb right after the comma)" },
    { de: 'Ich komme nicht, denn ich habe keine Zeit.', en: "I'm not coming, because I have no time. (denn: normal word order)" },
  ],
  connections: [
    { topicId: 'a1-06-verb-second', note: 'The verb-second rule for main clauses; the Nebensatz is the big exception.' },
    { topicId: 'a1-34-coordinating-conjunctions', note: 'und, aber, denn do not change word order; weil and dass do.' },
    { topicId: 'a1-16-separable-verbs', note: 'In a Nebensatz the separable prefix and verb join back together at the end.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'wenn, ob and question words introduce subordinate clauses with the same word order.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'More subordinating conjunctions that follow the same verb-at-the-end rule.' },
  ],
  edgeCases: [
    'The most common mistake is keeping the verb in second place: *weil ich bin krank* ✗. In standard German it must be *weil ich krank **bin***.',
    '**denn** and **weil** both mean "because", but only *weil* sends the verb to the end. After *denn* the word order is normal.',
    'With two verbs, the conjugated one is the **last** word: *…, weil ich arbeiten **muss*** / *…, dass er gekommen **ist***.',
    'Never forget the **comma** before weil / dass. Without it the sentence is wrong in writing.',
    '**dass** (conjunction, double s) is not **das** (article / pronoun): *Ich weiß, **dass** **das** Auto neu ist.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-04-subordinate-clauses-weil-dass-ex01',
      prompt: 'Complete: "Ich bleibe zu Hause, weil ___."',
      options: ['ich bin krank', 'ich krank bin', 'bin ich krank'],
      answer: 1,
      explanation: 'After weil the conjugated verb goes to the very end: weil ich krank bin.',
    },
    {
      type: 'fill',
      id: 'a2-04-subordinate-clauses-weil-dass-ex02',
      prompt: 'Er sagt, dass er morgen ___. (kommen)',
      answer: ['kommt'],
      explanation: 'The verb agrees with er (kommt) and stands at the end of the dass-clause.',
    },
    {
      type: 'order',
      id: 'a2-04-subordinate-clauses-weil-dass-ex03',
      prompt: 'Build the sentence: "I think that he is coming tomorrow."',
      words: ['dass', 'Ich', 'kommt.', 'morgen', 'glaube,', 'er'],
      answer: ['Ich glaube, dass er morgen kommt.'],
      explanation: 'Main clause first (Ich glaube), comma, then dass + subject + the rest, with kommt last.',
    },
    {
      type: 'mc',
      id: 'a2-04-subordinate-clauses-weil-dass-ex04',
      prompt: 'Complete: "Ich kann nicht kommen, weil ich ___."',
      options: ['muss arbeiten', 'arbeiten muss', 'arbeite muss'],
      answer: 1,
      explanation: 'With a modal verb, the infinitive comes first and the conjugated modal is the very last word: arbeiten muss.',
    },
    {
      type: 'fill',
      id: 'a2-04-subordinate-clauses-weil-dass-ex05',
      prompt: 'Sie ist müde, weil sie heute früh ___ ist. (aufstehen → Partizip II)',
      answer: ['aufgestanden'],
      explanation: 'In the Perfekt the participle (aufgestanden) comes before the conjugated helper verb (ist), which is last.',
    },
    {
      type: 'match',
      id: 'a2-04-subordinate-clauses-weil-dass-ex06',
      prompt: 'Match each conjunction with its meaning and word-order effect.',
      pairs: [
        ['weil', 'because (verb to the end)'],
        ['denn', 'because (verb stays in position 2)'],
        ['dass', 'that (verb to the end)'],
        ['aber', 'but (verb stays in position 2)'],
      ],
      explanation: 'weil and dass send the verb to the end. denn and aber just join two normal sentences (position 0): nothing moves.',
    },
    {
      type: 'order',
      id: 'a2-04-subordinate-clauses-weil-dass-ex07',
      prompt: 'Build the sentence starting with "Weil": "Because it is raining, we are staying at home."',
      words: ['regnet,', 'Weil', 'wir', 'bleiben', 'Hause.', 'es', 'zu'],
      answer: ['Weil es regnet, bleiben wir zu Hause.'],
      explanation: 'The Nebensatz (Weil es regnet) is position 1, so the main verb bleiben comes right after the comma, then the subject wir.',
    },
    {
      type: 'mc',
      id: 'a2-04-subordinate-clauses-weil-dass-ex08',
      prompt: 'Complete: "Ich weiß, dass er mich morgen ___."',
      options: ['ruft an', 'anruft', 'an ruft'],
      answer: 1,
      explanation: 'A separable verb joins back together at the end of a Nebensatz: anruft.',
    },
    {
      type: 'fill',
      id: 'a2-04-subordinate-clauses-weil-dass-ex09',
      prompt: 'Er kommt nicht, weil er keine Zeit ___. (haben)',
      answer: ['hat'],
      explanation: 'er + haben = hat, placed at the end of the weil-clause.',
    },
    {
      type: 'translate',
      id: 'a2-04-subordinate-clauses-weil-dass-ex10',
      prompt: 'Translate: "I think that she is right."',
      answer: ['Ich denke, dass sie recht hat.', 'Ich glaube, dass sie recht hat.', 'Ich denke, dass sie Recht hat.', 'Ich glaube, dass sie Recht hat.', 'Ich finde, dass sie recht hat.', 'Ich finde, dass sie Recht hat.'],
      hint: 'recht haben = to be right',
      explanation: 'denken / glauben / finden + comma + dass + sie recht + hat at the end.',
    },
    {
      type: 'mc',
      id: 'a2-04-subordinate-clauses-weil-dass-ex11',
      prompt: 'Which sentence is correct?',
      options: ['Ich komme nicht, denn ich habe keine Zeit.', 'Ich komme nicht, denn ich keine Zeit habe.', 'Ich komme nicht, weil ich habe keine Zeit.'],
      answer: 0,
      explanation: 'denn keeps normal word order (habe in position 2). After weil the verb would have to go to the end: weil ich keine Zeit habe.',
    },
    {
      type: 'translate',
      id: 'a2-04-subordinate-clauses-weil-dass-ex12',
      prompt: 'Translate: "She says that she is coming tomorrow."',
      answer: ['Sie sagt, dass sie morgen kommt.'],
      hint: 'sagen = to say, morgen = tomorrow',
      explanation: 'Sie sagt, + dass + sie morgen + kommt. The verb of the dass-clause is the last word.',
    },
  ],
};

export default topic;
