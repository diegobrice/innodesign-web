interface CaretProps {
  char?: string;
  className?: string;
}

export function Caret({ char = '_', className }: CaretProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        'inline-block text-accent font-bold ml-[0.04em] animate-[caret-blink_2s_ease-in-out_infinite] motion-reduce:animate-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {char}
    </span>
  );
}
