export default function ContactSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="contact-v2">
          <div className="contact-v2__info">
            <span className="section-kicker">ATENDIMENTO</span>
            <h2>Entre em contato com a VBA Solutions</h2>
            <p>
              Atuamos com soluções em infraestrutura, redes, atendimento digital,
              organização operacional e implantação de ferramentas que ajudam empresas
              a trabalharem com mais estabilidade, segurança e eficiência.
            </p>

            <div className="contact-v2__list">
              <div className="contact-v2__item">
                <strong>WhatsApp</strong>
                <a
                  href="https://wa.me/5518996076660"
                  target="_blank"
                  rel="noreferrer"
                >
                  (18) 99607-6660
                </a>
              </div>

              <div className="contact-v2__item">
                <strong>E-mail</strong>
                <a href="mailto:vitor.albanez@vbasolutions.com.br">
                  vitor.albanez@vbasolutions.com.br
                </a>
              </div>

              <div className="contact-v2__item">
                <strong>Site</strong>
                <a
                  href="https://www.vbasolutions.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.vbasolutions.com.br
                </a>
              </div>
            </div>
          </div>

          <div className="contact-v2__card">
            <h3>Vamos conversar sobre o seu projeto</h3>
            <p>
              Se você precisa organizar o atendimento, melhorar sua estrutura de rede,
              implantar uma solução digital ou modernizar processos, podemos te ajudar.
            </p>

            <div className="contact-v2__actions">
              <a
                className="btn btn-primary"
                href="https://wa.me/5518996076660"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>

              <a
                className="btn btn-secondary"
                href="mailto:vitor.albanez@vbasolutions.com.br"
              >
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}