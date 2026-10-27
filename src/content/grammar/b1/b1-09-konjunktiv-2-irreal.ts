import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-09-konjunktiv-2-irreal',
  level: 'B1',
  unit: 4,
  order: 9,
  title: 'Irreal conditions and wishes in the present',
  germanTerm: 'Konjunktiv II (irreal)',
  tags: ['Konjunktiv II', 'conditional', 'wishes', 'wenn', 'verbs'],
  summary: 'Konjunktiv II (hätte, wäre, würde, könnte …) talks about things that are not real: "if I had time", "if only I were rich", "I would travel".',
  explanation: `
### What it is

At A2 you used **Konjunktiv II** (*Konjunktiv II*) for politeness: *Könnten Sie mir helfen?* Its main job, though, is to talk about things that are **not real** (*irreal*): imagined, impossible or just wished for.

- Wenn ich reich **wäre**, **würde** ich eine Weltreise machen. – *If I were rich, I would travel the world.* (I am not rich.)

English uses "would", "were" and "had" for this. German uses Konjunktiv II in **both** halves of the sentence.

### The forms

For almost all verbs you use **würde + Infinitiv**: *ich würde gehen, du würdest kommen*. A small group of very common verbs has its **own** short Konjunktiv II form, built from the Präteritum plus umlaut and -e. You must know these:

| Infinitiv | Präteritum | Konjunktiv II |
|---|---|---|
| haben | hatte | **hätte** |
| sein | war | **wäre** |
| werden | wurde | **würde** |
| können | konnte | **könnte** |
| müssen | musste | **müsste** |
| dürfen | durfte | **dürfte** |
| sollen | sollte | **sollte** (no umlaut) |
| wollen | wollte | **wollte** (no umlaut) |
| wissen | wusste | **wüsste** |
| kommen | kam | **käme** |
| geben | gab | **gäbe** (es gäbe = there would be) |
| gehen | ging | **ginge** |

The endings are the same for all of them:

| | hätte | wäre | würde | könnte |
|---|---|---|---|---|
| ich | hätte | wäre | würde | könnte |
| du | hättest | wärst / wärest | würdest | könntest |
| er / sie / es | hätte | wäre | würde | könnte |
| wir | hätten | wären | würden | könnten |
| ihr | hättet | wärt / wäret | würdet | könntet |
| sie / Sie | hätten | wären | würden | könnten |

Rule of thumb: **hätte, wäre, the modals and wüsste** are always used as short forms. For other verbs (*gehen, kaufen, arbeiten …*) take **würde + Infinitiv**; short forms like *käme* or *gäbe* are fine but optional.

### Irreal conditions

The *wenn* clause states the unreal condition; the main clause states the unreal result. Both are in Konjunktiv II:

- **Wenn** ich Zeit **hätte**, **würde** ich dir helfen.
- Ich **würde** dir helfen, **wenn** ich Zeit **hätte**.
- **Wenn** er mehr Geld **hätte**, **könnte** er ein Auto kaufen.

Compare the real condition in the present: *Wenn ich Zeit habe, helfe ich dir* (possible, real). Konjunktiv II signals: *this is not the case*.

### Irreal wishes

- **Wenn** ich **doch nur** mehr Geld **hätte**! – *If only I had more money!*
- **Wäre** ich **doch** jetzt am Strand! – (same, *wenn* dropped, verb first)
- **Ich wünschte**, ich **wäre** jetzt am Strand. – *I wish I were on the beach now.*

The particles **doch**, **nur** and **bloß** make the wish stronger.

### Advice and imagined situations

- **An deiner Stelle würde** ich zum Arzt gehen. – *If I were you, I would see a doctor.*
- **Wenn ich du wäre**, würde ich das nicht machen.
- **Was würdest du machen**, wenn du im Lotto gewinnen würdest?

### Why it matters

Konjunktiv II is central to the B1 exam: giving advice, discussing a hypothetical situation (*Was wäre, wenn …?*), expressing wishes and being polite all use it. The next topic takes it into the past (*hätte gemacht, wäre gegangen*).
`,
  examples: [
    { de: 'Wenn ich reich wäre, würde ich eine Weltreise machen.', en: 'If I were rich, I would travel the world. (both halves in Konjunktiv II)' },
    { de: 'Wenn er mehr Zeit hätte, würde er Sport machen.', en: 'If he had more time, he would do sport.' },
    { de: 'Ich würde gern in Italien wohnen.', en: 'I would like to live in Italy. (würde + Infinitiv)' },
    { de: 'Es gäbe weniger Unfälle, wenn alle langsamer fahren würden.', en: 'There would be fewer accidents if everyone drove more slowly. (es gäbe = there would be)' },
    { de: 'Wenn ich doch nur mehr Geld hätte!', en: 'If only I had more money! (wish with doch nur)' },
    { de: 'Ich wünschte, ich wäre jetzt am Strand.', en: 'I wish I were on the beach now.' },
    { de: 'An deiner Stelle würde ich zum Arzt gehen.', en: 'If I were you, I would go to the doctor. (advice)' },
  ],
  connections: [
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'The polite forms (könnten Sie, ich hätte gern) are the same Konjunktiv II; here it expresses unreal situations.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'wenn clauses send the verb to the end; the same word order applies to irreal conditions.' },
    { topicId: 'a2-02-prateritum-verbs', note: 'The short Konjunktiv II forms are built from the Präteritum: hatte → hätte, kam → käme.' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'The same idea in the past: hätte gemacht, wäre gegangen.' },
    { topicId: 'b1-11-als-ob', note: 'als ob comparisons and polite suggestions also use Konjunktiv II.' },
  ],
  edgeCases: [
    'Use the short form for **haben, sein, the modals and wissen**: *wenn ich **hätte***, not *wenn ich haben würde*.',
    '**sollte** and **wollte** have no umlaut, so they look like the Präteritum. The context tells you it is Konjunktiv II.',
    'Both halves are in Konjunktiv II: *Wenn ich Zeit **hätte**, **würde** ich kommen*, not *…, komme ich*.',
    'In a wish without *wenn* the verb comes first: ***Hätte** ich doch mehr Zeit!*',
    'Do not confuse *wäre* (Konjunktiv II) with *war* (Präteritum) or *würde* with *wurde*. The umlaut makes it unreal.',
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
      type: 'order',
      id: 'b1-09-konjunktiv-2-irreal-ex05',
      prompt: 'Build the sentence: "If I were you, I would not do that."',
      words: ['nicht', 'ich', 'Wenn', 'machen.', 'wäre,', 'würde', 'das', 'du', 'ich'],
      answer: ['Wenn ich du wäre, würde ich das nicht machen.'],
      explanation: 'wäre at the end of the wenn clause; the main clause starts with würde, and machen goes to the end.',
    },
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex06',
      prompt: 'Complete the wish: "Wenn ich doch nur mehr Geld ___!"',
      options: ['hätte', 'habe', 'hatte'],
      answer: 0,
      explanation: 'An unreal wish uses Konjunktiv II: hätte. doch nur makes it stronger.',
    },
    {
      type: 'fill',
      id: 'b1-09-konjunktiv-2-irreal-ex07',
      prompt: 'Es ___ weniger Unfälle, wenn alle langsamer fahren würden. (geben)',
      answer: ['gäbe'],
      explanation: 'es gibt → es gäbe (there would be). The short form comes from the Präteritum gab + umlaut + e.',
    },
    {
      type: 'translate',
      id: 'b1-09-konjunktiv-2-irreal-ex08',
      prompt: 'Translate: "If I had time, I would help you."',
      answer: ['Wenn ich Zeit hätte, würde ich dir helfen.', 'Ich würde dir helfen, wenn ich Zeit hätte.'],
      hint: 'die Zeit = time, helfen + Dative',
      explanation: 'hätte in the condition, würde + helfen in the result. helfen takes the Dative: dir.',
    },
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex09',
      prompt: 'What does "An deiner Stelle würde ich zum Arzt gehen." express?',
      options: ['Advice: if I were you, I would see a doctor', 'A fact: I am going to the doctor', 'A question: should I go to the doctor?'],
      answer: 0,
      explanation: 'an deiner Stelle + Konjunktiv II is the standard way to give advice: in your place I would …',
    },
    {
      type: 'fill',
      id: 'b1-09-konjunktiv-2-irreal-ex10',
      prompt: 'Ich wünschte, ich ___ jetzt am Strand. (sein)',
      answer: ['wäre'],
      explanation: 'After Ich wünschte the wish is unreal, so Konjunktiv II: wäre.',
    },
    {
      type: 'mc',
      id: 'b1-09-konjunktiv-2-irreal-ex11',
      prompt: 'Which is the correct short Konjunktiv II of "ich komme"?',
      options: ['ich käme', 'ich kommte', 'ich kömme'],
      answer: 0,
      explanation: 'Präteritum kam + umlaut + e = käme. (ich würde kommen is also correct.)',
    },
    {
      type: 'order',
      id: 'b1-09-konjunktiv-2-irreal-ex12',
      prompt: 'Build the question: "What would you do if you won the lottery?"',
      words: ['du', 'Lotto', 'würdest', 'machen,', 'würdest?', 'gewinnen', 'Was', 'wenn', 'du', 'im'],
      answer: ['Was würdest du machen, wenn du im Lotto gewinnen würdest?'],
      explanation: 'Main clause: W-word, würdest, du, then machen at the end. In the wenn clause gewinnen würdest goes to the end.',
    },
  ],
};

export default topic;
