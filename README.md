# Alles Klar

A self-paced German course from A1 to B1 that runs as a web app and installs on your phone. Grammar concepts explained in easy English, searchable at any time; a daily vocabulary routine with spaced repetition; interactive exercises with instant or end-of-set feedback; and a test for each level so you know where you stand.

## What is inside

| Area | What you get |
|------|--------------|
| **Learn** | 100 topics (A1: 36, A2: 32, B1: 32) in units, each with an explanation, examples with speech, how it connects to other rules, edge cases, and 9–12 exercises. |
| **Concepts** | Search any term (Dativ, conjugation, Partizip II …) across all topics plus a 45-term glossary. |
| **Vocab** | ~1,600 words with articles, plurals, verb forms and example sentences. Daily new words + reviews scheduled by SM-2 or Leitner (your choice). Flashcard, multiple-choice and typing modes. |
| **Tests** | A level test per level: 30–40 grammar questions sampled across every unit + 20 vocabulary items, with a report by unit and the weakest topics to revisit. |
| **Settings** | New words per day, review days, quiz mode, scheduler, feedback timing, theme, auto-speak. |

Speech uses the free German voices built into iOS, Android, macOS and Windows (Web Speech API). Speaking practice with a conversation partner is planned as the last step.

## Run it

Requires Node 24+ (uses the built-in SQLite module) and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173. The API runs on port 8787 and is proxied under `/api`.

Production:

```bash
pnpm build
pnpm start
```

`pnpm start` serves the built app and the API from one Node process on port 8787 (set `API_PORT` to change it). Put it behind HTTPS (for example Caddy or a reverse proxy) so the PWA can be installed on a phone: open the URL in Safari or Chrome and choose "Add to Home Screen". Progress is saved on the device and synced when online.

Data lives in `data/alles-klar.db` (set `DB_PATH` to move it). Delete the file to start fresh.

## Privacy

Accounts are a username plus a password hash. The server stores only the learner's progress: word cards, exercise results, test attempts and settings. No email, no personal data, no analytics.

## Content

All course content is plain TypeScript data under `src/content/`:

- `curriculum.ts` – levels, units and topic ids (the single source of truth for structure)
- `grammar/<level>/<topic-id>.ts` – one file per topic
- `vocab/<level>-u<unit>-<theme>.ts` – one file per vocabulary theme
- `glossary.ts` – grammar terms for the Concepts search

The learning plan is in [docs/CURRICULUM.md](docs/CURRICULUM.md). Authoring rules are in [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md). Check content with:

```bash
pnpm validate
```

Adding a level (B2 …) is: add it to `curriculum.ts`, drop in topic and vocab files, run the validator. The app, the Concepts search and the level test pick it up automatically.

## Stack

Vite + React 19 + TypeScript + Tailwind v4, `vite-plugin-pwa` for offline/installable. Backend: Hono on Node with the built-in `node:sqlite`. No ORM, no auth provider, no third-party services.
