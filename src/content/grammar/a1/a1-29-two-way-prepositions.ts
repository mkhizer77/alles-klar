import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-29-two-way-prepositions',
  level: 'A1',
  unit: 6,
  order: 29,
  title: 'Two-way prepositions: wo? (Dative) vs wohin? (Accusative)',
  germanTerm: 'Wechselpräpositionen',
  tags: ['prepositions', 'dative', 'accusative', 'place'],
  summary: 'Nine prepositions of place – an, auf, hinter, in, neben, über, unter, vor, zwischen – take the Dative for a location (wo?) and the Accusative for a movement towards (wohin?).',
  explanation: `
### What it is

You have met prepositions that are always Accusative (*für, ohne …*) and always Dative (*mit, zu …*). A third group can take **either** case. These are the **two-way prepositions** (*Wechselpräpositionen*). All nine describe **where** something is:

| preposition | meaning |
|---|---|
| **an** | at, on (a vertical surface or edge) |
| **auf** | on (a horizontal surface) |
| **hinter** | behind |
| **in** | in, into |
| **neben** | next to |
| **über** | above, over |
| **unter** | under, below |
| **vor** | in front of |
| **zwischen** | between |

### The rule: wo? or wohin?

The case depends on one question:

- **Wo?** (where is it? – a **location**, no movement to a new place) → **Dative**
- **Wohin?** (where to? – **movement towards** a place) → **Accusative**

| | wo? → Dative | wohin? → Accusative |
|---|---|---|
| in | Ich bin **in der** Küche. (I am in the kitchen) | Ich gehe **in die** Küche. (I go into the kitchen) |
| auf | Das Buch liegt **auf dem** Tisch. | Ich lege das Buch **auf den** Tisch. |
| an | Das Bild hängt **an der** Wand. | Ich hänge das Bild **an die** Wand. |
| neben | Er sitzt **neben mir**. | Er setzt sich **neben mich**. |

The thing to understand: it is not about the verb moving or not. *Ich laufe im Park* (I run in the park) is Dative, because I stay in the park; the park is a location. *Ich laufe in den Park* is Accusative, because I go from outside into the park.

### Typical verbs for each side

| wo? (Dative) | wohin? (Accusative) |
|---|---|
| sein, bleiben, wohnen | gehen, fahren, kommen, fliegen |
| liegen (to lie), stehen (to stand), sitzen (to sit), hängen (to hang, be hanging) | legen (to lay), stellen (to put upright), setzen (to set), hängen (to hang up) |

The pairs *liegen / legen, stehen / stellen, sitzen / setzen* are a key A2 topic. For now, just notice: the short "position" verb goes with Dative, the "placing" verb with Accusative.

### Contractions

- in + dem → **im**, in + das → **ins**
- an + dem → **am**, an + das → **ans**
- auf + das → **aufs** (less common)

So: *Ich bin **im** Kino* (location) but *Ich gehe **ins** Kino* (direction).

### Why it matters

This is the single most common case decision in German. Every time you say where you are, where you put something or where you go, you make it. The question test is simple and reliable: ask yourself **wo?** or **wohin?**. Combined with the articles you already know, that gives you *im Büro / ins Büro*, *auf dem Tisch / auf den Tisch*, *an der Wand / an die Wand*. Because the two-way prepositions also cover time (*am Montag*, *im Mai*, always Dative), you have already been using half of this topic without noticing.
`,
  examples: [
    { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is lying on the table. (wo? → Dative: dem)' },
    { de: 'Ich lege das Buch auf den Tisch.', en: 'I put the book on the table. (wohin? → Accusative: den)' },
    { de: 'Wir sind im Supermarkt.', en: 'We are in the supermarket. (in + dem = im, location)' },
    { de: 'Wir gehen in den Supermarkt.', en: 'We go into the supermarket. (in + den, direction)' },
    { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall. (an + Dative)' },
    { de: 'Sie fährt ans Meer.', en: 'She drives to the sea. (an + das = ans, direction)' },
    { de: 'Die Katze sitzt zwischen den Stühlen.', en: 'The cat sits between the chairs. (Dative plural: den + -n)' },
  ],
  connections: [
    { topicId: 'a1-20-accusative', note: 'The wohin? side uses the Accusative articles: den, die, das.' },
    { topicId: 'a1-24-dative', note: 'The wo? side uses the Dative articles: dem, der, dem, den + -n.' },
    { topicId: 'a1-28-time-prepositions', note: 'am and im with times are these same prepositions, always in the Dative.' },
    { topicId: 'a1-25-dative-prepositions', note: 'nach and zu are used for "to" with cities and people; in is used for "into" buildings and countries with an article.' },
    { topicId: 'a2-16-two-way-prepositions-depth', note: 'At A2 you go deeper, including the verb pairs stellen / stehen and legen / liegen.' },
  ],
  edgeCases: [
    'Movement inside a place is still **wo?**: *Die Kinder spielen **im** Garten* (they are in the garden the whole time) → Dative.',
    'With **time**, an and in are always Dative: *am Montag, im Mai, in der Nacht*. The wohin? question does not apply.',
    '**auf** is for horizontal surfaces (table, floor), **an** for vertical ones or edges (wall, window, river). *Auf dem Tisch* but *an der Wand*.',
    '"To" a city or country without an article is **nach** (*nach Berlin*), not *in*. But with an article it is **in** + Accusative: *in die Schweiz*.',
    '**über** can also mean "about" (*über das Wetter sprechen*); then it is always Accusative. That use belongs to verbs with prepositions at A2.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-29-two-way-prepositions-ex01',
      prompt: 'Which question tells you to use the Dative with a two-way preposition?',
      options: ['wohin? (where to?)', 'wo? (where?)', 'wer? (who?)'],
      answer: 1,
      explanation: 'wo? asks for a location → Dative. wohin? asks for a direction → Accusative.',
    },
    {
      type: 'fill',
      id: 'a1-29-two-way-prepositions-ex02',
      prompt: 'Die Lampe steht auf ___ Tisch. (the)',
      answer: ['dem'],
      explanation: 'steht describes a position (wo?), so Dative. Tisch is masculine → dem.',
    },
    {
      type: 'fill',
      id: 'a1-29-two-way-prepositions-ex03',
      prompt: 'Ich stelle die Lampe auf ___ Tisch. (the)',
      answer: ['den'],
      explanation: 'stellen moves the lamp to a new place (wohin?), so Accusative. Tisch is masculine → den.',
    },
    {
      type: 'fill',
      id: 'a1-29-two-way-prepositions-ex04',
      prompt: 'Wir sind ___ Kino. (in the)',
      answer: ['im'],
      explanation: 'sein = location (wo?) → Dative. in + dem contracts to im.',
    },
    {
      type: 'fill',
      id: 'a1-29-two-way-prepositions-ex05',
      prompt: 'Wir gehen ___ Kino. (into the)',
      answer: ['ins'],
      explanation: 'gehen = direction (wohin?) → Accusative. in + das contracts to ins.',
    },
    {
      type: 'match',
      id: 'a1-29-two-way-prepositions-ex06',
      prompt: 'Match each preposition with its meaning.',
      pairs: [
        ['hinter', 'behind'],
        ['neben', 'next to'],
        ['unter', 'under'],
        ['zwischen', 'between'],
        ['vor', 'in front of'],
      ],
      explanation: 'All five are two-way prepositions: Dative for wo?, Accusative for wohin?.',
    },
    {
      type: 'mc',
      id: 'a1-29-two-way-prepositions-ex07',
      prompt: 'Complete: "Das Bild hängt ___ Wand."',
      options: ['an die', 'an der', 'auf der'],
      answer: 1,
      explanation: 'hängt (is hanging) = location → Dative: an der Wand. an is used for vertical surfaces like walls.',
    },
    {
      type: 'order',
      id: 'a1-29-two-way-prepositions-ex08',
      prompt: 'Build the sentence: "The cat is sleeping under the bed."',
      words: ['dem', 'Die', 'Bett.', 'Katze', 'schläft', 'unter'],
      answer: ['Die Katze schläft unter dem Bett.'],
      explanation: 'schlafen = location (wo?), so unter takes the Dative: unter dem Bett (Bett is neuter).',
    },
    {
      type: 'mc',
      id: 'a1-29-two-way-prepositions-ex09',
      prompt: 'Which sentence is correct?',
      options: ['Ich fahre in Berlin.', 'Ich fahre nach Berlin.', 'Ich fahre zu Berlin.'],
      answer: 1,
      explanation: 'Cities take nach for "to". in Berlin would mean a location (I drive around in Berlin).',
    },
    {
      type: 'fill',
      id: 'a1-29-two-way-prepositions-ex10',
      prompt: 'Die Kinder spielen ___ Garten. (in the)',
      answer: ['im'],
      explanation: 'The children stay in the garden while playing: location (wo?) → Dative → im Garten.',
    },
    {
      type: 'fill',
      id: 'a1-29-two-way-prepositions-ex11',
      prompt: 'Er legt das Handy neben ___ Computer. (the)',
      answer: ['den'],
      explanation: 'legen moves the phone to a new place (wohin?) → Accusative. Computer is masculine → den.',
    },
    {
      type: 'translate',
      id: 'a1-29-two-way-prepositions-ex12',
      prompt: 'Translate: "I am going into the kitchen."',
      answer: ['Ich gehe in die Küche.'],
      hint: 'die Küche = kitchen',
      explanation: 'gehen = direction (wohin?) → Accusative. Küche is feminine, so die stays die.',
    },
  ],
};

export default topic;
