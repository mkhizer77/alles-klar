import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-07-passive-modals-perfekt',
  level: 'B1',
  unit: 3,
  order: 7,
  title: 'Passive with modal verbs and in the Perfekt',
  germanTerm: 'Passiv mit Modalverben',
  tags: ['passive', 'modal verbs', 'Perfekt', 'werden', 'word order'],
  summary: 'With a modal the passive ends in Partizip II + werden (muss repariert werden); in the Perfekt the passive is ist + Partizip II + worden.',
  explanation: `
### What it is

You can now say *Das Auto wird repariert* and *Das Auto wurde repariert*. Two more forms are needed for real texts:

- with a **modal verb**: Das Auto **muss** repariert **werden**. – *The car **must be** repaired.*
- in the **Perfekt**: Das Auto **ist** repariert **worden**. – *The car **has been** repaired.*

Both use pieces you already know. The only new word is **worden**.

### Passive with modal verbs

The modal verb is conjugated in position two. At the end of the sentence stand **Partizip II + werden** (werden in the infinitive):

| tense | example |
|---|---|
| present | Das Auto **muss** repariert **werden**. |
| Präteritum | Das Auto **musste** repariert **werden**. |

The pattern is the same for every modal:

- Die Rechnung **muss** bis Freitag bezahlt **werden**. – *has to be paid*
- Das Fenster **kann** nicht geöffnet **werden**. – *cannot be opened*
- Hier **darf** nicht geparkt **werden**. – *parking is not allowed*
- Der Text **soll** übersetzt **werden**. – *is supposed to be translated*

In a **subordinate clause** the whole block moves to the end, and the modal comes last: *Ich glaube, dass die Rechnung **bezahlt werden muss**.*

### Passive in the Perfekt

The Perfekt of the passive is built with **sein + Partizip II + worden**:

| | Präteritum passive | Perfekt passive |
|---|---|---|
| ich | wurde gefragt | **bin** gefragt **worden** |
| du | wurdest gefragt | **bist** gefragt **worden** |
| er / sie / es | wurde gefragt | **ist** gefragt **worden** |
| wir | wurden gefragt | **sind** gefragt **worden** |
| ihr | wurdet gefragt | **seid** gefragt **worden** |
| sie / Sie | wurden gefragt | **sind** gefragt **worden** |

- Das Haus **ist** 1990 gebaut **worden**. – *The house was built in 1990.*
- Die Kinder **sind** vom Arzt untersucht **worden**. – *The children have been examined by the doctor.*

Two things to notice:

1. The helper is **sein**, not *haben*.
2. The participle of *werden* is **worden** (not *geworden*) when it is the passive helper. *Geworden* means "became": *Er ist Arzt **geworden**.*

Both *wurde gebaut* and *ist gebaut worden* mean the same. The Präteritum is more common in writing, the Perfekt in speech. If you are unsure, *wurde gebaut* is always a safe choice.

### You may also see …

Very rarely a text combines a modal and the passive in the Perfekt: *Das Problem **hat** gelöst **werden müssen**.* (*The problem had to be solved.*) You do not need this form. Say it with the Präteritum instead: *Das Problem **musste** gelöst **werden**.*

### Why it matters

*Muss gemacht werden* and *ist gemacht worden* are among the most frequent structures in instructions, reports and news. Recognising **worden** instantly tells you "this is a Perfekt passive" when reading, and the modal passive lets you say what has to be done without naming anyone, which is exactly the tone of formal emails at B1.
`,
  examples: [
    { de: 'Das Fenster muss repariert werden.', en: 'The window must be repaired. (modal + Partizip II + werden)' },
    { de: 'Die Rechnung musste bis Freitag bezahlt werden.', en: 'The bill had to be paid by Friday. (modal in the Präteritum)' },
    { de: 'Die Tür konnte nicht geöffnet werden.', en: 'The door could not be opened.' },
    { de: 'Ich glaube, dass die Rechnung bezahlt werden muss.', en: 'I think that the bill has to be paid. (modal last in the subordinate clause)' },
    { de: 'Das Haus ist 1990 gebaut worden.', en: 'The house was built in 1990. (Perfekt passive: ist … worden)' },
    { de: 'Die Kinder sind vom Arzt untersucht worden.', en: 'The children have been examined by the doctor.' },
    { de: 'Das Problem musste gelöst werden.', en: 'The problem had to be solved. (modal in the Präteritum: the easy way to say it)' },
  ],
  connections: [
    { topicId: 'b1-06-passive-present-past', note: 'The basic passive with werden; this topic adds modals and the Perfekt.' },
    { topicId: 'a1-17-modal-verbs', note: 'The modal verb is conjugated as usual; only the end of the sentence changes.' },
    { topicId: 'b1-03-modals-perfekt', note: 'As with modals in the Perfekt, the Präteritum (musste … werden) is the form to use yourself.' },
    { topicId: 'a1-32-perfekt-sein', note: 'The Perfekt passive takes sein, like the verbs of movement.' },
    { topicId: 'b1-08-zustandspassiv-alternatives', note: 'ist repariert (state) vs ist repariert worden (completed process) is explained there.' },
  ],
  edgeCases: [
    'Perfekt passive = **ist … worden**, not *ist … geworden*. *Geworden* means "became": *Sie ist müde geworden.*',
    'Helper verb in the Perfekt passive is **sein**: *Das Haus **ist** gebaut worden*, never *hat gebaut worden*.',
    'With a modal, **werden** stays in the infinitive at the end: *muss repariert **werden***, not *muss repariert wird*.',
    'In a subordinate clause the modal goes last: *…, dass es repariert werden **muss***.',
    'Do not mix the state passive with the Perfekt passive: *Die Tür ist geschlossen* (it is closed now) vs *Die Tür ist geschlossen worden* (someone closed it).',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-07-passive-modals-perfekt-ex01',
      prompt: 'Complete: "Das Fenster muss ___."',
      options: ['repariert werden', 'repariert worden', 'reparieren werden'],
      answer: 0,
      explanation: 'Modal + passive: Partizip II (repariert) + werden in the infinitive.',
    },
    {
      type: 'fill',
      id: 'b1-07-passive-modals-perfekt-ex02',
      prompt: 'Die Rechnung ___ bis Freitag bezahlt werden. (müssen)',
      answer: ['muss'],
      explanation: 'The modal is conjugated in position two: die Rechnung → muss.',
    },
    {
      type: 'fill',
      id: 'b1-07-passive-modals-perfekt-ex03',
      prompt: 'Das Haus ist 1990 gebaut ___.',
      answer: ['worden'],
      explanation: 'Perfekt passive: ist + Partizip II + worden. worden (without ge-) is the passive helper.',
    },
    {
      type: 'mc',
      id: 'b1-07-passive-modals-perfekt-ex04',
      prompt: 'Which pattern is the Perfekt passive?',
      options: ['ist … worden', 'hat … worden', 'ist … geworden'],
      answer: 0,
      explanation: 'sein + Partizip II + worden. hat is wrong (the helper is sein) and geworden means became.',
    },
    {
      type: 'order',
      id: 'b1-07-passive-modals-perfekt-ex05',
      prompt: 'Build the sentence: "The text has to be translated by tomorrow."',
      words: ['übersetzt', 'bis', 'Der', 'werden.', 'muss', 'morgen', 'Text'],
      answer: ['Der Text muss bis morgen übersetzt werden.'],
      explanation: 'Modal in position two (muss), time in the middle, Partizip II + werden at the end.',
    },
    {
      type: 'fill',
      id: 'b1-07-passive-modals-perfekt-ex06',
      prompt: 'Die Tür konnte nicht ___ werden. (öffnen)',
      answer: ['geöffnet'],
      explanation: 'Before werden you need the Partizip II: öffnen → geöffnet.',
    },
    {
      type: 'mc',
      id: 'b1-07-passive-modals-perfekt-ex07',
      prompt: 'Complete the subordinate clause: "Ich glaube, dass die Rechnung ___."',
      options: ['bezahlt werden muss', 'muss bezahlt werden', 'bezahlt muss werden'],
      answer: 0,
      explanation: 'In a dass clause the conjugated modal goes to the very end: bezahlt werden muss.',
    },
    {
      type: 'match',
      id: 'b1-07-passive-modals-perfekt-ex08',
      prompt: 'Match each active sentence with its passive.',
      pairs: [
        ['Man muss das Auto reparieren.', 'Das Auto muss repariert werden.'],
        ['Man hat das Auto repariert.', 'Das Auto ist repariert worden.'],
        ['Man kann das Auto reparieren.', 'Das Auto kann repariert werden.'],
        ['Man reparierte das Auto.', 'Das Auto wurde repariert.'],
      ],
      explanation: 'Modal → modal + Partizip II + werden; Perfekt → ist + Partizip II + worden; Präteritum → wurde + Partizip II.',
    },
    {
      type: 'translate',
      id: 'b1-07-passive-modals-perfekt-ex09',
      prompt: 'Translate using the Perfekt: "The letter has been sent."',
      answer: ['Der Brief ist geschickt worden.', 'Der Brief ist gesendet worden.', 'Der Brief ist abgeschickt worden.', 'Der Brief ist verschickt worden.'],
      hint: 'schicken / senden = to send',
      explanation: 'Perfekt passive: ist + geschickt + worden. Remember sein as the helper and worden at the end.',
    },
    {
      type: 'fill',
      id: 'b1-07-passive-modals-perfekt-ex10',
      prompt: 'Die Kinder ___ gestern vom Arzt untersucht worden. (sein)',
      answer: ['sind'],
      explanation: 'Plural subject → sind. The Perfekt passive always takes sein.',
    },
    {
      type: 'mc',
      id: 'b1-07-passive-modals-perfekt-ex11',
      prompt: 'Put into the past: "Das Problem muss gelöst werden."',
      options: ['Das Problem musste gelöst werden.', 'Das Problem muss gelöst worden.', 'Das Problem wurde gelöst müssen.'],
      answer: 0,
      explanation: 'With a modal, the easy past form is the Präteritum of the modal: musste. The end of the sentence stays gelöst werden.',
    },
    {
      type: 'order',
      id: 'b1-07-passive-modals-perfekt-ex12',
      prompt: 'Build the sentence: "The flat has already been sold."',
      words: ['verkauft', 'ist', 'Wohnung', 'worden.', 'schon', 'Die'],
      answer: ['Die Wohnung ist schon verkauft worden.'],
      explanation: 'ist in position two, schon in the middle, verkauft worden at the end.',
    },
  ],
};

export default topic;
