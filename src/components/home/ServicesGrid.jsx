import {
  Blocks,
  Phone,
  Network,
  Shield,
  Server,
  Headset,
  ChevronRight,
} from "lucide-react";
import services from "../../data/services";

const iconMap = {
  phone: Phone,
  network: Network,
  shield: Shield,
  workflow: Blocks,
  server: Server,
  support: Headset,
};

export default function ServicesGrid() {
  return (
    <section className="section section-soft" id="servicos">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">SERVIÇOS</span>
          <h2>Soluções pensadas para o cenário real da sua empresa</h2>
          <p>
            Cada projeto é desenhado para entregar funcionalidade,
            confiabilidade e evolução sustentável.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  {Icon ? <Icon size={24} /> : <span>•</span>}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href="https://wa.me/5518996076660"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com especialista <ChevronRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
