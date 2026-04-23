import { ImageResponse } from 'next/og';
import { brand, site } from '@/data/site';
import { metrics } from '@/data/content';

export const runtime = 'edge';
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadGeist(weight: 400 | 600): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}`;
  const css = await fetch(cssUrl, {
    headers: {
      // Asks Google Fonts for a woff2 payload; without a browser UA it serves a TTF subset
      // that `next/og` also accepts, so either path works — we just need the `src: url(...)`.
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    },
  }).then((r) => r.text());

  const src = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(?:woff2?|truetype|opentype)['"]?\)/);
  if (!src) throw new Error('Geist font source not found in Google Fonts CSS');
  const res = await fetch(src[1]);
  if (!res.ok) throw new Error(`Failed to load Geist (${weight}): ${res.status}`);
  return res.arrayBuffer();
}

export default async function OgImage() {
  const [regular, semibold] = await Promise.all([loadGeist(400), loadGeist(600)]);

  const markRing = 28;
  const markInner = 18;
  const markBorder = 2;

  const metricsLine = metrics
    .map((m) => `${m.value} ${m.desc.toLowerCase()}`)
    .join(' · ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: brand.bg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'Geist',
          color: brand.text,
          letterSpacing: '-0.02em',
        }}
      >
        {/* Grid backdrop — matches `.grid-backdrop` token usage in globals */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${brand.accentGridLine} 1px, transparent 1px), linear-gradient(90deg, ${brand.accentGridLine} 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Accent glow — mirrors `.hero__glow` */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 800,
            background: `radial-gradient(circle, ${brand.accentGlow} 0%, transparent 60%)`,
            filter: 'blur(60px)',
          }}
        />

        {/* Brand mark — mirrors `BrandMark` (ring + inner dot at ~64% proportion) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: markRing,
              height: markRing,
              borderRadius: '50%',
              border: `${markBorder}px solid ${brand.accent}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: markInner,
                height: markInner,
                borderRadius: '50%',
                background: brand.accent,
              }}
            />
          </div>
          <span style={{ fontSize: 30, fontWeight: 600 }}>
            {site.name}
            <span style={{ color: brand.accent }}>.</span>
          </span>
        </div>

        {/* Headline — matches the Hero `<h1>` verbatim, with the same neon <em> word */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 400,
            letterSpacing: '-0.045em',
            lineHeight: 1,
            textAlign: 'center',
            maxWidth: 960,
            marginBottom: 28,
            padding: '0 48px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          Construimos productos digitales que hacen{' '}
          <span style={{ color: brand.accent, margin: '0 14px' }}>crecer</span>
          tu negocio.
        </div>

        {/* Metrics line — sourced from data/content.ts so OG stays in sync with the page */}
        <div
          style={{
            fontSize: 22,
            color: brand.textMuted,
            textAlign: 'center',
            maxWidth: 820,
            letterSpacing: '-0.005em',
          }}
        >
          Agencia de desarrollo de software · {metricsLine}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Geist', data: regular, style: 'normal', weight: 400 },
        { name: 'Geist', data: semibold, style: 'normal', weight: 600 },
      ],
    }
  );
}
