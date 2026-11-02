import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-29-prefixes',
  level: 'B1',
  unit: 10,
  order: 39,
  title: 'Prefixes: un-, ver-, be-, er-, ent-, zer-, miss-',
  germanTerm: 'Präfixe',
  tags: ['word formation', 'prefixes', 'verbs', 'vocabulary'],
  summary: 'A prefix is a syllable at the front of a word that changes its meaning in a predictable way: un- makes the opposite, zer- means into pieces, ent- means away. Knowing them lets you decode new words.',
  steps: [
    {
      title: 'What a prefix does',
      text: `
A **prefix** (*Präfix*) is a syllable attached to the **front** of a word: *glücklich* (happy) → **un**glücklich (unhappy), *brechen* (break) → **zer**brechen (break into pieces).

The base word keeps its core meaning. The prefix adds a twist: "not", "wrong", "away", "into pieces". If you know the twist, you can guess a new word without a dictionary.
`,
      examples: [
        { de: 'Das ist leider unmöglich.', en: 'Unfortunately that is impossible. (un- = not)' },
        { de: 'Das Glas ist zerbrochen.', en: 'The glass is broken into pieces. (zer- = into pieces)' },
        { de: 'Ich habe dich missverstanden.', en: 'I misunderstood you. (miss- = wrong)' },
      ],
    },
    {
      title: 'un-: the opposite',
      text: `
**un-** means "not" or "the opposite". It goes on **adjectives** and **nouns**: *möglich* → *unmöglich*, *freundlich* → *unfreundlich*, *die Ordnung* → *die Unordnung*.

It does not work on every adjective (there is no *unalt*), but it works on hundreds. It never goes on a verb: say *nicht machen*, not *unmachen*.
`,
      examples: [
        { de: 'Der Kellner war sehr unfreundlich.', en: 'The waiter was very unfriendly. (freundlich → unfreundlich)' },
        { de: 'In seinem Zimmer herrscht Unordnung.', en: 'His room is a mess. (Ordnung → Unordnung)' },
        { de: 'Das war ein großes Unglück.', en: 'That was a great misfortune. (Glück → Unglück)' },
      ],
    },
    {
      title: 'ver-: wrong, away, or make into',
      text: `
**ver-** has three common meanings:

1. with **sich**: do it **wrong** – *sich verlaufen* (get lost), *sich verschreiben* (make a slip of the pen), *sich versprechen* (misspeak)
2. **change, away, finish** – *verkaufen* (sell), *verreisen* (go away on a trip), *verschwinden* (disappear)
3. makes a verb from an **adjective** – *besser* → *verbessern*, *größer* → *vergrößern*
`,
      examples: [
        { de: 'Ich habe mich in der Stadt verlaufen.', en: 'I got lost in the city. (sich ver- = did it wrong)' },
        { de: 'Er hat sein altes Auto verkauft.', en: 'He sold his old car. (ver- = away)' },
        { de: 'Ich möchte mein Deutsch verbessern.', en: 'I want to improve my German. (besser → verbessern)' },
      ],
    },
    {
      title: 'be- and er-',
      text: `
**be-** is the "object-maker": it turns a verb with a preposition into a verb with a **direct object**. *antworten auf eine Frage* → *eine Frage **be**antworten*. Also *besuchen, bezahlen*.

**er-** means reaching a **result**: *erreichen* (reach), *erfinden* (invent), *erkennen* (recognise), *erklären* (explain).
`,
      examples: [
        { de: 'Kannst du diese Frage beantworten?', en: 'Can you answer this question? (be-: direct object, no preposition)' },
        { de: 'Wir besuchen morgen meine Oma.', en: 'We are visiting my grandma tomorrow.' },
        { de: 'Wer hat das Telefon erfunden?', en: 'Who invented the telephone? (er- = achieve a result)' },
        { de: 'Sie hat ihren Fehler erkannt.', en: 'She has recognised her mistake.' },
      ],
    },
    {
      title: 'ent-, zer-, miss-',
      text: `
| Prefix | Meaning | Examples |
|---|---|---|
| **ent-** | away, remove, undo | entfernen, entkommen, entdecken, entladen |
| **zer-** | into pieces, destroy | zerbrechen, zerstören, zerreißen, zerschneiden |
| **miss-** | wrong, bad, failed | missverstehen, der Misserfolg, das Missverständnis |

**ent-** often undoes the base word: *decken* (cover) → *entdecken* (uncover, discover); *laden* (load) → *entladen* (unload). **zer-** always ends in pieces.
`,
      examples: [
        { de: 'Bitte entfernen Sie den Aufkleber.', en: 'Please remove the sticker. (ent- = away)' },
        { de: 'Der Hund hat die Zeitung zerrissen.', en: 'The dog tore the newspaper to pieces. (zer-)' },
        { de: 'Das war nur ein Missverständnis.', en: 'That was only a misunderstanding. (miss- = wrong)' },
      ],
    },
    {
      title: 'The grammar of inseparable prefixes',
      text: `
*ver-, be-, er-, ent-, zer-, miss-* are **inseparable** (*untrennbar*): they never split off the verb.

| Feature | Rule |
|---|---|
| Stress | on the stem: ver**STE**hen, be**ZAH**len |
| Partizip II | **no ge-**: verstanden, bezahlt, zerbrochen |
| zu + infinitive | *zu* stands in front as a separate word: zu verstehen |
`,
      examples: [
        { de: 'Ich habe die Rechnung schon bezahlt.', en: 'I have already paid the bill. (bezahlt, no ge-)' },
        { de: 'Er hat mich nicht verstanden.', en: 'He did not understand me. (verstanden, no ge-)' },
        { de: 'Es ist schwer, das zu verstehen.', en: 'It is hard to understand that. (zu + verstehen)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a1-16-separable-verbs', note: 'be-, ver-, er-, ent-, zer- and miss- are the inseparable prefixes introduced there.' },
    { topicId: 'a1-31-perfekt-haben', note: 'Verbs with inseparable prefixes form the Partizip II without ge-.' },
    { topicId: 'a2-30-word-formation-compounds', note: 'Word formation 1 covered compounds and -ung / -er; prefixes are the next tool.' },
    { topicId: 'b1-30-suffixes', note: 'Prefixes change the meaning; noun suffixes like -heit and -ung change the word type.' },
    { topicId: 'b1-30b-adjective-suffixes', note: '-lich, -ig, -bar and -los are the adjective suffixes; together with prefixes they explain most long words.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'The "wrong" meaning of ver- usually needs a reflexive pronoun: sich verlaufen.' },
  ],
  edgeCases: [
    'Inseparable prefixes take **no ge-** in the Partizip II: *verstanden*, *bezahlt*, not *geverstanden*.',
    '**ver-** has several meanings; *sich* is the signal for "wrong": *sich verfahren* (go the wrong way) vs *verfahren* (proceed).',
    '**un-** only negates; it never attaches to verbs. *unmachen* does not exist; use *nicht machen*.',
    '**entschuldigen** and **entdecken** follow the "away" idea only loosely. Learn frequent ent-verbs as vocabulary.',
    '**be-** verbs take a direct object without a preposition: *eine Frage beantworten*, not *auf eine Frage beantworten*.',
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
