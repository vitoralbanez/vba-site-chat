export default function Contact() {
  return (
    <section id="contato" className="contact-section py-5">
      <div className="container">
        <div className="contact-box text-center">
          <span className="section-tag">Contato</span>
          <h2 className="fw-bold mt-2 mb-3">
            Vamos falar sobre a sua operação?
          </h2>
          <p className="text-muted mb-4 mx-auto section-text">
            Entre em contato para solicitar proposta, suporte técnico ou entender
            qual solução faz mais sentido para o seu ambiente.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://wa.me/5518996076660"
              className="btn btn-success btn-lg"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="mailto:vitor.albanez@vbasolutions.com.br"
              className="btn btn-outline-dark btn-lg"
            >
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
