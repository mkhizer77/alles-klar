import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-12-indirect-speech',
  level: 'B1',
  unit: 5,
  order: 12,
  title: 'Indirect speech with dass and with Konjunktiv I',
  germanTerm: 'Indirekte Rede, Konjunktiv I',
  tags: ['indirect speech', 'Konjunktiv I', 'dass', 'reporting', 'verbs'],
  summary: 'To report what someone said, everyday German uses dass + normal verb; formal and written German uses Konjunktiv I (er sei, er habe, er komme), with Konjunktiv II as a backup when the forms are not clear.',
  explanation: `
### What it is

**Direct speech** quotes the exact words: *Er sagt: "Ich bin müde."* **Indirect speech** (*indirekte Rede*) reports them: *He says (that) he is tired.* German has two ways to do this.

### Way 1: dass + indicative (everyday German)

In conversation you simply use a *dass* clause with the normal verb forms. Pronouns and possessives shift to fit the new speaker:

- Direct: Anna sagt: "**Ich** habe keine Zeit."
- Indirect: Anna sagt, **dass sie** keine Zeit **hat**.

This is correct and very common. For B1 speaking it is all you need.

### Way 2: Konjunktiv I (news, reports, formal writing)

Newspapers, news programmes and formal reports use **Konjunktiv I** (*Konjunktiv I*). It signals: *this is what someone said; I am not claiming it myself.* You will read it every day, so you must recognise it; producing it is a bonus at B1.

Konjunktiv I is built from the **infinitive stem + -e endings**. The important forms are the **er / sie / es** forms:

| Infinitiv | er / sie / es (Konjunktiv I) |
|---|---|
| sein | er **sei** |
| haben | er **habe** |
| werden | er **werde** |
| können | er **könne** |
| müssen | er **müsse** |
| wollen | er **wolle** |
| sollen | er **solle** |
| wissen | er **wisse** |
| kommen | er **komme** |
| gehen | er **gehe** |

The full table of **sein**, the only verb with a complete set of its own forms:

| | sein | haben | kommen |
|---|---|---|---|
| ich | sei | habe* | komme* |
| du | sei(e)st | habest | kommest |
| er / sie / es | **sei** | **habe** | **komme** |
| wir | seien | haben* | kommen* |
| ihr | seiet | habet | kommet |
| sie / Sie | **seien** | haben* | kommen* |

The forms marked * look **exactly like the present indicative**. When that happens, German switches to **Konjunktiv II** so that the reported speech is still visible:

- Sie sagen, sie **hätten** keine Zeit. (not *haben*, which could be a fact)
- Die Kinder sagen, sie **kämen** / **würden** morgen **kommen**.

In practice: **er / sie / es → Konjunktiv I; plural sie → Konjunktiv II**.

### Reporting the past

All three past tenses become **habe / sei + Partizip II**:

- "Ich **war** in Berlin." → Sie sagt, sie **sei** in Berlin **gewesen**.
- "Der Zug **hatte** Verspätung." → Die Zeitung berichtet, der Zug **habe** Verspätung **gehabt**.

### Questions and commands

- Yes/no question → **ob**: "Kommst du morgen?" → Er fragt, **ob** ich morgen **komme**.
- W-question → the W-word: "Wo wohnst du?" → Sie fragt, **wo** ich **wohne**.
- Imperative → **sollen**: "Geh nach Hause!" → Sie sagt, ich **solle** / **soll** nach Hause gehen.

### Why it matters

Reading news, understanding a report in the B1 exam and writing a short formal summary all depend on recognising *sei*, *habe* and *werde* as "someone said". In speech, *dass* + indicative keeps you safe. Knowing both lets you choose the right register, which is exactly what Unit 10 on formal and informal style will build on.
`,
  examples: [
    { de: 'Er sagt, dass er müde ist.', en: 'He says that he is tired. (everyday: dass + indicative)' },
    { de: 'Er sagt, er sei müde.', en: 'He says he is tired. (formal: Konjunktiv I)' },
    { de: 'Der Minister erklärte, die Regierung werde das Problem lösen.', en: 'The minister stated that the government would solve the problem. (werde = Konjunktiv I of werden)' },
    { de: 'Sie sagen, sie hätten keine Zeit.', en: 'They say they have no time. (plural: Konjunktiv II replaces the unclear form haben)' },
    { de: 'Sie sagt, sie sei in Berlin gewesen.', en: 'She says she was in Berlin. (past → sei + Partizip II)' },
    { de: 'Er fragt, ob ich morgen komme.', en: 'He asks whether I am coming tomorrow. (yes/no question → ob)' },
    { de: 'Sie sagt, ich solle nach Hause gehen.', en: 'She says I should go home. (command → sollen)' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'dass clauses with the verb at the end are the everyday way to report speech.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'Reported questions use ob or a W-word, as learned there.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'Konjunktiv II (hätten, wären, würden) steps in when Konjunktiv I is not clearly different from the indicative.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The reported past uses habe / sei + the same Partizip II as the Perfekt.' },
    { topicId: 'b1-31-register-formal-informal', note: 'Konjunktiv I belongs to the formal, written register.' },
  ],
  edgeCases: [
    'Konjunktiv I is **not** past tense. *Er sagt, er **komme** morgen* reports a present or future plan.',
    'When Konjunktiv I looks like the indicative (*wir haben, sie kommen*), use Konjunktiv II: *sie **hätten**, sie **kämen** / würden kommen*.',
    'Shift the pronouns: "Ich liebe meinen Job" → *Sie sagt, sie liebe **ihren** Job.*',
    'With *dass* you may use the indicative **or** Konjunktiv I: *Er sagt, dass er krank **ist** / **sei***. Without *dass* in formal style, use Konjunktiv I.',
    'The reported past has only one form: *habe / sei + Partizip II*, whether the original was Perfekt, Präteritum or Plusquamperfekt.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex01',
      prompt: 'Direct: "Ich bin müde." Report it formally: "Er sagt, er ___ müde."',
      options: ['sei', 'ist', 'wäre'],
      answer: 0,
      explanation: 'Without dass, formal indirect speech uses Konjunktiv I: sein → sei.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex02',
      prompt: 'Sie sagt, dass sie keine Zeit ___. (haben)',
      answer: ['hat', 'habe'],
      explanation: 'With dass the normal indicative hat is fine in everyday German; the Konjunktiv I habe is also correct and more formal.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex03',
      prompt: 'Der Minister erklärte, die Regierung ___ das Problem lösen. (werden, Konjunktiv I)',
      answer: ['werde'],
      explanation: 'Konjunktiv I of werden in the er / sie / es form is werde. It reports a future plan.',
    },
    {
      type: 'match',
      id: 'b1-12-indirect-speech-ex04',
      prompt: 'Match each indicative form with its Konjunktiv I.',
      pairs: [
        ['er ist', 'er sei'],
        ['er hat', 'er habe'],
        ['er kann', 'er könne'],
        ['er muss', 'er müsse'],
        ['er weiß', 'er wisse'],
      ],
      explanation: 'Konjunktiv I = infinitive stem + -e. sein is irregular: sei.',
    },
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex05',
      prompt: 'Complete: "Sie sagen, sie ___ keine Zeit."',
      options: ['hätten', 'haben', 'hatten'],
      answer: 0,
      explanation: 'The Konjunktiv I form haben looks like the indicative, so German switches to Konjunktiv II: hätten.',
    },
    {
      type: 'order',
      id: 'b1-12-indirect-speech-ex06',
      prompt: 'Build the sentence: "He says he is coming tomorrow." (formal, no dass)',
      words: ['morgen.', 'Er', 'komme', 'sagt,', 'er'],
      answer: ['Er sagt, er komme morgen.'],
      explanation: 'Without dass the reported clause keeps main-clause word order: er komme morgen. komme is Konjunktiv I.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex07',
      prompt: 'Die Zeitung berichtet, der Zug ___ Verspätung gehabt. (haben)',
      answer: ['habe'],
      explanation: 'The reported past is habe / sei + Partizip II. haben takes habe: habe … gehabt.',
    },
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex08',
      prompt: 'Direct: "Ich war in Berlin." Report it: "Sie sagt, sie ___ in Berlin gewesen."',
      options: ['sei', 'war', 'habe'],
      answer: 0,
      explanation: 'war becomes sei + gewesen: the past is reported with the Konjunktiv I helper plus Partizip II. sein takes sei, not habe.',
    },
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex09',
      prompt: 'Direct question: "Kommst du morgen?" Report it: "Er fragt, ___ ich morgen komme."',
      options: ['ob', 'dass', 'wenn'],
      answer: 0,
      explanation: 'A yes/no question is reported with ob (whether).',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex10',
      prompt: 'Direct: "Geh nach Hause!" Report it: "Sie sagt, ich ___ nach Hause gehen." (sollen, Konjunktiv I)',
      answer: ['solle'],
      explanation: 'A command is reported with sollen. Konjunktiv I: solle (the indicative soll is also used in everyday speech).',
    },
    {
      type: 'translate',
      id: 'b1-12-indirect-speech-ex11',
      prompt: 'Translate: "He says he is ill."',
      answer: ['Er sagt, er sei krank.', 'Er sagt, dass er krank ist.', 'Er sagt, dass er krank sei.', 'Er sagt, er ist krank.'],
      hint: 'krank = ill',
      explanation: 'All four are correct: dass + indicative is everyday; Konjunktiv I sei is formal. Choose one register and keep it.',
    },
    {
      type: 'order',
      id: 'b1-12-indirect-speech-ex12',
      prompt: 'Build the sentence: "She asks whether I have time tomorrow."',
      words: ['Zeit', 'fragt,', 'ich', 'habe.', 'Sie', 'morgen', 'ob'],
      answer: ['Sie fragt, ob ich morgen Zeit habe.'],
      explanation: 'ob starts the reported question and sends habe to the end.',
    },
  ],
};

export default topic;
