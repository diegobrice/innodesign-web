import type { ReactNode } from 'react';

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

export function SectionHeader({ kicker, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
