import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-36-writing-short-messages',
  level: 'A1',
  unit: 8,
  order: 36,
  title: 'Writing short messages: emails, forms, notes',
  germanTerm: 'Schreiben A1',
  tags: ['writing', 'email', 'forms', 'fixed phrases', 'exam'],
  summary: 'A short German email, note or form follows a fixed shape: greeting, a few sentences with the key information, closing and name; learn the shape and the set phrases.',
  explanation: `
### What it is

At A1 you are expected to write **short texts**: an informal email to a friend, a note on the fridge, a short reply, and to fill in a **form** (*Formular*) with your personal details. None of this needs new grammar. What you need is the **shape** of each text and a small set of **fixed phrases** (*Redemittel*) that Germans use every time.

### The shape of an informal email

| part | German | notes |
|---|---|---|
| subject line | **Betreff:** Party am Samstag | short, no full sentence |
| greeting | **Liebe** Anna, / **Lieber** Tom, / **Hallo** Tom, | *Liebe* for a woman, *Lieber* for a man; comma after the name |
| first line | **vielen Dank für deine E-Mail.** | starts with a **lowercase** letter, because the comma continues the sentence |
| body | 3–5 short sentences | say why you write, give the information, ask a question |
| closing | **Liebe Grüße** / **Viele Grüße** / **Bis bald** | no comma after the closing |
| name | Max | on its own line |

A full example, line by line:

- *Liebe Anna,*
- *vielen Dank für deine Einladung. Ich komme gern zur Party. Ich bringe einen Salat mit. Wann soll ich kommen?*
- *Liebe Grüße*
- *Max*

### Useful fixed phrases

| purpose | phrase |
|---|---|
| open | *Wie geht es dir? Mir geht es gut.* |
| thank | *Vielen Dank für deine E-Mail / Einladung / Hilfe.* |
| reason for writing | *Ich schreibe dir, denn … / Ich habe eine Frage.* |
| invite | *Hast du am Samstag Zeit? Kommst du mit?* |
| accept / decline | *Ich komme gern. / Leider kann ich nicht kommen, denn …* |
| ask | *Kannst du mir bitte … schicken? Wann treffen wir uns?* |
| close | *Schreib mir bald! / Bis Samstag! / Ich freue mich.* |

### A formal email

For an office, a doctor or a landlord, the frame changes but the idea stays the same:

- Greeting: **Sehr geehrte Damen und Herren,** (unknown person) / **Sehr geehrte Frau Müller,** / **Sehr geehrter Herr Braun,**
- Use **Sie / Ihnen / Ihr** throughout.
- Closing: **Mit freundlichen Grüßen** and your full name.

### A note (eine Notiz)

A note is even shorter: *Hallo Lena, ich bin beim Arzt. Bin um 18 Uhr zurück. Das Essen ist im Kühlschrank. Bis später, Max.* Notes may drop the subject (*Bin um 18 Uhr zurück*), which is fine here and only here.

### Filling in a form

Forms ask for your details with fixed labels. Learn them so you recognise them instantly:

| label | meaning |
|---|---|
| **Vorname / Nachname (Familienname)** | first name / surname |
| **Geburtsdatum / Geburtsort** | date / place of birth |
| **Straße, Hausnummer** | street, house number |
| **Postleitzahl (PLZ), Wohnort** | postcode, town |
| **Land / Staatsangehörigkeit** | country / nationality |
| **Telefonnummer, E-Mail-Adresse** | phone, email |
| **Familienstand** | marital status (ledig, verheiratet) |
| **Datum, Unterschrift** | date, signature |

### Why it matters

Writing is a full part of the A1 exam, and the markers look for three things: the right **greeting and closing**, all the **requested information**, and **short, correct sentences**. The fixed frame carries most of that. In real life the same frame covers a message to a colleague, a reply to a landlord or a text to a new friend.
`,
  examples: [
    { de: 'Liebe Frau Schmidt, vielen Dank für Ihre E-Mail.', en: 'Dear Ms Schmidt, thank you for your email. (Liebe for a woman; lowercase after the comma; formal Ihre)' },
    { de: 'Lieber Tom, wie geht es dir?', en: 'Dear Tom, how are you? (Lieber for a man)' },
    { de: 'Hast du am Samstag Zeit? Wir machen eine Party.', en: 'Are you free on Saturday? We are having a party. (invitation)' },
    { de: 'Leider kann ich nicht kommen, denn ich muss arbeiten.', en: 'Unfortunately I cannot come, because I have to work. (declining with a reason)' },
    { de: 'Kannst du mir bitte die Adresse schicken?', en: 'Can you please send me the address? (polite request)' },
    { de: 'Liebe Grüße, Anna', en: 'Best wishes, Anna (informal closing; usually on two lines)' },
    { de: 'Mit freundlichen Grüßen, Anna Berger', en: 'Kind regards, Anna Berger (formal closing)' },
    { de: 'Vorname: Anna. Nachname: Berger. Wohnort: Köln.', en: 'First name: Anna. Surname: Berger. Town: Cologne. (form fields)' },
  ],
  connections: [
    { topicId: 'a1-02-greetings', note: 'du vs Sie decides every form in the email: dein / Ihr, dir / Ihnen, Liebe / Sehr geehrte.' },
    { topicId: 'a1-34-coordinating-conjunctions', note: 'und, aber and denn join your short sentences without changing word order.' },
    { topicId: 'a1-28-time-prepositions', note: 'am Samstag, um 19 Uhr, von … bis give the key details in invitations.' },
    { topicId: 'a1-17-modal-verbs', note: 'kannst du, ich muss, ich möchte are the modal verbs you need for requests and reasons.' },
    { topicId: 'a2-31-reading-writing-email', note: 'At A2 the same frame grows into a semi-formal email with more detail.' },
  ],
  edgeCases: [
    'After the greeting comma, the next line starts with a **lowercase** letter: *Liebe Anna,* then *vielen Dank …*. Only nouns and *Sie*-forms keep capitals.',
    '**Liebe** + female name, **Lieber** + male name. *Liebe Tom* is a visible mistake in an exam.',
    'There is **no comma** after the closing: *Liebe Grüße* on one line, *Anna* on the next. Writing *Liebe Grüße, Anna* on one line is common in messages but not the formal layout.',
    'Do not mix **du** and **Sie** in one text. If you start with *Sehr geehrte Frau Müller*, every *your* must be *Ihr*, every *you* must be *Sie*.',
    '**Nachname** and **Familienname** mean the same thing (surname). **Vorname** is the first name. Do not swap them on a form.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-36-writing-short-messages-ex01',
      prompt: 'Which greeting is correct for an informal email to your friend Lena?',
      options: ['Lieber Lena,', 'Liebe Lena,', 'Sehr geehrte Lena,'],
      answer: 1,
      explanation: 'Lena is female, so Liebe. Lieber is for a man. Sehr geehrte is formal and does not go with a first name.',
    },
    {
      type: 'mc',
      id: 'a1-36-writing-short-messages-ex02',
      prompt: 'How does the first line after "Hallo Tom," begin?',
      options: ['Vielen Dank für deine E-Mail.', 'vielen Dank für deine E-Mail.', 'VIELEN Dank für deine E-Mail.'],
      answer: 1,
      explanation: 'The comma after the greeting continues the sentence, so the next word starts lowercase: vielen Dank.',
    },
    {
      type: 'fill',
      id: 'a1-36-writing-short-messages-ex03',
      prompt: 'Sehr ___ Frau Müller, (formal greeting to a woman)',
      answer: ['geehrte'],
      explanation: 'The formal greeting is Sehr geehrte Frau … / Sehr geehrter Herr …',
    },
    {
      type: 'match',
      id: 'a1-36-writing-short-messages-ex04',
      prompt: 'Match each phrase with when you use it.',
      pairs: [
        ['Liebe Grüße', 'informal closing'],
        ['Mit freundlichen Grüßen', 'formal closing'],
        ['Sehr geehrte Damen und Herren,', 'formal greeting, unknown person'],
        ['Hallo Max,', 'informal greeting'],
        ['Vielen Dank für deine E-Mail.', 'thanking at the start'],
      ],
      explanation: 'Greetings and closings come in matching pairs: informal with informal, formal with formal.',
    },
    {
      type: 'fill',
      id: 'a1-36-writing-short-messages-ex05',
      prompt: 'Leider kann ich nicht kommen, ___ ich muss am Samstag arbeiten. (because)',
      answer: ['denn'],
      explanation: 'denn gives the reason and keeps the normal word order. This is the standard way to decline politely at A1.',
    },
    {
      type: 'order',
      id: 'a1-36-writing-short-messages-ex06',
      prompt: 'Build the sentence: "Can you please send me the address?"',
      words: ['die', 'mir', 'schicken?', 'Kannst', 'bitte', 'du', 'Adresse'],
      answer: ['Kannst du mir bitte die Adresse schicken?'],
      explanation: 'Modal question: Kannst first, du, then the pronoun mir, bitte, the object, and schicken at the end.',
    },
    {
      type: 'match',
      id: 'a1-36-writing-short-messages-ex07',
      prompt: 'Match each form label with its meaning.',
      pairs: [
        ['Vorname', 'first name'],
        ['Nachname', 'surname'],
        ['Geburtsdatum', 'date of birth'],
        ['Wohnort', 'town / place of residence'],
        ['Unterschrift', 'signature'],
      ],
      explanation: 'These labels appear on nearly every German form. Postleitzahl (postcode) and Staatsangehörigkeit (nationality) are also common.',
    },
    {
      type: 'mc',
      id: 'a1-36-writing-short-messages-ex08',
      prompt: 'Which closing fits an email that starts with "Sehr geehrter Herr Braun,"?',
      options: ['Liebe Grüße', 'Bis bald', 'Mit freundlichen Grüßen'],
      answer: 2,
      explanation: 'A formal greeting needs a formal closing. Liebe Grüße and Bis bald are for friends.',
    },
    {
      type: 'fill',
      id: 'a1-36-writing-short-messages-ex09',
      prompt: 'Hast du am Samstag ___? Wir machen eine Party. (time, i.e. are you free)',
      answer: ['Zeit'],
      explanation: 'Zeit haben = to be free / have time. Hast du … Zeit? is the standard invitation question.',
    },
    {
      type: 'mc',
      id: 'a1-36-writing-short-messages-ex10',
      prompt: 'Which sentence mixes du and Sie incorrectly?',
      options: ['Sehr geehrte Frau Koch, vielen Dank für Ihre E-Mail.', 'Liebe Frau Koch, vielen Dank für deine E-Mail.', 'Hallo Jan, vielen Dank für deine E-Mail.'],
      answer: 1,
      explanation: 'Frau Koch with a surname is normally addressed with Sie, so it must be Ihre E-Mail. deine belongs with first names and du.',
    },
    {
      type: 'order',
      id: 'a1-36-writing-short-messages-ex11',
      prompt: 'Build the sentence: "I am happy to come to the party."',
      words: ['Party.', 'komme', 'Ich', 'zur', 'gern'],
      answer: ['Ich komme gern zur Party.'],
      explanation: 'Ich komme gern is the fixed way to accept an invitation. zur = zu der Party.',
    },
    {
      type: 'translate',
      id: 'a1-36-writing-short-messages-ex12',
      prompt: 'Translate the closing line: "Write to me soon! Best wishes, Anna" (informal)',
      answer: ['Schreib mir bald! Liebe Grüße Anna', 'Schreib mir bald! Liebe Grüße, Anna', 'Schreib mir bald! Viele Grüße Anna', 'Schreib mir bald! Viele Grüße, Anna'],
      hint: 'schreiben = to write, bald = soon',
      explanation: 'Schreib mir bald! is the imperative with the Dative mir. Liebe Grüße or Viele Grüße is the informal closing, followed by the name.',
    },
  ],
};

export default topic;
