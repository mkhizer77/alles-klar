import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-25-indefinite-pronouns',
  level: 'A2',
  unit: 9,
  order: 25,
  title: 'man, jemand, niemand, etwas, nichts',
  germanTerm: 'Indefinitpronomen',
  tags: ['pronouns', 'indefinite', 'man', 'negation', 'subject'],
  summary: 'Indefinite pronouns stand for people or things you do not name: man (one / people in general), jemand (someone), niemand (nobody), etwas (something) and nichts (nothing).',
  explanation: `
### What it is

Sometimes you talk about a person or thing without saying who or what it is: *Someone called*, *Nobody knows*, *You can't smoke here*. German uses **indefinite pronouns** (*Indefinitpronomen*) for this.

| pronoun | meaning | for |
|---|---|---|
| **man** | one, you, people, they (in general) | people |
| **jemand** | someone, somebody, anyone | people |
| **niemand** | nobody, no one | people |
| **etwas** | something, anything | things |
| **nichts** | nothing | things |
| **alles** | everything | things |
| **alle** | everyone, everybody | people (plural) |

### man: the most important one

**man** is used all the time for general statements. It means *people in general* and often matches English *you*, *one*, *they* or a passive sentence.

- In Deutschland **trinkt man** viel Kaffee. – *People drink a lot of coffee in Germany.*
- Hier **darf man** nicht rauchen. – *You may not smoke here.*
- Wie **sagt man** das auf Deutsch? – *How do you say that in German?*

Rules for *man*:

1. It is always **third person singular**: *man ist, man hat, man kann* (like *er / sie / es*).
2. It is written with a **small m**. *Man* with a capital M is only at the start of a sentence; *der Mann* (the man) is a different word.
3. It only exists in the Nominative. In the Accusative use **einen**, in the Dative **einem**: *Das macht einen müde.* (*That makes you tired.*)

### jemand and niemand

Both are singular and are used for people.

- **Jemand** hat angerufen. – *Someone called.*
- Ist **jemand** zu Hause? – *Is anyone at home?*
- **Niemand** weiß die Antwort. – *Nobody knows the answer.*

In the Accusative and Dative they can take an ending (*jemanden, jemandem; niemanden, niemandem*), but in everyday German the plain form is also common and correct: *Ich habe niemand(en) gesehen.*

**niemand** already contains the negation. Do not add *nicht*: *Niemand kommt*, not *Niemand kommt nicht*.

### etwas and nichts

These stand for things and **never change their form**.

- Ich möchte **etwas** essen. – *I would like to eat something.*
- Hast du **etwas** gesagt? – *Did you say something / anything?*
- Ich habe **nichts** verstanden. – *I understood nothing. / I did not understand anything.*

Like *niemand*, **nichts** is already negative, so there is no *nicht*: *Ich habe nichts gekauft*, not *nichts nicht*.

*etwas* and *nichts* can be followed by an adjective that is written with a capital letter and the ending **-es**: *etwas Neues* (something new), *nichts Besonderes* (nothing special), *etwas Schönes*.

In speech *etwas* is often shortened to **was**: *Möchtest du was trinken?*

### Why it matters

*man* lets you talk about rules, customs and instructions without the passive (*Hier kann man gut essen*). *jemand / niemand / etwas / nichts* are the words you need for everyday questions and answers (*Hat jemand Zeit? – Nein, niemand.*). And remembering that *niemand* and *nichts* are already negative saves you from the double negative, one of the most common mistakes at this level.
`,
  examples: [
    { de: 'In Deutschland isst man viel Brot.', en: 'People eat a lot of bread in Germany. (man = people in general)' },
    { de: 'Hier darf man nicht parken.', en: 'You may not park here. (rule with man + modal)' },
    { de: 'Wie schreibt man das?', en: 'How do you spell that?' },
    { de: 'Jemand hat an der Tür geklingelt.', en: 'Someone rang the doorbell.' },
    { de: 'Niemand hat mir geholfen.', en: 'Nobody helped me. (no extra nicht)' },
    { de: 'Möchtest du etwas trinken?', en: 'Would you like something to drink?' },
    { de: 'Ich habe heute nichts gegessen.', en: 'I have eaten nothing today.' },
    { de: 'Gibt es etwas Neues?', en: 'Is there anything new? (etwas + capitalised adjective + -es)' },
  ],
  connections: [
    { topicId: 'a1-03-personal-pronouns', note: 'man takes the same verb form as er / sie / es.' },
    { topicId: 'a1-13-negation', note: 'niemand and nichts are negative words, like kein; you never add nicht to them.' },
    { topicId: 'a1-17-modal-verbs', note: 'man + modal verb is the standard way to state rules: Hier darf man nicht rauchen.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'man is the most common alternative to the passive: Man baut ein Haus = Ein Haus wird gebaut.' },
    { topicId: 'b1-14-adjectives-as-nouns', note: 'etwas Neues, nichts Besonderes: an adjective after etwas / nichts becomes a noun.' },
  ],
  edgeCases: [
    '**man** (pronoun, small m) and **der Mann** (the man) are different words. *Man sagt …* = people say; *Der Mann sagt …* = the man says.',
    'Verbs after **man** are singular: *man geht*, never *man gehen*.',
    '**niemand** and **nichts** are already negative. *Ich sehe niemand nicht* is wrong; say *Ich sehe niemanden*.',
    '*man* has no Accusative or Dative form of its own: use **einen / einem**. *Wenn man müde ist, hilft einem Kaffee.*',
    'After *etwas* and *nichts* an adjective is **capitalised and gets -es**: *etwas Gutes, nichts Schlechtes*. Only *anderes* keeps a small letter: *etwas anderes*.',
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
      prompt: 'Wenn man viel arbeitet, hilft ___ eine Pause. (man in the Dative)',
      answer: ['einem'],
      explanation: 'man has no Dative of its own. helfen takes the Dative, so use einem: a break helps one.',
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
