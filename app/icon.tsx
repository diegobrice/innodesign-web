import { ImageResponse } from 'next/og';
import { brand } from '@/data/site';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Favicon — bracket-framed `id_` glyph matching the brand mark SVG.
 * Rendered via ImageResponse so the Inter-like weight and cyan underscore
 * are preserved across browsers and rasterized for the tab.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          background: '#11161D',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          fontWeight: 700,
          fontSize: 17,
          letterSpacing: '-0.04em',
          color: brand.text,
          border: `1px solid ${brand.borderStrong}`,
        }}
      >
        <span>id</span>
        <span style={{ color: brand.accent }}>_</span>
      </div>
    ),
    { ...size }
  );
}
