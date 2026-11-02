import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-32-opinions-speaking',
  level: 'B1',
  unit: 10,
  order: 43,
  title: 'Giving opinions, agreeing, disagreeing',
  germanTerm: 'Meinung äußern',
  tags: ['speaking', 'opinions', 'discussion', 'phrases'],
  summary: 'A small set of fixed phrases lets you give your opinion (Meiner Meinung nach …), agree (Da stimme ich dir zu) and disagree politely (Das sehe ich anders), then back it up with a reason.',
  steps: [
    {
      title: 'Why fixed phrases',
      text: `
In the speaking exam you plan something with a partner and **discuss** a topic. Nobody invents elegant sentences under pressure, so good speakers use **fixed phrases** as a frame and put their content inside.

The simplest opinion phrase is **Ich finde, dass …** with the verb at the end of the *dass*-clause.
`,
      examples: [
        { de: 'Ich finde, dass das eine gute Idee ist.', en: 'I think that is a good idea. (dass: verb at the end)' },
        { de: 'Meiner Meinung nach ist das zu teuer.', en: 'In my opinion that is too expensive.' },
        { de: 'Da stimme ich dir zu.', en: 'I agree with you there.' },
      ],
    },
    {
      title: 'Giving your opinion',
      text: `
| Phrase | Word order after it |
|---|---|
| **Meiner Meinung nach** … | position 1, so the verb comes **next** |
| **Ich bin der Meinung / Ansicht, dass** … | dass-clause: verb at the **end** |
| **Ich glaube / denke, dass** … | dass-clause |
| **Ich halte … für** + adjective | normal |
| **Für mich ist** … | normal |

Watch the difference: *Meiner Meinung nach **ist** das …* but *Ich bin der Meinung, dass das … **ist**.*
`,
      examples: [
        { de: 'Meiner Meinung nach ist das Auto zu teuer.', en: 'In my opinion the car is too expensive. (verb right after the phrase)' },
        { de: 'Ich bin der Ansicht, dass jeder eine Fremdsprache lernen sollte.', en: 'I am of the opinion that everyone should learn a foreign language. (verb at the end)' },
        { de: 'Ich halte das für richtig.', en: 'I consider that right. (halten für)' },
        { de: 'Für mich ist Familie das Wichtigste.', en: 'For me family is the most important thing.' },
      ],
    },
    {
      title: 'Agreeing',
      text: `
To agree, use **Da stimme ich dir zu** (*zustimmen* takes the **Dative**: *dir* to your partner, *Ihnen* to the examiners), **Das sehe ich genauso**, **Du hast recht** or simply **Das stimmt** / **Genau**. **Ich bin ganz deiner Meinung** is the warmest form.
`,
      examples: [
        { de: 'Da stimme ich Ihnen zu.', en: 'I agree with you there. (Sie-form: Ihnen)' },
        { de: 'Das sehe ich genauso.', en: 'I see it exactly the same way.' },
        { de: 'Da hast du recht.', en: 'You are right there.' },
        { de: 'Ich bin ganz deiner Meinung.', en: 'I completely agree with you.' },
      ],
    },
    {
      title: 'Disagreeing politely',
      text: `
A plain *Das stimmt nicht* can sound blunt. Soften it: **Da bin ich anderer Meinung**, **Das sehe ich anders**, **Das stimmt so nicht**, **Ich bin nicht ganz einverstanden**. These disagree clearly but stay friendly, which is what the exam rewards.
`,
      examples: [
        { de: 'Da bin ich anderer Meinung.', en: 'I have a different opinion there.' },
        { de: 'Das sehe ich anders.', en: 'I see that differently.' },
        { de: 'Ich bin damit nicht ganz einverstanden.', en: 'I do not quite agree with that.' },
        { de: 'Das kann ich mir nicht vorstellen.', en: 'I cannot imagine that.' },
      ],
    },
    {
      title: 'Partly agreeing',
      text: `
The most useful phrases admit the point first and then object: **Das stimmt zwar, aber …**, **Da hast du zwar recht, aber …**, **Einerseits …, andererseits …**, **Das kommt darauf an**. They show that you can weigh arguments, and they are the politest way to disagree.
`,
      examples: [
        { de: 'Das stimmt zwar, aber ich sehe auch Nachteile.', en: 'That is true, but I also see disadvantages. (zwar … aber)' },
        { de: 'Einerseits ist das praktisch, andererseits ist es teuer.', en: 'On the one hand it is practical, on the other it is expensive.' },
        { de: 'Das kommt darauf an.', en: 'That depends.' },
      ],
    },
    {
      title: 'Giving a reason',
      text: `
An opinion needs a reason. Add it with **weil** (verb at the end), with **denn** (normal word order) or in a new sentence with **deshalb** (verb next). **Ein Beispiel dafür ist …** adds an example.
`,
      examples: [
        { de: 'Ich bin dagegen, weil es zu teuer ist.', en: 'I am against it because it is too expensive. (weil: verb at the end)' },
        { de: 'Das finde ich gut, denn man spart Zeit.', en: 'I like that, because you save time. (denn: normal order)' },
        { de: 'Sport baut Stress ab. Deshalb finde ich ihn wichtig.', en: 'Sport reduces stress. That is why I find it important.' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-32b-structuring-a-talk', note: 'The sibling topic: the phrases for the short talk in the same exam part.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'Ich finde, dass … and Ich bin der Meinung, dass … are dass-clauses with the verb at the end.' },
    { topicId: 'b1-17-two-part-conjunctions', note: 'einerseits … andererseits and zwar … aber are the two-part connectors for weighing arguments.' },
    { topicId: 'b1-18-cause-consequence-concession', note: 'Giving reasons with weil, denn and deshalb is the heart of every argument.' },
    { topicId: 'b1-31-register-formal-informal', note: 'In the exam you address your partner with du and the examiners with Sie; choose dir / Ihnen accordingly.' },
  ],
  edgeCases: [
    '**Meiner Meinung nach ist das …**: the verb comes straight after the phrase. Not *Meiner Meinung nach das ist …*',
    '**zustimmen** takes the Dative: *Ich stimme **dir** / **Ihnen** zu*, never *dich*.',
    '**recht haben** is written small (*Du hast recht*); the capital *Recht* is also accepted in current spelling, but keep it consistent.',
    '**Das stimmt nicht** on its own can sound blunt. Soften it: *Das stimmt so nicht* or *Da bin ich anderer Meinung*.',
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
        ['Das stimmt zwar, aber …', 'partly agreeing'],
        ['Einerseits …, andererseits …', 'weighing both sides'],
        ['Ich bin dagegen, weil …', 'giving a reason'],
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
      type: 'fill',
      id: 'b1-32-opinions-speaking-ex05',
      prompt: 'Ich stimme ___ zu. (you, du-form)',
      answer: ['dir'],
      explanation: 'zustimmen takes the Dative, so du becomes dir: Ich stimme dir zu. With the examiners it is Ihnen.',
    },
    {
      type: 'fill',
      id: 'b1-32-opinions-speaking-ex06',
      prompt: 'Ich halte das ___ eine gute Idee. (consider)',
      answer: ['für'],
      explanation: 'halten für + Akkusativ = to consider something to be. Ich halte das für eine gute Idee.',
    },
    {
      type: 'order',
      id: 'b1-32-opinions-speaking-ex07',
      prompt: 'Build the sentence: "I am of the opinion that sport is important."',
      words: ['der', 'bin', 'Ich', 'dass', 'Meinung,', 'wichtig', 'Sport', 'ist.'],
      answer: ['Ich bin der Meinung, dass Sport wichtig ist.'],
      explanation: 'Main clause Ich bin der Meinung, then a comma and the dass-clause with the verb ist at the end.',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex08',
      prompt: 'Complete the partial agreement: "Das stimmt ___, aber ich sehe auch Nachteile."',
      options: ['zwar', 'nie', 'weder'],
      answer: 0,
      explanation: 'zwar … aber admits the point first and then adds the objection. It is the politest way to disagree.',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex09',
      prompt: 'Complete: "Einerseits ist das praktisch, ___ ist es teuer."',
      options: ['andererseits', 'außerdem', 'deshalb'],
      answer: 0,
      explanation: 'einerseits … andererseits = on the one hand … on the other hand. It weighs two sides; außerdem would only add a point.',
    },
    {
      type: 'fill',
      id: 'b1-32-opinions-speaking-ex10',
      prompt: 'Ich bin dagegen, ___ es zu teuer ist. (because)',
      answer: ['weil', 'da'],
      explanation: 'weil (or da) introduces the reason and sends the verb to the end: … weil es zu teuer ist.',
    },
    {
      type: 'mc',
      id: 'b1-32-opinions-speaking-ex11',
      prompt: 'Your partner says something you do not agree with. Which reply is polite?',
      options: ['Das stimmt so nicht.', 'Das ist Quatsch.', 'Nein, falsch.'],
      answer: 0,
      explanation: 'Das stimmt so nicht disagrees clearly but softly. Quatsch and a bare Nein, falsch sound rude in a discussion.',
    },
    {
      type: 'translate',
      id: 'b1-32-opinions-speaking-ex12',
      prompt: 'Translate: "I agree with you." (use du)',
      answer: ['Da stimme ich dir zu.', 'Ich stimme dir zu.', 'Ich bin deiner Meinung.', 'Ich bin ganz deiner Meinung.', 'Da hast du recht.'],
      hint: 'zustimmen + Dativ (dir)',
      explanation: 'zustimmen is separable and takes the Dative: Ich stimme dir zu. Da at the start means "on that point".',
    },
  ],
};

export default topic;
