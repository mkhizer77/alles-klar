import { useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { topicsForLevel, wordsForLevel, unitOfTopic, topics, levelOf, readingsForLevel, writingsForLevel } from '../content';
import { buildListeningSet } from '../lib/listening';
import { Md } from '../lib/markdown';
import type { Exercise, Level, McExercise } from '../content/types';
import { ExerciseRunner, ExerciseReport, type ExResult } from '../components/ExerciseRunner';
import { shuffle } from '../lib/check';
import { store } from '../lib/store';
import { keys, EMPTY_TESTS, type TestAttempt } from '../lib/models';
import { recordActivity } from '../lib/progress';
import { todayStr } from '../lib/date';
import { Button, Card, LevelPill, ProgressBar } from '../components/ui';
import { TEST_SIZE, VOCAB_SIZE, READING_SIZE, LISTEN_SIZE, verdict } from './Tests';

interface Built {
  exercises: Exercise[];
  topicOf: Record<string, string>; // exercise id -> topic id ('vocab' | 'reading' | 'listening' for skills)
  readingText?: { title: string; paragraphs: string[] };
}

function buildTest(level: Level): Built {
  const ts = shuffle(topicsForLevel(level));
  const target = Math.min(TEST_SIZE[level], ts.length * 2);
  const picked: Exercise[] = [];
  const topicOf: Record<string, string> = {};
  const used = new Set<string>();
  // one from each topic first, then a second pass
  for (let pass = 0; pass < 2 && picked.length < target; pass++) {
    for (const t of ts) {
      if (picked.length >= target) break;
      const candidates = shuffle(t.exercises.filter((e) => !used.has(e.id) && e.type !== 'match'));
      const e = candidates[0];
      if (!e) continue;
      used.add(e.id);
      picked.push(e);
      topicOf[e.id] = t.id;
    }
  }
  const words = shuffle(wordsForLevel(level)).slice(0, VOCAB_SIZE);
  const pool = wordsForLevel(level);
  const vocab: McExercise[] = words.map((w) => {
    const others = shuffle(pool.filter((x) => x.id !== w.id && x.en !== w.en && x.pos === w.pos)).slice(0, 3);
    const extra = shuffle(pool.filter((x) => x.id !== w.id && x.en !== w.en && !others.includes(x))).slice(0, 3 - others.length);
    const options = shuffle([w, ...others, ...extra].map((x) => x.en));
    const id = `vocab-${w.id}`;
    topicOf[id] = 'vocab';
    return {
      type: 'mc',
      id,
      prompt: `What does **${w.article ? `${w.article} ${w.de}` : w.de}** mean?`,
      options,
      answer: options.indexOf(w.en),
      explanation: `${w.article ? `${w.article} ${w.de}` : w.de} = ${w.en}. Example: ${w.example.de}`,
    };
  });
  const readingTexts = readingsForLevel(level);
  const readingText = readingTexts.length ? readingTexts[Math.floor(Math.random() * readingTexts.length)] : undefined;
  const reading = readingText ? shuffle(readingText.questions.filter((q) => q.type === 'mc' || q.type === 'fill')).slice(0, READING_SIZE) : [];
  for (const q of reading) topicOf[q.id] = 'reading';
  const listening = buildListeningSet(level, undefined, LISTEN_SIZE);
  for (const l of listening) topicOf[l.id] = 'listening';
  return { exercises: [...shuffle(picked), ...vocab, ...reading, ...listening], topicOf, readingText: readingText && { title: readingText.title, paragraphs: readingText.paragraphs } };
}

export default function TestRun() {
  const { level: lvlParam = '' } = useParams();
  const level = lvlParam.toUpperCase() as Level;
  const navigate = useNavigate();
  const valid = ['A1', 'A2', 'B1'].includes(level);
  const built = useMemo(() => (valid ? buildTest(level) : null), [level, valid]);
  const [phase, setPhase] = useState<'intro' | 'run' | 'report'>('intro');
  const [results, setResults] = useState<ExResult[]>([]);
  const [attempt, setAttempt] = useState<TestAttempt | null>(null);
  if (!valid || !built) return <Navigate to="/tests" replace />;
  const lvl = levelOf(level);

  const finish = (res: ExResult[]) => {
    const byTopic: Record<string, [number, number]> = {};
    const byUnit: Record<string, [number, number]> = {};
    let vocab: [number, number] = [0, 0];
    let reading: [number, number] = [0, 0];
    let listening: [number, number] = [0, 0];
    for (const r of res) {
      const tid = built.topicOf[r.exercise.id];
      if (tid === 'vocab') {
        vocab = [vocab[0] + (r.correct ? 1 : 0), vocab[1] + 1];
        continue;
      }
      if (tid === 'reading') {
        reading = [reading[0] + (r.correct ? 1 : 0), reading[1] + 1];
        continue;
      }
      if (tid === 'listening') {
        listening = [listening[0] + (r.correct ? 1 : 0), listening[1] + 1];
        continue;
      }
      const t = byTopic[tid] || [0, 0];
      byTopic[tid] = [t[0] + (r.correct ? 1 : 0), t[1] + 1];
      const unit = unitOfTopic(tid)?.unit.unit ?? 0;
      const u = byUnit[unit] || [0, 0];
      byUnit[unit] = [u[0] + (r.correct ? 1 : 0), u[1] + 1];
    }
    const right = res.filter((r) => r.correct).length;
    const a: TestAttempt = {
      id: `${level}-${Date.now()}`,
      level,
      date: todayStr(),
      right,
      total: res.length,
      percent: Math.round((right / res.length) * 100),
      byUnit,
      byTopic,
      vocab,
      reading,
      listening,
    };
    store.update<TestAttempt[]>(keys.tests, EMPTY_TESTS, (list) => [...list, a].slice(-30));
    recordActivity('exercises', res.length);
    setResults(res);
    setAttempt(a);
    setPhase('report');
  };

  if (phase === 'intro') {
    return (
      <div className="max-w-md mx-auto text-center pt-6">
        <LevelPill level={level} />
        <h1 className="mt-3 text-2xl font-bold">{level} level test</h1>
        <p className="text-muted mt-2">
          {built.exercises.length} questions: grammar, vocabulary{built.readingText ? ', a short reading text' : ''} and dictation. No feedback until the end; then you get a report by unit and skill. Take your time, and do not look things up.
        </p>
        <Button size="lg" full className="mt-8" onClick={() => setPhase('run')}>
          Begin
        </Button>
        <button type="button" onClick={() => navigate('/tests')} className="mt-3 text-sm text-muted">
          Not now
        </button>
      </div>
    );
  }

  if (phase === 'run')
    return (
      <div>
        <ExerciseRunner exercises={built.exercises} feedback="end" onFinish={finish} onExit={() => navigate('/tests')} label={`${level} level test`} />
        {built.readingText && (
          <details className="mt-8 rounded-2xl border border-line bg-surface p-4">
            <summary className="cursor-pointer font-semibold">Reading text for the reading questions: {built.readingText.title}</summary>
            <Md source={built.readingText.paragraphs.join('\n\n')} className="mt-3" />
          </details>
        )}
      </div>
    );

  const a = attempt!;
  const v = verdict(a.percent);
  const weakest = Object.entries(a.byTopic)
    .map(([id, [r, t]]) => ({ id, pct: Math.round((r / t) * 100), r, t }))
    .filter((x) => x.pct < 100)
    .sort((x, y) => x.pct - y.pct)
    .slice(0, 6);

  return (
    <div>
      <div className="text-center py-4">
        <LevelPill level={level} />
        <div className={`mt-2 text-6xl font-black tabular-nums ${v.tone}`}>{a.percent}%</div>
        <div className="font-bold text-lg mt-1">{v.label}</div>
        <p className="text-muted">{v.text}</p>
      </div>

      <Card className="mb-4">
        <h2 className="font-bold mb-3">By unit</h2>
        <div className="grid gap-2.5">
          {lvl.units.map((u) => {
            const [r, t] = a.byUnit[u.unit] || [0, 0];
            if (!t) return null;
            const pct = Math.round((r / t) * 100);
            return (
              <div key={u.unit}>
                <div className="flex justify-between text-sm">
                  <span>
                    <span className="text-muted">Unit {u.unit}</span> {u.title}
                  </span>
                  <span className="tabular-nums text-muted">
                    {r}/{t}
                  </span>
                </div>
                <ProgressBar value={pct} className="mt-1" color={pct >= 80 ? 'bg-success' : pct >= 60 ? 'bg-accent' : 'bg-danger'} />
              </div>
            );
          })}
          {(
            [
              ['Reading', a.reading],
              ['Listening', a.listening],
            ] as const
          ).map(([label, pair]) =>
            pair && pair[1] ? (
              <div key={label}>
                <div className="flex justify-between text-sm">
                  <span>{label}</span>
                  <span className="tabular-nums text-muted">
                    {pair[0]}/{pair[1]}
                  </span>
                </div>
                <ProgressBar value={(pair[0] / pair[1]) * 100} className="mt-1" color="bg-primary" />
              </div>
            ) : null,
          )}
          <div>
            <div className="flex justify-between text-sm">
              <span>Vocabulary</span>
              <span className="tabular-nums text-muted">
                {a.vocab[0]}/{a.vocab[1]}
              </span>
            </div>
            <ProgressBar value={a.vocab[1] ? (a.vocab[0] / a.vocab[1]) * 100 : 0} className="mt-1" color="bg-primary" />
          </div>
        </div>
      </Card>

      {weakest.length > 0 && (
        <Card className="mb-4">
          <h2 className="font-bold mb-2">Start here</h2>
          <div className="grid gap-1.5">
            {weakest.map((w) => (
              <Link key={w.id} to={`/topic/${w.id}`} className="flex items-center justify-between px-3 py-2 rounded-lg bg-surface-2 hover:bg-line text-sm">
                <span className="font-medium">{topics[w.id]?.title}</span>
                <span className="text-muted tabular-nums">
                  {w.r}/{w.t}
                </span>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {(() => {
        const ws = writingsForLevel(level);
        if (!ws.length) return null;
        const w = ws[a.right % ws.length];
        return (
          <Card className="mb-4">
            <h2 className="font-bold">Writing (not scored)</h2>
            <p className="text-sm text-muted mt-1">A {level} exam also has a writing part. Do this task and compare with the model to complete the picture:</p>
            <Link to={`/writing/${w.id}`} className="mt-2 inline-block font-semibold text-primary">✍️ {w.title} →</Link>
          </Card>
        );
      })()}

      <h2 className="font-bold text-lg mt-6">All answers</h2>
      <ExerciseReport results={results} onDone={() => navigate('/tests')} doneLabel="Back to tests" />
    </div>
  );
}
