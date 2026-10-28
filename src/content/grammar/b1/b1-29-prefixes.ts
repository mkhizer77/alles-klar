import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-29-prefixes',
  level: 'B1',
  unit: 10,
  order: 29,
  title: 'Prefixes: un-, ver-, be-, er-, ent-, zer-, miss-',
  germanTerm: 'Präfixe',
  tags: ['word formation', 'prefixes', 'verbs', 'vocabulary'],
  summary: 'Prefixes are small pieces added to the front of a word that change its meaning in a predictable way: un- makes the opposite, zer- means "into pieces", ent- means "away", and so on – knowing them lets you decode words you have never seen.',
  explanation: `
### What a prefix does

Knowing a few prefixes lets you guess new words from words you already know:

- *glücklich* (happy) → **un**glücklich (unhappy)
- *brechen* (to break) → **zer**brechen (to break into pieces)

A **prefix** (*Präfix*) is a syllable attached to the **front** of a word. The base word keeps its core meaning, and the prefix adds a twist: "not", "wrong", "away", "into pieces". If you know the twist, you can often guess a new word without a dictionary.

Most of the prefixes here go on **verbs** and are **inseparable** (*untrennbar*): they never split off, they are unstressed, and the Partizip II has **no ge-**. Only *un-* is different: it goes on adjectives and nouns.

### The prefixes and their meanings

| Prefix | Core meaning | Examples |
|---|---|---|
| **un-** | not, the opposite (adjectives, nouns) | un**glücklich**, un**möglich**, die Un**ordnung**, das Un**glück** |
| **ver-** | 1. wrong (often reflexive) 2. change / away / finish 3. makes a verb from an adjective | 1. sich ver**laufen**, sich ver**schreiben** 2. ver**reisen**, ver**kaufen**, ver**schwinden** 3. ver**bessern**, ver**größern** |
| **be-** | turns a verb or noun into a verb with a **direct object** | be**antworten** (eine Frage), be**suchen**, be**zahlen** |
| **er-** | reach a result, achieve | er**reichen**, er**finden**, er**kennen**, er**klären** |
| **ent-** | away, remove, undo | ent**fernen**, ent**decken**, ent**kommen**, ent**schuldigen** |
| **zer-** | into pieces, destroy | zer**brechen**, zer**stören**, zer**reißen**, zer**schneiden** |
| **miss-** | wrong, bad, failed | miss**verstehen**, der Miss**erfolg**, das Miss**verständnis** |

### How to use the table

- **un-** is the easiest: *möglich* → *unmöglich*, *freundlich* → *unfreundlich*, *Glück* → *Unglück*. It does not work on every adjective (not *unalt*), but it works on hundreds.
- **ver-** with **sich** usually means "do it wrong": *sich verlaufen* (get lost), *sich verfahren* (drive the wrong way), *sich versprechen* (misspeak). Without *sich* it often means change or away: *verbessern* (make better), *verkaufen* (sell), *verreisen* (go away on a trip).
- **be-** is the "object-maker": *antworten auf eine Frage* → *eine Frage beantworten*. The preposition disappears and the noun becomes a direct object.
- **ent-** often means the opposite of the base: *decken* (cover) → *entdecken* (discover, uncover); *laden* (load) → *entladen* (unload).
- **zer-** always means that something ends up in pieces.

### Grammar of these prefixes

| Feature | Inseparable prefixes (ver-, be-, er-, ent-, zer-, miss-) |
|---|---|
| Stress | on the **stem**: ver**STE**hen, be**ZAH**len |
| Partizip II | **no ge-**: verstanden, bezahlt, zerbrochen |
| zu + infinitive | *zu* stands in front as one word: zu verstehen |

### Why it matters

German builds thousands of words from a small set of prefixes. With the table above you can decode *entfernen*, *zerreißen* or *missverstehen* on first sight, and you can **build** words yourself: *unhöflich*, *verbessern*. That pays off in the B1 reading part, where unknown words are the main obstacle.
`,
  examples: [
    { de: 'Das ist leider unmöglich.', en: 'Unfortunately that is impossible. (un- = not)' },
    { de: 'Ich habe mich in der Stadt verlaufen.', en: 'I got lost in the city. (sich ver- = did it wrong)' },
    { de: 'Kannst du diese Frage beantworten?', en: 'Can you answer this question? (be- = takes a direct object)' },
    { de: 'Wer hat das Telefon erfunden?', en: 'Who invented the telephone? (er- = achieve a result)' },
    { de: 'Bitte entfernen Sie den Aufkleber.', en: 'Please remove the sticker. (ent- = away)' },
    { de: 'Das Glas ist zerbrochen.', en: 'The glass is broken into pieces. (zer- = into pieces)' },
    { de: 'Ich habe dich missverstanden.', en: 'I misunderstood you. (miss- = wrong; no ge- in the participle)' },
  ],
  connections: [
    { topicId: 'a1-16-separable-verbs', note: 'be-, ver-, er-, ent-, zer- and miss- are the inseparable prefixes introduced there.' },
    { topicId: 'a1-31-perfekt-haben', note: 'Verbs with inseparable prefixes form the Partizip II without ge-.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Word formation 1 covered compounds and -ung / -er; prefixes are the next tool.' },
    { topicId: 'b1-30-suffixes', note: 'Prefixes change the meaning; suffixes change the word type. Together they explain most long German words.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'The "wrong" meaning of ver- usually needs a reflexive pronoun: sich verlaufen.' },
  ],
  edgeCases: [
    'Inseparable prefixes take **no ge-** in the Partizip II: *verstanden*, *bezahlt*, not *geverstanden*.',
    '*ver-* has several meanings; *sich* is the signal for "wrong": *sich verfahren* (go the wrong way) vs *verfahren* (proceed).',
    '*un-* only negates; it never attaches to verbs. *unmachen* does not exist; use *nicht machen*.',
    '*entschuldigen* and *entdecken* follow the "away" idea only loosely. Learn frequent ent-verbs as vocabulary.',
    '*be-* verbs take a direct object without a preposition: *eine Frage beantworten*, not *auf eine Frage beantworten*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-29-prefixes-ex01',
      prompt: 'What does "zerbrechen" mean?',
      options: ['to break into pieces', 'to begin to break', 'not to break'],
      answer: 0,
      explanation: 'zer- always means "into pieces / destroyed": zerbrechen, zerstören, zerreißen.',
    },
    {
      type: 'fill',
      id: 'b1-29-prefixes-ex02',
      prompt: 'Das Gegenteil von "möglich" ist ___. (with un-)',
      answer: ['unmöglich'],
      explanation: 'un- negates adjectives: möglich → unmöglich (impossible).',
    },
    {
      type: 'mc',
      id: 'b1-29-prefixes-ex03',
      prompt: 'Which prefix gives the meaning "wrong"? "Ich habe mich ___laufen."',
      options: ['ver', 'be', 'ent'],
      answer: 0,
      explanation: 'sich verlaufen = to get lost (to walk the wrong way). sich + ver- is the pattern for doing something wrong.',
    },
    {
      type: 'match',
      id: 'b1-29-prefixes-ex04',
      prompt: 'Match each prefix with its core meaning.',
      pairs: [
        ['zer-', 'into pieces'],
        ['ent-', 'away, remove'],
        ['miss-', 'wrong, badly'],
        ['un-', 'not, the opposite'],
        ['be-', 'makes the verb take a direct object'],
        ['er-', 'achieve a result'],
      ],
      explanation: 'zerbrechen, entfernen, missverstehen, unglücklich, beantworten, erreichen are the model words for each prefix.',
    },
    {
      type: 'fill',
      id: 'b1-29-prefixes-ex05',
      prompt: 'Er hat die Frage ___. (beantworten, Partizip II)',
      answer: ['beantwortet'],
      explanation: 'be- is inseparable, so the participle has no ge-: beantwortet.',
    },
    {
      type: 'mc',
      id: 'b1-29-prefixes-ex06',
      prompt: 'Which verb means "to escape"?',
      options: ['entkommen', 'verkommen', 'bekommen'],
      answer: 0,
      explanation: 'ent- = away: entkommen = to get away, to escape. bekommen means to receive, verkommen to go to ruin.',
    },
    {
      type: 'fill',
      id: 'b1-29-prefixes-ex07',
      prompt: 'Das Geschirr ist beim Umzug ___. (zer- + brechen, Partizip II)',
      answer: ['zerbrochen'],
      explanation: 'brechen has the irregular participle gebrochen; with the inseparable prefix zer- the ge- disappears: zerbrochen.',
    },
    {
      type: 'mc',
      id: 'b1-29-prefixes-ex08',
      prompt: 'Where is the stress in "verstehen"?',
      options: ['on ver-', 'on -steh-'],
      answer: 1,
      explanation: 'Inseparable prefixes are never stressed. The stress is on the stem: verSTEhen.',
    },
    {
      type: 'translate',
      id: 'b1-29-prefixes-ex09',
      prompt: 'Translate: "I misunderstood you." (use du)',
      answer: ['Ich habe dich missverstanden.'],
      hint: 'missverstehen (Partizip II: missverstanden)',
      explanation: 'miss- is inseparable: the participle is missverstanden, without ge-.',
    },
    {
      type: 'order',
      id: 'b1-29-prefixes-ex10',
      prompt: 'Build the sentence: "She has recognised her mistake."',
      words: ['hat', 'Sie', 'erkannt.', 'Fehler', 'ihren'],
      answer: ['Sie hat ihren Fehler erkannt.'],
      explanation: 'erkennen = to recognise (er- = reach a result). The participle erkannt has no ge- and stands at the end.',
    },
    {
      type: 'mc',
      id: 'b1-29-prefixes-ex11',
      prompt: 'What does "die Unordnung" mean?',
      options: ['disorder, mess', 'order', 'a big order'],
      answer: 0,
      explanation: 'un- on a noun gives the opposite: Ordnung (order) → Unordnung (disorder).',
    },
    {
      type: 'fill',
      id: 'b1-29-prefixes-ex12',
      prompt: 'Er hat den Brief gestern ___. (verschicken, Partizip II)',
      answer: ['verschickt'],
      explanation: 'ver- here means "away": verschicken = to send off. Inseparable prefix, so no ge-: verschickt.',
    },
  ],
};

export default topic;
