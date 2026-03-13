import logo from "../assets/images/vba_logo_inline_com-icone.png";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
      <a className="navbar-brand d-flex align-items-center" href="#inicio">
        <img
          src={logo}
          alt="VBA Solutions"
          className="navbar-logo"
        />
      </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicos">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#comunicacao">
                Comunicação
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clientes">
                Clientes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href="https://wa.me/5518996076660"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
