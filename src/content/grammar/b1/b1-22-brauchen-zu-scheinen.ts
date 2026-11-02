import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-22-brauchen-zu-scheinen',
  level: 'B1',
  unit: 8,
  order: 31,
  title: 'brauchen … zu and scheinen … zu',
  germanTerm: 'brauchen / scheinen + zu',
  tags: ['verbs', 'zu infinitive', 'modal meaning', 'necessity'],
  summary: 'Two ordinary verbs work like modal verbs with zu + infinitive: nicht / nur brauchen zu (do not have to / only need to) and scheinen zu (seem to); zu + infinitive goes to the end.',
  steps: [
    {
      title: 'What these verbs are for',
      text: `
You know the modal verbs *müssen* and *können*. Two **ordinary verbs** get a similar job when **zu + infinitive** (the basic verb form) follows them: **brauchen** says something is not necessary, **scheinen** reports an impression.

The pattern is always the same: the verb is in position 2, **zu + infinitive** stands at the end of the clause.
`,
      examples: [
        { de: 'Du brauchst nicht zu kommen.', en: 'You do not have to come.' },
        { de: 'Er scheint krank zu sein.', en: 'He seems to be ill.' },
      ],
    },
    {
      title: 'nicht / kein brauchen zu: not necessary',
      text: `
**nicht brauchen zu** or **kein … brauchen zu** means **do not have to**. It says the same as *nicht müssen*, but sounds softer and more polite. It is the natural way to reassure someone.

Careful: it means "not necessary", **not** "not allowed". "You must not" is *nicht dürfen*.
`,
      examples: [
        { de: 'Du brauchst nicht zu warten.', en: 'You do not have to wait. (= du musst nicht warten)' },
        { de: 'Ihr braucht keine Angst zu haben.', en: 'You do not need to be afraid. (kein does the negating)' },
        { de: 'Sie brauchen heute nicht zu kommen.', en: 'You do not have to come today. (formal Sie)' },
      ],
    },
    {
      title: 'nur brauchen zu: only need to',
      text: `
With **nur** instead of *nicht*, *brauchen zu* means **only need to**. It tells someone that one small thing is enough.

Without *zu* and with a noun, *brauchen* is just the full verb **to need**: *Ich brauche Hilfe*.
`,
      examples: [
        { de: 'Sie brauchen nur zu unterschreiben.', en: 'You only need to sign.' },
        { de: 'Du brauchst nur Bescheid zu sagen.', en: 'You only need to let me know.' },
        { de: 'Ich brauche einen neuen Stift.', en: 'I need a new pen. (full verb: no zu)' },
      ],
    },
    {
      title: 'scheinen zu: seems to',
      text: `
**scheinen zu** + infinitive reports an impression: **seems to**. The subject of *scheinen* is the person or thing you are talking about, and *scheinen* is conjugated normally.

*scheinen* without *zu* means **to shine**: *Die Sonne scheint*.
`,
      examples: [
        { de: 'Sie scheint glücklich zu sein.', en: 'She seems to be happy.' },
        { de: 'Das scheint nicht zu funktionieren.', en: 'That does not seem to work.' },
        { de: 'Das Problem scheint nicht so einfach zu sein.', en: 'The problem does not seem to be so simple.' },
      ],
    },
    {
      title: 'Where zu goes',
      text: `
**zu** stands directly before the infinitive at the **end** of the clause. Everything else (the object, *nicht*, an adjective) comes in between.

With a **separable verb** (a verb with a prefix that splits off, like *an|rufen*), *zu* goes **inside** the verb: **anzurufen**, **aufzustehen**. It is written as one word.
`,
      examples: [
        { de: 'Du brauchst nur anzurufen.', en: 'You only need to call. (an + zu + rufen)' },
        { de: 'Sie scheint jeden Tag früh aufzustehen.', en: 'She seems to get up early every day. (auf + zu + stehen)' },
        { de: 'Du brauchst dir keine Sorgen zu machen.', en: 'You do not need to worry. (zu machen at the end)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-21-zu-infinitive', note: 'Both verbs use the zu + infinitive construction, including zu inside separable verbs.' },
    { topicId: 'a1-17-modal-verbs', note: 'nicht brauchen zu replaces nicht müssen.' },
    { topicId: 'b1-22b-haben-sein-zu', note: 'haben … zu and sein … zu (Die Aufgabe ist leicht zu lösen) belong to the same family and have their own topic.' },
    { topicId: 'b1-24-futur-2-probability', note: 'scheinen zu is another way of expressing a guess, like wohl or wahrscheinlich.' },
  ],
  edgeCases: [
    '**Du brauchst nicht zu kommen** = you do not **have to** come. "You must not come" is *Du darfst nicht kommen*.',
    'In everyday speech people often drop *zu* after *brauchen* (**Du brauchst nicht kommen**). In writing and in the exam, keep the *zu*.',
    '**brauchen** without *zu* and with a noun just means "to need": *Ich brauche Hilfe*.',
    'With separable verbs *zu* goes inside the verb: *Du brauchst nur **anzurufen***, not *zu anrufen*.',
    '**scheinen** without *zu* means "to shine": *Die Sonne scheint*. With *zu* + infinitive it means "seems to".',
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
      prompt: 'Er ___ (scheinen) müde zu sein.',
      answer: ['scheint'],
      explanation: 'scheinen is conjugated normally in position 2: er scheint. The infinitive zu sein stands at the end.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex03',
      prompt: 'Ihr ___ (brauchen) heute nicht zu warten.',
      answer: ['braucht'],
      explanation: 'brauchen is a regular verb: ihr braucht. With nicht … zu it means "do not have to".',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex04',
      prompt: 'Rewrite "Ihr müsst nicht warten." with brauchen.',
      options: ['Ihr braucht nicht zu warten.', 'Ihr braucht nicht warten zu.', 'Ihr braucht nicht gewartet.'],
      answer: 0,
      explanation: 'nicht müssen = nicht brauchen zu. zu stands directly before the infinitive warten at the end.',
    },
    {
      type: 'match',
      id: 'b1-22-brauchen-zu-scheinen-ex05',
      prompt: 'Match each construction with its meaning.',
      pairs: [
        ['nicht brauchen … zu', 'do not have to'],
        ['nur brauchen … zu', 'only need to'],
        ['scheinen … zu', 'seem to'],
        ['nicht dürfen', 'must not'],
      ],
      explanation: 'brauchen softens necessity (not necessary / only necessary), scheinen gives an impression. nicht dürfen is a real ban.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex06',
      prompt: 'Du brauchst nur ___ (anrufen), dann komme ich.',
      answer: ['anzurufen'],
      explanation: 'anrufen is separable, so zu goes between the prefix and the stem: anzurufen. nur brauchen zu = only need to.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex07',
      prompt: 'Which sentence means "You must not smoke here"?',
      options: ['Du brauchst hier nicht zu rauchen.', 'Du darfst hier nicht rauchen.', 'Du scheinst hier nicht zu rauchen.'],
      answer: 1,
      explanation: 'A ban needs nicht dürfen. Du brauchst nicht zu rauchen only says it is not necessary; Du scheinst nicht zu rauchen means you seem not to smoke.',
    },
    {
      type: 'order',
      id: 'b1-22-brauchen-zu-scheinen-ex08',
      prompt: 'Build the sentence: "You do not need to worry."',
      words: ['keine', 'Du', 'dir', 'brauchst', 'machen.', 'Sorgen', 'zu'],
      answer: ['Du brauchst dir keine Sorgen zu machen.'],
      explanation: 'brauchen in position 2, then the pronoun dir, the object keine Sorgen, and zu machen at the end. keine does the negating.',
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
      type: 'order',
      id: 'b1-22-brauchen-zu-scheinen-ex10',
      prompt: 'Build the sentence: "The problem does not seem to be so simple."',
      words: ['scheint', 'Problem', 'Das', 'so', 'nicht', 'sein.', 'einfach', 'zu'],
      answer: ['Das Problem scheint nicht so einfach zu sein.'],
      explanation: 'scheint takes position 2; nicht so einfach fills the middle; zu sein closes the sentence.',
    },
    {
      type: 'translate',
      id: 'b1-22-brauchen-zu-scheinen-ex11',
      prompt: 'Translate: "You only need to sign." (formal Sie)',
      answer: ['Sie brauchen nur zu unterschreiben.'],
      hint: 'nur brauchen … zu; unterschreiben = to sign',
      explanation: 'nur brauchen zu = only need to. brauchen in position 2, nur in the middle, zu unterschreiben at the end.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex12',
      prompt: 'Which sentence means "The sun is shining"?',
      options: ['Die Sonne scheint zu scheinen.', 'Die Sonne scheint.', 'Die Sonne braucht zu scheinen.'],
      answer: 1,
      explanation: 'scheinen without zu + infinitive is the full verb "to shine". Only with zu + infinitive does it mean "seems to".',
    },
  ],
};

export default topic;
