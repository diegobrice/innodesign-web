import { faqs } from '@/data/content';

export function FAQ() {
  return (
    <section id="faq">
      <div className="container faq__inner">
        <div className="section-header section-header--left">
          <span className="eyebrow">[ 06 ] · FAQ</span>
          <h2>Resolvemos tus dudas</h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq) => (
            <details key={faq.id} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
