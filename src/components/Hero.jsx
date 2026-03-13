import logo from "../assets/images/vba_logo_inline_com-icone_branco.png";

export default function Hero() {
  return (
    <section id="inicio" className="hero-section py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-4">
          
          {/* LADO ESQUERDO */}
          <div className="col-lg-6">
            <span className="hero-badge mb-3 d-inline-block">
              Tecnologia para empresas
            </span>

            <h1 className="display-5 fw-bold mb-3 text-white">
              Soluções em TI, infraestrutura e comunicação empresarial
            </h1>

            <p className="lead text-white-50 mb-4">
              Estrutura, suporte técnico e plataformas de comunicação para
              empresas que precisam de estabilidade, segurança e continuidade
              operacional.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a
                href="https://wa.me/5518996076660"
                className="btn btn-light btn-lg"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>

              <a
                href="#servicos"
                className="btn btn-outline-light btn-lg"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* LADO DIREITO */}
          <div className="col-lg-6">
            <div className="hero-side-box">

              <div className="text-center mb-4">
                <img
                  src={logo}
                  alt="VBA Solutions"
                  className="hero-logo"
                />
              </div>

              <div className="hero-card shadow-sm">

                <h5 className="fw-bold mb-3">
                  Soluções que oferecemos
                </h5>

                <div className="hero-list">

                  <strong>Infraestrutura de TI</strong>

                  <div className="hero-list-item">
                    Infraestrutura e servidores
                  </div>

                  <div className="hero-list-item">
                    Redes corporativas, VLAN e firewall
                  </div>

                  <div className="hero-list-item">
                    Backup e continuidade operacional
                  </div>

                  <div className="hero-list-item">
                    Suporte técnico empresarial
                  </div>

                  <strong className="mt-3 d-block">
                    Comunicação empresarial
                  </strong>

                  <div className="hero-list-item">
                    Atendimento omnichannel
                  </div>

                  <div className="hero-list-item">
                    Integrações via API
                  </div>

                  <div className="hero-list-item">
                    Backup corporativo de conversas
                  </div>

                  <div className="hero-list-item">
                    Retenção de histórico por até 3 anos
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
