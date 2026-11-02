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
  steps: [
    {
      title: 'The one-word past: ich konnte',
      text: `
The **Präteritum** (the simple past) is the past tense with one word: *ich konnte* = I could, *ich musste* = I had to. You already know two forms from A1: **war** (was) and **hatte** (had).

The modal verbs (*können, müssen, wollen, dürfen, sollen, mögen*) work the same way. Like *war* and *hatte*, you use them in the Präteritum all the time, even when chatting. Nobody says *ich habe gekonnt*.
`,
      examples: [
        { de: 'Ich konnte gestern nicht kommen.', en: "I couldn't come yesterday." },
        { de: 'Wir mussten um sechs Uhr aufstehen.', en: 'We had to get up at six.' },
        { de: 'Sie wollte Ärztin werden.', en: 'She wanted to become a doctor.' },
      ],
    },
    {
      title: 'Drop the umlaut, add -te',
      text: `
Take the infinitive, **drop the umlaut** (the two dots) and add the endings **-te, -test, -te, -ten, -tet, -ten**.

| |können|müssen|wollen|
|---|---|---|---|
|ich|konnte|musste|wollte|
|du|konntest|musstest|wolltest|
|er, sie, es|konnte|musste|wollte|
|wir|konnten|mussten|wollten|
|ihr|konntet|musstet|wolltet|
|sie, Sie|konnten|mussten|wollten|

*dürfen* → **durfte** and *sollen* → **sollte** follow the same pattern. The ich-form and the er-form are the same, just like *war* and *hatte*.
`,
      examples: [
        { de: 'Konntest du das lesen?', en: 'Could you read that? (du: -test)' },
        { de: 'Ihr musstet lange warten.', en: 'You had to wait a long time. (ihr: -tet)' },
        { de: 'Als Kind durfte ich nicht lange fernsehen.', en: "As a child I wasn't allowed to watch TV for long." },
      ],
    },
    {
      title: 'mögen becomes mochte',
      text: `
Two special cases. **mögen** changes its consonant: the past is **mochte**, not *mögte*. *Ich mochte den Film nicht* = I didn't like the film.

**möchten** (would like) has no past tense of its own. For "I wanted" use **wollte**: *Ich möchte Kaffee* (now) → *Ich wollte Kaffee* (past).
`,
      examples: [
        { de: 'Er mochte keinen Spinat.', en: "He didn't like spinach. (mögen → mochte)" },
        { de: 'Als Kind mochte ich keine Suppe.', en: "As a child I didn't like soup." },
        { de: 'Ich wollte ein Eis.', en: 'I wanted an ice cream. (past of ich möchte ein Eis)' },
      ],
    },
    {
      title: 'Word order stays the same',
      text: `
The sentence pattern is the same as in the present. The modal takes **position 2** and the other verb stays at the **end** as an infinitive (the basic form).

*Ich kann heute nicht kommen.* → *Ich konnte gestern nicht kommen.*

In a question the modal moves to the front: *Konntest du das lesen?*
`,
      examples: [
        { de: 'Wir mussten früh aufstehen.', en: 'We had to get up early. (mussten position 2, aufstehen at the end)' },
        { de: 'Du solltest den Brief gestern schicken.', en: 'You were supposed to send the letter yesterday.' },
        { de: 'Konntet ihr das Haus finden?', en: 'Were you able to find the house? (question: modal first)' },
      ],
    },
    {
      title: 'konnte is not könnte',
      text: `
Keep the dots off. **konnte** (no umlaut) is the past: I could, I was able to. **könnte** (with umlaut) is a different form, the polite *Konjunktiv II* (I could, if …). The same goes for *musste / müsste* and *durfte / dürfte*. For now: past = no dots.
`,
      examples: [
        { de: 'Ich konnte nicht kommen.', en: "I couldn't come. (past)" },
        { de: 'Ich könnte morgen kommen.', en: 'I could come tomorrow. (polite, not past)' },
      ],
    },
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
