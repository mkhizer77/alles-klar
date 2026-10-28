import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-11-reflexive-verbs',
  level: 'A2',
  unit: 4,
  order: 11,
  title: 'Reflexive verbs (sich waschen, sich freuen)',
  germanTerm: 'Reflexive Verben',
  tags: ['verbs', 'reflexive', 'pronouns', 'Accusative', 'Dative'],
  summary: 'Reflexive verbs come with a pronoun that points back to the subject (ich wasche mich, er freut sich); the pronoun is Accusative, or Dative when the sentence also has a direct object (ich wasche mir die Hände).',
  explanation: `
### What it is

A **reflexive verb** (*reflexives Verb*) is a verb whose action comes back to the subject. English sometimes shows this with *myself, yourself* (*I wash myself*), but often does not (*I'm looking forward to it*). German uses a **reflexive pronoun** (*Reflexivpronomen*) much more often, and for many verbs it is simply part of the verb: *sich freuen* (to be glad), *sich beeilen* (to hurry).

In the dictionary these verbs are listed with **sich**: *sich waschen, sich setzen, sich erinnern*.

### The reflexive pronouns

| subject | Accusative | Dative |
|---|---|---|
| ich | **mich** | **mir** |
| du | **dich** | **dir** |
| er / sie / es | **sich** | **sich** |
| wir | **uns** | **uns** |
| ihr | **euch** | **euch** |
| sie / Sie | **sich** | **sich** |

Good news: these are the normal Accusative and Dative pronouns you already know, with one new word: **sich** for all third persons and for *Sie*. Only *ich* and *du* have different Accusative and Dative forms, so that is the only place you have to choose.

### Accusative or Dative?

Most reflexive verbs take the **Accusative**:

- Ich wasche **mich**. – *I wash (myself).*
- Du ziehst **dich** an. – *You get dressed.*
- Er freut **sich**. – *He is glad.*

Use the **Dative** when the sentence has **another direct object**. Then the body part or thing is the Accusative, and the reflexive pronoun moves to the Dative:

- Ich wasche **mir** die Hände. – *I wash my hands.* (die Hände = direct object)
- Du putzt **dir** die Zähne. – *You brush your teeth.*
- Ich kaufe **mir** ein Buch. – *I'm buying myself a book.*

Note that German says *die Hände*, not *meine Hände*: the Dative pronoun already tells you whose hands.

### Two kinds of reflexive verbs

1. **Optional**: the verb also works with a normal object. *Ich wasche das Auto* / *Ich wasche mich*. Examples: *waschen, kämmen, anziehen, setzen, verletzen*.
2. **Always reflexive**: the pronoun cannot be removed, and often there is no "self" meaning in English at all. Learn these as a unit:

| verb | meaning | | verb | meaning |
|---|---|---|---|---|
| sich freuen | to be glad | | sich erholen | to recover, relax |
| sich beeilen | to hurry | | sich erkälten | to catch a cold |
| sich erinnern | to remember | | sich verabreden | to arrange to meet |
| sich interessieren | to be interested | | sich bedanken | to say thank you |
| sich ausruhen | to rest | | sich verspäten | to be late |

### Word order and the Perfekt

The pronoun stands **right after the conjugated verb** (the verb with the ending): *Ich freue **mich** sehr.* In a question, or when the sentence starts with another word, it follows the subject: *Freust du **dich**? Heute beeile ich **mich**.* In a subordinate clause (*Nebensatz*) it comes right after the subject: *…, weil ich **mich** beeile.*

The Perfekt is **always with haben**: *Ich habe mich gefreut. Er hat sich erkältet.*

### Why it matters

Daily routine (*sich waschen, sich anziehen, sich beeilen*), feelings (*sich freuen, sich ärgern*) and health (*sich erkälten, sich verletzen*) are all reflexive. Many of these verbs also combine with a fixed preposition (*sich freuen auf, sich interessieren für*), which is the next topic.
`,
  examples: [
    { de: 'Ich wasche mich jeden Morgen.', en: 'I wash every morning. (Accusative: mich)' },
    { de: 'Ich wasche mir die Hände.', en: 'I wash my hands. (Dative mir, because die Hände is the direct object)' },
    { de: 'Er freut sich auf das Wochenende.', en: 'He is looking forward to the weekend. (sich for er)' },
    { de: 'Wir müssen uns beeilen.', en: 'We have to hurry. (uns for wir, always reflexive)' },
    { de: 'Setzt euch bitte!', en: 'Please sit down! (euch for ihr)' },
    { de: 'Erinnerst du dich an mich?', en: 'Do you remember me? (question: pronoun after the subject)' },
    { de: 'Ich habe mich gestern erkältet.', en: 'I caught a cold yesterday. (Perfekt with haben)' },
  ],
  connections: [
    { topicId: 'a1-23-accusative-pronouns', note: 'mich, dich, uns, euch are the normal Accusative pronouns; only sich is new.' },
    { topicId: 'a1-27-dative-pronouns', note: 'mir and dir are the Dative forms used when there is another direct object.' },
    { topicId: 'a2-12-verbs-with-prepositions', note: 'Many reflexive verbs take a fixed preposition: sich freuen auf, sich interessieren für.' },
    { topicId: 'a1-16-separable-verbs', note: 'sich anziehen and sich ausruhen are both reflexive and separable: Ich ziehe mich an.' },
    { topicId: 'a2-26-pronoun-order-midfield', note: 'Where the reflexive pronoun goes when there are other pronouns in the sentence.' },
  ],
  edgeCases: [
    '**sich** is used for er, sie, es, sie (plural) **and Sie**: *Setzen Sie sich!* (not *Setzen Sie Sie*).',
    'Only ich and du change between Accusative and Dative: *Ich wasche **mich*** but *Ich wasche **mir** die Hände*. For everyone else the form is the same.',
    'With body parts German uses the **definite article**, not a possessive: *Ich putze mir **die** Zähne*, not *meine Zähne*.',
    'The Perfekt of reflexive verbs is always with **haben**, even for verbs of movement: *Ich habe mich hingesetzt.*',
    'Some verbs change meaning when reflexive: *vorstellen* (to introduce / present) vs *sich etwas vorstellen* (to imagine); *ärgern* (to annoy someone) vs *sich ärgern* (to be annoyed).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-11-reflexive-verbs-ex01',
      prompt: 'Complete: "Ich wasche ___."',
      options: ['mich', 'mir', 'sich'],
      answer: 0,
      explanation: 'No other object in the sentence, so the reflexive pronoun is Accusative: mich.',
    },
    {
      type: 'fill',
      id: 'a2-11-reflexive-verbs-ex02',
      prompt: 'Ich wasche ___ die Hände.',
      answer: ['mir'],
      explanation: 'die Hände is the direct object (Accusative), so the reflexive pronoun becomes Dative: mir.',
    },
    {
      type: 'fill',
      id: 'a2-11-reflexive-verbs-ex03',
      prompt: 'Er freut ___ auf das Wochenende.',
      answer: ['sich'],
      explanation: 'For er / sie / es the reflexive pronoun is always sich.',
    },
    {
      type: 'match',
      id: 'a2-11-reflexive-verbs-ex04',
      prompt: 'Match each subject with its Accusative reflexive pronoun.',
      pairs: [
        ['ich', 'mich'],
        ['du', 'dich'],
        ['er / sie / es', 'sich'],
        ['wir', 'uns'],
        ['ihr', 'euch'],
      ],
      explanation: 'The reflexive pronouns are the normal Accusative pronouns, except for the third person, which uses sich.',
    },
    {
      type: 'mc',
      id: 'a2-11-reflexive-verbs-ex05',
      prompt: 'Complete: "Du putzt ___ die Zähne."',
      options: ['dir', 'dich', 'sich'],
      answer: 0,
      explanation: 'die Zähne is the direct object, so du needs the Dative reflexive: dir.',
    },
    {
      type: 'fill',
      id: 'a2-11-reflexive-verbs-ex06',
      prompt: 'Wir müssen ___ beeilen.',
      answer: ['uns'],
      explanation: 'sich beeilen is always reflexive. For wir the pronoun is uns.',
    },
    {
      type: 'order',
      id: 'a2-11-reflexive-verbs-ex07',
      prompt: 'Build the sentence: "I am looking forward to the summer."',
      words: ['den', 'freue', 'Ich', 'Sommer.', 'mich', 'auf'],
      answer: ['Ich freue mich auf den Sommer.'],
      explanation: 'The reflexive pronoun mich comes directly after the verb freue, then the preposition phrase auf den Sommer.',
    },
    {
      type: 'mc',
      id: 'a2-11-reflexive-verbs-ex08',
      prompt: 'Complete the Perfekt: "Ich ___ mich gestern erkältet."',
      options: ['habe', 'bin', 'hatte'],
      answer: 0,
      explanation: 'Reflexive verbs always build the Perfekt with haben: Ich habe mich erkältet.',
    },
    {
      type: 'fill',
      id: 'a2-11-reflexive-verbs-ex09',
      prompt: 'Setzt ___ bitte! (ihr)',
      answer: ['euch'],
      explanation: 'The imperative for ihr keeps the reflexive pronoun euch: Setzt euch!',
    },
    {
      type: 'fill',
      id: 'a2-11-reflexive-verbs-ex10',
      prompt: 'Erinnerst du ___ an mich?',
      answer: ['dich'],
      explanation: 'sich erinnern takes the Accusative reflexive: dich. In a question it follows the subject du.',
    },
    {
      type: 'translate',
      id: 'a2-11-reflexive-verbs-ex11',
      prompt: 'Translate: "I am looking forward to the weekend."',
      answer: ['Ich freue mich auf das Wochenende.', 'Ich freue mich aufs Wochenende.'],
      hint: 'sich freuen auf = to look forward to, das Wochenende = weekend',
      explanation: 'sich freuen + auf + Accusative. The pronoun mich sits right after the verb.',
    },
    {
      type: 'mc',
      id: 'a2-11-reflexive-verbs-ex12',
      prompt: 'Complete: "Kämmst du ___ die Haare?"',
      options: ['dir', 'dich', 'euch'],
      answer: 0,
      explanation: 'die Haare is the direct object, so the reflexive pronoun for du is Dative: dir. (Without the object it would be Kämmst du dich?)',
    },
  ],
};

export default topic;
