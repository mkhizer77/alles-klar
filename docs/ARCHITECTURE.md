# Architecture

## Goals

1. Zero running cost. Free tiers only, nothing that sleeps or expires.
2. Installable on a phone, usable offline on a commute, synced across devices.
3. No personal data: an account is a username, a password hash and progress.
4. Content is data, not code: adding a level means adding files.
5. Small, testable pieces with clear boundaries.

## Hosting (decision record)

| Piece | Where | Cost | Why |
|-------|-------|------|-----|
| App (static PWA) | **GitHub Pages**, built by GitHub Actions on every push to `main` | free | Static files only; the repo already lives on GitHub. Served at `https://<user>.github.io/alles-klar/`. |
| API | **Cloudflare Workers** (`server/worker.ts`) | free tier: 100k requests/day | Runs the same Hono app as the dev server. No cold-start sleep, no idle pausing. |
| Database | **Cloudflare D1** | free tier: 5 GB, 5M reads/day, 100k writes/day | SQLite dialect, so the schema and SQL are identical to local development. |
| Local dev / self-host | Node 24 with `node:sqlite` (`server/node.ts`) | – | One process serves API and built app; no external services needed to develop. |

Alternatives considered:

- *Everything on GitHub Pages, no backend.* Would drop accounts and cross-device sync. Kept as a mode instead: "Continue without an account" stores progress only in the browser and can be upgraded to an account later (local data is uploaded).
- *Firebase / Supabase.* Also free, but the free Supabase project pauses after a week of inactivity, and both mean a vendor SDK in the bundle and a fake-email workaround for username-only accounts. Owning a 150-line API was simpler.
- *Vercel / Netlify functions + Turso.* Works, but three providers instead of two.

Known constraint: the Workers free plan allows ~10 ms CPU per request. Password hashing (PBKDF2-SHA256) is therefore set to 20 000 iterations on the Worker (configurable; the count is stored with each hash so it can be raised later). Self-hosted Node uses 100 000. This protects language-learning progress, not money or identity.

## Layers

```
src/content/        data only: curriculum, topics, vocabulary, glossary (typed, validated by scripts/validate-content.mjs)
src/lib/            domain + application
  check.ts, srs.ts, date.ts     pure functions: answer comparison, spaced repetition, dates
  models.ts                     progress types and storage keys
  progress.ts                   queries over the store (streak, level stats, next topic)
  store.ts                      offline-first key/value store; syncs through the SyncBackend port
  sync.ts, api.ts               SyncBackend port and its HTTP adapter (Bearer token)
  auth.tsx                      session state for the UI (account, device-only, offline)
  tts.ts, markdown.tsx, assets.ts   browser facilities
src/components/     presentational: UI primitives, exercise inputs, exercise runner
src/pages/          screens; compose lib + components, hold only screen state

server/core/        runtime-agnostic API
  database.ts       Database port + schema
  password.ts       PasswordHasher port + PBKDF2 (Web Crypto) implementation
  repositories.ts   UserRepository, SessionRepository, KvRepository (SQL lives here only)
  auth-service.ts   account rules: validation, duplicate check, login brake, sessions
  app.ts            Hono routes: HTTP in, service calls, JSON out
server/adapters/    Database implementations: node-sqlite.ts, d1.ts
server/node.ts      entry: Node (dev + self-host)
server/worker.ts    entry: Cloudflare Workers
```

Dependency direction is inward: pages → lib → content; app.ts → services → repositories → Database port. Adapters and entry points sit on the outside and are the only places that know about Node or Cloudflare.

### How the SOLID principles show up

- **Single responsibility**: SQL only in repositories; account rules only in `AuthService`; HTTP only in `app.ts`; scheduling maths only in `srs.ts`; answer grading only in `check.ts` + `evaluate()`.
- **Open/closed**: new exercise types are added by extending the `Exercise` union, `evaluate()` and one input component; new levels by adding content files; a new database by adding an adapter.
- **Liskov**: both `Database` adapters are interchangeable and are exercised by the same test suite through the Node adapter.
- **Interface segregation**: the store depends on a two-method `SyncBackend`, the API on a four-method `Database` and a two-method `PasswordHasher`, not on fetch, SQLite or Workers types.
- **Dependency inversion**: `createApp()` receives its database, hasher, clock and token source; the store receives its backend. Tests inject an in-memory database and a cheap hasher.

## Data model

One table of progress entries per user: `(user_id, key, value JSON, updated_at)`. Keys: `settings`, `activity`, `tests`, `topic:<id>`, `word:<id>`. The client keeps the same map in memory and localStorage, marks changed keys dirty, pushes them 1.5 s after the last change, and merges server entries by newest `updated_at`. This gives offline-first behaviour and multi-device sync with about 60 lines of code, and no migrations when a new kind of progress is added.

## Security notes

- Sessions are random 256-bit tokens stored hashed-equivalent (opaque, unguessable) with a 90-day expiry; sent as `Authorization: Bearer`.
- CORS allows only the configured origins (`ALLOWED_ORIGINS`).
- A per-client brake limits failed logins to 20 per 15 minutes.
- The token lives in localStorage; the app stores no personal data, so XSS exposure is limited to progress. Content is first-party and rendered from trusted markdown.

## Deploying

### App (GitHub Pages)

Automatic on push to `main` (`.github/workflows/pages.yml`). Set the repository variable `API_URL` to the Worker URL so the built app talks to it. Until then the site works in device-only mode.

### API (Cloudflare, once)

```bash
pnpm wrangler login
pnpm wrangler d1 create alles-klar        # paste the database_id into wrangler.toml
pnpm wrangler deploy                      # prints https://alles-klar-api.<account>.workers.dev
```

Then in GitHub → Settings → Secrets and variables → Actions: variable `API_URL` = that URL; optionally secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` and variable `DEPLOY_API=true` so `.github/workflows/deploy-api.yml` redeploys the Worker on changes. Add the Pages origin to `ALLOWED_ORIGINS` in `wrangler.toml` if the GitHub user name differs.
