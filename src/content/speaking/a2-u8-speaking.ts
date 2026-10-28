import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u8-speaking',
  level: 'A2',
  unit: 8,
  title: 'Planning a hike with a friend',
  situation: 'Your friend Tim wants to go hiking with you in the Black Forest on Saturday. You are planning the route together over a coffee. Tim cares a lot about the environment and wants the trip to be as green as possible.',
  partner: {
    name: 'Tim',
    role: 'friend who loves hiking',
    persona: 'Enthusiastic and full of ideas. Suggests two routes, a long one to a lake and a short one through the forest, and asks which you prefer and why. Asks what the hike is for and what you plan to bring. Complication: the forecast says there may be a thunderstorm in the afternoon, and he wants to drive although you would rather take the train.',
  },
  register: 'du',
  goals: [
    'say why you want to go hiking with an um … zu sentence (um frische Luft zu bekommen …)',
    'choose one of the two routes and describe it with a relative clause (der Weg, der zum See führt …)',
    'say what you plan or try to bring using zu + infinitive (Ich habe vor, … mitzunehmen / Ich versuche, …)',
    'argue for the train instead of the car with an environmental reason and say what you do if a storm comes',
  ],
  opener: 'Hey! Hast du Lust, am Samstag mit mir zu wandern? Es gibt zwei Wege: einen zum See und einen durch den Wald. Was ist dir lieber?',
  usefulPhrases: [
    { de: 'Ich wandere gern, um frische Luft zu bekommen.', en: 'I like hiking in order to get fresh air.' },
    { de: 'Ich nehme lieber den Weg, der zum See führt.', en: 'I prefer the path that leads to the lake.' },
    { de: 'Das ist die Landschaft, die ich am schönsten finde.', en: 'That is the landscape I find most beautiful.' },
    { de: 'Ich habe vor, Wasser und etwas zu essen mitzunehmen.', en: 'I plan to bring water and something to eat.' },
    { de: 'Es ist wichtig, keinen Müll in der Natur wegzuwerfen.', en: 'It is important not to throw any rubbish away in nature.' },
    { de: 'Lass uns mit dem Zug fahren, das ist umweltfreundlicher als das Auto.', en: 'Let us take the train, that is more environmentally friendly than the car.' },
    { de: 'Wenn es ein Gewitter gibt, gehen wir früher zurück.', en: 'If there is a thunderstorm, we go back earlier.' },
    { de: 'Ich versuche, pünktlich um acht am Bahnhof zu sein.', en: 'I will try to be at the station at eight sharp.' },
    { de: 'Was meinst du damit? Kannst du das anders sagen?', en: 'What do you mean by that? Can you say it differently?' },
  ],
  grammarFocus: ['a2-21-zu-infinitive', 'a2-22-um-zu-ohne-zu', 'a2-23-relative-clauses-nom-acc', 'a2-05-wenn-ob-indirect-questions'],
  vocabFocus: ['die Natur', 'die Landschaft', 'der See', 'die Luft', 'das Gewitter', 'der Müll', 'die Umwelt', 'wandern', 'wegwerfen', 'umweltfreundlich'],
  minTurns: 6,
};

export default scenario;
