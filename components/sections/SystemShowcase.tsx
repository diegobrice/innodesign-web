'use client';

import { useRef } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TerminalPanel, type TerminalLine } from '@/components/ui/TerminalPanel';
import { StatsHud } from '@/components/ui/StatsHud';
import { CodeSnippet, codeSpan } from '@/components/ui/CodeSnippet';
import { gsap, useGSAP } from '@/components/gsap-init';

const buildLines: TerminalLine[] = [
  { kind: 'prompt', text: 'innodesign build' },
  { kind: 'message', text: 'Analyzing project...' },
  { kind: 'message', text: 'Building modules...' },
  { kind: 'message', text: 'Optimizing...' },
  { kind: 'success', text: 'Done. (0.94s)' },
  { kind: 'prompt', text: 'Deployed successfully' },
];

export function SystemShowcase() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.section-header > *', {
          scrollTrigger: { trigger: '.section-header', start: 'top 85%', toggleActions: 'play none none none' },
          autoAlpha: 0,
          y: 22,
          stagger: 0.12,
          duration: 0.9,
        });

        gsap.from('.showcase__col', {
          scrollTrigger: { trigger: '.showcase__grid', start: 'top 80%' },
          autoAlpha: 0,
          y: 28,
          stagger: 0.15,
          duration: 0.9,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-bg-elevated border-y border-border">
      <div className="container">
        <SectionHeader
          kicker="Sistema / narrativa"
          number="08"
          title={<>Directos. Técnicos. <em>Enfocados en valor.</em></>}
          subtitle="Así pensamos por dentro. Código con intención, sistemas escalables y métricas que hablan por sí solas."
        />

        <div className="showcase__grid grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          <div className="showcase__col flex flex-col gap-6">
            <TerminalPanel title="~/innodesign · build" lines={buildLines} caret />
            <StatsHud />
          </div>

          <div className="showcase__col">
            <CodeSnippet filename="innodesign.ts">
              {codeSpan.comment('// CODE WITH INTENT')}
              {'\n'}
              {codeSpan.keyword('const')} {codeSpan.accent('innodesign')} = {'{'}
              {'\n  '}focus: {codeSpan.string('"performance"')},
              {'\n  '}systems: {codeSpan.string('"scalable"')},
              {'\n  '}code: {codeSpan.string('"with_intent"')},
              {'\n  '}ship: () =&gt; value &gt; promises,
              {'\n'}{'}'};
            </CodeSnippet>
          </div>
        </div>
      </div>
    </section>
  );
}
