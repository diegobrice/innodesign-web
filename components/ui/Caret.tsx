interface CaretProps {
  char?: string;
  className?: string;
}

export function Caret({ char = '_', className }: CaretProps) {
  return (
    <span
      aria-hidden="true"
      className={['caret-blink', className].filter(Boolean).join(' ')}
    >
      {char}
    </span>
  );
}
