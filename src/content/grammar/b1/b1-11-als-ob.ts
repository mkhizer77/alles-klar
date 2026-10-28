import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-11-als-ob',
  level: 'B1',
  unit: 4,
  order: 11,
  title: 'als ob, irreal comparisons and polite suggestions',
  germanTerm: 'als ob',
  tags: ['Konjunktiv II', 'als ob', 'comparison', 'suggestions', 'politeness'],
  summary: 'als ob + Konjunktiv II makes an unreal comparison ("as if he knew everything"); the same Konjunktiv II gives you soft suggestions like Du solltest … and Wie wäre es, wenn …?',
  explanation: `
### What it is

Sometimes you compare a situation with something that is **not true**: *He acts **as if** he knew everything* (he does not). German does this with **als ob** (*as if*) and, because the comparison is unreal, the verb is in **Konjunktiv II**.

- Er tut so, **als ob** er alles **wüsste**. – *He acts as if he knew everything.*

The second half of this topic uses the same Konjunktiv II for **polite suggestions** (*Du solltest …*, *Wie wäre es, wenn …?*), which you need constantly in the B1 speaking exam.

### als ob: how it works

**als ob** is a subordinating conjunction, so the verb goes to the **end** of the clause:

- Sie sieht aus, **als ob** sie krank **wäre**.
- Er redet, **als ob** er alles schon **gesehen hätte**.

**Which Konjunktiv II?** Choose by time, exactly as in the last two topics. For the present you only need the forms you already know (*wäre, hätte, wüsste, könnte* and *würde + Infinitiv*):

| the "as if" situation is … | form | example |
|---|---|---|
| now | present Konjunktiv II (wäre, hätte, würde + Infinitiv …) | als ob er krank **wäre** |
| in the past | past Konjunktiv II (hätte / wäre + Partizip II) | als ob er es schon **gesehen hätte** |

**You may also see** *als* without *ob*: *Er tut, **als wäre** er müde.* It means the same, but the verb then comes directly after *als*. Recognise it when you read it; use *als ob* with the verb at the end in your own sentences, because that follows the normal rule for subordinate clauses.

### Typical openers

| German | English |
|---|---|
| Er tut (so), als ob … | He acts as if … |
| Es sieht (so) aus, als ob … | It looks as if … |
| Es scheint, als ob … | It seems as if … |

### Polite suggestions and advice

Konjunktiv II softens a suggestion. Instead of the direct *Geh zum Arzt!* you can say:

| suggestion | meaning |
|---|---|
| Du **solltest** zum Arzt gehen. | You should see a doctor. |
| Du **könntest** mehr schlafen. | You could sleep more. |
| **Wie wäre es**, wenn wir morgen gehen? | How about going tomorrow? |
| **Wie wäre es mit** einem Spaziergang? | How about a walk? |
| **Es wäre besser**, wenn du früher kommst. | It would be better if you came earlier. |
| **An deiner Stelle würde** ich das nicht tun. | If I were you, I would not do that. |
| **Könnten Sie** mir bitte helfen? | Could you please help me? |
| **Hätten Sie** vielleicht Zeit? | Would you perhaps have time? |

After *Wie wäre es, wenn …* and *Es wäre besser, wenn …* the *wenn* clause is often in the **present indicative** (*wenn wir morgen gehen*), because the suggestion is real and possible. Konjunktiv II is also fine there (*wenn wir morgen gehen würden*).

### Why it matters

*Als ob* appears all the time in stories, descriptions of people and opinions. The suggestion phrases are exam gold: in the B1 speaking test you plan something together with a partner, and *Wie wäre es, wenn …?*, *Wir könnten …* and *Du solltest …* are exactly the tools you need to sound polite and natural.
`,
  examples: [
    { de: 'Er tut so, als ob er alles wüsste.', en: 'He acts as if he knew everything. (als ob + verb at the end)' },
    { de: 'Sie sieht aus, als ob sie krank wäre.', en: 'She looks as if she were ill. (es sieht aus, als ob …)' },
    { de: 'Er redet, als ob er alles schon gesehen hätte.', en: 'He talks as if he had already seen everything. (past Konjunktiv II)' },
    { de: 'Es scheint, als ob es gleich regnen würde.', en: 'It seems as if it is going to rain soon. (würde + Infinitiv)' },
    { de: 'Du solltest mehr schlafen.', en: 'You should sleep more. (soft advice)' },
    { de: 'Wie wäre es, wenn wir morgen ins Kino gehen?', en: 'How about going to the cinema tomorrow? (suggestion)' },
    { de: 'Könnten Sie mir bitte helfen?', en: 'Could you please help me? (polite request)' },
  ],
  connections: [
    { topicId: 'b1-09-konjunktiv-2-irreal', note: 'The Konjunktiv II forms (wäre, hätte, wüsste, würde) used after als ob.' },
    { topicId: 'b1-10-konjunktiv-2-past', note: 'For an "as if" situation in the past you need hätte / wäre + Partizip II.' },
    { topicId: 'a2-20-konjunktiv-2-polite', note: 'Könnten Sie …? and Hätten Sie …? were introduced there; here they join a full set of suggestion phrases.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'als also means "when" (one-time past). After a comma with Konjunktiv II it means "as if".' },
    { topicId: 'b1-32-opinions-speaking', note: 'The suggestion phrases are the core of the B1 speaking task "planning something together".' },
  ],
  edgeCases: [
    '**als ob** is a subordinating conjunction: the verb goes to the **end**: *als ob er krank **wäre***. If you read *als wäre er krank* (no *ob*), it means the same.',
    'After *als ob* use **Konjunktiv II**, not the normal present form: *als ob er krank **wäre***, not *als ob er krank ist* (heard in speech, but not standard).',
    '*als* has two meanings: *Als ich klein war* (when, Präteritum) and *…, als ob er müde wäre* (as if, Konjunktiv II).',
    '*Wie wäre es mit* + **Dative**: *Wie wäre es mit **einem** Kaffee?*',
    '*Du solltest* is advice (should); *Du müsstest* is stronger (you would really have to). Choose *solltest* for friendly suggestions.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex01',
      prompt: 'Complete: "Er tut so, als ob er alles ___."',
      options: ['wüsste', 'weiß', 'wissen'],
      answer: 0,
      explanation: 'An unreal comparison needs Konjunktiv II: wissen → wüsste, at the end of the als ob clause.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex02',
      prompt: 'Sie sieht aus, als ob sie krank ___. (sein)',
      answer: ['wäre'],
      explanation: 'An unreal comparison needs Konjunktiv II, and als ob sends the verb to the end. sein → wäre.',
    },
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex03',
      prompt: 'Which word order is correct after als ob?',
      options: ['Er tut, als ob er müde wäre.', 'Er tut, als ob wäre er müde.', 'Er tut, als ob er wäre müde.'],
      answer: 0,
      explanation: 'als ob is a subordinating conjunction, so the verb (wäre) goes to the very end of the clause.',
    },
    {
      type: 'order',
      id: 'b1-11-als-ob-ex04',
      prompt: 'Build the sentence: "She acts as if she did not know me."',
      words: ['mich', 'Sie', 'als', 'nicht', 'tut', 'ob', 'würde.', 'so,', 'kennen', 'sie'],
      answer: ['Sie tut so, als ob sie mich nicht kennen würde.'],
      explanation: 'als ob clause with würde at the very end: kennen würde. so after tut is optional but common.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex05',
      prompt: 'Er redet, als ob er alles schon ___ hätte. (sehen)',
      answer: ['gesehen'],
      explanation: 'The "as if" situation is in the past, so past Konjunktiv II: gesehen hätte.',
    },
    {
      type: 'match',
      id: 'b1-11-als-ob-ex06',
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
      id: 'b1-11-als-ob-ex07',
      prompt: 'Complete the suggestion: "___ wäre es, wenn wir morgen gehen?"',
      options: ['Wie', 'Was', 'Wo'],
      answer: 0,
      explanation: 'The fixed phrase is Wie wäre es, wenn … (How about …).',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex08',
      prompt: 'Du ___ mehr schlafen. (sollen, friendly advice)',
      answer: ['solltest'],
      explanation: 'Du solltest = you should. Konjunktiv II of sollen has no umlaut.',
    },
    {
      type: 'translate',
      id: 'b1-11-als-ob-ex09',
      prompt: 'Translate as friendly advice: "You should see a doctor."',
      answer: ['Du solltest zum Arzt gehen.', 'Sie sollten zum Arzt gehen.', 'Du solltest zu einem Arzt gehen.', 'Du solltest einen Arzt aufsuchen.'],
      hint: 'zum Arzt gehen = to see a doctor',
      explanation: 'solltest + Infinitiv at the end. The Sie-form sollten is also correct.',
    },
    {
      type: 'mc',
      id: 'b1-11-als-ob-ex10',
      prompt: 'What does "Es sieht so aus, als ob es gleich regnen würde." mean?',
      options: ['It looks as if it is going to rain soon.', 'It rained a moment ago.', 'It would be nice if it rained.'],
      answer: 0,
      explanation: 'Es sieht so aus, als ob … = it looks as if …; gleich = soon.',
    },
    {
      type: 'order',
      id: 'b1-11-als-ob-ex11',
      prompt: 'Build the polite request: "Could you please help me?"',
      words: ['helfen?', 'Sie', 'bitte', 'Könnten', 'mir'],
      answer: ['Könnten Sie mir bitte helfen?'],
      explanation: 'Yes/no question: Konjunktiv II verb first (Könnten), then Sie, mir, bitte and the infinitive at the end.',
    },
    {
      type: 'fill',
      id: 'b1-11-als-ob-ex12',
      prompt: 'Er tut so, als ob er den Film schon gesehen ___. (haben)',
      answer: ['hätte'],
      explanation: 'The "as if" situation is in the past, so past Konjunktiv II: gesehen hätte, with hätte at the end of the als ob clause.',
    },
  ],
};

export default topic;
