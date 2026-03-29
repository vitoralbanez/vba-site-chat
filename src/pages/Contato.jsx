import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection";
import ContactCTA from "../components/home/FinalCTA";

export default function Contact() {
  return (
    <>
      <ContactHero
        kicker="CONTATO"
        title="Fale com a VBA Solutions"
        text="Estamos prontos para entender sua necessidade e indicar a melhor solução para o seu negócio."
      />

      <ContactSection />

      <ContactCTA
        title="Prefere falar direto com a nossa equipe?"
        text="Atendimento próximo, consultivo e focado em resultado."
        buttonText="Chamar no WhatsApp"
        buttonLink="https://wa.me/5518996076660"
      />
    </>
  );
}