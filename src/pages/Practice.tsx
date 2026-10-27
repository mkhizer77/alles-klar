import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { topics, orderedTopicIds } from '../content';
import { ExerciseRunner, ExerciseReport, type ExResult } from '../components/ExerciseRunner';
import { getSettings, recordActivity } from '../lib/progress';
import { store } from '../lib/store';
import { keys, EMPTY_TOPIC, type TopicProgress } from '../lib/models';
import { todayStr } from '../lib/date';
import { Chip, LevelPill } from '../components/ui';
import type { Exercise } from '../content/types';

export default function Practice() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const topic = topics[id];
  const [feedback, setFeedback] = useState<'instant' | 'end'>(() => getSettings().feedback);
  const [phase, setPhase] = useState<'intro' | 'run' | 'report'>('intro');
  const [set, setSet] = useState<Exercise[]>(() => topic?.exercises ?? []);
  const [results, setResults] = useState<ExResult[]>([]);
  const [runKey, setRunKey] = useState(0);
  const [isRetry, setIsRetry] = useState(false);

  if (!topic) return <Navigate to="/learn" replace />;

  const finish = (res: ExResult[]) => {
    setResults(res);
    setPhase('report');
    recordActivity('exercises', res.length);
    const p = store.get<TopicProgress>(keys.topic(topic.id), EMPTY_TOPIC);
    const resultsMap = { ...p.results };
    for (const r of res) resultsMap[r.exercise.id] = r.correct;
    if (isRetry) {
      store.set(keys.topic(topic.id), { ...p, results: resultsMap });
      return;
    }
    const score = Math.round((res.filter((r) => r.correct).length / res.length) * 100);
    store.set(keys.topic(topic.id), {
      ...p,
      attempts: p.attempts + 1,
      lastScore: score,
      bestScore: Math.max(p.bestScore, score),
      lastAt: todayStr(),
      results: resultsMap,
    });
  };

  const retryWrong = () => {
    setSet(results.filter((r) => !r.correct).map((r) => r.exercise));
    setIsRetry(true);
    setRunKey((k) => k + 1);
    setPhase('run');
  };

  const idx = orderedTopicIds.indexOf(topic.id);
  const nextId = orderedTopicIds.slice(idx + 1).find((i) => topics[i]);

  if (phase === 'intro') {
    return (
      <div className="max-w-md mx-auto text-center pt-6">
        <LevelPill level={topic.level} />
        <h1 className="mt-3 text-2xl font-bold">{topic.title}</h1>
        <p className="text-muted mt-1">{topic.exercises.length} exercises</p>
        <div className="mt-6 text-sm font-medium">Show the answer…</div>
        <div className="mt-2 flex justify-center gap-2">
          <Chip active={feedback === 'instant'} onClick={() => setFeedback('instant')}>After each one</Chip>
          <Chip active={feedback === 'end'} onClick={() => setFeedback('end')}>At the end (report)</Chip>
        </div>
        <button type="button" onClick={() => setPhase('run')} className="mt-8 w-full py-4 rounded-2xl bg-primary text-on-primary font-bold text-lg shadow-sm active:scale-[0.98]">
          Start
        </button>
        <button type="button" onClick={() => navigate(`/topic/${topic.id}`)} className="mt-3 text-sm text-muted">
          Back to the explanation
        </button>
      </div>
    );
  }

  if (phase === 'run') {
    return <ExerciseRunner key={runKey} exercises={set} feedback={feedback} onFinish={finish} onExit={() => navigate(`/topic/${topic.id}`)} label={topic.title} />;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{isRetry ? 'Retry' : 'Results'}: {topic.title}</h1>
      <ExerciseReport
        results={results}
        onRetryWrong={retryWrong}
        onDone={() => navigate(nextId ? `/topic/${nextId}` : `/learn/${topic.level}`)}
        doneLabel={nextId ? 'Next topic' : 'Back to course'}
      />
    </div>
  );
}
