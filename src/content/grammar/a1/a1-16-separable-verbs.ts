import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-16-separable-verbs',
  level: 'A1',
  unit: 3,
  order: 16,
  title: 'Separable and inseparable verbs',
  germanTerm: 'trennbare Verben',
  tags: ['verbs', 'separable', 'prefix', 'word order', 'sentence bracket'],
  summary: 'Many verbs have a prefix (an-, auf-, ein-, mit- …) that splits off and goes to the end of the sentence; a few prefixes (be-, ver-, er- …) never split.',
  explanation: `
### Verbs with a prefix

German loves to build new verbs by putting a **prefix** (*Präfix*) in front of a basic verb. *kommen* (to come) gives *ankommen* (to arrive), *mitkommen* (to come along), *zurückkommen* (to come back), *bekommen* (to get). The prefix changes the meaning, sometimes a lot.

Prefixes come in two kinds. **Separable** prefixes (*trennbar*) split off in a normal sentence; **inseparable** ones (*untrennbar*) never do.

### Separable verbs: the prefix goes to the end

In a statement or question, the verb is conjugated as usual and takes position 2. The prefix goes to the **very end** of the sentence.

| infinitive | sentence |
|---|---|
| **an**rufen (to call) | Ich **rufe** dich morgen **an**. |
| **auf**stehen (to get up) | Er **steht** um sieben Uhr **auf**. |
| **ein**kaufen (to shop) | Wir **kaufen** am Samstag **ein**. |
| **mit**kommen (to come along) | **Kommst** du **mit**? |
| **fern**sehen (to watch TV) | Sie **sieht** abends **fern**. |

The verb and its prefix form a **bracket** (*Satzklammer*) around the rest of the sentence. Everything else, time, place, objects, goes inside the bracket. This bracket is one of the most German things about German, and it returns with modal verbs and the past tense.

### Which prefixes are separable?

The common separable prefixes are all words that can also stand alone (mostly prepositions and adverbs):

**ab-, an-, auf-, aus-, ein-, mit-, nach-, vor-, zu-, zurück-, weg-, los-, fern-**

In speech the **stress** is on the prefix: **AN**rufen, **AUF**stehen. If the prefix is stressed, the verb separates.

### Inseparable verbs: the prefix stays

Eight prefixes never separate. They are never stressed and are not words on their own:

**be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**

| infinitive | sentence |
|---|---|
| **be**kommen (to get) | Ich **bekomme** ein Paket. |
| **ver**stehen (to understand) | Ich **verstehe** das nicht. |
| **be**zahlen (to pay) | Er **bezahlt** die Rechnung. |
| **er**klären (to explain) | Sie **erklärt** die Regel. |

So *bekommen* and *ankommen* both come from *kommen*, but one keeps its prefix and the other sends it to the end: *Ich **bekomme** den Brief* vs *Ich **komme** um acht **an**.*

### When the verb does not separate

The prefix stays attached whenever the verb is **not** the conjugated verb in position 2:

- in the **infinitive** after a modal verb: *Ich muss früh **aufstehen**.*
- at the end of a **sub-clause** (later): *…, weil ich früh **aufstehe**.*
- in the **past participle**, the *ge-* goes between prefix and verb: *auf**ge**standen, an**ge**rufen*.

### The imperative

In a command the prefix also goes to the end: ***Steh** bitte **auf**! **Ruf** mich **an**! **Kommen** Sie **mit**!*

### Why it matters

Separable verbs are everywhere in daily life: getting up, shopping, calling, arriving, starting, stopping, watching TV. If you do not know the rule, a sentence like *Ich rufe dich an* looks as if it has a mystery word at the end. Once you know it, you learn to **listen to the end** of every German sentence, because the end can change the meaning: *Ich mache das Licht **an*** (on) vs *Ich mache das Licht **aus*** (off).
`,
  examples: [
    { de: 'Ich stehe um sechs Uhr auf.', en: 'I get up at six. (aufstehen)' },
    { de: 'Rufst du mich heute Abend an?', en: 'Will you call me this evening? (anrufen)' },
    { de: 'Der Zug kommt um 9:15 an.', en: 'The train arrives at 9:15. (ankommen)' },
    { de: 'Wir kaufen morgen ein.', en: 'We are going shopping tomorrow. (einkaufen)' },
    { de: 'Kommst du mit?', en: 'Are you coming along? (mitkommen)' },
    { de: 'Ich bekomme ein Geschenk.', en: 'I am getting a present. (bekommen: inseparable)' },
    { de: 'Ich verstehe die Frage nicht.', en: 'I do not understand the question. (verstehen: inseparable)' },
    { de: 'Ich muss früh aufstehen.', en: 'I have to get up early. (infinitive after a modal: not separated)' },
  ],
  connections: [
    { topicId: 'a1-06-verb-second', note: 'The conjugated part stays in position 2; the prefix forms the other end of the bracket.' },
    { topicId: 'a1-05-present-tense-regular', note: 'The main verb part takes the normal endings: ich rufe an, du rufst an.' },
    { topicId: 'a1-17-modal-verbs', note: 'After a modal the separable verb stays in one piece at the end of the sentence.' },
    { topicId: 'a1-18-imperative', note: 'In commands the prefix goes to the end: Steh auf!' },
    { topicId: 'a1-31-perfekt-haben', note: 'The past participle puts -ge- inside: angerufen, aufgestanden.' },
  ],
  edgeCases: [
    'The prefix goes to the **very end**, after everything else: *Ich rufe dich morgen um acht an*, not *Ich rufe an dich morgen*.',
    '**be-, ver-, er-, ent-, emp-, ge-, miss-, zer-** never separate: *Ich bezahle*, never *Ich zahle be*.',
    'After a **modal verb** the separable verb stays whole at the end: *Ich will mitkommen*, not *Ich will kommen mit*.',
    'A few prefixes (**um-, über-, unter-, durch-, wieder-**) can be either, depending on the verb and stress. At A1 just learn each verb: *umsteigen* (separable), *wiederholen* (inseparable).',
    'Stress tells you: **AN**kommen is separable, be**KOM**men is not.',
    'The prefix can change the meaning completely: *anmachen* (turn on), *ausmachen* (turn off), *aufmachen* (open), *zumachen* (close).',
  ],
  exercises: [
    {
      type: 'order',
      id: 'a1-16-separable-verbs-ex01',
      prompt: 'Build the sentence: "I get up at seven." (aufstehen)',
      words: ['um', 'stehe', 'auf.', 'Ich', 'sieben'],
      answer: ['Ich stehe um sieben auf.'],
      explanation: 'The conjugated part stehe is second; the prefix auf goes to the end.',
    },
    {
      type: 'fill',
      id: 'a1-16-separable-verbs-ex02',
      prompt: 'Ich rufe dich morgen ___. (anrufen – prefix)',
      answer: ['an'],
      explanation: 'anrufen separates: rufe … an. The prefix an goes to the end of the sentence.',
    },
    {
      type: 'mc',
      id: 'a1-16-separable-verbs-ex03',
      prompt: 'Which sentence is correct for "The train arrives at nine"?',
      options: ['Der Zug ankommt um neun.', 'Der Zug kommt um neun an.', 'Der Zug kommt an um neun.'],
      answer: 1,
      explanation: 'The prefix an goes to the very end, after the time: kommt um neun an.',
    },
    {
      type: 'mc',
      id: 'a1-16-separable-verbs-ex04',
      prompt: 'Which verb is inseparable?',
      options: ['aufstehen', 'bezahlen', 'mitkommen'],
      answer: 1,
      explanation: 'be- is an inseparable prefix: Ich bezahle. auf- and mit- are separable.',
    },
    {
      type: 'match',
      id: 'a1-16-separable-verbs-ex05',
      prompt: 'Match the separable verb with its meaning.',
      pairs: [
        ['aufstehen', 'to get up'],
        ['einkaufen', 'to go shopping'],
        ['anrufen', 'to call (phone)'],
        ['fernsehen', 'to watch TV'],
        ['mitkommen', 'to come along'],
      ],
      explanation: 'All five are everyday separable verbs. In a sentence the prefix (auf, ein, an, fern, mit) goes to the end.',
    },
    {
      type: 'fill',
      id: 'a1-16-separable-verbs-ex06',
      prompt: 'Ich ___ die Frage nicht. (verstehen)',
      answer: ['verstehe'],
      explanation: 'ver- never separates. The whole verb stays in position 2: Ich verstehe die Frage nicht.',
    },
    {
      type: 'order',
      id: 'a1-16-separable-verbs-ex07',
      prompt: 'Build the question: "Are you coming along?" (mitkommen, du)',
      words: ['mit?', 'du', 'Kommst'],
      answer: ['Kommst du mit?'],
      explanation: 'In a yes/no question the conjugated part comes first and the prefix still goes to the end: Kommst du mit?',
    },
    {
      type: 'mc',
      id: 'a1-16-separable-verbs-ex08',
      prompt: 'Complete: "Ich muss morgen früh ___."',
      options: ['aufstehen', 'stehen auf', 'auf stehen'],
      answer: 0,
      explanation: 'After a modal verb (muss) the separable verb is an infinitive and stays in one piece: aufstehen.',
    },
    {
      type: 'fill',
      id: 'a1-16-separable-verbs-ex09',
      prompt: 'Sie sieht jeden Abend ___. (fernsehen – prefix)',
      answer: ['fern'],
      explanation: 'fernsehen separates: sieht … fern. Note the stem change e → ie in sieht.',
    },
    {
      type: 'translate',
      id: 'a1-16-separable-verbs-ex10',
      prompt: 'Translate: "We are going shopping tomorrow."',
      answer: ['Wir kaufen morgen ein.', 'Morgen kaufen wir ein.'],
      hint: 'einkaufen = to go shopping, morgen = tomorrow',
      explanation: 'kaufen is second, ein at the end. Starting with Morgen is also fine: the verb stays second and ein stays last.',
    },
    {
      type: 'mc',
      id: 'a1-16-separable-verbs-ex11',
      prompt: 'Which sentence is wrong?',
      options: ['Ich bekomme ein Paket.', 'Ich komme ein Paket be.', 'Ich mache das Licht an.'],
      answer: 1,
      explanation: 'bekommen is inseparable; be- can never go to the end. anmachen is separable, so "mache … an" is correct.',
    },
    {
      type: 'translate',
      id: 'a1-16-separable-verbs-ex12',
      prompt: 'Translate: "Please call me." (informal, one person)',
      answer: ['Ruf mich bitte an.', 'Ruf mich bitte an!', 'Bitte ruf mich an.', 'Bitte ruf mich an!'],
      hint: 'anrufen = to call, mich = me',
      explanation: 'In the du imperative the verb has no ending and the prefix goes to the end: Ruf … an.',
    },
  ],
};

export default topic;
