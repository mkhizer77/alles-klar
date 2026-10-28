import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-27-adverbial-connectors',
  level: 'A2',
  unit: 10,
  order: 27,
  title: 'Adverbial connectors: deshalb, trotzdem, dann, also, sonst',
  germanTerm: 'Konnektoren (Position 1)',
  tags: ['connectors', 'word order', 'adverbs', 'verb second', 'text'],
  summary: 'Words like deshalb (therefore), trotzdem (nevertheless), dann (then), also (so) and sonst (otherwise) link two main clauses; they take position 1, so the verb comes right after them.',
  explanation: `
### What it is

To link ideas you already know two kinds of words: **coordinating conjunctions** (*und, aber, denn* – position 0, no change in word order) and **subjunctions** (*weil, dass* – they push the verb to the end). There is a third group: **adverbial connectors** (*Konnektoren*). They are adverbs, so they **count as position 1** and the **verb comes directly after them**.

- Es regnet. **Deshalb bleibe** ich zu Hause. – *It is raining. Therefore I am staying at home.*
- Es regnet, **trotzdem gehe** ich raus. – *It is raining; nevertheless I am going out.*

### The main connectors

| connector | meaning | what it does |
|---|---|---|
| **deshalb / deswegen / darum / daher** | therefore, that is why | gives a result |
| **trotzdem** | nevertheless, even so | gives an unexpected contrast |
| **dann** | then, after that | orders events in time |
| **also** | so, therefore | draws a conclusion |
| **sonst** | otherwise, or else | states what happens if not |
| **außerdem** | besides, moreover | adds a point |
| **danach / davor** | after that / before that | orders events in time |

*deshalb, deswegen, darum* and *daher* all mean the same. Pick one and use it; *deshalb* is the most common.

### Word order: position 1, then the verb

The connector fills **position 1**. The verb stays in **position 2**, and the subject moves **after** the verb, just as after *gestern* or *morgen* at the start of a sentence.

| position 1 | verb (2) | subject | rest |
|---|---|---|---|
| Deshalb | bleibe | ich | zu Hause. |
| Trotzdem | gehe | ich | raus. |
| Dann | essen | wir | zusammen. |
| Sonst | kommst | du | zu spät. |

The connector can also stand **inside** the sentence, in the midfield. Then the subject stays in position 1:

- Ich **bleibe deshalb** zu Hause.
- Ich **gehe trotzdem** raus.

Both versions are correct. Starting with the connector sounds a bit more emphatic.

### Compare the three groups

| type | example | verb position |
|---|---|---|
| conjunction (position 0) | Ich bleibe zu Hause, **denn** es regnet. | normal (2nd) |
| connector (position 1) | Es regnet, **deshalb** bleibe ich zu Hause. | right after the connector |
| subjunction | Ich bleibe zu Hause, **weil** es regnet. | at the end |

*deshalb* and *weil* express the same idea from two directions: *weil* introduces the **reason**, *deshalb* introduces the **result**.

### sonst: a warning

**sonst** is a very useful word for warnings and conditions. It means *if not, then …*:

- Beeil dich, **sonst** verpasst du den Bus! – *Hurry up, otherwise you will miss the bus.*

### Why it matters

These connectors are what turn a list of short sentences into a text. Exam writing tasks at A2 reward *deshalb*, *trotzdem* and *außerdem* explicitly. The only thing you have to remember is the word order: **connector – verb – subject**.
`,
  examples: [
    { de: 'Ich bin müde. Deshalb gehe ich früh ins Bett.', en: 'I am tired. That is why I am going to bed early. (result)' },
    { de: 'Das Wetter ist schlecht, trotzdem machen wir einen Spaziergang.', en: 'The weather is bad; nevertheless we are going for a walk. (contrast)' },
    { de: 'Zuerst frühstücken wir, dann fahren wir los.', en: 'First we have breakfast, then we set off. (time order)' },
    { de: 'Der Zug fällt aus. Also nehmen wir das Auto.', en: 'The train is cancelled. So we take the car. (conclusion)' },
    { de: 'Nimm einen Schirm mit, sonst wirst du nass.', en: 'Take an umbrella, otherwise you will get wet. (warning)' },
    { de: 'Die Wohnung ist schön. Außerdem ist sie günstig.', en: 'The flat is nice. Besides, it is cheap. (adding a point)' },
    { de: 'Ich habe deshalb keine Zeit.', en: 'That is why I have no time. (connector in the midfield, subject first)' },
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
