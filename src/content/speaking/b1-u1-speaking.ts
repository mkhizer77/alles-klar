import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u1-speaking',
  level: 'B1',
  unit: 1,
  title: 'How you came to Germany',
  situation: 'You are having coffee with Lena, a friend from your German course. You have never told her your story. She wants to know how you ended up in Germany and what your life was like before, and then tells you how she met her partner.',
  partner: {
    name: 'Lena',
    role: 'friend from your German course',
    persona: 'Curious and warm, but wants the story in order: keeps asking "Und was war davor?" and "Und dann?" to get the sequence of events. Challenges you once ("Echt? Warum bist du nicht einfach geblieben?"). When you ask, she tells you briefly how she met her partner Jonas at a wedding, and asks what you think of such stories.',
  },
  register: 'du',
  goals: [
    'tell her in order what happened before you came to Germany, using nachdem or bevor at least once',
    'say one thing you had already done before you moved (Plusquamperfekt: ich hatte … gemacht)',
    'say one thing you had to or wanted to do back then, using a modal verb in the Perfekt (ich habe … müssen / wollen)',
    'ask her how she met her partner and react to what she says with a follow-up question',
  ],
  opener: 'Hey, schön, dass es endlich klappt! Du hast mir nie erzählt: Wie bist du eigentlich nach Deutschland gekommen?',
  usefulPhrases: [
    { de: 'Nachdem ich die Schule beendet hatte, …', en: 'After I had finished school, …' },
    { de: 'Bevor ich nach Deutschland gekommen bin, hatte ich schon …', en: 'Before I came to Germany, I had already …' },
    { de: 'Damals habe ich … müssen.', en: 'Back then I had to …' },
    { de: 'Eigentlich habe ich … wollen, aber …', en: 'Actually I wanted to …, but …' },
    { de: 'Sobald ich die Zusage hatte, …', en: 'As soon as I had the confirmation, …' },
    { de: 'Seitdem ich hier wohne, …', en: 'Since I have been living here, …' },
    { de: 'Am Anfang war es nicht leicht, aber ich habe mich daran gewöhnt.', en: 'At first it was not easy, but I got used to it.' },
    { de: 'Und wie habt ihr beide euch kennengelernt?', en: 'And how did you two meet?' },
    { de: 'Wie bitte? Das habe ich nicht verstanden.', en: 'Pardon? I did not understand that.' },
  ],
  grammarFocus: ['b1-01-plusquamperfekt', 'b1-02-temporal-clauses', 'b1-03-modals-perfekt'],
  vocabFocus: ['die Kindheit', 'die Jugend', 'die Beziehung', 'der Partner', 'die Freundschaft', 'aufwachsen', 'sich verlieben', 'sich gewöhnen an', 'vermissen', 'unterstützen'],
  minTurns: 7,
};

export default scenario;
