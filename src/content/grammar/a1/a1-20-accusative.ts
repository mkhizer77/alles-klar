import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-20-accusative',
  level: 'A1',
  unit: 4,
  order: 24,
  title: 'The Accusative case: direct objects',
  germanTerm: 'Akkusativ',
  tags: ['cases', 'accusative', 'articles', 'objects'],
  summary: 'The Accusative is the case of the direct object: the thing the action is done to. Only the masculine article changes: der → den, ein → einen.',
  steps: [
    {
      title: 'What the Accusative is for',
      text: `
In *Der Mann liest das Buch* two things are named. *Der Mann* does the reading: he is the **subject**. *Das Buch* is the thing being read: the **direct object**.

In German the direct object stands in the **Accusative** (*Akkusativ*). To find it, ask **wen?** (whom?) or **was?** (what?) after the verb: *Was liest der Mann?* – *das Buch*.
`,
      examples: [
        { de: 'Der Mann liest das Buch.', en: 'The man reads the book. (das Buch = the thing being read)' },
        { de: 'Ich sehe den Hund.', en: 'I see the dog. (den Hund = the thing being seen)' },
        { de: 'Was kaufst du?', en: 'What are you buying? (was? asks for the object)' },
      ],
    },
    {
      title: 'Only the masculine changes',
      text: `
Good news: compared with the Nominative, **only the masculine article changes**. Feminine, neuter and plural stay exactly the same.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| Nominative | der Mann | die Frau | das Kind | die Kinder |
| **Accusative** | **den** Mann | die Frau | das Kind | die Kinder |

So the whole rule is: **der → den**.
`,
      examples: [
        { de: 'Sie trinkt den Kaffee.', en: 'She drinks the coffee. (der → den)' },
        { de: 'Wir kaufen die Lampe.', en: 'We buy the lamp. (feminine: no change)' },
        { de: 'Er liest das Buch.', en: 'He reads the book. (neuter: no change)' },
        { de: 'Kennst du die Kinder?', en: 'Do you know the children? (plural: no change)' },
      ],
    },
    {
      title: 'ein and kein become einen, keinen',
      text: `
The same -en ending goes on **ein** and **kein** when the noun is masculine: **ein → einen**, **kein → keinen**. Feminine *eine / keine* and neuter *ein / kein* do not change.
`,
      examples: [
        { de: 'Ich habe einen Bruder.', en: 'I have a brother. (ein → einen)' },
        { de: 'Wir haben keinen Hund.', en: "We don't have a dog. (kein → keinen)" },
        { de: 'Sie hat eine Schwester.', en: 'She has a sister. (feminine: eine stays)' },
      ],
    },
    {
      title: 'Verbs that take the Accusative',
      text: `
Most verbs with an object take the Accusative. These very common ones always do: **haben, sehen, kaufen, brauchen, essen, trinken, suchen, finden, kennen**.

One more to remember: **es gibt** (there is / there are). The noun after it is always Accusative, even though English makes it the subject.
`,
      examples: [
        { de: 'Er braucht einen Stift.', en: 'He needs a pen.' },
        { de: 'Kennst du den Mann?', en: 'Do you know the man?' },
        { de: 'Es gibt einen Park.', en: 'There is a park. (es gibt + Accusative)' },
      ],
    },
    {
      title: 'The article tells you who does what',
      text: `
A sentence usually has one Nominative (the doer) and one Accusative (the thing). The **article** shows which is which, not the position in the sentence. *Den Hund sieht die Katze* still means the cat is looking, because *den* marks the dog as the object.

After **sein** there is no object, so no Accusative: *Das ist **ein** Hund.*
`,
      examples: [
        { de: 'Der Hund sieht die Katze.', en: 'The dog sees the cat.' },
        { de: 'Den Hund sieht die Katze.', en: 'The cat sees the dog. (den = object, so the cat is the doer)' },
        { de: 'Das ist ein Tisch.', en: 'That is a table. (sein: no Accusative)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-11-nominative', note: 'The Nominative is the starting point; the Accusative changes only the masculine form.' },
    { topicId: 'a1-12-indefinite-articles', note: 'ein and kein take the same -en ending in the masculine Accusative: einen, keinen.' },
    { topicId: 'a1-21-possessive-articles', note: 'mein, dein, sein also get -en in the masculine Accusative: meinen Bruder.' },
    { topicId: 'a1-23-accusative-pronouns', note: 'When you replace the object with a pronoun, you need the Accusative pronouns mich, dich, ihn.' },
    { topicId: 'a1-24-dative', note: 'The Dative is the next case, used for the person who receives something.' },
  ],
  edgeCases: [
    'Only **masculine** changes. *die Frau* and *das Buch* stay the same in the Accusative; there is no *dien* or *dasen*.',
    'After **sein**, **werden** and **bleiben** there is no Accusative: *Das ist **ein** Hund*, not *einen Hund*.',
    '**es gibt** always takes the Accusative: *Es gibt **einen** Fehler*, even though "a mistake" feels like the subject.',
    'A few masculine nouns also add **-n / -en** on the noun itself: *den Jungen*, *den Herrn*, *den Kollegen*. This is the n-declension, taught at B1.',
    '**wen** (whom) asks for the Accusative; **wer** (who) asks for the Nominative. *Wer sieht wen?*',
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
