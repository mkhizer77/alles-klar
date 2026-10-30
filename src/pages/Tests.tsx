import { Link } from 'react-router';
import { curriculum, topicsForLevel, wordsForLevel, readingsForLevel, examsForLevel } from '../content';
import { store, useStoreVersion } from '../lib/store';
import { keys, EMPTY_TESTS, EMPTY_EXAM_ATTEMPTS, type TestAttempt, type ExamAttempt } from '../lib/models';
import { providerLabel, skillLabel } from './ExamRun';
import type { ExamSkill } from '../content/types';
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
      {curriculum.map((l) => {
        const list = examsForLevel(l.level);
        if (!list.length) return null;
        return (
          <section key={l.level} className="mt-8">
            <h2 className="text-xl font-bold tracking-tight">{l.level} exam practice</h2>
            <p className="text-muted text-sm mt-0.5 mb-3">Full mock papers in the format of the official exams: same parts, item counts, timings and point scheme. Take one module at a time.</p>
            <div className="grid gap-4">
              {list.map((e) => (
                <ExamCard key={e.id} id={e.id} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ExamCard({ id }: { id: string }) {
  const exam = examsForLevel('B1').concat(examsForLevel('A2'), examsForLevel('A1')).find((e) => e.id === id)!;
  const attempts = store.get<ExamAttempt[]>(keys.exam(id), EMPTY_EXAM_ATTEMPTS);
  const best = (skill: ExamSkill) => attempts.filter((a) => a.skill === skill).reduce<ExamAttempt | null>((b, a) => (!b || a.percent > b.percent ? a : b), null);
  return (
    <Card>
      <div className="flex items-center gap-2 flex-wrap">
        <LevelPill level={exam.level} />
        <span className="inline-block px-2 py-0.5 rounded-md text-xs font-bold bg-accent/15 text-accent">{providerLabel[exam.provider]}</span>
        <h3 className="font-bold text-lg">{exam.title}</h3>
      </div>
      <p className="text-sm text-muted mt-1">{exam.subtitle}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {exam.modules.map((m) => {
          const b = best(m.skill);
          return (
            <Link key={m.skill} to={`/exam/${exam.id}/${m.skill}`} className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${b ? (b.passed ? 'border-success/50 bg-success-soft text-success' : 'border-danger/40 bg-danger-soft text-danger') : 'border-line bg-surface'}`}>
              {skillLabel[m.skill]} <span className="text-muted font-normal">· {m.minutes} min</span>
              {b && <span className="tabular-nums"> · {b.percent}%</span>}
            </Link>
          );
        })}
      </div>
      <div className="mt-4">
        <LinkButton to={`/exam/${exam.id}`}>Open exam</LinkButton>
      </div>
    </Card>
  );
}
