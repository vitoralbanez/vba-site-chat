import { Link, NavLink } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Início", end: true },
  { to: "/chat-vba", label: "Chat VBA" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__wrap">
        <Link to="/" className="site-logo">
          <div className="site-logo__mark">VBA</div>

          <div className="site-logo__text">
            <span className="site-logo__title">VBA Solutions</span>
            <span className="site-logo__subtitle">TI • Infraestrutura • Cloud</span>
          </div>
        </Link>

        <nav className="site-nav">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "is-active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
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
