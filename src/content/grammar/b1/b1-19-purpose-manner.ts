import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-19-purpose-manner',
  level: 'B1',
  unit: 7,
  order: 27,
  title: 'Purpose: damit vs um … zu',
  germanTerm: 'final',
  tags: ['connectors', 'subordinate clauses', 'infinitive', 'purpose'],
  summary: 'damit and um … zu both say what something is for; use um … zu when both parts have the same subject and damit when the subjects are different.',
  steps: [
    {
      title: 'Saying what something is for',
      text: `
A **purpose clause** (*Finalsatz*) answers *Wozu?* – what for, with what goal. German has two ways to build it: **um … zu** + infinitive (the basic verb form) and **damit** + a full clause. Both mean "in order to / so that".
`,
      examples: [
        { de: 'Ich gehe ins Fitnessstudio, um fit zu bleiben.', en: 'I go to the gym in order to stay fit. (um … zu)' },
        { de: 'Ich spreche langsam, damit du mich verstehst.', en: 'I speak slowly so that you understand me. (damit)' },
      ],
    },
    {
      title: 'um … zu: infinitive, no subject',
      text: `
In the **um … zu** part there is **no subject**: the doer is the same person as in the main clause. The verb is an **infinitive at the end**, with *zu* right in front of it.

With a separable verb, *zu* goes **inside**, between prefix and stem: *um früh **aufzustehen***.
`,
      examples: [
        { de: 'Ich lerne Deutsch, um in Deutschland zu arbeiten.', en: 'I am learning German in order to work in Germany.' },
        { de: 'Sie fährt nach Berlin, um ihre Oma zu besuchen.', en: 'She is going to Berlin to visit her grandma.' },
        { de: 'Ich gehe früh ins Bett, um morgen früh aufzustehen.', en: 'I go to bed early in order to get up early tomorrow. (aufzustehen: zu inside)' },
      ],
    },
    {
      title: 'damit: a full clause with its own subject',
      text: `
**damit** is a subjunction (a word that starts a subordinate clause). The damit-clause has its **own subject**, and the conjugated verb (the verb with its ending) goes to the **end**.

Because it has a subject, *damit* can join two **different** people: the parents save, the children study.
`,
      examples: [
        { de: 'Die Eltern sparen, damit die Kinder studieren können.', en: 'The parents save so that the children can study. (two different subjects)' },
        { de: 'Ich fahre nach Berlin, damit meine Tochter ihre Oma sieht.', en: 'I am driving to Berlin so that my daughter sees her grandma.' },
        { de: 'Sie spricht laut, damit alle sie hören.', en: 'She speaks loudly so that everyone hears her.' },
      ],
    },
    {
      title: 'How to choose: check the subjects',
      text: `
Ask: who does the main action, and who does the goal action?

- **Different subjects** → you **must** use *damit*.
- **Same subject** → *um … zu* is shorter and more natural. *damit* is not wrong here, just heavier.

Check the subjects first, then choose. This is a favourite exam item.
`,
      examples: [
        { de: 'Ich spare Geld, um ein Auto zu kaufen.', en: 'I save money in order to buy a car. (same subject: um … zu)' },
        { de: 'Ich spare Geld, damit ich ein Auto kaufen kann.', en: 'I save money so that I can buy a car. (same subject: damit also fine)' },
        { de: 'Ich spare Geld, damit mein Sohn ein Auto kaufen kann.', en: 'I save money so that my son can buy a car. (different subjects: only damit)' },
      ],
    },
    {
      title: 'Negative cousins: ohne zu, anstatt zu',
      text: `
Two more pairs from A2 follow the same logic. **ohne … zu** means "without doing"; **anstatt … zu** (or *statt … zu*) means "instead of doing". Like *um … zu*, they take an infinitive and no subject.

With a different subject, use the clause forms **ohne dass** and **anstatt dass**.
`,
      examples: [
        { de: 'Er ging weg, ohne ein Wort zu sagen.', en: 'He left without saying a word.' },
        { de: 'Anstatt zu lernen, schaut er fern.', en: 'Instead of studying, he watches TV.' },
        { de: 'Er ging, ohne dass wir es bemerkten.', en: 'He left without us noticing. (different subject: ohne dass)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-22-um-zu-ohne-zu', note: 'um … zu, ohne … zu and anstatt … zu were introduced in A2; here they are contrasted with the clause versions.' },
    { topicId: 'a2-21-zu-infinitive', note: 'The position of zu (inside separable verbs) follows the normal zu + infinitive rules.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'damit was introduced there as a subjunction; now you learn when to prefer um … zu.' },
    { topicId: 'a1-16-separable-verbs', note: 'Separable verbs take zu between prefix and stem: aufzustehen.' },
    { topicId: 'b1-19b-manner-indem', note: 'The sibling topic: indem answers "how?", not "what for?".' },
  ],
  edgeCases: [
    'With **different subjects** *um … zu* is impossible: not *Ich spreche langsam, um du mich verstehst*, but *damit du mich verstehst*.',
    'Never put a subject in the **um … zu** part: *um ich zu arbeiten* is wrong. The subject of the main clause is understood.',
    '**damit** also exists as a da-word (*mit + it*): *Was machst du damit?* The purpose meaning only applies when *damit* starts a clause.',
    'Modal verbs rarely appear in **um … zu** clauses. *Ich lerne, um die Prüfung bestehen zu können* is heavy; *damit ich die Prüfung bestehen kann* is more natural.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex01',
      prompt: 'Complete: "Ich spare Geld, ___ ich ein Auto kaufen kann."',
      options: ['damit', 'um … zu', 'ohne … zu'],
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
      type: 'mc',
      id: 'b1-19-purpose-manner-ex04',
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
      type: 'match',
      id: 'b1-19-purpose-manner-ex05',
      prompt: 'Match each connector with its meaning.',
      pairs: [
        ['damit', 'so that (purpose, clause with subject)'],
        ['um … zu', 'in order to (purpose, same subject)'],
        ['ohne … zu', 'without doing'],
        ['anstatt … zu', 'instead of doing'],
      ],
      explanation: 'damit and um … zu both express purpose; ohne … zu and anstatt … zu are the negative infinitive constructions.',
    },
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex06',
      prompt: 'Complete: "Ich gehe früh ins Bett, um morgen früh ___."',
      options: ['aufzustehen', 'zu aufstehen', 'aufstehen zu'],
      answer: 0,
      explanation: 'aufstehen is separable, so zu goes between the prefix and the stem: aufzustehen, written as one word.',
    },
    {
      type: 'translate',
      id: 'b1-19-purpose-manner-ex07',
      prompt: 'Translate: "I am learning German in order to work in Germany."',
      answer: ['Ich lerne Deutsch, um in Deutschland zu arbeiten.'],
      hint: 'um … zu; arbeiten = to work',
      explanation: 'Same subject (I learn, I work), so um … zu is the natural choice. The infinitive arbeiten with zu comes last.',
    },
    {
      type: 'order',
      id: 'b1-19-purpose-manner-ex08',
      prompt: 'Build the sentence: "I am driving to Berlin so that my daughter sees her grandma."',
      words: ['nach', 'Ich', 'Berlin,', 'fahre', 'meine', 'damit', 'ihre', 'Tochter', 'sieht.', 'Oma'],
      answer: ['Ich fahre nach Berlin, damit meine Tochter ihre Oma sieht.'],
      explanation: 'Different subjects (ich / meine Tochter) force damit. The verb sieht goes to the end of the damit-clause.',
    },
    {
      type: 'mc',
      id: 'b1-19-purpose-manner-ex09',
      prompt: 'Which phrase means "without saying a word"?',
      options: ['ohne ein Wort zu sagen', 'anstatt ein Wort zu sagen', 'um ein Wort zu sagen'],
      answer: 0,
      explanation: 'ohne … zu = without doing. anstatt … zu would mean "instead of saying", um … zu would mean "in order to say".',
    },
    {
      type: 'fill',
      id: 'b1-19-purpose-manner-ex10',
      prompt: '___ zu lernen, schaut er fern. (instead of)',
      answer: ['Anstatt', 'Statt'],
      explanation: 'anstatt … zu (or statt … zu) means "instead of doing". Like um … zu it takes zu + infinitive and no subject: the doer is er in both parts.',
    },
  ],
};

export default topic;
