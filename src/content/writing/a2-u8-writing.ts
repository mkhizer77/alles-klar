import type { WritingTask } from '../types';

const task: WritingTask = {
  id: 'a2-u8-writing',
  level: 'A2',
  unit: 8,
  title: 'A day in nature: the story of a trip',
  textType: 'story',
  register: 'neutral',
  task: 'Your course collects short stories under the title "Ein Tag in der Natur". Write about a trip you made into nature: why you went, what you had planned, what went wrong and what you want to do next time.',
  points: [
    'where you went, when and why (um … zu)',
    'what you had planned to do (ich hatte vor, … zu …)',
    'one problem on the way and how it ended',
    'a person, place or thing described with a relative clause, and your wish for next time',
  ],
  minWords: 60,
  maxWords: 120,
  usefulPhrases: [
    { de: 'Letzten Sommer habe ich einen Ausflug nach / in … gemacht, um … zu …', en: 'Last summer I made a trip to …, in order to …', role: 'phrase' },
    { de: 'Ich hatte vor, … zu …', en: 'I planned to …', role: 'phrase' },
    { de: 'Mein Freund …, der …, kam mit.', en: 'My friend …, who …, came along.', role: 'phrase' },
    { de: 'Der Weg, den wir gewählt haben, war …', en: 'The path (that) we chose was …', role: 'phrase' },
    { de: 'Nach … Stunden fing es an zu regnen.', en: 'After … hours it started to rain.', role: 'phrase' },
    { de: 'Zum Glück …', en: 'Luckily …', role: 'connector' },
    { de: 'ohne … zu …', en: 'without …-ing', role: 'connector' },
    { de: 'Es war ein Tag, den ich nicht vergessen werde.', en: 'It was a day (that) I will not forget.', role: 'phrase' },
    { de: 'Nächstes Jahr möchte ich …, um … zu …', en: 'Next year I want to …, in order to …', role: 'phrase' },
  ],
  grammarFocus: ['a2-21-zu-infinitive', 'a2-22-um-zu-ohne-zu', 'a2-23-relative-clauses-nom-acc', 'a2-02-prateritum-verbs'],
  mustUse: [
    { label: 'zu + infinitive (zu wandern, mitzunehmen)', pattern: '\\b(zu [a-zäöüß]+(en|ern|eln)|[a-zäöüß]+zu[a-zäöüß]+(en|ern|eln))\\b', min: 2 },
    { label: 'a purpose or manner clause with um … zu / ohne … zu', pattern: '\\b(um|ohne|anstatt)\\b[^.!?]*\\bzu [a-zäöüß]+', min: 1 },
    { label: 'a relative clause after a comma (…, der / die / das / den …)', pattern: ', (der|die|das|den) ', min: 2 },
    { label: 'a Präteritum verb for the narrative (war, fing, kam, fanden …)', pattern: '\\b(war|waren|hatte|hatten|kam|kamen|fing|fand|fanden|ging|gingen|stand|sah|sahen|saßen|blieb|blieben|wurde)\\b', min: 2 },
  ],
  checklist: [
    'All four points are covered: where, when and why; your plan; a problem and how it ended; a relative clause and your wish for next time.',
    'zu stands directly before the infinitive at the end of the clause (…, lange zu wandern); with separable verbs zu goes inside (mitzunehmen, kennenzulernen).',
    'um … zu expresses purpose and has no subject of its own: …, um in der Natur zu sein.',
    'ohne … zu is used for "without doing something": …, ohne uns zu ärgern.',
    'Relative pronouns match the noun in gender and number and take their case from the relative clause: der Weg, den wir gewählt haben (Accusative); Ben, der … (Nominative).',
    'Every relative clause is set off with commas and has its verb at the end.',
    'The story is told consistently in the past (fing es an, fanden wir, haben … gemacht).',
    'The story has between 60 and 120 words.',
  ],
  model: [
    'Ein Tag im Nationalpark',
    'Letzten Sommer habe ich einen Ausflug in den Nationalpark Eifel gemacht, um richtig in der Natur zu sein. Ich hatte vor, lange zu wandern und am See zu zelten. Mein Freund Ben, der sich für Vögel interessiert, kam mit.',
    'Der Weg, den wir gewählt haben, war länger als geplant. Nach drei Stunden fing es an zu regnen, und wir hatten keine Regenjacken dabei. Zum Glück fanden wir eine Hütte, die allein im Wald stand, und warteten dort, ohne uns zu ärgern.',
    'Am Abend saßen wir am See und sahen Sterne, die man in der Stadt nie sieht. Es war ein Tag, den ich nicht vergessen werde. Nächstes Jahr möchte ich wiederkommen, um die Natur besser kennenzulernen.',
  ],
  modelNotes: [
    'Purpose with **um … zu**: **um richtig in der Natur zu sein**, **um die Natur besser kennenzulernen**: with a separable verb *zu* goes inside (*kennen-zu-lernen*).',
    '**Ich hatte vor, lange zu wandern und am See zu zelten**: after *vorhaben* the plan follows as a zu-infinitive clause, separated by a comma.',
    '**fing es an zu regnen** needs no comma because the infinitive clause is just *zu* + verb; **ohne uns zu ärgern** means "without getting annoyed".',
    'Relative clauses: **Ben, der …** (Nominative), **Der Weg, den wir gewählt haben** (Accusative), **eine Hütte, die … stand**, **Sterne, die man … sieht**, **ein Tag, den ich nicht vergessen werde**: commas around, verb at the end.',
    'The narrative mixes the **Perfekt** for the frame (**habe … gemacht**) with the **Präteritum** for the events (**kam, war, fing an, hatten, fanden, saßen, sahen**).',
  ],
};

export default task;
