import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-09-konjunktiv-2-irreal',
  level: 'B1',
  unit: 4,
  order: 12,
  title: 'Irreal conditions: Wenn ich Zeit hätte …',
  germanTerm: 'Konjunktiv II: irreale Bedingung',
  tags: ['Konjunktiv II', 'conditional', 'wenn', 'verbs'],
  summary: 'An irreal condition says what would happen if things were different: "if I had time, I would help". Both halves use Konjunktiv II: hätte, wäre, könnte or würde + Infinitiv.',
  steps: [
    {
      title: 'What an irreal condition is',
      text: `
At A2 you used **Konjunktiv II** (the "would" form) to be polite: *Könnten Sie mir helfen?* Its main job is to talk about things that are **not real** (*irreal*): *If I were rich, I would travel the world.* I am not rich, so the whole sentence is imagined.

Compare the **real** condition with normal verb forms: *Wenn ich Zeit habe, helfe ich dir* (possible). With Konjunktiv II the sentence says: *this is not the case*.
`,
      examples: [
        { de: 'Wenn ich reich wäre, würde ich eine Weltreise machen.', en: 'If I were rich, I would travel the world. (I am not rich)' },
        { de: 'Wenn ich Zeit hätte, würde ich dir helfen.', en: 'If I had time, I would help you. (I have no time)' },
        { de: 'Wenn ich Zeit habe, helfe ich dir.', en: 'If I have time, I will help you. (real: normal forms)' },
      ],
    },
    {
      title: 'The short forms: hätte, wäre, könnte',
      text: `
A small group of very common verbs has its **own** Konjunktiv II form. Take the Präteritum (simple past), add an umlaut and **-e**. You must know these:

| Infinitiv | Präteritum | Konjunktiv II |
|---|---|---|
| haben | hatte | **hätte** |
| sein | war | **wäre** |
| werden | wurde | **würde** |
| können | konnte | **könnte** |
| müssen | musste | **müsste** |
| wissen | wusste | **wüsste** |

**sollte** and **wollte** have no umlaut, so they look like the Präteritum.
`,
      examples: [
        { de: 'Wenn er mehr Geld hätte, könnte er ein Auto kaufen.', en: 'If he had more money, he could buy a car. (hätte, könnte)' },
        { de: 'Wenn ich das wüsste, wäre ich froh.', en: 'If I knew that, I would be glad. (wüsste, wäre)' },
        { de: 'Wenn wir Zeit hätten, müssten wir nicht laufen.', en: 'If we had time, we would not have to run.' },
      ],
    },
    {
      title: 'The endings are always the same',
      text: `
All short forms take the same endings. Learn one and you know them all:

| | hätte | wäre | würde |
|---|---|---|---|
| ich | hätte | wäre | würde |
| du | hättest | wärst | würdest |
| er / sie / es | hätte | wäre | würde |
| wir | hätten | wären | würden |
| ihr | hättet | wärt | würdet |
| sie / Sie | hätten | wären | würden |
`,
      examples: [
        { de: 'Wenn du Zeit hättest, könntest du mitkommen.', en: 'If you had time, you could come along. (du: -est)' },
        { de: 'Wenn ihr hier wärt, wäre alles leichter.', en: 'If you were here, everything would be easier. (ihr: -t)' },
        { de: 'Wenn sie reich wären, würden sie nicht arbeiten.', en: 'If they were rich, they would not work. (sie: -en)' },
      ],
    },
    {
      title: 'All other verbs: würde + Infinitiv',
      text: `
For every other verb (*gehen, kaufen, arbeiten, helfen …*) you do not need a special form. Use **würde + Infinitiv**, with the infinitive at the **end** of the clause.

Rule of thumb: **hätte, wäre, the modals and wüsste** are short forms. Everything else takes **würde**. That is all you need at B1.
`,
      examples: [
        { de: 'Ich würde gern in Italien wohnen.', en: 'I would like to live in Italy. (würde + wohnen)' },
        { de: 'Er würde das Auto nicht kaufen.', en: 'He would not buy the car.' },
        { de: 'Wenn alle langsamer fahren würden, gäbe es weniger Unfälle.', en: 'If everyone drove more slowly, there would be fewer accidents. (fahren würden at the end)' },
      ],
    },
    {
      title: 'wenn clause and main clause, both orders',
      text: `
The **wenn** clause names the unreal condition; the main clause names the unreal result. Both are in Konjunktiv II.

*Wenn* sends the verb to the **end** of its clause. If the *wenn* clause comes first, the main clause starts with the **verb** (*…, würde ich …*). You can also put the main clause first; then the *wenn* clause follows after a comma.
`,
      examples: [
        { de: 'Wenn ich Zeit hätte, würde ich dir helfen.', en: 'If I had time, I would help you. (hätte at the end, then würde)' },
        { de: 'Ich würde dir helfen, wenn ich Zeit hätte.', en: 'I would help you if I had time. (main clause first)' },
        { de: 'Was würdest du machen, wenn du im Lotto gewinnen würdest?', en: 'What would you do if you won the lottery?' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'The polite forms (könnten Sie, ich hätte gern) are the same Konjunktiv II; here it expresses unreal situations.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'wenn clauses send the verb to the end; the same word order applies to irreal conditions.' },
    { topicId: 'a2-02-prateritum-verbs', note: 'The short Konjunktiv II forms are built from the Präteritum: hatte → hätte, konnte → könnte.' },
    { topicId: 'b1-09b-irreal-wishes-advice', note: 'The same forms express wishes (Wenn ich doch …!) and advice (An deiner Stelle würde ich …).' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'The same idea in the past: hätte gemacht, wäre gegangen.' },
    { topicId: 'b1-11-als-ob', note: 'als ob comparisons also use Konjunktiv II.' },
  ],
  edgeCases: [
    'Use the short form for **haben, sein, the modals and wissen**: *wenn ich **hätte***, not *wenn ich haben würde*.',
    '**sollte** and **wollte** have no umlaut, so they look like the Präteritum. The context tells you it is Konjunktiv II.',
    'Both halves are in Konjunktiv II: *Wenn ich Zeit **hätte**, **würde** ich kommen*, not *…, komme ich*.',
    'Do not confuse **wäre** (Konjunktiv II) with *war* (Präteritum) or **würde** with *wurde*. The umlaut makes it unreal.',
    'You may also read short forms of a few other verbs: *es **gäbe*** (there would be), *er **käme*** (he would come). *Es würde geben* and *er würde kommen* mean the same and are always correct.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex01',
      prompt: 'Complete: "Wenn ich reich ___, würde ich eine Weltreise machen."',
      options: ['wäre', 'bin', 'war'],
      answer: 0,
      explanation: 'An unreal condition needs Konjunktiv II: sein → wäre.',
    },
    {
      type: 'fill',
      id: 'b1-09-konjunktiv-2-irreal-ex02',
      prompt: 'Wenn er mehr Zeit ___, würde er Sport machen. (haben)',
      answer: ['hätte'],
      explanation: 'haben has its own short form: hätte. Do not use haben würde.',
    },
    {
      type: 'fill',
      id: 'b1-09-konjunktiv-2-irreal-ex03',
      prompt: 'Ich ___ gern in Italien wohnen. (werden, Konjunktiv II)',
      answer: ['würde'],
      explanation: 'For most verbs (wohnen) you use würde + Infinitiv.',
    },
    {
      type: 'match',
      id: 'b1-09-konjunktiv-2-irreal-ex04',
      prompt: 'Match each present-tense form with its Konjunktiv II.',
      pairs: [
        ['ich habe', 'ich hätte'],
        ['ich bin', 'ich wäre'],
        ['ich kann', 'ich könnte'],
        ['ich muss', 'ich müsste'],
        ['ich weiß', 'ich wüsste'],
        ['ich gehe', 'ich würde gehen'],
      ],
      explanation: 'haben, sein, the modals and wissen use short forms; a normal verb like gehen uses würde + Infinitiv.',
    },
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex05',
      prompt: 'Which sentence is a REAL condition (it can really happen), not an unreal one?',
      options: ['Wenn ich Zeit habe, helfe ich dir.', 'Wenn ich Zeit hätte, würde ich dir helfen.', 'Wenn ich reich wäre, würde ich nicht arbeiten.'],
      answer: 0,
      explanation: 'Normal present forms (habe, helfe) = real and possible. hätte / würde = Konjunktiv II = unreal: I do not have time.',
    },
    {
      type: 'fill',
      id: 'b1-09-konjunktiv-2-irreal-ex06',
      prompt: 'Wenn wir ein Auto ___, würden wir ans Meer fahren. (haben)',
      answer: ['hätten'],
      explanation: 'The subject wir needs the -en ending: hätten. It goes to the end of the wenn clause.',
    },
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex07',
      prompt: 'Complete: "Ich würde dir helfen, ___ ich Zeit hätte."',
      options: ['wenn', 'dass', 'ob'],
      answer: 0,
      explanation: 'The condition is introduced by wenn (if). The main clause can come first; the wenn clause then follows after a comma.',
    },
    {
      type: 'fill',
      id: 'b1-09-konjunktiv-2-irreal-ex08',
      prompt: 'Es gäbe weniger Unfälle, wenn alle langsamer fahren ___. (werden, Konjunktiv II)',
      answer: ['würden'],
      explanation: 'fahren is a normal verb, so würde + Infinitiv. The subject alle is plural → würden, and it goes to the end of the wenn clause. (es gäbe = there would be.)',
    },
    {
      type: 'translate',
      id: 'b1-09-konjunktiv-2-irreal-ex09',
      prompt: 'Translate: "If I had time, I would help you."',
      answer: ['Wenn ich Zeit hätte, würde ich dir helfen.', 'Ich würde dir helfen, wenn ich Zeit hätte.'],
      hint: 'die Zeit = time, helfen + Dative',
      explanation: 'hätte in the condition, würde + helfen in the result. helfen takes the Dative: dir.',
    },
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex10',
      prompt: 'Complete: "Wenn er weniger ___, wäre er nicht so müde."',
      options: ['arbeiten würde', 'würde arbeiten', 'arbeitet würde'],
      answer: 0,
      explanation: 'In a wenn clause the conjugated verb goes to the very end: the infinitive arbeiten first, then würde.',
    },
    {
      type: 'order',
      id: 'b1-09-konjunktiv-2-irreal-ex11',
      prompt: 'Build the question: "What would you do if you won the lottery?"',
      words: ['du', 'Lotto', 'würdest', 'machen,', 'würdest?', 'gewinnen', 'Was', 'wenn', 'du', 'im'],
      answer: ['Was würdest du machen, wenn du im Lotto gewinnen würdest?'],
      explanation: 'Main clause: W-word, würdest, du, then machen at the end. In the wenn clause gewinnen würdest goes to the end.',
    },
  ],
};

export default topic;
