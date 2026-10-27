import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-24-dative',
  level: 'A1',
  unit: 5,
  order: 24,
  title: 'The Dative case: indirect objects',
  germanTerm: 'Dativ',
  tags: ['cases', 'dative', 'articles', 'objects'],
  summary: 'The Dative is the case of the receiver: the person you give, show or tell something to. Its articles are dem, der, dem, den.',
  explanation: `
### What it is

Look at *I give the child the book.* There are two objects. *The book* is the thing that moves: the **direct object** (Accusative). *The child* is the person who **receives** it: the **indirect object**. In German, the indirect object stands in the **Dative** (*Dativ*).

- Ich gebe **dem Kind** das Buch. – *I give the child the book.*
- Sie zeigt **der Frau** den Weg. – *She shows the woman the way.*
- Er schenkt **seinem Vater** eine Uhr. – *He gives his father a watch.*

To find the Dative, ask **wem?** (to whom?): *Wem gebe ich das Buch? Dem Kind.*

### The articles in the Dative

Unlike the Accusative, the Dative changes **every** gender. This is the first case where the whole row looks new:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der Mann | die Frau | das Kind | die Kinder |
| Accusative | den Mann | die Frau | das Kind | die Kinder |
| **Dative** | **dem** Mann | **der** Frau | **dem** Kind | **den** Kinder**n** |

The same endings go on *ein*, *kein* and the possessives:

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| **Dative** | ein**em** / kein**em** / mein**em** Mann | ein**er** / kein**er** / mein**er** Frau | ein**em** / kein**em** / mein**em** Kind | – / kein**en** / mein**en** Kinder**n** |

Three things to notice:

1. Masculine and neuter are the same again: **dem / einem**.
2. Feminine Dative is **der** – the same word as the masculine Nominative. Do not let that confuse you; the noun tells you which it is.
3. In the **plural**, the article is **den** and the noun itself adds **-n** (*den Kindern, den Freunden, den Autos* stays without extra n because it already ends in -s).

### Verbs of giving, showing and telling

The Dative appears whenever a verb has a "receiver". These verbs very often take both a Dative person and an Accusative thing:

| verb | meaning |
|---|---|
| **geben** | to give |
| **schenken** | to give as a present |
| **zeigen** | to show |
| **bringen** | to bring |
| **schicken** | to send |
| **erklären** | to explain |
| **kaufen** | to buy (for someone) |
| **empfehlen** | to recommend |

Pattern: **subject + verb + Dative (person) + Accusative (thing)**.

- Ich schicke **meiner Mutter** eine Karte.
- Der Kellner bringt **dem Gast** die Rechnung.

When both objects are nouns, the Dative normally comes **first**.

### Why it matters

The Dative is not only for giving. In the next topics you will see that it is also demanded by a whole group of prepositions (*mit, von, zu …*), by certain verbs (*helfen, gefallen, danken*), and by location expressions (*im Haus, auf dem Tisch*). In fact, the Dative is used more often than the Accusative in everyday speech. Learning the four forms **dem, der, dem, den + -n** well now pays off in almost every later unit.
`,
  examples: [
    { de: 'Ich gebe dem Mann den Schlüssel.', en: 'I give the man the key. (dem Mann = receiver, Dative)' },
    { de: 'Sie zeigt der Lehrerin das Foto.', en: 'She shows the teacher the photo. (feminine Dative: der)' },
    { de: 'Wir schenken dem Kind ein Spiel.', en: 'We give the child a game. (neuter Dative: dem)' },
    { de: 'Er erklärt den Schülern die Regel.', en: 'He explains the rule to the pupils. (plural: den + -n)' },
    { de: 'Ich schicke meiner Oma eine Karte.', en: 'I send my grandma a card. (possessive: meiner)' },
    { de: 'Der Kellner bringt einem Gast die Suppe.', en: 'The waiter brings a guest the soup. (einem)' },
    { de: 'Wem gehört das Auto?', en: 'Whose car is this? (wem asks for the Dative)' },
  ],
  connections: [
    { topicId: 'a1-20-accusative', note: 'The Accusative is the thing given; the Dative is the person who receives it. Many sentences have both.' },
    { topicId: 'a1-21-possessive-articles', note: 'Possessives take the Dative endings -em, -er, -en: meinem, meiner, meinen.' },
    { topicId: 'a1-25-dative-prepositions', note: 'aus, bei, mit, nach, seit, von, zu always take the Dative forms learned here.' },
    { topicId: 'a1-26-dative-verbs', note: 'Some verbs like helfen and gefallen take a Dative object even with no second object.' },
    { topicId: 'a1-27-dative-pronouns', note: 'mir, dir, ihm, ihr are the pronoun versions of dem, der.' },
  ],
  edgeCases: [
    'Feminine Dative **der** looks like masculine Nominative **der**. *Ich helfe der Frau* is Dative; *Der Mann hilft* is Nominative. Look at the noun and the verb.',
    'Plural nouns add **-n** in the Dative: *den Kindern, den Freunden, den Leuten*. Exception: plurals that already end in **-n** or **-s** stay the same (*den Frauen, den Autos*).',
    'When both objects are nouns, Dative comes first: *Ich gebe **dem Kind** das Buch*. Putting the Accusative noun first sounds odd.',
    '**wem** (to whom) asks for the Dative. **wen** (whom) asks for the Accusative. One letter, different case.',
    'A few masculine nouns add -n/-en in the Dative too: *dem Jungen, dem Herrn, dem Studenten* (n-declension, B1).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-24-dative-ex01',
      prompt: 'Which part is the indirect object (Dative) in: "Ich gebe dem Freund das Geld."?',
      options: ['Ich', 'dem Freund', 'das Geld'],
      answer: 1,
      explanation: 'Ask "Wem gebe ich das Geld?" – dem Freund. The friend receives the money, so he is in the Dative.',
    },
    {
      type: 'fill',
      id: 'a1-24-dative-ex02',
      prompt: 'Ich zeige ___ Kind das Bild. (the)',
      answer: ['dem'],
      explanation: 'Kind is neuter and the receiver of zeigen. Neuter Dative is dem.',
    },
    {
      type: 'fill',
      id: 'a1-24-dative-ex03',
      prompt: 'Er schenkt ___ Frau Blumen. (the)',
      answer: ['der'],
      explanation: 'Frau is feminine. Feminine Dative is der, even though it looks like the masculine Nominative.',
    },
    {
      type: 'fill',
      id: 'a1-24-dative-ex04',
      prompt: 'Wir bringen ___ Mann die Zeitung. (the)',
      answer: ['dem'],
      explanation: 'Mann is masculine and the receiver. Masculine Dative is dem.',
    },
    {
      type: 'match',
      id: 'a1-24-dative-ex05',
      prompt: 'Match each noun with its Dative definite article.',
      pairs: [
        ['Vater (m)', 'dem'],
        ['Mutter (f)', 'der'],
        ['Baby (n)', 'dem (neuter)'],
        ['Eltern (pl)', 'den'],
      ],
      explanation: 'Masculine and neuter dem, feminine der, plural den (with -n on the noun where possible).',
    },
    {
      type: 'mc',
      id: 'a1-24-dative-ex06',
      prompt: 'Complete: "Die Lehrerin erklärt ___ die Aufgabe."',
      options: ['die Schüler', 'den Schüler', 'den Schülern'],
      answer: 2,
      explanation: 'The pupils (plural) receive the explanation: Dative plural den + the noun adds -n: den Schülern.',
    },
    {
      type: 'fill',
      id: 'a1-24-dative-ex07',
      prompt: 'Ich schicke ___ Bruder ein Paket. (my)',
      answer: ['meinem'],
      explanation: 'Bruder is masculine and the receiver. The possessive takes the Dative ending -em: meinem.',
    },
    {
      type: 'order',
      id: 'a1-24-dative-ex08',
      prompt: 'Build the sentence: "She gives the child an apple."',
      words: ['Apfel.', 'gibt', 'dem', 'Sie', 'einen', 'Kind'],
      answer: ['Sie gibt dem Kind einen Apfel.'],
      explanation: 'Subject, verb, then the Dative person (dem Kind) before the Accusative thing (einen Apfel).',
    },
    {
      type: 'mc',
      id: 'a1-24-dative-ex09',
      prompt: 'Which question word asks for the Dative?',
      options: ['wer?', 'wen?', 'wem?'],
      answer: 2,
      explanation: 'wem = to whom. wer is Nominative, wen is Accusative.',
    },
    {
      type: 'fill',
      id: 'a1-24-dative-ex10',
      prompt: 'Der Kellner bringt ___ Gast die Rechnung. (a)',
      answer: ['einem'],
      explanation: 'Gast is masculine. Masculine Dative of ein is einem.',
    },
    {
      type: 'translate',
      id: 'a1-24-dative-ex11',
      prompt: 'Translate: "I am sending my sister a card."',
      answer: ['Ich schicke meiner Schwester eine Karte.'],
      hint: 'schicken = to send, die Karte = card',
      explanation: 'Schwester is feminine and the receiver → meiner (Dative). Karte is feminine and the thing sent → eine (Accusative).',
    },
    {
      type: 'mc',
      id: 'a1-24-dative-ex12',
      prompt: 'In "Der Frau gibt der Mann das Buch.", who gives the book?',
      options: ['the woman', 'the man'],
      answer: 1,
      explanation: 'Der Frau is feminine Dative (the receiver). Der Mann is masculine Nominative (the giver). The first der is not a subject here.',
    },
  ],
};

export default topic;
