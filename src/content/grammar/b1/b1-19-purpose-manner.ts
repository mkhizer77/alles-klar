import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-19-purpose-manner',
  level: 'B1',
  unit: 7,
  order: 19,
  title: 'Purpose and manner: damit vs um … zu, indem, dadurch dass',
  germanTerm: 'final / modal',
  tags: ['connectors', 'subordinate clauses', 'infinitive', 'purpose'],
  summary: 'damit and um … zu say what something is for (purpose), while indem and dadurch, dass say how it is done (manner); the choice between damit and um … zu depends on whether both parts have the same subject.',
  explanation: `
### Two questions: "what for?" and "how?"

A **purpose clause** (*Finalsatz*) answers *Wozu?* – what for, with what goal. A **clause of manner** (*Modalsatz*) answers *Wie?* – how, by what means. German has a pair of connectors for each, and the pairs work in a similar way: one takes a full clause with a subject, the other takes an infinitive with *zu*.

### Purpose: damit vs um … zu

| Connector | Needs | Example |
|---|---|---|
| **um … zu** + infinitive | **same** subject in both parts; no subject in the um-part | Ich lerne Deutsch, **um** in Deutschland **zu arbeiten**. |
| **damit** + clause | a subject in the damit-clause; subjects can be the **same or different** | Ich lerne Deutsch, **damit** ich in Deutschland arbeiten **kann**. / Die Eltern sparen, **damit** die Kinder studieren **können**. |

The rule of thumb:

- **Different subjects** → you **must** use *damit*. (*Die Eltern* save, *die Kinder* study.)
- **Same subject** → *um … zu* is shorter and more natural, but *damit* is not wrong.

In the *um … zu* part the verb is an **infinitive at the end**, with *zu* right in front of it. With a separable verb, *zu* goes **inside**: *um früh **aufzustehen***. In the *damit* clause the conjugated verb goes to the **end**, as in every subordinate clause.

### Manner: indem and dadurch, dass

| Connector | Meaning | Example |
|---|---|---|
| **indem** + clause | by doing something | Man lernt eine Sprache, **indem** man sie jeden Tag **spricht**. |
| **dadurch, dass** + clause | by the fact that, through doing | Man lernt eine Sprache **dadurch, dass** man sie jeden Tag **spricht**. |

Both describe the **method**. *indem* is the everyday form; *dadurch, dass* is a bit heavier and often sounds formal. English uses *by + -ing* here: *by speaking it every day*. Note that *indem* has nothing to do with time, even though it looks like *in dem*.

### The negative cousins: ohne … zu, anstatt … zu

The same clause-or-infinitive logic applies to two more pairs you met in A2:

| Infinitive (same subject) | Clause (any subject) | Meaning |
|---|---|---|
| **ohne … zu** | **ohne dass** | without (doing) |
| **anstatt … zu** / **statt … zu** | **anstatt dass** | instead of (doing) |

*Er ging, **ohne** sich **zu verabschieden**.* / *Er ging, **ohne dass** wir es **bemerkten**.*

### Why it matters

Purpose and manner clauses let you explain plans and give instructions: why you are doing something (*um … zu*) and how to do it (*indem*). They appear constantly in B1 writing tasks such as giving advice in a forum. The *damit / um … zu* decision is a favourite exam item: check the subjects first, then choose.
`,
  examples: [
    { de: 'Ich gehe ins Fitnessstudio, um fit zu bleiben.', en: 'I go to the gym in order to stay fit. (same subject: um … zu)' },
    { de: 'Ich spreche langsam, damit du mich verstehst.', en: 'I speak slowly so that you understand me. (different subjects: damit)' },
    { de: 'Sie steht früh auf, damit sie den Zug nicht verpasst.', en: 'She gets up early so that she does not miss the train. (same subject, damit also fine)' },
    { de: 'Er verbessert sein Deutsch, indem er viel liest.', en: 'He improves his German by reading a lot.' },
    { de: 'Sie spart Geld dadurch, dass sie zu Fuß geht.', en: 'She saves money by walking.' },
    { de: 'Er ging weg, ohne ein Wort zu sagen.', en: 'He left without saying a word.' },
    { de: 'Anstatt zu lernen, schaut er fern.', en: 'Instead of studying, he watches TV.' },
  ],
  connections: [
    { topicId: 'a2-22-um-zu-ohne-zu', note: 'um … zu, ohne … zu and anstatt … zu were introduced in A2; here they are contrasted with the clause versions.' },
    { topicId: 'a2-21-zu-infinitive', note: 'The position of zu (inside separable verbs) follows the normal zu + infinitive rules.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'damit was introduced there as a subjunction; now you learn when to prefer um … zu.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'damit, indem and dass clauses all put the conjugated verb at the end.' },
    { topicId: 'a1-16-separable-verbs', note: 'Separable verbs take zu between prefix and stem: aufzustehen.' },
  ],
  edgeCases: [
    'With **different subjects** *um … zu* is impossible: not *Ich spreche langsam, um du mich verstehst*, but *damit du mich verstehst*.',
    'Never put a subject in the *um … zu* part: *um ich zu arbeiten* is wrong. The subject of the main clause is understood.',
    '*damit* also exists as a da-compound (*mit + it*): *Was machst du damit?* The purpose meaning only applies when *damit* starts a clause.',
    '*indem* looks like *in dem* but means "by doing". For "while" use *während*.',
    'Modal verbs rarely appear in *um … zu* clauses. *Ich lerne, um die Prüfung bestehen zu können* is possible but heavy; *damit ich die Prüfung bestehen kann* is more natural.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex01',
      prompt: 'Complete: "Ich spare Geld, ___ ich ein Auto kaufen kann."',
      options: ['damit', 'um … zu', 'indem'],
      answer: 0,
      explanation: 'The clause has its own subject (ich) and a conjugated verb at the end (kann), so it is a damit-clause. um … zu would need an infinitive and no subject.',
    },
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex02',
      prompt: 'Complete: "Die Eltern sparen, ___ die Kinder studieren können."',
      options: ['damit', 'um … zu', 'ohne … zu'],
      answer: 0,
      explanation: 'The parents save, the children study: two different subjects. Only damit can join them.',
    },
    {
      type: 'fill',
      id: 'b1-19-purpose-manner-ex03',
      prompt: 'Ich gehe ins Fitnessstudio, um fit ___ bleiben.',
      answer: ['zu'],
      explanation: 'um … zu: the infinitive bleiben stands at the end with zu directly in front of it.',
    },
    {
      type: 'fill',
      id: 'b1-19-purpose-manner-ex04',
      prompt: 'Man lernt eine Sprache am besten, ___ man sie jeden Tag spricht. (by)',
      answer: ['indem'],
      explanation: 'indem answers "how?". It introduces a subordinate clause: the verb spricht goes to the end.',
    },
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex05',
      prompt: 'Which sentence is correct?',
      options: [
        'Ich lerne, um die Prüfung zu bestehen.',
        'Ich lerne, um ich die Prüfung bestehe.',
        'Ich lerne, damit die Prüfung zu bestehen.',
      ],
      answer: 0,
      explanation: 'um … zu takes an infinitive without a subject. damit needs a full clause with a conjugated verb, not zu + infinitive.',
    },
    {
      type: 'order',
      id: 'b1-19-purpose-manner-ex06',
      prompt: 'Build the sentence: "He improves his German by reading a lot."',
      words: ['sein', 'verbessert', 'Er', 'indem', 'Deutsch,', 'liest.', 'viel', 'er'],
      answer: ['Er verbessert sein Deutsch, indem er viel liest.'],
      explanation: 'Main clause first (verb second: verbessert), then the indem-clause with the verb liest at the end.',
    },
    {
      type: 'match',
      id: 'b1-19-purpose-manner-ex07',
      prompt: 'Match each connector with its meaning.',
      pairs: [
        ['damit', 'so that (purpose, clause with subject)'],
        ['um … zu', 'in order to (purpose, same subject)'],
        ['indem', 'by doing (manner)'],
        ['ohne … zu', 'without doing'],
        ['anstatt … zu', 'instead of doing'],
      ],
      explanation: 'damit and um … zu both express purpose; indem expresses method; ohne … zu and anstatt … zu are the negative infinitive constructions.',
    },
    {
      type: 'fill',
      id: 'b1-19-purpose-manner-ex08',
      prompt: 'Sie spart Strom dadurch, ___ sie das Licht ausmacht.',
      answer: ['dass'],
      explanation: 'dadurch, dass is the two-word version of indem. dadurch sits in the main clause, dass opens the subordinate clause.',
    },
    {
      type: 'translate',
      id: 'b1-19-purpose-manner-ex09',
      prompt: 'Translate: "I am learning German in order to work in Germany."',
      answer: ['Ich lerne Deutsch, um in Deutschland zu arbeiten.'],
      hint: 'um … zu; arbeiten = to work',
      explanation: 'Same subject (I learn, I work), so um … zu is the natural choice. The infinitive arbeiten with zu comes last.',
    },
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex10',
      prompt: 'Complete: "Ich gehe früh ins Bett, um morgen früh ___."',
      options: ['aufzustehen', 'zu aufstehen', 'aufstehen zu'],
      answer: 0,
      explanation: 'aufstehen is separable, so zu goes between the prefix and the stem: aufzustehen, written as one word.',
    },
    {
      type: 'order',
      id: 'b1-19-purpose-manner-ex11',
      prompt: 'Build the sentence: "I am driving to Berlin so that my daughter sees her grandma."',
      words: ['nach', 'Ich', 'Berlin,', 'fahre', 'meine', 'damit', 'ihre', 'Tochter', 'sieht.', 'Oma'],
      answer: ['Ich fahre nach Berlin, damit meine Tochter ihre Oma sieht.'],
      explanation: 'Different subjects (ich / meine Tochter) force damit. The verb sieht goes to the end of the damit-clause.',
    },
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex12',
      prompt: 'Which phrase means "without saying a word"?',
      options: ['ohne ein Wort zu sagen', 'anstatt ein Wort zu sagen', 'um ein Wort zu sagen'],
      answer: 0,
      explanation: 'ohne … zu = without doing. anstatt … zu would mean "instead of saying", um … zu would mean "in order to say".',
    },
  ],
};

export default topic;
