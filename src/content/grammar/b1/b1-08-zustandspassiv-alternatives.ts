import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-08-zustandspassiv-alternatives',
  level: 'B1',
  unit: 3,
  order: 10,
  title: 'Zustandspassiv: Das Geschäft ist geöffnet',
  germanTerm: 'Zustandspassiv',
  tags: ['passive', 'sein', 'Partizip II', 'tenses'],
  summary: 'The Zustandspassiv (sein + Partizip II) describes the state after an action: Die Tür ist geschlossen. The Vorgangspassiv with werden describes the action itself: Die Tür wird geschlossen.',
  steps: [
    {
      title: 'State or process?',
      text: `
Compare: *Die Tür **wird** geschlossen* – someone is closing it right now. *Die Tür **ist** geschlossen* – it is closed; the closing is finished.

The first is the **Vorgangspassiv** (process passive) you know. The second is the **Zustandspassiv** (*Zustand* = state): it describes the **result**, the state that exists after the action. The Partizip II works almost like an adjective.
`,
      examples: [
        { de: 'Die Tür wird geschlossen.', en: 'The door is being closed. (process: wird)' },
        { de: 'Die Tür ist geschlossen.', en: 'The door is closed. (state: ist)' },
        { de: 'Das Geschäft ist geöffnet.', en: 'The shop is open.' },
      ],
    },
    {
      title: 'sein + Partizip II, present and past',
      text: `
The Zustandspassiv is **sein + Partizip II**. Only two tenses are common: the present with **ist**, the past with **war**.

| | process (werden) | state (sein) |
|---|---|---|
| present | Das Geschäft **wird** geöffnet. | Das Geschäft **ist** geöffnet. |
| past | Das Geschäft **wurde** geöffnet. | Das Geschäft **war** geöffnet. |

Typical sentences: *Die Rechnung ist bezahlt. Der Tisch ist gedeckt. Die Aufgaben sind erledigt.*
`,
      examples: [
        { de: 'Der Tisch ist gedeckt.', en: 'The table is set.' },
        { de: 'Die Aufgaben sind erledigt.', en: 'The tasks are done. (plural: sind)' },
        { de: 'Das Geschäft war gestern geschlossen.', en: 'The shop was closed yesterday. (past state: war)' },
      ],
    },
    {
      title: 'Signal words',
      text: `
Small words often tell you which passive you need. **schon**, **bereits** (already) and **seit** (since) point to a state that exists: use **sein**. **gerade** (right now) and **jeden Tag** (every day) point to an action happening: use **werden**.
`,
      examples: [
        { de: 'Die Rechnung ist schon bezahlt.', en: 'The bill is already paid. (schon: state)' },
        { de: 'Das Geschäft ist seit Montag geöffnet.', en: 'The shop has been open since Monday. (seit: state)' },
        { de: 'Das Essen wird gerade gekocht.', en: 'The food is being cooked right now. (gerade: process)' },
        { de: 'Die Zimmer werden jeden Tag geputzt.', en: 'The rooms are cleaned every day. (jeden Tag: process)' },
      ],
    },
    {
      title: 'ist geschlossen or ist geschlossen worden?',
      text: `
*Die Tür **ist** geschlossen* (state) looks like *Die Tür **ist** geschlossen **worden*** (Perfekt passive). The difference is **worden**: with it, you talk about the action that happened; without it, about the state now.

Not every verb has a sensible state. *Das Buch ist gelesen* sounds strange. Use the Zustandspassiv with verbs that leave a visible result: *öffnen, schließen, bezahlen, erledigen, reparieren, decken*.
`,
      examples: [
        { de: 'Die Tür ist geschlossen.', en: 'The door is closed. (state now)' },
        { de: 'Die Tür ist um acht geschlossen worden.', en: 'The door was closed at eight. (action: worden)' },
        { de: 'Das Auto ist repariert.', en: 'The car is repaired. (result of reparieren)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-06-passive-present-past', note: 'The process passive with werden, which the Zustandspassiv contrasts with.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'ist geschlossen (state) looks like ist geschlossen worden (Perfekt passive) but means something different.' },
    { topicId: 'b1-08b-passive-alternatives', note: 'Sibling topic: how to say it without any passive at all (man, sich lassen, -bar).' },
    { topicId: 'b1-15b-partizip-2-adjectives', note: 'The same Partizip II can stand before a noun as an adjective: die geöffnete Tür.' },
  ],
  edgeCases: [
    '**ist geschlossen** (state) and **ist geschlossen worden** (Perfekt passive, action) are different. Without *worden* it is a state.',
    'Words like **gerade** and **jeden Tag** point to a process (*wird*), while **schon**, **bereits** and **seit** point to a state (*ist*).',
    'The past of the state is **war**, not *wurde*: *Das Geschäft **war** gestern geschlossen* (it was closed), *Das Geschäft **wurde** gestern geschlossen* (someone closed it).',
    'Not every verb has a sensible Zustandspassiv. *Das Buch ist gelesen* is strange; use *Das Buch ist gelesen worden* or *Ich habe das Buch gelesen*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex01',
      prompt: 'Complete to describe a state (the door is closed, nobody is closing it now): "Die Tür ___ geschlossen."',
      options: ['ist', 'wird', 'hat'],
      answer: 0,
      explanation: 'A state after the action = Zustandspassiv = sein + Partizip II.',
    },
    {
      type: 'fill',
      id: 'b1-08-zustandspassiv-alternatives-ex02',
      prompt: 'Das Geschäft ___ seit Montag geöffnet. (sein)',
      answer: ['ist'],
      explanation: 'seit Montag describes a state that continues, so Zustandspassiv: ist geöffnet.',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex03',
      prompt: 'Which sentence describes a process (something happening)?',
      options: ['Der Tisch wird gedeckt.', 'Der Tisch ist gedeckt.'],
      answer: 0,
      explanation: 'werden = process (the table is being set). sein = state (the table is set).',
    },
    {
      type: 'fill',
      id: 'b1-08-zustandspassiv-alternatives-ex04',
      prompt: 'Die Aufgaben ___ schon erledigt. (sein)',
      answer: ['sind'],
      explanation: 'schon signals a state, so sein. The subject is plural (die Aufgaben), so sind erledigt.',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex05',
      prompt: 'Complete: "Das Essen ___ gerade gekocht."',
      options: ['wird', 'ist', 'war'],
      answer: 0,
      explanation: 'gerade (right now) means the cooking is happening, so process passive: wird gekocht.',
    },
    {
      type: 'match',
      id: 'b1-08-zustandspassiv-alternatives-ex06',
      prompt: 'Match each sentence with its meaning.',
      pairs: [
        ['Die Tür ist geschlossen.', 'The door is closed now.'],
        ['Die Tür wird geschlossen.', 'Someone is closing the door.'],
        ['Die Tür war geschlossen.', 'The door was closed at that time.'],
        ['Die Tür wurde geschlossen.', 'Someone closed the door.'],
      ],
      explanation: 'ist / war + Partizip II = a state (present or past). wird / wurde + Partizip II = an action (present or past).',
    },
    {
      type: 'fill',
      id: 'b1-08-zustandspassiv-alternatives-ex07',
      prompt: 'Das Geschäft ___ gestern geschlossen. (sein, past: it was closed all day)',
      answer: ['war'],
      explanation: 'A state in the past takes the Präteritum of sein: war geschlossen. wurde geschlossen would mean someone closed it.',
    },
    {
      type: 'translate',
      id: 'b1-08-zustandspassiv-alternatives-ex08',
      prompt: 'Translate as a state: "The bill is already paid."',
      answer: ['Die Rechnung ist schon bezahlt.', 'Die Rechnung ist bereits bezahlt.'],
      hint: 'die Rechnung = bill, bezahlen = to pay, schon / bereits = already',
      explanation: 'Zustandspassiv: ist + bezahlt. schon signals that we describe the result, not the process.',
    },
    {
      type: 'order',
      id: 'b1-08-zustandspassiv-alternatives-ex09',
      prompt: 'Build the sentence: "The windows have been open since yesterday." (state)',
      words: ['geöffnet.', 'Fenster', 'seit', 'Die', 'sind', 'gestern'],
      answer: ['Die Fenster sind seit gestern geöffnet.'],
      explanation: 'A state with seit: sein in position two (sind, plural), the time in the middle, Partizip II at the end.',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex10',
      prompt: 'Which sentence says that someone closed the door (an action), not only that it is closed?',
      options: ['Die Tür ist geschlossen worden.', 'Die Tür ist geschlossen.', 'Die Tür war geschlossen.'],
      answer: 0,
      explanation: 'worden makes it the Perfekt passive: an action happened. Without worden, ist / war geschlossen only describes the state.',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex11',
      prompt: 'Which sentence sounds wrong to a German speaker?',
      options: ['Das Buch ist gelesen.', 'Das Buch ist gelesen worden.', 'Die Rechnung ist bezahlt.'],
      answer: 0,
      explanation: 'lesen leaves no visible state on the book, so the Zustandspassiv is strange. Say Das Buch ist gelesen worden or Ich habe das Buch gelesen.',
    },
  ],
};

export default topic;
