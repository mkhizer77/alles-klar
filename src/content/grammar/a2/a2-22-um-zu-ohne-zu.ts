import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-22-um-zu-ohne-zu',
  level: 'A2',
  unit: 8,
  order: 25,
  title: 'um … zu, ohne … zu, anstatt … zu',
  germanTerm: 'Finalsatz',
  tags: ['infinitive', 'zu', 'purpose', 'connectors', 'sentence structure'],
  summary: 'um … zu says why you do something (in order to), ohne … zu says what you do not do at the same time (without …ing), and anstatt … zu says what you do instead (instead of …ing).',
  steps: [
    {
      title: 'Three small words in front of zu',
      text: `
You know *zu* + infinitive. Now put a small word in front of it, and the infinitive gets a **meaning**:

| construction | English |
|---|---|
| **um … zu** + infinitive | in order to (a purpose) |
| **ohne … zu** + infinitive | without …ing |
| **anstatt … zu** / **statt … zu** + infinitive | instead of …ing |

The *um … zu* clause is called a *Finalsatz* (a purpose clause).
`,
      examples: [
        { de: 'Ich lerne Deutsch, um in Berlin zu arbeiten.', en: 'I am learning German in order to work in Berlin. (purpose)' },
        { de: 'Er ging weg, ohne ein Wort zu sagen.', en: 'He left without saying a word.' },
        { de: 'Sie spielt Computer, anstatt zu lernen.', en: 'She plays computer games instead of studying.' },
      ],
    },
    {
      title: 'How the clause is built',
      text: `
All three work the same way:

1. **um / ohne / anstatt** opens the clause, after a **comma**.
2. Everything that belongs to the infinitive (objects, places, times) goes in the middle.
3. **zu + infinitive** closes the clause. With a separable verb, *zu* goes inside: *um einzukaufen*.
`,
      examples: [
        { de: 'Wir sparen Geld, um ein Auto zu kaufen.', en: 'We are saving money to buy a car. (um … ein Auto … zu kaufen)' },
        { de: 'Ich rufe an, um einen Termin zu vereinbaren.', en: 'I am calling to make an appointment.' },
        { de: 'Ich fahre in die Stadt, um einzukaufen.', en: 'I am going into town to do some shopping. (separable: ein-zu-kaufen)' },
      ],
    },
    {
      title: 'um … zu needs the same subject',
      text: `
**um … zu** only works when the **subject of both actions is the same**. Who learns German? I do. Who wants to work in Berlin? I do. So *um … zu* is fine.

If the subjects are different, use **damit** + a full clause with the verb at the end instead.

A good test: ask **Wozu?** (what for?). If the answer is a purpose, you have *um … zu* or *damit*.
`,
      examples: [
        { de: 'Ich spreche langsam, um deutlich zu sein.', en: 'I speak slowly in order to be clear. (ich / ich: um … zu)' },
        { de: 'Ich spreche langsam, damit du mich verstehst.', en: 'I speak slowly so that you understand me. (ich / du: damit)' },
        { de: 'Ich erkläre es noch einmal, damit alle es verstehen.', en: 'I will explain it again so that everyone understands. (different subjects: damit)' },
      ],
    },
    {
      title: 'ohne … zu and anstatt … zu',
      text: `
These two are easier. They also need the same subject, and there is no other rule to remember.

Notice that English uses the *-ing* form (*without saying*, *instead of taking*). German always uses *zu* + infinitive. **anstatt** and **statt** mean the same thing; *statt* is a little shorter and more casual.
`,
      examples: [
        { de: 'Er ging, ohne sich zu verabschieden.', en: 'He left without saying goodbye.' },
        { de: 'Sie geht aus dem Haus, ohne die Tür abzuschließen.', en: 'She leaves the house without locking the door.' },
        { de: 'Wir fahren mit dem Rad, anstatt das Auto zu nehmen.', en: 'We cycle instead of taking the car.' },
        { de: 'Sie sieht fern, statt die Hausaufgaben zu machen.', en: 'She watches TV instead of doing her homework. (statt = anstatt)' },
      ],
    },
    {
      title: 'The clause can come first',
      text: `
You can also start the sentence with the *um*-clause (or *ohne* / *anstatt*). The whole clause then fills **position 1**, so the main clause starts with the **verb** and the subject comes after it: *Um fit zu bleiben, **gehe ich** jeden Tag laufen.*
`,
      examples: [
        { de: 'Um fit zu bleiben, gehe ich jeden Tag laufen.', en: 'To stay fit, I go running every day. (um-clause first, then the verb)' },
        { de: 'Um Geld zu sparen, fahre ich mit dem Bus.', en: 'To save money, I take the bus.' },
        { de: 'Anstatt zu lernen, sieht sie fern.', en: 'Instead of studying, she watches TV.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-21-zu-infinitive', note: 'These are zu-infinitives with um, ohne or anstatt in front; the rules for zu and separable verbs are the same.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'damit is the alternative to um … zu when the subjects are different.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'weil gives a reason (why something happened); um … zu gives a purpose (what for).' },
    { topicId: 'b1-19-purpose-manner', note: 'At B1 you revisit damit vs um … zu together with indem and dadurch, dass.' },
  ],
  edgeCases: [
    '**um … zu** needs the same subject in both parts. With two different subjects use **damit**: *Ich koche, damit die Kinder essen können*.',
    'Do not forget the **um**. *Ich lerne Deutsch, in Berlin zu arbeiten* is not a sentence. The *um* is what gives the clause its purpose meaning.',
    'English *without doing* is German **ohne zu machen**, never with an *-end* form or a bare infinitive.',
    '**anstatt** and **statt** mean the same thing; *statt* is a little shorter and more colloquial.',
    'When the *um … zu* clause comes first, the main clause starts with the **verb**: *Um … zu sparen, **fahre** ich mit dem Bus.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-22-um-zu-ohne-zu-ex01',
      prompt: 'Complete: "Ich lerne Deutsch, ___ in Deutschland zu arbeiten."',
      options: ['um', 'ohne', 'damit'],
      answer: 0,
      explanation: 'The clause gives a purpose (why I learn German) and the subject is the same in both parts, so um … zu.',
    },
    {
      type: 'fill',
      id: 'a2-22-um-zu-ohne-zu-ex02',
      prompt: 'Er verlässt das Haus, ohne die Tür ___. (abschließen)',
      answer: ['abzuschließen'],
      explanation: 'ohne … zu takes the zu-infinitive. abschließen is separable, so zu goes inside: ab-zu-schließen.',
    },
    {
      type: 'mc',
      id: 'a2-22-um-zu-ohne-zu-ex03',
      prompt: 'Complete: "Sie spielt Computerspiele, ___ zu lernen."',
      options: ['um', 'ohne', 'anstatt'],
      answer: 2,
      explanation: 'The sentence contrasts what she does with what she should do instead: anstatt zu lernen = instead of studying.',
    },
    {
      type: 'order',
      id: 'a2-22-um-zu-ohne-zu-ex04',
      prompt: 'Build the sentence: "We are saving money in order to buy a car."',
      words: ['um', 'Wir', 'ein', 'kaufen.', 'sparen', 'zu', 'Auto', 'Geld,'],
      answer: ['Wir sparen Geld, um ein Auto zu kaufen.'],
      explanation: 'Main clause first, then a comma, then um … and zu kaufen at the very end.',
    },
    {
      type: 'mc',
      id: 'a2-22-um-zu-ohne-zu-ex05',
      prompt: 'Which sentence is correct? "I speak slowly so that you understand me."',
      options: ['Ich spreche langsam, um du mich zu verstehen.', 'Ich spreche langsam, damit du mich verstehst.', 'Ich spreche langsam, um mich zu verstehen.'],
      answer: 1,
      explanation: 'The subjects are different (ich / du), so um … zu is impossible. Use damit with a full clause and the verb at the end.',
    },
    {
      type: 'fill',
      id: 'a2-22-um-zu-ohne-zu-ex06',
      prompt: 'Ich rufe im Restaurant an, ___ einen Tisch zu reservieren. (in order to)',
      answer: ['um'],
      explanation: 'The reason for calling is a goal: um einen Tisch zu reservieren.',
    },
    {
      type: 'match',
      id: 'a2-22-um-zu-ohne-zu-ex07',
      prompt: 'Match the connector with its meaning.',
      pairs: [
        ['um … zu', 'in order to'],
        ['ohne … zu', 'without …ing'],
        ['anstatt … zu', 'instead of …ing'],
        ['damit', 'so that (different subjects)'],
      ],
      explanation: 'The first three take zu + infinitive; damit takes a full subordinate clause with the verb at the end.',
    },
    {
      type: 'order',
      id: 'a2-22-um-zu-ohne-zu-ex08',
      prompt: 'Build the sentence starting with the um-clause: "To stay healthy, I eat a lot of vegetables."',
      words: ['viel', 'esse', 'Gemüse.', 'zu', 'ich', 'Um', 'bleiben,', 'gesund'],
      answer: ['Um gesund zu bleiben, esse ich viel Gemüse.'],
      explanation: 'The whole um-clause fills position 1, so the main clause starts with the verb esse and the subject ich comes after it.',
    },
    {
      type: 'fill',
      id: 'a2-22-um-zu-ohne-zu-ex09',
      prompt: 'Sie ging nach Hause, ohne etwas ___. (sagen)',
      answer: ['zu sagen'],
      explanation: 'ohne … zu + infinitive. sagen is not separable, so zu sagen stays two words.',
    },
    {
      type: 'translate',
      id: 'a2-22-um-zu-ohne-zu-ex10',
      prompt: 'Translate: "I am learning German in order to work in Berlin."',
      answer: ['Ich lerne Deutsch, um in Berlin zu arbeiten.'],
      hint: 'arbeiten = to work',
      explanation: 'Same subject in both parts → um … zu. The place in Berlin sits between um and zu arbeiten.',
    },
    {
      type: 'mc',
      id: 'a2-22-um-zu-ohne-zu-ex11',
      prompt: 'Which sentence needs damit instead of um … zu?',
      options: ['Ich gehe früh ins Bett, ___ morgen fit zu sein.', 'Ich kaufe Obst, ___ die Kinder gesund essen.', 'Wir fahren mit dem Zug, ___ Geld zu sparen.'],
      answer: 1,
      explanation: 'In option 2 the subjects are different: ich buy the fruit, die Kinder eat. That needs damit: … damit die Kinder gesund essen.',
    },
    {
      type: 'fill',
      id: 'a2-22-um-zu-ohne-zu-ex12',
      prompt: 'Wir fahren mit dem Fahrrad, ___ das Auto zu nehmen. (instead of)',
      answer: ['anstatt', 'statt'],
      explanation: 'anstatt … zu (or the shorter statt … zu) expresses an alternative: instead of taking the car.',
    },
  ],
};

export default topic;
