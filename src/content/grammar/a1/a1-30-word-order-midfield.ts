import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-30-word-order-midfield',
  level: 'A1',
  unit: 6,
  order: 30,
  title: 'Word order of time, manner, place and the sentence bracket',
  germanTerm: 'Satzklammer, TeKaMoLo',
  tags: ['word order', 'syntax', 'sentence bracket', 'adverbs'],
  summary: 'German sentences form a bracket (verb in position 2, second verb part at the end); inside it, extra information follows the order time – cause – manner – place.',
  explanation: `
### What it is

You already know the main rule: in a statement the **conjugated verb** is in **position 2**. But many sentences have a **second verb part** as well: an infinitive after a modal verb, a separable prefix, or (soon) a participle. That second part goes to the **very end**. The two verb parts form a frame around everything else. This frame is the **sentence bracket** (*Satzklammer*).

| position 1 | position 2 (verb) | midfield | end (verb part 2) |
|---|---|---|---|
| Ich | **muss** | heute mit dem Bus zur Arbeit | **fahren**. |
| Er | **steht** | jeden Tag um sechs Uhr | **auf**. |
| Wir | **wollen** | am Wochenende nach Köln | **fahren**. |
| Morgen | **kaufe** | ich im Supermarkt Brot | **ein**. |

Everything between the two verb parts is the **midfield** (*Mittelfeld*). This topic is about what goes where inside the midfield.

### The order in the midfield: Te – Ka – Mo – Lo

When a sentence has several pieces of extra information, German prefers this order:

| short | question | German term | example |
|---|---|---|---|
| **Te** | **when?** (temporal) | wann? | heute, um acht Uhr, am Montag |
| **Ka** | **why?** (causal) | warum? | wegen des Wetters (rare at A1) |
| **Mo** | **how?** (modal) | wie? | mit dem Auto, schnell, gern |
| **Lo** | **where / where to?** (local) | wo? wohin? | zu Hause, nach Berlin, im Park |

Ich fahre **morgen** (Te) **mit dem Zug** (Mo) **nach Hamburg** (Lo).
*I am going to Hamburg by train tomorrow.*

Notice the English is almost the opposite order (place, manner, time). In German, **time first, place last** is the strong tendency, and it is a good rule to follow at A1.

### Time can also go first

A time expression very often takes **position 1**. Then the subject moves to after the verb, and the rest of the midfield keeps its order:

- **Morgen** fahre ich mit dem Zug nach Hamburg.
- **Am Samstag** gehen wir zusammen ins Kino.

Starting with the time is very natural in German and makes your speech sound less like a list of *ich … ich … ich*.

### Objects and pronouns in the midfield

Two more rules keep the midfield tidy:

1. **Pronouns come early**, right after the verb (or after the subject): *Ich rufe **dich** morgen an.*
2. **Dative noun before Accusative noun**: *Ich gebe **dem Kind** heute **das Buch**.* The time word can sit between them or before both: *Ich gebe heute dem Kind das Buch.*

A rough overall order: **verb – pronouns – time – Dative noun – manner – Accusative noun – place – verb part 2**. You do not need to use every slot; just keep the ones you have in this order.

### Where nicht goes

*Nicht* goes **after** time expressions and **before** the thing it negates, usually before manner, place and verb part 2:

- Ich fahre heute **nicht** mit dem Auto.
- Er kommt morgen **nicht** mit.

### Why it matters

Word order is what makes a sentence sound German rather than translated. The bracket is the skeleton: once you hear *Ich muss …*, you wait for the infinitive at the end. The Te-Ka-Mo-Lo order fills the bracket in the way native speakers expect. In the next unit the Perfekt adds a new bracket (*habe … gemacht*), so getting comfortable with the frame now makes the past tense feel familiar instead of strange.
`,
  examples: [
    { de: 'Ich muss heute lange arbeiten.', en: 'I have to work late today. (bracket: muss … arbeiten)' },
    { de: 'Sie steht am Montag um sechs Uhr auf.', en: 'She gets up at six on Monday. (bracket: steht … auf)' },
    { de: 'Wir fahren morgen mit dem Auto nach Berlin.', en: 'We drive to Berlin by car tomorrow. (time – manner – place)' },
    { de: 'Am Sonntag gehe ich gern im Park spazieren.', en: 'On Sunday I like going for a walk in the park. (time in position 1)' },
    { de: 'Ich kaufe heute im Supermarkt Brot ein.', en: 'I am buying bread at the supermarket today. (time – place – object – prefix)' },
    { de: 'Er gibt dir morgen das Geld.', en: 'He will give you the money tomorrow. (pronoun early, then time, then noun object)' },
    { de: 'Ich kann heute leider nicht kommen.', en: 'Unfortunately I cannot come today. (nicht before the final verb part)' },
  ],
  connections: [
    { topicId: 'a1-06-verb-second', note: 'Position 2 for the verb is the base rule; the bracket adds the second verb part at the end.' },
    { topicId: 'a1-16-separable-verbs', note: 'A separable prefix is the most common second part of the bracket at A1.' },
    { topicId: 'a1-17-modal-verbs', note: 'Modal verb + infinitive at the end is the other everyday bracket.' },
    { topicId: 'a1-31-perfekt-haben', note: 'The Perfekt forms a bracket too: haben … Partizip II.' },
    { topicId: 'a2-26-pronoun-order-midfield', note: 'At A2 the exact order of pronouns and nouns in the midfield is treated in full.' },
  ],
  edgeCases: [
    'The second verb part is the **last** word, after place and everything else: *Ich muss morgen nach Berlin **fahren***, not *fahren nach Berlin*.',
    'English puts place before time; German does the reverse. *I go to school every day* = *Ich gehe **jeden Tag** zur Schule*.',
    'When time is in position 1, do **not** keep the subject there too: *Morgen **ich** fahre* is wrong; say *Morgen fahre ich*.',
    'Te-Ka-Mo-Lo is a strong tendency, not a law. Native speakers move pieces for emphasis, but at A1 the standard order is always correct.',
    '**nicht** does not go to the end if there is a second verb part: *Ich kann heute nicht **kommen***, not *Ich kann heute kommen nicht*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-30-word-order-midfield-ex01',
      prompt: 'In "Ich muss heute viel arbeiten.", which two words form the sentence bracket?',
      options: ['Ich … heute', 'muss … arbeiten', 'heute … viel'],
      answer: 1,
      explanation: 'The conjugated modal verb muss is in position 2 and the infinitive arbeiten is at the end. Together they frame the midfield.',
    },
    {
      type: 'mc',
      id: 'a1-30-word-order-midfield-ex02',
      prompt: 'Which order is standard in the German midfield?',
      options: ['place – manner – time', 'time – manner – place', 'manner – time – place'],
      answer: 1,
      explanation: 'Te-Ka-Mo-Lo: time, cause, manner, place. English tends to do the opposite.',
    },
    {
      type: 'order',
      id: 'a1-30-word-order-midfield-ex03',
      prompt: 'Build the sentence: "I am going to Munich by train tomorrow."',
      words: ['Zug', 'nach', 'fahre', 'mit', 'Ich', 'dem', 'München.', 'morgen'],
      answer: ['Ich fahre morgen mit dem Zug nach München.'],
      explanation: 'Time (morgen), then manner (mit dem Zug), then place (nach München).',
    },
    {
      type: 'order',
      id: 'a1-30-word-order-midfield-ex04',
      prompt: 'Build the sentence: "She gets up at seven every day."',
      words: ['sieben', 'um', 'auf.', 'Sie', 'jeden', 'steht', 'Tag', 'Uhr'],
      answer: ['Sie steht jeden Tag um sieben Uhr auf.'],
      explanation: 'The separable prefix auf closes the bracket. The general time (jeden Tag) comes before the exact time (um sieben Uhr).',
    },
    {
      type: 'mc',
      id: 'a1-30-word-order-midfield-ex05',
      prompt: 'Which sentence is correct?',
      options: ['Morgen ich gehe ins Kino.', 'Morgen gehe ich ins Kino.', 'Morgen gehe ins Kino ich.'],
      answer: 1,
      explanation: 'When Morgen takes position 1, the verb stays second and the subject ich moves directly after it.',
    },
    {
      type: 'fill',
      id: 'a1-30-word-order-midfield-ex06',
      prompt: 'Ich kann heute leider nicht ___. (kommen – put it in the right place)',
      answer: ['kommen'],
      explanation: 'The infinitive after a modal verb goes to the very end, after nicht.',
    },
    {
      type: 'order',
      id: 'a1-30-word-order-midfield-ex07',
      prompt: 'Build the sentence: "We want to go to the cinema together on Saturday."',
      words: ['zusammen', 'Samstag', 'Wir', 'gehen.', 'Kino', 'wollen', 'am', 'ins'],
      answer: ['Wir wollen am Samstag zusammen ins Kino gehen.'],
      explanation: 'wollen … gehen is the bracket. Inside: time (am Samstag), manner (zusammen), place (ins Kino).',
    },
    {
      type: 'mc',
      id: 'a1-30-word-order-midfield-ex08',
      prompt: 'Where does the pronoun object go? "Ich rufe ___ an." (dich, morgen)',
      options: ['Ich rufe morgen dich an.', 'Ich rufe dich morgen an.', 'Ich rufe an dich morgen.'],
      answer: 1,
      explanation: 'Pronoun objects come early, right after the verb, before time expressions. The prefix an stays at the end.',
    },
    {
      type: 'order',
      id: 'a1-30-word-order-midfield-ex09',
      prompt: 'Build the sentence: "I give the child the book today."',
      words: ['dem', 'Buch.', 'Ich', 'heute', 'Kind', 'das', 'gebe'],
      answer: ['Ich gebe dem Kind heute das Buch.', 'Ich gebe heute dem Kind das Buch.'],
      explanation: 'The Dative noun (dem Kind) comes before the Accusative noun (das Buch). The time word can sit before or between them.',
    },
    {
      type: 'mc',
      id: 'a1-30-word-order-midfield-ex10',
      prompt: 'Which sentence places nicht correctly?',
      options: ['Ich fahre nicht heute mit dem Auto.', 'Ich fahre heute mit dem Auto nicht.', 'Ich fahre heute nicht mit dem Auto.'],
      answer: 2,
      explanation: 'nicht comes after the time expression and before the part it negates (mit dem Auto).',
    },
    {
      type: 'translate',
      id: 'a1-30-word-order-midfield-ex11',
      prompt: 'Translate: "I have to work in Berlin tomorrow."',
      answer: ['Ich muss morgen in Berlin arbeiten.', 'Morgen muss ich in Berlin arbeiten.'],
      hint: 'müssen = to have to, arbeiten = to work',
      explanation: 'Bracket: muss … arbeiten. Inside: time (morgen) before place (in Berlin).',
    },
  ],
};

export default topic;
