import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { writings, levelOf, topics } from '../content';
import { store, useStoreValue } from '../lib/store';
import { keys, EMPTY_WRITING, type WritingProgress } from '../lib/models';
import { todayStr } from '../lib/date';
import { recordActivity } from '../lib/progress';
import { runChecks, wordCount } from '../lib/writing';
import { speak, canSpeak } from '../lib/tts';
import { MdInline } from '../lib/markdown';
import { Badge, Button, Card, LevelPill } from '../components/ui';
import { ChevronLeft, SpeakerIcon, CheckIcon, XIcon } from '../components/icons';

const typeLabel: Record<string, string> = { email: 'Email', message: 'Message', note: 'Note', post: 'Post', letter: 'Letter', story: 'Story', description: 'Description', opinion: 'Opinion' };

export default function Writing() {
  const { id = '' } = useParams();
  const task = writings[id];
  const key = keys.writing(id);
  const progress = useStoreValue<WritingProgress>(key, EMPTY_WRITING);
  const [text, setText] = useState(progress.draft);
  const [stage, setStage] = useState<'write' | 'compare'>(progress.submitted ? 'compare' : 'write');
  const [checked, setChecked] = useState<boolean[]>(progress.checklist);
  const ref = useRef<HTMLTextAreaElement>(null);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // autosave the draft
  useEffect(() => {
    if (!task || text === progress.draft) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => store.set(key, { ...store.get(key, EMPTY_WRITING), draft: text }), 800);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [text, task, key, progress.draft]);

  const checks = useMemo(() => (task ? runChecks(task, text) : []), [task, text]);
  if (!task) return <Navigate to="/learn" replace />;
  const unit = levelOf(task.level).units.find((u) => u.unit === task.unit);
  const words = wordCount(text);
  const checksOk = checks.filter((c) => c.ok).length;

  const insert = (snippet: string) => {
    const el = ref.current;
    const clean = snippet.replace(/…/g, '');
    if (!el) return setText((t) => t + clean);
    const start = el.selectionStart ?? text.length;
    const end = el.selectionEnd ?? text.length;
    const next = text.slice(0, start) + clean + text.slice(end);
    setText(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + clean.length, start + clean.length);
    });
  };

  const submit = () => {
    store.set(key, { ...store.get(key, EMPTY_WRITING), draft: text, submitted: text, checklist: [] });
    setChecked([]);
    setStage('compare');
    window.scrollTo({ top: 0 });
  };

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const finish = () => {
    const done = task.checklist.filter((_, i) => checked[i]).length;
    const score = Math.round((done / task.checklist.length) * 100);
    const p = store.get<WritingProgress>(key, EMPTY_WRITING);
    store.set(key, { ...p, checklist: checked, attempts: p.attempts + 1, lastScore: score, bestScore: Math.max(p.bestScore, score), lastAt: todayStr() });
    recordActivity('exercises', 1);
  };

  return (
    <article className="pb-16">
      <Link to={`/learn/${task.level}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-text mb-3">
        <ChevronLeft size={16} /> {task.level} · Unit {task.unit}: {unit?.title}
      </Link>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <LevelPill level={task.level} />
        <Badge tone="info">Writing</Badge>
        <Badge>{typeLabel[task.textType]} · {task.register}</Badge>
        {progress.attempts > 0 && <Badge tone={progress.bestScore >= 80 ? 'success' : 'accent'}>Best {progress.bestScore}%</Badge>}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{task.title}</h1>

      <Card className="mt-4">
        <p className="leading-relaxed">{task.task}</p>
        <p className="mt-2 text-sm font-semibold">Write about all {task.points.length} points:</p>
        <ol className="mt-1 grid gap-1 list-decimal list-inside text-sm">
          {task.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-muted">
          {task.minWords}–{task.maxWords} words · grammar to use:{' '}
          {task.grammarFocus.map((g, i) => (
            <span key={g}>
              {i > 0 && ', '}
              <Link to={`/topic/${g}`} className="text-primary">{topics[g]?.germanTerm ?? g}</Link>
            </span>
          ))}
        </p>
      </Card>

      {stage === 'write' ? (
        <>
          <section className="mt-5">
            <h2 className="font-bold mb-2">Useful phrases <span className="text-muted font-normal text-sm">(tap to insert)</span></h2>
            <div className="flex flex-wrap gap-1.5">
              {task.usefulPhrases.map((p) => (
                <button key={p.de} type="button" onClick={() => insert(p.de)} title={p.en} className="px-2.5 py-1.5 rounded-lg bg-surface border border-line text-sm hover:border-primary/60">
                  <span className="font-medium">{p.de}</span> <span className="text-muted">· {p.en}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <div className="flex items-baseline justify-between mb-1">
              <h2 className="font-bold">Your text</h2>
              <span className={`text-sm tabular-nums ${words >= task.minWords && words <= task.maxWords ? 'text-success' : 'text-muted'}`}>{words} words</span>
            </div>
            <textarea
              ref={ref}
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={10}
              autoCapitalize="sentences"
              autoCorrect="off"
              spellCheck={false}
              placeholder="Schreib hier …"
              className="w-full px-3 py-3 rounded-xl border-2 border-line bg-surface outline-none focus:border-primary text-[1.05rem] leading-relaxed"
            />
            <div className="flex gap-1.5 mt-2">
              {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((ch) => (
                <button key={ch} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => insert(ch)} className="w-9 h-9 rounded-lg bg-surface-2 text-sm font-semibold">
                  {ch}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted mt-1">Your draft is saved automatically.</p>
          </section>

          <Card className="mt-5">
            <h2 className="font-bold mb-2">
              Automatic checks <span className="text-muted font-normal text-sm">{checksOk}/{checks.length}</span>
            </h2>
            <ul className="grid gap-1.5 text-sm">
              {checks.map((c) => (
                <li key={c.label} className="flex items-start gap-2">
                  <span className={`mt-0.5 shrink-0 ${c.ok ? 'text-success' : 'text-muted'}`}>{c.ok ? <CheckIcon size={16} /> : <XIcon size={16} />}</span>
                  <span>
                    {c.label}
                    {c.detail && <span className="text-muted"> · {c.detail}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <Button size="lg" full className="mt-4" disabled={words < 10} onClick={submit}>
              Compare with the model answer
            </Button>
          </Card>
        </>
      ) : (
        <>
          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <Card>
              <h2 className="font-bold mb-2">Your text</h2>
              <div className="whitespace-pre-wrap leading-relaxed text-[1.02rem]">{progress.submitted || text}</div>
              <button type="button" onClick={() => setStage('write')} className="mt-3 text-sm font-semibold text-primary">
                Edit again
              </button>
            </Card>
            <Card className="bg-success-soft/40">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold">Model answer</h2>
                {canSpeak() && (
                  <button type="button" onClick={() => speak(task.model.join(' '))} className="text-primary inline-flex items-center gap-1 text-sm font-semibold" aria-label="Listen">
                    <SpeakerIcon size={16} /> Listen
                  </button>
                )}
              </div>
              {task.model.map((p, i) => (
                <p key={i} className={`leading-relaxed text-[1.02rem] ${i > 0 ? 'mt-2' : ''}`}>
                  {p}
                </p>
              ))}
              <ul className="mt-3 grid gap-1.5 text-sm text-muted list-disc list-inside">
                {task.modelNotes.map((n, i) => (
                  <li key={i}>
                    <MdInline source={n} />
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="mt-4">
            <h2 className="font-bold">Self-check</h2>
            <p className="text-sm text-muted mb-3">Compare your text with the model and tick what is true of yours. Be honest; the score is for you.</p>
            <ul className="grid gap-2">
              {task.checklist.map((item, i) => (
                <li key={i}>
                  <label className="flex items-start gap-3 p-2 rounded-lg hover:bg-surface-2 cursor-pointer">
                    <input type="checkbox" checked={!!checked[i]} onChange={() => toggle(i)} className="mt-1 w-5 h-5 accent-primary shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm text-muted">
                {task.checklist.filter((_, i) => checked[i]).length} of {task.checklist.length} ticked
                {progress.attempts > 0 && ` · last saved ${progress.lastScore}%`}
              </span>
              <Button onClick={finish}>Save result</Button>
            </div>
          </Card>
        </>
      )}
    </article>
  );
}
