import clients from "../data/clients";

export default function Clients() {
  return (
    <section id="clientes" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">Clientes</span>
          <h2 className="fw-bold mt-2">Empresas que confiam na VBA Solutions</h2>
          <p className="text-muted section-text mx-auto">
            Soluções aplicadas no dia a dia de empresas que precisam de suporte,
            infraestrutura e continuidade operacional.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {clients.map((client, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="client-logo-box bg-white shadow-sm h-100">
                <img
                  src={client.image}
                  alt={client.name}
                  className="client-logo"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
