import { Building2, MessageSquare } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="hero-v2">
      <div className="container hero-v2__grid">
        <div className="hero-v2__content">
          <span className="section-kicker">VBA SOLUTIONS</span>

          <h1>
            Tecnologia e comunicação para empresas que precisam de estrutura de
            verdade
          </h1>

          <p className="hero-v2__text">
            Organização de rede, cloud, automação e atendimento com visão
            profissional, implantação prática e foco em resultado.
          </p>

          <div className="hero-v2__actions">
            <a
              href="https://wa.me/5518996076660"
              target="_blank"
              rel="noreferrer"
              className="btn btn-accent"
            >
              Falar no WhatsApp
            </a>

            <a href="#servicos" className="btn btn-outline">
              Conhecer serviços
            </a>
          </div>

          <div className="hero-v2__highlights">
            <span className="highlight-item">Projetos sob medida</span>
            <span className="highlight-item">Atendimento consultivo</span>
            <span className="highlight-item">Foco em estabilidade</span>
          </div>
        </div>

        <div className="hero-v2__visual">
          <article className="hero-card">
            <div className="hero-card__icon">
              <Building2 size={24} />
            </div>
            <h3>Soluções para empresas</h3>
            <p>
              Estrutura, comunicação e tecnologia alinhadas para dar mais
              controle à operação.
            </p>
          </article>

          <article className="hero-card">
            <div className="hero-card__icon">
              <MessageSquare size={24} />
            </div>
            <h3>Atendimento organizado</h3>
            <p>
              Mais eficiência comercial e técnica com processos bem definidos e
              ferramentas certas.
            </p>
          </article>

          <div className="hero-floating-badge">
            Infra • Cloud • Backup • Suporte
          </div>
        </div>
      </div>
    </section>
  );
}
