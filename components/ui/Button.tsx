import styles from './Button.module.css';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'lg';
  prefix?: boolean | string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = 'primary',
  size,
  prefix,
  className,
  children,
}: ButtonProps) {
  const prefixContent =
    prefix === true ? '>' : typeof prefix === 'string' ? prefix : null;

  return (
    <a
      href={href}
      className={[styles.btn, styles[variant], size ? styles[size] : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {prefixContent && (
        <span aria-hidden="true" className={styles.prefix}>
          {prefixContent}
        </span>
      )}
      <span className={styles.label}>{children}</span>
    </a>
  );
}
