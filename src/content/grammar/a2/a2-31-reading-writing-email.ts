import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-31-reading-writing-email',
  level: 'A2',
  unit: 10,
  order: 31,
  title: 'Reading strategies and writing a semi-formal email',
  germanTerm: 'Lesen & Schreiben A2',
  tags: ['reading', 'writing', 'email', 'register', 'skills', 'exam'],
  summary: 'Read German texts with three strategies (skim, scan, guess from context) and write a semi-formal email with the right opening, body phrases and closing.',
  explanation: `
### Part 1: reading strategies

You do not need to understand every word of a German text. Good readers use three strategies (*Lesestrategien*), and A2 exams test exactly these.

**1. Skimming (globales Lesen)** – read fast to get the main idea. Look at the **title**, the **first sentence** of each paragraph, **bold words** and **pictures**. Ask: *What kind of text is this and what is it about?*

**2. Scanning (selektives Lesen)** – you already know what you are looking for (a time, a price, a name). Let your eyes jump through the text to **numbers**, **capital letters** (names, places) or the **key word** from the question.

**3. Guessing from context (Wörter erschließen)** – when a word is new, do not stop. Use:

| clue | example |
|---|---|
| **international words** | Information, Hotel, Restaurant, Computer |
| **compounds** | Fahr-karten-automat: you know *fahren* and *Karte* |
| **the sentence around it** | *Ich habe Durst. Gibst du mir bitte ein Glas …?* – the word is a drink |
| **grammar** | capital letter → noun; *-ung* → feminine noun; *ge-…-t* → past participle |

Only look up a word if you need it for the answer.

### Part 2: the shape of a semi-formal email

A semi-formal email (*halbformelle E-Mail*) goes to someone you do not know well: a teacher, a landlord, an office. You use **Sie**, but the tone is friendly. The parts always come in this order.

| part | formal / semi-formal (Sie) | informal (du) |
|---|---|---|
| subject line (*Betreff*) | Anfrage: Deutschkurs im März | Party am Samstag |
| greeting (*Anrede*) | **Sehr geehrte Frau Müller,** / **Sehr geehrter Herr Schmidt,** / **Sehr geehrte Damen und Herren,** (unknown) | **Liebe Anna,** / **Lieber Tom,** / **Hallo Tom,** |
| first line | Vielen Dank für Ihre E-Mail. / Ich schreibe Ihnen, weil … | Danke für deine Nachricht! / Wie geht es dir? |
| body | Ich habe eine Frage zu … / Könnten Sie mir bitte sagen, ob …? / Ich würde gern … / Leider kann ich … | Ich habe eine Idee: … / Kannst du …? / Hast du Lust, …? |
| last line | Vielen Dank im Voraus. / Ich freue mich auf Ihre Antwort. | Ich freue mich auf dich! / Bis bald! |
| closing (*Grußformel*) | **Mit freundlichen Grüßen** | **Viele Grüße** / **Liebe Grüße** |
| name | Maria Schneider | Maria |

Three details that cost points:

1. After the greeting comes a **comma**, and the next line starts with a **small letter**: *Sehr geehrte Frau Müller,* ↵ *vielen Dank für …*
2. **Sehr geehrte** for a woman, **Sehr geehrter** for a man (the ending agrees with Frau / Herr). **Liebe** for a woman, **Lieber** for a man.
3. There is **no comma** after the closing: *Mit freundlichen Grüßen* ↵ *Maria Schneider*.

### Keep the register consistent

After *Sehr geehrte Frau Müller* use **Sie, Ihnen, Ihr** throughout and close with *Mit freundlichen Grüßen*. After *Liebe Anna* use **du, dir, dein** and close with *Liebe Grüße*. Mixing them is the most common mistake.

### A short model

*Sehr geehrte Frau Weber,*

*vielen Dank für die Informationen. Könnten Sie mir bitte sagen, wann der Kurs beginnt? Ich würde gern am Abendkurs teilnehmen.*

*Mit freundlichen Grüßen*

*Maria Schneider*

### Why it matters

Reading strategies save time in exams and in real life (timetables, official letters, websites). The email shape is exactly what the A2 writing task checks: greeting, closing, consistent register and an answer to every point.
`,
  examples: [
    { de: 'Sehr geehrte Frau Müller,', en: 'Dear Ms Müller, (formal greeting to a woman; comma, then a small letter on the next line)' },
    { de: 'Sehr geehrter Herr Schmidt,', en: 'Dear Mr Schmidt, (formal greeting to a man: -er)' },
    { de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam, (when you do not know the name)' },
    { de: 'Lieber Tom, / Liebe Anna,', en: 'Dear Tom, / Dear Anna, (informal)' },
    { de: 'Ich schreibe Ihnen, weil ich eine Frage zum Kurs habe.', en: 'I am writing to you because I have a question about the course. (semi-formal opening)' },
    { de: 'Könnten Sie mir bitte mitteilen, ob noch Plätze frei sind?', en: 'Could you please let me know whether there are still places available?' },
    { de: 'Ich freue mich auf Ihre Antwort.', en: 'I look forward to your reply.' },
    { de: 'Mit freundlichen Grüßen', en: 'Yours sincerely / Kind regards (formal closing, no comma after it)' },
  ],
  connections: [
    { topicId: 'a1-36-writing-short-messages', note: 'At A1 you wrote short informal notes; now you add the formal greeting, closing and Sie-forms.' },
    { topicId: 'a1-02-greetings', note: 'The du / Sie choice decides every phrase in the email.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'Könnten Sie …? and Ich würde gern … are the polite verbs that carry a semi-formal email.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Splitting compounds is the main trick for guessing unknown words while reading.' },
    { topicId: 'b1-31-register-formal-informal', note: 'At B1 the same structure is extended to complaints and job applications.' },
  ],
  edgeCases: [
    '**Sehr geehrte** (woman) vs **Sehr geehrter** (man), **Liebe** (woman) vs **Lieber** (man). The ending must match the person.',
    'After the greeting there is a **comma**, and the email continues with a **small letter**: *Liebe Anna,* ↵ *danke für deine Mail.*',
    '**No comma** after *Mit freundlichen Grüßen* or *Viele Grüße*. The name follows on the next line.',
    '*Hallo Frau Müller,* is acceptable for a semi-formal email to someone you have met before; *Hi* or *Hey* are not.',
    'When you guess a word from context, check that your guess fits the **grammar**: a capitalised word cannot be a verb.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex01',
      prompt: 'You need to find the departure time in a train timetable. Which strategy?',
      options: ['skimming (read for the main idea)', 'scanning (look for the number)', 'read every word'],
      answer: 1,
      explanation: 'You already know what you are looking for (a time), so you scan for numbers and the station name. No need to read the whole text.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex02',
      prompt: 'Which greeting is correct for an email to Frau Weber, whom you do not know well?',
      options: ['Sehr geehrter Frau Weber,', 'Sehr geehrte Frau Weber,', 'Liebe Frau Weber!'],
      answer: 1,
      explanation: 'Frau is feminine, so Sehr geehrte. The greeting ends with a comma, not an exclamation mark, in a semi-formal email.',
    },
    {
      type: 'fill',
      id: 'a2-31-reading-writing-email-ex03',
      prompt: 'Sehr ___ Herr Schmidt, (formal greeting to a man)',
      answer: ['geehrter'],
      explanation: 'The ending agrees with Herr (masculine): Sehr geehrter Herr Schmidt. For a woman it is Sehr geehrte Frau …',
    },
    {
      type: 'match',
      id: 'a2-31-reading-writing-email-ex04',
      prompt: 'Match each phrase with its register.',
      pairs: [
        ['Sehr geehrte Damen und Herren,', 'formal greeting, name unknown'],
        ['Lieber Jonas,', 'informal greeting'],
        ['Mit freundlichen Grüßen', 'formal closing'],
        ['Liebe Grüße', 'informal closing'],
        ['Ich freue mich auf Ihre Antwort.', 'formal last line'],
      ],
      explanation: 'Formal emails use Sie / Ihr and Mit freundlichen Grüßen; informal ones use du / dein and Liebe or Viele Grüße.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex05',
      prompt: 'Which line can follow "Sehr geehrte Frau Müller," in a semi-formal email?',
      options: ['Vielen Dank für Ihre E-Mail.', 'vielen Dank für Ihre E-Mail.', 'Danke für deine Mail!'],
      answer: 1,
      explanation: 'After the comma the sentence continues, so it starts with a small letter. Option 3 uses du, which does not match Sehr geehrte.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex06',
      prompt: 'You read: "Am Bahnhof gibt es einen Fahrkartenautomaten." You do not know Fahrkartenautomat. Best guess?',
      options: ['a ticket machine (fahren + Karte + Automat)', 'a kind of car', 'a train driver'],
      answer: 0,
      explanation: 'Split the compound: Fahr-karten-automat. You know fahren, Karte and Automat (international word), and the context is a station.',
    },
    {
      type: 'fill',
      id: 'a2-31-reading-writing-email-ex07',
      prompt: 'Ich schreibe ___, weil ich eine Frage zum Kurs habe. (to you, formal)',
      answer: ['Ihnen'],
      explanation: 'schreiben takes the Dative. The formal Sie in the Dative is Ihnen, with a capital I.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex08',
      prompt: 'Which closing fits an email that started with "Liebe Anna,"?',
      options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Hochachtungsvoll'],
      answer: 1,
      explanation: 'An informal email ends informally: Liebe Grüße or Viele Grüße. Mit freundlichen Grüßen is formal; Hochachtungsvoll is very old-fashioned and formal.',
    },
    {
      type: 'order',
      id: 'a2-31-reading-writing-email-ex09',
      prompt: 'Build the polite request for an email: "Could you please tell me when the course starts?"',
      words: ['wann', 'Kurs', 'mir', 'beginnt?', 'Sie', 'sagen,', 'Könnten', 'bitte', 'der'],
      answer: ['Könnten Sie mir bitte sagen, wann der Kurs beginnt?'],
      explanation: 'Könnten Sie + mir + bitte + sagen, then an indirect question with wann and the verb beginnt at the end.',
    },
    {
      type: 'mc',
      id: 'a2-31-reading-writing-email-ex10',
      prompt: 'Which email has a register mistake?',
      options: ['Sehr geehrter Herr Braun, könnten Sie mir bitte helfen? Mit freundlichen Grüßen, Lena', 'Hallo Max, kannst du mir helfen? Viele Grüße, Lena', 'Sehr geehrte Frau Braun, kannst du mir bitte helfen? Mit freundlichen Grüßen, Lena'],
      answer: 2,
      explanation: 'Option 3 opens formally (Sehr geehrte) but uses du. The register must stay the same from the greeting to the closing.',
    },
    {
      type: 'fill',
      id: 'a2-31-reading-writing-email-ex11',
      prompt: 'Ich freue mich auf ___ Antwort. (your, formal)',
      answer: ['Ihre'],
      explanation: 'The formal possessive is Ihr with a capital I. Antwort is feminine and in the Accusative after auf: Ihre Antwort.',
    },
    {
      type: 'translate',
      id: 'a2-31-reading-writing-email-ex12',
      prompt: 'Translate the formal closing: "Kind regards" (the standard German formula)',
      answer: ['Mit freundlichen Grüßen', 'Mit freundlichen Grüßen.'],
      hint: 'der Gruß, die Grüße = greeting(s); freundlich = friendly',
      explanation: 'Mit freundlichen Grüßen is the standard formal closing. Grüßen is Dative plural after mit, and the adjective takes -en.',
    },
  ],
};

export default topic;
