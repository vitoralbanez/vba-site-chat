const plans = [
  {
    name: "Starter",
    price: "Sob consulta",
    description: "Ideal para empresas que querem começar com atendimento centralizado e automações iniciais.",
    features: [
      "Implantação inicial",
      "Organização do atendimento",
      "Painel centralizado",
      "Suporte básico",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "Sob consulta",
    description: "Plano indicado para operações que precisam de mais controle, produtividade e evolução comercial.",
    features: [
      "Tudo do Starter",
      "Fluxos e automações",
      "Ajustes operacionais",
      "Acompanhamento consultivo",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    description: "Para empresas que buscam uma solução mais robusta, personalizada e alinhada ao crescimento da operação.",
    features: [
      "Tudo do Professional",
      "Projeto sob medida",
      "Integrações estratégicas",
      "Suporte prioritário",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">PLANOS</span>
          <h2>Escolha o plano ideal para o momento da sua operação</h2>
          <p>
            Estruturamos o Chat VBA Solutions para atender desde empresas que estão
            começando sua organização digital até operações que exigem automação,
            escala e personalização.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`pricing-card ${plan.highlight ? "pricing-card--highlight" : ""}`}
            >
              <div className="pricing-card__top">
                <h3>{plan.name}</h3>
                <div className="pricing-price">{plan.price}</div>
                <p>{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                className="btn btn-accent"
                href="https://wa.me/5518996076660"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar proposta
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
