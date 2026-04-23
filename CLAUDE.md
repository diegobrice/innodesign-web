# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # start dev server (Turbopack)
pnpm build        # production build
pnpm lint         # ESLint (eslint.config.mjs, Next.js config)
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** — configured entirely via `@theme inline` in `app/globals.css`; no `tailwind.config.js` file. Tokens become both CSS variables and Tailwind utilities automatically.
- **GSAP 3 + ScrollTrigger + `@gsap/react`** — each section owns its own animation. Sections are `'use client'` components that call `useGSAP(() => { ... }, { scope: rootRef })`, so selectors like `.service-card` only match within that section. Plugin registration and shared defaults live in `components/gsap-init.ts`.
- **pnpm** (workspace file present).

## Architecture

Single-page marketing site in Spanish (`<html lang="es">`). One route: `app/page.tsx` composes every section in order.

```
app/
  layout.tsx          # fonts, metadata, JSON-LD schema, viewport
  page.tsx            # section composition
  globals.css         # Tailwind v4 @theme tokens + base element styles
  opengraph-image.tsx # dynamic OG image
  icon.tsx            # dynamic favicon
  robots.ts / sitemap.ts

components/
  gsap-init.ts        # registers useGSAP + ScrollTrigger, sets gsap.defaults,
                      # re-exports { gsap, ScrollTrigger, useGSAP }
  sections/           # one file per page section (client components, each owns its animation)
  ui/
    Button.tsx + Button.module.css         # primary/ghost, optional size="lg"
    StatusDot.tsx + StatusDot.module.css   # pulsing neon dot
    MetricCounter.tsx                      # count-up number, scoped useGSAP + React state

data/content.ts       # all copy: metrics, clients, services, process, cases,
                      # differentiators, testimonials, FAQs
```

**Content changes** → `data/content.ts` only.
**Style/token changes** → `app/globals.css` `@theme inline` block; component-scoped styles live alongside their component as `*.module.css`.
**Animation changes** → the `useGSAP()` call inside the relevant section component. Import `{ gsap, useGSAP }` (and `ScrollTrigger` if needed) from `@/components/gsap-init`.

### Animation pattern
Each animated section is `'use client'`, holds a `useRef` on its root element, and passes it as `scope` to `useGSAP` so selectors resolve only within that section:

```tsx
'use client';
import { useRef } from 'react';
import { gsap, useGSAP } from '@/components/gsap-init';

export function Services() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.service-card', { /* ... */ });
    });
  }, { scope: root });
  return <section ref={root}>{/* ... */}</section>;
}
```

`useGSAP` handles cleanup (including ScrollTrigger instances) automatically on unmount, and is safe under React 19 StrictMode. Reduced motion: guard entrance/scroll animations with `mm.add('(prefers-reduced-motion: no-preference)', ...)` — under reduce-motion the block simply doesn't register. For hero-style pre-hidden elements, also add an explicit `reduce` branch that calls `gsap.set(..., { autoAlpha: 1 })` so content stays visible.

## Design System

Theme: "Corporate AI Tech Noir" — near-black surfaces with a neon lime accent.

Key tokens (defined in `globals.css`):

| Token | Value |
|---|---|
| `--color-bg` | `#0a0a0b` |
| `--color-accent` | `#c6ff3d` |
| `--color-text` | `#f5f5f7` |
| `--color-text-muted` | `#8a8a92` |
| `--font-sans` | Geist |
| `--font-mono` | JetBrains Mono |

Buttons are a React component (`components/ui/Button.tsx`) with styles in `Button.module.css` — use `<Button href="..." variant="primary|ghost" size="lg">` rather than raw `.btn` classes. Section layout is composed inline via Tailwind utilities in each section file (no shared `.section-inner` utility exists).

The global `em` element is restyled as the neon accent emphasis (`color: var(--color-accent)`, `font-style: normal`) — use `<em>` inside headings to highlight a word, as in the Hero title.
