# Content authoring guide

All content is TypeScript data under `src/content/`. Types live in `src/content/types.ts`; the course structure in `src/content/curriculum.ts`.

## Grammar topics — `src/content/grammar/<a1|a2|b1>/<topic-id>.ts`

One file per topic, default-exporting a `Topic`. See `src/content/grammar/a1/a1-11-nominative.ts` for the reference example; match its tone and depth.

Rules:
- **id / level / unit / order / title / germanTerm** must match `curriculum.ts` exactly (order = the topic's number within the level).
- **Audience**: an adult who skipped A1 and has gaps. Write in **easy English**, short sentences, no linguistic jargon without an immediate plain explanation. Give the German term in italics the first time (*Nominativ*).
- **summary**: one sentence, plain, what it is and when you use it.
- **explanation**: markdown in a template literal, 300–600 words. Use `###` headings, tables for forms/endings, bold for the key words. Structure: *What it is* → *How it works* (rules + tables) → *Why it matters / when you use it*. Do **not** use backticks or `${` inside the template literal.
- **examples**: 5–8 short German sentences with English, each showing one point. Add a short note in parentheses in the English when it helps.
- **connections**: 2–5 links to other topic ids from `curriculum.ts` (prerequisites and follow-ups) with one sentence each on how they connect.
- **edgeCases**: 3–6 markdown bullets: common mistakes, exceptions, things learners mix up.
- **exercises**: 9–12, mixed types, in rising difficulty. Ids: `<topic-id>-ex01`, `-ex02`, … Every exercise has an `explanation` that teaches, not just "correct".
  - `mc`: 3–4 options, exactly one correct, `answer` is the index. Distractors must be plausible.
  - `fill`: exactly one `___` in the prompt. Give the English word or base form in parentheses when it is not obvious: `Ich ___ (haben) Hunger.` List every acceptable spelling in `answer` (e.g. `['habe']`). Use real umlauts and ß.
  - `order`: `words` is the sentence split into tokens **in scrambled order**, punctuation attached to the final token (`'Kino.'`). `answer` lists every accepted word order. First word capitalised.
  - `match`: 4–6 pairs, left side and right side each unique.
  - `translate`: short English sentence → German. List all natural variants in `answer`. Add a `hint` with the needed vocabulary.
- Content must be **correct standard German** (Hochdeutsch). When unsure, prefer the most common textbook form.
- Keep the whole file under ~350 lines.

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
