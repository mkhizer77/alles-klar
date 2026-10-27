# App design

Screens are in `docs/screenshots/`. Mobile uses a bottom tab bar (Home, Learn, Vocab, Concepts, Tests) with Settings behind the gear; desktop uses a left sidebar. Light and dark themes follow the system by default. Reading width is capped at 48rem so explanations stay comfortable on a laptop.

## Screens

| Screen | Route | Purpose |
|--------|-------|---------|
| Sign in / Create account | `/` (signed out) | Username + password only. Explains what is stored. |
| Home | `/` | Greeting, streak, today's vocabulary (new + due), "Continue learning" (first topic under 80 %), level progress bars, last test, concept search shortcut. |
| Learn | `/learn/:level` | Level tabs, unit sections with vocabulary theme, topic rows with status (New / Read / score). Link to the level test. |
| Topic | `/topic/:id` | Summary, explanation (markdown with tables), examples with speech, how it connects (links), watch out (edge cases), practice card. Prev/next topic links. Sticky Practice button on mobile. |
| Practice | `/practice/:id` | Intro (choose feedback timing) → exercise runner → results report with retry-the-wrong and next-topic. |
| Reading | `/reading/:id` | Unit text with strategy tip, read-aloud, glossary with speech, then the comprehension questions as an exercise session. |
| Writing | `/writing/:id` | Task with points and grammar links, tap-to-insert phrases, autosaved editor with live word count and automatic checks; then side-by-side with the model answer and notes, and a self-check list whose ticks become the score. |
| Listening | `/listen/:level/:unit` | Ten dictations sampled from the unit's example sentences; play / slow replay; word-level diff after checking. |
| Concepts | `/concepts?q=` | Search across topics and glossary with level filter; A–Z glossary when empty. |
| Vocab | `/vocab` | Stats, start session, settings shortcut, word lists by level/theme with per-word status and speech. |
| Vocab session | `/vocab/session?set=&level=` | Queue of due reviews interleaved with new words. Flashcard / choice / type modes. Wrong cards come back once in the same session. |
| Tests | `/tests` | One card per level with last/best score and verdict. |
| Test run | `/tests/:level` | Intro → runner with feedback at the end → report: score, verdict, by-unit bars, weakest topics, vocabulary score, every answer. |
| Settings | `/settings` | New words/day, review days, quiz mode, scheduler (SM-2 or Leitner), feedback timing, auto-speak, theme, account (sign out, delete). |

## Exercise types

- **Choose** (multiple choice) – tap an option; correct one turns green, a wrong pick red.
- **Fill in** – inline blank with umlaut keys; lenient comparison (case, spacing, final punctuation ignored); wrong answers show the accepted form(s).
- **Word order** – tap tokens to build the sentence, tap again to remove; accepted orders listed per exercise.
- **Match** – tap left, then right; pairs get a colour; tap a pair to undo.
- **Translate** – free text with umlaut keys and a vocabulary hint; several accepted variants.
- **Listen** – the sentence is spoken (Web Speech API, German voice); the learner types it. Punctuation and case are ignored; a word diff shows what was missed.

Feedback: *after each one* shows the result and the explanation before moving on; *at the end* collects everything into a report. Level tests are always at the end.

## Progress model

Everything the learner does is a small JSON value under a key (`topic:<id>`, `word:<id>`, `settings`, `activity`, `tests`). The client keeps it in memory + localStorage and syncs to the server with last-write-wins by timestamp, so the app works offline and across devices.

- Topic: attempts, best score, last score, last date, result per exercise.
- Word card: due date, interval, ease, reps, lapses, Leitner box, introduced date.
- Activity: per-day counts of exercises and cards (drives the streak).
- Tests: list of attempts with per-unit and per-topic breakdown.

## Next steps

1. Speaking: conversation partner using on-device speech recognition and synthesis with an AI model behind it (last, as agreed).
2. Native-speaker review of the generated content; the writers flagged their judgement calls in `docs/CONTENT-NOTES.md`.
3. Optional AI feedback on writing tasks once an API key is available (the writing page is the natural place to add it).
