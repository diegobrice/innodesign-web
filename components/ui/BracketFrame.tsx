import styles from './BracketFrame.module.css';

interface BracketFrameProps {
  color?: 'accent' | 'border';
  size?: number;
  className?: string;
}

export function BracketFrame({
  color = 'accent',
  size = 16,
  className,
}: BracketFrameProps) {
  return (
    <span
      aria-hidden="true"
      className={[styles.frame, styles[color], className].filter(Boolean).join(' ')}
      style={{ '--bracket-size': `${size}px` } as React.CSSProperties}
    >
      <span className={`${styles.corner} ${styles.tl}`} />
      <span className={`${styles.corner} ${styles.tr}`} />
      <span className={`${styles.corner} ${styles.bl}`} />
      <span className={`${styles.corner} ${styles.br}`} />
    </span>
  );
}
