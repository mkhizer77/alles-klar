import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-08b-passive-alternatives',
  level: 'B1',
  unit: 3,
  order: 11,
  title: 'Saying it without the passive: man, lassen, -bar',
  germanTerm: 'Passiversatz',
  tags: ['passive', 'man', 'lassen', 'word formation'],
  summary: 'German often avoids the passive: man + active verb replaces almost any passive, and sich lassen + Infinitiv or an adjective with -bar replace kann … werden.',
  steps: [
    {
      title: 'man: the everyday replacement',
      text: `
German often avoids the passive. **Passiversatz** simply means "something you say instead of the passive". The most common replacement is **man** (one, people) + active verb. It works for almost any passive sentence, with or without a modal verb. In speech, *man* is usually the better choice.
`,
      examples: [
        { de: 'Hier wird Deutsch gesprochen.', en: 'German is spoken here. (passive)' },
        { de: 'Hier spricht man Deutsch.', en: 'People speak German here. (man + active verb)' },
        { de: 'Hier darf nicht geparkt werden.', en: 'Parking is not allowed here. (passive with a modal)' },
        { de: 'Hier darf man nicht parken.', en: 'You may not park here. (man + modal)' },
      ],
    },
    {
      title: 'sich lassen + Infinitiv',
      text: `
**sich lassen + Infinitiv** means *kann … werden* (something can be done). *lassen* is conjugated like a normal verb, **sich** stays even with a plural subject, and the infinitive goes to the end.
`,
      examples: [
        { de: 'Das Problem kann gelöst werden.', en: 'The problem can be solved. (passive)' },
        { de: 'Das Problem lässt sich lösen.', en: 'The problem can be solved. (sich lassen)' },
        { de: 'Die Tür lässt sich nicht öffnen.', en: 'The door cannot be opened.' },
        { de: 'Die Fenster lassen sich nicht öffnen.', en: 'The windows cannot be opened. (plural: lassen sich)' },
      ],
    },
    {
      title: 'Adjectives with -bar',
      text: `
Many verbs form an adjective with **-bar**. It also means *kann … werden*: *lösbar* = can be solved. Use it with **sein**.

| passive | -bar adjective |
|---|---|
| Das kann gemacht werden. | Das ist **machbar**. |
| Das kann gelöst werden. | Das ist **lösbar**. |
| Das kann gelesen werden. | Das ist **lesbar**. |
| Das kann getrunken werden. | Das ist **trinkbar**. |
`,
      examples: [
        { de: 'Diese Aufgabe ist lösbar.', en: 'This task can be solved.' },
        { de: 'Der Text ist gut lesbar.', en: 'The text is easy to read.' },
        { de: 'Das Wasser ist nicht trinkbar.', en: 'The water is not drinkable.' },
      ],
    },
    {
      title: 'Reading only: sein + zu + Infinitiv',
      text: `
In formal notices you will read **sein + zu + Infinitiv**: *Die Aufgaben **sind** bis Freitag **zu erledigen**.* It means *must be done* (sometimes *can be done*). Recognise it when reading. In your own writing say *Die Aufgaben müssen bis Freitag erledigt werden* or *Man muss die Aufgaben bis Freitag erledigen*.
`,
      examples: [
        { de: 'Die Aufgaben sind bis Freitag zu erledigen.', en: 'The tasks must be done by Friday. (sein + zu: must be done)' },
        { de: 'Die Aufgaben müssen bis Freitag erledigt werden.', en: 'The tasks must be done by Friday. (your own version)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'Sibling topic: the Zustandspassiv, sein + Partizip II for a state.' },
    { topicId: 'b1-06-passive-present-past', note: 'The process passive that these alternatives replace.' },
    { topicId: 'a2-25-indefinite-pronouns', note: 'man is the pronoun used for the most common passive alternative.' },
    { topicId: 'b1-21-lassen', note: 'sich lassen + Infinitiv is one of the meanings of lassen covered in full there.' },
    { topicId: 'b1-30b-adjective-suffixes', note: 'The suffix -bar and how it turns verbs into adjectives.' },
  ],
  edgeCases: [
    '**sich lassen** always needs *sich*, even with a plural subject: *Die Fenster lassen **sich** nicht öffnen.*',
    '**man** takes the er-form of the verb: *Hier **spricht** man Deutsch*, *Hier **darf** man nicht parken.*',
    '**-bar** and **sich lassen** only replace *kann … werden* (possibility). *Das Haus wird gebaut* is a plain action: say *Man baut das Haus*, not *Das Haus ist baubar*.',
    'If you read **sein + zu + Infinitiv** (*Die Aufgabe ist zu erledigen*), it usually means *must be done*. Say it with *müssen … werden* or *man muss* yourself.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-08b-passive-alternatives-ex01',
      prompt: 'Hier ___ man Deutsch. (sprechen)',
      answer: ['spricht'],
      explanation: 'man + active verb replaces Hier wird Deutsch gesprochen. man takes the er-form: spricht.',
    },
    {
      type: 'fill',
      id: 'b1-08b-passive-alternatives-ex02',
      prompt: 'Hier ___ man nicht parken. (dürfen)',
      answer: ['darf'],
      explanation: 'man + active modal replaces Hier darf nicht geparkt werden. man takes the er-form: darf.',
    },
    {
      type: 'mc',
      id: 'b1-08b-passive-alternatives-ex03',
      prompt: 'What does "Diese Aufgabe ist lösbar." mean?',
      options: ['This task can be solved.', 'This task must be solved.', 'This task has been solved.'],
      answer: 0,
      explanation: '-bar = kann … werden: lösbar = can be solved.',
    },
    {
      type: 'fill',
      id: 'b1-08b-passive-alternatives-ex04',
      prompt: 'Das Problem lässt ___ leicht lösen.',
      answer: ['sich'],
      explanation: 'The structure is sich lassen + Infinitiv. sich is always needed.',
    },
    {
      type: 'match',
      id: 'b1-08b-passive-alternatives-ex05',
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
      id: 'b1-08b-passive-alternatives-ex06',
      prompt: 'Der Text ist gut ___. (lesen → adjective with -bar)',
      answer: ['lesbar'],
      explanation: 'lesen + -bar = lesbar (readable, can be read).',
    },
    {
      type: 'mc',
      id: 'b1-08b-passive-alternatives-ex07',
      prompt: 'Which sentence means the same as "Die Tür kann nicht geöffnet werden."?',
      options: ['Die Tür lässt sich nicht öffnen.', 'Die Tür ist geöffnet.', 'Die Tür wird nicht geöffnet.'],
      answer: 0,
      explanation: 'sich lassen + Infinitiv = kann … werden. The other options describe a state or a simple process, not possibility.',
    },
    {
      type: 'order',
      id: 'b1-08b-passive-alternatives-ex08',
      prompt: 'Build the sentence: "The windows cannot be opened." (use sich lassen)',
      words: ['öffnen.', 'Fenster', 'sich', 'Die', 'nicht', 'lassen'],
      answer: ['Die Fenster lassen sich nicht öffnen.'],
      explanation: 'sich lassen + Infinitiv = kann nicht … werden. lassen agrees with the plural subject, sich stays, öffnen goes to the end.',
    },
    {
      type: 'mc',
      id: 'b1-08b-passive-alternatives-ex09',
      prompt: 'Say it with man: "Das Formular wird ausgefüllt."',
      options: ['Man füllt das Formular aus.', 'Man wird das Formular ausfüllen.', 'Das Formular füllt man aus werden.'],
      answer: 0,
      explanation: 'man becomes the subject, the verb goes back into the active present (füllt … aus) and the old subject becomes the object.',
    },
    {
      type: 'translate',
      id: 'b1-08b-passive-alternatives-ex10',
      prompt: 'Translate without a passive: "That can be done."',
      answer: ['Das lässt sich machen.', 'Das ist machbar.'],
      hint: 'use sich lassen or an adjective with -bar; machen = to do',
      explanation: 'kann gemacht werden has two natural replacements: Das lässt sich machen or Das ist machbar.',
    },
    {
      type: 'mc',
      id: 'b1-08b-passive-alternatives-ex11',
      prompt: 'What does "Die Aufgaben sind bis Freitag zu erledigen." mean?',
      options: ['The tasks must be done by Friday.', 'The tasks were done by Friday.', 'The tasks are being done on Friday.'],
      answer: 0,
      explanation: 'sein + zu + Infinitiv in a formal notice means must be done. In your own writing say: Die Aufgaben müssen bis Freitag erledigt werden.',
    },
  ],
};

export default topic;
