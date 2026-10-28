import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-22-brauchen-zu-scheinen',
  level: 'B1',
  unit: 8,
  order: 22,
  title: 'brauchen … zu, scheinen … zu, haben / sein … zu',
  germanTerm: 'Modalitätsverben',
  tags: ['verbs', 'zu infinitive', 'modal meaning', 'necessity'],
  summary: 'A few ordinary verbs combine with zu + infinitive to work like modal verbs: nicht brauchen zu (do not have to), scheinen zu (seem to) and sein zu with leicht / schwer (easy / hard to do).',
  explanation: `
### What it is for

These forms let you say "you do not have to", "he seems to" and "it is easy / hard to do" without a modal verb:

- Du **brauchst nicht zu kommen**. – *You do not have to come.*
- Er **scheint** krank **zu sein**. – *He seems to be ill.*

You know the modal verbs *müssen*, *können*, *dürfen*. German also has a small group of **ordinary verbs** that take on a similar meaning when they are followed by **zu + infinitive**. Grammar books call them *Modalitätsverben* ("modal-like verbs"). The ones you need at B1 are *brauchen*, *scheinen* and *sein*.

The pattern is always the same: the verb is conjugated in position 2, and **zu + infinitive** goes to the end of the clause.

### The three verbs

| Verb | Meaning | Equals | Example |
|---|---|---|---|
| **nicht / nur brauchen … zu** | do not have to / only need to | nicht müssen | Du **brauchst** nicht **zu kommen**. |
| **scheinen … zu** | seem to | wahrscheinlich | Er **scheint** krank **zu sein**. |
| **sein + leicht / schwer … zu** | is easy / hard to do | kann (leicht) … werden | Die Aufgabe **ist** leicht **zu lösen**. |

### brauchen: only with a negative or restriction

*brauchen … zu* is used almost always with **nicht**, **kein** or **nur**:

- Du **brauchst nicht** zu warten. = Du musst nicht warten. (You do not have to wait.)
- Du **brauchst nur** anzurufen. (You only need to call.)
- Ihr **braucht keine** Angst zu haben. (You do not need to be afraid.)

It is the polite, soft way to say that something is **not necessary**. Note that *nicht brauchen* means "do not have to", **not** "must not" – that would be *nicht dürfen*.

### scheinen: "seems to"

*scheinen … zu* reports an impression. The subject of *scheinen* is the person or thing you are talking about:

- Sie **scheint** glücklich **zu sein**. (She seems to be happy.)
- Das **scheint** nicht **zu funktionieren**. (That does not seem to work.)

*scheinen* without *zu* just means "to shine" (*Die Sonne scheint*).

### sein … zu: easy or hard to do

With *leicht*, *schwer* or *kaum*, *sein … zu* says that something **can** be done easily or with difficulty. The subject is the thing something is done to:

- Diese Frage **ist** leicht **zu beantworten**. (This question is easy to answer.)
- Dieses Wort **ist** schwer **zu übersetzen**. (This word is hard to translate.)
- Das **ist** schwer **zu sagen**. (That is hard to say.)

You may also see *sein … zu* and *haben … zu* meaning **must** in rules and forms: *Das Formular ist bis Montag auszufüllen* (the form must be filled in by Monday), *Sie haben die Regeln zu befolgen* (you must follow the rules). Recognise them in texts; to say it yourself, use *müssen*. The everyday phrase *Ich habe viel zu tun* (I have a lot to do) belongs to this family.

### Why it matters

*nicht brauchen zu* is the natural spoken way to reassure someone, *scheinen zu* is how you describe an impression, and *leicht / schwer zu* appears in every discussion (*Das ist schwer zu sagen*). Recognising the "must" forms also helps you read notices and formal letters at B1.
`,
  examples: [
    { de: 'Du brauchst nicht zu kommen.', en: 'You do not have to come. (= du musst nicht kommen)' },
    { de: 'Sie brauchen nur zu unterschreiben.', en: 'You only need to sign.' },
    { de: 'Er scheint müde zu sein.', en: 'He seems to be tired.' },
    { de: 'Der Plan scheint zu funktionieren.', en: 'The plan seems to work.' },
    { de: 'Diese Frage ist leicht zu beantworten.', en: 'This question is easy to answer. (sein + leicht zu = can be done easily)' },
    { de: 'Das ist schwer zu sagen.', en: 'That is hard to say.' },
    { de: 'Ich habe heute noch viel zu tun.', en: 'I still have a lot to do today. (fixed everyday phrase)' },
  ],
  connections: [
    { topicId: 'a2-21-zu-infinitive', note: 'All four verbs use the zu + infinitive construction, including zu inside separable verbs.' },
    { topicId: 'a1-17-modal-verbs', note: 'nicht brauchen zu replaces nicht müssen.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'sein … zu (leicht zu lösen) is one of the ways of saying "can be done" alongside man and -bar.' },
    { topicId: 'b1-24-futur-2-probability', note: 'scheinen zu is another way of expressing a guess, like wohl or wahrscheinlich.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'Die Aufgabe ist leicht zu lösen says the same as Die Aufgabe kann leicht gelöst werden.' },
  ],
  edgeCases: [
    '*Du brauchst nicht zu kommen* = you do not **have to** come. "You must not come" is *Du darfst nicht kommen*.',
    'In everyday speech people often drop *zu* after *brauchen* (*Du brauchst nicht kommen*). In writing and in the exam, keep the *zu*.',
    '*brauchen* without *zu* and with a noun just means "to need": *Ich brauche Hilfe*.',
    'With separable verbs *zu* goes inside the verb: *Du brauchst nur **anzurufen***.',
    '*Das ist leicht zu machen* is about the thing (it can be done easily). *Ich habe viel zu tun* is about the person (I have a lot to do). Both are fixed patterns worth learning as phrases.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex01',
      prompt: 'What does "Du brauchst nicht zu kommen." mean?',
      options: ['You do not have to come.', 'You must not come.', 'You cannot come.'],
      answer: 0,
      explanation: 'nicht brauchen zu = nicht müssen: it is not necessary. "Must not" would be nicht dürfen.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex02',
      prompt: 'Du brauchst nur ___ (anrufen), dann komme ich.',
      answer: ['anzurufen'],
      explanation: 'anrufen is separable, so zu goes between the prefix and the stem: anzurufen. nur brauchen zu = only need to.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex03',
      prompt: 'Er ___ (scheinen) müde zu sein.',
      answer: ['scheint'],
      explanation: 'scheinen is conjugated normally in position 2: er scheint. The infinitive zu sein stands at the end.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex04',
      prompt: 'What does "Die Aufgabe ist leicht zu lösen." mean?',
      options: ['The task can be solved easily.', 'The task was solved easily.', 'The task solves itself easily.'],
      answer: 0,
      explanation: 'sein + leicht … zu says that something can be done easily: the task can be solved easily.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex05',
      prompt: 'Complete: "Das ist schwer ___." (hard to say)',
      options: ['zu sagen', 'sagen', 'zu sagt'],
      answer: 0,
      explanation: 'sein + schwer takes zu + infinitive at the end: Das ist schwer zu sagen.',
    },
    {
      type: 'order',
      id: 'b1-22-brauchen-zu-scheinen-ex06',
      prompt: 'Build the sentence: "You do not need to worry."',
      words: ['keine', 'Du', 'dir', 'brauchst', 'machen.', 'Sorgen', 'zu'],
      answer: ['Du brauchst dir keine Sorgen zu machen.'],
      explanation: 'brauchen in position 2, then the pronoun dir, the object keine Sorgen, and zu machen at the end. keine does the negating.',
    },
    {
      type: 'match',
      id: 'b1-22-brauchen-zu-scheinen-ex07',
      prompt: 'Match each construction with its meaning.',
      pairs: [
        ['nicht brauchen … zu', 'do not have to'],
        ['nur brauchen … zu', 'only need to'],
        ['scheinen … zu', 'seem to'],
        ['leicht / schwer … zu', 'easy / hard to do'],
      ],
      explanation: 'brauchen softens necessity, scheinen gives an impression, sein + leicht / schwer zu says how easily something can be done.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex08',
      prompt: 'Diese Frage kann man leicht beantworten. = Diese Frage ___ leicht zu beantworten.',
      answer: ['ist'],
      explanation: 'kann man leicht + infinitive can be said with sein + leicht + zu + infinitive: Diese Frage ist leicht zu beantworten.',
    },
    {
      type: 'translate',
      id: 'b1-22-brauchen-zu-scheinen-ex09',
      prompt: 'Translate: "She seems to be happy."',
      answer: ['Sie scheint glücklich zu sein.', 'Sie scheint zufrieden zu sein.'],
      hint: 'scheinen … zu; glücklich = happy',
      explanation: 'scheint in position 2, the adjective in the middle, zu sein at the end.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex10',
      prompt: 'Rewrite "Ihr müsst nicht warten." with brauchen.',
      options: ['Ihr braucht nicht zu warten.', 'Ihr braucht nicht warten zu.', 'Ihr braucht nicht gewartet.'],
      answer: 0,
      explanation: 'nicht müssen = nicht brauchen zu. zu stands directly before the infinitive warten at the end.',
    },
    {
      type: 'order',
      id: 'b1-22-brauchen-zu-scheinen-ex11',
      prompt: 'Build the sentence: "The problem does not seem to be so simple."',
      words: ['scheint', 'Problem', 'Das', 'so', 'nicht', 'sein.', 'einfach', 'zu'],
      answer: ['Das Problem scheint nicht so einfach zu sein.'],
      explanation: 'scheint takes position 2; nicht so einfach fills the middle; zu sein closes the sentence.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex12',
      prompt: 'What does "Ich habe heute noch viel zu tun." mean?',
      options: ['I still have a lot to do today.', 'I did a lot today.', 'I have already done a lot today.'],
      answer: 0,
      explanation: 'Ich habe viel zu tun is a fixed phrase: there is still a lot I have to do. It is not a past tense.',
    },
  ],
};

export default topic;
