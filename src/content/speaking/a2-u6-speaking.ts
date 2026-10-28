import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u6-speaking',
  level: 'A2',
  unit: 6,
  title: 'Registering at the Bürgeramt',
  situation: 'You moved to Bonn last week and have to register your new address at the Bürgeramt. You are at counter four with your documents. The clerk goes through them one by one and wants to know where each one is.',
  partner: {
    name: 'Frau Nowak',
    role: 'clerk at the Bürgeramt',
    persona: 'Correct and efficient, but helpful. Asks for each document in turn and where you have put it. Complication: the landlord\'s confirmation is missing; she explains that you can get a copy at the copy shop on the ground floor, left of the entrance, and asks you to repeat the way back to her. Sets a deadline of two weeks and asks when you will come back.',
  },
  register: 'Sie',
  goals: [
    'say why you are here and hand over your documents, saying where you have put each one (Den Mietvertrag habe ich in den Ordner gelegt …)',
    'explain where the missing document is at home with a position verb and the dative (liegt auf dem Schreibtisch, hängt an der Wand …)',
    'ask where you have to go for a copy and repeat the directions back to her (ins Erdgeschoss, nach links, zum Eingang …)',
    'ask how much the registration costs and until when you have to bring the copy',
  ],
  opener: 'Guten Tag, Schalter vier, kommen Sie bitte her. Sie möchten sich anmelden? Legen Sie Ihre Unterlagen bitte auf den Tisch. Haben Sie alles dabei?',
  usefulPhrases: [
    { de: 'Ich bin letzte Woche nach Bonn gezogen und möchte mich anmelden.', en: 'I moved to Bonn last week and would like to register.' },
    { de: 'Hier ist mein Pass. Den Mietvertrag habe ich in diesen Ordner gelegt.', en: 'Here is my passport. I put the rental contract in this folder.' },
    { de: 'Die Bescheinigung liegt leider noch zu Hause auf dem Schreibtisch.', en: 'Unfortunately the certificate is still lying on the desk at home.' },
    { de: 'Das Formular habe ich schon ausgefüllt und unterschrieben.', en: 'I have already filled in and signed the form.' },
    { de: 'Wohin muss ich gehen? Wo kann ich eine Kopie machen?', en: 'Where do I have to go? Where can I make a copy?' },
    { de: 'Also: ins Erdgeschoss, dann nach links, neben dem Eingang. Richtig?', en: 'So: to the ground floor, then left, next to the entrance. Right?' },
    { de: 'Kann ich die Kopie morgen hier abgeben?', en: 'Can I hand in the copy here tomorrow?' },
    { de: 'Wie hoch ist die Gebühr und bis wann gilt die Frist?', en: 'How much is the fee and until when does the deadline run?' },
    { de: 'Entschuldigung, das habe ich nicht verstanden. Können Sie das wiederholen?', en: 'Sorry, I did not understand that. Could you repeat it?' },
  ],
  grammarFocus: ['a2-16-two-way-prepositions-depth', 'a2-17-position-verbs', 'a2-18-directions-hin-her', 'a1-29-two-way-prepositions'],
  vocabFocus: ['die Anmeldung', 'der Personalausweis', 'das Formular', 'die Unterlagen', 'die Bescheinigung', 'der Schalter', 'die Gebühr', 'die Frist', 'die Kopie', 'ausfüllen', 'unterschreiben', 'abgeben'],
  minTurns: 6,
};

export default scenario;
