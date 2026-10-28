import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u7-speaking',
  level: 'A2',
  unit: 7,
  title: 'Calling the internet provider',
  situation: 'Your internet at home has not worked for two days. You phone the customer service of your provider. You want to know what they will do, when the connection will work again and whether you have to pay for the days without internet.',
  partner: {
    name: 'Herr Schäfer',
    role: 'customer service agent at an internet provider',
    persona: 'Polite, formal and sticking to a script. Asks for your customer number, what exactly does not work and what you have already tried (restarting the router, checking the cable). Complication: the technician can only come next Thursday; he offers two slots, morning or afternoon, and asks which suits you. Promises nothing unless you ask for it directly.',
  },
  register: 'Sie',
  goals: [
    'describe the problem politely and say what you have already tried',
    'make at least two polite requests with Konjunktiv II (Könnten Sie …? Ich hätte gern … Wäre es möglich …?)',
    'ask what will happen next and when the internet will work again (werden + infinitive, or Präsens with a time expression)',
    'choose a time for the technician and ask whether you have to pay for the days without internet',
  ],
  opener: 'Guten Tag, Kundenservice, mein Name ist Schäfer. Was kann ich für Sie tun?',
  usefulPhrases: [
    { de: 'Guten Tag, mein Internet funktioniert seit zwei Tagen nicht.', en: 'Hello, my internet has not been working for two days.' },
    { de: 'Ich habe den Router schon aus- und wieder eingeschaltet.', en: 'I have already switched the router off and on again.' },
    { de: 'Könnten Sie bitte nachsehen, ob es ein Problem im Netz gibt?', en: 'Could you please check whether there is a problem in the network?' },
    { de: 'Ich hätte gern einen Termin mit einem Techniker.', en: 'I would like an appointment with a technician.' },
    { de: 'Wäre es möglich, dass jemand schon morgen kommt?', en: 'Would it be possible for someone to come tomorrow already?' },
    { de: 'Wann wird das Internet wieder funktionieren?', en: 'When will the internet work again?' },
    { de: 'Muss ich für die Tage ohne Internet auch bezahlen?', en: 'Do I have to pay for the days without internet as well?' },
    { de: 'Donnerstagnachmittag passt mir besser, dann bin ich zu Hause.', en: 'Thursday afternoon suits me better, I will be at home then.' },
    { de: 'Entschuldigung, die Verbindung ist schlecht. Könnten Sie das bitte wiederholen?', en: 'Sorry, the line is bad. Could you repeat that, please?' },
  ],
  grammarFocus: ['a2-19-futur-1', 'a2-20-konjunktiv-2-polite', 'a2-05-wenn-ob-indirect-questions', 'a1-17-modal-verbs'],
  vocabFocus: ['das WLAN', 'das Netz', 'das Gerät', 'der Anruf', 'der Fehler', 'das Passwort', 'funktionieren', 'einschalten', 'ausschalten', 'anschließen', 'zurückrufen'],
  minTurns: 6,
};

export default scenario;
