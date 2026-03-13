import services from "../data/services";

export default function Services() {
  return (
    <section id="servicos" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">Serviços</span>
          <h2 className="fw-bold mt-2">Soluções para a operação da sua empresa</h2>
          <p className="text-muted section-text mx-auto">
            Estrutura, suporte e tecnologia para ambientes que precisam de
            estabilidade, segurança e acompanhamento técnico próximo.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card service-card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="service-icon mb-3">{service.icon}</div>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted mb-0">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
