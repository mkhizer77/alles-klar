import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a1-u5-writing',
  level: 'A1',
  unit: 5,
  title: 'Tell a friend how to get to your flat',
  textType: 'message',
  register: 'informal',
  task: 'Your friend Elif is visiting you on Sunday for the first time. Write her a message explaining how to get from the station to your flat and who she will meet there.',
  points: ['how she gets from the station to your flat (bus or tram, how long it takes)', 'where exactly your flat is (street, floor)', 'who lives with you or who she will meet', 'what she should do when she arrives'],
  minWords: 40,
  maxWords: 80,
  usefulPhrases: [
    { de: 'Hallo Elif,', en: 'Hi Elif,', role: 'greeting' },
    { de: 'Am Sonntag kommst du zu mir.', en: 'On Sunday you are coming to my place.', role: 'phrase' },
    { de: 'Vom Bahnhof nimmst du den Bus / die Straßenbahn …', en: 'From the station you take the bus / tram …', role: 'phrase' },
    { de: 'bis zur Haltestelle …', en: 'as far as the stop …', role: 'phrase' },
    { de: 'Das dauert … Minuten.', en: 'That takes … minutes.', role: 'phrase' },
    { de: 'Dann gehst du geradeaus / links / rechts.', en: 'Then you go straight on / left / right.', role: 'phrase' },
    { de: 'Ich wohne in der …straße, im … Stock.', en: 'I live in … Street, on the … floor.', role: 'phrase' },
    { de: 'Mein Bruder / Meine Schwester wohnt bei mir.', en: 'My brother / my sister lives with me.', role: 'phrase' },
    { de: 'Ruf mich an.', en: 'Call me.', role: 'phrase' },
    { de: 'Ich helfe dir gern.', en: 'I am happy to help you.', role: 'phrase' },
    { de: 'dann', en: 'then', role: 'connector' },
    { de: 'Bis Sonntag!', en: 'See you Sunday!', role: 'closing' },
  ],
  grammarFocus: ['a1-24-dative', 'a1-25-dative-prepositions', 'a1-26-dative-verbs', 'a1-27-dative-pronouns'],
  mustUse: [
    { label: 'a Dative preposition with an article (mit dem Bus, nach der Bäckerei, zur Haltestelle, vom Bahnhof)', pattern: '\\b((mit|nach|zu|bei|von|aus|seit)\\s+(dem|der|den|einem|einer|meinem|meiner|meinen|deinem|deiner|ihrem|ihrer|unserem|unserer)|zum|zur|beim|vom)\\b', min: 2 },
    { label: 'a personal pronoun in the Dative (mir, dir, ihm, ihr, uns, euch)', pattern: '\\b(mir|dir|ihm|uns|euch|ihnen)\\b', min: 1 },
    { label: 'a Dative verb such as helfen or gefallen', pattern: '\\b(helfe|hilfst|hilft|helfen|gefällt|gefallen)\\b', min: 1 },
  ],
  checklist: [
    'All four points are covered: transport from the station, the exact address, who she will meet, what to do on arrival.',
    'There is a greeting at the start and a closing at the end.',
    'The prepositions aus, bei, mit, nach, von, zu are followed by the Dative: mit dem Bus, bei mir, nach der Bäckerei.',
    'The contractions zum, zur and vom are used where they fit (zur Haltestelle, vom Bahnhof).',
    'The Dative pronouns are correct: zu mir, bei mir, ich helfe dir (not zu ich, ich helfe du).',
    'Dative verbs like helfen take a Dative object: Ich helfe dir.',
    'The directions are in the right order and easy to follow (first the tram, then walking, then the house).',
    'The text has between 40 and 80 words.',
  ],
  model: [
    'Hallo Elif,',
    'am Sonntag kommst du zu mir. Super! Vom Bahnhof nimmst du die Straßenbahn Linie 4 bis zur Haltestelle Marktplatz. Das dauert zehn Minuten. Dann gehst du geradeaus und nach der Bäckerei links. Ich wohne in der Gartenstraße 12, im dritten Stock. Meine Schwester Aylin wohnt bei mir. Sie kocht uns ein Abendessen. Klingel einfach oder ruf mich an. Ich helfe dir dann mit den Taschen.',
    'Bis Sonntag!',
    'Deniz',
  ],
  modelNotes: [
    'Every Dative preposition is followed by a Dative form: **zu mir**, **vom Bahnhof** (von + dem), **zur Haltestelle** (zu + der), **nach der Bäckerei**, **bei mir**, **mit den Taschen** (Dative plural with -n).',
    'The Dative pronouns do the personal work: **zu mir**, **bei mir**, **kocht uns**, **helfe dir**. Only **ruf mich an** is Accusative, because *anrufen* takes a direct object.',
    '**helfen** and the indirect object of **kochen** (*Sie kocht uns ein Abendessen*) both take the Dative, the person who receives something.',
    'The directions follow the route step by step, with **Dann** in first position and the verb second (*Dann gehst du …*).',
    'The imperatives **Klingel** and **ruf … an** from unit 3 make the last instructions short and friendly.',
  ],
};

export default task;
