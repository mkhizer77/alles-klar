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
  explanation: `
### Saying hello and goodbye

German has a small set of fixed phrases for greeting. Some depend on the **time of day**, some on **how formal** the situation is.

| when | greeting | goodbye |
|---|---|---|
| any time, neutral | **Guten Tag** | **Auf Wiedersehen** |
| morning (until about 10–11) | **Guten Morgen** | – |
| evening | **Guten Abend** | **Gute Nacht** (only when going to bed) |
| informal, any time | **Hallo**, **Hi** | **Tschüs**, **Bis später** (see you later) |
| on the phone | **Guten Tag** / **Hallo** | **Auf Wiederhören** (literally: until we hear again) |

In the south of Germany and in Austria you will hear **Grüß Gott** and **Servus**. In Switzerland **Grüezi**. You do not need to use them, but it helps to recognise them.

### Introducing yourself

Three ways to say your name; all three are common:

- **Ich heiße** Maria. – *My name is Maria.* (literally: I am called)
- **Ich bin** Maria. – *I am Maria.*
- **Mein Name ist** Maria. – *My name is Maria.* (slightly formal)

Then the usual questions and answers:

| question | answer |
|---|---|
| **Wie heißt du?** / **Wie heißen Sie?** (What is your name?) | Ich heiße … |
| **Woher kommst du?** / **Woher kommen Sie?** (Where are you from?) | Ich komme **aus** Spanien. |
| **Wo wohnst du?** / **Wo wohnen Sie?** (Where do you live?) | Ich wohne **in** Berlin. |
| **Wie geht es dir?** / **Wie geht es Ihnen?** (How are you?) | Gut, danke. Und dir? / Und Ihnen? |

*Wie geht's?* is the short, informal version of *Wie geht es dir?* The answers go from **sehr gut** (very good), **gut**, **es geht** (so-so) to **nicht so gut**.

When you meet someone: **Freut mich.** (*Nice to meet you.*) When someone thanks you: **Bitte.** (*You're welcome.*)

### du or Sie? The most important social rule

English has one *you*. German has two, and choosing the wrong one can sound rude or strangely distant.

| | du | Sie |
|---|---|---|
| who | family, friends, children, students, colleagues who offered it | strangers, officials, shop staff, your doctor, older people, at work until offered otherwise |
| verb form | du komm**st**, du heiß**t** | Sie komm**en**, Sie heiß**en** |
| spelling | always lower case (*du*) | always a capital **S** (*Sie*) |

The safe rule for an adult learner: **use Sie with every adult you do not know.** Wait for the German speaker to offer *du* ("Wir können uns duzen" or simply by using *du* with you). Young people among themselves, and almost everybody online, use *du*.

The plural of *du* is **ihr** (*you all*, informal). The plural of *Sie* is also **Sie**.

### Titles and polite words

- **Herr** Müller (Mr), **Frau** Müller (Mrs / Ms). *Fräulein* is no longer used.
- **bitte** = please (and *you're welcome*, and *here you are*), **danke** = thank you, **Entschuldigung** = excuse me / sorry.
- A letter or email starts with **Sehr geehrte Frau Müller** (formal) or **Liebe Anna** / **Lieber Tom** (informal) and ends with **Mit freundlichen Grüßen** or **Viele Grüße**.

### Why it matters

These phrases are the first thing you say in every conversation, and they decide the tone of everything after. Getting *du* and *Sie* right is worth more than any single grammar rule for making a good impression.
`,
  examples: [
    { de: 'Guten Tag, ich heiße Peter Schmidt.', en: 'Good day, my name is Peter Schmidt. (formal introduction)' },
    { de: 'Hallo, ich bin Lena. Und du?', en: 'Hi, I am Lena. And you? (informal)' },
    { de: 'Wie heißen Sie?', en: 'What is your name? (polite Sie, verb ends in -en)' },
    { de: 'Woher kommst du? – Ich komme aus Italien.', en: 'Where are you from? – I am from Italy.' },
    { de: 'Wie geht es Ihnen? – Danke, gut. Und Ihnen?', en: 'How are you? – Fine, thanks. And you? (formal)' },
    { de: 'Freut mich!', en: 'Nice to meet you!' },
    { de: 'Tschüs, bis morgen!', en: 'Bye, see you tomorrow! (informal)' },
    { de: 'Auf Wiedersehen, Frau Weber.', en: 'Goodbye, Mrs Weber. (formal)' },
  ],
  connections: [
    { topicId: 'a1-01-pronunciation', note: 'You will need the letter names to spell your name after introducing yourself.' },
    { topicId: 'a1-03-personal-pronouns', note: 'du, ihr and Sie are personal pronouns; that topic shows the whole set.' },
    { topicId: 'a1-04-sein-haben', note: '"Ich bin Lena" uses sein, the first verb you need to conjugate.' },
    { topicId: 'a1-07-questions', note: 'Wie, woher and wo are W-question words; that topic explains how to build questions.' },
  ],
  edgeCases: [
    '**Sie** (polite you) is always written with a capital S, even in the middle of a sentence. Lower-case *sie* means *she* or *they*. The verb form is the same (*Sie kommen* / *sie kommen*), so only the capital letter and the context tell them apart.',
    '**Gute Nacht** is not an evening greeting. You say it only when someone is going to bed. In the evening you greet with *Guten Abend*.',
    '**Auf Wiedersehen** is for face to face; on the phone use **Auf Wiederhören**.',
    '**Ich bin gut** is wrong for "I am well". Say **Mir geht es gut** or just **Gut, danke**.',
    'Do not switch to *du* just because someone is friendly. Colleagues in many German offices use *Sie* for years. Wait for the offer.',
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
