import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u4-speaking',
  level: 'A2',
  unit: 4,
  title: 'At the doctor with a cold',
  situation: 'You have had a cough and a sore throat for a week and feel exhausted. You are sitting in Dr. Hoffmann\'s practice in Hamburg. She wants to know your symptoms, how long you have had them and what you have done about them so far.',
  partner: {
    name: 'Frau Dr. Hoffmann',
    role: 'general practitioner',
    persona: 'Friendly and thorough. Asks how you feel, since when, and whether you have taken anything. Follows up on whether you are stressed at work and sleeping enough. Complication: she wants to write you a sick note for a week, but you mention an important meeting, so she asks how you will handle that. Ends by offering two options: tablets, or rest and hot tea.',
  },
  register: 'Sie',
  goals: [
    'describe how you feel and what hurts, using at least two reflexive verbs (sich fühlen, sich erkälten, sich ausruhen …)',
    'say how long you have had the symptoms and what you have already taken',
    'answer her question about stress with a verb plus preposition (sich ärgern über, warten auf, sich freuen auf …)',
    'ask one question with a wo-compound (Womit? Wogegen? Wovon?) about the medicine or the sick note',
  ],
  opener: 'Guten Tag, setzen Sie sich bitte. Was fehlt Ihnen? Seit wann fühlen Sie sich nicht gut?',
  usefulPhrases: [
    { de: 'Ich fühle mich seit einer Woche nicht gut.', en: 'I have not been feeling well for a week.' },
    { de: 'Ich habe mich wahrscheinlich im Büro erkältet.', en: 'I probably caught a cold at the office.' },
    { de: 'Mein Hals tut weh und ich huste die ganze Nacht.', en: 'My throat hurts and I cough all night.' },
    { de: 'Ich habe Tabletten genommen, aber sie helfen nicht.', en: 'I have taken tablets, but they do not help.' },
    { de: 'Ich ärgere mich über die viele Arbeit und schlafe schlecht.', en: 'I get annoyed about all the work and sleep badly.' },
    { de: 'Ich habe nächste Woche eine wichtige Besprechung. Ich kann mich leider nicht eine Woche ausruhen.', en: 'I have an important meeting next week. Unfortunately I cannot rest for a week.' },
    { de: 'Womit soll ich die Tabletten einnehmen? Und wogegen hilft die Salbe?', en: 'What should I take the tablets with? And what is the ointment for?' },
    { de: 'Entschuldigung, was bedeutet „Krankschreibung“?', en: 'Sorry, what does "Krankschreibung" mean?' },
    { de: 'Danke, ich ruhe mich jetzt aus. Auf Wiedersehen!', en: 'Thank you, I will rest now. Goodbye!' },
  ],
  grammarFocus: ['a2-11-reflexive-verbs', 'a2-12-verbs-with-prepositions', 'a2-13-da-wo-compounds', 'a1-24-dative'],
  vocabFocus: ['die Erkältung', 'der Husten', 'das Fieber', 'der Schmerz', 'das Medikament', 'die Tablette', 'das Rezept', 'die Untersuchung', 'sich fühlen', 'sich erkälten', 'sich ausruhen', 'wehtun'],
  minTurns: 6,
};

export default scenario;
