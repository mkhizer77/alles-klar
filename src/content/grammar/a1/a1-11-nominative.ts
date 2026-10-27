import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-11-nominative',
  level: 'A1',
  unit: 2,
  order: 11,
  title: 'The Nominative case',
  germanTerm: 'Nominativ',
  tags: ['cases', 'nouns', 'articles', 'subject'],
  summary: 'The Nominative is the "subject" case: the form a noun takes when it is the one doing the action, or when it comes after sein, werden or bleiben.',
  explanation: `
### What a "case" is

German nouns change their article (and sometimes their ending) depending on the **job** they do in a sentence. Each job has a name. These names are the **cases** (*Fälle*). German has four: Nominative, Accusative, Dative and Genitive.

Think of a case as a **label** that tells you "this noun is the subject", "this noun is the thing being acted on", and so on. English mostly shows this with word order. German shows it with the article.

### The Nominative = the subject

The **Nominative** (*Nominativ*) is the case of the **subject**: the person or thing that *does* the verb.

- **Der Hund** schläft. – *The dog sleeps.* (Who sleeps? The dog.)
- **Die Frau** liest. – *The woman reads.*
- **Das Kind** spielt. – *The child plays.*

To find the subject, ask **wer?** (who?) or **was?** (what?) before the verb. The answer is in the Nominative.

### The articles in the Nominative

This is the "dictionary form" of a noun. It is the form you learn a word in, and the form you see in a word list.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| definite (the) | **der** Mann | **die** Frau | **das** Kind | **die** Kinder |
| indefinite (a) | **ein** Mann | **eine** Frau | **ein** Kind | – Kinder |
| negative (no) | **kein** Mann | **keine** Frau | **kein** Kind | **keine** Kinder |

Notice: masculine and neuter both use **ein**. Feminine and plural both use **die / -e**. These patterns come back in every other case, so it is worth knowing them well now.

### The Nominative after sein, werden, bleiben

A few verbs do not *do* anything to an object; they just say what the subject **is**. After **sein** (to be), **werden** (to become) and **bleiben** (to stay), the noun after the verb is *also* in the Nominative. Both sides of the verb describe the same person or thing.

- Er ist **ein Lehrer**. – *He is a teacher.*
- Das wird **ein schöner Tag**. – *This is becoming a nice day.*
- Sie bleibt **meine Freundin**. – *She stays my friend.*

### Why it matters

Almost everything else in German grammar starts from the Nominative:

1. The verb ending depends on the Nominative subject (*ich geh-e*, *du geh-st*).
2. The other cases are described as "changes" from the Nominative (*der* → *den* in the Accusative).
3. Adjective endings (later) are built on the same der / die / das pattern.

So when you learn a noun, always learn it **with its Nominative article**: not *Hund* but **der Hund**.
`,
  examples: [
    { de: 'Der Mann trinkt Kaffee.', en: 'The man drinks coffee. (der Mann = subject)' },
    { de: 'Eine Frau wartet.', en: 'A woman is waiting.' },
    { de: 'Das Auto ist neu.', en: 'The car is new.' },
    { de: 'Die Kinder spielen im Garten.', en: 'The children play in the garden. (plural subject)' },
    { de: 'Mein Bruder ist ein Student.', en: 'My brother is a student. (both Nominative, because of ist)' },
    { de: 'Wer kommt heute?', en: 'Who is coming today? (wer asks for the Nominative)' },
  ],
  connections: [
    { topicId: 'a1-09-gender-articles', note: 'The Nominative articles der / die / das are the ones you learn with each noun.' },
    { topicId: 'a1-05-present-tense-regular', note: 'The verb ending agrees with the Nominative subject.' },
    { topicId: 'a1-20-accusative', note: 'The Accusative is the next case: only masculine changes (der → den).' },
    { topicId: 'a1-24-dative', note: 'The Dative is the third case; its articles also start from the Nominative pattern.' },
  ],
  edgeCases: [
    'Word order does **not** tell you the case. *Den Mann sieht der Hund* still means the dog sees the man, because *der Hund* is Nominative.',
    'After **sein / werden / bleiben** there is a Nominative on both sides: *Das ist **ein** Hund*, never *einen Hund*.',
    'The plural has **no** indefinite article: *Kinder spielen* (children play), not *eine Kinder*. But *keine Kinder* exists.',
    'In a question with **wer** the answer is Nominative; **wen** asks for the Accusative. *Wer ruft? Der Chef.* / *Wen rufst du? Den Chef.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-11-nominative-ex01',
      prompt: 'Which word is the subject (Nominative) in: "Der Lehrer erklärt die Regel."?',
      options: ['Der Lehrer', 'erklärt', 'die Regel'],
      answer: 0,
      explanation: 'Ask "Wer erklärt?" – der Lehrer. He does the explaining, so he is the subject.',
    },
    {
      type: 'fill',
      id: 'a1-11-nominative-ex02',
      prompt: '___ Frau wohnt in Berlin. (the)',
      answer: ['Die'],
      explanation: 'Frau is feminine, so the Nominative article is die.',
    },
    {
      type: 'fill',
      id: 'a1-11-nominative-ex03',
      prompt: '___ Hund ist müde. (the)',
      answer: ['Der'],
      explanation: 'Hund is masculine: der Hund.',
    },
    {
      type: 'fill',
      id: 'a1-11-nominative-ex04',
      prompt: 'Das ist ___ Buch. (a)',
      answer: ['ein'],
      explanation: 'Buch is neuter. Masculine and neuter both use ein in the Nominative.',
    },
    {
      type: 'mc',
      id: 'a1-11-nominative-ex05',
      prompt: 'Complete: "Er ist ___ Arzt."',
      options: ['ein', 'einen', 'einem'],
      answer: 0,
      explanation: 'After sein both sides are Nominative. Arzt is masculine → ein Arzt.',
    },
    {
      type: 'match',
      id: 'a1-11-nominative-ex06',
      prompt: 'Match each noun with its Nominative definite article.',
      pairs: [
        ['Mann', 'der'],
        ['Frau', 'die'],
        ['Kind', 'das'],
        ['Kinder', 'die (plural)'],
      ],
      explanation: 'Masculine der, feminine die, neuter das, and all plurals die.',
    },
    {
      type: 'order',
      id: 'a1-11-nominative-ex07',
      prompt: 'Build the sentence: "The child is playing."',
      words: ['Kind', 'Das', 'spielt.'],
      answer: ['Das Kind spielt.'],
      explanation: 'Subject first (Das Kind), verb second (spielt).',
    },
    {
      type: 'mc',
      id: 'a1-11-nominative-ex08',
      prompt: 'Which question word asks for the Nominative?',
      options: ['wen?', 'wer?', 'wem?'],
      answer: 1,
      explanation: 'wer = who (subject). wen asks for the Accusative, wem for the Dative.',
    },
    {
      type: 'fill',
      id: 'a1-11-nominative-ex09',
      prompt: 'Ich habe ___ Zeit. (no)',
      answer: ['keine'],
      explanation: 'Zeit is feminine. The negative article in the feminine is keine. (Here Zeit is actually an object, but feminine keine looks the same in Nominative and Accusative.)',
    },
    {
      type: 'translate',
      id: 'a1-11-nominative-ex10',
      prompt: 'Translate: "A man is waiting."',
      answer: ['Ein Mann wartet.'],
      hint: 'warten = to wait',
      explanation: 'Masculine indefinite article in the Nominative is ein.',
    },
    {
      type: 'mc',
      id: 'a1-11-nominative-ex11',
      prompt: 'In "Den Apfel isst das Kind.", who is eating?',
      options: ['the apple', 'the child'],
      answer: 1,
      explanation: 'Das Kind is Nominative (neuter das). Den Apfel is Accusative (den), so the apple is being eaten, even though it comes first.',
    },
  ],
};

export default topic;
