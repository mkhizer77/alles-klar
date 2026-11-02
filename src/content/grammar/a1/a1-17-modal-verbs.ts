import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-17-modal-verbs',
  level: 'A1',
  unit: 3,
  order: 20,
  title: 'Modal verbs 1: können, müssen, wollen',
  germanTerm: 'Modalverben',
  tags: ['verbs', 'modal verbs', 'sentence bracket', 'infinitive', 'word order'],
  summary: 'Modal verbs (can, must, want) are conjugated in position 2 and send the main verb, as an infinitive, to the end of the sentence.',
  steps: [
    {
      title: 'What a modal verb does',
      text: `
A **modal verb** (*Modalverb*) does not describe an action itself. It says **how** you relate to an action: can you do it, must you do it, do you want to? English does the same: *I **can** swim, I **must** go, I **want to** eat.*

This lesson covers three: **können** (can), **müssen** (must, have to) and **wollen** (want to).
`,
      examples: [
        { de: 'Ich kann schwimmen.', en: 'I can swim. (ability)' },
        { de: 'Ich muss arbeiten.', en: 'I have to work. (necessity)' },
        { de: 'Ich will schlafen.', en: 'I want to sleep. (wish)' },
      ],
    },
    {
      title: 'The forms',
      text: `
The **singular** changes its vowel, and **ich** and **er / sie / es** have **no ending**: they are identical. The plural is regular.

| | können | müssen | wollen |
|---|---|---|---|
| ich | **kann** | **muss** | **will** |
| du | kannst | musst | willst |
| er / sie / es | **kann** | **muss** | **will** |
| wir | können | müssen | wollen |
| ihr | könnt | müsst | wollt |
| sie / Sie | können | müssen | wollen |
`,
      examples: [
        { de: 'Er kann gut kochen.', en: 'He can cook well. (er kann: no ending)' },
        { de: 'Du musst heute arbeiten.', en: 'You have to work today. (du musst)' },
        { de: 'Wir wollen ins Kino gehen.', en: 'We want to go to the cinema. (plural: regular)' },
        { de: 'Könnt ihr mir helfen?', en: 'Can you all help me? (ihr könnt)' },
      ],
    },
    {
      title: 'The sentence bracket',
      text: `
The key rule: the modal is conjugated and stands in **position 2**. The main verb goes to the **end** as an **infinitive** (the -en form). The two verbs form a **bracket** (*Satzklammer*) around everything else.

| position 1 | position 2 | middle | end |
|---|---|---|---|
| Ich | **kann** | heute | **kommen**. |
| Er | **muss** | morgen | **arbeiten**. |
| **Kannst** | du | mir | **helfen**? |

In a yes/no question the modal comes first; the infinitive still goes last.
`,
      examples: [
        { de: 'Ich kann heute kommen.', en: 'I can come today. (kann … kommen)' },
        { de: 'Er muss morgen arbeiten.', en: 'He has to work tomorrow. (muss … arbeiten)' },
        { de: 'Wir wollen am Samstag ins Kino gehen.', en: 'We want to go to the cinema on Saturday.' },
        { de: 'Kannst du mir helfen?', en: 'Can you help me? (modal first in a question)' },
      ],
    },
    {
      title: 'nicht and separable verbs in the bracket',
      text: `
Two things to watch inside the bracket. **nicht** goes right **before** the infinitive: *Ich kann heute **nicht kommen**.*

A **separable verb** does not separate here. It is an infinitive at the end, so it stays in **one piece**: *Ich muss früh **aufstehen**.*
`,
      examples: [
        { de: 'Ich kann heute nicht kommen.', en: "I can't come today. (nicht before the infinitive)" },
        { de: 'Wir müssen um acht Uhr aufstehen.', en: 'We have to get up at eight. (aufstehen stays whole)' },
        { de: 'Er will nicht mitkommen.', en: "He doesn't want to come along. (nicht + whole separable verb)" },
      ],
    },
    {
      title: 'Modal without a main verb',
      text: `
When the action is obvious, you can drop the infinitive. This is very common with **können** (*Deutsch sprechen* → *Deutsch*) and **müssen** (*nach Hause gehen* → *nach Hause*).
`,
      examples: [
        { de: 'Ich kann Deutsch.', en: 'I can speak German. (sprechen is understood)' },
        { de: 'Ich muss nach Hause.', en: 'I have to go home. (gehen is understood)' },
        { de: 'Ich will das nicht.', en: "I don't want that. (no main verb needed)" },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-17b-modal-verbs-2', note: 'The sibling topic adds möchten, dürfen and sollen; they use the same bracket.' },
    { topicId: 'a1-06-verb-second', note: 'The modal takes position 2; the infinitive at the end completes the bracket.' },
    { topicId: 'a1-16-separable-verbs', note: 'After a modal, separable verbs do not separate: aufstehen stays whole.' },
    { topicId: 'a1-15-irregular-present', note: 'Modals also change their vowel, but in all three singular forms.' },
    { topicId: 'a1-13-negation', note: 'nicht usually goes right before the infinitive: Ich kann nicht kommen.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The sentence bracket is described in full with the midfield word order.' },
  ],
  edgeCases: [
    '**ich** and **er** have no ending: *ich kann, er kann*; *ich muss, er muss*. *Er kannt* and *er musst* are wrong.',
    'The main verb goes to the **end** as an infinitive: *Ich kann schwimmen*, not *Ich kann schwimme* or *Ich schwimmen kann*.',
    '**wollen** is direct and strong. For ordering or polite wishes use **möchten** (next topic): *Ich möchte einen Kaffee.*',
    '**müssen nicht** means *do not have to*, not *must not*: *Du musst nicht kommen* = you don\'t have to come. *Must not* is **nicht dürfen** (next topic).',
    'The plural is regular: *wir können, ihr könnt, sie können*. Only the singular changes its vowel.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-17-modal-verbs-ex01',
      prompt: 'Ich ___ gut schwimmen. (können)',
      answer: ['kann'],
      explanation: 'ich + können = kann, with no ending. The vowel changes ö → a in the singular.',
    },
    {
      type: 'fill',
      id: 'a1-17-modal-verbs-ex02',
      prompt: 'Er ___ heute arbeiten. (müssen)',
      answer: ['muss'],
      explanation: 'er + müssen = muss. ich and er are identical and have no ending.',
    },
    {
      type: 'mc',
      id: 'a1-17-modal-verbs-ex03',
      prompt: 'Which form is wrong?',
      options: ['ich kann', 'er kannt', 'du kannst'],
      answer: 1,
      explanation: 'er takes no ending with a modal verb: er kann, exactly like ich kann. du kannst is correct.',
    },
    {
      type: 'fill',
      id: 'a1-17-modal-verbs-ex04',
      prompt: 'Er ___ ein neues Auto kaufen. (wollen)',
      answer: ['will'],
      explanation: 'er + wollen = will: the vowel changes o → i in the singular, and there is no ending. kaufen stays at the end.',
    },
    {
      type: 'order',
      id: 'a1-17-modal-verbs-ex05',
      prompt: 'Build the sentence: "I want to go to the cinema."',
      words: ['gehen.', 'ins', 'will', 'Kino', 'Ich'],
      answer: ['Ich will ins Kino gehen.'],
      explanation: 'The modal will is second, the infinitive gehen goes to the end, ins Kino sits in the middle.',
    },
    {
      type: 'fill',
      id: 'a1-17-modal-verbs-ex06',
      prompt: '___ du mir helfen? (können)',
      answer: ['Kannst'],
      explanation: 'du + können = kannst. In a yes/no question the modal comes first; helfen stays at the end.',
    },
    {
      type: 'mc',
      id: 'a1-17-modal-verbs-ex07',
      prompt: 'Which sentence is correct?',
      options: ['Ich kann heute nicht komme.', 'Ich kann heute nicht kommen.', 'Ich kann kommen heute nicht.'],
      answer: 1,
      explanation: 'The main verb is an infinitive (kommen) at the very end, with nicht right before it.',
    },
    {
      type: 'mc',
      id: 'a1-17-modal-verbs-ex08',
      prompt: 'Complete: "Ich muss morgen früh ___."',
      options: ['stehe auf', 'aufstehen', 'auf stehen'],
      answer: 1,
      explanation: 'After a modal the separable verb stays whole as an infinitive at the end: aufstehen.',
    },
    {
      type: 'order',
      id: 'a1-17-modal-verbs-ex09',
      prompt: 'Build the sentence: "He does not want to come along."',
      words: ['mitkommen.', 'nicht', 'will', 'Er'],
      answer: ['Er will nicht mitkommen.'],
      explanation: 'will is second, nicht goes right before the infinitive, and the separable verb mitkommen stays in one piece at the end.',
    },
    {
      type: 'translate',
      id: 'a1-17-modal-verbs-ex10',
      prompt: 'Translate: "We have to work today."',
      answer: ['Wir müssen heute arbeiten.', 'Heute müssen wir arbeiten.'],
      hint: 'müssen = to have to, arbeiten = to work',
      explanation: 'wir + müssen = müssen (plural is regular). arbeiten goes to the end as an infinitive.',
    },
    {
      type: 'translate',
      id: 'a1-17-modal-verbs-ex11',
      prompt: 'Translate: "Can you speak German?" (formal)',
      answer: ['Können Sie Deutsch sprechen?', 'Können Sie Deutsch?'],
      hint: 'sprechen = to speak',
      explanation: 'Formal Sie takes können. The infinitive sprechen goes to the end, or can be dropped: Können Sie Deutsch?',
    },
  ],
};

export default topic;
