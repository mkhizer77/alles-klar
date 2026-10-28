import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-12-indirect-speech',
  level: 'B1',
  unit: 5,
  order: 12,
  title: 'Indirect speech with dass and with Konjunktiv I',
  germanTerm: 'Indirekte Rede, Konjunktiv I',
  tags: ['indirect speech', 'Konjunktiv I', 'dass', 'reporting', 'verbs'],
  summary: 'To report what someone said, everyday German uses dass + normal verb; news and formal texts use Konjunktiv I (er sei, er habe, er komme), which you need to recognise when reading.',
  explanation: `
### What it is

**Direct speech** quotes the exact words: *Er sagt: "Ich bin müde."* **Indirect speech** (*indirekte Rede*) reports them: *He says (that) he is tired.* German has two ways to do this.

### Way 1: dass + normal verb forms (everyday German)

In conversation you simply use a *dass* clause with the normal verb forms (the *indicative*, *Indikativ*). Pronouns and possessives shift to fit the new speaker:

- Direct: Anna sagt: "**Ich** habe keine Zeit."
- Indirect: Anna sagt, **dass sie** keine Zeit **hat**.
- Direct: "Ich liebe **meinen** Job." → Sie sagt, dass sie **ihren** Job liebt.

This is correct and very common. For B1 speaking and writing it is all you need.

### Way 2: Konjunktiv I (news, reports, formal writing)

Newspapers, news programmes and formal reports use **Konjunktiv I** (*Konjunktiv I*, a special verb form for reporting). It signals: *this is what someone said; I am not claiming it myself.* You will read it every day, so you must **recognise** it. Producing it is not expected at B1.

The forms you need to recognise are the **er / sie / es** forms. They look like the infinitive stem with **-e**:

| Infinitiv | er / sie / es (Konjunktiv I) |
|---|---|
| sein | er **sei** |
| haben | er **habe** |
| werden | er **werde** |
| können | er **könne** |
| müssen | er **müsse** |
| wissen | er **wisse** |
| kommen | er **komme** |

In the **plural** these forms would look exactly like the normal present (*sie haben, sie kommen*), so German uses **Konjunktiv II** instead, which you already know:

- Sie sagen, sie **hätten** keine Zeit. (not *haben*, which could be a fact)
- Die Kinder sagen, sie **würden** morgen **kommen**.

Rule of thumb for reading: **sei, habe, werde, könne … = singular; hätten, wären, würden = plural.** Both mean "someone said".

### Reporting the past

Whatever past tense the speaker used, the report uses **habe / sei + Partizip II**:

- "Ich **war** in Berlin." → Sie sagt, sie **sei** in Berlin **gewesen**.
- "Der Zug **hatte** Verspätung." → Die Zeitung berichtet, der Zug **habe** Verspätung **gehabt**.

In everyday German you would say: *Sie sagt, dass sie in Berlin **war**.*

### Questions and commands

- Yes/no question → **ob**: "Kommst du morgen?" → Er fragt, **ob** ich morgen **komme**.
- W-question → the W-word: "Wo wohnst du?" → Sie fragt, **wo** ich **wohne**.
- Command → **sollen**: "Geh nach Hause!" → Sie sagt, ich **soll** nach Hause gehen. (In the news: *er **solle** …*)

### Why it matters

Reading news and understanding a report in the B1 exam depend on recognising *sei*, *habe* and *werde* as "someone said". In speech and in your own writing, *dass* + normal verb forms keeps you safe. Knowing both lets you choose the right register, which is exactly what Unit 10 on formal and informal style will build on.
`,
  examples: [
    { de: 'Er sagt, dass er müde ist.', en: 'He says that he is tired. (everyday: dass + indicative)' },
    { de: 'Er sagt, er sei müde.', en: 'He says he is tired. (formal: Konjunktiv I)' },
    { de: 'Der Minister erklärte, die Regierung werde das Problem lösen.', en: 'The minister stated that the government would solve the problem. (werde = Konjunktiv I of werden)' },
    { de: 'Sie sagen, sie hätten keine Zeit.', en: 'They say they have no time. (plural: Konjunktiv II replaces the unclear form haben)' },
    { de: 'Sie sagt, sie sei in Berlin gewesen.', en: 'She says she was in Berlin. (past → sei + Partizip II)' },
    { de: 'Er fragt, ob ich morgen komme.', en: 'He asks whether I am coming tomorrow. (yes/no question → ob)' },
    { de: 'Sie sagt, ich soll nach Hause gehen.', en: 'She says I should go home. (command → sollen)' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'dass clauses with the verb at the end are the everyday way to report speech.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'Reported questions use ob or a W-word, as learned there.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'Konjunktiv II (hätten, wären, würden) is what you see in reported speech in the plural.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The reported past uses habe / sei + the same Partizip II as the Perfekt.' },
    { topicId: 'b1-31-register-formal-informal', note: 'Konjunktiv I belongs to the formal, written register.' },
  ],
  edgeCases: [
    'Konjunktiv I is **not** past tense. *Er sagt, er **komme** morgen* reports a present or future plan.',
    'In the plural, reported speech uses Konjunktiv II: *Sie sagen, sie **hätten** keine Zeit* / *sie **würden** kommen*.',
    'Shift the pronouns: "Ich liebe meinen Job" → *Sie sagt, dass sie **ihren** Job liebt.*',
    'With *dass* the normal verb form is fine: *Er sagt, dass er krank **ist***. Konjunktiv I (*sei*) is for news and formal texts.',
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
      explanation: 'With dass the normal form hat is all you need in everyday German; the Konjunktiv I form habe is also correct and more formal.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex03',
      prompt: 'Direct: "Ich liebe meinen Job." Report it: "Sie sagt, dass sie ___ Job liebt." (her)',
      answer: ['ihren'],
      explanation: 'The pronouns shift to the new speaker: ich → sie, meinen → ihren. The verb stays in the normal present form after dass.',
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
      prompt: 'Direct: "Geh nach Hause!" Report it: "Sie sagt, ich ___ nach Hause gehen." (sollen)',
      answer: ['soll', 'solle'],
      explanation: 'A command is reported with sollen: ich soll. In a news text you would read the Konjunktiv I form solle.',
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
