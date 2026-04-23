# innodesign — Web UI Kit

Hi-fi recreation of the innodesign marketing site based on the brand board. A single `index.html` stitches the components into a landing-page view.

## Components
- `Nav.jsx` — top nav bar with wordmark + menu + CTA.
- `Hero.jsx` — graph-paper canvas, two-beat headline, terminal log, CTAs.
- `Terminal.jsx` — build-log panel with traffic lights.
- `StatsHud.jsx` — CPU / MEM / NET / UPTIME readout.
- `Services.jsx` — 4 service cards with numbered eyebrows.
- `CodeSnippet.jsx` — JetBrains Mono code card.
- `CTASection.jsx` — "Build fast. Break less." block.
- `Footer.jsx` — minimal footer with status chip.

## Notes
- Uses `colors_and_type.css` tokens only. No hardcoded hex outside brand palette.
- Click-thru: nav links smooth-scroll; "Ver proyectos" toggles the terminal to a fake deploy log.
