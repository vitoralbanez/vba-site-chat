<section className="py-5 bg-white" style={{ overflow: "hidden" }}>
  <div className="container py-2">
    <div className="text-center mb-4">
      <h2 className="fw-bold">Empresas que confiam na VBA Solutions</h2>
      <p className="text-secondary mb-0">
        Alguns clientes e parceiros que fazem parte da nossa trajetória.
      </p>
    </div>

    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className="client-logo-track"
        style={{
          display: "flex",
          width: "max-content",
          animation: "scrollClients 30s linear infinite",
        }}
      >
        {[...clientLogos, ...clientLogos].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="d-flex align-items-center justify-content-center mx-3"
            style={{
              minWidth: "220px",
              height: "110px",
              backgroundColor: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "18px",
              padding: "20px 28px",
              boxShadow: "0 0.5rem 1rem rgba(15, 23, 42, 0.06)",
            }}
          >
            <img
              src={client.src}
              alt={client.name}
              title={client.name}
              style={{
                width: client.width || "140px",
                maxHeight: "70px",
                height: "auto",
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.85,
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.85";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
