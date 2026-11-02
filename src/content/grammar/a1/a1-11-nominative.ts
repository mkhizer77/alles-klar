import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-11-nominative',
  level: 'A1',
  unit: 2,
  order: 12,
  title: 'The Nominative case',
  germanTerm: 'Nominativ',
  tags: ['cases', 'nouns', 'articles', 'subject'],
  summary: 'The Nominative is the "subject" case: the form a noun takes when it is the one doing the action, or when it comes after sein, werden or bleiben.',
  steps: [
    {
      title: 'The Nominative marks the subject',
      text: `
German nouns change their article depending on the **job** they do in a sentence. Each job has a name. These names are the **cases** (*Fälle*). Think of a case as a label: "this noun is the subject", "this noun is the thing being acted on".

The **Nominative** (*Nominativ*) is the case of the **subject**: the person or thing that *does* the verb.
`,
      examples: [
        { de: 'Der Hund schläft.', en: 'The dog sleeps. (who sleeps? the dog: subject)' },
        { de: 'Die Frau liest.', en: 'The woman reads.' },
        { de: 'Das Kind spielt.', en: 'The child plays.' },
      ],
    },
    {
      title: 'Find the subject with wer? or was?',
      text: `
To find the subject, ask **wer?** (who?) or **was?** (what?) in front of the verb. The answer is in the Nominative.

*Der Mann trinkt Kaffee.* Who drinks? *Der Mann.* So *der Mann* is the subject.
`,
      examples: [
        { de: 'Wer kommt heute?', en: 'Who is coming today? (wer asks for the subject)' },
        { de: 'Was ist das?', en: 'What is that?' },
        { de: 'Der Mann trinkt Kaffee.', en: 'The man drinks coffee. (who drinks? der Mann)' },
      ],
    },
    {
      title: 'The articles in the Nominative',
      text: `
This is the **dictionary form** of a noun: the form you learn a word in.

| | masculine | feminine | neuter | plural |
|---|---|---|---|---|
| the | **der** Mann | **die** Frau | **das** Kind | **die** Kinder |
| a | **ein** Mann | **eine** Frau | **ein** Kind | – Kinder |
| no | **kein** Mann | **keine** Frau | **kein** Kind | **keine** Kinder |

Notice: masculine and neuter both use **ein**. Feminine and plural both end in **-e**.
`,
      examples: [
        { de: 'Eine Frau wartet.', en: 'A woman is waiting. (feminine: eine)' },
        { de: 'Ein Kind spielt.', en: 'A child is playing. (neuter: ein, like masculine)' },
        { de: 'Die Kinder spielen im Garten.', en: 'The children play in the garden. (plural: die)' },
        { de: 'Kinder spielen gern.', en: 'Children like playing. (plural: no ein)' },
      ],
    },
    {
      title: 'After sein, werden and bleiben',
      text: `
A few verbs do not *do* anything to an object. They only say what the subject **is**. After **sein** (to be), **werden** (to become) and **bleiben** (to stay) the noun after the verb is *also* in the Nominative. Both sides of the verb describe the same person or thing.

So after *ist* you say **ein**, never *einen*.
`,
      examples: [
        { de: 'Er ist ein Lehrer.', en: 'He is a teacher. (both sides Nominative)' },
        { de: 'Das ist ein Hund.', en: 'That is a dog. (ein, not einen)' },
        { de: 'Sie bleibt meine Freundin.', en: 'She stays my friend.' },
      ],
    },
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
