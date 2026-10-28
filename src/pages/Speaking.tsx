import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { speakings, levelOf, topics } from '../content';
import { store, useStoreValue } from '../lib/store';
import { keys, EMPTY_SPEAKING, type SpeakingProgress } from '../lib/models';
import { todayStr } from '../lib/date';
import { recordActivity } from '../lib/progress';
import { speak, stopSpeaking, canSpeak } from '../lib/tts';
import { canRecognize, createRecognizer, errorMessage, type Recognizer } from '../lib/stt';
import { getAiConfig, setAiConfig, AI_MODELS } from '../lib/ai-config';
import { createPartner, PartnerError, type ConversationPartner } from '../lib/partner';
import type { Correction, PartnerFeedback, Turn } from '../lib/partner-prompt';
import { Badge, Button, Card, LevelPill } from '../components/ui';
import { ChevronLeft, SpeakerIcon, CheckIcon, AlertIcon } from '../components/icons';

type Stage = 'intro' | 'chat' | 'report';

function CorrectionBox({ c, compact }: { c: Correction; compact?: boolean }) {
  return (
    <div className={`rounded-lg border border-accent/40 bg-accent-soft/40 px-3 py-2 text-sm ${compact ? 'mt-1' : ''}`}>
      <div className="flex flex-wrap items-baseline gap-x-2">
        <span className="line-through text-muted">{c.original}</span>
        <span className="font-semibold">{c.better}</span>
      </div>
      {c.why && <div className="text-xs text-muted mt-0.5">{c.why}</div>}
    </div>
  );
}

function MicIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
    </svg>
  );
}

export default function Speaking() {
  const { id = '' } = useParams();
  const scenario = speakings[id];
  const key = keys.speaking(id);
  const progress = useStoreValue<SpeakingProgress>(key, EMPTY_SPEAKING);
  const ai = getAiConfig();

  const [stage, setStage] = useState<Stage>(progress.transcript.length > 1 ? 'chat' : 'intro');
  const [turns, setTurns] = useState<Turn[]>(progress.transcript);
  const [input, setInput] = useState('');
  const [interim, setInterim] = useState('');
  const [listening, setListening] = useState(false);
  const [busy, setBusy] = useState<'reply' | 'feedback' | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showEn, setShowEn] = useState<Record<number, boolean>>({});
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<PartnerFeedback | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(ai.autoSpeak);
  const [saved, setSaved] = useState(false);

  const recognizer = useRef<Recognizer | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<ConversationPartner | null>(null);

  const unit = scenario ? levelOf(scenario.level).units.find((u) => u.unit === scenario.unit) : undefined;
  const ctx = useMemo(
    () => (scenario ? { scenario, unitTitle: unit?.title ?? '', grammarTerms: scenario.grammarFocus.map((g) => topics[g]?.germanTerm).filter((t): t is string => !!t) } : null),
    [scenario, unit],
  );
  const partner = () => (partnerRef.current ??= ctx ? createPartner(ctx) : null);

  const lastPartner = [...turns].reverse().find((t) => t.role === 'partner');
  const goalsDone = lastPartner?.detail?.goalsDone ?? [];
  const learnerTurns = turns.filter((t) => t.role === 'learner').length;
  const canEnd = !!scenario && (learnerTurns >= scenario.minTurns || !!lastPartner?.detail?.closing);

  // keep the running transcript so a reload or a tab discard does not lose it
  useEffect(() => {
    if (!scenario || stage !== 'chat') return;
    const p = store.get<SpeakingProgress>(key, EMPTY_SPEAKING);
    if (p.transcript !== turns) store.set(key, { ...p, transcript: turns });
  }, [turns, stage, key, scenario]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }, [turns.length, busy, showHint]);

  useEffect(() => () => {
    recognizer.current?.abort();
    stopSpeaking();
  }, []);

  const say = useCallback((text: string) => {
    if (canSpeak()) speak(text);
  }, []);

  const startListening = () => {
    if (listening) {
      recognizer.current?.stop();
      return;
    }
    stopSpeaking();
    setError(null);
    recognizer.current = createRecognizer({
      onInterim: (t) => setInterim(t),
      onFinal: (t) => {
        setInterim('');
        setInput((cur) => (cur.trim() ? cur.trimEnd() + ' ' + t : t));
      },
      onEnd: () => {
        setListening(false);
        setInterim('');
        inputRef.current?.focus();
      },
      onError: (code) => {
        setListening(false);
        setInterim('');
        setError(errorMessage(code));
      },
    });
    if (!recognizer.current) return setError('Speech recognition is not available in this browser. Type your answer instead.');
    setListening(true);
    recognizer.current.start();
  };

  const begin = () => {
    if (!scenario) return;
    const first: Turn[] = [{ role: 'partner', text: scenario.opener }];
    setTurns(first);
    setFeedback(null);
    setSaved(false);
    setStage('chat');
    if (autoSpeak) say(scenario.opener);
  };

  const send = async () => {
    const text = (input.trim() + (interim ? ' ' + interim : '')).trim();
    if (!text || busy || !scenario) return;
    const p = partner();
    if (!p) return setError('Add your API key in Settings first.');
    recognizer.current?.abort();
    stopSpeaking();
    setInput('');
    setInterim('');
    setShowHint(false);
    setError(null);
    const next: Turn[] = [...turns, { role: 'learner', text }];
    setTurns(next);
    setBusy('reply');
    try {
      const { reply, ...detail } = await p.respond(next);
      setTurns([...next, { role: 'partner', text: reply, detail }]);
      if (autoSpeak) say(reply);
    } catch (e) {
      setError(e instanceof PartnerError ? e.message : 'Something went wrong. Please try again.');
      setTurns(turns); // undo so the learner can resend
      setInput(text);
    } finally {
      setBusy(null);
    }
  };

  const end = async () => {
    const p = partner();
    if (!p || busy || !scenario) return;
    recognizer.current?.abort();
    stopSpeaking();
    setBusy('feedback');
    setError(null);
    try {
      const fb = await p.feedback(turns);
      setFeedback(fb);
      setStage('report');
      window.scrollTo({ top: 0 });
    } catch (e) {
      setError(e instanceof PartnerError ? e.message : 'Could not get feedback. Please try again.');
    } finally {
      setBusy(null);
    }
  };

  const saveResult = () => {
    if (!scenario || !feedback) return;
    const score = Math.round((feedback.goalsDone.length / scenario.goals.length) * 100);
    const p = store.get<SpeakingProgress>(key, EMPTY_SPEAKING);
    store.set(key, { ...p, transcript: [], feedback, attempts: p.attempts + 1, lastScore: score, bestScore: Math.max(p.bestScore, score), lastAt: todayStr() });
    recordActivity('exercises', 1);
    setSaved(true);
  };

  const restart = () => {
    store.set(key, { ...store.get<SpeakingProgress>(key, EMPTY_SPEAKING), transcript: [] });
    setTurns([]);
    setFeedback(null);
    setStage('intro');
    window.scrollTo({ top: 0 });
  };

  const insert = (phrase: string) => {
    const clean = phrase.replace(/…/g, '').trim();
    setInput((cur) => (cur.trim() ? cur.trimEnd() + ' ' + clean : clean));
    inputRef.current?.focus();
  };

  if (!scenario) return <Navigate to="/learn" replace />;
  const hasKey = !!ai.apiKey.trim();
  const modelLabel = AI_MODELS.find((m) => m.id === ai.model)?.label ?? ai.model;

  return (
    <article className="pb-16">
      <Link to={`/learn/${scenario.level}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-text mb-3">
        <ChevronLeft size={16} /> {scenario.level} · Unit {scenario.unit}: {unit?.title}
      </Link>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <LevelPill level={scenario.level} />
        <Badge tone="info">Speaking</Badge>
        <Badge>{scenario.register === 'Sie' ? 'formal · Sie' : 'informal · du'}</Badge>
        {progress.attempts > 0 && <Badge tone={progress.bestScore >= 80 ? 'success' : 'accent'}>Best {progress.bestScore}%</Badge>}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{scenario.title}</h1>

      {stage === 'intro' && (
        <>
          <Card className="mt-4">
            <p className="leading-relaxed">{scenario.situation}</p>
            <p className="mt-2 text-sm">
              You talk to <span className="font-semibold">{scenario.partner.name}</span>, {scenario.partner.role}.
            </p>
            <p className="mt-3 text-sm font-semibold">In this conversation, you should:</p>
            <ol className="mt-1 grid gap-1 list-decimal list-inside text-sm">
              {scenario.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ol>
            <p className="mt-2 text-xs text-muted">
              Grammar to use:{' '}
              {scenario.grammarFocus.map((g, i) => (
                <span key={g}>
                  {i > 0 && ', '}
                  <Link to={`/topic/${g}`} className="text-primary">{topics[g]?.germanTerm ?? g}</Link>
                </span>
              ))}
              {' · '}words to try: {scenario.vocabFocus.join(', ')}
            </p>
          </Card>

          <section className="mt-5">
            <h2 className="font-bold mb-2">Useful phrases <span className="text-muted font-normal text-sm">(tap to hear)</span></h2>
            <div className="flex flex-wrap gap-1.5">
              {scenario.usefulPhrases.map((p) => (
                <button key={p.de} type="button" onClick={() => say(p.de)} className="px-2.5 py-1.5 rounded-lg bg-surface border border-line text-sm hover:border-primary/60 text-left">
                  <span className="font-medium">{p.de}</span> <span className="text-muted">· {p.en}</span>
                </button>
              ))}
            </div>
          </section>

          <Card className="mt-5">
            <h2 className="font-bold mb-1">How it works</h2>
            <p className="text-sm text-muted">
              {scenario.partner.name} speaks first. Tap the microphone, say your line in German, check the words, send. The partner answers out loud, keeps the conversation going and corrects at most one thing per turn. Stuck? Ask for a hint. After {scenario.minTurns} turns you can end the conversation and get feedback.
            </p>
            <ul className="mt-3 grid gap-1.5 text-sm">
              <li className="flex items-center gap-2">
                <span className={canRecognize() ? 'text-success' : 'text-muted'}>{canRecognize() ? <CheckIcon size={16} /> : <AlertIcon size={16} />}</span>
                {canRecognize() ? 'Speech recognition available in this browser.' : 'No speech recognition in this browser (try Safari or Chrome). You can type your lines instead.'}
              </li>
              <li className="flex items-center gap-2">
                <span className={hasKey ? 'text-success' : 'text-danger'}>{hasKey ? <CheckIcon size={16} /> : <AlertIcon size={16} />}</span>
                {hasKey ? (
                  <span>
                    Partner: {modelLabel}. <Link to="/settings" className="text-primary font-semibold">Change</Link>
                  </span>
                ) : (
                  <span>
                    The partner needs your API key. <Link to="/settings" className="text-primary font-semibold">Add it in Settings</Link>
                  </span>
                )}
              </li>
            </ul>
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input type="checkbox" checked={autoSpeak} onChange={(e) => { setAutoSpeak(e.target.checked); setAiConfig({ autoSpeak: e.target.checked }); }} className="w-5 h-5 accent-primary" />
              Read the partner's replies aloud
            </label>
            <Button size="lg" full className="mt-4" disabled={!hasKey} onClick={begin}>
              Start the conversation
            </Button>
          </Card>
        </>
      )}

      {stage === 'chat' && (
        <>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {scenario.goals.map((g, i) => {
              const done = goalsDone.includes(i + 1);
              return (
                <span key={g} className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs border ${done ? 'bg-success-soft border-success/40 text-success' : 'bg-surface border-line text-muted'}`}>
                  {done ? <CheckIcon size={12} /> : <span className="font-semibold">{i + 1}</span>} {g}
                </span>
              );
            })}
          </div>

          <div className="mt-4 grid gap-3">
            {turns.map((t, i) =>
              t.role === 'partner' ? (
                <div key={i} className="max-w-[88%]">
                  <div className="text-xs text-muted mb-0.5">{scenario.partner.name}</div>
                  <div className="rounded-2xl rounded-tl-sm bg-surface border border-line px-3.5 py-2.5 leading-relaxed text-[1.05rem]">{t.text}</div>
                  <div className="flex gap-3 mt-1 text-xs">
                    {canSpeak() && (
                      <button type="button" onClick={() => say(t.text)} className="inline-flex items-center gap-1 text-primary font-semibold">
                        <SpeakerIcon size={14} /> Replay
                      </button>
                    )}
                    {t.detail?.replyEn && (
                      <button type="button" onClick={() => setShowEn((s) => ({ ...s, [i]: !s[i] }))} className="text-primary font-semibold">
                        {showEn[i] ? 'Hide English' : 'English'}
                      </button>
                    )}
                  </div>
                  {showEn[i] && t.detail?.replyEn && <div className="mt-1 text-sm text-muted">{t.detail.replyEn}</div>}
                </div>
              ) : (
                <div key={i} className="max-w-[88%] justify-self-end">
                  <div className="rounded-2xl rounded-tr-sm bg-primary text-on-primary px-3.5 py-2.5 leading-relaxed text-[1.05rem]">{t.text}</div>
                  {turns[i + 1]?.detail?.correction && <CorrectionBox c={turns[i + 1].detail!.correction!} compact />}
                </div>
              ),
            )}
            {busy === 'reply' && (
              <div className="max-w-[88%]">
                <div className="text-xs text-muted mb-0.5">{scenario.partner.name}</div>
                <div className="rounded-2xl rounded-tl-sm bg-surface border border-line px-3.5 py-2.5 text-muted animate-pulse">…</div>
              </div>
            )}
            {showHint && lastPartner?.detail?.hint.de && (
              <button type="button" onClick={() => { insert(lastPartner.detail!.hint.de); setShowHint(false); }} className="text-left rounded-xl border border-dashed border-primary/50 bg-info-soft/50 px-3 py-2 text-sm">
                <span className="text-xs uppercase tracking-wide text-muted">You could say · tap to use</span>
                <div className="font-medium">{lastPartner.detail.hint.de}</div>
                <div className="text-muted text-xs">{lastPartner.detail.hint.en}</div>
              </button>
            )}
            <div ref={endRef} />
          </div>

          {error && (
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-danger-soft/60 border border-danger/30 px-3 py-2 text-sm">
              <AlertIcon size={16} /> <span>{error}</span>
            </div>
          )}

          <div className="sticky bottom-16 md:bottom-4 mt-4 rounded-2xl bg-surface border border-line shadow-lg p-2.5">
            <textarea
              ref={inputRef}
              value={interim ? `${input ? input.trimEnd() + ' ' : ''}${interim}` : input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  void send();
                }
              }}
              rows={2}
              autoCapitalize="sentences"
              autoCorrect="off"
              spellCheck={false}
              placeholder={listening ? 'Listening … speak German' : canRecognize() ? 'Tap the mic and speak, or type' : 'Type your answer in German'}
              className={`w-full px-3 py-2 rounded-xl border-2 bg-surface outline-none text-[1.02rem] leading-relaxed ${listening ? 'border-danger' : 'border-line focus:border-primary'}`}
              disabled={!!busy}
            />
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={startListening}
                disabled={!!busy || !canRecognize()}
                aria-label={listening ? 'Stop listening' : 'Speak'}
                className={`w-12 h-12 rounded-full grid place-items-center shrink-0 transition ${listening ? 'bg-danger text-white animate-pulse' : 'bg-primary text-on-primary'} disabled:opacity-40`}
              >
                <MicIcon />
              </button>
              <Button variant="secondary" size="sm" onClick={() => setShowHint((h) => !h)} disabled={!!busy || !lastPartner?.detail?.hint.de}>
                Hint
              </Button>
              <div className="flex-1" />
              <Button variant="ghost" size="sm" onClick={end} disabled={!!busy || !canEnd} title={canEnd ? 'Finish and get feedback' : `Available after ${scenario.minTurns} turns`}>
                {busy === 'feedback' ? 'Getting feedback …' : 'End'}
              </Button>
              <Button size="sm" onClick={send} disabled={!!busy || !(input.trim() || interim)}>
                Send
              </Button>
            </div>
            <div className="flex gap-1.5 mt-2 overflow-x-auto pb-0.5 -mx-1 px-1">
              {scenario.usefulPhrases.map((p) => (
                <button key={p.de} type="button" onClick={() => insert(p.de)} title={p.en} className="shrink-0 px-2 py-1 rounded-md bg-surface-2 text-xs whitespace-nowrap">
                  {p.de}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {stage === 'report' && feedback && (
        <>
          <Card className="mt-4 bg-success-soft/40">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Feedback</h2>
              <span className="text-sm font-semibold">
                {feedback.goalsDone.length} of {scenario.goals.length} goals
              </span>
            </div>
            <p className="mt-2 leading-relaxed">{feedback.summary}</p>
            <ul className="mt-3 grid gap-1">
              {scenario.goals.map((g, i) => {
                const done = feedback.goalsDone.includes(i + 1);
                return (
                  <li key={g} className={`flex items-start gap-2 text-sm ${done ? '' : 'text-muted'}`}>
                    <span className={`mt-0.5 ${done ? 'text-success' : 'text-muted'}`}>{done ? <CheckIcon size={16} /> : <span className="inline-block w-4 text-center">·</span>}</span>
                    {g}
                  </li>
                );
              })}
            </ul>
          </Card>
          {feedback.strengths.length > 0 && (
            <Card className="mt-3">
              <h3 className="font-bold mb-1">What went well</h3>
              <ul className="grid gap-1 text-sm list-disc list-inside">
                {feedback.strengths.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          )}
          {feedback.improve.length > 0 && (
            <Card className="mt-3">
              <h3 className="font-bold mb-2">To work on</h3>
              <div className="grid gap-2">
                {feedback.improve.map((c, i) => (
                  <CorrectionBox key={i} c={c} />
                ))}
              </div>
            </Card>
          )}
          <Card className="mt-3">
            <h3 className="font-bold mb-2">Transcript</h3>
            <div className="grid gap-1.5 text-sm">
              {turns.map((t, i) => (
                <div key={i} className={t.role === 'learner' ? 'pl-4 border-l-2 border-primary' : 'text-muted'}>
                  <span className="text-xs uppercase tracking-wide mr-1">{t.role === 'learner' ? 'You' : scenario.partner.name}</span> {t.text}
                </div>
              ))}
            </div>
          </Card>
          <div className="mt-4 flex gap-2 flex-wrap">
            {saved ? <Badge tone="success">Saved</Badge> : <Button onClick={saveResult}>Save result</Button>}
            <Button variant="secondary" onClick={restart}>Talk again</Button>
            <Link to={`/learn/${scenario.level}`} className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-primary">Back to unit</Link>
          </div>
        </>
      )}
    </article>
  );
}
