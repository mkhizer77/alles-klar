import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-12-indirect-speech',
  level: 'B1',
  unit: 5,
  order: 16,
  title: 'Indirect speech with dass',
  germanTerm: 'indirekte Rede',
  tags: ['indirect speech', 'dass', 'reporting', 'ob', 'sollen'],
  summary: 'To report what someone said, everyday German uses dass + the normal verb forms; the pronouns shift to the new speaker, questions take ob or a W-word, commands take sollen.',
  steps: [
    {
      title: 'Reporting with dass',
      text: `
**Direct speech** quotes the exact words: *Er sagt: "Ich bin müde."* **Indirect speech** (*indirekte Rede*) reports them: *He says that he is tired.*

In conversation you simply use a **dass** clause with the **normal verb forms** (the *Indikativ*). The verb goes to the end. This is correct and very common; for B1 speaking and writing it is all you need.
`,
      examples: [
        { de: 'Er sagt, dass er müde ist.', en: 'He says that he is tired. (dass + normal form, verb at the end)' },
        { de: 'Anna sagt, dass sie keine Zeit hat.', en: 'Anna says that she has no time.' },
        { de: 'Die Nachbarn erzählen, dass sie umziehen.', en: 'The neighbours say that they are moving.' },
      ],
    },
    {
      title: 'Shift the pronouns',
      text: `
The speaker said **ich** and **mein**; when you report it, the words must fit the **new** point of view: *ich → er / sie*, *mein → sein / ihr*, *wir → sie*. The verb ending changes with the pronoun: *habe → hat*.
`,
      examples: [
        { de: 'Sie sagt, dass sie ihren Job liebt.', en: 'She says that she loves her job. ("Ich liebe meinen Job": ich → sie, meinen → ihren)' },
        { de: 'Er sagt, dass er Hunger hat.', en: 'He says that he is hungry. ("Ich habe Hunger": habe → hat)' },
        { de: 'Sie sagen, dass sie morgen nach Berlin fahren.', en: 'They say that they are going to Berlin tomorrow. (wir → sie)' },
      ],
    },
    {
      title: 'Time words can shift too',
      text: `
If you report something **later**, time and place words change with the point of view: **heute** (today) becomes **an diesem Tag**, **morgen** becomes **am nächsten Tag**, **hier** becomes **dort**. If you report straight away, nothing changes.
`,
      examples: [
        { de: 'Er sagte, dass er am nächsten Tag keine Zeit hat.', en: 'He said that he had no time the next day. ("Ich habe morgen keine Zeit", reported later)' },
        { de: 'Sie sagt, dass sie morgen kommt.', en: 'She says that she is coming tomorrow. (reported straight away: morgen stays)' },
      ],
    },
    {
      title: 'Reporting the past',
      text: `
If the speaker talked about the past, keep the past form you know: **dass … war** or **dass … hat / ist + Partizip II**. With *dass* the helper goes to the very end.
`,
      examples: [
        { de: 'Sie sagt, dass sie in Berlin war.', en: 'She says that she was in Berlin. ("Ich war in Berlin")' },
        { de: 'Er sagt, dass er den Film gesehen hat.', en: 'He says that he has seen the film. (hat at the end)' },
        { de: 'Sie erzählen, dass sie spät angekommen sind.', en: 'They say that they arrived late.' },
      ],
    },
    {
      title: 'Reporting questions: ob and W-words',
      text: `
A **yes/no question** is reported with **ob** (whether). A **W-question** keeps its question word (*wo, wann, warum …*). In both cases the verb goes to the end, and the pronouns shift as before.
`,
      examples: [
        { de: 'Er fragt, ob ich morgen komme.', en: 'He asks whether I am coming tomorrow. ("Kommst du morgen?")' },
        { de: 'Sie fragt, wo ich wohne.', en: 'She asks where I live. ("Wo wohnst du?")' },
        { de: 'Ich frage ihn, ob er Zeit hat.', en: 'I ask him whether he has time.' },
      ],
    },
    {
      title: 'Reporting commands: sollen',
      text: `
A **command** (*Geh nach Hause!*) is reported with **sollen** (should, be supposed to). The person who gets the order becomes the subject, *sollen* takes the matching ending, and the infinitive goes to the end.
`,
      examples: [
        { de: 'Sie sagt, ich soll nach Hause gehen.', en: 'She says I should go home. ("Geh nach Hause!")' },
        { de: 'Der Arzt sagt, dass er mehr schlafen soll.', en: 'The doctor says that he should sleep more. ("Schlafen Sie mehr!")' },
        { de: 'Mama sagt, wir sollen leise sein.', en: 'Mum says we should be quiet. ("Seid leise!")' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'dass clauses with the verb at the end are the everyday way to report speech.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'Reported questions use ob or a W-word, as learned there.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The reported past uses the Perfekt you know: dass er den Film gesehen hat.' },
    { topicId: 'b1-12b-konjunktiv-1', note: 'News and formal reports drop dass and use Konjunktiv I: Er sagt, er sei müde.' },
    { topicId: 'b1-31-register-formal-informal', note: 'dass + normal forms is the everyday register; Konjunktiv I is the formal, written one.' },
  ],
  edgeCases: [
    'Shift the pronouns: "Ich liebe meinen Job" → *Sie sagt, dass sie **ihren** Job liebt*, not *dass sie meinen Job liebt*.',
    'With **dass** the normal verb form is fine: *Er sagt, dass er krank **ist***. You do not need a special form in everyday German.',
    'A yes/no question needs **ob**, not *wenn*: *Er fragt, **ob** ich komme*. *wenn* means "if / when" in a condition.',
    'A reported command uses **sollen**, not the imperative: *Sie sagt, ich **soll** gehen*, not *Sie sagt, geh!*',
    'The verb ending follows the new pronoun: "Ich habe Hunger" → *Er sagt, dass er Hunger **hat***, not *habe hat*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex01',
      prompt: 'Direct: "Ich habe Hunger." Report it: "Er sagt, dass er Hunger ___."',
      options: ['hat', 'hast', 'haben'],
      answer: 0,
      explanation: 'ich becomes er, so the verb takes the er-ending: hat. After dass it goes to the end.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex02',
      prompt: 'Sie sagt, dass sie keine Zeit ___. (haben)',
      answer: ['hat', 'habe'],
      explanation: 'With dass the normal form hat is all you need in everyday German. The formal Konjunktiv I form habe is also correct.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex03',
      prompt: 'Direct: "Ich liebe meinen Job." Report it: "Sie sagt, dass sie ___ Job liebt." (her)',
      answer: ['ihren'],
      explanation: 'The pronouns shift to the new speaker: ich → sie, meinen → ihren. The verb stays in the normal present form after dass.',
    },
    {
      type: 'order',
      id: 'b1-12-indirect-speech-ex04',
      prompt: 'Build the sentence: "He says that he has no time."',
      words: ['hat.', 'dass', 'Er', 'Zeit', 'sagt,', 'keine', 'er'],
      answer: ['Er sagt, dass er keine Zeit hat.'],
      explanation: 'dass starts the reported clause and sends hat to the end.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex05',
      prompt: 'Direct: "Wir fahren morgen nach Berlin." Report it: "Sie sagen, dass sie morgen nach Berlin ___." (fahren)',
      answer: ['fahren'],
      explanation: 'wir becomes sie (they), so the verb keeps the plural ending: fahren. It goes to the end of the dass clause.',
    },
    {
      type: 'fill',
      id: 'b1-12-indirect-speech-ex06',
      prompt: 'Direct: "Ich war in Berlin." Report it: "Sie sagt, dass sie in Berlin ___." (sein, past)',
      answer: ['war'],
      explanation: 'In everyday indirect speech the past form stays: war, at the end of the dass clause.',
    },
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex07',
      prompt: 'Direct question: "Kommst du morgen?" Report it: "Er fragt, ___ ich morgen komme."',
      options: ['ob', 'dass', 'wenn'],
      answer: 0,
      explanation: 'A yes/no question is reported with ob (whether).',
    },
    {
      type: 'mc',
      id: 'b1-12-indirect-speech-ex08',
      prompt: 'Direct question: "Wo wohnst du?" Report it: "Sie fragt, ___ ich wohne."',
      options: ['wo', 'ob', 'dass'],
      answer: 0,
      explanation: 'A W-question keeps its question word: wo. ob is only for yes/no questions.',
    },
    {
      type: 'order',
      id: 'b1-12-indirect-speech-ex09',
      prompt: 'Build the sentence: "She asks whether I have time tomorrow."',
      words: ['Zeit', 'fragt,', 'ich', 'habe.', 'Sie', 'morgen', 'ob'],
      answer: ['Sie fragt, ob ich morgen Zeit habe.'],
      explanation: 'ob starts the reported question and sends habe to the end.',
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
      prompt: 'Translate: "He says that he is ill."',
      answer: ['Er sagt, dass er krank ist.', 'Er sagt, dass er krank sei.', 'Er sagt, er sei krank.', 'Er sagt, er ist krank.'],
      hint: 'krank = ill',
      explanation: 'dass + normal form (ist) is the everyday way. The formal Konjunktiv I (sei) is also correct; the next topic shows it.',
    },
  ],
};

export default topic;
