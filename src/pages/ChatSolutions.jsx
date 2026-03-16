import { Link } from "react-router-dom";

export default function ChatSolutions() {
  const plans = [
    { name: "Plano 1", channels: "1 canal", users: "5 usuários", price: "R$ 150/mês" },
    { name: "Plano 2", channels: "2 canais", users: "7 usuários", price: "R$ 250/mês" },
    { name: "Plano 3", channels: "3 canais", users: "9 usuários", price: "R$ 300/mês" },
    { name: "Plano 4", channels: "4 canais", users: "11 usuários", price: "R$ 350/mês" },
    { name: "Plano 5", channels: "5 canais", users: "15 usuários", price: "R$ 420/mês" },
  ];

  return (
    <>
      <section className="py-5 bg-light border-bottom">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary mb-3">
                VBA Solutions • Chat, API e Backup
              </span>

              <h1 className="display-5 fw-bold mb-3">
                Atendimento profissional, integrações e histórico seguro para sua empresa
              </h1>

              <p className="lead text-muted mb-4">
                Centralize conversas, organize equipes, preserve mensagens e evolua sua operação
                com uma estrutura pronta para atendimento, automação e retenção de histórico.
              </p>

              <div className="d-flex flex-wrap gap-2">
                <a href="#planos" className="btn btn-primary btn-lg">
                  Ver planos
                </a>

                <Link to="/" className="btn btn-outline-secondary btn-lg">
                  Voltar para Home
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">O que sua empresa ganha</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Centralização do atendimento</li>
                    <li className="list-group-item">Mais de um usuário operando</li>
                    <li className="list-group-item">Histórico preservado</li>
                    <li className="list-group-item">Integrações via API</li>
                    <li className="list-group-item">Base para automações futuras</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Soluções</h2>
            <p className="text-muted">
              Mais do que um chat. Uma operação comercial e de atendimento melhor organizada.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="fw-bold">Chat Empresarial</h4>
                  <p className="text-muted">
                    Centralize WhatsApp e canais de atendimento em um único ambiente com histórico,
                    organização e visão de equipe.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="fw-bold">API para Integrações</h4>
                  <p className="text-muted">
                    Conecte sistemas, CRM, automações e fluxos personalizados para ganhar escala e
                    agilidade no atendimento.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h4 className="fw-bold">Backup de Conversas</h4>
                  <p className="text-muted">
                    Preserve mensagens, contatos e histórico corporativo para não perder informação
                    quando aparelhos forem trocados ou resetados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Planos</h2>
            <p className="text-muted">
              Estrutura simples, profissional e fácil de apresentar para o cliente.
            </p>
          </div>

          <div className="row g-4">
            {plans.map((plan, index) => (
              <div className="col-lg col-md-6" key={plan.name}>
                <div className={`card h-100 shadow-sm ${index === 1 ? "border-primary" : ""}`}>
                  <div className="card-body d-flex flex-column">
                    {index === 1 && (
                      <span className="badge bg-primary mb-3">Mais vendido</span>
                    )}

                    <h4 className="fw-bold">{plan.name}</h4>
                    <p className="mb-2">{plan.channels}</p>
                    <p className="mb-2">{plan.users}</p>
                    <p className="mb-3">Usuário extra: R$ 10</p>

                    <h3 className="text-primary fw-bold mt-auto">{plan.price}</h3>

                    <a
                      href="https://wa.me/seunumero"
                      className="btn btn-primary mt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quero esse plano
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}