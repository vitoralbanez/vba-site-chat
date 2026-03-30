import "../../styles/partners.css";

export default function PartnersHero({
  kicker = "PARCEIROS",
  title = "Empresas e marcas que caminham junto com a VBA Solutions",
  text = "Valorizamos cada cliente, parceiro e fornecedor que fortalece nossa trajetória. Mais do que contratos, construímos relações de confiança, suporte e crescimento em conjunto.",
}) {
  return (
    <section className="partners-hero">
      <div className="container">
        <div className="partners-hero__content">
          <span className="section-kicker">{kicker}</span>

          <h1 className="partners-hero__title">{title}</h1>

          <p className="partners-hero__text">{text}</p>
        </div>
      </div>
    </section>
  );
}
