import partners from "../../data/partners";

export default function PartnersSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">RELACIONAMENTO E CONFIANÇA</span>
          <h2>Quem confia e cresce com a VBA Solutions</h2>
          <p>
            Cada marca abaixo representa uma parceria importante dentro da nossa
            trajetória. Mais do que clientes, são empresas que confiam no nosso
            trabalho para manter sua estrutura tecnológica mais organizada,
            segura e eficiente.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <div className="partner-logo-wrap">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="partner-card-content">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
                {partner.importance && (
                  <span className="partner-tag">{partner.importance}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
