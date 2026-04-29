'use client';

import { useRef } from 'react';
import { useScrambleHover } from './useScrambleHover';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'lg';
  prefix?: boolean | string;
  className?: string;
  target?: string;
  children: React.ReactNode;
}

const base =
  'relative inline-flex items-center justify-center gap-[0.4rem] cursor-pointer whitespace-nowrap rounded-sm font-mono text-[13px] font-medium tracking-[0.06em] lowercase border border-transparent no-underline transition-[background-color,border-color,color,box-shadow] duration-[180ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-accent text-bg border-accent font-bold hover:bg-accent-hover hover:border-accent-hover focus-visible:outline-text',
  ghost:
    'bg-transparent border-border-strong text-text hover:border-accent hover:text-accent hover:bg-bg-elevated',
  outline:
    'bg-transparent border-accent text-accent hover:bg-accent-glow-soft hover:border-accent-hover hover:text-accent-hover',
};

const sizes = {
  lg: 'px-6 py-[14px] text-[14px]',
} as const;

const paddingDefault = 'px-[18px] py-[10px]';

export function Button({
  href,
  variant = 'primary',
  size,
  prefix,
  className,
  target,
  children,
}: ButtonProps) {
  const labelRef = useRef<HTMLSpanElement>(null);
  const text = typeof children === 'string' ? children : '';
  const { scramble, restore } = useScrambleHover(text);

  const prefixContent =
    prefix === true ? '>' : typeof prefix === 'string' ? prefix : null;

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={[
        base,
        variants[variant],
        size ? sizes[size] : paddingDefault,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={text ? () => scramble(labelRef.current) : undefined}
      onMouseLeave={text ? () => restore(labelRef.current) : undefined}
    >
      {prefixContent && (
        <span aria-hidden="true" className="opacity-90">
          {prefixContent}
        </span>
      )}
      <span ref={labelRef} className="inline-flex items-center">
        {children}
      </span>
    </a>
  );
}
