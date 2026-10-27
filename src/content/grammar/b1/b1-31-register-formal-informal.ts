import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-31-register-formal-informal',
  level: 'B1',
  unit: 10,
  order: 31,
  title: 'Formal vs informal register: emails, complaints, applications',
  germanTerm: 'Register, Schreiben B1',
  tags: ['writing', 'register', 'formal', 'emails', 'letters'],
  summary: 'Register is the level of formality you choose: informal German (du, Hallo, Liebe Grüße) for friends, formal German (Sie, Sehr geehrte, Mit freundlichen Grüßen) for offices, complaints and job applications.',
  explanation: `
### What register is

**Register** (*Register*) means how formal your language is. In German the choice is very visible: *du* or *Sie*, *Hallo* or *Sehr geehrte*, *Tschüss* or *Mit freundlichen Grüßen*. Mixing the two – a formal salutation with a chatty ending – is a typical B1 error and costs points in the writing part of the exam, where you must write **one informal and one formal text**.

### Informal vs formal: the key phrases

| Function | Informal (du) | Formal (Sie) |
|---|---|---|
| Salutation (known name) | Hallo Anna, / Liebe Anna, / Lieber Tom, | Sehr geehrte Frau Müller, / Sehr geehrter Herr Schmidt, |
| Salutation (unknown) | Hallo zusammen, | Sehr geehrte Damen und Herren, |
| Opening | Wie geht es dir? / Danke für deine Nachricht. | Vielen Dank für Ihre E-Mail. / Ich schreibe Ihnen, weil … |
| Reason for writing | Ich wollte dich fragen, ob … | Ich möchte mich nach … erkundigen. / Hiermit … |
| Request | Kannst du mir helfen? | Könnten Sie mir bitte helfen? / Ich bitte Sie, … |
| Suggestion | Wollen wir uns treffen? | Ich würde vorschlagen, dass … |
| Closing line | Melde dich bald! / Bis bald! | Ich freue mich auf Ihre Antwort. / Für Rückfragen stehe ich Ihnen gerne zur Verfügung. |
| Sign-off | Liebe Grüße / Viele Grüße / Bis dann | Mit freundlichen Grüßen |

After the salutation there is a **comma**, and the next line starts with a **small letter**: *Sehr geehrte Frau Müller, vielen Dank für …*

### What makes a text formal

1. **Sie, Ihnen, Ihr** – always capitalised.
2. **Konjunktiv II** for politeness: *Könnten Sie …?*, *Ich würde mich freuen, wenn …*, *Wäre es möglich, …?*
3. **Noun style**: *die Lieferung*, *die Bestellung*, *eine Rückmeldung* instead of *dass Sie liefern*.
4. **No slang, no abbreviations, no emojis**: not *echt super*, *krass*, *LG*.
5. **Full sentences** with connectors: *daher, außerdem, allerdings*.

### Two formal text types for B1

**A complaint** (*eine Beschwerde*):

| Step | Phrase |
|---|---|
| Reason | Ich schreibe Ihnen, weil ich mit … nicht zufrieden bin. |
| Problem | Leider musste ich feststellen, dass … |
| Demand | Ich bitte Sie, … / Ich erwarte, dass … |
| Deadline | … bis zum 15. Mai. |
| Closing | Ich hoffe auf eine schnelle Lösung. |

**A job application** (*eine Bewerbung*):

| Step | Phrase |
|---|---|
| Reference | Ich habe Ihre Anzeige auf … gelesen. |
| Application | Hiermit bewerbe ich mich um die Stelle als … |
| Qualifications | Ich habe … Jahre Erfahrung als … / Ich spreche … |
| Motivation | Die Stelle interessiert mich, weil … |
| Closing | Über eine Einladung zu einem Vorstellungsgespräch würde ich mich sehr freuen. |

### Why it matters

In real life, the formal register opens doors: landlords, employers and authorities expect it. In the exam, Schreiben Teil 1 is an informal email to a friend and Teil 2 or 3 a formal message (a complaint or a request). Knowing a fixed set of phrases for each register lets you write the frame automatically and spend your energy on the content.
`,
  examples: [
    { de: 'Hallo Anna, danke für deine Nachricht!', en: 'Hi Anna, thanks for your message! (informal: du, no capital after the comma)' },
    { de: 'Sehr geehrte Damen und Herren, ich schreibe Ihnen, weil …', en: 'Dear Sir or Madam, I am writing to you because … (formal: unknown recipient)' },
    { de: 'Könnten Sie mir bitte die Unterlagen zuschicken?', en: 'Could you please send me the documents? (Konjunktiv II for politeness)' },
    { de: 'Leider musste ich feststellen, dass die Ware beschädigt war.', en: 'Unfortunately I had to find that the goods were damaged. (complaint)' },
    { de: 'Hiermit bewerbe ich mich um die Stelle als Verkäuferin.', en: 'I hereby apply for the position of sales assistant. (application)' },
    { de: 'Über eine Einladung zu einem Vorstellungsgespräch würde ich mich sehr freuen.', en: 'I would be very pleased to be invited to an interview.' },
    { de: 'Für Rückfragen stehe ich Ihnen gerne zur Verfügung.', en: 'I am happy to answer any questions. (formal closing line)' },
    { de: 'Melde dich bald! Liebe Grüße, Tom', en: 'Get in touch soon! Best wishes, Tom (informal sign-off)' },
  ],
  connections: [
    { topicId: 'a1-02-greetings', note: 'The du / Sie choice is the root of the two registers.' },
    { topicId: 'a1-36-writing-short-messages', note: 'The first short emails and notes were written at A1; here the formal frame is completed.' },
    { topicId: 'a2-31-reading-writing-email', note: 'The semi-formal email from A2 is extended into full complaints and applications.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'Könnten Sie, Ich würde mich freuen and Wäre es möglich are the polite Konjunktiv II forms every formal text needs.' },
    { topicId: 'b1-25-noun-verb-combinations', note: 'Formal texts use noun style: zur Verfügung stehen, eine Entscheidung treffen.' },
  ],
  edgeCases: [
    'Never mix registers: *Sehr geehrte Frau Müller, … Liebe Grüße* is wrong. Formal salutation → *Mit freundlichen Grüßen*.',
    '*Sehr geehrte* for a woman, *Sehr geehrter* for a man: the adjective ending changes. *Sehr geehrte Damen und Herren* is plural.',
    'After the salutation comma, continue with a **small** letter unless the word is a noun or *Sie*: *Sehr geehrter Herr Schmidt, vielen Dank …*',
    '*Ihr / Ihre / Ihnen* (formal "your / you") are **always capitalised**. *dein / dir* are written small in the new spelling (capitalising them is also accepted in letters).',
    '*Hochachtungsvoll* is an old-fashioned sign-off that sounds cold today. Use *Mit freundlichen Grüßen*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-31-register-formal-informal-ex01',
      prompt: 'Which salutation is correct for a formal letter when you do not know the name?',
      options: ['Sehr geehrte Damen und Herren,', 'Hallo zusammen,', 'Liebe Leute,'],
      answer: 0,
      explanation: 'Sehr geehrte Damen und Herren is the standard formal salutation for an unknown recipient. The other two are informal.',
    },
    {
      type: 'match',
      id: 'b1-31-register-formal-informal-ex02',
      prompt: 'Match each informal phrase with its formal equivalent.',
      pairs: [
        ['Hallo Anna,', 'Sehr geehrte Frau Müller,'],
        ['Liebe Grüße', 'Mit freundlichen Grüßen'],
        ['Kannst du mir helfen?', 'Könnten Sie mir bitte helfen?'],
        ['Schreib mir bald!', 'Ich freue mich auf Ihre Antwort.'],
        ['Danke!', 'Vielen Dank im Voraus.'],
      ],
      explanation: 'Each informal phrase has a fixed formal partner: Sie instead of du, Konjunktiv II for requests, and longer, more neutral closings.',
    },
    {
      type: 'fill',
      id: 'b1-31-register-formal-informal-ex03',
      prompt: 'Sehr geehrter ___ Schmidt, (addressing a man)',
      answer: ['Herr'],
      explanation: 'For a man: Sehr geehrter Herr + surname. The -er ending on geehrter agrees with Herr (masculine).',
    },
    {
      type: 'fill',
      id: 'b1-31-register-formal-informal-ex04',
      prompt: 'Formal sign-off: Mit freundlichen ___',
      answer: ['Grüßen'],
      explanation: 'Mit freundlichen Grüßen: mit takes the Dative, so Grüße becomes Grüßen (Dative plural adds -n).',
    },
    {
      type: 'mc',
      id: 'b1-31-register-formal-informal-ex05',
      prompt: 'Which sentence fits a formal complaint?',
      options: [
        'Ich möchte mich über die Lieferung beschweren.',
        'Ich bin voll sauer wegen der Lieferung.',
        'Die Lieferung war echt Mist.',
      ],
      answer: 0,
      explanation: 'sich beschweren über is the neutral formal verb. voll sauer and echt Mist are slang and belong in a message to a friend at most.',
    },
    {
      type: 'mc',
      id: 'b1-31-register-formal-informal-ex06',
      prompt: 'Complete the application: "Hiermit ___ ich mich um die Stelle als Verkäufer."',
      options: ['bewerbe', 'bewirbt', 'beworben'],
      answer: 0,
      explanation: 'sich bewerben um: ich bewerbe mich. bewirbt is the er-form, beworben the participle.',
    },
    {
      type: 'order',
      id: 'b1-31-register-formal-informal-ex07',
      prompt: 'Build the closing sentence of an application: "I would be very pleased to be invited to an interview."',
      words: ['eine', 'Über', 'zu', 'Einladung', 'Gespräch', 'einem', 'ich', 'würde', 'sehr', 'mich', 'freuen.'],
      answer: ['Über eine Einladung zu einem Gespräch würde ich mich sehr freuen.'],
      explanation: 'The prepositional phrase Über eine Einladung … fills position 1, so würde comes next, then ich mich sehr, with the infinitive freuen at the end.',
    },
    {
      type: 'mc',
      id: 'b1-31-register-formal-informal-ex08',
      prompt: 'Which phrase is informal?',
      options: ['Ich freue mich auf Ihre Antwort.', 'Melde dich bald!', 'Für Rückfragen stehe ich Ihnen gerne zur Verfügung.'],
      answer: 1,
      explanation: 'Melde dich uses the du-imperative and belongs to the informal register. The other two use Sie / Ihnen.',
    },
    {
      type: 'fill',
      id: 'b1-31-register-formal-informal-ex09',
      prompt: 'Ich ___ Sie, mir das Geld zurückzuerstatten. (to ask, formal)',
      answer: ['bitte'],
      explanation: 'Ich bitte Sie, … + zu-infinitive is the standard formal way to make a demand in a complaint.',
    },
    {
      type: 'translate',
      id: 'b1-31-register-formal-informal-ex10',
      prompt: 'Translate formally: "Could you please send me the information?"',
      answer: [
        'Könnten Sie mir bitte die Informationen schicken?',
        'Könnten Sie mir bitte die Informationen senden?',
        'Könnten Sie mir bitte die Informationen zuschicken?',
        'Könnten Sie mir die Informationen bitte schicken?',
        'Könnten Sie mir die Informationen bitte senden?',
        'Könnten Sie mir die Informationen bitte zuschicken?',
      ],
      hint: 'Könnten Sie …?; die Informationen; schicken / senden = to send',
      explanation: 'Konjunktiv II (Könnten) plus Sie and bitte makes the polite formal request. The infinitive schicken goes to the end.',
    },
    {
      type: 'mc',
      id: 'b1-31-register-formal-informal-ex11',
      prompt: 'Which sign-off fits an email to a friend?',
      options: ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Hochachtungsvoll'],
      answer: 0,
      explanation: 'Liebe Grüße (or Viele Grüße) is informal. Mit freundlichen Grüßen is formal; Hochachtungsvoll is very formal and old-fashioned.',
    },
    {
      type: 'mc',
      id: 'b1-31-register-formal-informal-ex12',
      prompt: 'Complete the complaint: "Leider musste ich ___, dass die Ware beschädigt war."',
      options: ['feststellen', 'finden', 'gucken'],
      answer: 0,
      explanation: 'feststellen (to find, to notice) is the formal verb used in complaints. gucken is colloquial; finden does not fit the structure here.',
    },
  ],
};

export default topic;
