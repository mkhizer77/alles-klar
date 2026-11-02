import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-31-reading-writing-email',
  level: 'A2',
  unit: 10,
  order: 36,
  title: 'Reading strategies',
  germanTerm: 'Lesen A2',
  tags: ['reading', 'skills', 'exam', 'strategies'],
  summary: 'You do not need every word of a German text: read for the gist, scan for numbers and names, guess unknown words from their parts and the context, and check true/false statements against the text.',
  steps: [
    {
      title: 'Read for the gist first',
      text: `
You do not need to understand every word. Good readers use **strategies** (*Lesestrategien*), and A2 exams test exactly these.

Strategy one: **read for the gist** (*globales Lesen*). Read fast. Look at the **title**, the **first sentence** of each paragraph, **bold words** and **pictures**. Then ask yourself: what kind of text is this, and what is it about? An advert, a timetable, an email?
`,
      examples: [
        { de: 'Worum geht es in dem Text?', en: 'What is the text about? (the gist question)' },
        { de: 'Das ist eine Anzeige für eine Wohnung.', en: 'This is an advert for a flat. (kind of text + topic)' },
        { de: 'Der Text ist eine E-Mail von Anna.', en: 'The text is an email from Anna.' },
      ],
    },
    {
      title: 'Scan for numbers and names',
      text: `
Strategy two: **scanning** (*selektives Lesen*). You already know what you are looking for: a time, a price, a name. Do not read; let your eyes **jump** through the text to **numbers**, **capital letters** (names and places) and the **key word** from the question. Stop only when you hit it.
`,
      examples: [
        { de: 'Wann fährt der Zug?', en: 'When does the train leave? (scan for a time)' },
        { de: 'Der Zug fährt um acht Uhr fünfzehn ab.', en: 'The train leaves at 8.15. (the number you were looking for)' },
        { de: 'Der Kurs kostet hundertzwanzig Euro.', en: 'The course costs 120 euros. (scan for the price)' },
        { de: 'Frau Weber arbeitet in Hamburg.', en: 'Ms Weber works in Hamburg. (capital letters: a name and a place)' },
      ],
    },
    {
      title: 'Guess new words from their parts',
      text: `
Strategy three: **guess from context** (*Wörter erschließen*). When a word is new, do not stop. Use:

- **international words**: Information, Hotel, Restaurant, Computer
- **compounds** (*Komposita*, glued words): *Fahr-karten-automat*, you know *fahren* and *Karte*
- **the sentence around it**: *Ich habe Durst. Gibst du mir ein Glas …?* The word is a drink.

Only look a word up if you need it for the answer.
`,
      examples: [
        { de: 'Am Bahnhof gibt es einen Fahrkartenautomaten.', en: 'There is a ticket machine at the station. (fahren + Karte + Automat)' },
        { de: 'Das Hotel hat ein gutes Restaurant.', en: 'The hotel has a good restaurant. (international words)' },
        { de: 'Die Öffnungszeiten stehen an der Tür.', en: 'The opening hours are on the door. (öffnen + Zeiten)' },
      ],
    },
    {
      title: 'Use headings and connectors',
      text: `
**Headings** tell you where to look: a timetable has *Abfahrt* and *Ankunft*, a form has *Name* and *Adresse*. Go to the right part and skip the rest.

**Connectors** (*Konnektoren*, joining words) tell you what comes next. After **aber** expect the opposite. After **deshalb** expect a result. **Leider** announces bad news, **zum Glück** good news.
`,
      examples: [
        { de: 'Das Zimmer ist groß, aber laut.', en: 'The room is big, but noisy. (aber: something negative follows)' },
        { de: 'Es regnet, deshalb bleiben wir zu Hause.', en: "It is raining, so we stay at home. (deshalb: a result follows)" },
        { de: 'Leider ist der Kurs schon voll.', en: 'Unfortunately the course is already full. (leider: bad news)' },
      ],
    },
    {
      title: 'True or false: check against the text',
      text: `
Many tasks give a statement and ask **richtig oder falsch**? Read the statement first, pick its **key word**, and scan for it in the text. Then compare the two sentences word by word.

Watch out: a statement is false when the text says the **opposite** or gives a **different** number. A statement that *sounds* reasonable is not true unless the text says it.
`,
      examples: [
        { de: 'Der Laden ist sonntags geschlossen.', en: 'The shop is closed on Sundays. (the text)' },
        { de: 'Der Laden ist sonntags geöffnet.', en: 'The shop is open on Sundays. (statement: falsch, the opposite)' },
        { de: 'Der Laden ist am Sonntag zu.', en: 'The shop is closed on Sunday. (statement: richtig, same meaning, other words)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-31b-semi-formal-email', note: 'The sibling topic: writing a semi-formal email with the right greeting, closing and register.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Splitting compounds from the right is the main trick for guessing unknown words.' },
    { topicId: 'a2-30b-nouns-from-verbs', note: 'An ending like -ung tells you a word is a noun and what verb it comes from.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'deshalb, trotzdem and the other connectors signal what the next sentence will say.' },
    { topicId: 'b1-32-opinions-speaking', note: 'At B1 the same connectors help you structure your own opinion.' },
  ],
  edgeCases: [
    'When you guess a word, check that your guess fits the **grammar**: a capitalised word in the middle of a sentence is a noun, not a verb.',
    '**nur**, **nicht** and **kein** flip a statement. *Der Kurs ist **nur** für Anfänger* and *Der Kurs ist für alle* cannot both be true.',
    'A statement with a **different number** is false: text *um 9 Uhr*, statement *um 19 Uhr* → falsch. Scan the digits twice.',
    'Do not translate the whole text. Read the **questions** first, then look for the answers; the rest of the text can stay unread.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex01',
      prompt: 'You want to know what kind of text you are reading and what it is about. Which strategy?',
      options: ['read for the gist (title, first sentences, bold words)', 'scan for a number', 'look up every new word'],
      answer: 0,
      explanation: 'The gist question (what is it about?) is answered by reading fast: title, first sentences, bold words and pictures.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex02',
      prompt: 'You need to find the departure time in a train timetable. Which strategy?',
      options: ['read for the gist', 'scan for the number', 'read every word'],
      answer: 1,
      explanation: 'You already know what you are looking for (a time), so you scan for numbers and the station name. No need to read the whole text.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex03',
      prompt: 'You are looking for the name of a person in a long email. What do you scan for?',
      options: ['verbs at the end of the sentence', 'words with a capital letter', 'the word "und"'],
      answer: 1,
      explanation: 'Names and places start with a capital letter in the middle of a sentence, so your eyes can jump to them.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex04',
      prompt: 'You read: "Am Bahnhof gibt es einen Fahrkartenautomaten." You do not know Fahrkartenautomat. Best guess?',
      options: ['a ticket machine (fahren + Karte + Automat)', 'a kind of car', 'a train driver'],
      answer: 0,
      explanation: 'Split the compound: Fahr-karten-automat. You know fahren, Karte and Automat (international word), and the context is a station.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex05',
      prompt: 'On a shop door you read "Öffnungszeiten: Mo–Fr 9–18 Uhr". What does Öffnungszeiten mean?',
      options: ['prices', 'opening hours', 'address'],
      answer: 1,
      explanation: 'Öffnung comes from öffnen (to open) and Zeiten means times. The times after it confirm the guess.',
    },
    {
      type: 'fill',
      id: 'a2-31-reading-writing-email-ex06',
      prompt: 'Guess from context: "Ich habe Durst. Gibst du mir bitte ein Glas ___?"',
      answer: ['Wasser', 'Saft', 'Milch', 'Apfelsaft', 'Orangensaft', 'Cola', 'Tee', 'Limonade', 'Bier', 'Wein'],
      explanation: 'Durst (thirst) and ein Glas tell you the missing word is a drink. Any drink fits; the context does the work, not a dictionary.',
    },
    {
      type: 'match',
      id: 'a2-31-reading-writing-email-ex07',
      prompt: 'Match the connector with what it tells you comes next.',
      pairs: [
        ['aber', 'the opposite'],
        ['deshalb', 'a result'],
        ['leider', 'bad news'],
        ['zum Glück', 'good news'],
        ['trotzdem', 'something unexpected'],
      ],
      explanation: 'Connectors are signposts. If you know what kind of information follows, you can read faster and guess unknown words.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex08',
      prompt: '"Die Wohnung ist schön, aber ___." Which word fits after aber?',
      options: ['hell', 'teuer', 'groß'],
      answer: 1,
      explanation: 'aber announces the opposite of schön, so something negative: teuer. hell and groß would be more good news.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex09',
      prompt: 'Text: "Der Supermarkt ist montags bis samstags von 8 bis 20 Uhr geöffnet." Statement: "Der Supermarkt ist am Sonntag geöffnet."',
      options: ['richtig', 'falsch'],
      answer: 1,
      explanation: 'The text lists Monday to Saturday only. Sunday is not in the list, so the statement is false.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex10',
      prompt: 'Text: "Das Konzert beginnt um 19 Uhr. Einlass ist ab 18 Uhr." Statement: "Man kann schon um 18 Uhr hineingehen."',
      options: ['richtig', 'falsch'],
      answer: 0,
      explanation: 'Einlass (from einlassen, to let in) ab 18 Uhr means the doors open at 18.00. The statement says the same with other words, so it is true.',
    },
    {
      type: 'order',
      id: 'a2-31-reading-writing-email-ex11',
      prompt: 'Build the gist question: "What is the text about?"',
      words: ['Text?', 'geht', 'dem', 'Worum', 'in', 'es'],
      answer: ['Worum geht es in dem Text?'],
      explanation: 'Worum geht es … is the standard question for the main idea. Ask it before you read the details.',
    },
    {
      type: 'translate',
      id: 'a2-31-reading-writing-email-ex12',
      prompt: 'Translate: "The shop is closed on Sundays."',
      answer: ['Der Laden ist sonntags geschlossen.', 'Das Geschäft ist sonntags geschlossen.', 'Der Laden ist am Sonntag geschlossen.', 'Das Geschäft ist am Sonntag geschlossen.', 'Der Laden ist sonntags zu.', 'Das Geschäft ist sonntags zu.'],
      hint: 'der Laden / das Geschäft = shop; sonntags = on Sundays; geschlossen = closed',
      explanation: 'In a true/false task this sentence and "Der Laden ist sonntags geöffnet" are opposites: geschlossen vs geöffnet is the key word to compare.',
    },
  ],
};

export default topic;
