import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a2-u1-writing',
  level: 'A2',
  unit: 1,
  title: 'My story: a short biography for the course blog',
  textType: 'post',
  register: 'neutral',
  task: 'Your course blog has a series called "Meine Geschichte", in which learners tell their life story. Write a post about your life so far: use the Präteritum for the main narrative and the Perfekt for recent events.',
  points: [
    'where and when you were born and what you wanted to be as a child',
    'your school or studies and one problem you had',
    'how and when you came to Germany and what you do now',
    'one recent event and how your life is today',
  ],
  minWords: 60,
  maxWords: 120,
  usefulPhrases: [
    { de: 'Ich bin … in … geboren.', en: 'I was born in … (year) in … (place).', role: 'phrase' },
    { de: 'Als Kind wollte ich … werden.', en: 'As a child I wanted to become …', role: 'phrase' },
    { de: 'Nach der Schule zog ich nach …', en: 'After school I moved to …', role: 'phrase' },
    { de: 'Das Studium war schwer, aber …', en: 'The studies were hard, but …', role: 'phrase' },
    { de: 'Ich konnte / musste …', en: 'I could / had to …', role: 'phrase' },
    { de: 'Am Anfang …', en: 'In the beginning …', role: 'connector' },
    { de: 'dann / später / heute', en: 'then / later / today', role: 'connector' },
    { de: 'Seit … arbeite ich als …', en: 'Since … I have been working as …', role: 'phrase' },
    { de: 'Letztes Jahr habe ich …', en: 'Last year I …', role: 'phrase' },
    { de: 'Heute bin ich …', en: 'Today I am …', role: 'phrase' },
  ],
  grammarFocus: ['a2-01-prateritum-modals', 'a2-02-prateritum-verbs', 'a2-03-perfekt-vs-prateritum', 'a1-31-perfekt-haben'],
  mustUse: [
    { label: 'the Präteritum of a modal verb (wollte, musste, konnte …)', pattern: '\\b(konnte|musste|wollte|durfte|sollte)(st|n|t)?\\b', min: 2 },
    { label: 'the Präteritum of sein, haben or a common verb (war, hatte, ging, kam, zog …)', pattern: '\\b(war|hatte|ging|kam|zog|wurde|bekam|verstand|begann|blieb|lebte|arbeitete|lernte|studierte)(st|en|t|n)?\\b', min: 2 },
    { label: 'the Perfekt for a recent event (habe … gelernt, bin … gezogen)', pattern: '\\b(habe|hat|bin|ist|sind|haben)\\b[^.!?]*\\bge\\w+(t|en)\\b', min: 2 },
    { label: 'a time expression that moves the story on (dann, später, seit, letztes Jahr, heute)', pattern: '\\b(dann|später|seit|letztes jahr|heute|vor \\d+ jahren)\\b', min: 2 },
  ],
  checklist: [
    'All four points are covered: birth and childhood dream, school or studies with a problem, coming to Germany and your job, a recent event and life today.',
    'The main story is told in the Präteritum (wollte, musste, zog, war), as in a written biography.',
    'Recent events use the Perfekt (habe … gelernt, bin … gezogen), with the participle at the end of the clause.',
    'Every participle has the right form: ge- + stem + -t for regular verbs (gelernt), ge- + stem + -en for irregular verbs (gezogen).',
    'The modal verbs in the Präteritum have no umlaut: konnte, musste (not könnte, müsste).',
    'Time expressions like Als Kind, Nach dem Abitur, Seit 2019 start the sentence and the verb stays in second position.',
    'Years and ages are written as numbers; places, nationalities and languages are capitalised.',
    'The post has between 60 and 120 words.',
  ],
  model: [
    'Meine Geschichte',
    'Ich heiße Daniel Okafor und bin 1991 in Lagos geboren. Als Kind wollte ich Pilot werden, aber ich musste zuerst die Schule beenden. Nach dem Abitur zog ich nach Accra und studierte dort drei Jahre Informatik. Das Studium war schwer, aber ich hatte gute Freunde.',
    '2016 bekam ich ein Stipendium und konnte nach Deutschland kommen. Am Anfang verstand ich fast nichts, aber ich habe jeden Tag Deutsch gelernt. Seit 2019 arbeite ich als Programmierer in Leipzig. Letztes Jahr habe ich meine Frau kennengelernt und wir sind zusammen in eine neue Wohnung gezogen.',
    'Heute bin ich glücklich hier, aber ich vermisse meine Familie.',
  ],
  modelNotes: [
    'The narrative uses the **Präteritum** (**wollte, musste, zog, studierte, war, hatte, bekam, konnte, verstand**): in writing, this is the normal tense for telling a life story.',
    'The **Perfekt** marks events that still matter now: **habe … gelernt, habe … kennengelernt, sind … gezogen**. The participle sits at the very end of the clause.',
    '**Als Kind wollte ich Pilot werden**: the modal in the Präteritum is in position 2 and the infinitive **werden** goes to the end.',
    '**Ich bin 1991 in Lagos geboren** is the fixed way to give a birth date; **Seit 2019 arbeite ich** uses the present tense with *seit* for something that is still going on.',
    'Contrast words keep the story moving: **aber** appears three times (*wollte …, aber musste*; *war schwer, aber*; *verstand nichts, aber habe gelernt*), and **Heute** closes the text.',
  ],
};

export default task;
