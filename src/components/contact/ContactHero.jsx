import { MessageCircle, Mail, Globe } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="contact-hero__grid">
          <div className="contact-hero__content">
            <span className="contact-hero__kicker">CONTATO</span>
            <h1>Vamos conversar sobre a solução ideal para a sua empresa</h1>
            <p>
              A VBA Solutions atua com visão consultiva, proximidade no atendimento
              e foco em resultado. Entre em contato para entender como podemos apoiar
              sua operação com mais organização, estabilidade e eficiência.
            </p>

            <div className="contact-hero__actions">
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

          <div className="contact-hero__panel">
            <div className="contact-hero__card">
              <div className="contact-hero__item">
                <div className="contact-hero__icon">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/5518996076660"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (18) 99607-6660
                  </a>
                </div>
              </div>

              <div className="contact-hero__item">
                <div className="contact-hero__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <strong>E-mail</strong>
                  <a href="mailto:vitor.albanez@vbasolutions.com.br">
                    vitor.albanez@vbasolutions.com.br
                  </a>
                </div>
              </div>

              <div className="contact-hero__item">
                <div className="contact-hero__icon">
                  <Globe size={20} />
                </div>
                <div>
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
          </div>
        </div>
      </div>
    </section>
  );
}