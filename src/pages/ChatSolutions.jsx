import { Link } from "react-router-dom";
import ChatHero from "../components/ChatHero";

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
      <ChatHero />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-8">
              <div className="h-100">
                <span className="badge bg-primary-subtle text-primary mb-3">
                  VBA Solutions • Chat, API e Backup
                </span>

                <h2 className="fw-bold mb-3">
                  Atendimento profissional, integrações e histórico seguro para sua empresa
                </h2>

                <p className="text-muted mb-4">
                  Centralize conversas, organize equipes, preserve mensagens e evolua sua operação
                  com uma estrutura pronta para atendimento, automação e retenção de histórico.
                </p>

                <div className="d-flex flex-wrap gap-2">
                  <a href="#planos" className="btn btn-primary btn-lg">
                    Ver planos
                  </a>

                  <a
                    href="https://wa.me/5518996076660"
                    className="btn btn-outline-primary btn-lg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar no WhatsApp
                  </a>

                  <Link to="/" className="btn btn-outline-secondary btn-lg">
                    Voltar para Home
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">O que sua empresa ganha</h4>

                  <ul className="list-group list-group-flush">
                    <li className="list-group-item px-0">Centralização do atendimento</li>
                    <li className="list-group-item px-0">Mais de um usuário operando por canal</li>
                    <li className="list-group-item px-0">Histórico preservado</li>
                    <li className="list-group-item px-0">Integrações via API</li>
                    <li className="list-group-item px-0">Base pronta para automações futuras</li>
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
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">Chat Empresarial</h4>
                  <p className="text-muted mb-0">
                    Centralize WhatsApp e outros canais em um único ambiente com histórico,
                    organização, múltiplos atendentes e visão operacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">API para Integrações</h4>
                  <p className="text-muted mb-0">
                    Conecte CRM, sistema interno, automações e fluxos personalizados para ganhar
                    escala, controle e velocidade no atendimento.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-3">Backup de Conversas</h4>
                  <p className="text-muted mb-0">
                    Preserve mensagens, contatos e histórico corporativo para evitar perda de
                    informação quando aparelhos forem trocados, resetados ou substituídos.
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
              Estrutura simples, profissional e fácil de apresentar ao cliente.
            </p>
          </div>

          <div className="row g-4">
            {plans.map((plan, index) => (
              <div className="col-xl col-lg-4 col-md-6" key={plan.name}>
                <div className={`card h-100 shadow-sm border-0 ${index === 1 ? "border border-primary" : ""}`}>
                  <div className="card-body d-flex flex-column p-4">
                    {index === 1 && (
                      <span className="badge bg-primary mb-3">Mais vendido</span>
                    )}

                    <h4 className="fw-bold">{plan.name}</h4>
                    <p className="mb-2">{plan.channels}</p>
                    <p className="mb-2">{plan.users}</p>
                    <p className="mb-3 text-muted">Usuário extra: R$ 10,00</p>

                    <h3 className="text-primary fw-bold mt-auto">{plan.price}</h3>

                    <a
                      href="https://wa.me/5518996076660"
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

      <section className="py-5">
        <div className="container">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-lg-5 text-center">
              <h2 className="fw-bold mb-3">Quer apresentar essa solução para um cliente?</h2>
              <p className="text-muted mb-4">
                Montamos a estrutura ideal para sua operação, seja para atendimento, integração via
                API ou retenção de histórico corporativo.
              </p>

              <div className="d-flex justify-content-center flex-wrap gap-3">
                <a
                  href="https://wa.me/5518996076660"
                  className="btn btn-primary btn-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Solicitar apresentação
                </a>

                <Link to="/" className="btn btn-outline-secondary btn-lg">
                  Conhecer a VBA Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}