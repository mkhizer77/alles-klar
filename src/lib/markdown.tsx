import { marked } from 'marked';
import { useMemo } from 'react';

marked.setOptions({ gfm: true, breaks: false });

export function Md({ source, className = '' }: { source: string; className?: string }) {
  const html = useMemo(() => marked.parse(source) as string, [source]);
  return <div className={`prose-ak ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MdInline({ source, className = '' }: { source: string; className?: string }) {
  const html = useMemo(() => marked.parseInline(source) as string, [source]);
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
