interface IconProps {
  className?: string;
}

export function Quote({ className }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.5 4.5C4.46 6.07 2.5 8.9 2.5 12.5V19.5H9.5V12.5H6.25C6.7 10.33 8.2 8.83 10.5 7.75L7.5 4.5ZM18.5 4.5C15.46 6.07 13.5 8.9 13.5 12.5V19.5H20.5V12.5H17.25C17.7 10.33 19.2 8.83 21.5 7.75L18.5 4.5Z" />
    </svg>
  );
}
