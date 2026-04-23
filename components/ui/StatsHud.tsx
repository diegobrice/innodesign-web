'use client';

import { useEffect, useState } from 'react';
import styles from './StatsHud.module.css';

interface Row {
  k: string;
  v: string;
  bar?: number;
  tone?: 'success' | 'muted';
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function StatsHud() {
  const [cpu, setCpu] = useState(23);
  const [mem, setMem] = useState(56);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setCpu((c) => clamp(c + (Math.random() * 12 - 6), 8, 92));
      setMem((m) => clamp(m + (Math.random() * 6 - 3), 30, 88));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  const rows: Row[] = [
    { k: 'CPU', v: `${Math.round(cpu)}%`, bar: cpu },
    { k: 'MEM', v: `${Math.round(mem)}%`, bar: mem },
    { k: 'NET', v: '18.2 MB/s ↑' },
    { k: 'UPTIME', v: '7d 14h 32m' },
    { k: 'STATUS', v: '● online', tone: 'success' },
  ];

  return (
    <div className={styles.hud} role="presentation">
      {rows.map((row) => (
        <div key={row.k} className={styles.row}>
          <span className={styles.key}>{row.k}</span>
          <span className={`${styles.value} ${row.tone ? styles[row.tone] : ''}`}>
            {row.bar !== undefined && (
              <span className={styles.bar} aria-hidden="true">
                <span className={styles.fill} style={{ width: `${row.bar}%` }} />
              </span>
            )}
            {row.v}
          </span>
        </div>
      ))}
    </div>
  );
}
