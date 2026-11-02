import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-23-werden',
  level: 'B1',
  unit: 8,
  order: 33,
  title: 'The three jobs of werden (future, passive, change)',
  germanTerm: 'werden',
  tags: ['verbs', 'werden', 'future', 'passive', 'tenses'],
  summary: 'werden has three jobs: as a full verb it means "to become", with an infinitive it builds the future, and with a Partizip II it builds the passive – the end of the clause tells you which.',
  steps: [
    {
      title: 'One verb, three jobs',
      text: `
**werden** appears in many German sentences, and it is easy to feel unsure what it means each time. There are only **three jobs**, and the word at the **end of the clause** tells you which one you are looking at.

An **adjective or noun** at the end = *to become*. An **infinitive** (the basic verb form) = the future. A **Partizip II** (the *ge-* form) = the passive.
`,
      examples: [
        { de: 'Es wird kalt.', en: 'It is getting cold. (adjective: become)' },
        { de: 'Ich werde morgen anrufen.', en: 'I will call tomorrow. (infinitive: future)' },
        { de: 'Das Haus wird gebaut.', en: 'The house is being built. (Partizip II: passive)' },
      ],
    },
    {
      title: 'The forms: du wirst, er wird',
      text: `
*werden* is irregular. The *du* and *er* forms lose the *-d-* of the stem: **du wirst, er wird**. The Präteritum (the simple past) is **wurde**, and the Partizip II is **geworden**.

| | Present | Präteritum |
|---|---|---|
| ich | werde | wurde |
| du | **wirst** | wurdest |
| er / sie / es | **wird** | wurde |
| wir | werden | wurden |
| ihr | werdet | wurdet |
| sie / Sie | werden | wurden |
`,
      examples: [
        { de: 'Du wirst bald 30.', en: 'You will soon be 30. (du wirst)' },
        { de: 'Er wurde gestern 40.', en: 'He turned 40 yesterday. (Präteritum: wurde)' },
      ],
    },
    {
      title: 'Job 1: becoming',
      text: `
As a full verb, *werden* means **to become, to get**. It describes a change. After it comes an **adjective** or a noun in the **Nominative** (the subject case), just as after *sein*.

The Perfekt uses **sein** and the participle **geworden**.
`,
      examples: [
        { de: 'Die Tage werden länger.', en: 'The days are getting longer.' },
        { de: 'Sie wird Lehrerin.', en: 'She is becoming a teacher. (Nominative noun)' },
        { de: 'Er ist gestern 30 geworden.', en: 'He turned 30 yesterday. (Perfekt: ist … geworden)' },
      ],
    },
    {
      title: 'Job 2: the future',
      text: `
*werden* + **infinitive** at the end = **Futur I**, the future tense. German often uses the present tense for the future, so *werden* mainly adds a sense of promise, prediction or firm intention.
`,
      examples: [
        { de: 'Ich werde dir helfen.', en: 'I will help you. (promise)' },
        { de: 'Es wird morgen regnen.', en: 'It is going to rain tomorrow. (prediction)' },
        { de: 'Wir werden nächstes Jahr nach Spanien fahren.', en: 'We will go to Spain next year. (infinitive at the end)' },
      ],
    },
    {
      title: 'Job 3: the passive',
      text: `
*werden* + **Partizip II** at the end = the **passive** (*Vorgangspassiv*, the "something is being done" form). The subject is not the doer but the thing something is done to.

In the past: **wurde** + Partizip II. In the Perfekt the participle of *werden* is **worden** without *ge-*, placed after the main participle.
`,
      examples: [
        { de: 'Der Brief wird geschrieben.', en: 'The letter is being written.' },
        { de: 'Die Brücke wurde 1950 gebaut.', en: 'The bridge was built in 1950. (wurde)' },
        { de: 'Das Auto ist repariert worden.', en: 'The car has been repaired. (Perfekt: ist … worden)' },
      ],
    },
    {
      title: 'A look-alike: würde means would',
      text: `
**würde** is the *Konjunktiv II* (the "would" form) of *werden*. It also takes an infinitive at the end, but it means **would**, not "will". It is not a tense; it is a polite or unreal way of speaking.
`,
      examples: [
        { de: 'Ich würde gern kommen.', en: 'I would like to come.' },
        { de: 'Würdest du mir helfen?', en: 'Would you help me?' },
        { de: 'Ich werde morgen kommen.', en: 'I will come tomorrow. (werde = will, not would)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-11-nominative', note: 'After werden as a full verb, the noun is in the Nominative, just as after sein.' },
    { topicId: 'a2-19-futur-1', note: 'Futur I with werden + infinitive is job 2.' },
    { topicId: 'b1-06-passive-present-past', note: 'The passive with werden + Partizip II is job 3.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'The passive Perfekt uses worden, not geworden.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'würde is the Konjunktiv II of werden and means "would".' },
  ],
  edgeCases: [
    '**geworden** (Perfekt of the full verb: *Er ist alt geworden*) vs **worden** (passive Perfekt: *Es ist gemacht worden*). Both go with *sein*.',
    'The full verb takes the **Nominative**: *Er wird **ein** guter Arzt*, not *einen*.',
    '**werden** + Partizip II is the passive, but **sein** + Partizip II is the Zustandspassiv (state): *Die Tür wird geschlossen* (is being closed) vs *Die Tür ist geschlossen* (is closed).',
    'In the future and passive, *werden* is only a helper: the real meaning is in the verb at the end. In job 1 **werden** carries the meaning itself.',
    '**du wirst / er wird** lose the *-d-* of the stem; do not write *werdst* or *werdt*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-23-werden-ex01',
      prompt: 'Which job does werden have in "Es wird dunkel."?',
      options: ['change (full verb)', 'future', 'passive'],
      answer: 0,
      explanation: 'dunkel is an adjective, so werden is a full verb meaning "become / get": it is getting dark.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex02',
      prompt: 'Which job does werden have in "Das Haus wird gebaut."?',
      options: ['passive', 'future', 'change (full verb)'],
      answer: 0,
      explanation: 'gebaut is a Partizip II, so werden + gebaut is the passive: the house is being built.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex03',
      prompt: 'Which job does werden have in "Ich werde morgen anrufen."?',
      options: ['future', 'passive', 'change (full verb)'],
      answer: 0,
      explanation: 'anrufen is an infinitive, so werden + infinitive is Futur I: I will call tomorrow.',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex04',
      prompt: 'Du ___ (werden) bald 30.',
      answer: ['wirst'],
      explanation: 'werden is irregular in the du-form: du wirst. Here it is the full verb: you will soon turn 30.',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex05',
      prompt: 'Sie ist Lehrerin ___. (werden, Perfekt)',
      answer: ['geworden'],
      explanation: 'As a full verb, werden forms the Perfekt with sein + geworden: she has become a teacher.',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex06',
      prompt: 'Das Auto ist gestern repariert ___. (passive Perfekt)',
      answer: ['worden'],
      explanation: 'In the passive Perfekt the participle of werden is worden, without ge-, placed after repariert.',
    },
    {
      type: 'match',
      id: 'b1-23-werden-ex07',
      prompt: 'Match each sentence with the job of werden / würde.',
      pairs: [
        ['Er wird müde.', 'change (full verb)'],
        ['Der Brief wird geschrieben.', 'passive'],
        ['Wir werden gewinnen.', 'future'],
        ['Ich würde gern kommen.', 'Konjunktiv II (would)'],
      ],
      explanation: 'Adjective at the end = change; Partizip II = passive; infinitive with werden = future; infinitive with würde = would.',
    },
    {
      type: 'order',
      id: 'b1-23-werden-ex08',
      prompt: 'Build the sentence: "The weather will get better tomorrow."',
      words: ['wird', 'Wetter', 'Das', 'besser', 'morgen', 'werden.'],
      answer: ['Das Wetter wird morgen besser werden.'],
      explanation: 'Two jobs in one sentence: wird is the future helper in position 2, and the infinitive werden (become) at the end is the full verb.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex09',
      prompt: 'Complete: "Er ___ gestern 40."',
      options: ['wurde', 'wird', 'worden'],
      answer: 0,
      explanation: 'gestern needs a past tense. The Präteritum of werden is wurde: he turned 40 yesterday.',
    },
    {
      type: 'translate',
      id: 'b1-23-werden-ex10',
      prompt: 'Translate: "The food is being cooked."',
      answer: ['Das Essen wird gekocht.'],
      hint: 'das Essen; kochen = to cook; passive',
      explanation: 'Passive present: wird + Partizip II (gekocht) at the end.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex11',
      prompt: 'In which sentence is werden used for the passive?',
      options: ['Die Kinder werden groß.', 'Die Kinder werden abgeholt.', 'Die Kinder werden spielen.'],
      answer: 1,
      explanation: 'abgeholt is a Partizip II, so this is the passive (the children are being picked up). groß is an adjective (change), spielen an infinitive (future).',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex12',
      prompt: 'Die Brücke ___ 1950 gebaut. (passive, Präteritum)',
      answer: ['wurde'],
      explanation: 'Passive in the past: wurde + Partizip II. The bridge was built in 1950.',
    },
  ],
};

export default topic;
