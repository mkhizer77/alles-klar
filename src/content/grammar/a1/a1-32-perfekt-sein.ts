import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-32-perfekt-sein',
  level: 'A1',
  unit: 7,
  order: 32,
  title: 'The Perfekt with sein',
  germanTerm: 'Perfekt mit sein',
  tags: ['past tense', 'perfekt', 'participle', 'sein', 'movement'],
  summary: 'Verbs of movement from A to B (gehen, fahren, kommen) and of change (aufstehen, einschlafen) build the Perfekt with sein instead of haben: ich bin gegangen.',
  explanation: `
### What it is

Most verbs build the Perfekt with **haben**. A smaller but very common group uses **sein** as the helper verb instead:

- Ich **bin** nach Hause **gegangen**. – *I went home.*
- Wir **sind** nach Italien **gefahren**. – *We drove to Italy.*
- Er **ist** um sieben **aufgestanden**. – *He got up at seven.*

The structure is identical to the *haben* Perfekt: helper verb in position 2, Partizip II at the end. The only new thing is choosing **sein** and conjugating it: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.

### Which verbs take sein?

There are three groups. The first two cover almost everything:

**1. Movement from one place to another** (the subject changes location)

| infinitive | Partizip II | example |
|---|---|---|
| gehen | **gegangen** | Ich bin ins Kino gegangen. |
| kommen | **gekommen** | Wann bist du gekommen? |
| fahren | **gefahren** | Wir sind mit dem Zug gefahren. |
| fliegen | **geflogen** | Sie ist nach London geflogen. |
| laufen | **gelaufen** | Er ist schnell gelaufen. |
| reisen | **gereist** | Sie sind viel gereist. |
| umziehen | **umgezogen** | Wir sind nach Köln umgezogen. |

**2. Change of state** (the subject becomes something different: awake, asleep, older …)

| infinitive | Partizip II | example |
|---|---|---|
| aufstehen | **aufgestanden** | Ich bin früh aufgestanden. |
| einschlafen | **eingeschlafen** | Das Kind ist eingeschlafen. |
| aufwachen | **aufgewacht** | Ich bin um sechs aufgewacht. |
| werden | **geworden** | Er ist Vater geworden. |
| sterben | **gestorben** | Mein Opa ist 2010 gestorben. |
| wachsen | **gewachsen** | Du bist gewachsen! |

**3. Three verbs to simply learn**: **sein** (ist gewesen), **bleiben** (ist geblieben), **passieren** (ist passiert).

- Was **ist passiert**? – *What happened?*
- Wir **sind** zu Hause **geblieben**. – *We stayed at home.*

*Bleiben* is the strange one: staying is the opposite of moving, but it still takes *sein*. Accept it as a fixed fact.

### A test you can use

Ask: **does the subject move from A to B, or change from one state to another?** If yes → *sein*. If the verb has a direct object (*Ich habe das Auto gefahren* – I drove the car), or describes an activity without a change of place or state (*Ich habe geschlafen, gearbeitet, gespielt*), → *haben*.

Compare:
- Ich **bin** gelaufen. (I ran – movement) vs. Ich **habe** Sport gemacht. (activity)
- Ich **bin** eingeschlafen. (I fell asleep – change) vs. Ich **habe** gut geschlafen. (state, no change)

### Why it matters

The *sein* verbs are the verbs you need to tell any simple story: where you went, when you came, how you travelled, when you got up. In an A1 exam task like *Was haben Sie am Wochenende gemacht?*, half the answers use *sein*: *Ich bin ins Kino gegangen, ich bin spät aufgestanden, ich bin zu Hause geblieben.* Using *haben* with these verbs (*ich habe gegangen*) is one of the most noticeable learner errors, so it is worth fixing the list in memory now.
`,
  examples: [
    { de: 'Ich bin gestern ins Kino gegangen.', en: 'I went to the cinema yesterday. (movement: sein)' },
    { de: 'Wann bist du nach Hause gekommen?', en: 'When did you come home? (kommen: sein)' },
    { de: 'Wir sind mit dem Auto nach Wien gefahren.', en: 'We drove to Vienna by car. (fahren: sein)' },
    { de: 'Sie ist heute früh aufgestanden.', en: 'She got up early today. (change of state: sein)' },
    { de: 'Das Baby ist endlich eingeschlafen.', en: 'The baby finally fell asleep. (einschlafen: sein)' },
    { de: 'Am Sonntag sind wir zu Hause geblieben.', en: 'On Sunday we stayed at home. (bleiben: sein, even without movement)' },
    { de: 'Was ist passiert?', en: 'What happened? (passieren: sein)' },
  ],
  connections: [
    { topicId: 'a1-31-perfekt-haben', note: 'Same structure, same participle rules; only the helper verb changes.' },
    { topicId: 'a1-04-sein-haben', note: 'You conjugate sein normally: bin, bist, ist, sind, seid, sind.' },
    { topicId: 'a1-16-separable-verbs', note: 'Many sein verbs are separable: aufstehen → aufgestanden, einschlafen → eingeschlafen.' },
    { topicId: 'a1-33-war-hatte', note: 'For "I was" you normally say ich war rather than ich bin gewesen.' },
  ],
  edgeCases: [
    '**bleiben** takes sein although nothing moves: *Ich **bin** zu Hause geblieben*. Learn it as an exception.',
    'The same verb can switch: *Ich **bin** nach Berlin gefahren* (movement, no object) but *Ich **habe** das Auto gefahren* (direct object → haben).',
    '**schlafen** takes haben (*ich habe geschlafen*), but **einschlafen** takes sein (*ich bin eingeschlafen*), because falling asleep is a change of state.',
    'Activities done in one place take haben even if they involve motion: *Ich **habe** getanzt, Fußball gespielt, geschwommen* (both *bin* and *habe geschwommen* are heard; *bin* is more common when a destination is named).',
    '*Ich bin gewesen* is correct but rare in speech; *ich war* is the normal way to say "I was".',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-32-perfekt-sein-ex01',
      prompt: 'Which kind of verb takes sein in the Perfekt?',
      options: ['verbs with a direct object', 'verbs of movement from A to B or change of state', 'all irregular verbs'],
      answer: 1,
      explanation: 'sein is used for movement to a new place (gehen, fahren) and change of state (aufstehen, einschlafen), plus sein, bleiben and passieren.',
    },
    {
      type: 'fill',
      id: 'a1-32-perfekt-sein-ex02',
      prompt: 'Ich ___ gestern ins Kino gegangen. (sein)',
      answer: ['bin'],
      explanation: 'gehen is a verb of movement, so the helper is sein: ich bin.',
    },
    {
      type: 'fill',
      id: 'a1-32-perfekt-sein-ex03',
      prompt: 'Wir sind nach Hamburg ___. (fahren)',
      answer: ['gefahren'],
      explanation: 'fahren is irregular: Partizip II gefahren, with sein because of the movement to Hamburg.',
    },
    {
      type: 'mc',
      id: 'a1-32-perfekt-sein-ex04',
      prompt: 'Complete: "Er ___ um sechs Uhr aufgestanden."',
      options: ['hat', 'ist', 'bist'],
      answer: 1,
      explanation: 'aufstehen is a change of state (lying → standing), so it takes sein: er ist aufgestanden.',
    },
    {
      type: 'match',
      id: 'a1-32-perfekt-sein-ex05',
      prompt: 'Match each infinitive with its Partizip II.',
      pairs: [
        ['gehen', 'gegangen'],
        ['kommen', 'gekommen'],
        ['fliegen', 'geflogen'],
        ['bleiben', 'geblieben'],
        ['einschlafen', 'eingeschlafen'],
      ],
      explanation: 'All five take sein. Note the vowel changes in gegangen, geflogen and geblieben.',
    },
    {
      type: 'mc',
      id: 'a1-32-perfekt-sein-ex06',
      prompt: 'Which sentence is correct?',
      options: ['Wir haben zu Hause geblieben.', 'Wir sind zu Hause geblieben.', 'Wir sind zu Hause bleiben.'],
      answer: 1,
      explanation: 'bleiben takes sein, even though nobody moves. The participle is geblieben.',
    },
    {
      type: 'mc',
      id: 'a1-32-perfekt-sein-ex07',
      prompt: 'haben or sein? "Ich ___ gestern gut geschlafen."',
      options: ['bin', 'habe'],
      answer: 1,
      explanation: 'schlafen is an activity without movement or change, so it takes haben. Only einschlafen (falling asleep) takes sein.',
    },
    {
      type: 'order',
      id: 'a1-32-perfekt-sein-ex08',
      prompt: 'Build the sentence: "She flew to Berlin yesterday."',
      words: ['Berlin', 'ist', 'nach', 'geflogen.', 'Sie', 'gestern'],
      answer: ['Sie ist gestern nach Berlin geflogen.'],
      explanation: 'ist in position 2, geflogen at the end. Time (gestern) before place (nach Berlin).',
    },
    {
      type: 'fill',
      id: 'a1-32-perfekt-sein-ex09',
      prompt: 'Wann ___ ihr nach Hause gekommen? (sein)',
      answer: ['seid'],
      explanation: 'The subject is ihr, so the form of sein is seid. kommen takes sein because it is movement.',
    },
    {
      type: 'fill',
      id: 'a1-32-perfekt-sein-ex10',
      prompt: 'Was ist ___? (passieren)',
      answer: ['passiert'],
      explanation: 'passieren ends in -ieren, so no ge-: passiert. It always takes sein.',
    },
    {
      type: 'translate',
      id: 'a1-32-perfekt-sein-ex11',
      prompt: 'Translate: "I got up late today."',
      answer: ['Ich bin heute spät aufgestanden.', 'Heute bin ich spät aufgestanden.'],
      hint: 'aufstehen – aufgestanden, spät = late',
      explanation: 'aufstehen is a change of state, so it takes sein. The separable participle is auf-ge-standen.',
    },
    {
      type: 'translate',
      id: 'a1-32-perfekt-sein-ex12',
      prompt: 'Translate: "We went to the cinema."',
      answer: ['Wir sind ins Kino gegangen.'],
      hint: 'gehen – gegangen, ins Kino = to the cinema',
      explanation: 'gehen is movement to a place, so the helper is sind and the participle gegangen goes last.',
    },
  ],
};

export default topic;
