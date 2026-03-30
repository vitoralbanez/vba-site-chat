import { Link } from "react-router-dom";

export default function FinalCTA({
  kicker = "VAMOS CONVERSAR",
  title = "Sua empresa precisa de mais organização, estabilidade e suporte técnico confiável?",
  text = "Fale com a VBA Solutions e vamos desenhar a estrutura certa para o seu cenário.",
  buttonText = "Solicitar atendimento",
  buttonLink = "https://wa.me/5518996076660",
}) {
  const isExternalLink = /^(https?:|mailto:|tel:)/.test(buttonLink);

  return (
    <section className="cta-final">
      <div className="container">
        <div className="cta-final__box">
          <div>
            <span className="section-kicker section-kicker--light">
              {kicker}
            </span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div className="cta-final__actions">
            {isExternalLink ? (
              <a
                href={buttonLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent"
              >
                {buttonText}
              </a>
            ) : (
              <Link to={buttonLink} className="btn btn-accent">
                {buttonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
