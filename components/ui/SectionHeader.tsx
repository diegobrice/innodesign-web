import type { ReactNode } from 'react';
import { AccentRule } from './AccentRule';

interface SectionHeaderProps {
  kicker: string;
  number?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  accentRule?: boolean;
  align?: 'center' | 'start';
}

export function SectionHeader({
  kicker,
  number,
  title,
  subtitle,
  accentRule = false,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      <span className="section-kicker label-mono label-mono--accent">
        {number && <span>{number}. </span>}
        {kicker}
      </span>
      <h2 className="section-title">{title}</h2>
      {accentRule && (
        <div className="section-accent-rule">
          <AccentRule />
        </div>
      )}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
