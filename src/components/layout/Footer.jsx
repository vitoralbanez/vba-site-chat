import { Link } from "react-router-dom";

const navigationLinks = [
  { to: "/", label: "Início" },
  { to: "/#servicos", label: "Serviços" },
  { to: "/chat-vba", label: "Chat VBA" },
  { to: "/parceiros", label: "Parceiros" },
  { to: "/contato", label: "Contato" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contato">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <h3>VBA Solutions</h3>
            <p>
              Infraestrutura, cloud, segurança e atendimento digital para
              empresas que precisam operar com mais estabilidade, organização e
              suporte próximo.
            </p>
          </div>

          <div className="site-footer__meta">
            <div>
              <h4>Navegação</h4>
              <div className="site-footer__links">
                {navigationLinks.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4>Contato</h4>
              <div className="site-footer__contacts">
                <a
                  href="https://wa.me/5518996076660"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: (18) 99607-6660
                </a>
                <a href="mailto:vitor.albanez@vbasolutions.com.br">
                  vitor.albanez@vbasolutions.com.br
                </a>
                <a
                  href="https://www.vbasolutions.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.vbasolutions.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {currentYear} VBA Solutions. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
