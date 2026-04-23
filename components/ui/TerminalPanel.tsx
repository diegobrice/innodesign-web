import type { ReactNode } from 'react';
import styles from './TerminalPanel.module.css';

export type TerminalLine =
  | { kind: 'prompt'; text: ReactNode }
  | { kind: 'message'; text: ReactNode }
  | { kind: 'success'; text: ReactNode }
  | { kind: 'error'; text: ReactNode };

interface TerminalPanelProps {
  title?: string;
  lines?: TerminalLine[];
  children?: ReactNode;
  caret?: boolean;
  className?: string;
}

export function TerminalPanel({
  title = '~/innodesign',
  lines,
  children,
  caret,
  className,
}: TerminalPanelProps) {
  return (
    <div className={[styles.panel, className].filter(Boolean).join(' ')}>
      <div className={styles.head}>
        <span className={`${styles.dot} ${styles.red}`} aria-hidden="true" />
        <span className={`${styles.dot} ${styles.yellow}`} aria-hidden="true" />
        <span className={`${styles.dot} ${styles.green}`} aria-hidden="true" />
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>
        {lines?.map((line, i) => (
          <div key={i} className={`${styles.line} ${styles[line.kind]}`}>
            {line.kind === 'prompt' && <span className={styles.prompt}>{'> '}</span>}
            {line.kind === 'success' && <span className={styles.glyph}>✓ </span>}
            {line.kind === 'error' && <span className={styles.glyph}>✗ </span>}
            <span>{line.text}</span>
            {caret && i === lines.length - 1 && <span className="caret-blink">_</span>}
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}
