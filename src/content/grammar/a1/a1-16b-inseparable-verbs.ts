import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-16b-inseparable-verbs',
  level: 'A1',
  unit: 3,
  order: 19,
  title: 'Inseparable verbs: be-, ver-, er- …',
  germanTerm: 'untrennbare Verben',
  tags: ['verbs', 'inseparable', 'prefix', 'stress'],
  summary: 'Seven prefixes (be-, ver-, er-, ent-, emp-, ge-, zer-) never leave the verb: the whole verb stays in position 2, and the stress is on the stem, not the prefix.',
  steps: [
    {
      title: 'Some prefixes never leave the verb',
      text: `
Not every prefix splits off. *bekommen* (to get) and *ankommen* (to arrive) both come from *kommen*, but only *ankommen* separates. **bekommen** is **inseparable** (*untrennbar*): the prefix stays on the verb in every sentence.

You conjugate the verb as usual; the prefix simply comes along.
`,
      examples: [
        { de: 'Ich bekomme ein Paket.', en: 'I am getting a parcel. (bekommen stays whole)' },
        { de: 'Ich komme um acht an.', en: 'I arrive at eight. (ankommen separates)' },
        { de: 'Ich verstehe das nicht.', en: "I don't understand that. (verstehen stays whole)" },
      ],
    },
    {
      title: 'The seven inseparable prefixes',
      text: `
These prefixes never separate: **be-, ver-, er-, ent-, emp-, ge-, zer-**. They are not words on their own.

Common verbs: **be**kommen (to get), **be**zahlen (to pay), **ver**stehen (to understand), **ver**kaufen (to sell), **er**klären (to explain), **ent**schuldigen (to excuse), **emp**fehlen (to recommend), **ge**hören (to belong), **zer**stören (to destroy).
`,
      examples: [
        { de: 'Er bezahlt die Rechnung.', en: 'He pays the bill. (bezahlen)' },
        { de: 'Sie erklärt die Regel.', en: 'She explains the rule. (erklären)' },
        { de: 'Das Buch gehört mir.', en: 'The book belongs to me. (gehören)' },
        { de: 'Ich empfehle den Fisch.', en: 'I recommend the fish. (empfehlen)' },
      ],
    },
    {
      title: 'Listen to the stress',
      text: `
The stress tells you which kind a verb is. A separable prefix is **stressed**: **AN**kommen, **AUF**stehen. An inseparable prefix is never stressed; the stress is on the **stem**: be**KOM**men, ver**STE**hen, er**KLÄ**ren.

So when you learn a new verb with a prefix, say it out loud and listen where the stress falls.
`,
      examples: [
        { de: 'Er verkauft sein Auto.', en: 'He sells his car. (ver-KAUFT: stress on the stem)' },
        { de: 'Er kauft Brot ein.', en: 'He buys bread. (EIN-kaufen: stress on the prefix, so it separates)' },
        { de: 'Entschuldigen Sie bitte!', en: 'Excuse me, please! (ent-SCHUL-digen)' },
      ],
    },
    {
      title: 'Whole in every sentence',
      text: `
Because the prefix never moves, an inseparable verb is one word everywhere: in questions, after a modal verb and in the imperative.

A preview for later: in the past, these verbs also have **no ge-**: *bekommen → hat bekommen*, *verstehen → hat verstanden*.
`,
      examples: [
        { de: 'Verstehst du das?', en: 'Do you understand that? (question: still one word)' },
        { de: 'Ich muss die Rechnung bezahlen.', en: 'I have to pay the bill. (after a modal)' },
        { de: 'Erklären Sie das bitte!', en: 'Please explain that! (imperative)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-16-separable-verbs', note: 'The sibling topic: separable prefixes (an-, auf-, mit- …) go to the end of the sentence.' },
    { topicId: 'a1-05-present-tense-regular', note: 'Inseparable verbs take the normal endings: ich bezahle, du bezahlst.' },
    { topicId: 'a1-06-verb-second', note: 'The whole verb, prefix included, sits in position 2.' },
    { topicId: 'a1-31-perfekt-haben', note: 'Inseparable verbs form the Partizip II without ge-: bekommen, verstanden, bezahlt.' },
  ],
  edgeCases: [
    '**be-, ver-, er-, ent-, emp-, ge-, zer-** never separate: *Ich bezahle*, never *Ich zahle be*.',
    '**miss-** is also inseparable: *missverstehen* → *Du missverstehst mich*, never *… verstehst miss*.',
    'A few prefixes (**um-, über-, unter-, durch-, wieder-**) can be either. At A1 learn each verb: *umsteigen* (separable), *wiederholen* (inseparable).',
    'Stress is the test: be**KOM**men stays whole, **AN**kommen splits.',
    'Same base verb, different meaning: *kommen* (come), *bekommen* (get), *ankommen* (arrive). Learn each one as its own word.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-16b-inseparable-verbs-ex01',
      prompt: 'Which verb is inseparable?',
      options: ['aufstehen', 'bezahlen', 'mitkommen'],
      answer: 1,
      explanation: 'be- is an inseparable prefix: Ich bezahle. auf- and mit- are separable.',
    },
    {
      type: 'fill',
      id: 'a1-16b-inseparable-verbs-ex02',
      prompt: 'Ich ___ die Frage nicht. (verstehen)',
      answer: ['verstehe'],
      explanation: 'ver- never separates. The whole verb stays in position 2: Ich verstehe die Frage nicht.',
    },
    {
      type: 'fill',
      id: 'a1-16b-inseparable-verbs-ex03',
      prompt: 'Er ___ die Rechnung. (bezahlen)',
      answer: ['bezahlt'],
      explanation: 'bezahlen is inseparable and takes the normal er ending: er bezahlt.',
    },
    {
      type: 'match',
      id: 'a1-16b-inseparable-verbs-ex04',
      prompt: 'Match the inseparable verb with its meaning.',
      pairs: [
        ['bekommen', 'to get'],
        ['verstehen', 'to understand'],
        ['bezahlen', 'to pay'],
        ['erklären', 'to explain'],
        ['empfehlen', 'to recommend'],
      ],
      explanation: 'All five start with an inseparable prefix (be-, ver-, er-, emp-) and stay in one word in every sentence.',
    },
    {
      type: 'mc',
      id: 'a1-16b-inseparable-verbs-ex05',
      prompt: 'Which sentence is wrong?',
      options: ['Ich bekomme ein Paket.', 'Ich komme ein Paket be.', 'Ich mache das Licht an.'],
      answer: 1,
      explanation: 'bekommen is inseparable; be- can never go to the end. anmachen is separable, so "mache … an" is correct.',
    },
    {
      type: 'order',
      id: 'a1-16b-inseparable-verbs-ex06',
      prompt: 'Build the sentence: "She explains the rule."',
      words: ['Regel.', 'erklärt', 'die', 'Sie'],
      answer: ['Sie erklärt die Regel.'],
      explanation: 'erklären is inseparable, so the whole verb erklärt stands in position 2 and nothing goes to the end.',
    },
    {
      type: 'mc',
      id: 'a1-16b-inseparable-verbs-ex07',
      prompt: 'Which of these verbs is separable?',
      options: ['bekommen', 'ankommen', 'verkaufen'],
      answer: 1,
      explanation: 'an- is a word on its own and is stressed (AN-kommen), so it separates. be- and ver- never do.',
    },
    {
      type: 'fill',
      id: 'a1-16b-inseparable-verbs-ex08',
      prompt: '___ du mich? (verstehen)',
      answer: ['Verstehst'],
      explanation: 'In a yes/no question the verb comes first and stays in one word: Verstehst du mich?',
    },
    {
      type: 'mc',
      id: 'a1-16b-inseparable-verbs-ex09',
      prompt: 'Where is the stress in "bezahlen"?',
      options: ['on be-', 'on -zahl-', 'on -en'],
      answer: 1,
      explanation: 'Inseparable prefixes are never stressed. The stress is on the stem: be-ZAH-len.',
    },
    {
      type: 'fill',
      id: 'a1-16b-inseparable-verbs-ex10',
      prompt: 'Ich muss die Rechnung ___. (bezahlen)',
      answer: ['bezahlen'],
      explanation: 'After a modal verb the main verb is an infinitive at the end. bezahlen is one word, with or without a modal.',
    },
    {
      type: 'translate',
      id: 'a1-16b-inseparable-verbs-ex11',
      prompt: 'Translate: "She recommends the fish."',
      answer: ['Sie empfiehlt den Fisch.'],
      hint: 'empfehlen (er empfiehlt) = to recommend, der Fisch = fish',
      explanation: 'empfehlen is inseparable and has the e → ie stem change: sie empfiehlt. The prefix emp- stays attached.',
    },
  ],
};

export default topic;
