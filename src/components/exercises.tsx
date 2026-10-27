import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Exercise, FillExercise, MatchExercise, McExercise, OrderExercise, TranslateExercise } from '../content/types';
import { isCorrect, shuffle, seededRandom } from '../lib/check';
import { MdInline } from '../lib/markdown';

export interface Evaluation {
  correct: boolean;
  given: string;
  expected: string;
}

export type ExValue = number | string | number[] | Record<number, number> | undefined;

export function evaluate(ex: Exercise, value: ExValue): Evaluation {
  switch (ex.type) {
    case 'mc': {
      const v = typeof value === 'number' ? value : -1;
      return { correct: v === ex.answer, given: v >= 0 ? ex.options[v] : '—', expected: ex.options[ex.answer] };
    }
    case 'fill':
    case 'translate': {
      const v = typeof value === 'string' ? value : '';
      return { correct: isCorrect(v, ex.answer), given: v || '—', expected: ex.answer[0] };
    }
    case 'order': {
      const idx = Array.isArray(value) ? value : [];
      const sentence = idx.map((i) => ex.words[i]).join(' ');
      return { correct: idx.length === ex.words.length && isCorrect(sentence, ex.answer), given: sentence || '—', expected: ex.answer[0] };
    }
    case 'match': {
      const v = (value && typeof value === 'object' && !Array.isArray(value) ? value : {}) as Record<number, number>;
      const all = ex.pairs.every((_, i) => v[i] === i);
      const n = Object.keys(v).length;
      return { correct: all && n === ex.pairs.length, given: `${ex.pairs.filter((_, i) => v[i] === i).length} of ${ex.pairs.length} matched`, expected: ex.pairs.map((p) => `${p[0]} – ${p[1]}`).join(', ') };
    }
  }
}

export function isAnswered(ex: Exercise, value: ExValue): boolean {
  switch (ex.type) {
    case 'mc':
      return typeof value === 'number';
    case 'fill':
    case 'translate':
      return typeof value === 'string' && value.trim().length > 0;
    case 'order':
      return Array.isArray(value) && value.length === ex.words.length;
    case 'match':
      return !!value && typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === ex.pairs.length;
  }
}

interface InputProps<E extends Exercise, V> {
  ex: E;
  value: V;
  onChange: (v: V) => void;
  reveal: boolean;
  onSubmit?: () => void;
}

export function Prompt({ children }: { children: ReactNode }) {
  return <p className="text-lg font-medium leading-snug mb-4">{children}</p>;
}

/* ---------------- multiple choice ---------------- */
export function McInput({ ex, value, onChange, reveal }: InputProps<McExercise, number | undefined>) {
  return (
    <div>
      <Prompt><MdInline source={ex.prompt} /></Prompt>
      <div className="grid gap-2">
        {ex.options.map((opt, i) => {
          let cls = 'border-line bg-surface hover:border-primary/60';
          if (reveal) {
            if (i === ex.answer) cls = 'border-success bg-success-soft text-success';
            else if (i === value) cls = 'border-danger bg-danger-soft text-danger';
            else cls = 'border-line bg-surface opacity-60';
          } else if (i === value) cls = 'border-primary bg-info-soft';
          return (
            <button
              key={i}
              type="button"
              disabled={reveal}
              onClick={() => onChange(i)}
              className={`text-left px-4 py-3 rounded-xl border-2 font-medium transition ${cls}`}
            >
              <span className="inline-block w-6 text-muted font-semibold">{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- umlaut helper ---------------- */
function UmlautBar({ onInsert }: { onInsert: (ch: string) => void }) {
  return (
    <div className="flex gap-1.5 mt-2">
      {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map((ch) => (
        <button key={ch} type="button" tabIndex={-1} onMouseDown={(e) => e.preventDefault()} onClick={() => onInsert(ch)} className="w-9 h-9 rounded-lg bg-surface-2 text-sm font-semibold hover:bg-line">
          {ch}
        </button>
      ))}
    </div>
  );
}

function useInsert(ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>, value: string, onChange: (v: string) => void) {
  return (ch: string) => {
    const el = ref.current;
    if (!el) return onChange(value + ch);
    const start = el.selectionStart ?? value.length;
    const end = el.selectionEnd ?? value.length;
    const next = value.slice(0, start) + ch + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + ch.length, start + ch.length);
    });
  };
}

/* ---------------- fill the blank ---------------- */
export function FillInput({ ex, value, onChange, reveal, onSubmit }: InputProps<FillExercise, string>) {
  const ref = useRef<HTMLInputElement>(null);
  const insert = useInsert(ref, value, onChange);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  const [before, after] = ex.prompt.split('___');
  const ok = reveal && isCorrect(value, ex.answer);
  return (
    <div>
      <p className="text-lg font-medium leading-relaxed mb-3">
        <MdInline source={before} />
        <input
          ref={ref}
          value={value}
          disabled={reveal}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          autoFocus
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSubmit?.()}
          className={`inline-block mx-1 px-2 py-1 min-w-24 max-w-full rounded-lg border-b-2 bg-surface-2 outline-none text-center font-semibold ${reveal ? (ok ? 'border-success text-success' : 'border-danger text-danger line-through') : 'border-primary'}`}
          style={{ width: `${Math.max(6, value.length + 2)}ch` }}
          aria-label="Your answer"
        />
        <MdInline source={after ?? ''} />
      </p>
      {reveal && !ok && <p className="text-success font-semibold">Correct: {ex.answer[0]}{ex.answer.length > 1 && <span className="text-muted font-normal"> (also: {ex.answer.slice(1).join(', ')})</span>}</p>}
      {ex.hint && !reveal && <p className="text-sm text-muted">Hint: {ex.hint}</p>}
      {!reveal && <UmlautBar onInsert={insert} />}
    </div>
  );
}

/* ---------------- translate ---------------- */
export function TranslateInput({ ex, value, onChange, reveal, onSubmit }: InputProps<TranslateExercise, string>) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const insert = useInsert(ref, value, onChange);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  const ok = reveal && isCorrect(value, ex.answer);
  return (
    <div>
      <Prompt><MdInline source={ex.prompt} /></Prompt>
      <textarea
        ref={ref}
        value={value}
        disabled={reveal}
        rows={2}
        autoCapitalize="sentences"
        autoCorrect="off"
        spellCheck={false}
        autoFocus
        placeholder="Type the German …"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSubmit?.();
          }
        }}
        className={`w-full px-3 py-2.5 rounded-xl border-2 bg-surface outline-none text-lg ${reveal ? (ok ? 'border-success' : 'border-danger') : 'border-line focus:border-primary'}`}
      />
      {reveal && !ok && <p className="mt-2 text-success font-semibold">Correct: {ex.answer[0]}{ex.answer.length > 1 && <span className="text-muted font-normal"> (also: {ex.answer.slice(1).join(' / ')})</span>}</p>}
      {ex.hint && !reveal && <p className="mt-1 text-sm text-muted">Hint: {ex.hint}</p>}
      {!reveal && <UmlautBar onInsert={insert} />}
    </div>
  );
}

/* ---------------- word order ---------------- */
export function OrderInput({ ex, value, onChange, reveal }: InputProps<OrderExercise, number[]>) {
  const chosen = value ?? [];
  const remaining = ex.words.map((_, i) => i).filter((i) => !chosen.includes(i));
  const sentence = chosen.map((i) => ex.words[i]).join(' ');
  const ok = reveal && isCorrect(sentence, ex.answer);
  return (
    <div>
      <Prompt><MdInline source={ex.prompt} /></Prompt>
      <div className={`min-h-14 p-3 rounded-xl border-2 border-dashed flex flex-wrap gap-2 ${reveal ? (ok ? 'border-success bg-success-soft' : 'border-danger bg-danger-soft') : 'border-line bg-surface-2'}`}>
        {chosen.length === 0 && <span className="text-muted text-sm self-center">Tap the words below in the right order</span>}
        {chosen.map((wi, pos) => (
          <button key={`${wi}-${pos}`} type="button" disabled={reveal} onClick={() => onChange(chosen.filter((_, p) => p !== pos))} className="px-3 py-1.5 rounded-lg bg-surface border border-line font-medium shadow-sm animate-pop">
            {ex.words[wi]}
          </button>
        ))}
      </div>
      {reveal && !ok && <p className="mt-2 text-success font-semibold">Correct: {ex.answer[0]}</p>}
      {!reveal && (
        <div className="mt-3 flex flex-wrap gap-2">
          {remaining.map((wi) => (
            <button key={wi} type="button" onClick={() => onChange([...chosen, wi])} className="px-3 py-2 rounded-lg bg-surface border-2 border-line font-medium hover:border-primary/60">
              {ex.words[wi]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- match ---------------- */
export function MatchInput({ ex, value, onChange, reveal }: InputProps<MatchExercise, Record<number, number>>) {
  const pairs = value ?? {};
  const rightOrder = useMemo(() => {
    let seed = 0;
    for (const ch of ex.id) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
    return shuffle(ex.pairs.map((_, i) => i), seededRandom(seed));
  }, [ex]);
  const [selLeft, setSelLeft] = useState<number | null>(null);
  const usedRight = new Set(Object.values(pairs));

  const pick = (side: 'l' | 'r', i: number) => {
    if (reveal) return;
    if (side === 'l') {
      if (pairs[i] !== undefined) {
        const next = { ...pairs };
        delete next[i];
        onChange(next);
        setSelLeft(null);
        return;
      }
      setSelLeft(selLeft === i ? null : i);
      return;
    }
    if (usedRight.has(i)) {
      const next = { ...pairs };
      for (const k of Object.keys(next)) if (next[Number(k)] === i) delete next[Number(k)];
      onChange(next);
      return;
    }
    if (selLeft === null) return;
    onChange({ ...pairs, [selLeft]: i });
    setSelLeft(null);
  };

  const colors = ['bg-info-soft border-primary', 'bg-success-soft border-success', 'bg-accent/15 border-accent', 'bg-danger-soft border-danger', 'bg-surface-2 border-muted', 'bg-info-soft border-primary'];

  return (
    <div>
      <Prompt><MdInline source={ex.prompt} /></Prompt>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2 content-start">
          {ex.pairs.map((p, i) => {
            const paired = pairs[i] !== undefined;
            let cls = 'border-line bg-surface';
            if (reveal) cls = pairs[i] === i ? 'border-success bg-success-soft' : 'border-danger bg-danger-soft';
            else if (paired) cls = colors[i % colors.length];
            else if (selLeft === i) cls = 'border-primary bg-info-soft ring-2 ring-primary/30';
            return (
              <button key={i} type="button" onClick={() => pick('l', i)} className={`px-3 py-2.5 rounded-xl border-2 text-left font-medium ${cls}`}>
                {p[0]}
              </button>
            );
          })}
        </div>
        <div className="grid gap-2 content-start">
          {rightOrder.map((ri) => {
            const leftIdx = Number(Object.keys(pairs).find((k) => pairs[Number(k)] === ri) ?? -1);
            const paired = leftIdx >= 0;
            let cls = 'border-line bg-surface';
            if (reveal) cls = paired && leftIdx === ri ? 'border-success bg-success-soft' : 'border-danger bg-danger-soft';
            else if (paired) cls = colors[leftIdx % colors.length];
            else if (selLeft !== null) cls = 'border-dashed border-primary/60 bg-surface';
            return (
              <button key={ri} type="button" onClick={() => pick('r', ri)} className={`px-3 py-2.5 rounded-xl border-2 text-left font-medium ${cls}`}>
                {ex.pairs[ri][1]}
              </button>
            );
          })}
        </div>
      </div>
      {reveal && !ex.pairs.every((_, i) => pairs[i] === i) && (
        <div className="mt-3 text-sm">
          <span className="font-semibold text-success">Correct pairs: </span>
          {ex.pairs.map((p) => `${p[0]} – ${p[1]}`).join(' · ')}
        </div>
      )}
      {!reveal && <p className="mt-2 text-xs text-muted">Tap an item on the left, then its partner on the right. Tap a pair again to undo.</p>}
    </div>
  );
}

export function ExerciseInput({ ex, value, onChange, reveal, onSubmit }: { ex: Exercise; value: ExValue; onChange: (v: ExValue) => void; reveal: boolean; onSubmit?: () => void }) {
  switch (ex.type) {
    case 'mc':
      return <McInput ex={ex} value={value as number | undefined} onChange={onChange} reveal={reveal} />;
    case 'fill':
      return <FillInput ex={ex} value={(value as string) ?? ''} onChange={onChange} reveal={reveal} onSubmit={onSubmit} />;
    case 'translate':
      return <TranslateInput ex={ex} value={(value as string) ?? ''} onChange={onChange} reveal={reveal} onSubmit={onSubmit} />;
    case 'order':
      return <OrderInput ex={ex} value={(value as number[]) ?? []} onChange={onChange} reveal={reveal} />;
    case 'match':
      return <MatchInput ex={ex} value={(value as Record<number, number>) ?? {}} onChange={onChange} reveal={reveal} />;
  }
}

export const typeLabel: Record<Exercise['type'], string> = {
  mc: 'Choose',
  fill: 'Fill in',
  translate: 'Translate',
  order: 'Word order',
  match: 'Match',
};
