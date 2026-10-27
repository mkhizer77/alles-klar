import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-04-sein-haben',
  level: 'A1',
  unit: 1,
  order: 4,
  title: 'The verbs sein and haben',
  germanTerm: 'sein / haben',
  tags: ['verbs', 'sein', 'haben', 'irregular', 'present tense'],
  summary: 'sein (to be) and haben (to have) are the two most used German verbs; both are irregular, so their forms must be learned by heart.',
  explanation: `
### Why these two verbs come first

**sein** (*to be*) and **haben** (*to have*) are the most frequent verbs in German. You need them to say who you are, how you feel, what you own and how old you are. Later they also build the past tense (*ich habe gegessen*, *ich bin gegangen*). Both are **irregular**: their forms do not follow the normal pattern, so you learn them as a set, like *am / is / are* in English.

### sein – to be

| pronoun | form | English |
|---|---|---|
| ich | **bin** | I am |
| du | **bist** | you are |
| er / sie / es | **ist** | he / she / it is |
| wir | **sind** | we are |
| ihr | **seid** | you (all) are |
| sie / Sie | **sind** | they are / you are (formal) |

Notice that *sein* itself never appears in these forms. The word *sein* is only the **infinitive**, the dictionary form. Say the table out loud several times: *bin, bist, ist, sind, seid, sind*.

What you use *sein* for:

- **Identity and job**: Ich **bin** Lehrerin. – I am a teacher.
- **Qualities and feelings**: Er **ist** müde. – He is tired.
- **Place**: Wir **sind** in Berlin. – We are in Berlin.
- **Origin**: Sie **ist** aus Polen. – She is from Poland.

### haben – to have

| pronoun | form | English |
|---|---|---|
| ich | **habe** | I have |
| du | **hast** | you have |
| er / sie / es | **hat** | he / she / it has |
| wir | **haben** | we have |
| ihr | **habt** | you (all) have |
| sie / Sie | **haben** | they have / you have (formal) |

*haben* is almost regular. Only **du hast** and **er hat** are odd: the *b* disappears (not *habst*, *habt*).

What you use *haben* for:

- **Possession**: Ich **habe** ein Auto. – I have a car.
- **Family**: Sie **hat** zwei Kinder. – She has two children.
- **Hunger, thirst, time, fear**: Ich **habe** Hunger. – I am hungry. (literally: I have hunger)

### The big difference from English

Several English *to be* phrases use **haben** in German. These are fixed and worth memorising:

| English (to be) | German (haben) |
|---|---|
| I **am** hungry | Ich **habe** Hunger |
| I **am** thirsty | Ich **habe** Durst |
| I **am** in a hurry | Ich **habe** es eilig |
| I **am** afraid | Ich **habe** Angst |
| I **am** right | Ich **habe** Recht |

But **age** uses *sein*: Ich **bin** 30 Jahre alt. – I am 30 years old. (Not *habe*, as in French or Spanish.)

### Why it matters

With just *sein*, *haben* and a few nouns you can already produce dozens of useful sentences: *Ich bin Anna, ich bin 28, ich bin aus London, ich habe einen Bruder, ich habe Hunger.* These two verbs also return in every later unit, especially the Perfekt (past tense), where *haben* or *sein* is the helper verb in every single sentence.
`,
  examples: [
    { de: 'Ich bin Studentin.', en: 'I am a student. (sein for your job or role)' },
    { de: 'Du bist sehr nett.', en: 'You are very kind.' },
    { de: 'Wir sind aus Kanada.', en: 'We are from Canada.' },
    { de: 'Seid ihr müde?', en: 'Are you (all) tired? (ihr seid)' },
    { de: 'Ich habe einen Hund.', en: 'I have a dog.' },
    { de: 'Er hat keine Zeit.', en: 'He has no time. (er hat, no b)' },
    { de: 'Hast du Hunger?', en: 'Are you hungry? (German: do you have hunger)' },
    { de: 'Sie ist 25 Jahre alt.', en: 'She is 25 years old. (age uses sein)' },
  ],
  connections: [
    { topicId: 'a1-03-personal-pronouns', note: 'Each pronoun has its own form of sein and haben; know the pronouns first.' },
    { topicId: 'a1-05-present-tense-regular', note: 'Regular verbs follow a pattern; sein and haben are the exceptions you learn before the pattern.' },
    { topicId: 'a1-11-nominative', note: 'After sein the noun stays in the Nominative: Er ist ein Lehrer.' },
    { topicId: 'a1-31-perfekt-haben', note: 'haben is the helper verb for most past-tense sentences.' },
    { topicId: 'a1-33-war-hatte', note: 'The past forms war (was) and hatte (had) come later.' },
  ],
  edgeCases: [
    '**du hast / er hat** have no *b*. *Du habst* and *er habt* are wrong, though *ihr habt* is correct.',
    '**ihr seid** (you all are) has a *d*, not a *t*. Do not confuse it with *seit* (since), which is a different word.',
    'Hunger, Durst and Angst go with **haben**, not *sein*: *Ich habe Hunger*, never *Ich bin hungrig* in everyday speech (it exists but sounds unusual).',
    'Age goes with **sein**: *Ich bin 30*, not *Ich habe 30*.',
    'The infinitive **sein** never appears as a conjugated form. *Ich sein müde* is wrong; it must be *Ich bin müde*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a1-04-sein-haben-ex01',
      prompt: 'Ich ___ Anna. (sein)',
      answer: ['bin'],
      explanation: 'ich + sein = bin. This is the form you use to introduce yourself.',
    },
    {
      type: 'fill',
      id: 'a1-04-sein-haben-ex02',
      prompt: 'Du ___ sehr nett. (sein)',
      answer: ['bist'],
      explanation: 'du + sein = bist. The -st ending is the normal du ending, attached to the irregular stem bi-.',
    },
    {
      type: 'fill',
      id: 'a1-04-sein-haben-ex03',
      prompt: 'Er ___ ein Auto. (haben)',
      answer: ['hat'],
      explanation: 'er + haben = hat. The b from haben disappears in du hast and er hat.',
    },
    {
      type: 'mc',
      id: 'a1-04-sein-haben-ex04',
      prompt: 'Which is correct?',
      options: ['Ihr seit müde.', 'Ihr seid müde.', 'Ihr sind müde.'],
      answer: 1,
      explanation: 'ihr + sein = seid, with a d. seit is a different word (since). sind belongs to wir and sie.',
    },
    {
      type: 'match',
      id: 'a1-04-sein-haben-ex05',
      prompt: 'Match the pronoun with its form of sein.',
      pairs: [
        ['ich', 'bin'],
        ['du', 'bist'],
        ['er', 'ist'],
        ['wir', 'sind'],
        ['ihr', 'seid'],
      ],
      explanation: 'bin, bist, ist, sind, seid, sind. Only wir and sie / Sie share the same form (sind).',
    },
    {
      type: 'mc',
      id: 'a1-04-sein-haben-ex06',
      prompt: 'How do you say "I am hungry"?',
      options: ['Ich bin Hunger.', 'Ich habe Hunger.', 'Ich habe hungrig.'],
      answer: 1,
      explanation: 'German says "I have hunger": Ich habe Hunger. The same goes for Durst (thirst) and Angst (fear).',
    },
    {
      type: 'fill',
      id: 'a1-04-sein-haben-ex07',
      prompt: '___ du Geschwister? (haben)',
      answer: ['Hast'],
      explanation: 'du + haben = hast. In a yes/no question the verb comes first, so it is capitalised.',
    },
    {
      type: 'order',
      id: 'a1-04-sein-haben-ex08',
      prompt: 'Build the sentence: "We are from Canada."',
      words: ['aus', 'Wir', 'Kanada.', 'sind'],
      answer: ['Wir sind aus Kanada.'],
      explanation: 'wir + sein = sind. Verb second, then aus + country.',
    },
    {
      type: 'mc',
      id: 'a1-04-sein-haben-ex09',
      prompt: 'Which sentence says "I am 30 years old" correctly?',
      options: ['Ich habe 30 Jahre.', 'Ich bin 30 Jahre alt.', 'Ich habe 30 Jahre alt.'],
      answer: 1,
      explanation: 'Age uses sein in German, like English: Ich bin 30 (Jahre alt). Only hunger, thirst and the like use haben.',
    },
    {
      type: 'fill',
      id: 'a1-04-sein-haben-ex10',
      prompt: 'Wir ___ keine Zeit. (haben)',
      answer: ['haben'],
      explanation: 'wir + haben = haben, the same as the infinitive. wir and sie / Sie always share this form.',
    },
    {
      type: 'translate',
      id: 'a1-04-sein-haben-ex11',
      prompt: 'Translate: "She has two children."',
      answer: ['Sie hat zwei Kinder.'],
      hint: 'das Kind, die Kinder = child, children; zwei = two',
      explanation: 'sie (she) + haben = hat. Kinder is the plural of Kind.',
    },
    {
      type: 'mc',
      id: 'a1-04-sein-haben-ex12',
      prompt: 'Choose the correct pair: "___ Sie Herr Weber? – Ja, und ich ___ eine Frage."',
      options: ['Sind / habe', 'Seid / hat', 'Bist / haben'],
      answer: 0,
      explanation: 'Formal Sie takes sind. ich + haben = habe. So: Sind Sie Herr Weber? – Ja, und ich habe eine Frage.',
    },
  ],
};

export default topic;
