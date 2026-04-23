import type { ReactNode } from 'react';
import styles from './StatusChip.module.css';

interface StatusChipProps {
  tone?: 'success' | 'warning' | 'danger' | 'muted';
  children: ReactNode;
  className?: string;
}

export function StatusChip({ tone = 'success', children, className }: StatusChipProps) {
  return (
    <span className={[styles.chip, className].filter(Boolean).join(' ')}>
      <span aria-hidden="true" className={`${styles.dot} ${styles[tone]}`} />
      <span className={styles.label}>{children}</span>
    </span>
  );
}
