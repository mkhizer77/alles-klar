import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-32-opinions-speaking',
  level: 'B1',
  unit: 10,
  order: 32,
  title: 'Giving opinions, agreeing, disagreeing, structuring a talk',
  germanTerm: 'Meinung äußern, Sprechen B1',
  tags: ['speaking', 'opinions', 'discussion', 'presentation', 'phrases'],
  summary: 'A set of fixed phrases lets you give your opinion (Meiner Meinung nach …), agree or disagree politely (Da stimme ich dir zu / Das sehe ich anders) and build a short talk with a clear Einleitung, Hauptteil and Schluss.',
  explanation: `
### Why phrases, not grammar

The B1 speaking exam has three parts: planning something together, giving a **short talk** (*Präsentation*) and **discussing** it with your partner. Nobody can invent elegant sentences under pressure, so experienced speakers use **fixed phrases** as a frame and put their content inside. This topic gives you that frame.

### Giving your opinion

| Phrase | Word order after it | Example |
|---|---|---|
| **Meiner Meinung nach** … | adverbial: verb comes **next** | Meiner Meinung nach **ist** das zu teuer. |
| **Ich bin der Meinung / Ansicht, dass** … | dass-clause: verb at the **end** | Ich bin der Ansicht, dass Sport wichtig **ist**. |
| **Ich finde / glaube / denke, dass** … | dass-clause | Ich finde, dass das eine gute Idee **ist**. |
| **Ich halte … für** + adjective | normal | Ich halte das **für** richtig. |
| **Für mich ist** … | normal | Für mich ist Familie das Wichtigste. |
| **Ich bin (nicht) davon überzeugt, dass** … | dass-clause | Ich bin davon überzeugt, dass es funktioniert. |

Note the difference: *Meiner Meinung nach* is a position-1 phrase, so the verb follows immediately. *Ich bin der Meinung, dass* opens a subordinate clause.

### Agreeing and disagreeing

| Agreeing | Partly agreeing | Disagreeing |
|---|---|---|
| Da stimme ich dir / Ihnen zu. | Das stimmt zwar, aber … | Da bin ich anderer Meinung. |
| Das sehe ich genauso. | Einerseits …, andererseits … | Das sehe ich anders. |
| Du hast recht. / Da hast du recht. | Da hast du zwar recht, aber … | Das stimmt (so) nicht. |
| Das stimmt. / Genau! | Das kommt darauf an. | Ich bin nicht (ganz) einverstanden. |
| Ich bin ganz deiner Meinung. | Ich bin mir nicht sicher, ob … | Das kann ich mir nicht vorstellen. |

In the exam, **partial agreement** is the most useful column: it shows you can weigh arguments. *Das stimmt zwar, aber …* is a complete, polite way to disagree.

### Structuring a short talk

A B1 talk is about three minutes and has three parts: **Einleitung** (introduction), **Hauptteil** (main part), **Schluss** (ending).

| Part | Job | Phrases |
|---|---|---|
| **Einleitung** | name the topic, say why | Ich möchte heute über … sprechen. / Mein Thema ist … / Ich habe dieses Thema gewählt, weil … |
| **Hauptteil** | own experience, situation in your country, pros and cons | Zuerst … / Außerdem … / Ein weiterer Punkt ist … / Ein Beispiel dafür ist … / In meinem Heimatland … / Ein Vorteil ist …, ein Nachteil ist … / Im Gegensatz dazu … |
| **Schluss** | summary, own opinion, thanks | Zusammenfassend kann man sagen, dass … / Abschließend möchte ich sagen, dass … / Meiner Meinung nach … / Vielen Dank für eure / Ihre Aufmerksamkeit. Habt ihr Fragen? |

Signposting words (*zuerst, außerdem, abschließend*) are adverbs in position 1, so the verb follows them directly: *Außerdem **ist** Sport gesund.*

### Why it matters

These phrases do three things at once: they buy you thinking time, they make your talk sound organised, and they show the examiner exactly which part you are in. Learn one or two phrases from each box by heart, say them aloud, and you will walk into the speaking exam with a ready-made structure.
`,
  examples: [
    { de: 'Meiner Meinung nach ist das Auto zu teuer.', en: 'In my opinion the car is too expensive. (verb directly after the phrase)' },
    { de: 'Ich bin der Ansicht, dass jeder eine Fremdsprache lernen sollte.', en: 'I am of the opinion that everyone should learn a foreign language. (dass: verb at the end)' },
    { de: 'Da stimme ich dir zu.', en: 'I agree with you there. (zustimmen + Dative)' },
    { de: 'Das stimmt zwar, aber ich sehe auch Nachteile.', en: 'That is true, but I also see disadvantages. (partial agreement)' },
    { de: 'Da bin ich anderer Meinung.', en: 'I have a different opinion there. (polite disagreement)' },
    { de: 'Ich möchte heute über mein Hobby sprechen.', en: 'Today I would like to talk about my hobby. (Einleitung)' },
    { de: 'Ein weiterer Punkt ist, dass Sport Stress abbaut.', en: 'A further point is that sport reduces stress. (Hauptteil)' },
    { de: 'Zusammenfassend kann man sagen, dass Sport wichtig ist.', en: 'In summary one can say that sport is important. (Schluss)' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'Ich finde, dass … and Ich bin der Meinung, dass … are dass-clauses with the verb at the end.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'zuerst, außerdem and abschließend are position-1 adverbs: the verb follows them.' },
    { topicId: 'b1-17-two-part-conjunctions', note: 'einerseits … andererseits and zwar … aber are the two-part connectors for weighing arguments.' },
    { topicId: 'b1-18-cause-consequence-concession', note: 'Giving reasons with weil, da and deshalb is the heart of every argument.' },
    { topicId: 'b1-31-register-formal-informal', note: 'In the exam you address your partner with du and the examiners with Sie; choose dir / Ihnen accordingly.' },
  ],
  edgeCases: [
    '*Meiner Meinung nach **ist** das …* – the verb comes straight after the phrase. Not *Meiner Meinung nach das ist …*',
    '*zustimmen* takes the **Dative**: *Ich stimme **dir** / **Ihnen** zu*, never *dich*.',
    '*recht haben* is written small (*Du hast recht*); the capital *Recht* is also accepted in current spelling, but keep it consistent.',
    '*Das stimmt nicht* on its own can sound blunt. Soften it: *Das stimmt so nicht* or *Da bin ich anderer Meinung*.',
    'Do not end a talk abruptly. Always close with a summary sentence and thanks: *Vielen Dank für eure Aufmerksamkeit.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex01',
      prompt: 'Complete: "Meiner Meinung nach ___ zu teuer."',
      options: ['ist das Auto', 'das Auto ist', 'dass das Auto ist'],
      answer: 0,
      explanation: 'Meiner Meinung nach fills position 1, so the verb ist must come next, then the subject.',
    },
    {
      type: 'fill',
      id: 'b1-32-opinions-speaking-ex02',
      prompt: 'Ich bin der ___, dass Sport sehr wichtig ist. (opinion)',
      answer: ['Ansicht', 'Meinung', 'Auffassung'],
      explanation: 'Ich bin der Meinung / Ansicht / Auffassung, dass … all mean "I am of the opinion that". The dass-clause puts the verb at the end.',
    },
    {
      type: 'match',
      id: 'b1-32-opinions-speaking-ex03',
      prompt: 'Match each phrase with its function.',
      pairs: [
        ['Da stimme ich dir zu.', 'agreeing'],
        ['Das sehe ich anders.', 'disagreeing'],
        ['Meiner Meinung nach …', 'giving an opinion'],
        ['Ich möchte heute über … sprechen.', 'starting a talk'],
        ['Zusammenfassend kann man sagen, …', 'ending a talk'],
        ['Einerseits …, andererseits …', 'weighing both sides'],
      ],
      explanation: 'Each function has its own set of phrases. Knowing the function helps you pick the right one quickly in the exam.',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex04',
      prompt: 'Which phrase expresses disagreement?',
      options: ['Das stimmt.', 'Da bin ich anderer Meinung.', 'Genau!'],
      answer: 1,
      explanation: 'anderer Meinung sein = to have a different opinion. Das stimmt and Genau both agree.',
    },
    {
      type: 'order',
      id: 'b1-32-opinions-speaking-ex05',
      prompt: 'Build the sentence: "I am of the opinion that sport is important."',
      words: ['der', 'bin', 'Ich', 'dass', 'Meinung,', 'wichtig', 'Sport', 'ist.'],
      answer: ['Ich bin der Meinung, dass Sport wichtig ist.'],
      explanation: 'Main clause Ich bin der Meinung, then a comma and the dass-clause with the verb ist at the end.',
    },
    {
      type: 'fill',
      id: 'b1-32-opinions-speaking-ex06',
      prompt: 'Ich halte das ___ eine gute Idee. (consider)',
      answer: ['für'],
      explanation: 'halten für + Akkusativ = to consider something to be. Ich halte das für eine gute Idee.',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex07',
      prompt: 'What is the correct order of the parts of a short talk?',
      options: ['Einleitung – Hauptteil – Schluss', 'Hauptteil – Einleitung – Schluss', 'Schluss – Hauptteil – Einleitung'],
      answer: 0,
      explanation: 'Introduce the topic (Einleitung), develop it with examples and arguments (Hauptteil), then summarise and thank (Schluss).',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex08',
      prompt: 'Which phrase belongs to the Schluss of a talk?',
      options: ['Abschließend möchte ich sagen, …', 'Mein Thema heute ist …', 'Ein weiteres Beispiel ist …'],
      answer: 0,
      explanation: 'abschließend = in conclusion. Mein Thema heute ist opens the talk; Ein weiteres Beispiel belongs to the Hauptteil.',
    },
    {
      type: 'order',
      id: 'b1-32-opinions-speaking-ex09',
      prompt: 'Build the closing sentence: "In summary one can say that the topic is important."',
      words: ['kann', 'Zusammenfassend', 'sagen,', 'man', 'das', 'dass', 'wichtig', 'Thema', 'ist.'],
      answer: ['Zusammenfassend kann man sagen, dass das Thema wichtig ist.'],
      explanation: 'Zusammenfassend is position 1, so kann follows, then man sagen. The dass-clause ends with ist.',
    },
    {
      type: 'translate',
      id: 'b1-32-opinions-speaking-ex10',
      prompt: 'Translate: "I agree with you." (use du)',
      answer: ['Da stimme ich dir zu.', 'Ich stimme dir zu.', 'Ich bin deiner Meinung.', 'Ich bin ganz deiner Meinung.', 'Da hast du recht.'],
      hint: 'zustimmen + Dativ (dir)',
      explanation: 'zustimmen is separable and takes the Dative: Ich stimme dir zu. Da at the start means "on that point".',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex11',
      prompt: 'Complete the partial agreement: "Das stimmt ___, aber ich sehe auch Nachteile."',
      options: ['zwar', 'nie', 'weder'],
      answer: 0,
      explanation: 'zwar … aber admits the point first and then adds the objection. It is the politest way to disagree.',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex12',
      prompt: 'Put these three sentences of a short talk in order: (1) Vielen Dank für eure Aufmerksamkeit. (2) Heute möchte ich über mein Hobby sprechen. (3) Außerdem ist Sport gut für die Gesundheit.',
      options: ['2 – 3 – 1', '1 – 2 – 3', '3 – 2 – 1'],
      answer: 0,
      explanation: 'Sentence 2 introduces the topic (Einleitung), sentence 3 adds an argument (Hauptteil), sentence 1 thanks the listeners (Schluss).',
    },
  ],
};

export default topic;
