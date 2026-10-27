import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-05-wenn-ob-indirect-questions',
  level: 'A2',
  unit: 2,
  order: 5,
  title: 'wenn, ob and indirect questions',
  germanTerm: 'Nebensatz: wenn / ob / W-Wort',
  tags: ['word order', 'subordinate clauses', 'conjunctions', 'questions', 'wenn', 'ob'],
  summary: 'wenn means "if / when" for conditions, ob means "whether" for reported yes/no questions, and question words (wo, wann, warum …) start indirect questions; all three send the verb to the end.',
  explanation: `
### What it is

In the last topic you learned that *weil* and *dass* push the verb to the end of the clause. Three more things do exactly the same:

1. **wenn** = if / when (a condition or a time)
2. **ob** = whether / if (a reported yes/no question)
3. **question words** (*wo, wann, warum, wie, was, wer …*) in an **indirect question** (*indirekte Frage*)

An indirect question is a question that sits inside another sentence: *I don't know **where he lives**.*

### wenn: if or when

**wenn** introduces a condition or a repeated / future time:

- **Wenn** es regnet, bleiben wir zu Hause. – *If / when it rains, we stay at home.*
- Ich rufe dich an, **wenn** ich zu Hause **bin**. – *I'll call you when I'm home.*

English *if* and *when* are both *wenn* here. (For *when* about a single event in the past, see the next topic on *als*.)

### ob: whether

Use **ob** to report a **yes/no question**. If the original question has no question word, the indirect version starts with *ob*:

| direct question | indirect question |
|---|---|
| Kommt er heute? | Ich weiß nicht, **ob** er heute **kommt**. |
| Hat sie Zeit? | Weißt du, **ob** sie Zeit **hat**? |
| Ist das Geschäft offen? | Ich frage mich, **ob** das Geschäft offen **ist**. |

Test: can you say *whether* in English? Then it is **ob**, never *wenn*. *I don't know if he's coming* = *I don't know whether he's coming* → *ob*.

### Question words: indirect W-questions

If the original question starts with a W-word, keep that word and send the verb to the end:

| direct question | indirect question |
|---|---|
| Wo wohnt sie? | Ich weiß nicht, **wo** sie **wohnt**. |
| Wann beginnt der Film? | Weißt du, **wann** der Film **beginnt**? |
| Warum lacht er? | Ich frage mich, **warum** er **lacht**. |
| Wie viel kostet das? | Können Sie mir sagen, **wie viel** das **kostet**? |

Useful opening phrases: *Ich weiß nicht, … / Weißt du, … / Kannst du mir sagen, … / Können Sie mir sagen, … / Ich frage mich, … / Ich möchte wissen, …*

Notice the punctuation: if the main clause is a question (*Weißt du, …?*), the whole sentence ends with a question mark; if it is a statement (*Ich weiß nicht, …*), it ends with a full stop.

### Why it matters

Indirect questions are the **polite** way to ask for information: *Wo ist der Bahnhof?* is fine, but *Können Sie mir sagen, wo der Bahnhof ist?* is friendlier and sounds much more fluent. And *wenn*-clauses are how you talk about plans and conditions: *Wenn ich Zeit habe, …*. All of this uses the one Nebensatz rule: **verb at the end**.
`,
  examples: [
    { de: 'Wenn es regnet, bleiben wir zu Hause.', en: 'If it rains, we stay at home. (condition)' },
    { de: 'Ich rufe dich an, wenn ich zu Hause bin.', en: "I'll call you when I'm home. (future time)" },
    { de: 'Ich weiß nicht, ob er heute kommt.', en: "I don't know whether he is coming today. (yes/no question → ob)" },
    { de: 'Weißt du, ob das Museum montags offen ist?', en: 'Do you know whether the museum is open on Mondays?' },
    { de: 'Kannst du mir sagen, wo der Bahnhof ist?', en: 'Can you tell me where the station is? (indirect W-question)' },
    { de: 'Ich frage mich, warum sie nicht geantwortet hat.', en: "I wonder why she didn't reply. (Perfekt: hat at the end)" },
    { de: 'Können Sie mir sagen, wie viel das kostet?', en: 'Can you tell me how much that costs? (polite)' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The basic Nebensatz rule (verb at the end) that wenn, ob and W-words follow.' },
    { topicId: 'a1-07-questions', note: 'The direct questions that indirect questions are built from.' },
    { topicId: 'a2-06-als-vs-wenn', note: 'When "when" is about a single past event, German uses als instead of wenn.' },
    { topicId: 'b1-20-conditions', note: 'falls, sofern and other ways to express conditions build on wenn.' },
  ],
  edgeCases: [
    'English **if** has two meanings. For a condition (*if it rains*) use **wenn**; for a reported yes/no question (*I wonder if he\'s coming* = whether) use **ob**.',
    'The verb goes to the end in an indirect question: *Ich weiß nicht, wo er **wohnt*** ✓, not *wo wohnt er* ✗.',
    '**wann** is only a question word (*Wann kommst du?* / *Ich weiß nicht, wann er kommt*). For "when" as a conjunction use **wenn** or **als**.',
    'The main clause decides the final punctuation: *Weißt du, ob er kommt**?*** but *Ich weiß nicht, ob er kommt**.***',
    'When the wenn-clause comes first, the main verb follows straight after the comma: *Wenn ich Zeit habe, **koche** ich.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex01',
      prompt: 'Complete: "Ich weiß nicht, ___ er heute kommt."',
      options: ['wenn', 'ob', 'dass'],
      answer: 1,
      explanation: 'The original question is "Kommt er heute?" (yes/no), so the indirect question needs ob (= whether).',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex02',
      prompt: 'Weißt du, ___ der Bus abfährt? (at what time)',
      answer: ['wann'],
      explanation: 'The direct question is "Wann fährt der Bus ab?". Keep the question word wann and put the verb (abfährt) at the end.',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex03',
      prompt: 'Complete: "___ es morgen regnet, bleiben wir zu Hause."',
      options: ['Wenn', 'Ob', 'Wann'],
      answer: 0,
      explanation: 'This is a condition (if it rains), so it is wenn. ob only reports yes/no questions, and wann only asks questions.',
    },
    {
      type: 'order',
      id: 'a2-05-wenn-ob-indirect-questions-ex04',
      prompt: 'Build the polite question: "Can you tell me where the station is?"',
      words: ['sagen,', 'du', 'der', 'ist?', 'wo', 'Kannst', 'mir', 'Bahnhof'],
      answer: ['Kannst du mir sagen, wo der Bahnhof ist?'],
      explanation: 'Main clause question (Kannst du mir sagen), comma, then wo + der Bahnhof + ist at the end.',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex05',
      prompt: 'Ich frage mich, ___ sie das Buch gelesen hat. (whether)',
      answer: ['ob'],
      explanation: '"Hat sie das Buch gelesen?" is a yes/no question, so the indirect form uses ob. Note hat at the very end.',
    },
    {
      type: 'match',
      id: 'a2-05-wenn-ob-indirect-questions-ex06',
      prompt: 'Match each direct question with its indirect form.',
      pairs: [
        ['Kommt er?', 'ob er kommt'],
        ['Wo wohnt sie?', 'wo sie wohnt'],
        ['Warum lacht er?', 'warum er lacht'],
        ['Hat sie Zeit?', 'ob sie Zeit hat'],
      ],
      explanation: 'Yes/no questions become ob-clauses; W-questions keep their W-word. In every case the verb moves to the end.',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex07',
      prompt: 'Make "Wann beginnt der Film?" indirect after "Ich weiß nicht, …"',
      options: ['Ich weiß nicht, wann der Film beginnt.', 'Ich weiß nicht, wann beginnt der Film.', 'Ich weiß nicht, ob der Film beginnt.'],
      answer: 0,
      explanation: 'Keep wann, move the verb to the end. The second option has main-clause word order; the third changes the meaning (whether it begins at all).',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex08',
      prompt: 'Ich rufe dich an, ___ ich zu Hause bin. (when)',
      answer: ['wenn'],
      explanation: '"When I am home" is a future time / condition, so it is wenn. (als would be for a single past event.)',
    },
    {
      type: 'mc',
      id: 'a2-05-wenn-ob-indirect-questions-ex09',
      prompt: '"Ask him if he has time." Which word translates "if" here?',
      options: ['wenn', 'ob', 'wann'],
      answer: 1,
      explanation: 'You can replace this "if" with "whether" (ask him whether he has time), so it is ob: Frag ihn, ob er Zeit hat.',
    },
    {
      type: 'translate',
      id: 'a2-05-wenn-ob-indirect-questions-ex10',
      prompt: 'Translate: "I don\'t know whether she is coming."',
      answer: ['Ich weiß nicht, ob sie kommt.'],
      hint: 'wissen = to know, kommen = to come',
      explanation: 'Ich weiß nicht, + ob + sie + kommt. The verb of the ob-clause is the last word.',
    },
    {
      type: 'fill',
      id: 'a2-05-wenn-ob-indirect-questions-ex11',
      prompt: 'Können Sie mir sagen, ___ das kostet? (how much)',
      answer: ['wie viel'],
      explanation: 'The direct question is "Wie viel kostet das?". The question phrase wie viel stays, and kostet goes to the end.',
    },
    {
      type: 'translate',
      id: 'a2-05-wenn-ob-indirect-questions-ex12',
      prompt: 'Translate: "If it rains, I\'ll stay at home."',
      answer: ['Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnet, bleibe ich zuhause.'],
      hint: 'regnen = to rain, zu Hause bleiben = to stay at home',
      explanation: 'wenn-clause first (verb regnet at its end), comma, then the main verb bleibe immediately, then ich.',
    },
  ],
};

export default topic;
