import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-16-two-way-prepositions-depth',
  level: 'A2',
  unit: 6,
  order: 17,
  title: 'Two-way prepositions in depth',
  germanTerm: 'Wechselpräpositionen',
  tags: ['prepositions', 'two-way prepositions', 'Accusative', 'Dative', 'location', 'direction'],
  summary: 'The nine two-way prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen) take the Dative for a location (wo?) and the Accusative for a direction (wohin?), with fixed cases in their non-spatial meanings.',
  steps: [
    {
      title: 'Nine prepositions, two cases',
      text: `
Nine prepositions can take **either** the Dative or the Accusative. They are the **two-way prepositions** (*Wechselpräpositionen*): **an, auf, hinter, in, neben, über, unter, vor, zwischen**.

The case tells you whether something **is** somewhere or **moves** somewhere:

- **wo?** (where? a location) → **Dative**
- **wohin?** (where to? movement towards a goal) → **Accusative**
`,
      examples: [
        { de: 'Das Buch liegt auf dem Tisch.', en: 'The book is lying on the table. (wo? → Dative)' },
        { de: 'Ich lege das Buch auf den Tisch.', en: 'I put the book on the table. (wohin? → Accusative)' },
        { de: 'Er wartet in der Küche.', en: 'He is waiting in the kitchen. (wo?)' },
        { de: 'Er geht in die Küche.', en: 'He goes into the kitchen. (wohin?)' },
      ],
    },
    {
      title: 'Let the verb decide',
      text: `
Look at the verb. Verbs of **being** somewhere (*sein, liegen, stehen, sitzen, wohnen, bleiben*) answer *wo?* → Dative. Verbs that **move** something to a new place (*gehen, fahren, legen, stellen, setzen*) answer *wohin?* → Accusative.

| | wo? → Dative | wohin? → Accusative |
|---|---|---|
| masculine | auf **dem** Tisch | auf **den** Tisch |
| feminine | in **der** Küche | in **die** Küche |
| neuter | in **dem** Kino | in **das** Kino |
| plural | hinter **den** Häusern | hinter **die** Häuser |
`,
      examples: [
        { de: 'Die Kinder spielen hinter den Häusern.', en: 'The children are playing behind the houses. (Dative plural: -n)' },
        { de: 'Sie laufen hinter die Häuser.', en: 'They run behind the houses. (Accusative plural)' },
        { de: 'Wir wohnen über dem Supermarkt.', en: 'We live above the supermarket. (wohnen: wo?)' },
      ],
    },
    {
      title: 'Short forms: im, ins, am, ans',
      text: `
Some articles melt into the preposition. You hear the short forms far more often than the long ones.

| full form | short form |
|---|---|
| in dem | **im** |
| in das | **ins** |
| an dem | **am** |
| an das | **ans** |
| auf das | **aufs** |

Dative *dem* becomes **-m** (*im, am*); Accusative *das* becomes **-s** (*ins, ans, aufs*).
`,
      examples: [
        { de: 'Wir sind im Kino.', en: 'We are at the cinema. (im = in dem, wo?)' },
        { de: 'Wir gehen ins Kino.', en: 'We are going to the cinema. (ins = in das, wohin?)' },
        { de: 'Ich sitze am Fenster.', en: 'I am sitting at the window. (am = an dem)' },
      ],
    },
    {
      title: 'an, auf and in: the tricky three',
      text: `
**an** = at or on a **vertical** surface, an edge or water: *an der Wand, am Fenster, am See*.

**auf** = on a **horizontal** surface, and at some public places: *auf dem Tisch, auf dem Markt, auf der Post, auf der Bank*.

**in** = in or into, for buildings you are inside and for countries with an article: *im Büro, in der Schule, in die Schweiz*.
`,
      examples: [
        { de: 'Das Bild hängt an der Wand.', en: 'The picture hangs on the wall. (an: vertical)' },
        { de: 'Die Lampe steht auf dem Tisch.', en: 'The lamp stands on the table. (auf: on top)' },
        { de: 'Ich bin auf der Post.', en: 'I am at the post office. (auf: public place)' },
        { de: 'Wir fahren in die Schweiz.', en: 'We are going to Switzerland. (in + Accusative: country with an article)' },
      ],
    },
    {
      title: 'The other six',
      text: `
The rest are easy because they match English: **hinter** (behind), **vor** (in front of), **neben** (next to), **über** (above, over), **unter** (under), **zwischen** (between). The same rule applies: *wo?* Dative, *wohin?* Accusative.
`,
      examples: [
        { de: 'Die Katze schläft unter dem Bett.', en: 'The cat is sleeping under the bed. (wo?)' },
        { de: 'Er stellt das Fahrrad vor die Tür.', en: 'He puts the bike in front of the door. (wohin?)' },
        { de: 'Sie sitzt zwischen ihrem Bruder und ihrer Mutter.', en: 'She is sitting between her brother and her mother. (wo?)' },
        { de: 'Das Sofa steht neben dem Fenster.', en: 'The sofa is next to the window.' },
      ],
    },
    {
      title: 'When the meaning is not about place',
      text: `
Some two-way prepositions have jobs that have nothing to do with place. Then the case is **fixed**:

- **Time** with *an, in, vor*: always **Dative**. *am Montag, im Mai, vor zwei Jahren.*
- **über** meaning *about*: always **Accusative**. *Wir sprechen über den Film.*
- **Verb + preposition** pairs (*warten auf, denken an*): a fixed case, learned with the verb.
`,
      examples: [
        { de: 'Am Montag habe ich frei.', en: 'On Monday I am off. (time: Dative)' },
        { de: 'Vor zwei Jahren war ich in Rom.', en: 'Two years ago I was in Rome. (time: Dative)' },
        { de: 'Wir sprechen über den Film.', en: 'We are talking about the film. (über = about: Accusative)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-29-two-way-prepositions', note: 'The A1 introduction to wo? (Dative) vs wohin? (Accusative).' },
    { topicId: 'a1-24-dative', note: 'The Dative articles dem / der / dem / den used for locations.' },
    { topicId: 'a1-20-accusative', note: 'The Accusative articles den / die / das / die used for directions.' },
    { topicId: 'a2-17-position-verbs', note: 'stellen / stehen, legen / liegen are the verbs that switch between the two cases.' },
    { topicId: 'a2-18b-nach-zu-in', note: 'in die Schweiz but nach Deutschland: when "to" is in, nach or zu.' },
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
