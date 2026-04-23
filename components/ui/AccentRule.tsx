interface AccentRuleProps {
  width?: number;
  className?: string;
}

export function AccentRule({ width = 120, className }: AccentRuleProps) {
  return (
    <hr
      aria-hidden="true"
      className={['accent-rule', className].filter(Boolean).join(' ')}
      style={{ width: `${width}px` }}
    />
  );
}
