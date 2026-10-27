import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-12-verbs-with-prepositions',
  level: 'A2',
  unit: 4,
  order: 12,
  title: 'Verbs with fixed prepositions (warten auf, denken an)',
  germanTerm: 'Verben mit Präpositionen',
  tags: ['verbs', 'prepositions', 'Accusative', 'Dative', 'collocations'],
  summary: 'Many German verbs come with a fixed preposition and case (warten auf + Accusative, träumen von + Dative) that you must learn together with the verb, because the preposition cannot be guessed from English.',
  explanation: `
### What it is

Some verbs are always followed by a particular **preposition** (*Präposition*), and the preposition decides the **case** of the noun after it. English has this too (*wait for, think of, depend on*), but the German preposition is often a different one:

- warten **auf** (not *für*) – *to wait for*
- denken **an** (not *von*) – *to think of*
- sich interessieren **für** – *to be interested in*

The preposition has lost its normal meaning here. *Warten auf* has nothing to do with being "on" something. So you cannot translate it; you must **learn the verb, the preposition and the case as one unit**: *warten auf + A*.

### The most important verbs

| verb + preposition | case | English |
|---|---|---|
| warten **auf** | A | to wait for |
| sich freuen **auf** | A | to look forward to |
| sich freuen **über** | A | to be happy about |
| denken **an** | A | to think of |
| sich erinnern **an** | A | to remember |
| sich interessieren **für** | A | to be interested in |
| sich bedanken **für** | A | to thank for |
| sprechen / reden **über** | A | to talk about |
| sich ärgern **über** | A | to be annoyed about |
| sich kümmern **um** | A | to take care of |
| bitten **um** | A | to ask for |
| sich verlieben **in** | A | to fall in love with |
| glauben **an** | A | to believe in |
| träumen **von** | D | to dream of |
| erzählen **von** | D | to tell about |
| fragen **nach** | D | to ask about |
| sprechen **mit** | D | to speak with |
| anfangen / aufhören **mit** | D | to start / stop (doing) |
| Angst haben **vor** | D | to be afraid of |
| teilnehmen **an** | D | to take part in |

### Which case?

The rule is easier than it looks:

- **für, um, durch, gegen** → always Accusative (as everywhere).
- **mit, nach, von, zu, bei** → always Dative (as everywhere).
- **auf, über, an, in, vor** are two-way prepositions. In verb combinations **auf, über, in** take the **Accusative** almost always; **vor** takes the **Dative**; **an** is usually Accusative (*denken an, sich erinnern an*) but Dative with a few verbs (*teilnehmen an, arbeiten an, leiden an*).

### auf or über after sich freuen?

Two prepositions with one verb can mean two different things:

- Ich freue mich **auf** das Wochenende. – looking forward to it (it is still coming).
- Ich freue mich **über** das Geschenk. – happy about it (I already have it).

Similarly *sprechen **mit** jemandem* (with someone) vs *sprechen **über** etwas* (about something).

### Asking questions

For a **person**, use preposition + *wen* / *wem*: *Auf **wen** wartest du?* (Who are you waiting for?), *Mit **wem** sprichst du?* For a **thing**, German combines *wo* + preposition: *Worauf wartest du?* That is the subject of the next topic.

### Why it matters

These combinations are everywhere in daily German: *Ich warte auf den Bus. Ich interessiere mich für Musik. Hast du Angst vor Hunden?* Using *für* after *warten* or *von* after *denken* marks you as a learner at once. The good news: the list above covers most of what you need at A2, and each one you learn is a fixed phrase that never changes.
`,
  examples: [
    { de: 'Ich warte auf den Bus.', en: 'I am waiting for the bus. (warten auf + Accusative)' },
    { de: 'Sie interessiert sich für Musik.', en: 'She is interested in music. (sich interessieren für + Accusative)' },
    { de: 'Er denkt oft an seine Kindheit.', en: 'He often thinks of his childhood. (denken an + Accusative)' },
    { de: 'Ich träume von einem Haus am Meer.', en: 'I dream of a house by the sea. (träumen von + Dative)' },
    { de: 'Wir freuen uns auf die Ferien.', en: 'We are looking forward to the holidays. (auf = still to come)' },
    { de: 'Ich freue mich über das Geschenk.', en: 'I am happy about the present. (über = already here)' },
    { de: 'Hast du Angst vor Spinnen?', en: 'Are you afraid of spiders? (Angst haben vor + Dative)' },
  ],
  connections: [
    { topicId: 'a1-22-accusative-prepositions', note: 'für, um, durch, gegen always take the Accusative, also after verbs.' },
    { topicId: 'a1-25-dative-prepositions', note: 'mit, nach, von, zu always take the Dative, also after verbs.' },
    { topicId: 'a2-11-reflexive-verbs', note: 'Many of these verbs are reflexive as well: sich freuen auf, sich interessieren für.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'How to ask Worauf? and answer darauf when the object is a thing.' },
    { topicId: 'b1-27-verb-preposition-b1', note: 'The longer B1 list of verb + preposition combinations.' },
  ],
  edgeCases: [
    'The preposition is **not** the English one: *warten **auf*** (not für), *denken **an*** (not von), *sich interessieren **für*** (not in), *Angst haben **vor*** (not von).',
    '**sich freuen auf** (looking forward, future) vs **sich freuen über** (happy about, present). Both take the Accusative.',
    'With two-way prepositions in these combinations, **auf / über / in** take the Accusative, **vor** the Dative: *auf den Bus warten* but *vor dem Hund Angst haben*.',
    '**an** is Accusative with denken, sich erinnern, glauben, but Dative with teilnehmen and arbeiten: *Ich nehme an **dem** Kurs teil.*',
    '**sprechen mit** (with a person) vs **sprechen über** (about a topic): *Ich spreche mit dir über das Problem.*',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-12-verbs-with-prepositions-ex01',
      prompt: 'Complete: "Ich warte ___ den Bus."',
      options: ['auf', 'an', 'für'],
      answer: 0,
      explanation: 'warten goes with auf + Accusative. für is the English "for" trap.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex02',
      prompt: 'Sie interessiert sich ___ Musik.',
      answer: ['für'],
      explanation: 'sich interessieren für + Accusative. English says "interested in", German says für.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex03',
      prompt: 'Er denkt oft ___ seine Kindheit.',
      answer: ['an'],
      explanation: 'denken an + Accusative (seine Kindheit). Not von, even though English says "think of".',
    },
    {
      type: 'match',
      id: 'a2-12-verbs-with-prepositions-ex04',
      prompt: 'Match each verb with its fixed preposition.',
      pairs: [
        ['warten', 'auf'],
        ['sich interessieren', 'für'],
        ['träumen', 'von'],
        ['fragen', 'nach'],
        ['sich kümmern', 'um'],
      ],
      explanation: 'warten auf, sich interessieren für, träumen von, fragen nach, sich kümmern um. Learn each verb with its preposition.',
    },
    {
      type: 'mc',
      id: 'a2-12-verbs-with-prepositions-ex05',
      prompt: 'You have just received a present. "Ich freue mich ___ das Geschenk."',
      options: ['über', 'auf', 'an'],
      answer: 0,
      explanation: 'The present is already here, so you are happy about it: sich freuen über. auf would mean you are still waiting for it.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex06',
      prompt: 'Wir sprechen ___ das Problem.',
      answer: ['über'],
      explanation: 'sprechen über + Accusative = to talk about a topic. (sprechen mit = with a person.)',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex07',
      prompt: 'Ich habe Angst ___ Spinnen.',
      answer: ['vor'],
      explanation: 'Angst haben vor + Dative. English "afraid of" tempts you to say von, but it is vor.',
    },
    {
      type: 'mc',
      id: 'a2-12-verbs-with-prepositions-ex08',
      prompt: 'Which case? "Ich warte auf ___ Freund."',
      options: ['meinen', 'meinem', 'mein'],
      answer: 0,
      explanation: 'warten auf takes the Accusative. Freund is masculine → meinen Freund.',
    },
    {
      type: 'order',
      id: 'a2-12-verbs-with-prepositions-ex09',
      prompt: 'Build the sentence: "She is looking forward to the holidays."',
      words: ['die', 'sich', 'Sie', 'Ferien.', 'auf', 'freut'],
      answer: ['Sie freut sich auf die Ferien.'],
      explanation: 'Verb, then the reflexive pronoun sich, then auf + Accusative plural (die Ferien).',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex10',
      prompt: 'Er nimmt ___ dem Deutschkurs teil.',
      answer: ['an'],
      explanation: 'teilnehmen an + Dative (dem Kurs). This is one of the few an-verbs that take the Dative.',
    },
    {
      type: 'translate',
      id: 'a2-12-verbs-with-prepositions-ex11',
      prompt: 'Translate: "I am waiting for my sister."',
      answer: ['Ich warte auf meine Schwester.'],
      hint: 'warten auf = to wait for, die Schwester = sister',
      explanation: 'warten auf + Accusative. Schwester is feminine, so meine Schwester.',
    },
    {
      type: 'fill',
      id: 'a2-12-verbs-with-prepositions-ex12',
      prompt: 'Sie hat sich ___ ihn verliebt.',
      answer: ['in'],
      explanation: 'sich verlieben in + Accusative (ihn). English says "fall in love with", German says in.',
    },
  ],
};

export default topic;
