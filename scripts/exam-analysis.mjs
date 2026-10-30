// Compares the course content with official B1 model papers.
//
// Usage: node scripts/exam-analysis.mjs --texts <dir with pdf-to-text files> --catalog <dir with catalog JSON> [--json out.json]
//
// The official papers are copyrighted and are not kept in the repository; point
// --texts at a folder with the text extractions (see docs/B1-EXAM-ANALYSIS.md for
// the list of papers). The catalog folder holds our own per-part metadata
// (docs/exam-analysis/catalog). The script prints a markdown report with:
//   1. how often each course topic's structures occur in the papers (presence, density, share)
//   2. which topics the grammar-cloze items (telc Sprachbausteine, DTZ Lesen Teil 5) test
//   3. exam text domains vs course unit themes
//   4. how much of the exam vocabulary the course word lists cover, and the most frequent gaps
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : def;
};
const textsDir = opt('--texts');
const catalogDir = opt('--catalog', join(root, 'docs/exam-analysis/catalog'));
const jsonOut = opt('--json');
if (!textsDir) {
  console.error('need --texts <dir>');
  process.exit(1);
}

/* ------------------------------------------------------------------ */
/* 0. course content                                                   */
/* ------------------------------------------------------------------ */
const { curriculum } = await import(pathToFileURL(join(root, 'src/content/curriculum.ts')).href);
const topicMeta = new Map();
for (const l of curriculum) for (const u of l.units) for (const t of u.topics) topicMeta.set(t.id, { ...t, level: l.level, unit: u.unit, unitTitle: u.title, vocabTheme: u.vocabTheme });

const vocabFiles = readdirSync(join(root, 'src/content/vocab')).filter((f) => f.endsWith('.ts'));
const courseWords = [];
for (const f of vocabFiles) {
  const m = await import(pathToFileURL(join(root, 'src/content/vocab', f)).href);
  for (const w of m.default.words) courseWords.push(w);
}

/* ------------------------------------------------------------------ */
/* 1. the papers: one entry per distinct test set                      */
/* ------------------------------------------------------------------ */
const pagesOf = (file) => {
  const raw = readFileSync(join(textsDir, file), 'utf8');
  const out = [];
  for (const chunk of raw.split(/\n===== PAGE (\d+) =====\n/)) out.push(chunk);
  // split() yields [pre, num, text, num, text ...]
  const pages = new Map();
  for (let i = 1; i < out.length; i += 2) pages.set(Number(out[i]), out[i + 1] ?? '');
  return pages;
};
const takePages = (pages, ranges) => {
  let s = '';
  for (const [a, b] of ranges) for (let p = a; p <= b; p++) s += '\n' + (pages.get(p) ?? '');
  return s;
};
const DROP_PAGE = /Bewertungskriterien|BEWERTUNGSKRITERIEN|B e w e r t u n g|I n f o r m a t i o n e n|Code Examiner|Code Rater|Agreed Marks|Bewertende|Lösungsschlüssel|Prüfungszentrum|Geburtsdatum|Thema verfehlt|HINWEISE PRÜFENDE|Hinweise zur Gesprächsführung|Answer Sheet|Antwortbogen S30|Bewertungsbogen|Impressum|^\s*INHALT|Vorwort|Prüfungsziele|Unser Angebot|Unser Netzwerk|Punkte und Gewichtung|Wo und wie werden|Markierungen auf dem|Wer erhält ein Zertifikat|LEISTUNGSBEISPIELE/m;
const whole = (file) => {
  const pages = pagesOf(file);
  let s = '';
  for (const [, text] of pages) if (!DROP_PAGE.test(text)) s += '\n' + text;
  return s;
};

const oesd = pagesOf('ZB1-Uebungsmaterialien-Band-1_WEB.txt');
const SETS = [
  { id: 'goethe-me', provider: 'goethe-oesd', name: 'Goethe/ÖSD Modellsatz Erwachsene', text: whole('B1_Modellsatz_Erwachsene.txt'), catalog: ['goethe.json', 0] },
  { id: 'goethe-ue', provider: 'goethe-oesd', name: 'Goethe/ÖSD Übungssatz Erwachsene', text: whole('B1_Uebungssatz_Erwachsene.txt'), catalog: ['goethe.json', 1] },
  { id: 'goethe-uj', provider: 'goethe-oesd', name: 'Goethe/ÖSD Übungssatz Jugendliche', text: whole('B1_Uebungssatz_Jugendliche.txt'), catalog: ['goethe.json', 2] },
  { id: 'oesd-mj', provider: 'goethe-oesd', name: 'ÖSD Modellsatz Jugendliche', text: takePages(oesd, [[62, 85], [145, 148]]), catalog: ['oesd.json', 1] },
  { id: 'telc-1', provider: 'telc', name: 'telc Deutsch B1 Übungstest 1', text: whole('telc_B1_Uebungstest1.txt'), catalog: ['telc-dtz.json', 0] },
  { id: 'telc-hu', provider: 'telc', name: 'telc Deutsch B1 Übungstest (telc Hungary 2021)', text: whole('telc_B1_Mock_HU.txt'), catalog: ['telc-dtz.json', 1] },
  { id: 'telc-schule', provider: 'telc', name: 'telc Deutsch B1 Schule Übungstest 1', text: whole('telc_B1_Schule_Uebungstest1.txt'), catalog: ['telc-dtz.json', 2] },
  { id: 'telc-a2b1', provider: 'telc', name: 'telc Deutsch A2·B1 Übungstest (partial)', text: whole('telc_A2B1_AufJedenFall.txt'), catalog: ['telc-dtz.json', 3] },
  { id: 'dtz', provider: 'dtz', name: 'DTZ A2–B1 Modelltest', text: whole('DTZ_Modelltest_Klett.txt'), catalog: ['telc-dtz.json', 4] },
];

// boilerplate that is on every paper and would inflate imperative/modal counts
const BOILER = /^(Markieren Sie|Lesen Sie (jetzt )?die (Aufgaben|Situationen|Texte|Überschriften|Sätze)|Wählen Sie|Sie hören|Dazu haben Sie|Schreiben Sie Ihre Lösungen|Vergessen Sie bitte nicht|Übertragen Sie|Kreuzen Sie|Entscheiden Sie|Welche Lösung|Richtig|Falsch|Ja|Nein|Beispiel|Seite \d+|©|Vs_\d|MODELLSATZ|ÜBUNGSSATZ|KANDIDATENBLÄTTER|PRÜFERBLÄTTER|LESEN|HÖREN|SCHREIBEN|SPRECHEN|TRANSKRIPTIONEN|Teil \d|Aufgabe \d|Arbeitszeit|noch Teil|Übungstest|Hörverstehen|Leseverstehen|Sprachbausteine|Schriftlicher Ausdruck|Mündlicher Ausdruck|Track \d+|Nummer \d+|Text \d|Vervielfältigung|Klett|telc|www\.|ÖSD Zerti|Lösungen|Transkript)/;
const clean = (text) =>
  text
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 2 && !BOILER.test(l) && !/^[a-jl-z0-9\s|+–\-]{1,4}$/.test(l))
    .join('\n');
for (const s of SETS) {
  s.body = clean(s.text);
  s.words = s.body.split(/\s+/).filter(Boolean).length;
}

/* ------------------------------------------------------------------ */
/* 2. detectors: one regex family per course topic                     */
/* ------------------------------------------------------------------ */
const L = '[\\wäöüÄÖÜß]';
const B = `(?:(?<!${L})(?=${L})|(?<=${L})(?!${L}))`;
const rx = (src, flags = 'g') => new RegExp(src.replace(/\\w/g, L).replace(/\\b/g, B), flags);
const PART = '(?:ge\\w+(?:t|en)|\\w+iert)'; // rx() expands \w to the umlaut-aware class
const VP = ['warten auf', 'denken an', 'denkt an', 'interessieren für', 'interessiert sich für', 'interessiere mich für', 'freuen auf', 'freue mich auf', 'freut sich auf', 'freuen uns auf', 'freuen über', 'freue mich über', 'freut sich über', 'sprechen über', 'spricht über', 'reden über', 'ärgern über', 'kümmern um', 'kümmert sich um', 'bitten um', 'bittet um', 'fragen nach', 'fragt nach', 'träumen von', 'erzählen von', 'erzählt von', 'gehören zu', 'gehört zu', 'teilnehmen an', 'nimmt teil an', 'bewerben um', 'bewirbt sich um', 'achten auf', 'achtet auf', 'erinnern an', 'erinnert sich an', 'glauben an', 'hoffen auf', 'hofft auf', 'danken für', 'beschweren über', 'entschuldigen für', 'suchen nach', 'sucht nach', 'abhängen von', 'hängt ab von', 'hängt davon ab', 'leiden unter', 'unterhalten über', 'sorgen für', 'sorgt für', 'beginnen mit', 'aufhören mit', 'konzentrieren auf', 'passen zu', 'passt zu', 'verlieben in', 'diskutieren über', 'nachdenken über', 'gewöhnen an', 'vorbereiten auf', 'treffen mit', 'beschäftigen mit', 'beschäftigt sich mit', 'einladen zu', 'lädt ein zu', 'informieren über', 'informiert über', 'verzichten auf', 'verzichtet auf', 'verlassen auf', 'bestehen aus', 'besteht aus', 'bestehen auf', 'beziehen auf', 'bemühen um', 'entscheiden für', 'entscheidet sich für', 'einigen auf', 'wenden an', 'wendet sich an', 'handelt sich um', 'verfügen über', 'verfügt über', 'wundern über', 'rechnen mit', 'rechnet mit', 'erkundigen nach', 'überzeugen von', 'beteiligen an', 'auseinandersetzen mit', 'streiten über', 'berichten über', 'hinweisen auf', 'weist darauf hin', 'wies darauf hin', 'warnen vor', 'warnt vor', 'engagieren für', 'bedanken für', 'bedankt sich für', 'protestieren gegen', 'kämpfen für', 'kämpfen gegen', 'wehren gegen', 'halten von', 'hältst du von', 'halten für', 'gehen um', 'geht um', 'geht es um', 'zweifeln an', 'schützen vor', 'sehnen nach', 'sich melden bei', 'melden bei', 'lachen über', 'nachfragen bei'];
const vpRx = rx(`\\b(?:${VP.join('|')})\\b`, 'gi');

const ADJ_NOUN = rx('\\b(\\w+) ([a-zäöüß]{3,}(?:e|en|em|er|es)) ([A-ZÄÖÜ]\\w{2,})\\b', 'g');
const ADJ_STOP = new Set(['und', 'oder', 'aber', 'nicht', 'auch', 'noch', 'schon', 'sehr', 'ganz', 'immer', 'dann', 'denn', 'wenn', 'dass', 'weil', 'wie', 'als', 'ob', 'nur', 'mal', 'man', 'sich', 'uns', 'ihnen', 'euch', 'mich', 'dich', 'ihm', 'ihr', 'wir', 'sie', 'ich', 'es', 'er', 'du', 'bitte', 'haben', 'werden', 'wurden', 'wurde', 'sind', 'waren', 'würden', 'können', 'müssen', 'sollen', 'wollen', 'dürfen', 'mögen', 'gern', 'gerne', 'lieber', 'ohne', 'über', 'unter', 'zwischen', 'neben', 'hinter', 'gegen', 'wegen', 'während', 'seinen', 'ihren', 'einen', 'meinen', 'deinen', 'keinen', 'unseren', 'euren', 'allen', 'vielen', 'wenigen', 'einigen', 'mehreren', 'anderen', 'solchen', 'manchen', 'diesen', 'jeden', 'welchen', 'beiden', 'wieder', 'hier', 'dort', 'heute', 'morgen', 'gestern', 'oben', 'unten', 'zusammen', 'jemanden', 'niemanden', 'etwas', 'gegenüber', 'mehr', 'weniger', 'außer', 'statt', 'trotz', 'dieser', 'jeder', 'welcher', 'unser', 'euer', 'einer', 'keiner', 'meiner', 'seiner', 'ihrer', 'aller', 'voller', 'eher', 'oder', 'leider', 'weder', 'entweder', 'sondern', 'bevor', 'nachdem', 'sodass', 'obwohl', 'damit', 'indem', 'seitdem', 'sobald', 'solange', 'falls', 'sofern', 'super', 'inzwischen', 'eigentlich', 'natürlich', 'wirklich', 'vielleicht', 'meistens', 'manchmal', 'übrigens', 'außerdem', 'trotzdem', 'deshalb', 'deswegen', 'darum', 'daher', 'dennoch', 'jedoch', 'allerdings', 'zuerst', 'danach', 'vorher', 'nachher', 'später', 'früher', 'weiter', 'besonders', 'ziemlich', 'einfach', 'bestimmt', 'sicher', 'lange', 'kaum', 'wohl', 'etwa', 'ungefähr', 'circa', 'ihnen', 'herren', 'ihren', 'wochen', 'jahren', 'tagen', 'stunden', 'minuten', 'leuten', 'kindern', 'eltern', 'freunden', 'kollegen', 'menschen', 'frauen', 'männern', 'schülern', 'studenten', 'gästen', 'kunden', 'mitgliedern', 'teilnehmern', 'besuchern', 'bewohnern', 'nachbarn', 'lehrern', 'jugendlichen', 'erwachsenen', 'senioren', 'personen', 'familien', 'zeiten', 'orten', 'ländern', 'städten', 'dörfern', 'regionen', 'zimmern', 'räumen', 'gruppen', 'kursen', 'schulen', 'firmen', 'betrieben', 'unternehmen', 'anderen', 'beiden', 'meisten', 'wenigsten']);
const DEF = /^(der|die|das|dem|den|des|dieser|diese|dieses|diesem|diesen|jeder|jede|jedes|jedem|jeden|welcher|welche|welches|welchem|welchen|solcher|solche|solches|solchem|solchen|mancher|manche|manches|manchem|manchen|alle|aller|allen|allem|beide|beiden)$/i;
const INDEF = /^(ein|eine|einen|einem|einer|eines|kein|keine|keinen|keinem|keiner|keines|mein|meine|meinen|meinem|meiner|meines|dein|deine|deinen|deinem|deiner|deines|sein|seine|seinen|seinem|seiner|seines|ihr|ihre|ihren|ihrem|ihrer|ihres|unser|unsere|unseren|unserem|unserer|unseres|euer|eure|euren|eurem|eurer|eures)$/i;
const PART_ADJ = rx('^(?:\\w+end(?:e|en|em|er|es)|ge\\w+(?:t|en)(?:e|en|em|er|es)|\\w+iert(?:e|en|em|er|es))$', '');

function adjectiveCounts(text) {
  const c = { def: 0, indef: 0, none: 0, participle: 0 };
  for (const m of text.matchAll(ADJ_NOUN)) {
    const [, prev, adj] = m;
    if (ADJ_STOP.has(adj.toLowerCase())) continue;
    if (/^(?:ich|du|er|sie|es|wir|ihr|man|sich|uns|euch|mich|dich|ihm|ihn|ihnen|ist|sind|war|waren|wird|werden|hat|haben|hatte|hatten|kann|können|muss|müssen|soll|sollen|will|wollen|darf|dürfen|möchte|möchten|und|oder|aber|nicht|auch|noch|sehr|ganz|so|zu|wie|als)$/i.test(adj)) continue;
    if (PART_ADJ.test(adj)) c.participle++;
    if (DEF.test(prev)) c.def++;
    else if (INDEF.test(prev)) c.indef++;
    else if (/^(?:in|an|auf|mit|bei|von|zu|für|aus|nach|seit|über|unter|vor|durch|ohne|gegen|um|zwischen|neben|hinter|und|oder|sind|gibt|es|viele|wenige|einige|mehrere|andere|keine|alle)$/i.test(prev) || /^[a-zäöü]/.test(prev)) c.none++;
    else c.none++;
  }
  return c;
}

const detectors = {
  'a1-02-greetings': rx('\\b(?:Hallo|Guten (?:Tag|Morgen|Abend)|Liebe[rs]? [A-ZÄÖÜ]|Sehr geehrte|Grüße|Gruß|Tschüs|Tschau|Auf Wiedersehen|Wiederhören|Herzlich willkommen)\\b'),
  'a1-03-personal-pronouns': rx('\\b(?:ich|du|er|sie|es|wir|ihr|Sie)\\b'),
  'a1-04-sein-haben': rx('\\b(?:bin|bist|ist|sind|seid|habe|hast|hat|haben|habt)\\b'),
  'a1-07-questions': rx('(?:^|[.!?:„"]\\s*)(?:Wer|Was|Wo|Wann|Wie|Warum|Woher|Wohin|Welche\\w*|Wozu|Wem|Wen|Wieso|Weshalb)\\b', 'gm'),
  'a1-08-numbers-time': rx('\\b\\d{1,2}(?:[.:]\\d{2})? Uhr\\b|\\b\\d+(?:,\\d+)? ?(?:Euro|Prozent|Jahre|Jahren|Minuten|Stunden|Kilometer|Meter|Wochen|Tage|Monate)\\b|\\b(?:halb|Viertel) \\w+\\b'),
  'a1-09-gender-articles': rx('\\b(?:der|die|das)\\b', 'gi'),
  'a1-12-indefinite-articles': rx('\\b(?:ein|eine|einen|einem|einer|eines)\\b'),
  'a1-13-negation': rx('\\b(?:nicht|kein|keine|keinen|keinem|keiner|keines|nichts|nie|niemand|niemanden|nirgends|noch nicht|nicht mehr)\\b'),
  'a1-14-es-gibt-demonstratives': rx('\\b(?:es gibt|gibt es|das ist|das sind|das war|das waren|das hier|der da|die da)\\b', 'gi'),
  'a1-15-irregular-present': rx('\\b(?:fährt|fährst|gibt|gibst|liest|nimmt|nimmst|sieht|siehst|spricht|sprichst|isst|schläft|läuft|trägt|hilft|trifft|triffst|vergisst|wäscht|weiß|weißt|hält|hältst|lässt|empfiehlt|gefällt|fängt|wirft|bricht|stirbt|schlägt|wächst|verlässt|enthält|behält|betrifft|entspricht|unterhält|verspricht)\\b'),
  'a1-16-separable-verbs': rx('\\b(?:an|ab|auf|aus|ein|mit|zurück|vor|weg|los|statt|teil|fern|zusammen|fest|nach|um|her|hin|vorbei|weiter|bei|zu)\\s*(?=[.,!?;:](?:\\s|$)|\\s*$)', 'gm'),
  'a1-17-modal-verbs': rx('\\b(?:kann|kannst|können|könnt|muss|musst|müssen|müsst|will|willst|wollen|wollt|möchte|möchten|möchtest|darf|darfst|dürfen|dürft|soll|sollst|sollen|sollt|mag|magst|mögen|mögt)\\b'),
  'a1-18-imperative': rx('\\b(?:Rufen|Schicken|Kommen|Melden|Bringen|Geben|Nehmen|Fragen|Bestellen|Informieren|Besuchen|Achten|Folgen|Nutzen|Buchen|Reichen|Bestätigen|Gehen|Fahren|Machen|Überweisen|Lassen|Probieren|Sagen|Bleiben|Warten|Senden|Zahlen|Bezahlen|Beachten|Holen|Kaufen|Vereinbaren|Beantworten|Benutzen|Parken|Stellen|Tragen|Verwenden) Sie\\b|\\b(?:Schreib|Komm|Schau|Ruf|Sag|Erzähl|Bring|Nimm|Gib|Lies|Mach|Geh|Melde|Denk|Vergiss|Frag|Lass|Hol|Bleib|Warte|Fahr|Pass|Schick|Kauf|Probier|Zeig|Hör|Guck|Sei)\\b(?! (?:ich|er|sie|es|wir|ihr|Sie|Sie))'),
  'a1-19-gern-lieber': rx('\\b(?:gern|gerne|lieber|am liebsten)\\b'),
  'a1-20-accusative': rx('\\b(?:den|einen|meinen|deinen|seinen|ihren|unseren|euren|Ihren|diesen|jeden|keinen|welchen)\\b'),
  'a1-21-possessive-articles': rx('\\b(?:mein|meine|meinen|meinem|meiner|meines|dein|deine|deinen|deinem|deiner|deines|seine|seinen|seinem|seiner|seines|ihre|ihren|ihrem|ihrer|ihres|unser|unsere|unseren|unserem|unserer|euer|eure|euren|eurem|eurer|Ihr|Ihre|Ihren|Ihrem|Ihrer)\\b'),
  'a1-22-accusative-prepositions': rx('\\b(?:durch|für|gegen|ohne|um|bis|entlang)\\b'),
  'a1-23-accusative-pronouns': rx('\\b(?:mich|dich|ihn|uns|euch)\\b'),
  'a1-24-dative': rx('\\b(?:dem|einem|meinem|deinem|seinem|ihrem|unserem|eurem|Ihrem|diesem|jedem|keinem|welchem|den \\w+n)\\b'),
  'a1-25-dative-prepositions': rx('\\b(?:aus|bei|beim|mit|nach|seit|von|vom|zu|zum|zur|gegenüber|außer)\\b'),
  'a1-26-dative-verbs': rx('\\b(?:helfen|hilft|hilfst|geholfen|half|gefallen|gefällt|gefiel|danken|dankt|gedankt|gehören|gehört|gehörte|passen|passt|schmecken|schmeckt|fehlen|fehlt|fehlte|gratulieren|gratuliert|antworten|antwortet|glauben|glaubt|folgen|folgt|zuhören|hört zu|vertrauen|vertraut|gelingen|gelingt|gelungen|leidtun|tut leid|tut mir leid|begegnen|begegnet|widersprechen|zustimmen|stimmt zu|wehtun|tut weh|raten|rät)\\b'),
  'a1-27-dative-pronouns': rx('\\b(?:mir|dir|ihm|ihr|uns|euch|ihnen|Ihnen)\\b'),
  'a1-28-time-prepositions': rx('\\b(?:am (?:Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Wochenende|Morgen|Abend|Nachmittag|Vormittag|Anfang|Ende|\\d{1,2}\\.)|um \\d{1,2}(?:[.:]\\d{2})?(?: Uhr)?|im (?:Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember|Sommer|Winter|Frühling|Herbst|Moment|Jahr|Monat|Laufe)|seit (?:\\d|einem|einer|zwei|drei|vier|fünf|sechs|zehn|einigen|vielen|langem|gestern|letztem|letzter|Juli|Jahren|Monaten|Wochen|Tagen|Kurzem|Beginn|Anfang|meiner|seiner|ihrer|der|dem)|vor (?:\\d|einem|einer|zwei|drei|vier|fünf|einigen|vielen|kurzem|langer|Jahren|Monaten|Wochen|Tagen|der|dem)|nach (?:dem|der|einem|einer|\\d|zwei|drei|Beginn|Ende|Ablauf)|bis (?:zum|zur|\\d|Ende|Mitte|Anfang|morgen|heute|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Juni|Juli|August|Oktober|September|Dezember|November|Januar|Februar|März|April|Mai|spätestens)|ab (?:\\d|dem|sofort|morgen|Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag|Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember|heute|nächste|nächstem|nächster|Herbst|Sommer)|in (?:zwei|drei|vier|fünf|zehn|einer|einem|\\d+) (?:Minuten|Stunden|Tagen|Wochen|Monaten|Jahren|Woche|Stunde|Monat|Jahr)|zwischen \\d|von \\d{1,2}(?:[.:]\\d{2})? bis \\d|während (?:der|des|dem))\\b'),
  'a1-29-two-way-prepositions': rx('\\b(?:an|auf|hinter|in|neben|über|unter|vor|zwischen|im|ins|am|ans)\\b'),
  'a1-31-perfekt-haben': rx(`\\b(?:habe|hast|hat|haben|habt)\\b[^.!?;:\\n]{0,90}?\\b${PART}\\b(?!\\s+(?:werden|worden|wird|wurde))`),
  'a1-32-perfekt-sein': rx('\\b(?:bin|bist|ist|sind|seid)\\b[^.!?;:\\n]{0,90}?\\b(?:gegangen|gefahren|gekommen|geblieben|gewesen|passiert|gestiegen|aufgestanden|umgezogen|eingezogen|ausgezogen|aufgewacht|geworden|gelaufen|geflogen|gereist|gewandert|gestorben|gelandet|angekommen|abgefahren|eingeschlafen|aufgefallen|gelungen|gefallen|gesprungen|geschwommen|gewachsen|gerutscht|gezogen|gewandert|eingestiegen|ausgestiegen|gestartet|begegnet|geraten|verschwunden|aufgetreten|entstanden|zurückgekommen|weggegangen|hingefahren|mitgekommen|losgegangen|weitergefahren|zurückgefahren|vorbeigekommen|hingegangen)\\b'),
  'a1-33-war-hatte': rx('\\b(?:war|warst|waren|wart|hatte|hattest|hatten|hattet)\\b'),
  'a1-34-coordinating-conjunctions': rx('\\b(?:aber|denn|sondern|oder)\\b'),
  'a1-35-comparative-basics': rx('\\b(?:\\w+er als|so \\w+ wie|genauso \\w+ wie|mehr als|weniger als|besser|größer|kleiner|schneller|billiger|teurer|älter|jünger|länger|kürzer|höher|lieber|wichtiger|schöner|leichter|schwerer|früher als|später als|öfter)\\b'),
  'a2-01-prateritum-modals': rx('\\b(?:konnte|konntest|konnten|konntet|musste|musstest|mussten|musstet|wollte|wolltest|wollten|wolltet|durfte|durftest|durften|durftet|sollte|solltest|sollten|solltet|mochte|mochten)\\b'),
  'a2-02-prateritum-verbs': rx('\\b(?:ging|gingen|kam|kamen|sah|sahen|gab|gaben|fuhr|fuhren|nahm|nahmen|fand|fanden|sagte|sagten|machte|machten|stand|standen|lief|liefen|blieb|blieben|wusste|wussten|dachte|dachten|brachte|brachten|sprach|sprachen|schrieb|schrieben|las|lasen|hielt|hielten|rief|riefen|begann|begannen|verlor|verloren|bekam|bekamen|lag|lagen|saß|saßen|half|halfen|traf|trafen|fiel|fielen|stieg|stiegen|zog|zogen|schlief|schliefen|aß|aßen|trank|tranken|hieß|hießen|ließ|ließen|erklärte|erklärten|meinte|meinten|fragte|fragten|antwortete|antworteten|erzählte|erzählten|suchte|suchten|holte|holten|wohnte|wohnten|arbeitete|arbeiteten|lernte|lernten|spielte|spielten|kaufte|kauften|zeigte|zeigten|legte|legten|stellte|stellten|setzte|setzten|öffnete|öffneten|glaubte|glaubten|lebte|lebten|kannte|kannten|nannte|nannten|schien|schienen|entschied|entschieden|verstand|verstanden|bot|boten|gewann|gewannen|wurde|wurden|entstand|entstanden|gelang|flog|flogen|sank|sanken|wuchs|wuchsen|schloss|schlossen|erhielt|erhielten|vergaß|vergaßen|starb|starben|führte|führten|gehörte|gehörten|passierte|dauerte|dauerten|kostete|kosteten|klappte|funktionierte|interessierte|freute|ärgerte|fühlte|erreichte|besuchte|besuchten|verbrachte|verbrachten|unterrichtete|gründete|gründeten|ermittelte|lautete|betrug)\\b'),
  'a2-04-subordinate-clauses-weil-dass': rx('\\b(?:weil|dass)\\b'),
  'a2-05-wenn-ob-indirect-questions': rx('\\bob\\b|,\\s*(?:wann|wo|wie|was|wer|warum|welche\\w*|wohin|woher|wie viel\\w*|wie lange)\\b'),
  'a2-06-als-vs-wenn': rx('\\b(?:als|wenn|immer wenn|jedes Mal wenn)\\b'),
  'a2-10-comparative-superlative': rx('\\b(?:am \\w+sten|der \\w+ste|die \\w+ste|das \\w+ste|den \\w+sten|dem \\w+sten|\\w+er als|je \\w+er|besser|mehr|meisten|größte|größten|höchste|höchsten|beste|besten|schönste|schönsten|wichtigste|wichtigsten|liebste|liebsten|schnellste|billigste|günstigste|jüngste|älteste|erste|letzte)\\b'),
  'a2-11-reflexive-verbs': rx('\\bsich\\b|\\b(?:freue|freust|freut|freuen|ärgere|ärgert|ärgern|interessiere|interessiert|interessieren|erinnere|erinnert|erinnern|treffe|treffen|trifft|fühle|fühlt|fühlen|beeile|beeilt|beeilen|setze|setzt|setzen|kümmere|kümmert|kümmern|entschuldige|entschuldigt|entschuldigen|melde|meldet|melden|bewerbe|bewirbt|bewerben|anmelde|anmelden|konzentriere|konzentriert|unterhalte|unterhalten|verabschiede|verabschieden|vorstellen|stelle|stellt|entscheide|entscheidet|entscheiden|wasche|wäscht|ziehe|zieht|ziehen|lege|legt|legen|bedanke|bedankt|bedanken|beschwere|beschwert|beschweren|wundere|wundert|wundern|informiere|informiert|informieren|erhole|erholt|erholen|beschäftige|beschäftigt|beschäftigen|verlasse|verlässt|verlassen|gewöhne|gewöhnt|gewöhnen|vorbereite|bereite|bereitet|bereiten|anschauen|schaue|schaut|schauen|erkundige|erkundigt|verspäte|verspätet|langweile|langweilt|langweilen|amüsiere|amüsiert|streite|streitet|streiten|einigen|einige|einigt|wehre|wehrt|wehren|lohnt|lohnen|handelt|ändert|ändern|entwickelt|entwickeln|verändert|verändern|verbessert|verbessern|verschlechtert|erhöht|erhöhen|verdoppelt|anhören|höre|hört|hören|merke|merkt|merken|überlege|überlegt|überlegen|vorstelle|vorstellt|setzen|treffen) (?:mich|dich|uns|euch)\\b'),
  'a2-12-verbs-with-prepositions': vpRx,
  'a2-13-da-wo-compounds': rx('\\b(?:dar?(?:an|auf|aus|bei|für|gegen|in|mit|nach|über|um|unter|von|vor|zu|zwischen|durch|hinter|neben)|wor?(?:an|auf|aus|bei|für|gegen|in|mit|nach|über|um|unter|von|vor|zu|durch|hinter|neben))\\b', 'gi'),
  'a2-14-genitive': rx('\\b(?:des|eines|meines|deines|seines|ihres|unseres|eures|Ihres|dieses|jedes|keines|welches|solches|manches|alles) [A-ZÄÖÜ]\\w*(?:s|es|n|en)\\b|\\b[A-ZÄÖÜ]\\w+ (?:der|einer|meiner|deiner|seiner|ihrer|unserer|eurer|Ihrer|dieser|jeder|keiner|aller|solcher|mancher|vieler|beider) [A-ZÄÖÜ]\\w+\\b'),
  'a2-15-genitive-prepositions': rx('\\b(?:wegen|während|trotz|statt|anstatt)\\b'),
  'a2-17-position-verbs': rx('\\b(?:stehen|steht|stehst|stand|standen|gestanden|stellen|stellt|stellst|stellte|stellten|gestellt|liegen|liegt|liegst|lag|lagen|gelegen|legen|legt|legst|legte|legten|gelegt|sitzen|sitzt|saß|saßen|gesessen|setzen|setzt|setzte|setzten|gesetzt|hängen|hängt|hing|hingen|gehängt|gehangen|stecken|steckt|steckte|gesteckt)\\b'),
  'a2-18-directions-hin-her': rx('\\b(?:hin|her|hinein|heraus|hinaus|herein|hinauf|herauf|hinunter|herunter|hinüber|herüber|dorthin|hierher|dahin|woher|wohin|rein|raus|rauf|runter|rüber|hinkommen|hinkommt|hingehen|hingehe|hingeht|herkommen|herkommt|hinfahren|hinfahrt|hinfährt|vorbeikommen|vorbeikommt)\\b'),
  'a2-19-futur-1': rx('\\b(?:werde|wirst|wird|werden|werdet)\\b(?![^.!?;:\\n]{0,80}?\\b(?:ge\\w+(?:t|en)|\\w+iert)\\b)[^.!?;:\\n]{0,80}?\\b(?!ge)[a-zäöüß]{3,}en\\b(?=\\s*[.,!?;:]|\\s*$)', 'gm'),
  'a2-20-konjunktiv-2-polite': rx('\\b(?:könnten Sie|könntest du|könntet ihr|würden Sie|würdest du|würdet ihr|hätten Sie|hätte gern|hätte gerne|hätten gern|hätten gerne|hättest du|hättet ihr|ich hätte|wir hätten|wäre es möglich|wäre es|könnte ich|könnten wir|dürfte ich|dürften wir|würde ich gern|würde gern|würden gern|würde gerne|würden gerne|wären Sie so nett|wie wäre es|das wäre|es wäre|ich würde|wir würden|wäre schön|wäre toll|wäre super|wäre nett|wäre gut|könnte man|könnten|müssten|müssten wir|sollten wir|sollte man)\\b', 'gi'),
  'a2-21-zu-infinitive': rx('\\bzu [a-zäöüß]+en\\b|\\b[a-zäöüß]{2,}zu[a-zäöüß]{3,}en\\b'),
  'a2-22-um-zu-ohne-zu': rx('\\b(?:um|ohne|anstatt|statt)\\b[^.!?;:\\n]{0,70}?\\b(?:zu [a-zäöüß]+en|[a-zäöüß]{2,}zu[a-zäöüß]{3,}en)\\b'),
  'a2-23-relative-clauses-nom-acc': rx(',\\s*(?:der|die|das|den|welcher|welche|welches|welchen)\\b(?=[^,.!?;:\\n]{3,80}?\\b(?:\\w+(?:t|en|st|e)|ist|sind|hat|haben|war|waren|wird|werden|kann|können|muss|müssen|soll|sollen|will|wollen|darf|dürfen|möchte|möchten)[.,!?;:\\s])'),
  'a2-24-dieser-jeder-welcher': rx('\\b(?:dieser|diese|dieses|diesem|diesen|jeder|jede|jedes|jedem|jeden|welcher|welche|welches|welchem|welchen|mancher|manche|manches|manchen|solcher|solche|solches|solchen|alle|aller|allen|allem|alles|beide|beiden)\\b'),
  'a2-25-indefinite-pronouns': rx('\\b(?:man|jemand|jemanden|jemandem|niemand|niemanden|niemandem|etwas|nichts|alles|einige|einigen|mehrere|mehreren|viele|vielen|wenige|wenigen|irgendwo|irgendwann|irgendwie|irgendwas|irgendetwas|irgendjemand|irgendein\\w*|jeder|alle|beide|einer|eins|keiner|keins|welche|manche)\\b'),
  'a2-27-adverbial-connectors': rx('\\b(?:deshalb|deswegen|darum|daher|trotzdem|danach|außerdem|also|dennoch|sonst|allerdings|zuerst|schließlich|inzwischen|vorher|nachher|jedoch|stattdessen|dagegen|zwar|dann|zuletzt|anschließend|zunächst|außerdem|ebenfalls|immerhin|jedenfalls|zumindest|übrigens|andererseits|einerseits|hingegen|folglich|somit|nämlich)\\b'),
  'a2-28-subjunctions-obwohl-damit': rx('\\b(?:obwohl|damit)\\b'),
  'a2-29-modal-particles': rx('\\b(?:doch|mal|eben|halt|eigentlich|wohl|bloß|ruhig|überhaupt|sowieso|ja|denn|schon|einfach|nun mal|ziemlich|echt|total|ganz schön)\\b'),
  'a2-30-word-formation-compounds': rx('\\b[A-ZÄÖÜ][a-zäöüß]{12,}\\b|\\b[A-ZÄÖÜ][a-zäöüß]+-[A-ZÄÖÜ][a-zäöüß]+\\b'),
  'a2-32-ordinal-numbers-dates': rx('\\b\\d{1,2}\\. (?:Januar|Februar|März|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember|\\d{1,2}\\.)|\\b(?:erste|ersten|erster|ersterm|zweite|zweiten|dritte|dritten|vierte|vierten|fünfte|fünften|sechste|siebte|achte|neunte|zehnte|zwanzigste|dreißigste|letzte|letzten|nächste|nächsten)\\b|\\bam \\d{1,2}\\.'),
  'b1-01-plusquamperfekt': rx(`\\b(?:hatte|hatten|hattest|hattet|war|waren|warst|wart)\\b[^.!?;:\\n]{0,90}?\\b${PART}\\b`),
  'b1-02-temporal-clauses': rx('\\b(?:nachdem|bevor|seitdem|sobald|solange|während|bis|seit)\\b(?=[^,.!?;:\\n]{3,80}?\\b(?:\\w+(?:t|en|st|e)|ist|sind|hat|haben|war|waren|wird|werden|hatte|hatten|kann|können|muss|müssen)[.,!?;:\\s])'),
  'b1-03-modals-perfekt': rx('\\b(?:habe|hast|hat|haben|habt|hatte|hatten|hätte|hätten)\\b[^.!?;:\\n]{0,70}?\\b[a-zäöüß]+en (?:können|müssen|wollen|dürfen|sollen|lassen|mögen)\\b'),
  'b1-04-relative-clauses-dat-gen': rx(',\\s*(?:dem|denen|deren|dessen)\\b'),
  'b1-05-relative-clauses-prepositions': rx(',\\s*(?:mit|von|bei|in|an|auf|für|über|zu|aus|nach|durch|um|unter|vor|neben|zwischen|gegen|ohne) (?:dem|der|den|denen|die|das|deren|dessen)\\b|,\\s*(?:wo|was|wer|wohin|woher|womit|wofür|worüber|wovon|woran|worauf|wobei|wonach|wodurch|wozu)\\b(?=[^.!?]{3,80}?\\b(?:\\w+(?:t|en|st|e)|ist|sind|hat|haben|war|waren|wird|werden|kann|können|muss|müssen)[.,!?;:\\s])'),
  'b1-06-passive-present-past': rx(`\\b(?:wird|werden|wurde|wurden|werde|wirst|werdet|wurdest)\\b[^.!?;:\\n]{0,90}?\\b${PART}\\b(?!\\s+(?:haben|hat|sein))`),
  'b1-07-passive-modals-perfekt': rx(`\\b${PART} werden\\b|\\bworden\\b`),
  'b1-08-zustandspassiv-alternatives': rx('\\b(?:ist|sind|war|waren) (?:geöffnet|geschlossen|erlaubt|verboten|gestattet|untersagt|reserviert|besetzt|vorbereitet|erledigt|gesperrt|organisiert|geplant|eingeladen|vorgesehen|ausgebucht|informiert|fertig|ausverkauft|gelöst|verbunden|beschäftigt|verheiratet|überzeugt|interessiert|bedeckt|entschieden|begrenzt|gemeint|gefragt|genannt|gedacht|gemacht|bekannt|gebucht|bezahlt|versichert|angemeldet|abgeschlossen|geregelt|gesichert|erreichbar)\\b|\\b(?:lässt sich|lassen sich|ließ sich|ließen sich)\\b|\\b\\w{4,}bar\\b|\\b(?:ist|sind|war|waren) (?:zu|nicht zu|leicht zu|schwer zu) \\w+en\\b'),
  'b1-09-konjunktiv-2-irreal': rx('\\b(?:wäre|wärst|wären|wärt|hätte|hättest|hätten|hättet|würde|würdest|würden|würdet|könnte|könntest|könnten|könntet|müsste|müssten|dürfte|dürften|sollte|sollten|wüsste|wüssten|käme|kämen|ginge|gingen|gäbe|gäben|bräuchte|bräuchten|fände|fänden|bliebe|ließe|ließen|stünde|säße|läge|täte|täten|bekäme|bekämen|hielte|liefe)\\b'),
  'b1-10-konjunktiv-2-past': rx(`\\b(?:hätte|hättest|hätten|hättet|wäre|wärst|wären|wärt)\\b[^.!?;:\\n]{0,70}?\\b${PART}\\b`),
  'b1-11-als-ob': rx('\\bals (?:ob|wenn)\\b|\\btun, als\\b|\\btut, als\\b|\\bso, als\\b'),
  'b1-12-indirect-speech': rx('\\b(?:sei|seien|wolle|wollten|könne|müsse|solle|dürfe|gebe es|es gebe|man habe|man könne|man müsse|man solle|er habe|sie habe|er sei|sie sei|er werde|sie werde|er wolle|sie wolle|er könne|sie könne|laut \\w+|so die Studie|so der|so die|wie \\w+ sagte|sagte|meinte|erklärte|berichtete|betonte|teilte \\w+ mit|mitteilte|laut)\\b'),
  'b1-13-n-declension': rx('\\b(?:den|dem|des|einen|einem|eines|meinen|meinem|seinen|seinem|ihren|ihrem|unseren|unserem|Ihren|Ihrem|diesen|diesem|jeden|jedem|keinen|keinem) (?:Kollegen|Kunden|Studenten|Jungen|Herrn|Nachbarn|Patienten|Touristen|Polizisten|Praktikanten|Experten|Journalisten|Lieferanten|Zeugen|Bauern|Namen|Menschen|Präsidenten|Assistenten|Kandidaten|Absolventen|Biologen|Psychologen|Pädagogen|Soldaten|Elefanten|Automaten|Planeten|Demonstranten|Produzenten|Musikanten|Dirigenten|Pianisten|Spezialisten|Optimisten|Pessimisten|Realisten|Idealisten|Artisten|Chefredakteuren|Diplomaten|Fotografen|Architekten|Franzosen|Russen|Chinesen|Griechen|Türken|Briten|Schweden|Dänen|Finnen|Ungarn|Polen|Bulgaren|Kroaten|Slowaken|Tschechen|Rumänen|Serben|Irren|Bären|Löwen|Hasen|Affen|Raben|Ochsen|Boten|Erben|Buben|Burschen|Fürsten|Prinzen|Grafen|Helden|Riesen|Christen|Katholiken|Protestanten|Juden|Mormonen|Kollegen)\\b(?! \\w)'),
  'b1-14-adjectives-as-nouns': rx('\\b(?:der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines|etwas|nichts|viel|wenig|alles|viele|einige|mehrere|manche|alle|keine|wenige|jeder|jede|jedes|jedem|jeden|unsere|unseren|ihre|ihren|meine|meinen|seine|seinen|Ihre|Ihren|diese|diesen|diesem|solche|andere|anderen) (?:Deutsche|Deutschen|Deutscher|Erwachsene|Erwachsenen|Erwachsener|Jugendliche|Jugendlichen|Jugendlicher|Bekannte|Bekannten|Bekannter|Verwandte|Verwandten|Verwandter|Angestellte|Angestellten|Angestellter|Fremde|Fremden|Fremder|Reisende|Reisenden|Reisender|Teilnehmende|Teilnehmenden|Mitarbeitende|Mitarbeitenden|Lernende|Lernenden|Studierende|Studierenden|Interessierte|Interessierten|Neue|Neues|Neuen|Gute|Gutes|Guten|Wichtige|Wichtiges|Wichtigen|Schöne|Schönes|Schönen|Interessante|Interessantes|Interessanten|Besondere|Besonderes|Besonderen|Beste|Bestes|Besten|Einzelne|Einzelnen|Einzelner|Berufstätige|Berufstätigen|Berufstätiger|Alte|Alten|Alter|Kranke|Kranken|Kranker|Behinderte|Behinderten|Behinderter|Arbeitslose|Arbeitslosen|Arbeitsloser|Verliebte|Verliebten|Vorgesetzte|Vorgesetzten|Abgeordnete|Abgeordneten|Beamte|Beamten|Beamter|Auszubildende|Auszubildenden|Erste|Ersten|Letzte|Letzten|Ganze|Ganzen|Folgende|Folgendes|Folgenden|Ähnliches|Richtige|Richtiges|Falsche|Falsches|Schlimmes|Schlimmste|Positive|Positives|Negative|Negatives|Kleine|Kleinen|Kleines|Große|Großen|Großes|Beteiligte|Beteiligten|Betroffene|Betroffenen|Anwesende|Anwesenden|Ehrenamtliche|Ehrenamtlichen|Freiwillige|Freiwilligen|Erwachsene|Senioren|Angehörige|Angehörigen|Selbstständige|Selbstständigen|Vorsitzende|Vorsitzenden|Geschäftsführende|Verantwortliche|Verantwortlichen)\\b'),
  'b1-17-two-part-conjunctions': rx('\\b(?:entweder|sowohl|weder|nicht nur|zwar|einerseits|je (?:\\w+er|mehr|weniger|länger|öfter)|umso|desto|als auch|sondern auch|andererseits)\\b'),
  'b1-18-cause-consequence-concession': rx('\\b(?:sodass|so dass|obwohl|trotzdem|dennoch|deshalb|deswegen|daher|darum|folglich|infolgedessen|nämlich|da\\b(?=[^,.!?;:\\n]{3,80}?\\b(?:\\w+(?:t|en|st|e)|ist|sind|hat|haben|war|waren|wird|werden|kann|können|muss|müssen)[.,!?;:\\s])|auch wenn|obgleich|wenngleich|allerdings|jedoch|aus diesem Grund|aufgrund|wegen)\\b'),
  'b1-19-purpose-manner': rx('\\b(?:damit|indem|dadurch,? dass|um [^.!?;:\\n]{0,70}?zu \\w+en|um [^.!?;:\\n]{0,70}?\\w+zu\\w+en|mithilfe|mit Hilfe|dazu)\\b'),
  'b1-20-conditions': rx('\\b(?:falls|sofern|es sei denn|vorausgesetzt|wenn|im Falle|bei Bedarf|unter der Bedingung|andernfalls|sonst)\\b'),
  'b1-21-lassen': rx('\\b(?:lasse|lässt|lassen|ließ|ließen|gelassen|lasst|lass|ließe)\\b'),
  'b1-22-brauchen-zu-scheinen': rx('\\b(?:brauch\\w* (?:nicht|nur|kein\\w*|keine\\w*)[^.!?;:\\n]{0,40}?zu \\w+en|schein\\w* [^.!?;:\\n]{0,40}?zu \\w+en|scheint|scheinen|(?:ist|sind|war|waren) (?:nicht |leicht |schwer |kaum |noch |jederzeit |direkt |gut |sofort |ab sofort |jetzt |nur |auch )?(?:zu|auf \\w+ zu) \\w+en|(?:hat|haben|habe|hatte|hatten) (?:noch |nichts |viel |wenig |einiges |immer |nicht mehr )?zu \\w+en|(?:ist|sind) \\w+ zu (?:beachten|benutzen|achten|erreichen|verwenden|melden|finden|sehen|hören|verstehen|erkennen|bezahlen|zahlen|schaffen|machen|lösen|erwarten|empfehlen|vermeiden|bedienen|ersetzen))\\b'),
  'b1-23-werden': rx('\\b(?:werde|wirst|wird|werden|werdet|wurde|wurdest|wurden|wurdet|geworden|worden|würde|würden|würdest)\\b'),
  'b1-24-futur-2-probability': rx(`\\b(?:wird|werden|wirst) [^.!?;:\\n]{0,60}?${PART} (?:haben|sein)\\b|\\b(?:wahrscheinlich|vermutlich|wohl|sicherlich|bestimmt|vielleicht|möglicherweise|offenbar|anscheinend|eventuell|voraussichtlich|sicher)\\b`),
  'b1-25-noun-verb-combinations': rx('\\b(?:eine (?:Entscheidung|Frage|Antwort|Rolle|Pause|Reise|Prüfung|Verabredung|Bestellung|Bewerbung|Ausbildung|Wahl|Reihenfolge|Lösung|Verbindung) (?:treffen|trifft|getroffen|stellen|stellt|gestellt|geben|gibt|gegeben|spielen|spielt|gespielt|machen|macht|gemacht|ablegen|abgelegt|aufgeben|aufgegeben|schreiben|haben|hat|abschließen|abgeschlossen|finden|gefunden)|(?:in|zur) (?:Anspruch|Verfügung|Frage|Kraft|Ordnung|Gang|Bewegung|Erfüllung|Betrieb|Schwung) (?:nehmen|genommen|nimmt|stellen|gestellt|steht|stehen|kommen|kommt|gekommen|setzen|gesetzt|treten|tritt|getreten|geraten|gerät|bringen|gebracht|gehen|gegangen)|zur Verfügung|in Anspruch|Rücksicht nehmen|Rücksicht|Bescheid (?:geben|gegeben|sagen|gesagt|wissen|weiß)|Abschied nehmen|Abschied|Sport treiben|Sport getrieben|einen Termin (?:vereinbaren|vereinbart|ausmachen|ausgemacht|absagen|abgesagt|verschieben|verschoben)|Kontakt (?:aufnehmen|aufgenommen|haben|halten|hatten)|zum Ausdruck|Hilfe leisten|einen Beitrag (?:leisten|geleistet)|Platz nehmen|Angst haben|Angst hatte|Lust haben|Lust hat|Lust hast|Lust habe|Zeit haben|Spaß machen|Spaß macht|Spaß gemacht|Recht haben|Recht hat|Recht hast|Recht habe|eine Rolle (?:spielen|spielt|gespielt)|einen Vorschlag (?:machen|macht|gemacht)|Vorschlag machen|Fragen stellen|Fragen gestellt|eine Frage stellen|zu Ende|Gebrauch machen|Einfluss (?:haben|hat|nehmen|genommen)|einen Einfluss|Erfahrungen (?:machen|sammeln|gemacht|gesammelt)|Erfahrung (?:machen|sammeln|gemacht|gesammelt)|zur Kenntnis|in Betracht|zum Einsatz|zur Sprache|unter Beweis|Mühe geben|Mühe gegeben|sich Mühe|Sorgen machen|Sorgen gemacht|Gedanken machen|Gedanken gemacht|Druck machen|Druck ausüben|Hoffnung haben|Interesse haben|Interesse an|Verständnis haben|Vertrauen haben|Wert legen|Wert gelegt|Stellung nehmen|Rücksicht nehmen|Hilfe brauchen|Schluss machen|einen Fehler machen|Fehler gemacht|Vorbereitungen treffen|Maßnahmen ergreifen|Unterricht geben|eine Pause machen|Pause machen|in Kauf nehmen|zur Seite stehen|außer Frage|Mut machen|Entscheidungen treffen|Entscheidung getroffen)\\b'),
  'b1-26-genitive-prepositions-depth': rx('\\b(?:innerhalb|außerhalb|aufgrund|mithilfe|anlässlich|dank|laut|anhand|infolge|angesichts|bezüglich|hinsichtlich|oberhalb|unterhalb|jenseits|diesseits|einschließlich|ausschließlich|zugunsten|seitens|mangels|zwecks|anstelle|statt)\\b'),
  'b1-27-verb-preposition-b1': vpRx,
  'b1-28-adjective-noun-prepositions': rx('\\b(?:stolz auf|zufrieden mit|unzufrieden mit|interessiert an|begeistert von|verantwortlich für|abhängig von|unabhängig von|bekannt für|beliebt bei|froh über|glücklich über|traurig über|überzeugt von|verliebt in|neugierig auf|gespannt auf|dankbar für|böse auf|wütend auf|reich an|arm an|fertig mit|einverstanden mit|zuständig für|typisch für|wichtig für|gut in|schlecht in|verrückt nach|Angst vor|Lust auf|Interesse an|Zeit für|Grund für|Freude an|Spaß an|Frage nach|Antwort auf|Einfluss auf|Verständnis für|Bitte um|Teilnahme an|Erinnerung an|Sorge um|Vertrauen in|Kritik an|Entscheidung für|Vorbereitung auf|geeignet für|offen für|bereit für|bereit zu|nützlich für|schädlich für|gefährlich für|verheiratet mit|befreundet mit|verwandt mit|beschäftigt mit|beeindruckt von|enttäuscht von|müde von|begeistert über|erstaunt über|überrascht über|verärgert über|sauer auf|neidisch auf|eifersüchtig auf|stolz darauf|Chance auf|Hoffnung auf|Recht auf|Anspruch auf|Wunsch nach|Suche nach|Bedarf an|Mangel an|Zweifel an|Schuld an|Nachfrage nach|Reaktion auf|Beitrag zu|Lust zu|Grund zu|Gelegenheit zu|Möglichkeit zu|Zeit zu|dankbar dafür|zuständig dafür|verantwortlich dafür|Angst davor|zufrieden damit|einverstanden damit|interessiert daran|stolz darauf|gespannt darauf|Lust darauf|Interesse daran)\\b'),
  'b1-29-prefixes': rx('\\b(?:un(?:möglich|glaublich|bedingt|bekannt|gesund|freundlich|sicher|wichtig|pünktlich|zufrieden|abhängig|interessant|ordentlich|sinn\\w*|klar|fair|ruhig|höflich|ehrlich|geduldig|erwartet|gewöhnlich|wahrscheinlich|nötig|verständlich|angenehm|bequem|beliebt|erlaubt|heimlich|praktisch|realistisch|vorstellbar|schön|sympathisch|zuverlässig|regelmäßig|problematisch|kompliziert|verbindlich|entgeltlich|eingeschränkt|getrennt|verzüglich|terschiedlich|terwegs|glück\\w*|fall\\w*|wetter\\w*|recht\\w*|ordnung|sinn|ruhe|menge|zahl)|ent(?:schuld\\w*|scheid\\w*|deck\\w*|wickl\\w*|täusch\\w*|spann\\w*|fern\\w*|lass\\w*|steh\\w*|sorg\\w*|halt\\w*|nehm\\w*|nomm\\w*|komm\\w*|fallen|fällt|gegen\\w*|wurf\\w*|schlie\\w*|schlo\\w*|schuldig\\w*|spricht|sprech\\w*|sprach\\w*)|zer(?:stör\\w*|brech\\w*|broch\\w*|reiß\\w*|riss\\w*|schneid\\w*|legt|legen|fallen|fällt|stört|stören)|miss(?:verst\\w*|erfolg\\w*|trau\\w*|brauch\\w*|fall\\w*|glück\\w*|achte\\w*|lung\\w*|verständnis)|ver(?:gess\\w*|gaß|steh\\w*|stand\\w*|kauf\\w*|lier\\w*|lor\\w*|pass\\w*|schieb\\w*|schob\\w*|änder\\w*|bess\\w*|such\\w*|dien\\w*|bring\\w*|brach\\w*|lass\\w*|misch\\w*|schwind\\w*|schwand\\w*|schwund\\w*|letz\\w*|bot\\w*|biet\\w*|meid\\w*|zicht\\w*|reis\\w*|einbar\\w*|sprech\\w*|sproch\\w*|sprach\\w*|antwort\\w*|wend\\w*|wand\\w*|bind\\w*|bund\\w*|bund\\w*|anstalt\\w*|trag\\w*|trug\\w*|lang\\w*|handel\\w*|teil\\w*|sorg\\w*|sicher\\w*|zeih\\w*|zieh\\w*|spät\\w*|folg\\w*|schenk\\w*|streck\\w*|teu\\w*|walt\\w*|wirklich\\w*|zweif\\w*|gleich\\w*|arbeit\\w*|anlass\\w*|hält\\w*|halt\\w*|mut\\w*|lauf\\w*|lief\\w*|bringen|brauch\\w*|ändern|liebt|liebte|heirat\\w*|fehl\\w*|letz\\w*|mieten|mietet|mietete|kehr\\w*|früh\\w*|arm\\w*|stärk\\w*|ringer\\w*|größer\\w*|kleiner\\w*|doppel\\w*|billig\\w*|bessern|schlimm\\w*|schlecht\\w*)|be(?:komm\\w*|kam\\w*|such\\w*|zahl\\w*|antwort\\w*|nutz\\w*|schreib\\w*|schrieb\\w*|stell\\w*|arbeit\\w*|sichtig\\w*|rat\\w*|riet\\w*|reit\\w*|end\\w*|stimm\\w*|schäftig\\w*|obacht\\w*|handel\\w*|ginn\\w*|gann\\w*|gonn\\w*|halt\\w*|hielt\\w*|kannt\\w*|merk\\w*|nötig\\w*|rühr\\w*|sitz\\w*|saß\\w*|sess\\w*|wohn\\w*|grüß\\w*|dank\\w*|dien\\w*|ding\\w*|eil\\w*|fürcht\\w*|gleit\\w*|grenz\\w*|haupt\\w*|hind\\w*|klag\\w*|kämpf\\w*|leg\\w*|lieb\\w*|lohn\\w*|lust\\w*|mal\\w*|mess\\w*|mühe\\w*|müh\\w*|nachrichtig\\w*|nehm\\w*|nahm\\w*|nomm\\w*|obacht\\w*|rechn\\w*|reich\\w*|richt\\w*|ruf\\w*|rief\\w*|ruhig\\w*|schädig\\w*|schließ\\w*|schloss\\w*|schränk\\w*|schütz\\w*|schwer\\w*|seitig\\w*|sorg\\w*|sprech\\w*|sprach\\w*|sproch\\w*|stätig\\w*|steh\\w*|stand\\w*|stehl\\w*|stahl\\w*|stohl\\w*|straf\\w*|streit\\w*|teilig\\w*|tracht\\w*|treff\\w*|traf\\w*|troff\\w*|treib\\w*|trieb\\w*|trüg\\w*|tret\\w*|trat\\w*|urteil\\w*|wahr\\w*|weg\\w*|weis\\w*|wies\\w*|werb\\w*|warb\\w*|worb\\w*|wert\\w*|wirk\\w*|wundern\\w*|zeichn\\w*|zieh\\w*|zog\\w*|zog\\w*|zweck\\w*|zweifel\\w*)|er(?:reich\\w*|klär\\w*|zähl\\w*|fahr\\w*|fuhr\\w*|find\\w*|fand\\w*|fund\\w*|halt\\w*|hielt\\w*|hol\\w*|innr\\w*|inner\\w*|kenn\\w*|kannt\\w*|laub\\w*|ledig\\w*|leb\\w*|möglich\\w*|öffn\\w*|scheid\\w*|schien\\w*|setz\\w*|stell\\w*|wart\\w*|warb\\w*|werb\\w*|worb\\w*|zieh\\w*|zog\\w*|zog\\w*|arbeit\\w*|wachsen\\w*|wachs\\w*|wuchs\\w*|wisch\\w*|lern\\w*|füll\\w*|frisch\\w*|gänz\\w*|geb\\w*|gab\\w*|greif\\w*|griff\\w*|höh\\w*|kund\\w*|krank\\w*|leid\\w*|litt\\w*|ledig\\w*|leichter\\w*|mahn\\w*|nähr\\w*|neu\\w*|probt\\w*|prob\\w*|rat\\w*|riet\\w*|richt\\w*|schaff\\w*|schein\\w*|schreck\\w*|schrak\\w*|schrock\\w*|spar\\w*|statt\\w*|stick\\w*|teil\\w*|tönt\\w*|trag\\w*|trug\\w*|trink\\w*|trank\\w*|trunk\\w*|wähn\\w*|wart\\w*|weis\\w*|wies\\w*|weiter\\w*|wirtschaft\\w*|wisch\\w*|zeug\\w*|zieh\\w*|zog\\w*|zwing\\w*|zwang\\w*|zwung\\w*))\\b', 'gi'),
  'b1-30-suffixes': rx('\\b[A-ZÄÖÜ]\\w+(?:heit|keit|ung|schaft|nis|tum|ling)(?:en|s|es|e)?\\b|\\b\\w{3,}(?:bar|los|haft|sam)(?:e|en|em|er|es)?\\b'),
  'b1-31-register-formal-informal': rx('\\b(?:Sehr geehrte\\w*|Mit freundlichen Grüßen|Mit freundlichem Gruß|Liebe Grüße|Viele Grüße|Herzliche Grüße|Liebe[rs]? [A-ZÄÖÜ]\\w+,|Ich würde mich freuen|Vielen Dank im Voraus|Ich bitte Sie|Könnten Sie|Bitte teilen Sie mir|Ich möchte mich|Es tut mir leid|Leider kann ich|Leider muss ich|Hiermit|Bezug nehmend|Ich wäre Ihnen|Für Rückfragen|Ich freue mich auf Ihre Antwort|Mit besten Grüßen|Beste Grüße|Bis bald|Bis dann|Alles Liebe|Alles Gute|Hallo|Hi|Hey|Tschüs|Tschau|Mach.s gut|Schöne Grüße|Ihr[e]? [A-ZÄÖÜ]\\w+|Betreff|Anrede)\\b'),
  'b1-32-opinions-speaking': rx('\\b(?:Ich finde|ich finde|Ich meine|ich meine|Meiner Meinung nach|meiner Meinung nach|Ich bin der Meinung|Ich glaube|ich glaube|Ich denke|ich denke|Einerseits|Andererseits|einerseits|andererseits|Ich bin dafür|Ich bin dagegen|dafür|dagegen|Da stimme ich|Das stimmt|Das sehe ich anders|Im Gegenteil|stimme ich|zu Recht|Mein Fazit|Zusammenfassend|Ein Vorteil|Ein Nachteil|Vorteil\\w*|Nachteil\\w*|Dafür spricht|Dagegen spricht|Ich bin überzeugt|Ich halte|Für mich ist|Meiner Ansicht nach|Es ist wichtig|Ich bin sicher|Ich bin mir sicher|Das Problem ist|Außerdem|Zum Beispiel|zum Beispiel|Ein Beispiel|Erstens|Zweitens|Drittens|Zum Schluss|Abschließend|Ich schlage vor|Wie wäre es|Was hältst du|Was halten Sie|Ich bin nicht sicher|Das kann sein|Das mag sein|Ich sehe das|Ich bin anderer Meinung|Da bin ich anderer Meinung|Du hast recht|Sie haben recht|Das ist richtig|Das ist falsch|Blödsinn|Unsinn|Quatsch)\\b'),
};

// topics without a usable regex: foundational or text-type topics, handled in the report text
const NOT_DETECTABLE = {
  'a1-01-pronunciation': 'foundation, not an exam item',
  'a1-05-present-tense-regular': 'present in every text',
  'a1-06-verb-second': 'present in every text',
  'a1-10-plural': 'present in every text',
  'a1-11-nominative': 'present in every text',
  'a1-30-word-order-midfield': 'structural, not countable',
  'a1-36-writing-short-messages': 'text type; see writing tasks',
  'a2-03-perfekt-vs-prateritum': 'union of a1-31/32 and a2-02',
  'a2-07-adjective-endings-definite': 'adjective + noun after definite article (counted separately)',
  'a2-08-adjective-endings-indefinite': 'adjective + noun after indefinite article (counted separately)',
  'a2-09-adjective-endings-no-article': 'adjective + noun without article (counted separately)',
  'a2-16-two-way-prepositions-depth': 'same forms as a1-29',
  'a2-26-pronoun-order-midfield': 'structural, not countable',
  'a2-31-reading-writing-email': 'text type; see writing tasks',
  'b1-15-participles-as-adjectives': 'participle + noun (counted separately)',
  'b1-16-adjective-declension-review': 'sum of adjective + noun counts',
};

const counts = {}; // topic -> set -> n
for (const t of topicMeta.keys()) counts[t] = {};
for (const s of SETS) {
  for (const [t, re] of Object.entries(detectors)) {
    re.lastIndex = 0;
    counts[t][s.id] = (s.body.match(re) || []).length;
  }
  const adj = adjectiveCounts(s.body);
  counts['a2-07-adjective-endings-definite'][s.id] = adj.def;
  counts['a2-08-adjective-endings-indefinite'][s.id] = adj.indef;
  counts['a2-09-adjective-endings-no-article'][s.id] = adj.none;
  counts['b1-15-participles-as-adjectives'][s.id] = adj.participle;
  counts['b1-16-adjective-declension-review'][s.id] = adj.def + adj.indef + adj.none;
  counts['a2-16-two-way-prepositions-depth'][s.id] = counts['a1-29-two-way-prepositions'][s.id];
  counts['a2-03-perfekt-vs-prateritum'][s.id] = Math.min(counts['a1-31-perfekt-haben'][s.id] + counts['a1-32-perfekt-sein'][s.id], counts['a2-02-prateritum-verbs'][s.id] + counts['a2-01-prateritum-modals'][s.id]);
}

/* ------------------------------------------------------------------ */
/* 3. explicitly tested grammar: cloze items mapped to topics          */
/* ------------------------------------------------------------------ */
// telc Sprachbausteine Teil 1 (grammar), Teil 2 (lexis), telc A2·B1 Sprachbausteine, DTZ Lesen Teil 5: every gap mapped to the course topic it tests.
const TESTED = {
  'telc-1': { 21: 'a1-34-coordinating-conjunctions', 22: 'a1-25-dative-prepositions', 23: 'a1-32-perfekt-sein', 24: 'a2-09-adjective-endings-no-article', 25: 'a2-27-adverbial-connectors', 26: 'a1-28-time-prepositions', 27: 'a1-31-perfekt-haben', 28: 'b1-04-relative-clauses-dat-gen', 29: 'a1-21-possessive-articles', 30: 'a1-27-dative-pronouns', 31: 'a2-12-verbs-with-prepositions', 32: 'a2-20-konjunktiv-2-polite', 33: 'a2-29-modal-particles', 34: 'b1-18-cause-consequence-concession', 35: 'b1-20-conditions', 36: 'a2-20-konjunktiv-2-polite', 37: 'a2-27-adverbial-connectors', 38: 'a2-27-adverbial-connectors', 39: 'b1-19-purpose-manner', 40: 'b1-28-adjective-noun-prepositions' },
  'telc-hu': { 21: 'a1-22-accusative-prepositions', 22: 'a1-25-dative-prepositions', 23: 'a2-11-reflexive-verbs', 24: 'b1-15-participles-as-adjectives', 25: 'a2-28-subjunctions-obwohl-damit', 26: 'a1-28-time-prepositions', 27: 'b1-09-konjunktiv-2-irreal', 28: 'b1-10-konjunktiv-2-past', 29: 'a2-13-da-wo-compounds', 30: 'a1-31-perfekt-haben', 31: 'a2-01-prateritum-modals', 32: 'a2-25-indefinite-pronouns', 33: 'a2-23-relative-clauses-nom-acc', 34: 'a2-20-konjunktiv-2-polite', 35: 'a2-29-modal-particles', 36: 'a2-29-modal-particles', 37: 'a2-25-indefinite-pronouns', 38: 'a2-13-da-wo-compounds', 39: 'b1-18-cause-consequence-concession', 40: 'a2-27-adverbial-connectors' },
  'telc-schule': { 21: 'a1-31-perfekt-haben', 22: 'a1-21-possessive-articles', 23: 'b1-28-adjective-noun-prepositions', 24: 'a1-29-two-way-prepositions', 25: 'a2-04-subordinate-clauses-weil-dass', 26: 'a1-31-perfekt-haben', 27: 'a2-22-um-zu-ohne-zu', 28: 'a2-25-indefinite-pronouns', 29: 'a1-18-imperative', 30: 'a2-05-wenn-ob-indirect-questions', 31: 'a2-27-adverbial-connectors', 32: 'a1-28-time-prepositions', 33: 'a2-25-indefinite-pronouns', 34: 'b1-04-relative-clauses-dat-gen', 35: 'a2-20-konjunktiv-2-polite', 36: 'a2-15-genitive-prepositions', 37: 'a2-05-wenn-ob-indirect-questions', 38: 'a2-05-wenn-ob-indirect-questions', 39: 'b1-19-purpose-manner', 40: 'a2-22-um-zu-ohne-zu' },
  'telc-a2b1': { 19: 'a2-04-subordinate-clauses-weil-dass', 20: 'a2-12-verbs-with-prepositions', 21: 'a1-28-time-prepositions', 22: 'a2-11-reflexive-verbs', 23: 'a2-06-als-vs-wenn', 24: 'a2-19-futur-1', 25: 'b1-31-register-formal-informal', 26: 'a1-16-separable-verbs', 27: 'a1-17-modal-verbs', 28: 'a2-13-da-wo-compounds' },
  dtz: { 40: 'b1-31-register-formal-informal', 41: 'a1-28-time-prepositions', 42: 'a1-17-modal-verbs', 43: 'a1-13-negation', 44: 'a1-34-coordinating-conjunctions', 45: 'a1-23-accusative-pronouns' },
};
const testedCount = {};
let testedTotal = 0;
for (const items of Object.values(TESTED)) for (const t of Object.values(items)) {
  testedCount[t] = (testedCount[t] ?? 0) + 1;
  testedTotal++;
}

/* ------------------------------------------------------------------ */
/* 4. domains from the catalog                                         */
/* ------------------------------------------------------------------ */
const catalogs = {};
for (const f of ['goethe.json', 'oesd.json', 'telc-dtz.json']) catalogs[f] = JSON.parse(readFileSync(join(catalogDir, f), 'utf8'));
for (const s of SETS) s.cat = catalogs[s.catalog[0]][s.catalog[1]];
const RECEPTIVE = new Set(['lesen', 'hoeren', 'sprachbausteine']);
const domainSets = {};
const domainParts = {};
let receptiveParts = 0;
for (const s of SETS) {
  const seen = new Set();
  for (const p of s.cat.parts) {
    if (!RECEPTIVE.has(p.module)) continue;
    receptiveParts++;
    domainParts[p.domain] = (domainParts[p.domain] ?? 0) + 1;
    seen.add(p.domain);
  }
  for (const d of seen) domainSets[d] = (domainSets[d] ?? 0) + 1;
}
const productiveThemes = SETS.flatMap((s) => [...s.cat.writing_tasks.map((t) => ({ set: s.name, kind: 'writing', ...t })), ...s.cat.speaking_tasks.map((t) => ({ set: s.name, kind: 'speaking', ...t }))]);

/* ------------------------------------------------------------------ */
/* 5. vocabulary coverage                                              */
/* ------------------------------------------------------------------ */
const lower = (s) => s.toLowerCase();
const lexicon = new Set();
const addForms = (w) => {
  const de = w.de.replace(/^(sich|der|die|das) /, '').replace(/\s*\(.*\)$/, '');
  const base = lower(de);
  lexicon.add(base);
  if (w.plural) lexicon.add(lower(w.plural.replace(/^(die|der|das) /, '')));
  if (w.pos === 'noun') {
    lexicon.add(base + 's');
    lexicon.add(base + 'es');
    lexicon.add(base + 'n');
    lexicon.add(base + 'en');
  }
  if (w.pos === 'verb') {
    const inf = base.replace(/^(sich )/, '');
    const stem = inf.replace(/(en|n)$/, '');
    for (const e of ['e', 'st', 't', 'en', 'et', 'est', 'te', 'ten', 'test', 'tet']) lexicon.add(stem + e);
    lexicon.add('ge' + stem + 't');
    if (w.forms) {
      lexicon.add(lower(w.forms.er).replace(/ .*$/, ''));
      lexicon.add(lower(w.forms.prat).replace(/ .*$/, ''));
      for (const p of w.forms.prat.split(/\s+/)) lexicon.add(lower(p));
      for (const p of w.forms.perfekt.split(/\s+/)) lexicon.add(lower(p));
      const pr = lower(w.forms.prat).replace(/ .*$/, '');
      lexicon.add(pr + 'n');
      lexicon.add(pr + 'en');
      lexicon.add(pr + 'st');
      lexicon.add(pr + 't');
    }
    // separable: "anrufen" -> "rufe ... an": add stem without prefix forms
    const m = /^(ab|an|auf|aus|bei|ein|mit|nach|vor|zu|zurück|weg|los|fest|her|hin|statt|teil|um|weiter|zusammen|fern|frei|hoch|kennen|spazieren)(.+)$/.exec(inf);
    if (m) {
      const st = m[2].replace(/(en|n)$/, '');
      for (const e of ['e', 'st', 't', 'en', 'te', 'ten']) lexicon.add(st + e);
    }
  }
  if (w.pos === 'adj' || w.pos === 'adv') {
    for (const e of ['e', 'en', 'em', 'er', 'es', 'ere', 'eren', 'erem', 'erer', 'eres', 'ste', 'sten', 'stem', 'ster', 'stes', 'er', 'st']) lexicon.add(base + e);
  }
  for (const part of base.split(/[\s/,-]+/)) if (part.length > 2) lexicon.add(part);
};
for (const w of courseWords) addForms(w);

const FUNCTION = new Set(
  `der die das dem den des ein eine einen einem einer eines kein keine keinen keinem keiner keines und oder aber denn sondern ich du er sie es wir ihr mich dich ihn uns euch mir dir ihm ihnen
  mein meine meinen meinem meiner meines dein deine deinen deinem deiner deines sein seine seinen seinem seiner seines ihre ihren ihrem ihrer ihres unser unsere unseren unserem unserer unseres euer eure euren eurem eurer
  ist sind war waren bin bist seid wäre wären wärst habe hast hat haben habt hatte hatten hättest hätte hätten wird werden wirst werdet wurde wurden würde würden würdest worden geworden
  kann kannst können könnt könnte könnten muss musst müssen müsst müsste müssten soll sollst sollen sollt sollte sollten will willst wollen wollt wollte wollten darf darfst dürfen dürft dürfte dürften möchte möchtest möchten mag magst mögen mochte
  in an auf aus bei mit nach seit von zu zum zur im am ins ans beim vom für durch gegen ohne um über unter vor zwischen hinter neben bis ab außer gegenüber wegen während trotz statt innerhalb außerhalb entlang laut dank
  dass weil wenn ob als wie wo was wer wen wem wann warum wieso weshalb wozu woher wohin welche welcher welches welchen welchem dieser diese dieses diesen diesem jeder jede jedes jeden jedem alle aller allen allem alles man jemand niemand etwas nichts
  einige einigen mehrere viele vielen viel wenige wenigen wenig mehr weniger meisten beide beiden andere anderen anderer anderes ander solche solchen manche manchen jene selbst selber
  noch schon auch nur sehr so dann da hier dort heute morgen gestern jetzt nun immer nie oft manchmal meistens wieder mal doch eben ja nein halt zwar also deshalb deswegen darum daher trotzdem außerdem dennoch jedoch allerdings sonst dazu dabei damit dafür dagegen darauf darüber davon daran darin darunter davor danach dadurch dazu wofür wovon woran worauf worüber womit wobei
  gern gerne lieber ganz gar erst eigentlich einfach wirklich genau natürlich vielleicht sicher bestimmt leider gleich sofort bald später früher jeweils ebenfalls besonders ziemlich etwa circa ca fast kaum bereits inzwischen zuerst zuletzt schließlich endlich übrigens eher ebenso sowie sowohl weder entweder nicht
  bitte danke hallo tschüs ok okay eben na ach oh hm mhm ähm äh ja nein obwohl bevor nachdem sobald solange falls indem sodass seitdem
  sich tun tut tat getan machen macht gemacht gehen geht gegangen kommen kommt gekommen sagen sagt gesagt geben gibt gegeben sehen sieht gesehen lassen lässt wissen weiß wissen
  mal möglich lang lange gut gute guten gutes besser beste besten groß große großen großer kleine kleinen neu neue neuen neuer neues alt alte alten erste ersten erster letzte letzten nächste nächsten nächster
  herr herrn frau frau damen herren name vorname nachname nummer nr tel fax str`
    .split(/\s+/)
    .filter(Boolean),
);
// exam meta-language that no learner needs as vocabulary
const META = /^(?:zertifikat|zertifikats|antwortbogen|antwortbögen|teilnehmende|teilnehmenden|teilnehmer|teilnehmerin|teilnehmerinnen|prüfer|prüferin|prüfende|prüfenden|prüfung|prüfungen|prüfungsteil|modul|module|modellsatz|übungssatz|übungstest|modelltest|lösung|lösungen|lösungsschlüssel|punkte|punkt|bewertung|aufgabe|aufgaben|aufgabenstellung|text|texte|thema|themen|teil|beispiel|version|indd|jc|swv|ptn|telc|goethe|ösd|examen|kandidatenblätter|prüferblätter|transkript|transkriptionen|hörtext|hörtexte|hörverstehen|leseverstehen|sprachbausteine|schriftlicher|mündlicher|ausdruck|kriterium|kriterien|erfüllung|kohärenz|wortschatz|strukturen|interaktion|intonation|aussprache|angemessen|partner|partnerin|gesprächspartner|gesprächspartnerin|präsentation|folie|folien|moderator|moderatorin|markieren|markiere|ankreuzen|kreuze|arbeitszeit|minuten|sekunden|hilfsmittel|wörterbücher|mobiltelefone|sprecher|sprecherin|track|nummer|seite|first|nome|code|iii|ii|pdf|www|de|com|net|at|ch)$/;
const tokenRe = /[A-Za-zÄÖÜäöüß]{2,}/g;
const vocabStats = [];
const missingFreq = new Map();
for (const s of SETS) {
  const toks = s.body.match(tokenRe) || [];
  let covered = 0;
  let func = 0;
  const types = new Map();
  for (const t of toks) {
    const l = lower(t);
    if (FUNCTION.has(l) || META.test(l) || /^[A-ZÄÖÜ]{2,}$/.test(t)) {
      func++;
      continue;
    }
    if (lexicon.has(l)) covered++;
    else types.set(t, (types.get(t) ?? 0) + 1);
  }
  const content = toks.length - func;
  vocabStats.push({ set: s.name, tokens: toks.length, content, coveredPct: Math.round((covered / content) * 100), uncoveredTypes: types.size });
  for (const [t, n] of types) missingFreq.set(t, (missingFreq.get(t) ?? 0) + n);
}
// across all sets: content-word coverage
const allContent = vocabStats.reduce((n, v) => n + v.content, 0);
const allCovered = vocabStats.reduce((n, v) => n + Math.round((v.coveredPct / 100) * v.content), 0);
const missing = [...missingFreq.entries()].filter(([t]) => !/^[A-ZÄÖÜ][a-zäöüß]+$/.test(t) || true).sort((a, b) => b[1] - a[1]);

/* ------------------------------------------------------------------ */
/* 6. report                                                           */
/* ------------------------------------------------------------------ */
const nSets = SETS.length;
const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);
const totalHits = Object.entries(counts).reduce((n, [t, c]) => (NOT_DETECTABLE[t] && !['a2-07-adjective-endings-definite', 'a2-08-adjective-endings-indefinite', 'a2-09-adjective-endings-no-article', 'b1-15-participles-as-adjectives'].includes(t) ? n : n + Object.values(c).reduce((a, b) => a + b, 0)), 0);
const totalWords = SETS.reduce((n, s) => n + s.words, 0);
const rows = [];
for (const [t, meta] of topicMeta) {
  const c = counts[t];
  const sum = Object.values(c).reduce((a, b) => a + b, 0);
  const present = SETS.filter((s) => c[s.id] > 0).length;
  const density = Math.round((sum / totalWords) * 1000 * 10) / 10;
  const share = ['a2-03-perfekt-vs-prateritum', 'a2-16-two-way-prepositions-depth', 'b1-16-adjective-declension-review'].includes(t) ? null : NOT_DETECTABLE[t] && !c[SETS[0].id] && sum === 0 ? null : Math.round((sum / totalHits) * 1000) / 10;
  const band = NOT_DETECTABLE[t] && sum === 0 ? 'n/a' : present === nSets ? 'always' : present >= nSets * 0.75 ? 'usually' : present >= nSets * 0.4 ? 'sometimes' : present > 0 ? 'rare' : 'never';
  rows.push({ id: t, level: meta.level, unit: meta.unit, title: meta.title, sum, present, density, share, band, tested: testedCount[t] ?? 0, note: NOT_DETECTABLE[t] });
}

const md = [];
md.push(`# Course vs official B1 papers: raw analysis\n`);
md.push(`Papers analysed (${nSets} distinct test sets, ${totalWords.toLocaleString()} words of exam German after removing boilerplate):\n`);
for (const s of SETS) md.push(`- ${s.name}: ${s.words.toLocaleString()} words`);
md.push(`\n## 1. Grammar topics: how often their structures occur in the papers\n`);
md.push(`Presence = in how many of the ${nSets} sets the structure occurs at least once. Density = occurrences per 1,000 words across all sets. Share = this topic's occurrences as a percentage of all detected structure occurrences (${totalHits.toLocaleString()}). Tested = number of grammar-cloze items (telc Sprachbausteine, DTZ Lesen Teil 5; ${testedTotal} items in all) that test this topic directly.\n`);
md.push(`| Topic | Level | Presence | Band | Density /1k | Share % | Tested items |`);
md.push(`|---|---|---|---|---|---|---|`);
for (const r of rows) md.push(`| ${r.id} ${r.title} | ${r.level} U${r.unit} | ${r.note && r.sum === 0 ? '–' : `${r.present}/${nSets}`} | ${r.band} | ${r.note && r.sum === 0 ? '–' : r.density} | ${r.share == null ? '–' : r.share} | ${r.tested || ''} |`);
md.push(`\nPer set (occurrences):\n`);
md.push(`| Topic | ${SETS.map((s) => s.id).join(' | ')} |`);
md.push(`|---|${SETS.map(() => '---').join('|')}|`);
for (const r of rows) if (!(r.note && r.sum === 0)) md.push(`| ${r.id} | ${SETS.map((s) => counts[r.id][s.id]).join(' | ')} |`);

md.push(`\n## 2. Explicitly tested grammar (cloze items)\n`);
md.push(`| Topic | Items | % of ${testedTotal} |`);
md.push(`|---|---|---|`);
for (const [t, n] of Object.entries(testedCount).sort((a, b) => b[1] - a[1])) md.push(`| ${t} ${topicMeta.get(t)?.title ?? ''} | ${n} | ${pct(n, testedTotal)} |`);

md.push(`\n## 3. Domains of the receptive texts (Lesen, Hören, Sprachbausteine parts)\n`);
md.push(`| Domain | Parts (of ${receptiveParts}) | % of parts | Sets with it (of ${nSets}) |`);
md.push(`|---|---|---|---|`);
for (const [d, n] of Object.entries(domainParts).sort((a, b) => b[1] - a[1])) md.push(`| ${d} | ${n} | ${pct(n, receptiveParts)} | ${domainSets[d]} |`);
md.push(`\nWriting and speaking tasks:\n`);
for (const t of productiveThemes) md.push(`- ${t.set} · ${t.kind} ${t.task}: ${t.text_type ?? t.type ?? ''} · ${t.register ?? ''} · ${t.theme}${t.words ? ` · ~${t.words} words` : ''}`);

md.push(`\n## 4. Vocabulary coverage\n`);
md.push(`Course word lists: ${courseWords.length} headwords (A1 ${courseWords.filter((w) => w.level === 'A1').length}, A2 ${courseWords.filter((w) => w.level === 'A2').length}, B1 ${courseWords.filter((w) => w.level === 'B1').length}), expanded to ${lexicon.size} inflected forms. Coverage = share of content-word tokens in the papers (function words excluded) whose form is in the course lists.\n`);
md.push(`| Set | Tokens | Content tokens | Covered % | Uncovered word types |`);
md.push(`|---|---|---|---|---|`);
for (const v of vocabStats) md.push(`| ${v.set} | ${v.tokens} | ${v.content} | ${v.coveredPct} | ${v.uncoveredTypes} |`);
md.push(`\nAll sets: ${pct(allCovered, allContent)} % of content tokens covered.\n`);
md.push(`Most frequent words in the papers that are not in the course lists (raw forms, frequency across all sets; names, places and inflections of known words included):\n`);
md.push(missing.slice(0, 150).map(([t, n]) => `${t} (${n})`).join(', '));

console.log(md.join('\n'));
if (jsonOut) writeFileSync(jsonOut, JSON.stringify({ sets: SETS.map((s) => ({ id: s.id, name: s.name, words: s.words })), rows, counts, testedCount, testedTotal, domainParts, domainSets, receptiveParts, vocabStats, missing: missing.slice(0, 400) }, null, 2));
