export const site = {
  url: 'https://innodesign.com',
  name: 'innodesign',
  domain: 'innodesign.com',
  contactEmail: 'hola@innodesign.com',
  title: 'innodesign — Agencia de desarrollo de software',
  description:
    'Agencia de desarrollo de software. Creamos productos digitales que transforman negocios. Desarrollo web, apps móviles, SaaS y consultoría técnica.',
  tagline: 'Construimos productos digitales que hacen crecer tu negocio.',
  ogSummary: 'Construimos productos digitales que hacen crecer tu negocio. +80 proyectos entregados globalmente.',
} as const;

/**
 * Brand palette mirrored from `app/styles/tokens/colors.css`.
 * Used inside edge-runtime `ImageResponse` helpers (icon.tsx, opengraph-image.tsx)
 * where CSS custom properties cannot be resolved.
 * Keep in sync with the `@theme inline` block.
 */
export const brand = {
  bg: '#0a0a0b',
  accent: '#c6ff3d',
  accentGlow: 'rgba(198,255,61,0.2)',
  accentGridLine: 'rgba(198,255,61,0.05)',
  text: '#f5f5f7',
  textMuted: '#8a8a92',
  borderStrong: 'rgba(255,255,255,0.12)',
} as const;
