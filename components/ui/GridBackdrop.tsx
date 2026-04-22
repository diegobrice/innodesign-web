import styles from './GridBackdrop.module.css';

interface GridBackdropProps {
  variant: 'hero' | 'cta';
}

export function GridBackdrop({ variant }: GridBackdropProps) {
  return <div aria-hidden="true" className={`${styles.grid} ${styles[variant]}`} />;
}
