import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { readings, levelOf } from '../content';
import { ExerciseSession } from '../components/ExerciseSession';
import { keys } from '../lib/models';
import { speak, stopSpeaking, canSpeak } from '../lib/tts';
import { store, useStoreVersion } from '../lib/store';
import { EMPTY_TOPIC, type TopicProgress } from '../lib/models';
import { Badge, Card, LevelPill, Button } from '../components/ui';
import { SpeakerIcon, ChevronLeft } from '../components/icons';

export default function Reading() {
  useStoreVersion();
  const { id = '' } = useParams();
  const text = readings[id];
  const [mode, setMode] = useState<'read' | 'questions'>('read');
  const [speaking, setSpeaking] = useState(false);
  if (!text) return <Navigate to="/learn" replace />;
  const unit = levelOf(text.level).units.find((u) => u.unit === text.unit);
  const p = store.get<TopicProgress>(keys.reading(text.id), EMPTY_TOPIC);

  if (mode === 'questions') {
    return (
      <ExerciseSession
        title={`Reading: ${text.title}`}
        level={text.level}
        exercises={text.questions}
        progressKey={keys.reading(text.id)}
        exitTo={`/reading/${text.id}`}
        doneTo={`/learn/${text.level}`}
        doneLabel="Back to course"
        intro={<span>Answer from the text. You can scroll back to it any time by tapping the X and reopening the reading.</span>}
      />
    );
  }

  const readAll = () => {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }
    speak(text.paragraphs.join(' '));
    setSpeaking(true);
  };

  return (
    <article className="pb-16">
      <Link to={`/learn/${text.level}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-text mb-3">
        <ChevronLeft size={16} /> {text.level} · Unit {text.unit}: {unit?.title}
      </Link>
      <div className="flex items-center gap-2 mb-2">
        <LevelPill level={text.level} />
        <Badge tone="info">Reading</Badge>
        {p.attempts > 0 && <Badge tone={p.bestScore >= 80 ? 'success' : 'accent'}>Best {p.bestScore}%</Badge>}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{text.title}</h1>
      <p className="text-muted mt-1">{text.intro}</p>
      <div className="mt-3 p-3 rounded-xl bg-accent/10 border border-accent/30 text-sm">
        <span className="font-semibold text-accent">Strategy: </span>
        {text.tip}
      </div>

      <Card className="mt-5 text-[1.05rem] leading-relaxed">
        {canSpeak() && (
          <button type="button" onClick={readAll} className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <SpeakerIcon size={18} /> {speaking ? 'Stop' : 'Listen to the text'}
          </button>
        )}
        {text.paragraphs.map((para, i) => {
          // Dialogue turns are written as "Name: … – Name: …"; show one speaker per line.
          const lines = para.split(/\s–\s(?=[^\s:–]+:\s)/);
          return (
            <p key={i} className={i > 0 ? 'mt-3' : ''}>
              {lines.map((line, j) => (
                <span key={j} className={lines.length > 1 ? 'block' : ''}>
                  {line}
                </span>
              ))}
            </p>
          );
        })}
      </Card>

      <section className="mt-5">
        <h2 className="font-bold mb-2">Words to know</h2>
        <ul className="grid sm:grid-cols-2 gap-1.5">
          {text.glossary.map((g) => (
            <li key={g.de} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-line text-sm">
              {canSpeak() && (
                <button type="button" onClick={() => speak(g.de)} className="text-primary shrink-0" aria-label="Listen">
                  <SpeakerIcon size={16} />
                </button>
              )}
              <span className="font-semibold">{g.de}</span>
              <span className="text-muted">– {g.en}</span>
            </li>
          ))}
        </ul>
      </section>

      <Card className="mt-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-bold">Comprehension questions</div>
            <div className="text-sm text-muted">
              {text.questions.length} questions · {p.attempts > 0 ? `last ${p.lastScore}%, best ${p.bestScore}%` : 'not attempted yet'}
            </div>
          </div>
          <Button size="lg" onClick={() => { stopSpeaking(); setMode('questions'); }}>
            Start
          </Button>
        </div>
      </Card>
    </article>
  );
}
