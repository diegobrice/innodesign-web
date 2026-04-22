import { Button } from '@/components/ui/Button';
import { GlowOrb } from '@/components/ui/GlowOrb';
import { GridBackdrop } from '@/components/ui/GridBackdrop';

export function FinalCTA() {
  return (
    <section id="contacto" className="cta relative overflow-hidden py-[160px] border-t border-border">
      <GlowOrb variant="cta" />
      <GridBackdrop variant="cta" />

      <div className="cta__inner text-center mx-auto relative max-w-[780px] px-8 max-sm:px-5 z-[2]">
        <h2 className="text-[clamp(2.2rem,5vw,3.75rem)] mb-6 font-normal tracking-[-0.045em] leading-none">
          ¿Listo para construir tu próximo producto?
        </h2>
        <p className="text-[1.1rem] text-text-muted mb-10 max-w-[520px] mx-auto">
          Agenda una llamada de 30 minutos y te damos una propuesta clara en menos de 48 horas.
        </p>
        <div className="flex justify-center flex-wrap gap-3 max-sm:w-full">
          <Button href="mailto:hola@innodesign.com" size="lg" className="max-sm:flex-1 max-sm:min-w-[180px]">
            Agenda una llamada
          </Button>
          <Button href="mailto:hola@innodesign.com" variant="ghost" size="lg" className="max-sm:flex-1 max-sm:min-w-[180px]">
            hola@innodesign.com
          </Button>
        </div>
      </div>
    </section>
  );
}
