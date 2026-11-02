import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-28-subjunctions-obwohl-damit',
  level: 'A2',
  unit: 10,
  order: 31,
  title: 'obwohl and damit: although, so that',
  germanTerm: 'Subjunktionen: obwohl, damit',
  tags: ['subordinate clauses', 'conjunctions', 'word order', 'contrast', 'purpose', 'verb final'],
  summary: 'obwohl (although) and damit (so that) open a subordinate clause with the verb at the end: obwohl gives a contrast, damit gives a purpose.',
  steps: [
    {
      title: 'Verb at the end, once more',
      text: `
A **subjunction** (*Subjunktion*: a joining word that sends the verb to the end) opens a **subordinate clause** (*Nebensatz*). You know the pattern from *weil* and *dass*: comma, subjunction, and the verb at the very end.

If the subordinate clause comes first, the main clause starts with its **verb**, because the whole clause counts as position 1.
`,
      examples: [
        { de: 'Ich gehe joggen, obwohl es regnet.', en: 'I go jogging although it is raining. (regnet at the end)' },
        { de: 'Obwohl es regnet, gehe ich joggen.', en: 'Although it is raining, I go jogging. (clause first, then gehe)' },
        { de: 'Ich spreche langsam, damit du mich verstehst.', en: 'I speak slowly so that you understand me.' },
      ],
    },
    {
      title: 'obwohl: although',
      text: `
**obwohl** means *although* or *even though*. It introduces a fact that makes the main clause **surprising**: you expect one thing, and the opposite happens.

The verb of the *obwohl*-clause goes to the end. In the Perfekt or with a modal verb, the conjugated part (the part with the personal ending) goes last.
`,
      examples: [
        { de: 'Obwohl es kalt ist, trägt er keine Jacke.', en: 'Although it is cold, he is not wearing a jacket.' },
        { de: 'Er arbeitet weiter, obwohl er müde ist.', en: 'He keeps working although he is tired.' },
        { de: 'Sie kommt, obwohl sie wenig Zeit hat.', en: 'She is coming even though she has little time.' },
        { de: 'Obwohl ich gelernt habe, war der Test schwer.', en: 'Although I studied, the test was hard. (Perfekt: habe at the end)' },
      ],
    },
    {
      title: 'obwohl or trotzdem?',
      text: `
*obwohl* has a partner among the connectors: **trotzdem** (nevertheless). Both express the same contrast. The difference is only word order.

*obwohl* sends the verb to the end. *trotzdem* takes position 1, and the verb comes right after it. Use one or the other, not both in the same sentence.
`,
      examples: [
        { de: 'Obwohl es regnet, gehen wir raus.', en: 'Although it is raining, we are going out. (verb at the end)' },
        { de: 'Es regnet, trotzdem gehen wir raus.', en: 'It is raining; nevertheless we are going out. (verb after trotzdem)' },
      ],
    },
    {
      title: 'damit: so that',
      text: `
**damit** means *so that* and gives a **purpose**: what you do something for. It is the normal choice when the two parts have **different subjects**: I explain, everyone understands.

With a modal verb, the modal goes to the very end of the *damit*-clause.
`,
      examples: [
        { de: 'Ich erkläre es langsam, damit alle es verstehen.', en: 'I explain it slowly so that everyone understands. (ich / alle)' },
        { de: 'Sie spart, damit ihre Kinder studieren können.', en: 'She saves so that her children can study. (modal können last)' },
        { de: 'Mach das Fenster zu, damit es warm bleibt.', en: 'Close the window so that it stays warm.' },
      ],
    },
    {
      title: 'damit or um … zu?',
      text: `
Both give a purpose. The rule in one line: **same subject** in both parts, use *um … zu*; **different subjects**, use **damit**.

*damit* is not wrong with the same subject, it just sounds a little heavier. *um … zu* with different subjects is impossible.
`,
      examples: [
        { de: 'Ich lerne, um die Prüfung zu bestehen.', en: 'I study in order to pass the exam. (same subject: um … zu)' },
        { de: 'Ich lerne, damit meine Eltern stolz sind.', en: 'I study so that my parents are proud. (different subjects: damit)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The verb-at-the-end rule is exactly the same as with weil and dass.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'obwohl is the subordinate partner of trotzdem; the meaning is the same, the word order is different.' },
    { topicId: 'a2-22-um-zu-ohne-zu', note: 'um … zu is the purpose clause for the same subject; damit is for different subjects.' },
    { topicId: 'a2-28b-time-subjunctions', note: 'bevor, nachdem, bis and seit(dem) are the time subjunctions; they use the same word order.' },
    { topicId: 'b1-18-cause-consequence-concession', note: 'At B1 you add dennoch, sodass and the full system of cause, result and contrast.' },
  ],
  edgeCases: [
    'After **obwohl** the verb goes to the end: *obwohl er müde ist*, not *obwohl er ist müde*.',
    'When the *obwohl*-clause comes first, the main clause starts with the **verb**: *Obwohl es regnet, gehe ich raus*, not *ich gehe raus*.',
    '**damit** is a subjunction (verb at the end) but it is also a da-compound meaning *with it*: *Was machst du damit?* The context tells you which.',
    '**obwohl** and **trotzdem** do not go in the same sentence. *Obwohl es regnet, gehe ich trotzdem raus* is heard in speech but is doubled; pick one.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex01',
      prompt: 'Complete: "Er geht joggen, ___ es regnet."',
      options: ['obwohl', 'damit', 'weil'],
      answer: 0,
      explanation: 'Jogging in the rain is a contrast to the weather: obwohl = although. weil would make the rain the reason for jogging.',
    },
    {
      type: 'fill',
      id: 'a2-28-subjunctions-obwohl-damit-ex02',
      prompt: 'Ich erkläre es noch einmal, ___ alle es verstehen. (so that)',
      answer: ['damit'],
      explanation: 'The clause gives a purpose with a different subject (ich / alle), so damit.',
    },
    {
      type: 'fill',
      id: 'a2-28-subjunctions-obwohl-damit-ex03',
      prompt: '___ er wenig Zeit hat, hilft er mir immer. (although)',
      answer: ['Obwohl'],
      explanation: 'Helping although he has little time is a contrast: obwohl. The verb hat stands at the end of its clause.',
    },
    {
      type: 'match',
      id: 'a2-28-subjunctions-obwohl-damit-ex04',
      prompt: 'Match the two halves of each sentence.',
      pairs: [
        ['Ich nehme einen Schirm mit,', 'damit ich nicht nass werde.'],
        ['Er trägt keine Jacke,', 'obwohl es kalt ist.'],
        ['Sie spricht langsam,', 'damit die Kinder sie verstehen.'],
        ['Wir gehen schwimmen,', 'obwohl das Wasser kalt ist.'],
      ],
      explanation: 'damit gives the purpose (why you do it), obwohl gives the surprising contrast. In every half the verb stands at the end.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex05',
      prompt: 'Which sentence has the correct word order?',
      options: ['Obwohl er ist müde, arbeitet er weiter.', 'Obwohl er müde ist, arbeitet er weiter.', 'Obwohl er müde ist, er arbeitet weiter.'],
      answer: 1,
      explanation: 'In the obwohl-clause the verb goes to the end (müde ist). The main clause then starts with its verb (arbeitet er).',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex06',
      prompt: 'Which sentence means the same as "Es regnet, trotzdem gehen wir raus."?',
      options: ['Obwohl es regnet, gehen wir raus.', 'Damit es regnet, gehen wir raus.', 'Weil es regnet, gehen wir raus.'],
      answer: 0,
      explanation: 'trotzdem (connector) and obwohl (subjunction) both express contrast. Only the word order is different.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex07',
      prompt: 'Complete: "Ich erkläre es dir, damit du es ___."',
      options: ['verstehen kannst', 'kannst verstehen', 'kannst du verstehen'],
      answer: 0,
      explanation: 'In a damit-clause the conjugated verb goes last. With a modal, the infinitive comes first and the modal at the very end: verstehen kannst.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex08',
      prompt: 'Complete: "Sie macht das Fenster auf, ___ frische Luft hereinkommt."',
      options: ['damit', 'um … zu', 'obwohl'],
      answer: 0,
      explanation: 'The subjects are different (sie / frische Luft), so um … zu is impossible. damit gives the purpose.',
    },
    {
      type: 'order',
      id: 'a2-28-subjunctions-obwohl-damit-ex09',
      prompt: 'Build the sentence: "She is saving money so that her children can study."',
      words: ['Kinder', 'können.', 'spart', 'ihre', 'Sie', 'damit', 'Geld,', 'studieren'],
      answer: ['Sie spart Geld, damit ihre Kinder studieren können.'],
      explanation: 'Main clause, comma, damit, subject ihre Kinder, infinitive studieren, and the modal können at the very end.',
    },
    {
      type: 'translate',
      id: 'a2-28-subjunctions-obwohl-damit-ex10',
      prompt: 'Translate: "Although it is cold, I am going swimming."',
      answer: ['Obwohl es kalt ist, gehe ich schwimmen.', 'Ich gehe schwimmen, obwohl es kalt ist.'],
      hint: 'schwimmen gehen = to go swimming',
      explanation: 'obwohl + es kalt ist (verb at the end). If the obwohl-clause comes first, the main clause starts with gehe.',
    },
  ],
};

export default topic;
