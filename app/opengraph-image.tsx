import { ImageResponse } from 'next/og';
import { brand, site } from '@/data/site';
import { metrics } from '@/data/content';

export const runtime = 'edge';
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadInter(weight: 400 | 700): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`;
  const css = await fetch(cssUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    },
  }).then((r) => r.text());

  const src = css.match(/src:\s*url\(([^)]+)\)\s*format\(['"]?(?:woff2?|truetype|opentype)['"]?\)/);
  if (!src) throw new Error('Inter font source not found in Google Fonts CSS');
  const res = await fetch(src[1]);
  if (!res.ok) throw new Error(`Failed to load Inter (${weight}): ${res.status}`);
  return res.arrayBuffer();
}

export default async function OgImage() {
  const [regular, bold] = await Promise.all([loadInter(400), loadInter(700)]);

  const metricsLine = metrics
    .map((m) => `${m.value} ${m.desc.toLowerCase()}`)
    .join(' · ');

  const bracket = { size: 22, stroke: 3 };

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
          fontFamily: 'Inter',
          color: brand.text,
        }}
      >
        {/* Graph-paper grid — 32px cyan lines at low opacity */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(${brand.accentGridLine} 1px, transparent 1px), linear-gradient(90deg, ${brand.accentGridLine} 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Bracket frame corners — 2px accent L shapes at each corner */}
        {(
          [
            { pos: { top: 48, left: 48 }, edges: [true, false, false, true] },
            { pos: { top: 48, right: 48 }, edges: [true, true, false, false] },
            { pos: { bottom: 48, left: 48 }, edges: [false, false, true, true] },
            { pos: { bottom: 48, right: 48 }, edges: [false, true, true, false] },
          ] as const
        ).map((corner, i) => {
          const [t, r, b, l] = corner.edges;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: bracket.size,
                height: bracket.size,
                ...corner.pos,
                borderStyle: 'solid',
                borderColor: brand.accent,
                borderWidth: `${t ? bracket.stroke : 0}px ${r ? bracket.stroke : 0}px ${b ? bracket.stroke : 0}px ${l ? bracket.stroke : 0}px`,
              }}
            />
          );
        })}

        {/* Eyebrow label — `> BRAND · CODE WITH INTENT` */}
        <div
          style={{
            fontSize: 18,
            fontFamily: 'Inter',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: brand.accent,
            textTransform: 'uppercase',
            marginBottom: 48,
          }}
        >
          {`> ${site.name} · code with intent`}
        </div>

        {/* Headline — Hero `<h1>` verbatim */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.02,
            textAlign: 'center',
            maxWidth: 960,
            marginBottom: 32,
            padding: '0 48px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          Construimos productos digitales que hacen
          <span style={{ color: brand.accent, margin: '0 14px' }}>crecer</span>
          tu negocio.
        </div>

        {/* Accent rule — 2px gradient cyan → purple */}
        <div
          style={{
            width: 160,
            height: 2,
            background: `linear-gradient(90deg, ${brand.accent}, ${brand.accentPurple})`,
            marginBottom: 32,
          }}
        />

        {/* Metrics */}
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
        { name: 'Inter', data: regular, style: 'normal', weight: 400 },
        { name: 'Inter', data: bold, style: 'normal', weight: 700 },
      ],
    }
  );
}
