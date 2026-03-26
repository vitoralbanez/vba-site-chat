import { ShieldCheck, PhoneCall, Cloud, Workflow } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  phone: PhoneCall,
  cloud: Cloud,
  workflow: Workflow,
};

import differentials from "../../data/differentials";

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
                  <Icon size={26} />
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