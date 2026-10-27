import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-07-questions',
  level: 'A1',
  unit: 1,
  order: 7,
  title: 'Yes/no questions and W-questions',
  germanTerm: 'Ja/Nein-Fragen, W-Fragen',
  tags: ['questions', 'word order', 'question words', 'wer wie wo'],
  summary: 'A yes/no question starts with the verb; a W-question starts with a question word (wer, wie, wo …) and the verb comes second.',
  explanation: `
### Two kinds of question

German has two question shapes, and both are simpler than English because there is **no "do"**.

1. **Yes/no questions** (*Ja/Nein-Fragen*): the answer is *ja* or *nein*. The **verb goes first**.
2. **W-questions** (*W-Fragen*): they ask for information and start with a question word. Most of these words begin with **w**, which gives them their name.

### Yes/no questions: verb first

Take a statement and move the conjugated verb to the front. Nothing else changes.

| statement | question |
|---|---|
| Du wohnst in Berlin. | **Wohnst** du in Berlin? |
| Sie hat Kinder. | **Hat** sie Kinder? |
| Ihr kommt morgen. | **Kommt** ihr morgen? |

Compare English: *Do you live in Berlin?* German has no *do*; the verb itself jumps forward. The voice goes **up** at the end.

Answers: **Ja.** / **Nein.** – and a special word: **Doch.** You use *doch* to say "yes" to a question that was asked in the negative: *Hast du **kein** Auto?* – ***Doch**, ich habe ein Auto.* (On the contrary, I do.)

### W-questions: question word first, verb second

The question word takes **position 1**, the verb **position 2**, then the subject. This is the normal verb-second rule.

| question word | meaning | example |
|---|---|---|
| **wer** | who | Wer ist das? |
| **was** | what | Was machst du? |
| **wo** | where | Wo wohnst du? |
| **woher** | where from | Woher kommst du? |
| **wohin** | where to | Wohin gehst du? |
| **wann** | when | Wann beginnt der Kurs? |
| **wie** | how | Wie geht es dir? |
| **warum** | why | Warum lernst du Deutsch? |
| **welche / welcher / welches** | which | Welche Sprache sprichst du? |

The three **wo** words are often mixed up: **wo** = where (position), **woher** = where from (origin, answer with *aus*), **wohin** = where to (direction, answer with *nach* or *in*).

### wie + another word

**wie** combines with other words, just like English *how*:

- **Wie viel** kostet das? – How much does that cost?
- **Wie viele** Kinder hast du? – How many children do you have?
- **Wie alt** bist du? – How old are you?
- **Wie lange** bleibst du? – How long are you staying?
- **Wie spät** ist es? – What time is it? (literally: how late)

### Polite questions with Sie

With *Sie* the verb has the *-en* ending and the question works the same way: *Wohnen Sie in Berlin? Woher kommen Sie?* This is the form you will use with every adult stranger.

### Why it matters

Questions are how you get information and keep a conversation going. The two patterns here, **verb first** and **W-word + verb**, cover almost every question you will ever ask in German. They are also the clearest example of the verb-position rules: statement = verb second, yes/no question = verb first.
`,
  examples: [
    { de: 'Wohnst du in Berlin? – Ja.', en: 'Do you live in Berlin? – Yes. (verb first, no "do")' },
    { de: 'Hat sie Kinder? – Nein.', en: 'Does she have children? – No.' },
    { de: 'Wer ist das?', en: 'Who is that?' },
    { de: 'Was machst du heute?', en: 'What are you doing today?' },
    { de: 'Woher kommen Sie?', en: 'Where are you from? (formal)' },
    { de: 'Wohin gehst du? – Nach Hause.', en: 'Where are you going? – Home. (wohin = direction)' },
    { de: 'Wie viel kostet das?', en: 'How much does that cost?' },
    { de: 'Hast du keine Zeit? – Doch!', en: 'Don\'t you have time? – Yes, I do! (doch answers a negative question)' },
  ],
  connections: [
    { topicId: 'a1-06-verb-second', note: 'W-questions follow the verb-second rule; yes/no questions move the verb to position 1.' },
    { topicId: 'a1-02-greetings', note: 'The first questions you learned (Wie heißt du? Woher kommst du?) are W-questions.' },
    { topicId: 'a1-05-present-tense-regular', note: 'The verb in a question still carries the ending for its subject: Wohnst du? Wohnt er?' },
    { topicId: 'a1-13-negation', note: 'doch is the answer to a negative question; that topic explains nicht and kein.' },
    { topicId: 'a1-11-nominative', note: 'wer asks for the Nominative subject.' },
  ],
  edgeCases: [
    'No **do / does**: *Sprichst du Englisch?*, never *Tust du sprechen Englisch?*',
    '**wo / woher / wohin**: *Wo bist du?* (where are you), *Woher kommst du?* (where from), *Wohin fährst du?* (where to). English uses *where* for all three.',
    '**Wie** means *how*, not *what*, but in some phrases English uses *what*: *Wie heißt du?* (What is your name?), *Wie spät ist es?* (What time is it?)',
    '**doch** is the "yes" to a negative question. Answering *ja* to *Hast du keine Zeit?* is confusing; say *Doch*.',
    'The question word **wer** changes with case later (*wen, wem*), but at A1 you only need *wer* for the subject.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-07-questions-ex01',
      prompt: 'How do you ask "Do you live in Munich?" (informal)',
      options: ['Du wohnst in München?', 'Wohnst du in München?', 'Tust du wohnen in München?'],
      answer: 1,
      explanation: 'A yes/no question starts with the verb: Wohnst du …? There is no "do" in German.',
    },
    {
      type: 'order',
      id: 'a1-07-questions-ex02',
      prompt: 'Build the question: "Does she have children?"',
      words: ['Kinder?', 'sie', 'Hat'],
      answer: ['Hat sie Kinder?'],
      explanation: 'Move the verb to the front: Hat sie Kinder? The subject follows the verb.',
    },
    {
      type: 'fill',
      id: 'a1-07-questions-ex03',
      prompt: '___ kommst du? – Aus Spanien. (where from)',
      answer: ['Woher'],
      explanation: 'The answer uses aus (from), so the question is woher (where from).',
    },
    {
      type: 'fill',
      id: 'a1-07-questions-ex04',
      prompt: '___ gehst du? – Nach Hause. (where to)',
      answer: ['Wohin'],
      explanation: 'The answer is a direction (nach Hause), so the question is wohin (where to).',
    },
    {
      type: 'match',
      id: 'a1-07-questions-ex05',
      prompt: 'Match the question word with its meaning.',
      pairs: [
        ['wer', 'who'],
        ['was', 'what'],
        ['wann', 'when'],
        ['warum', 'why'],
        ['wie', 'how'],
      ],
      explanation: 'wer / was / wann / warum / wie. Careful: wer is "who", not "where" (that is wo).',
    },
    {
      type: 'mc',
      id: 'a1-07-questions-ex06',
      prompt: 'Which question asks for the time?',
      options: ['Wie alt ist es?', 'Wie spät ist es?', 'Wie lange ist es?'],
      answer: 1,
      explanation: 'Wie spät ist es? (literally "how late is it") means "What time is it?". Wie alt = how old, wie lange = how long.',
    },
    {
      type: 'order',
      id: 'a1-07-questions-ex07',
      prompt: 'Build the question: "What are you doing today?"',
      words: ['heute?', 'du', 'machst', 'Was'],
      answer: ['Was machst du heute?'],
      explanation: 'Question word first (Was), verb second (machst), subject third (du).',
    },
    {
      type: 'mc',
      id: 'a1-07-questions-ex08',
      prompt: '"Hast du kein Geld?" – You DO have money. What do you answer?',
      options: ['Ja.', 'Nein.', 'Doch.'],
      answer: 2,
      explanation: 'Doch contradicts a negative question: "Yes, I do have money." Ja would be unclear here.',
    },
    {
      type: 'fill',
      id: 'a1-07-questions-ex09',
      prompt: '___ Sie Deutsch? (sprechen – formal)',
      answer: ['Sprechen'],
      explanation: 'A yes/no question with Sie: verb first with the -en ending. Sprechen Sie Deutsch?',
    },
    {
      type: 'translate',
      id: 'a1-07-questions-ex10',
      prompt: 'Translate: "Where do you live?" (formal)',
      answer: ['Wo wohnen Sie?'],
      hint: 'wohnen = to live',
      explanation: 'wo (where, position) + verb with the Sie ending -en + Sie.',
    },
    {
      type: 'mc',
      id: 'a1-07-questions-ex11',
      prompt: 'Which question is correct?',
      options: ['Wie viel Kinder hast du?', 'Wie viele Kinder hast du?', 'Wie lange Kinder hast du?'],
      answer: 1,
      explanation: 'With a countable plural noun (Kinder) use wie viele (how many). Wie viel is for amounts you cannot count (Wie viel Geld?).',
    },
    {
      type: 'translate',
      id: 'a1-07-questions-ex12',
      prompt: 'Translate: "Why are you learning German?" (informal, one person)',
      answer: ['Warum lernst du Deutsch?'],
      hint: 'warum = why, lernen = to learn',
      explanation: 'Warum in position 1, the verb lernst in position 2, then du. No "are" or "do" is needed.',
    },
  ],
};

export default topic;
