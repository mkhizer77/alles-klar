import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-17-modal-verbs',
  level: 'A1',
  unit: 3,
  order: 17,
  title: 'Modal verbs: können, müssen, wollen, möchten, dürfen, sollen',
  germanTerm: 'Modalverben',
  tags: ['verbs', 'modal verbs', 'sentence bracket', 'infinitive', 'word order'],
  summary: 'Modal verbs (can, must, want, would like, may, should) are conjugated in position 2 and send the main verb, as an infinitive, to the end of the sentence.',
  explanation: `
### What a modal verb does

A **modal verb** (*Modalverb*) does not describe an action itself. It says **how** the speaker relates to an action: is it possible, necessary, wanted, allowed? English has the same idea: *I **can** swim, I **must** go, I **want to** eat*.

| modal | meaning | example |
|---|---|---|
| **können** | can, to be able to | Ich **kann** schwimmen. |
| **müssen** | must, to have to | Ich **muss** arbeiten. |
| **wollen** | to want to (strong) | Ich **will** schlafen. |
| **möchten** | would like to (polite) | Ich **möchte** einen Kaffee. |
| **dürfen** | may, to be allowed to | Hier **darf** man rauchen. |
| **sollen** | should, to be supposed to | Du **sollst** das lesen. |

### The forms

Modal verbs are irregular in a special way: the **singular** (ich, du, er) changes its vowel, and **ich and er / sie / es have no ending** and are identical. The plural is regular.

| | können | müssen | wollen | möchten | dürfen | sollen |
|---|---|---|---|---|---|---|
| ich | **kann** | **muss** | **will** | möchte | **darf** | soll |
| du | kannst | musst | willst | möchtest | darfst | sollst |
| er / sie / es | **kann** | **muss** | **will** | möchte | **darf** | soll |
| wir | können | müssen | wollen | möchten | dürfen | sollen |
| ihr | könnt | müsst | wollt | möchtet | dürft | sollt |
| sie / Sie | können | müssen | wollen | möchten | dürfen | sollen |

Notice: *ich kann* (not *kanne*), *er muss* (not *musst*), *er will* (not *willt*). *möchten* and *sollen* do not change their vowel.

### Word order: the sentence bracket

This is the key rule. The modal verb is conjugated and stands in **position 2**. The main verb goes to the **end** of the sentence as an **infinitive** (the -en form). The two verbs form a bracket around everything else.

| position 1 | position 2 (modal) | middle | end (infinitive) |
|---|---|---|---|
| Ich | **kann** | heute nicht | **kommen**. |
| Er | **muss** | morgen früh | **aufstehen**. |
| Wir | **wollen** | am Samstag ins Kino | **gehen**. |
| **Möchtest** | du | einen Kaffee | **trinken**? |

A separable verb stays **in one piece** at the end: *Ich muss früh **aufstehen**.* Negation *nicht* goes in front of the infinitive: *Ich kann heute **nicht kommen**.*

### Modal without a main verb

When the action is obvious, the infinitive can be dropped, especially with *möchten*, *können* and *müssen*:

- Ich **möchte** einen Tee. – I would like a tea. (*trinken* is understood)
- Ich **kann** Deutsch. – I can (speak) German.
- Ich **muss** nach Hause. – I have to (go) home.

### wollen vs möchten

Both mean wanting. **wollen** is direct and strong, like a child saying *I want!* **möchten** is polite and is the normal form for ordering, asking and wishing. In a café: *Ich **möchte** einen Kaffee, bitte*, never *Ich will*.

### können, dürfen and man

*können* = ability or possibility; *dürfen* = permission. *Ich kann nicht schwimmen* (I am not able to) vs *Ich darf nicht schwimmen* (I am not allowed to). With the general pronoun **man** (one / you / people): *Hier **darf man** nicht parken.* – You cannot park here.

### Why it matters

Modal verbs let you say what you can, must, want and may do, which is half of everyday communication. The sentence bracket (conjugated verb second, other verb at the end) is the same structure used for the past tense and for the future, so learning it here pays off three times.
`,
  examples: [
    { de: 'Ich kann gut kochen.', en: 'I can cook well. (ability)' },
    { de: 'Du musst heute arbeiten.', en: 'You have to work today. (necessity)' },
    { de: 'Er will ein neues Auto kaufen.', en: 'He wants to buy a new car. (strong wish)' },
    { de: 'Ich möchte bitte einen Tee.', en: 'I would like a tea, please. (polite; no infinitive needed)' },
    { de: 'Hier darf man nicht rauchen.', en: 'Smoking is not allowed here. (permission)' },
    { de: 'Du sollst mehr schlafen.', en: 'You should sleep more. (advice / someone said so)' },
    { de: 'Kannst du mir helfen?', en: 'Can you help me? (modal first in a yes/no question, infinitive at the end)' },
    { de: 'Wir müssen um acht Uhr aufstehen.', en: 'We have to get up at eight. (separable verb stays whole at the end)' },
  ],
  connections: [
    { topicId: 'a1-06-verb-second', note: 'The modal takes position 2; the infinitive at the end completes the bracket.' },
    { topicId: 'a1-16-separable-verbs', note: 'After a modal, separable verbs do not separate: aufstehen stays whole.' },
    { topicId: 'a1-15-irregular-present', note: 'Modals also change their vowel, but in all three singular forms.' },
    { topicId: 'a1-13-negation', note: 'nicht usually goes right before the infinitive: Ich kann nicht kommen.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The sentence bracket is described in full with the midfield word order.' },
  ],
  edgeCases: [
    '**ich** and **er** have no ending: *ich kann, er kann*; *ich muss, er muss*. *Er kannt* and *er musst* are wrong.',
    'The main verb goes to the **end** as an infinitive: *Ich kann schwimmen*, not *Ich kann schwimme* or *Ich schwimmen kann*.',
    '**möchten** for ordering and polite wishes; *Ich will einen Kaffee* sounds rude in a café.',
    '**können** ≠ **dürfen**: *Ich kann nicht* (I am unable), *Ich darf nicht* (I am not allowed).',
    '**müssen nicht** means *do not have to*, not *must not*. *Du musst nicht kommen* = you don\'t have to come. For *must not* use **nicht dürfen**: *Du darfst nicht kommen.*',
    '**sollen** often reports what someone else wants: *Der Arzt sagt, ich soll mehr schlafen.* It is weaker than *müssen*.',
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
      type: 'order',
      id: 'a1-17-modal-verbs-ex03',
      prompt: 'Build the sentence: "I want to go to the cinema."',
      words: ['gehen.', 'ins', 'will', 'Kino', 'Ich'],
      answer: ['Ich will ins Kino gehen.'],
      explanation: 'The modal will is second, the infinitive gehen goes to the end, ins Kino sits in the middle.',
    },
    {
      type: 'mc',
      id: 'a1-17-modal-verbs-ex04',
      prompt: 'Which sentence is correct?',
      options: ['Ich kann heute nicht komme.', 'Ich kann heute nicht kommen.', 'Ich kann kommen heute nicht.'],
      answer: 1,
      explanation: 'The main verb is an infinitive (kommen) at the very end, with nicht right before it.',
    },
    {
      type: 'match',
      id: 'a1-17-modal-verbs-ex05',
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
      id: 'a1-17-modal-verbs-ex06',
      prompt: 'You are in a café and want a coffee. What do you say?',
      options: ['Ich will einen Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Ich soll einen Kaffee.'],
      answer: 1,
      explanation: 'möchten is the polite form for ordering. wollen sounds demanding; sollen means "should".',
    },
    {
      type: 'fill',
      id: 'a1-17-modal-verbs-ex07',
      prompt: '___ du mir helfen? (können)',
      answer: ['Kannst'],
      explanation: 'du + können = kannst. In a yes/no question the modal comes first; helfen stays at the end.',
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
      type: 'mc',
      id: 'a1-17-modal-verbs-ex09',
      prompt: 'What does "Du musst nicht kommen." mean?',
      options: ['You must not come.', 'You do not have to come.', 'You cannot come.'],
      answer: 1,
      explanation: 'müssen + nicht = not necessary. "Must not" (forbidden) is nicht dürfen: Du darfst nicht kommen.',
    },
    {
      type: 'fill',
      id: 'a1-17-modal-verbs-ex10',
      prompt: 'Hier ___ man nicht parken. (dürfen)',
      answer: ['darf'],
      explanation: 'man takes the er form: man darf. dürfen expresses permission, here forbidden by nicht.',
    },
    {
      type: 'translate',
      id: 'a1-17-modal-verbs-ex11',
      prompt: 'Translate: "We have to work today."',
      answer: ['Wir müssen heute arbeiten.', 'Heute müssen wir arbeiten.'],
      hint: 'müssen = to have to, arbeiten = to work',
      explanation: 'wir + müssen = müssen (plural is regular). arbeiten goes to the end as an infinitive.',
    },
    {
      type: 'translate',
      id: 'a1-17-modal-verbs-ex12',
      prompt: 'Translate: "Can you speak German?" (formal)',
      answer: ['Können Sie Deutsch sprechen?', 'Können Sie Deutsch?'],
      hint: 'sprechen = to speak',
      explanation: 'Formal Sie takes können. The infinitive sprechen goes to the end, or can be dropped: Können Sie Deutsch?',
    },
  ],
};

export default topic;
