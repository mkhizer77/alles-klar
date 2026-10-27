import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-19-futur-1',
  level: 'A2',
  unit: 7,
  order: 19,
  title: 'Future with werden and future with Präsens',
  germanTerm: 'Futur I',
  tags: ['verbs', 'tense', 'future', 'werden', 'word order'],
  summary: 'German usually talks about the future with the present tense plus a time word; the real future tense (werden + infinitive) is for predictions, promises and guesses.',
  explanation: `
### What it is

German has a future tense, **Futur I** (*Futur I*), built with **werden** + infinitive. But here is the surprise: Germans use it much less than English speakers use *will*. Most of the time the **present tense** (*Präsens*) does the job, as long as the context makes clear that you mean the future.

- Morgen **fahre** ich nach Köln. – *Tomorrow I am going to Cologne.* (Präsens)
- Ich **werde** dich morgen **anrufen**. – *I will call you tomorrow.* (Futur I)

Both are correct. The first is more natural in everyday speech.

### Future with Präsens

Use the present tense + a time expression (*morgen, nächste Woche, bald, am Montag, in zwei Jahren*). This is the normal way to talk about plans and fixed arrangements.

- Nächste Woche **beginnt** der Kurs. – *The course starts next week.*
- Am Samstag **haben** wir Besuch. – *We have visitors on Saturday.*

If there is no time word, the present tense means *now*, so add one when you need to be clear.

### Future with werden

**werden** is conjugated and stands in **position 2**. The main verb goes to the **end** of the sentence as an infinitive. This is the same bracket you know from modal verbs.

| | werden |
|---|---|
| ich | werde |
| du | wirst |
| er / sie / es | wird |
| wir | werden |
| ihr | werdet |
| sie / Sie | werden |

- Ich **werde** nächstes Jahr mehr Sport **machen**.
- **Wirst** du mir **helfen**?
- Es **wird** heute Abend **regnen**.

In a subordinate clause (after *dass*, *weil* …), *werden* goes to the very end, after the infinitive:

- Ich glaube, dass es morgen regnen **wird**.

### When to choose werden

Use Futur I when you want to express more than a plan:

| meaning | example |
|---|---|
| **prediction** | Es wird kalt werden. – *It is going to get cold.* |
| **promise / intention** | Ich werde das nie wieder tun. – *I will never do that again.* |
| **guess about now** (often with *wohl*) | Er wird wohl krank sein. – *He is probably ill.* |
| **strong statement / order** | Du wirst jetzt dein Zimmer aufräumen! – *You will tidy your room now!* |

The guess use is important: *Sie wird wohl schon zu Hause sein* is not about the future at all. It means *She is probably at home already.*

### werden has other jobs

Be careful: *werden* is also a normal verb meaning *to become* (*Ich werde müde* – I am getting tired) and later it builds the passive. If *werden* is followed by an **infinitive** at the end, it is the future. If it is followed by an adjective or noun, it means *become*.

### Why it matters

You need the Präsens form to sound natural when you make plans, and you need *werden* to make promises, forecasts and guesses. Knowing the difference also helps you read: a sentence with *wohl* and *werden* is a guess, not a timetable.
`,
  examples: [
    { de: 'Morgen fahre ich nach Hamburg.', en: 'Tomorrow I am going to Hamburg. (Präsens + time word)' },
    { de: 'Ich werde dich morgen anrufen.', en: 'I will call you tomorrow. (promise)' },
    { de: 'Es wird heute Nacht schneien.', en: 'It is going to snow tonight. (prediction)' },
    { de: 'Wir werden nächstes Jahr ein Haus kaufen.', en: 'We will buy a house next year. (intention)' },
    { de: 'Er wird wohl im Büro sein.', en: 'He is probably in the office. (guess about now)' },
    { de: 'Ich hoffe, dass du die Prüfung bestehen wirst.', en: 'I hope you will pass the exam. (werden at the end of the dass-clause)' },
    { de: 'Es wird langsam dunkel.', en: 'It is slowly getting dark. (werden = to become, no infinitive)' },
  ],
  connections: [
    { topicId: 'a1-17-modal-verbs', note: 'werden + infinitive forms the same sentence bracket as a modal verb: conjugated verb second, infinitive at the end.' },
    { topicId: 'a1-30-word-order-midfield', note: 'The sentence bracket (Satzklammer) explains why the infinitive goes last.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'In a dass- or weil-clause, werden moves to the very end, after the infinitive.' },
    { topicId: 'b1-23-werden', note: 'werden has three jobs: future, passive and "to become". This topic covers only the future.' },
    { topicId: 'b1-24-futur-2-probability', note: 'Futur II (wird gemacht haben) extends the "guess" use into the past.' },
  ],
  edgeCases: [
    'Do not translate every English *will* with *werden*. *I will see you tomorrow* is normally *Wir sehen uns morgen*.',
    'The second person is **du wirst**, not *du werdst*. The stem changes: werde – wirst – wird.',
    '*Ich werde Lehrer* means *I am becoming a teacher*. Only *werden* + **infinitive** at the end is the future tense.',
    'With a modal verb the sentence gets two verbs at the end: *Ich werde morgen arbeiten müssen* (the modal comes last).',
    '*werden* + *wohl* usually expresses a **guess about the present**, not the future: *Das wird wohl stimmen* = *That is probably true.*',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex01',
      prompt: 'Ich ___ dich morgen anrufen. (werden)',
      answer: ['werde'],
      explanation: 'ich + werden = ich werde. The infinitive anrufen stays at the end.',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex02',
      prompt: 'Complete: "Du ___ das schaffen!"',
      options: ['werdest', 'wirst', 'wird'],
      answer: 1,
      explanation: 'werden is irregular in the du and er forms: du wirst, er wird.',
    },
    {
      type: 'match',
      id: 'a2-19-futur-1-ex03',
      prompt: 'Match the pronoun with the right form of werden.',
      pairs: [
        ['ich', 'werde'],
        ['du', 'wirst'],
        ['er', 'wird'],
        ['wir', 'werden'],
        ['ihr', 'werdet'],
      ],
      explanation: 'Only du and er/sie/es change the stem to wir-. The rest follow the regular pattern.',
    },
    {
      type: 'order',
      id: 'a2-19-futur-1-ex04',
      prompt: 'Build the sentence: "We will drive to Spain next year."',
      words: ['Jahr', 'werden', 'fahren.', 'nächstes', 'Spanien', 'Wir', 'nach'],
      answer: ['Wir werden nächstes Jahr nach Spanien fahren.', 'Wir werden nach Spanien nächstes Jahr fahren.'],
      explanation: 'werden is in position 2 and the infinitive fahren closes the sentence. Time (nächstes Jahr) normally comes before place (nach Spanien).',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex05',
      prompt: 'Which sentence is the most natural way to say "Tomorrow I am going to Berlin" in everyday German?',
      options: ['Morgen fahre ich nach Berlin.', 'Morgen werde ich nach Berlin fahren werden.', 'Morgen ich werde fahren nach Berlin.'],
      answer: 0,
      explanation: 'A plan with a time word is normally said in the Präsens. Option 2 has werden twice and option 3 breaks the verb-second rule.',
    },
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex06',
      prompt: 'Es ___ heute Abend regnen. (werden)',
      answer: ['wird'],
      explanation: 'es is third person singular: es wird. A weather prediction is a typical use of Futur I.',
    },
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex07',
      prompt: 'Ich glaube, dass er morgen kommen ___. (werden)',
      answer: ['wird'],
      explanation: 'In a dass-clause the conjugated verb goes to the very end, after the infinitive: … kommen wird.',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex08',
      prompt: 'What does "Er wird wohl krank sein." mean?',
      options: ['He will get sick later.', 'He is probably sick (now).', 'He wants to be sick.'],
      answer: 1,
      explanation: 'werden + wohl expresses a guess about the present. It is not a future statement here.',
    },
    {
      type: 'translate',
      id: 'a2-19-futur-1-ex09',
      prompt: 'Translate as a promise: "I will help you." (du form)',
      answer: ['Ich werde dir helfen.'],
      hint: 'helfen takes the Dative: dir',
      explanation: 'A promise uses werden + infinitive. helfen is a Dative verb, so the pronoun is dir.',
    },
    {
      type: 'order',
      id: 'a2-19-futur-1-ex10',
      prompt: 'Build the sentence: "You (plural) will pass the exam."',
      words: ['die', 'bestehen.', 'werdet', 'Ihr', 'Prüfung'],
      answer: ['Ihr werdet die Prüfung bestehen.'],
      explanation: 'ihr + werden = ihr werdet. The infinitive bestehen goes to the end.',
    },
    {
      type: 'mc',
      id: 'a2-19-futur-1-ex11',
      prompt: 'In which sentence does werden mean "to become", not the future?',
      options: ['Ich werde morgen kochen.', 'Sie wird Ärztin.', 'Wir werden das Haus kaufen.'],
      answer: 1,
      explanation: 'Sie wird Ärztin has no infinitive at the end; werden is followed by a noun, so it means "to become": she is becoming a doctor.',
    },
    {
      type: 'fill',
      id: 'a2-19-futur-1-ex12',
      prompt: 'Nächsten Monat ___ ich mehr Sport machen. (werden)',
      answer: ['werde'],
      explanation: 'The sentence starts with a time expression, so the verb werde is in position 2 and the subject ich comes after it.',
    },
  ],
};

export default topic;
