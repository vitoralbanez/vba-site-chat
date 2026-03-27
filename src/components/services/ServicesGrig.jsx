import services from "../../data/services";

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">SERVIÇOS</span>
          <h2>Soluções que sustentam a operação da sua empresa</h2>
          <p>
            Atuamos com foco em infraestrutura, segurança, estabilidade e
            automação para empresas que não podem parar.
          </p>
        </div>

        <div className="cards-grid cards-grid-3">
          {services.map((service) => (
            <article className="card-soft" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {service.title === "Chat VBA" && (
                <a href="/chat-vba" className="text-link">
                  Conhecer solução
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}