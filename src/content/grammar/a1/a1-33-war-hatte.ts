import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-33-war-hatte',
  level: 'A1',
  unit: 7,
  order: 33,
  title: 'war and hatte: the Präteritum of sein and haben',
  germanTerm: 'Präteritum',
  tags: ['past tense', 'präteritum', 'sein', 'haben'],
  summary: 'For "was" and "had", German uses the short simple-past forms war and hatte instead of the Perfekt, even in conversation.',
  explanation: `
### What it is

German has a second past tense besides the Perfekt: the **Präteritum** (simple past), the form you see in books and newspapers (*er ging, sie sagte*). In everyday speech it is mostly replaced by the Perfekt. There are two big exceptions: **sein** and **haben**. For these two verbs, everyone, everywhere, uses the Präteritum forms **war** (was) and **hatte** (had), even in casual conversation.

- Ich **war** gestern krank. – *I was ill yesterday.*
- Wir **hatten** keine Zeit. – *We had no time.*
- **Warst** du schon mal in Berlin? – *Have you ever been to Berlin?*

*Ich bin gewesen* and *ich habe gehabt* exist, but they sound heavy. Use *war* and *hatte*.

### The forms of war

| pronoun | sein (present) | sein (Präteritum) |
|---|---|---|
| ich | bin | **war** |
| du | bist | **warst** |
| er / sie / es | ist | **war** |
| wir | sind | **waren** |
| ihr | seid | **wart** |
| sie / Sie | sind | **waren** |

Notice *ich war* and *er war* are identical, with no ending at all.

### The forms of hatte

| pronoun | haben (present) | haben (Präteritum) |
|---|---|---|
| ich | habe | **hatte** |
| du | hast | **hattest** |
| er / sie / es | hat | **hatte** |
| wir | haben | **hatten** |
| ihr | habt | **hattet** |
| sie / Sie | haben | **hatten** |

Again *ich hatte* = *er hatte*. The endings *-, -st, -, -n, -t, -n* are the standard Präteritum endings you will meet again with other verbs at A2.

### How it works in a sentence

*War* and *hatte* are ordinary conjugated verbs, so they take **position 2** (or position 1 in a yes/no question). There is no participle and no bracket:

- Gestern **war** ich im Kino. – *Yesterday I was at the cinema.*
- **Hattest** du Hunger? – *Were you hungry?*
- Das Wetter **war** schön, aber wir **hatten** keinen Plan.

A useful fixed phrase: **es gab** (there was / there were), the Präteritum of *es gibt*: *Es gab keinen Kaffee.* Like *es gibt*, it takes the Accusative.

### Combining with the Perfekt

In a story you mix the two: *war / hatte* for states and background, Perfekt for actions:

- Ich **war** am Samstag in München. Ich **habe** meine Schwester **besucht** und wir **sind** ins Museum **gegangen**. Das Wetter **war** super.

This mix is exactly how native speakers tell a story and is what examiners expect in A1 writing.

### Why it matters

*War* and *hatte* are among the most frequent words in German. They describe any past state: where you were, how you felt, what you had, how the weather was. Because they have no bracket, they are also the easiest past forms to use. Learning them now gives you a quick way to add background to the Perfekt sentences from the previous two topics, and it introduces the Präteritum endings that modal verbs (*konnte, musste*) and regular verbs use at A2.
`,
  examples: [
    { de: 'Ich war gestern zu Hause.', en: 'I was at home yesterday. (ich war)' },
    { de: 'Warst du schon mal in Wien?', en: 'Have you ever been to Vienna? (du warst; question, verb first)' },
    { de: 'Wir waren im Urlaub.', en: 'We were on holiday. (wir waren)' },
    { de: 'Er hatte keine Zeit.', en: 'He had no time. (er hatte)' },
    { de: 'Hattet ihr Spaß?', en: 'Did you (all) have fun? (ihr hattet)' },
    { de: 'Das Wetter war schlecht und wir hatten kein Auto.', en: 'The weather was bad and we had no car. (both forms together)' },
    { de: 'Es gab viele Leute auf der Party.', en: 'There were a lot of people at the party. (es gab = there was / were)' },
  ],
  connections: [
    { topicId: 'a1-04-sein-haben', note: 'war and hatte are the past forms of the two verbs you learned first.' },
    { topicId: 'a1-31-perfekt-haben', note: 'Actions take the Perfekt; states with sein and haben take war and hatte.' },
    { topicId: 'a1-32-perfekt-sein', note: 'In a story, war / hatte give the background and the sein-Perfekt tells the movements.' },
    { topicId: 'a2-01-prateritum-modals', note: 'The same Präteritum endings return with the modal verbs: konnte, musste, wollte.' },
    { topicId: 'a2-03-perfekt-vs-prateritum', note: 'When to choose Perfekt or Präteritum for other verbs is covered at A2.' },
  ],
  edgeCases: [
    '*Ich bin gewesen* and *ich habe gehabt* are grammatical but unusual. Say **ich war** and **ich hatte**.',
    '**ich war** and **er war** have no ending; do not add one (*ich warte* is a different verb: to wait).',
    '**war** is the past of *sein*, not of *werden*. "He became a teacher" is *Er **wurde** Lehrer* (A2), not *er war Lehrer* (he was a teacher).',
    '**es gab** (there was) takes the Accusative like *es gibt*: *Es gab **einen** Unfall.*',
    'The Präteritum of other verbs (*ich ging, ich machte*) is not needed at A1. Use the Perfekt for actions and keep the Präteritum for *sein* and *haben*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a1-33-war-hatte-ex01',
      prompt: 'How do Germans usually say "I was ill" in conversation?',
      options: ['Ich bin krank gewesen.', 'Ich war krank.', 'Ich habe krank gewesen.'],
      answer: 1,
      explanation: 'For sein, the Präteritum war is the normal spoken form. Ich bin gewesen is correct but sounds heavy.',
    },
    {
      type: 'fill',
      id: 'a1-33-war-hatte-ex02',
      prompt: 'Gestern ___ ich im Kino. (sein)',
      answer: ['war'],
      explanation: 'The Präteritum of sein for ich is war, with no ending.',
    },
    {
      type: 'fill',
      id: 'a1-33-war-hatte-ex03',
      prompt: 'Wir ___ keine Zeit. (haben)',
      answer: ['hatten'],
      explanation: 'The Präteritum of haben for wir is hatten.',
    },
    {
      type: 'fill',
      id: 'a1-33-war-hatte-ex04',
      prompt: '___ du schon mal in Berlin? (sein, du)',
      answer: ['Warst'],
      explanation: 'du takes the ending -st: du warst. In a yes/no question the verb comes first.',
    },
    {
      type: 'match',
      id: 'a1-33-war-hatte-ex05',
      prompt: 'Match each pronoun with the correct form of sein in the Präteritum.',
      pairs: [
        ['ich', 'war'],
        ['du', 'warst'],
        ['wir', 'waren'],
        ['ihr', 'wart'],
      ],
      explanation: 'war (ich, er), warst (du), waren (wir, sie, Sie), wart (ihr). ich and er share the form.',
    },
    {
      type: 'match',
      id: 'a1-33-war-hatte-ex06',
      prompt: 'Match each pronoun with the correct form of haben in the Präteritum.',
      pairs: [
        ['ich', 'hatte'],
        ['du', 'hattest'],
        ['ihr', 'hattet'],
        ['sie (they)', 'hatten'],
      ],
      explanation: 'hatte (ich, er), hattest (du), hattet (ihr), hatten (wir, sie, Sie).',
    },
    {
      type: 'mc',
      id: 'a1-33-war-hatte-ex07',
      prompt: 'Complete: "Das Wetter ___ gestern sehr schön."',
      options: ['hatte', 'war', 'ist gewesen'],
      answer: 1,
      explanation: 'Describing a state in the past uses war. ist gewesen is not wrong, but unusual in speech.',
    },
    {
      type: 'order',
      id: 'a1-33-war-hatte-ex08',
      prompt: 'Build the sentence: "We were on holiday last week."',
      words: ['Urlaub.', 'Wir', 'Woche', 'waren', 'letzte', 'im'],
      answer: ['Wir waren letzte Woche im Urlaub.'],
      explanation: 'waren takes position 2 like any conjugated verb; there is no participle at the end. Time (letzte Woche) comes before place (im Urlaub).',
    },
    {
      type: 'fill',
      id: 'a1-33-war-hatte-ex09',
      prompt: 'Auf der Party ___ es viele Leute. (there were)',
      answer: ['gab'],
      explanation: 'es gab is the Präteritum of es gibt: there was / there were.',
    },
    {
      type: 'mc',
      id: 'a1-33-war-hatte-ex10',
      prompt: 'Which sentence mixes the tenses the way a native speaker would?',
      options: ['Ich bin in Köln gewesen und habe meine Oma besucht.', 'Ich war in Köln und habe meine Oma besucht.', 'Ich war in Köln und besuchte meine Oma.'],
      answer: 1,
      explanation: 'war for the state (being in Cologne), Perfekt for the action (visiting). The Präteritum besuchte is written style, not everyday speech.',
    },
    {
      type: 'translate',
      id: 'a1-33-war-hatte-ex11',
      prompt: 'Translate: "Did you have fun?" (informal, one person)',
      answer: ['Hattest du Spaß?'],
      hint: 'Spaß haben = to have fun',
      explanation: 'The du-form of hatte is hattest; in a yes/no question it comes first.',
    },
    {
      type: 'translate',
      id: 'a1-33-war-hatte-ex12',
      prompt: 'Translate: "I was tired and had no time."',
      answer: ['Ich war müde und hatte keine Zeit.', 'Ich war müde und ich hatte keine Zeit.'],
      hint: 'müde = tired, die Zeit = time',
      explanation: 'Both verbs use the Präteritum: war for sein, hatte for haben. After und the subject can be left out.',
    },
  ],
};

export default topic;
