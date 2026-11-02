import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-31b-semi-formal-email',
  level: 'A2',
  unit: 10,
  order: 37,
  title: 'Writing a semi-formal email',
  germanTerm: 'Schreiben A2',
  tags: ['writing', 'email', 'register', 'skills', 'exam'],
  summary: 'A semi-formal email goes to someone you address with Sie: greet with Sehr geehrte/r, use Sie, Ihnen, Ihr all the way through, and close with Mit freundlichen Grüßen.',
  steps: [
    {
      title: 'Who gets a semi-formal email',
      text: `
A **semi-formal email** (*halbformelle E-Mail*) goes to someone you do not know well: a teacher, a landlord, a course office. You use **Sie**, but the tone is friendly. The A2 writing task is exactly this kind of email.

The parts always come in the same order: subject line, greeting, first line, body, last line, closing, your name.
`,
      examples: [
        { de: 'Betreff: Anfrage: Deutschkurs im März', en: 'Subject: Enquiry: German course in March (the subject line, Betreff)' },
        { de: 'Ich schreibe Ihnen, weil ich eine Frage habe.', en: 'I am writing to you because I have a question. (Ihnen: the Sie form)' },
        { de: 'Mit freundlichen Grüßen', en: 'Kind regards (the closing, Grußformel)' },
      ],
    },
    {
      title: 'The greeting for Sie',
      text: `
The greeting (*Anrede*) is **Sehr geehrte Frau …,** for a woman and **Sehr geehrter Herr …,** for a man. The ending matches the person: *-e* with *Frau*, *-er* with *Herr*. If you do not know the name, write **Sehr geehrte Damen und Herren,**.

Two details that cost points: after the greeting comes a **comma**, and the next line starts with a **small letter**.
`,
      examples: [
        { de: 'Sehr geehrte Frau Müller,', en: 'Dear Ms Müller, (woman: geehrte)' },
        { de: 'Sehr geehrter Herr Schmidt,', en: 'Dear Mr Schmidt, (man: geehrter)' },
        { de: 'Sehr geehrte Damen und Herren,', en: 'Dear Sir or Madam, (name unknown)' },
        { de: 'vielen Dank für Ihre E-Mail.', en: 'thank you for your email. (small letter after the comma)' },
      ],
    },
    {
      title: 'First line and body phrases',
      text: `
Start with a thank-you or with your reason for writing. In the body, ask and request politely with **Könnten Sie …?** (could you) and **Ich würde gern …** (I would like to). Say what you cannot do with **Leider …**. Answer every point the task asks for, one or two sentences each.
`,
      examples: [
        { de: 'Vielen Dank für Ihre E-Mail.', en: 'Thank you for your email. (first line)' },
        { de: 'Ich habe eine Frage zum Kurs.', en: 'I have a question about the course.' },
        { de: 'Könnten Sie mir bitte sagen, wann der Kurs beginnt?', en: 'Could you please tell me when the course starts? (polite request)' },
        { de: 'Leider kann ich am Montag nicht kommen.', en: 'Unfortunately I cannot come on Monday.' },
      ],
    },
    {
      title: 'Last line, closing and name',
      text: `
End the body with one polite line: **Ich freue mich auf Ihre Antwort.** or **Vielen Dank im Voraus.** Then comes the closing (*Grußformel*) **Mit freundlichen Grüßen** on its own line, and your full name on the line below.

There is **no comma** after *Mit freundlichen Grüßen*.
`,
      examples: [
        { de: 'Ich freue mich auf Ihre Antwort.', en: 'I look forward to your reply. (last line)' },
        { de: 'Vielen Dank im Voraus.', en: 'Many thanks in advance. (last line)' },
        { de: 'Mit freundlichen Grüßen', en: 'Kind regards (closing, no comma, name on the next line)' },
      ],
    },
    {
      title: 'Keep the register the same',
      text: `
The **register** (*Register*, formal or informal) must stay the same from the first line to the last. After *Sehr geehrte Frau Müller* use **Sie, Ihnen, Ihr** everywhere and close with *Mit freundlichen Grüßen*. After *Liebe Anna* use **du, dir, dein** and close with *Liebe Grüße*. Mixing *Sehr geehrte* with *du* is the most common mistake.

A short model, read top to bottom:
`,
      examples: [
        { de: 'Sehr geehrte Frau Weber,', en: 'Dear Ms Weber,' },
        { de: 'vielen Dank für die Informationen.', en: 'thank you for the information.' },
        { de: 'Ich würde gern am Abendkurs teilnehmen.', en: 'I would like to take part in the evening course.' },
        { de: 'Mit freundlichen Grüßen Maria Schneider', en: 'Kind regards, Maria Schneider (two separate lines in the email, no comma)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-31-reading-writing-email', note: 'The sibling topic: reading strategies for the texts you answer.' },
    { topicId: 'a1-36-writing-short-messages', note: 'At A1 you wrote short informal notes; now you add the formal greeting, closing and Sie forms.' },
    { topicId: 'a1-02-greetings', note: 'The du / Sie choice decides every phrase in the email.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'Könnten Sie …? and Ich würde gern … are the polite verbs that carry a semi-formal email.' },
    { topicId: 'b1-31-register-formal-informal', note: 'At B1 the same shape is extended to complaints and job applications.' },
  ],
  edgeCases: [
    '**Sehr geehrte** (woman) vs **Sehr geehrter** (man), **Liebe** (woman) vs **Lieber** (man). The ending must match the person.',
    'After the greeting there is a **comma**, and the email continues with a **small letter**: *Liebe Anna,* then *danke für deine Mail.*',
    '**No comma** after *Mit freundlichen Grüßen* or *Viele Grüße*. The name follows on the next line.',
    '*Hallo Frau Müller,* is acceptable for a semi-formal email to someone you have met before; *Hi* or *Hey* are not.',
    'The formal **Sie, Ihnen, Ihr** always take a capital letter in an email: *Ich danke **Ihnen** für **Ihre** Antwort.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-31b-semi-formal-email-ex01',
      prompt: 'Which greeting is correct for an email to Frau Weber, whom you do not know well?',
      options: ['Sehr geehrter Frau Weber,', 'Sehr geehrte Frau Weber,', 'Liebe Frau Weber!'],
      answer: 1,
      explanation: 'Frau is feminine, so Sehr geehrte. The greeting ends with a comma, not an exclamation mark, in a semi-formal email.',
    },
    {
      type: 'fill',
      id: 'a2-31b-semi-formal-email-ex02',
      prompt: 'Sehr ___ Herr Schmidt, (formal greeting to a man)',
      answer: ['geehrter'],
      explanation: 'The ending agrees with Herr (masculine): Sehr geehrter Herr Schmidt. For a woman it is Sehr geehrte Frau …',
    },
    {
      type: 'match',
      id: 'a2-31b-semi-formal-email-ex03',
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
      id: 'a2-31b-semi-formal-email-ex04',
      prompt: 'Which line can follow "Sehr geehrte Frau Müller," in a semi-formal email?',
      options: ['Vielen Dank für Ihre E-Mail.', 'vielen Dank für Ihre E-Mail.', 'Danke für deine Mail!'],
      answer: 1,
      explanation: 'After the comma the sentence continues, so it starts with a small letter. Option 3 uses du, which does not match Sehr geehrte.',
    },
    {
      type: 'fill',
      id: 'a2-31b-semi-formal-email-ex05',
      prompt: 'Ich schreibe ___, weil ich eine Frage zum Kurs habe. (to you, formal)',
      answer: ['Ihnen'],
      explanation: 'schreiben takes the Dative. The formal Sie in the Dative is Ihnen, with a capital I.',
    },
    {
      type: 'fill',
      id: 'a2-31b-semi-formal-email-ex06',
      prompt: 'Ich würde ___ am Abendkurs teilnehmen. (gladly: I would like to)',
      answer: ['gern', 'gerne'],
      explanation: 'Ich würde gern + infinitive at the end is the polite way to say what you want in a semi-formal email.',
    },
    {
      type: 'mc',
      id: 'a2-31b-semi-formal-email-ex07',
      prompt: 'Which closing fits an email that started with "Liebe Anna,"?',
      options: ['Mit freundlichen Grüßen', 'Liebe Grüße', 'Hochachtungsvoll'],
      answer: 1,
      explanation: 'An informal email ends informally: Liebe Grüße or Viele Grüße. Mit freundlichen Grüßen is formal; Hochachtungsvoll is very old-fashioned and formal.',
    },
    {
      type: 'mc',
      id: 'a2-31b-semi-formal-email-ex08',
      prompt: 'How do you write the closing and the name correctly?',
      options: ['Mit freundlichen Grüßen, Maria Schneider (one line)', 'Mit freundlichen Grüßen / Maria Schneider (no comma, name on the next line)', 'Mit freundlichen Grüßen. Maria Schneider'],
      answer: 1,
      explanation: 'There is no comma and no full stop after Mit freundlichen Grüßen. The name stands alone on the next line.',
    },
    {
      type: 'fill',
      id: 'a2-31b-semi-formal-email-ex09',
      prompt: 'Ich freue mich auf ___ Antwort. (your, formal)',
      answer: ['Ihre'],
      explanation: 'The formal possessive is Ihr with a capital I. Antwort is feminine and in the Accusative after auf: Ihre Antwort.',
    },
    {
      type: 'order',
      id: 'a2-31b-semi-formal-email-ex10',
      prompt: 'Build the polite request for an email: "Could you please tell me when the course starts?"',
      words: ['wann', 'Kurs', 'mir', 'beginnt?', 'Sie', 'sagen,', 'Könnten', 'bitte', 'der'],
      answer: ['Könnten Sie mir bitte sagen, wann der Kurs beginnt?'],
      explanation: 'Könnten Sie + mir + bitte + sagen, then an indirect question with wann and the verb beginnt at the end.',
    },
    {
      type: 'mc',
      id: 'a2-31b-semi-formal-email-ex11',
      prompt: 'Which email has a register mistake?',
      options: ['Sehr geehrter Herr Braun, könnten Sie mir bitte helfen? Mit freundlichen Grüßen, Lena', 'Hallo Max, kannst du mir helfen? Viele Grüße, Lena', 'Sehr geehrte Frau Braun, kannst du mir bitte helfen? Mit freundlichen Grüßen, Lena'],
      answer: 2,
      explanation: 'Option 3 opens formally (Sehr geehrte) but uses du. The register must stay the same from the greeting to the closing.',
    },
    {
      type: 'translate',
      id: 'a2-31b-semi-formal-email-ex12',
      prompt: 'Translate the formal closing: "Kind regards" (the standard German formula)',
      answer: ['Mit freundlichen Grüßen', 'Mit freundlichen Grüßen.'],
      hint: 'der Gruß, die Grüße = greeting(s); freundlich = friendly',
      explanation: 'Mit freundlichen Grüßen is the standard formal closing. Grüßen is Dative plural after mit, and the adjective takes -en.',
    },
  ],
};

export default topic;
