import styles from './GlowOrb.module.css';

interface GlowOrbProps {
  variant: 'hero' | 'cta';
  className?: string;
}

export function GlowOrb({ variant, className }: GlowOrbProps) {
  const cls = [styles.orb, styles[variant], className].filter(Boolean).join(' ');
  return <div aria-hidden="true" className={cls} />;
}
