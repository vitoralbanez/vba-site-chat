const benefits = [
  {
    title: "Atendimento centralizado",
    text: "Concentre as conversas da empresa em um único painel e reduza a desorganização no dia a dia.",
  },
  {
    title: "Histórico completo",
    text: "Tenha registro das interações para facilitar acompanhamento, continuidade e gestão da equipe.",
  },
  {
    title: "Mais agilidade operacional",
    text: "Distribua melhor os atendimentos e reduza o tempo de resposta ao cliente.",
  },
  {
    title: "Gestão e visibilidade",
    text: "Acompanhe melhor a operação e tenha mais controle sobre o fluxo de atendimento.",
  },
  {
    title: "Ambiente profissional",
    text: "Padronize a comunicação da empresa e ofereça uma experiência mais organizada ao cliente.",
  },
  {
    title: "Implantação assistida",
    text: "A VBA Solutions entrega a estrutura pronta e alinhada com a necessidade da sua operação.",
  },
];

export default function ChatVBABenefits() {
  return (
    <section className="chat-section chat-section-soft">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">BENEFÍCIOS</span>
          <h2>Por que o Chat VBA se tornou nosso principal produto</h2>
          <p>
            Porque ele resolve uma dor real: empresas perdem tempo, histórico e
            eficiência quando o atendimento fica espalhado e sem processo.
          </p>
        </div>

        <div className="cards-grid cards-grid-3">
          {benefits.map((item) => (
            <article className="card-soft" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}