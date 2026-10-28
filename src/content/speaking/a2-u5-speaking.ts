import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u5-speaking',
  level: 'A2',
  unit: 5,
  title: 'Showing a new colleague the office',
  situation: 'It is Jonas\'s first day in your department in Stuttgart. During the lunch break he asks you about the office, the boss and your tasks. He wants to know how things work here and who is responsible for what.',
  partner: {
    name: 'Jonas',
    role: 'new colleague in your department',
    persona: 'Curious and chatty, uses du from the first minute. Asks whose office is whose, where things are kept and what your typical day looks like. Complication: he got lost twice this morning and the printer did not work; he asks whose printer it is and who can help. Keeps asking "Und wessen … ist das?" to get more detail.',
  },
  register: 'du',
  goals: [
    'say whose office, desk or printer something is, using at least two genitive forms (das Büro der Chefin, der Drucker der Abteilung …)',
    'describe two of your tasks and say when the weekly meeting takes place',
    'explain the printer problem or another problem with a genitive preposition (wegen, trotz, während)',
    'give him one tip for his first week',
  ],
  opener: 'Hallo, ich bin Jonas, der Neue. Wessen Büro ist das da hinten? Und was machst du hier so?',
  usefulPhrases: [
    { de: 'Das ist das Büro unserer Chefin, Frau Vogel.', en: 'That is the office of our boss, Ms Vogel.' },
    { de: 'Der Drucker der Abteilung steht im Flur neben der Küche.', en: 'The department\'s printer is in the corridor next to the kitchen.' },
    { de: 'Meine wichtigste Aufgabe ist das Projekt für einen Kunden aus Wien.', en: 'My most important task is the project for a client from Vienna.' },
    { de: 'Die Besprechung der Abteilung ist jeden Montag um zehn.', en: 'The department meeting is every Monday at ten.' },
    { de: 'Wegen der neuen Software funktioniert der Drucker noch nicht.', en: 'Because of the new software the printer does not work yet.' },
    { de: 'Während der Mittagspause ist die Chefin nicht im Büro.', en: 'During the lunch break the boss is not in the office.' },
    { de: 'Trotz des Stresses ist die Stimmung hier gut.', en: 'Despite the stress, the mood here is good.' },
    { de: 'Ein Tipp: Frag am Anfang lieber zu viel als zu wenig.', en: 'A tip: at the start, better to ask too much than too little.' },
    { de: 'Was meinst du? Kannst du das noch mal sagen?', en: 'What do you mean? Can you say that again?' },
  ],
  grammarFocus: ['a2-14-genitive', 'a2-15-genitive-prepositions', 'a1-21-possessive-articles', 'a1-24-dative'],
  vocabFocus: ['die Abteilung', 'die Besprechung', 'die Aufgabe', 'das Projekt', 'der Mitarbeiter', 'der Kunde', 'der Drucker', 'der Ordner', 'stressig', 'zufrieden'],
  minTurns: 6,
};

export default scenario;
