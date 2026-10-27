import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-20-accusative',
  level: 'A1',
  unit: 4,
  order: 20,
  title: 'The Accusative case: direct objects',
  germanTerm: 'Akkusativ',
  tags: ['cases', 'accusative', 'articles', 'objects'],
  summary: 'The Accusative is the case of the direct object: the thing the action is done to. Only the masculine article changes (der → den, ein → einen).',
  explanation: `
### What it is

In the sentence *The man reads the book*, there are two nouns. *The man* does the reading: he is the **subject** (Nominative). *The book* is the thing being read: it is the **direct object**. In German the direct object stands in the **Accusative** (*Akkusativ*).

- Der Mann liest **das Buch**. – *The man reads the book.*
- Ich sehe **den Hund**. – *I see the dog.*
- Sie kauft **einen Apfel**. – *She buys an apple.*

To find the Accusative, ask **wen?** (whom?) for people or **was?** (what?) for things, after the verb: *Was liest der Mann? Das Buch.*

### The articles in the Accusative

Here is the good news: compared with the Nominative, **only the masculine changes**. Feminine, neuter and plural look exactly the same.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative (the) | der Mann | die Frau | das Kind | die Kinder |
| **Accusative (the)** | **den** Mann | die Frau | das Kind | die Kinder |
| Nominative (a / no) | ein / kein Mann | eine / keine Frau | ein / kein Kind | – / keine Kinder |
| **Accusative (a / no)** | **einen / keinen** Mann | eine / keine Frau | ein / kein Kind | – / keine Kinder |

So the whole Accusative comes down to one rule: **masculine gets -en** (der → den, ein → einen, kein → keinen). Everything else stays as it is.

### Verbs that take the Accusative

Most German verbs that have an object take the Accusative. These very common ones always do:

| verb | example |
|---|---|
| **haben** (to have) | Ich habe **einen** Bruder. |
| **sehen** (to see) | Siehst du **den** Bus? |
| **kaufen** (to buy) | Wir kaufen **einen** Tisch. |
| **brauchen** (to need) | Er braucht **einen** Stift. |
| **essen / trinken** | Ich esse **einen** Apfel. |
| **suchen / finden** | Sie sucht **den** Schlüssel. |
| **kennen** (to know a person) | Kennst du **den** Mann? |
| **es gibt** (there is) | Es gibt **einen** Park. |

Note **es gibt**: the noun after it is always Accusative, even though English says *there is a park*.

### Nominative and Accusative together

A typical sentence has one Nominative (the doer) and one Accusative (the thing). The article tells you which is which, not the position:

- **Der** Hund sieht **die** Katze. – *The dog sees the cat.*
- **Den** Hund sieht **die** Katze. – *The cat sees the dog.* (den = object, so the cat is doing the seeing)

With feminine and neuter nouns the forms are identical, so there the word order decides: *Die Frau sieht das Kind* is normally read as the woman seeing the child.

### Why it matters

The Accusative is the most frequent case after the Nominative. Every time you say what you have, want, eat, buy, see or need, you use it. The single change **der → den / ein → einen** is small, but native speakers hear it immediately when it is missing. It also prepares you for the next topics: possessive articles (*meinen*), Accusative prepositions (*für den*) and Accusative pronouns (*ihn*) all follow exactly this pattern.
`,
  examples: [
    { de: 'Ich habe einen Hund.', en: 'I have a dog. (masculine: ein → einen)' },
    { de: 'Sie trinkt den Kaffee.', en: 'She drinks the coffee. (der → den)' },
    { de: 'Wir kaufen eine Lampe.', en: 'We buy a lamp. (feminine: no change)' },
    { de: 'Er liest das Buch.', en: 'He reads the book. (neuter: no change)' },
    { de: 'Kennst du die Kinder?', en: 'Do you know the children? (plural: no change)' },
    { de: 'Es gibt keinen Parkplatz.', en: 'There is no parking space. (es gibt + Accusative)' },
    { de: 'Wen suchst du?', en: 'Who are you looking for? (wen asks for the Accusative)' },
  ],
  connections: [
    { topicId: 'a1-11-nominative', note: 'The Nominative is the starting point; the Accusative changes only the masculine form.' },
    { topicId: 'a1-12-indefinite-articles', note: 'ein and kein take the same -en ending in the masculine Accusative: einen, keinen.' },
    { topicId: 'a1-21-possessive-articles', note: 'mein, dein, sein also get -en in the masculine Accusative: meinen Bruder.' },
    { topicId: 'a1-23-accusative-pronouns', note: 'When you replace the object with a pronoun, you need the Accusative pronouns mich, dich, ihn.' },
    { topicId: 'a1-24-dative', note: 'The Dative is the next case, used for the person who receives something.' },
  ],
  edgeCases: [
    'Only **masculine** changes. Writing *die Frau* → *dien Frau* or *das Buch* → *dasen Buch* is a common invented mistake; feminine and neuter stay the same.',
    'After **sein**, **werden** and **bleiben** there is no Accusative: *Das ist **ein** Hund*, not *einen Hund*.',
    '**es gibt** always takes the Accusative: *Es gibt **einen** Fehler*, even though "a mistake" feels like the subject.',
    'A few masculine nouns also add **-n / -en** on the noun itself: *den Jungen*, *den Herrn*, *den Studenten*, *den Kollegen*. This is the n-declension, covered at B1.',
    '**wen** (whom) is the Accusative question word; **wer** (who) is the Nominative one. *Wer sieht wen?*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-20-accusative-ex01',
      prompt: 'Which word is the direct object (Accusative) in: "Die Frau kauft den Mantel."?',
      options: ['Die Frau', 'kauft', 'den Mantel'],
      answer: 2,
      explanation: 'Ask "Was kauft die Frau?" – den Mantel. The coat is the thing being bought, and den shows the Accusative.',
    },
    {
      type: 'fill',
      id: 'a1-20-accusative-ex02',
      prompt: 'Ich sehe ___ Mann. (the)',
      answer: ['den'],
      explanation: 'Mann is masculine and the object of sehen, so der becomes den.',
    },
    {
      type: 'fill',
      id: 'a1-20-accusative-ex03',
      prompt: 'Wir haben ___ Katze. (a)',
      answer: ['eine'],
      explanation: 'Katze is feminine. Feminine does not change in the Accusative: eine Katze.',
    },
    {
      type: 'fill',
      id: 'a1-20-accusative-ex04',
      prompt: 'Er braucht ___ Stift. (a)',
      answer: ['einen'],
      explanation: 'Stift is masculine and the object of brauchen: ein → einen.',
    },
    {
      type: 'mc',
      id: 'a1-20-accusative-ex05',
      prompt: 'Complete: "Es gibt ___ Supermarkt in der Nähe."',
      options: ['ein', 'einen', 'einem'],
      answer: 1,
      explanation: 'es gibt always takes the Accusative. Supermarkt is masculine, so einen.',
    },
    {
      type: 'match',
      id: 'a1-20-accusative-ex06',
      prompt: 'Match each noun with its Accusative definite article.',
      pairs: [
        ['Apfel (m)', 'den'],
        ['Lampe (f)', 'die'],
        ['Auto (n)', 'das'],
        ['Bücher (pl)', 'die (plural)'],
      ],
      explanation: 'Masculine den, feminine die, neuter das, plural die. Only the masculine differs from the Nominative.',
    },
    {
      type: 'order',
      id: 'a1-20-accusative-ex07',
      prompt: 'Build the sentence: "The child eats an apple."',
      words: ['einen', 'Das', 'isst', 'Apfel.', 'Kind'],
      answer: ['Das Kind isst einen Apfel.'],
      explanation: 'Subject (Das Kind), verb (isst), then the Accusative object with einen because Apfel is masculine.',
    },
    {
      type: 'mc',
      id: 'a1-20-accusative-ex08',
      prompt: 'In "Den Lehrer fragt der Schüler.", who is asking?',
      options: ['the teacher', 'the pupil'],
      answer: 1,
      explanation: 'der Schüler is Nominative (der), so the pupil asks. Den Lehrer is Accusative: the teacher is being asked, even though he comes first.',
    },
    {
      type: 'fill',
      id: 'a1-20-accusative-ex09',
      prompt: 'Ich habe ___ Bruder. (no)',
      answer: ['keinen'],
      explanation: 'Bruder is masculine. kein takes -en in the masculine Accusative: keinen Bruder.',
    },
    {
      type: 'mc',
      id: 'a1-20-accusative-ex10',
      prompt: 'Which sentence is correct?',
      options: ['Das ist einen Tisch.', 'Das ist ein Tisch.', 'Das ist dem Tisch.'],
      answer: 1,
      explanation: 'After sein both sides are Nominative, so it is ein Tisch. einen would be the Accusative, which sein never takes.',
    },
    {
      type: 'translate',
      id: 'a1-20-accusative-ex11',
      prompt: 'Translate: "She is looking for the key."',
      answer: ['Sie sucht den Schlüssel.'],
      hint: 'suchen = to look for, der Schlüssel = key',
      explanation: 'Schlüssel is masculine and the object of suchen, so der becomes den.',
    },
    {
      type: 'fill',
      id: 'a1-20-accusative-ex12',
      prompt: '___ kennst du hier? (whom)',
      answer: ['Wen'],
      explanation: 'The person being known is the object, so the question word is the Accusative wen, not wer.',
    },
  ],
};

export default topic;
