import "../styles/partners.css";
import Navbar from "../components/layout/Navbar";
import PageHero from "../components/partners/PartnersHero";
import PartnersSection from "../components/partners/PartnersSection";
import PartnersImportance from "../components/partners/PartnersImportance";
import ContactCTA from "../components/home/FinalCTA";

export default function PartnersPage() {
  return (
    <>
     
      <PageHero
        kicker="PARCEIROS"
        title="Empresas que caminham junto com a VBA Solutions"
        text="Valorizamos cada cliente, fornecedor e parceiro estratégico que fortalece nossa operação e amplia nossa capacidade de entrega."
      />

      <PartnersSection />
      <PartnersImportance />

      <ContactCTA
        title="Quer construir um projeto com a VBA Solutions?"
        text="Atuamos com proximidade, visão consultiva e compromisso com resultado."
        buttonText="Falar com a equipe"
        buttonLink="https://wa.me/5518996076660"
      />
    </>
  );
}