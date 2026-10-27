import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-16-two-way-prepositions-depth',
  level: 'A2',
  unit: 6,
  order: 16,
  title: 'Two-way prepositions in depth',
  germanTerm: 'Wechselpräpositionen',
  tags: ['prepositions', 'two-way prepositions', 'Accusative', 'Dative', 'location', 'direction'],
  summary: 'The nine two-way prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen) take the Dative for a location (wo?) and the Accusative for a direction (wohin?), with fixed cases in their non-spatial meanings.',
  explanation: `
### What it is

Nine prepositions can take **either** the Dative or the Accusative. They are the **two-way prepositions** (*Wechselpräpositionen*):

**an, auf, hinter, in, neben, über, unter, vor, zwischen**

The case tells you whether something **is** somewhere or **moves** somewhere:

- **wo?** (where? location, no movement across a border) → **Dative**
- **wohin?** (where to? movement towards a goal) → **Accusative**

You met the basic idea at A1. This topic gives you the full set, the short forms, the meanings of each preposition and the cases when they are **not** about place.

### How it works: the two columns

| | wo? → Dative | wohin? → Accusative |
|---|---|---|
| masculine | Das Buch liegt auf **dem** Tisch. | Ich lege das Buch auf **den** Tisch. |
| feminine | Er wartet in **der** Küche. | Er geht in **die** Küche. |
| neuter | Wir sind **im** Kino. (in dem) | Wir gehen **ins** Kino. (in das) |
| plural | Die Kinder spielen hinter **den** Häusern. | Sie laufen hinter **die** Häuser. |

A quick way to decide: is the sentence answering **wo?** or **wohin?** Verbs of being (*sein, liegen, stehen, sitzen, hängen, wohnen, bleiben*) answer *wo* → Dative. Verbs of moving something or someone to a new place (*gehen, fahren, legen, stellen, setzen, hängen*) answer *wohin* → Accusative.

### Short forms

| full form | short form | | full form | short form |
|---|---|---|---|---|
| in dem | **im** | | in das | **ins** |
| an dem | **am** | | an das | **ans** |
| | | | auf das | **aufs** |

### What each preposition means

| preposition | meaning | typical examples |
|---|---|---|
| an | at / on (vertical surface, edge, water) | an der Wand, am Fenster, am See, am Meer |
| auf | on (horizontal surface); at (some public places) | auf dem Tisch, auf dem Markt, auf der Post, auf der Bank |
| in | in / into | in der Stadt, im Bett, in die Schweiz |
| hinter | behind | hinter dem Haus |
| vor | in front of | vor der Tür |
| neben | next to | neben dem Sofa |
| über | above / over | über dem Tisch, über die Straße |
| unter | under | unter dem Bett |
| zwischen | between | zwischen den Stühlen |

*an* vs *auf*: **an** touches from the side (*das Bild an der Wand*), **auf** rests on top (*die Lampe auf dem Tisch*). For places use *an* with water and edges (*am Strand, am Bahnhof*) and *auf* with public institutions and open spaces (*auf der Post, auf dem Marktplatz*).

### When the meaning is not about place

Several two-way prepositions have a fixed case when they are not spatial:

- **Time** with *an, in, vor*: always **Dative**. *am Montag, im Mai, in einer Woche, vor zwei Jahren.*
- **über** meaning *about*: always **Accusative**. *Wir sprechen über den Film.*
- **Verb + preposition combinations**: fixed case, learned with the verb. *warten auf + A, denken an + A, Angst haben vor + D.*

### Why it matters

Two-way prepositions are the most frequent prepositions in German; you use several in every description of a room or a route. The Dative / Accusative contrast behind *im / ins* and *auf dem / auf den* is also the basis for the position verbs (*stellen / stehen, legen / liegen*) in the next topic.
`,
  examples: [
    { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is lying on the table. (wo? → Dative)' },
    { de: 'Ich lege das Buch auf den Tisch.', en: 'I put the book on the table. (wohin? → Accusative)' },
    { de: 'Wir sind im Kino.', en: 'We are at the cinema. (im = in dem)' },
    { de: 'Wir gehen ins Kino.', en: 'We are going to the cinema. (ins = in das)' },
    { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall. (an = vertical surface)' },
    { de: 'Am Montag fahre ich in die Schweiz.', en: 'On Monday I am going to Switzerland. (time: am = Dative; direction: in die = Accusative)' },
    { de: 'Wir sprechen über den Film.', en: 'We are talking about the film. (über = about: always Accusative)' },
  ],
  connections: [
    { topicId: 'a1-29-two-way-prepositions', note: 'The A1 introduction to wo? (Dative) vs wohin? (Accusative).' },
    { topicId: 'a1-24-dative', note: 'The Dative articles dem / der / dem / den used for locations.' },
    { topicId: 'a1-20-accusative', note: 'The Accusative articles den / die / das / die used for directions.' },
    { topicId: 'a2-17-position-verbs', note: 'stellen / stehen, legen / liegen are the verbs that switch between the two cases.' },
    { topicId: 'a2-12-verbs-with-prepositions', note: 'In verb + preposition combinations the case is fixed and must be learned with the verb.' },
  ],
  edgeCases: [
    'The Accusative is for a **change of place**, not any movement. *Ich laufe im Park* (I run around in the park, Dative) vs *Ich laufe in den Park* (I run into the park, Accusative).',
    'Time expressions with **an, in, vor** are always Dative: *am Montag, im Winter, vor einem Jahr*, even though nothing is located anywhere.',
    '**über** meaning *about* is always Accusative: *Wir reden über das Wetter.*',
    '**auf** vs **in** for places: *auf der Post, auf der Bank, auf dem Markt* (institutions, open spaces) but *in der Schule, im Büro, im Supermarkt* (buildings you are inside).',
    'Countries with an article take **in** + Accusative for direction: *in die Schweiz, in die Türkei, in die USA*; countries without an article take **nach**: *nach Deutschland*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-16-two-way-prepositions-depth-ex01',
      prompt: 'Complete: "Ich gehe ___ Kino." (to the cinema)',
      options: ['ins', 'im', 'in'],
      answer: 0,
      explanation: 'gehen answers wohin? → Accusative. in das Kino = ins Kino. im would mean you are already inside.',
    },
    {
      type: 'fill',
      id: 'a2-16-two-way-prepositions-depth-ex02',
      prompt: 'Das Buch liegt ___ dem Tisch. (on)',
      answer: ['auf'],
      explanation: 'A horizontal surface uses auf. liegen is a location verb, so the case is Dative (dem Tisch).',
    },
    {
      type: 'fill',
      id: 'a2-16-two-way-prepositions-depth-ex03',
      prompt: 'Ich lege das Buch auf ___ Tisch. (the)',
      answer: ['den'],
      explanation: 'legen moves the book to a new place: wohin? → Accusative. Tisch is masculine → den.',
    },
    {
      type: 'match',
      id: 'a2-16-two-way-prepositions-depth-ex04',
      prompt: 'Match each full form with its short form.',
      pairs: [
        ['in dem', 'im'],
        ['in das', 'ins'],
        ['an dem', 'am'],
        ['an das', 'ans'],
        ['auf das', 'aufs'],
      ],
      explanation: 'Dative dem contracts to -m (im, am); Accusative das contracts to -s (ins, ans, aufs).',
    },
    {
      type: 'mc',
      id: 'a2-16-two-way-prepositions-depth-ex05',
      prompt: 'Complete: "Wir sind ___ Supermarkt." (location)',
      options: ['im', 'ins', 'in den'],
      answer: 0,
      explanation: 'sein answers wo? → Dative. Supermarkt is masculine: in dem = im Supermarkt.',
    },
    {
      type: 'fill',
      id: 'a2-16-two-way-prepositions-depth-ex06',
      prompt: 'Er hängt das Bild ___ die Wand. (on, vertical surface)',
      answer: ['an'],
      explanation: 'A wall is vertical, so German uses an, not auf. hängen here means putting it up: Accusative (die Wand).',
    },
    {
      type: 'fill',
      id: 'a2-16-two-way-prepositions-depth-ex07',
      prompt: 'Wir fahren ___ die Schweiz. (to)',
      answer: ['in'],
      explanation: 'Switzerland has an article (die Schweiz), so direction is in + Accusative, not nach.',
    },
    {
      type: 'mc',
      id: 'a2-16-two-way-prepositions-depth-ex08',
      prompt: 'Complete: "___ Montag habe ich frei." (on)',
      options: ['Am', 'Ans', 'Im'],
      answer: 0,
      explanation: 'Days use an + Dative: an dem Montag = am Montag. Time expressions with an are always Dative.',
    },
    {
      type: 'fill',
      id: 'a2-16-two-way-prepositions-depth-ex09',
      prompt: 'Sie sitzt ___ ihrem Bruder und ihrer Mutter. (between)',
      answer: ['zwischen'],
      explanation: 'zwischen = between. sitzen is a location verb, so both nouns are Dative (ihrem Bruder, ihrer Mutter).',
    },
    {
      type: 'order',
      id: 'a2-16-two-way-prepositions-depth-ex10',
      prompt: 'Build the sentence: "The cat is sleeping under the bed."',
      words: ['dem', 'Katze', 'schläft', 'Bett.', 'Die', 'unter'],
      answer: ['Die Katze schläft unter dem Bett.'],
      explanation: 'schlafen is a location verb (wo?), so unter takes the Dative: unter dem Bett.',
    },
    {
      type: 'mc',
      id: 'a2-16-two-way-prepositions-depth-ex11',
      prompt: 'Complete: "Wir sprechen über ___ Film." (about)',
      options: ['den', 'dem', 'der'],
      answer: 0,
      explanation: 'über meaning "about" is not spatial and always takes the Accusative: über den Film.',
    },
    {
      type: 'translate',
      id: 'a2-16-two-way-prepositions-depth-ex12',
      prompt: 'Translate: "The cat is sleeping on the sofa."',
      answer: ['Die Katze schläft auf dem Sofa.'],
      hint: 'die Katze = cat, schlafen = to sleep, das Sofa = sofa',
      explanation: 'Sleeping is a location (wo?), so auf + Dative. Sofa is neuter → auf dem Sofa.',
    },
  ],
};

export default topic;
