// Services.jsx
function Services() {
  const svc = [
    { n: "01", t: "Software web", d: "Aplicaciones a medida. Arquitectura escalable. Código limpio." },
    { n: "02", t: "Landing pages", d: "Páginas de alto rendimiento. Cargan en ms, convierten mejor." },
    { n: "03", t: "Apps móviles", d: "iOS + Android. Un solo equipo, una sola experiencia." },
    { n: "04", t: "E-commerce", d: "Tiendas rápidas, seguras y listas para escalar sin fricciones." },
  ];
  return (
    <section className="iw-svc" id="services">
      <header className="iw-section__head">
        <div className="iw-label">06. SISTEMA VISUAL / SERVICIOS</div>
        <h2>Qué construimos.</h2>
      </header>
      <div className="iw-svc__grid">
        {svc.map((s, i) => (
          <article key={s.n} className={`iw-card ${i === 0 ? "iw-card--accent" : ""}`}>
            {i === 0 && <>
              <span className="iw-corner c1"/><span className="iw-corner c2"/>
              <span className="iw-corner c3"/><span className="iw-corner c4"/>
            </>}
            <div className="iw-label">{s.n}</div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <div className="iw-card__foot">
              <span className="iw-chip"><span className="iw-dot g"/>status: online</span>
              <a className="iw-card__more">→ ver</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
window.Services = Services;
