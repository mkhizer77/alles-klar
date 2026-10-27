import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-01-prateritum-modals',
  level: 'A2',
  unit: 1,
  order: 1,
  title: 'Präteritum of modal verbs (konnte, musste, wollte …)',
  germanTerm: 'Präteritum Modalverben',
  tags: ['past tense', 'modal verbs', 'Präteritum', 'verbs'],
  summary: 'The simple past of the modal verbs (konnte, musste, wollte, durfte, sollte, mochte) is the normal way to say "could", "had to" or "wanted to" about the past, even in everyday speech.',
  explanation: `
### What it is

The **Präteritum** (*Präteritum*, also called the simple past) is the one-word past tense: *ich konnte* = *I could*, *ich musste* = *I had to*. You already know two Präteritum forms from A1: **war** (was) and **hatte** (had). The modal verbs work the same way, and like *war* and *hatte* they are used in the Präteritum **all the time**, even when people are chatting. Nobody says *ich habe gekonnt* when they mean *I could*.

### How it works

Take the infinitive, **drop the umlaut**, and add the endings **-te, -test, -te, -ten, -tet, -ten**. These are the same endings as the regular Präteritum of other verbs, so learning them here pays off twice.

| | können | müssen | wollen | dürfen | sollen | mögen |
|---|---|---|---|---|---|---|
| ich | konnte | musste | wollte | durfte | sollte | mochte |
| du | konntest | musstest | wolltest | durftest | solltest | mochtest |
| er / sie / es | konnte | musste | wollte | durfte | sollte | mochte |
| wir | konnten | mussten | wollten | durften | sollten | mochten |
| ihr | konntet | musstet | wolltet | durftet | solltet | mochtet |
| sie / Sie | konnten | mussten | wollten | durften | sollten | mochten |

Three things to notice:

1. **No umlaut** in the past: *können* → *konnte*, *müssen* → *musste*, *dürfen* → *durfte*. If you keep the umlaut (*könnte*, *müsste*, *dürfte*) you get a different form, the polite *Konjunktiv II* (*I could / would be able to*). That is a later topic; for now, past = no dots.
2. **mögen** changes its consonant: *mögen* → **mochte** (not *mögte*). *Ich mochte den Film nicht* = *I didn't like the film*.
3. **möchten** has no past tense of its own. For *I wanted* use **wollte**: *Ich möchte Kaffee* (now) → *Ich wollte Kaffee* (past).

### Word order stays the same

The modal takes position 2 and the other verb stays at the end as an infinitive, exactly as in the present:

- Ich **kann** heute nicht **kommen**. → Ich **konnte** gestern nicht **kommen**.
- Wir **müssen** früh **aufstehen**. → Wir **mussten** früh **aufstehen**.

In a question the modal moves to the front: **Konntest** du das lesen? (*Could you read that?*)

### Why it matters

Telling any story about the past needs these forms: what you wanted, what you had to do, what you were allowed to do as a child. The Perfekt of a modal verb (*Ich habe nicht kommen können*) exists but sounds heavy, so German speakers reach for the Präteritum instead. If you remember **war, hatte** and the six forms above, you can already talk about the past much more naturally than with the Perfekt alone.
`,
  examples: [
    { de: 'Ich konnte gestern nicht kommen.', en: "I couldn't come yesterday. (konnte, no umlaut)" },
    { de: 'Wir mussten um sechs Uhr aufstehen.', en: 'We had to get up at six.' },
    { de: 'Sie wollte Ärztin werden.', en: 'She wanted to become a doctor.' },
    { de: 'Als Kind durfte ich nicht lange fernsehen.', en: "As a child I wasn't allowed to watch TV for long." },
    { de: 'Du solltest den Brief gestern schicken.', en: 'You were supposed to send the letter yesterday.' },
    { de: 'Er mochte keinen Spinat.', en: "He didn't like spinach. (mögen → mochte)" },
    { de: 'Konntet ihr das Haus finden?', en: 'Were you able to find the house? (question: modal first)' },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'The present tense modals; the Präteritum keeps the same sentence pattern with the infinitive at the end.' },
    { topicId: 'a1-33-war-hatte', note: 'war and hatte are the first Präteritum forms; the modals follow the same idea.' },
    { topicId: 'a2-02-prateritum-verbs', note: 'The same -te endings are used for the Präteritum of regular verbs.' },
    { topicId: 'a2-03-perfekt-vs-prateritum', note: 'Explains why modals are almost always Präteritum while other verbs prefer the Perfekt in speech.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'könnte, müsste and dürfte (with umlaut) are the polite Konjunktiv II forms, not the past.' },
  ],
  edgeCases: [
    '**konnte** (past) vs **könnte** (polite / hypothetical): *Ich konnte nicht kommen* = I was not able to come; *Ich könnte kommen* = I could come (if …). The umlaut changes the meaning completely.',
    '**mögen** → **mochte**, never *mögte*. And *möchten* has no past form: *Ich wollte ein Eis* is the past of *Ich möchte ein Eis*.',
    'The ich-form and the er / sie / es-form are **identical** (*ich konnte, er konnte*), just like *war* and *hatte*.',
    'Do not build the Perfekt of modals at this level (*Ich habe nicht kommen können*). It is correct but rare; the Präteritum is what you will hear.',
    'In a subordinate clause the modal goes to the very end, after the infinitive: *…, weil ich nicht kommen **konnte**.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-01-prateritum-modals-ex01',
      prompt: 'What is the Präteritum of "ich kann"?',
      options: ['ich konnte', 'ich könnte', 'ich gekonnt'],
      answer: 0,
      explanation: 'Drop the umlaut and add -te: konnte. könnte (with umlaut) is the polite Konjunktiv II form, not the past.',
    },
    {
      type: 'fill',
      id: 'a2-01-prateritum-modals-ex02',
      prompt: 'Gestern ___ ich nicht kommen. (können)',
      answer: ['konnte'],
      explanation: 'ich + können in the past = konnte. The infinitive kommen stays at the end of the sentence.',
    },
    {
      type: 'fill',
      id: 'a2-01-prateritum-modals-ex03',
      prompt: 'Als Kind ___ du nicht allein schwimmen. (dürfen)',
      answer: ['durftest'],
      explanation: 'dürfen → durf- + -test for du: durftest. No umlaut in the past.',
    },
    {
      type: 'match',
      id: 'a2-01-prateritum-modals-ex04',
      prompt: 'Match each modal verb with its Präteritum (ich-form).',
      pairs: [
        ['können', 'konnte'],
        ['müssen', 'musste'],
        ['dürfen', 'durfte'],
        ['mögen', 'mochte'],
        ['wollen', 'wollte'],
      ],
      explanation: 'All lose their umlaut and take -te. mögen also changes g → ch: mochte.',
    },
    {
      type: 'mc',
      id: 'a2-01-prateritum-modals-ex05',
      prompt: 'Complete: "Wir ___ gestern früh aufstehen."',
      options: ['mussten', 'müssten', 'musstet'],
      answer: 0,
      explanation: 'wir takes -ten: mussten. müssten has an umlaut (Konjunktiv II) and musstet is the ihr-form.',
    },
    {
      type: 'order',
      id: 'a2-01-prateritum-modals-ex06',
      prompt: 'Build the sentence: "I wanted to go to the cinema yesterday."',
      words: ['gestern', 'Ich', 'ins', 'gehen.', 'wollte', 'Kino'],
      answer: ['Ich wollte gestern ins Kino gehen.'],
      explanation: 'The modal wollte is in position 2; the infinitive gehen closes the sentence.',
    },
    {
      type: 'fill',
      id: 'a2-01-prateritum-modals-ex07',
      prompt: 'Ihr ___ das Buch bis Montag lesen. (sollen)',
      answer: ['solltet'],
      explanation: 'ihr takes -tet: solltet. sollen has no umlaut to lose, so only the ending changes.',
    },
    {
      type: 'mc',
      id: 'a2-01-prateritum-modals-ex08',
      prompt: 'Which form means "I didn\'t like" (past of mögen)?',
      options: ['Ich möchte nicht', 'Ich mochte nicht', 'Ich mögte nicht'],
      answer: 1,
      explanation: 'mögen → mochte in the past. möchte means "would like" (present), and mögte does not exist.',
    },
    {
      type: 'fill',
      id: 'a2-01-prateritum-modals-ex09',
      prompt: 'Er ___ als Kind keinen Spinat. (mögen)',
      answer: ['mochte'],
      explanation: 'er + mögen in the past = mochte. The er-form is the same as the ich-form.',
    },
    {
      type: 'translate',
      id: 'a2-01-prateritum-modals-ex10',
      prompt: 'Translate: "We couldn\'t come yesterday."',
      answer: ['Wir konnten gestern nicht kommen.', 'Gestern konnten wir nicht kommen.'],
      hint: 'gestern = yesterday, kommen = to come',
      explanation: 'wir konnten + nicht + infinitive at the end. If you start with gestern, the verb konnten still stays in position 2.',
    },
    {
      type: 'mc',
      id: 'a2-01-prateritum-modals-ex11',
      prompt: 'Which sentence is the normal everyday way to say "I couldn\'t come"?',
      options: ['Ich habe nicht gekonnt kommen.', 'Ich konnte nicht kommen.', 'Ich kannte nicht kommen.'],
      answer: 1,
      explanation: 'Modals are used in the Präteritum even in speech. The first option is wrong word order; kannte is the past of kennen (to know), not können.',
    },
    {
      type: 'translate',
      id: 'a2-01-prateritum-modals-ex12',
      prompt: 'Translate: "She wanted to become a doctor."',
      answer: ['Sie wollte Ärztin werden.', 'Sie wollte Arzt werden.'],
      hint: 'die Ärztin = (female) doctor, werden = to become',
      explanation: 'wollen → wollte; werden is the infinitive and goes to the end. There is no past tense of möchten, so wollte is the form to use.',
    },
  ],
};

export default topic;
