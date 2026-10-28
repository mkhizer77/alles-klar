import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-08-zustandspassiv-alternatives',
  level: 'B1',
  unit: 3,
  order: 8,
  title: 'Zustandspassiv and alternatives (man, lassen, -bar)',
  germanTerm: 'Zustandspassiv, Passiversatz',
  tags: ['passive', 'sein', 'man', 'lassen', 'word formation'],
  summary: 'The Zustandspassiv (sein + Partizip II) describes the state after an action (Die Tür ist geschlossen); man, sich lassen and -bar are ways to say the same thing without a passive.',
  explanation: `
### What it is

Compare these two sentences:

- Die Tür **wird** geschlossen. – *The door is being closed.* (someone is closing it right now)
- Die Tür **ist** geschlossen. – *The door is closed.* (it is closed; the closing is finished)

The first is the **Vorgangspassiv** (process passive) you know. The second is the **Zustandspassiv** (*Zustand* = state): it describes the **result**, the state that exists after the action. The Partizip II works almost like an adjective.

### How the Zustandspassiv works

**sein + Partizip II**. Only two tenses are common:

| | process (werden) | state (sein) |
|---|---|---|
| present | Das Geschäft **wird** geöffnet. | Das Geschäft **ist** geöffnet. |
| past | Das Geschäft **wurde** geöffnet. | Das Geschäft **war** geöffnet. |

Typical state-passive sentences: *Die Rechnung ist bezahlt. Der Tisch ist gedeckt. Das Fenster ist geöffnet. Die Aufgaben sind erledigt.* Words like **schon**, **bereits** (already) and **seit** (since) often signal a state; **gerade** (right now) or **jeden Tag** signal a process.

### Alternatives to the passive (Passiversatz)

German often avoids the passive. *Passiversatz* simply means "something you say instead of the passive". Three common replacements:

**1. man + active verb.** The most common one in speech.

- Hier **wird** Deutsch **gesprochen**. = Hier **spricht man** Deutsch.
- Hier **darf** nicht **geparkt werden**. = Hier **darf man** nicht parken.

**2. sich lassen + Infinitiv** = *kann … werden* (something can be done).

- Das Problem **kann gelöst werden**. = Das Problem **lässt sich** lösen.
- Die Tür **kann nicht geöffnet werden**. = Die Tür **lässt sich** nicht öffnen.

**3. Adjectives with -bar** = *kann … werden*.

| passive | -bar adjective |
|---|---|
| Das kann gemacht werden. | Das ist **machbar**. |
| Das kann gelöst werden. | Das ist **lösbar**. |
| Das kann gelesen werden. | Das ist **lesbar**. |
| Das kann getrunken werden. | Das ist **trinkbar**. |

### You may also see …

In formal notices you will read **sein + zu + Infinitiv**: *Die Aufgaben **sind** bis Freitag **zu erledigen**.* It means *must be done* (sometimes *can be done*). Recognise it; in your own writing say *Die Aufgaben müssen bis Freitag erledigt werden* or *Man muss die Aufgaben bis Freitag erledigen*.

### Why it matters

Knowing the difference between *wird geschlossen* and *ist geschlossen* stops a very common B1 mistake. The alternatives make your German sound natural: a native speaker says *Das lässt sich machen* or *Das ist machbar* far more often than *Das kann gemacht werden*. In the exam, using *man* and *sich lassen* correctly shows that you control the passive rather than just copying it.
`,
  examples: [
    { de: 'Die Tür ist geschlossen.', en: 'The door is closed. (state after the action)' },
    { de: 'Die Tür wird gerade geschlossen.', en: 'The door is being closed right now. (process)' },
    { de: 'Das Geschäft ist seit Montag geöffnet.', en: 'The shop has been open since Monday. (state with seit)' },
    { de: 'Hier spricht man Deutsch.', en: 'German is spoken here. (man instead of the passive)' },
    { de: 'Das Problem lässt sich leicht lösen.', en: 'The problem can easily be solved. (sich lassen = kann … werden)' },
    { de: 'Hier darf man nicht parken.', en: 'Parking is not allowed here. (man + modal instead of darf nicht geparkt werden)' },
    { de: 'Diese Aufgabe ist lösbar.', en: 'This task can be solved. (-bar = kann … werden)' },
  ],
  connections: [
    { topicId: 'b1-06-passive-present-past', note: 'The process passive with werden, which the Zustandspassiv contrasts with.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'ist geschlossen (state) looks like ist geschlossen worden (Perfekt passive) but means something different.' },
    { topicId: 'a2-25-indefinite-pronouns', note: 'man is the pronoun used for the most common passive alternative.' },
    { topicId: 'b1-21-lassen', note: 'sich lassen + Infinitiv is one of the meanings of lassen covered in full there.' },
    { topicId: 'b1-30-suffixes', note: 'The suffix -bar and how it turns verbs into adjectives.' },
  ],
  edgeCases: [
    '**ist geschlossen** (state) and **ist geschlossen worden** (Perfekt passive, process) are different. Without *worden* it is a state.',
    'Words like **gerade** and **jeden Tag** point to a process (*wird*), while **schon**, **bereits** and **seit** point to a state (*ist*).',
    'Not every verb has a sensible Zustandspassiv. *Das Buch ist gelesen* is strange; use *Das Buch ist gelesen worden* or *Ich habe das Buch gelesen*.',
    '**sich lassen** always needs *sich*, even with a plural subject: *Die Fenster lassen **sich** nicht öffnen.*',
    'If you read **sein + zu + Infinitiv** (*Die Aufgabe ist zu erledigen*), it usually means *must be done*. Say it with *müssen … werden* or *man muss* yourself.',
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
      type: 'match',
      id: 'b1-08-zustandspassiv-alternatives-ex04',
      prompt: 'Match each passive sentence with the alternative that means the same.',
      pairs: [
        ['Das kann repariert werden.', 'Das lässt sich reparieren.'],
        ['Das kann gemacht werden.', 'Das ist machbar.'],
        ['Hier wird Deutsch gesprochen.', 'Hier spricht man Deutsch.'],
        ['Hier darf nicht geparkt werden.', 'Hier darf man nicht parken.'],
      ],
      explanation: 'sich lassen and -bar replace kann … werden; man replaces a simple passive, with or without a modal verb.',
    },
    {
      type: 'fill',
      id: 'b1-08-zustandspassiv-alternatives-ex05',
      prompt: 'Das Problem lässt ___ leicht lösen.',
      answer: ['sich'],
      explanation: 'The structure is sich lassen + Infinitiv. sich is always needed.',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex06',
      prompt: 'What does "Diese Aufgabe ist lösbar." mean?',
      options: ['This task can be solved.', 'This task must be solved.', 'This task has been solved.'],
      answer: 0,
      explanation: '-bar = kann … werden: lösbar = can be solved.',
    },
    {
      type: 'order',
      id: 'b1-08-zustandspassiv-alternatives-ex07',
      prompt: 'Build the sentence: "The windows cannot be opened." (use sich lassen)',
      words: ['öffnen.', 'Fenster', 'sich', 'Die', 'nicht', 'lassen'],
      answer: ['Die Fenster lassen sich nicht öffnen.'],
      explanation: 'sich lassen + Infinitiv = kann nicht … werden. lassen agrees with the plural subject (lassen), sich stays, öffnen goes to the end.',
    },
    {
      type: 'fill',
      id: 'b1-08-zustandspassiv-alternatives-ex08',
      prompt: 'Hier ___ man nicht parken. (dürfen)',
      answer: ['darf'],
      explanation: 'man + active modal replaces Hier darf nicht geparkt werden. man takes the er-form: darf.',
    },
    {
      type: 'translate',
      id: 'b1-08-zustandspassiv-alternatives-ex09',
      prompt: 'Translate as a state: "The bill is already paid."',
      answer: ['Die Rechnung ist schon bezahlt.', 'Die Rechnung ist bereits bezahlt.'],
      hint: 'die Rechnung = bill, bezahlen = to pay, schon / bereits = already',
      explanation: 'Zustandspassiv: ist + bezahlt. schon signals that we describe the result, not the process.',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex10',
      prompt: 'Complete: "Das Essen ___ gerade gekocht."',
      options: ['wird', 'ist', 'war'],
      answer: 0,
      explanation: 'gerade (right now) means the cooking is happening, so process passive: wird gekocht.',
    },
    {
      type: 'fill',
      id: 'b1-08-zustandspassiv-alternatives-ex11',
      prompt: 'Der Text ist gut ___. (lesen → adjective with -bar)',
      answer: ['lesbar'],
      explanation: 'lesen + -bar = lesbar (readable, can be read).',
    },
    {
      type: 'mc',
      id: 'b1-08-zustandspassiv-alternatives-ex12',
      prompt: 'Which sentence means the same as "Die Tür kann nicht geöffnet werden."?',
      options: ['Die Tür lässt sich nicht öffnen.', 'Die Tür ist geöffnet.', 'Die Tür wird nicht geöffnet.'],
      answer: 0,
      explanation: 'sich lassen + Infinitiv = kann … werden. The other options describe a state or a simple process, not possibility.',
    },
  ],
};

export default topic;
