import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-24-futur-2-probability',
  level: 'B1',
  unit: 8,
  order: 34,
  title: 'Futur II and expressing probability',
  germanTerm: 'Futur II, Vermutung',
  tags: ['verbs', 'tenses', 'future', 'probability', 'werden'],
  summary: 'German expresses guesses with adverbs (wahrscheinlich, wohl, vielleicht, bestimmt), with könnte and with werden + wohl (Er wird wohl krank sein); Futur II (Er wird den Zug verpasst haben) is a form to recognise, not to produce.',
  steps: [
    {
      title: 'What guessing words are for',
      text: `
Often you are not sure about something and want to say "probably" or "I suppose". German has a few simple tools for that. B1 speaking tasks (describing a picture, guessing what is going on) use them all the time.

The simplest tool is an **adverb** like **wahrscheinlich** (probably). A second tool is **werden + wohl**.
`,
      examples: [
        { de: 'Er ist wahrscheinlich krank.', en: 'He is probably ill. (adverb)' },
        { de: 'Er wird wohl krank sein.', en: 'He is probably ill. (werden + wohl)' },
      ],
    },
    {
      title: 'The adverbs: how sure are you?',
      text: `
Pick the adverb that matches how sure you really are.

| How sure | Adverbs |
|---|---|
| almost certain | **bestimmt**, **sicher** |
| probably | **wahrscheinlich**, **wohl**, **vermutlich** |
| maybe | **vielleicht**, **möglicherweise** |
| probably not | **wohl nicht**, **kaum** |
`,
      examples: [
        { de: 'Sie kommt bestimmt.', en: 'She is certainly coming.' },
        { de: 'Er ist wahrscheinlich im Büro.', en: 'He is probably in the office.' },
        { de: 'Vielleicht regnet es morgen.', en: 'Maybe it will rain tomorrow.' },
        { de: 'Das stimmt kaum.', en: 'That is hardly true. (probably not)' },
      ],
    },
    {
      title: 'Where the adverb goes',
      text: `
*wahrscheinlich*, *vielleicht* and *bestimmt* can **start** the sentence; then the verb comes **next**, in position 2. They can also sit in the **middle**, after the verb.

**wohl** is different: it stays in the middle. Never start a sentence with *wohl*.
`,
      examples: [
        { de: 'Wahrscheinlich ist sie zu Hause.', en: 'She is probably at home. (position 1, verb next)' },
        { de: 'Sie ist wahrscheinlich zu Hause.', en: 'She is probably at home. (in the middle)' },
        { de: 'Er ist wohl krank.', en: 'He is probably ill. (wohl only in the middle)' },
      ],
    },
    {
      title: 'werden + wohl: a guess about now',
      text: `
*werden* + infinitive is normally the future. With **wohl**, *wahrscheinlich* or *sicher* it becomes a **guess about the present**: "I suppose he is …".

How do you know it is a guess and not the future? The little word *wohl* and the situation tell you. Without *wohl*, *Er wird kommen* simply means "he will come".
`,
      examples: [
        { de: 'Er wird wohl im Stau stehen.', en: 'He is probably stuck in traffic. (right now)' },
        { de: 'Das wird schon stimmen.', en: 'That is probably right.' },
        { de: 'Die Frau auf dem Bild wird wohl die Chefin sein.', en: 'The woman in the picture is probably the boss.' },
      ],
    },
    {
      title: 'könnte: could be',
      text: `
**könnte** is the *Konjunktiv II* (the "would / could" form) of *können*. It marks a **possibility**: something could be true, but you are not sure. The infinitive goes to the end.
`,
      examples: [
        { de: 'Das könnte stimmen.', en: 'That could be true.' },
        { de: 'Sie könnte im Büro sein.', en: 'She could be in the office.' },
        { de: 'Das könnte ein Fehler sein.', en: 'That could be a mistake.' },
      ],
    },
    {
      title: 'A guess about the past',
      text: `
To say that something **probably happened**, use the **Perfekt** with an adverb: *wahrscheinlich*, *wohl* or *vielleicht*. That is all you need at B1 for a guess about the past.
`,
      examples: [
        { de: 'Er hat wahrscheinlich den Bus verpasst.', en: 'He has probably missed the bus. (Perfekt + adverb)' },
        { de: 'Wahrscheinlich hat sie den Zug verpasst.', en: 'She has probably missed the train. (adverb first, verb next)' },
        { de: 'Sie hat wohl vergessen anzurufen.', en: 'She has probably forgotten to call.' },
      ],
    },
    {
      title: 'Recognise Futur II and muss / dürfte',
      text: `
In texts you may see **Futur II**: *werden* + Partizip II + **haben / sein** at the end. It means "will have done" or, more often, "has probably done". Recognise the shape; you do not need to use it. The same goes for **muss** (must be) and **dürfte** (is probably) as guesses: both are B2 forms.
`,
      examples: [
        { de: 'Er wird den Zug verpasst haben.', en: 'He has probably missed the train. (Futur II: recognise only)' },
        { de: 'Bis Freitag werde ich den Bericht geschrieben haben.', en: 'By Friday I will have written the report. (Futur II)' },
        { de: 'Er muss krank sein.', en: 'He must be ill. (guess with muss: recognise only)' },
        { de: 'Sie dürfte 40 sein.', en: 'She is probably 40. (guess with dürfte: recognise only)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-19-futur-1', note: 'werden + infinitive is the future; with wohl it becomes a guess about the present.' },
    { topicId: 'b1-23-werden', note: 'werden as a helper verb is job 2 of werden.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'könnte is the Konjunktiv II of können, used here for "could be".' },
    { topicId: 'a1-31-perfekt-haben', note: 'A guess about the past is simply the Perfekt plus wahrscheinlich or wohl.' },
    { topicId: 'b1-22-brauchen-zu-scheinen', note: 'scheinen zu is another way of saying that something seems likely.' },
  ],
  edgeCases: [
    '**wohl** in the middle of the sentence means "probably". Do not put it at the start: *Er ist wohl krank*, not *Wohl ist er krank*.',
    '**Er wird wohl krank sein** is a guess about **now**, not about the future. Without *wohl*, *Er wird krank sein* would sound like a prediction.',
    'For a guess about the **past**, use the Perfekt: *Er hat wahrscheinlich den Bus verpasst*. Futur II (**Er wird den Bus verpasst haben**) means the same; recognise it, but you do not need to produce it.',
    '**könnte** here means "could be" (possibility), not "was able to". *Das könnte stimmen* = that may well be true.',
    '**bestimmt** is strong (almost certain), **vielleicht** is weak (maybe). Choose the adverb that matches how sure you really are.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex01',
      prompt: 'What does "Er wird wohl im Stau stehen." mean?',
      options: ['He is probably in a traffic jam right now.', 'He will definitely be in a traffic jam tomorrow.', 'He was in a traffic jam.'],
      answer: 0,
      explanation: 'werden + wohl + infinitive expresses a guess about the present, not a prediction about the future.',
    },
    {
      type: 'fill',
      id: 'b1-24-futur-2-probability-ex02',
      prompt: 'Sie ist ___ schon zu Hause. (probably)',
      answer: ['wahrscheinlich', 'wohl', 'vermutlich', 'sicher', 'bestimmt'],
      explanation: 'wahrscheinlich, wohl and vermutlich all mean "probably" and sit in the middle of the sentence after the verb.',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex03',
      prompt: 'Which word shows that the speaker is almost certain?',
      options: ['bestimmt', 'vielleicht', 'kaum'],
      answer: 0,
      explanation: 'bestimmt = certainly. vielleicht = maybe, kaum = hardly (probably not).',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex04',
      prompt: 'Complete the guess about now: "Er ___ wohl krank sein."',
      options: ['wird', 'ist', 'hat'],
      answer: 0,
      explanation: 'werden + wohl + infinitive: Er wird wohl krank sein = he is probably ill. ist would need no sein at the end.',
    },
    {
      type: 'order',
      id: 'b1-24-futur-2-probability-ex05',
      prompt: 'Build the sentence: "He is probably in the office." (use werden + wohl)',
      words: ['wohl', 'Er', 'im', 'wird', 'sein.', 'Büro'],
      answer: ['Er wird wohl im Büro sein.'],
      explanation: 'wird in position 2, wohl right after it, the place in the middle and the infinitive sein at the end.',
    },
    {
      type: 'match',
      id: 'b1-24-futur-2-probability-ex06',
      prompt: 'Match each word with its degree of certainty.',
      pairs: [
        ['bestimmt', 'certainly'],
        ['wahrscheinlich', 'probably'],
        ['wohl', 'I suppose'],
        ['vielleicht', 'maybe'],
        ['kaum', 'hardly'],
      ],
      explanation: 'bestimmt is the strongest, then wahrscheinlich and wohl, then vielleicht; kaum points to "probably not".',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex07',
      prompt: 'Which sentence is a guess about the present?',
      options: ['Sie wird wohl müde sein.', 'Sie wird morgen kommen.', 'Sie ist müde.'],
      answer: 0,
      explanation: 'wohl turns werden + infinitive into a guess about now. Sie wird morgen kommen is a plain future; Sie ist müde is a fact.',
    },
    {
      type: 'fill',
      id: 'b1-24-futur-2-probability-ex08',
      prompt: 'Das ___ stimmen, aber ich bin nicht sicher. (könnte / could)',
      answer: ['könnte'],
      explanation: 'könnte (Konjunktiv II of können) marks a possibility: that could be true.',
    },
    {
      type: 'translate',
      id: 'b1-24-futur-2-probability-ex09',
      prompt: 'Translate: "She is probably at home."',
      answer: [
        'Sie ist wahrscheinlich zu Hause.',
        'Wahrscheinlich ist sie zu Hause.',
        'Sie ist wohl zu Hause.',
        'Sie wird wohl zu Hause sein.',
        'Sie ist vermutlich zu Hause.',
        'Vermutlich ist sie zu Hause.',
      ],
      hint: 'wahrscheinlich / wohl; zu Hause = at home',
      explanation: 'Either an adverb (wahrscheinlich, wohl) with the normal present tense, or werden + wohl + sein.',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex10',
      prompt: 'Which sentence is correct?',
      options: ['Er ist wohl krank.', 'Wohl ist er krank.', 'Er wohl ist krank.'],
      answer: 0,
      explanation: 'wohl stays in the middle of the sentence, after the verb. It cannot take position 1, and nothing may stand between subject and verb.',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex11',
      prompt: 'You read: "Er wird den Bus verpasst haben." What does it mean?',
      options: ['He has probably missed the bus.', 'He will miss the bus.', 'He never misses the bus.'],
      answer: 0,
      explanation: 'This is Futur II (wird + Partizip II + haben), used as a guess about the past. You only need to recognise it; to say it yourself use Er hat wahrscheinlich den Bus verpasst.',
    },
    {
      type: 'order',
      id: 'b1-24-futur-2-probability-ex12',
      prompt: 'Build the sentence: "He has probably missed the bus." (start with Wahrscheinlich)',
      words: ['hat', 'Wahrscheinlich', 'Bus', 'den', 'er', 'verpasst.'],
      answer: ['Wahrscheinlich hat er den Bus verpasst.'],
      explanation: 'Wahrscheinlich takes position 1, so the verb hat comes next, then the subject er. The Perfekt is all you need for a guess about the past.',
    },
  ],
};

export default topic;
