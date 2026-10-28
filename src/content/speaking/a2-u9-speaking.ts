import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u9-speaking',
  level: 'A2',
  unit: 9,
  title: 'Inviting a friend to a party',
  situation: 'You are organising a surprise birthday party for Ali from your German course next Saturday. You call Mia, another friend from the course, to invite her and ask for her help with the planning. Mia has lots of questions and a few ideas of her own.',
  partner: {
    name: 'Mia',
    role: 'friend from your German course',
    persona: 'Warm and talkative. Says yes quickly and then asks for details: who is coming, where it is, what everyone should bring. Complication: she can only come late because she has a concert, and she wants to bring someone you do not know. Asks you to decide who brings what and which of two present ideas is better.',
  },
  register: 'du',
  goals: [
    'invite her and say when and where the party is and who is coming (jeder, alle, manche, niemand …)',
    'present two ideas for a present and ask which one she prefers (Welche …? diese oder die andere?)',
    'react to the complication: say it is fine that she comes late and ask whom she wants to bring (jemand)',
    'ask her to bring two things, using pronouns in the right order (Gib sie mir bitte … / Bring es ihm …)',
  ],
  opener: 'Hi, schön, dass du anrufst! Ich habe gerade Pause. Was gibt es Neues bei dir?',
  usefulPhrases: [
    { de: 'Ich möchte dich zu einer Party einladen. Am Samstag feiern wir Alis Geburtstag.', en: 'I would like to invite you to a party. On Saturday we are celebrating Ali\'s birthday.' },
    { de: 'Es ist eine Überraschung, also sag ihm bitte nichts!', en: 'It is a surprise, so please do not tell him anything!' },
    { de: 'Fast jeder aus dem Kurs kommt, aber manche können nicht.', en: 'Almost everyone from the course is coming, but some cannot.' },
    { de: 'Ich habe zwei Ideen für ein Geschenk. Welche findest du besser?', en: 'I have two ideas for a present. Which one do you think is better?' },
    { de: 'Kein Problem, komm einfach nach dem Konzert. Bringst du jemanden mit?', en: 'No problem, just come after the concert. Are you bringing someone?' },
    { de: 'Kannst du die Kerzen mitbringen? Und gib sie mir bitte vor der Party.', en: 'Can you bring the candles? And please give them to me before the party.' },
    { de: 'Man braucht keine Geschenke, jeder bringt einfach etwas zu essen mit.', en: 'You do not need presents, everyone just brings something to eat.' },
    { de: 'Niemand darf vor sieben kommen, Ali kommt erst um halb acht.', en: 'Nobody may come before seven, Ali only arrives at half past seven.' },
    { de: 'Wie bitte? Ich habe dich nicht verstanden, die Verbindung ist schlecht.', en: 'Pardon? I did not understand you, the line is bad.' },
  ],
  grammarFocus: ['a2-24-dieser-jeder-welcher', 'a2-25-indefinite-pronouns', 'a2-26-pronoun-order-midfield', 'a1-27-dative-pronouns'],
  vocabFocus: ['die Feier', 'die Einladung', 'der Gast', 'die Überraschung', 'die Torte', 'die Kerze', 'das Konzert', 'die Stimmung', 'feiern', 'schenken', 'vorbeikommen'],
  minTurns: 6,
};

export default scenario;
