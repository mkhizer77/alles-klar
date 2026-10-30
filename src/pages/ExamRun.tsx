// Mock exams: one module at a time, laid out like the paper (texts beside the
// items, listening texts played a fixed number of times, no feedback until the
// end), scored with the official point scheme.
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { exams, topics } from '../content';
import type { Exercise, ExamAudio, ExamModule, ExamPart, ExamProvider, ExamSkill, ExamTask, ExamText, FillExercise, McExercise } from '../content/types';
import { evaluate, type ExValue } from '../components/exercises';
import { Md, MdInline } from '../lib/markdown';
import { speakScript, stopSpeaking, canSpeak } from '../lib/tts';
import { store, useStoreValue } from '../lib/store';
import { keys, EMPTY_EXAM_ATTEMPTS, type ExamAttempt } from '../lib/models';
import { todayStr } from '../lib/date';
import { recordActivity } from '../lib/progress';
import { wordCount } from '../lib/writing';
import { isCorrect } from '../lib/check';
import { Badge, Button, Card, LevelPill, ProgressBar } from '../components/ui';
import { XIcon, SpeakerIcon, ChevronLeft } from '../components/icons';

export const skillLabel: Record<ExamSkill, string> = { lesen: 'Lesen', hoeren: 'Hören', sprachbausteine: 'Sprachbausteine', schreiben: 'Schreiben', sprechen: 'Sprechen' };
export const skillEnglish: Record<ExamSkill, string> = { lesen: 'Reading', hoeren: 'Listening', sprachbausteine: 'Language elements', schreiben: 'Writing', sprechen: 'Speaking' };
export const providerLabel: Record<ExamProvider, string> = { 'goethe-oesd': 'Goethe / ÖSD', telc: 'telc', dtz: 'DTZ' };

const isProductive = (skill: ExamSkill) => skill === 'schreiben' || skill === 'sprechen';

/* ------------------------------------------------------------------ */
/* scoring                                                             */
/* ------------------------------------------------------------------ */

interface ItemResult {
  part: ExamPart;
  ex: Exercise;
  correct: boolean;
  given: string;
  expected: string;
}

function scoreModule(mod: ExamModule, values: Record<string, ExValue>) {
  const results: ItemResult[] = [];
  const byPart: Record<string, [number, number]> = {};
  let right = 0;
  let total = 0;
  for (const part of mod.parts) {
    const pp = part.pointsPerItem ?? 1;
    let r = 0;
    for (const ex of part.items) {
      const ev = evaluate(ex, values[ex.id]);
      results.push({ part, ex, ...ev });
      if (ev.correct) {
        r++;
        right += pp;
      }
      total += pp;
    }
    byPart[part.id] = [r, part.items.length];
  }
  const points = total ? Math.round((right / total) * mod.maxPoints * 10) / 10 : 0;
  const percent = total ? Math.round((right / total) * 100) : 0;
  return { results, byPart, points, percent };
}

function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, '0')}`;
}

/* ------------------------------------------------------------------ */
/* small renderers                                                     */
/* ------------------------------------------------------------------ */

function TextPanel({ texts, wide = true }: { texts: ExamText[]; wide?: boolean }) {
  const ads = texts.every((t) => t.label);
  return (
    <div className={ads ? `grid gap-3 ${wide ? 'sm:grid-cols-2' : ''}` : 'grid gap-4'}>
      {texts.map((t, i) => (
        <div key={i} className={`rounded-xl border border-line bg-surface p-4 ${ads ? 'text-sm' : ''}`}>
          {(t.label || t.title) && (
            <div className="flex items-baseline gap-2 mb-2">
              {t.label && <span className="inline-grid place-items-center w-7 h-7 rounded-lg bg-primary text-on-primary font-bold text-sm shrink-0">{t.label}</span>}
              {t.title && <h3 className="font-bold leading-snug">{t.title}</h3>}
            </div>
          )}
          <Md source={t.body.join('\n\n')} className="leading-relaxed [&_p+p]:mt-2" />
        </div>
      ))}
    </div>
  );
}

function AudioPlayer({ audio, plays, onPlay, reveal }: { audio: ExamAudio; plays: number; onPlay: () => void; reveal: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const left = audio.plays - plays;
  const play = async () => {
    if (left <= 0 && !reveal) return;
    onPlay();
    setPlaying(true);
    await speakScript(audio.text);
    setPlaying(false);
  };
  const stop = () => {
    stopSpeaking();
    setPlaying(false);
  };
  return (
    <div className="rounded-xl border border-line bg-surface p-3">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-40">
          <div className="font-semibold text-sm">{audio.label}</div>
          <div className="text-xs text-muted">
            {reveal ? 'Listen again as often as you like' : `In the exam you hear this ${audio.plays === 1 ? 'once' : 'twice'} · ${left} play${left === 1 ? '' : 's'} left`}
          </div>
        </div>
        {playing ? (
          <Button size="sm" variant="secondary" onClick={stop}>
            Stop
          </Button>
        ) : (
          <Button size="sm" onClick={play} disabled={!canSpeak() || (!reveal && left <= 0)}>
            <SpeakerIcon size={16} /> Play
          </Button>
        )}
        {reveal && (
          <button type="button" onClick={() => setShowScript((s) => !s)} className="text-sm font-semibold text-primary">
            {showScript ? 'Hide transcript' : 'Transcript'}
          </button>
        )}
      </div>
      {!canSpeak() && <p className="text-xs text-danger mt-1">This browser has no German voice; use the transcript in the report instead.</p>}
      {reveal && showScript && <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">{audio.text}</pre>}
    </div>
  );
}

const isLetterOptions = (ex: McExercise) => ex.options.every((o) => o.length <= 2);

function ExamMc({ ex, n, value, onChange, reveal }: { ex: McExercise; n: number; value: number | undefined; onChange: (v: number) => void; reveal: boolean }) {
  const letters = isLetterOptions(ex);
  const cls = (i: number) => {
    if (reveal) {
      if (i === ex.answer) return 'border-success bg-success-soft text-success';
      if (i === value) return 'border-danger bg-danger-soft text-danger';
      return 'border-line bg-surface opacity-60';
    }
    return i === value ? 'border-primary bg-info-soft' : 'border-line bg-surface hover:border-primary/60';
  };
  return (
    <div className="py-3 border-t border-line first:border-t-0">
      <p className="font-medium leading-snug mb-2">
        <span className="inline-block w-7 text-muted tabular-nums">{n}</span>
        <MdInline source={ex.prompt} />
      </p>
      {letters ? (
        <div className="flex flex-wrap gap-1.5 pl-7">
          {ex.options.map((o, i) => (
            <button key={i} type="button" disabled={reveal} onClick={() => onChange(i)} className={`min-w-10 h-10 px-3 rounded-lg border-2 font-bold transition ${cls(i)}`}>
              {o}
            </button>
          ))}
        </div>
      ) : (
        <div className="grid gap-1.5 pl-7">
          {ex.options.map((o, i) => (
            <button key={i} type="button" disabled={reveal} onClick={() => onChange(i)} className={`text-left px-3 py-2 rounded-lg border-2 text-sm font-medium transition ${cls(i)}`}>
              <span className="inline-block w-5 text-muted font-semibold">{String.fromCharCode(97 + i)}</span>
              {o}
            </button>
          ))}
        </div>
      )}
      {reveal && (
        <p className="mt-2 pl-7 text-sm text-muted leading-relaxed">
          <MdInline source={ex.explanation} />
        </p>
      )}
    </div>
  );
}

function ExamFill({ ex, n, value, onChange, reveal }: { ex: FillExercise; n: number; value: string; onChange: (v: string) => void; reveal: boolean }) {
  const [before, after] = ex.prompt.split('___');
  const ok = reveal && isCorrect(value, ex.answer);
  return (
    <div className="py-3 border-t border-line first:border-t-0">
      <p className="leading-loose">
        <span className="inline-block w-7 text-muted tabular-nums">{n}</span>
        <MdInline source={before} />
        <input
          value={value}
          disabled={reveal}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => onChange(e.target.value)}
          className={`inline-block mx-1 px-2 py-0.5 rounded-lg border-b-2 bg-surface-2 outline-none text-center font-semibold ${reveal ? (ok ? 'border-success text-success' : 'border-danger text-danger line-through') : 'border-primary'}`}
          style={{ width: `${Math.max(8, value.length + 2)}ch` }}
          aria-label={`Answer ${n}`}
        />
        <MdInline source={after ?? ''} />
      </p>
      {reveal && !ok && <p className="pl-7 text-sm text-success font-semibold">Richtig: {ex.answer[0]}</p>}
      {reveal && (
        <p className="mt-1 pl-7 text-sm text-muted leading-relaxed">
          <MdInline source={ex.explanation} />
        </p>
      )}
    </div>
  );
}

function ItemList({ part, offset, values, onChange, reveal }: { part: ExamPart; offset: number; values: Record<string, ExValue>; onChange: (id: string, v: ExValue) => void; reveal: boolean }) {
  return (
    <div>
      {part.items.map((ex, i) =>
        ex.type === 'mc' ? (
          <ExamMc key={ex.id} ex={ex} n={offset + i + 1} value={values[ex.id] as number | undefined} onChange={(v) => onChange(ex.id, v)} reveal={reveal} />
        ) : ex.type === 'fill' ? (
          <ExamFill key={ex.id} ex={ex} n={offset + i + 1} value={(values[ex.id] as string) ?? ''} onChange={(v) => onChange(ex.id, v)} reveal={reveal} />
        ) : null,
      )}
    </div>
  );
}

function UmlautBar({ onInsert }: { onInsert: (ch: string) => void }) {
  return (
    <div className="flex gap-1.5 mt-2">
      {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((ch) => (
        <button key={ch} type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => onInsert(ch)} className="w-9 h-9 rounded-lg bg-surface-2 text-sm font-semibold">
          {ch}
        </button>
      ))}
    </div>
  );
}

function TaskEditor({ task, skill, text, onChange }: { task: ExamTask; skill: ExamSkill; text: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const words = wordCount(text);
  const insert = (ch: string) => {
    const el = ref.current;
    if (!el) return onChange(text + ch);
    const start = el.selectionStart ?? text.length;
    const end = el.selectionEnd ?? text.length;
    onChange(text.slice(0, start) + ch + text.slice(end));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + 1, start + 1);
    });
  };
  return (
    <Card className="mt-4">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-bold">{task.title}</h3>
        {task.minutes && <Badge>{task.minutes} min</Badge>}
        {task.words && <Badge>circa {task.words} Wörter</Badge>}
      </div>
      <Md source={task.instructions} className="mt-2 leading-relaxed [&_p+p]:mt-2" />
      {task.situation && (
        <div className="mt-3 rounded-xl border border-line bg-surface-2/60 p-3 text-[0.95rem]">
          <Md source={task.situation.join('\n\n')} className="leading-relaxed [&_p+p]:mt-2" />
        </div>
      )}
      <ul className="mt-3 grid gap-1 text-[0.95rem]">
        {task.points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-muted">–</span>
            <MdInline source={p} />
          </li>
        ))}
      </ul>
      {task.scenarioId && (
        <p className="mt-3 text-sm">
          <Link to={`/speaking/${task.scenarioId}`} className="font-semibold text-primary">
            🗣️ Rehearse this part with the AI partner →
          </Link>
        </p>
      )}
      <div className="mt-4">
        <div className="flex items-baseline justify-between mb-1">
          <h4 className="font-semibold text-sm">{skill === 'schreiben' ? 'Your text' : 'Your notes (keywords, as in the preparation time)'}</h4>
          {skill === 'schreiben' && <span className={`text-sm tabular-nums ${task.words && words >= task.words * 0.8 ? 'text-success' : 'text-muted'}`}>{words} words</span>}
        </div>
        <textarea
          ref={ref}
          value={text}
          onChange={(e) => onChange(e.target.value)}
          rows={skill === 'schreiben' ? 9 : 5}
          autoCapitalize="sentences"
          autoCorrect="off"
          spellCheck={false}
          placeholder={skill === 'schreiben' ? 'Schreiben Sie hier …' : 'Stichworte …'}
          className="w-full px-3 py-3 rounded-xl border-2 border-line bg-surface outline-none focus:border-primary text-[1.02rem] leading-relaxed"
        />
        <UmlautBar onInsert={insert} />
      </div>
    </Card>
  );
}

function TaskReview({ task, skill, text, ticked, onToggle }: { task: ExamTask; skill: ExamSkill; text: string; ticked: boolean[]; onToggle: (i: number) => void }) {
  return (
    <Card className="mt-4">
      <h3 className="font-bold">{task.title}</h3>
      <div className="mt-3 grid md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-sm mb-1">{skill === 'schreiben' ? 'Your text' : 'Your notes'}</h4>
          <div className="whitespace-pre-wrap leading-relaxed text-[0.98rem] min-h-16">{text || <span className="text-muted">(nothing written)</span>}</div>
        </div>
        <div className="rounded-xl bg-success-soft/40 p-3">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-sm">{skill === 'schreiben' ? 'Model answer' : 'What a strong answer covers'}</h4>
            {canSpeak() && skill === 'schreiben' && (
              <button type="button" onClick={() => speakScript(task.model.join('\n'))} className="text-primary inline-flex items-center gap-1 text-xs font-semibold">
                <SpeakerIcon size={14} /> Listen
              </button>
            )}
          </div>
          {task.model.map((p, i) => (
            <p key={i} className={`leading-relaxed text-[0.98rem] ${i > 0 ? 'mt-2' : ''}`}>
              <MdInline source={p} />
            </p>
          ))}
          <ul className="mt-3 grid gap-1 text-sm text-muted list-disc list-inside">
            {task.modelNotes.map((n, i) => (
              <li key={i}>
                <MdInline source={n} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h4 className="font-semibold text-sm mt-4 mb-1">Self-check, as the examiners would (tick what your answer does)</h4>
      <ul className="grid gap-1.5">
        {task.criteria.map((c, i) => (
          <li key={c}>
            <label className="flex items-start gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={!!ticked[i]} onChange={() => onToggle(i)} className="mt-0.5 w-5 h-5 accent-primary shrink-0" />
              <span>{c}</span>
            </label>
          </li>
        ))}
      </ul>
      {task.scenarioId && (
        <p className="mt-3 text-sm">
          <Link to={`/speaking/${task.scenarioId}`} className="font-semibold text-primary">
            🗣️ Now do it out loud with the AI partner →
          </Link>
        </p>
      )}
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/* overview: /exam/:id                                                 */
/* ------------------------------------------------------------------ */

export function ExamOverview() {
  const { id = '' } = useParams();
  const exam = exams[id];
  const attempts = useStoreValue<ExamAttempt[]>(keys.exam(id), EMPTY_EXAM_ATTEMPTS);
  if (!exam) return <Navigate to="/tests" replace />;
  return (
    <div className="pb-10">
      <Link to="/tests" className="inline-flex items-center gap-1 text-sm text-muted hover:text-text mb-3">
        <ChevronLeft size={16} /> Tests
      </Link>
      <div className="flex items-center gap-2 flex-wrap mb-1">
        <LevelPill level={exam.level} />
        <Badge tone="accent">{providerLabel[exam.provider]}</Badge>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{exam.title}</h1>
      <p className="text-muted mt-1">{exam.subtitle}</p>
      <Card className="mt-4">
        <p className="leading-relaxed">{exam.intro}</p>
        <p className="mt-2 text-sm text-muted">
          <span className="font-semibold text-text">Format:</span> {exam.modelledOn}
        </p>
        <p className="mt-1 text-sm text-muted">
          <span className="font-semibold text-text">Passing:</span> {exam.passRule}
        </p>
      </Card>
      <div className="grid gap-3 mt-4">
        {exam.modules.map((m) => {
          const mine = attempts.filter((a) => a.skill === m.skill);
          const last = mine[mine.length - 1];
          const best = mine.reduce((b, a) => Math.max(b, a.percent), 0);
          const items = m.parts.reduce((n, p) => n + p.items.length, 0);
          const tasks = m.parts.reduce((n, p) => n + (p.tasks?.length ?? 0), 0);
          return (
            <Card key={m.skill}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="font-bold text-lg">
                    {m.title} <span className="text-muted font-normal text-sm">· {skillEnglish[m.skill]}</span>
                  </h2>
                  <p className="text-sm text-muted mt-0.5">
                    {m.minutes} min · {m.parts.length} parts · {items ? `${items} items` : `${tasks} task${tasks > 1 ? 's' : ''}`} · {m.maxPoints} points, pass at {m.passPercent}%
                  </p>
                  <ul className="mt-2 text-sm grid gap-0.5">
                    {m.parts.map((p) => (
                      <li key={p.id} className="text-muted">
                        <span className="font-semibold text-text">{p.title}</span> · {p.goal}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right shrink-0">
                  {last ? (
                    <>
                      <div className={`text-2xl font-black tabular-nums ${last.passed ? 'text-success' : 'text-danger'}`}>{last.percent}%</div>
                      <div className="text-xs text-muted">
                        last · best {best}% · {mine.length}×
                      </div>
                    </>
                  ) : (
                    <div className="text-xs text-muted">not taken</div>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <Link to={`/exam/${exam.id}/${m.skill}`} className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm">
                  {last ? 'Take again' : 'Start'} {m.title}
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* module run: /exam/:id/:skill                                        */
/* ------------------------------------------------------------------ */

export default function ExamRun() {
  const { id = '', skill = '' } = useParams();
  const navigate = useNavigate();
  const exam = exams[id];
  const mod = exam?.modules.find((m) => m.skill === skill);
  const [phase, setPhase] = useState<'intro' | 'run' | 'report'>('intro');
  const [partIdx, setPartIdx] = useState(0);
  const [values, setValues] = useState<Record<string, ExValue>>({});
  const [texts, setTexts] = useState<Record<string, string>>({});
  const [plays, setPlays] = useState<Record<string, number>>({});
  const [ticks, setTicks] = useState<Record<string, boolean[]>>({});
  const [saved, setSaved] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef<number>(0);

  useEffect(() => {
    if (phase !== 'run') return;
    startedAt.current = startedAt.current || Date.now();
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, [phase]);
  useEffect(() => () => stopSpeaking(), []);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    stopSpeaking();
  }, [partIdx, phase]);

  const score = useMemo(() => (mod && phase === 'report' ? scoreModule(mod, values) : null), [mod, phase, values]);

  if (!exam || !mod) return <Navigate to={exam ? `/exam/${exam.id}` : '/tests'} replace />;
  const productive = isProductive(mod.skill);
  const part = mod.parts[partIdx];
  // item numbers run through the whole module, as on the paper
  const itemOffset = (i: number) => mod.parts.slice(0, i).reduce((n, p) => n + p.items.length, 0);

  const finish = () => {
    setPhase('report');
    if (!productive) {
      const s = scoreModule(mod, values);
      const a: ExamAttempt = {
        id: `${exam.id}-${mod.skill}-${Date.now()}`,
        examId: exam.id,
        skill: mod.skill,
        date: todayStr(),
        points: s.points,
        maxPoints: mod.maxPoints,
        percent: s.percent,
        passed: s.percent >= mod.passPercent,
        byPart: s.byPart,
      };
      store.update<ExamAttempt[]>(keys.exam(exam.id), EMPTY_EXAM_ATTEMPTS, (list) => [...list, a].slice(-40));
      recordActivity('exercises', s.results.length);
      setSaved(true);
    }
  };

  const saveProductive = () => {
    const tasks = mod.parts.flatMap((p) => p.tasks ?? []);
    const total = tasks.reduce((n, t) => n + t.criteria.length, 0);
    const done = tasks.reduce((n, t) => n + (ticks[t.id] ?? []).filter(Boolean).length, 0);
    const percent = total ? Math.round((done / total) * 100) : 0;
    const byPart: Record<string, [number, number]> = {};
    for (const p of mod.parts) {
      const ts = p.tasks ?? [];
      byPart[p.id] = [ts.reduce((n, t) => n + (ticks[t.id] ?? []).filter(Boolean).length, 0), ts.reduce((n, t) => n + t.criteria.length, 0)];
    }
    const a: ExamAttempt = {
      id: `${exam.id}-${mod.skill}-${Date.now()}`,
      examId: exam.id,
      skill: mod.skill,
      date: todayStr(),
      points: Math.round((percent / 100) * mod.maxPoints),
      maxPoints: mod.maxPoints,
      percent,
      passed: percent >= mod.passPercent,
      byPart,
      texts,
    };
    store.update<ExamAttempt[]>(keys.exam(exam.id), EMPTY_EXAM_ATTEMPTS, (list) => [...list, a].slice(-40));
    recordActivity('exercises', tasks.length);
    setSaved(true);
  };

  /* ---------- intro ---------- */
  if (phase === 'intro') {
    return (
      <div className="max-w-md mx-auto text-center pt-6">
        <div className="flex justify-center gap-2">
          <LevelPill level={exam.level} />
          <Badge tone="accent">{providerLabel[exam.provider]}</Badge>
        </div>
        <h1 className="mt-3 text-2xl font-bold">
          {exam.title}: {mod.title}
        </h1>
        <p className="text-muted mt-2">
          {mod.minutes} minutes in the real exam · {mod.parts.length} parts · {mod.maxPoints} points, you pass at {mod.passPercent}%.
        </p>
        <ul className="mt-4 text-left text-sm grid gap-1.5">
          {mod.parts.map((p) => (
            <li key={p.id} className="flex gap-2">
              <span className="font-semibold w-16 shrink-0">{p.title}</span>
              <span className="text-muted">{p.goal}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          {productive
            ? 'Write as you would on paper, then compare with the model and tick the examiners’ criteria yourself.'
            : mod.skill === 'hoeren'
              ? 'Read the items first, then play the text. It plays only as often as in the exam. No feedback until the end.'
              : 'All items of a part are on one page, with the text beside them. No feedback until the end.'}
        </p>
        <Button size="lg" full className="mt-6" onClick={() => setPhase('run')}>
          Begin
        </Button>
        <button type="button" onClick={() => navigate(`/exam/${exam.id}`)} className="mt-3 text-sm text-muted">
          Not now
        </button>
      </div>
    );
  }

  /* ---------- run ---------- */
  if (phase === 'run') {
    const over = elapsed > mod.minutes * 60;
    const last = partIdx >= mod.parts.length - 1;
    return (
      <div className="pb-10">
        <div className="flex items-center gap-3 mb-3">
          <button type="button" onClick={() => navigate(`/exam/${exam.id}`)} className="p-1 -ml-1 rounded-lg text-muted hover:text-text" aria-label="Exit">
            <XIcon />
          </button>
          <ProgressBar value={partIdx} max={mod.parts.length} className="flex-1" />
          <span className={`text-sm tabular-nums ${over ? 'text-danger font-semibold' : 'text-muted'}`}>
            {fmtTime(elapsed)} / {mod.minutes} min
          </span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge tone="info">{mod.title}</Badge>
          <h2 className="font-bold text-lg">
            {part.title}
            {part.minutes && <span className="text-muted font-normal text-sm"> · Arbeitszeit: {part.minutes} Minuten</span>}
          </h2>
        </div>
        <p className="text-xs text-muted mt-0.5">{part.goal}</p>
        <div className="mt-3 rounded-xl bg-surface-2/70 px-4 py-3 text-[0.95rem] leading-relaxed">
          <Md source={part.instructions} className="[&_p+p]:mt-1" />
        </div>

        {productive ? (
          <>
            {part.texts && part.texts.length > 0 && (
              <div className="mt-4">
                <TextPanel texts={part.texts} />
              </div>
            )}
            {(part.tasks ?? []).map((t) => (
              <TaskEditor key={t.id} task={t} skill={mod.skill} text={texts[t.id] ?? ''} onChange={(v) => setTexts({ ...texts, [t.id]: v })} />
            ))}
          </>
        ) : (
          <div className={`mt-4 ${part.texts?.length ? 'md:grid md:grid-cols-2 md:gap-6' : ''}`}>
            {part.texts && part.texts.length > 0 && (
              <div className="md:sticky md:top-4 md:max-h-[85dvh] md:overflow-auto md:pr-1">
                <TextPanel texts={part.texts} wide={false} />
              </div>
            )}
            <div className="mt-4 md:mt-0">
              {part.audio && part.audio.length > 0 && (
                <div className="grid gap-2 mb-3">
                  {part.audio.map((a) => (
                    <AudioPlayer key={a.id} audio={a} plays={plays[a.id] ?? 0} onPlay={() => setPlays({ ...plays, [a.id]: (plays[a.id] ?? 0) + 1 })} reveal={false} />
                  ))}
                </div>
              )}
              <Card>
                <ItemList part={part} offset={itemOffset(partIdx)} values={values} onChange={(k, v) => setValues({ ...values, [k]: v })} reveal={false} />
              </Card>
            </div>
          </div>
        )}

        <div className="mt-6 flex gap-2">
          {partIdx > 0 && (
            <Button variant="secondary" onClick={() => setPartIdx(partIdx - 1)}>
              Back
            </Button>
          )}
          <Button size="lg" className="flex-1" onClick={() => (last ? finish() : setPartIdx(partIdx + 1))}>
            {last ? (productive ? 'Compare with the model' : 'Finish and see the result') : `Next: ${mod.parts[partIdx + 1].title}`}
          </Button>
        </div>
      </div>
    );
  }

  /* ---------- report ---------- */
  if (productive) {
    const tasks = mod.parts.flatMap((p) => p.tasks ?? []);
    const total = tasks.reduce((n, t) => n + t.criteria.length, 0);
    const done = tasks.reduce((n, t) => n + (ticks[t.id] ?? []).filter(Boolean).length, 0);
    const pct = total ? Math.round((done / total) * 100) : 0;
    return (
      <div className="pb-10">
        <div className="text-center py-4">
          <Badge tone="info">
            {exam.title} · {mod.title}
          </Badge>
          <div className={`mt-2 text-5xl font-black tabular-nums ${pct >= mod.passPercent ? 'text-success' : 'text-accent'}`}>{pct}%</div>
          <p className="text-muted mt-1">
            {done} of {total} criteria ticked · you pass this module at {mod.passPercent}%
          </p>
        </div>
        {mod.parts.map((p) =>
          (p.tasks ?? []).map((t) => (
            <TaskReview
              key={t.id}
              task={t}
              skill={mod.skill}
              text={texts[t.id] ?? ''}
              ticked={ticks[t.id] ?? []}
              onToggle={(i) => {
                const next = [...(ticks[t.id] ?? [])];
                next[i] = !next[i];
                setTicks({ ...ticks, [t.id]: next });
                setSaved(false);
              }}
            />
          )),
        )}
        <div className="mt-5 flex gap-2 flex-wrap items-center">
          {saved ? <Badge tone="success">Saved</Badge> : <Button onClick={saveProductive}>Save result</Button>}
          <Button variant="secondary" onClick={() => navigate(`/exam/${exam.id}`)}>
            Back to the exam
          </Button>
        </div>
      </div>
    );
  }

  const s = score!;
  const weakTopics = Array.from(new Set(mod.parts.filter((p) => s.byPart[p.id][1] && s.byPart[p.id][0] / s.byPart[p.id][1] < 0.7).flatMap((p) => p.topicIds))).filter((t) => topics[t]);
  let n = 0;
  return (
    <div className="pb-10">
      <div className="text-center py-4">
        <Badge tone="info">
          {exam.title} · {mod.title}
        </Badge>
        <div className={`mt-2 text-6xl font-black tabular-nums ${s.percent >= mod.passPercent ? 'text-success' : 'text-danger'}`}>{s.percent}%</div>
        <div className="font-bold text-lg mt-1">{s.percent >= mod.passPercent ? 'Bestanden' : 'Nicht bestanden'}</div>
        <p className="text-muted">
          {s.points} of {mod.maxPoints} points · pass mark {Math.round((mod.passPercent / 100) * mod.maxPoints)} · {fmtTime(elapsed)} of {mod.minutes} min used
        </p>
      </div>
      <Card className="mb-4">
        <h2 className="font-bold mb-3">By part</h2>
        <div className="grid gap-2.5">
          {mod.parts.map((p) => {
            const [r, t] = s.byPart[p.id];
            const pct = t ? Math.round((r / t) * 100) : 0;
            return (
              <div key={p.id}>
                <div className="flex justify-between text-sm gap-3">
                  <span>
                    <span className="font-semibold">{p.title}</span> <span className="text-muted">{p.goal}</span>
                  </span>
                  <span className="tabular-nums text-muted shrink-0">
                    {r}/{t}
                  </span>
                </div>
                <ProgressBar value={pct} className="mt-1" color={pct >= 80 ? 'bg-success' : pct >= 60 ? 'bg-accent' : 'bg-danger'} />
              </div>
            );
          })}
        </div>
      </Card>
      {weakTopics.length > 0 && (
        <Card className="mb-4">
          <h2 className="font-bold mb-1">Revise before the next attempt</h2>
          <p className="text-sm text-muted mb-2">The parts you lost points in draw on these topics.</p>
          <div className="grid gap-1.5">
            {weakTopics.slice(0, 8).map((t) => (
              <Link key={t} to={`/topic/${t}`} className="px-3 py-2 rounded-lg bg-surface-2 hover:bg-line text-sm font-medium">
                {topics[t].title}
              </Link>
            ))}
          </div>
        </Card>
      )}
      <h2 className="font-bold text-lg mt-6 mb-2">All answers</h2>
      {mod.parts.map((p) => {
        const offset = n;
        n += p.items.length;
        return (
          <Card key={p.id} className="mb-4">
            <h3 className="font-bold">
              {p.title} <span className="text-muted font-normal text-sm">· {p.goal}</span>
            </h3>
            {p.audio && p.audio.length > 0 && (
              <div className="grid gap-2 my-3">
                {p.audio.map((a) => (
                  <AudioPlayer key={a.id} audio={a} plays={0} onPlay={() => {}} reveal />
                ))}
              </div>
            )}
            {p.texts && p.texts.length > 0 && (
              <details className="my-3">
                <summary className="cursor-pointer text-sm font-semibold text-primary">Show the text{p.texts.length > 1 ? 's' : ''}</summary>
                <div className="mt-2">
                  <TextPanel texts={p.texts} />
                </div>
              </details>
            )}
            <ItemList part={p} offset={offset} values={values} onChange={() => {}} reveal />
          </Card>
        );
      })}
      <div className="flex gap-2 flex-wrap items-center">
        {saved && <Badge tone="success">Saved</Badge>}
        <Button onClick={() => navigate(`/exam/${exam.id}`)}>Back to the exam</Button>
      </div>
    </div>
  );
}
