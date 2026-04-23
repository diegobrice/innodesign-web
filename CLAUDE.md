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
- **Tailwind CSS v4** — no `tailwind.config.js`. Tokens live in `app/styles/tokens/` as `@theme inline` blocks and become both CSS variables and Tailwind utilities automatically.
- **Fonts**: Inter (display) + JetBrains Mono (mono/HUD), both self-hosted via `next/font/google`.
- **GSAP 3 + ScrollTrigger + `@gsap/react`** — each section owns its own animation. Sections are `'use client'` components that call `useGSAP(() => { ... }, { scope: rootRef })`, so selectors like `.service-card` only match within that section. Plugin registration and shared defaults live in `components/gsap-init.ts`.
- **pnpm** (workspace file present).

## Architecture

Single-page marketing site in Spanish (`<html lang="es">`). One route: `app/page.tsx` composes sections in order: Navbar → Hero → Clients → Services → Process → Portfolio → WhyUs → Testimonials → FAQ → FinalCTA → SystemShowcase → Footer.

```
app/
  layout.tsx          # fonts, metadata, JSON-LD schema, viewport
  page.tsx            # section composition
  globals.css         # imports all style partials (no tokens here)
  opengraph-image.tsx # dynamic OG image (uses data/site.ts brand palette)
  icon.tsx            # dynamic favicon (uses data/site.ts brand palette)
  robots.ts / sitemap.ts
  styles/
    tokens/           # colors.css, typography.css, layout.css — @theme inline blocks
    base/             # reset.css, elements.css, effects.css, focus.css
    components/       # section.css, service-card.css, case-card.css, container.css, footer-link.css

components/
  gsap-init.ts        # registers useGSAP + ScrollTrigger, sets gsap.defaults,
                      # re-exports { gsap, ScrollTrigger, useGSAP }
  sections/           # one file per page section (client components, each owns its animation)
  ui/
    Button.tsx + Button.module.css         # primary/ghost, optional size="lg"
    StatusDot.tsx + StatusDot.module.css   # pulsing neon dot
    MetricCounter.tsx                      # count-up number, scoped useGSAP + React state
    SectionHeader.tsx                      # numbered kicker + h2 + optional AccentRule + subtitle
    SectionLabel.tsx                       # "01. SERVICIOS" mono eyebrow
    BrandMark.tsx + BrandMark.module.css   # bracket-corner glyph (inline SVG)
    BracketFrame.tsx + BracketFrame.module.css  # 4-corner accent frame (decorative)
    Caret.tsx                              # blinking `_` signature (uses global .caret-blink)
    AccentRule.tsx                         # 2px gradient line cyan→púrpura
    StatusChip.tsx + StatusChip.module.css # mono pill with dot (success/warning/danger/muted)
    GlowOrb.tsx + GlowOrb.module.css       # ambient accent glow (legacy — prefer BracketFrame/BgGrid)
    GridBackdrop.tsx + GridBackdrop.module.css  # 32px cyan grid overlay (hero/cta variants)
    TerminalPanel.tsx + TerminalPanel.module.css # terminal window with traffic lights + log lines
    StatsHud.tsx + StatsHud.module.css     # CPU/MEM/NET/UPTIME live HUD (respects reduced-motion)
    CodeSnippet.tsx + CodeSnippet.module.css # mono code block inside a terminal frame
    icons/index.ts                         # re-exports from lucide-react (ArrowRight, Plus, Minus, Quote)

data/
  content.ts   # all copy: metrics, clients, services, process, cases, differentiators, testimonials, FAQs
  site.ts      # site URL, name, description; brand palette as JS constants (used in edge-runtime image routes)
```

**Content changes** → `data/content.ts` only.
**Site metadata** → `data/site.ts` (also the source of truth for brand hex values in `opengraph-image.tsx` and `icon.tsx`, where CSS variables can't be resolved).
**Token/style changes** → `app/styles/tokens/colors.css` for palette, `typography.css` for type scale, `layout.css` for spacing; component-scoped styles live alongside their component as `*.module.css`.
**Shared CSS component classes** (`.section-header`, `.section-kicker`, `.section-title`, `.section-subtitle`, `.service-card`, etc.) live in `app/styles/components/` — these are global classes, not Tailwind utilities.
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

Theme: **"innodesign — code with intent"**. Hacker-modern + technical precision, dark-first, cyan accent. Visual signatures: bracket-corner frames, 32px graph-paper grid, blinking caret `_`, mono section labels numbered `01. …`, terminal panels with traffic lights, HUD readouts. Voice is direct/technical ("shippeamos", "status: online", "// CODE WITH INTENT"). No emoji.

Key tokens (defined in `app/styles/tokens/`):

| Token | Value | Notes |
|---|---|---|
| `--color-bg` | `#0B0F14` | page canvas |
| `--color-bg-elevated` | `#11161D` | cards / panels |
| `--color-bg-inset` | `#1C222B` | raised / hover |
| `--color-accent` | `#3BC2F2` | cyan — primary accent |
| `--color-accent-hover` | `#5ED0F5` | |
| `--color-accent-2` | `#2563EB` | deeper blue — gradients only |
| `--color-accent-3` | `#7C3AED` | purple — gradient endpoint only |
| `--color-success` | `#22D38E` | |
| `--color-warning` | `#F0B43A` | |
| `--color-danger` | `#FF5C6C` | |
| `--color-border` | `#222B36` | |
| `--color-border-strong` | `#2C3742` | focus / hover |
| `--color-text` | `#E6EDF3` | 15.9:1 contrast |
| `--color-text-muted` | `#B6C2CF` | 10.4:1 — secondary |
| `--color-text-subtle` | `#7A8896` | 4.8:1 — tertiary |
| `--font-sans` | Inter | |
| `--font-mono` | JetBrains Mono | |

Global utilities (defined in `app/styles/base/utilities.css`): `.label-mono` (+`--accent`), `.terminal-line`, `.caret-blink`, `.bg-grid`, `.accent-rule`. Use these instead of re-creating the styles per component.

- **Buttons** → `<Button href="..." variant="primary|ghost|outline" size="lg" prefix>` (mono lowercase with optional `> ` prefix). Never raw CSS classes.
- **Section headers** → `<SectionHeader kicker="Servicios" number="01" title={<>…<em>word</em></>} subtitle="…" accentRule />`. Numbered eyebrow is the on-brand pattern; `accentRule` adds the cyan→purple gradient line under the title.
- **Icons** → import from `@/components/ui/icons` (lucide-react re-export; 20px, 1.5px stroke, currentColor). Typographic glyphs (`>`, `_`, `//`, `✓`, `✗`) are preferred when possible.
- **Narrative components** (`TerminalPanel`, `StatsHud`, `CodeSnippet`) — used in `components/sections/SystemShowcase.tsx` and composable wherever the hacker aesthetic needs to read loud.

The global `em` element is restyled as cyan accent emphasis (`color: var(--color-accent)`, `font-style: normal`) — use `<em>` inside headings to highlight a word.

The `design-system/` folder is the source of truth for the brand (HTML/CSS prototypes, reference components, assets). It's ignored by ESLint. Brand SVG assets (logo-mark, favicon, bracket-frame) are copied into `public/brand/`.
