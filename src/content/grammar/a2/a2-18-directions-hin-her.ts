import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-18-directions-hin-her',
  level: 'A2',
  unit: 6,
  order: 19,
  title: 'hin and her: away from me, towards me',
  germanTerm: 'hin / her',
  tags: ['adverbs', 'direction', 'hin', 'her', 'separable verbs', 'place'],
  summary: 'hin means movement away from the speaker and her means movement towards the speaker; they combine with prepositions (hinein, herein) and verbs (hinaufgehen) and sit inside wohin, woher and dorthin.',
  steps: [
    {
      title: 'hin = away from me, her = towards me',
      text: `
German has two small words for the **direction** of a movement, seen from the speaker:

- **hin** = away from me (there, that way)
- **her** = towards me (here, this way)

Picture yourself in a room. Someone outside wants to come in: you say *Komm **her**ein!* (towards me). You send someone out: *Geh **hin**aus!* (away from me). English hides this in *come* and *go*.
`,
      examples: [
        { de: 'Komm bitte her!', en: 'Come here, please! (towards the speaker)' },
        { de: 'Komm herein!', en: 'Come in! (towards the speaker)' },
        { de: 'Geh hinaus und hol die Post.', en: 'Go out and get the mail. (away from the speaker)' },
      ],
    },
    {
      title: 'hinein, herein and the other pairs',
      text: `
**hin** and **her** combine with prepositions. The second part tells you *in, out, up, down* or *across*; the first part tells you the direction seen from the speaker.

| away from me | towards me | meaning |
|---|---|---|
| **hinein** | **herein** | in, into |
| **hinaus** | **heraus** | out |
| **hinauf** | **herauf** | up |
| **hinunter** | **herunter** | down |
| **hinüber** | **herüber** | across, over |
`,
      examples: [
        { de: 'Gehen Sie die Treppe hinauf.', en: 'Go up the stairs. (away from the speaker)' },
        { de: 'Komm bitte herunter, das Essen ist fertig!', en: 'Come down please, dinner is ready! (towards the speaker)' },
        { de: 'Er geht ins Haus hinein.', en: 'He goes into the house. (away from the speaker)' },
      ],
    },
    {
      title: 'What you actually hear: rein, raus, rauf',
      text: `
In spoken German both *hin-* and *her-* shrink to **r-**: *rein, raus, rauf, runter, rüber*. *Komm rein!* is what you will hear in real life, and it works in both directions.

That is fine when you speak. In writing, and in an exam, use the full forms *herein, hinaus …*.
`,
      examples: [
        { de: 'Komm rein!', en: 'Come in! (spoken for herein)' },
        { de: 'Geh raus!', en: 'Go out! (spoken for hinaus)' },
        { de: 'Kommst du mit rüber?', en: 'Are you coming over with us? (spoken for hinüber)' },
      ],
    },
    {
      title: 'wohin, woher, dorthin, hierher',
      text: `
*hin* and *her* also sit inside question words and pointing words:

- **wohin?** = where to? – **woher?** = where from?
- **dahin / dorthin** = to there – **hierher** = to here

In speech the question word is often split: *Wo gehst du **hin**?* means the same as *Wohin gehst du?* But *Wo gehst du?* alone is wrong, because *wo* asks for a place, not a direction.
`,
      examples: [
        { de: 'Wohin gehst du?', en: 'Where are you going?' },
        { de: 'Wo kommst du gerade her?', en: 'Where are you coming from right now? (woher, split)' },
        { de: 'Ich fahre morgen dorthin.', en: 'I am driving there tomorrow. (dorthin = to that place)' },
        { de: 'Komm hierher!', en: 'Come over here! (hierher = to here)' },
      ],
    },
    {
      title: 'hin and her with verbs',
      text: `
These words work as **separable prefixes**. In the present tense they go to the **end** of the sentence; in the Perfekt they sit in front of *ge-*: *Sie ist hinaufgegangen*.

Plain *hin* and *her* can join a verb too: **hinfahren** (to drive there), **herkommen** (to come here).
`,
      examples: [
        { de: 'Sie geht die Treppe hinauf.', en: 'She goes up the stairs. (hinaufgehen)' },
        { de: 'Er ist gestern hinübergegangen.', en: 'He went across yesterday. (Perfekt: hinüber + gegangen)' },
        { de: 'Wann fährst du hin?', en: 'When are you driving there? (hinfahren)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-18b-nach-zu-in', note: 'The sister topic: which preposition for "to" (nach, zu or in) once you know the direction.' },
    { topicId: 'a1-16-separable-verbs', note: 'hinein, heraus and friends work as separable prefixes: Sie geht hinein → hineingehen.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'wohin? takes the Accusative after in, auf, an: Er geht in das Haus hinein.' },
    { topicId: 'a2-16-two-way-prepositions-depth', note: 'More practice with movement (Accusative) and location (Dative) after in, an, auf.' },
  ],
  edgeCases: [
    '**hin** or **her** depends on where the **speaker** is, not on who moves. From inside the room you say *Komm herein*; from outside you say *Geh hinein*.',
    'In spoken German *hinein / herein* both become **rein**. That is fine when speaking, but in writing use the full form.',
    'The question is **Wohin gehst du?** or **Wo gehst du hin?** Both are correct; *Wo gehst du?* alone is wrong because it asks for a location, not a direction.',
    'Do not mix up **her** (towards me, movement) and **hier** (here, a place): *Komm her!* but *Ich bin hier.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex01',
      prompt: 'You are inside the room. Someone knocks. You say: "Komm bitte ___!"',
      options: ['hinein', 'herein', 'heraus'],
      answer: 1,
      explanation: 'The person is moving towards you, so her-: herein. hinein would be used if you were outside sending someone in.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex02',
      prompt: 'Komm bitte ___ zu mir! (this way, towards me)',
      answer: ['her'],
      explanation: 'Movement towards the speaker is her. "Komm her!" = come here.',
    },
    {
      type: 'match',
      id: 'a2-18-directions-hin-her-ex03',
      prompt: 'Match each direction word with its meaning.',
      pairs: [
        ['hinein', 'in (away from me)'],
        ['heraus', 'out (towards me)'],
        ['hinauf', 'up (away from me)'],
        ['herunter', 'down (towards me)'],
        ['hinüber', 'across (away from me)'],
      ],
      explanation: 'The first part gives the direction from the speaker (hin- away, her- towards), the second part says in, out, up, down or across.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex04',
      prompt: 'Es ist zu laut hier drinnen. Geh bitte ___! (out, away from the speaker)',
      answer: ['hinaus', 'raus'],
      explanation: 'The speaker is inside and sends someone away, so hin- + aus = hinaus. In speech this is raus.',
    },
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex05',
      prompt: 'Which short spoken form replaces both hinein and herein?',
      options: ['rein', 'raus', 'rüber'],
      answer: 0,
      explanation: 'In speech hin- and her- both shrink to r-: hinein / herein → rein. raus is for hinaus / heraus, rüber for hinüber / herüber.',
    },
    {
      type: 'order',
      id: 'a2-18-directions-hin-her-ex06',
      prompt: 'Build the question: "Where are you going?" (use the split form)',
      words: ['gehst', 'hin?', 'Wo', 'du'],
      answer: ['Wo gehst du hin?'],
      explanation: 'wohin can be split: wo at the start and hin at the end of the sentence. This is very common in speech.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex07',
      prompt: 'Ich weiß nicht, ___ er kommt. (where from)',
      answer: ['woher'],
      explanation: 'her = towards the speaker, so woher asks where someone comes from. wohin would ask where he is going.',
    },
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex08',
      prompt: 'You are at the bottom of the stairs. Your friend is at the top and calls you. Which fits? "Komm ___!"',
      options: ['hinauf', 'herauf', 'hinunter'],
      answer: 1,
      explanation: 'The friend at the top is the speaker. You move up towards them, so her- + auf = herauf (in speech: rauf).',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex09',
      prompt: 'Wir fahren im Sommer nach Italien. Fährst du auch ___? (there)',
      answer: ['hin', 'dahin', 'dorthin'],
      explanation: 'Going to a place away from the speaker is hin. As a separable prefix of hinfahren it stands at the end: Fährst du auch hin? dahin and dorthin also work.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex10',
      prompt: 'Sie ist die Treppe ___. (hinaufgehen, Partizip II)',
      answer: ['hinaufgegangen', 'raufgegangen'],
      explanation: 'hinauf is a separable prefix, so in the Perfekt it stands in front of ge-: hinauf + gegangen = hinaufgegangen. gehen takes sein: Sie ist … hinaufgegangen.',
    },
  ],
};

export default topic;
