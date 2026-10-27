import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-21-lassen',
  level: 'B1',
  unit: 8,
  order: 21,
  title: 'lassen in all its meanings',
  germanTerm: 'lassen',
  tags: ['verbs', 'lassen', 'modal-like verbs', 'Perfekt'],
  summary: 'lassen is one verb with five jobs: to leave something, to let someone do something, to have something done, to say something can be done (sich lassen), and to make suggestions (Lass uns …).',
  explanation: `
### One verb, five jobs

**lassen** is one of the most useful verbs in German, because it covers several English verbs: *leave*, *let*, *have (something done)*, *can be (done)*. The forms are the same every time; only the sentence pattern changes.

### Forms

| | Present | Präteritum | Partizip II |
|---|---|---|---|
| ich | lasse | ließ | gelassen |
| du | **lässt** | ließest | |
| er / sie / es | **lässt** | ließ | |
| wir | lassen | ließen | |
| ihr | lasst | ließt | |
| sie / Sie | lassen | ließen | |

Note the vowel change in *du* and *er / sie / es* (*a → ä*) and the long *ie* in the Präteritum.

### The five meanings

| Meaning | Pattern | Example |
|---|---|---|
| 1. **leave** something somewhere | lassen + object (full verb) | Ich **lasse** den Schlüssel zu Hause. |
| 2. **let / allow** someone to do something | lassen + person + infinitive | Meine Eltern **lassen** mich ausgehen. |
| 3. **have** something done by someone else | lassen + object + infinitive | Ich **lasse** mein Auto reparieren. |
| 4. **can be done** | sich lassen + infinitive | Das **lässt sich** machen. |
| 5. **suggestion** | Lass uns / Lasst uns + infinitive | **Lass uns** ins Kino gehen! |

**Meaning 3** is the one English learners find strange. *Ich lasse mein Auto reparieren* does not mean "I let my car repair" – it means **I get it repaired**; someone else does the work. With a reflexive pronoun you say what is done to you: *Ich lasse **mir** die Haare schneiden* (I get my hair cut).

**Meaning 4** is a handy replacement for the passive with *können*: *Das Problem lässt sich lösen* = *Das Problem kann gelöst werden* (the problem can be solved).

### lassen in the Perfekt

Here is the trap. When *lassen* is used **with another infinitive** (meanings 2–4), the Perfekt uses a **double infinitive**, like the modal verbs:

- Ich **habe** mein Auto **reparieren lassen**. (not *repariert gelassen*)
- Sie **hat** die Kinder **spielen lassen**.

When *lassen* is a **full verb** with no infinitive (meaning 1), it uses the normal participle **gelassen**:

- Ich **habe** den Schirm im Büro **gelassen**.

### Why it matters

*lassen* lets you say who really does a job (*reparieren lassen*), ask for permission in an indirect way (*Lässt du mich fahren?*), make suggestions (*Lass uns …*) and avoid heavy passive sentences (*lässt sich machen*). All of these are everyday B1 situations, from the hairdresser to a planning conversation with friends.
`,
  examples: [
    { de: 'Lass die Tür bitte offen.', en: 'Please leave the door open. (meaning 1: leave)' },
    { de: 'Meine Chefin lässt mich früher gehen.', en: 'My boss lets me leave earlier. (meaning 2: allow)' },
    { de: 'Wir lassen die Wohnung renovieren.', en: 'We are having the flat renovated. (meaning 3: someone else does it)' },
    { de: 'Ich lasse mir die Haare schneiden.', en: 'I am getting my hair cut. (mir = for me)' },
    { de: 'Das lässt sich leicht erklären.', en: 'That can be explained easily. (meaning 4: sich lassen = can be done)' },
    { de: 'Lasst uns anfangen!', en: 'Let us start! (meaning 5: suggestion, ihr-form)' },
    { de: 'Er hat sein Handy im Taxi gelassen.', en: 'He left his phone in the taxi. (full verb: gelassen)' },
    { de: 'Sie hat das Fahrrad reparieren lassen.', en: 'She had the bike repaired. (with infinitive: double infinitive)' },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'lassen + infinitive behaves like a modal verb: the infinitive goes to the end without zu.' },
    { topicId: 'b1-03-modals-perfekt', note: 'The double infinitive in the Perfekt (reparieren lassen) follows the same rule as modal verbs.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'sich lassen + infinitive is one of the main alternatives to the passive.' },
    { topicId: 'a1-15-irregular-present', note: 'lassen is a stem-changing verb: du lässt, er lässt.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'Ich lasse mir die Haare schneiden uses the reflexive Dative pronoun mir.' },
  ],
  edgeCases: [
    '*Ich lasse mein Auto reparieren* means someone **else** repairs it. If you repair it yourself, say *Ich repariere mein Auto*.',
    'Perfekt with an infinitive = double infinitive: *Ich habe es machen **lassen***. Perfekt as a full verb = *gelassen*: *Ich habe es zu Hause **gelassen***.',
    '*du lässt* and *er lässt* are identical (both with ä). *ihr lasst* has no umlaut.',
    '*sich lassen* + infinitive always has a **passive** meaning: *Das lässt sich ändern* = it can be changed, not "it changes itself".',
    'The imperative to one person is *Lass* (no ending); to a group *Lasst*; formal *Lassen Sie*.',
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
      prompt: 'Das Problem ___ sich lösen. (lassen)',
      answer: ['lässt'],
      explanation: 'sich lassen + infinitive = can be done. Das Problem is er/sie/es, so the form is lässt.',
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
        ['Das lässt sich reparieren.', 'can be done'],
        ['Lass uns gehen!', 'suggestion'],
      ],
      explanation: 'Look at the pattern: object only = leave; person + infinitive = allow; thing + infinitive = have done; sich + infinitive = can be done; Lass uns = suggestion.',
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
      prompt: 'What does "Das lässt sich nicht ändern." mean?',
      options: ['That cannot be changed.', 'That does not change itself.', 'Nobody wants to change that.'],
      answer: 0,
      explanation: 'sich lassen + infinitive has a passive meaning with können: it cannot be changed.',
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
