export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__wrap">
        <a href="/" className="site-logo">
          <div className="site-logo__mark">VBA</div>

          <div className="site-logo__text">
            <span className="site-logo__title">VBA Solutions</span>
            <span className="site-logo__subtitle">TI • Infraestrutura • Cloud</span>
          </div>
        </a>

        <nav className="site-nav">
          <a href="/">Início</a>
          <a href="/servicos">Serviços</a>
          <a href="/parceiros">Parceiros</a>
          <a href="/contato">Contato</a>
        </nav>

        <div className="site-header__actions">
          <a
            href="https://wa.me/5518996076660"
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent btn-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}