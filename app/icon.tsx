import { ImageResponse } from 'next/og';
import { brand } from '@/data/site';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

/**
 * Favicon mirroring the `BrandMark` component (ring + inner dot).
 * Proportions match `components/ui/BrandMark.module.css` (inner ≈ 66% of ring).
 */
export default function Icon() {
  const ring = 24;
  const inner = 16;
  const border = 2;

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          background: brand.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            width: ring,
            height: ring,
            borderRadius: '50%',
            border: `${border}px solid ${brand.accent}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: inner,
              height: inner,
              borderRadius: '50%',
              background: brand.accent,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
