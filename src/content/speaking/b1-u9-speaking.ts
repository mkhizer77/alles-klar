import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u9-speaking',
  level: 'B1',
  unit: 9,
  title: 'A cultural outing despite everything',
  situation: 'Your friend Sara wants to do something cultural on Saturday: an exhibition, a play or a concert. But the trains are on strike, rain is forecast and she is short of money. You have to find an event you both like and a plan that gets round every obstacle.',
  partner: {
    name: 'Sara',
    role: 'friend who loves films and concerts',
    persona: 'Enthusiastic but indecisive. Loves films and concerts, is less keen on museums ("Im Museum langweile ich mich"). Raises one obstacle after another: the strike, the rain, the price, the exhibition might be sold out. Asks what exactly you are interested in and why. Pushes back once, then agrees as soon as your plan answers her worries.',
  },
  register: 'du',
  goals: [
    'suggest an event and say why you are interested in it (sich interessieren für, begeistert sein von, sich freuen auf)',
    'answer each obstacle with a solution using trotz, wegen, statt or mithilfe with the genitive',
    'agree on the time, the meeting point and how you will get the tickets',
    'when she hesitates, push back once and get her to decide',
  ],
  opener: 'Hey! Ich hätte am Samstag Lust auf etwas Kulturelles. Aber ich habe gehört, dass die Bahn streikt und es regnen soll. Hast du eine Idee?',
  usefulPhrases: [
    { de: 'Ich interessiere mich sehr für moderne Kunst.', en: 'I am very interested in modern art.' },
    { de: 'Ich bin von dem Regisseur total begeistert.', en: 'I am really enthusiastic about the director.' },
    { de: 'Trotz des Regens können wir hingehen, die Ausstellung ist ja drinnen.', en: 'Despite the rain we can go, the exhibition is indoors after all.' },
    { de: 'Wegen des Streiks nehmen wir einfach das Fahrrad.', en: 'Because of the strike we will just take the bike.' },
    { de: 'Statt des Konzerts könnten wir ins Theater gehen.', en: 'Instead of the concert we could go to the theatre.' },
    { de: 'Mithilfe der App bekommen wir die Karten billiger.', en: 'With the help of the app we get the tickets cheaper.' },
    { de: 'Innerhalb einer Stunde sind wir da.', en: 'We will be there within an hour.' },
    { de: 'Ich freue mich schon auf die Aufführung!', en: 'I am already looking forward to the performance!' },
    { de: 'Hast du Angst vor langen Schlangen? Wir reservieren einfach online.', en: 'Afraid of long queues? We will just book online.' },
    { de: 'Was bedeutet „ausverkauft“?', en: 'What does "ausverkauft" mean?' },
  ],
  grammarFocus: ['b1-26-genitive-prepositions-depth', 'b1-27-verb-preposition-b1', 'b1-28-adjective-noun-prepositions'],
  vocabFocus: ['die Ausstellung', 'die Aufführung', 'die Veranstaltung', 'das Gemälde', 'der Regisseur', 'das Publikum', 'die Bühne', 'die Galerie', 'beeindrucken', 'aufführen', 'kulturell', 'klassisch'],
  minTurns: 7,
};

export default scenario;
