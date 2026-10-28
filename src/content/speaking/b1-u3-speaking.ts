import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u3-speaking',
  level: 'B1',
  unit: 3,
  title: 'A car-free city centre',
  situation: 'In the lunch break your colleague Jonas shows you the local newspaper: the city council has decided that the city centre will be car-free from next year. Parking spaces are to be turned into cycle paths and a new tram line is to be built. Jonas wants to know what you think.',
  partner: {
    name: 'Jonas',
    role: 'colleague at work',
    persona: 'Drives to work every day and is annoyed about the decision. Argues that shop owners will lose customers and that nobody asked the citizens. Asks you for reasons ("Und warum findest du das gut?") and pushes back once with a concrete problem (his mother cannot cycle). Mentions a citizens\' meeting on Thursday and asks whether you will come.',
  },
  register: 'du',
  goals: [
    'say what has been decided and what is going to be done, using the passive at least twice (wurde beschlossen, sollen umgebaut werden)',
    'give your opinion with one reason for and one reason against the plan',
    'say what should be done differently, using a passive with a modal verb or an alternative (muss geprüft werden, lässt sich lösen, man sollte …)',
    'ask Jonas whether he will go to the citizens\' meeting and respond to his answer',
  ],
  opener: 'Hast du das schon gelesen? Die Innenstadt soll ab nächstem Jahr autofrei werden. Das wurde gestern im Stadtrat beschlossen. Was hältst du davon?',
  usefulPhrases: [
    { de: 'Ja, das wurde gestern beschlossen.', en: 'Yes, that was decided yesterday.' },
    { de: 'Die Parkplätze sollen in Fahrradwege umgebaut werden.', en: 'The parking spaces are to be converted into cycle paths.' },
    { de: 'Ich finde, die Bürger müssen vorher gefragt werden.', en: 'I think the citizens have to be asked first.' },
    { de: 'Auf der einen Seite …, auf der anderen Seite …', en: 'On the one hand …, on the other hand …' },
    { de: 'Das Problem lässt sich nicht so einfach lösen.', en: 'The problem cannot be solved that easily.' },
    { de: 'Man kann nicht einfach alle Autos verbieten.', en: 'You cannot simply ban all cars.' },
    { de: 'Darüber muss noch diskutiert werden.', en: 'That still has to be discussed.' },
    { de: 'Da bin ich anderer Meinung, weil …', en: 'I disagree there, because …' },
    { de: 'Wie bitte? Was meinst du damit?', en: 'Pardon? What do you mean by that?' },
    { de: 'Gehst du zur Bürgerversammlung?', en: 'Are you going to the citizens\' meeting?' },
  ],
  grammarFocus: ['b1-06-passive-present-past', 'b1-07-passive-modals-perfekt', 'b1-08-zustandspassiv-alternatives'],
  vocabFocus: ['die Debatte', 'die Reform', 'der Bürger', 'die Mehrheit', 'der Protest', 'die Öffentlichkeit', 'die Umfrage', 'beschließen', 'fordern', 'demonstrieren', 'öffentlich'],
  minTurns: 7,
};

export default scenario;
