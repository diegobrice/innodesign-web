interface GridBackdropProps {
  variant: 'hero' | 'cta';
}

const base =
  "absolute inset-0 pointer-events-none z-0 [background-image:linear-gradient(var(--color-grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-grid-line)_1px,transparent_1px)] [background-size:32px_32px]";

const variantClass: Record<GridBackdropProps['variant'], string> = {
  hero: '[background-position:-1px_-1px] [mask-image:radial-gradient(50%_55%_at_50%_33%,black_0%,transparent_100%)] [-webkit-mask-image:radial-gradient(50%_55%_at_50%_33%,black_0%,transparent_100%)]',
  cta: '[mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]',
};

export function GridBackdrop({ variant }: GridBackdropProps) {
  return <div aria-hidden="true" className={`${base} ${variantClass[variant]}`} />;
}
