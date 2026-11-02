import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-21-possessive-articles',
  level: 'A1',
  unit: 4,
  order: 25,
  title: 'Possessive articles: mein, dein, sein …',
  germanTerm: 'Possessivartikel',
  tags: ['articles', 'possessives', 'accusative', 'nominative'],
  summary: 'mein, dein, sein, ihr, unser, euer, Ihr say whose something is; they take the same endings as ein and kein.',
  steps: [
    {
      title: 'What a possessive article is',
      text: `
A **possessive article** (*Possessivartikel*) is the word for *my*, *your*, *his*, *her* and so on. It stands in front of a noun instead of *der* or *ein* and tells you who something belongs to: **mein** Bruder, **deine** Schwester, **unser** Haus.
`,
      examples: [
        { de: 'Mein Vater ist Arzt.', en: 'My father is a doctor.' },
        { de: 'Wo ist deine Jacke?', en: 'Where is your jacket?' },
        { de: 'Das ist unser Haus.', en: 'That is our house.' },
      ],
    },
    {
      title: 'One possessive for each person',
      text: `
Every personal pronoun has its own possessive. Learn them as pairs.

| pronoun | possessive | meaning |
|---|---|---|
| ich | **mein** | my |
| du | **dein** | your |
| er, es | **sein** | his, its |
| sie | **ihr** | her, their |
| wir | **unser** | our |
| ihr | **euer** | your (several people) |

Formal *Sie* has **Ihr** with a capital I. So *ihr* can mean her, their or formal your; the context tells you which.
`,
      examples: [
        { de: 'Das ist sein Auto.', en: 'That is his car. (owner er → sein)' },
        { de: 'Wo ist euer Hund?', en: 'Where is your dog? (owner ihr → euer)' },
        { de: 'Haben Sie Ihr Ticket?', en: 'Do you have your ticket? (formal Ihr, capital I)' },
      ],
    },
    {
      title: 'The endings copy ein and kein',
      text: `
The base word (*mein*, *dein* …) gets an ending that depends on the noun after it. The endings are exactly the ones you know from **ein** and **kein**.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | mein Bruder | mein**e** Schwester | mein Kind | mein**e** Kinder |
| Accusative | mein**en** Bruder | mein**e** Schwester | mein Kind | mein**e** Kinder |

The same pattern works for *dein, sein, ihr, unser, euer, Ihr*.
`,
      examples: [
        { de: 'Ich besuche meinen Vater.', en: 'I visit my father. (masculine Accusative: meinen)' },
        { de: 'Er liebt seine Frau.', en: 'He loves his wife. (feminine: seine)' },
        { de: 'Wir kennen ihr Kind.', en: 'We know her child. (neuter: no ending)' },
        { de: 'Sind das deine Bücher?', en: 'Are these your books? (plural: deine)' },
      ],
    },
    {
      title: 'euer drops its middle e',
      text: `
One small spelling change: **euer** loses its middle **e** as soon as an ending is added: *euer Haus* but **eure** Kinder, **euren** Freund. *Unser* keeps its e: *unsere Lehrerin*, *unseren Hund*.
`,
      examples: [
        { de: 'Ist das euer Auto?', en: 'Is that your car? (no ending: euer)' },
        { de: 'Sind das eure Bücher?', en: 'Are these your books? (euer + e = eure)' },
        { de: 'Wir kennen euren Lehrer.', en: 'We know your teacher. (euer + en = euren)' },
        { de: 'Das ist unsere Lehrerin.', en: 'That is our teacher. (unser keeps its e)' },
      ],
    },
    {
      title: 'Owner picks the word, noun picks the ending',
      text: `
To find the right form, make **two** separate decisions:

1. **Who owns it?** This picks the base word: *mein, dein, sein, ihr …*
2. **What is the noun, and what case is it in?** This picks the ending: no ending, *-e* or *-en*.

*She loves her brother*: the owner is *she* → **ihr**. *Bruder* is masculine and the object → **-en**. Result: *Sie liebt **ihren** Bruder.* The brother is male, but only the owner matters for choosing *ihr*.
`,
      examples: [
        { de: 'Sie liebt ihren Bruder.', en: 'She loves her brother. (owner sie → ihr; masculine object → ihren)' },
        { de: 'Er liebt seine Schwester.', en: 'He loves his sister. (owner er → sein; feminine → seine)' },
        { de: 'Haben Sie Ihren Pass?', en: 'Do you have your passport? (formal Ihr; masculine object → Ihren)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-12-indefinite-articles', note: 'Possessives take exactly the endings of ein and kein.' },
    { topicId: 'a1-03-personal-pronouns', note: 'Each personal pronoun has a matching possessive: ich → mein, du → dein.' },
    { topicId: 'a1-20-accusative', note: 'In the masculine Accusative the possessive gets -en: meinen, deinen, seinen.' },
    { topicId: 'a1-24-dative', note: 'In the Dative the possessives get -em, -er, -en: meinem Bruder, meiner Schwester.' },
  ],
  edgeCases: [
    'The **owner** chooses the word, the **noun** chooses the ending. *Her brother* = **ihr** Bruder (owner is female). *His sister* = **seine** Schwester (owner is male).',
    '**ihr** means her, their, and (capital **Ihr**) formal your. *Ihr Auto* on its own can be any of the three; context decides.',
    '**euer** loses its middle e before an ending: *eure*, *euren*, never *euere*.',
    '*sein* (his / its) looks like the verb *sein* (to be). *Das ist sein Buch* = that is his book; the verb is *ist*.',
    'Formal **Ihr / Ihre / Ihren** is always written with a capital letter, just like *Sie*.',
  ],
  exercises: [
    {
      type: 'match',
      id: 'a1-21-possessive-articles-ex01',
      prompt: 'Match each pronoun with its possessive article.',
      pairs: [
        ['ich', 'mein'],
        ['du', 'dein'],
        ['er', 'sein'],
        ['wir', 'unser'],
        ['ihr', 'euer'],
      ],
      explanation: 'Every personal pronoun has its own possessive base word. These are the forms before any ending is added.',
    },
    {
      type: 'fill',
      id: 'a1-21-possessive-articles-ex02',
      prompt: 'Das ist ___ Bruder. (my)',
      answer: ['mein'],
      explanation: 'Bruder is masculine and Nominative (after sein), so mein takes no ending.',
    },
    {
      type: 'fill',
      id: 'a1-21-possessive-articles-ex03',
      prompt: 'Wo ist ___ Tasche? (your, informal singular)',
      answer: ['deine'],
      explanation: 'Tasche is feminine, so dein gets -e: deine Tasche.',
    },
    {
      type: 'mc',
      id: 'a1-21-possessive-articles-ex04',
      prompt: 'Complete: "Anna besucht ___ Oma." (Anna visits her grandmother.)',
      options: ['seine', 'ihre', 'ihren'],
      answer: 1,
      explanation: 'The owner is Anna (sie) → ihr. Oma is feminine, so ihre. seine would mean his.',
    },
    {
      type: 'fill',
      id: 'a1-21-possessive-articles-ex05',
      prompt: 'Ich sehe ___ Hund. (his)',
      answer: ['seinen'],
      explanation: 'Owner is er → sein. Hund is masculine and the Accusative object of sehen → seinen.',
    },
    {
      type: 'mc',
      id: 'a1-21-possessive-articles-ex06',
      prompt: 'Which form is correct for "your (plural, informal) children"?',
      options: ['euere Kinder', 'eure Kinder', 'euren Kinder'],
      answer: 1,
      explanation: 'euer drops its middle e before an ending. Kinder is plural, so the ending is -e: eure Kinder.',
    },
    {
      type: 'order',
      id: 'a1-21-possessive-articles-ex07',
      prompt: 'Build the sentence: "We are looking for our car."',
      words: ['unser', 'Wir', 'Auto.', 'suchen'],
      answer: ['Wir suchen unser Auto.'],
      explanation: 'Auto is neuter. Neuter takes no ending in Nominative or Accusative, so it is unser Auto.',
    },
    {
      type: 'fill',
      id: 'a1-21-possessive-articles-ex08',
      prompt: 'Haben Sie ___ Schlüssel, Herr Braun? (your, formal)',
      answer: ['Ihren'],
      explanation: 'Formal you → Ihr with a capital letter. Schlüssel is masculine Accusative → Ihren.',
    },
    {
      type: 'mc',
      id: 'a1-21-possessive-articles-ex09',
      prompt: '"Tom liebt ___ Schwester." (Tom loves his sister.) Which is correct?',
      options: ['ihre', 'seinen', 'seine'],
      answer: 2,
      explanation: 'The owner is Tom (er) → sein. Schwester is feminine → seine. ihre would mean her; the sister being female does not matter.',
    },
    {
      type: 'translate',
      id: 'a1-21-possessive-articles-ex10',
      prompt: 'Translate: "My mother is calling her friend." (friend = female)',
      answer: ['Meine Mutter ruft ihre Freundin an.'],
      hint: 'anrufen = to call (separable), die Freundin = female friend',
      explanation: 'Mutter is feminine → meine. Owner of the friend is the mother (sie) → ihr; Freundin is feminine Accusative → ihre. The prefix an goes to the end.',
    },
    {
      type: 'fill',
      id: 'a1-21-possessive-articles-ex11',
      prompt: 'Die Kinder lieben ___ Eltern. (their)',
      answer: ['ihre'],
      explanation: 'Owner is die Kinder (sie, they) → ihr. Eltern is plural → ihre.',
    },
  ],
};

export default topic;
