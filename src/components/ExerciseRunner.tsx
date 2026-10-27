import { useEffect, useState } from 'react';
import type { Exercise } from '../content/types';
import { Button, ProgressBar, Badge } from './ui';
import { CheckIcon, XIcon } from './icons';
import { ExerciseInput, evaluate, isAnswered, typeLabel, type ExValue, type Evaluation } from './exercises';
import { MdInline } from '../lib/markdown';

export interface ExResult extends Evaluation {
  exercise: Exercise;
}

export function ExerciseRunner({
  exercises,
  feedback,
  onFinish,
  onExit,
  label,
}: {
  exercises: Exercise[];
  feedback: 'instant' | 'end';
  onFinish: (results: ExResult[]) => void;
  onExit?: () => void;
  label?: string;
}) {
  const [i, setI] = useState(0);
  const [values, setValues] = useState<Record<string, ExValue>>({});
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<ExResult[]>([]);
  const ex = exercises[i];
  const value = values[ex.id];
  const answered = isAnswered(ex, value);
  const evaln = checked ? evaluate(ex, value) : null;

  const commit = () => {
    const r = { ...evaluate(ex, value), exercise: ex };
    const next = [...results, r];
    setResults(next);
    if (i + 1 >= exercises.length) onFinish(next);
    else {
      setChecked(false);
      setI(i + 1);
    }
  };

  const check = () => {
    if (!answered) return;
    if (feedback === 'instant') setChecked(true);
    else commit();
  };

  // Return advances once an answer has been checked, or submits a tapped choice.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return; // those handle Return themselves
      if (checked) {
        e.preventDefault();
        commit();
      } else if (ex.type === 'mc' && answered) {
        e.preventDefault();
        check();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const primary = feedback === 'instant' && checked ? (
    <Button size="lg" full onClick={commit} autoFocus>
      {i + 1 >= exercises.length ? 'See results' : 'Next'}
    </Button>
  ) : (
    <Button size="lg" full onClick={check} disabled={!answered}>
      {feedback === 'instant' ? 'Check' : i + 1 >= exercises.length ? 'Finish' : 'Next'}
    </Button>
  );

  return (
    <div className="flex flex-col min-h-[70dvh]">
      <div className="flex items-center gap-3 mb-4">
        {onExit && (
          <button type="button" onClick={onExit} className="p-1 -ml-1 rounded-lg text-muted hover:text-text" aria-label="Exit">
            <XIcon />
          </button>
        )}
        <ProgressBar value={i + (checked ? 1 : 0)} max={exercises.length} className="flex-1" />
        <span className="text-sm text-muted tabular-nums">
          {i + 1}/{exercises.length}
        </span>
      </div>
      {label && <p className="text-xs text-muted mb-1">{label}</p>}
      <div className="mb-3">
        <Badge tone="info">{typeLabel[ex.type]}</Badge>
      </div>

      <div key={ex.id} className="animate-pop">
        <ExerciseInput ex={ex} value={value} onChange={(v) => setValues({ ...values, [ex.id]: v })} reveal={checked} onSubmit={checked ? commit : check} />
      </div>

      {evaln && (
        <div className={`mt-5 p-4 rounded-2xl border ${evaln.correct ? 'bg-success-soft border-success/40' : 'bg-danger-soft border-danger/40'} animate-pop`}>
          <div className={`flex items-center gap-2 font-bold ${evaln.correct ? 'text-success' : 'text-danger'}`}>
            {evaln.correct ? <CheckIcon /> : <XIcon />} {evaln.correct ? 'Richtig!' : 'Not quite'}
          </div>
          <p className="mt-1.5 text-sm leading-relaxed">
            <MdInline source={ex.explanation} />
          </p>
        </div>
      )}

      <div className="mt-auto pt-6">{primary}</div>
    </div>
  );
}

export function ExerciseReport({ results, onRetryWrong, onDone, doneLabel = 'Done' }: { results: ExResult[]; onRetryWrong?: () => void; onDone: () => void; doneLabel?: string }) {
  const right = results.filter((r) => r.correct).length;
  const pct = Math.round((right / results.length) * 100);
  const tone = pct >= 80 ? 'text-success' : pct >= 60 ? 'text-accent' : 'text-danger';
  const verdict = pct >= 80 ? 'Solid. You own this.' : pct >= 60 ? 'Nearly there. Read the explanations below once more.' : 'Needs work. Re-read the topic and try again.';
  return (
    <div>
      <div className="text-center py-6">
        <div className={`text-5xl font-black tabular-nums ${tone}`}>{pct}%</div>
        <div className="mt-1 text-muted">
          {right} of {results.length} correct
        </div>
        <p className="mt-2 font-medium">{verdict}</p>
      </div>
      <ol className="grid gap-2">
        {results.map((r, n) => (
          <li key={r.exercise.id} className={`p-3 rounded-xl border ${r.correct ? 'border-line bg-surface' : 'border-danger/40 bg-danger-soft/50'}`}>
            <div className="flex gap-2 items-start">
              <span className={`mt-0.5 shrink-0 ${r.correct ? 'text-success' : 'text-danger'}`}>{r.correct ? <CheckIcon size={18} /> : <XIcon size={18} />}</span>
              <div className="min-w-0 flex-1 text-sm">
                <div className="font-medium">
                  {n + 1}. <MdInline source={r.exercise.prompt.replace('___', '____')} />
                </div>
                {!r.correct && (
                  <div className="mt-1 text-muted">
                    You: <span className="text-danger line-through">{r.given}</span> · Correct: <span className="text-success font-semibold">{r.expected}</span>
                  </div>
                )}
                {r.correct && r.exercise.type !== 'match' && <div className="mt-1 text-muted">{r.given}</div>}
                <div className="mt-1 text-muted">
                  <MdInline source={r.exercise.explanation} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {onRetryWrong && right < results.length && (
          <Button variant="secondary" size="lg" onClick={onRetryWrong}>
            Retry the {results.length - right} wrong
          </Button>
        )}
        <Button size="lg" onClick={onDone} className={right === results.length || !onRetryWrong ? 'sm:col-span-2' : ''}>
          {doneLabel}
        </Button>
      </div>
    </div>
  );
}
