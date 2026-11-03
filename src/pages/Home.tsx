import { Link } from 'react-router';
import { useAuth } from '../lib/auth';
import { useStoreVersion } from '../lib/store';
import { getSettings, levelStats, nextTopicId, streak } from '../lib/progress';
import { deckWords, deckStats } from '../lib/vocab';
import { store } from '../lib/store';
import { keys, EMPTY_ACTIVITY, EMPTY_TESTS, type Activity, type TestAttempt } from '../lib/models';
import { topics, unitOfTopic, levels, readingForUnit, writingForUnit, speakingForUnit } from '../content';
import { Button, Card, LinkButton, ProgressBar, LevelPill } from '../components/ui';
import { FlameIcon, ChevronRight } from '../components/icons';
import { todayStr } from '../lib/date';

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Home() {
  useStoreVersion();
  const { user, welcome, dismissWelcome, logout } = useAuth();
  const settings = getSettings();
  const activity = store.get<Activity>(keys.activity, EMPTY_ACTIVITY);
  const tests = store.get<TestAttempt[]>(keys.tests, EMPTY_TESTS);
  const s = streak(activity);
  const vs = deckStats(deckWords(null, settings.vocabLevel));
  const today = activity[todayStr()] || { exercises: 0, words: 0 };
  const reviewDay = settings.reviewDays.includes(new Date().getDay());
  const nextId = nextTopicId();
  const next = nextId ? topics[nextId] : null;
  const nextUnit = nextId ? unitOfTopic(nextId) : null;
  const lastTest = tests[tests.length - 1];
  const hour = new Date().getHours();
  const greet = hour < 11 ? 'Guten Morgen' : hour < 18 ? 'Guten Tag' : 'Guten Abend';

  return (
    <div className="grid gap-4">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {greet}{user && !user.local ? `, ${user.username}` : ''}!
          </h1>
          <p className="text-muted">{reviewDay ? 'Today is a review day.' : `Rest day for reviews (next: ${settings.reviewDays.map((d) => dayNames[d]).join(', ') || 'none'}).`}</p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/15 text-accent font-bold" title="Day streak">
          <FlameIcon size={18} /> {s}
        </div>
      </div>

      {welcome && (
        <Card className="bg-success-soft border-success/30">
          <div className="flex items-start gap-3">
            <div className="flex-1 text-sm">
              <div className="font-bold text-success">{welcome === 'created' ? `Account created: ${user?.username}` : `Welcome back, ${user?.username}`}</div>
              <p className="text-muted mt-0.5">
                {welcome === 'created'
                  ? 'Sign in with the same name and password on your phone or laptop and your progress is there too.'
                  : 'Your progress is synced. Anything you do here shows up on your other devices.'}
              </p>
            </div>
            <button type="button" onClick={dismissWelcome} className="text-sm font-semibold text-success" aria-label="Dismiss">
              OK
            </button>
          </div>
        </Card>
      )}

      {user?.local && (
        <Card className="border-dashed">
          <div className="flex items-center gap-3">
            <div className="flex-1 text-sm">
              <div className="font-semibold">Progress is only on this device</div>
              <p className="text-muted mt-0.5">Sign in with any name and password to keep it safe and use it on your phone and laptop.</p>
            </div>
            <Button size="sm" variant="secondary" onClick={() => logout()} className="shrink-0">
              Sign in
            </Button>
          </div>
        </Card>
      )}

      <Card className="bg-gradient-to-br from-primary to-primary-strong text-on-primary border-0">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wide opacity-80">Vocabulary · {settings.vocabLevel}</div>
            <div className="mt-1 text-2xl font-bold">
              {vs.due} to revise · {vs.learned} learned
            </div>
            <div className="text-sm opacity-80 mt-0.5">
              {today.words > 0 ? `${today.words} cards today` : 'Nothing done yet today'} · {vs.newToday} of {settings.newWordsPerDay} new words
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <LinkButton to={`/vocab/learn?level=${settings.vocabLevel}`} className="!bg-white !text-primary-strong hover:!brightness-95">
            Learn new
          </LinkButton>
          <LinkButton to={`/vocab/revise?level=${settings.vocabLevel}`} variant="ghost" className="!text-white hover:!bg-white/10">
            Revise
          </LinkButton>
        </div>
      </Card>

      <Card>
        <div className="text-xs uppercase tracking-wide text-muted">Continue learning</div>
        {next ? (
          <Link to={`/topic/${next.id}`} className="mt-2 flex items-center gap-3 group">
            <LevelPill level={next.level} />
            <div className="flex-1 min-w-0">
              <div className="font-semibold group-hover:text-primary truncate">{next.title}</div>
              <div className="text-sm text-muted truncate">
                Unit {nextUnit?.unit.unit}: {nextUnit?.unit.title} · {next.germanTerm}
              </div>
            </div>
            <ChevronRight className="text-muted" />
          </Link>
        ) : (
          <p className="mt-2 text-muted">You have scored 80 % or more on every topic. Try the level tests.</p>
        )}
      </Card>

      {nextUnit && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(() => {
            const r = readingForUnit(nextUnit.level.level, nextUnit.unit.unit);
            return (
              <Card className="p-3">
                <div className="text-xs uppercase tracking-wide text-muted">Reading</div>
                {r ? (
                  <Link to={`/reading/${r.id}`} className="block mt-1 font-semibold hover:text-primary leading-snug">📖 {r.title}</Link>
                ) : (
                  <p className="mt-1 text-sm text-muted">Coming soon for this unit.</p>
                )}
              </Card>
            );
          })()}
          <Card className="p-3">
            <div className="text-xs uppercase tracking-wide text-muted">Listening</div>
            <Link to={`/listen/${nextUnit.level.level}/${nextUnit.unit.unit}`} className="block mt-1 font-semibold hover:text-primary leading-snug">
              🎧 Dictation
            </Link>
          </Card>
          {(() => {
            const w = writingForUnit(nextUnit.level.level, nextUnit.unit.unit);
            return (
              <Card className="p-3">
                <div className="text-xs uppercase tracking-wide text-muted">Writing</div>
                {w ? (
                  <Link to={`/writing/${w.id}`} className="block mt-1 font-semibold hover:text-primary leading-snug">✍️ {w.title}</Link>
                ) : (
                  <p className="mt-1 text-sm text-muted">Coming soon.</p>
                )}
              </Card>
            );
          })()}
          {(() => {
            const sp = speakingForUnit(nextUnit.level.level, nextUnit.unit.unit);
            return (
              <Card className="p-3">
                <div className="text-xs uppercase tracking-wide text-muted">Speaking</div>
                {sp ? (
                  <Link to={`/speaking/${sp.id}`} className="block mt-1 font-semibold hover:text-primary leading-snug">🗣️ {sp.title}</Link>
                ) : (
                  <p className="mt-1 text-sm text-muted">Coming soon.</p>
                )}
              </Card>
            );
          })()}
        </div>
      )}

      <Card>
        <div className="text-xs uppercase tracking-wide text-muted mb-3">Course progress</div>
        <div className="grid gap-3">
          {levels.map((l) => {
            const st = levelStats(l);
            return (
              <Link key={l} to={`/learn/${l}`} className="grid gap-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold flex items-center gap-2">
                    <LevelPill level={l} /> {st.mastered} of {st.total} topics mastered
                  </span>
                  <span className="text-muted">{st.practiced} practised</span>
                </div>
                <ProgressBar value={st.mastered} max={st.total} color={l === 'A1' ? 'bg-success' : l === 'A2' ? 'bg-primary' : 'bg-accent'} />
              </Link>
            );
          })}
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card>
          <div className="text-xs uppercase tracking-wide text-muted">Last level test</div>
          {lastTest ? (
            <div className="mt-2">
              <div className="text-2xl font-bold">
                {lastTest.level}: {lastTest.percent}%
              </div>
              <div className="text-sm text-muted">{lastTest.date}</div>
            </div>
          ) : (
            <p className="mt-2 text-muted text-sm">Not sure where to start? Take the A1 test to find your gaps.</p>
          )}
          <LinkButton to="/tests" variant="secondary" size="sm" className="mt-3">
            Level tests
          </LinkButton>
        </Card>
        <Card>
          <div className="text-xs uppercase tracking-wide text-muted">Look something up</div>
          <p className="mt-2 text-sm text-muted">What is the Dativ? What does Konjugation mean? Search any concept.</p>
          <LinkButton to="/concepts" variant="secondary" size="sm" className="mt-3">
            Concepts
          </LinkButton>
        </Card>
      </div>
    </div>
  );
}
