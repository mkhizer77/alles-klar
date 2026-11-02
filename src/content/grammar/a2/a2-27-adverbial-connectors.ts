import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-27-adverbial-connectors',
  level: 'A2',
  unit: 10,
  order: 30,
  title: 'Adverbial connectors: deshalb, trotzdem, dann, also, sonst',
  germanTerm: 'Konnektoren (Position 1)',
  tags: ['connectors', 'word order', 'adverbs', 'verb second', 'text'],
  summary: 'Words like deshalb (therefore), trotzdem (nevertheless), dann (then), also (so) and sonst (otherwise) link two main clauses; they take position 1, so the verb comes right after them.',
  steps: [
    {
      title: 'Connectors link two main clauses',
      text: `
You already know two ways to join sentences. *und, aber, denn* sit in position 0 and change nothing. *weil, dass* send the verb to the end.

**Adverbial connectors** (*Konnektoren*: linking adverbs like *deshalb* and *trotzdem*) are a third group. They join two main clauses, and they **take position 1**. So the verb comes right after them.
`,
      examples: [
        { de: 'Es regnet. Deshalb bleibe ich zu Hause.', en: 'It is raining. That is why I am staying at home. (result)' },
        { de: 'Es regnet, trotzdem gehe ich raus.', en: 'It is raining; nevertheless I am going out. (contrast)' },
      ],
    },
    {
      title: 'The main connectors',
      text: `
Each connector has one job:

| connector | meaning | job |
|---|---|---|
| **deshalb** | therefore | result |
| **trotzdem** | nevertheless | unexpected contrast |
| **dann** | then | time order |
| **also** | so | conclusion |
| **sonst** | otherwise | if not, then |
| **außerdem** | besides | adds a point |

*deswegen, darum* and *daher* mean the same as *deshalb*. *deshalb* is the most common, so use that one.
`,
      examples: [
        { de: 'Ich bin müde. Deshalb gehe ich früh ins Bett.', en: 'I am tired. That is why I am going to bed early. (result)' },
        { de: 'Zuerst frühstücken wir, dann fahren wir los.', en: 'First we have breakfast, then we set off. (time order)' },
        { de: 'Der Zug fällt aus. Also nehmen wir das Auto.', en: 'The train is cancelled. So we take the car. (conclusion)' },
        { de: 'Die Wohnung ist schön. Außerdem ist sie günstig.', en: 'The flat is nice. Besides, it is cheap. (adding a point)' },
      ],
    },
    {
      title: 'Connector, verb, subject',
      text: `
The connector fills **position 1**. The verb stays in position 2, so the **subject moves behind the verb**. This is the same rule as with *gestern* or *morgen* at the start of a sentence.

| position 1 | verb | subject | rest |
|---|---|---|---|
| Deshalb | bleibe | ich | zu Hause. |
| Trotzdem | gehe | ich | raus. |
| Sonst | kommst | du | zu spät. |

The common mistake is *Deshalb ich bleibe …*: the verb must come first.
`,
      examples: [
        { de: 'Deshalb nehmen wir den Bus.', en: 'That is why we are taking the bus. (connector, verb, subject)' },
        { de: 'Trotzdem arbeitet er weiter.', en: 'Nevertheless he keeps working.' },
        { de: 'Dann essen wir zusammen.', en: 'Then we eat together.' },
      ],
    },
    {
      title: 'The connector can move inside',
      text: `
The connector can also stand **inside** the sentence, in the midfield (the part after the verb). Then the subject stays in position 1 and nothing moves.

Both versions are correct. Starting with the connector sounds a little more emphatic.
`,
      examples: [
        { de: 'Ich bleibe deshalb zu Hause.', en: 'That is why I am staying at home. (subject first, connector after the verb)' },
        { de: 'Ich gehe trotzdem zur Party.', en: 'I am going to the party anyway.' },
        { de: 'Wir nehmen also das Auto.', en: 'So we take the car.' },
      ],
    },
    {
      title: 'deshalb or weil? trotzdem or obwohl?',
      text: `
Some connectors have a partner among the subjunctions (*Subjunktionen*: joining words that send the verb to the end). The meaning is the same; only the word order is different.

*weil* introduces the **reason**, *deshalb* introduces the **result**. *obwohl* and *trotzdem* both mark a contrast.
`,
      examples: [
        { de: 'Ich bleibe zu Hause, weil es regnet.', en: 'I am staying at home because it is raining. (weil: reason, verb at the end)' },
        { de: 'Es regnet, deshalb bleibe ich zu Hause.', en: 'It is raining, so I am staying at home. (deshalb: result, verb right after)' },
        { de: 'Obwohl es regnet, gehe ich raus.', en: 'Although it is raining, I am going out. (obwohl: verb at the end)' },
        { de: 'Es regnet, trotzdem gehe ich raus.', en: 'It is raining; nevertheless I am going out. (trotzdem: verb right after)' },
      ],
    },
    {
      title: 'sonst: a warning',
      text: `
**sonst** means *otherwise* or *or else*: if not, then this happens. It is perfect for warnings and small conditions. Like every connector, it takes position 1 and the verb follows it directly.
`,
      examples: [
        { de: 'Beeil dich, sonst verpasst du den Bus!', en: 'Hurry up, otherwise you will miss the bus!' },
        { de: 'Nimm einen Schirm mit, sonst wirst du nass.', en: 'Take an umbrella, otherwise you will get wet.' },
        { de: 'Iss etwas, sonst hast du später Hunger.', en: 'Eat something, or else you will be hungry later.' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-34-coordinating-conjunctions', note: 'und, aber, denn are position 0 and do not change word order; connectors are position 1 and do.' },
    { topicId: 'a1-06-verb-second', note: 'Connectors follow the verb-second rule: connector first, verb second, subject third.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'weil gives the reason with the verb at the end; deshalb gives the result with normal verb-second order.' },
    { topicId: 'a2-28-subjunctions-obwohl-damit', note: 'obwohl is the subordinate-clause partner of trotzdem.' },
    { topicId: 'b1-18-cause-consequence-concession', note: 'At B1 you add dennoch, folglich, sodass and the full system of cause and contrast.' },
  ],
  edgeCases: [
    'After a connector the **verb comes immediately**: *Deshalb ich bleibe …* is wrong. Say *Deshalb bleibe ich …*',
    '**deshalb** and **weil** are not interchangeable. *Weil* starts the clause with the reason (verb at the end); *deshalb* starts the clause with the result.',
    '**trotzdem** (connector) vs **obwohl** (subjunction): *Es regnet, trotzdem gehe ich raus* = *Obwohl es regnet, gehe ich raus.*',
    '**also** means *so / therefore*, not English *also*. English *also* is German *auch*.',
    'You can write a comma or a full stop before *deshalb, trotzdem* etc. Both are fine: *Es regnet, deshalb …* / *Es regnet. Deshalb …*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-27-adverbial-connectors-ex01',
      prompt: 'Which word order is correct after deshalb?',
      options: ['Deshalb ich bleibe zu Hause.', 'Deshalb bleibe ich zu Hause.', 'Deshalb zu Hause bleibe ich.'],
      answer: 1,
      explanation: 'deshalb takes position 1, so the verb bleibe is in position 2 and the subject ich comes after it.',
    },
    {
      type: 'fill',
      id: 'a2-27-adverbial-connectors-ex02',
      prompt: 'Ich habe Kopfschmerzen, ___ nehme ich eine Tablette. (therefore)',
      answer: ['deshalb', 'deswegen', 'darum', 'daher'],
      explanation: 'The headache is the reason, the tablet is the result. deshalb (or deswegen, darum, daher) introduces the result.',
    },
    {
      type: 'fill',
      id: 'a2-27-adverbial-connectors-ex03',
      prompt: 'Es ist kalt, ___ gehen die Kinder ohne Jacke raus. (nevertheless)',
      answer: ['trotzdem'],
      explanation: 'Going out without a jacket is unexpected in the cold. trotzdem marks this contrast.',
    },
    {
      type: 'mc',
      id: 'a2-27-adverbial-connectors-ex04',
      prompt: 'Complete: "Beeil dich, ___ verpasst du den Zug!"',
      options: ['sonst', 'dann', 'also'],
      answer: 0,
      explanation: 'sonst = otherwise: if you do not hurry, you will miss the train.',
    },
    {
      type: 'match',
      id: 'a2-27-adverbial-connectors-ex05',
      prompt: 'Match the connector with its meaning.',
      pairs: [
        ['deshalb', 'therefore'],
        ['trotzdem', 'nevertheless'],
        ['dann', 'then'],
        ['sonst', 'otherwise'],
        ['außerdem', 'besides'],
      ],
      explanation: 'Each connector has one main job: result, contrast, time order, condition, addition.',
    },
    {
      type: 'order',
      id: 'a2-27-adverbial-connectors-ex06',
      prompt: 'Build the sentence: "Therefore we are taking the bus."',
      words: ['den', 'nehmen', 'Deshalb', 'Bus.', 'wir'],
      answer: ['Deshalb nehmen wir den Bus.'],
      explanation: 'Connector, verb, subject, object. The subject wir moves behind the verb.',
    },
    {
      type: 'mc',
      id: 'a2-27-adverbial-connectors-ex07',
      prompt: 'Which sentence means the same as "Ich bleibe zu Hause, weil ich krank bin."?',
      options: ['Ich bin krank, deshalb bleibe ich zu Hause.', 'Ich bin krank, trotzdem bleibe ich zu Hause.', 'Ich bleibe zu Hause, sonst bin ich krank.'],
      answer: 0,
      explanation: 'weil gives the reason; deshalb gives the result of that reason. trotzdem would mean the opposite relationship.',
    },
    {
      type: 'fill',
      id: 'a2-27-adverbial-connectors-ex08',
      prompt: 'Zuerst machen wir die Hausaufgaben, ___ spielen wir Fußball. (then)',
      answer: ['dann', 'danach'],
      explanation: 'dann (or danach) puts events in order. The verb spielen follows it directly.',
    },
    {
      type: 'order',
      id: 'a2-27-adverbial-connectors-ex09',
      prompt: 'Build the sentence with the connector in the midfield: "I am nevertheless going to the party."',
      words: ['zur', 'trotzdem', 'Ich', 'Party.', 'gehe'],
      answer: ['Ich gehe trotzdem zur Party.'],
      explanation: 'trotzdem can sit inside the sentence after the verb (Ich gehe trotzdem …). The subject then stays in position 1. In position 1 it would be: Trotzdem gehe ich zur Party.',
    },
    {
      type: 'mc',
      id: 'a2-27-adverbial-connectors-ex10',
      prompt: 'What does "also" mean in "Der Laden ist zu, also gehen wir nach Hause."?',
      options: ['also / too', 'so / therefore', 'but'],
      answer: 1,
      explanation: 'German also = so / therefore (a conclusion). English "also" is auch in German.',
    },
    {
      type: 'translate',
      id: 'a2-27-adverbial-connectors-ex11',
      prompt: 'Translate: "It is raining. Nevertheless, we are going for a walk."',
      answer: ['Es regnet. Trotzdem machen wir einen Spaziergang.', 'Es regnet. Trotzdem gehen wir spazieren.', 'Es regnet, trotzdem machen wir einen Spaziergang.', 'Es regnet, trotzdem gehen wir spazieren.'],
      hint: 'einen Spaziergang machen / spazieren gehen = to go for a walk',
      explanation: 'trotzdem in position 1, then the verb, then wir. Full stop or comma before trotzdem are both fine.',
    },
    {
      type: 'mc',
      id: 'a2-27-adverbial-connectors-ex12',
      prompt: 'Which sentence is wrong?',
      options: ['Ich bin müde, aber ich arbeite weiter.', 'Ich bin müde, trotzdem ich arbeite weiter.', 'Ich bin müde, trotzdem arbeite ich weiter.'],
      answer: 1,
      explanation: 'aber is position 0 (word order stays normal), but trotzdem is position 1 and needs the verb right after it. Option 2 mixes the two rules.',
    },
  ],
};

export default topic;
