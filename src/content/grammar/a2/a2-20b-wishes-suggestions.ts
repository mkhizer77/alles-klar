import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-20b-wishes-suggestions',
  level: 'A2',
  unit: 7,
  order: 23,
  title: 'Wishes and suggestions with Konjunktiv II',
  germanTerm: 'Konjunktiv II: Wunsch, Vorschlag',
  tags: ['verbs', 'mood', 'Konjunktiv', 'wishes', 'suggestions', 'advice'],
  summary: 'The same Konjunktiv II forms express wishes (Ich hätte gern mehr Zeit, Ich würde gern …), suggestions (Wir könnten …), advice (Du solltest …) and hopes (Es wäre schön, wenn …).',
  steps: [
    {
      title: 'Wishes with hätte gern, würde gern, wäre gern',
      text: `
You know the four Konjunktiv II forms from the last topic: **würde, hätte, wäre, könnte**. Now use them for a **wish**: something you would like to have, do or be.

- **hätte gern** + noun: *Ich hätte gern mehr Zeit.*
- **würde gern** + verb: *Ich würde gern nach Japan reisen.*
- **wäre gern** + place or adjective: *Ich wäre jetzt gern am Strand.*

*gern* is what turns the form into a wish.
`,
      examples: [
        { de: 'Ich hätte gern mehr Zeit.', en: 'I would like more time. (hätte gern + noun)' },
        { de: 'Ich würde gern nach Japan reisen.', en: 'I would like to travel to Japan. (würde gern + verb)' },
        { de: 'Ich wäre jetzt gern am Strand.', en: 'I would like to be on the beach now. (wäre gern + place)' },
      ],
    },
    {
      title: 'Suggestions with könnten',
      text: `
To suggest something, use **könnte** (could) with *wir* or *du*: *Wir könnten ins Kino gehen.* It is softer than *Gehen wir ins Kino!* because it only offers an idea. The infinitive goes to the end.

To invite someone, ask **Hättest du Lust …?** (Would you fancy …?).
`,
      examples: [
        { de: 'Wir könnten ins Kino gehen.', en: 'We could go to the cinema. (suggestion)' },
        { de: 'Du könntest Anna fragen.', en: 'You could ask Anna.' },
        { de: 'Wir könnten am Wochenende wandern gehen.', en: 'We could go hiking at the weekend.' },
        { de: 'Hättest du Lust auf einen Kaffee?', en: 'Would you fancy a coffee? (invitation)' },
      ],
    },
    {
      title: 'Advice with solltest',
      text: `
For friendly advice use **sollte** (should), the Konjunktiv II of *sollen*. It has no umlaut, so it looks like the Präteritum; the context tells you which is meant.

*Du **solltest** mehr schlafen* is gentle advice. *Du sollst mehr schlafen* passes on an order from someone else.
`,
      examples: [
        { de: 'Du solltest mehr schlafen.', en: 'You should sleep more. (advice)' },
        { de: 'Du solltest zum Arzt gehen.', en: 'You should go to the doctor.' },
        { de: 'Ihr solltet früher losfahren.', en: 'You should leave earlier. (ihr: solltet)' },
      ],
    },
    {
      title: 'Es wäre schön, wenn …',
      text: `
A wish about other people often starts with **Es wäre schön, wenn …** (It would be nice if …). After *wenn* the verb goes to the **end** of the clause, and it is also in the Konjunktiv II: *…, wenn du kommen **könntest***, *…, wenn wir mehr Zeit **hätten***.
`,
      examples: [
        { de: 'Es wäre schön, wenn du kommen könntest.', en: 'It would be nice if you could come. (könntest at the end)' },
        { de: 'Es wäre toll, wenn wir mehr Zeit hätten.', en: 'It would be great if we had more time. (hätten at the end)' },
        { de: 'Es wäre besser, wenn du zu Hause bleiben würdest.', en: 'It would be better if you stayed at home. (würdest at the end)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'The sister topic: the four forms würde, hätte, wäre, könnte and their use in polite requests.' },
    { topicId: 'a1-17-modal-verbs', note: 'könnte and sollte are modal verbs: conjugated verb second, infinitive at the end.' },
    { topicId: 'a2-05-wenn-ob-indirect-questions', note: 'After wenn the verb goes to the end of the clause.' },
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'At B1 the same forms are used for unreal conditions: Wenn ich reich wäre …' },
  ],
  edgeCases: [
    '**hätte gern** + noun, **würde gern** + verb: *Ich hätte gern einen Tee* / *Ich würde gern Tee trinken*. Not *Ich hätte gern Tee trinken*.',
    '**sollte** vs **sollst**: *Du solltest mehr schlafen* is advice; *Du sollst mehr schlafen* passes on someone else\'s order.',
    '**könnte** (could, an idea) vs **konnte** (could, in the past): *Wir könnten gehen* is a suggestion; *Wir konnten gehen* says it happened.',
    'After **wenn** the Konjunktiv II verb goes to the end: *…, wenn du Zeit **hättest***, not *wenn du hättest Zeit*.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'a2-20b-wishes-suggestions-ex01',
      prompt: 'Ich ___ gern mehr Zeit. (haben)',
      answer: ['hätte'],
      explanation: 'A wish for something you want to have uses hätte gern + noun: Ich hätte gern mehr Zeit.',
    },
    {
      type: 'fill',
      id: 'a2-20b-wishes-suggestions-ex02',
      prompt: 'Wir ___ gern das Zimmer sehen. (werden)',
      answer: ['würden'],
      explanation: 'würde gern + verb = would like to do something. wir + würde = würden.',
    },
    {
      type: 'fill',
      id: 'a2-20b-wishes-suggestions-ex03',
      prompt: 'Ich ___ jetzt gern am Strand. (sein)',
      answer: ['wäre'],
      explanation: 'A wish about being somewhere uses wäre gern. The Konjunktiv II of sein is wäre.',
    },
    {
      type: 'mc',
      id: 'a2-20b-wishes-suggestions-ex04',
      prompt: 'Make a suggestion: "Wir ___ ins Kino gehen."',
      options: ['konnten', 'könnten', 'können'],
      answer: 1,
      explanation: 'könnten (with umlaut) offers an idea: we could go. konnten is the real past (we were able to), and können is a plain fact (we can).',
    },
    {
      type: 'mc',
      id: 'a2-20b-wishes-suggestions-ex05',
      prompt: 'Complete: "___ ihr Lust, mit uns ins Kino zu gehen?"',
      options: ['Hättet', 'Hätten', 'Hattet'],
      answer: 0,
      explanation: 'ihr + hätte = hättet. Hattet is the real past tense (did you have?), Hätten is the wir / Sie form.',
    },
    {
      type: 'mc',
      id: 'a2-20b-wishes-suggestions-ex06',
      prompt: 'Which sentence gives advice with the Konjunktiv II?',
      options: ['Du sollst mehr schlafen.', 'Du solltest mehr schlafen.', 'Du schläfst mehr.'],
      answer: 1,
      explanation: 'solltest is the Konjunktiv II of sollen and means "you should" as friendly advice. Du sollst is a stronger order from someone else.',
    },
    {
      type: 'order',
      id: 'a2-20b-wishes-suggestions-ex07',
      prompt: 'Build the advice: "You should drink more water."',
      words: ['mehr', 'solltest', 'trinken.', 'Du', 'Wasser'],
      answer: ['Du solltest mehr Wasser trinken.'],
      explanation: 'solltest is the conjugated verb in position 2; the infinitive trinken closes the sentence, like with any modal verb.',
    },
    {
      type: 'mc',
      id: 'a2-20b-wishes-suggestions-ex08',
      prompt: 'Complete: "Es ___ schön, wenn du kommen könntest."',
      options: ['war', 'wäre', 'würde'],
      answer: 1,
      explanation: 'For sein use the special form wäre, not würde sein. war is the real past.',
    },
    {
      type: 'mc',
      id: 'a2-20b-wishes-suggestions-ex09',
      prompt: 'Which sentence is a wish, not a polite request?',
      options: ['Könnten Sie mir helfen?', 'Ich würde gern nach Italien fahren.', 'Würden Sie bitte warten?'],
      answer: 1,
      explanation: 'Ich würde gern + verb says what the speaker would like to do: a wish. The other two ask someone else to do something: requests.',
    },
    {
      type: 'translate',
      id: 'a2-20b-wishes-suggestions-ex10',
      prompt: 'Translate as a suggestion: "We could go hiking at the weekend."',
      answer: ['Wir könnten am Wochenende wandern gehen.', 'Am Wochenende könnten wir wandern gehen.'],
      hint: 'wandern gehen = to go hiking, am Wochenende = at the weekend',
      explanation: 'A suggestion uses könnten in position 2 and the infinitive group wandern gehen at the end.',
    },
  ],
};

export default topic;
