import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u5-speaking',
  level: 'A1',
  unit: 5,
  title: 'Meeting the neighbour on the stairs',
  situation: 'You moved into a flat in Leipzig last week. On the stairs you meet Frau Weber, a retired neighbour from the third floor. She wants to know about your family, and you need to find the post office and the nearest bus stop.',
  partner: {
    name: 'Frau Weber',
    role: 'retired neighbour in your building',
    persona: 'Warm and talkative, speaks slowly in short sentences. Asks about your family one question at a time (who you live with, whether you have brothers or sisters, where your parents live). Gives directions in two or three short steps, offers a choice between the bus and walking, and asks you to repeat the way back to her.',
  },
  register: 'Sie',
  goals: ['say who you live with and tell her about two family members, using mit + Dative', 'ask her how to get to the post office or the station', 'say which transport you take, using mit dem Bus, mit der U-Bahn or zu Fuß', 'ask her for help and thank her, using helfen or danken with a Dative pronoun'],
  opener: 'Guten Morgen! Sie sind neu hier, oder? Ich bin Frau Weber aus dem dritten Stock. Wohnen Sie allein oder mit Ihrer Familie?',
  usefulPhrases: [
    { de: 'Ich wohne hier mit meiner Frau und meinem Sohn.', en: 'I live here with my wife and my son.' },
    { de: 'Meine Eltern wohnen in Spanien.', en: 'My parents live in Spain.' },
    { de: 'Ich habe einen Bruder. Er wohnt bei meinen Eltern.', en: 'I have a brother. He lives with my parents.' },
    { de: 'Entschuldigung, wie komme ich zur Post?', en: 'Excuse me, how do I get to the post office?' },
    { de: 'Gibt es hier in der Nähe eine Haltestelle?', en: 'Is there a bus stop near here?' },
    { de: 'Fahre ich mit dem Bus oder gehe ich zu Fuß?', en: 'Do I take the bus or walk?' },
    { de: 'Können Sie mir helfen?', en: 'Can you help me?' },
    { de: 'Vielen Dank, das hilft mir sehr.', en: 'Thank you very much, that helps me a lot.' },
    { de: 'Wie bitte? Können Sie das wiederholen?', en: 'Pardon? Can you repeat that?' },
  ],
  grammarFocus: ['a1-24-dative', 'a1-25-dative-prepositions', 'a1-26-dative-verbs', 'a1-27-dative-pronouns'],
  vocabFocus: ['die Familie', 'die Eltern', 'der Bruder', 'die Schwester', 'die Post', 'die Haltestelle', 'Wie komme ich zu …?', 'links', 'rechts', 'geradeaus', 'der Bus', 'zu Fuß'],
  minTurns: 5,
};

export default scenario;
