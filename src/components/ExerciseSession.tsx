// Intro → runner → report, with progress saved under a key. Used by topic
// practice, reading questions and listening sets.
import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import type { Exercise, Level } from '../content/types';
import { ExerciseRunner, ExerciseReport, type ExResult } from './ExerciseRunner';
import { Chip, LevelPill } from './ui';
import { getSettings, recordActivity } from '../lib/progress';
import { store } from '../lib/store';
import { EMPTY_TOPIC, type TopicProgress } from '../lib/models';
import { todayStr } from '../lib/date';

export interface ExerciseSessionProps {
  title: string;
  level: Level;
  exercises: Exercise[];
  /** store key for TopicProgress-shaped results */
  progressKey: string;
  exitTo: string;
  doneTo: string;
  doneLabel: string;
  /** shown on the intro screen under the title */
  intro?: ReactNode;
  /** tests always give feedback at the end */
  fixedFeedback?: 'instant' | 'end';
  /** called with results after a full (non-retry) run */
  onComplete?: (results: ExResult[]) => void;
}

export function saveSessionResult(progressKey: string, results: ExResult[], isRetry: boolean) {
  const p = store.get<TopicProgress>(progressKey, EMPTY_TOPIC);
  const resultsMap = { ...p.results };
  for (const r of results) resultsMap[r.exercise.id] = r.correct;
  if (isRetry) {
    store.set(progressKey, { ...p, results: resultsMap });
    return;
  }
  const score = Math.round((results.filter((r) => r.correct).length / results.length) * 100);
  store.set(progressKey, { ...p, attempts: p.attempts + 1, lastScore: score, bestScore: Math.max(p.bestScore, score), lastAt: todayStr(), results: resultsMap });
}

export function ExerciseSession({ title, level, exercises, progressKey, exitTo, doneTo, doneLabel, intro, fixedFeedback, onComplete }: ExerciseSessionProps) {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<'instant' | 'end'>(() => fixedFeedback ?? getSettings().feedback);
  const [phase, setPhase] = useState<'intro' | 'run' | 'report'>('intro');
  const [set, setSet] = useState<Exercise[]>(exercises);
  const [results, setResults] = useState<ExResult[]>([]);
  const [runKey, setRunKey] = useState(0);
  const [isRetry, setIsRetry] = useState(false);

  const finish = (res: ExResult[]) => {
    setResults(res);
    setPhase('report');
    recordActivity('exercises', res.length);
    saveSessionResult(progressKey, res, isRetry);
    if (!isRetry) onComplete?.(res);
  };

  const retryWrong = () => {
    setSet(results.filter((r) => !r.correct).map((r) => r.exercise));
    setIsRetry(true);
    setRunKey((k) => k + 1);
    setPhase('run');
  };

  if (phase === 'intro') {
    return (
      <div className="max-w-md mx-auto text-center pt-6">
        <LevelPill level={level} />
        <h1 className="mt-3 text-2xl font-bold">{title}</h1>
        <p className="text-muted mt-1">{exercises.length} exercises</p>
        {intro && <div className="mt-4 text-sm text-muted text-left bg-surface border border-line rounded-xl p-3">{intro}</div>}
        {!fixedFeedback && (
          <>
            <div className="mt-6 text-sm font-medium">Show the answer…</div>
            <div className="mt-2 flex justify-center gap-2">
              <Chip active={feedback === 'instant'} onClick={() => setFeedback('instant')}>After each one</Chip>
              <Chip active={feedback === 'end'} onClick={() => setFeedback('end')}>At the end (report)</Chip>
            </div>
          </>
        )}
        <button type="button" onClick={() => setPhase('run')} className="mt-8 w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-lg shadow-sm active:scale-[0.98]">
          Start
        </button>
        <button type="button" onClick={() => navigate(exitTo)} className="mt-3 text-sm text-muted">
          Not now
        </button>
      </div>
    );
  }

  if (phase === 'run') {
    return <ExerciseRunner key={runKey} exercises={set} feedback={feedback} onFinish={finish} onExit={() => navigate(exitTo)} label={title} />;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">
        {isRetry ? 'Retry' : 'Results'}: {title}
      </h1>
      <ExerciseReport results={results} onRetryWrong={retryWrong} onDone={() => navigate(doneTo)} doneLabel={doneLabel} />
    </div>
  );
}
