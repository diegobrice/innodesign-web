interface BracketFrameProps {
  color?: 'accent' | 'border';
  size?: number;
  className?: string;
}

const colorClass: Record<NonNullable<BracketFrameProps['color']>, string> = {
  accent: 'border-accent',
  border: 'border-border-strong',
};

export function BracketFrame({
  color = 'accent',
  size = 16,
  className,
}: BracketFrameProps) {
  const cornerBase = `absolute border-2 ${colorClass[color]}`;
  const dim = { width: `${size}px`, height: `${size}px` };

  return (
    <span
      aria-hidden="true"
      className={['bracket-frame absolute inset-0 pointer-events-none z-[1]', className]
        .filter(Boolean)
        .join(' ')}
    >
      <span
        className={`${cornerBase} top-0 left-0 border-r-0 border-b-0`}
        style={dim}
      />
      <span
        className={`${cornerBase} top-0 right-0 border-l-0 border-b-0`}
        style={dim}
      />
      <span
        className={`${cornerBase} bottom-0 left-0 border-r-0 border-t-0`}
        style={dim}
      />
      <span
        className={`${cornerBase} bottom-0 right-0 border-l-0 border-t-0`}
        style={dim}
      />
    </span>
  );
}
