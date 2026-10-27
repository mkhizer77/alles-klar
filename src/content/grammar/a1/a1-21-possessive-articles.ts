import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-21-possessive-articles',
  level: 'A1',
  unit: 4,
  order: 21,
  title: 'Possessive articles: mein, dein, sein …',
  germanTerm: 'Possessivartikel',
  tags: ['articles', 'possessives', 'accusative', 'nominative'],
  summary: 'mein, dein, sein, ihr, unser, euer, Ihr say whose something is; they take the same endings as ein and kein.',
  explanation: `
### What it is

A **possessive article** (*Possessivartikel*) is the word for *my*, *your*, *his*, *her* and so on. It stands in front of a noun instead of *der / ein* and tells you who something belongs to:

- **mein** Bruder – *my brother*
- **deine** Schwester – *your sister*
- **unser** Haus – *our house*

### One possessive for each person

Every personal pronoun has its own possessive. Learn them as a pair:

| pronoun | possessive | meaning |
|---|---|---|
| ich | **mein** | my |
| du | **dein** | your (one person, informal) |
| er | **sein** | his |
| sie | **ihr** | her |
| es | **sein** | its |
| wir | **unser** | our |
| ihr | **euer** | your (several people, informal) |
| sie | **ihr** | their |
| Sie | **Ihr** | your (formal, always capital I) |

Notice that **sein** is used for *er* and *es*, and **ihr** is used for *sie* (she), *sie* (they) and, with a capital letter, *Sie* (formal you). The context tells you which one is meant.

### The endings: exactly like ein and kein

The base form (*mein*, *dein* …) is only the beginning. A possessive gets an ending depending on the **gender** and **case** of the noun that follows. The endings are the same ones you already know from **ein** and **kein**:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | mein Bruder | mein**e** Schwester | mein Kind | mein**e** Kinder |
| Accusative | mein**en** Bruder | mein**e** Schwester | mein Kind | mein**e** Kinder |

The same pattern applies to *dein, sein, ihr, unser, euer, Ihr*: *seine Mutter*, *ihren Vater*, *unser Auto*, *Ihre Kinder*.

One small spelling change: **euer** drops its middle **e** when an ending is added: *euer Haus* but *eu**r**e Kinder*, *eu**r**en Freund*. (*Unser* keeps its e: *unsere*, *unseren*.)

### Owner vs thing: the two decisions

To choose the right form you make **two** separate decisions:

1. **Who owns it?** This picks the base word: *mein, dein, sein, ihr …*
2. **What is the noun, and what case is it in?** This picks the ending: *-, -e, -en*.

Example: *She loves her brother.*
- Owner is *she* → **ihr**.
- *Bruder* is masculine, and he is the object of *lieben* (Accusative) → **-en**.
- Result: Sie liebt **ihren** Bruder.

English speakers often let the thing decide the base word. *Her brother* is **ihr Bruder**, not *sein Bruder*: the brother is male, but the owner is female, and only the owner matters for choosing *ihr*.

### Why it matters

You cannot talk about your family, your job, your flat or your day without possessives: *Mein Mann arbeitet …*, *Wo ist dein Handy?*, *Ich besuche meine Eltern.* Because the endings copy *ein / kein*, learning possessives also makes those endings automatic. Later the same endings appear in the Dative (*meinem, meiner*) and in adjective declension, so this table is worth knowing cold.
`,
  examples: [
    { de: 'Mein Vater ist Arzt.', en: 'My father is a doctor. (masculine Nominative, no ending)' },
    { de: 'Ich besuche meinen Vater.', en: 'I visit my father. (masculine Accusative: meinen)' },
    { de: 'Wo ist deine Jacke?', en: 'Where is your jacket? (feminine: deine)' },
    { de: 'Sie sucht ihren Schlüssel.', en: 'She is looking for her key. (owner sie → ihr, masculine object → ihren)' },
    { de: 'Er liebt seine Frau.', en: 'He loves his wife. (owner er → sein, feminine → seine)' },
    { de: 'Sind das eure Bücher?', en: 'Are these your books? (ihr → euer, drops the e: eure)' },
    { de: 'Haben Sie Ihren Pass?', en: 'Do you have your passport? (formal Ihr, capital I)' },
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
