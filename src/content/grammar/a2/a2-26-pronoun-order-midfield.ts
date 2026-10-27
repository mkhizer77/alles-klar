import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-26-pronoun-order-midfield',
  level: 'A2',
  unit: 9,
  order: 26,
  title: 'Pronoun order in the midfield',
  germanTerm: 'Pronomen im Mittelfeld',
  tags: ['word order', 'pronouns', 'dative', 'accusative', 'midfield'],
  summary: 'When a sentence has two objects, pronouns come before nouns, and if both objects are pronouns the Accusative (es, ihn) comes before the Dative (mir, ihm).',
  explanation: `
### What it is

The **midfield** (*Mittelfeld*) is the part of the sentence between the conjugated verb (position 2) and the verb at the end. When a verb like *geben, schenken, zeigen, erklären, schicken* has **two objects** (a person in the Dative and a thing in the Accusative), their order follows clear rules.

- Ich gebe **dem Kind** **das Buch**.
- Ich gebe **es** **ihm**.

Notice that the order flips. This surprises many learners, so here are the rules.

### Rule 1: two nouns → Dative before Accusative

If both objects are nouns, the **person (Dative)** comes first, then the **thing (Accusative)**:

- Ich schenke **meiner Mutter** **einen Schal**. – *I give my mother a scarf.*
- Er zeigt **den Gästen** **die Wohnung**. – *He shows the guests the flat.*

### Rule 2: two pronouns → Accusative before Dative

If both objects are pronouns, the **thing (Accusative)** comes first:

- Ich schenke **ihn** **ihr**. – *I give it to her.*
- Er zeigt **sie** **ihnen**. – *He shows it to them.*
- Kannst du **es** **mir** erklären? – *Can you explain it to me?*

The Accusative pronouns are *mich, dich, ihn, sie, es, uns, euch, sie / Sie*; the Dative pronouns are *mir, dir, ihm, ihr, ihm, uns, euch, ihnen / Ihnen*.

### Rule 3: pronoun + noun → pronoun first

If one object is a pronoun and the other is a noun, the **pronoun always comes first**, whatever its case:

- Ich gebe **ihm** das Buch. – (Dative pronoun first)
- Ich gebe **es** dem Lehrer. – (Accusative pronoun first)

### Summary table

| objects | order | example |
|---|---|---|
| noun + noun | Dative → Accusative | Ich gebe **dem Mann** **den Schlüssel**. |
| pronoun + pronoun | Accusative → Dative | Ich gebe **ihn** **ihm**. |
| pronoun + noun | pronoun → noun | Ich gebe **ihm** den Schlüssel. / Ich gebe **ihn** dem Mann. |

A memory trick: pronouns are short and known information, so they move **as far left as possible**. Among nouns, the person usually comes first.

### Pronouns and the subject

Pronouns like to stand **right after the conjugated verb**. If the subject is a noun and comes after the verb (because something else is in position 1), the pronouns usually go **before** the noun subject:

- Gestern hat **mir** der Chef die Nachricht geschickt.
- Zum Glück hat **es** meine Schwester gefunden.

If the subject is itself a pronoun, it comes first: *Gestern hat **er mir** die Nachricht geschickt.*

### Reflexive pronouns

A reflexive pronoun (*mich, dich, sich …*) behaves like any other pronoun: it goes early in the midfield, right after the verb or the pronoun subject.

- Heute hat **sich** mein Bruder verspätet.
- Ich habe **mich** sehr gefreut.

### Why it matters

German can put objects in several places because the cases show who does what. But native speakers still expect a "normal" order, and *Ich gebe ihm es* sounds wrong to them. Getting this order right makes your sentences flow and keeps the listener from stumbling.
`,
  examples: [
    { de: 'Ich gebe meinem Bruder das Buch.', en: 'I give my brother the book. (two nouns: Dative, then Accusative)' },
    { de: 'Ich gebe es ihm.', en: 'I give it to him. (two pronouns: Accusative, then Dative)' },
    { de: 'Ich gebe ihm das Buch.', en: 'I give him the book. (pronoun before noun)' },
    { de: 'Ich gebe es meinem Bruder.', en: 'I give it to my brother. (pronoun before noun)' },
    { de: 'Kannst du mir das erklären?', en: 'Can you explain that to me? (mir first; das is a demonstrative, treated like a noun here)' },
    { de: 'Gestern hat mir der Chef eine E-Mail geschickt.', en: 'Yesterday the boss sent me an email. (pronoun before the noun subject)' },
    { de: 'Sie hat sich die Haare gewaschen.', en: 'She washed her hair. (reflexive pronoun early in the midfield)' },
  ],
  connections: [
    { topicId: 'a1-23-accusative-pronouns', note: 'The Accusative pronouns (mich, dich, ihn, sie, es …) are the ones that come first when both objects are pronouns.' },
    { topicId: 'a1-27-dative-pronouns', note: 'The Dative pronouns (mir, dir, ihm, ihr …) come second after an Accusative pronoun.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The midfield rules for time, manner and place come after the pronoun rules; pronouns go first.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'Reflexive pronouns follow the same rule: as early as possible in the midfield.' },
  ],
  edgeCases: [
    '*Ich gebe ihm es* is wrong. With two pronouns the Accusative comes first: *Ich gebe **es ihm***.',
    'When both objects are nouns the usual order is Dative first (*dem Kind das Buch*). The Accusative can come first only if you want to stress it.',
    '**es** is almost always first among the pronouns and never carries stress. You cannot start a sentence with the object *es* for emphasis.',
    'In a subordinate clause the same order applies, right after the conjunction and the subject: *…, weil ich **es ihm** gestern gegeben habe.*',
    'Pronouns stay in the midfield even in the Perfekt: *Ich habe **es ihr** gezeigt*, not *Ich habe gezeigt es ihr*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-26-pronoun-order-midfield-ex01',
      prompt: 'Which order is correct? "I give it to him."',
      options: ['Ich gebe ihm es.', 'Ich gebe es ihm.', 'Ich gebe es ihn.'],
      answer: 1,
      explanation: 'Two pronouns: Accusative (es) before Dative (ihm). ihn would be the Accusative, but the person receiving needs the Dative.',
    },
    {
      type: 'mc',
      id: 'a2-26-pronoun-order-midfield-ex02',
      prompt: 'Which order is correct? "I give my sister the book." (two nouns)',
      options: ['Ich gebe das Buch meiner Schwester.', 'Ich gebe meiner Schwester das Buch.', 'Ich gebe meine Schwester das Buch.'],
      answer: 1,
      explanation: 'With two nouns the Dative (meiner Schwester) comes before the Accusative (das Buch). Option 1 is possible only with special emphasis; option 3 has the wrong case.',
    },
    {
      type: 'fill',
      id: 'a2-26-pronoun-order-midfield-ex03',
      prompt: 'Kannst du ___ das Foto schicken? (to me)',
      answer: ['mir'],
      explanation: 'schicken + Dative person. The pronoun mir goes before the noun das Foto.',
    },
    {
      type: 'order',
      id: 'a2-26-pronoun-order-midfield-ex04',
      prompt: 'Build the sentence: "I will show it to you (du)."',
      words: ['dir', 'zeige', 'es', 'Ich', 'morgen.'],
      answer: ['Ich zeige es dir morgen.'],
      explanation: 'Accusative pronoun es comes before Dative pronoun dir, right after the verb. The time word morgen comes after the pronouns.',
    },
    {
      type: 'mc',
      id: 'a2-26-pronoun-order-midfield-ex05',
      prompt: 'Complete: "Hast du ___ schon gezeigt?" (it, to the teacher)',
      options: ['dem Lehrer es', 'es dem Lehrer', 'es den Lehrer'],
      answer: 1,
      explanation: 'A pronoun always comes before a noun: es dem Lehrer. zeigen takes the Dative for the person, so dem Lehrer.',
    },
    {
      type: 'match',
      id: 'a2-26-pronoun-order-midfield-ex06',
      prompt: 'Match the sentence beginning with its correct continuation.',
      pairs: [
        ['Ich gebe (noun + noun)', 'meinem Vater den Schlüssel.'],
        ['Ich gebe (pronoun + pronoun)', 'ihn ihm.'],
        ['Ich gebe ihn', 'meinem Vater.'],
        ['Ich gebe ihm', 'den Schlüssel.'],
      ],
      explanation: 'Noun + noun: Dative first. Pronoun + noun: pronoun first. Pronoun + pronoun: Accusative (ihn) before Dative (ihm).',
    },
    {
      type: 'fill',
      id: 'a2-26-pronoun-order-midfield-ex07',
      prompt: 'Der Schlüssel? Ich habe ___ ihr gestern gegeben. (it, der Schlüssel)',
      answer: ['ihn'],
      explanation: 'Schlüssel is masculine, so the Accusative pronoun is ihn. It comes before the Dative ihr.',
    },
    {
      type: 'order',
      id: 'a2-26-pronoun-order-midfield-ex08',
      prompt: 'Build the sentence: "Yesterday the boss sent me an email."',
      words: ['E-Mail', 'geschickt.', 'Gestern', 'der', 'mir', 'hat', 'Chef', 'eine'],
      answer: ['Gestern hat mir der Chef eine E-Mail geschickt.', 'Gestern hat der Chef mir eine E-Mail geschickt.'],
      explanation: 'After Gestern the verb hat comes second. The pronoun mir usually moves in front of the noun subject der Chef, though placing it after the subject is also accepted.',
    },
    {
      type: 'mc',
      id: 'a2-26-pronoun-order-midfield-ex09',
      prompt: 'Complete the weil-clause: "Ich bin froh, weil ___ endlich erklärt hat."',
      options: ['er es mir', 'er mir es', 'es er mir'],
      answer: 0,
      explanation: 'In a subordinate clause the subject pronoun er comes right after weil, then Accusative es, then Dative mir.',
    },
    {
      type: 'fill',
      id: 'a2-26-pronoun-order-midfield-ex10',
      prompt: 'Heute hat ___ mein Bruder verspätet. (reflexive pronoun for er)',
      answer: ['sich'],
      explanation: 'sich verspäten is reflexive. The reflexive pronoun sich goes early in the midfield, before the noun subject mein Bruder.',
    },
    {
      type: 'translate',
      id: 'a2-26-pronoun-order-midfield-ex11',
      prompt: 'Translate: "Can you explain it to me?" (du form)',
      answer: ['Kannst du es mir erklären?', 'Kannst du mir das erklären?'],
      hint: 'erklären = to explain',
      explanation: 'With es and mir the Accusative es comes first: es mir. (With the stressed das instead of es, mir can come first: mir das.)',
    },
    {
      type: 'mc',
      id: 'a2-26-pronoun-order-midfield-ex12',
      prompt: 'Which sentence is wrong?',
      options: ['Ich habe es ihr gezeigt.', 'Ich habe ihr das Bild gezeigt.', 'Ich habe gezeigt es ihr.'],
      answer: 2,
      explanation: 'Pronouns stay in the midfield; the Partizip II gezeigt must close the sentence. Option 3 breaks the sentence bracket.',
    },
  ],
};

export default topic;
