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
  bg: '#0B0F14',
  accent: '#3BC2F2',
  accentDeeper: '#2563EB',
  accentPurple: '#7C3AED',
  accentGlow: 'rgba(59,194,242,0.2)',
  accentGridLine: 'rgba(59,194,242,0.08)',
  text: '#E6EDF3',
  textMuted: '#B6C2CF',
  borderStrong: '#2C3742',
} as const;
