import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-35-comparative-basics',
  level: 'A1',
  unit: 8,
  order: 39,
  title: 'Comparing: comparative basics and wie / als',
  germanTerm: 'Komparativ',
  tags: ['adjectives', 'comparison', 'comparative', 'als', 'wie'],
  summary: 'To compare, add -er to the adjective (and often an umlaut) and use als for "than"; for "as … as" use so … wie.',
  steps: [
    {
      title: 'The comparative: always -er',
      text: `
The **comparative** (*Komparativ*) is the adjective form that says *more*: bigger, faster, more expensive. German adds one ending, **-er**, to every adjective, short or long. There is no word for *more* in front: *interessant → interessant**er***, never *mehr interessant*.
`,
      examples: [
        { de: 'Der Zug ist schneller.', en: 'The train is faster. (schnell + -er)' },
        { de: 'Mein Zimmer ist kleiner.', en: 'My room is smaller. (klein + -er)' },
        { de: 'Das Buch ist interessanter.', en: 'The book is more interesting. (long adjective, still -er)' },
      ],
    },
    {
      title: 'als for than, so … wie for as … as',
      text: `
There are two ways to compare. Not equal: comparative + **als** (than). Equal: **so** + adjective + **wie** (as … as).

This pair causes most mistakes: **als** goes with the *-er* form, **wie** goes with *so*. Never *größer wie*.
`,
      examples: [
        { de: 'Berlin ist größer als München.', en: 'Berlin is bigger than Munich. (-er + als)' },
        { de: 'Ich bin älter als mein Bruder.', en: 'I am older than my brother.' },
        { de: 'Anna ist so alt wie Tom.', en: 'Anna is as old as Tom. (so … wie)' },
        { de: 'Das Buch ist nicht so teuer wie der Film.', en: 'The book is not as expensive as the film. (nicht so … wie)' },
      ],
    },
    {
      title: 'Short adjectives often add an umlaut',
      text: `
Many short adjectives with **a, o, u** add an umlaut in the comparative.

| adjective | comparative |
|---|---|
| alt | **älter** |
| jung | **jünger** |
| groß | **größer** |
| lang | **länger** |
| kurz | **kürzer** |
| kalt | **kälter** |

Not all do: *schnell → schneller*, *laut → lauter*, *langsam → langsamer*. Learn the umlaut ones as a short list.
`,
      examples: [
        { de: 'Mein Bruder ist älter als ich.', en: 'My brother is older than me. (alt → älter)' },
        { de: 'Im Winter ist es kälter als im Sommer.', en: 'In winter it is colder than in summer. (kalt → kälter)' },
        { de: 'Der Bus ist langsamer als der Zug.', en: 'The bus is slower than the train. (no umlaut: langsamer)' },
      ],
    },
    {
      title: 'Irregular comparatives',
      text: `
A few very common words have their own forms. Learn these first; you use them every day. *teuer* and *dunkel* just drop an *e*.

| base | comparative |
|---|---|
| gut | **besser** |
| viel | **mehr** |
| gern | **lieber** |
| hoch | **höher** |
| teuer | **teurer** |
| dunkel | **dunkler** |
`,
      examples: [
        { de: 'Dein Deutsch ist besser als mein Englisch.', en: 'Your German is better than my English. (gut → besser)' },
        { de: 'Ich trinke lieber Tee als Kaffee.', en: 'I prefer tea to coffee. (gern → lieber)' },
        { de: 'Dieses Handy ist teurer als das andere.', en: 'This phone is more expensive than the other one. (teuer → teurer)' },
      ],
    },
    {
      title: 'The superlative, briefly: am -sten',
      text: `
To say *the most*, use **am** + adjective + **-sten**: *am schnellsten, am größten, am besten*. Use it after a verb. The full superlative in front of a noun (*der schnellste Zug*) is an A2 topic.
`,
      examples: [
        { de: 'Der ICE ist am schnellsten.', en: 'The ICE is the fastest. (am + -sten)' },
        { de: 'Im Sommer ist es am wärmsten.', en: 'In summer it is warmest.' },
        { de: 'Dieses Restaurant ist am besten.', en: 'This restaurant is the best. (gut → am besten)' },
      ],
    },
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
