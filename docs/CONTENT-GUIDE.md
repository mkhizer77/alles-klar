# Content authoring guide

All content is TypeScript data under `src/content/`. Types live in `src/content/types.ts`; the course structure in `src/content/curriculum.ts`.

## Grammar topics — `src/content/grammar/<a1|a2|b1>/<topic-id>.ts`

One file per topic, default-exporting a `Topic`. See `src/content/grammar/a1/a1-20-accusative.ts` for the reference example; match its tone, length and shape exactly.

A topic is a **short lesson in steps**. The learner reads one small step, sees two to four example sentences for it, and moves on. Nothing in a step depends on a step the learner has not read yet.

Rules:
- **id / level / unit / order / title / germanTerm** must match `curriculum.ts` exactly (order = the topic's position within the level). Ids look like `a1-14-es-gibt-demonstratives`; a topic that was split off from another keeps that topic's number with a letter: `a1-14b-demonstratives`.
- **Audience**: an adult who skipped A1 and has gaps. Write in **easy English**: short sentences, one idea at a time, "you" not "the learner". No grammar term without a plain-English gloss in brackets the first time (*Nominativ* (the subject case)). Prefer "the word for the doer" over "the agent".
- **summary**: one sentence, under 40 words: what the structure is for and the one rule to remember.
- **steps**: 3–7 `LessonStep`s (split-off topics usually 3–5). Each step:
  - **title**: 2–7 words naming the one thing it teaches ("Only the masculine changes").
  - **text**: markdown, **20–90 words**, 1–3 short paragraphs. One idea per step. Bold the German form the step is about. At most one small table (max 7 rows, 4 columns) and only for forms or endings. No headings, no backticks, no `${`.
  - **examples**: 2–4 German sentences, each under 12 words, each showing exactly this step and nothing new, with English. Add a short note in brackets in the English when it helps: `'I have a dog. (ein → einen)'`. No brackets or slashes in the German, so the sentence can be used for dictation.
  - Step 1 says what the structure is for, with the simplest example. The last step may be a quick method or "the rule in one line". Do **not** write a "Why it matters" step; the summary does that job.
  - The whole lesson stays **under 450 words** of step text. If it does not fit, the topic is two topics: say so instead of squeezing.
- **connections**: 1–6 links to other topic ids from `curriculum.ts` (prerequisites and follow-ups) with one short sentence each. A split-off topic links to its sibling.
- **edgeCases**: 2–6 markdown bullets, each under 45 words: common mistakes, exceptions, things learners mix up. The German form in bold, the fix in the same line.
- **exercises**: 9–12, mixed types, in rising difficulty. Ids: `<topic-id>-ex01`, `-ex02`, … Every exercise has an `explanation` that teaches, not just "correct".
  - `mc`: 3–4 options, exactly one correct, `answer` is the index. Distractors must be plausible.
  - `fill`: exactly one `___` in the prompt. Give the English word or base form in parentheses when it is not obvious: `Ich ___ (haben) Hunger.` List every acceptable spelling in `answer` (e.g. `['habe']`). Use real umlauts and ß.
  - `order`: `words` is the sentence split into tokens **in scrambled order**, punctuation attached to the final token (`'Kino.'`). `answer` lists every accepted word order. First word capitalised.
  - `match`: 4–6 pairs, left side and right side each unique.
  - `translate`: short English sentence → German. List all natural variants in `answer`. Add a `hint` with the needed vocabulary.
- Content must be **correct standard German** (Hochdeutsch). When unsure, prefer the most common textbook form.
- Keep the whole file under ~300 lines. Run `node scripts/validate-content.mjs src/content/grammar/<level>/<file>.ts` before you finish; it enforces every count above.

## Vocabulary — `src/content/vocab/<level>-u<unit>-<theme>.ts`

One file per unit theme, default-exporting a `VocabSet`. See `src/content/vocab/a1-u1-greetings.ts`.

- Follow the Goethe-Institut word lists for the level (A1 ≈ 650 words, A2 ≈ 1300, B1 ≈ 2400 cumulative); pick the most useful words for the theme.
- Nouns: capitalised `de`, `article`, and `plural` written as `'die Häuser'` (write `'–'` if no plural, e.g. uncountable).
- Verbs: infinitive in `de`, plus `forms` { er, prat, perfekt } e.g. `{ er: 'fährt', prat: 'fuhr', perfekt: 'ist gefahren' }`. Separable verbs: `'anrufen'` with `er: 'ruft an'`.
- Adjectives / adverbs / others: base form.
- `example`: one short natural sentence using the word, at the learner's level, with English.
- `id`: `<level>-<slug>` lowercase, ASCII (ä→ae, ö→oe, ü→ue, ß→ss), unique across all sets.
- `theme` is the same string on every word in the set and on the set itself.

## Glossary — `src/content/glossary.ts`

Short definitions of grammar terms (Nominativ, Konjugation, Partizip II …) in easy English, each linking to the topic ids that teach it.

## Reading texts — `src/content/reading/<level>-u<unit>-reading.ts`

One file per unit, default-exporting a `ReadingText`. See `src/content/reading/a1-u1-reading.ts`.

- **id** `<level>-u<unit>-reading`, with `level` and `unit` matching `curriculum.ts`.
- **Text type**: realistic and varied across units: profile, email, chat, advert, notice, menu, timetable, short story, dialogue, forum post, blog, news-style report, letter of complaint, job ad. Use the unit's vocabulary theme and its grammar (a unit on the Perfekt gets a text in the Perfekt).
- **Length**: A1 70–170 words, A2 130–260, B1 200–360, in 2–5 `paragraphs`. Only grammar from this unit or earlier.
- **intro**: one English sentence saying what the text is and the situation. **tip**: one concrete reading strategy for this text (scan for numbers, use the heading, guess compounds from their parts, look for connectors …).
- **glossary**: 4–10 harder words from the text, nouns with article, with English.
- **questions**: 6–8 exercises with ids `<id>-q01`, `-q02` …: mostly `mc` (including Richtig/Falsch items with options `['Richtig', 'Falsch']`), one or two `fill` whose answer is a word from the text, optionally one `match` of text vocabulary and one `translate`. Every explanation quotes the relevant words from the text.
- Same exercise rules as for topics (one `___` per fill, scrambled `order` words, etc.).

## Writing tasks — `src/content/writing/<level>-u<unit>-writing.ts`

One file per unit, default-exporting a `WritingTask`. See `src/content/writing/a1-u1-writing.ts`.

- **id** `<level>-u<unit>-writing`, `level` and `unit` matching `curriculum.ts`.
- **task**: the situation and what to write, in English, 1–3 sentences. **points**: 3–4 content points the learner must cover (Goethe exam style: "Schreiben Sie zu allen Punkten").
- **textType** one of email, message, note, post, letter, story, description, opinion; **register** informal/formal/neutral. Vary across units; formal letters/emails appear from A2 on.
- **minWords/maxWords**: A1 30–60 or 40–80, A2 60–120, B1 100–180 (B1 unit 10: formal letter 120–200).
- **usefulPhrases**: 6–12 chunks with English and a `role`: `greeting`, `closing` (both required for email/letter/message), `connector`, `phrase`. These must fit the register.
- **grammarFocus**: 2–4 topic ids from this unit (or earlier) that the task practises.
- **mustUse**: 2–4 automatic checks: `{ label, pattern, min }` where `pattern` is a RegExp source (case-insensitive) for a structure the unit teaches, e.g. a Perfekt form `'\\b(habe|hat|bin|ist|sind|haben)\\b[^.!?]*\\bge\\w+(t|en)\\b'`, a subordinate clause `'\\b(weil|dass)\\b'`, a comparative `'\\b\\w+er als\\b'`. Keep patterns simple and robust; the model answer must satisfy every one (the validator checks this). Write plain `\\b` and `\\w`: the app rewrites them to treat ä, ö, ü and ß as letters, so `\\bließ\\b` works as expected.
- **checklist**: 6–10 self-check items in English, concrete and verifiable by the learner (content points, greeting/closing, word order, specific endings, capitalisation, length). The first item is always "All N points are covered: …".
- **model**: a model answer as paragraphs (greeting line, body paragraphs, closing line, name) within the word range, using the unit's grammar naturally, in correct standard German.
- **modelNotes**: 3–6 English bullets (markdown inline, bold the German) explaining what makes the model work.

## Speaking scenarios — `src/content/speaking/<level>-u<unit>-speaking.ts`

One file per unit, default-exporting a `SpeakingScenario`. See `src/content/speaking/a1-u1-speaking.ts`. The scenario is played by an AI partner (`src/lib/partner-prompt.ts` builds its instructions from these fields), so write for two readers: the learner (title, situation, goals, phrases) and the model (partner persona).

- **id** `<level>-u<unit>-speaking`, `level` and `unit` matching `curriculum.ts`.
- **title**: the situation in 3–7 English words. **situation**: 2–3 English sentences: where you are, who you talk to, why. Vary across units: service encounters (reception, shop, doctor, station, Bürgeramt), social talk (neighbour, colleague, friend), phone calls, interviews, discussions and debates at B1.
- **partner**: `name` (a German name with Frau/Herr for `Sie` scenarios, first name only for `du`), `role`, and `persona`: 2–4 English sentences on how the partner behaves and what they push for, so the conversation keeps moving (asks follow-ups, has a small complication, offers two options to choose from …). A1 partners speak slowly in short sentences; B1 partners can disagree and ask for reasons.
- **register**: `du` or `Sie`, consistent with the situation. Both should appear in every level.
- **goals**: 3–4 concrete things the learner must do, in English, each checkable from the transcript ("ask what time it starts", "say why you prefer the flat on the ground floor", "give two reasons against the plan"). They should pull in this unit's grammar.
- **opener**: the partner's first German line, under 30 words, in the register, ending with a question or an invitation to speak. Only grammar from this unit or earlier.
- **usefulPhrases**: 6–10 `{ de, en }` chunks the learner can say, in the register, including one repair phrase (Wie bitte? / Können Sie das wiederholen? / Was bedeutet …?).
- **grammarFocus**: 2–5 topic ids from this unit (or earlier). **vocabFocus**: 6–10 German words or chunks from the unit's vocabulary theme (nouns with article).
- **minTurns**: learner turns before the conversation can be wrapped up: 5 at A1, 6 at A2, 7–8 at B1.

## Mock exams — `src/content/exams/<level>-<provider>-<n>.ts`

Full papers in the format of the official exams. The format tables, id scheme and authoring rules are in [EXAM-GUIDE.md](EXAM-GUIDE.md); the validator checks part and item counts, audio play counts, task models and scenarios.
