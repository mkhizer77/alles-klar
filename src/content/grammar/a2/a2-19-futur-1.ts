import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-19-futur-1',
  level: 'A2',
  unit: 7,
  order: 21,
  title: 'Future with werden and future with Präsens',
  germanTerm: 'Futur I',
  tags: ['verbs', 'tense', 'future', 'werden', 'word order'],
  summary: 'German usually talks about the future with the present tense plus a time word; the real future tense (werden + infinitive) is for predictions, promises and intentions.',
  steps: [
    {
      title: 'Two ways to talk about the future',
      text: `
German has a future tense, **Futur I**, built with **werden** + infinitive. But Germans use it much less than English speakers use *will*. Most of the time the **present tense** (*Präsens*) does the job, as long as a time word makes clear that you mean the future.

Both sentences below are correct; the first is more natural in everyday speech.
`,
      examples: [
        { de: 'Morgen fahre ich nach Köln.', en: 'Tomorrow I am going to Cologne. (Präsens + time word)' },
        { de: 'Ich werde dich morgen anrufen.', en: 'I will call you tomorrow. (Futur I)' },
        { de: 'Nächste Woche beginnt der Kurs.', en: 'The course starts next week. (Präsens)' },
      ],
    },
    {
      title: 'Plans: Präsens plus a time word',
      text: `
For plans and fixed arrangements use the **present tense + a time expression**: *morgen, nächste Woche, bald, am Montag, in zwei Jahren*.

Without a time word the present tense means *now*, so add one when you need to be clear. Do not translate every English *will* with *werden*: *I will see you tomorrow* is simply *Wir sehen uns morgen*.
`,
      examples: [
        { de: 'Am Samstag haben wir Besuch.', en: 'We have visitors on Saturday.' },
        { de: 'Wir sehen uns morgen.', en: 'We will see each other tomorrow. (no werden needed)' },
        { de: 'In zwei Jahren mache ich das Abitur.', en: 'In two years I am doing my Abitur.' },
      ],
    },
    {
      title: 'The forms of werden',
      text: `
**werden** is irregular in the *du* and *er* forms: the stem changes to **wir-**. The endings are the usual ones; only the stem is new.

| | werden |
|---|---|
| ich | werde |
| du | **wirst** |
| er / sie / es | **wird** |
| wir | werden |
| ihr | werdet |
| sie / Sie | werden |
`,
      examples: [
        { de: 'Wirst du mir helfen?', en: 'Will you help me? (du wirst)' },
        { de: 'Es wird heute Nacht schneien.', en: 'It is going to snow tonight. (es wird)' },
        { de: 'Wir werden ein Haus kaufen.', en: 'We will buy a house. (wir werden)' },
      ],
    },
    {
      title: 'werden second, infinitive last',
      text: `
*werden* is conjugated and stands in **position 2**. The main verb goes to the **end** of the sentence as an infinitive. This is the same bracket you know from modal verbs.

In a subordinate clause (after *dass, weil* …) *werden* moves to the **very end**, after the infinitive: *…, dass es morgen regnen **wird**.*
`,
      examples: [
        { de: 'Ich werde nächstes Jahr mehr Sport machen.', en: 'I will do more sport next year. (werde … machen)' },
        { de: 'Morgen werde ich dich anrufen.', en: 'Tomorrow I will call you. (time first, werde second)' },
        { de: 'Ich glaube, dass es morgen regnen wird.', en: 'I think it will rain tomorrow. (wird at the end of the dass-clause)' },
      ],
    },
    {
      title: 'When to choose werden',
      text: `
Use Futur I when you want to say more than a plan. A forecast, a promise or a firm decision sounds stronger with *werden*.

| meaning | example |
|---|---|
| **prediction** | Es wird morgen regnen. |
| **promise** | Ich werde dich anrufen. |
| **intention** | Ich werde mehr Sport machen. |
`,
      examples: [
        { de: 'Es wird heute Abend regnen.', en: 'It is going to rain this evening. (prediction)' },
        { de: 'Ich werde dir helfen, versprochen.', en: 'I will help you, I promise. (promise)' },
        { de: 'Ab Montag werde ich nicht mehr rauchen.', en: 'From Monday I will not smoke any more. (intention)' },
      ],
    },
    {
      title: 'werden also means "to become"',
      text: `
*werden* is also a normal verb meaning **to become**: *Ich werde müde* (I am getting tired), *Sie wird Ärztin* (she is becoming a doctor).

The test: if *werden* has an **infinitive** at the end, it is the future. If it is followed by an adjective or a noun, it means *become*.
`,
      examples: [
        { de: 'Es wird langsam dunkel.', en: 'It is slowly getting dark. (werden + adjective = become)' },
        { de: 'Sie wird Ärztin.', en: 'She is becoming a doctor. (werden + noun = become)' },
        { de: 'Ich werde morgen kochen.', en: 'I will cook tomorrow. (infinitive at the end = future)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'werden + infinitive forms the same sentence bracket as a modal verb: conjugated verb second, infinitive at the end.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The sentence bracket (Satzklammer) explains why the infinitive goes last.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'In a dass- or weil-clause, werden moves to the very end, after the infinitive.' },
    { topicId: 'b1-23-werden', note: 'At B1 werden gets a third job besides future and "to become".' },
    { topicId: 'b1-24-futur-2-probability', note: 'werden + wohl as a guess (Er wird wohl krank sein) is explained properly at B1.' },
  ],
  edgeCases: [
    'Do not translate every English *will* with *werden*. *I will see you tomorrow* is normally *Wir sehen uns morgen*.',
    'The second person is **du wirst**, not *du werdst*. The stem changes: werde – wirst – wird.',
    '*Ich werde Lehrer* means *I am becoming a teacher*. Only *werden* + **infinitive** at the end is the future tense.',
    'You may see *werden* + *wohl*: *Das wird wohl stimmen* = *That is probably true.* It is a guess, not a statement about the future.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex01',
      prompt: 'Ich ___ dich morgen anrufen. (werden)',
      answer: ['werde'],
      explanation: 'ich + werden = ich werde. The infinitive anrufen stays at the end.',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex02',
      prompt: 'Complete: "Du ___ das schaffen!"',
      options: ['werdest', 'wirst', 'wird'],
      answer: 1,
      explanation: 'werden is irregular in the du and er forms: du wirst, er wird.',
    },
    {
      type: 'match',
      id: 'a2-19-futur-1-ex03',
      prompt: 'Match the pronoun with the right form of werden.',
      pairs: [
        ['ich', 'werde'],
        ['du', 'wirst'],
        ['er', 'wird'],
        ['wir', 'werden'],
        ['ihr', 'werdet'],
      ],
      explanation: 'Only du and er/sie/es change the stem to wir-. The rest follow the regular pattern.',
    },
    {
      type: 'order',
      id: 'a2-19-futur-1-ex04',
      prompt: 'Build the sentence: "We will drive to Spain next year."',
      words: ['Jahr', 'werden', 'fahren.', 'nächstes', 'Spanien', 'Wir', 'nach'],
      answer: ['Wir werden nächstes Jahr nach Spanien fahren.', 'Wir werden nach Spanien nächstes Jahr fahren.'],
      explanation: 'werden is in position 2 and the infinitive fahren closes the sentence. Time (nächstes Jahr) normally comes before place (nach Spanien).',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex05',
      prompt: 'Which sentence is the most natural way to say "Tomorrow I am going to Berlin" in everyday German?',
      options: ['Morgen fahre ich nach Berlin.', 'Morgen werde ich nach Berlin fahren werden.', 'Morgen ich werde fahren nach Berlin.'],
      answer: 0,
      explanation: 'A plan with a time word is normally said in the Präsens. Option 2 has werden twice and option 3 breaks the verb-second rule.',
    },
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex06',
      prompt: 'Es ___ heute Abend regnen. (werden)',
      answer: ['wird'],
      explanation: 'es is third person singular: es wird. A weather prediction is a typical use of Futur I.',
    },
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex07',
      prompt: 'Ich glaube, dass er morgen kommen ___. (werden)',
      answer: ['wird'],
      explanation: 'In a dass-clause the conjugated verb goes to the very end, after the infinitive: … kommen wird.',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex08',
      prompt: 'Which sentence is a prediction with Futur I?',
      options: ['Es wird morgen schneien.', 'Es schneit.', 'Es wird kalt.'],
      answer: 0,
      explanation: 'Es wird morgen schneien has werden + an infinitive at the end: that is the future. Es wird kalt has no infinitive, so werden means "to become" there.',
    },
    {
      type: 'translate',
      id: 'a2-19-futur-1-ex09',
      prompt: 'Translate as a promise: "I will help you." (du form)',
      answer: ['Ich werde dir helfen.'],
      hint: 'helfen takes the Dative: dir',
      explanation: 'A promise uses werden + infinitive. helfen is a Dative verb, so the pronoun is dir.',
    },
    {
      type: 'order',
      id: 'a2-19-futur-1-ex10',
      prompt: 'Build the sentence: "You (plural) will pass the exam."',
      words: ['die', 'bestehen.', 'werdet', 'Ihr', 'Prüfung'],
      answer: ['Ihr werdet die Prüfung bestehen.'],
      explanation: 'ihr + werden = ihr werdet. The infinitive bestehen goes to the end.',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex11',
      prompt: 'In which sentence does werden mean "to become", not the future?',
      options: ['Ich werde morgen kochen.', 'Sie wird Ärztin.', 'Wir werden das Haus kaufen.'],
      answer: 1,
      explanation: 'Sie wird Ärztin has no infinitive at the end; werden is followed by a noun, so it means "to become": she is becoming a doctor.',
    },
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex12',
      prompt: 'Nächsten Monat ___ ich mehr Sport machen. (werden)',
      answer: ['werde'],
      explanation: 'The sentence starts with a time expression, so the verb werde is in position 2 and the subject ich comes after it.',
    },
  ],
};

export default topic;
