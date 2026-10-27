import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-10-konjunktiv-2-past',
  level: 'B1',
  unit: 4,
  order: 10,
  title: 'Konjunktiv II in the past (hätte gemacht, wäre gegangen)',
  germanTerm: 'Konjunktiv II Vergangenheit',
  tags: ['Konjunktiv II', 'past', 'conditional', 'regret', 'modal verbs'],
  summary: 'Konjunktiv II of the past (hätte / wäre + Partizip II) talks about what would have happened or what you wish had happened: "I would have come", "if only I had known".',
  explanation: `
### What it is

The present Konjunktiv II says *If I had time, I would help* (now, but it is not the case). The **past Konjunktiv II** moves the same unreal idea into the past: *If I **had had** time, I **would have** helped* (back then, but it did not happen). It is the form for **regrets**, **missed chances** and **imagined past outcomes**.

- Wenn ich das **gewusst hätte**, **wäre** ich **gekommen**. – *If I had known that, I would have come.*

### How it works

There is only **one** past form of Konjunktiv II, and it is easy: take the Plusquamperfekt and put the helper into Konjunktiv II.

| Plusquamperfekt | Konjunktiv II past |
|---|---|
| ich **hatte** gemacht | ich **hätte** gemacht |
| ich **war** gegangen | ich **wäre** gegangen |

So the formula is **hätte / wäre + Partizip II**. The helper follows the Perfekt rule: *sein* for movement and change of state, *haben* for the rest.

| | haben-verbs | sein-verbs |
|---|---|---|
| ich | **hätte** gelernt | **wäre** gefahren |
| du | **hättest** gelernt | **wärst** gefahren |
| er / sie / es | **hätte** gelernt | **wäre** gefahren |
| wir | **hätten** gelernt | **wären** gefahren |
| ihr | **hättet** gelernt | **wärt** gefahren |
| sie / Sie | **hätten** gelernt | **wären** gefahren |

There is no *würde* form in the past. *Ich würde gegangen sein* is possible but very rare; always use *wäre gegangen*.

### Three uses

**1. Unreal condition in the past.** Both halves in the past Konjunktiv II:

- **Wenn** er **gelernt hätte**, **hätte** er die Prüfung **bestanden**.
- **Wenn** du früher **aufgestanden wärst**, **hättest** du den Bus nicht **verpasst**.

**2. Wish or regret about the past.**

- **Hätte** ich doch nur mehr **gelernt**! – *If only I had studied more!*
- **Wäre** ich doch zu Hause **geblieben**! – *If only I had stayed home!*

**3. A past situation seen in another way.**

- Ohne deine Hilfe **hätte** ich das nicht **geschafft**. – *Without your help I would not have managed.*
- Ich **hätte** dich **angerufen**, aber mein Handy war kaputt.
- Wir **wären** gern länger **geblieben**. – *We would have liked to stay longer.*

### With modal verbs

Modal verbs in the past Konjunktiv II use the **double infinitive** you know from Unit 1: **hätte + Infinitiv + Modal**.

| form | meaning |
|---|---|
| Ich **hätte** das **machen sollen**. | I should have done that. |
| Du **hättest** mich **fragen können**. | You could have asked me. |
| Er **hätte** nicht **kommen müssen**. | He would not have had to come. |
| Wir **hätten** das nicht **tun dürfen**. | We should not have been allowed to do that. |

*Hätte … sollen* (should have) and *hätte … können* (could have) are by far the most useful. In a subordinate clause *hätte* goes before the double infinitive: *…, dass ich das **hätte machen sollen**.*

### Why it matters

Talking about a past mistake or a missed opportunity is a classic B1 speaking task (*Was hättest du anders gemacht?*). The past Konjunktiv II also lets you give feedback softly (*Sie hätten früher anrufen können*). Because it reuses the Plusquamperfekt and the double infinitive, it costs you almost no new forms.
`,
  examples: [
    { de: 'Wenn ich das gewusst hätte, wäre ich gekommen.', en: 'If I had known that, I would have come.' },
    { de: 'Wenn er gelernt hätte, hätte er die Prüfung bestanden.', en: 'If he had studied, he would have passed the exam.' },
    { de: 'Hätte ich doch nur mehr gelernt!', en: 'If only I had studied more! (regret, verb first)' },
    { de: 'Ohne deine Hilfe hätte ich das nicht geschafft.', en: 'Without your help I would not have managed.' },
    { de: 'Wir wären gern länger geblieben.', en: 'We would have liked to stay longer. (bleiben → wäre)' },
    { de: 'Du hättest mich fragen sollen.', en: 'You should have asked me. (hätte + double infinitive)' },
    { de: 'Ich hätte dich angerufen, aber mein Handy war kaputt.', en: 'I would have called you, but my phone was broken.' },
  ],
  connections: [
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'The present Konjunktiv II (hätte, wäre, würde); here the same idea goes into the past.' },
    { topicId: 'b1-01-plusquamperfekt', note: 'hatte / war + Partizip II is the structure; add an umlaut and you have the past Konjunktiv II.' },
    { topicId: 'a1-32-perfekt-sein', note: 'Verbs with sein in the Perfekt take wäre here.' },
    { topicId: 'b1-03-modals-perfekt', note: 'hätte … machen sollen follows the double-infinitive rule for modals.' },
  ],
  edgeCases: [
    'There is no *würde* in the past: *ich **wäre** gegangen*, not *ich würde gegangen*.',
    'Choose the helper as in the Perfekt: *wäre gefahren* (movement), *hätte gegessen*.',
    '**Should have** = *hätte … sollen*, **could have** = *hätte … können*. Both end in a double infinitive, never a participle.',
    'In a wish without *wenn*, the helper comes first: ***Hätte** ich das gewusst!*',
    'Both halves of an unreal past condition are in the past Konjunktiv II: *Wenn ich Zeit **gehabt hätte**, **wäre** ich **gekommen**.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-10-konjunktiv-2-past-ex01',
      prompt: 'Complete: "Wenn ich das gewusst ___, wäre ich gekommen."',
      options: ['hätte', 'wäre', 'würde'],
      answer: 0,
      explanation: 'wissen takes haben, so the past Konjunktiv II helper is hätte. It goes to the end of the wenn clause.',
    },
    {
      type: 'fill',
      id: 'b1-10-konjunktiv-2-past-ex02',
      prompt: 'Wenn du früher aufgestanden ___, hättest du den Bus nicht verpasst. (sein)',
      answer: ['wärst', 'wärest'],
      explanation: 'aufstehen takes sein (change of state). du-form of wäre: wärst (or wärest).',
    },
    {
      type: 'fill',
      id: 'b1-10-konjunktiv-2-past-ex03',
      prompt: 'Ich ___ dich angerufen, aber mein Handy war kaputt. (haben)',
      answer: ['hätte'],
      explanation: 'The call did not happen: hätte + angerufen.',
    },
    {
      type: 'match',
      id: 'b1-10-konjunktiv-2-past-ex04',
      prompt: 'Match each Perfekt sentence with its past Konjunktiv II.',
      pairs: [
        ['Ich habe gegessen.', 'Ich hätte gegessen.'],
        ['Ich bin gefahren.', 'Ich wäre gefahren.'],
        ['Wir haben gelernt.', 'Wir hätten gelernt.'],
        ['Sie ist geblieben.', 'Sie wäre geblieben.'],
      ],
      explanation: 'habe → hätte, bin → wäre. The Partizip II stays the same.',
    },
    {
      type: 'order',
      id: 'b1-10-konjunktiv-2-past-ex05',
      prompt: 'Build the sentence: "If he had studied, he would have passed the exam."',
      words: ['hätte', 'bestanden.', 'die', 'Wenn', 'gelernt', 'Prüfung', 'er', 'hätte,', 'er'],
      answer: ['Wenn er gelernt hätte, hätte er die Prüfung bestanden.'],
      explanation: 'First hätte at the end of the wenn clause, second hätte starts the main clause, bestanden at the very end.',
    },
    {
      type: 'mc',
      id: 'b1-10-konjunktiv-2-past-ex06',
      prompt: 'What does "Hätte ich doch nur mehr gelernt!" express?',
      options: ['Regret: if only I had studied more', 'A plan: I will study more', 'A question: did I study enough?'],
      answer: 0,
      explanation: 'Helper first + doch nur + Partizip II = an unreal wish about the past, i.e. regret.',
    },
    {
      type: 'fill',
      id: 'b1-10-konjunktiv-2-past-ex07',
      prompt: 'Du ___ mich fragen sollen. (haben)',
      answer: ['hättest'],
      explanation: 'should have asked = hättest + fragen sollen. du-form: hättest.',
    },
    {
      type: 'mc',
      id: 'b1-10-konjunktiv-2-past-ex08',
      prompt: 'Complete: "Ich hätte das nicht ___." (I should not have done that)',
      options: ['machen sollen', 'gemacht sollen', 'machen gesollt'],
      answer: 0,
      explanation: 'A modal with another verb ends in a double infinitive: machen sollen. No participle.',
    },
    {
      type: 'translate',
      id: 'b1-10-konjunktiv-2-past-ex09',
      prompt: 'Translate: "I would have helped you."',
      answer: ['Ich hätte dir geholfen.'],
      hint: 'helfen (geholfen) + Dative',
      explanation: 'hätte + geholfen. helfen takes the Dative, so dir.',
    },
    {
      type: 'fill',
      id: 'b1-10-konjunktiv-2-past-ex10',
      prompt: 'Ohne deine Hilfe ___ ich das nicht geschafft. (haben)',
      answer: ['hätte'],
      explanation: 'An unreal past result: hätte + geschafft. Position two because Ohne deine Hilfe fills position one.',
    },
    {
      type: 'mc',
      id: 'b1-10-konjunktiv-2-past-ex11',
      prompt: 'Which sentence is in the PRESENT Konjunktiv II, not the past?',
      options: ['Ich würde kommen.', 'Ich wäre gekommen.', 'Ich hätte kommen können.'],
      answer: 0,
      explanation: 'würde + Infinitiv is present / future. wäre gekommen and hätte kommen können are past.',
    },
    {
      type: 'order',
      id: 'b1-10-konjunktiv-2-past-ex12',
      prompt: 'Build the sentence: "We would have liked to stay longer."',
      words: ['länger', 'gern', 'Wir', 'geblieben.', 'wären'],
      answer: ['Wir wären gern länger geblieben.'],
      explanation: 'bleiben takes sein → wären. gern länger in the middle, geblieben at the end.',
    },
  ],
};

export default topic;
