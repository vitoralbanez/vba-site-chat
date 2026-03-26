import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Handshake, ShieldCheck, Cloud, Network } from "lucide-react";

const partners = [
  {
    icon: <Handshake size={26} />,
    title: "Parcerias Estratégicas",
    text: "Trabalhamos com fabricantes, plataformas e soluções que entregam estabilidade, suporte e evolução para o ambiente corporativo.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Segurança e Continuidade",
    text: "Selecionamos parceiros que ajudam a reduzir risco operacional, proteger dados e manter a operação sempre disponível.",
  },
  {
    icon: <Cloud size={26} />,
    title: "Cloud e Colaboração",
    text: "Integramos serviços modernos para acesso remoto, produtividade e centralização de ambientes em nuvem.",
  },
  {
    icon: <Network size={26} />,
    title: "Infraestrutura e Redes",
    text: "Atuamos com parceiros que fortalecem conectividade, telefonia, rede corporativa e expansão sustentável.",
  },
];

export default function Partners() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-v2">
          <div className="container">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-kicker">PARCEIROS</span>
              <h1 style={{ color: "var(--color-primary)", fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}>
                Conexões certas para entregar soluções melhores
              </h1>
              <p style={{ marginTop: 20 }}>
                A VBA Solutions valoriza parcerias que ampliam qualidade,
                confiança e resultado para cada projeto entregue.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">ECOSSISTEMA</span>
              <h2>Uma rede de apoio para projetos mais sólidos</h2>
              <p>
                Nossos parceiros fortalecem serviços, aceleram entregas e
                ajudam a construir ambientes mais profissionais para nossos clientes.
              </p>
            </div>

            <div className="partners-grid">
              {partners.map((partner, index) => (
                <article className="partner-card" key={index}>
                  <div className="partner-icon">{partner.icon}</div>
                  <h3>{partner.title}</h3>
                  <p>{partner.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}