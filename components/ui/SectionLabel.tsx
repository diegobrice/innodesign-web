import type { ReactNode } from 'react';

interface SectionLabelProps {
  number?: string;
  accent?: boolean;
  children: ReactNode;
  className?: string;
}

export function SectionLabel({
  number,
  accent = true,
  children,
  className,
}: SectionLabelProps) {
  const cls = ['label-mono', accent ? 'label-mono--accent' : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={cls}>
      {number && <span>{number}. </span>}
      {children}
    </span>
  );
}
