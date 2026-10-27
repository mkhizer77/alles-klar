import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-27-verb-preposition-b1',
  level: 'B1',
  unit: 9,
  order: 27,
  title: 'Verb + preposition combinations: the B1 list',
  germanTerm: 'Verben mit Präpositionen (B1)',
  tags: ['verbs', 'prepositions', 'cases', 'vocabulary'],
  summary: 'Many German verbs come with a fixed preposition and case (warten auf + Akkusativ, träumen von + Dativ); the B1 list groups the most important ones by preposition so you can learn them in blocks.',
  explanation: `
### The idea, in one line

Some verbs are "glued" to a preposition: *warten **auf***, *sich interessieren **für***, *träumen **von***. The preposition has **no meaning of its own** here – you cannot work it out, you have to learn it with the verb, together with the **case** it takes. This topic gives you the B1 set, grouped by preposition so the blocks stick.

### Prepositions with a fixed case

These prepositions always take the same case, whatever the verb:

| Preposition + case | Verbs |
|---|---|
| **für** + Akk | sich interessieren für, sich bedanken für, sich entschuldigen für, sorgen für, sich entscheiden für |
| **um** + Akk | sich kümmern um, bitten um, sich bewerben um, es geht um, sich sorgen um |
| **gegen** + Akk | protestieren gegen, sich wehren gegen, kämpfen gegen |
| **mit** + Dat | sich beschäftigen mit, anfangen mit, aufhören mit, rechnen mit, vergleichen mit, sich unterhalten mit, telefonieren mit |
| **von** + Dat | träumen von, abhängen von, erzählen von, sich erholen von, halten von, sich verabschieden von |
| **nach** + Dat | fragen nach, suchen nach, sich erkundigen nach, sich sehnen nach, riechen nach |
| **vor** + Dat | Angst haben vor, warnen vor, sich fürchten vor, schützen vor |
| **zu** + Dat | gehören zu, passen zu, einladen zu, gratulieren zu, führen zu |
| **aus** + Dat | bestehen aus, stammen aus |
| **bei** + Dat | sich bedanken bei, sich beschweren bei, helfen bei, sich entschuldigen bei |

### Two-way prepositions: the verb decides the case

With *an, auf, über, in* the case is **not** automatic. Most verbs take the **Accusative**; a few take the Dative. Learn these as exceptions.

| Preposition | + Akkusativ | + Dativ |
|---|---|---|
| **an** | denken an, sich erinnern an, sich gewöhnen an, glauben an, sich wenden an | teilnehmen an, leiden an, arbeiten an, zweifeln an |
| **auf** | warten auf, sich freuen auf, achten auf, sich verlassen auf, verzichten auf, sich konzentrieren auf, reagieren auf, hoffen auf, sich vorbereiten auf | (none at B1) |
| **über** | sprechen über, sich freuen über, sich ärgern über, nachdenken über, sich beschweren über, diskutieren über, sich informieren über, lachen über | (none) |
| **in** | sich verlieben in | (none) |

A handy pattern: **über is always Accusative**, **auf is always Accusative** with these verbs. Only **an** has a real split.

### freuen: auf or über?

*sich freuen* takes both, with different meanings:

- sich freuen **auf** + Akk = look forward to something in the **future** (*Ich freue mich auf das Wochenende.*)
- sich freuen **über** + Akk = be happy about something that **happened** (*Ich freue mich über das Geschenk.*)

### Pronouns and clauses: da- and wo-

When the object is a **thing** you refer back to, or a whole clause, use a **da-compound**: *Ich denke **daran**, dass …*, *Ich warte **darauf**.* To ask about a thing, use **wo-**: ***Worauf** wartest du?* For people, use the preposition + pronoun: *Ich warte **auf ihn**. **Auf wen** wartest du?*

### Why it matters

Verb + preposition errors are among the most frequent at B1, and examiners notice them. Each pair you know by heart lets you build correct sentences automatically, use da- and wo-compounds, and understand the matching nouns and adjectives (*Interesse an*, *stolz auf*) in the next topic.
`,
  examples: [
    { de: 'Ich warte auf den Bus.', en: 'I am waiting for the bus. (auf + Akk)' },
    { de: 'Sie interessiert sich für Musik.', en: 'She is interested in music. (für + Akk)' },
    { de: 'Er erinnert sich an seine Kindheit.', en: 'He remembers his childhood. (an + Akk)' },
    { de: 'Ich nehme am Kurs teil.', en: 'I take part in the course. (an + Dat: am = an dem)' },
    { de: 'Wir freuen uns auf das Wochenende.', en: 'We are looking forward to the weekend. (auf = future)' },
    { de: 'Ich freue mich über das Geschenk.', en: 'I am happy about the present. (über = something that happened)' },
    { de: 'Sie kümmert sich um ihre Großmutter.', en: 'She looks after her grandmother. (um + Akk)' },
    { de: 'Worauf wartest du? – Auf eine Antwort.', en: 'What are you waiting for? – For an answer. (wo-compound for a thing)' },
  ],
  connections: [
    { topicId: 'a2-12-verbs-with-prepositions', note: 'The A2 topic introduced the idea with a short list; this is the full B1 set.' },
    { topicId: 'a2-13-da-wo-compounds', note: 'darauf, daran and worauf are how you refer to things and clauses with these verbs.' },
    { topicId: 'a1-22-accusative-prepositions', note: 'für, um and gegen always take the Accusative, also after verbs.' },
    { topicId: 'a1-25-dative-prepositions', note: 'mit, von, nach, zu, aus and bei always take the Dative, also after verbs.' },
    { topicId: 'b1-28-adjective-noun-prepositions', note: 'Adjectives and nouns from the same family often take the same preposition: sich interessieren für but Interesse an.' },
  ],
  edgeCases: [
    '*sich freuen **auf*** (future) vs *sich freuen **über*** (already happened). Both are Accusative.',
    '*an* splits: *denken an + Akk*, *teilnehmen an + Dat*. Learn the Dative verbs as the exceptions.',
    '*sich bedanken **bei** jemandem **für** etwas* and *sich beschweren **bei** jemandem **über** etwas*: the person takes bei, the thing takes the second preposition.',
    'Do not use the preposition for a clause directly: not *Ich denke an, dass …* but *Ich denke **daran**, dass …*.',
    '*warten auf* (wait for), not *warten für*. English "for" is a frequent false friend.',
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
