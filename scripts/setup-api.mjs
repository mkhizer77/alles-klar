// One-time setup of the sync API so accounts work on the published site:
// signs in to Cloudflare, creates the D1 database, deploys the Worker and
// points the GitHub Pages build at it. Safe to run again; every step skips
// what already exists.
// Usage: pnpm setup:api
import { execSync, spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const tomlPath = join(root, 'wrangler.toml');
const DB_NAME = 'alles-klar';

const quiet = (cmd) => execSync(cmd, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const interactive = (cmd) => spawnSync(cmd, { cwd: root, shell: true, stdio: 'inherit' }).status === 0;
const step = (msg) => console.log(`\n▶ ${msg}`);
const fail = (msg) => {
  console.error(`\n✘ ${msg}`);
  process.exit(1);
};

// 1. Cloudflare sign-in (opens the browser once).
step('Checking the Cloudflare sign-in');
let signedIn = false;
try {
  quiet('pnpm exec wrangler whoami');
  signedIn = true;
} catch {
  /* not signed in */
}
if (!signedIn) {
  console.log('Not signed in. A browser window opens; sign in or create a free Cloudflare account, then come back here.');
  if (!interactive('pnpm exec wrangler login')) fail('Cloudflare sign-in did not complete.');
}

// 2. The D1 database: reuse one named alles-klar, else create it, and write its id into wrangler.toml.
step(`Finding the ${DB_NAME} database`);
let toml = readFileSync(tomlPath, 'utf8');
let dbId = toml.match(/database_id\s*=\s*"([0-9a-f-]{36})"/)?.[1];
if (!dbId) {
  try {
    const list = JSON.parse(quiet('pnpm exec wrangler d1 list --json'));
    dbId = list.find((d) => d.name === DB_NAME)?.uuid;
  } catch {
    /* no list, create below */
  }
}
if (!dbId) {
  console.log('Creating it …');
  const out = quiet(`pnpm exec wrangler d1 create ${DB_NAME}`);
  dbId = out.match(/database_id\s*=\s*"([0-9a-f-]{36})"/)?.[1];
  if (!dbId) fail(`Could not read the database id from:\n${out}`);
}
if (!toml.includes(`database_id = "${dbId}"`)) {
  toml = toml.replace(/database_id\s*=\s*"[^"]*"/, `database_id = "${dbId}"`);
  writeFileSync(tomlPath, toml);
  console.log(`wrangler.toml now points at database ${dbId}. Commit that change.`);
} else {
  console.log(`Database ${dbId} already configured.`);
}

// 3. Deploy the Worker and read its public URL.
step('Deploying the API');
let deployOut = '';
try {
  deployOut = quiet('pnpm exec wrangler deploy');
} catch (e) {
  fail(`Deploy failed:\n${e.stdout || ''}${e.stderr || ''}`);
}
const apiUrl = deployOut.match(/https:\/\/[\w.-]+\.workers\.dev/)?.[0];
if (!apiUrl) fail(`Deployed, but no workers.dev URL in the output:\n${deployOut}`);
console.log(`API is at ${apiUrl}`);

// 4. Smoke test.
step('Checking the API answers');
const health = await fetch(`${apiUrl}/api/health`).then((r) => r.json()).catch(() => null);
if (!health?.ok) fail(`${apiUrl}/api/health did not answer {"ok":true}. Wait a minute and run again.`);
console.log('OK');

// 5. Tell the GitHub Pages build about it and rebuild the site.
step('Pointing the published site at the API');
try {
  quiet(`gh variable set API_URL --body "${apiUrl}"`);
  console.log('Repository variable API_URL set.');
  try {
    quiet('gh workflow run pages.yml');
    console.log('A new Pages build is running; in a few minutes accounts work on the published site.');
  } catch {
    console.log('Could not start the Pages workflow; push any commit or run it from the Actions tab.');
  }
} catch {
  console.log(`GitHub CLI is not available or not signed in. Set it by hand: repository Settings → Secrets and variables → Actions → Variables → API_URL = ${apiUrl}, then re-run the "Deploy app to GitHub Pages" workflow.`);
}

console.log(`\n✔ Done. Sign in on any device with the same name and password and your progress follows you.`);
