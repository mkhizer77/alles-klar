import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-13-negation',
  level: 'A1',
  unit: 2,
  order: 13,
  title: 'Negation: nicht vs kein',
  germanTerm: 'Negation',
  tags: ['negation', 'nicht', 'kein', 'word order'],
  summary: 'kein negates a noun that has ein or no article (kein Auto); nicht negates everything else (verbs, adjectives, names, nouns with der / die / das).',
  explanation: `
### Two ways to say "not"

English uses *not* and *no / not a*. German uses **nicht** and **kein**. The choice is not about meaning but about **what you are negating**:

- **kein** goes in front of a **noun** that would otherwise have *ein* or **no article**.
- **nicht** negates **everything else**.

### kein: "not a / no"

*kein* replaces *ein* and takes the same endings, plus a plural form:

| gender | positive | negative |
|---|---|---|
| masculine | ein Hund | **kein** Hund |
| feminine | eine Katze | **keine** Katze |
| neuter | ein Auto | **kein** Auto |
| plural | – Kinder | **keine** Kinder |

- *Ich habe **ein** Auto.* → *Ich habe **kein** Auto.* – I don't have a car.
- *Ich habe **Zeit**.* → *Ich habe **keine** Zeit.* – I have no time.
- *Das sind **Freunde**.* → *Das sind **keine** Freunde.* – Those are not friends.

Rule of thumb: if the noun has **ein / eine** or **nothing** in front of it, negate with **kein**. Nouns without an article include plurals (*Kinder*), uncountables (*Zeit, Geld, Hunger*) and jobs (*Ich bin Lehrer → Ich bin kein Lehrer*).

### nicht: "not"

*nicht* negates the verb, an adjective, an adverb, a name, or a noun with a **definite** article or a possessive:

| what is negated | example |
|---|---|
| the verb / whole sentence | Ich komme **nicht**. |
| an adjective | Das Auto ist **nicht** neu. |
| an adverb or place | Er wohnt **nicht** hier. |
| a noun with der / die / das | Das ist **nicht** der Chef. |
| a noun with mein / dein … | Das ist **nicht** mein Buch. |
| a name | Ich heiße **nicht** Anna. |

### Where does nicht go?

This is the hard part for learners. Two simple rules cover most sentences at A1:

1. **nicht goes at the end** when it negates the whole sentence: *Ich arbeite heute **nicht**.* – *Er kommt morgen **nicht**.*
2. **nicht goes directly before** the specific thing it negates: an adjective (*Das ist **nicht** teuer*), a place or direction (*Ich fahre **nicht** nach Berlin*), or a second verb part at the end (*Ich kann **nicht** kommen*).

So *nicht* moves back to the end, but stops in front of adjectives, places and verb parts that are already at the end.

### Answering a negative question: doch

When someone asks a question with *nicht* or *kein* and you want to say "yes, actually", use **doch**:

- *Hast du **kein** Geld?* – ***Doch**, ich habe Geld.*
- *Kommst du **nicht**?* – ***Doch**, ich komme.*

A plain *ja* would be confusing here.

### Other negative words

- **nichts** = nothing: *Ich sehe nichts.* (Do not confuse with *nicht*.)
- **nie** = never: *Er trinkt nie Kaffee.*
- **niemand** = nobody: *Niemand ist da.*
- **nicht mehr** = no longer, **noch nicht** = not yet: *Ich wohne nicht mehr in Bonn. Er ist noch nicht da.*

German uses **only one** negative word per idea: *Ich sehe nichts* (not *Ich sehe nicht nichts*).

### Why it matters

You need negation in every second conversation: *Ich habe keine Zeit, ich verstehe nicht, das ist nicht richtig.* The *kein / nicht* choice is a classic test item, and once you see that *kein* = *not ein*, it becomes mechanical.
`,
  examples: [
    { de: 'Ich habe kein Auto.', en: 'I do not have a car. (ein Auto → kein Auto)' },
    { de: 'Wir haben keine Zeit.', en: 'We have no time. (no article → keine)' },
    { de: 'Das sind keine Äpfel.', en: 'Those are not apples. (plural → keine)' },
    { de: 'Ich bin kein Arzt.', en: 'I am not a doctor. (job without article → kein)' },
    { de: 'Ich komme heute nicht.', en: 'I am not coming today. (whole sentence: nicht at the end)' },
    { de: 'Das Hotel ist nicht teuer.', en: 'The hotel is not expensive. (nicht before the adjective)' },
    { de: 'Das ist nicht mein Schlüssel.', en: 'That is not my key. (possessive → nicht)' },
    { de: 'Kommst du nicht? – Doch!', en: 'Aren\'t you coming? – Yes, I am!' },
  ],
  connections: [
    { topicId: 'a1-12-indefinite-articles', note: 'kein has exactly the endings of ein, plus keine in the plural.' },
    { topicId: 'a1-07-questions', note: 'doch is the yes-answer to a negative question.' },
    { topicId: 'a1-06-verb-second', note: 'nicht never moves the verb; the verb stays second and nicht goes towards the end.' },
    { topicId: 'a1-20-accusative', note: 'kein changes like ein in the Accusative: keinen Hund.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The exact position of nicht in longer sentences is covered with the sentence bracket.' },
  ],
  edgeCases: [
    '*Ich habe nicht ein Auto* is wrong in normal speech. Use **kein**: *Ich habe kein Auto.* Only use *nicht ein* when you stress the number: *nicht EIN Auto, sondern zwei*.',
    '**nicht** vs **nichts**: *Ich verstehe nicht* (I don\'t understand) vs *Ich verstehe nichts* (I understand nothing).',
    'No double negatives: *Ich habe keine Zeit* is complete. *Ich habe nicht keine Zeit* is wrong.',
    'With a **definite** article or possessive, always *nicht*: *nicht das Buch, nicht mein Buch*. *kein das Buch* is impossible.',
    '*nicht* goes **before** an adjective, a place or a final verb part, but **after** a plain object: *Ich kenne den Mann nicht*, but *Ich fahre nicht nach Berlin*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-13-negation-ex01',
      prompt: 'Negate: "Ich habe ein Auto."',
      options: ['Ich habe nicht ein Auto.', 'Ich habe kein Auto.', 'Ich habe keine Auto.'],
      answer: 1,
      explanation: 'ein Auto → kein Auto. Auto is neuter, so kein without ending.',
    },
    {
      type: 'fill',
      id: 'a1-13-negation-ex02',
      prompt: 'Ich habe ___ Zeit. (no – die Zeit)',
      answer: ['keine'],
      explanation: 'Zeit is feminine and has no article in the positive sentence, so the negative is keine.',
    },
    {
      type: 'fill',
      id: 'a1-13-negation-ex03',
      prompt: 'Das Auto ist ___ neu. (not)',
      answer: ['nicht'],
      explanation: 'An adjective (neu) is negated with nicht, placed right in front of it.',
    },
    {
      type: 'mc',
      id: 'a1-13-negation-ex04',
      prompt: 'Which negation is correct for "Das ist mein Buch."?',
      options: ['Das ist kein mein Buch.', 'Das ist nicht mein Buch.', 'Das ist mein kein Buch.'],
      answer: 1,
      explanation: 'A noun with a possessive (mein) is negated with nicht, not kein.',
    },
    {
      type: 'match',
      id: 'a1-13-negation-ex05',
      prompt: 'Match each sentence with the right negative word.',
      pairs: [
        ['Ich sehe ___.', 'nichts'],
        ['Sie wohnt ___ hier.', 'nicht'],
        ['Wir haben ___ Kinder.', 'keine'],
        ['Er ist ___ Lehrer.', 'kein'],
      ],
      explanation: 'nothing → nichts; hier (adverb) → nicht; Kinder (plural noun) → keine; Lehrer (job, masculine, no article) → kein.',
    },
    {
      type: 'order',
      id: 'a1-13-negation-ex06',
      prompt: 'Build the sentence: "I am not coming today."',
      words: ['heute', 'komme', 'nicht.', 'Ich'],
      answer: ['Ich komme heute nicht.'],
      explanation: 'When the whole sentence is negated, nicht goes to the end: Ich komme heute nicht.',
    },
    {
      type: 'mc',
      id: 'a1-13-negation-ex07',
      prompt: '"Hast du keine Geschwister?" – You have a sister. What do you say?',
      options: ['Ja, ich habe eine Schwester.', 'Doch, ich habe eine Schwester.', 'Nein, ich habe eine Schwester.'],
      answer: 1,
      explanation: 'A negative question gets doch when the answer is positive: Doch, ich habe eine Schwester.',
    },
    {
      type: 'fill',
      id: 'a1-13-negation-ex08',
      prompt: 'Ich verstehe ___. (nothing)',
      answer: ['nichts'],
      explanation: 'nothing = nichts. nicht would mean "I don\'t understand" without an object.',
    },
    {
      type: 'mc',
      id: 'a1-13-negation-ex09',
      prompt: 'Where does nicht go? "Ich fahre ___ nach Berlin ___."',
      options: ['Ich fahre nicht nach Berlin.', 'Ich fahre nach Berlin nicht.'],
      answer: 0,
      explanation: 'nicht stands in front of a place or direction phrase: nicht nach Berlin.',
    },
    {
      type: 'translate',
      id: 'a1-13-negation-ex10',
      prompt: 'Translate: "I am not a doctor." (male speaker)',
      answer: ['Ich bin kein Arzt.'],
      hint: 'der Arzt = doctor',
      explanation: 'Jobs have no article (Ich bin Arzt), so the negation is kein: Ich bin kein Arzt.',
    },
    {
      type: 'mc',
      id: 'a1-13-negation-ex11',
      prompt: 'Which sentence is wrong?',
      options: ['Ich trinke nie Kaffee.', 'Ich habe nicht keine Zeit.', 'Niemand ist zu Hause.'],
      answer: 1,
      explanation: 'German does not stack negatives. "Ich habe keine Zeit" is already complete.',
    },
    {
      type: 'translate',
      id: 'a1-13-negation-ex12',
      prompt: 'Translate: "The hotel is not expensive."',
      answer: ['Das Hotel ist nicht teuer.'],
      hint: 'das Hotel, teuer = expensive',
      explanation: 'An adjective is negated with nicht directly in front of it: nicht teuer.',
    },
  ],
};

export default topic;
