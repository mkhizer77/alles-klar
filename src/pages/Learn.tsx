import { Link, useNavigate, useParams } from 'react-router';
import { curriculum, topics, readingForUnit, writingForUnit, speakingForUnit } from '../content';
import { listeningAvailable } from '../lib/listening';
import { store } from '../lib/store';
import { keys, EMPTY_TOPIC, type TopicProgress } from '../lib/models';
import type { Level } from '../content/types';
import { useStoreVersion } from '../lib/store';
import { levelStats, topicProgress } from '../lib/progress';
import { Badge, Card, Chip, PageHeader, ProgressBar } from '../components/ui';

function SkillBadge({ p }: { p: TopicProgress }) {
  if (p.attempts === 0) return null;
  return <Badge tone={p.bestScore >= 80 ? 'success' : 'accent'}>{p.bestScore}%</Badge>;
}
import { ChevronRight, CheckIcon } from '../components/icons';

export default function Learn() {
  useStoreVersion();
  const params = useParams();
  const navigate = useNavigate();
  const level = ((params.level?.toUpperCase() as Level) || 'A1') as Level;
  const lvl = curriculum.find((l) => l.level === level) || curriculum[0];
  const st = levelStats(lvl.level);

  return (
    <div>
      <PageHeader title="Learn" subtitle="One concept at a time: read it, see how it connects, then practise." />
      <div className="flex gap-2 mb-4">
        {curriculum.map((l) => (
          <Chip key={l.level} active={l.level === lvl.level} onClick={() => navigate(`/learn/${l.level}`)}>
            {l.level}<span className="hidden sm:inline"> · {l.name}</span>
          </Chip>
        ))}
      </div>
      <Card className="mb-4">
        <p className="text-sm text-muted">{lvl.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="font-semibold">
            {st.mastered} of {st.total} topics mastered
          </span>
          <span className="text-muted">{st.practiced} practised</span>
        </div>
        <ProgressBar value={st.mastered} max={st.total} className="mt-2" />
        <Link to={`/tests/${lvl.level}`} className="mt-3 inline-block text-sm font-semibold text-primary">
          Take the {lvl.level} level test →
        </Link>
      </Card>

      <div className="grid gap-4">
        {lvl.units.map((u) => (
          <section key={u.unit}>
            <h2 className="font-bold text-lg leading-snug">
              <span className="text-muted text-sm font-semibold mr-2">Unit {u.unit}</span>
              {u.title} <span className="text-muted font-normal text-sm">· {u.subtitle}</span>
            </h2>
            <p className="text-xs text-muted mb-2">Vocabulary: {u.vocabTheme}</p>
            <div className="grid gap-1.5">
              {u.topics.map((t) => {
                const has = !!topics[t.id];
                const p = topicProgress(t.id);
                const status = !has ? (
                  <Badge>Coming soon</Badge>
                ) : p.attempts === 0 ? (
                  p.readAt ? <Badge tone="info">Read</Badge> : null
                ) : p.bestScore >= 80 ? (
                  <Badge tone="success">
                    <span className="inline-flex items-center gap-1"><CheckIcon size={12} /> {p.bestScore}%</span>
                  </Badge>
                ) : (
                  <Badge tone="accent">{p.bestScore}%</Badge>
                );
                const inner = (
                  <>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{t.title}</div>
                      <div className="text-xs text-muted truncate">{t.germanTerm}</div>
                    </div>
                    {status}
                    <ChevronRight className={has ? 'text-muted' : 'text-line'} size={18} />
                  </>
                );
                return has ? (
                  <Link key={t.id} to={`/topic/${t.id}`} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface border border-line hover:border-primary/50">
                    {inner}
                  </Link>
                ) : (
                  <div key={t.id} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface/60 border border-line opacity-70">
                    {inner}
                  </div>
                );
              })}
              {(() => {
                const r = readingForUnit(lvl.level, u.unit);
                const canListen = listeningAvailable(lvl.level, u.unit) > 0;
                return (
                  <div className="grid sm:grid-cols-2 gap-1.5 mt-1">
                    {r ? (
                      <Link to={`/reading/${r.id}`} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-info-soft/60 border border-line hover:border-primary/50">
                        <span className="text-lg">📖</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">Reading: {r.title}</div>
                          <div className="text-xs text-muted">{r.questions.length} questions</div>
                        </div>
                        <SkillBadge p={store.get(keys.reading(r.id), EMPTY_TOPIC)} />
                        <ChevronRight className="text-muted" size={18} />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface/60 border border-line opacity-70">
                        <span className="text-lg">📖</span>
                        <div className="flex-1 text-sm">Reading text</div>
                        <Badge>Coming soon</Badge>
                      </div>
                    )}
                    {(() => {
                      const w = writingForUnit(lvl.level, u.unit);
                      return w ? (
                        <Link to={`/writing/${w.id}`} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-info-soft/60 border border-line hover:border-primary/50">
                          <span className="text-lg">✍️</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">Writing: {w.title}</div>
                            <div className="text-xs text-muted">{w.minWords}–{w.maxWords} words</div>
                          </div>
                          <SkillBadge p={store.get(keys.writing(w.id), EMPTY_TOPIC)} />
                          <ChevronRight className="text-muted" size={18} />
                        </Link>
                      ) : null;
                    })()}
                    {(() => {
                      const sp = speakingForUnit(lvl.level, u.unit);
                      return sp ? (
                        <Link to={`/speaking/${sp.id}`} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-info-soft/60 border border-line hover:border-primary/50">
                          <span className="text-lg">🗣️</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">Speaking: {sp.title}</div>
                            <div className="text-xs text-muted">with {sp.partner.name} · {sp.goals.length} goals</div>
                          </div>
                          <SkillBadge p={store.get(keys.speaking(sp.id), EMPTY_TOPIC)} />
                          <ChevronRight className="text-muted" size={18} />
                        </Link>
                      ) : null;
                    })()}
                    {canListen && (
                      <Link to={`/listen/${lvl.level}/${u.unit}`} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-info-soft/60 border border-line hover:border-primary/50">
                        <span className="text-lg">🎧</span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">Listening: type what you hear</div>
                          <div className="text-xs text-muted">10 sentences from this unit</div>
                        </div>
                        <SkillBadge p={store.get(keys.listening(lvl.level, u.unit), EMPTY_TOPIC)} />
                        <ChevronRight className="text-muted" size={18} />
                      </Link>
                    )}
                  </div>
                );
              })()}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
