import { Caret } from '@/components/ui/Caret';
import { StatusChip } from '@/components/ui/StatusChip';

export function Footer() {
  return (
    <footer className="footer bg-bg-elevated text-text-muted pt-24 border-t border-border">
      <div className="container grid grid-cols-[2fr_1fr_1fr_1fr] gap-16 pb-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div className="footer__brand">
          <a
            href="#"
            className="inline-flex items-baseline text-[1.2rem] font-bold text-text mb-4 tracking-[-0.03em]"
          >
            <span>inno</span>
            <span className="text-accent">design</span>
            <Caret />
          </a>
          <p className="font-mono text-[11px] text-text-subtle tracking-[0.14em] uppercase mb-5">
            {'// CODE WITH INTENT'}
          </p>
          <p className="text-[0.95rem] text-text-muted max-w-[340px] leading-[1.6]">
            Construimos productos digitales que hacen crecer tu negocio.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="font-mono text-text-subtle text-[11px] font-medium uppercase tracking-[0.14em] mb-5">Servicios</h3>
          <ul className="flex flex-col gap-3">
            <li><a href="#servicios" className="footer-link">Desarrollo Web</a></li>
            <li><a href="#servicios" className="footer-link">Apps Móviles</a></li>
            <li><a href="#servicios" className="footer-link">SaaS</a></li>
            <li><a href="#servicios" className="footer-link">Consultoría</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="font-mono text-text-subtle text-[11px] font-medium uppercase tracking-[0.14em] mb-5">Empresa</h3>
          <ul className="flex flex-col gap-3">
            <li><a href="#portfolio" className="footer-link">Portfolio</a></li>
            <li><a href="#proceso" className="footer-link">Proceso</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#contacto" className="footer-link">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="font-mono text-text-subtle text-[11px] font-medium uppercase tracking-[0.14em] mb-5">Contacto</h3>
          <ul className="flex flex-col gap-3">
            <li><a href="mailto:hola@innodesign.com" className="footer-link">hola@innodesign.com</a></li>
            <li><a href="#" className="footer-link">LinkedIn</a></li>
            <li><a href="#" className="footer-link">GitHub</a></li>
            <li><a href="#" className="footer-link">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-7">
        <div className="container flex justify-between items-center font-mono text-[11px] text-text-subtle tracking-[0.08em] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <span>© 2026 innodesign. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <StatusChip tone="success">status: shipping</StatusChip>
            <StatusChip tone="muted">v1.0.0</StatusChip>
          </div>
        </div>
      </div>
    </footer>
  );
}
