import { Link } from 'react-router';
import { curriculum, topicsForLevel, wordsForLevel, readingsForLevel } from '../content';
import { store, useStoreVersion } from '../lib/store';
import { keys, EMPTY_TESTS, type TestAttempt } from '../lib/models';
import { Card, LinkButton, LevelPill, PageHeader } from '../components/ui';

export const TEST_SIZE = { A1: 30, A2: 30, B1: 40 } as const;
export const VOCAB_SIZE = 20;
export const READING_SIZE = 5;
export const LISTEN_SIZE = 5;

export function verdict(pct: number) {
  if (pct >= 80) return { label: 'Solid', tone: 'text-success', text: 'You are ready for the next level.' };
  if (pct >= 60) return { label: 'Nearly there', tone: 'text-accent', text: 'Review the weakest units, then retake.' };
  return { label: 'Needs work', tone: 'text-danger', text: 'Work through this level before moving on.' };
}

export default function Tests() {
  useStoreVersion();
  const tests = store.get<TestAttempt[]>(keys.tests, EMPTY_TESTS);
  return (
    <div>
      <PageHeader title="Level tests" subtitle="Find out where you stand. Each test mixes grammar from every unit with vocabulary; you get the report at the end." />
      <div className="grid gap-4">
        {curriculum.map((l) => {
          const nTopics = topicsForLevel(l.level).length;
          const nWords = wordsForLevel(l.level).length;
          const attempts = tests.filter((t) => t.level === l.level);
          const last = attempts[attempts.length - 1];
          const best = attempts.reduce((m, t) => Math.max(m, t.percent), 0);
          const ready = nTopics > 0 && nWords > 0;
          return (
            <Card key={l.level}>
              <div className="flex items-center gap-2">
                <LevelPill level={l.level} />
                <h2 className="font-bold text-lg">{l.name}</h2>
              </div>
              <p className="text-sm text-muted mt-1">
                {Math.min(TEST_SIZE[l.level], nTopics * 2)} grammar · {Math.min(VOCAB_SIZE, nWords)} vocabulary · {readingsForLevel(l.level).length ? `${READING_SIZE} reading · ` : ''}{LISTEN_SIZE} listening · about {Math.round((Math.min(TEST_SIZE[l.level], nTopics * 2) + VOCAB_SIZE + READING_SIZE + LISTEN_SIZE) * 0.6)} min
              </p>
              {last ? (
                <div className="mt-3 flex items-center gap-4 text-sm">
                  <div>
                    <div className="text-xs text-muted">Last</div>
                    <div className={`text-xl font-bold ${verdict(last.percent).tone}`}>{last.percent}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted">Best</div>
                    <div className="text-xl font-bold">{best}%</div>
                  </div>
                  <div className="text-muted">
                    {attempts.length} attempt{attempts.length > 1 ? 's' : ''} · {verdict(last.percent).label}
                  </div>
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted">Not taken yet.</p>
              )}
              <div className="mt-4 flex gap-2">
                {ready ? <LinkButton to={`/tests/${l.level}`}>{last ? 'Retake test' : 'Start test'}</LinkButton> : <span className="text-sm text-muted">Content for this level is still being added.</span>}
                {last && (
                  <Link to={`/learn/${l.level}`} className="inline-flex items-center px-4 text-sm font-semibold text-primary">
                    Review topics
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
