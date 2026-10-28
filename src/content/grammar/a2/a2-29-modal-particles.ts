import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-29-modal-particles',
  level: 'A2',
  unit: 10,
  order: 29,
  title: 'Modal particles: doch, mal, ja, eigentlich',
  germanTerm: 'Modalpartikeln',
  tags: ['particles', 'spoken German', 'tone', 'word order', 'doch', 'mal', 'denn'],
  summary: 'Modal particles are small, unstressed words (doch, mal, ja, eigentlich, denn) that do not change the facts of a sentence but show the speaker\'s attitude: surprise, friendliness or softening.',
  explanation: `
### What it is

Listen to Germans talk and you will hear tiny words everywhere: *Komm **doch** rein! Warte **mal**! Das ist **ja** toll! Was machst du **eigentlich** hier?* These are **modal particles** (*Modalpartikeln*). They add **tone**, not information. Leave them out and the sentence is still correct, just colder or flatter.

They are hard to translate because English does the same job with intonation or with phrases like *just, you know, by the way, after all*.

### Rules that apply to all of them

1. They are **never stressed**.
2. They stand in the **midfield**, usually right after the verb and the pronouns: *Komm **doch** mal her.* *Das ist **ja** schön.*
3. They cannot stand in position 1 and cannot be the answer to a question.
4. Many of them are **also normal words** with a different meaning (*doch* = yes-but, *mal* = once, *ja* = yes, *eigentlich* = actually, *denn* = because). As particles they lose that meaning.

### The most useful particles

| particle | typical sentence | feeling it adds |
|---|---|---|
| **doch** | Komm **doch** mit! | friendly encouragement; in statements: "you know that" (*Das weißt du doch.*) |
| **mal** | Warte **mal**. / Kannst du **mal** helfen? | makes a request casual and small ("just quickly") |
| **ja** | Das ist **ja** interessant! / Du bist **ja** schon da! | surprise, or "as we both know" |
| **eigentlich** | Wie heißt du **eigentlich**? | makes a question softer, "by the way" |
| **denn** | Was machst du **denn** hier? | shows interest in a question, can sound surprised |

You may also hear **schon** for reassurance (*Das wird schon klappen* – *it will be fine*) and **halt** or **eben** for "that is just how it is" (*Das ist halt so*). Recognise them; you do not need to use them yet.

### doch and mal in requests

Together they make a request as friendly as possible:

- Setz dich. – *Sit down.* (neutral, almost an order)
- Setz dich **doch**. – *Do sit down.* (friendly invitation)
- Setz dich **mal**. – *Just sit down a second.* (casual)
- Setz dich **doch mal**. – *Go on, sit down for a moment.* (warmest)

### ja in statements

*ja* in the middle of a sentence has nothing to do with *yes*. It marks something **obvious or surprising**:

- Es ist **ja** schon dunkel! – *Oh, it is dark already!* (surprise)
- Du weißt **ja**, dass ich keine Zeit habe. – *You know, of course, that I have no time.* (shared knowledge)

### eigentlich and denn in questions

- Wo wohnst du **eigentlich**? – *Where do you live, by the way?* (a new, casual topic)
- Wo wohnst du **denn**? – *So where do you live?* (interested, friendly)

Note: *denn* as a particle sits inside a question. As a conjunction (*because*) it stands between two clauses.

### Why it matters

You do not need to produce modal particles to be understood, but you need to **recognise** them so you do not translate *Das ist ja gut* as *That is yes good*. And using *doch* and *mal* in requests makes you sound noticeably friendlier, which matters in shops, offices and with colleagues.
`,
  examples: [
    { de: 'Komm doch rein!', en: 'Do come in! (doch = friendly encouragement)' },
    { de: 'Kannst du mir mal helfen?', en: 'Can you just help me a second? (mal = casual, small request)' },
    { de: 'Das ist ja eine Überraschung!', en: 'Well, that is a surprise! (ja = surprise; not "yes")' },
    { de: 'Du weißt doch, dass ich morgen arbeite.', en: 'You know I am working tomorrow. (doch = reminder of shared knowledge)' },
    { de: 'Was machst du eigentlich beruflich?', en: 'What do you do for a living, by the way? (eigentlich = softens, new topic)' },
    { de: 'Wo ist denn mein Schlüssel?', en: 'Now where is my key? (denn = interest / mild surprise in a question)' },
    { de: 'Warte mal, ich komme gleich.', en: 'Hang on a second, I am coming. (mal = casual, small)' },
    { de: 'Mach dir keine Sorgen, das wird schon klappen.', en: 'Do not worry, it will work out. (schon = reassurance; recognise it)' },
  ],
  connections: [
    { topicId: 'a1-18-imperative', note: 'doch and mal soften imperatives: Komm! → Komm doch mal!' },
    { topicId: 'a1-07-questions', note: 'denn and eigentlich live in questions and make them sound interested or casual.' },
    { topicId: 'a1-30-word-order-midfield', note: 'Particles belong to the midfield, right after the verb and any pronouns.' },
    { topicId: 'a1-34-coordinating-conjunctions', note: 'denn as a conjunction (because) is a different word from the particle denn inside a question.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'Könnten Sie mal …? combines Konjunktiv II and a particle for maximum politeness.' },
  ],
  edgeCases: [
    '**ja** inside a sentence does not mean *yes*: *Das ist ja toll* = *Oh, that is great*.',
    '**doch** as an answer (*Kommst du nicht? – Doch!*) means *yes I am*. As a particle in the midfield it just adds friendliness or emphasis.',
    '**mal** as a particle is unstressed. Stressed *einmal / mal* means *once* (*Ich war mal in Rom* = I was in Rome once).',
    '**denn** as a particle appears only in **questions**; as a conjunction it links two main clauses (*…, denn …*).',
    'Particles come **after** pronouns: *Gib es mir doch mal*, not *Gib doch mal es mir*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-29-modal-particles-ex01',
      prompt: 'What does "ja" express in "Das ist ja interessant!"?',
      options: ['the answer "yes"', 'surprise', 'a question'],
      answer: 1,
      explanation: 'As a particle in the midfield, ja shows that the speaker is surprised or that something is obvious. It is not "yes".',
    },
    {
      type: 'fill',
      id: 'a2-29-modal-particles-ex02',
      prompt: 'Make the request casual and friendly: "Kannst du mir ___ helfen?" (just quickly)',
      answer: ['mal'],
      explanation: 'mal makes a request sound small and casual: Can you just give me a hand?',
    },
    {
      type: 'mc',
      id: 'a2-29-modal-particles-ex03',
      prompt: 'Which version is the friendliest invitation?',
      options: ['Setz dich.', 'Setz dich doch mal.', 'Setz dich sofort.'],
      answer: 1,
      explanation: 'doch adds encouragement and mal adds casualness. sofort (immediately) makes it an order.',
    },
    {
      type: 'fill',
      id: 'a2-29-modal-particles-ex04',
      prompt: 'Du weißt ___, dass ich morgen keine Zeit habe. (you know that, we both know)',
      answer: ['doch', 'ja'],
      explanation: 'doch (or ja) in a statement reminds the listener of something they already know.',
    },
    {
      type: 'match',
      id: 'a2-29-modal-particles-ex05',
      prompt: 'Match the particle with the feeling it usually adds.',
      pairs: [
        ['doch', 'friendly encouragement'],
        ['mal', 'casual, small request'],
        ['ja', 'surprise or shared knowledge'],
        ['eigentlich', 'softer question, by the way'],
        ['denn', 'interest in a question'],
      ],
      explanation: 'Each particle has a typical job. The facts of the sentence stay the same; only the tone changes.',
    },
    {
      type: 'mc',
      id: 'a2-29-modal-particles-ex06',
      prompt: 'In which sentence is "denn" a particle, not a conjunction?',
      options: ['Ich bleibe hier, denn ich bin müde.', 'Was machst du denn hier?', 'Er kommt nicht, denn er ist krank.'],
      answer: 1,
      explanation: 'In a question in the midfield, denn is a particle showing interest. Between two clauses it is the conjunction "because".',
    },
    {
      type: 'order',
      id: 'a2-29-modal-particles-ex07',
      prompt: 'Build the friendly question: "Where do you live, by the way?"',
      words: ['wohnst', 'eigentlich?', 'du', 'Wo'],
      answer: ['Wo wohnst du eigentlich?'],
      explanation: 'The particle eigentlich goes in the midfield after the verb and the subject pronoun.',
    },
    {
      type: 'fill',
      id: 'a2-29-modal-particles-ex08',
      prompt: 'Wo ist ___ mein Schlüssel? (shows interest or mild surprise in a question)',
      answer: ['denn'],
      explanation: 'denn inside a question shows interest or mild surprise: Now where is my key? It is not the conjunction "because" here.',
    },
    {
      type: 'mc',
      id: 'a2-29-modal-particles-ex09',
      prompt: 'Where does the particle go? "Gib ___ das Buch." (mir, doch)',
      options: ['Gib doch mir das Buch.', 'Gib mir doch das Buch.', 'Doch gib mir das Buch.'],
      answer: 1,
      explanation: 'Particles come after the pronouns in the midfield: Gib mir doch das Buch. They can never stand in position 1.',
    },
    {
      type: 'mc',
      id: 'a2-29-modal-particles-ex10',
      prompt: 'What does "mal" mean in "Ich war mal in Rom."?',
      options: ['a casual request', 'once (stressed, not a particle)', 'surprise'],
      answer: 1,
      explanation: 'Here mal is short for einmal and means "once". It carries stress, so it is not the modal particle.',
    },
    {
      type: 'translate',
      id: 'a2-29-modal-particles-ex11',
      prompt: 'Translate as a friendly invitation: "Do come in!" (du form)',
      answer: ['Komm doch rein!', 'Komm doch herein!', 'Komm doch mal rein!'],
      hint: 'reinkommen / hereinkommen = to come in',
      explanation: 'doch after the imperative makes it a warm invitation rather than an order.',
    },
    {
      type: 'mc',
      id: 'a2-29-modal-particles-ex12',
      prompt: 'A friend says: "Du bist ja schon da!" What does the friend feel?',
      options: ['surprise (you are here earlier than expected)', 'agreement (yes)', 'resignation'],
      answer: 0,
      explanation: 'ja in the middle of a statement marks surprise: Oh, you are here already! It is not the answer "yes".',
    },
  ],
};

export default topic;
