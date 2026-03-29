export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      text: "Entendemos o cenário atual, os gargalos e a necessidade real da empresa.",
    },
    {
      number: "02",
      title: "Projeto",
      text: "Definimos a solução ideal com visão técnica, comercial e operacional.",
    },
    {
      number: "03",
      title: "Implantação",
      text: "Executamos a entrega com padronização, organização e foco em estabilidade.",
    },
    {
      number: "04",
      title: "Evolução",
      text: "Acompanhamos o ambiente para manter desempenho, segurança e crescimento.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">COMO TRABALHAMOS</span>
          <h2>Processo claro para entregar com segurança e organização</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={index}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}