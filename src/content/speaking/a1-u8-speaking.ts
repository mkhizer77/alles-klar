import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a1-u8-speaking',
  level: 'A1',
  unit: 8,
  title: 'Chatting with a classmate after class',
  situation: 'The lesson at the language school has just finished and you are in the hallway with Mira from your course. The A1 exam is in two weeks. You talk about how the course is going and agree how to stay in touch.',
  partner: {
    name: 'Mira',
    role: 'classmate in your German course',
    persona: 'Open and honest, a bit worried about the exam. Speaks slowly in short sentences, asks why you think something and sometimes disagrees gently (she finds the grammar harder than the vocabulary). Suggests studying together and at the end asks for your phone number or email.',
  },
  register: 'du',
  goals: ['say what you think of the course and give a reason with denn', 'compare two things, for example grammar and vocabulary, using als or so … wie', 'say one thing you like and one thing you do not like, joined with aber', 'agree how to stay in contact and give your phone number or email address'],
  opener: 'Hey! Der Unterricht ist fertig. Wie findest du den Kurs? Ist er leicht oder schwer für dich?',
  usefulPhrases: [
    { de: 'Ich finde den Kurs gut, denn die Lehrerin erklärt alles langsam.', en: 'I think the course is good, because the teacher explains everything slowly.' },
    { de: 'Die Grammatik ist schwerer als die Wörter.', en: 'The grammar is harder than the vocabulary.' },
    { de: 'Lesen ist für mich so leicht wie Hören.', en: 'Reading is as easy for me as listening.' },
    { de: 'Ich lese gern, aber ich spreche nicht gern.', en: 'I like reading, but I do not like speaking.' },
    { de: 'Ich habe ein bisschen Angst vor der Prüfung.', en: 'I am a bit scared of the exam.' },
    { de: 'Ich bin mit dem Kurs zufrieden.', en: 'I am happy with the course.' },
    { de: 'Wir können zusammen lernen.', en: 'We can study together.' },
    { de: 'Meine Telefonnummer ist … Schick mir eine Nachricht!', en: 'My phone number is … Send me a message!' },
    { de: 'Wie bitte? Was bedeutet das Wort?', en: 'Pardon? What does that word mean?' },
  ],
  grammarFocus: ['a1-34-coordinating-conjunctions', 'a1-35-comparative-basics', 'a1-36-writing-short-messages', 'a1-19-gern-lieber'],
  vocabFocus: ['der Kurs', 'der Unterricht', 'die Prüfung', 'die Hausaufgabe', 'leicht', 'schwer', 'interessant', 'langweilig', 'zufrieden', 'die Angst', 'die Telefonnummer', 'die Nachricht'],
  minTurns: 5,
};

export default scenario;
