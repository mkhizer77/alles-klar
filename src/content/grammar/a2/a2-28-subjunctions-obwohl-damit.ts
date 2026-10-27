import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-28-subjunctions-obwohl-damit',
  level: 'A2',
  unit: 10,
  order: 28,
  title: 'obwohl, damit, bis, seit(dem), bevor, nachdem',
  germanTerm: 'Subjunktionen',
  tags: ['subordinate clauses', 'conjunctions', 'word order', 'time clauses', 'verb final'],
  summary: 'These six subjunctions open a subordinate clause (verb at the end) and express contrast (obwohl), purpose (damit) or time relations (bis, seitdem, bevor, nachdem).',
  explanation: `
### What it is

A **subjunction** (*Subjunktion*, also called a subordinating conjunction) starts a **subordinate clause** (*Nebensatz*). You know the pattern from *weil* and *dass*: a comma, the subjunction, and the **conjugated verb at the very end**. This topic adds six more that you need for telling stories and explaining reasons.

| subjunction | meaning | type |
|---|---|---|
| **obwohl** | although, even though | contrast |
| **damit** | so that | purpose |
| **bis** | until | time |
| **seit / seitdem** | since (a point in time) | time |
| **bevor** | before | time |
| **nachdem** | after | time |

### The word order, once more

Main clause, comma, subjunction … verb at the end:

- Ich gehe joggen, **obwohl** es **regnet**.

Subordinate clause first, comma, then the main clause starts with its **verb** (because the whole subordinate clause is position 1):

- **Obwohl** es **regnet**, **gehe** ich joggen.

In the Perfekt or with a modal verb, the conjugated part goes last: *…, nachdem ich gegessen **habe*** / *…, damit du schlafen **kannst***.

### obwohl: contrast

*obwohl* introduces something that makes the main clause surprising.

- **Obwohl** er müde ist, arbeitet er weiter. – *Although he is tired, he keeps working.*

Its partner among the connectors is *trotzdem*: *Er ist müde, trotzdem arbeitet er weiter.*

### damit: purpose

*damit* says what something is **for**. Use it especially when the two parts have **different subjects** (otherwise *um … zu* is more elegant).

- Ich erkläre es langsam, **damit** alle es verstehen. – *I explain it slowly so that everyone understands.*
- Sie spart, **damit** ihre Kinder studieren können.

### The time subjunctions

| | main clause happens … | example |
|---|---|---|
| **bis** | until the subordinate clause starts | Ich warte, **bis** du kommst. |
| **seit / seitdem** | from the time the subordinate clause started | **Seit** ich in Berlin wohne, fahre ich Rad. |
| **bevor** | before the subordinate clause | Ich dusche, **bevor** ich frühstücke. |
| **nachdem** | after the subordinate clause | **Nachdem** ich gefrühstückt habe, gehe ich los. |

**nachdem** has a special tense rule: the *nachdem*-clause is **one step further back** in time than the main clause. Main clause in the present → *nachdem* + Perfekt. Main clause in the past → *nachdem* + Plusquamperfekt (*hatte gemacht, war gegangen*):

- **Nachdem** ich gegessen **habe**, **gehe** ich spazieren.
- **Nachdem** ich gegessen **hatte**, **ging** ich spazieren.

**bevor** does not need this shift: *Bevor ich gehe, rufe ich dich an.*

*seit* and *seitdem* mean the same as subjunctions. *seit* is also a preposition (*seit zwei Jahren*), so if a full clause with a verb follows, you are looking at the subjunction.

### Why it matters

With these six words you can describe sequences (*bevor, nachdem, bis*), durations (*seitdem*), contrasts (*obwohl*) and goals (*damit*) in proper subordinate clauses. Together with *weil, dass, wenn, als* and *ob* they cover almost all the subordinate clauses you need up to B1.
`,
  examples: [
    { de: 'Obwohl es kalt ist, trägt er keine Jacke.', en: 'Although it is cold, he is not wearing a jacket. (contrast)' },
    { de: 'Ich spreche laut, damit alle mich hören.', en: 'I speak loudly so that everyone hears me. (purpose, different subjects)' },
    { de: 'Wir warten hier, bis der Regen aufhört.', en: 'We will wait here until the rain stops.' },
    { de: 'Seitdem ich hier arbeite, bin ich glücklicher.', en: 'Since I have been working here, I am happier.' },
    { de: 'Bevor ich schlafen gehe, lese ich ein bisschen.', en: 'Before I go to sleep, I read a little.' },
    { de: 'Nachdem wir gegessen haben, machen wir einen Spaziergang.', en: 'After we have eaten, we go for a walk. (nachdem + Perfekt, main clause present)' },
    { de: 'Nachdem er die Prüfung bestanden hatte, feierte er.', en: 'After he had passed the exam, he celebrated. (nachdem + Plusquamperfekt, main clause past)' },
  ],
  connections: [
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'The verb-at-the-end rule is exactly the same as with weil and dass.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'obwohl is the subordinate partner of trotzdem; the meaning is the same, the word order is different.' },
    { topicId: 'a2-22-um-zu-ohne-zu', note: 'damit is used instead of um … zu when the subjects are different.' },
    { topicId: 'b1-01-plusquamperfekt', note: 'The nachdem-clause with a past main clause needs the Plusquamperfekt (hatte gemacht).' },
    { topicId: 'b1-02-temporal-clauses', note: 'At B1 the time subjunctions are extended with während, sobald and solange.' },
  ],
  edgeCases: [
    '**damit** is a subjunction (verb at the end) but it is also a da-compound meaning *with it*: *Was machst du damit?* The context tells you which.',
    'Do not confuse **bis** (until, subjunction) and **bevor** (before). *Ich warte, bis du kommst* (until you come) vs *Ich gehe, bevor du kommst* (before you come).',
    'After **nachdem** the tense is one step back: *Nachdem ich gegessen habe, …* (not *esse*).',
    'With **seit / seitdem** German usually uses the **present tense** for something that is still going on: *Seit ich hier wohne, lerne ich Deutsch* (English: have been learning).',
    '**obwohl** cannot be used with *trotzdem* in the same sentence. *Obwohl es regnet, gehe ich trotzdem raus* is heard in speech but is doubled; pick one.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex01',
      prompt: 'Complete: "Er geht joggen, ___ es regnet."',
      options: ['obwohl', 'damit', 'bis'],
      answer: 0,
      explanation: 'Jogging in the rain is a contrast to the weather: obwohl = although.',
    },
    {
      type: 'fill',
      id: 'a2-28-subjunctions-obwohl-damit-ex02',
      prompt: 'Ich erkläre es noch einmal, ___ alle es verstehen. (so that)',
      answer: ['damit'],
      explanation: 'The clause gives a purpose with a different subject (ich / alle), so damit.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex03',
      prompt: 'Which sentence has the correct word order?',
      options: ['Obwohl er ist müde, arbeitet er weiter.', 'Obwohl er müde ist, arbeitet er weiter.', 'Obwohl er müde ist, er arbeitet weiter.'],
      answer: 1,
      explanation: 'In the obwohl-clause the verb goes to the end (müde ist). The main clause then starts with its verb (arbeitet er).',
    },
    {
      type: 'fill',
      id: 'a2-28-subjunctions-obwohl-damit-ex04',
      prompt: 'Wir warten, ___ der Bus kommt. (until)',
      answer: ['bis'],
      explanation: 'bis = until: the waiting ends when the bus comes.',
    },
    {
      type: 'match',
      id: 'a2-28-subjunctions-obwohl-damit-ex05',
      prompt: 'Match the subjunction with its meaning.',
      pairs: [
        ['obwohl', 'although'],
        ['damit', 'so that'],
        ['bis', 'until'],
        ['seitdem', 'since'],
        ['bevor', 'before'],
        ['nachdem', 'after'],
      ],
      explanation: 'One contrast word, one purpose word and four time words. All send the verb to the end.',
    },
    {
      type: 'order',
      id: 'a2-28-subjunctions-obwohl-damit-ex06',
      prompt: 'Build the sentence: "Before I go to sleep, I read a little."',
      words: ['lese', 'Bevor', 'ich', 'bisschen.', 'gehe,', 'ein', 'schlafen', 'ich'],
      answer: ['Bevor ich schlafen gehe, lese ich ein bisschen.'],
      explanation: 'Subordinate clause first with gehe at its end, comma, then the main clause begins with the verb lese.',
    },
    {
      type: 'fill',
      id: 'a2-28-subjunctions-obwohl-damit-ex07',
      prompt: 'Nachdem ich gefrühstückt ___, gehe ich zur Arbeit. (haben)',
      answer: ['habe'],
      explanation: 'The main clause is in the present, so the nachdem-clause uses the Perfekt: gefrühstückt habe.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex08',
      prompt: 'Complete: "___ ich in Deutschland wohne, spreche ich jeden Tag Deutsch."',
      options: ['Seitdem', 'Bis', 'Nachdem'],
      answer: 0,
      explanation: 'The speaking started when the living in Germany started and is still going on: seitdem (since). Note the present tense.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex09',
      prompt: 'Which sentence means the same as "Es regnet, trotzdem gehen wir raus."?',
      options: ['Obwohl es regnet, gehen wir raus.', 'Damit es regnet, gehen wir raus.', 'Bevor es regnet, gehen wir raus.'],
      answer: 0,
      explanation: 'trotzdem (connector) and obwohl (subjunction) both express contrast. Only the word order is different.',
    },
    {
      type: 'order',
      id: 'a2-28-subjunctions-obwohl-damit-ex10',
      prompt: 'Build the sentence: "She is saving money so that her children can study."',
      words: ['Kinder', 'können.', 'spart', 'ihre', 'Sie', 'damit', 'Geld,', 'studieren'],
      answer: ['Sie spart Geld, damit ihre Kinder studieren können.'],
      explanation: 'Main clause, comma, damit, subject ihre Kinder, infinitive studieren, and the modal können at the very end.',
    },
    {
      type: 'translate',
      id: 'a2-28-subjunctions-obwohl-damit-ex11',
      prompt: 'Translate: "Although it is cold, I am going swimming."',
      answer: ['Obwohl es kalt ist, gehe ich schwimmen.', 'Ich gehe schwimmen, obwohl es kalt ist.'],
      hint: 'schwimmen gehen = to go swimming',
      explanation: 'obwohl + es kalt ist (verb at the end). If the obwohl-clause comes first, the main clause starts with gehe.',
    },
    {
      type: 'mc',
      id: 'a2-28-subjunctions-obwohl-damit-ex12',
      prompt: 'Complete the past-tense sentence: "Nachdem er die Prüfung bestanden ___, feierte er mit Freunden."',
      options: ['hat', 'hatte', 'ist'],
      answer: 1,
      explanation: 'The main clause is in the Präteritum (feierte), so the nachdem-clause goes one step further back: Plusquamperfekt, bestanden hatte.',
    },
  ],
};

export default topic;
