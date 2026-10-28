import type { CurriculumLevel } from './types';

// Single source of truth for the course structure. Topic ids here must match
// the `id` of a Topic file under src/content/grammar/<level>/.

export const curriculum: CurriculumLevel[] = [
  {
    level: 'A1',
    name: 'Foundations',
    description: 'Say who you are, handle everyday situations, and build the grammar skeleton: present tense, cases, word order and the past.',
    units: [
      {
        unit: 1, title: 'Getting started', subtitle: 'Hallo!', vocabTheme: 'Greetings, countries, numbers, classroom',
        topics: [
          { id: 'a1-01-pronunciation', title: 'Alphabet, pronunciation and spelling', germanTerm: 'Aussprache' },
          { id: 'a1-02-greetings', title: 'Greetings, introducing yourself, du vs Sie', germanTerm: 'Begrüßung, Anrede' },
          { id: 'a1-03-personal-pronouns', title: 'Personal pronouns (ich, du, er …)', germanTerm: 'Personalpronomen' },
          { id: 'a1-04-sein-haben', title: 'The verbs sein and haben', germanTerm: 'sein / haben' },
          { id: 'a1-05-present-tense-regular', title: 'Regular present tense: what conjugation is', germanTerm: 'Konjugation, Präsens' },
          { id: 'a1-06-verb-second', title: 'Word order: the verb is always second', germanTerm: 'Verbzweitstellung' },
          { id: 'a1-07-questions', title: 'Yes/no questions and W-questions', germanTerm: 'Ja/Nein-Fragen, W-Fragen' },
          { id: 'a1-08-numbers-time', title: 'Numbers, prices and the time', germanTerm: 'Zahlen, Uhrzeit' },
        ],
      },
      {
        unit: 2, title: 'Nouns and articles', subtitle: 'Die Dinge um mich', vocabTheme: 'Home, objects, colours, food basics',
        topics: [
          { id: 'a1-09-gender-articles', title: 'Noun gender: der, die, das', germanTerm: 'Genus, bestimmter Artikel' },
          { id: 'a1-10-plural', title: 'Plural forms', germanTerm: 'Plural' },
          { id: 'a1-11-nominative', title: 'The Nominative case', germanTerm: 'Nominativ' },
          { id: 'a1-12-indefinite-articles', title: 'Indefinite articles ein / eine and no article', germanTerm: 'unbestimmter Artikel' },
          { id: 'a1-13-negation', title: 'Negation: nicht vs kein', germanTerm: 'Negation' },
          { id: 'a1-14-es-gibt-demonstratives', title: 'es gibt, das ist and demonstratives', germanTerm: 'es gibt, Demonstrativa' },
        ],
      },
      {
        unit: 3, title: 'Verbs in action', subtitle: 'Was machst du?', vocabTheme: 'Daily routine, hobbies, work',
        topics: [
          { id: 'a1-15-irregular-present', title: 'Irregular present tense: stem-changing verbs', germanTerm: 'unregelmäßige Verben' },
          { id: 'a1-16-separable-verbs', title: 'Separable and inseparable verbs', germanTerm: 'trennbare Verben' },
          { id: 'a1-17-modal-verbs', title: 'Modal verbs: können, müssen, wollen, möchten, dürfen, sollen', germanTerm: 'Modalverben' },
          { id: 'a1-18-imperative', title: 'The imperative: giving instructions', germanTerm: 'Imperativ' },
          { id: 'a1-19-gern-lieber', title: 'gern, lieber, am liebsten: likes and preferences', germanTerm: 'Vorlieben' },
        ],
      },
      {
        unit: 4, title: 'The Accusative', subtitle: 'Wen oder was?', vocabTheme: 'Shopping, clothes, food, body',
        topics: [
          { id: 'a1-20-accusative', title: 'The Accusative case: direct objects', germanTerm: 'Akkusativ' },
          { id: 'a1-21-possessive-articles', title: 'Possessive articles: mein, dein, sein …', germanTerm: 'Possessivartikel' },
          { id: 'a1-22-accusative-prepositions', title: 'Accusative prepositions: durch, für, gegen, ohne, um', germanTerm: 'Präpositionen mit Akkusativ' },
          { id: 'a1-23-accusative-pronouns', title: 'Personal pronouns in the Accusative (mich, dich …)', germanTerm: 'Akkusativpronomen' },
        ],
      },
      {
        unit: 5, title: 'The Dative', subtitle: 'Wem?', vocabTheme: 'Family, city, transport',
        topics: [
          { id: 'a1-24-dative', title: 'The Dative case: indirect objects', germanTerm: 'Dativ' },
          { id: 'a1-25-dative-prepositions', title: 'Dative prepositions: aus, bei, mit, nach, seit, von, zu', germanTerm: 'Präpositionen mit Dativ' },
          { id: 'a1-26-dative-verbs', title: 'Verbs that take the Dative (helfen, gefallen, danken …)', germanTerm: 'Dativverben' },
          { id: 'a1-27-dative-pronouns', title: 'Personal pronouns in the Dative (mir, dir …)', germanTerm: 'Dativpronomen' },
        ],
      },
      {
        unit: 6, title: 'Time and place', subtitle: 'Wann und wo?', vocabTheme: 'Calendar, weather, travel',
        topics: [
          { id: 'a1-28-time-prepositions', title: 'Prepositions of time: am, um, im, von … bis, seit, vor, nach', germanTerm: 'temporale Präpositionen' },
          { id: 'a1-29-two-way-prepositions', title: 'Two-way prepositions: wo? (Dative) vs wohin? (Accusative)', germanTerm: 'Wechselpräpositionen' },
          { id: 'a1-30-word-order-midfield', title: 'Word order of time, manner, place and the sentence bracket', germanTerm: 'Satzklammer, TeKaMoLo' },
        ],
      },
      {
        unit: 7, title: 'Talking about the past', subtitle: 'Was hast du gemacht?', vocabTheme: 'Weekend, events, past-time expressions',
        topics: [
          { id: 'a1-31-perfekt-haben', title: 'The Perfekt with haben: Partizip II', germanTerm: 'Perfekt, Partizip II' },
          { id: 'a1-32-perfekt-sein', title: 'The Perfekt with sein', germanTerm: 'Perfekt mit sein' },
          { id: 'a1-33-war-hatte', title: 'war and hatte: the Präteritum of sein and haben', germanTerm: 'Präteritum' },
        ],
      },
      {
        unit: 8, title: 'Joining ideas', subtitle: 'Und, aber, denn', vocabTheme: 'Feelings, school, communication',
        topics: [
          { id: 'a1-34-coordinating-conjunctions', title: 'Coordinating conjunctions: und, aber, oder, denn, sondern', germanTerm: 'Konjunktionen (Position 0)' },
          { id: 'a1-35-comparative-basics', title: 'Comparing: comparative basics and wie / als', germanTerm: 'Komparativ' },
          { id: 'a1-36-writing-short-messages', title: 'Writing short messages: emails, forms, notes', germanTerm: 'Schreiben A1' },
        ],
      },
    ],
  },
  {
    level: 'A2',
    name: 'Building blocks',
    description: 'Tell stories in the past, join sentences with weil and dass, decline adjectives, and handle the genitive and reflexive verbs.',
    units: [
      {
        unit: 1, title: 'The past in full', subtitle: 'Erzählen', vocabTheme: 'Biography and life events',
        topics: [
          { id: 'a2-01-prateritum-modals', title: 'Präteritum of modal verbs (konnte, musste, wollte …)', germanTerm: 'Präteritum Modalverben' },
          { id: 'a2-02-prateritum-verbs', title: 'Präteritum of regular and common irregular verbs', germanTerm: 'Präteritum' },
          { id: 'a2-03-perfekt-vs-prateritum', title: 'Perfekt vs Präteritum: which one when?', germanTerm: 'Tempuswahl' },
        ],
      },
      {
        unit: 2, title: 'Subordinate clauses', subtitle: 'Weil, dass, wenn', vocabTheme: 'Housing and living',
        topics: [
          { id: 'a2-04-subordinate-clauses-weil-dass', title: 'Subordinate clauses: the verb goes to the end (weil, dass)', germanTerm: 'Nebensatz' },
          { id: 'a2-05-wenn-ob-indirect-questions', title: 'wenn, ob and indirect questions', germanTerm: 'Nebensatz: wenn / ob / W-Wort' },
          { id: 'a2-06-als-vs-wenn', title: 'als, wenn and immer wenn: three ways to say "when"', germanTerm: 'als / wenn' },
        ],
      },
      {
        unit: 3, title: 'Adjectives', subtitle: 'Wie ist es?', vocabTheme: 'Describing people and things',
        topics: [
          { id: 'a2-07-adjective-endings-definite', title: 'Adjective endings after der / die / das', germanTerm: 'Adjektivdeklination (bestimmt)' },
          { id: 'a2-08-adjective-endings-indefinite', title: 'Adjective endings after ein / kein / mein', germanTerm: 'Adjektivdeklination (unbestimmt)' },
          { id: 'a2-09-adjective-endings-no-article', title: 'Adjective endings with no article', germanTerm: 'Adjektivdeklination (Nullartikel)' },
          { id: 'a2-10-comparative-superlative', title: 'Comparative and superlative in full', germanTerm: 'Komparativ, Superlativ' },
        ],
      },
      {
        unit: 4, title: 'Reflexive verbs and prepositions', subtitle: 'Ich freue mich auf …', vocabTheme: 'Health and the doctor',
        topics: [
          { id: 'a2-11-reflexive-verbs', title: 'Reflexive verbs (sich waschen, sich freuen)', germanTerm: 'Reflexive Verben' },
          { id: 'a2-12-verbs-with-prepositions', title: 'Verbs with fixed prepositions (warten auf, denken an)', germanTerm: 'Verben mit Präpositionen' },
          { id: 'a2-13-da-wo-compounds', title: 'da- and wo- compounds (darauf, worauf)', germanTerm: 'Präpositionaladverbien' },
        ],
      },
      {
        unit: 5, title: 'The Genitive', subtitle: 'Wessen?', vocabTheme: 'Work, office, education',
        topics: [
          { id: 'a2-14-genitive', title: 'The Genitive case and possession with von', germanTerm: 'Genitiv' },
          { id: 'a2-15-genitive-prepositions', title: 'Genitive prepositions: wegen, trotz, während, statt', germanTerm: 'Präpositionen mit Genitiv' },
        ],
      },
      {
        unit: 6, title: 'Position and movement', subtitle: 'Stellen oder stehen?', vocabTheme: 'City services and bureaucracy',
        topics: [
          { id: 'a2-16-two-way-prepositions-depth', title: 'Two-way prepositions in depth', germanTerm: 'Wechselpräpositionen' },
          { id: 'a2-17-position-verbs', title: 'Verbs of placing and position (stellen / stehen, legen / liegen …)', germanTerm: 'Positionsverben' },
          { id: 'a2-18-directions-hin-her', title: 'Directions and locations: hin / her, nach / zu / in', germanTerm: 'Richtungsangaben' },
        ],
      },
      {
        unit: 7, title: 'Future and politeness', subtitle: 'Würden Sie …?', vocabTheme: 'Media and technology',
        topics: [
          { id: 'a2-19-futur-1', title: 'Future with werden and future with Präsens', germanTerm: 'Futur I' },
          { id: 'a2-20-konjunktiv-2-polite', title: 'Konjunktiv II for polite requests and wishes (würde, hätte, wäre, könnte)', germanTerm: 'Konjunktiv II (Höflichkeit)' },
        ],
      },
      {
        unit: 8, title: 'Infinitives and relative clauses', subtitle: 'Um … zu', vocabTheme: 'Nature and environment',
        topics: [
          { id: 'a2-21-zu-infinitive', title: 'zu + infinitive', germanTerm: 'Infinitiv mit zu' },
          { id: 'a2-22-um-zu-ohne-zu', title: 'um … zu, ohne … zu, anstatt … zu', germanTerm: 'Finalsatz' },
          { id: 'a2-23-relative-clauses-nom-acc', title: 'Relative clauses in the Nominative and Accusative', germanTerm: 'Relativsatz' },
        ],
      },
      {
        unit: 9, title: 'Pronouns and determiners', subtitle: 'Jeder, dieser, man', vocabTheme: 'Celebrations and culture',
        topics: [
          { id: 'a2-24-dieser-jeder-welcher', title: 'dieser, jeder, welcher, alle, mancher', germanTerm: 'Demonstrativ- und Indefinitartikel' },
          { id: 'a2-25-indefinite-pronouns', title: 'man, jemand, niemand, etwas, nichts', germanTerm: 'Indefinitpronomen' },
          { id: 'a2-26-pronoun-order-midfield', title: 'Pronoun order in the midfield', germanTerm: 'Pronomen im Mittelfeld' },
        ],
      },
      {
        unit: 10, title: 'Connecting and explaining', subtitle: 'Deshalb, trotzdem', vocabTheme: 'Travel and transport, advanced',
        topics: [
          { id: 'a2-27-adverbial-connectors', title: 'Adverbial connectors: deshalb, trotzdem, dann, also, sonst', germanTerm: 'Konnektoren (Position 1)' },
          { id: 'a2-28-subjunctions-obwohl-damit', title: 'obwohl, damit, bis, seit(dem), bevor, nachdem', germanTerm: 'Subjunktionen' },
          { id: 'a2-29-modal-particles', title: 'Modal particles: doch, mal, ja, eigentlich', germanTerm: 'Modalpartikeln' },
          { id: 'a2-30-word-formation-compounds', title: 'Word formation 1: compound nouns and -ung / -er / -in', germanTerm: 'Wortbildung' },
          { id: 'a2-31-reading-writing-email', title: 'Reading strategies and writing a semi-formal email', germanTerm: 'Lesen & Schreiben A2' },
          { id: 'a2-32-ordinal-numbers-dates', title: 'Numbers in depth: ordinals, dates, fractions, years', germanTerm: 'Ordinalzahlen' },
        ],
      },
    ],
  },
  {
    level: 'B1',
    name: 'Independent user',
    description: 'Sequence events, use the passive, argue with connectors, master Konjunktiv II and report what others said.',
    units: [
      {
        unit: 1, title: 'Sequencing the past', subtitle: 'Nachdem ich … hatte', vocabTheme: 'Life stages and relationships',
        topics: [
          { id: 'b1-01-plusquamperfekt', title: 'Plusquamperfekt', germanTerm: 'Plusquamperfekt' },
          { id: 'b1-02-temporal-clauses', title: 'Temporal clauses: nachdem, bevor, während, seit(dem), bis, sobald, solange', germanTerm: 'Temporalsätze' },
          { id: 'b1-03-modals-perfekt', title: 'Modal verbs in the Perfekt (double infinitive)', germanTerm: 'Modalverben im Perfekt' },
        ],
      },
      {
        unit: 2, title: 'Relative clauses in full', subtitle: 'Der Mann, mit dem …', vocabTheme: 'Work, career, job applications',
        topics: [
          { id: 'b1-04-relative-clauses-dat-gen', title: 'Relative clauses in the Dative and Genitive', germanTerm: 'Relativsatz (Dativ / Genitiv)' },
          { id: 'b1-05-relative-clauses-prepositions', title: 'Relative clauses with prepositions, wo, was, wer', germanTerm: 'Relativsatz mit Präposition' },
        ],
      },
      {
        unit: 3, title: 'The passive', subtitle: 'Es wird gemacht', vocabTheme: 'News, politics, society',
        topics: [
          { id: 'b1-06-passive-present-past', title: 'Vorgangspassiv: present and Präteritum', germanTerm: 'Passiv' },
          { id: 'b1-07-passive-modals-perfekt', title: 'Passive with modal verbs and in the Perfekt', germanTerm: 'Passiv mit Modalverben' },
          { id: 'b1-08-zustandspassiv-alternatives', title: 'Zustandspassiv and alternatives (man, lassen, -bar)', germanTerm: 'Zustandspassiv, Passiversatz' },
        ],
      },
      {
        unit: 4, title: 'Konjunktiv II in depth', subtitle: 'Wenn ich reich wäre …', vocabTheme: 'Health, fitness, nutrition',
        topics: [
          { id: 'b1-09-konjunktiv-2-irreal', title: 'Irreal conditions and wishes in the present', germanTerm: 'Konjunktiv II (irreal)' },
          { id: 'b1-10-konjunktiv-2-past', title: 'Konjunktiv II in the past (hätte gemacht, wäre gegangen)', germanTerm: 'Konjunktiv II Vergangenheit' },
          { id: 'b1-11-als-ob', title: 'als ob, irreal comparisons and polite suggestions', germanTerm: 'als ob' },
        ],
      },
      {
        unit: 5, title: 'Reporting speech', subtitle: 'Er sagt, er sei …', vocabTheme: 'Education and learning',
        topics: [
          { id: 'b1-12-indirect-speech', title: 'Indirect speech with dass and with Konjunktiv I', germanTerm: 'Indirekte Rede, Konjunktiv I' },
        ],
      },
      {
        unit: 6, title: 'Nouns and adjectives, advanced', subtitle: 'Der Deutsche, der Junge', vocabTheme: 'Environment and climate',
        topics: [
          { id: 'b1-13-n-declension', title: 'N-declension: der Junge, den Jungen, der Kollege', germanTerm: 'n-Deklination' },
          { id: 'b1-14-adjectives-as-nouns', title: 'Adjectives used as nouns (der Deutsche, etwas Neues)', germanTerm: 'substantivierte Adjektive' },
          { id: 'b1-15-participles-as-adjectives', title: 'Participles as adjectives (der laufende Hund, die gekochte Suppe)', germanTerm: 'Partizipien als Adjektive' },
          { id: 'b1-16-adjective-declension-review', title: 'Adjective declension: full review and the genitive', germanTerm: 'Adjektivdeklination (Review)' },
        ],
      },
      {
        unit: 7, title: 'Connectors in full', subtitle: 'Je … desto', vocabTheme: 'Technology and digital life',
        topics: [
          { id: 'b1-17-two-part-conjunctions', title: 'Two-part conjunctions: entweder … oder, sowohl … als auch, je … desto', germanTerm: 'zweiteilige Konnektoren' },
          { id: 'b1-18-cause-consequence-concession', title: 'Cause, consequence, concession: da, sodass, obwohl, trotzdem, dennoch', germanTerm: 'kausal / konsekutiv / konzessiv' },
          { id: 'b1-19-purpose-manner', title: 'Purpose and manner: damit vs um … zu, indem, dadurch dass', germanTerm: 'final / modal' },
          { id: 'b1-20-conditions', title: 'Conditions: falls, wenn, sofern, es sei denn', germanTerm: 'konditional' },
        ],
      },
      {
        unit: 8, title: 'Verbs, advanced', subtitle: 'Lassen, brauchen, werden', vocabTheme: 'Consumption, money, banking',
        topics: [
          { id: 'b1-21-lassen', title: 'lassen in all its meanings', germanTerm: 'lassen' },
          { id: 'b1-22-brauchen-zu-scheinen', title: 'brauchen … zu, scheinen … zu, haben / sein … zu', germanTerm: 'Modalitätsverben' },
          { id: 'b1-23-werden', title: 'The three jobs of werden (future, passive, change)', germanTerm: 'werden' },
          { id: 'b1-24-futur-2-probability', title: 'Futur II and expressing probability', germanTerm: 'Futur II, Vermutung' },
          { id: 'b1-25-noun-verb-combinations', title: 'Noun–verb combinations (eine Entscheidung treffen)', germanTerm: 'Nomen-Verb-Verbindungen' },
        ],
      },
      {
        unit: 9, title: 'Prepositions, advanced', subtitle: 'Trotz des Regens', vocabTheme: 'Culture, arts, media',
        topics: [
          { id: 'b1-26-genitive-prepositions-depth', title: 'Genitive prepositions in depth: innerhalb, außerhalb, aufgrund, mithilfe', germanTerm: 'Präpositionen mit Genitiv' },
          { id: 'b1-27-verb-preposition-b1', title: 'Verb + preposition combinations: the B1 list', germanTerm: 'Verben mit Präpositionen (B1)' },
          { id: 'b1-28-adjective-noun-prepositions', title: 'Prepositions with adjectives and nouns (stolz auf, Angst vor)', germanTerm: 'Adjektive / Nomen mit Präpositionen' },
        ],
      },
      {
        unit: 10, title: 'Word formation and style', subtitle: 'Wortbildung', vocabTheme: 'Opinions, argumentation, abstract nouns',
        topics: [
          { id: 'b1-29-prefixes', title: 'Prefixes: un-, ver-, be-, er-, ent-, zer-, miss-', germanTerm: 'Präfixe' },
          { id: 'b1-30-suffixes', title: 'Suffixes: -heit, -keit, -ung, -schaft, -lich, -ig, -isch, -bar, -los', germanTerm: 'Suffixe' },
          { id: 'b1-31-register-formal-informal', title: 'Formal vs informal register: emails, complaints, applications', germanTerm: 'Register, Schreiben B1' },
          { id: 'b1-32-opinions-speaking', title: 'Giving opinions, agreeing, disagreeing, structuring a talk', germanTerm: 'Meinung äußern, Sprechen B1' },
        ],
      },
    ],
  },
];

export const allTopicIds = curriculum.flatMap((l) => l.units.flatMap((u) => u.topics.map((t) => t.id)));
