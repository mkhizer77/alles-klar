import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-18b-nach-zu-in',
  level: 'A2',
  unit: 6,
  order: 20,
  title: 'Going places: nach, zu or in?',
  germanTerm: 'Richtungsangaben',
  tags: ['prepositions', 'direction', 'nach', 'zu', 'in', 'place'],
  summary: 'German has three words for "to": nach for cities, countries and home, zu for people, places and events, and in for going inside a building or a country with an article.',
  steps: [
    {
      title: 'Three words for "to"',
      text: `
English says *to* for every destination. German picks one of three words by the **kind of place** you are going to:

- **nach** for cities, countries and *home*
- **zu** for people, places and events
- **in** for going **inside** a building, or to a country with an article

The rest of this lesson takes each one in turn.
`,
      examples: [
        { de: 'Wir fahren morgen nach München.', en: 'We are driving to Munich tomorrow. (city → nach)' },
        { de: 'Ich muss heute zum Zahnarzt.', en: 'I have to go to the dentist today. (person → zu)' },
        { de: 'Gehen wir heute Abend ins Kino?', en: 'Shall we go to the cinema tonight? (building → in)' },
      ],
    },
    {
      title: 'nach: cities, countries and home',
      text: `
Use **nach** with names of cities, countries and continents that have **no article**: *nach Berlin, nach Italien, nach Europa*. The name stays as it is; there is no article to change.

*Home* also takes *nach*: **nach Hause** = (going) home.
`,
      examples: [
        { de: 'Ich fliege im Mai nach Spanien.', en: 'I am flying to Spain in May. (country, no article)' },
        { de: 'Nächstes Jahr ziehen wir nach Hamburg.', en: 'Next year we are moving to Hamburg. (city)' },
        { de: 'Ich gehe jetzt nach Hause.', en: 'I am going home now. (nach Hause)' },
      ],
    },
    {
      title: 'zu: people, places and events',
      text: `
Use **zu** when you go to a **person** (*zu Paul, zu meiner Oma, zum Arzt*), to a **place where you do something** (*zur Arbeit, zum Bahnhof, zur Post*) or to an **event** (*zur Party*).

*zu* always takes the **Dative**. Short forms: **zum** = zu dem, **zur** = zu der.
`,
      examples: [
        { de: 'Am Sonntag gehen wir zu meiner Oma.', en: "On Sunday we are going to my grandma's. (person: Dative)" },
        { de: 'Ich fahre jeden Tag zur Arbeit.', en: 'I drive to work every day. (zur = zu der)' },
        { de: 'Kommst du heute Abend zur Party?', en: 'Are you coming to the party tonight? (event)' },
      ],
    },
    {
      title: 'in: going inside',
      text: `
Use **in** when you go **into** a building or room: *ins Kino, in die Schule, ins Restaurant*. Here *in* answers *wohin?*, so it takes the **Accusative**: **ins** = in das.

Countries with an article also take *in*: *in die Schweiz, in die Türkei, in die USA*.

*zur Schule* (as a routine) and *in die Schule* (into the building) are both common in everyday speech.
`,
      examples: [
        { de: 'Wir gehen heute ins Restaurant.', en: 'We are going to the restaurant today. (ins = in das)' },
        { de: 'Sie fliegt im Sommer in die Türkei.', en: 'She is flying to Turkey in summer. (country with an article)' },
        { de: 'Die Kinder gehen in die Schule.', en: 'The children go into the school. (Accusative: die)' },
      ],
    },
    {
      title: 'nach Hause or zu Hause?',
      text: `
This pair confuses everyone. **nach Hause** = going home (movement). **zu Hause** = at home (no movement). Ask yourself: am I on the way, or am I already there?
`,
      examples: [
        { de: 'Ich fahre jetzt nach Hause.', en: 'I am driving home now. (movement)' },
        { de: 'Um acht bin ich zu Hause.', en: 'At eight I am at home. (location)' },
        { de: 'Bleibst du heute zu Hause?', en: 'Are you staying at home today? (location)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-18-directions-hin-her', note: 'The sister topic: hin and her say whether the movement goes away from or towards the speaker.' },
    { topicId: 'a1-25-dative-prepositions', note: 'zu and nach always take the Dative: zum Arzt, zur Post.' },
    { topicId: 'a1-29-two-way-prepositions', note: 'in is a two-way preposition: in die Schule (wohin?) but in der Schule (wo?).' },
    { topicId: 'a2-16-two-way-prepositions-depth', note: 'More practice with movement (Accusative) and location (Dative) after in, an, auf.' },
  ],
  edgeCases: [
    '**nach Hause** (home, movement) vs **zu Hause** (at home, no movement). *Ich gehe nach Hause* – *Ich bin zu Hause*.',
    'Countries with an article take **in**, not *nach*: *in die Schweiz, in die Niederlande, in den Iran*. Countries without an article take *nach*: *nach Frankreich*.',
    '**zu** is used for people, never *nach*: *Ich gehe zu Anna*, not *nach Anna*.',
    '**zum / zur** answers *wohin?* For *wo?* you need *bei* or *in*: *Ich gehe zum Arzt* but *Ich bin beim Arzt*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a2-18b-nach-zu-in-ex01',
      prompt: 'Ich fahre morgen ___ Berlin. (to)',
      answer: ['nach'],
      explanation: 'Cities have no article, so the preposition is nach.',
    },
    {
      type: 'fill',
      id: 'a2-18b-nach-zu-in-ex02',
      prompt: 'Wir gehen heute ___ Arzt. (to the)',
      answer: ['zum'],
      explanation: 'Going to a person uses zu + Dative. zu dem Arzt = zum Arzt.',
    },
    {
      type: 'mc',
      id: 'a2-18b-nach-zu-in-ex03',
      prompt: 'Complete: "Wo bist du?" – "Ich bin ___ Hause."',
      options: ['nach', 'zu', 'in'],
      answer: 1,
      explanation: 'Being at home (no movement) is zu Hause. nach Hause is only for going home.',
    },
    {
      type: 'match',
      id: 'a2-18b-nach-zu-in-ex04',
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
      id: 'a2-18b-nach-zu-in-ex05',
      prompt: 'Es ist spät. Ich gehe jetzt ___ Hause. (home)',
      answer: ['nach'],
      explanation: 'Going home is movement, so nach Hause. zu Hause would mean "at home".',
    },
    {
      type: 'mc',
      id: 'a2-18b-nach-zu-in-ex06',
      prompt: 'Complete: "Sie fliegt nächste Woche ___ Schweiz."',
      options: ['nach', 'in die', 'zu der'],
      answer: 1,
      explanation: 'Switzerland has an article in German (die Schweiz), so you need in + Accusative: in die Schweiz.',
    },
    {
      type: 'mc',
      id: 'a2-18b-nach-zu-in-ex07',
      prompt: 'Complete: "Am Wochenende fahre ich ___ meiner Oma."',
      options: ['zu', 'nach', 'in'],
      answer: 0,
      explanation: 'You are going to a person, so zu + Dative: zu meiner Oma. nach is only for place names and nach Hause.',
    },
    {
      type: 'mc',
      id: 'a2-18b-nach-zu-in-ex08',
      prompt: 'Complete: "Wohin gehst du?" – "___ Supermarkt."',
      options: ['Zum', 'Nach', 'Beim'],
      answer: 0,
      explanation: 'A shop is a place where you do something, so zu + Dative: zum Supermarkt. beim would answer wo?, not wohin?.',
    },
    {
      type: 'fill',
      id: 'a2-18b-nach-zu-in-ex09',
      prompt: 'Um acht gehen die Kinder ___ Schule. (to, zu + der)',
      answer: ['zur'],
      explanation: 'zu + Dative for a place you go to as a routine: zu der Schule = zur Schule. in die Schule would stress walking into the building.',
    },
    {
      type: 'order',
      id: 'a2-18b-nach-zu-in-ex10',
      prompt: 'Build the sentence: "We are flying to Spain in the summer."',
      words: ['Sommer', 'nach', 'Wir', 'fliegen', 'Spanien.', 'im'],
      answer: ['Wir fliegen im Sommer nach Spanien.', 'Im Sommer fliegen wir nach Spanien.'],
      explanation: 'Spanien has no article, so the destination is nach Spanien. Time (im Sommer) normally comes before place.',
    },
    {
      type: 'translate',
      id: 'a2-18b-nach-zu-in-ex11',
      prompt: 'Translate: "We are going to the cinema."',
      answer: ['Wir gehen ins Kino.', 'Wir gehen in das Kino.'],
      hint: 'das Kino = the cinema',
      explanation: 'You go inside the cinema, so in + Accusative: in das Kino = ins Kino.',
    },
  ],
};

export default topic;
