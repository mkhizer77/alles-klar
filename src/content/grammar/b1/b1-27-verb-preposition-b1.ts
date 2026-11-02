import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-27-verb-preposition-b1',
  level: 'B1',
  unit: 9,
  order: 37,
  title: 'Verb + preposition combinations: the B1 list',
  germanTerm: 'Verben mit Präpositionen (B1)',
  tags: ['verbs', 'prepositions', 'cases', 'vocabulary'],
  summary: 'Many verbs come with a fixed preposition and case (warten auf + Akkusativ, träumen von + Dativ). Learn them in blocks by preposition; only an, auf, über and in need the case learned too.',
  steps: [
    {
      title: 'Verbs glued to a preposition',
      text: `
Some verbs are "glued" to a preposition: **warten auf** (wait for), **sich interessieren für** (be interested in). The preposition has **no meaning of its own** here, so you cannot work it out from English. You learn three things together: the **verb**, its **preposition** and the **case** the preposition takes.
`,
      examples: [
        { de: 'Ich warte auf den Bus.', en: 'I am waiting for the bus. (auf, not für)' },
        { de: 'Sie interessiert sich für Musik.', en: 'She is interested in music. (für, not in)' },
        { de: 'Er träumt von einem eigenen Haus.', en: 'He dreams of a house of his own. (von + Dative)' },
      ],
    },
    {
      title: 'Blocks with the Accusative: für, um, gegen',
      text: `
These prepositions always take the **Accusative**, whatever the verb. Learn each block as one list.

| Preposition | Verbs |
|---|---|
| **für** + Akk | sich interessieren für, sich bedanken für, sich entschuldigen für, sorgen für, sich entscheiden für |
| **um** + Akk | sich kümmern um, bitten um, sich bewerben um, es geht um, sich sorgen um |
| **gegen** + Akk | protestieren gegen, kämpfen gegen |
`,
      examples: [
        { de: 'Sie kümmert sich um ihre Großmutter.', en: 'She looks after her grandmother. (um + Akk)' },
        { de: 'Wir bedanken uns für das Geschenk.', en: 'We say thank you for the present. (für + Akk)' },
        { de: 'Die Leute protestieren gegen die neuen Pläne.', en: 'The people are protesting against the new plans. (gegen + Akk)' },
      ],
    },
    {
      title: 'Blocks with the Dative: mit, von, nach, zu',
      text: `
These always take the **Dative**.

| Preposition | Verbs |
|---|---|
| **mit** | sich beschäftigen mit, anfangen mit, rechnen mit, sich unterhalten mit |
| **von** | träumen von, abhängen von, erzählen von, halten von |
| **nach** | fragen nach, suchen nach, sich erkundigen nach |
| **vor** | Angst haben vor, warnen vor, sich fürchten vor |
| **zu** | gehören zu, passen zu, einladen zu, gratulieren zu |
| **aus, bei** | bestehen aus, stammen aus; sich bedanken bei, sich beschweren bei |
`,
      examples: [
        { de: 'Ich träume von einem langen Urlaub.', en: 'I dream of a long holiday. (von + Dat)' },
        { de: 'Sie fragt nach dem Weg.', en: 'She asks the way. (nach + Dat)' },
        { de: 'Er hat Angst vor großen Hunden.', en: 'He is afraid of big dogs. (vor + Dat)' },
        { de: 'Wir gratulieren dir zum Geburtstag.', en: 'We congratulate you on your birthday. (zu + Dat: zum = zu dem)' },
      ],
    },
    {
      title: 'Two-way prepositions: the verb decides',
      text: `
**an, auf, über, in** are two-way prepositions, so the verb decides the case. Most take the **Accusative**.

| Preposition | + Akkusativ | + Dativ |
|---|---|---|
| **an** | denken an, sich erinnern an, glauben an | teilnehmen an, leiden an, arbeiten an |
| **auf** | warten auf, achten auf, sich verlassen auf, hoffen auf | – |
| **über** | sprechen über, sich ärgern über, nachdenken über, lachen über | – |
| **in** | sich verlieben in | – |

**auf** and **über**: always Accusative here. Only **an** splits.
`,
      examples: [
        { de: 'Er erinnert sich an seine Kindheit.', en: 'He remembers his childhood. (an + Akk)' },
        { de: 'Ich nehme am Kurs teil.', en: 'I take part in the course. (an + Dat: am = an dem)' },
        { de: 'Wir sprechen über das Problem.', en: 'We talk about the problem. (über + Akk)' },
        { de: 'Sie hat sich in ihren Nachbarn verliebt.', en: 'She has fallen in love with her neighbour. (in + Akk)' },
      ],
    },
    {
      title: 'sich freuen: auf or über?',
      text: `
*sich freuen* takes both prepositions, with two different meanings:

- **sich freuen auf** + Akk = look forward to something in the **future**
- **sich freuen über** + Akk = be happy about something that **already happened**

Ask yourself: has it happened yet? If not, use *auf*.
`,
      examples: [
        { de: 'Wir freuen uns auf das Wochenende.', en: 'We are looking forward to the weekend. (auf: still to come)' },
        { de: 'Ich freue mich über das Geschenk.', en: 'I am happy about the present. (über: already received)' },
        { de: 'Sie freut sich auf deinen Besuch.', en: 'She is looking forward to your visit.' },
      ],
    },
    {
      title: 'Things and clauses: da- and wo-',
      text: `
When the object is a **thing** you refer back to, or a whole clause, use a **da-compound** (*darauf, daran, davon*): *Ich denke **daran**, dass …* To ask about a thing, use **wo-**: ***Worauf** wartest du?*

For **people**, keep the preposition and use a pronoun: *Ich warte **auf ihn**. **Auf wen** wartest du?*
`,
      examples: [
        { de: 'Ich denke daran, dass ich bald umziehe.', en: 'I am thinking about the fact that I am moving soon. (daran + dass-clause)' },
        { de: 'Worauf wartest du? Auf eine Antwort.', en: 'What are you waiting for? For an answer. (wo- for a thing)' },
        { de: 'Auf wen wartest du? Auf meinen Bruder.', en: 'Who are you waiting for? For my brother. (preposition + wen for a person)' },
      ],
    },
  ],
  connections: [
    { topicId: 'a2-12-verbs-with-prepositions', note: 'The A2 topic introduced the idea with a short list; this is the full B1 set.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'darauf, daran and worauf are how you refer to things and clauses with these verbs.' },
    { topicId: 'a1-22-accusative-prepositions', note: 'für, um and gegen always take the Accusative, also after verbs.' },
    { topicId: 'a1-25-dative-prepositions', note: 'mit, von, nach, zu, aus and bei always take the Dative, also after verbs.' },
    { topicId: 'b1-28-adjective-noun-prepositions', note: 'Adjectives and nouns from the same family often take the same preposition: sich interessieren für but Interesse an.' },
  ],
  edgeCases: [
    '**sich freuen auf** (future) vs **sich freuen über** (already happened). Both are Accusative.',
    '**an** splits: *denken an + Akk*, *teilnehmen an + Dat*. Learn the Dative verbs as the exceptions.',
    '**sich bedanken bei** jemandem **für** etwas and **sich beschweren bei** jemandem **über** etwas: the person takes bei, the thing takes the second preposition.',
    'Do not use the preposition for a clause directly: not *Ich denke an, dass …* but *Ich denke **daran**, dass …*.',
    '**warten auf** (wait for), not *warten für*. English "for" is a frequent false friend.',
  ],
  exercises: [
    {
      type: 'fill',
      id: 'b1-27-verb-preposition-b1-ex01',
      prompt: 'Ich warte ___ den Bus. (for)',
      answer: ['auf'],
      explanation: 'warten auf + Akkusativ. English "for" tempts you to say für, but it is auf.',
    },
    {
      type: 'fill',
      id: 'b1-27-verb-preposition-b1-ex02',
      prompt: 'Sie interessiert sich ___ Musik. (in)',
      answer: ['für'],
      explanation: 'sich interessieren für + Akkusativ. English "in" would suggest in, but the fixed preposition is für.',
    },
    {
      type: 'mc',
      id: 'b1-27-verb-preposition-b1-ex03',
      prompt: 'Complete: "Er erinnert sich ___ seine Kindheit."',
      options: ['an', 'auf', 'über'],
      answer: 0,
      explanation: 'sich erinnern an + Akkusativ. seine Kindheit is Accusative (feminine looks the same, but the rule is Akkusativ).',
    },
    {
      type: 'mc',
      id: 'b1-27-verb-preposition-b1-ex04',
      prompt: 'Complete: "Ich nehme ___ Kurs teil."',
      options: ['am', 'an den', 'an das'],
      answer: 0,
      explanation: 'teilnehmen an takes the Dative, one of the few an-verbs that do. Kurs is masculine: an dem = am.',
    },
    {
      type: 'match',
      id: 'b1-27-verb-preposition-b1-ex05',
      prompt: 'Match each verb with its preposition.',
      pairs: [
        ['fragen', 'nach'],
        ['bestehen', 'aus'],
        ['sich kümmern', 'um'],
        ['träumen', 'von'],
        ['Angst haben', 'vor'],
        ['sich beschweren', 'über'],
      ],
      explanation: 'fragen nach, bestehen aus, sich kümmern um, träumen von, Angst haben vor, sich beschweren über. All except um and über take the Dative.',
    },
    {
      type: 'fill',
      id: 'b1-27-verb-preposition-b1-ex06',
      prompt: 'Wir freuen uns ___ das Wochenende. (looking forward to)',
      answer: ['auf'],
      explanation: 'sich freuen auf = look forward to something in the future. The weekend is still to come.',
    },
    {
      type: 'mc',
      id: 'b1-27-verb-preposition-b1-ex07',
      prompt: 'Complete: "Ich freue mich ___ das Geschenk, das ich gestern bekommen habe."',
      options: ['über', 'auf', 'an'],
      answer: 0,
      explanation: 'The present was received yesterday, so the joy is about something that already happened: sich freuen über.',
    },
    {
      type: 'order',
      id: 'b1-27-verb-preposition-b1-ex08',
      prompt: 'Build the sentence: "She is applying for a job as an engineer."',
      words: ['sich', 'bewirbt', 'Sie', 'eine', 'um', 'als', 'Stelle', 'Ingenieurin.'],
      answer: ['Sie bewirbt sich um eine Stelle als Ingenieurin.'],
      explanation: 'sich bewerben um + Akkusativ. The reflexive pronoun sich comes right after the verb, then um eine Stelle.',
    },
    {
      type: 'fill',
      id: 'b1-27-verb-preposition-b1-ex09',
      prompt: 'Worum geht es? – Es geht ___ Geld.',
      answer: ['um'],
      explanation: 'es geht um + Akkusativ = it is about. The question word worum already shows the preposition.',
    },
    {
      type: 'translate',
      id: 'b1-27-verb-preposition-b1-ex10',
      prompt: 'Translate: "I am looking forward to your visit." (use du)',
      answer: ['Ich freue mich auf deinen Besuch.'],
      hint: 'sich freuen auf + Akkusativ; der Besuch = visit',
      explanation: 'A future event, so sich freuen auf. Besuch is masculine and Accusative: deinen Besuch.',
    },
    {
      type: 'mc',
      id: 'b1-27-verb-preposition-b1-ex11',
      prompt: 'Complete: "Er leidet ___ einer schweren Krankheit."',
      options: ['an', 'auf', 'für'],
      answer: 0,
      explanation: 'leiden an + Dativ is used for illnesses. The Dative einer schweren Krankheit confirms it.',
    },
    {
      type: 'mc',
      id: 'b1-27-verb-preposition-b1-ex12',
      prompt: 'Complete: "Ich denke oft ___, dass ich bald umziehe."',
      options: ['daran', 'darüber', 'dafür'],
      answer: 0,
      explanation: 'denken an + a whole clause needs the da-compound daran before the dass-clause.',
    },
  ],
};

export default topic;
