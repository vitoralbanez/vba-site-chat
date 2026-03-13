import React from "react";

const services = [
  {
    title: "Contratos de prestação de serviços",
    text: "Atendimento recorrente para empresas que precisam de acompanhamento técnico, suporte próximo e continuidade operacional.",
    icon: "🛠️",
  },
  {
    title: "Servidores e infraestrutura",
    text: "Implantação, manutenção e gerenciamento de servidores, ambientes corporativos e recursos críticos da operação.",
    icon: "🖥️",
  },
  {
    title: "Gerenciamento de rede",
    text: "Organização de rede, Wi-Fi corporativo, VLAN, roteamento, firewall e estabilidade para o ambiente da empresa.",
    icon: "🌐",
  },
  {
    title: "Backup e continuidade",
    text: "Estratégias para proteger dados, reduzir riscos e manter a empresa funcionando mesmo diante de falhas.",
    icon: "💾",
  },
  {
    title: "Monitoramento e suporte",
    text: "Acompanhamento técnico com foco em prevenção, identificação rápida de falhas e apoio ao dia a dia da operação.",
    icon: "📡",
  },
  {
    title: "Consultoria e projetos",
    text: "Apoio na melhoria, reorganização e implantação de soluções em TI conforme a realidade de cada empresa.",
    icon: "📋",
  },
];

const chatFeatures = [
  "Múltiplos atendentes na mesma operação",
  "Histórico centralizado de conversas",
  "Mais controle sobre o atendimento da equipe",
  "Estrutura profissional para empresas",
];

const plans = [
  {
    name: "Plano 1",
    channels: 1,
    users: 5,
    price: "R$ 150",
    featured: false,
  },
  {
    name: "Plano 2",
    channels: 2,
    users: 7,
    price: "R$ 250",
    featured: true,
  },
  {
    name: "Plano 3",
    channels: 3,
    users: 9,
    price: "R$ 300",
    featured: false,
  },
  {
    name: "Plano 4",
    channels: 4,
    users: 11,
    price: "R$ 350",
    featured: false,
  },
  {
    name: "Plano 5",
    channels: 5,
    users: 15,
    price: "R$ 420",
    featured: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Entendimento da necessidade",
    text: "Avaliamos o momento da sua empresa para propor a estrutura mais adequada.",
  },
  {
    number: "02",
    title: "Implantação e organização",
    text: "Montamos o ambiente, organizamos a operação e deixamos tudo pronto para uso.",
  },
  {
    number: "03",
    title: "Acompanhamento contínuo",
    text: "Seguimos apoiando sua empresa com suporte, evolução e continuidade do serviço.",
  },
];

const clientLogos = [
  { name: "CrossHard", src: "/clientes/crosshard.png" },
  { name: "NutriTruck", src: "/clientes/nutritruck.png" },
  { name: "Eservice", src: "/clientes/eservice.png" },
  { name: "Haddad", src: "/clientes/haddad.png" },
  { name: "JBFenix", src: "/clientes/JBFenix.png" },
  { name: "Evidence", src: "/clientes/evidence.png" },
  // { name: "Cliente 6", src: "/clientes/cliente6.png" },
];

export default function App() {
  return (
    <div style={{ backgroundColor: "#f4f7fb", color: "#0f172a" }}>
      <style>
        {`
          @keyframes scrollClients {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .client-logo-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#081226",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container py-2">
          <a
            href="#inicio"
            className="navbar-brand m-0"
            style={{ textDecoration: "none" }}
          >
            <img
              src="/logo/vba_logo_inline_com-icone_branco.png"
              alt="VBA Solutions"
              style={{
                height: "42px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          <div className="d-flex gap-2">
            <a
              className="btn btn-outline-light"
              href="https://chat.vbasolutions.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Entrar no Chat
            </a>
            <a
              className="btn"
              href="https://wa.me/5518996076660?text=Ol%C3%A1%2C%20quero%20conhecer%20os%20servi%C3%A7os%20da%20VBA%20Solutions"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                color: "#fff",
                border: "none",
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </nav>

      <section
        id="inicio"
        className="py-5"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(37,99,235,0.16), transparent 30%), linear-gradient(135deg, #081226 0%, #0f1f3d 55%, #12356b 100%)",
          color: "#fff",
        }}
      >
        <div className="container py-4 py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span
                className="d-inline-block px-3 py-2 rounded-pill mb-3"
                style={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  color: "#dbeafe",
                  fontSize: "0.95rem",
                }}
              >
                Tecnologia e suporte para empresas
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Soluções em TI para empresas que precisam de organização,
                continuidade e resultado
              </h1>

              <p
                className="lead mb-4"
                style={{ color: "#cbd5e1", maxWidth: "720px" }}
              >
                A VBA Solutions atua com contratos de prestação de serviços em
                TI, gerenciamento de servidores, redes, backup, suporte técnico
                e soluções de atendimento corporativo como o VBA Chat.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a
                  href="#servicos"
                  className="btn btn-light btn-lg fw-semibold"
                  style={{ color: "#0f172a" }}
                >
                  Conhecer serviços
                </a>

                <a href="#vba-chat" className="btn btn-outline-light btn-lg">
                  Conhecer o VBA Chat
                </a>
              </div>

              <div className="row g-3 mt-1">
                <div className="col-sm-4">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="fw-bold fs-5">Contratos</div>
                    <small style={{ color: "#cbd5e1" }}>
                      de suporte e operação
                    </small>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="fw-bold fs-5">Infraestrutura</div>
                    <small style={{ color: "#cbd5e1" }}>
                      servidores, rede e backup
                    </small>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div
                    className="p-3 rounded-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="fw-bold fs-5">VBA Chat</div>
                    <small style={{ color: "#cbd5e1" }}>
                      atendimento corporativo
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-4 p-lg-5 rounded-4 shadow-lg"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="mb-3">
                  <span className="badge text-bg-primary">
                    Atuação consultiva e prática
                  </span>
                </div>

                <h3 className="fw-bold mb-3">
                  Uma estrutura de TI mais organizada para o dia a dia da sua
                  empresa
                </h3>

                <p className="text-secondary mb-4">
                  Da operação técnica aos canais de atendimento, a proposta da
                  VBA Solutions é ajudar sua empresa a trabalhar com mais
                  estabilidade, visibilidade e continuidade.
                </p>

                <ul className="list-unstyled mb-0">
                  <li className="mb-3">✅ Contratos de suporte técnico</li>
                  <li className="mb-3">✅ Gerenciamento de servidores e rede</li>
                  <li className="mb-3">✅ Backup e continuidade</li>
                  <li className="mb-3">
                    ✅ Atendimento corporativo com VBA Chat
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-5 bg-white">
        <div className="container py-2">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Serviços da VBA Solutions</h2>
            <p className="text-secondary mb-0">
              Soluções pensadas para empresas que precisam de suporte técnico,
              infraestrutura organizada e acompanhamento contínuo.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div className="col-md-6 col-lg-4" key={service.title}>
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <div
                      className="mb-3 d-inline-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: "54px",
                        height: "54px",
                        backgroundColor: "#dbeafe",
                        fontSize: "24px",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-secondary mb-0">{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white" style={{ overflow: "hidden" }}>
        <div className="container py-2">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Empresas que confiam na VBA Solutions</h2>
            <p className="text-secondary mb-0">
              Alguns clientes e parceiros que fazem parte da nossa trajetória.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div
              className="client-logo-track"
              style={{
                display: "flex",
                width: "max-content",
                animation: "scrollClients 30s linear infinite",
              }}
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="d-flex align-items-center justify-content-center mx-3"
                  style={{
                    minWidth: "180px",
                    height: "100px",
                    backgroundColor: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "18px 24px",
                    boxShadow: "0 0.5rem 1rem rgba(15, 23, 42, 0.06)",
                  }}
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    title={client.name}
                    style={{
                      maxWidth: "140px",
                      maxHeight: "52px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      filter: "grayscale(100%)",
                      opacity: 0.85,
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                      e.currentTarget.style.opacity = "1";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)";
                      e.currentTarget.style.opacity = "0.85";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vba-chat" className="py-5">
        <div className="container py-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge text-bg-primary mb-3">
                Produto em destaque
              </span>
              <h2 className="fw-bold mb-3">Conheça o VBA Chat</h2>
              <p className="text-secondary mb-4">
                O VBA Chat é a solução da VBA Solutions para empresas que
                precisam organizar o atendimento via WhatsApp com mais controle,
                histórico e estrutura de equipe.
              </p>

              <ul className="list-unstyled">
                {chatFeatures.map((item) => (
                  <li key={item} className="mb-3 text-secondary">
                    ✅ {item}
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <a href="#planos" className="btn btn-primary btn-lg">
                  Ver planos
                </a>

                <a
                  href="https://chat.vbasolutions.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-primary btn-lg"
                >
                  Entrar na plataforma
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="p-4 p-lg-5 rounded-4 shadow-sm"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <div className="fw-bold">Exemplo de operação</div>
                    <small className="text-secondary">
                      Atendimento mais organizado
                    </small>
                  </div>
                  <span className="badge text-bg-success">Online</span>
                </div>

                <div className="mb-3">
                  <div
                    className="p-3 rounded-4 mb-3"
                    style={{ backgroundColor: "#eff6ff" }}
                  >
                    <div className="fw-semibold">Cliente</div>
                    <div className="text-secondary">
                      Olá, gostaria de saber mais sobre a solução de
                      atendimento.
                    </div>
                  </div>

                  <div
                    className="p-3 rounded-4 ms-auto"
                    style={{
                      backgroundColor: "#dbeafe",
                      maxWidth: "85%",
                    }}
                  >
                    <div className="fw-semibold">Equipe VBA</div>
                    <div className="text-secondary">
                      Claro! Posso te apresentar os planos do VBA Chat e a
                      estrutura ideal para sua empresa.
                    </div>
                  </div>
                </div>

                <hr />

                <div className="row text-center g-3 mt-1">
                  <div className="col-4">
                    <div className="fw-bold fs-4 text-primary">1+</div>
                    <small className="text-secondary">
                      Canal centralizado
                    </small>
                  </div>
                  <div className="col-4">
                    <div className="fw-bold fs-4 text-primary">5+</div>
                    <small className="text-secondary">
                      Usuários por plano
                    </small>
                  </div>
                  <div className="col-4">
                    <div className="fw-bold fs-4 text-primary">100%</div>
                    <small className="text-secondary">Mais controle</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container py-2">
          <div className="row align-items-center g-5">
            <div className="col-lg-4">
              <h2 className="fw-bold mb-3">Como trabalhamos</h2>
              <p className="text-secondary mb-0">
                A VBA Solutions busca unir visão prática, proximidade e
                organização para entregar soluções aderentes à realidade da
                empresa.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row g-4">
                {steps.map((step) => (
                  <div className="col-md-4" key={step.number}>
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                      <div className="card-body p-4">
                        <div
                          className="fw-bold mb-3"
                          style={{
                            color: "#2563eb",
                            fontSize: "2rem",
                            lineHeight: 1,
                          }}
                        >
                          {step.number}
                        </div>
                        <h5 className="fw-bold">{step.title}</h5>
                        <p className="text-secondary mb-0">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-5">
        <div className="container py-2">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Planos VBA Chat</h2>
            <p className="text-secondary mb-0">
              Escolha a estrutura mais adequada para o tamanho da sua operação.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {plans.map((plan) => (
              <div className="col-md-6 col-lg-4" key={plan.name}>
                <div
                  className="card h-100 border-0 rounded-4 shadow-sm"
                  style={{
                    transform: plan.featured ? "scale(1.02)" : "none",
                    border: plan.featured ? "2px solid #2563eb" : "none",
                    boxShadow: plan.featured
                      ? "0 1rem 3rem rgba(37, 99, 235, 0.15)"
                      : undefined,
                  }}
                >
                  <div className="card-body p-4 text-center">
                    {plan.featured && (
                      <span className="badge text-bg-primary mb-3">
                        Mais procurado
                      </span>
                    )}

                    <h4 className="fw-bold">{plan.name}</h4>

                    <div
                      className="my-3 fw-bold"
                      style={{ fontSize: "2rem", color: "#2563eb" }}
                    >
                      {plan.price}
                    </div>

                    <p className="mb-2">
                      <strong>{plan.channels}</strong>{" "}
                      {plan.channels === 1 ? "canal" : "canais"}
                    </p>

                    <p className="mb-4">
                      <strong>{plan.users}</strong>{" "}
                      {plan.users === 1 ? "usuário" : "usuários"}
                    </p>

                    <a
                      href={`https://wa.me/5518996076660?text=${encodeURIComponent(
                        `Olá, quero conhecer o ${plan.name} do VBA Chat`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn w-100 ${
                        plan.featured ? "btn-primary" : "btn-outline-primary"
                      }`}
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
        style={{
          background: "linear-gradient(135deg, #0f172a, #111827)",
          color: "#fff",
        }}
      >
        <div className="container py-2">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-2">
                Vamos estruturar melhor a TI e o atendimento da sua empresa?
              </h2>
              <p className="mb-0" style={{ color: "#cbd5e1" }}>
                Fale com a VBA Solutions para conhecer os serviços e entender
                qual estrutura faz mais sentido para sua operação.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end">
              <a
                href="https://wa.me/5518996076660?text=Ol%C3%A1%2C%20quero%20uma%20proposta%20da%20VBA%20Solutions"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg me-2 mb-2"
              >
                Solicitar proposta
              </a>

              <a
                href="https://chat.vbasolutions.com.br"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-lg mb-2"
              >
                Entrar no Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: "#050b16", color: "#cbd5e1" }}>
        <div className="container py-4 text-center">
          <img
            src="/logo/vba_logo_inline_com-icone_branco.png"
            alt="VBA Solutions"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
              marginBottom: "12px",
            }}
          />

          <p className="mb-1">Soluções em TI para sua empresa</p>
          <p className="mb-0">
            (18) 99607-6660 • vitor.albanez@vbasolutions.com.br
          </p>
        </div>
      </footer>
    </div>
  );
}
