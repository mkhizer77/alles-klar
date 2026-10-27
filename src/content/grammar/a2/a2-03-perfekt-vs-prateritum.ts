import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-03-perfekt-vs-prateritum',
  level: 'A2',
  unit: 1,
  order: 3,
  title: 'Perfekt vs Präteritum: which one when?',
  germanTerm: 'Tempuswahl',
  tags: ['past tense', 'Perfekt', 'Präteritum', 'register'],
  summary: 'German has two past tenses with the same meaning: the Perfekt is for speaking and informal writing, the Präteritum for stories and formal texts, except for sein, haben and the modals, which are Präteritum everywhere.',
  explanation: `
### What it is

German has two ways to talk about the past:

- **Perfekt**: *Ich habe gegessen.* (two words: haben / sein + Partizip II)
- **Präteritum**: *Ich aß.* (one word)

In English *I ate* and *I have eaten* mean different things. In German they **do not**. Both sentences above mean exactly the same. The choice between them (*Tempuswahl*) is about **style and situation**, not about time or meaning.

### Rule 1: speaking = Perfekt

When you talk, text a friend or write a casual email, use the **Perfekt**:

- Was hast du am Wochenende gemacht? – Ich bin ins Kino gegangen.
- Wir haben Pizza gegessen und viel gelacht.

Saying *Ich ging ins Kino* in a chat sounds like reading from a book. In southern Germany, Austria and Switzerland the Perfekt is even stronger in speech.

### Rule 2: written stories = Präteritum

Novels, fairy tales, newspaper reports, history and formal writing use the **Präteritum**:

- Es war einmal ein König, der hatte drei Töchter.
- Der Zug kam um 8 Uhr an. Die Polizei sperrte die Straße.

Here the Präteritum keeps the text short and flowing. You will read far more Präteritum than you will speak.

### Rule 3: some verbs are always Präteritum

A handful of very common verbs use the Präteritum **even in speech**, because their Perfekt forms are long and clumsy:

| verb | spoken past form | instead of |
|---|---|---|
| sein | ich **war** | ich bin gewesen |
| haben | ich **hatte** | ich habe gehabt |
| können, müssen, wollen … | ich **konnte**, **musste**, **wollte** | ich habe … können |
| wissen | ich **wusste** | ich habe gewusst |
| es gibt | es **gab** | es hat gegeben |
| werden | er **wurde** | er ist geworden |

So a spoken story about the past naturally **mixes** the two tenses: *Ich **war** gestern krank und **konnte** nicht kommen. Ich **habe** den ganzen Tag **geschlafen**.* That is perfectly normal German.

### Why it matters

Learners often think the Präteritum is "more correct". It is not; it is just more written. If you use the Präteritum for everything you sound like a book, and if you use the Perfekt for *sein* and the modals you sound awkward. The simple recipe:

1. Talking or texting? → Perfekt.
2. Writing a story or report? → Präteritum.
3. *sein, haben, modals, wissen, es gibt*? → Präteritum always.
`,
  examples: [
    { de: 'Ich habe gestern einen Film gesehen.', en: 'I watched a film yesterday. (spoken: Perfekt)' },
    { de: 'Er sah den Film und ging nach Hause.', en: 'He watched the film and went home. (written story: Präteritum)' },
    { de: 'Ich war müde und hatte Hunger.', en: 'I was tired and hungry. (sein / haben: Präteritum even in speech)' },
    { de: 'Wir konnten leider nicht kommen.', en: "Unfortunately we couldn't come. (modal: Präteritum)" },
    { de: 'Es gab viele Leute auf der Party.', en: 'There were lots of people at the party. (es gibt → es gab)' },
    { de: 'Das wusste ich nicht.', en: "I didn't know that. (wissen: usually wusste)" },
    { de: 'Gestern war ich im Kino und habe Popcorn gegessen.', en: 'Yesterday I was at the cinema and ate popcorn. (mix is normal)' },
  ],
  connections: [
    { topicId: 'a1-31-perfekt-haben', note: 'How to build the Perfekt with haben and the Partizip II.' },
    { topicId: 'a1-32-perfekt-sein', note: 'Verbs of movement and change build the Perfekt with sein.' },
    { topicId: 'a1-33-war-hatte', note: 'war and hatte are the first "always Präteritum" verbs.' },
    { topicId: 'a2-01-prateritum-modals', note: 'The modal verbs join sein and haben in the always-Präteritum group.' },
    { topicId: 'a2-02-prateritum-verbs', note: 'The Präteritum forms you need for written stories.' },
  ],
  edgeCases: [
    'There is **no difference in meaning**. *Ich habe gegessen* and *ich aß* are both simply "I ate". Do not translate the English "have" idea into German tense choice.',
    '**sein, haben** and the **modals** are Präteritum even in casual speech: *Ich war krank*, not *Ich bin krank gewesen* (possible but unusual).',
    'In a spoken story you **mix** the tenses: *Ich hatte keine Zeit, also habe ich abgesagt.* This is correct, not sloppy.',
    'Newspaper headlines and reports use the Präteritum; a personal blog post or chat message uses the Perfekt. Match the register of the text.',
    'In the north of Germany you may hear a little more Präteritum in speech (*Ich ging …*); in the south almost none. Both are fine to understand, but the Perfekt is always safe to use.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-03-perfekt-vs-prateritum-ex01',
      prompt: 'You are telling a friend about your weekend. Which sounds natural?',
      options: ['Ich bin ins Kino gegangen.', 'Ich ging ins Kino.'],
      answer: 0,
      explanation: 'Spoken, informal: Perfekt. Ich ging ins Kino is correct German but sounds like a written story.',
    },
    {
      type: 'mc',
      id: 'a2-03-perfekt-vs-prateritum-ex02',
      prompt: 'Which of these verbs is normally used in the Präteritum even when speaking?',
      options: ['kaufen', 'sein', 'spielen'],
      answer: 1,
      explanation: 'sein (war) belongs to the small group that is always Präteritum. kaufen and spielen use the Perfekt in speech.',
    },
    {
      type: 'fill',
      id: 'a2-03-perfekt-vs-prateritum-ex03',
      prompt: 'Gestern ___ ich krank. (sein)',
      answer: ['war'],
      explanation: 'sein in the past is war, in speech and in writing. Ich bin krank gewesen is possible but unusual.',
    },
    {
      type: 'fill',
      id: 'a2-03-perfekt-vs-prateritum-ex04',
      prompt: 'Wir ___ leider keine Zeit. (haben)',
      answer: ['hatten'],
      explanation: 'haben → hatten for wir. Like sein, haben is Präteritum even in conversation.',
    },
    {
      type: 'match',
      id: 'a2-03-perfekt-vs-prateritum-ex05',
      prompt: 'Match each Perfekt form with the Präteritum form that means the same.',
      pairs: [
        ['ist gegangen', 'ging'],
        ['hat gemacht', 'machte'],
        ['ist gewesen', 'war'],
        ['hat gehabt', 'hatte'],
        ['hat gewusst', 'wusste'],
      ],
      explanation: 'Each pair has the same meaning. For the last three (sein, haben, wissen) the Präteritum is the form people actually say.',
    },
    {
      type: 'mc',
      id: 'a2-03-perfekt-vs-prateritum-ex06',
      prompt: 'Rewrite "Wir aßen Pizza." as you would say it in a text message.',
      options: ['Wir haben Pizza gegessen.', 'Wir hatten Pizza gegessen.', 'Wir essen Pizza.'],
      answer: 0,
      explanation: 'Spoken / informal past = Perfekt: haben + gegessen. Wir hatten gegessen is a different tense (Plusquamperfekt), and wir essen is present.',
    },
    {
      type: 'fill',
      id: 'a2-03-perfekt-vs-prateritum-ex07',
      prompt: 'Es ___ viele Leute auf der Party. (geben)',
      answer: ['gab'],
      explanation: 'es gibt → es gab. This phrase is almost always Präteritum, even in speech.',
    },
    {
      type: 'order',
      id: 'a2-03-perfekt-vs-prateritum-ex08',
      prompt: 'Build the spoken sentence: "I worked for a long time yesterday."',
      words: ['lange', 'habe', 'Ich', 'gearbeitet.', 'gestern'],
      answer: ['Ich habe gestern lange gearbeitet.'],
      explanation: 'Perfekt for speech: habe in position 2, gearbeitet at the end. Time (gestern) comes before lange.',
    },
    {
      type: 'mc',
      id: 'a2-03-perfekt-vs-prateritum-ex09',
      prompt: 'A fairy tale begins: "Es ___ einmal ein König." Which form?',
      options: ['ist … gewesen', 'war', 'wird'],
      answer: 1,
      explanation: 'Written stories use the Präteritum, and sein is Präteritum anyway: Es war einmal …',
    },
    {
      type: 'translate',
      id: 'a2-03-perfekt-vs-prateritum-ex10',
      prompt: 'Translate (spoken): "I didn\'t know that."',
      answer: ['Das wusste ich nicht.', 'Ich wusste das nicht.', 'Das habe ich nicht gewusst.', 'Ich habe das nicht gewusst.'],
      hint: 'wissen = to know (a fact)',
      explanation: 'wissen is usually Präteritum in speech (wusste), but the Perfekt (habe gewusst) is also heard. Both are accepted here.',
    },
    {
      type: 'mc',
      id: 'a2-03-perfekt-vs-prateritum-ex11',
      prompt: 'Is there a difference in meaning between "Ich ging" and "Ich bin gegangen"?',
      options: ['Yes: "ich ging" is further in the past', 'Yes: "ich bin gegangen" means the action is finished', 'No: they mean the same, only the style differs'],
      answer: 2,
      explanation: 'Unlike English, the two German past tenses have the same meaning. The difference is spoken vs written register.',
    },
    {
      type: 'fill',
      id: 'a2-03-perfekt-vs-prateritum-ex12',
      prompt: 'Als Kind ___ ich nicht schwimmen. (können)',
      answer: ['konnte'],
      explanation: 'Modal verbs are Präteritum in speech and writing: konnte. The Perfekt (habe … können) is rare.',
    },
  ],
};

export default topic;
