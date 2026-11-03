import { useEffect } from 'react';
import type { Word } from '../content/types';
import { speak, canSpeak } from '../lib/tts';
import { SpeakerIcon } from '../components/icons';

export function posLabel(w: Word) {
  return { noun: 'noun', verb: 'verb', adj: 'adjective', adv: 'adverb', prep: 'preposition', conj: 'conjunction', pron: 'pronoun', num: 'number', phrase: 'phrase', other: '' }[w.pos];
}

export const headword = (w: Word) => (w.article ? `${w.article} ${w.de}` : w.de);

/** The German side: article, word, kind of word and a listen button. */
export function WordFront({ w, autoSpeak = false, size = 'lg' }: { w: Word; autoSpeak?: boolean; size?: 'lg' | 'md' }) {
  const text = headword(w);
  useEffect(() => {
    if (!autoSpeak) return;
    const t = setTimeout(() => speak(text), 200);
    return () => clearTimeout(t);
  }, [text, autoSpeak]);
  return (
    <div className="text-center">
      <div className={`font-bold tracking-tight ${size === 'lg' ? 'text-3xl' : 'text-2xl'}`}>
        {w.article && <span className="text-muted font-medium">{w.article} </span>}
        {w.de}
      </div>
      <div className="text-sm text-muted mt-1 flex items-center justify-center gap-2">
        <span>{posLabel(w)}</span>
        {canSpeak() && (
          <button type="button" onClick={() => speak(text)} className="inline-flex items-center gap-1 text-primary font-medium" aria-label={`Listen to ${text}`}>
            <SpeakerIcon size={18} /> Listen
          </button>
        )}
      </div>
    </div>
  );
}

/** Everything the learner needs about the word: meaning, plural, verb forms and the example sentence. */
export function WordDetails({ w, className = '' }: { w: Word; className?: string }) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-2xl font-semibold text-primary-strong dark:text-primary">{w.en}</div>
      {(w.plural || w.forms) && (
        <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm text-muted">
          {w.plural && (
            <span>
              <span className="text-xs uppercase tracking-wide">Plural</span> {w.plural}
            </span>
          )}
          {w.forms && (
            <>
              <span>
                <span className="text-xs uppercase tracking-wide">er/sie</span> {w.forms.er}
              </span>
              <span>
                <span className="text-xs uppercase tracking-wide">Präteritum</span> {w.forms.prat}
              </span>
              <span>
                <span className="text-xs uppercase tracking-wide">Perfekt</span> {w.forms.perfekt}
              </span>
            </>
          )}
        </div>
      )}
      {w.example.de && (
        <div className="mt-4 p-3 rounded-xl bg-surface-2 text-left">
          <div className="flex items-start gap-2">
            {canSpeak() && (
              <button type="button" onClick={() => speak(w.example.de)} className="text-primary mt-0.5 shrink-0" aria-label="Listen to the example">
                <SpeakerIcon size={16} />
              </button>
            )}
            <div className="min-w-0">
              <div className="font-medium">{w.example.de}</div>
              <div className="text-sm text-muted">{w.example.en}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
