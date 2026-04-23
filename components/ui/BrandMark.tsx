import styles from './BrandMark.module.css';

interface BrandMarkProps {
  size?: 'sm' | 'md';
}

export function BrandMark({ size = 'md' }: BrandMarkProps) {
  const px = size === 'md' ? 28 : 22;
  return (
    <span
      aria-hidden="true"
      className={`${styles.mark} ${styles[size]}`}
      style={{ width: px, height: px }}
    >
      <svg viewBox="0 0 160 160" width={px} height={px} xmlns="http://www.w3.org/2000/svg" fill="none">
        <g stroke="currentColor" strokeWidth="3" strokeLinecap="square">
          <polyline points="8,26 8,8 26,8" />
          <polyline points="134,8 152,8 152,26" />
          <polyline points="152,134 152,152 134,152" />
          <polyline points="26,152 8,152 8,134" />
        </g>
      </svg>
    </span>
  );
}
