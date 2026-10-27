import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-24-futur-2-probability',
  level: 'B1',
  unit: 8,
  order: 24,
  title: 'Futur II and expressing probability',
  germanTerm: 'Futur II, Vermutung',
  tags: ['verbs', 'tenses', 'future', 'probability', 'werden'],
  summary: 'Futur II (werden + Partizip II + haben / sein) says that something will be finished by a future time or, more often, that something probably happened; together with wohl, wahrscheinlich and dürfte it is how German expresses guesses.',
  explanation: `
### What Futur II is

**Futur II** is built from *werden* + **Partizip II** + **haben** or **sein**. It is the "will have done" tense. The choice between *haben* and *sein* follows the same rule as the Perfekt.

| | werden | … | Partizip II + haben / sein |
|---|---|---|---|
| Ich | **werde** | die Arbeit | **beendet haben**. |
| Sie | **wird** | schon | **gegangen sein**. |

### Use 1: finished before a future time

With a time phrase like *bis morgen, bis nächste Woche, in einem Jahr*, Futur II says that an action will be **complete** by then:

- Bis Freitag **werde** ich den Bericht **geschrieben haben**. (By Friday I will have written the report.)
- In zehn Jahren **wird** sich die Stadt stark **verändert haben**.

This use is quite rare in everyday German. People usually say *Bis Freitag habe ich den Bericht geschrieben* with the Perfekt.

### Use 2: a guess about the past

This is the use you will meet most. Futur II with *wohl* or *wahrscheinlich* means **"probably happened"**:

- Er **wird** den Zug **verpasst haben**. (He has probably missed the train.)
- Sie **wird wohl** schon **gegangen sein**. (She has probably already left.)

In the same way, **Futur I** can express a guess about the **present**:

- Er **wird wohl** im Stau **stehen**. (He is probably stuck in traffic.)
- Das **wird** schon **stimmen**. (That is probably right.)

So *werden* does not always point to the future. With *wohl* it often means "I suppose".

### The probability toolbox

German has several ways to show **how sure** you are. From certain to doubtful:

| Degree | Adverbs | Modal verbs | Example |
|---|---|---|---|
| almost certain | sicher, bestimmt, ganz sicher | **muss** | Er **muss** krank sein. |
| very likely | wahrscheinlich, wohl, vermutlich | **dürfte** | Sie **dürfte** etwa 40 sein. |
| possible | vielleicht, möglicherweise, eventuell | **könnte** | Das **könnte** stimmen. |
| unlikely | kaum, wohl nicht | **kann nicht** | Das **kann nicht** sein. |

The modal verbs of probability work like the English *must be / could be*: *Er muss krank sein* = he must be ill (I conclude this). For a guess about the past, combine them with the infinitive Perfekt: *Er muss den Zug verpasst haben*.

### Word order

*wohl*, *wahrscheinlich* and *sicher* are adverbs. *wohl* always sits in the midfield after the verb (*Er wird wohl …*). *wahrscheinlich* and *sicher* can also take position 1: *Wahrscheinlich ist sie schon gegangen*.

### Why it matters

In B1 speaking tasks you describe pictures and discuss situations you cannot be sure about: *Die Frau wird wohl die Chefin sein. Sie dürfte etwa 50 Jahre alt sein.* Knowing these forms lets you speculate naturally instead of only stating facts. Reading news also needs Futur II: *Der Täter wird die Stadt bereits verlassen haben*.
`,
  examples: [
    { de: 'Bis nächste Woche werde ich das Buch gelesen haben.', en: 'By next week I will have read the book. (completed before a future time)' },
    { de: 'Er wird den Bus verpasst haben.', en: 'He has probably missed the bus. (guess about the past)' },
    { de: 'Sie wird wohl schon zu Hause sein.', en: 'She is probably at home already. (Futur I + wohl: guess about now)' },
    { de: 'Die Gäste werden schon angekommen sein.', en: 'The guests will have arrived already. (sein because ankommen takes sein)' },
    { de: 'Das muss ein Irrtum sein.', en: 'That must be a mistake. (muss = almost certain)' },
    { de: 'Er dürfte etwa 40 Jahre alt sein.', en: 'He is probably about 40 years old. (dürfte = very likely)' },
    { de: 'Das könnte stimmen, aber ich bin nicht sicher.', en: 'That could be true, but I am not sure. (könnte = possible)' },
  ],
  connections: [
    { topicId: 'a2-19-futur-1', note: 'Futur I with werden + infinitive is the base; Futur II adds the Partizip II + haben / sein.' },
    { topicId: 'b1-23-werden', note: 'werden as the future helper is job 2 of werden.' },
    { topicId: 'a1-32-perfekt-sein', note: 'The choice of haben or sein in Futur II follows the Perfekt rule.' },
    { topicId: 'a1-17-modal-verbs', note: 'müssen, dürfen and können get a second meaning here: degrees of probability.' },
    { topicId: 'b1-22-brauchen-zu-scheinen', note: 'scheinen zu is another way of saying that something seems likely.' },
  ],
  edgeCases: [
    'Futur II for a guess about the **past** (*Er wird gegangen sein*) vs Futur I for a guess about the **present** (*Er wird krank sein*). Do not mix the two.',
    '*haben* or *sein* at the end follows the verb, not the subject: *gefahren **sein***, *gegessen **haben***.',
    'In speech, a completed future action is usually expressed with the Perfekt: *Bis morgen habe ich das erledigt*. Futur II sounds formal.',
    '*dürfte* here has nothing to do with permission. *Sie dürfte 40 sein* = she is probably 40.',
    '*wohl* in the midfield means "probably". At the start of a sentence (*Wohl kaum!*) it is emphatic and means something different.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex01',
      prompt: 'What does "Er wird wohl im Stau stehen." mean?',
      options: ['He is probably in a traffic jam right now.', 'He will definitely be in a traffic jam tomorrow.', 'He was in a traffic jam.'],
      answer: 0,
      explanation: 'werden + wohl + infinitive expresses a guess about the present, not a prediction about the future.',
    },
    {
      type: 'fill',
      id: 'b1-24-futur-2-probability-ex02',
      prompt: 'Bis nächste Woche werde ich das Buch gelesen ___.',
      answer: ['haben'],
      explanation: 'lesen forms its Perfekt with haben, so Futur II ends in gelesen haben.',
    },
    {
      type: 'fill',
      id: 'b1-24-futur-2-probability-ex03',
      prompt: 'Sie wird schon nach Hause gegangen ___.',
      answer: ['sein'],
      explanation: 'gehen is a verb of movement and takes sein in the Perfekt, so Futur II ends in gegangen sein.',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex04',
      prompt: 'Complete: "Bis 2030 ___ die Stadt eine neue U-Bahn gebaut haben."',
      options: ['wird', 'hat', 'wurde'],
      answer: 0,
      explanation: 'Futur II needs werden as the helper in position 2: wird … gebaut haben.',
    },
    {
      type: 'order',
      id: 'b1-24-futur-2-probability-ex05',
      prompt: 'Build the sentence: "He has probably missed the bus."',
      words: ['den', 'wird', 'Er', 'haben.', 'Bus', 'verpasst'],
      answer: ['Er wird den Bus verpasst haben.'],
      explanation: 'wird in position 2, the object in the middle, and verpasst haben at the end. This is Futur II as a guess about the past.',
    },
    {
      type: 'match',
      id: 'b1-24-futur-2-probability-ex06',
      prompt: 'Match each word with its degree of certainty.',
      pairs: [
        ['bestimmt', 'certainly'],
        ['wahrscheinlich', 'probably'],
        ['wohl', 'I suppose'],
        ['vielleicht', 'maybe'],
        ['kaum', 'hardly'],
      ],
      explanation: 'bestimmt is the strongest, then wahrscheinlich and wohl, then vielleicht; kaum points to "probably not".',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex07',
      prompt: 'Complete: "Die Gäste werden schon ___."',
      options: ['angekommen sein', 'ankommen sein', 'angekommen haben'],
      answer: 0,
      explanation: 'Futur II needs the Partizip II (angekommen), and ankommen takes sein.',
    },
    {
      type: 'fill',
      id: 'b1-24-futur-2-probability-ex08',
      prompt: 'Das ___ stimmen, ich bin ganz sicher. (müssen)',
      answer: ['muss'],
      explanation: 'muss expresses the strongest degree of probability: I conclude that it is true.',
    },
    {
      type: 'translate',
      id: 'b1-24-futur-2-probability-ex09',
      prompt: 'Translate: "She has probably already left." (use Futur II with wohl)',
      answer: [
        'Sie wird wohl schon gegangen sein.',
        'Sie wird wohl schon weggegangen sein.',
        'Sie wird wohl schon weg sein.',
        'Sie wird schon gegangen sein.',
      ],
      hint: 'gehen (Perfekt with sein); wohl = probably; schon = already',
      explanation: 'Futur II for a guess about the past: wird + wohl + schon + gegangen sein.',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex10',
      prompt: 'Which sentence expresses an action that will be completed in the future?',
      options: [
        'Morgen werde ich die Prüfung geschrieben haben.',
        'Morgen werde ich die Prüfung schreiben.',
        'Morgen schreibe ich die Prüfung.',
      ],
      answer: 0,
      explanation: 'Only Futur II (geschrieben haben) says the action will already be finished. The other two say it will take place tomorrow.',
    },
    {
      type: 'order',
      id: 'b1-24-futur-2-probability-ex11',
      prompt: 'Build the sentence: "By Friday we will have finished the project."',
      words: ['werden', 'Freitag', 'Bis', 'das', 'wir', 'haben.', 'Projekt', 'abgeschlossen'],
      answer: ['Bis Freitag werden wir das Projekt abgeschlossen haben.'],
      explanation: 'The time phrase Bis Freitag takes position 1, so werden comes next, then the subject. abgeschlossen haben closes the sentence.',
    },
    {
      type: 'mc',
      id: 'b1-24-futur-2-probability-ex12',
      prompt: 'How sure is the speaker in "Er dürfte etwa 40 Jahre alt sein."?',
      options: ['fairly sure (very likely)', 'completely certain', 'thinks it is impossible'],
      answer: 0,
      explanation: 'dürfte expresses a confident guess, less strong than muss but stronger than könnte.',
    },
  ],
};

export default topic;
