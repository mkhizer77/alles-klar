import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-17-position-verbs',
  level: 'A2',
  unit: 6,
  order: 17,
  title: 'Verbs of placing and position (stellen / stehen, legen / liegen …)',
  germanTerm: 'Positionsverben',
  tags: ['verbs', 'prepositions', 'accusative', 'dative', 'position'],
  summary: 'German uses pairs of verbs for "putting" and "being somewhere": one verb for the action (stellen, legen, setzen, hängen) and a partner verb for the resulting position (stehen, liegen, sitzen, hängen).',
  explanation: `
### What it is

English says *put* for almost everything: put the glass on the table, put the book in the bag, put the coat on the hook. German is more precise. It has a small set of **position verbs** (*Positionsverben*) that come in **pairs**:

- one verb for the **action** of placing something (*stellen* – to stand something up),
- one verb for the **state** that follows (*stehen* – to be standing).

The action verbs answer **wohin?** (where to?) and take the **Accusative**. The state verbs answer **wo?** (where?) and take the **Dative**. This is the same rule as the two-way prepositions, so the two topics belong together.

### The pairs

| action (wohin? + Accusative) | state (wo? + Dative) | used for |
|---|---|---|
| **stellen** (to stand something up) | **stehen** (to stand) | upright things: bottles, glasses, lamps, people standing |
| **legen** (to lay something down) | **liegen** (to lie) | flat things: books, pens, clothes, people lying |
| **setzen** (to set / sit someone down) | **sitzen** (to sit) | people and animals sitting; *sich setzen* = to sit down |
| **hängen** (to hang something up) | **hängen** (to be hanging) | pictures, coats, lamps on the ceiling |
| **stecken** (to put inside) | **stecken** (to be inside) | keys in a lock, hands in pockets, a letter in an envelope |

### The Perfekt forms

The **action verbs are regular**: their Partizip II ends in *-t*. The **state verbs are irregular**: their Partizip II ends in *-en* and the vowel changes. Both groups use **haben**.

| verb | er / sie / es | Perfekt |
|---|---|---|
| stellen | stellt | hat gestellt |
| stehen | steht | hat gestanden |
| legen | legt | hat gelegt |
| liegen | liegt | hat gelegen |
| setzen | setzt | hat gesetzt |
| sitzen | sitzt | hat gesessen |
| hängen | hängt | hat gehängt (action) / hat gehangen (state) |

You may also see the one-word past (Präteritum) in stories: *stand, lag, saß, hing* for the state verbs, *stellte, legte, setzte, hängte* for the action verbs. You only need to recognise these for now.

### How a sentence works

Action: **subject + action verb + object (Accusative) + place (Accusative)**

- Ich **stelle die Flasche** auf **den** Tisch. – *I put the bottle on the table.*

State: **subject + state verb + place (Dative)**

- Die Flasche **steht** auf **dem** Tisch. – *The bottle is (standing) on the table.*

Notice that the thing being placed (*die Flasche*) becomes the subject of the state sentence.

### Why it matters

German speakers never say *Das Buch ist auf dem Tisch* when they can say *Das Buch liegt auf dem Tisch*. Using the right position verb is one of the clearest signs that you have moved past A1. It also forces you to pick the right case after a two-way preposition: action → Accusative, state → Dative. Get the verb right and the case follows automatically.
`,
  examples: [
    { de: 'Ich stelle die Vase auf den Tisch.', en: 'I put the vase on the table. (stellen: upright → Accusative)' },
    { de: 'Die Vase steht auf dem Tisch.', en: 'The vase is standing on the table. (stehen: state → Dative)' },
    { de: 'Er legt das Handy in die Tasche.', en: 'He puts the phone in the bag. (legen: flat)' },
    { de: 'Das Handy liegt in der Tasche.', en: 'The phone is in the bag.' },
    { de: 'Setz dich bitte auf den Stuhl!', en: 'Please sit down on the chair. (sich setzen = to sit down)' },
    { de: 'Wir sitzen schon im Restaurant.', en: 'We are already sitting in the restaurant.' },
    { de: 'Sie hängt die Jacke an den Haken.', en: 'She hangs the jacket on the hook.' },
    { de: 'Der Schlüssel steckt im Schloss.', en: 'The key is in the lock. (stecken: inside)' },
  ],
  connections: [
    { topicId: 'a1-29-two-way-prepositions', note: 'The wohin? / wo? rule for prepositions is exactly the action / state rule for these verbs.' },
    { topicId: 'a2-16-two-way-prepositions-depth', note: 'The two-way prepositions (an, auf, in, über, unter …) are the ones you use after position verbs.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'sich setzen, sich legen and sich stellen are reflexive: Ich setze mich.' },
    { topicId: 'a2-02-prateritum-verbs', note: 'In written stories you will see the state verbs in the Präteritum: stand, lag, saß.' },
  ],
  edgeCases: [
    '**stellen** is only for things that stand upright (a bottle, a lamp). A book lying flat on the table is *gelegt*; a book standing on a shelf is *gestellt*.',
    'People use **setzen / sitzen**, not *stellen*: *Das Kind sitzt auf dem Stuhl*, never *steht auf dem Stuhl* (unless it really stands on it).',
    'In the Perfekt, **stehen, liegen, sitzen** use *haben* in standard German: *Ich habe gesessen*. (In southern Germany and Austria you will hear *ich bin gesessen*, but the textbook form is *haben*.)',
    'The two forms of **hängen** look the same in the present (*hängt*). Only the Perfekt shows the difference: *hat gehängt* (action) vs *hat gehangen* (state).',
    'Do not add **sich** by mistake to the state verb: *Ich setze mich* (I sit down) but *Ich sitze* (I am sitting), never *Ich sitze mich*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-17-position-verbs-ex01',
      prompt: 'Complete: "Ich ___ das Buch auf den Tisch."',
      options: ['lege', 'liege', 'legt'],
      answer: 0,
      explanation: 'auf den Tisch answers wohin? (Accusative), so you need the action verb legen. A book goes flat, so legen, not stellen.',
    },
    {
      type: 'fill',
      id: 'a2-17-position-verbs-ex02',
      prompt: 'Das Buch ___ auf dem Tisch. (liegen)',
      answer: ['liegt'],
      explanation: 'auf dem Tisch is wo? (Dative), so you need the state verb: das Buch liegt.',
    },
    {
      type: 'mc',
      id: 'a2-17-position-verbs-ex03',
      prompt: 'You put a bottle upright on the table. Which verb?',
      options: ['legen', 'stellen', 'setzen'],
      answer: 1,
      explanation: 'A bottle stands up, so you stellen it. legen is for flat things and setzen is for people and animals.',
    },
    {
      type: 'fill',
      id: 'a2-17-position-verbs-ex04',
      prompt: 'Er ___ die Jacke an den Haken. (hängen)',
      answer: ['hängt'],
      explanation: 'an den Haken is Accusative (wohin?), so this is the action verb hängen. In the present tense both forms are hängt.',
    },
    {
      type: 'match',
      id: 'a2-17-position-verbs-ex05',
      prompt: 'Match each verb with its Perfekt form.',
      pairs: [
        ['stellen', 'hat gestellt'],
        ['stehen', 'hat gestanden'],
        ['legen', 'hat gelegt'],
        ['liegen', 'hat gelegen'],
        ['setzen', 'hat gesetzt'],
        ['sitzen', 'hat gesessen'],
      ],
      explanation: 'The action verbs are regular (ge-…-t); the state verbs are irregular (ge-…-en with a vowel change).',
    },
    {
      type: 'mc',
      id: 'a2-17-position-verbs-ex06',
      prompt: 'Complete: "Wo ___ meine Schlüssel?"',
      options: ['legen', 'liegen', 'legt'],
      answer: 1,
      explanation: 'wo? asks about a state, so liegen. Schlüssel is plural here, so the verb is liegen, not liegt.',
    },
    {
      type: 'fill',
      id: 'a2-17-position-verbs-ex07',
      prompt: 'Sie hat die Vase auf den Tisch ___. (stellen, Partizip II)',
      answer: ['gestellt'],
      explanation: 'stellen is regular: ge- + stell + -t = gestellt. The Accusative (den Tisch) confirms it is the action verb.',
    },
    {
      type: 'order',
      id: 'a2-17-position-verbs-ex08',
      prompt: 'Build the sentence: "The coat is hanging in the wardrobe."',
      words: ['im', 'hängt', 'Der', 'Schrank.', 'Mantel'],
      answer: ['Der Mantel hängt im Schrank.'],
      explanation: 'Subject first, verb second, then the place. im Schrank = in dem Schrank (Dative), because it is a state (wo?).',
    },
    {
      type: 'fill',
      id: 'a2-17-position-verbs-ex09',
      prompt: 'Das Buch hat gestern noch hier ___. (liegen, Partizip II)',
      answer: ['gelegen'],
      explanation: 'liegen is a state verb and irregular: liegen – hat gelegen. The place (hier) answers wo?, so it is the state verb, not legen.',
    },
    {
      type: 'mc',
      id: 'a2-17-position-verbs-ex10',
      prompt: 'Complete: "Die Kinder haben sich auf das Sofa ___."',
      options: ['gesessen', 'gesetzt', 'gesitzt'],
      answer: 1,
      explanation: 'sich setzen (to sit down) is the action verb and it is regular: gesetzt. gesessen belongs to sitzen (state) and gesitzt does not exist.',
    },
    {
      type: 'translate',
      id: 'a2-17-position-verbs-ex11',
      prompt: 'Translate: "I put the glass on the table."',
      answer: ['Ich stelle das Glas auf den Tisch.'],
      hint: 'das Glas = the glass; a glass stands upright',
      explanation: 'A glass stands, so stellen. The place answers wohin?, so auf den Tisch (Accusative).',
    },
    {
      type: 'mc',
      id: 'a2-17-position-verbs-ex12',
      prompt: 'Which sentence is correct?',
      options: ['Das Bild hat an der Wand gehangen.', 'Das Bild hat an die Wand gehangen.', 'Das Bild hat an der Wand gehängt.'],
      answer: 0,
      explanation: 'The picture is in a state (wo? an der Wand, Dative), so you need the state verb: hat gehangen. gehängt belongs to the action verb (hängen an die Wand).',
    },
  ],
};

export default topic;
