import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a1-33-war-hatte',
  level: 'A1',
  unit: 7,
  order: 37,
  title: 'war and hatte: the Präteritum of sein and haben',
  germanTerm: 'Präteritum',
  tags: ['past tense', 'präteritum', 'sein', 'haben'],
  summary: 'For "was" and "had", German uses the short simple-past forms war and hatte instead of the Perfekt, even in conversation.',
  steps: [
    {
      title: 'was and had: war and hatte',
      text: `
German has a second past tense, the **Präteritum** (simple past), the form of books and newspapers. In speech it is mostly replaced by the Perfekt, with two big exceptions: **sein** and **haben**.

For these two verbs, everyone says **war** (was) and **hatte** (had), even in casual conversation. *Ich bin gewesen* and *ich habe gehabt* exist, but they sound heavy.
`,
      examples: [
        { de: 'Ich war gestern krank.', en: 'I was ill yesterday. (war = was)' },
        { de: 'Wir hatten keine Zeit.', en: 'We had no time. (hatten = had)' },
        { de: 'Warst du schon mal in Berlin?', en: 'Have you ever been to Berlin? (warst, question: verb first)' },
      ],
    },
    {
      title: 'The forms of war',
      text: `
**war** has no ending for *ich* and *er / sie / es*. The other forms add *-st, -en, -t, -en*.

| pronoun | sein (Präteritum) |
|---|---|
| ich | **war** |
| du | **warst** |
| er / sie / es | **war** |
| wir | **waren** |
| ihr | **wart** |
| sie / Sie | **waren** |
`,
      examples: [
        { de: 'Ich war gestern zu Hause.', en: 'I was at home yesterday. (ich war)' },
        { de: 'Wir waren im Urlaub.', en: 'We were on holiday. (wir waren)' },
        { de: 'Wart ihr am Wochenende in Berlin?', en: 'Were you (all) in Berlin at the weekend? (ihr wart)' },
      ],
    },
    {
      title: 'The forms of hatte',
      text: `
**hatte** follows the same pattern: no ending for *ich* and *er / sie / es*, then *-st, -n, -t, -n*. These are the standard Präteritum endings; you meet them again with other verbs at A2.

| pronoun | haben (Präteritum) |
|---|---|
| ich | **hatte** |
| du | **hattest** |
| er / sie / es | **hatte** |
| wir | **hatten** |
| ihr | **hattet** |
| sie / Sie | **hatten** |
`,
      examples: [
        { de: 'Er hatte keine Zeit.', en: 'He had no time. (er hatte)' },
        { de: 'Hattet ihr Spaß?', en: 'Did you (all) have fun? (ihr hattet)' },
        { de: 'Sie hatten kein Auto.', en: 'They had no car. (sie hatten)' },
      ],
    },
    {
      title: 'Position 2, no bracket',
      text: `
**war** and **hatte** are ordinary conjugated verbs, so they take **position 2**, or position 1 in a yes/no question. There is no participle and no bracket.

A useful fixed phrase: **es gab** (there was / there were), the Präteritum of *es gibt*. Like *es gibt*, it takes the Accusative.
`,
      examples: [
        { de: 'Gestern war ich im Kino.', en: 'Yesterday I was at the cinema. (time first, war second)' },
        { de: 'Hattest du Hunger?', en: 'Were you hungry? (question: hattest first)' },
        { de: 'Es gab viele Leute auf der Party.', en: 'There were a lot of people at the party. (es gab)' },
      ],
    },
    {
      title: 'Mixing war and the Perfekt',
      text: `
In a story you mix the two: **war / hatte** for states and background, the **Perfekt** for actions. This is exactly how native speakers tell a story, and it is what examiners expect in A1 writing.
`,
      examples: [
        { de: 'Ich war in Köln und habe meine Oma besucht.', en: 'I was in Cologne and visited my grandma. (state + action)' },
        { de: 'Das Wetter war schlecht und wir hatten kein Auto.', en: 'The weather was bad and we had no car. (background)' },
        { de: 'Wir sind ins Museum gegangen.', en: 'We went to the museum. (action: Perfekt)' },
      ],
    },
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
