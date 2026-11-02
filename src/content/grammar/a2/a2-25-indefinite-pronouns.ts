import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-25-indefinite-pronouns',
  level: 'A2',
  unit: 9,
  order: 28,
  title: 'man, jemand, niemand, etwas, nichts',
  germanTerm: 'Indefinitpronomen',
  tags: ['pronouns', 'indefinite', 'man', 'negation', 'subject'],
  summary: 'Indefinite pronouns stand for people or things you do not name: man (one / people in general), jemand (someone), niemand (nobody), etwas (something) and nichts (nothing).',
  steps: [
    {
      title: 'Words for people you do not name',
      text: `
Sometimes you talk about a person or thing without saying who or what it is: *Someone called*, *Nobody knows*. German uses **indefinite pronouns** (*Indefinitpronomen*, "unspecific" pronouns) for this.

| pronoun | meaning | for |
|---|---|---|
| **man** | one, you, people in general | people |
| **jemand** | someone, anyone | people |
| **niemand** | nobody | people |
| **etwas** | something, anything | things |
| **nichts** | nothing | things |
| **alles** | everything | things |
`,
      examples: [
        { de: 'Jemand hat angerufen.', en: 'Someone called.' },
        { de: 'Ich möchte etwas essen.', en: 'I would like to eat something.' },
        { de: 'Niemand weiß die Antwort.', en: 'Nobody knows the answer.' },
      ],
    },
    {
      title: 'man: people in general',
      text: `
**man** is used all the time for general statements, rules and customs. It means *people in general* and often matches English *you*, *one* or *they*. Three rules:

1. It is always **third person singular**, like *er / sie / es*: *man ist, man hat, man kann*.
2. It has a **small m**. *Man* with a capital M is only at the start of a sentence; *der Mann* (the man) is a different word.
3. It is only used as the **subject**.
`,
      examples: [
        { de: 'In Deutschland trinkt man viel Kaffee.', en: 'People drink a lot of coffee in Germany. (man + trinkt, singular)' },
        { de: 'Hier darf man nicht rauchen.', en: 'You may not smoke here. (a rule with man + modal verb)' },
        { de: 'Wie sagt man das auf Deutsch?', en: 'How do you say that in German?' },
      ],
    },
    {
      title: 'jemand and niemand',
      text: `
Both are **singular** and stand for people. *jemand* is *someone* or, in a question, *anyone*; *niemand* is *nobody*.

As an object they can take an ending (*Ich habe jemand**en** gesehen*, *Ich helfe niemand**em***), but in everyday German the plain form is also common and correct: *Ich habe niemand gesehen.*
`,
      examples: [
        { de: 'Jemand hat an der Tür geklingelt.', en: 'Someone rang the doorbell.' },
        { de: 'Ist jemand zu Hause?', en: 'Is anyone at home? (in a question: anyone)' },
        { de: 'Niemand hat mir geholfen.', en: 'Nobody helped me.' },
        { de: 'Ich habe niemanden gesehen.', en: 'I did not see anyone. (object: niemanden)' },
      ],
    },
    {
      title: 'etwas and nichts',
      text: `
These stand for **things** and **never change their form**. *etwas* is *something* (or *anything* in a question); *nichts* is *nothing*.

In relaxed speech *etwas* is often shortened to **was**: *Möchtest du was trinken?*
`,
      examples: [
        { de: 'Möchtest du etwas trinken?', en: 'Would you like something to drink?' },
        { de: 'Hast du etwas gesagt?', en: 'Did you say something? (in a question: anything)' },
        { de: 'Ich habe heute nichts gegessen.', en: 'I have eaten nothing today.' },
        { de: 'Möchtest du was trinken?', en: 'Do you want something to drink? (was = etwas, casual)' },
      ],
    },
    {
      title: 'niemand and nichts are already negative',
      text: `
**niemand** and **nichts** contain the negation themselves, like *kein*. So you never add **nicht**: *Niemand kommt*, not *Niemand kommt nicht*. English says *I did not see anything*; German says *Ich habe nichts gesehen*, with no second negative word.
`,
      examples: [
        { de: 'Niemand ist gekommen.', en: 'Nobody came. (no extra nicht)' },
        { de: 'Ich habe nichts verstanden.', en: 'I did not understand anything. (nichts, no nicht)' },
        { de: 'Ich habe nichts gekauft.', en: 'I did not buy anything.' },
      ],
    },
    {
      title: 'etwas Neues, nichts Besonderes',
      text: `
In some fixed phrases an adjective follows *etwas* or *nichts*. It is written with a **capital letter** and gets the ending **-es**: *etwas Neues* (something new), *nichts Besonderes* (nothing special), *etwas Schönes*. Learn these as whole phrases.
`,
      examples: [
        { de: 'Gibt es etwas Neues?', en: 'Is there anything new? (etwas + Neues)' },
        { de: 'Ich habe nichts Besonderes gemacht.', en: 'I did nothing special. (nichts + Besonderes)' },
        { de: 'Wir haben etwas Schönes gesehen.', en: 'We saw something beautiful.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-03-personal-pronouns', note: 'man takes the same verb form as er / sie / es.' },
    { topicId: 'a1-13-negation', note: 'niemand and nichts are negative words, like kein; you never add nicht to them.' },
    { topicId: 'a1-17-modal-verbs', note: 'man + modal verb is the standard way to state rules: Hier darf man nicht rauchen.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'At B1 you see how man replaces the passive: Man baut ein Haus = Ein Haus wird gebaut.' },
    { topicId: 'b1-14-adjectives-as-nouns', note: 'Why phrases like etwas Neues and nichts Besonderes have a capital letter and -es.' },
  ],
  edgeCases: [
    '**man** (pronoun, small m) and **der Mann** (the man) are different words. *Man sagt …* = people say; *Der Mann sagt …* = the man says.',
    'Verbs after **man** are singular: *man geht*, never *man gehen*.',
    '**niemand** and **nichts** are already negative. *Ich sehe niemand nicht* is wrong; say *Ich sehe niemanden*.',
    '*man* is only a subject. You may see **einen / einem** standing in for it as an object (*Wenn man müde ist, hilft einem Kaffee*); that is B1.',
    'In fixed phrases after *etwas* and *nichts* the adjective is **capitalised and gets -es**: *etwas Gutes, nichts Schlechtes*. Only *etwas anderes* (something else) keeps a small letter.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-25-indefinite-pronouns-ex01',
      prompt: 'Complete: "In Deutschland ___ man viel Kaffee."',
      options: ['trinkt', 'trinken', 'trinkst'],
      answer: 0,
      explanation: 'man is third person singular, so the verb form is the same as for er / sie / es: trinkt.',
    },
    {
      type: 'fill',
      id: 'a2-25-indefinite-pronouns-ex02',
      prompt: 'Hier darf ___ nicht rauchen. (people in general)',
      answer: ['man'],
      explanation: 'A general rule uses man. It is written with a small m in the middle of a sentence.',
    },
    {
      type: 'mc',
      id: 'a2-25-indefinite-pronouns-ex03',
      prompt: 'Complete: "___ hat angerufen, aber ich weiß nicht, wer."',
      options: ['Jemand', 'Niemand', 'Nichts'],
      answer: 0,
      explanation: 'Someone called, but you do not know who: jemand. Nichts is for things and niemand would mean nobody.',
    },
    {
      type: 'fill',
      id: 'a2-25-indefinite-pronouns-ex04',
      prompt: 'Ich habe heute ___ gegessen. (nothing)',
      answer: ['nichts'],
      explanation: 'nichts = nothing, for things. It is already negative, so there is no nicht in the sentence.',
    },
    {
      type: 'mc',
      id: 'a2-25-indefinite-pronouns-ex05',
      prompt: 'Which sentence is correct?',
      options: ['Niemand ist nicht gekommen.', 'Niemand ist gekommen.', 'Nicht jemand ist gekommen.'],
      answer: 1,
      explanation: 'niemand already means nobody. Adding nicht creates a double negative, which is wrong in standard German.',
    },
    {
      type: 'match',
      id: 'a2-25-indefinite-pronouns-ex06',
      prompt: 'Match the German pronoun with its English meaning.',
      pairs: [
        ['man', 'one / people in general'],
        ['jemand', 'someone'],
        ['niemand', 'nobody'],
        ['etwas', 'something'],
        ['nichts', 'nothing'],
        ['alles', 'everything'],
      ],
      explanation: 'man, jemand and niemand are for people; etwas, nichts and alles are for things.',
    },
    {
      type: 'fill',
      id: 'a2-25-indefinite-pronouns-ex07',
      prompt: 'Möchtest du ___ trinken? (something)',
      answer: ['etwas', 'was'],
      explanation: 'etwas = something. In relaxed speech it is shortened to was.',
    },
    {
      type: 'order',
      id: 'a2-25-indefinite-pronouns-ex08',
      prompt: 'Build the question: "How do you say that in German?"',
      words: ['man', 'auf', 'Wie', 'das', 'Deutsch?', 'sagt'],
      answer: ['Wie sagt man das auf Deutsch?'],
      explanation: 'W-question: Wie + verb (sagt) + man + object + auf Deutsch. English "you" in a general sense is man.',
    },
    {
      type: 'mc',
      id: 'a2-25-indefinite-pronouns-ex09',
      prompt: 'Complete: "Gibt es ___ im Fernsehen?"',
      options: ['etwas Neues', 'etwas neu', 'etwas neues'],
      answer: 0,
      explanation: 'After etwas an adjective becomes a noun: capital letter and -es ending. etwas Neues = something new.',
    },
    {
      type: 'fill',
      id: 'a2-25-indefinite-pronouns-ex10',
      prompt: 'Ist ___ zu Hause? – Nein, niemand. (anyone)',
      answer: ['jemand'],
      explanation: 'In a question, "anyone" is jemand. The answer niemand (nobody) is already negative, so no nicht is needed.',
    },
    {
      type: 'translate',
      id: 'a2-25-indefinite-pronouns-ex11',
      prompt: 'Translate: "Nobody knows the answer."',
      answer: ['Niemand weiß die Antwort.', 'Niemand kennt die Antwort.'],
      hint: 'die Antwort = the answer; wissen or kennen',
      explanation: 'niemand is the subject (singular), so the verb is weiß / kennt. No nicht is added.',
    },
    {
      type: 'mc',
      id: 'a2-25-indefinite-pronouns-ex12',
      prompt: 'Complete: "Ich habe gestern ___ aus der Firma getroffen." (someone, Accusative)',
      options: ['jemanden', 'jemandem', 'niemanden'],
      answer: 0,
      explanation: 'treffen takes the Accusative: jemanden. jemandem is the Dative, and niemanden would mean nobody.',
    },
  ],
};

export default topic;
