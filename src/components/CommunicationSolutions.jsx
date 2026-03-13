const items = [
  {
    title: "Multiplataforma",
    text: "Centralize atendimentos em um único painel com histórico, organização por equipes e operação mais profissional.",
    price: "Planos a partir de R$150/mês",
  },
  {
    title: "Integração via API",
    text: "Conecte a comunicação ao seu CRM, sistema ou automação sem necessidade de utilizar interface de atendimento.",
    price: "R$80 por número/mês",
  },
  {
    title: "Backup Corporativo",
    text: "Preserve o histórico de conversas corporativas por até 3 anos a partir da ativação do serviço.",
    price: "R$50 por número/mês",
  },
];

export default function CommunicationSolutions() {
  return (
    <section id="comunicacao" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">Comunicação empresarial</span>
          <h2 className="fw-bold mt-2">Atendimento, integração e retenção de histórico</h2>
          <p className="text-muted section-text mx-auto">
            Soluções voltadas para empresas que precisam estruturar atendimento,
            integrar canais ou garantir rastreabilidade das conversas.
          </p>
        </div>

        <div className="row g-4">
          {items.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card comm-card h-100 border-0 shadow-sm">
                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="fw-bold mb-3">{item.title}</h4>
                  <p className="text-muted mb-4">{item.text}</p>
                  <div className="mt-auto">
                    <div className="price-tag">{item.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://wa.me/5518996076660"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar proposta
          </a>
        </div>
      </div>
    </section>
  );
}
