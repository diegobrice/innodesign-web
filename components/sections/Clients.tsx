import { clients } from '@/data/content';

export function Clients() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container">
        <p className="text-center font-mono text-[11px] text-accent tracking-[0.14em] uppercase mb-10">
          &gt; EMPRESAS QUE CONFÍAN EN NOSOTROS
        </p>
        <div className="clients__logos flex justify-between items-center flex-wrap gap-10">
          {clients.map((name) => (
            <span
              key={name}
              className="client-logo font-mono text-[0.95rem] font-medium text-text-subtle tracking-[0.02em] transition-colors duration-300 cursor-default hover:text-accent"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
