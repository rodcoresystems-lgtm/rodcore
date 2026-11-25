import { NAV, SITE, whatsappLink } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__name">{SITE.name}</p>
          <p className="footer__tag">{SITE.tagline}</p>
          <p>{SITE.credential}</p>
        </div>
        <nav aria-label="Links do rodapé">
          <h2 className="footer__title">Navegação</h2>
          <ul>
            {NAV.map((i) => (<li key={i.href}><a href={i.href}>{i.label}</a></li>))}
          </ul>
        </nav>
        <div>
          <h2 className="footer__title">Contato</h2>
          <ul>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {SITE.phoneLabel}</a></li>
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">Instagram {SITE.instagramHandle}</a></li>
            <li>
              <address>{SITE.address.lines.join(' · ')}</address>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copy container">
        © {new Date().getFullYear()} {SITE.name} | {SITE.tagline}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
