export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__wrap">
          <a href="/" className="site-logo">
            VBA Solutions
          </a>

          <nav className="site-nav">
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>

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