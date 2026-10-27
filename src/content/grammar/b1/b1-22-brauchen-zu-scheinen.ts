import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-22-brauchen-zu-scheinen',
  level: 'B1',
  unit: 8,
  order: 22,
  title: 'brauchen … zu, scheinen … zu, haben / sein … zu',
  germanTerm: 'Modalitätsverben',
  tags: ['verbs', 'zu infinitive', 'modal meaning', 'necessity'],
  summary: 'A few ordinary verbs combine with zu + infinitive to work like modal verbs: nicht brauchen zu (do not have to), scheinen zu (seem to), haben zu (must) and sein zu (can / must be done).',
  explanation: `
### Modal meaning without a modal verb

You know the modal verbs *müssen*, *können*, *dürfen*. German also has a small group of **ordinary verbs** that take on a modal meaning when they are followed by **zu + infinitive**. Grammar books call them *Modalitätsverben*. The four you need at B1 are *brauchen*, *scheinen*, *haben* and *sein*.

The pattern is always the same: the verb is conjugated in position 2, and **zu + infinitive** goes to the end of the clause.

### The four verbs

| Verb | Meaning | Equals | Example |
|---|---|---|---|
| **nicht / nur brauchen … zu** | do not have to / only need to | nicht müssen | Du **brauchst** nicht **zu kommen**. |
| **scheinen … zu** | seem to | wahrscheinlich | Er **scheint** krank **zu sein**. |
| **haben … zu** | have to, must (active) | müssen | Ich **habe** noch viel **zu tun**. |
| **sein … zu** | can be / must be done (passive) | kann / muss … werden | Die Aufgabe **ist** leicht **zu lösen**. |

### brauchen: only with a negative or restriction

*brauchen … zu* is used almost always with **nicht**, **kein** or **nur**:

- Du **brauchst nicht** zu warten. = Du musst nicht warten. (You do not have to wait.)
- Du **brauchst nur** anzurufen. (You only need to call.)
- Ihr **braucht keine** Angst zu haben. (You do not need to be afraid.)

It is the polite, soft way to say that something is **not necessary**. Note that *nicht brauchen* means "do not have to", **not** "must not" – that would be *nicht dürfen*.

### scheinen: "seems to"

*scheinen … zu* reports an impression. The subject of *scheinen* is the person or thing you are talking about:

- Sie **scheint** glücklich **zu sein**. (She seems to be happy.)
- Das **scheint** nicht **zu funktionieren**. (That does not seem to work.)

*scheinen* without *zu* just means "to shine" (*Die Sonne scheint*).

### haben … zu and sein … zu

These two look alike but point in opposite directions:

| | Who does it? | Meaning |
|---|---|---|
| **haben … zu** | the subject **does** the action | obligation (active) |
| **sein … zu** | the action is done **to** the subject | possibility or obligation (passive) |

- Sie **haben** die Regeln **zu befolgen**. = Sie müssen die Regeln befolgen.
- Die Rechnung **ist** bis Freitag **zu bezahlen**. = Die Rechnung muss bis Freitag bezahlt werden.
- Dieses Wort **ist** schwer **zu übersetzen**. = Dieses Wort kann nur schwer übersetzt werden.

Whether *sein … zu* means "can" or "must" depends on context: with *leicht / schwer / kaum* it means **can**; in instructions and rules it usually means **must**.

### Why it matters

These forms are everywhere in instructions, signs and formal writing (*Der Antrag ist bis zum 1. Mai einzureichen*), and *nicht brauchen zu* is the natural spoken way to reassure someone. Recognising them also helps you read B1 texts, where *sein … zu* often replaces a long passive sentence.
`,
  examples: [
    { de: 'Du brauchst nicht zu kommen.', en: 'You do not have to come. (= du musst nicht kommen)' },
    { de: 'Sie brauchen nur zu unterschreiben.', en: 'You only need to sign.' },
    { de: 'Er scheint müde zu sein.', en: 'He seems to be tired.' },
    { de: 'Der Plan scheint zu funktionieren.', en: 'The plan seems to work.' },
    { de: 'Ich habe heute noch viel zu tun.', en: 'I still have a lot to do today. (haben zu = must do)' },
    { de: 'Das Formular ist bis Montag auszufüllen.', en: 'The form is to be filled in by Monday. (sein zu = must be done)' },
    { de: 'Diese Frage ist leicht zu beantworten.', en: 'This question is easy to answer. (sein zu = can be done)' },
  ],
  connections: [
    { topicId: 'a2-21-zu-infinitive', note: 'All four verbs use the zu + infinitive construction, including zu inside separable verbs.' },
    { topicId: 'a1-17-modal-verbs', note: 'nicht brauchen zu replaces nicht müssen; haben zu replaces müssen.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'sein … zu is one of the main passive alternatives alongside man, lassen and -bar.' },
    { topicId: 'b1-24-futur-2-probability', note: 'scheinen zu is another way of expressing an assumption, like wohl or dürfte.' },
    { topicId: 'b1-07-passive-modals-perfekt', note: 'sein … zu + infinitive often replaces muss / kann + Partizip II + werden.' },
  ],
  edgeCases: [
    '*Du brauchst nicht zu kommen* = you do not **have to** come. "You must not come" is *Du darfst nicht kommen*.',
    'In everyday speech people often drop *zu* after *brauchen* (*Du brauchst nicht kommen*). In writing and in the exam, keep the *zu*.',
    '*brauchen* without *zu* and with a noun just means "to need": *Ich brauche Hilfe*.',
    'With separable verbs *zu* goes inside the verb: *Du brauchst nur **anzurufen***, *Das Formular ist **auszufüllen***.',
    '*haben … zu* can be a plain full verb plus infinitive clause with the same look: *Ich habe keine Zeit zu kochen* (I have no time to cook). Context tells you whether it means "must".',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex01',
      prompt: 'What does "Du brauchst nicht zu kommen." mean?',
      options: ['You do not have to come.', 'You must not come.', 'You cannot come.'],
      answer: 0,
      explanation: 'nicht brauchen zu = nicht müssen: it is not necessary. "Must not" would be nicht dürfen.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex02',
      prompt: 'Du brauchst nur ___ (anrufen), dann komme ich.',
      answer: ['anzurufen'],
      explanation: 'anrufen is separable, so zu goes between the prefix and the stem: anzurufen. nur brauchen zu = only need to.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex03',
      prompt: 'Er ___ (scheinen) müde zu sein.',
      answer: ['scheint'],
      explanation: 'scheinen is conjugated normally in position 2: er scheint. The infinitive zu sein stands at the end.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex04',
      prompt: 'What does "Die Aufgabe ist leicht zu lösen." mean?',
      options: ['The task can be solved easily.', 'The task was solved easily.', 'The task solves itself easily.'],
      answer: 0,
      explanation: 'sein … zu has a passive meaning. With leicht it means "can be": the task can be solved easily.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex05',
      prompt: 'Complete: "Sie haben das Formular bis Montag ___."',
      options: ['auszufüllen', 'ausfüllen', 'zu ausfüllen'],
      answer: 0,
      explanation: 'haben … zu needs zu + infinitive. ausfüllen is separable, so zu goes inside: auszufüllen. The sentence means they must fill in the form by Monday.',
    },
    {
      type: 'order',
      id: 'b1-22-brauchen-zu-scheinen-ex06',
      prompt: 'Build the sentence: "You do not need to worry."',
      words: ['keine', 'Du', 'dir', 'brauchst', 'machen.', 'Sorgen', 'zu'],
      answer: ['Du brauchst dir keine Sorgen zu machen.'],
      explanation: 'brauchen in position 2, then the pronoun dir, the object keine Sorgen, and zu machen at the end. keine does the negating.',
    },
    {
      type: 'match',
      id: 'b1-22-brauchen-zu-scheinen-ex07',
      prompt: 'Match each construction with its meaning.',
      pairs: [
        ['nicht brauchen … zu', 'do not have to'],
        ['nur brauchen … zu', 'only need to'],
        ['scheinen … zu', 'seem to'],
        ['haben … zu', 'must do (active)'],
        ['sein … zu', 'can / must be done (passive)'],
      ],
      explanation: 'brauchen softens necessity, scheinen gives an impression, haben zu is active obligation, sein zu is passive possibility or obligation.',
    },
    {
      type: 'fill',
      id: 'b1-22-brauchen-zu-scheinen-ex08',
      prompt: 'Das Fenster muss repariert werden. = Das Fenster ___ zu reparieren.',
      answer: ['ist'],
      explanation: 'muss + Partizip II + werden can be replaced by sein … zu + infinitive: Das Fenster ist zu reparieren.',
    },
    {
      type: 'translate',
      id: 'b1-22-brauchen-zu-scheinen-ex09',
      prompt: 'Translate: "She seems to be happy."',
      answer: ['Sie scheint glücklich zu sein.', 'Sie scheint zufrieden zu sein.'],
      hint: 'scheinen … zu; glücklich = happy',
      explanation: 'scheint in position 2, the adjective in the middle, zu sein at the end.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex10',
      prompt: 'Rewrite "Ihr müsst nicht warten." with brauchen.',
      options: ['Ihr braucht nicht zu warten.', 'Ihr braucht nicht warten zu.', 'Ihr braucht nicht gewartet.'],
      answer: 0,
      explanation: 'nicht müssen = nicht brauchen zu. zu stands directly before the infinitive warten at the end.',
    },
    {
      type: 'order',
      id: 'b1-22-brauchen-zu-scheinen-ex11',
      prompt: 'Build the sentence: "The problem does not seem to be so simple."',
      words: ['scheint', 'Problem', 'Das', 'so', 'nicht', 'sein.', 'einfach', 'zu'],
      answer: ['Das Problem scheint nicht so einfach zu sein.'],
      explanation: 'scheint takes position 2; nicht so einfach fills the middle; zu sein closes the sentence.',
    },
    {
      type: 'mc',
      id: 'b1-22-brauchen-zu-scheinen-ex12',
      prompt: 'What does "Ich habe heute noch viel zu tun." mean?',
      options: ['I still have a lot to do today.', 'I did a lot today.', 'I have already done a lot today.'],
      answer: 0,
      explanation: 'haben … zu expresses obligation: there is still a lot I have to do. It is not a past tense.',
    },
  ],
};

export default topic;
