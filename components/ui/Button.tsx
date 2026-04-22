import styles from './Button.module.css';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'ghost';
  size?: 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Button({ href, variant = 'primary', size, className, children }: ButtonProps) {
  return (
    <a
      href={href}
      className={[styles.btn, styles[variant], size ? styles[size] : '', className].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  );
}
