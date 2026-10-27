import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-06-verb-second',
  level: 'A1',
  unit: 1,
  order: 6,
  title: 'Word order: the verb is always second',
  germanTerm: 'Verbzweitstellung',
  tags: ['word order', 'syntax', 'verb second', 'inversion'],
  summary: 'In a German statement the conjugated verb is always the second element; whatever you put first, the subject moves behind the verb if needed.',
  explanation: `
### The one rule that shapes every German sentence

In a normal statement, the **conjugated verb** (the one with the ending) is always in **position 2**. Not the second *word*, the second **element** (*Satzglied*): a group of words that belongs together counts as one position.

| position 1 | position 2 (verb) | the rest |
|---|---|---|
| Ich | **trinke** | morgens Kaffee. |
| Morgens | **trinke** | ich Kaffee. |
| Kaffee | **trinke** | ich morgens. |

All three sentences are correct and mean *I drink coffee in the morning*. The only thing that never moves is the verb: it stays second.

### What can be first?

Almost anything:

- the **subject**: *Ich gehe heute ins Kino.*
- a **time**: *Heute gehe ich ins Kino.*
- a **place**: *In Berlin wohnt mein Bruder.*
- an **object**: *Das Buch kenne ich.*

English does not allow this. *Today go I to the cinema* is wrong in English but exactly how German works. German speakers put the thing they want to **emphasise or connect to** in position 1. Starting with a time word (*heute, morgen, dann, jetzt*) is extremely common.

### The subject moves behind the verb

When something other than the subject is first, the subject goes **directly after the verb**. This swap is called **inversion** (*Inversion*).

| normal | inverted |
|---|---|
| Ich habe heute Zeit. | Heute **habe ich** Zeit. |
| Wir fahren am Montag nach Wien. | Am Montag **fahren wir** nach Wien. |

Learners often write *Heute ich habe Zeit*. That puts the verb third, and it is the single most common word-order mistake. Check: what is in position 1? Then the verb. Then the subject.

### Position 1 can be long

A whole phrase can fill position 1. It still counts as **one** element:

- *Am Montag um neun Uhr* **beginnt** der Kurs. – On Monday at nine the course starts.
- *Mein Bruder und ich* **wohnen** in Köln. – My brother and I live in Cologne.

### Connecting words that do not count

A few short connectors sit in **position 0**: they join sentences but do not take a position. After **und** (and), **aber** (but), **oder** (or), **denn** (because) the verb-second rule starts fresh:

- Ich bin müde, **aber** ich **arbeite**. – I am tired, but I am working.
- Er kommt nicht, **denn** er **ist** krank. – He is not coming, because he is sick.

Compare this with **dann** (then) and **deshalb** (therefore), which **do** count as position 1 and cause inversion: *Er ist krank, **deshalb kommt** er nicht.*

### Where the other parts go

After the verb and subject, the rest follows. For now, a simple guide: **time before place**, and the main information often at the end. *Ich fahre **morgen** **nach Berlin**.* Word order of the middle part has its own topic later.

### Why it matters

Verb-second is the skeleton of every German statement. Questions, commands, and later the "verb at the end" of sub-clauses are all described as variations of this rule. If you check "is my verb second?" in every sentence you write, you will remove most of your word-order errors at once.
`,
  examples: [
    { de: 'Ich lerne heute Deutsch.', en: 'I am learning German today. (subject first)' },
    { de: 'Heute lerne ich Deutsch.', en: 'Today I am learning German. (time first, subject after the verb)' },
    { de: 'Am Wochenende fahren wir nach Hamburg.', en: 'At the weekend we drive to Hamburg. (long time phrase = one position)' },
    { de: 'Das Buch kenne ich nicht.', en: 'I do not know that book. (object first for emphasis)' },
    { de: 'Jetzt habe ich Zeit.', en: 'Now I have time.' },
    { de: 'Ich bin müde, aber ich arbeite.', en: 'I am tired, but I am working. (aber does not count as a position)' },
    { de: 'Er ist krank, deshalb bleibt er zu Hause.', en: 'He is sick, so he stays at home. (deshalb takes position 1)' },
  ],
  connections: [
    { topicId: 'a1-05-present-tense-regular', note: 'The verb in position 2 is the conjugated verb from the present-tense topic.' },
    { topicId: 'a1-07-questions', note: 'In yes/no questions the verb moves to position 1; in W-questions the question word is first, the verb second.' },
    { topicId: 'a1-16-separable-verbs', note: 'With separable verbs the conjugated part is second and the prefix goes to the end.' },
    { topicId: 'a1-17-modal-verbs', note: 'With a modal verb the modal is second and the infinitive goes to the end: the sentence bracket.' },
    { topicId: 'a1-30-word-order-midfield', note: 'What happens after the verb (time, manner, place) has its own rules.' },
  ],
  edgeCases: [
    '**Position = element, not word.** *Am Montag um neun Uhr* is one element, so the verb comes after the whole phrase.',
    '*Heute ich habe Zeit* is wrong. After a time word the subject must follow the verb: *Heute habe ich Zeit.*',
    '**und, aber, oder, denn** do not count. The sentence after them starts again at position 1: *…, aber ich habe keine Zeit.*',
    '**dann, deshalb, trotzdem, also** do count as position 1 and push the subject behind the verb: *Dann gehe ich.*',
    'This rule is for **statements**. Yes/no questions and commands put the verb first; sub-clauses with *weil* or *dass* put it last (both later topics).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-06-verb-second-ex01',
      prompt: 'Which sentence is correct?',
      options: ['Heute ich gehe ins Kino.', 'Heute gehe ich ins Kino.', 'Heute ins Kino ich gehe.'],
      answer: 1,
      explanation: 'Heute fills position 1, so the verb gehe must be second and the subject ich follows it.',
    },
    {
      type: 'order',
      id: 'a1-06-verb-second-ex02',
      prompt: 'Build the sentence starting with "Morgen": "Tomorrow I am working."',
      words: ['ich.', 'arbeite', 'Morgen'],
      answer: ['Morgen arbeite ich.'],
      explanation: 'Morgen (position 1), arbeite (position 2), ich (after the verb).',
    },
    {
      type: 'order',
      id: 'a1-06-verb-second-ex03',
      prompt: 'Build the sentence starting with "Am Montag": "On Monday we have time."',
      words: ['Zeit.', 'Montag', 'wir', 'haben', 'Am'],
      answer: ['Am Montag haben wir Zeit.'],
      explanation: 'Am Montag is one element in position 1. Then the verb haben, then the subject wir.',
    },
    {
      type: 'mc',
      id: 'a1-06-verb-second-ex04',
      prompt: 'In "Am Freitag um acht Uhr beginnt der Film.", what is in position 1?',
      options: ['Am Freitag', 'Am Freitag um acht Uhr', 'der Film'],
      answer: 1,
      explanation: 'The whole time phrase "Am Freitag um acht Uhr" is one element. The verb beginnt follows it, so it is in position 2.',
    },
    {
      type: 'fill',
      id: 'a1-06-verb-second-ex05',
      prompt: 'Jetzt ___ ich Hunger. (haben)',
      answer: ['habe'],
      explanation: 'Jetzt is first, so the verb habe comes second, and ich moves behind it.',
    },
    {
      type: 'mc',
      id: 'a1-06-verb-second-ex06',
      prompt: 'Which word does NOT take a position (so the verb-second rule starts again after it)?',
      options: ['dann', 'aber', 'deshalb'],
      answer: 1,
      explanation: 'aber (like und, oder, denn) sits in position 0. dann and deshalb count as position 1 and cause inversion.',
    },
    {
      type: 'mc',
      id: 'a1-06-verb-second-ex07',
      prompt: 'Which continuation is correct? "Er ist müde, deshalb …"',
      options: ['… er geht nach Hause.', '… geht er nach Hause.', '… nach Hause er geht.'],
      answer: 1,
      explanation: 'deshalb occupies position 1 of the second sentence, so the verb geht must come next, then er.',
    },
    {
      type: 'order',
      id: 'a1-06-verb-second-ex08',
      prompt: 'Build the sentence starting with "Das Buch": "I do not know the book."',
      words: ['nicht.', 'kenne', 'Das', 'ich', 'Buch'],
      answer: ['Das Buch kenne ich nicht.'],
      explanation: 'An object can take position 1 for emphasis. The verb kenne is still second, ich follows, nicht at the end.',
    },
    {
      type: 'mc',
      id: 'a1-06-verb-second-ex09',
      prompt: 'Which sentence is wrong?',
      options: ['Ich trinke abends Tee.', 'Abends trinke ich Tee.', 'Abends ich trinke Tee.'],
      answer: 2,
      explanation: 'In "Abends ich trinke Tee" the verb is third. After Abends the verb must come at once: Abends trinke ich Tee.',
    },
    {
      type: 'translate',
      id: 'a1-06-verb-second-ex10',
      prompt: 'Translate, starting with "Heute": "Today we are learning German."',
      answer: ['Heute lernen wir Deutsch.'],
      hint: 'lernen = to learn',
      explanation: 'Heute first, verb lernen second, subject wir third, then Deutsch.',
    },
    {
      type: 'fill',
      id: 'a1-06-verb-second-ex11',
      prompt: 'Ich bin müde, aber ich ___ noch. (arbeiten)',
      answer: ['arbeite'],
      explanation: 'aber does not count as a position. The second sentence starts fresh: ich (1) arbeite (2).',
    },
  ],
};

export default topic;
