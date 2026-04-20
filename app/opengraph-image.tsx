import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'innodesign — Agencia de desarrollo de software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0A0A0B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(198,255,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,61,0.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 800,
            height: 800,
            background:
              'radial-gradient(circle, rgba(198,255,61,0.2) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              border: '2px solid #C6FF3D',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#C6FF3D',
              }}
            />
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, color: '#F5F5F7', letterSpacing: '-0.02em' }}>
            innodesign
            <span style={{ color: '#C6FF3D' }}>.</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 400,
            color: '#F5F5F7',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            textAlign: 'center',
            maxWidth: 900,
            marginBottom: 24,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          Construimos productos que hacen{' '}
          <span style={{ color: '#C6FF3D', marginLeft: 14 }}>crecer</span>
          &nbsp;tu negocio.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: '#8A8A92',
            textAlign: 'center',
            maxWidth: 680,
          }}
        >
          Agencia de desarrollo de software · +80 proyectos · 12 países
        </div>
      </div>
    ),
    { ...size }
  );
}
