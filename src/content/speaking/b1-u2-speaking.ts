import type { SpeakingScenario } from '../types';

const scenario: SpeakingScenario = {
  id: 'b1-u2-speaking',
  level: 'B1',
  unit: 2,
  title: 'Job interview for a customer service role',
  situation: 'You have applied for a position in the customer service department of a medium-sized company in Hamburg. Today is your interview with the head of HR. She wants to hear about your previous jobs, why you applied and what you expect from the company.',
  partner: {
    name: 'Frau Dr. Keller',
    role: 'head of human resources',
    persona: 'Professional and friendly, but precise: asks for concrete examples ("Wofür genau waren Sie da zuständig?") and asks one critical question about a gap in your CV or a weakness. Mentions that the role includes some weekend shifts and asks whether that is a problem. Towards the end invites your questions and explains the probation period and the next steps.',
  },
  register: 'Sie',
  goals: [
    'describe your last job using at least one relative clause (die Firma, bei der ich gearbeitet habe; die Aufgaben, für die ich zuständig war)',
    'say why you applied for this position and what you expect from the employer, with two reasons',
    'answer her critical question about a gap or weakness without getting defensive',
    'ask at least two questions about the job: working hours, probation period, salary or the team',
  ],
  opener: 'Guten Tag, nehmen Sie bitte Platz. Schön, dass Sie da sind. Erzählen Sie mir zuerst etwas über sich: Was haben Sie bisher beruflich gemacht?',
  usefulPhrases: [
    { de: 'Die Firma, bei der ich zuletzt gearbeitet habe, …', en: 'The company where I last worked …' },
    { de: 'Das war eine Aufgabe, für die ich allein zuständig war.', en: 'That was a task I was solely responsible for.' },
    { de: 'Ich habe mich beworben, weil …', en: 'I applied because …' },
    { de: 'Eine Stelle, in der ich Verantwortung übernehmen kann, ist mir wichtig.', en: 'A job in which I can take responsibility is important to me.' },
    { de: 'Ich bin jemand, dem Teamarbeit sehr wichtig ist.', en: 'I am someone for whom teamwork is very important.' },
    { de: 'Das stimmt, in dieser Zeit war ich arbeitslos, aber …', en: 'That is true, during that time I was unemployed, but …' },
    { de: 'Was ich noch fragen wollte: Wie lang ist die Probezeit?', en: 'Something I still wanted to ask: how long is the probation period?' },
    { de: 'Mit wem würde ich am meisten zusammenarbeiten?', en: 'Who would I work with most?' },
    { de: 'Entschuldigung, könnten Sie die Frage bitte wiederholen?', en: 'Sorry, could you please repeat the question?' },
  ],
  grammarFocus: ['b1-04-relative-clauses-dat-gen', 'b1-05-relative-clauses-prepositions'],
  vocabFocus: ['die Bewerbung', 'das Vorstellungsgespräch', 'die Berufserfahrung', 'der Arbeitgeber', 'die Probezeit', 'das Gehalt', 'die Arbeitszeit', 'zuständig', 'sich bewerben', 'übernehmen'],
  minTurns: 8,
};

export default scenario;
