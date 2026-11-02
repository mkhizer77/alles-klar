import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-09b-irreal-wishes-advice',
  level: 'B1',
  unit: 4,
  order: 13,
  title: 'Irreal wishes and advice: Wenn ich doch …, An deiner Stelle …',
  germanTerm: 'Konjunktiv II: Wunsch, Rat',
  tags: ['Konjunktiv II', 'wishes', 'advice', 'suggestions', 'politeness'],
  summary: 'Konjunktiv II also expresses wishes that are not real (Wenn ich doch mehr Zeit hätte!) and soft advice (An deiner Stelle würde ich …, Du solltest …, Wie wäre es, wenn …?).',
  steps: [
    {
      title: 'Wishes with wenn … doch',
      text: `
A wish for something that is **not** the case is an **irreal wish**. German builds it like the *wenn* half of an irreal condition, with Konjunktiv II and the verb at the **end**, and leaves the result out: **Wenn ich doch mehr Zeit hätte!**

The small words **doch**, **nur** and **bloß** make the wish stronger. After **Ich wünschte, …** (I wish …) you also use Konjunktiv II.
`,
      examples: [
        { de: 'Wenn ich doch nur mehr Geld hätte!', en: 'If only I had more money! (doch nur = if only)' },
        { de: 'Wenn es bloß nicht so kalt wäre!', en: 'If only it were not so cold!' },
        { de: 'Ich wünschte, ich wäre jetzt am Strand.', en: 'I wish I were on the beach now.' },
      ],
    },
    {
      title: 'Wishes without wenn: verb first',
      text: `
You can drop **wenn**. Then the Konjunktiv II verb moves to the **front** of the sentence, and the rest stays the same. Both forms mean exactly the same; the one without *wenn* sounds a little more emotional.
`,
      examples: [
        { de: 'Hätte ich doch mehr Zeit!', en: 'If only I had more time! (= Wenn ich doch mehr Zeit hätte!)' },
        { de: 'Wäre ich doch jetzt am Strand!', en: 'If only I were on the beach now!' },
        { de: 'Könnte ich nur besser Deutsch sprechen!', en: 'If only I could speak German better!' },
      ],
    },
    {
      title: 'Advice: An deiner Stelle würde ich …',
      text: `
To give advice, you imagine yourself in the other person's place. Two fixed openers do this: **An deiner Stelle würde ich …** (in your place I would …) and **Wenn ich du wäre, würde ich …** (if I were you, I would …). After the comma the main clause starts with **würde**.
`,
      examples: [
        { de: 'An deiner Stelle würde ich zum Arzt gehen.', en: 'If I were you, I would go to the doctor.' },
        { de: 'Wenn ich du wäre, würde ich das nicht machen.', en: 'If I were you, I would not do that.' },
        { de: 'An Ihrer Stelle würde ich früher losfahren.', en: 'In your place I would leave earlier. (formal: An Ihrer Stelle)' },
      ],
    },
    {
      title: 'Soft suggestions: solltest, könntest, Wie wäre es',
      text: `
Konjunktiv II softens a suggestion. Instead of the direct *Geh zum Arzt!* you can say:

| suggestion | meaning |
|---|---|
| Du **solltest** … | You should … |
| Du **könntest** … | You could … |
| **Wie wäre es mit** + Dative? | How about …? |
| **Wie wäre es, wenn** …? | How about if …? |

After *Wie wäre es, wenn …* and *Es wäre besser, wenn …* the *wenn* clause keeps the **normal present form**, because the plan is real and possible.
`,
      examples: [
        { de: 'Du solltest mehr schlafen.', en: 'You should sleep more. (soft advice)' },
        { de: 'Wie wäre es, wenn wir morgen ins Kino gehen?', en: 'How about going to the cinema tomorrow? (wenn + normal form)' },
        { de: 'Wie wäre es mit einem Kaffee?', en: 'How about a coffee? (mit + Dative)' },
        { de: 'Es wäre besser, wenn du früher kommst.', en: 'It would be better if you came earlier.' },
      ],
    },
    {
      title: 'Polite requests use the same forms',
      text: `
The polite questions you know from A2 are the same Konjunktiv II: **Könnten Sie …?** and **Hätten Sie …?** In a yes/no question the verb comes **first**. In the B1 speaking test, where you plan something together, *Wie wäre es, wenn …?*, *Wir könnten …* and *Du solltest …* are exactly the tools you need.
`,
      examples: [
        { de: 'Könnten Sie mir bitte helfen?', en: 'Could you please help me? (polite request)' },
        { de: 'Hätten Sie vielleicht morgen Zeit?', en: 'Would you perhaps have time tomorrow?' },
        { de: 'Wir könnten zusammen lernen.', en: 'We could study together. (suggestion)' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'The forms hätte, wäre, könnte and würde + Infinitiv, and the wenn clause the wishes are built on.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'Könnten Sie …? and Hätten Sie …? were introduced there; here they join a set of suggestion phrases.' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'A regret about the past is a wish in the past: Hätte ich doch mehr gelernt!' },
    { topicId: 'b1-11-als-ob', note: 'als ob comparisons use the same Konjunktiv II forms.' },
    { topicId: 'b1-32-opinions-speaking', note: 'The suggestion phrases are the core of the B1 speaking task "planning something together".' },
  ],
  edgeCases: [
    'In a wish without *wenn* the verb comes first: ***Hätte** ich doch mehr Zeit!*, not *Ich hätte doch mehr Zeit!* (that is a statement).',
    '**Wie wäre es mit** + Dative: *Wie wäre es mit **einem** Kaffee?*, not *mit einen Kaffee*.',
    '**Du solltest** is friendly advice (should); **Du müsstest** is stronger (you would really have to). Choose *solltest* for suggestions.',
    'After **Ich wünschte** the wish is in Konjunktiv II: *Ich wünschte, ich **wäre** …*, not *ich bin*.',
    '**An deiner Stelle** (informal) but **An Ihrer Stelle** (formal). Both take *würde ich* right after them.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-09b-irreal-wishes-advice-ex01',
      prompt: 'Complete the wish: "Wenn ich doch nur mehr Geld ___!"',
      options: ['hätte', 'habe', 'hatte'],
      answer: 0,
      explanation: 'An unreal wish uses Konjunktiv II: hätte. doch nur makes it stronger.',
    },
    {
      type: 'fill',
      id: 'b1-09b-irreal-wishes-advice-ex02',
      prompt: 'Ich wünschte, ich ___ jetzt am Strand. (sein)',
      answer: ['wäre'],
      explanation: 'After Ich wünschte the wish is unreal, so Konjunktiv II: wäre.',
    },
    {
      type: 'fill',
      id: 'b1-09b-irreal-wishes-advice-ex03',
      prompt: '___ ich doch mehr Zeit! (haben; wish without wenn)',
      answer: ['Hätte'],
      explanation: 'When wenn is dropped, the Konjunktiv II verb moves to the front: Hätte ich doch mehr Zeit!',
    },
    {
      type: 'mc',
      id: 'b1-09b-irreal-wishes-advice-ex04',
      prompt: 'What does "An deiner Stelle würde ich zum Arzt gehen." express?',
      options: ['Advice: if I were you, I would see a doctor', 'A fact: I am going to the doctor', 'A question: should I go to the doctor?'],
      answer: 0,
      explanation: 'an deiner Stelle + Konjunktiv II is the standard way to give advice: in your place I would …',
    },
    {
      type: 'order',
      id: 'b1-09b-irreal-wishes-advice-ex05',
      prompt: 'Build the sentence: "If I were you, I would not do that."',
      words: ['nicht', 'ich', 'Wenn', 'machen.', 'wäre,', 'würde', 'das', 'du', 'ich'],
      answer: ['Wenn ich du wäre, würde ich das nicht machen.'],
      explanation: 'wäre at the end of the wenn clause; the main clause starts with würde, and machen goes to the end.',
    },
    {
      type: 'fill',
      id: 'b1-09b-irreal-wishes-advice-ex06',
      prompt: 'Du ___ mehr schlafen. (sollen, friendly advice)',
      answer: ['solltest'],
      explanation: 'Du solltest = you should. Konjunktiv II of sollen has no umlaut.',
    },
    {
      type: 'mc',
      id: 'b1-09b-irreal-wishes-advice-ex07',
      prompt: 'Complete the suggestion: "___ wäre es, wenn wir morgen gehen?"',
      options: ['Wie', 'Was', 'Wo'],
      answer: 0,
      explanation: 'The fixed phrase is Wie wäre es, wenn … (How about …).',
    },
    {
      type: 'match',
      id: 'b1-09b-irreal-wishes-advice-ex08',
      prompt: 'Match each suggestion phrase with its meaning.',
      pairs: [
        ['Wie wäre es mit …?', 'How about …?'],
        ['Du solltest …', 'You should …'],
        ['Könnten Sie …?', 'Could you …?'],
        ['An deiner Stelle würde ich …', 'If I were you, I would …'],
        ['Es wäre besser, wenn …', 'It would be better if …'],
      ],
      explanation: 'All of these use Konjunktiv II to make a suggestion or request sound polite and soft.',
    },
    {
      type: 'mc',
      id: 'b1-09b-irreal-wishes-advice-ex09',
      prompt: 'Complete: "Wie wäre es mit ___ Spaziergang?"',
      options: ['einem', 'einen', 'ein'],
      answer: 0,
      explanation: 'mit always takes the Dative. Spaziergang is masculine, so einem.',
    },
    {
      type: 'order',
      id: 'b1-09b-irreal-wishes-advice-ex10',
      prompt: 'Build the polite request: "Could you please help me?"',
      words: ['helfen?', 'Sie', 'bitte', 'Könnten', 'mir'],
      answer: ['Könnten Sie mir bitte helfen?'],
      explanation: 'Yes/no question: Konjunktiv II verb first (Könnten), then Sie, mir, bitte and the infinitive at the end.',
    },
    {
      type: 'translate',
      id: 'b1-09b-irreal-wishes-advice-ex11',
      prompt: 'Translate as friendly advice: "You should see a doctor."',
      answer: ['Du solltest zum Arzt gehen.', 'Sie sollten zum Arzt gehen.', 'Du solltest zu einem Arzt gehen.', 'Du solltest einen Arzt aufsuchen.'],
      hint: 'zum Arzt gehen = to see a doctor',
      explanation: 'solltest + Infinitiv at the end. The Sie-form sollten is also correct.',
    },
  ],
};

export default topic;
