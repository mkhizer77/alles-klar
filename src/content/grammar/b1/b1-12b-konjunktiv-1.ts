import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-12b-konjunktiv-1',
  level: 'B1',
  unit: 5,
  order: 17,
  title: 'Konjunktiv I: Er sagt, er sei … (news and reports)',
  germanTerm: 'Konjunktiv I',
  tags: ['Konjunktiv I', 'indirect speech', 'reporting', 'news', 'reading'],
  summary: 'News and formal reports mark reported speech with Konjunktiv I (er sei, er habe, er werde); you need to recognise it when reading, and hätten / wären / würden replace it in the plural.',
  steps: [
    {
      title: 'What Konjunktiv I is for',
      text: `
Newspapers, news programmes and formal reports use **Konjunktiv I** (a special verb form for reporting). It signals: *this is what someone said; I am not claiming it myself.* Often *dass* is dropped and the reported clause keeps normal word order.

You will read it every day, so you must **recognise** it. Producing it is not expected at B1; in your own German use *dass* + normal forms.
`,
      examples: [
        { de: 'Er sagt, er sei müde.', en: 'He says he is tired. (sei = Konjunktiv I; everyday: dass er müde ist)' },
        { de: 'Der Minister erklärte, die Regierung werde das Problem lösen.', en: 'The minister stated that the government would solve the problem. (werde)' },
        { de: 'Die Polizei berichtet, der Mann habe keinen Führerschein.', en: 'The police report that the man has no driving licence. (habe)' },
      ],
    },
    {
      title: 'The er-forms to recognise',
      text: `
The forms you meet most are the **er / sie / es** forms. They look like the infinitive stem with **-e**; only *sein* is different (**sei**):

| Infinitiv | er / sie / es |
|---|---|
| sein | er **sei** |
| haben | er **habe** |
| werden | er **werde** |
| können | er **könne** |
| müssen | er **müsse** |
| wissen | er **wisse** |

Other verbs follow the same pattern: *er **komme**, er **gehe**, er **wolle***.
`,
      examples: [
        { de: 'Sie sagt, sie könne heute nicht kommen.', en: 'She says she cannot come today. (könne)' },
        { de: 'Er meint, er müsse noch arbeiten.', en: 'He says he still has to work. (müsse)' },
        { de: 'Der Chef sagt, er wisse nichts davon.', en: 'The boss says he knows nothing about it. (wisse)' },
      ],
    },
    {
      title: 'Plural: hätten, wären, würden instead',
      text: `
In the **plural** the Konjunktiv I forms would look exactly like the normal present (*sie haben, sie kommen*), so nobody could tell it is reported. German then uses **Konjunktiv II** instead, which you already know: *hätten, wären, würden + Infinitiv*.

Reading rule: **sei, habe, werde, könne … = singular; hätten, wären, würden = plural.** Both mean "someone said".
`,
      examples: [
        { de: 'Sie sagen, sie hätten keine Zeit.', en: 'They say they have no time. (haben would look like a fact, so hätten)' },
        { de: 'Die Kinder sagen, sie würden morgen kommen.', en: 'The children say they will come tomorrow. (würden + kommen)' },
        { de: 'Die Nachbarn erzählen, sie wären sehr zufrieden.', en: 'The neighbours say they are very satisfied. (wären)' },
      ],
    },
    {
      title: 'Reported past: habe / sei + Partizip II',
      text: `
Whatever past tense the speaker used (Perfekt, Präteritum or Plusquamperfekt), the report has only **one** past form: **habe / sei + Partizip II**. Choose the helper as in the Perfekt. A reported command appears as **solle**.
`,
      examples: [
        { de: 'Sie sagt, sie sei in Berlin gewesen.', en: 'She says she was in Berlin. ("Ich war in Berlin": sei + gewesen)' },
        { de: 'Die Zeitung berichtet, der Zug habe Verspätung gehabt.', en: 'The newspaper reports that the train was delayed. (habe + gehabt)' },
        { de: 'Der Arzt sagt, er solle mehr schlafen.', en: 'The doctor says he should sleep more. (solle = reported command)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-12-indirect-speech', note: 'The everyday way to report speech: dass + normal verb forms. Konjunktiv I is the formal alternative.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'Konjunktiv II (hätten, wären, würden) replaces Konjunktiv I in the plural.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The reported past uses habe / sei + the same Partizip II as the Perfekt.' },
    { topicId: 'b1-31-register-formal-informal', note: 'Konjunktiv I belongs to the formal, written register.' },
  ],
  edgeCases: [
    'Konjunktiv I is **not** past tense. *Er sagt, er **komme** morgen* reports a present or future plan.',
    'In the plural, reported speech uses Konjunktiv II: *Sie sagen, sie **hätten** keine Zeit* / *sie **würden** kommen*.',
    'The reported past has only one form: **habe / sei + Partizip II**, whether the original was Perfekt, Präteritum or Plusquamperfekt.',
    'Do not mix up **sei** (reported: someone said) with **wäre** (unreal: if he were). *Er sagt, er **sei** krank* reports; *Wenn er krank **wäre** …* imagines.',
    'You do not need to write Konjunktiv I at B1. *Er sagt, dass er krank **ist*** is always correct.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-12b-konjunktiv-1-ex01',
      prompt: 'Direct: "Ich bin müde." Report it formally: "Er sagt, er ___ müde."',
      options: ['sei', 'ist', 'wäre'],
      answer: 0,
      explanation: 'Without dass, formal indirect speech uses Konjunktiv I: sein → sei.',
    },
    {
      type: 'match',
      id: 'b1-12b-konjunktiv-1-ex02',
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
      id: 'b1-12b-konjunktiv-1-ex03',
      prompt: 'Which sentence reports what someone else said, rather than stating a fact?',
      options: ['Der Zug habe Verspätung.', 'Der Zug hat Verspätung.', 'Der Zug hatte Verspätung.'],
      answer: 0,
      explanation: 'habe is Konjunktiv I: it signals "someone said this". hat and hatte are normal forms that state a fact.',
    },
    {
      type: 'mc',
      id: 'b1-12b-konjunktiv-1-ex04',
      prompt: 'What does "Er sagt, er komme morgen." tell you?',
      options: ['He says he is coming tomorrow (a present or future plan).', 'He says he came yesterday.', 'He would come if he could.'],
      answer: 0,
      explanation: 'komme is Konjunktiv I of kommen. It is not a past form and not an unreal condition: it simply reports a plan.',
    },
    {
      type: 'order',
      id: 'b1-12b-konjunktiv-1-ex05',
      prompt: 'Build the sentence: "He says he is coming tomorrow." (formal, no dass)',
      words: ['morgen.', 'Er', 'komme', 'sagt,', 'er'],
      answer: ['Er sagt, er komme morgen.'],
      explanation: 'Without dass the reported clause keeps main-clause word order: er komme morgen. komme is Konjunktiv I.',
    },
    {
      type: 'mc',
      id: 'b1-12b-konjunktiv-1-ex06',
      prompt: 'Complete: "Sie sagen, sie ___ keine Zeit."',
      options: ['hätten', 'haben', 'hatten'],
      answer: 0,
      explanation: 'The Konjunktiv I form haben looks like the indicative, so German switches to Konjunktiv II: hätten.',
    },
    {
      type: 'fill',
      id: 'b1-12b-konjunktiv-1-ex07',
      prompt: 'Die Kinder sagen, sie ___ morgen kommen. (werden, reported speech, plural)',
      answer: ['würden'],
      explanation: 'In the plural, werden would look like the normal present, so the report uses Konjunktiv II: würden + kommen.',
    },
    {
      type: 'fill',
      id: 'b1-12b-konjunktiv-1-ex08',
      prompt: 'Die Zeitung berichtet, der Zug ___ Verspätung gehabt. (haben)',
      answer: ['habe'],
      explanation: 'The reported past is habe / sei + Partizip II. haben takes habe: habe … gehabt.',
    },
    {
      type: 'mc',
      id: 'b1-12b-konjunktiv-1-ex09',
      prompt: 'Direct: "Ich war in Berlin." Report it: "Sie sagt, sie ___ in Berlin gewesen."',
      options: ['sei', 'war', 'habe'],
      answer: 0,
      explanation: 'war becomes sei + gewesen: the past is reported with the Konjunktiv I helper plus Partizip II. sein takes sei, not habe.',
    },
    {
      type: 'mc',
      id: 'b1-12b-konjunktiv-1-ex10',
      prompt: 'Complete the news sentence: "Der Minister sagte, er ___ nichts davon gewusst."',
      options: ['habe', 'sei', 'hat'],
      answer: 0,
      explanation: 'wissen takes haben, so the reported past is habe + gewusst. sei is the wrong helper; hat would state it as a fact.',
    },
  ],
};

export default topic;
