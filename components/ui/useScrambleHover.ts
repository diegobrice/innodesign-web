'use client';

import { useCallback, useRef } from 'react';

const CHARS = '!<>-_/[]{}=+*^?#|@%$';
const FRAMES = 14; // ~233ms at 60fps

export function useScrambleHover(text: string) {
  const rafRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

  const cancel = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const scramble = useCallback(
    (el: HTMLElement | null) => {
      if (!el || !text) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      cancel();
      let frame = 0;
      const tick = () => {
        const revealed = Math.floor((frame / FRAMES) * text.length);
        let out = '';
        for (let i = 0; i < text.length; i++) {
          out += i < revealed ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        el.textContent = out;
        frame++;
        if (frame <= FRAMES) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          el.textContent = text;
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    },
    [text, cancel],
  );

  const restore = useCallback(
    (el: HTMLElement | null) => {
      cancel();
      if (el) el.textContent = text;
    },
    [text, cancel],
  );

  return { scramble, restore };
}
