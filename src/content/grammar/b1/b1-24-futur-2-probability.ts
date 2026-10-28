import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-24-futur-2-probability',
  level: 'B1',
  unit: 8,
  order: 24,
  title: 'Futur II and expressing probability',
  germanTerm: 'Futur II, Vermutung',
  tags: ['verbs', 'tenses', 'future', 'probability', 'werden'],
  summary: 'German expresses guesses with adverbs (wahrscheinlich, wohl, vielleicht, bestimmt) and with werden + wohl (Er wird wohl krank sein); Futur II (Er wird den Zug verpasst haben) is a form to recognise in texts, not one you need to produce at B1.',
  explanation: `
### What it is for

Often you are not sure about something and want to say "probably" or "I suppose". German has a few simple tools for that, and B1 speaking tasks (describing a picture, guessing what is going on) use them all the time:

- Er ist **wahrscheinlich** krank. – *He is probably ill.*
- Er **wird wohl** krank **sein**. – *He is probably ill. / I suppose he is ill.*

### The adverbs: how sure are you?

| How sure | Adverbs | Example |
|---|---|---|
| almost certain | bestimmt, sicher | Sie kommt **bestimmt**. |
| probably | wahrscheinlich, wohl, vermutlich | Er ist **wahrscheinlich** im Büro. |
| maybe | vielleicht, möglicherweise | **Vielleicht** regnet es morgen. |
| probably not | wohl nicht, kaum | Das stimmt **kaum**. |

Word order: *wahrscheinlich*, *vielleicht* and *bestimmt* can start the sentence (then the verb comes **next**: *Wahrscheinlich **ist** sie zu Hause*) or sit in the middle after the verb (*Sie ist wahrscheinlich zu Hause*). *wohl* stays in the middle: *Er ist wohl krank*, never *Wohl ist er krank*.

### werden + wohl: a guess about now

*werden* + infinitive is normally the future (*Futur I*). With *wohl*, *wahrscheinlich* or *sicher* it becomes a **guess about the present**:

- Er **wird wohl** im Stau **stehen**. – *He is probably stuck in traffic.* (right now)
- Das **wird** schon **stimmen**. – *That is probably right.*
- Die Frau auf dem Bild **wird wohl** die Chefin **sein**. – *The woman in the picture is probably the boss.*

How do you know it is a guess and not the future? The little word *wohl* and the situation tell you. Without *wohl*, *Er wird kommen* simply means "he will come".

### könnte: "could be"

*könnte* (the *Konjunktiv II* of *können*, the "would / could" form) marks a possibility:

- Das **könnte** stimmen. – *That could be true.*
- Sie **könnte** im Büro sein. – *She could be in the office.*

### A guess about the past

To say that something **probably happened**, use the Perfekt with an adverb: *Er hat **wahrscheinlich** den Bus verpasst* (he has probably missed the bus). That is all you need at B1.

You may also see **Futur II** in texts: *werden* + Partizip II + *haben / sein*. *Er **wird** den Zug **verpasst haben*** means "he has probably missed the train", and *Bis Freitag **werde** ich den Bericht **geschrieben haben*** means "by Friday I will have written the report". Recognise the shape (*wird … haben / sein* at the end); you do not need to use it. The same goes for *Er **muss** krank sein* (he must be ill) and *Sie **dürfte** 40 sein* (she is probably 40): both are B2 ways to guess.

### Why it matters

In B1 speaking tasks you describe pictures and discuss situations you cannot be sure about: *Die Frau wird wohl die Chefin sein. Sie ist wahrscheinlich etwa 50 Jahre alt.* Knowing these forms lets you speculate naturally instead of only stating facts, and recognising Futur II stops a news sentence like *Der Zug wird bereits abgefahren sein* from confusing you.
`,
  examples: [
    { de: 'Sie ist wahrscheinlich schon zu Hause.', en: 'She is probably at home already. (adverb in the middle)' },
    { de: 'Wahrscheinlich hat er den Bus verpasst.', en: 'He has probably missed the bus. (guess about the past: Perfekt + adverb)' },
    { de: 'Er wird wohl im Stau stehen.', en: 'He is probably stuck in traffic. (werden + wohl: guess about now)' },
    { de: 'Die Frau auf dem Bild wird wohl die Lehrerin sein.', en: 'The woman in the picture is probably the teacher.' },
    { de: 'Vielleicht kommt sie später.', en: 'Maybe she will come later. (vielleicht in position 1, verb next)' },
    { de: 'Das könnte stimmen, aber ich bin nicht sicher.', en: 'That could be true, but I am not sure. (könnte = possible)' },
    { de: 'Er wird den Bus verpasst haben.', en: 'He has probably missed the bus. (Futur II: recognise only)' },
  ],
  connections: [
    { topicId: 'a2-19-futur-1', note: 'werden + infinitive is the future; with wohl it becomes a guess about the present.' },
    { topicId: 'b1-23-werden', note: 'werden as a helper verb is job 2 of werden.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'könnte is the Konjunktiv II of können, used here for "could be".' },
    { topicId: 'a1-31-perfekt-haben', note: 'A guess about the past is simply the Perfekt plus wahrscheinlich or wohl.' },
    { topicId: 'b1-22-brauchen-zu-scheinen', note: 'scheinen zu is another way of saying that something seems likely.' },
  ],
  edgeCases: [
    '*wohl* in the middle of the sentence means "probably". Do not put it at the start: *Er ist wohl krank*, not *Wohl ist er krank*.',
    '*Er wird wohl krank sein* is a guess about **now**, not about the future. Without *wohl*, *Er wird krank sein* would sound like a prediction.',
    'For a guess about the **past**, use the Perfekt: *Er hat wahrscheinlich den Bus verpasst*. Futur II (*Er wird den Bus verpasst haben*) means the same; recognise it, but you do not need to produce it.',
    '*könnte* here means "could be" (possibility), not "was able to". *Das könnte stimmen* = that may well be true.',
    '*bestimmt* is strong (almost certain), *vielleicht* is weak (maybe). Choose the adverb that matches how sure you really are.',
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
