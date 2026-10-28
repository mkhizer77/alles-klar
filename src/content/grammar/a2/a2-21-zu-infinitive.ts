import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-21-zu-infinitive',
  level: 'A2',
  unit: 8,
  order: 21,
  title: 'zu + infinitive',
  germanTerm: 'Infinitiv mit zu',
  tags: ['verbs', 'infinitive', 'zu', 'word order', 'sentence structure'],
  summary: 'After many verbs, adjectives and nouns, a second verb is attached with zu + infinitive at the end of the clause (Ich habe keine Zeit, zu kochen), but modal verbs and a few others take the plain infinitive.',
  explanation: `
### What it is

English often joins two verbs with *to*: *I forgot to call*, *It is important to sleep*. German does the same with **zu** + infinitive (*Infinitiv mit zu*). The difference is the position: the **zu + infinitive goes to the end** of the clause, and there is usually a **comma** before this part of the sentence.

- Ich habe vergessen, **dich anzurufen**. – *I forgot to call you.*
- Es ist wichtig, **jeden Tag zu üben**. – *It is important to practise every day.*

### When you need zu

**1. After certain verbs.** The most common ones:

| verb | example |
|---|---|
| anfangen / beginnen (to start) | Er fängt an, Deutsch zu lernen. |
| aufhören (to stop) | Sie hört auf, zu rauchen. |
| vergessen (to forget) | Vergiss nicht, die Tür abzuschließen. |
| versuchen (to try) | Ich versuche, pünktlich zu sein. |
| vorhaben (to plan) | Wir haben vor, umzuziehen. |
| hoffen (to hope) | Ich hoffe, dich bald zu sehen. |
| empfehlen (to recommend) | Er empfiehlt mir, früh zu kommen. |
| bitten (to ask / request) | Sie bittet mich, leise zu sein. |
| sich freuen (to look forward / be glad) | Ich freue mich, Sie kennenzulernen. |

**2. After "es ist + adjective".**

- Es ist **schwer**, das zu verstehen. – *It is hard to understand that.*
- Es ist **gesund**, viel Obst zu essen.

**3. After certain nouns**, especially *Lust, Zeit, Angst, Spaß* and *die Möglichkeit*:

- Ich habe keine **Lust**, aufzuräumen. – *I do not feel like tidying up.*
- Hast du **Zeit**, mit mir zu sprechen?
- Es macht **Spaß**, Fahrrad zu fahren.

### Where zu goes

With a normal verb, **zu** stands directly before the infinitive: *zu kochen, zu lernen*.

With a **separable verb**, *zu* slips **between the prefix and the stem**, written as one word:

| infinitive | with zu |
|---|---|
| anrufen | an**zu**rufen |
| aufstehen | auf**zu**stehen |
| einkaufen | ein**zu**kaufen |
| abschließen | ab**zu**schließen |
| kennenlernen | kennen**zu**lernen |

### When you do NOT need zu

Some verbs take a **plain infinitive** with no *zu*:

- **Modal verbs**: Ich muss **gehen**. Sie will **schlafen**.
- **werden** (future): Ich werde **anrufen**.
- **gehen** and **lernen** with another verb: Wir gehen **schwimmen**. Sie lernt **schwimmen**.

You may also see *sehen, hören* and *lassen* with a plain infinitive (*Ich höre ihn singen*, *Ich lasse das Auto reparieren*). That is a B1 pattern; for now just notice there is no *zu*.

### Why it matters

The *zu*-infinitive lets you build longer, more natural sentences without a full subordinate clause. Instead of *Ich hoffe, dass ich dich bald sehe* you can say *Ich hoffe, dich bald zu sehen*. It is also the base for *um … zu*, *ohne … zu* and *anstatt … zu* in the next topic.
`,
  examples: [
    { de: 'Ich habe keine Lust, heute zu kochen.', en: 'I do not feel like cooking today. (noun Lust + zu)' },
    { de: 'Vergiss nicht, mich anzurufen!', en: 'Do not forget to call me! (separable: an-zu-rufen)' },
    { de: 'Es ist wichtig, genug zu schlafen.', en: 'It is important to sleep enough. (es ist + adjective)' },
    { de: 'Sie versucht, jeden Tag zu joggen.', en: 'She tries to jog every day.' },
    { de: 'Wir haben vor, nächstes Jahr umzuziehen.', en: 'We plan to move next year.' },
    { de: 'Ich muss jetzt gehen.', en: 'I have to go now. (modal verb: no zu)' },
    { de: 'Gehen wir morgen schwimmen?', en: 'Shall we go swimming tomorrow? (gehen + infinitive: no zu)' },
    { de: 'Ich freue mich, Sie kennenzulernen.', en: 'I am pleased to meet you. (kennen-zu-lernen)' },
  ],
  connections: [
    { topicId: 'a1-16-separable-verbs', note: 'With separable verbs, zu goes between prefix and stem: aufzustehen.' },
    { topicId: 'a1-17-modal-verbs', note: 'Modal verbs take the infinitive without zu: Ich kann schwimmen.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'A zu-infinitive often replaces a dass-clause when the subject is the same.' },
    { topicId: 'a2-22-um-zu-ohne-zu', note: 'um … zu, ohne … zu and anstatt … zu are the zu-infinitive with a purpose or contrast word in front.' },
    { topicId: 'b1-22-brauchen-zu-scheinen', note: 'At B1 you meet more verbs with zu: brauchen … zu, scheinen … zu, haben … zu.' },
  ],
  edgeCases: [
    'Never put *zu* after a **modal verb**: *Ich will zu schlafen* is wrong. Say *Ich will schlafen*.',
    'With separable verbs *zu* goes **inside** the verb as one word: *anzurufen*, not *zu anrufen* or *an zu rufen*.',
    'A *zu*-infinitive can only replace *dass* when the **subject is the same** in both parts. *Ich hoffe, dass du kommst* cannot become a *zu*-infinitive because the subjects differ (ich / du).',
    'The **comma** is optional when the zu-part is very short (*Ich versuche zu schlafen*), but it is always allowed. Use it: it makes the sentence easier to read.',
    '*gehen* and *fahren* with another verb take no *zu*: *Wir gehen essen*, *Ich fahre einkaufen*, not *zu essen*.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'a2-21-zu-infinitive-ex01',
      prompt: 'Complete: "Ich habe keine Lust, heute ___."',
      options: ['arbeiten', 'zu arbeiten', 'arbeite'],
      answer: 1,
      explanation: 'After the noun Lust you need zu + infinitive at the end: keine Lust, zu arbeiten.',
    },
    {
      type: 'fill',
      id: 'a2-21-zu-infinitive-ex02',
      prompt: 'Vergiss nicht, mich ___! (anrufen)',
      answer: ['anzurufen'],
      explanation: 'anrufen is separable, so zu goes between the prefix and the stem: an-zu-rufen, written as one word.',
    },
    {
      type: 'mc',
      id: 'a2-21-zu-infinitive-ex03',
      prompt: 'Complete: "Ich muss jetzt ___."',
      options: ['zu gehen', 'gehen', 'gehe'],
      answer: 1,
      explanation: 'muss is a modal verb. Modal verbs take the plain infinitive without zu.',
    },
    {
      type: 'order',
      id: 'a2-21-zu-infinitive-ex04',
      prompt: 'Build the sentence: "It is important to learn German every day."',
      words: ['zu', 'wichtig,', 'Deutsch', 'ist', 'Es', 'lernen.', 'jeden', 'Tag'],
      answer: ['Es ist wichtig, jeden Tag Deutsch zu lernen.', 'Es ist wichtig, Deutsch jeden Tag zu lernen.'],
      explanation: 'es ist + adjective, then a comma, then the rest of the clause with zu lernen at the very end.',
    },
    {
      type: 'fill',
      id: 'a2-21-zu-infinitive-ex05',
      prompt: 'Er versucht, immer pünktlich ___. (sein)',
      answer: ['zu sein'],
      explanation: 'versuchen takes zu + infinitive. sein is not separable, so zu stays a separate word: zu sein.',
    },
    {
      type: 'mc',
      id: 'a2-21-zu-infinitive-ex06',
      prompt: 'Which sentence is correct?',
      options: ['Wir gehen heute zu schwimmen.', 'Wir gehen heute schwimmen.', 'Wir gehen heute schwimmen zu.'],
      answer: 1,
      explanation: 'gehen + another verb takes the plain infinitive: gehen schwimmen, like gehen einkaufen or gehen essen.',
    },
    {
      type: 'match',
      id: 'a2-21-zu-infinitive-ex07',
      prompt: 'Match the beginning of each sentence with its ending.',
      pairs: [
        ['Ich habe keine Zeit,', 'heute zu kochen.'],
        ['Es ist gesund,', 'viel Obst zu essen.'],
        ['Vergiss nicht,', 'die Tür abzuschließen.'],
        ['Ich hoffe,', 'dich bald zu sehen.'],
      ],
      explanation: 'Each beginning is a trigger for zu: a noun (Zeit), es ist + adjective (gesund), and the verbs vergessen and hoffen.',
    },
    {
      type: 'fill',
      id: 'a2-21-zu-infinitive-ex08',
      prompt: 'Hast du Lust, mit uns ___? (einkaufen)',
      answer: ['einzukaufen'],
      explanation: 'einkaufen is separable: ein-zu-kaufen as one word.',
    },
    {
      type: 'mc',
      id: 'a2-21-zu-infinitive-ex09',
      prompt: 'Complete: "Ich werde dich morgen ___."',
      options: ['zu anrufen', 'anrufen', 'anzurufen'],
      answer: 1,
      explanation: 'werden (future) takes a plain infinitive, like a modal verb: Ich werde dich anrufen. anzurufen would be correct after a trigger like vergessen or Lust.',
    },
    {
      type: 'translate',
      id: 'a2-21-zu-infinitive-ex10',
      prompt: 'Translate: "I am trying to learn German."',
      answer: ['Ich versuche, Deutsch zu lernen.', 'Ich versuche Deutsch zu lernen.'],
      hint: 'versuchen = to try',
      explanation: 'versuchen + comma + object + zu lernen at the end. The comma is recommended but not required here.',
    },
    {
      type: 'fill',
      id: 'a2-21-zu-infinitive-ex11',
      prompt: 'Sie hat angefangen, Gitarre ___. (spielen)',
      answer: ['zu spielen'],
      explanation: 'anfangen is followed by zu + infinitive. spielen is not separable, so zu spielen is two words.',
    },
    {
      type: 'mc',
      id: 'a2-21-zu-infinitive-ex12',
      prompt: 'Which sentence can be rewritten with a zu-infinitive?',
      options: ['Ich hoffe, dass du gesund bist.', 'Ich hoffe, dass ich die Prüfung bestehe.', 'Ich hoffe, dass es morgen nicht regnet.'],
      answer: 1,
      explanation: 'Only option 2 has the same subject in both parts (ich … ich), so it becomes: Ich hoffe, die Prüfung zu bestehen. The others have different subjects.',
    },
  ],
};

export default topic;
