import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-35-comparative-basics',
  level: 'A1',
  unit: 8,
  order: 35,
  title: 'Comparing: comparative basics and wie / als',
  germanTerm: 'Komparativ',
  tags: ['adjectives', 'comparison', 'comparative', 'als', 'wie'],
  summary: 'To compare, add -er to the adjective (and often an umlaut) and use als for "than"; for "as … as" use so … wie.',
  explanation: `
### What it is

The **comparative** (*Komparativ*) is the form of an adjective that says *more*: *bigger, faster, more expensive*. German builds it with one ending, **-er**, on every adjective, short or long. There is no *more* word in front:

- schnell → schnell**er** (faster)
- klein → klein**er** (smaller)
- interessant → interessant**er** (more interesting, not *mehr interessant*)

### Two ways to compare

**1. Not equal: comparative + als** (than)

- Berlin ist **größer als** München. – *Berlin is bigger than Munich.*
- Der Zug ist **schneller als** der Bus.
- Ich bin **älter als** mein Bruder.

**2. Equal: so + adjective + wie** (as … as)

- Anna ist **so alt wie** Tom. – *Anna is as old as Tom.*
- Das Buch ist **nicht so teuer wie** der Film. – *The book is not as expensive as the film.*

The pair is the biggest source of mistakes: **als** goes with the *-er* form, **wie** goes with *so*. Never *größer wie*.

### The umlaut

Many short adjectives with **a, o, u** add an umlaut in the comparative:

| adjective | comparative | meaning |
|---|---|---|
| alt | **ä**lter | older |
| jung | j**ü**nger | younger |
| groß | gr**ö**ßer | bigger |
| lang | l**ä**nger | longer |
| kurz | k**ü**rzer | shorter |
| warm | w**ä**rmer | warmer |
| kalt | k**ä**lter | colder |
| stark | st**ä**rker | stronger |

Not all do: *schnell → schneller*, *klein → kleiner*, *laut → lauter*, *langsam → langsamer*. Learn the umlaut ones as a short list; the most common A1 ones are in the table.

### Irregular comparatives

A few very common words have their own forms. They are worth learning first because you use them every day:

| base | comparative | meaning |
|---|---|---|
| gut | **besser** | better |
| viel | **mehr** | more |
| gern | **lieber** | rather, prefer |
| hoch | **höher** | higher |
| nah | **näher** | nearer |
| teuer | **teurer** | more expensive (drops an e) |
| dunkel | **dunkler** | darker (drops an e) |

### The superlative, briefly

To say *the most*, use **am + adjective + -sten**: *am schnellsten, am größten, am besten*. This form is used after a verb: *Der ICE ist am schnellsten.* The full superlative (*der schnellste Zug*) is an A2 topic.

### Why it matters

Comparing is a basic everyday action: which is cheaper, which is faster, who is older, what you prefer. The German system is simpler than the English one in one way (always *-er*, never *more*) and trickier in another (*als* vs *wie*, umlauts). With the table above and the rule *-er + als*, you can compare anything at A1. And you already know one comparative very well: *lieber*, the comparative of *gern*.
`,
  examples: [
    { de: 'Mein Bruder ist älter als ich.', en: 'My brother is older than me. (alt → älter, + als)' },
    { de: 'Der Bus ist langsamer als der Zug.', en: 'The bus is slower than the train. (no umlaut: langsamer)' },
    { de: 'Dieses Handy ist teurer als das andere.', en: 'This phone is more expensive than the other one. (teuer → teurer)' },
    { de: 'Anna ist so groß wie ihre Mutter.', en: 'Anna is as tall as her mother. (so … wie)' },
    { de: 'Heute ist es nicht so kalt wie gestern.', en: 'Today it is not as cold as yesterday. (nicht so … wie)' },
    { de: 'Dein Deutsch ist besser als mein Englisch.', en: 'Your German is better than my English. (gut → besser)' },
    { de: 'Ich trinke lieber Tee als Kaffee.', en: 'I prefer tea to coffee. (gern → lieber)' },
    { de: 'Im Sommer ist es am wärmsten.', en: 'In summer it is warmest. (am + -sten)' },
  ],
  connections: [
    { topicId: 'a1-19-gern-lieber', note: 'lieber and am liebsten are the comparative and superlative of gern.' },
    { topicId: 'a1-13-negation', note: 'nicht so … wie is the usual way to say "less … than" at A1.' },
    { topicId: 'a2-10-comparative-superlative', note: 'At A2 you learn the full superlative and comparatives in front of nouns (ein größeres Haus).' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Comparatives before a noun take adjective endings, which start at A2.' },
  ],
  edgeCases: [
    'Never use **mehr** to form a comparative: *interessanter*, not *mehr interessant*. *Mehr* is only the comparative of *viel*.',
    '**als** (than) after a comparative; **wie** (as) after *so*. *Größer wie* is a common mistake in casual speech but is not standard.',
    'After **als** and **wie** the noun or pronoun takes the same case as the thing it is compared with: *Er ist größer als **ich*** (both Nominative), not *als mich*.',
    'Adjectives ending in **-el** and **-er** drop an e: *dunkel → dunkler*, *teuer → teurer*.',
    'Not every a / o / u adjective takes an umlaut: *laut → lauter*, *langsam → langsamer*, *froh → froher*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-35-comparative-basics-ex01',
      prompt: 'How do you form the comparative of a German adjective?',
      options: ['put mehr in front', 'add -er (sometimes with an umlaut)', 'add -est'],
      answer: 1,
      explanation: 'German always uses the ending -er, even for long adjectives. mehr interessant is wrong.',
    },
    {
      type: 'fill',
      id: 'a1-35-comparative-basics-ex02',
      prompt: 'Der Zug ist ___ als der Bus. (schnell)',
      answer: ['schneller'],
      explanation: 'schnell has no a, o or u, so just add -er: schneller.',
    },
    {
      type: 'fill',
      id: 'a1-35-comparative-basics-ex03',
      prompt: 'Mein Vater ist ___ als meine Mutter. (alt)',
      answer: ['älter'],
      explanation: 'alt takes an umlaut in the comparative: älter.',
    },
    {
      type: 'mc',
      id: 'a1-35-comparative-basics-ex04',
      prompt: 'Complete: "Berlin ist größer ___ Hamburg."',
      options: ['wie', 'als', 'dann'],
      answer: 1,
      explanation: 'After a comparative (größer) the word for "than" is als. wie is only used with so … wie.',
    },
    {
      type: 'mc',
      id: 'a1-35-comparative-basics-ex05',
      prompt: 'Complete: "Tom ist so groß ___ sein Bruder."',
      options: ['als', 'wie', 'dass'],
      answer: 1,
      explanation: 'Equal comparison is so … wie. als would need a comparative (größer als).',
    },
    {
      type: 'match',
      id: 'a1-35-comparative-basics-ex06',
      prompt: 'Match each adjective with its comparative.',
      pairs: [
        ['gut', 'besser'],
        ['viel', 'mehr'],
        ['gern', 'lieber'],
        ['hoch', 'höher'],
        ['teuer', 'teurer'],
      ],
      explanation: 'These are the irregular ones to memorise. teuer drops an e; gut, viel and gern change completely.',
    },
    {
      type: 'fill',
      id: 'a1-35-comparative-basics-ex07',
      prompt: 'Dieses Restaurant ist ___ als das andere. (gut)',
      answer: ['besser'],
      explanation: 'gut is irregular: besser, never guter.',
    },
    {
      type: 'fill',
      id: 'a1-35-comparative-basics-ex08',
      prompt: 'Im Winter ist es ___ als im Sommer. (kalt)',
      answer: ['kälter'],
      explanation: 'kalt takes an umlaut: kälter.',
    },
    {
      type: 'order',
      id: 'a1-35-comparative-basics-ex09',
      prompt: 'Build the sentence: "My sister is younger than I am."',
      words: ['als', 'Schwester', 'jünger', 'ich.', 'Meine', 'ist'],
      answer: ['Meine Schwester ist jünger als ich.'],
      explanation: 'jung → jünger with an umlaut, followed by als. After als the pronoun stays Nominative: ich.',
    },
    {
      type: 'mc',
      id: 'a1-35-comparative-basics-ex10',
      prompt: 'Which sentence is correct?',
      options: ['Das Buch ist mehr interessant als der Film.', 'Das Buch ist interessanter als der Film.', 'Das Buch ist interessanter wie der Film.'],
      answer: 1,
      explanation: 'Long adjectives still take -er (interessanter), and the comparison word is als.',
    },
    {
      type: 'translate',
      id: 'a1-35-comparative-basics-ex11',
      prompt: 'Translate: "Today it is not as warm as yesterday."',
      answer: ['Heute ist es nicht so warm wie gestern.', 'Es ist heute nicht so warm wie gestern.'],
      hint: 'warm = warm, gestern = yesterday',
      explanation: 'Equal (or not equal) comparison with the base form uses nicht so … wie.',
    },
    {
      type: 'fill',
      id: 'a1-35-comparative-basics-ex12',
      prompt: 'Von allen Zügen ist der ICE ___ schnellsten. (the fastest)',
      answer: ['am'],
      explanation: 'The superlative after a verb is am + adjective + -sten: am schnellsten.',
    },
  ],
};

export default topic;
