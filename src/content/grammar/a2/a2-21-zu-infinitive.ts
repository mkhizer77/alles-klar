import type { Topic } from '../../types';

const topic: Topic = {
  id: 'a2-21-zu-infinitive',
  level: 'A2',
  unit: 8,
  order: 24,
  title: 'zu + infinitive',
  germanTerm: 'Infinitiv mit zu',
  tags: ['verbs', 'infinitive', 'zu', 'word order', 'sentence structure'],
  summary: 'After many verbs, adjectives and nouns, a second verb is attached with zu + infinitive at the end of the clause (Ich habe keine Zeit, zu kochen), but modal verbs and a few others take the plain infinitive.',
  steps: [
    {
      title: 'zu + infinitive goes to the end',
      text: `
English joins two verbs with *to*: *I am trying to sleep*. German does the same with **zu** + infinitive (*Infinitiv mit zu*; the infinitive is the basic verb form, *schlafen*).

The difference is the position. The **zu + infinitive goes to the end** of the clause, and there is usually a **comma** before this part of the sentence.
`,
      examples: [
        { de: 'Ich versuche, pünktlich zu sein.', en: 'I am trying to be on time. (zu sein at the end)' },
        { de: 'Es ist wichtig, jeden Tag zu üben.', en: 'It is important to practise every day.' },
        { de: 'Ich hoffe, dich bald zu sehen.', en: 'I hope to see you soon.' },
      ],
    },
    {
      title: 'After these verbs',
      text: `
Some verbs almost always carry a second action with *zu*. Learn the common ones:

| verb | meaning |
|---|---|
| anfangen | to start |
| aufhören | to stop |
| vergessen | to forget |
| versuchen | to try |
| vorhaben | to plan |
| hoffen | to hope |

Also **bitten** (to ask someone to do something), **empfehlen** (to recommend) and **sich freuen** (to be glad, to look forward).
`,
      examples: [
        { de: 'Er fängt an, Deutsch zu lernen.', en: 'He is starting to learn German.' },
        { de: 'Sie hört auf, so viel zu arbeiten.', en: 'She is stopping working so much.' },
        { de: 'Wir haben vor, ein Haus zu kaufen.', en: 'We plan to buy a house.' },
        { de: 'Sie bittet mich, leise zu sein.', en: 'She asks me to be quiet.' },
      ],
    },
    {
      title: 'After es ist + adjective and after nouns',
      text: `
You also need *zu* after **es ist + adjective** (*Es ist wichtig, …*) and after a few **nouns**, especially **Lust** (desire), **Zeit**, **Angst**, **Spaß** and **die Möglichkeit** (the chance).

The pattern is the same: comma, then the rest of the idea, then *zu* + infinitive at the very end.
`,
      examples: [
        { de: 'Es ist schwer, das zu verstehen.', en: 'It is hard to understand that. (es ist + adjective)' },
        { de: 'Es ist gesund, viel Obst zu essen.', en: 'It is healthy to eat a lot of fruit.' },
        { de: 'Ich habe keine Lust, heute zu kochen.', en: 'I do not feel like cooking today. (noun Lust + zu)' },
        { de: 'Hast du Zeit, mit mir zu sprechen?', en: 'Do you have time to talk to me?' },
      ],
    },
    {
      title: 'Separable verbs: zu goes inside',
      text: `
With a normal verb, *zu* is a separate word before the infinitive: *zu kochen*. With a **separable verb** (a verb with a prefix that can split off, like *anrufen*), *zu* slips **between the prefix and the stem**, and you write it as one word.

| infinitive | with zu |
|---|---|
| anrufen | an**zu**rufen |
| aufstehen | auf**zu**stehen |
| einkaufen | ein**zu**kaufen |
| abschließen | ab**zu**schließen |
| kennenlernen | kennen**zu**lernen |
`,
      examples: [
        { de: 'Vergiss nicht, mich anzurufen!', en: 'Do not forget to call me! (an-zu-rufen)' },
        { de: 'Ich habe keine Lust, aufzuräumen.', en: 'I do not feel like tidying up. (auf-zu-räumen)' },
        { de: 'Ich freue mich, Sie kennenzulernen.', en: 'I am pleased to meet you. (kennen-zu-lernen)' },
      ],
    },
    {
      title: 'No zu after modal verbs, werden, gehen',
      text: `
Some verbs take the plain infinitive, with **no zu**:

- **modal verbs** (*müssen, können, wollen* …): *Ich muss gehen.*
- **werden** for the future: *Ich werde anrufen.*
- **gehen** and **lernen** with another verb: *Wir gehen schwimmen.*

If you are tempted to write *Ich will zu schlafen*, stop. After a modal verb there is never a *zu*.
`,
      examples: [
        { de: 'Ich muss jetzt gehen.', en: 'I have to go now. (modal verb: no zu)' },
        { de: 'Ich werde dich morgen anrufen.', en: 'I will call you tomorrow. (werden: no zu)' },
        { de: 'Gehen wir morgen schwimmen?', en: 'Shall we go swimming tomorrow? (gehen + infinitive: no zu)' },
        { de: 'Sie lernt schwimmen.', en: 'She is learning to swim. (lernen: no zu)' },
      ],
    },
    {
      title: 'Instead of a dass-clause',
      text: `
A *zu*-infinitive often replaces a **dass**-clause (a clause starting with *dass*, that) and sounds shorter and more natural: *Ich hoffe, dass ich dich sehe* becomes *Ich hoffe, dich zu sehen*.

This only works when the **subject is the same** in both parts. If the subjects are different (*ich* hope, *du* come), keep *dass*.
`,
      examples: [
        { de: 'Ich hoffe, dich bald zu sehen.', en: 'I hope to see you soon. (ich hope, ich see: zu works)' },
        { de: 'Ich hoffe, die Prüfung zu bestehen.', en: 'I hope to pass the exam.' },
        { de: 'Ich hoffe, dass du gesund bist.', en: 'I hope that you are well. (ich / du: different subjects, so dass stays)' },
      ],
    },
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
    'With separable verbs *zu* goes **inside** the verb as one word: **anzurufen**, not *zu anrufen* or *an zu rufen*.',
    'A *zu*-infinitive can only replace *dass* when the **subject is the same** in both parts. *Ich hoffe, dass du kommst* cannot become a *zu*-infinitive because the subjects differ (ich / du).',
    'The **comma** is optional when the zu-part is very short (*Ich versuche zu schlafen*), but it is always allowed. Use it: it makes the sentence easier to read.',
    '**gehen** and **fahren** with another verb take no *zu*: *Wir gehen essen*, *Ich fahre einkaufen*, not *zu essen*.',
    'You may also see **sehen, hören** and **lassen** with a plain infinitive: *Ich höre ihn singen*, *Ich lasse das Auto reparieren*. That is a B1 pattern; for now just notice there is no *zu*.',
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
