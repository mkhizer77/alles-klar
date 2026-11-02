import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-21-lassen',
  level: 'B1',
  unit: 8,
  order: 30,
  title: 'lassen in all its meanings',
  germanTerm: 'lassen',
  tags: ['verbs', 'lassen', 'modal-like verbs', 'Perfekt'],
  summary: 'lassen is one verb with four everyday jobs: to leave something, to let someone do something, to have something done by someone else (das Auto reparieren lassen), and to make suggestions (Lass uns …).',
  steps: [
    {
      title: 'What lassen is for',
      text: `
With **lassen** you say that someone else does a job for you, that you allow something, or that you leave something somewhere. It also makes suggestions.

It covers several English verbs: *leave*, *let*, *have something done*. The forms are the same every time; only the sentence pattern changes.
`,
      examples: [
        { de: 'Ich lasse mein Auto reparieren.', en: 'I am having my car repaired. (someone else does it)' },
        { de: 'Lass uns ins Kino gehen!', en: 'Let us go to the cinema! (suggestion)' },
        { de: 'Lass die Tür bitte offen.', en: 'Please leave the door open.' },
      ],
    },
    {
      title: 'The forms: du lässt, er lässt',
      text: `
*lassen* changes its vowel (**a → ä**) in the *du* and *er / sie / es* forms. The past forms are **ließ** (Präteritum, the simple past) and **gelassen** (Partizip II).

| | Present |
|---|---|
| ich | lasse |
| du | **lässt** |
| er / sie / es | **lässt** |
| wir | lassen |
| ihr | lasst |
| sie / Sie | lassen |
`,
      examples: [
        { de: 'Er lässt seine Tasche immer im Auto.', en: 'He always leaves his bag in the car. (er lässt)' },
        { de: 'Ihr lasst mich nie ausreden.', en: 'You never let me finish speaking. (ihr lasst: no umlaut)' },
        { de: 'Der Lehrer ließ uns früher gehen.', en: 'The teacher let us leave early. (Präteritum: ließ)' },
      ],
    },
    {
      title: 'Meaning 1: leave something somewhere',
      text: `
With just an **object** and no second verb, *lassen* means **to leave** something somewhere. Here it is an ordinary full verb.
`,
      examples: [
        { de: 'Ich lasse den Schlüssel zu Hause.', en: 'I leave the key at home.' },
        { de: 'Lass den Hund im Garten.', en: 'Leave the dog in the garden.' },
        { de: 'Sie lässt die Kinder allein zu Hause.', en: 'She leaves the children alone at home.' },
      ],
    },
    {
      title: 'Meaning 2: let someone do something',
      text: `
*lassen* + **person** + **infinitive** (the basic verb form) means **to let, to allow**. The infinitive goes to the end without *zu*, exactly like after a modal verb. This is also a soft way to ask for permission: *Lässt du mich fahren?*
`,
      examples: [
        { de: 'Meine Eltern lassen mich ausgehen.', en: 'My parents let me go out.' },
        { de: 'Meine Chefin lässt mich früher gehen.', en: 'My boss lets me leave earlier.' },
        { de: 'Lässt du mich fahren?', en: 'Will you let me drive? (asking for permission)' },
      ],
    },
    {
      title: 'Meaning 3: have something done',
      text: `
*lassen* + **thing** + **infinitive** means **to have something done** by someone else. *Ich lasse mein Auto reparieren* does not mean "I let my car repair": it means I get it repaired, and a mechanic does the work.

With a reflexive Dative pronoun (**mir**, **dir**, **sich**) you say what is done to you: *Ich lasse mir die Haare schneiden.*
`,
      examples: [
        { de: 'Wir lassen die Wohnung renovieren.', en: 'We are having the flat renovated. (someone else does it)' },
        { de: 'Ich lasse mir die Haare schneiden.', en: 'I am getting my hair cut. (mir = for me)' },
        { de: 'Er lässt das Auto waschen.', en: 'He has the car washed.' },
      ],
    },
    {
      title: 'Meaning 4: Lass uns … (suggestions)',
      text: `
**Lass uns** + infinitive means **let us …**. It is the normal way to suggest doing something together. To one friend: *Lass uns*; to a group: *Lasst uns*; formally: *Lassen Sie uns*. The infinitive goes to the end.
`,
      examples: [
        { de: 'Lass uns heute Abend ins Kino gehen!', en: 'Let us go to the cinema tonight! (to one person)' },
        { de: 'Lasst uns anfangen!', en: 'Let us start! (to a group)' },
        { de: 'Lassen Sie uns das morgen besprechen.', en: 'Let us discuss that tomorrow. (formal)' },
      ],
    },
    {
      title: 'The Perfekt: gelassen or double infinitive',
      text: `
Here is the trap. When *lassen* is a **full verb** with no other verb (meaning 1), the Perfekt uses the normal participle **gelassen**.

When *lassen* comes **with another infinitive** (meanings 2 and 3), the Perfekt uses a **double infinitive**, just like the modal verbs: *… reparieren lassen*, not *repariert gelassen*.
`,
      examples: [
        { de: 'Er hat sein Handy im Taxi gelassen.', en: 'He left his phone in the taxi. (full verb: gelassen)' },
        { de: 'Sie hat das Fahrrad reparieren lassen.', en: 'She had the bike repaired. (with infinitive: double infinitive)' },
        { de: 'Wir haben die Kinder spielen lassen.', en: 'We let the children play. (double infinitive)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'lassen + infinitive behaves like a modal verb: the infinitive goes to the end without zu.' },
    { topicId: 'b1-03-modals-perfekt', note: 'The double infinitive in the Perfekt (reparieren lassen) follows the same rule as modal verbs.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'sich lassen + infinitive (das lässt sich machen) appears there as a way of saying "can be done".' },
    { topicId: 'a1-15-irregular-present', note: 'lassen is a stem-changing verb: du lässt, er lässt.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'Ich lasse mir die Haare schneiden uses the reflexive Dative pronoun mir.' },
  ],
  edgeCases: [
    '**Ich lasse mein Auto reparieren** means someone **else** repairs it. If you repair it yourself, say *Ich repariere mein Auto*.',
    'Perfekt with an infinitive = double infinitive: *Ich habe es machen **lassen***. Perfekt as a full verb = *gelassen*: *Ich habe es zu Hause **gelassen***.',
    '**du lässt** and **er lässt** are identical (both with ä). **ihr lasst** has no umlaut.',
    'If you meet **Das lässt sich ändern**, it means "it can be changed", not "it changes itself". You do not need to use this form yourself; say *Das kann man ändern*.',
    'The imperative to one person is **Lass** (no ending); to a group **Lasst**; formal **Lassen Sie**.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-21-lassen-ex01',
      prompt: 'What does "Ich lasse mir die Haare schneiden." mean?',
      options: ['I cut my hair myself.', 'I am getting my hair cut.', 'I let my hair grow.'],
      answer: 1,
      explanation: 'lassen + infinitive here means "have something done": someone else (the hairdresser) cuts the hair. mir shows it is done for me.',
    },
    {
      type: 'fill',
      id: 'b1-21-lassen-ex02',
      prompt: 'Er ___ (lassen) seine Tasche immer im Auto.',
      answer: ['lässt'],
      explanation: 'lassen changes its vowel in the er-form: er lässt. Here it is a full verb meaning "leave".',
    },
    {
      type: 'fill',
      id: 'b1-21-lassen-ex03',
      prompt: 'Meine Chefin ___ mich heute früher gehen. (lassen)',
      answer: ['lässt'],
      explanation: 'lassen + person + infinitive = allow. Meine Chefin is er/sie/es, so the form is lässt.',
    },
    {
      type: 'mc',
      id: 'b1-21-lassen-ex04',
      prompt: 'Perfekt: "Wir haben das Haus ___."',
      options: ['renovieren lassen', 'gelassen renovieren', 'renovieren gelassen'],
      answer: 0,
      explanation: 'With another infinitive, lassen forms the Perfekt with a double infinitive: renovieren lassen. gelassen is only used when lassen is a full verb.',
    },
    {
      type: 'match',
      id: 'b1-21-lassen-ex05',
      prompt: 'Match each sentence with the meaning of lassen.',
      pairs: [
        ['Ich lasse den Hund im Garten.', 'leave'],
        ['Sie lässt die Kinder fernsehen.', 'allow'],
        ['Er lässt das Auto waschen.', 'have something done'],
        ['Lass uns gehen!', 'suggestion'],
      ],
      explanation: 'Look at the pattern: object only = leave; person + infinitive = allow; thing + infinitive = have done; Lass uns = suggestion.',
    },
    {
      type: 'order',
      id: 'b1-21-lassen-ex06',
      prompt: 'Build the sentence: "Let us go to the cinema tonight!"',
      words: ['heute', 'uns', 'Lass', 'ins', 'Abend', 'gehen!', 'Kino'],
      answer: ['Lass uns heute Abend ins Kino gehen!'],
      explanation: 'Lass uns starts the suggestion; the infinitive gehen goes to the end. Time (heute Abend) comes before place (ins Kino).',
    },
    {
      type: 'fill',
      id: 'b1-21-lassen-ex07',
      prompt: 'Ich habe meinen Schirm im Büro ___. (lassen, Partizip II)',
      answer: ['gelassen'],
      explanation: 'No second infinitive here, so lassen is a full verb and takes its normal participle gelassen.',
    },
    {
      type: 'mc',
      id: 'b1-21-lassen-ex08',
      prompt: 'Complete: "Meine Eltern ___ mich nicht allein reisen."',
      options: ['lassen', 'lässt', 'lasst'],
      answer: 0,
      explanation: 'Meine Eltern is plural (sie), so the form is lassen. The meaning is "allow": they do not let me travel alone.',
    },
    {
      type: 'translate',
      id: 'b1-21-lassen-ex09',
      prompt: 'Translate: "I am having my car repaired."',
      answer: ['Ich lasse mein Auto reparieren.'],
      hint: 'lassen + reparieren; das Auto',
      explanation: 'lassen + object + infinitive: the infinitive reparieren goes to the end. Someone else does the repairing.',
    },
    {
      type: 'mc',
      id: 'b1-21-lassen-ex10',
      prompt: 'What does "Wir lassen die Wohnung renovieren." mean?',
      options: ['We are having the flat renovated.', 'We are renovating the flat ourselves.', 'We are leaving the flat.'],
      answer: 0,
      explanation: 'lassen + object + infinitive = have something done: someone else renovates the flat.',
    },
    {
      type: 'order',
      id: 'b1-21-lassen-ex11',
      prompt: 'Build the sentence: "She left her children alone at home."',
      words: ['ihre', 'hat', 'Sie', 'zu', 'allein', 'Kinder', 'gelassen.', 'Hause'],
      answer: ['Sie hat ihre Kinder allein zu Hause gelassen.'],
      explanation: 'lassen here means "leave" with no second infinitive, so the Perfekt uses gelassen at the end.',
    },
    {
      type: 'fill',
      id: 'b1-21-lassen-ex12',
      prompt: 'Der Lehrer ___ die Schüler gestern früher gehen. (lassen, Präteritum)',
      answer: ['ließ'],
      explanation: 'The Präteritum of lassen is ließ (long ie, with ß). The meaning is "allowed them to go".',
    },
  ],
};

export default topic;
