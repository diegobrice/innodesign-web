import type { ReactNode } from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'start';
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      <span className="section-kicker label-mono label-mono--accent">
        {kicker}
      </span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
