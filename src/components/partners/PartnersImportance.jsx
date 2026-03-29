const items = [
  {
    title: "Confiança construída na prática",
    text: "Cada parceria reforça a credibilidade da VBA Solutions e valida nosso compromisso com entrega real, suporte próximo e visão consultiva.",
  },
  {
    title: "Crescimento em conjunto",
    text: "Acreditamos em relações duradouras. Quando o parceiro evolui com mais estrutura e tecnologia, nosso trabalho faz sentido.",
  },
  {
    title: "Base para novas oportunidades",
    text: "Uma rede forte de clientes e parceiros amplia nossa capacidade de integração, indicação e desenvolvimento de novos projetos.",
  },
];

export default function PartnersImportance() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">NOSSA VISÃO</span>
          <h2>Parcerias que têm valor de verdade</h2>
        </div>

        <div className="importance-grid">
          {items.map((item) => (
            <article className="importance-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}