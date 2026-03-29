const targetAudience = [
  "Empresas com atendimento comercial ativo",
  "Equipes de suporte e pós-venda",
  "Operações que precisam de histórico e controle",
  "Empresas com múltiplos atendentes",
  "Negócios que querem profissionalizar o relacionamento com clientes",
  "Estruturas que precisam de mais organização sem complicar a operação",
];

export default function ChatVBATarget() {
  return (
    <section className="chat-section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">PARA QUEM É</span>
          <h2>Uma solução pensada para operação real</h2>
          <p>
            O Chat VBA foi desenhado para negócios que precisam atender melhor,
            ganhar organização e criar um fluxo de comunicação mais confiável.
          </p>
        </div>

        <div className="cards-grid cards-grid-2">
          <article className="card-soft">
            <h3>Ideal para empresas que precisam:</h3>
            <ul className="feature-list">
              {targetAudience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-soft">
            <h3>O diferencial da VBA Solutions</h3>
            <p>
              Não entregamos apenas uma ferramenta. Entregamos uma solução
              implantada com visão prática, suporte próximo e foco no que
              realmente importa: melhorar a operação da empresa.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}