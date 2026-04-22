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
- **GSAP 3 + ScrollTrigger** — all animations live in `components/Animations.tsx` (a client component that lazy-imports GSAP). Sections are static server components; they expose BEM-style class names (`.hero__badge`, `.service-card`, etc.) as animation targets.
- **pnpm** (workspace file present).

## Architecture

Single-page marketing site in Spanish (`<html lang="es">`). One route: `app/page.tsx` composes every section in order.

```
app/
  layout.tsx          # fonts, metadata, JSON-LD schema, viewport
  page.tsx            # section composition
  globals.css         # Tailwind v4 @theme tokens + base element styles
  hero-preload.css    # pre-hides hero elements when .js class is present (anti-FOUC)
  opengraph-image.tsx # dynamic OG image
  icon.tsx            # dynamic favicon
  robots.ts / sitemap.ts

components/
  Animations.tsx      # GSAP orchestration — single client entry point
  sections/           # one file per page section (all server components)
  ui/
    Button.tsx + Button.module.css         # primary/ghost, optional size="lg"
    StatusDot.tsx + StatusDot.module.css   # pulsing neon dot

data/content.ts       # all copy: metrics, clients, services, process, cases,
                      # differentiators, testimonials, FAQs
```

**Content changes** → `data/content.ts` only.
**Style/token changes** → `app/globals.css` `@theme inline` block; component-scoped styles live alongside their component as `*.module.css`.
**Animation changes** → `components/Animations.tsx`.

### Anti-FOUC / JS-gated pattern
`Animations.tsx` adds `.js` to `<html>` on mount. `hero-preload.css` uses `.js .hero__*` selectors to keep hero elements `visibility: hidden` until GSAP animates them in. When adding new hero elements that GSAP animates from opacity/translate, also add their class to `hero-preload.css` — otherwise they flash unstyled before GSAP runs.

### Reduced motion
`Animations.tsx` uses `gsap.matchMedia()` with `(prefers-reduced-motion: reduce)`. Under reduce, hero elements are `gsap.set(..., { autoAlpha: 1 })` and no scroll/entrance animations register. Any new hero element that `hero-preload.css` hides must also be re-shown in the reduced-motion branch.

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
