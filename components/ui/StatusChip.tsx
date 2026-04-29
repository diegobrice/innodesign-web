import type { ReactNode } from 'react';

interface StatusChipProps {
  tone?: 'success' | 'warning' | 'danger' | 'muted';
  children: ReactNode;
  className?: string;
}

const toneClasses: Record<NonNullable<StatusChipProps['tone']>, string> = {
  success: 'bg-success shadow-[0_0_6px_-1px_var(--color-success)]',
  warning: 'bg-warning',
  danger: 'bg-danger',
  muted: 'bg-text-subtle',
};

export function StatusChip({ tone = 'success', children, className }: StatusChipProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-bg border border-border font-mono text-[10px] tracking-[0.08em] text-text-subtle lowercase',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span
        aria-hidden="true"
        className={`w-1.5 h-1.5 rounded-pill inline-block shrink-0 ${toneClasses[tone]}`}
      />
      <span className="text-text-muted">{children}</span>
    </span>
  );
}
