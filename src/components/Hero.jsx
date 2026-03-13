export default function Hero() {
  return (
    <section id="inicio" className="hero-section py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="hero-badge mb-3 d-inline-block">
              Tecnologia para empresas
            </span>

            <h1 className="display-5 fw-bold mb-3">
              Soluções em TI, infraestrutura e comunicação empresarial
            </h1>

            <p className="lead text-muted mb-4">
              Atendimento técnico, servidores, redes, backup corporativo e
              plataformas de comunicação para empresas que precisam de operação
              estável, suporte confiável e continuidade.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a
                href="https://wa.me/5518996076660"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar atendimento
              </a>

              <a href="#servicos" className="btn btn-outline-dark btn-lg">
                Ver serviços
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-card shadow-sm">
              <h5 className="fw-bold mb-3">O que entregamos</h5>

              <div className="hero-list">
                <div className="hero-list-item">Infraestrutura e servidores</div>
                <div className="hero-list-item">Redes, VLAN e firewall</div>
                <div className="hero-list-item">Backup e continuidade</div>
                <div className="hero-list-item">Atendimento omnichannel</div>
                <div className="hero-list-item">Integrações via API</div>
                <div className="hero-list-item">
                  Retenção de histórico corporativo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
