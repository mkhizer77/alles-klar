import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size: number, props: P) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export const HomeIcon = ({ size = 22, ...p }: P) => (
  <svg {...base(size, p)}><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v10h14V10" /></svg>
);
export const BookIcon = ({ size = 22, ...p }: P) => (
  <svg {...base(size, p)}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></svg>
);
export const CardsIcon = ({ size = 22, ...p }: P) => (
  <svg {...base(size, p)}><rect x="3" y="6" width="14" height="14" rx="2" /><path d="M7 6V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /></svg>
);
export const SearchIcon = ({ size = 22, ...p }: P) => (
  <svg {...base(size, p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
export const TestIcon = ({ size = 22, ...p }: P) => (
  <svg {...base(size, p)}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="m9 12 2 2 4-4" /></svg>
);
export const SettingsIcon = ({ size = 22, ...p }: P) => (
  <svg {...base(size, p)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></svg>
);
export const SpeakerIcon = ({ size = 20, ...p }: P) => (
  <svg {...base(size, p)}><path d="M11 5 6 9H3v6h3l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" /></svg>
);
export const CheckIcon = ({ size = 20, ...p }: P) => (
  <svg {...base(size, p)}><path d="m5 12 5 5 9-10" /></svg>
);
export const XIcon = ({ size = 20, ...p }: P) => (
  <svg {...base(size, p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const ChevronRight = ({ size = 20, ...p }: P) => (
  <svg {...base(size, p)}><path d="m9 6 6 6-6 6" /></svg>
);
export const ChevronLeft = ({ size = 20, ...p }: P) => (
  <svg {...base(size, p)}><path d="m15 6-6 6 6 6" /></svg>
);
export const FlameIcon = ({ size = 20, ...p }: P) => (
  <svg {...base(size, p)}><path d="M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-3-8-1 3-3 5-4 7-1 1.5-1 3-1 5 0 4 3 7 7 7z" /></svg>
);
export const LinkIcon = ({ size = 18, ...p }: P) => (
  <svg {...base(size, p)}><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></svg>
);
export const AlertIcon = ({ size = 18, ...p }: P) => (
  <svg {...base(size, p)}><path d="M12 3 2 20h20z" /><path d="M12 10v4M12 17h.01" /></svg>
);
export const LockIcon = ({ size = 18, ...p }: P) => (
  <svg {...base(size, p)}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
);
