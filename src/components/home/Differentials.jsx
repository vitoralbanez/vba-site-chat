import { Shield, Phone, Cloud, Blocks } from "lucide-react";
import differentials from "../../data/differentials";

const iconMap = {
  shield: Shield,
  phone: Phone,
  cloud: Cloud,
  workflow: Blocks,
};

export default function Differentials() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">DIFERENCIAIS</span>
          <h2>Uma operação mais organizada começa com a tecnologia certa</h2>
          <p>
            Menos improviso, menos retrabalho e mais segurança para a empresa
            crescer com base sólida.
          </p>
        </div>

        <div className="features-grid">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <article className="feature-card" key={index}>
                <div className="feature-icon">
                  {Icon ? <Icon size={26} /> : <span>•</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}