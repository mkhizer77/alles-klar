import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { searchConcepts, glossary, topics, levels } from '../content';
import type { Level } from '../content/types';
import { Chip, PageHeader, LevelPill, Card } from '../components/ui';
import { SearchIcon, ChevronRight } from '../components/icons';

export default function Concepts() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') ?? '';
  const [level, setLevel] = useState<Level | undefined>(undefined);
  const hits = useMemo(() => searchConcepts(q, level), [q, level]);
  const sortedGlossary = useMemo(() => [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'de')), []);

  return (
    <div>
      <PageHeader title="Concepts" subtitle="Search any grammar term or idea. Dativ, conjugation, Partizip II, word order …" />
      <div className="relative mb-3">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={20} />
        <input
          value={q}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
          placeholder="e.g. akkusativ, past tense, weil"
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          className="w-full pl-10 pr-3 py-3 rounded-2xl border border-line bg-surface outline-none focus:border-primary text-base"
        />
      </div>
      <div className="flex gap-2 mb-5">
        <Chip active={!level} onClick={() => setLevel(undefined)}>All levels</Chip>
        {levels.map((l) => (
          <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>
        ))}
      </div>

      {q ? (
        hits.length === 0 ? (
          <p className="text-muted">Nothing found for “{q}”. Try the German term or a simpler English word.</p>
        ) : (
          <div className="grid gap-2">
            {hits.map((h) =>
              h.kind === 'topic' && h.topic ? (
                <Link key={h.topic.id} to={`/topic/${h.topic.id}`} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-line hover:border-primary/50">
                  <LevelPill level={h.topic.level} />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold">{h.topic.title}</div>
                    <div className="text-xs text-muted">{h.topic.germanTerm}</div>
                    <div className="text-sm text-muted mt-0.5 line-clamp-2">{h.topic.summary}</div>
                  </div>
                  <ChevronRight className="text-muted shrink-0" size={18} />
                </Link>
              ) : h.term ? (
                <TermCard key={h.term.term} term={h.term} />
              ) : null,
            )}
          </div>
        )
      ) : (
        <div>
          <h2 className="font-bold text-lg mb-2">Glossary A–Z</h2>
          <p className="text-sm text-muted mb-3">Every grammar term used in the course, in one line each. Tap a topic to read the full explanation.</p>
          <div className="grid gap-2">
            {sortedGlossary.map((t) => (
              <TermCard key={t.term} term={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TermCard({ term }: { term: (typeof glossary)[number] }) {
  const linked = term.topicIds.map((id) => topics[id]).filter(Boolean);
  return (
    <Card className="p-3">
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className="font-bold">{term.term}</span>
        <span className="text-sm text-muted">{term.english}</span>
      </div>
      <p className="text-sm mt-1 leading-relaxed">{term.definition}</p>
      {linked.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {linked.map((t) => (
            <Link key={t.id} to={`/topic/${t.id}`} className="text-xs font-semibold px-2 py-1 rounded-md bg-info-soft text-primary hover:brightness-95">
              {t.level} · {t.title}
            </Link>
          ))}
        </div>
      )}
    </Card>
  );
}
