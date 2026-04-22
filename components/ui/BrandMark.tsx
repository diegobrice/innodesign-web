import styles from './BrandMark.module.css';

interface BrandMarkProps {
  size?: 'sm' | 'md';
}

export function BrandMark({ size = 'md' }: BrandMarkProps) {
  return <span aria-hidden="true" className={`${styles.mark} ${styles[size]}`} />;
}
