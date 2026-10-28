import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-06-passive-present-past',
  level: 'B1',
  unit: 3,
  order: 6,
  title: 'Vorgangspassiv: present and Präteritum',
  germanTerm: 'Passiv',
  tags: ['passive', 'werden', 'verbs', 'tenses'],
  summary: 'The passive (werden + Partizip II) puts the action in focus instead of the doer: Das Haus wird renoviert / wurde renoviert.',
  explanation: `
### What it is

In an **active** sentence the subject does something: *Der Lehrer korrigiert die Tests.* In a **passive** sentence (*Passiv*) the thing that is acted on becomes the subject, and the doer disappears or moves to the background: *Die Tests **werden** korrigiert.* – *The tests are being corrected.*

German calls this the **Vorgangspassiv** (*Vorgang* = process), because it describes something **happening**. You use it when the action matters more than who does it: instructions, news, descriptions of processes, signs.

### How it works

The passive is built with **werden** + **Partizip II** at the end of the clause.

| | present (*Präsens*) | past (*Präteritum*) |
|---|---|---|
| ich | **werde** gefragt | **wurde** gefragt |
| du | **wirst** gefragt | **wurdest** gefragt |
| er / sie / es | **wird** gefragt | **wurde** gefragt |
| wir | **werden** gefragt | **wurden** gefragt |
| ihr | **werdet** gefragt | **wurdet** gefragt |
| sie / Sie | **werden** gefragt | **wurden** gefragt |

- Das Haus **wird** renoviert. – *The house is being renovated.*
- Das Auto **wurde** gestern repariert. – *The car was repaired yesterday.*

### From active to passive

1. The **Accusative object** of the active sentence becomes the **Nominative subject**.
2. The verb becomes **werden + Partizip II**, in the same tense.
3. The old subject is dropped or added with **von**.

| active | passive |
|---|---|
| Der Lehrer korrigiert **die Tests**. | **Die Tests** werden (vom Lehrer) korrigiert. |
| Man baute **die Brücke** 1990. | **Die Brücke** wurde 1990 gebaut. |

Only the Accusative object can become the subject.

### Saying who did it: von and durch

- **von** + Dative for the **person** (or thing) that does the action: *Der Brief wird **von meiner Mutter** geschrieben.*
- **durch** + Accusative for the **means or cause**: *Die Stadt wurde **durch ein Erdbeben** zerstört.*

Most passive sentences do not say who did it at all. If the doer is important, an active sentence is usually better.

### You may also see …

On signs and in notices you will read passive sentences with **no subject**: *Hier **wird** nicht geraucht.* (*No smoking here.*) *Hier **wird** Deutsch gesprochen.* The verb is then always *wird*. You will also read sentences like *Dem Mann **wird** geholfen* (*the man is being helped*): with a Dative verb such as *helfen*, the Dative stays and the verb stays *wird*. Recognise both; for your own sentences, *man* is easier: *Hier raucht man nicht. Man hilft dem Mann.*

### Why it matters

The passive is everywhere in written German: news (*Der Täter wurde festgenommen*), instructions (*Das Formular wird ausgefüllt*), signs (*Hier wird Deutsch gesprochen*). At B1 you must understand it when reading and use it in formal writing. The next topics add modal verbs, the Perfekt and the state passive.
`,
  examples: [
    { de: 'Das Haus wird renoviert.', en: 'The house is being renovated. (present passive)' },
    { de: 'Die Briefe werden jeden Tag geschickt.', en: 'The letters are sent every day.' },
    { de: 'Das Auto wurde gestern repariert.', en: 'The car was repaired yesterday. (Präteritum passive)' },
    { de: 'Die Tests werden vom Lehrer korrigiert.', en: 'The tests are corrected by the teacher. (von + Dative for the doer)' },
    { de: 'Die Stadt wurde durch ein Erdbeben zerstört.', en: 'The city was destroyed by an earthquake. (durch for the cause)' },
    { de: 'Hier wird nicht geraucht.', en: 'No smoking here. (passive with no subject, typical on signs)' },
  ],
  connections: [
    { topicId: 'a1-31-perfekt-haben', note: 'The Partizip II you learned for the Perfekt is the same form used in the passive.' },
    { topicId: 'a2-19-futur-1', note: 'werden + infinitive is the future; werden + Partizip II is the passive. Do not confuse the two.' },
    { topicId: 'a1-20-accusative', note: 'Only the Accusative object of an active sentence can become the passive subject.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'Next: the passive with modal verbs and in the Perfekt (ist … worden).' },
    { topicId: 'b1-23-werden', note: 'An overview of all three jobs of werden: future, passive and change.' },
  ],
  edgeCases: [
    '**werden + Partizip II** = passive; **werden + Infinitiv** = future. *Das Haus wird gebaut* (is being built) vs *Er wird bauen* (he will build).',
    'Only an **Accusative** object becomes the subject. With a Dative verb like *helfen* you will read *Mir wird geholfen*, never *Ich werde geholfen*. If in doubt, use *man*: *Man hilft mir.*',
    'The doer takes **von** + Dative (*vom Lehrer*), the means or cause takes **durch** + Accusative (*durch ein Erdbeben*).',
    'Do not use the passive when you simply mean "is + adjective-like state": *Die Tür ist geschlossen* is the Zustandspassiv (next topics).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-06-passive-present-past-ex01',
      prompt: 'Complete: "Das Haus ___ renoviert." (is being renovated)',
      options: ['wird', 'ist', 'hat'],
      answer: 0,
      explanation: 'The process passive uses werden: wird + Partizip II.',
    },
    {
      type: 'fill',
      id: 'b1-06-passive-present-past-ex02',
      prompt: 'Die Briefe ___ jeden Tag geschickt. (werden, present)',
      answer: ['werden'],
      explanation: 'Plural subject (die Briefe) → werden.',
    },
    {
      type: 'fill',
      id: 'b1-06-passive-present-past-ex03',
      prompt: 'Das Auto ___ gestern repariert. (werden, Präteritum)',
      answer: ['wurde'],
      explanation: 'Past passive: wurde + Partizip II. gestern tells you it is the past.',
    },
    {
      type: 'mc',
      id: 'b1-06-passive-present-past-ex04',
      prompt: 'Which is the correct passive of "Der Lehrer korrigiert die Tests."?',
      options: ['Die Tests werden vom Lehrer korrigiert.', 'Die Tests werden vom Lehrer korrigieren.', 'Die Tests sind vom Lehrer korrigiert.'],
      answer: 0,
      explanation: 'Accusative object → subject, werden + Partizip II (korrigiert), doer with von.',
    },
    {
      type: 'match',
      id: 'b1-06-passive-present-past-ex05',
      prompt: 'Match each active form with its passive.',
      pairs: [
        ['man baut', 'wird gebaut'],
        ['man baute', 'wurde gebaut'],
        ['man kocht', 'wird gekocht'],
        ['man schrieb', 'wurde geschrieben'],
      ],
      explanation: 'Present active → wird + Partizip II; Präteritum active → wurde + Partizip II.',
    },
    {
      type: 'order',
      id: 'b1-06-passive-present-past-ex06',
      prompt: 'Build the sentence: "The flat was sold last week."',
      words: ['letzte', 'verkauft.', 'Die', 'Woche', 'wurde', 'Wohnung'],
      answer: ['Die Wohnung wurde letzte Woche verkauft.'],
      explanation: 'wurde in position two, the time in the middle, Partizip II verkauft at the end.',
    },
    {
      type: 'fill',
      id: 'b1-06-passive-present-past-ex07',
      prompt: 'Der Brief wird ___ meiner Mutter geschrieben. (by)',
      answer: ['von'],
      explanation: 'The person doing the action takes von + Dative (meiner Mutter).',
    },
    {
      type: 'mc',
      id: 'b1-06-passive-present-past-ex08',
      prompt: 'Complete: "Die Stadt wurde ___ ein Erdbeben zerstört."',
      options: ['durch', 'von', 'mit'],
      answer: 0,
      explanation: 'An earthquake is a cause or means, not a person acting: durch + Accusative.',
    },
    {
      type: 'fill',
      id: 'b1-06-passive-present-past-ex09',
      prompt: 'Hier ___ nicht geraucht. (werden)',
      answer: ['wird'],
      explanation: 'A sign like this is a passive with no subject. The verb is then always the er / sie / es form: wird.',
    },
    {
      type: 'translate',
      id: 'b1-06-passive-present-past-ex10',
      prompt: 'Translate: "The bread is baked every morning."',
      answer: ['Das Brot wird jeden Morgen gebacken.', 'Jeden Morgen wird das Brot gebacken.'],
      hint: 'backen (gebacken) = to bake, jeden Morgen = every morning',
      explanation: 'Present passive: wird + gebacken. Partizip II at the end.',
    },
    {
      type: 'mc',
      id: 'b1-06-passive-present-past-ex11',
      prompt: 'Which sentence is in the passive?',
      options: ['Das Haus wird gebaut.', 'Er wird ein Haus bauen.', 'Das Haus ist groß geworden.'],
      answer: 0,
      explanation: 'werden + Partizip II (gebaut) is the passive: the house is being built. werden + Infinitiv (bauen) is the future: he will build.',
    },
    {
      type: 'order',
      id: 'b1-06-passive-present-past-ex12',
      prompt: 'Build the sentence: "The windows were cleaned by the children."',
      words: ['Kindern', 'geputzt.', 'wurden', 'von', 'Fenster', 'den', 'Die'],
      answer: ['Die Fenster wurden von den Kindern geputzt.'],
      explanation: 'Plural past passive: wurden. The doer with von + Dative plural (den Kindern), participle at the end.',
    },
  ],
};

export default topic;
