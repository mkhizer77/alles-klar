import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
const variants: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary hover:bg-primary-strong shadow-sm',
  secondary: 'bg-surface-2 text-text hover:brightness-95 dark:hover:brightness-110',
  ghost: 'bg-transparent text-primary hover:bg-surface-2',
  danger: 'bg-danger text-white hover:brightness-95',
  success: 'bg-success text-white hover:brightness-95',
};

export function Button({
  variant = 'primary',
  size = 'md',
  full,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: 'sm' | 'md' | 'lg'; full?: boolean }) {
  const sz = size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-5 py-3.5 text-base' : 'px-4 py-2.5 text-sm';
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sz} ${full ? 'w-full' : ''} ${className}`}
    />
  );
}

export function LinkButton({
  to,
  variant = 'primary',
  size = 'md',
  full,
  className = '',
  children,
}: {
  to: string;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  full?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const sz = size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-5 py-3.5 text-base' : 'px-4 py-2.5 text-sm';
  return (
    <Link to={to} className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition active:scale-[0.98] ${variants[variant]} ${sz} ${full ? 'w-full' : ''} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({ children, className = '', as: Tag = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'section' }) {
  return <Tag className={`bg-surface border border-line rounded-2xl p-4 ${className}`}>{children}</Tag>;
}

export function ProgressBar({ value, max = 100, color = 'bg-primary', className = '' }: { value: number; max?: number; color?: string; className?: string }) {
  const pct = max ? Math.min(100, Math.round((value / max) * 100)) : 0;
  return (
    <div className={`h-2 rounded-full bg-surface-2 overflow-hidden ${className}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Chip({ children, active, onClick, className = '' }: { children: ReactNode; active?: boolean; onClick?: () => void; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition ${active ? 'bg-primary text-on-primary border-primary' : 'bg-surface border-line text-muted hover:text-text'} ${className}`}
    >
      {children}
    </button>
  );
}

export function Badge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'success' | 'danger' | 'info' | 'accent' }) {
  const cls = {
    neutral: 'bg-surface-2 text-muted',
    success: 'bg-success-soft text-success',
    danger: 'bg-danger-soft text-danger',
    info: 'bg-info-soft text-primary',
    accent: 'bg-accent/15 text-accent',
  }[tone];
  return <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold ${cls}`}>{children}</span>;
}

export function PageHeader({ title, subtitle, back, right }: { title: string; subtitle?: string; back?: string; right?: ReactNode }) {
  return (
    <header className="mb-5 flex items-start gap-3">
      {back && (
        <Link to={back} className="mt-1 -ml-1 p-1 rounded-lg text-muted hover:text-text hover:bg-surface-2" aria-label="Back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
        </Link>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted mt-0.5">{subtitle}</p>}
      </div>
      {right}
    </header>
  );
}

export function LevelPill({ level }: { level: string }) {
  const tone = level === 'A1' ? 'bg-success-soft text-success' : level === 'A2' ? 'bg-info-soft text-primary' : 'bg-accent/15 text-accent';
  return <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-bold ${tone}`}>{level}</span>;
}
