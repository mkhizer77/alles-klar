import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-18-directions-hin-her',
  level: 'A2',
  unit: 6,
  order: 18,
  title: 'Directions and locations: hin / her, nach / zu / in',
  germanTerm: 'Richtungsangaben',
  tags: ['prepositions', 'direction', 'adverbs', 'hin', 'her', 'place'],
  summary: 'German has special words for "which way": hin (away from the speaker) and her (towards the speaker), and three different prepositions for "to": nach, zu and in.',
  explanation: `
### What it is

To say where you are going, German needs two things: a **direction word** that shows the movement relative to the speaker (*hin* or *her*), and the right **preposition** for "to" (*nach*, *zu* or *in*). English hides both in the word *to*, so these small words cause a lot of mistakes.

### hin and her

- **hin** = away from the speaker (there, that way)
- **her** = towards the speaker (here, this way)

Picture yourself standing in a room. Someone outside asks to come in. You say **Komm herein!** (towards me). If you send someone out, you say **Geh hinaus!** (away from me).

These two words combine with prepositions:

| away from speaker | towards speaker | meaning |
|---|---|---|
| **hinein** | **herein** | in / into |
| **hinaus** | **heraus** | out |
| **hinauf** | **herauf** | up |
| **hinunter** | **herunter** | down |
| **hinüber** | **herüber** | across / over |

In spoken German, both *hin-* and *her-* are usually shortened to **r-**: *rein, raus, rauf, runter, rüber*. *Komm rein!* is what you will actually hear.

*hin* and *her* also appear in question words and pointing words:

- **wohin?** (where to?) – **woher?** (where from?)
- **dorthin / dahin** (to there) – **hierher** (to here)

In speech the question word is often split: *Wo gehst du hin?* = *Wohin gehst du?*

### nach, zu or in?

All three can mean *to*, but they are not interchangeable.

| use | preposition | examples |
|---|---|---|
| cities, countries and continents **without** an article | **nach** | nach Berlin, nach Italien, nach Europa |
| home | **nach Hause** | Ich gehe nach Hause. |
| people | **zu** (+ Dative) | zu meiner Oma, zu Paul, zum Arzt |
| places and institutions where you do something | **zu** (+ Dative) | zur Arbeit, zum Bahnhof, zur Post |
| countries **with** an article | **in** (+ Accusative) | in die Schweiz, in die Türkei, in die USA |
| buildings you go **inside** | **in** (+ Accusative) | ins Kino, in die Schule, ins Restaurant |

Short forms: **zum** = zu dem, **zur** = zu der, **ins** = in das.

The difference between *zu* and *in* is subtle. *Ich gehe zur Schule* means I go to school (as a routine). *Ich gehe in die Schule* means I walk into the school building. In everyday speech both are common.

### Being there: zu Hause vs nach Hause

This pair confuses everyone:

- **nach Hause** = (going) home → movement
- **zu Hause** = at home → location

*Ich fahre nach Hause. Dann bin ich zu Hause.*

### Why it matters

Direction words are a large part of giving and understanding instructions: *Gehen Sie die Treppe hinauf*, *Kommen Sie herein*, *Fahren Sie nach links*. Choosing *nach*, *zu* or *in* correctly is also one of the most frequent corrections learners get at A2, so a few minutes with the table pays off every day.
`,
  examples: [
    { de: 'Komm bitte herein!', en: 'Please come in! (towards the speaker)' },
    { de: 'Geh hinaus und hol die Post.', en: 'Go out and get the mail. (away from the speaker)' },
    { de: 'Wir fahren morgen nach München.', en: 'We are driving to Munich tomorrow. (city → nach)' },
    { de: 'Ich muss heute zum Zahnarzt.', en: 'I have to go to the dentist today. (person → zu)' },
    { de: 'Sie fliegt im Sommer in die Türkei.', en: 'She is flying to Turkey in summer. (country with article → in)' },
    { de: 'Gehen wir heute Abend ins Kino?', en: 'Shall we go to the cinema tonight? (building → ins)' },
    { de: 'Ich gehe jetzt nach Hause. Um acht bin ich zu Hause.', en: 'I am going home now. At eight I will be at home.' },
    { de: 'Wo kommst du gerade her?', en: 'Where are you coming from right now? (woher, split)' },
  ],
  connections: [
    { topicId: 'a1-25-dative-prepositions', note: 'zu and nach always take the Dative: zum Arzt, zur Post.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'in is a two-way preposition: in die Schule (wohin?) but in der Schule (wo?).' },
    { topicId: 'a1-16-separable-verbs', note: 'hinein, heraus and friends often work as separable prefixes: Sie geht hinein → hineingehen.' },
    { topicId: 'a2-16-two-way-prepositions-depth', note: 'More practice with movement (Accusative) and location (Dative) after in, an, auf.' },
  ],
  edgeCases: [
    '**nach Hause** (home, movement) vs **zu Hause** (at home, no movement). *Ich gehe nach Hause* – *Ich bin zu Hause*.',
    'Countries with an article take **in**, not *nach*: *in die Schweiz, in die Niederlande, in den Iran*. Countries without an article take *nach*: *nach Frankreich*.',
    '**zu** is used for people, never *nach*: *Ich gehe zu Anna*, not *nach Anna*.',
    'In spoken German *hinein / herein* both become **rein**. That is fine when speaking, but in writing use the full form.',
    'The question is **Wohin gehst du?** or **Wo gehst du hin?** Both are correct; *Wo gehst du?* alone is wrong because it asks for a location, not a direction.',
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
      prompt: 'Ich fahre morgen ___ Berlin. (to)',
      answer: ['nach'],
      explanation: 'Cities have no article, so the preposition is nach.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex03',
      prompt: 'Wir gehen heute ___ Arzt. (to the)',
      answer: ['zum'],
      explanation: 'Going to a person uses zu + Dative. zu dem Arzt = zum Arzt.',
    },
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex04',
      prompt: 'Complete: "Sie fliegt nächste Woche ___ Schweiz."',
      options: ['nach', 'in die', 'zu der'],
      answer: 1,
      explanation: 'Switzerland has an article in German (die Schweiz), so you need in + Accusative: in die Schweiz.',
    },
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex05',
      prompt: 'Complete: "Wo bist du?" – "Ich bin ___ Hause."',
      options: ['nach', 'zu', 'in'],
      answer: 1,
      explanation: 'Being at home (no movement) is zu Hause. nach Hause is only for going home.',
    },
    {
      type: 'match',
      id: 'a2-18-directions-hin-her-ex06',
      prompt: 'Match the German phrase with its meaning.',
      pairs: [
        ['nach Hause', 'home (going there)'],
        ['zu Hause', 'at home'],
        ['ins Kino', 'to the cinema'],
        ['zum Bahnhof', 'to the station'],
        ['nach Italien', 'to Italy'],
      ],
      explanation: 'nach for countries without article and for nach Hause; zu for places you go to; in(s) for buildings you enter.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex07',
      prompt: 'Es ist zu laut hier drinnen. Geh bitte ___! (out, away from the speaker)',
      answer: ['hinaus', 'raus'],
      explanation: 'The speaker is inside and sends someone away, so hin- + aus = hinaus. In speech this is raus.',
    },
    {
      type: 'order',
      id: 'a2-18-directions-hin-her-ex08',
      prompt: 'Build the question: "Where are you going?" (use the split form)',
      words: ['gehst', 'hin?', 'Wo', 'du'],
      answer: ['Wo gehst du hin?'],
      explanation: 'wohin can be split: wo at the start and hin at the end of the sentence. This is very common in speech.',
    },
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex09',
      prompt: 'Complete: "Wohin gehst du?" – "___ Supermarkt."',
      options: ['Zum', 'Nach', 'Beim'],
      answer: 0,
      explanation: 'A shop is a place where you do something, so zu + Dative: zum Supermarkt. beim would answer wo?, not wohin?.',
    },
    {
      type: 'fill',
      id: 'a2-18-directions-hin-her-ex10',
      prompt: 'Komm bitte ___ zu mir! (this way, towards me)',
      answer: ['her'],
      explanation: 'Movement towards the speaker is her. "Komm her!" = come here.',
    },
    {
      type: 'translate',
      id: 'a2-18-directions-hin-her-ex11',
      prompt: 'Translate: "We are going to the cinema."',
      answer: ['Wir gehen ins Kino.', 'Wir gehen in das Kino.'],
      hint: 'das Kino = the cinema',
      explanation: 'You go inside the cinema, so in + Accusative: in das Kino = ins Kino.',
    },
    {
      type: 'mc',
      id: 'a2-18-directions-hin-her-ex12',
      prompt: 'You are at the bottom of the stairs. Your friend is at the top and calls you. Which fits? "Komm ___!"',
      options: ['hinauf', 'herauf', 'hinunter'],
      answer: 1,
      explanation: 'The friend at the top is the speaker. You move up towards them, so her- + auf = herauf (in speech: rauf).',
    },
  ],
};

export default topic;
