import type { Topic } from '../../types';

const topic: Topic = {
  id: 'b1-32b-structuring-a-talk',
  level: 'B1',
  unit: 10,
  order: 44,
  title: 'Structuring a short talk',
  germanTerm: 'Präsentation, Sprechen B1',
  tags: ['speaking', 'presentation', 'phrases', 'connectors'],
  summary: 'The B1 talk has three parts: Einleitung, Hauptteil, Schluss. Fixed phrases name the topic, order your points (zuerst, dann, außerdem, zum Schluss), give examples and end with thanks and an invitation for questions.',
  steps: [
    {
      title: 'Three parts, about three minutes',
      text: `
In the speaking exam you give a **short talk** (*Präsentation*) of about three minutes on an everyday topic. It has three parts: **Einleitung** (introduction), **Hauptteil** (main part) and **Schluss** (ending).

Fixed phrases show the examiner which part you are in and buy you thinking time. Learn one or two per part by heart.
`,
      examples: [
        { de: 'Ich möchte heute über mein Hobby sprechen.', en: 'Today I would like to talk about my hobby. (Einleitung)' },
        { de: 'Ein weiterer Punkt ist, dass Sport Stress abbaut.', en: 'A further point is that sport reduces stress. (Hauptteil)' },
        { de: 'Vielen Dank für eure Aufmerksamkeit.', en: 'Thank you for your attention. (Schluss)' },
      ],
    },
    {
      title: 'Introduction: naming the topic',
      text: `
Start by naming the topic and saying why you chose it: **Mein Thema ist …**, **Ich möchte heute über … sprechen**, **Ich habe dieses Thema gewählt, weil …** (*weil*: verb at the end). Then say what comes: *Zuerst erzähle ich von …, dann …*
`,
      examples: [
        { de: 'Mein Thema heute ist Sport im Alltag.', en: 'My topic today is sport in everyday life.' },
        { de: 'Ich möchte heute über das Thema Umwelt sprechen.', en: 'Today I would like to talk about the topic of the environment.' },
        { de: 'Ich habe dieses Thema gewählt, weil ich gern Fußball spiele.', en: 'I chose this topic because I like playing football. (weil: verb at the end)' },
      ],
    },
    {
      title: 'Ordering your points',
      text: `
Signpost words put your points in order: **zuerst** (first), **dann** (then), **außerdem** (in addition), **zum Schluss** (finally). Also **Ein weiterer Punkt ist …**

These words stand in **position 1**, so the **verb comes next**: *Außerdem **ist** Sport gesund.*
`,
      examples: [
        { de: 'Zuerst erzähle ich von meiner eigenen Erfahrung.', en: 'First I will talk about my own experience. (zuerst, then the verb)' },
        { de: 'Dann spreche ich über die Situation in meinem Heimatland.', en: 'Then I will talk about the situation in my home country.' },
        { de: 'Außerdem ist Sport gut für die Gesundheit.', en: 'In addition, sport is good for your health.' },
        { de: 'Zum Schluss sage ich meine Meinung.', en: 'Finally I will give my opinion.' },
      ],
    },
    {
      title: 'Examples, your country, pros and cons',
      text: `
The main part needs content: your own experience, the situation in your country, advantages and disadvantages. Use **Ein Beispiel dafür ist …**, **In meinem Heimatland …**, **Ein Vorteil ist …, ein Nachteil ist …** and **Im Gegensatz dazu …** (in contrast).
`,
      examples: [
        { de: 'Ein Beispiel dafür ist mein Bruder, der jeden Tag joggt.', en: 'An example of this is my brother, who jogs every day.' },
        { de: 'In meinem Heimatland spielen viele Kinder Cricket.', en: 'In my home country many children play cricket.' },
        { de: 'Ein Vorteil ist der Preis, ein Nachteil die Zeit.', en: 'One advantage is the price, one disadvantage the time.' },
        { de: 'Im Gegensatz dazu fahren in Deutschland viele Menschen Rad.', en: 'In contrast, in Germany many people cycle.' },
      ],
    },
    {
      title: 'Ending and inviting questions',
      text: `
Do not stop abruptly. Sum up with **Zusammenfassend kann man sagen, dass …** or **Abschließend möchte ich sagen, dass …**, give your opinion, then thank your listeners and invite questions: **Vielen Dank für eure Aufmerksamkeit. Habt ihr noch Fragen?** Afterwards your partner and the examiners ask you about the talk.
`,
      examples: [
        { de: 'Zusammenfassend kann man sagen, dass Sport wichtig ist.', en: 'In summary one can say that sport is important.' },
        { de: 'Abschließend möchte ich sagen, dass ich Sport jedem empfehle.', en: 'In conclusion I would like to say that I recommend sport to everyone.' },
        { de: 'Vielen Dank für eure Aufmerksamkeit. Habt ihr noch Fragen?', en: 'Thank you for your attention. Do you have any questions?' },
      ],
    },
  ],
  connections: [
    { topicId: 'b1-32-opinions-speaking', note: 'The sibling topic: the opinion and agreement phrases for the discussion after the talk.' },
    { topicId: 'a2-27-adverbial-connectors', note: 'zuerst, dann, außerdem and zum Schluss are position-1 adverbs: the verb follows them.' },
    { topicId: 'a2-04-subordinate-clauses-weil-dass', note: 'Ich habe dieses Thema gewählt, weil … and Zusammenfassend kann man sagen, dass … put the verb at the end.' },
    { topicId: 'b1-31-register-formal-informal', note: 'eure Aufmerksamkeit for your partner, Ihre Aufmerksamkeit when you address the examiners.' },
  ],
  edgeCases: [
    '**Außerdem ist Sport gesund**: after a signpost word the verb comes next. Not *Außerdem Sport ist gesund*.',
    'Do not end a talk abruptly. Always close with a summary sentence and thanks: **Vielen Dank für eure Aufmerksamkeit.**',
    '**eure** Aufmerksamkeit when you talk to your partner (*ihr*), **Ihre** Aufmerksamkeit for the examiners. Both are fine in the exam; pick one and stay consistent.',
    '**Zum Schluss** names the last point; **zusammenfassend** starts the summary. Use one of each, not *zum Schluss* twice.',
  ],
  exercises: [
    {
      type: 'mc',
      id: 'b1-32b-structuring-a-talk-ex01',
      prompt: 'What is the correct order of the parts of a short talk?',
      options: ['Einleitung – Hauptteil – Schluss', 'Hauptteil – Einleitung – Schluss', 'Schluss – Hauptteil – Einleitung'],
      answer: 0,
      explanation: 'Introduce the topic (Einleitung), develop it with examples and arguments (Hauptteil), then summarise and thank (Schluss).',
    },
    {
      type: 'fill',
      id: 'b1-32b-structuring-a-talk-ex02',
      prompt: 'Ich möchte heute ___ mein Hobby sprechen. (about)',
      answer: ['über'],
      explanation: 'sprechen über + Akkusativ = to talk about. This is the standard opening line of a talk.',
    },
    {
      type: 'mc',
      id: 'b1-32b-structuring-a-talk-ex03',
      prompt: 'Which phrase names the topic at the start of a talk?',
      options: ['Mein Thema heute ist …', 'Zum Schluss …', 'Außerdem …'],
      answer: 0,
      explanation: 'Mein Thema heute ist … belongs to the Einleitung. Außerdem adds a point in the Hauptteil; Zum Schluss introduces the last point.',
    },
    {
      type: 'match',
      id: 'b1-32b-structuring-a-talk-ex04',
      prompt: 'Match each signpost phrase with its meaning.',
      pairs: [
        ['zuerst', 'first'],
        ['dann', 'then'],
        ['außerdem', 'in addition'],
        ['zum Schluss', 'finally'],
        ['Ein Beispiel dafür ist …', 'An example of this is …'],
      ],
      explanation: 'These words order the main part. All of them stand in position 1, so the verb comes directly after them.',
    },
    {
      type: 'mc',
      id: 'b1-32b-structuring-a-talk-ex05',
      prompt: 'Complete: "Außerdem ___ gesund."',
      options: ['ist Sport', 'Sport ist', 'dass Sport ist'],
      answer: 0,
      explanation: 'Außerdem fills position 1, so the verb ist comes next and the subject Sport after it.',
    },
    {
      type: 'mc',
      id: 'b1-32b-structuring-a-talk-ex06',
      prompt: 'Which phrase belongs to the Schluss of a talk?',
      options: ['Abschließend möchte ich sagen, …', 'Mein Thema heute ist …', 'Ein weiteres Beispiel ist …'],
      answer: 0,
      explanation: 'abschließend = in conclusion. Mein Thema heute ist opens the talk; Ein weiteres Beispiel belongs to the Hauptteil.',
    },
    {
      type: 'fill',
      id: 'b1-32b-structuring-a-talk-ex07',
      prompt: 'Ich habe dieses Thema gewählt, ___ es mich interessiert. (because)',
      answer: ['weil'],
      explanation: 'weil gives the reason for your choice and sends the verb to the end: … weil es mich interessiert.',
    },
    {
      type: 'order',
      id: 'b1-32b-structuring-a-talk-ex08',
      prompt: 'Build the sentence: "An example of this is that sport reduces stress."',
      words: ['dafür', 'Ein', 'ist,', 'Beispiel', 'Sport', 'dass', 'abbaut.', 'Stress'],
      answer: ['Ein Beispiel dafür ist, dass Sport Stress abbaut.'],
      explanation: 'Ein Beispiel dafür ist introduces the example; the dass-clause puts the separable verb abbaut at the end.',
    },
    {
      type: 'order',
      id: 'b1-32b-structuring-a-talk-ex09',
      prompt: 'Build the closing sentence: "In summary one can say that the topic is important."',
      words: ['kann', 'Zusammenfassend', 'sagen,', 'man', 'das', 'dass', 'wichtig', 'Thema', 'ist.'],
      answer: ['Zusammenfassend kann man sagen, dass das Thema wichtig ist.'],
      explanation: 'Zusammenfassend is position 1, so kann follows, then man sagen. The dass-clause ends with ist.',
    },
    {
      type: 'mc',
      id: 'b1-32b-structuring-a-talk-ex10',
      prompt: 'How do you invite questions at the end of your talk?',
      options: ['Habt ihr noch Fragen?', 'Wie geht es euch?', 'Was ist das Thema?'],
      answer: 0,
      explanation: 'Habt ihr noch Fragen? (or Haben Sie noch Fragen? to the examiners) hands over to the listeners after the thanks.',
    },
    {
      type: 'translate',
      id: 'b1-32b-structuring-a-talk-ex11',
      prompt: 'Translate: "Thank you for your attention." (use ihr)',
      answer: ['Vielen Dank für eure Aufmerksamkeit.', 'Danke für eure Aufmerksamkeit.'],
      hint: 'die Aufmerksamkeit = attention; für + Akkusativ; eure = your (ihr)',
      explanation: 'für takes the Accusative; Aufmerksamkeit is feminine, so the possessive is eure. This is the fixed last line of a talk.',
    },
    {
      type: 'mc',
      id: 'b1-32b-structuring-a-talk-ex12',
      prompt: 'Put these three sentences of a short talk in order: (1) Vielen Dank für eure Aufmerksamkeit. (2) Heute möchte ich über mein Hobby sprechen. (3) Außerdem ist Sport gut für die Gesundheit.',
      options: ['2 – 3 – 1', '1 – 2 – 3', '3 – 2 – 1'],
      answer: 0,
      explanation: 'Sentence 2 introduces the topic (Einleitung), sentence 3 adds an argument (Hauptteil), sentence 1 thanks the listeners (Schluss).',
    },
  ],
};

export default topic;
