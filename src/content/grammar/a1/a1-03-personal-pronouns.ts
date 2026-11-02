import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-03-personal-pronouns',
  level: 'A1',
  unit: 1,
  order: 3,
  title: 'Personal pronouns (ich, du, er …)',
  germanTerm: 'Personalpronomen',
  tags: ['pronouns', 'subject', 'du', 'Sie', 'er sie es'],
  summary: 'Personal pronouns are the short words for people and things (I, you, he, she, it, we, they); German has nine of them, and the one you choose decides the verb ending.',
  steps: [
    {
      title: 'The nine pronouns',
      text: `
A **personal pronoun** (*Personalpronomen*) stands in for a name or a noun, so you do not repeat it: *Anna ist müde. **Sie** geht nach Hause.* English has seven; German has **nine**, because *you* is split three ways.

| person | singular | plural |
|---|---|---|
| 1st (the speaker) | **ich** – I | **wir** – we |
| 2nd, informal | **du** – you | **ihr** – you all |
| 2nd, polite | **Sie** – you | **Sie** – you |
| 3rd (someone else) | **er** – he, **sie** – she, **es** – it | **sie** – they |

Note: **ich** is written with a small *i*, unlike English *I*.
`,
      examples: [
        { de: 'Das ist Anna. Sie wohnt in Köln.', en: 'This is Anna. She lives in Cologne. (sie replaces Anna)' },
        { de: 'Ich bin müde.', en: 'I am tired. (ich with a small i)' },
        { de: 'Wir lernen Deutsch.', en: 'We are learning German.' },
      ],
    },
    {
      title: 'Three kinds of "you"',
      text: `
| pronoun | use it for |
|---|---|
| **du** | one person you are close to: friend, family member, child, fellow student |
| **ihr** | two or more people you would each call *du* |
| **Sie** | one or more adults you do not know well, or in formal situations |

If in doubt, use **Sie**. Nobody is offended by too much politeness.
`,
      examples: [
        { de: 'Kommst du aus Berlin?', en: 'Are you from Berlin? (du: one friend)' },
        { de: 'Kommt ihr aus Berlin?', en: 'Are you all from Berlin? (ihr: several friends)' },
        { de: 'Kommen Sie aus Berlin?', en: 'Are you from Berlin? (Sie: polite)' },
      ],
    },
    {
      title: 'sie, sie and Sie',
      text: `
The same word appears three times. Lower-case **sie** means *she* or *they*; capital **Sie** means polite *you*.

The **verb** tells *she* and *they* apart: *sie komm**t*** (she comes) but *sie komm**en*** (they come). Polite *Sie* also takes *-en*, so for *Sie* (you) and *sie* (they) only the capital letter and the context help.
`,
      examples: [
        { de: 'Sie wohnt in Köln.', en: 'She lives in Cologne. (verb ends in -t: she)' },
        { de: 'Tom und Lisa? Sie arbeiten heute.', en: 'Tom and Lisa? They are working today. (verb ends in -en: they)' },
        { de: 'Woher kommen Sie, Frau Müller?', en: 'Where are you from, Mrs Müller? (capital S: polite you)' },
      ],
    },
    {
      title: 'er, sie, es follow the noun',
      text: `
In English *it* is for things. In German the pronoun follows the **gender of the noun**, even for objects: **der → er, die → sie, das → es**.

So *der Tisch* (the table) becomes *er*, *die Lampe* becomes *sie*, and even *das Mädchen* (the girl) is grammatically *es*. It feels strange at first, but it is completely regular.
`,
      examples: [
        { de: 'Der Tisch ist alt. Er ist aus Holz.', en: 'The table is old. It is made of wood. (der → er)' },
        { de: 'Die Lampe ist neu. Sie ist schön.', en: 'The lamp is new. It is nice. (die → sie)' },
        { de: 'Das Buch ist gut. Es ist neu.', en: 'The book is good. It is new. (das → es)' },
      ],
    },
    {
      title: 'The pronoun decides the verb ending',
      text: `
The main job of the pronoun is to tell you which verb ending to use. Here is *kommen* (to come):

| pronoun | ending | form |
|---|---|---|
| ich | -e | ich komm**e** |
| du | -st | du komm**st** |
| er / sie / es | -t | er komm**t** |
| wir | -en | wir komm**en** |
| ihr | -t | ihr komm**t** |
| sie / Sie | -en | sie komm**en** |

Pronoun and ending always go together. If you hear *kommst*, the subject must be *du*.
`,
      examples: [
        { de: 'Ich komme aus Polen.', en: 'I come from Poland. (ich + -e)' },
        { de: 'Kommst du heute?', en: 'Are you coming today? (du + -st)' },
        { de: 'Er kommt aus Spanien.', en: 'He comes from Spain. (er + -t)' },
        { de: 'Wir kommen morgen.', en: 'We are coming tomorrow. (wir + -en)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-02-greetings', note: 'The du / Sie choice from the greetings topic is the same rule applied to pronouns.' },
    { topicId: 'a1-04-sein-haben', note: 'sein and haben are the first verbs you conjugate with these pronouns.' },
    { topicId: 'a1-05-present-tense-regular', note: 'The verb endings -e, -st, -t, -en belong to each pronoun; that topic explains them in full.' },
    { topicId: 'a1-09-gender-articles', note: 'er, sie, es for things depends on the noun gender: der → er, die → sie, das → es.' },
    { topicId: 'a1-23-accusative-pronouns', note: 'Later the pronouns change form when they are objects: ich → mich, du → dich.' },
  ],
  edgeCases: [
    '**ich** is never capitalised unless it starts a sentence. Writing *Ich* in the middle of a sentence is a typical English-speaker mistake.',
    '**sie** (she) and **sie** (they) look the same; the verb shows which: *sie geht* (she goes) vs *sie gehen* (they go).',
    '**Sie** (polite you) and **sie** (they) take the same verb form (*-en*). In speech only the context tells you which one was meant.',
    'Things are not always **es**: *der Kaffee* → *er*, *die Milch* → *sie*. Use *es* only for *das* nouns.',
    '**ihr** means *you (plural)*. Do not confuse it with *ihr* = *her / their* (a possessive, a later topic). *Ihr kommt* = you all come; *ihr Auto* = her car.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-03-personal-pronouns-ex01',
      prompt: 'Which pronoun means "we"?',
      options: ['wir', 'ihr', 'sie'],
      answer: 0,
      explanation: 'wir = we. ihr = you (plural, informal), sie = she / they.',
    },
    {
      type: 'mc',
      id: 'a1-03-personal-pronouns-ex02',
      prompt: 'You talk to two friends at once. Which "you" do you use?',
      options: ['du', 'ihr', 'Sie'],
      answer: 1,
      explanation: 'ihr is the plural of du. du is one friend; Sie is for people you do not know.',
    },
    {
      type: 'fill',
      id: 'a1-03-personal-pronouns-ex03',
      prompt: 'Das ist Peter. ___ wohnt in München. (he)',
      answer: ['Er'],
      explanation: 'Peter is a man, so the pronoun is er. It starts the sentence, so it is capitalised.',
    },
    {
      type: 'fill',
      id: 'a1-03-personal-pronouns-ex04',
      prompt: 'Der Stuhl ist neu. ___ ist aus Holz. (it)',
      answer: ['Er'],
      explanation: 'Der Stuhl is masculine, so "it" is er, not es. The pronoun follows the article: der → er.',
    },
    {
      type: 'match',
      id: 'a1-03-personal-pronouns-ex05',
      prompt: 'Match each noun with the pronoun that replaces it.',
      pairs: [
        ['der Tisch', 'er'],
        ['die Lampe', 'sie'],
        ['das Buch', 'es'],
        ['die Bücher', 'sie (they)'],
      ],
      explanation: 'der → er, die → sie, das → es, and every plural → sie.',
    },
    {
      type: 'mc',
      id: 'a1-03-personal-pronouns-ex06',
      prompt: 'What does "sie" mean in: "Lisa ist Ärztin. Sie arbeitet im Krankenhaus."?',
      options: ['they', 'she', 'you (polite)'],
      answer: 1,
      explanation: 'The verb arbeitet ends in -t, which goes with er / sie / es (singular). It refers back to Lisa, so sie = she.',
    },
    {
      type: 'mc',
      id: 'a1-03-personal-pronouns-ex07',
      prompt: 'Which sentence is written correctly?',
      options: ['Heute bin Ich müde.', 'Heute bin ich müde.', 'heute bin ich müde.'],
      answer: 1,
      explanation: 'ich is lower-case in the middle of a sentence. The first word of the sentence (Heute) is capitalised.',
    },
    {
      type: 'fill',
      id: 'a1-03-personal-pronouns-ex08',
      prompt: 'Frau Müller, woher kommen ___? (you – formal)',
      answer: ['Sie'],
      explanation: 'Addressing Frau Müller formally needs Sie with a capital S, and the verb takes -en: kommen Sie.',
    },
    {
      type: 'order',
      id: 'a1-03-personal-pronouns-ex09',
      prompt: 'Build the sentence: "We are learning German."',
      words: ['Deutsch.', 'Wir', 'lernen'],
      answer: ['Wir lernen Deutsch.'],
      explanation: 'wir takes the -en ending: wir lernen. The verb is in second position.',
    },
    {
      type: 'mc',
      id: 'a1-03-personal-pronouns-ex10',
      prompt: 'Which pronoun fits: "Tom und Anna sind da. ___ trinken Kaffee."?',
      options: ['Er', 'Sie', 'Ihr'],
      answer: 1,
      explanation: 'Tom und Anna are two people talked about, so "they" = sie. With -en on the verb: sie trinken.',
    },
    {
      type: 'translate',
      id: 'a1-03-personal-pronouns-ex11',
      prompt: 'Translate: "Are you from Austria?" (one friend)',
      answer: ['Kommst du aus Österreich?'],
      hint: 'kommen aus = to come from, Österreich = Austria',
      explanation: 'One friend = du, and du takes the ending -st: kommst du. In a yes/no question the verb comes first.',
    },
  ],
};

export default topic;
