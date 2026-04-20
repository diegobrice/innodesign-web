import { clients } from '@/data/content';

export function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <p className="clients__title">Empresas que confían en nosotros</p>
        <div className="clients__logos">
          {clients.map((name) => (
            <span key={name} className="client-logo">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
