import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-17b-modal-verbs-2',
  level: 'A1',
  unit: 3,
  order: 21,
  title: 'Modal verbs 2: möchten, dürfen, sollen',
  germanTerm: 'Modalverben (2)',
  tags: ['verbs', 'modal verbs', 'politeness', 'permission', 'advice'],
  summary: 'möchten (would like), dürfen (may) and sollen (should) work like the first three modals: conjugated in position 2, with the main verb as an infinitive at the end.',
  steps: [
    {
      title: 'Three more modals, same bracket',
      text: `
You already know *können, müssen, wollen*. Three more **modal verbs** (*Modalverben*) work exactly the same way: the modal sits in **position 2** and the main verb goes to the **end** as an infinitive.

**möchten** = would like to (polite wish), **dürfen** = may, to be allowed to (permission), **sollen** = should, to be supposed to (advice or someone else's wish).
`,
      examples: [
        { de: 'Ich möchte einen Kaffee trinken.', en: 'I would like to drink a coffee. (polite wish)' },
        { de: 'Hier darf man rauchen.', en: 'Smoking is allowed here. (permission)' },
        { de: 'Du sollst das lesen.', en: 'You should read that. (advice)' },
      ],
    },
    {
      title: 'The forms',
      text: `
**ich** and **er / sie / es** are identical again. Only **dürfen** changes its vowel in the singular (*ich darf*).

| | möchten | dürfen | sollen |
|---|---|---|---|
| ich | möchte | **darf** | soll |
| du | möchtest | darfst | sollst |
| er / sie / es | möchte | **darf** | soll |
| wir | möchten | dürfen | sollen |
| ihr | möchtet | dürft | sollt |
| sie / Sie | möchten | dürfen | sollen |
`,
      examples: [
        { de: 'Ich darf heute lange schlafen.', en: 'I am allowed to sleep in today. (ich darf)' },
        { de: 'Möchtest du Tee trinken?', en: 'Would you like to drink tea? (du möchtest)' },
        { de: 'Er soll mehr Sport machen.', en: 'He should do more sport. (er soll)' },
        { de: 'Wir dürfen hier parken.', en: 'We are allowed to park here. (plural: regular)' },
      ],
    },
    {
      title: 'wollen vs möchten',
      text: `
Both mean wanting. **wollen** is direct and strong, like a child saying *I want!* **möchten** is polite and is the normal form for ordering, asking and wishing.

In a café say *Ich **möchte** einen Kaffee, bitte*, never *Ich will*. Like other modals, möchten often stands without a main verb: *trinken* is understood.
`,
      examples: [
        { de: 'Ich möchte einen Kaffee, bitte.', en: 'I would like a coffee, please. (polite; no infinitive needed)' },
        { de: 'Ich will ein Eis!', en: 'I want an ice cream! (strong, like a child)' },
        { de: 'Möchten Sie etwas trinken?', en: 'Would you like something to drink? (polite offer)' },
      ],
    },
    {
      title: 'dürfen: permission, not ability',
      text: `
**können** = able to; **dürfen** = allowed to. *Ich kann nicht schwimmen* (I am not able) vs *Ich darf nicht schwimmen* (I am not allowed).

With the general pronoun **man** (one, you, people) dürfen names rules: *Hier darf man nicht parken.* And note: **nicht dürfen** = must not (forbidden), while **nicht müssen** = do not have to.
`,
      examples: [
        { de: 'Ich darf nicht schwimmen.', en: 'I am not allowed to swim. (permission)' },
        { de: 'Ich kann nicht schwimmen.', en: "I can't swim. (ability)" },
        { de: 'Hier darf man nicht parken.', en: 'You cannot park here. (man darf nicht = forbidden)' },
        { de: 'Du musst nicht kommen.', en: "You don't have to come. (nicht müssen = not necessary)" },
      ],
    },
    {
      title: 'sollen: advice and instructions',
      text: `
**sollen** means *should* or *be supposed to*. It often reports what **someone else** wants: a doctor, a teacher, a boss. It is weaker than *müssen*.
`,
      examples: [
        { de: 'Du sollst mehr schlafen.', en: 'You should sleep more. (advice)' },
        { de: 'Der Arzt sagt, ich soll mehr Sport machen.', en: 'The doctor says I should do more sport. (someone else wants it)' },
        { de: 'Ihr sollt die Hausaufgaben machen.', en: 'You all are supposed to do the homework. (instruction)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'The sibling topic: können, müssen, wollen and the sentence bracket in full.' },
    { topicId: 'a1-19-gern-lieber', note: 'möchten (would like, now) is not the same as mögen (to like) or gern.' },
    { topicId: 'a1-13-negation', note: 'nicht goes before the infinitive: Du darfst nicht rauchen.' },
    { topicId: 'a1-18-imperative', note: 'A question with a modal is politer than an imperative: Können Sie mir helfen?' },
  ],
  edgeCases: [
    '**möchten** for ordering and polite wishes; *Ich will einen Kaffee* sounds rude in a café.',
    '**können** ≠ **dürfen**: *Ich kann nicht* (I am unable), *Ich darf nicht* (I am not allowed).',
    '**müssen nicht** means *do not have to*, not *must not*. For *must not* use **nicht dürfen**: *Du darfst nicht kommen.*',
    '**ich** and **er** are identical: *ich darf, er darf*; *ich möchte, er möchte*. *Er darft* and *er möchtet* are wrong.',
    '**sollen** often reports what someone else wants: *Der Arzt sagt, ich soll mehr schlafen.* It is weaker than *müssen*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-17b-modal-verbs-2-ex01',
      prompt: 'Ich ___ einen Tee, bitte. (möchten)',
      answer: ['möchte'],
      explanation: 'ich + möchten = möchte. The main verb (trinken) is understood and can be dropped.',
    },
    {
      type: 'fill',
      id: 'a1-17b-modal-verbs-2-ex02',
      prompt: 'Er ___ hier nicht parken. (dürfen)',
      answer: ['darf'],
      explanation: 'er + dürfen = darf: the vowel changes ü → a in the singular, and there is no ending.',
    },
    {
      type: 'mc',
      id: 'a1-17b-modal-verbs-2-ex03',
      prompt: 'Which form is wrong?',
      options: ['ich darf', 'er darft', 'wir dürfen'],
      answer: 1,
      explanation: 'er takes no ending with a modal: er darf, the same as ich darf. The plural wir dürfen is regular.',
    },
    {
      type: 'match',
      id: 'a1-17b-modal-verbs-2-ex04',
      prompt: 'Match the modal verb with its meaning.',
      pairs: [
        ['können', 'can / to be able to'],
        ['müssen', 'must / to have to'],
        ['dürfen', 'may / to be allowed to'],
        ['möchten', 'would like to'],
        ['sollen', 'should / to be supposed to'],
      ],
      explanation: 'können = ability, müssen = necessity, dürfen = permission, möchten = polite wish, sollen = advice or someone else\'s wish.',
    },
    {
      type: 'mc',
      id: 'a1-17b-modal-verbs-2-ex05',
      prompt: 'You are in a café and want a coffee. What do you say?',
      options: ['Ich will einen Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Ich soll einen Kaffee.'],
      answer: 1,
      explanation: 'möchten is the polite form for ordering. wollen sounds demanding; sollen means "should".',
    },
    {
      type: 'fill',
      id: 'a1-17b-modal-verbs-2-ex06',
      prompt: 'Du ___ mehr schlafen. (sollen)',
      answer: ['sollst'],
      explanation: 'du + sollen = sollst. sollen keeps its vowel; only the ending changes.',
    },
    {
      type: 'fill',
      id: 'a1-17b-modal-verbs-2-ex07',
      prompt: 'Hier ___ man nicht parken. (dürfen)',
      answer: ['darf'],
      explanation: 'man takes the er form: man darf. dürfen expresses permission, here forbidden by nicht.',
    },
    {
      type: 'order',
      id: 'a1-17b-modal-verbs-2-ex08',
      prompt: 'Build the question: "Would you like to drink a coffee?" (du)',
      words: ['Kaffee', 'du', 'trinken?', 'Möchtest', 'einen'],
      answer: ['Möchtest du einen Kaffee trinken?'],
      explanation: 'In a yes/no question the modal comes first (Möchtest), then du, and the infinitive trinken closes the bracket.',
    },
    {
      type: 'mc',
      id: 'a1-17b-modal-verbs-2-ex09',
      prompt: 'What does "Ich darf nicht schwimmen." mean?',
      options: ['I am not able to swim.', 'I am not allowed to swim.', 'I do not want to swim.'],
      answer: 1,
      explanation: 'dürfen is about permission. Not being able would be Ich kann nicht schwimmen.',
    },
    {
      type: 'mc',
      id: 'a1-17b-modal-verbs-2-ex10',
      prompt: 'What does "Du musst nicht kommen." mean?',
      options: ['You must not come.', 'You do not have to come.', 'You cannot come.'],
      answer: 1,
      explanation: 'müssen + nicht = not necessary. "Must not" (forbidden) is nicht dürfen: Du darfst nicht kommen.',
    },
    {
      type: 'translate',
      id: 'a1-17b-modal-verbs-2-ex11',
      prompt: 'Translate: "May I come along?"',
      answer: ['Darf ich mitkommen?'],
      hint: 'dürfen = may, mitkommen = to come along',
      explanation: 'Permission is dürfen: ich darf. In a question the modal comes first, and the separable verb mitkommen stays whole at the end.',
    },
    {
      type: 'translate',
      id: 'a1-17b-modal-verbs-2-ex12',
      prompt: 'Translate: "You should sleep more." (one friend)',
      answer: ['Du sollst mehr schlafen.'],
      hint: 'sollen = should, mehr = more, schlafen = to sleep',
      explanation: 'Advice is sollen: du sollst. The infinitive schlafen goes to the end of the sentence.',
    },
  ],
};

export default topic;
