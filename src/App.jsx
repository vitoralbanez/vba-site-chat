import React from "react";

const plans = [
  {
    name: "Plano 1",
    channels: 1,
    users: 5,
    price: "R$ 150",
    highlight: false,
  },
  {
    name: "Plano 2",
    channels: 2,
    users: 7,
    price: "R$ 250",
    highlight: true,
  },
  {
    name: "Plano 3",
    channels: 3,
    users: 9,
    price: "R$ 300",
    highlight: false,
  },
  {
    name: "Plano 4",
    channels: 4,
    users: 11,
    price: "R$ 350",
    highlight: false,
  },
  {
    name: "Plano 5",
    channels: 5,
    users: 15,
    price: "R$ 420",
    highlight: false,
  },
];

const features = [
  {
    title: "Atendimento centralizado",
    description:
      "Concentre os contatos da empresa em um único ambiente e evite perda de informações.",
  },
  {
    title: "Múltiplos atendentes",
    description:
      "Distribua o atendimento entre vendedores, recepção ou suporte com mais organização.",
  },
  {
    title: "Histórico de conversas",
    description:
      "Tenha rastreabilidade das mensagens para acompanhamento comercial e operacional.",
  },
  {
    title: "Mais controle da operação",
    description:
      "Acompanhe o atendimento da equipe e reduza dependência de um único celular.",
  },
];

const steps = [
  {
    number: "01",
    title: "Escolha o plano",
    description:
      "Definimos o plano ideal conforme a quantidade de canais e usuários da sua operação.",
  },
  {
    number: "02",
    title: "Configuramos o ambiente",
    description:
      "A VBA Solutions prepara sua estrutura para começar a operar com mais controle.",
  },
  {
    number: "03",
    title: "Sua equipe começa a atender",
    description:
      "Com tudo configurado, seu time já pode atender com mais organização e produtividade.",
  },
];

export default function App() {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "linear-gradient(90deg, #0f172a, #1e293b)" }}
      >
        <div className="container py-2">
          <a className="navbar-brand fw-bold fs-4" href="#">
            VBA Chat
          </a>

          <div className="d-flex gap-2">
            <a
              className="btn btn-outline-light"
              href="https://chat.vbasolutions.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Entrar
            </a>
            <a
              className="btn btn-primary"
              href="https://wa.me/5518996076660"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <section
        className="py-5 py-lg-6"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          color: "#fff",
        }}
      >
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-light text-primary px-3 py-2 mb-3">
                Atendimento corporativo via WhatsApp
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Organize o atendimento da sua empresa com mais controle e
                agilidade
              </h1>

              <p className="lead mb-4" style={{ color: "#dbeafe" }}>
                O VBA Chat ajuda sua empresa a centralizar conversas, distribuir
                atendimentos entre a equipe e manter histórico organizado em um
                ambiente profissional.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://chat.vbasolutions.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light btn-lg text-primary fw-semibold"
                >
                  Acessar plataforma
                </a>

                <a
                  href="https://wa.me/5518996076660"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-lg"
                >
                  Solicitar proposta
                </a>
              </div>

              <div className="row mt-5 g-3">
                <div className="col-sm-4">
                  <div className="p-3 rounded-4 bg-white bg-opacity-10">
                    <div className="fw-bold fs-4">+ organização</div>
                    <small>Atendimento mais profissional</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="p-3 rounded-4 bg-white bg-opacity-10">
                    <div className="fw-bold fs-4">+ controle</div>
                    <small>Equipe e conversas centralizadas</small>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="p-3 rounded-4 bg-white bg-opacity-10">
                    <div className="fw-bold fs-4">+ histórico</div>
                    <small>Mensagens registradas</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4 p-lg-5 text-dark">
                  <div className="mb-3">
                    <span className="badge bg-primary-subtle text-primary">
                      Solução para empresas
                    </span>
                  </div>

                  <h3 className="fw-bold mb-3">
                    Transforme o WhatsApp em uma operação mais organizada
                  </h3>

                  <p className="text-secondary mb-4">
                    Ideal para equipes comerciais, atendimento, recepção e
                    suporte que precisam de mais estrutura no dia a dia.
                  </p>

                  <ul className="list-unstyled mb-4">
                    <li className="mb-3">✅ Mais de um atendente por operação</li>
                    <li className="mb-3">✅ Histórico centralizado</li>
                    <li className="mb-3">✅ Menos dependência de aparelho físico</li>
                    <li className="mb-3">✅ Implantação com apoio da VBA Solutions</li>
                  </ul>

                  <a
                    href="https://chat.vbasolutions.com.br"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-100"
                  >
                    Entrar no sistema
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Por que usar o VBA Chat</h2>
            <p className="text-secondary">
              Um ambiente pensado para empresas que precisam vender, atender e
              acompanhar conversas com mais organização.
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature) => (
              <div className="col-md-6 col-lg-3" key={feature.title}>
                <div className="card border-0 shadow-sm h-100 rounded-4">
                  <div className="card-body p-4">
                    <div
                      className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#dbeafe",
                        fontSize: "22px",
                      }}
                    >
                      💬
                    </div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-secondary mb-0">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-3">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h2 className="fw-bold mb-3">Como funciona</h2>
              <p className="text-secondary">
                A implantação é simples e focada em colocar sua operação para
                funcionar rápido, sem complicação.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="row g-4">
                {steps.map((step) => (
                  <div className="col-md-4" key={step.number}>
                    <div className="card h-100 border-0 shadow-sm rounded-4">
                      <div className="card-body p-4">
                        <div className="text-primary fw-bold fs-3 mb-3">
                          {step.number}
                        </div>
                        <h5 className="fw-bold">{step.title}</h5>
                        <p className="text-secondary mb-0">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white" id="planos">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Planos</h2>
            <p className="text-secondary">
              Escolha a estrutura ideal para o tamanho da sua operação.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {plans.map((plan) => (
              <div className="col-md-6 col-lg-4" key={plan.name}>
                <div
                  className={`card h-100 border-0 rounded-4 ${
                    plan.highlight ? "shadow-lg" : "shadow-sm"
                  }`}
                  style={
                    plan.highlight
                      ? { transform: "scale(1.02)", border: "2px solid #2563eb" }
                      : {}
                  }
                >
                  <div className="card-body p-4 text-center">
                    {plan.highlight && (
                      <span className="badge bg-primary mb-3">
                        Mais procurado
                      </span>
                    )}

                    <h4 className="fw-bold">{plan.name}</h4>

                    <div className="display-6 fw-bold text-primary my-3">
                      {plan.price}
                    </div>

                    <p className="mb-2">
                      <strong>{plan.channels}</strong> canal(is)
                    </p>
                    <p className="mb-4">
                      <strong>{plan.users}</strong> usuário(s)
                    </p>

                    <a
                      href="https://wa.me/5518996076660"
                      target="_blank"
                      rel="noreferrer"
                      className={`btn ${
                        plan.highlight ? "btn-primary" : "btn-outline-primary"
                      } w-100`}
                    >
                      Solicitar este plano
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-4 text-secondary">
            Usuário adicional: <strong>R$ 10,00 por usuário</strong>
          </p>
        </div>
      </section>

      <section
        className="py-5"
        style={{ background: "linear-gradient(135deg, #1e293b, #0f172a)" }}
      >
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-8 text-white">
              <h2 className="fw-bold mb-2">
                Pronto para profissionalizar seu atendimento?
              </h2>
              <p className="mb-0 text-light">
                Fale com a VBA Solutions e veja qual estrutura faz mais sentido
                para sua empresa.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <a
                href="https://wa.me/5518996076660"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg me-2 mb-2"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://chat.vbasolutions.com.br"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-lg mb-2"
              >
                Entrar no sistema
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="py-4 text-white"
        style={{ backgroundColor: "#020617" }}
      >
        <div className="container text-center">
          <h5 className="fw-bold mb-2">VBA Solutions</h5>
          <p className="mb-1">Tecnologia, organização e suporte para empresas</p>
          <p className="mb-0">
            (18) 99607-6660 • vitor.albanez@vbasolutions.com.br
          </p>
        </div>
      </footer>
    </div>
  );
}
