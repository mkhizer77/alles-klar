import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-10-comparative-superlative',
  level: 'A2',
  unit: 3,
  order: 10,
  title: 'Comparative and superlative in full',
  germanTerm: 'Komparativ, Superlativ',
  tags: ['adjectives', 'comparison', 'comparative', 'superlative', 'als', 'wie'],
  summary: 'The comparative adds -er (often with an umlaut: älter), the superlative adds -(e)st- (am ältesten / der älteste), and both take normal adjective endings when they stand before a noun.',
  explanation: `
### What it is

To compare things you need three forms of an adjective:

| form | German term | example |
|---|---|---|
| basic | Positiv | schnell – *fast* |
| comparative | **Komparativ** | schnell**er** – *faster* |
| superlative | **Superlativ** | am schnell**sten** / der schnell**ste** – *fastest* |

German **always** uses endings, even for long adjectives. There is no *more* / *most*: *interessanter* (more interesting), *am interessantesten* (most interesting).

### How it works: the comparative

Add **-er** to the adjective. Many short adjectives with **a, o, u** also take an umlaut:

| basic | comparative | | basic | comparative |
|---|---|---|---|---|
| alt | **älter** | | klein | kleiner |
| groß | **größer** | | schnell | schneller |
| jung | **jünger** | | billig | billiger |
| lang | **länger** | | schön | schöner |
| kurz | **kürzer** | | interessant | interessanter |
| warm | **wärmer** | | teuer | **teurer** |
| kalt | **kälter** | | dunkel | **dunkler** |

Adjectives ending in *-el* / *-er* drop the *e* (*teuer → teurer, dunkel → dunkler*).

To compare two things use **als** (than): *Berlin ist größer **als** Bonn.* To say two things are equal use **so … wie** (as … as): *Er ist **so** groß **wie** sein Vater.*

### How it works: the superlative

There are two forms, depending on where the adjective stands:

1. **After the verb / as an adverb: am -sten**
   - Dieses Auto ist **am teuersten**. – *This car is the most expensive.*
   - Sie läuft **am schnellsten**. – *She runs the fastest.*
2. **Before a noun: der / die / das -ste + adjective ending**
   - Das ist **der schnellste** Zug. – *That is the fastest train.*
   - Er wohnt in **der größten** Stadt. – *He lives in the biggest city.*

After **-t, -d, -s, -z, -ß, -sch** add **-est** so you can pronounce it: *am ältesten, am kürzesten, am heißesten, am hübschesten*. (*groß* is the exception: *am größten*.)

### Irregular forms

| basic | comparative | superlative |
|---|---|---|
| gut | besser | am besten / der beste |
| viel | mehr | am meisten / die meisten |
| gern | lieber | am liebsten |
| hoch | höher | am höchsten / der höchste |
| nah | näher | am nächsten / der nächste |

### Comparatives and superlatives before a noun

In front of a noun, both forms take the **normal adjective endings** on top of *-er* / *-st*:

- ein **größeres** Haus (ein + neuter → -es)
- mein **älterer** Bruder (mein + masculine → -er)
- die **besten** Freunde (plural → -en)
- der **schönste** Tag (der + masculine → -e)

### Why it matters

Comparing is a basic need: prices, sizes, opinions. With the comparative plus *als* and *so … wie*, the two superlative patterns, and the five irregular forms, you can handle almost every comparison in German. Watch two classic mistakes: *mehr* + adjective (*mehr schön* ✗ → *schöner* ✓) and *wie* instead of *als* after a comparative.
`,
  examples: [
    { de: 'Mein Bruder ist älter als ich.', en: 'My brother is older than me. (comparative + als; umlaut)' },
    { de: 'Er ist so groß wie sein Vater.', en: 'He is as tall as his father. (so … wie)' },
    { de: 'Dieses Auto ist am teuersten.', en: 'This car is the most expensive. (superlative after the verb: am -sten)' },
    { de: 'Das ist der schnellste Zug.', en: 'That is the fastest train. (superlative before a noun: der -ste)' },
    { de: 'Ich trinke lieber Tee, am liebsten grünen Tee.', en: 'I prefer tea, and like green tea best of all. (gern → lieber → am liebsten)' },
    { de: 'Der Winter ist die kälteste Jahreszeit.', en: 'Winter is the coldest season. (-est after -t; feminine -e)' },
    { de: 'Wir haben ein größeres Haus gekauft.', en: 'We bought a bigger house. (comparative + ein-word ending -es)' },
  ],
  connections: [
    { topicId: 'a1-35-comparative-basics', note: 'The A1 introduction to comparatives and als / wie; this topic completes the picture.' },
    { topicId: 'a1-19-gern-lieber', note: 'gern – lieber – am liebsten is the irregular comparison you already know.' },
    { topicId: 'a2-07-adjective-endings-definite', note: 'Superlatives before a noun take the adjective endings from this table.' },
    { topicId: 'a2-08-adjective-endings-indefinite', note: 'Comparatives after ein / mein take the ein-word endings.' },
  ],
  edgeCases: [
    'Never use **mehr** to build a comparative: *mehr interessant* ✗ → *interessanter* ✓. mehr is only the comparative of viel.',
    '**als** after a comparative, **wie** for equality: *größer als*, *so groß wie*. *größer wie* is heard in some regions but is not standard.',
    'Not every adjective takes an umlaut: *froh → froher, klar → klarer, bunt → bunter, langsam → langsamer*. Learn the common umlaut ones (alt, groß, jung, lang, kurz, warm, kalt, stark, hoch, nah).',
    '**am -sten** is only used after the verb or as an adverb. Before a noun you need the article: *der größte Mann*, not *am größten Mann*.',
    '**hoch** → **höher** (loses the c) → **am höchsten** (gets it back).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex01',
      prompt: 'What is the comparative of "alt"?',
      options: ['älter', 'alter', 'mehr alt'],
      answer: 0,
      explanation: 'Add -er and an umlaut: älter. German never uses mehr + adjective for the comparative.',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex02',
      prompt: 'Mein Bruder ist ___ als ich. (jung)',
      answer: ['jünger'],
      explanation: 'jung takes an umlaut in the comparative: jünger. Comparison with als.',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex03',
      prompt: 'Dieses Auto ist am ___. (teuer)',
      answer: ['teuersten'],
      explanation: 'Superlative after the verb: am + adjective + -sten. teuer keeps its e here: am teuersten.',
    },
    {
      type: 'match',
      id: 'a2-10-comparative-superlative-ex04',
      prompt: 'Match each adjective with its irregular superlative.',
      pairs: [
        ['gut', 'am besten'],
        ['viel', 'am meisten'],
        ['gern', 'am liebsten'],
        ['hoch', 'am höchsten'],
        ['nah', 'am nächsten'],
      ],
      explanation: 'These five are irregular and must be learned: gut – besser – am besten, viel – mehr – am meisten, gern – lieber – am liebsten, hoch – höher – am höchsten, nah – näher – am nächsten.',
    },
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex05',
      prompt: 'Complete: "Berlin ist ___ als Bonn."',
      options: ['größer', 'großer', 'am größten'],
      answer: 0,
      explanation: 'als needs a comparative: größer (with umlaut). am größten is the superlative and does not go with als.',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex06',
      prompt: 'Er ist so groß ___ sein Vater. (as)',
      answer: ['wie'],
      explanation: 'Equality uses so … wie. als is only for the comparative (größer als).',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex07',
      prompt: 'Der Winter ist die ___ Jahreszeit. (kalt)',
      answer: ['kälteste'],
      explanation: 'Superlative before a noun: kalt → kält-est- (extra -e- after -t) + adjective ending -e after die.',
    },
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex08',
      prompt: 'Complete: "Ich habe ein ___ Haus gekauft." (groß, comparative)',
      options: ['größeres', 'größer', 'größere'],
      answer: 0,
      explanation: 'Before a noun the comparative takes an adjective ending: ein + neuter Accusative → -es: ein größeres Haus.',
    },
    {
      type: 'order',
      id: 'a2-10-comparative-superlative-ex09',
      prompt: 'Build the sentence: "My brother is older than me."',
      words: ['älter', 'Bruder', 'ich.', 'Mein', 'als', 'ist'],
      answer: ['Mein Bruder ist älter als ich.'],
      explanation: 'Subject, verb, comparative, then als + the thing compared. After als the pronoun stays Nominative (ich).',
    },
    {
      type: 'fill',
      id: 'a2-10-comparative-superlative-ex10',
      prompt: 'Das ist der ___ Tag des Jahres. (heiß)',
      answer: ['heißeste'],
      explanation: 'heiß ends in -ß, so the superlative adds -est: heißest- + -e after der: der heißeste Tag.',
    },
    {
      type: 'translate',
      id: 'a2-10-comparative-superlative-ex11',
      prompt: 'Translate: "She runs the fastest."',
      answer: ['Sie läuft am schnellsten.'],
      hint: 'laufen = to run, schnell = fast',
      explanation: 'The superlative as an adverb (describing how she runs) uses am + -sten: am schnellsten.',
    },
    {
      type: 'mc',
      id: 'a2-10-comparative-superlative-ex12',
      prompt: 'Which sentence is NOT standard German?',
      options: ['Er ist größer wie ich.', 'Er ist größer als ich.', 'Er ist so groß wie ich.'],
      answer: 0,
      explanation: 'After a comparative you need als. größer wie is common in some dialects but is not standard German.',
    },
  ],
};

export default topic;
