import logo from "../assets/images/vba_logo_inline_com-icone_branco.png";

export default function ChatHero() {
  return (
    <section className="hero-section py-5">
      <div className="container py-lg-5">

        <div className="row align-items-center g-4">

          <div className="col-lg-6">

            <span className="hero-badge mb-3 d-inline-block">
              Atendimento empresarial
            </span>

            <h1 className="display-5 fw-bold mb-3 text-white">
              Plataforma de atendimento para WhatsApp e múltiplos canais
            </h1>

            <p className="lead text-white-50 mb-4">
              Centralize conversas da sua empresa, organize atendentes,
              mantenha histórico e melhore a experiência do cliente.
            </p>

            <div className="d-flex gap-3 flex-wrap">

              <a
                href="https://wa.me/5518996076660"
                className="btn btn-light btn-lg"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar demonstração
              </a>

              <a
                href="#planos"
                className="btn btn-outline-light btn-lg"
              >
                Ver planos
              </a>

            </div>

          </div>

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
                  Recursos da plataforma
                </h5>

                <div className="hero-list">

                  <div className="hero-list-item">
                    WhatsApp conectado com múltiplos atendentes
                  </div>

                  <div className="hero-list-item">
                    Histórico completo de conversas
                  </div>

                  <div className="hero-list-item">
                    Organização por equipes
                  </div>

                  <div className="hero-list-item">
                    Atendimento omnichannel
                  </div>

                  <div className="hero-list-item">
                    Integrações via API
                  </div>

                  <div className="hero-list-item">
                    Backup corporativo de mensagens
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