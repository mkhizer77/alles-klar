import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-22b-haben-sein-zu',
  level: 'B1',
  unit: 8,
  order: 32,
  title: 'haben … zu and sein … zu',
  germanTerm: 'haben / sein + zu',
  tags: ['verbs', 'zu infinitive', 'modal meaning', 'passive alternatives'],
  summary: 'sein + leicht / schwer + zu says that something can be done easily or with difficulty (Die Aufgabe ist leicht zu lösen); haben … zu says what a person has to do (Ich habe viel zu tun).',
  steps: [
    {
      title: 'What these patterns are for',
      text: `
**sein … zu** and **haben … zu** are two more verbs that work like modal verbs with **zu + infinitive** (the basic verb form).

**sein … zu** is about a **thing**: it says the thing can be done, or must be done. **haben … zu** is about a **person**: it says what the person has to do.
`,
      examples: [
        { de: 'Die Aufgabe ist leicht zu lösen.', en: 'The task is easy to solve. (about the thing)' },
        { de: 'Ich habe heute viel zu tun.', en: 'I have a lot to do today. (about the person)' },
      ],
    },
    {
      title: 'sein + leicht zu: can be done',
      text: `
With **leicht**, **schwer** or **kaum** (hardly), *sein … zu* says how easily something **can** be done. The subject is the thing something is done to, and *zu + infinitive* stands at the end.
`,
      examples: [
        { de: 'Diese Frage ist leicht zu beantworten.', en: 'This question is easy to answer.' },
        { de: 'Dieses Wort ist schwer zu übersetzen.', en: 'This word is hard to translate.' },
        { de: 'Das ist schwer zu sagen.', en: 'That is hard to say. (fixed phrase)' },
        { de: 'Seine Schrift ist kaum zu lesen.', en: 'His handwriting can hardly be read.' },
      ],
    },
    {
      title: 'The same idea with können',
      text: `
*sein … zu* says the same as **können** + passive (*kann … werden*) or **man kann** + infinitive. The three sentences below mean the same thing; *sein … zu* is the shortest. Choose it when you want to say "can be done" without naming who does it.
`,
      examples: [
        { de: 'Die Aufgabe ist leicht zu lösen.', en: 'The task is easy to solve. (sein … zu)' },
        { de: 'Die Aufgabe kann leicht gelöst werden.', en: 'The task can be solved easily. (passive with können)' },
        { de: 'Man kann die Aufgabe leicht lösen.', en: 'One can solve the task easily. (man kann)' },
      ],
    },
    {
      title: 'haben … zu: what you have to do',
      text: `
**haben … zu** + infinitive says what a person **has to do**. In everyday speech you mostly meet it in the phrase **viel zu tun haben**. In rules and formal texts it means **must**, like *müssen*; recognise it there, and use *müssen* yourself.
`,
      examples: [
        { de: 'Ich habe heute noch viel zu tun.', en: 'I still have a lot to do today. (everyday phrase)' },
        { de: 'Wir haben nichts zu verlieren.', en: 'We have nothing to lose.' },
        { de: 'Sie haben die Regeln zu befolgen.', en: 'You must follow the rules. (formal: = Sie müssen …)' },
      ],
    },
    {
      title: 'sein … zu as must in notices',
      text: `
In notices, forms and official letters, *sein … zu* without *leicht / schwer* means **must be done**. With a separable verb, *zu* goes inside: **auszufüllen**. You only need to recognise this meaning; when you speak or write, say it with **müssen**.
`,
      examples: [
        { de: 'Das Formular ist bis Montag auszufüllen.', en: 'The form must be filled in by Monday. (= muss ausgefüllt werden)' },
        { de: 'Die Rechnung ist sofort zu bezahlen.', en: 'The bill must be paid at once.' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-22-brauchen-zu-scheinen', note: 'brauchen … zu and scheinen … zu are the other two verbs of this family, with the same word order.' },
    { topicId: 'a2-21-zu-infinitive', note: 'The zu + infinitive construction, including zu inside separable verbs (auszufüllen).' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'sein … zu (leicht zu lösen) is one of the ways of saying "can be done" alongside man and -bar.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'Die Aufgabe ist leicht zu lösen says the same as Die Aufgabe kann leicht gelöst werden.' },
    { topicId: 'a1-17-modal-verbs', note: 'In the must-meaning, haben … zu and sein … zu replace müssen.' },
  ],
  edgeCases: [
    '**Das ist leicht zu machen** is about the thing (it can be done easily). **Ich habe viel zu tun** is about the person (I have a lot to do). Learn both as fixed patterns.',
    '**ist zu lösen** (can or must be solved) is not **ist gelöst** (is solved, already done). The first has an infinitive with zu, the second a Partizip II.',
    'With separable verbs *zu* goes inside the verb: **auszufüllen**, **abzugeben**, not *zu ausfüllen*.',
    'In a notice, **Das Formular ist auszufüllen** means "must be filled in". Recognise it; to say it yourself use *Das Formular muss ausgefüllt werden*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-22b-haben-sein-zu-ex01',
      prompt: 'Ich habe heute noch viel ___ tun.',
      answer: ['zu'],
      explanation: 'haben + viel + zu + infinitive: Ich habe viel zu tun = I have a lot to do.',
    },
    {
      type: 'mc',
      id: 'b1-22b-haben-sein-zu-ex02',
      prompt: 'What does "Die Aufgabe ist leicht zu lösen." mean?',
      options: ['The task can be solved easily.', 'The task was solved easily.', 'The task solves itself easily.'],
      answer: 0,
      explanation: 'sein + leicht … zu says that something can be done easily: the task can be solved easily.',
    },
    {
      type: 'mc',
      id: 'b1-22b-haben-sein-zu-ex03',
      prompt: 'Complete: "Das ist schwer ___." (hard to say)',
      options: ['zu sagen', 'sagen', 'zu sagt'],
      answer: 0,
      explanation: 'sein + schwer takes zu + infinitive at the end: Das ist schwer zu sagen.',
    },
    {
      type: 'fill',
      id: 'b1-22b-haben-sein-zu-ex04',
      prompt: 'Dieses Wort ist schwer ___ (übersetzen).',
      answer: ['zu übersetzen'],
      explanation: 'sein + schwer + zu + infinitive: the word is hard to translate. übersetzen is not separable, so zu stands in front of it.',
    },
    {
      type: 'mc',
      id: 'b1-22b-haben-sein-zu-ex05',
      prompt: 'What does "Ich habe heute noch viel zu tun." mean?',
      options: ['I still have a lot to do today.', 'I did a lot today.', 'I have already done a lot today.'],
      answer: 0,
      explanation: 'Ich habe viel zu tun is a fixed phrase: there is still a lot I have to do. It is not a past tense.',
    },
    {
      type: 'match',
      id: 'b1-22b-haben-sein-zu-ex06',
      prompt: 'Match each German phrase with its meaning.',
      pairs: [
        ['ist leicht zu lösen', 'can be solved easily'],
        ['ist kaum zu lesen', 'can hardly be read'],
        ['habe viel zu tun', 'have a lot to do'],
        ['ist auszufüllen', 'must be filled in'],
      ],
      explanation: 'sein + leicht / kaum zu = can be done; haben zu = have to do; sein zu in a notice = must be done.',
    },
    {
      type: 'fill',
      id: 'b1-22b-haben-sein-zu-ex07',
      prompt: 'Diese Frage kann man leicht beantworten. = Diese Frage ___ leicht zu beantworten.',
      answer: ['ist'],
      explanation: 'kann man leicht + infinitive can be said with sein + leicht + zu + infinitive: Diese Frage ist leicht zu beantworten.',
    },
    {
      type: 'mc',
      id: 'b1-22b-haben-sein-zu-ex08',
      prompt: 'Which sentence means the same as "Die Aufgabe ist leicht zu lösen."?',
      options: ['Die Aufgabe kann leicht gelöst werden.', 'Die Aufgabe wurde leicht gelöst.', 'Die Aufgabe muss leicht gelöst werden.'],
      answer: 0,
      explanation: 'sein + leicht zu = können + passive: the task can be solved easily. wurde gelöst is a past fact; muss would mean "must".',
    },
    {
      type: 'order',
      id: 'b1-22b-haben-sein-zu-ex09',
      prompt: 'Build the sentence: "This question is not easy to answer."',
      words: ['leicht', 'Frage', 'Diese', 'zu', 'nicht', 'ist', 'beantworten.'],
      answer: ['Diese Frage ist nicht leicht zu beantworten.'],
      explanation: 'ist in position 2, nicht leicht in the middle, zu beantworten at the end.',
    },
    {
      type: 'translate',
      id: 'b1-22b-haben-sein-zu-ex10',
      prompt: 'Translate: "That is hard to say."',
      answer: ['Das ist schwer zu sagen.', 'Das ist schwierig zu sagen.'],
      hint: 'sein + schwer … zu; sagen = to say',
      explanation: 'sein + schwer + zu + infinitive: Das ist schwer zu sagen. The zu infinitive closes the sentence.',
    },
    {
      type: 'mc',
      id: 'b1-22b-haben-sein-zu-ex11',
      prompt: 'You read on a form: "Das Formular ist bis Montag auszufüllen." What does it mean?',
      options: ['The form must be filled in by Monday.', 'The form was filled in on Monday.', 'The form is easy to fill in on Monday.'],
      answer: 0,
      explanation: 'sein … zu in a notice means "must be done": the form must be filled in by Monday. To say it yourself: Das Formular muss bis Montag ausgefüllt werden.',
    },
    {
      type: 'mc',
      id: 'b1-22b-haben-sein-zu-ex12',
      prompt: 'What does "Sie haben die Regeln zu befolgen." mean?',
      options: ['You must follow the rules.', 'You have followed the rules.', 'You may follow the rules.'],
      answer: 0,
      explanation: 'haben … zu + infinitive in a formal text means "must": Sie müssen die Regeln befolgen. It is not a Perfekt.',
    },
  ],
};

export default topic;
