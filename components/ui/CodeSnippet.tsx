import type { ReactNode } from 'react';
import styles from './CodeSnippet.module.css';

interface CodeSnippetProps {
  filename?: string;
  children: ReactNode;
  className?: string;
}

export function CodeSnippet({
  filename = 'innodesign.ts',
  children,
  className,
}: CodeSnippetProps) {
  return (
    <div className={[styles.panel, className].filter(Boolean).join(' ')}>
      <div className={styles.head}>
        <span className={`${styles.dot} ${styles.red}`} aria-hidden="true" />
        <span className={`${styles.dot} ${styles.yellow}`} aria-hidden="true" />
        <span className={`${styles.dot} ${styles.green}`} aria-hidden="true" />
        <span className={styles.filename}>{filename}</span>
      </div>
      <pre className={styles.body}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export const codeSpan = {
  comment: (text: string) => <span className={styles.comment}>{text}</span>,
  keyword: (text: string) => <span className={styles.keyword}>{text}</span>,
  string: (text: string) => <span className={styles.string}>{text}</span>,
  accent: (text: string) => <span className={styles.accent}>{text}</span>,
};
