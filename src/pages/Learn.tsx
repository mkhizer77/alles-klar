import { Link, useNavigate, useParams } from 'react-router';
import { curriculum, topics } from '../content';
import type { Level } from '../content/types';
import { useStoreVersion } from '../lib/store';
import { levelStats, topicProgress } from '../lib/progress';
import { Badge, Card, Chip, PageHeader, ProgressBar } from '../components/ui';
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
            {l.level} · {l.name}
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
            <h2 className="font-bold text-lg flex items-baseline gap-2">
              <span className="text-muted text-sm font-semibold">Unit {u.unit}</span> {u.title}
              <span className="text-muted font-normal text-sm">· {u.subtitle}</span>
            </h2>
            <p className="text-xs text-muted mb-2">Vocabulary: {u.vocabTheme}</p>
            <div className="grid gap-1.5">
              {u.topics.map((t) => {
                const has = !!topics[t.id];
                const p = topicProgress(t.id);
                const status = !has ? (
                  <Badge>Coming soon</Badge>
                ) : p.attempts === 0 ? (
                  p.readAt ? <Badge tone="info">Read</Badge> : <Badge>New</Badge>
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
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
