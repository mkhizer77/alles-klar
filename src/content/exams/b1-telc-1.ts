import type { MockExam } from '../types';

// telc Deutsch B1 · Modelltest 1. Original texts, items and tasks in the
// format of the official Übungstest (see docs/EXAM-GUIDE.md).

const ID = 'b1-telc-1';

const exam: MockExam = {
  id: ID,
  level: 'B1',
  provider: 'telc',
  title: 'telc Deutsch B1 · Modelltest 1',
  subtitle: 'Zertifikat Deutsch: Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher und Mündlicher Ausdruck',
  intro:
    'A complete mock of telc Deutsch B1 (Zertifikat Deutsch). The written exam runs Leseverstehen and Sprachbausteine together in 90 minutes, then Hörverstehen (about 30 minutes) and Schriftlicher Ausdruck (30 minutes). The oral exam is taken in pairs after 20 minutes of preparation. Every reading and listening item is worth 5 points, every Sprachbausteine item 1.5 points. The texts are a city newspaper, press notices, adverts from Hamburg, two emails with gaps, five commuters, a radio interview with a village baker and five short announcements.',
  modelledOn: 'telc Deutsch B1 / Zertifikat Deutsch (Übungstest 1, überarbeitete Auflage 2019)',
  passRule:
    'Written exam (Lesen 75 + Sprachbausteine 30 + Hören 75 + Schreiben 45 = 225 points) and oral exam (75 points) are passed separately with 60% each: 135 and 45 points.',
  modules: [
    /* ------------------------------------------------------------ */
    /* Leseverstehen                                                 */
    /* ------------------------------------------------------------ */
    {
      skill: 'lesen',
      title: 'Leseverstehen',
      minutes: 65,
      maxPoints: 75,
      passPercent: 60,
      parts: [
        {
          id: 'lesen-1',
          skill: 'lesen',
          title: 'Teil 1',
          goal: 'Global reading: five short press notices, ten headlines a–j, five of them distractors',
          instructions:
            'Lesen Sie die Überschriften **a–j** und die Texte **1–5**. Finden Sie für jeden Text die passende Überschrift. Sie können jede Überschrift nur einmal benutzen.',
          minutes: 12,
          pointsPerItem: 5,
          texts: [
            { label: 'a', body: ['Erfurter Museum zeigt Ausstellung über Straßenbahnen'] },
            { label: 'b', body: ['Studie: Handy im Bett stört den Schlaf'] },
            { label: 'c', body: ['Münster: Mehr Fahrraddiebstähle an Bahnhöfen'] },
            { label: 'd', body: ['Umfrage: Die meisten Berufstätigen machen am Schreibtisch Mittagspause'] },
            { label: 'e', body: ['Freiburg: Ein Euro Pfand auf den Kaffeebecher'] },
            { label: 'f', body: ['Junge Erwachsene schlafen weniger als früher'] },
            { label: 'g', body: ['Donnerstags gratis ins Stadtmuseum'] },
            { label: 'h', body: ['Kaffee zum Mitnehmen wird in Freiburg teurer'] },
            { label: 'i', body: ['Immer mehr Berufstätige essen in der Kantine'] },
            { label: 'j', body: ['Fahrrad selbst reparieren: 30 kostenlose Stationen in Münster'] },
            {
              title: 'Text 1',
              body: [
                'Wer in Freiburg seinen Kaffee zum Mitnehmen kauft, zahlt ab 1. März einen Euro Pfand auf den Becher. Das hat der Gemeinderat am Dienstag beschlossen. Die Becher aus festem Kunststoff können in allen 120 teilnehmenden Cafés und Bäckereien zurückgegeben werden, dort bekommt man den Euro wieder. Die Stadt will damit den Müll reduzieren: Bisher landeten jede Woche rund 150.000 Einwegbecher in den öffentlichen Mülleimern. Wer seinen eigenen Becher mitbringt, bekommt in vielen Cafés außerdem einen Rabatt von zwanzig Cent.',
              ],
            },
            {
              title: 'Text 2',
              body: [
                'Wer abends im Bett noch lange auf das Smartphone schaut, schläft schlechter. Das zeigt eine Studie der Universität Leipzig mit 2.000 Teilnehmern zwischen 18 und 65 Jahren. Wer das Handy in der letzten Stunde vor dem Schlafen benutzte, brauchte im Durchschnitt 25 Minuten länger, um einzuschlafen, und wachte nachts öfter auf. Besonders betroffen waren junge Erwachsene unter 30. Die Forscher raten, das Telefon mindestens eine Stunde vor dem Schlafengehen wegzulegen und nicht im Schlafzimmer zu laden. Ein Buch zu lesen oder Musik zu hören sei dagegen kein Problem.',
              ],
            },
            {
              title: 'Text 3',
              body: [
                'In Münster gibt es jetzt an 30 Orten kostenlose Reparaturstationen für Fahrräder. Die Stationen stehen an Bahnhöfen, Schulen und am Rand der großen Radwege. An jeder Station gibt es eine Luftpumpe und das wichtigste Werkzeug, mit dem man zum Beispiel einen Reifen wechseln oder den Sattel einstellen kann. Das Werkzeug ist mit Stahlseilen an der Station befestigt, damit es nicht gestohlen wird. Die Stadt hat 90.000 Euro für das Projekt ausgegeben. Wenn die Stationen gut genutzt werden, sollen im nächsten Jahr 20 weitere dazukommen.',
              ],
            },
            {
              title: 'Text 4',
              body: [
                'Das Stadtmuseum Erfurt öffnet seine Türen ab sofort jeden Donnerstag kostenlos. Bisher kostete der Eintritt acht Euro, am Donnerstag ist er nun von 10 bis 20 Uhr frei. Mit dem Angebot will das Museum vor allem Familien und junge Leute erreichen, die sonst selten kommen. Am ersten kostenlosen Donnerstag kamen 1.400 Besucherinnen und Besucher, dreimal so viele wie an einem normalen Wochentag. Die Sonderausstellung über die Geschichte der Erfurter Straßenbahn bleibt allerdings kostenpflichtig. Montags ist das Museum wie bisher geschlossen.',
              ],
            },
            {
              title: 'Text 5',
              body: [
                'Wie verbringen die Deutschen ihre Mittagspause? Eine Umfrage unter 3.000 Berufstätigen zeigt: Fast die Hälfte isst am Schreibtisch und arbeitet dabei weiter. Nur jeder Vierte geht in die Kantine oder in ein Restaurant, und nur 15 Prozent gehen in der Pause an die frische Luft. Im Durchschnitt dauert die Pause 28 Minuten, zehn Minuten weniger als vor zehn Jahren. Ärzte warnen: Wer keine richtige Pause macht, ist am Nachmittag weniger konzentriert und hat häufiger Rückenschmerzen. Sie empfehlen, mindestens einmal kurz nach draußen zu gehen.',
              ],
            },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-lesen-1-01',
              prompt: 'Text 1: Welche Überschrift passt?',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
              answer: 4,
              explanation:
                'The notice is about a deposit: "zahlt … einen Euro Pfand auf den Becher" and "dort bekommt man den Euro wieder". Headline h ("wird … teurer") only fits partly: the euro is returned, so coffee is not more expensive.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-1-02',
              prompt: 'Text 2: Welche Überschrift passt?',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
              answer: 1,
              explanation:
                'The study is about the phone and sleep: "Wer abends im Bett noch lange auf das Smartphone schaut, schläft schlechter". Headline f mentions young adults, who are "besonders betroffen", but the text does not say they sleep less than before.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-1-03',
              prompt: 'Text 3: Welche Überschrift passt?',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
              answer: 9,
              explanation:
                '"an 30 Orten kostenlose Reparaturstationen für Fahrräder" – people repair their own bikes for free. Headline c picks up "damit es nicht gestohlen wird", but theft is only the reason for the steel cables, not the topic.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-1-04',
              prompt: 'Text 4: Welche Überschrift passt?',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
              answer: 6,
              explanation:
                'The main news is "öffnet seine Türen ab sofort jeden Donnerstag kostenlos". The tram exhibition (headline a) is mentioned in one sentence only, and it still costs money.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-1-05',
              prompt: 'Text 5: Welche Überschrift passt?',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
              answer: 3,
              explanation:
                '"Fast die Hälfte isst am Schreibtisch und arbeitet dabei weiter" – the survey\'s main finding. Headline i contradicts the text: "Nur jeder Vierte geht in die Kantine", and nothing says the number is growing.',
            },
          ],
          topicIds: ['b1-06-passive-present-past', 'a2-10-comparative-superlative', 'a2-23-relative-clauses-nom-acc', 'a2-21-zu-infinitive'],
        },
        {
          id: 'lesen-2',
          skill: 'lesen',
          title: 'Teil 2',
          goal: 'Detailed reading: a newspaper article about a neighbourhood-help app, five three-way items',
          instructions: 'Lesen Sie den Text und die Aufgaben **6–10**. Welche Lösung (a, b oder c) ist jeweils richtig?',
          minutes: 20,
          pointsPerItem: 5,
          texts: [
            {
              title: 'Hilfe von nebenan: Eine App bringt Leipziger Nachbarn zusammen',
              body: [
                '*Einkaufen für die kranke Nachbarin, ein Werkzeug leihen, einen Umzug organisieren – in Leipzig läuft das immer öfter über das Smartphone.*',
                'Als Mareike Voss vor vier Jahren nach Leipzig-Gohlis zog, kannte sie niemanden im Haus. „Ich wollte einfach eine Bohrmaschine ausleihen und wusste nicht, bei wem ich klingeln soll“, erzählt die 34-jährige Informatikerin. Aus dieser Erfahrung wurde eine Idee: Zusammen mit zwei Freunden programmierte sie die App „Nachbarn helfen Nachbarn“. Seit dem Start vor drei Jahren haben sich mehr als 40.000 Leipzigerinnen und Leipziger angemeldet.',
                'Das Prinzip ist einfach. Wer sich registriert, gibt seine Adresse an und sieht dann nur Nachrichten aus einem Umkreis von einem Kilometer. In der App kann man Hilfe anbieten oder um Hilfe bitten: ein Paket annehmen, Blumen gießen, einen Kinderwagen verschenken oder jemanden zum Arzt begleiten. Geld darf dabei nicht fließen. „Wir wollen keine Plattform für kleine Jobs sein“, sagt Voss. „Es geht um Nachbarschaft, nicht um Geschäfte.“ Gewerbliche Anzeigen werden deshalb gelöscht.',
                'Für Rentner Klaus Berger aus Reudnitz hat die App viel verändert. Nach einer Operation am Knie konnte der 78-Jährige im letzten Winter wochenlang nicht aus dem Haus. Seine Tochter lebt in Hamburg und konnte nur am Wochenende kommen. „Eine junge Frau aus der Nachbarstraße hat mir zweimal pro Woche die Einkäufe gebracht“, erzählt er. Inzwischen hilft er selbst: Er repariert Fahrräder für Nachbarn, die das nicht können, und hat so Leute kennengelernt, die er vorher nur vom Sehen kannte.',
                'Doch nicht alles läuft gut. In einigen Stadtteilen melden sich viele Menschen an, schreiben aber nie etwas. Außerdem gibt es Nachbarn, die die App vor allem für Beschwerden nutzen: über Lärm, falsch geparkte Autos oder Müll im Hof. „Das war nicht unser Ziel“, gibt Voss zu. Seit einem Jahr lesen deshalb zehn ehrenamtliche Moderatoren mit und löschen Beiträge, die beleidigend sind. Ein anderes Problem ist das Alter der Nutzer: Die meisten sind zwischen 25 und 45. Ältere Menschen, die Hilfe am dringendsten brauchen, haben oft kein Smartphone oder trauen sich nicht, die App zu benutzen.',
                'Deshalb arbeitet das Team jetzt mit den Stadtteilzentren zusammen. Dort erklären Freiwillige einmal im Monat, wie die App funktioniert, und helfen bei der Anmeldung. Im nächsten Jahr soll außerdem eine Telefonnummer eingerichtet werden, über die man ohne Smartphone um Hilfe bitten kann. Und die Idee verbreitet sich: Dresden und Halle haben bereits Interesse an der App angemeldet. „Wir wollen aber langsam wachsen“, sagt Voss. „Eine gute Nachbarschaft kann man nicht in einem Monat aufbauen.“',
              ],
            },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-lesen-2-06',
              prompt: 'Mareike Voss hatte die Idee für die App,',
              options: [
                'weil sie niemanden kannte, den sie um ein Werkzeug bitten konnte.',
                'weil ihre Freunde eine Bohrmaschine kaufen wollten.',
                'weil sie als Informatikerin ein neues Projekt brauchte.',
              ],
              answer: 0,
              explanation:
                '"Ich wollte einfach eine Bohrmaschine ausleihen und wusste nicht, bei wem ich klingeln soll" – she knew nobody in the house. The friends only helped to program the app; her job is just mentioned.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-2-07',
              prompt: 'In der App',
              options: [
                'kann man kleine Jobs gegen Bezahlung anbieten.',
                'sieht man nur Nachrichten aus der näheren Umgebung.',
                'werden gewerbliche Anzeigen besonders gekennzeichnet.',
              ],
              answer: 1,
              explanation:
                '"sieht dann nur Nachrichten aus einem Umkreis von einem Kilometer". Money is not allowed ("Geld darf dabei nicht fließen") and commercial adverts are deleted, not marked.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-2-08',
              prompt: 'Klaus Berger',
              options: [
                'wurde nach seiner Operation von seiner Tochter gepflegt.',
                'lässt sein Fahrrad von Nachbarn reparieren.',
                'bekam nach seiner Operation Einkäufe von einer Nachbarin.',
              ],
              answer: 2,
              explanation:
                '"Eine junge Frau aus der Nachbarstraße hat mir zweimal pro Woche die Einkäufe gebracht". His daughter lives in Hamburg, and it is he who repairs bikes for others.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-2-09',
              prompt: 'Ein Problem der App ist, dass',
              options: [
                'manche Nutzer sie vor allem für Beschwerden benutzen.',
                'die Moderatoren zu viele Beiträge löschen.',
                'sich zu wenige junge Leute anmelden.',
              ],
              answer: 0,
              explanation:
                '"Nachbarn, die die App vor allem für Beschwerden nutzen: über Lärm, falsch geparkte Autos oder Müll". The moderators delete only insulting posts, and the problem with age is that older people are missing, not young ones.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-2-10',
              prompt: 'Im nächsten Jahr soll',
              options: [
                'die App auch in Dresden und Halle starten.',
                'jedes Stadtteilzentrum einen eigenen Moderator bekommen.',
                'man auch ohne Smartphone um Hilfe bitten können.',
              ],
              answer: 2,
              explanation:
                '"Im nächsten Jahr soll außerdem eine Telefonnummer eingerichtet werden, über die man ohne Smartphone um Hilfe bitten kann". Dresden and Halle have only shown interest, and the team wants to grow slowly.',
            },
          ],
          topicIds: ['a2-23-relative-clauses-nom-acc', 'b1-06-passive-present-past', 'a2-04-subordinate-clauses-weil-dass', 'b1-18-cause-consequence-concession', 'b1-18b-concession', 'a2-03-perfekt-vs-prateritum'],
        },
        {
          id: 'lesen-3',
          skill: 'lesen',
          title: 'Teil 3',
          goal: 'Selective reading: twelve adverts for services in Hamburg, ten situations, two without a matching advert',
          instructions:
            'Lesen Sie die Situationen **11–20** und die Anzeigen **a–l**. Finden Sie für jede Situation die passende Anzeige. Sie können jede Anzeige nur einmal benutzen. Wenn Sie zu einer Situation keine Anzeige finden, markieren Sie ein **x**.',
          minutes: 18,
          pointsPerItem: 5,
          texts: [
            {
              label: 'a',
              title: 'Hanse-Umzüge',
              body: ['Umzüge in Hamburg, deutschlandweit und europaweit. Wir packen ein, bauen Ihre Möbel ab und wieder auf und transportieren auch Klaviere und Flügel. Halteverbotszone inklusive. Kostenloses Angebot nach Besichtigung.', 'Tel. 040 / 55 81 20 · www.hanse-umzuege.example'] },
            {
              label: 'b',
              title: 'Radhaus Altona',
              body: ['Fahrradwerkstatt für alle Marken. Inspektion ab 29 Euro, Reparatur meist am selben Tag. Keine Zeit? Wir holen Ihr Rad bei Ihnen ab und bringen es zurück (Hamburg-West, 10 Euro). Mo–Sa 9–18 Uhr.', 'Bahrenfelder Straße 88'] },
            {
              label: 'c',
              title: 'Klavierunterricht in Eppendorf',
              body: ['Diplom-Pianistin unterrichtet Kinder und Erwachsene, Anfänger willkommen. Bei Ihnen zu Hause oder in meinem Studio. Klassik, Pop und Jazz. Die erste Stunde ist kostenlos.', 'klavier-eppendorf@example.de'] },
            {
              label: 'd',
              title: 'Kinderzeit – Babysitter-Agentur',
              body: ['Geprüfte Babysitter mit Erfahrung und Erste-Hilfe-Kurs, ab 16 Euro pro Stunde. Auch abends, am Wochenende und kurzfristig buchbar. Betreuung bei Ihnen zu Hause.', 'Anfragen online oder unter 040 / 33 97 41'] },
            {
              label: 'e',
              title: 'Lohnsteuerhilfeverein Hamburg-Nord',
              body: ['Wir machen Ihre Steuererklärung – für Arbeitnehmer, Rentner und Auszubildende. Mitgliedsbeitrag ab 60 Euro im Jahr, keine weiteren Kosten. Keine Beratung für Selbstständige und Firmen.', 'Beratungsstelle Fuhlsbüttler Straße 210, Termin nach Vereinbarung'] },
            {
              label: 'f',
              title: 'Deutsch sprechen – ohne Lehrer',
              body: ['Konversationsclub jeden Dienstag um 19 Uhr im Café International (St. Georg). Für alle, die Deutsch verstehen, aber mehr reden wollen. Niveau A2–B2. Kein Unterricht, keine Anmeldung, keine Kosten – nur Gespräche.'] },
            {
              label: 'g',
              title: 'Gassi-Geher Hamburg',
              body: ['Ihr Hund ist tagsüber allein? Wir gehen mit ihm spazieren, einzeln oder in kleinen Gruppen, und betreuen ihn auch im Urlaub bei uns zu Hause. Versichert und zuverlässig. Leider keine Katzen oder andere Haustiere.', 'Tel. 0176 / 22 48 10 33'] },
            {
              label: 'h',
              title: 'Möbelkiste Wandsbek',
              body: ['Gebrauchte Möbel kaufen und verkaufen. Wir holen Ihre alten Sofas, Schränke und Tische kostenlos bei Ihnen ab, wenn sie noch gut erhalten sind. Lieferung in ganz Hamburg. Großes Lager, Mo–Fr 10–19 Uhr, Sa 10–16 Uhr.'] },
            {
              label: 'i',
              title: 'Blitzblank Reinigungsservice',
              body: ['Wohnungs- und Büroreinigung, regelmäßig oder einmalig. Fensterputzen, Teppichreinigung, Endreinigung beim Auszug – damit Sie Ihre Kaution zurückbekommen. Faire Preise, Angebot am Telefon.', 'Tel. 040 / 78 12 06'] },
            {
              label: 'j',
              title: 'Computerhilfe für Seniorinnen und Senioren',
              body: ['Smartphone, Tablet oder PC – ich komme zu Ihnen nach Hause und erkläre alles in Ruhe und so oft Sie wollen. Videotelefonie mit den Enkeln einrichten, Fotos verschicken, Online-Banking. 25 Euro pro Stunde.', 'Lars Petersen, Tel. 0151 / 40 29 87 65'] },
            {
              label: 'k',
              title: 'Schneiderei Nadel & Faden',
              body: ['Änderungen und Reparaturen aller Art: Hosen und Kleider kürzen, Reißverschlüsse erneuern, Jacken enger machen. Maßanfertigung auf Wunsch. Express-Service: in 24 Stunden fertig.', 'Osterstraße 61, Mo–Fr 9–18 Uhr'] },
            {
              label: 'l',
              title: 'Fahrschule Mobil',
              body: ['Führerschein Klasse B, auch Automatik. Intensivkurs: Theorie und Praxis in drei Wochen. Theorieunterricht auch auf Englisch. Anmeldung jederzeit möglich.', 'Wandsbeker Chaussee 140 · www.fahrschule-mobil.example'] },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-lesen-3-11',
              prompt: 'Ihre Nachbarin ist 80 Jahre alt und hat ein neues Tablet bekommen. Sie möchte lernen, wie sie Videotelefonate mit ihren Enkeln führen kann.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 9,
              explanation: 'Advert j offers computer help for seniors at home, including "Videotelefonie mit den Enkeln einrichten".',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-12',
              prompt: 'Sie ziehen in einen anderen Stadtteil und haben ein Klavier, das mit umziehen soll.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 0,
              explanation: 'Advert a is a removal company that "transportieren auch Klaviere und Flügel". Advert c also mentions a piano, but offers lessons, not transport.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-13',
              prompt: 'Sie möchten Ihr altes Sofa loswerden, aber nicht einfach wegwerfen. Jemand soll es bei Ihnen abholen.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 7,
              explanation: 'Advert h: "Wir holen Ihre alten Sofas, Schränke und Tische kostenlos bei Ihnen ab, wenn sie noch gut erhalten sind".',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-14',
              prompt: 'Ihre Freundin fliegt für zwei Wochen in den Urlaub und sucht jemanden, der in dieser Zeit ihre Katze versorgt.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 12,
              explanation: 'No advert fits. Advert g offers holiday care, but only for dogs: "Leider keine Katzen oder andere Haustiere".',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-15',
              prompt: 'Sie sind angestellt und möchten Ihre Steuererklärung nicht mehr allein machen. Es soll nicht viel kosten.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 4,
              explanation: 'Advert e does tax returns "für Arbeitnehmer, Rentner und Auszubildende" for a membership fee from 60 euros a year.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-16',
              prompt: 'Sie möchten am Samstagabend ins Theater gehen und brauchen für Ihre zwei kleinen Kinder eine Betreuung zu Hause.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 3,
              explanation: 'Advert d: babysitters "auch abends, am Wochenende und kurzfristig buchbar. Betreuung bei Ihnen zu Hause".',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-17',
              prompt: 'Sie haben ein Kleid gekauft, das zu lang ist. Sie brauchen es schon übermorgen für eine Hochzeit.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 10,
              explanation: 'Advert k shortens dresses ("Hosen und Kleider kürzen") and has an "Express-Service: in 24 Stunden fertig".',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-18',
              prompt: 'Ihr Kollege aus Brasilien versteht Deutsch gut, traut sich aber nicht zu sprechen. Er sucht eine Möglichkeit, ohne Lehrer und ohne Kosten mit Leuten zu reden.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 5,
              explanation: 'Advert f is a conversation club: "Kein Unterricht, keine Anmeldung, keine Kosten – nur Gespräche".',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-19',
              prompt: 'Sie möchten lernen, Gitarre zu spielen, am liebsten bei einem Lehrer, der zu Ihnen nach Hause kommt.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 12,
              explanation: 'No advert fits. Advert c teaches at home, but only piano ("Klavierunterricht"), not guitar.',
            },
            {
              type: 'mc',
              id: ID + '-lesen-3-20',
              prompt: 'Ihr Fahrrad hat einen Platten und die Bremse funktioniert nicht. Sie haben keine Zeit, es selbst in eine Werkstatt zu bringen.',
              options: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'x'],
              answer: 1,
              explanation: 'Advert b repairs bikes and offers a pick-up: "Keine Zeit? Wir holen Ihr Rad bei Ihnen ab und bringen es zurück".',
            },
          ],
          topicIds: ['a2-30-word-formation-compounds', 'a1-17-modal-verbs', 'a1-17b-modal-verbs-2', 'b1-05-relative-clauses-prepositions', 'a2-08-adjective-endings-indefinite'],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    /* Sprachbausteine                                               */
    /* ------------------------------------------------------------ */
    {
      skill: 'sprachbausteine',
      title: 'Sprachbausteine',
      minutes: 25,
      maxPoints: 30,
      passPercent: 60,
      parts: [
        {
          id: 'sprachbausteine-1',
          skill: 'sprachbausteine',
          title: 'Teil 1',
          goal: 'Grammar in context: an informal email with ten gaps, three options each',
          instructions: 'Lesen Sie den Text und schließen Sie die Lücken **21–30**. Welche Lösung (a, b oder c) ist jeweils richtig?',
          minutes: 12,
          pointsPerItem: 1.5,
          texts: [
            {
              title: 'E-Mail von Sarah',
              body: [
                'Liebe Dilek,',
                'endlich habe ich Zeit, dir zu schreiben! Du weißt ja, ___ (21) ich eine neue Wohnung gesucht habe. Jetzt habe ich eine gefunden – in ___ (22) Nähe vom Park, nur zehn Minuten von meiner Arbeit entfernt. Vor zwei Wochen ___ (23) wir umgezogen. Mein Bruder und zwei Freunde haben geholfen, trotzdem war es ein ___ (24) Tag: Wir haben von acht Uhr morgens bis spät in die Nacht Kisten getragen.',
                'Die Wohnung hat drei Zimmer und einen kleinen Balkon, auf ___ (25) man im Sommer frühstücken kann. Am besten gefällt mir die Küche. Ich habe ___ (26) sofort in das große Fenster verliebt. Die Miete ist zwar etwas ___ (27) als vorher, aber dafür ist alles neu renoviert. ___ (28) zwei Wochen packe ich jeden Abend Kisten aus, und ein paar stehen immer noch im Flur.',
                'Nächsten Samstag ___ (29) du mich unbedingt besuchen! Dann zeige ich dir alles, und wir können auf dem Balkon Kaffee trinken. Bring doch ___ (30) Schwester mit, ich habe sie schon lange nicht mehr gesehen.',
                'Liebe Grüße',
                'Sarah',
              ],
            },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-21',
              prompt: 'Du weißt ja, ___ ich eine neue Wohnung gesucht habe.',
              options: ['dass', 'denn', 'weil'],
              answer: 0,
              explanation:
                'After "Du weißt ja," the content of what she knows follows: a dass-clause with the verb at the end ("gesucht habe"). "denn" would need main-clause word order, and "weil" would give a reason, which makes no sense here.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-22',
              prompt: 'Jetzt habe ich eine gefunden – in ___ Nähe vom Park.',
              options: ['dem', 'den', 'der'],
              answer: 2,
              explanation: '"in" answers "wo?" here, so it takes the Dative; "die Nähe" is feminine, and the feminine Dative article is "der": in der Nähe.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-23',
              prompt: 'Vor zwei Wochen ___ wir umgezogen.',
              options: ['haben', 'waren', 'sind'],
              answer: 2,
              explanation: '"umziehen" is a verb of movement from one place to another, so its Perfekt is formed with "sein": wir sind umgezogen. "waren umgezogen" would be the Plusquamperfekt, which does not fit a simple past event.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-24',
              prompt: 'Trotzdem war es ein ___ Tag.',
              options: ['anstrengende', 'anstrengender', 'anstrengenden'],
              answer: 1,
              explanation: 'After "ein" in the Nominative (es war ein … Tag) a masculine adjective takes the ending -er, because "ein" does not show the gender: ein anstrengender Tag.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-25',
              prompt: 'Die Wohnung hat einen kleinen Balkon, auf ___ man im Sommer frühstücken kann.',
              options: ['dem', 'den', 'der'],
              answer: 0,
              explanation: 'The relative pronoun refers to "der Balkon" (masculine). After "auf" answering "wo?" (frühstücken on the balcony) it stands in the Dative: auf dem.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-26',
              prompt: 'Ich habe ___ sofort in das große Fenster verliebt.',
              options: ['mich', 'mir', 'sich'],
              answer: 0,
              explanation: '"sich verlieben in" is reflexive with the Accusative; with "ich" the reflexive pronoun is "mich". "sich" belongs to er/sie/es and sie/Sie.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-27',
              prompt: 'Die Miete ist zwar etwas ___ als vorher, aber dafür ist alles neu renoviert.',
              options: ['hoch', 'höher', 'am höchsten'],
              answer: 1,
              explanation: '"als vorher" signals a comparison between two things, which needs the comparative: höher (hoch adds an umlaut). The superlative "am höchsten" is never followed by "als".',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-28',
              prompt: '___ zwei Wochen packe ich jeden Abend Kisten aus.',
              options: ['Seit', 'Vor', 'Nach'],
              answer: 0,
              explanation: 'The present tense ("packe ich … aus") with a period that started in the past and continues now needs "seit": Seit zwei Wochen. "Vor zwei Wochen" is a point in the past and would need the Perfekt, as in the earlier sentence "Vor zwei Wochen sind wir umgezogen".',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-29',
              prompt: 'Nächsten Samstag ___ du mich unbedingt besuchen!',
              options: ['muss', 'musst', 'müsst'],
              answer: 1,
              explanation: 'The subject is "du", so the modal verb takes the ending -st: du musst. "muss" goes with ich/er/sie/es, "müsst" with ihr.',
            },
            {
              type: 'mc',
              id: ID + '-sprachbausteine-1-30',
              prompt: 'Bring doch ___ Schwester mit!',
              options: ['dein', 'deine', 'deinen'],
              answer: 1,
              explanation: '"die Schwester" is feminine and here the Accusative object of "mitbringen"; the feminine form of the possessive in Nominative and Accusative is "deine". "deinen" is masculine Accusative (deinen Bruder).',
            },
          ],
          topicIds: [
            'a2-04-subordinate-clauses-weil-dass',
            'a1-25-dative-prepositions',
            'a1-32-perfekt-sein',
            'a2-08-adjective-endings-indefinite',
            'b1-05-relative-clauses-prepositions',
            'a2-11-reflexive-verbs',
            'a2-10-comparative-superlative',
            'a1-28-time-prepositions',
            'a1-17-modal-verbs',
            'a1-21-possessive-articles',
          ],
        },
        {
          id: 'sprachbausteine-2',
          skill: 'sprachbausteine',
          title: 'Teil 2',
          goal: 'Lexis and fixed phrases: a semi-formal email with ten gaps and a bank of fifteen words',
          instructions:
            'Lesen Sie den Text und schließen Sie die Lücken **31–40**. Benutzen Sie die Wörter **a–o**. Jedes Wort passt nur einmal.\n\n**Wortkasten:** a DAMIT · b DANKBAR · c DESHALB · d FÜR · e GERN · f MÖGLICHST · g NACHDEM · h OB · i OBWOHL · j SOWOHL · k TROTZDEM · l VORAUS · m WANN · n WEDER · o WENN',
          minutes: 13,
          pointsPerItem: 1.5,
          texts: [
            {
              title: 'Anfrage an die Sprachschule',
              body: [
                '**Sprachschule Lingua Nord** – Abendkurse Deutsch A1 bis C1, kleine Gruppen, Kursbeginn im Oktober und im Februar, Prüfungsvorbereitung telc B1. Preis pro Kurs (60 Stunden): 320 Euro.',
                'Sehr geehrte Damen und Herren,',
                'ich habe Ihre Anzeige in der Zeitung gelesen und interessiere mich sehr ___ (31) Ihren Abendkurs „Deutsch B1“. Ich arbeite tagsüber in einem Krankenhaus und kann ___ (32) nur abends an einem Kurs teilnehmen.',
                'Ich hätte ___ (33) einige Informationen: Könnten Sie mir mitteilen, ___ (34) genau der Kurs beginnt und an welchen Tagen er stattfindet? Außerdem möchte ich wissen, ___ (35) das Lehrbuch im Preis enthalten ist. Ich habe vor zwei Jahren einen A2-Kurs gemacht, ___ (36) habe ich vieles vergessen. Gibt es vor dem Kursbeginn einen Einstufungstest?',
                'Mir ist es wichtig, ___ (37) Grammatik als auch Sprechen zu üben, weil ich im nächsten Jahr die B1-Prüfung machen möchte. Bitte schicken Sie mir die Unterlagen ___ (38) bald zu, da ich mich noch bei meinem Arbeitgeber über die Arbeitszeiten informieren muss. Für eine schnelle Antwort wäre ich Ihnen sehr ___ (39).',
                'Vielen Dank im ___ (40)!',
                'Mit freundlichen Grüßen',
                'Samuel Okafor',
              ],
            },
          ],
          items: [
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-31',
              prompt: 'Ich habe Ihre Anzeige gelesen und interessiere mich sehr ___ Ihren Abendkurs „Deutsch B1“.',
              answer: ['für'],
              hint: 'aus dem Wortkasten',
              explanation: '"sich interessieren" always takes the preposition "für" + Accusative: sich interessieren für Ihren Abendkurs.',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-32',
              prompt: 'Ich arbeite tagsüber in einem Krankenhaus und kann ___ nur abends an einem Kurs teilnehmen.',
              answer: ['deshalb'],
              hint: 'aus dem Wortkasten',
              explanation: 'Working during the day is the reason he can only come in the evening, so the consequence connector "deshalb" fits. "trotzdem" would say the opposite (nevertheless).',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-33',
              prompt: 'Ich hätte ___ einige Informationen.',
              answer: ['gern', 'gerne'],
              hint: 'aus dem Wortkasten',
              explanation: 'The polite fixed phrase is "ich hätte gern …" (I would like …), Konjunktiv II of "haben" plus "gern".',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-34',
              prompt: 'Könnten Sie mir mitteilen, ___ genau der Kurs beginnt und an welchen Tagen er stattfindet?',
              answer: ['wann'],
              hint: 'aus dem Wortkasten',
              explanation: 'The indirect question asks for a time ("genau … beginnt", "an welchen Tagen"), so the question word is "wann". "ob" asks whether, and "wenn" cannot introduce an indirect question.',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-35',
              prompt: 'Außerdem möchte ich wissen, ___ das Lehrbuch im Preis enthalten ist.',
              answer: ['ob'],
              hint: 'aus dem Wortkasten',
              explanation: 'A yes/no question reported indirectly ("Ist das Lehrbuch enthalten?") is introduced by "ob", never by "wenn".',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-36',
              prompt: 'Ich habe vor zwei Jahren einen A2-Kurs gemacht, ___ habe ich vieles vergessen.',
              answer: ['trotzdem'],
              hint: 'aus dem Wortkasten',
              explanation: 'He did a course but still forgot a lot: an unexpected result needs "trotzdem" (nevertheless). "obwohl" has the same meaning but would send the verb to the end, and here the verb comes directly after the gap.',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-37',
              prompt: 'Mir ist es wichtig, ___ Grammatik als auch Sprechen zu üben.',
              answer: ['sowohl'],
              hint: 'aus dem Wortkasten',
              explanation: 'The two-part conjunction is "sowohl … als auch" (both … and). "weder" pairs with "noch", not with "als auch".',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-38',
              prompt: 'Bitte schicken Sie mir die Unterlagen ___ bald zu.',
              answer: ['möglichst'],
              hint: 'aus dem Wortkasten',
              explanation: '"möglichst bald" is the fixed phrase for "as soon as possible".',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-39',
              prompt: 'Für eine schnelle Antwort wäre ich Ihnen sehr ___.',
              answer: ['dankbar'],
              hint: 'aus dem Wortkasten',
              explanation: 'The polite closing formula is "Für … wäre ich Ihnen sehr dankbar" (I would be very grateful for …); "dankbar" takes the Dative person ("Ihnen") and "für" the thing.',
            },
            {
              type: 'fill',
              id: ID + '-sprachbausteine-2-40',
              prompt: 'Vielen Dank im ___!',
              answer: ['voraus'],
              hint: 'aus dem Wortkasten',
              explanation: '"Vielen Dank im Voraus" is the fixed phrase for "thank you in advance".',
            },
          ],
          topicIds: [
            'a2-12-verbs-with-prepositions',
            'a2-27-adverbial-connectors',
            'a2-20-konjunktiv-2-polite',
            'a2-05-wenn-ob-indirect-questions',
            'b1-18-cause-consequence-concession',
            'b1-17-two-part-conjunctions',
            'b1-28-adjective-noun-prepositions',
            'a2-31b-semi-formal-email',
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    /* Hörverstehen                                                  */
    /* ------------------------------------------------------------ */
    {
      skill: 'hoeren',
      title: 'Hörverstehen',
      minutes: 30,
      maxPoints: 75,
      passPercent: 60,
      parts: [
        {
          id: 'hoeren-1',
          skill: 'hoeren',
          title: 'Teil 1',
          goal: 'Global listening: five people say how they get to work and why, played once, five true/false items',
          instructions:
            'Sie hören nun fünf kurze Texte. Dazu sollen Sie fünf Aufgaben lösen. Sie hören diese Texte **nur einmal**. Entscheiden Sie beim Hören, ob die Aussagen **41–45** richtig oder falsch sind. Lesen Sie jetzt die Aufgaben 41–45. Sie haben dazu 30 Sekunden Zeit.',
          minutes: 6,
          pointsPerItem: 5,
          audio: [
            {
              id: ID + '-hoeren-1-a1',
              label: 'Text 1 · Jana, 29, Buchhalterin',
              plays: 1,
              text: 'Also, ich fahre jeden Tag mit dem Fahrrad zur Arbeit, bei jedem Wetter. Das sind ungefähr sechs Kilometer, eine knappe halbe Stunde. Früher bin ich mit der U-Bahn gefahren, aber die war morgens immer so voll, und ich hab mich jedes Mal geärgert, wenn sie wieder Verspätung hatte. Jetzt bin ich an der frischen Luft, ich spare das Geld fürs Ticket, und ich brauche kein Fitnessstudio mehr. Nur im Winter, wenn es glatt ist, nehme ich manchmal den Bus.',
            },
            {
              id: ID + '-hoeren-1-a2',
              label: 'Text 2 · Markus, 44, Techniker',
              plays: 1,
              text: 'Ich fahre mit dem Auto, das geht bei mir nicht anders. Ich wohne auf dem Land, und der Bus fährt nur zweimal am Morgen. Zur Firma sind es vierzig Kilometer, mit dem Auto bin ich in fünfunddreißig Minuten da. Klar, das kostet Benzin, und im Stau stehe ich auch manchmal. Aber ich bringe morgens noch meine Tochter zur Schule, das wäre mit dem Bus unmöglich. Zwei Kollegen aus dem Nachbardorf nehme ich seit einem Jahr mit, dann teilen wir uns die Kosten.',
            },
            {
              id: ID + '-hoeren-1-a3',
              label: 'Text 3 · Elif, 36, Projektleiterin',
              plays: 1,
              text: 'Ich pendle mit dem Zug, jeden Tag eine Stunde hin und eine Stunde zurück. Das klingt lang, aber ich finde es gar nicht schlimm. Im Zug kann ich lesen, Mails beantworten oder einfach schlafen. Mit dem Auto müsste ich selbst fahren und könnte nichts anderes machen. Meine Firma bezahlt außerdem die Hälfte von meiner Monatskarte. Was mich nervt, ist nur, wenn der Zug ausfällt. Dann muss ich meinen Chef anrufen und komme eine Stunde später.',
            },
            {
              id: ID + '-hoeren-1-a4',
              label: 'Text 4 · Thomas, 51, Verkäufer',
              plays: 1,
              text: 'Ich gehe zu Fuß, zwanzig Minuten. Ich habe mir meine Wohnung extra in der Nähe von der Arbeit gesucht, weil ich keine Lust mehr auf Pendeln hatte. Früher habe ich jeden Tag zwei Stunden im Auto gesessen, das hat mich total müde gemacht. Jetzt ist der Weg mein Morgensport, ich höre dabei Podcasts, und wenn es regnet, nehme ich eben einen Schirm. Ein Auto habe ich gar nicht mehr, und ich vermisse es überhaupt nicht.',
            },
            {
              id: ID + '-hoeren-1-a5',
              label: 'Text 5 · Renate, 48, Übersetzerin',
              plays: 1,
              text: 'Ich muss gar nicht mehr zur Arbeit fahren, ich arbeite seit zwei Jahren von zu Hause. Ich bin Übersetzerin, da brauche ich nur meinen Computer und Ruhe. Einmal in der Woche fahre ich ins Büro, für die Besprechung mit dem Team, dann nehme ich die S-Bahn. Für mich ist das ideal: Ich spare jeden Tag über eine Stunde, und ich kann mittags für meine Kinder kochen. Nur manchmal fehlen mir die Kollegen, das Mittagessen zusammen, solche Sachen.',
            },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-hoeren-1-41',
              prompt: 'Die Sprecherin nimmt bei schlechtem Wetter immer die U-Bahn.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'Jana cycles "bei jedem Wetter"; only in winter, when it is icy, she sometimes takes the bus ("nehme ich manchmal den Bus"), not the underground.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-1-42',
              prompt: 'Der Sprecher teilt sich die Fahrtkosten mit Kollegen.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: 'Markus: "Zwei Kollegen aus dem Nachbardorf nehme ich seit einem Jahr mit, dann teilen wir uns die Kosten."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-1-43',
              prompt: 'Die Sprecherin findet die lange Fahrt im Zug schlimm.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'Elif says "Das klingt lang, aber ich finde es gar nicht schlimm" – she reads, answers emails or sleeps.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-1-44',
              prompt: 'Der Sprecher hat seine Wohnung in der Nähe der Arbeit gesucht, weil er nicht mehr pendeln wollte.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: 'Thomas: "Ich habe mir meine Wohnung extra in der Nähe von der Arbeit gesucht, weil ich keine Lust mehr auf Pendeln hatte."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-1-45',
              prompt: 'Die Sprecherin fährt nie ins Büro.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'Renate works from home, but "Einmal in der Woche fahre ich ins Büro, für die Besprechung mit dem Team".',
            },
          ],
          topicIds: ['a2-04-subordinate-clauses-weil-dass', 'a2-06-als-vs-wenn', 'a2-03-perfekt-vs-prateritum', 'a1-28-time-prepositions'],
        },
        {
          id: 'hoeren-2',
          skill: 'hoeren',
          title: 'Teil 2',
          goal: 'Detailed listening: a radio interview with a village baker, played twice, ten true/false items',
          instructions:
            'Sie hören nun ein Gespräch. Dazu sollen Sie zehn Aufgaben lösen. Sie hören das Gespräch **zweimal**. Entscheiden Sie beim Hören, ob die Aussagen **46–55** richtig oder falsch sind. Lesen Sie jetzt die Aufgaben 46–55. Sie haben dazu eine Minute Zeit.',
          minutes: 14,
          pointsPerItem: 5,
          audio: [
            {
              id: ID + '-hoeren-2-a1',
              label: 'Radiosendung „Menschen aus der Region“ · Interview mit Frau Berger, Bäckerin',
              plays: 2,
              text: `Moderator: Guten Morgen, liebe Hörerinnen und Hörer. In unserer Reihe „Menschen aus der Region“ bin ich heute in Wiesenbach, einem Dorf mit achthundert Einwohnern. Hier gibt es seit dreißig Jahren die Bäckerei Berger. Frau Berger, guten Morgen.
Frau Berger: Guten Morgen.
Moderator: Dreißig Jahre. Wie hat das angefangen?
Frau Berger: Ach, das war eigentlich Zufall. Ich habe Bäckerin gelernt, in einer großen Bäckerei in der Stadt. Dann hat der alte Bäcker hier im Dorf aufgehört, er hatte keinen Nachfolger. Mein Mann und ich haben überlegt, ob wir den Laden übernehmen. Wir hatten fast kein Geld, aber die Bank hat uns einen Kredit gegeben, und die Leute im Dorf haben gesagt: Macht das, wir kommen. Und sie sind gekommen.
Moderator: Wie sieht ein normaler Tag bei Ihnen aus?
Frau Berger: Der Wecker klingelt um halb drei. Um drei stehe ich in der Backstube, und ab halb sieben ist der Laden offen. Am Anfang hat mein Mann noch bei einer Firma gearbeitet und abends in der Backstube geholfen. Seit zehn Jahren arbeitet er ganz bei uns, er macht die Buchhaltung und fährt die Brötchen zu den Schulen und zum Altersheim.
Moderator: Halb drei, jeden Tag?
Frau Berger: Außer sonntags. Sonntags ist der Laden zu, da schlafe ich bis sieben. Das ist mein Luxus.
Moderator: In vielen Dörfern haben die Bäckereien geschlossen. Supermärkte verkaufen Brötchen für zwanzig Cent. Wie überleben Sie?
Frau Berger: Das ist schwer, das will ich nicht verschweigen. Als vor acht Jahren der große Supermarkt an der Hauptstraße aufgemacht hat, haben wir im ersten Jahr ein Drittel weniger verkauft. Ich dachte, das war es jetzt. Aber wir haben nicht versucht, billiger zu werden, das können wir nicht. Wir haben versucht, besser zu werden. Unser Brot wird mit Sauerteig gebacken, der geht vierundzwanzig Stunden. Das schmeckt man. Und bei uns kennt man die Leute. Die alte Frau Krüger kommt jeden Morgen, nicht nur wegen der Brötchen, sondern weil sie mit jemandem reden will.
Moderator: Sie bilden auch aus?
Frau Berger: Ja, seit zwanzig Jahren. Acht Lehrlinge hatten wir insgesamt, zwei davon arbeiten heute noch bei uns. Aber es wird immer schwieriger, junge Leute zu finden. Wer will schon um drei Uhr aufstehen? Dieses Jahr haben wir zum ersten Mal keinen Lehrling gefunden.
Moderator: Was verkaufen Sie am besten?
Frau Berger: Ganz klar die Brötchen, so sechshundert am Tag. Und freitags unser Zwiebelbrot, das ist über die Dorfgrenze hinaus bekannt, da kommen Leute extra aus der Stadt. Kuchen verkaufen wir eigentlich nur am Wochenende, in der Woche kaum.
Moderator: Und wie geht es weiter? Haben Sie Pläne?
Frau Berger: Also, in Rente gehen will ich noch nicht, ich bin erst siebenundfünfzig. Aber mein Mann und ich wollen im nächsten Jahr neben dem Laden ein kleines Café aufmachen, mit sechs Tischen. Die Räume haben wir schon, die alte Scheune. Dann können die Leute sitzen, und wir können auch am Nachmittag etwas verkaufen. Und unsere Tochter, sie ist jetzt dreißig und arbeitet in Hamburg als Konditorin, überlegt, ob sie zurückkommt. Das wäre natürlich mein Traum.
Moderator: Frau Berger, vielen Dank für das Gespräch, und viel Erfolg mit dem Café.
Frau Berger: Danke schön. Und kommen Sie mal vorbei, freitags gibt es Zwiebelbrot.`,
            },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-hoeren-2-46',
              prompt: 'Frau Berger hat ihre Ausbildung in der Bäckerei im Dorf gemacht.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: '"Ich habe Bäckerin gelernt, in einer großen Bäckerei in der Stadt" – she trained in the city, not in the village shop.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-47',
              prompt: 'Der alte Bäcker hatte niemanden, der den Laden weiterführen wollte.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"Dann hat der alte Bäcker hier im Dorf aufgehört, er hatte keinen Nachfolger."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-48',
              prompt: 'Frau Berger beginnt ihre Arbeit in der Backstube um halb drei.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'Half past two is when the alarm rings: "Der Wecker klingelt um halb drei. Um drei stehe ich in der Backstube."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-49',
              prompt: 'Herr Berger arbeitet seit zehn Jahren nur noch in der Bäckerei.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"Seit zehn Jahren arbeitet er ganz bei uns" – before that he had a job at a company and only helped in the evenings.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-50',
              prompt: 'Sonntags öffnet der Laden später als an den anderen Tagen.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: '"Sonntags ist der Laden zu" – it is closed, not open later.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-51',
              prompt: 'Nach der Eröffnung des Supermarkts hat die Bäckerei zuerst deutlich weniger verkauft.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"Als vor acht Jahren der große Supermarkt … aufgemacht hat, haben wir im ersten Jahr ein Drittel weniger verkauft."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-52',
              prompt: 'Frau Krüger kommt auch in die Bäckerei, weil sie sich unterhalten möchte.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"Die alte Frau Krüger kommt jeden Morgen, nicht nur wegen der Brötchen, sondern weil sie mit jemandem reden will."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-53',
              prompt: 'Zwei frühere Lehrlinge arbeiten noch heute in der Bäckerei.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"Acht Lehrlinge hatten wir insgesamt, zwei davon arbeiten heute noch bei uns."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-54',
              prompt: 'Kuchen verkauft die Bäckerei vor allem in der Woche.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'The opposite: "Kuchen verkaufen wir eigentlich nur am Wochenende, in der Woche kaum."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-2-55',
              prompt: 'Die Tochter von Frau Berger hat schon entschieden, dass sie die Bäckerei übernimmt.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'She is only thinking about it: "überlegt, ob sie zurückkommt. Das wäre natürlich mein Traum."',
            },
          ],
          topicIds: ['a2-03-perfekt-vs-prateritum', 'a2-05-wenn-ob-indirect-questions', 'a2-05b-indirect-questions', 'a2-06-als-vs-wenn', 'b1-06-passive-present-past', 'a1-08-numbers-time'],
        },
        {
          id: 'hoeren-3',
          skill: 'hoeren',
          title: 'Teil 3',
          goal: 'Selective listening: five short announcements and recorded messages, played twice, five true/false items',
          instructions:
            'Sie hören nun fünf kurze Texte. Dazu sollen Sie fünf Aufgaben lösen. Sie hören jeden Text **zweimal**. Entscheiden Sie beim Hören, ob die Aussagen **56–60** richtig oder falsch sind.',
          minutes: 8,
          pointsPerItem: 5,
          audio: [
            {
              id: ID + '-hoeren-3-a1',
              label: 'Text 1 · Anrufbeantworter einer Arztpraxis',
              plays: 2,
              text: 'Praxis Doktor Hartmann, guten Tag. Sie rufen außerhalb unserer Sprechzeiten an. Die Praxis ist geöffnet am Montag, Dienstag und Donnerstag von acht bis zwölf Uhr und von vierzehn bis siebzehn Uhr, am Mittwoch und am Freitag nur von acht bis dreizehn Uhr. Termine können Sie auch über unsere Internetseite vereinbaren. In dringenden Fällen wenden Sie sich bitte an den ärztlichen Notdienst unter der Nummer 116 117. Vielen Dank für Ihren Anruf.',
            },
            {
              id: ID + '-hoeren-3-a2',
              label: 'Text 2 · Verkehrsmeldung im Radio',
              plays: 2,
              text: 'Und jetzt der Verkehr. Achtung, Autofahrer in Bonn: Die Kennedybrücke ist wegen Bauarbeiten ab heute Abend zwanzig Uhr bis Montagmorgen fünf Uhr in beiden Richtungen gesperrt. Eine Umleitung ist ausgeschildert und führt über die Südbrücke. Fußgänger und Radfahrer können die Brücke weiterhin benutzen. Die Busse der Linie 640 fahren am Wochenende ebenfalls über die Südbrücke, bitte rechnen Sie mit etwa zehn Minuten Verspätung.',
            },
            {
              id: ID + '-hoeren-3-a3',
              label: 'Text 3 · Durchsage im Kaufhaus',
              plays: 2,
              text: 'Liebe Kundinnen und Kunden, wir haben heute ein besonderes Angebot für Sie: In unserer Sportabteilung im dritten Stock erhalten Sie bis achtzehn Uhr zwanzig Prozent Rabatt auf alle Laufschuhe und Winterjacken. Und für die Kleinen: Ab fünfzehn Uhr gibt es in der Spielwarenabteilung im Erdgeschoss eine kostenlose Bastelstunde. Wir wünschen Ihnen einen angenehmen Einkauf.',
            },
            {
              id: ID + '-hoeren-3-a4',
              label: 'Text 4 · Durchsage am Bahnhof',
              plays: 2,
              text: 'Information zu Gleis sieben: Der Intercity 2214 nach Berlin Hauptbahnhof, planmäßige Abfahrt vierzehn Uhr sechsunddreißig, hat wegen einer Störung an der Strecke voraussichtlich vierzig Minuten Verspätung. Reisende nach Hannover können alternativ den Regionalexpress um vierzehn Uhr fünfzig auf Gleis drei benutzen. Die Wagenreihung des Intercity ist heute umgekehrt: Die erste Klasse befindet sich am Ende des Zuges. Wir bitten um Entschuldigung.',
            },
            {
              id: ID + '-hoeren-3-a5',
              label: 'Text 5 · Programmansage eines Kinos',
              plays: 2,
              text: 'Herzlich willkommen beim Kino Lichtspiele Nord. Unser Programm von Donnerstag bis Mittwoch: In Saal eins läuft täglich um siebzehn Uhr dreißig und um zwanzig Uhr fünfzehn die Komödie „Sommer in Neukölln“. In Saal zwei zeigen wir um achtzehn Uhr den Kinderfilm „Lotte und der Drache“, am Samstag und Sonntag zusätzlich um vierzehn Uhr dreißig. Am Dienstag ist Kinotag: Alle Karten kosten sechs Euro. Karten können Sie an der Kasse oder im Internet reservieren.',
            },
          ],
          items: [
            {
              type: 'mc',
              id: ID + '-hoeren-3-56',
              prompt: 'Die Praxis ist am Mittwochnachmittag geschlossen.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"am Mittwoch und am Freitag nur von acht bis dreizehn Uhr" – no afternoon hours on Wednesday.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-3-57',
              prompt: 'Radfahrer dürfen die Kennedybrücke am Wochenende nicht benutzen.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'The closure is for cars: "Fußgänger und Radfahrer können die Brücke weiterhin benutzen."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-3-58',
              prompt: 'Der Rabatt in der Sportabteilung gilt bis zwanzig Uhr.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: 'The discount runs "bis achtzehn Uhr", not until eight.',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-3-59',
              prompt: 'Wer nach Hannover will, kann einen anderen Zug nehmen.',
              options: ['Richtig', 'Falsch'],
              answer: 0,
              explanation: '"Reisende nach Hannover können alternativ den Regionalexpress um vierzehn Uhr fünfzig auf Gleis drei benutzen."',
            },
            {
              type: 'mc',
              id: ID + '-hoeren-3-60',
              prompt: 'Am Dienstag kosten alle Kinokarten acht Euro.',
              options: ['Richtig', 'Falsch'],
              answer: 1,
              explanation: '"Am Dienstag ist Kinotag: Alle Karten kosten sechs Euro."',
            },
          ],
          topicIds: ['a1-08-numbers-time', 'a1-28-time-prepositions', 'a2-15-genitive-prepositions', 'b1-06-passive-present-past'],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    /* Schriftlicher Ausdruck                                        */
    /* ------------------------------------------------------------ */
    {
      skill: 'schreiben',
      title: 'Schriftlicher Ausdruck',
      minutes: 30,
      maxPoints: 45,
      passPercent: 60,
      parts: [
        {
          id: 'schreiben-1',
          skill: 'schreiben',
          title: 'Schriftlicher Ausdruck',
          goal: 'Reply to an informal email from a friend who wants to visit: four points, a suitable order, Betreff, Anrede, Einleitung and Schluss',
          instructions:
            'Sie haben von Ihrem Freund Lukas folgende E-Mail erhalten. Antworten Sie auf die E-Mail. Überlegen Sie sich vor dem Schreiben eine passende Reihenfolge der Punkte, einen passenden Betreff, eine passende Anrede, Einleitung und einen passenden Schluss.',
          minutes: 30,
          items: [],
          tasks: [
            {
              id: ID + '-schreiben-1-1',
              title: 'Antwort an Lukas',
              instructions: 'Antworten Sie auf die E-Mail. Schreiben Sie etwas zu allen vier Punkten. Vergessen Sie nicht Betreff, Anrede, Einleitung und Schluss.',
              situation: [
                '**Von:** Lukas · **Betreff:** Besuch bei dir?',
                'Hallo!',
                'ich habe endlich drei Tage frei, vom 12. bis 14. Juni, und möchte dich endlich mal in deiner Stadt besuchen! Du erzählst ja immer so viel davon. Ich komme mit dem Zug, das ist am einfachsten. Was können wir zusammen machen? Und ist der Juni überhaupt eine gute Zeit, oder soll ich lieber später kommen? Ich weiß auch nicht, was ich einpacken soll – wie ist das Wetter bei euch? Schreib mir bitte auch, wie ich vom Bahnhof zu dir komme.',
                'Ich freue mich riesig!',
                'Lukas',
              ],
              points: [
                'welche Orte Sie Lukas zeigen wollen',
                'wann die beste Zeit für den Besuch ist',
                'was er mitbringen soll',
                'wie er vom Bahnhof zu Ihrer Wohnung kommt',
              ],
              words: 150,
              minutes: 30,
              model: [
                '**Betreff:** Dein Besuch im Juni',
                'Lieber Lukas,',
                'vielen Dank für deine Mail, ich habe mich riesig gefreut! Natürlich kannst du kommen, drei Tage sind perfekt.',
                'Der Juni ist eine sehr gute Zeit, weil es dann warm, aber noch nicht zu heiß ist. Außerdem gibt es am 13. Juni das Hafenfest mit Musik und Feuerwerk, das solltest du nicht verpassen. Ich möchte dir auf jeden Fall die Altstadt zeigen, den Dom und den großen Markt. Wenn das Wetter mitspielt, fahren wir am Sonntag mit dem Rad an den See, dort kann man auch schwimmen.',
                'Bring also Badesachen mit, bequeme Schuhe und eine leichte Jacke für den Abend. Ein Fahrrad kannst du dir von meiner Mitbewohnerin leihen.',
                'Vom Hauptbahnhof nimmst du die Straßenbahn Linie 4 Richtung Nordstadt und steigst an der Haltestelle „Rathaus“ aus. Von dort sind es fünf Minuten zu Fuß: die Bergstraße hinauf, dann rechts, Hausnummer 12. Schreib mir, wann dein Zug ankommt, dann hole ich dich ab.',
                'Ich freue mich schon sehr auf dich!',
                'Liebe Grüße',
                'Mira',
              ],
              modelNotes: [
                'The order is not the order of the points on the paper: the model answers "wann?" first, because the June date is the most urgent question, then links the places to the season ("Wenn das Wetter mitspielt …") and lets the packing list follow from the plans ("Bring also Badesachen mit"). telc rewards a sensible order, not the order of the bullet list.',
                'Betreff, Anrede ("Lieber Lukas,"), Einleitung (thanks and a reaction) and Schluss ("Ich freue mich schon sehr auf dich!" + "Liebe Grüße") are all there; a missing Betreff or Schluss costs points in Kommunikative Gestaltung.',
                'Informal register throughout: "du", "deine Mail", imperatives "Bring … mit", "Schreib mir", and the friend\'s own tone ("riesig gefreut").',
                'Connectors hold it together: "weil", "Außerdem", "Wenn …, dann", "also", "dann hole ich dich ab"; every sentence adds something new.',
                'The directions use the typical pattern "nimmst du die Linie 4 Richtung …, steigst … aus, von dort … zu Fuß" with concrete details (line, stop, street, house number).',
              ],
              criteria: [
                'All four points are covered with at least one concrete detail each (named places, a month or date, specific items to pack, a line and a stop).',
                'The email has a Betreff, an informal Anrede, an Einleitung that reacts to his email, and a Schluss with a closing formula and your name.',
                'The points come in a sensible order that follows from his questions, not necessarily the order on the paper.',
                'The register is informal and consistent: du-forms, no "Sie", no "Sehr geehrter".',
                'Sentences are linked with connectors (weil, deshalb, außerdem, wenn, dann) rather than listed one after the other.',
                'The text reads like a real reply to Lukas: it refers to what he wrote (train, June, weather) and does not just answer the bullet points.',
                'Verb forms, word order in subordinate clauses and the case after prepositions (vom Bahnhof, an der Haltestelle, an den See) are correct.',
                'Length is around 120–180 words; no point is answered in a single bare sentence.',
              ],
            },
          ],
          topicIds: ['b1-31-register-formal-informal', 'a2-27-adverbial-connectors', 'a2-04-subordinate-clauses-weil-dass', 'a2-18-directions-hin-her', 'a2-18b-nach-zu-in', 'a1-18-imperative'],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    /* Mündlicher Ausdruck                                           */
    /* ------------------------------------------------------------ */
    {
      skill: 'sprechen',
      title: 'Mündlicher Ausdruck',
      minutes: 15,
      maxPoints: 75,
      passPercent: 60,
      parts: [
        {
          id: 'sprechen-1',
          skill: 'sprechen',
          title: 'Teil 1',
          goal: 'Getting to know each other: ask and answer questions about name, origin, home, family, languages, work and hobbies (about 3 minutes)',
          instructions: 'Unterhalten Sie sich mit Ihrer Partnerin bzw. Ihrem Partner über folgende Themen. Die Prüfenden können außerdem noch weitere Fragen stellen.',
          minutes: 3,
          items: [],
          tasks: [
            {
              id: ID + '-sprechen-1-1',
              title: 'Einander kennenlernen',
              instructions: 'Stellen Sie sich vor und stellen Sie Ihrer Partnerin bzw. Ihrem Partner Fragen zu den Themen auf der Liste. Antworten Sie auch auf ihre bzw. seine Fragen.',
              points: [
                'Name',
                'Woher sie oder er kommt',
                'Wie sie oder er wohnt (Wohnung, Haus, Garten …)',
                'Familie',
                'Sprachen (welche? wie lange? warum?)',
                'Was sie oder er macht (Schule, Studium, Beruf …)',
                'Hobbys und Wochenende',
              ],
              minutes: 3,
              model: [
                '**Start and name.** Open the conversation yourself, do not wait: „Hallo, ich bin Khalid. Und wie heißt du?“ – „Freut mich, Ana.“',
                '**Origin.** Give one detail more than the bare answer: „Ich komme aus Pakistan, aus Lahore. Das ist eine große Stadt im Osten. Seit drei Jahren lebe ich in Deutschland. Und du, woher kommst du?“',
                '**Home.** „Ich wohne in Köln, in einer Zweizimmerwohnung im dritten Stock. Einen Garten habe ich leider nicht, aber einen kleinen Balkon. Wohnst du in einer Wohnung oder in einem Haus?“',
                '**Family.** „Ich bin verheiratet und habe eine Tochter, sie ist fünf. Meine Eltern und meine zwei Brüder leben noch in Pakistan. Hast du Geschwister?“',
                '**Languages.** Say which, how long and why: „Meine Muttersprache ist Urdu, ich spreche auch Englisch. Deutsch lerne ich seit zwei Jahren, weil ich hier arbeite und mit meinen Kollegen sprechen möchte. Welche Sprachen sprichst du?“',
                '**Work or study.** „Ich arbeite als Elektriker bei einer kleinen Firma. Die Arbeit gefällt mir, aber ich brauche das B1-Zertifikat für eine Weiterbildung. Was machst du beruflich?“',
                '**Hobbies.** „Am Wochenende spiele ich Cricket mit Freunden, und ich koche gern. Was machst du in deiner Freizeit?“',
                'React to what the partner says before asking the next question: „Ach, interessant!“, „Das kenne ich.“, „Wirklich? Wie lange schon?“',
              ],
              modelNotes: [
                'Each answer has two or three sentences: the fact, one detail, then a question back ("Und du?"). That is what "Interaktion" means in the grid.',
                'The question words cover the list: Wie heißt du? Woher kommst du? Wie wohnst du? Hast du Geschwister? Welche Sprachen sprichst du? Was machst du beruflich? Was machst du am Wochenende?',
                '"seit + Dativ" with the present tense says how long something has been going on: "Seit drei Jahren lebe ich …", "Deutsch lerne ich seit zwei Jahren".',
                'Small reactions ("Ach, interessant!", "Das kenne ich.") show you are listening and keep the talk natural.',
              ],
              criteria: [
                'You opened the conversation yourself and said your name clearly.',
                'You spoke about every point on the list: origin, home, family, languages, work or study, hobbies.',
                'Every answer had at least one extra detail, not just one word.',
                'You asked your partner questions on the same points and listened to the answers.',
                'You reacted to what your partner said (interessant, wirklich, das kenne ich) before moving on.',
                'Verb-second word order and "seit + Dativ" with the present tense were correct.',
                'Pronunciation was clear enough to be understood without repeating.',
              ],
              scenarioId: 'exam-' + ID + '-sprechen-1',
            },
          ],
          topicIds: ['a1-02-greetings', 'a1-07-questions', 'a1-28-time-prepositions', 'a1-25-dative-prepositions'],
        },
        {
          id: 'sprechen-2',
          skill: 'sprechen',
          title: 'Teil 2',
          goal: 'Talk about a topic: report a short opinion you have read, exchange views, tell about your own experiences (about 6 minutes)',
          instructions:
            'Sie haben in einer Zeitschrift etwas zum Thema **„Haustiere in der Stadt“** gelesen. Berichten Sie Ihrer Gesprächspartnerin bzw. Ihrem Gesprächspartner darüber. Ihre Gesprächspartnerin bzw. Ihr Gesprächspartner hat eine andere Meinung dazu gelesen und berichtet Ihnen auch darüber. Unterhalten Sie sich dann über das Thema. Sagen Sie Ihre Meinung und erzählen Sie von eigenen Erfahrungen.',
          minutes: 6,
          items: [],
          tasks: [
            {
              id: ID + '-sprechen-2-1',
              title: 'Über ein Thema sprechen: Haustiere in der Stadt',
              instructions:
                'Teilnehmer/in A berichtet über den Text von Nina Albrecht, Teilnehmer/in B über den Text von Jürgen Sommer. Berichten Sie, was die Person meint. Sagen Sie dann, was Sie selbst denken, und erzählen Sie von eigenen Erfahrungen.',
              situation: [
                '**Teilnehmer/in A** – Nina Albrecht, 29 Jahre, Krankenpflegerin:',
                '„Mein Hund Bruno ist für mich wie Familie. Ich wohne in einer Zweizimmerwohnung mitten in der Stadt, und das funktioniert prima. Wir gehen dreimal am Tag in den Park, dort treffe ich andere Hundebesitzer, und abends ist Bruno mein bester Freund auf dem Sofa. Ohne ihn wäre die Stadt für mich viel einsamer.“',
                '**Teilnehmer/in B** – Jürgen Sommer, 52 Jahre, Lehrer:',
                '„Ich finde, Haustiere gehören nicht in Stadtwohnungen. Ein Hund braucht Platz und einen Garten, keine sechzig Quadratmeter im vierten Stock. Außerdem stören Tiere oft die Nachbarn: Der Hund bellt, die Katze läuft über den Balkon. In unserem Haus musste schon ein Mieter wegen seines Hundes ausziehen. Wer Tiere liebt, sollte aufs Land ziehen.“',
              ],
              points: [
                'Berichten Sie, was die Person in Ihrem Text meint.',
                'Hören Sie, was Ihre Partnerin bzw. Ihr Partner gelesen hat, und fragen Sie nach.',
                'Sagen Sie Ihre eigene Meinung und begründen Sie sie.',
                'Erzählen Sie von eigenen Erfahrungen mit Haustieren.',
              ],
              minutes: 6,
              model: [
                '**1 Report your text (indirect speech, 3–4 sentences).** „Ich habe einen Text von Nina Albrecht gelesen, sie ist Krankenpflegerin. Sie sagt, dass ihr Hund für sie wie Familie ist. Sie wohnt in einer kleinen Wohnung mitten in der Stadt, und das funktioniert gut, weil sie dreimal am Tag in den Park geht. Dort trifft sie andere Leute. Ohne den Hund wäre die Stadt für sie einsamer.“ (As B: „Jürgen Sommer meint, dass Haustiere nicht in Stadtwohnungen gehören. Ein Hund brauche Platz und einen Garten. Außerdem stören Tiere oft die Nachbarn, und in seinem Haus musste schon jemand wegen seines Hundes ausziehen.“)',
                '**2 Ask about the partner\'s text.** „Und was hast du gelesen? Ist die Person dafür oder dagegen?“ – „Wirklich? Warum findet er das?“',
                '**3 Give your opinion with reasons.** „Ich finde, Hunde können gut in der Stadt leben, wenn der Besitzer genug Zeit hat. Das Problem ist nicht die Wohnung, sondern der Mensch. Wer den ganzen Tag arbeitet, sollte keinen Hund haben.“ or „Ich bin eher der Meinung von Herrn Sommer. Ein großer Hund in einer kleinen Wohnung tut mir leid. Eine Katze oder ein Hamster ist etwas anderes.“',
                '**4 Own experience.** „Als Kind hatten wir einen Hund, aber wir hatten auch einen Garten. In meinem Haus in Köln hat meine Nachbarin einen kleinen Hund, der bellt jeden Morgen um sechs. Das nervt. Aber meine Kollegin hat eine Katze, und die stört niemanden.“',
                '**5 React and agree partly.** „Da hast du recht, aber …“ – „Das sehe ich anders, weil …“ – „Vielleicht hängt es vom Tier ab: Ein kleiner Hund ja, ein Schäferhund nein.“',
                '**6 Close.** „Also, wir sind uns einig, dass es auf den Besitzer ankommt.“',
              ],
              modelNotes: [
                'The report uses indirect speech: "Sie sagt, dass …", "Er meint, dass …", "Ein Hund brauche …" – Konjunktiv I is a bonus, "dass" is enough at B1.',
                'Opinions are introduced with the standard chunks "Ich finde, …", "Ich bin der Meinung, dass …", "Meiner Meinung nach …", and every opinion has a "weil" or "denn".',
                'The experience uses the past: "Als Kind hatten wir …", "hat … gebellt"; "Als" for a single past period, not "wenn".',
                'Disagreeing politely ("Da hast du recht, aber …", "Das sehe ich anders") keeps the exchange going; the examiners want interaction, not two monologues.',
                'A Konjunktiv II sentence ("Ohne ihn wäre die Stadt einsamer", "Ein großer Hund … tut mir leid, ich würde …") shows B1 range.',
              ],
              criteria: [
                'You reported the content of your text in your own words, in 3–4 sentences, using "sagt/meint, dass …".',
                'You asked at least one question about the partner\'s text and reacted to the answer.',
                'You gave your own opinion clearly and backed it with at least two reasons.',
                'You told a concrete experience of your own (past tense, with als/wenn used correctly).',
                'You agreed or disagreed with your partner politely and explained why.',
                'The conversation was balanced: you did not only talk and you did not only listen.',
                'Verb position in dass/weil clauses and the forms of indirect speech were correct.',
                'Pronunciation and intonation were clear; pauses did not break the conversation.',
              ],
              scenarioId: 'exam-' + ID + '-sprechen-2',
            },
          ],
          topicIds: ['b1-32-opinions-speaking', 'b1-32b-structuring-a-talk', 'b1-12-indirect-speech', 'b1-18-cause-consequence-concession', 'b1-18b-concession', 'b1-09-konjunktiv-2-irreal'],
        },
        {
          id: 'sprechen-3',
          skill: 'sprechen',
          title: 'Teil 3',
          goal: 'Plan something together from a list of points, make and justify suggestions, react to the partner, reach an agreement (about 6 minutes)',
          instructions:
            'Ihr Deutschkurs endet in zwei Wochen. Zum Abschluss möchten Sie mit allen Teilnehmerinnen und Teilnehmern ein Picknick machen. Planen Sie das Picknick zusammen mit Ihrer Gesprächspartnerin bzw. Ihrem Gesprächspartner. Entscheiden Sie zuerst, was Sie machen möchten und warum. Tragen Sie Ihre Ideen vor und begründen Sie sie. Reagieren Sie auf die Ideen Ihrer Partnerin bzw. Ihres Partners. Einigen Sie sich auf einen gemeinsamen Vorschlag.',
          minutes: 6,
          items: [],
          tasks: [
            {
              id: ID + '-sprechen-3-1',
              title: 'Gemeinsam etwas planen: Picknick für den Kurs',
              instructions: 'Sie haben sich schon diese Liste gemacht. Besprechen Sie alle Punkte und einigen Sie sich.',
              situation: ['**Picknick für den Kurs**', '• Wann?', '• Wo?', '• Essen und Getränke', '• Wer bringt was?', '• Was machen wir bei Regen?', '• …'],
              points: ['Wann?', 'Wo?', 'Essen und Getränke', 'Wer bringt was?', 'Was machen wir bei Regen?'],
              minutes: 6,
              model: [
                '**Open and suggest the date.** „Also, lass uns das Picknick planen. Ich schlage vor, wir machen es am letzten Kurstag, am Freitag nach dem Unterricht. Dann sind alle da. Was meinst du?“',
                '**Place with a reason.** „Ich wäre für den Stadtpark am See, weil man dort grillen darf und es Tische gibt. Außerdem ist er mit der Straßenbahn gut zu erreichen.“ – If Ana prefers another place: „Der Rheinpark ist auch schön, aber er ist weiter weg. Wie wäre es, wenn wir die anderen fragen?“',
                '**Food and drinks.** „Jeder könnte etwas aus seinem Land mitbringen, das ist doch eine schöne Idee für einen Deutschkurs. Ich bringe Samosas mit. Getränke kaufen wir zusammen, Wasser und Saft, und wir sammeln fünf Euro pro Person.“',
                '**Who brings what.** „Ich kümmere mich um die Liste, wer was mitbringt, und schicke sie in die Gruppe. Könntest du den Grill von deinem Bruder mitbringen? Und Teller und Becher kauft Fatima, sie hat gesagt, sie hilft gern.“',
                '**Rain.** „Wenn es regnet, verschieben wir das Picknick nicht, sondern machen es im Kursraum. Ich frage die Schule, ob wir den Raum am Freitagabend benutzen dürfen. Oder wir gehen alle in die Pizzeria neben der Schule.“',
                '**React and give way once.** „Da hast du recht, der Freitag ist für viele schlecht, weil sie arbeiten. Dann nehmen wir den Samstag um 14 Uhr.“',
                '**Summarise the agreement.** „Gut, dann machen wir es so: Samstag, 14 Uhr, Stadtpark am See, jeder bringt etwas zu essen, ich mache die Liste, du bringst den Grill, bei Regen gehen wir in den Kursraum. Einverstanden?“',
              ],
              modelNotes: [
                'Suggestions use the standard patterns: "Ich schlage vor, …", "Wie wäre es, wenn …?", "Wir könnten …", "Lass uns …" – all with a reason ("weil", "denn", "Außerdem").',
                'Konjunktiv II makes requests polite: "Könntest du den Grill mitbringen?", "Ich wäre für …".',
                'The rain point uses a conditional clause: "Wenn es regnet, (dann) machen wir …" with the verb directly after the wenn-clause.',
                'Giving way once ("Da hast du recht, … Dann nehmen wir den Samstag") shows interaction; the grid rewards reacting to the partner, not winning.',
                'The closing summary ("Gut, dann machen wir es so: …") proves that an agreement was reached and covers every point on the list.',
              ],
              criteria: [
                'You made a concrete suggestion for every point on the list: date, place, food and drinks, who brings what, rain plan.',
                'Each suggestion came with a reason (weil, denn, deshalb, außerdem).',
                'You reacted to your partner\'s ideas, agreed with some and objected to at least one with a reason.',
                'You used polite forms for proposals and requests (Wie wäre es …?, Könntest du …?, Wir könnten …).',
                'You asked your partner for her opinion instead of deciding everything yourself.',
                'At the end you summarised what you both agreed on.',
                'Word order after wenn/weil/dass and the forms of Konjunktiv II were correct.',
                'You spoke fluently enough to keep the planning going for about six minutes.',
              ],
              scenarioId: 'exam-' + ID + '-sprechen-3',
            },
          ],
          topicIds: ['a2-20-konjunktiv-2-polite', 'a2-20b-wishes-suggestions', 'b1-32-opinions-speaking', 'b1-32b-structuring-a-talk', 'b1-20-conditions', 'a2-27-adverbial-connectors'],
        },
      ],
    },
  ],
  scenarios: [
    {
      id: 'exam-' + ID + '-sprechen-1',
      level: 'B1',
      unit: 0,
      title: 'telc B1 Sprechen Teil 1: Einander kennenlernen',
      situation:
        'The oral exam has just started. You sit next to Ana, the other candidate, and the examiner asks you both to get to know each other: name, origin, home, family, languages, work or study, hobbies. Ana starts, then you take turns asking and answering.',
      partner: {
        name: 'Ana',
        role: 'fellow candidate in the telc B1 oral exam',
        persona:
          'Friendly, a little nervous, from Porto, lives in a shared flat in Düsseldorf, works as a dental assistant, learns German for her job, has a brother in Lisbon, likes hiking and cooking. Answers each question in two or three sentences and always asks one back ("Und du?"). Works through the whole list; if the learner forgets a point (family, languages, hobbies), asks about it. Reacts briefly to answers ("Ach, interessant!", "Wie lange schon?"). Keeps "du" throughout and does not correct mistakes.',
      },
      register: 'du',
      goals: [
        'introduce yourself: name, where you come from and how long you have lived here',
        'describe how you live and your family in two or three sentences each',
        'say which languages you speak, how long and why you learn German, and what you do (work or study)',
        'ask Ana at least three questions from the list and react to her answers',
      ],
      opener: 'Hallo! Ich bin Ana. Und wie heißt du? Woher kommst du?',
      usefulPhrases: [
        { de: 'Ich heiße … und komme aus …', en: 'My name is … and I come from …' },
        { de: 'Seit zwei Jahren lebe ich in Deutschland.', en: 'I have been living in Germany for two years.' },
        { de: 'Ich wohne in einer Dreizimmerwohnung im zweiten Stock.', en: 'I live in a three-room flat on the second floor.' },
        { de: 'Ich bin verheiratet und habe zwei Kinder.', en: 'I am married and have two children.' },
        { de: 'Meine Muttersprache ist …, außerdem spreche ich …', en: 'My mother tongue is …, and I also speak …' },
        { de: 'Deutsch lerne ich, weil ich hier arbeiten möchte.', en: 'I learn German because I want to work here.' },
        { de: 'Ich arbeite als … / Ich studiere …', en: 'I work as a … / I study …' },
        { de: 'In meiner Freizeit … ich gern.', en: 'In my free time I like to …' },
        { de: 'Und du? Wie wohnst du?', en: 'And you? How do you live?' },
        { de: 'Ach, interessant! Wie lange schon?', en: 'Oh, interesting! For how long?' },
      ],
      grammarFocus: ['a1-02-greetings', 'a1-07-questions', 'a1-28-time-prepositions', 'a1-25-dative-prepositions'],
      vocabFocus: ['die Muttersprache', 'die Wohngemeinschaft', 'der Stock', 'die Geschwister', 'der Beruf', 'die Ausbildung', 'das Hobby', 'das Wochenende', 'verheiratet', 'ledig'],
      minTurns: 7,
    },
    {
      id: 'exam-' + ID + '-sprechen-2',
      level: 'B1',
      unit: 0,
      title: 'telc B1 Sprechen Teil 2: Haustiere in der Stadt',
      situation:
        'Part 2 of the oral exam. You have read the opinion of Nina Albrecht, who loves living with her dog in a city flat. Ana, the other candidate, has read the opinion of Jürgen Sommer, who thinks pets do not belong in flats. First you each report what you read, then you discuss the topic, give your opinions and talk about your own experiences.',
      partner: {
        name: 'Ana',
        role: 'fellow candidate in the telc B1 oral exam',
        persona:
          'Reports Jürgen Sommer\'s text in her own words (pets do not belong in city flats, a dog needs a garden, animals disturb the neighbours, a tenant in his house had to move out because of his dog) and mostly agrees with him: she grew up with a dog on a farm and thinks a dog in a small flat is sad. Asks the learner what their text says, whether they have or had a pet, and what their neighbours think. Disagrees politely once ("Das sehe ich anders, weil …"), accepts a good argument ("Da hast du recht"), and tries to find a middle ground at the end (small animals yes, big dogs no). Keeps "du", does not correct mistakes.',
      },
      register: 'du',
      goals: [
        'report Nina Albrecht\'s opinion in three or four sentences using "sie sagt/meint, dass …"',
        'ask Ana what her text says and react to it',
        'give your own opinion on pets in the city with at least two reasons',
        'tell Ana about an experience of your own with pets (yours, your family\'s or a neighbour\'s) in the past tense',
      ],
      opener: 'Ich habe einen Text von Jürgen Sommer gelesen. Er findet, dass Haustiere nicht in Stadtwohnungen gehören. Was steht in deinem Text?',
      usefulPhrases: [
        { de: 'In meinem Text sagt eine Frau, dass …', en: 'In my text a woman says that …' },
        { de: 'Sie meint, ohne ihren Hund wäre die Stadt einsamer.', en: 'She thinks that without her dog the city would be lonelier.' },
        { de: 'Ich finde, das kommt auf den Besitzer an.', en: 'I think it depends on the owner.' },
        { de: 'Meiner Meinung nach brauchen große Hunde einen Garten.', en: 'In my opinion big dogs need a garden.' },
        { de: 'Da hast du recht, aber …', en: 'You are right there, but …' },
        { de: 'Das sehe ich anders, weil …', en: 'I see that differently, because …' },
        { de: 'Als Kind hatten wir eine Katze.', en: 'As a child we had a cat.' },
        { de: 'Meine Nachbarin hat einen Hund, der jeden Morgen bellt.', en: 'My neighbour has a dog that barks every morning.' },
        { de: 'Hast du selbst ein Haustier?', en: 'Do you have a pet yourself?' },
        { de: 'Also sind wir uns einig, dass …', en: 'So we agree that …' },
      ],
      grammarFocus: ['b1-32-opinions-speaking', 'b1-32b-structuring-a-talk', 'b1-12-indirect-speech', 'b1-18-cause-consequence-concession', 'b1-18b-concession', 'b1-09-konjunktiv-2-irreal'],
      vocabFocus: ['das Haustier', 'der Besitzer', 'die Nachbarn', 'bellen', 'die Verantwortung', 'der Mieter', 'der Vermieter', 'stören', 'sich kümmern um', 'einsam'],
      minTurns: 7,
    },
    {
      id: 'exam-' + ID + '-sprechen-3',
      level: 'B1',
      unit: 0,
      title: 'telc B1 Sprechen Teil 3: Ein Picknick für den Kurs planen',
      situation:
        'Part 3 of the oral exam. Your German course ends in two weeks and the whole class wants to have a picnic to say goodbye. You and Ana, the other candidate, plan it together from a list: when, where, food and drinks, who brings what, what to do if it rains. Make suggestions with reasons, react to hers, and agree on a plan.',
      partner: {
        name: 'Ana',
        role: 'fellow candidate in the telc B1 oral exam',
        persona:
          'Has ideas of her own: Saturday afternoon rather than Friday because many people work late on Friday; the Rheinpark because of the view; everyone brings a dish from their country; she can bring a big blanket and her speaker for music. Objects once with a reason when the learner suggests grilling (she thinks it is forbidden in most parks and suggests sandwiches and salads instead) but gives way if the learner has an argument. Asks "Was meinst du?" after each idea, insists that the rain question gets an answer, and at the end asks the learner to summarise what was agreed. Keeps "du", does not correct mistakes.',
      },
      register: 'du',
      goals: [
        'suggest a day and a place for the picnic and give a reason for each',
        'propose what to eat and drink and who brings what, and ask Ana for her ideas',
        'react to Ana\'s objection and either defend your idea or accept hers',
        'agree on what to do if it rains and summarise the whole plan at the end',
      ],
      opener: 'So, wir müssen das Picknick für den Kurs planen. Wann sollen wir es machen? Ich hätte einen Vorschlag, aber sag du zuerst.',
      usefulPhrases: [
        { de: 'Ich schlage vor, wir machen es am Samstag.', en: 'I suggest we do it on Saturday.' },
        { de: 'Wie wäre es mit dem Stadtpark? Dort gibt es Tische.', en: 'How about the city park? There are tables there.' },
        { de: 'Wir könnten jeder etwas aus unserem Land mitbringen.', en: 'We could each bring something from our country.' },
        { de: 'Könntest du dich um die Getränke kümmern?', en: 'Could you take care of the drinks?' },
        { de: 'Ich mache eine Liste und schicke sie in die Gruppe.', en: 'I will make a list and send it to the group.' },
        { de: 'Da hast du recht, dann lieber Samstag.', en: 'You are right, then better Saturday.' },
        { de: 'Das finde ich nicht so gut, weil …', en: 'I do not think that is such a good idea, because …' },
        { de: 'Wenn es regnet, gehen wir in den Kursraum.', en: 'If it rains, we go to the classroom.' },
        { de: 'Was meinst du dazu?', en: 'What do you think about that?' },
        { de: 'Gut, dann machen wir es so: …', en: 'Good, then this is what we do: …' },
      ],
      grammarFocus: ['a2-20-konjunktiv-2-polite', 'a2-20b-wishes-suggestions', 'b1-20-conditions', 'a2-27-adverbial-connectors', 'b1-32-opinions-speaking', 'b1-32b-structuring-a-talk'],
      vocabFocus: ['das Picknick', 'der Vorschlag', 'die Decke', 'der Grill', 'grillen', 'sich kümmern um', 'mitbringen', 'verschieben', 'der Kursraum', 'sich einigen'],
      minTurns: 7,
    },
  ],
};

export default exam;
