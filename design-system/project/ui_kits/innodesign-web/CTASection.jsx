// CTASection.jsx
function CTASection() {
  return (
    <section className="iw-cta" id="contact">
      <div className="iw-cta__frame">
        <span className="iw-corner c1"/><span className="iw-corner c2"/>
        <span className="iw-corner c3"/><span className="iw-corner c4"/>
        <div className="iw-label">08. APLICACIONES</div>
        <h2>¿Construimos algo juntos?</h2>
        <p>Contanos qué necesitás. Te respondemos con un plan concreto — sin buzzwords, sin promesas.</p>
        <div className="iw-cta__actions">
          <button className="iw-btn iw-btn--primary"><span className="iw-btn__prefix">&gt;</span> agendar llamada</button>
          <a href="mailto:hola@innodesign.dev" className="iw-btn iw-btn--ghost">hola@innodesign.dev</a>
        </div>
      </div>
    </section>
  );
}
window.CTASection = CTASection;
