import { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { topics, unitOfTopic, orderedTopicIds } from '../content';
import { Md, MdInline } from '../lib/markdown';
import { store, useStoreVersion } from '../lib/store';
import { keys, EMPTY_TOPIC, type TopicProgress } from '../lib/models';
import { todayStr } from '../lib/date';
import { speak, canSpeak } from '../lib/tts';
import { Badge, Card, LinkButton, LevelPill } from '../components/ui';
import { SpeakerIcon, LinkIcon, AlertIcon, ChevronLeft, ChevronRight } from '../components/icons';
import { topicProgress } from '../lib/progress';

export default function TopicPage() {
  useStoreVersion();
  const { id = '' } = useParams();
  const topic = topics[id];
  const practiceRef = useRef<HTMLDivElement>(null);
  const [practiceVisible, setPracticeVisible] = useState(false);

  useEffect(() => {
    if (!topic) return;
    const p = store.get<TopicProgress>(keys.topic(topic.id), EMPTY_TOPIC);
    if (!p.readAt) store.set(keys.topic(topic.id), { ...p, readAt: todayStr() });
  }, [topic]);

  // the floating Practice button steps aside while the Practice card itself is on screen
  useEffect(() => {
    const el = practiceRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setPracticeVisible(entry.isIntersecting), { rootMargin: '0px 0px -56px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [topic]);

  if (!topic) return <Navigate to="/learn" replace />;
  const where = unitOfTopic(topic.id);
  const p = topicProgress(topic.id);
  const idx = orderedTopicIds.indexOf(topic.id);
  const prevId = orderedTopicIds.slice(0, idx).reverse().find((i) => topics[i]);
  const nextId = orderedTopicIds.slice(idx + 1).find((i) => topics[i]);

  return (
    <article className="pb-20">
      <Link to={`/learn/${topic.level}`} className="inline-flex items-center gap-1 text-sm text-muted hover:text-text mb-3">
        <ChevronLeft size={16} /> {topic.level} · Unit {where?.unit.unit}: {where?.unit.title}
      </Link>
      <header className="mb-5">
        <div className="flex items-center gap-2 mb-2">
          <LevelPill level={topic.level} />
          {p.attempts > 0 && <Badge tone={p.bestScore >= 80 ? 'success' : 'accent'}>Best {p.bestScore}%</Badge>}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{topic.title}</h1>
        <p className="text-muted mt-1">
          German: <span className="font-semibold text-text">{topic.germanTerm}</span>
        </p>
        <p className="mt-3 text-base leading-relaxed bg-info-soft rounded-xl p-3">{topic.summary}</p>
      </header>

      <Md source={topic.explanation} />

      <section className="mt-8">
        <h2 className="font-bold text-lg mb-2">Examples</h2>
        <div className="grid gap-2">
          {topic.examples.map((ex, i) => (
            <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-surface border border-line">
              {canSpeak() && (
                <button type="button" onClick={() => speak(ex.de)} className="shrink-0 mt-0.5 text-primary hover:text-primary-strong" aria-label="Listen">
                  <SpeakerIcon />
                </button>
              )}
              <div>
                <div className="font-semibold">{ex.de}</div>
                <div className="text-sm text-muted">{ex.en}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {topic.connections.length > 0 && (
        <section className="mt-8">
          <h2 className="font-bold text-lg mb-2 flex items-center gap-2"><LinkIcon /> How it connects</h2>
          <div className="grid gap-2">
            {topic.connections.map((c) => {
              const t = topics[c.topicId];
              const inner = (
                <>
                  <div className="font-semibold text-primary">{t?.title ?? c.topicId}{!t && <span className="text-muted font-normal"> (coming soon)</span>}</div>
                  <div className="text-sm text-muted">{c.note}</div>
                </>
              );
              return t ? (
                <Link key={c.topicId} to={`/topic/${c.topicId}`} className="p-3 rounded-xl bg-surface border border-line hover:border-primary/50">{inner}</Link>
              ) : (
                <div key={c.topicId} className="p-3 rounded-xl bg-surface border border-line opacity-70">{inner}</div>
              );
            })}
          </div>
        </section>
      )}

      {topic.edgeCases.length > 0 && (
        <section className="mt-8">
          <h2 className="font-bold text-lg mb-2 flex items-center gap-2 text-accent"><AlertIcon /> Watch out</h2>
          <ul className="grid gap-2">
            {topic.edgeCases.map((e, i) => (
              <li key={i} className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-sm leading-relaxed">
                <MdInline source={e} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <div ref={practiceRef}>
      <Card className="mt-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="font-bold">Practice</div>
            <div className="text-sm text-muted">{topic.exercises.length} exercises · {p.attempts > 0 ? `last ${p.lastScore}%, best ${p.bestScore}%` : 'not attempted yet'}</div>
          </div>
          <LinkButton to={`/practice/${topic.id}`} size="lg">Start</LinkButton>
        </div>
      </Card>
      </div>

      <div className="mt-6 flex justify-between text-sm">
        {prevId ? <Link to={`/topic/${prevId}`} className="inline-flex items-center gap-1 text-muted hover:text-text"><ChevronLeft size={16} /> {topics[prevId].title}</Link> : <span />}
        {nextId && <Link to={`/topic/${nextId}`} className="inline-flex items-center gap-1 text-muted hover:text-text text-right">{topics[nextId].title} <ChevronRight size={16} /></Link>}
      </div>

      {/* sticky practice button on mobile */}
      <div className={`md:hidden fixed bottom-16 inset-x-0 px-4 pb-2 pointer-events-none transition-opacity ${practiceVisible ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-3xl mx-auto flex justify-end">
          <LinkButton to={`/practice/${topic.id}`} className="pointer-events-auto shadow-lg">Practice →</LinkButton>
        </div>
      </div>
    </article>
  );
}
