import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'a2-u1-speaking',
  level: 'A2',
  unit: 1,
  title: 'Appointment at the job centre',
  situation: 'You have an appointment at the Jobcenter in Leipzig. Before the adviser can suggest a job or a course, she wants to understand your life so far: school, training, work and the move to Germany.',
  partner: {
    name: 'Frau Lindner',
    role: 'adviser at the Jobcenter',
    persona: 'Businesslike but warm. Asks one question at a time about your past and follows up with "Und dann?" or "Warum?". Notices a gap of a year in your CV and asks what you did in that time. Near the end she offers two options, a German course in the mornings or a part-time job, and asks which you prefer and why.',
  },
  register: 'Sie',
  goals: [
    'say where you were born and where you grew up',
    'tell your school and training or work story in order (zuerst, dann, danach, schließlich) with at least two Präteritum forms such as war, hatte, konnte, musste or wollte',
    'explain what you did in the gap year she asks about and why',
    'choose the course or the part-time job and give one reason',
  ],
  opener: 'Guten Tag, nehmen Sie bitte Platz. Ich möchte Sie zuerst ein bisschen kennenlernen. Wo sind Sie geboren und wo sind Sie aufgewachsen?',
  usefulPhrases: [
    { de: 'Ich bin 1995 in … geboren und auf dem Land aufgewachsen.', en: 'I was born in … in 1995 and grew up in the countryside.' },
    { de: 'Zuerst war ich auf der Grundschule, dann auf dem Gymnasium.', en: 'First I was at primary school, then at grammar school.' },
    { de: 'Ich wollte studieren, aber das konnte ich damals nicht.', en: 'I wanted to study, but back then I could not.' },
    { de: 'Nach dem Abschluss habe ich eine Ausbildung als … gemacht.', en: 'After finishing school I did an apprenticeship as a …' },
    { de: 'In dieser Zeit musste ich mich um meine Familie kümmern.', en: 'During that time I had to look after my family.' },
    { de: 'Vor zwei Jahren bin ich nach Deutschland umgezogen.', en: 'Two years ago I moved to Germany.' },
    { de: 'Ich nehme lieber den Kurs, denn ich möchte zuerst besser Deutsch sprechen.', en: 'I would rather take the course, because I want to speak better German first.' },
    { de: 'Entschuldigung, können Sie die Frage bitte wiederholen?', en: 'Sorry, could you repeat the question, please?' },
  ],
  grammarFocus: ['a2-01-prateritum-modals', 'a2-02-prateritum-verbs', 'a2-03-perfekt-vs-prateritum', 'a1-31-perfekt-haben', 'a1-33-war-hatte'],
  vocabFocus: ['die Kindheit', 'die Grundschule', 'die Ausbildung', 'der Abschluss', 'das Studium', 'die Erfahrung', 'die Heimat', 'geboren sein', 'aufwachsen', 'umziehen', 'damals'],
  minTurns: 6,
};

export default scenario;
