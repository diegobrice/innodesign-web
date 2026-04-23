# innodesign Design System
### // CODE WITH INTENT

**innodesign** is a software development agency focused on web software, landing pages, mobile apps and e‑commerce. The brand's aesthetic is **modern hacker + sophisticated design** — terminal cues and technical precision delivered with restraint, never as costume.

This folder is both a design system and an agent skill. Use it to generate on‑brand interfaces, slides, prototypes, and production code for innodesign.

---

## Sources

- `uploads/WhatsApp Image 2026-04-22 at 10.30.24 AM.jpeg` — the **Brand Kit v1.0** board supplied by the team. Copy archived at `assets/brand-kit-v1.jpeg`. Covers logo, variants, palette, typography, visual system, tone, and example applications (card, site hero, social post, favicon).
- No codebase, Figma file, or live site was provided. Everything below is distilled from that board plus the written direction: *"diseño estilo hacker moderno y diseño sofisticado, demostrando capacidad técnica y criterio de diseño."*

> **Brand principle:** *Si algo se ve hacker pero reduce legibilidad o jerarquía se elimina.* If a hacker flourish hurts legibility or hierarchy, cut it.

---

## Index

| File | What it is |
|---|---|
| `README.md` | This document — foundations, tone, iconography, visual rules. |
| `SKILL.md` | Entry point when this folder is used as an Agent Skill. |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radii, shadow, motion) and base element styles. Import this into every artifact. |
| `assets/` | Logos, favicon, bracket frame, source brand board. |
| `preview/` | Design‑System cards rendered for review. |
| `ui_kits/innodesign-web/` | UI kit recreating the innodesign marketing site (hero, nav, HUD, terminal, CTA, footer). |

---

## Brand at a glance

- **Name:** innodesign (always lowercase, always followed by trailing `_` caret in the wordmark).
- **Tagline:** `// CODE WITH INTENT` — used as a comment, monospace, often under the logo.
- **Voice:** Direct. Technical. Value‑focused. Spanish first, English acceptable for product copy.
- **Visual DNA:** Deep near‑black canvas, a single electric cyan accent (`#3BC2F2`), Inter display, JetBrains Mono everywhere code‑like lives. Grid lines, bracket frames, terminal prompts (`>`), blinking carets, HUD readouts.

---

## CONTENT FUNDAMENTALS

The copy is one of the clearest signals of the brand. It is **short, declarative, technical, and always ties back to value**.

### Voice & tone
- **Directos. Técnicos. Enfocados en valor.** (The brand board states this explicitly.)
- First‑person plural when speaking as the team — *"Construimos software que impulsa tu negocio"*, *"Shippeamos productos, no promesas"*. Address the client as **tú**, not *usted*.
- Confident but not boastful. The team describes work in terms of outcomes (*impulsa tu negocio*, *velocidad con calidad*) and discipline (*código limpio*, *sistemas escalables*), never superlatives.
- **Spanglish is on‑brand** when the English term is what engineers actually say: *shippeamos*, *release*, *build*, *status: online*, *uptime*. Do not translate these to forced Spanish.

### Casing
- **Wordmark & product names:** lowercase (`innodesign`, `innodesign.dev`).
- **Headlines:** Sentence case with a period. Two‑beat rhythm is the house move — *"Build fast. Break less."*
- **Section labels / eyebrows:** UPPERCASE with wide tracking, numbered, prefixed with monospace — `01. LOGOTIPO PRINCIPAL`, `04. PALETA DE COLORES`. These are how sections of a page, deck, or doc are titled.
- **Status/meta strings:** lowercase monospace — `status: online`, `v1.0.3`, `uptime 7d 14h 32m`.

### The two speech registers

1. **Display (Inter):** the brand's outside voice. Short headlines with a period. *Build fast. Break less.* *Código limpio. Sistemas escalables.*
2. **Terminal (JetBrains Mono, prefixed `>`):** the brand's inside voice — commentary, status, build logs. Examples from the kit:
   - `> status: building the future`
   - `> focused on performance, security and experience`
   - `> shipping value, not just code`
   - `> nuevo release` / `> optimizado` / `> seguro` / `> escalable`

### Decimos / No decimos (from the brand board)

| Decimos ✓ | No decimos ✗ |
|---|---|
| Construimos software que impulsa tu negocio. | Soluciones innovadoras y disruptivas. |
| Shippeamos productos, no promesas. | Transformamos tu negocio de forma exponencial. |
| Código limpio. Sistemas escalables. | Expertos en todo. |
| Velocidad con calidad. | Cubrimos cualquier necesidad. |

**Rule of thumb:** if a sentence could appear on any SaaS landing page, rewrite it. Name the concrete thing (código, sistemas, velocidad, performance, security) and the concrete benefit.

### Emoji & ornament
- **No emoji.** They do not appear anywhere in the brand board.
- Unicode glyphs *are* used, but as technical punctuation: `>`, `_`, `//`, `{ }`, `✓` (success), `✗` (failure). These belong to the monospace register.
- Comment syntax `// CODE WITH INTENT` is used deliberately and sparingly — reserved for taglines and metadata lines.

---

## VISUAL FOUNDATIONS

### Color — always dark‑first
| Role | Token | Hex |
|---|---|---|
| Page canvas (default bg) | `--id-bg-0` | `#0B0F14` *Negro profundo* |
| Cards / panels | `--id-bg-1` | `#11161D` *Gris carbón* |
| Raised / hover | `--id-bg-2` | `#1C222B` *Gris acero* |
| Primary text | `--id-fg-0` | `#E6EDF3` *Blanco hielo* |
| Secondary text | `--id-fg-1` | `#B6C2CF` |
| Accent — primary | `--id-accent` | `#3BC2F2` *Azul primario* |
| Accent — deeper | `--id-accent-2` | `#2563EB` *Azul eléctrico* |
| Accent — rare energy | `--id-accent-3` | `#7C3AED` *Púrpura neón* |

**Usage rule (from the board):** *"usar acentos con moderación."* The cyan is for one thing per view — a CTA, a heading word, a status dot. If everything is accent, nothing is. `#7C3AED` appears **only** at the end of the cyan→violet gradient, never as a solid UI color.

### Type
- **Primary — Inter** (Google Fonts, served via `@import` in `colors_and_type.css`). Weights used: 300 Light, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold, 800/900 for display. Headlines tighten letter‑spacing to `-0.02em` / `-0.03em`.03em`.
- **Secondary — JetBrains Mono** (Google Fonts). Regular, Medium, Bold. Used for code, terminal lines, section labels, status/meta readouts, and any HUD figures.
- **No third font, ever.** The tension between the two faces *is* the system.

### Backgrounds
- **Near‑black solid** (`--id-bg-0`) is the default. No full‑bleed photography. No marketing gradients as backgrounds.
- **Faint square grid** (32px, cyan at ~8% opacity) may be laid over the canvas on hero sections and empty panels — see `.id-bg-grid` utility. It reads as graph paper / technical drawing surface.
- **Gradient use is restricted** to one role: a 2px horizontal rule `linear-gradient(90deg, #3BC2F2, #7C3AED)` as a decorative underline below block titles (as shown beneath the palette row on the brand board). Never as button fill, never as card background.
- **Scanlines / CRT / noise:** *no*. The brand is hacker‑*modern*, not retro terminal.

### Spacing & layout
- 4px base; scale is `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`. See `--id-space-*`.
- Generous white (dark) space. The brand board itself is an example — each module breathes.
- Layouts prefer **rectangular panels with 1px borders** over drop‑shadow cards. Depth comes from border + subtle inner highlight, not blur.
- Fixed chrome (top nav, status bar) stays ≤ 56px tall and uses `--id-bg-1` with a 1px `--id-border` bottom rule.

### Borders & corners
- **Default radius is small.** `--id-radius-md` (4px) for cards, inputs, panels. `--id-radius-lg` (8px) only for large hero panels. Pills (`999px`) for status chips.
- **1px solid borders** everywhere — `--id-border` for resting, `--id-border-strong` for focused/hovered, `--id-border-accent` (cyan @ 55%) for the one accented element per view.
- **Bracket corners** (the `⌐ ¬ ⌙ ⌐` motif in `assets/bracket-frame.svg`) are the brand's favorite decorative device — used around the logo, the app icon, UI placeholders, and hero panels.

### Shadows
- **Minimal.** The system prefers 1px borders + tiny inner highlight over elevation blur. When shadow *is* used: `--id-shadow-sm` (1px inset + soft 2px drop) or `--id-shadow-md` (16px drop at 45% with a 1px internal border).
- **Glow** (`--id-shadow-glow`) is the single cyan halo effect — reserved for the single focused / hovered accent element per view.

### Hover, press, focus
- **Hover:** backgrounds step **lighter** by one surface level (`--id-bg-1` → `--id-bg-2`). Borders strengthen to `--id-border-strong`. Links shift from `--id-accent` to `--id-accent-hover` (`#5ED0F5`). No scale, no shadow.
- **Press:** accent drops to `--id-accent-press` (`#2AA7D4`); non‑accent elements invert — border becomes accent, background gains a 1px cyan ring. No translate, no squish.
- **Focus:** 2px `--id-accent` outline offset by 2px. Always visible. Never removed for aesthetics.

### Motion
- Quick and un‑showy. `--id-dur-fast` 120ms / `--id-dur-base` 180ms / `--id-dur-slow` 320ms, easing `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- **Allowed:** fades, 1‑2px translates, caret blink (`id-blink`), terminal typewriter on hero text, progress bars.
- **Avoided:** bouncy spring physics, parallax, confetti, anything that screams "marketing animation library."
- The **blinking underscore** after the wordmark (`.id-caret`) is the one signature animation.

### Transparency & blur
- Near‑black surfaces are **opaque**. Use transparency only for:
  - Grid / scanline overlays (`rgba(59,194,242, 0.04 – 0.08)`).
  - Overlay scrims behind modals (`--id-overlay`, black @ 72%).
  - The `color-mix()` accent border (`--id-border-accent`).
- **Backdrop‑blur is off‑brand.** The aesthetic is precise, not glassy.

### Imagery
- Photography is cool, desaturated, near‑black. When product shots appear (e.g. the business card on the brand board), they're lit as if on the same canvas as the UI.
- No illustrated characters, no 3D blobs, no isometric scenes.
- The graph‑paper grid + bracket corners function *as* the imagery for most empty/hero states.

### Cards & panels
- **Anatomy:** `background: var(--id-bg-1); border: 1px solid var(--id-border); border-radius: 4px;` Optional eyebrow label in monospace at the top‑left (`01. TITLE`). No drop shadow by default.
- **Featured panel:** upgrade to `--id-border-accent` and `--id-shadow-glow`. Reserve for one panel at a time.
- **Interactive panel (hovered):** `background: var(--id-bg-2); border-color: var(--id-border-strong);`

---

## ICONOGRAPHY

The brand's icon approach is **deliberately minimal and utilitarian.** The brand board shows almost no icons — visual interest comes from *typography, bracket frames, grids, and HUD readouts*, not from a sticker sheet of glyphs.

- **Typographic glyphs first.** `>`, `_`, `//`, `✓`, `✗`, `{ }`, `( )`, bullet `●` — these come for free from JetBrains Mono and are the brand's primary "icon set." Use them for status dots, list bullets, terminal prompts, success/fail states, and command prefixes.
- **Bracket frames** (`assets/bracket-frame.svg`) are the closest thing to a mascot. They frame logos, favicons, empty states, and hero visuals.
- **When a real icon is needed**, use [**Lucide**](https://lucide.dev) at **1.5px stroke, currentColor, 20px** default. Lucide's line weight matches Inter's regular/medium and JetBrains Mono's stems. Prefer the outline style; filled variants only for single‑color status indicators.
- **CDN usage:**
  ```html
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  <i data-lucide="terminal" width="20" height="20" stroke-width="1.5"></i>
  <script>lucide.createIcons();</script>
  ```
  > **Substitution flag:** the brand board does not specify an icon library. Lucide is our nearest match for stroke weight and aesthetic. If you have a project‑specific set, swap it in.
- **No emoji, anywhere.** This is absolute.
- **No flat colored icons, no pastel duotone sets, no Material Symbols.** They fight the type system.
- **Traffic‑light dots** (`#FF5F57` `#FEBC2E` `#28C840`) *are* used once, in the terminal window chrome — see `ui_kits/innodesign-web`. That's the only time non‑brand colors appear in icons.

### Logos in `assets/`
| File | Use |
|---|---|
| `logo-wordmark.svg` | Primary — white `inno` + cyan `design_` on dark. |
| `logo-wordmark-dark.svg` | All‑black version for light backgrounds / print. |
| `logo-mark.svg` | Square `id_` glyph inside bracket corners — favicons, avatars, watermarks. |
| `favicon.svg` | Rounded‑corner app/favicon variant with filled panel. |
| `bracket-frame.svg` | Reusable corner frame; drop behind any content block. |
| `brand-kit-v1.jpeg` | Source brand board. |

---

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
<body class="id-bg-grid">
  <span class="id-label">01. HERO</span>
  <h1>Build fast. Break less.</h1>
  <p class="id-term">status: shipping</p>
  <button class="id-btn id-btn--accent">Ver proyectos</button>
</body>
```

---

## Caveats

- Brand board is the only source — no live codebase, Figma, or production site to cross‑reference. Component specifics (disabled states, form validation, dense data tables) are extrapolated from the board's visual language and should be confirmed against production before shipping.
- **Inter + JetBrains Mono** are both served from Google Fonts' free CDN — no licensing steps needed. Self‑host them from [fonts.google.com](https://fonts.google.com) if you want to remove the runtime CDN dependency.p them into a `fonts/` folder.
- **Lucide** is a substitution — flagged above.
