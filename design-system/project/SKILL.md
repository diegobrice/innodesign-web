---
name: innodesign-design
description: Use this skill to generate well-branded interfaces and assets for innodesign, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill first — it covers brand concept (*code with intent*), voice/tone (directos, técnicos, enfocados en valor; no emoji; two‑beat period‑punctuated headlines; `>` terminal prompts), the full color + type token spec, visual rules (dark‑first, 1px borders over shadows, bracket‑corner frames, 32px cyan grid, restrained accent use), and iconography (typographic glyphs first, Lucide substitute at 20px / 1.5 stroke).

Then explore:
- `colors_and_type.css` — import this into every artifact. All design tokens live here.
- `assets/` — logos (wordmark, mark, favicon), bracket frame, source brand board.
- `ui_kits/innodesign-web/` — reference components (Nav, Hero, Terminal, StatsHud, Services, CodeSnippet, CTA, Footer) + working `index.html`.
- `preview/` — per‑token specimen cards you can lift patterns from.

If creating visual artifacts (slides, mocks, throwaway prototypes, landing pages), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some focused questions (audience, surface, tweaks they want to explore), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

**Brand principle to enforce:** *Si algo se ve hacker pero reduce legibilidad o jerarquía se elimina.* Never let the terminal/HUD styling fight the hierarchy — legibility wins.
