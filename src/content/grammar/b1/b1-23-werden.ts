import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-23-werden',
  level: 'B1',
  unit: 8,
  order: 23,
  title: 'The three jobs of werden (future, passive, change)',
  germanTerm: 'werden',
  tags: ['verbs', 'werden', 'future', 'passive', 'tenses'],
  summary: 'werden has three jobs: as a full verb it means "to become", with an infinitive it builds the future, and with a Partizip II it builds the passive – the end of the clause tells you which.',
  explanation: `
### One verb, three jobs

**werden** appears in a huge number of German sentences, and learners often feel unsure what it means each time. The good news: there are only **three jobs**, and the word at the **end of the clause** tells you which one you are looking at.

| Job | What stands at the end | Meaning | Example |
|---|---|---|---|
| 1. **Full verb** | adjective or noun (or nothing) | to become, to get | Es **wird** kalt. / Er **wird** Arzt. |
| 2. **Future** (*Futur I*) | **infinitive** | will | Ich **werde** morgen **anrufen**. |
| 3. **Passive** (*Passiv*) | **Partizip II** | is / gets done | Das Haus **wird gebaut**. |

So: look to the end. *Infinitive* → future. *Partizip II* → passive. *Adjective / noun* → change.

### Forms of werden

| | Present | Präteritum | Partizip II |
|---|---|---|---|
| ich | werde | wurde | geworden / worden |
| du | **wirst** | wurdest | |
| er / sie / es | **wird** | wurde | |
| wir | werden | wurden | |
| ihr | werdet | wurdet | |
| sie / Sie | werden | wurden | |

*werden* is irregular: *du wirst, er wird* (no *-d-* in the stem), Präteritum *wurde*.

### Job 1: becoming

As a full verb, *werden* describes a **change of state**. The thing after it is an adjective or a Nominative noun:

- Die Tage **werden** länger. (The days are getting longer.)
- Sie **wird** Lehrerin. (She is becoming a teacher.)
- Er **ist** gestern 30 **geworden**. (He turned 30 yesterday.)

The Perfekt uses **sein** and the participle **geworden**.

### Job 2: the future

*werden* + **infinitive** at the end = *Futur I*. German often uses the present tense for the future, so *werden* mainly adds a sense of promise, prediction or intention:

- Ich **werde** dir **helfen**. (I will help you.)
- Es **wird** morgen **regnen**. (It is going to rain tomorrow.)

### Job 3: the passive

*werden* + **Partizip II** at the end = *Vorgangspassiv*. The subject is not the doer but the thing something is done to:

- Der Brief **wird geschrieben**. (The letter is being written.)
- Die Brücke **wurde** 1950 **gebaut**. (The bridge was built in 1950.)
- Das Auto **ist** repariert **worden**. (The car has been repaired.)

Note the special participle: in the passive Perfekt it is **worden** without *ge-*, placed after the main participle.

### A fourth look-alike: würde

**würde** is the *Konjunktiv II* of *werden*. It also takes an infinitive at the end but means "would": *Ich **würde** gern **kommen*** (I would like to come). It is not a tense; it is a mood.

### Why it matters

Being able to **decode** *werden* instantly is essential for reading B1 texts, where news reports mix passive and future freely. Being able to **choose** the right job lets you talk about plans (*werde … machen*), processes (*wird … gemacht*) and changes (*wird … besser*) with one familiar verb.
`,
  examples: [
    { de: 'Es wird dunkel.', en: 'It is getting dark. (full verb: adjective at the end)' },
    { de: 'Mein Bruder wird Ingenieur.', en: 'My brother is becoming an engineer. (full verb: Nominative noun)' },
    { de: 'Wir werden nächstes Jahr nach Spanien fahren.', en: 'We will go to Spain next year. (future: infinitive at the end)' },
    { de: 'Der Kuchen wird gerade gebacken.', en: 'The cake is being baked right now. (passive: Partizip II at the end)' },
    { de: 'Die Schule wurde 1900 gebaut.', en: 'The school was built in 1900. (passive Präteritum: wurde)' },
    { de: 'Sie ist Mutter geworden.', en: 'She has become a mother. (Perfekt of the full verb: geworden)' },
    { de: 'Das Fenster ist gestern repariert worden.', en: 'The window was repaired yesterday. (passive Perfekt: worden)' },
  ],
  connections: [
    { topicId: 'a1-11-nominative', note: 'After werden as a full verb, the noun is in the Nominative, just as after sein.' },
    { topicId: 'a2-19-futur-1', note: 'Futur I with werden + infinitive is job 2.' },
    { topicId: 'b1-06-passive-present-past', note: 'The passive with werden + Partizip II is job 3.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'The passive Perfekt uses worden, not geworden.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'würde is the Konjunktiv II of werden and means "would".' },
  ],
  edgeCases: [
    '**geworden** (Perfekt of the full verb: *Er ist alt geworden*) vs **worden** (passive Perfekt: *Es ist gemacht worden*). Both go with *sein*.',
    'The full verb takes the **Nominative**: *Er wird **ein** guter Arzt*, not *einen*.',
    '*werden* + Partizip II is passive, but *sein* + Partizip II is the Zustandspassiv (state): *Die Tür wird geschlossen* (is being closed) vs *Die Tür ist geschlossen* (is closed).',
    'In the future and passive, *werden* is only a helper: the real meaning is in the verb at the end. In job 1 *werden* carries the meaning itself.',
    '*du wirst / er wird* lose the *-d-* of the stem; do not write *werdst* or *werdt*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-23-werden-ex01',
      prompt: 'Which job does werden have in "Es wird dunkel."?',
      options: ['change (full verb)', 'future', 'passive'],
      answer: 0,
      explanation: 'dunkel is an adjective, so werden is a full verb meaning "become / get": it is getting dark.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex02',
      prompt: 'Which job does werden have in "Das Haus wird gebaut."?',
      options: ['passive', 'future', 'change (full verb)'],
      answer: 0,
      explanation: 'gebaut is a Partizip II, so werden + gebaut is the passive: the house is being built.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex03',
      prompt: 'Which job does werden have in "Ich werde morgen anrufen."?',
      options: ['future', 'passive', 'change (full verb)'],
      answer: 0,
      explanation: 'anrufen is an infinitive, so werden + infinitive is Futur I: I will call tomorrow.',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex04',
      prompt: 'Du ___ (werden) bald 30.',
      answer: ['wirst'],
      explanation: 'werden is irregular in the du-form: du wirst. Here it is the full verb: you will soon turn 30.',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex05',
      prompt: 'Sie ist Lehrerin ___. (werden, Perfekt)',
      answer: ['geworden'],
      explanation: 'As a full verb, werden forms the Perfekt with sein + geworden: she has become a teacher.',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex06',
      prompt: 'Das Auto ist gestern repariert ___. (passive Perfekt)',
      answer: ['worden'],
      explanation: 'In the passive Perfekt the participle of werden is worden, without ge-, placed after repariert.',
    },
    {
      type: 'match',
      id: 'b1-23-werden-ex07',
      prompt: 'Match each sentence with the job of werden / würde.',
      pairs: [
        ['Er wird müde.', 'change (full verb)'],
        ['Der Brief wird geschrieben.', 'passive'],
        ['Wir werden gewinnen.', 'future'],
        ['Ich würde gern kommen.', 'Konjunktiv II (would)'],
      ],
      explanation: 'Adjective at the end = change; Partizip II = passive; infinitive with werden = future; infinitive with würde = would.',
    },
    {
      type: 'order',
      id: 'b1-23-werden-ex08',
      prompt: 'Build the sentence: "The weather will get better tomorrow."',
      words: ['wird', 'Wetter', 'Das', 'besser', 'morgen', 'werden.'],
      answer: ['Das Wetter wird morgen besser werden.'],
      explanation: 'Two jobs in one sentence: wird is the future helper in position 2, and the infinitive werden (become) at the end is the full verb.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex09',
      prompt: 'Complete: "Er ___ gestern 40."',
      options: ['wurde', 'wird', 'worden'],
      answer: 0,
      explanation: 'gestern needs a past tense. The Präteritum of werden is wurde: he turned 40 yesterday.',
    },
    {
      type: 'translate',
      id: 'b1-23-werden-ex10',
      prompt: 'Translate: "The food is being cooked."',
      answer: ['Das Essen wird gekocht.'],
      hint: 'das Essen; kochen = to cook; passive',
      explanation: 'Passive present: wird + Partizip II (gekocht) at the end.',
    },
    {
      type: 'mc',
      id: 'b1-23-werden-ex11',
      prompt: 'In which sentence is werden used for the passive?',
      options: ['Die Kinder werden groß.', 'Die Kinder werden abgeholt.', 'Die Kinder werden spielen.'],
      answer: 1,
      explanation: 'abgeholt is a Partizip II, so this is the passive (the children are being picked up). groß is an adjective (change), spielen an infinitive (future).',
    },
    {
      type: 'fill',
      id: 'b1-23-werden-ex12',
      prompt: 'Die Brücke ___ 1950 gebaut. (passive, Präteritum)',
      answer: ['wurde'],
      explanation: 'Passive in the past: wurde + Partizip II. The bridge was built in 1950.',
    },
  ],
};

export default topic;
