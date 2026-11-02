import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-13-da-wo-compounds',
  level: 'A2',
  unit: 4,
  order: 14,
  title: 'da- and wo- compounds (darauf, worauf)',
  germanTerm: 'Präpositionaladverbien',
  tags: ['prepositions', 'pronouns', 'questions', 'da-compounds', 'wo-compounds'],
  summary: 'When the object of a preposition is a thing (not a person), German replaces "preposition + it" with da(r)+preposition (darauf, damit) and asks with wo(r)+preposition (worauf, womit).',
  steps: [
    {
      title: 'Preposition + it, preposition + what',
      text: `
In English you say *I'm waiting for it* or *What are you waiting for?* In German a preposition cannot simply be followed by *es* or *was* when the object is a **thing**. Instead the preposition fuses with a small word:

**da** + preposition = *preposition + it / that*: *da**rauf*** (for it). **wo** + preposition = *preposition + what*: *wo**rauf*** (for what?). Grammar books call these *Präpositionaladverbien*; we say **da- and wo-compounds**.
`,
      examples: [
        { de: 'Ich warte darauf.', en: 'I am waiting for it. (auf + it = darauf)' },
        { de: 'Worauf wartest du?', en: 'What are you waiting for? (auf + what = worauf)' },
        { de: 'Ich habe keine Zeit dafür.', en: 'I have no time for it. (für + it = dafür)' },
      ],
    },
    {
      title: 'Add -r- before a vowel',
      text: `
A preposition that starts with a **vowel** (*auf, an, über, in, um*) gets an **-r-** in between: *da-r-auf, wo-r-an*. Before a consonant there is no *r*: *damit, wovon*.

| preposition | da- (it) | wo- (what?) |
|---|---|---|
| auf | **darauf** | **worauf** |
| an | **daran** | **woran** |
| über | **darüber** | **worüber** |
| für | **dafür** | **wofür** |
| mit | **damit** | **womit** |
| von | **davon** | **wovon** |

The same way: *darin, darum, davor, dabei, danach, dazu*.
`,
      examples: [
        { de: 'Woran denkst du?', en: 'What are you thinking of? (an → wo-r-an)' },
        { de: 'Ich denke oft daran.', en: 'I often think of it. (da-r-an)' },
        { de: 'Womit fährst du zur Arbeit?', en: 'What do you go to work with? (mit: no r)' },
        { de: 'Wofür interessierst du dich?', en: 'What are you interested in? (für: no r)' },
      ],
    },
    {
      title: 'da-compounds are only for things',
      text: `
This is the key rule. A da-compound stands for a **thing or an idea**. For a **person** you keep the preposition and use a normal pronoun: *Ich warte **darauf*** (the bus) but *Ich warte **auf ihn*** (my brother).

The compound takes over the preposition **and** its case, so you no longer have to think about Accusative or Dative.
`,
      examples: [
        { de: 'Wartest du auf den Bus? Ja, ich warte darauf.', en: 'Are you waiting for the bus? Yes, I am waiting for it. (thing → darauf)' },
        { de: 'Wartest du auf Anna? Ja, ich warte auf sie.', en: 'Are you waiting for Anna? Yes, I am waiting for her. (person → auf sie)' },
        { de: 'Das Thema ist schwierig. Wir sprechen morgen darüber.', en: 'The topic is difficult. We will talk about it tomorrow. (thing → darüber)' },
        { de: 'Ich denke oft an sie.', en: 'I often think of her. (person → an sie)' },
      ],
    },
    {
      title: 'wo-compounds ask about things',
      text: `
The same rule for questions. **Worauf? Womit? Wofür?** ask about a **thing**. For a **person** use the preposition + **wen** (Accusative) or **wem** (Dative): *Auf wen? Mit wem?*

The wo-compound is one word in position 1, then comes the verb: *Worauf wartest du?*, never *Wo wartest du auf?*
`,
      examples: [
        { de: 'Worauf wartest du?', en: 'What are you waiting for? (thing → worauf)' },
        { de: 'Auf wen wartest du?', en: 'Who are you waiting for? (person → auf wen)' },
        { de: 'Worüber sprecht ihr?', en: 'What are you talking about? (thing: a topic)' },
        { de: 'Mit wem fährst du?', en: 'Who are you going with? (person → mit wem)' },
      ],
    },
    {
      title: 'One word replaces the whole phrase',
      text: `
The compound replaces the **whole** preposition phrase, so there is no extra pronoun: *Ich warte darauf*, not *Ich warte darauf es*. This lets you link sentences: *Ich habe ein Problem. Ich muss **darüber** nachdenken.*

You may also see a da-compound pointing to a whole clause: *Ich freue mich **darauf**, dass du kommst* (I'm looking forward to you coming). Just recognise this for now; it is practised at B1.
`,
      examples: [
        { de: 'Ich habe ein Problem. Ich muss darüber nachdenken.', en: 'I have a problem. I have to think about it. (darüber = about it)' },
        { de: 'Hast du die Hausaufgaben gemacht? Ich habe damit angefangen.', en: 'Have you done the homework? I have started on it. (damit = with it)' },
        { de: 'Ich freue mich darauf, dass du kommst.', en: 'I am looking forward to you coming. (darauf points to the dass-clause)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-12-verbs-with-prepositions', note: 'The verb + preposition pairs that da- and wo-compounds are built on.' },
    { topicId: 'a1-23-accusative-pronouns', note: 'For people you still use preposition + pronoun (auf ihn, für sie).' },
    { topicId: 'a1-07-questions', note: 'wo-compounds are question words and take position 1, with the verb second.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'You may see darauf, dass … / daran, dass …: a da-compound followed by a subordinate clause.' },
    { topicId: 'b1-05-relative-clauses-prepositions', note: 'wo-compounds also appear in relative clauses at B1.' },
  ],
  edgeCases: [
    'Insert **-r-** only before a vowel: da**r**auf, wo**r**an, da**r**über, but da**mit**, wo**von**, da**nach**.',
    'Compounds are for **things**, never for people: *Ich denke an ihn* (person), *Ich denke daran* (thing). *Woran denkst du?* asks about a thing, *An wen denkst du?* about a person.',
    '**damit** also means "so that" as a conjunction, and **darum / deshalb** mean "that is why". Context tells you which meaning is intended.',
    'In the question the compound is one word: *Worauf wartest du?*, not *Wo wartest du auf?*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-13-da-wo-compounds-ex01',
      prompt: 'Wartest du auf den Bus? – Ja, ich warte ___.',
      options: ['darauf', 'auf ihn', 'worauf'],
      answer: 0,
      explanation: 'The bus is a thing, so the answer uses the da-compound: darauf. auf ihn would be for a person.',
    },
    {
      type: 'fill',
      id: 'a2-13-da-wo-compounds-ex02',
      prompt: '___ interessierst du dich? – Für Musik. (for what)',
      answer: ['Wofür'],
      explanation: 'sich interessieren für + a thing → wo + für = wofür. No -r- because für starts with a consonant.',
    },
    {
      type: 'fill',
      id: 'a2-13-da-wo-compounds-ex03',
      prompt: 'Denkst du an deine Schwester? – Ja, ich denke oft ___ sie.',
      answer: ['an'],
      explanation: 'Your sister is a person, so no compound: preposition + pronoun, an sie.',
    },
    {
      type: 'match',
      id: 'a2-13-da-wo-compounds-ex04',
      prompt: 'Match each preposition with its da-compound.',
      pairs: [
        ['auf', 'darauf'],
        ['mit', 'damit'],
        ['über', 'darüber'],
        ['von', 'davon'],
        ['an', 'daran'],
      ],
      explanation: 'auf, über and an start with a vowel, so they get da-r-: darauf, darüber, daran. mit and von do not: damit, davon.',
    },
    {
      type: 'mc',
      id: 'a2-13-da-wo-compounds-ex05',
      prompt: 'Ask about the topic: "___ sprecht ihr?"',
      options: ['Worüber', 'Über wen', 'Darüber'],
      answer: 0,
      explanation: 'A topic is a thing → worüber. Über wen asks about a person; darüber is an answer, not a question.',
    },
    {
      type: 'fill',
      id: 'a2-13-da-wo-compounds-ex06',
      prompt: '___ wartest du? – Auf meinen Bruder. (for whom)',
      answer: ['Auf wen'],
      explanation: 'The answer is a person, so the question uses preposition + wen (Accusative after warten auf): Auf wen?',
    },
    {
      type: 'fill',
      id: 'a2-13-da-wo-compounds-ex07',
      prompt: 'Hast du die Hausaufgaben gemacht? – Ich habe gestern ___ angefangen. (with it)',
      answer: ['damit'],
      explanation: 'anfangen mit + thing → damit. The compound replaces mit den Hausaufgaben.',
    },
    {
      type: 'order',
      id: 'a2-13-da-wo-compounds-ex08',
      prompt: 'Build the question: "What are you thinking of?" (du; a thing)',
      words: ['du?', 'denkst', 'Woran'],
      answer: ['Woran denkst du?'],
      explanation: 'denken an + a thing → wo + r + an = woran. The compound is one word in position 1, then the verb, then du.',
    },
    {
      type: 'mc',
      id: 'a2-13-da-wo-compounds-ex09',
      prompt: 'Why is it "darauf" and not "daauf"?',
      options: ['Because auf takes the Accusative', 'Because an -r- is inserted before a vowel', 'Because darauf is an irregular form'],
      answer: 1,
      explanation: 'da + auf would put two vowels together. German inserts -r- to make it pronounceable: da-r-auf. Same with daran, darüber, worin.',
    },
    {
      type: 'fill',
      id: 'a2-13-da-wo-compounds-ex10',
      prompt: '___ träumst du? – Von einem langen Urlaub. (of what)',
      answer: ['Wovon'],
      explanation: 'träumen von + thing → wovon. von starts with a consonant, so no -r-.',
    },
    {
      type: 'translate',
      id: 'a2-13-da-wo-compounds-ex11',
      prompt: 'Translate: "What are you waiting for?" (du)',
      answer: ['Worauf wartest du?'],
      hint: 'warten auf = to wait for',
      explanation: 'A thing is expected, so wo + r + auf: Worauf wartest du? Note the question is one word, not "Wo wartest du auf".',
    },
    {
      type: 'mc',
      id: 'a2-13-da-wo-compounds-ex12',
      prompt: 'Erinnerst du dich an Herrn Müller? – Ja, ich erinnere mich ___.',
      options: ['an ihn', 'daran', 'woran'],
      answer: 0,
      explanation: 'Herr Müller is a person, so no compound: an ihn. daran would mean "of it / of that".',
    },
  ],
};

export default topic;
