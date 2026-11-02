import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-02-greetings',
  level: 'A1',
  unit: 1,
  order: 2,
  title: 'Greetings, introducing yourself, du vs Sie',
  germanTerm: 'Begrüßung, Anrede',
  tags: ['greetings', 'introductions', 'du', 'Sie', 'politeness'],
  summary: 'The phrases for saying hello, goodbye and who you are, and the rule for choosing between the informal du and the polite Sie.',
  steps: [
    {
      title: 'Saying hello and goodbye',
      text: `
German has a small set of fixed greetings. Some depend on the **time of day**, some on **how formal** the situation is.

| when | hello | goodbye |
|---|---|---|
| any time, neutral | **Guten Tag** | **Auf Wiedersehen** |
| morning | **Guten Morgen** | |
| evening | **Guten Abend** | **Gute Nacht** (only at bedtime) |
| informal | **Hallo** | **Tschüs**, **Bis später** |
| on the phone | **Guten Tag** | **Auf Wiederhören** |

*Wiedersehen* means "see again", so it is for face to face. *Wiederhören* means "hear again": the phone.
`,
      examples: [
        { de: 'Guten Tag, Frau Weber.', en: 'Good day, Mrs Weber. (neutral, any time)' },
        { de: 'Hallo, Lena! Tschüs, bis morgen!', en: 'Hi, Lena! Bye, see you tomorrow! (informal)' },
        { de: 'Auf Wiederhören!', en: 'Goodbye! (on the phone)' },
        { de: 'Gute Nacht!', en: 'Good night! (someone is going to bed)' },
      ],
    },
    {
      title: 'Saying your name',
      text: `
There are three ways to say your name, and all three are common:

- **Ich heiße** Maria. (literally: I am called)
- **Ich bin** Maria.
- **Mein Name ist** Maria. (slightly formal)

When you meet someone new, you add **Freut mich.** (Nice to meet you.)
`,
      examples: [
        { de: 'Ich heiße Maria.', en: 'My name is Maria.' },
        { de: 'Hallo, ich bin Tom.', en: 'Hello, I am Tom.' },
        { de: 'Mein Name ist Peter Schmidt.', en: 'My name is Peter Schmidt. (slightly formal)' },
        { de: 'Freut mich!', en: 'Nice to meet you!' },
      ],
    },
    {
      title: 'The first three questions',
      text: `
After the name come three questions. Each has an informal form (for *du*) and a polite form (for *Sie*).

| question | polite form | answer |
|---|---|---|
| **Wie heißt du?** (What is your name?) | Wie heißen Sie? | Ich heiße Anna. |
| **Woher kommst du?** (Where are you from?) | Woher kommen Sie? | Ich komme **aus** Polen. |
| **Wo wohnst du?** (Where do you live?) | Wo wohnen Sie? | Ich wohne **in** Berlin. |

Note **aus** for the country and **in** for the town.
`,
      examples: [
        { de: 'Wie heißen Sie?', en: 'What is your name? (polite)' },
        { de: 'Woher kommst du? Ich komme aus Italien.', en: 'Where are you from? I am from Italy. (aus + country)' },
        { de: 'Wo wohnen Sie? Ich wohne in Hamburg.', en: 'Where do you live? I live in Hamburg. (in + town)' },
      ],
    },
    {
      title: 'How are you?',
      text: `
**Wie geht es dir?** is the informal "How are you?"; the polite form is **Wie geht es Ihnen?** Among friends it shrinks to **Wie geht's?**

The answers go from **sehr gut** (very good) and **gut** to **es geht** (so-so) and **nicht so gut**. Then you ask back: **Und dir?** or **Und Ihnen?** Do not say *Ich bin gut*; say **Mir geht es gut** or just **Gut, danke**.
`,
      examples: [
        { de: 'Wie geht es dir? Gut, danke. Und dir?', en: 'How are you? Fine, thanks. And you? (informal)' },
        { de: 'Wie geht es Ihnen? Danke, sehr gut.', en: 'How are you? Thank you, very well. (polite)' },
        { de: 'Wie geht\'s? Es geht.', en: 'How is it going? So-so.' },
      ],
    },
    {
      title: 'du or Sie?',
      text: `
English has one *you*. German has two, and the wrong one can sound rude or oddly distant.

| | du | Sie |
|---|---|---|
| who | family, friends, children, fellow students | strangers, officials, shop staff, at work |
| verb ending | du komm**st** | Sie komm**en** |
| spelling | small *d* | always capital **S** |

The safe rule: **use Sie with every adult you do not know**, and wait for the German speaker to offer *du*. For several friends at once the word is **ihr**.
`,
      examples: [
        { de: 'Kommst du aus Berlin?', en: 'Are you from Berlin? (du: a friend, verb ends in -st)' },
        { de: 'Kommen Sie aus Berlin?', en: 'Are you from Berlin? (Sie: a stranger, verb ends in -en)' },
        { de: 'Kommt ihr aus Berlin?', en: 'Are you all from Berlin? (ihr: several friends)' },
      ],
    },
    {
      title: 'Titles and polite words',
      text: `
**Herr** Müller is Mr Müller, **Frau** Müller is Mrs or Ms Müller. *Fräulein* is no longer used.

The small polite words: **bitte** (please, and also "you're welcome"), **danke** (thank you), **Entschuldigung** (excuse me, sorry). A letter starts with **Sehr geehrte Frau Müller** (formal) or **Liebe Anna** / **Lieber Tom** (informal) and ends with **Mit freundlichen Grüßen** or **Viele Grüße**.
`,
      examples: [
        { de: 'Guten Tag, Herr Müller.', en: 'Good day, Mr Müller.' },
        { de: 'Danke schön! Bitte schön.', en: 'Thank you! You are welcome.' },
        { de: 'Entschuldigung!', en: 'Excuse me! (or: Sorry!)' },
        { de: 'Sehr geehrte Frau Müller', en: 'Dear Mrs Müller (formal letter opening)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-01-pronunciation', note: 'You will need the letter names to spell your name after introducing yourself.' },
    { topicId: 'a1-03-personal-pronouns', note: 'du, ihr and Sie are personal pronouns; that topic shows the whole set.' },
    { topicId: 'a1-04-sein-haben', note: '"Ich bin Lena" uses sein, the first verb you need to conjugate.' },
    { topicId: 'a1-07-questions', note: 'Wie, woher and wo are W-question words; that topic explains how to build questions.' },
  ],
  edgeCases: [
    '**Sie** (polite you) always has a capital S, even mid-sentence. Lower-case *sie* means *she* or *they*. The verb form is the same (*Sie kommen* / *sie kommen*), so only the capital and the context tell them apart.',
    '**Gute Nacht** is not an evening greeting. You say it only when someone is going to bed. In the evening you greet with *Guten Abend*.',
    '**Auf Wiedersehen** is for face to face; on the phone use **Auf Wiederhören**.',
    '**Ich bin gut** is wrong for "I am well". Say **Mir geht es gut** or just **Gut, danke**.',
    'Do not switch to *du* just because someone is friendly. Colleagues in many German offices use *Sie* for years. Wait for the offer.',
    'In the south and in Austria you will hear **Grüß Gott** and **Servus**, in Switzerland **Grüezi**. You only need to recognise them; *Guten Tag* works everywhere.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-02-greetings-ex01',
      prompt: 'You walk into a bank at 15:00. What do you say?',
      options: ['Guten Morgen', 'Guten Tag', 'Gute Nacht'],
      answer: 1,
      explanation: 'Guten Tag works all day and is the safe neutral greeting. Guten Morgen is only for the morning, Gute Nacht only at bedtime.',
    },
    {
      type: 'mc',
      id: 'a1-02-greetings-ex02',
      prompt: 'Which form do you use with a shop assistant you have never met?',
      options: ['du', 'ihr', 'Sie'],
      answer: 2,
      explanation: 'Strangers and staff get Sie. ihr is the informal plural, du is for friends and family.',
    },
    {
      type: 'fill',
      id: 'a1-02-greetings-ex03',
      prompt: 'Ich ___ Thomas. (heißen)',
      answer: ['heiße'],
      explanation: 'With ich the verb ends in -e: ich heiße. This is the most common way to say your name.',
    },
    {
      type: 'fill',
      id: 'a1-02-greetings-ex04',
      prompt: 'Wie ___ Sie? (heißen – polite)',
      answer: ['heißen'],
      explanation: 'With Sie the verb has the ending -en, the same as the infinitive: Wie heißen Sie?',
    },
    {
      type: 'match',
      id: 'a1-02-greetings-ex05',
      prompt: 'Match the question with its answer.',
      pairs: [
        ['Wie heißt du?', 'Ich heiße Anna.'],
        ['Woher kommst du?', 'Aus Polen.'],
        ['Wo wohnst du?', 'In Hamburg.'],
        ['Wie geht es dir?', 'Gut, danke.'],
      ],
      explanation: 'wie = how (name, how are you), woher = where from (aus + country), wo = where (in + city).',
    },
    {
      type: 'order',
      id: 'a1-02-greetings-ex06',
      prompt: 'Build the sentence: "I am from Spain."',
      words: ['aus', 'Ich', 'Spanien.', 'komme'],
      answer: ['Ich komme aus Spanien.'],
      explanation: 'Subject (Ich), verb (komme), then aus + the country. Woher asks for this answer.',
    },
    {
      type: 'mc',
      id: 'a1-02-greetings-ex07',
      prompt: 'Which goodbye is only used on the phone?',
      options: ['Auf Wiedersehen', 'Auf Wiederhören', 'Tschüs'],
      answer: 1,
      explanation: 'Wiederhören means "hear again", so it belongs to the phone. Wiedersehen means "see again".',
    },
    {
      type: 'fill',
      id: 'a1-02-greetings-ex08',
      prompt: 'Wie geht es ___? (you – formal)',
      answer: ['Ihnen'],
      explanation: 'The polite form of "Wie geht es dir?" is "Wie geht es Ihnen?" Note the capital I, just like Sie.',
    },
    {
      type: 'mc',
      id: 'a1-02-greetings-ex09',
      prompt: 'Which sentence is written correctly?',
      options: ['Kommen sie aus Berlin, Frau Klein?', 'Kommen Sie aus Berlin, Frau Klein?', 'Kommen SIE aus Berlin, Frau Klein?'],
      answer: 1,
      explanation: 'The polite Sie always has a capital S. Lower-case sie would mean "they" or "she".',
    },
    {
      type: 'translate',
      id: 'a1-02-greetings-ex10',
      prompt: 'Translate: "Where do you live?" (informal)',
      answer: ['Wo wohnst du?'],
      hint: 'wohnen = to live, wo = where',
      explanation: 'Informal du takes the ending -st: du wohnst. The question word wo comes first, then the verb.',
    },
    {
      type: 'mc',
      id: 'a1-02-greetings-ex11',
      prompt: 'Your host says "Gute Nacht". What is happening?',
      options: ['You have just arrived for dinner.', 'Someone is going to bed.', 'It is the afternoon.'],
      answer: 1,
      explanation: 'Gute Nacht is a bedtime farewell, not an evening greeting. For a greeting in the evening use Guten Abend.',
    },
    {
      type: 'translate',
      id: 'a1-02-greetings-ex12',
      prompt: 'Translate: "Nice to meet you."',
      answer: ['Freut mich.', 'Freut mich!'],
      hint: 'a fixed two-word phrase',
      explanation: 'Freut mich is short for "Es freut mich" (it pleases me). It is used in both formal and informal situations.',
    },
  ],
};

export default topic;
