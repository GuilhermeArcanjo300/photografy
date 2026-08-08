import { Link } from 'react-router-dom';
import { SITE, WHATSAPP } from '../../site';
import { EXPERIENCES } from '../../content/experiences';
import { IconInstagram, IconWhatsApp } from '../ui/Icons';
import './style.scss';

/** Rodapé — capítulo 5 do briefing: limpo, com a faixa bege de fecho. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__name">{SITE.name}</p>
          <p className="footer__sub">Fotografia</p>
          <p className="footer__role">
            Especialista em Newborn, Gestante e Fotografia de Família.
          </p>
          {SITE.city && <p className="footer__city">📍 {SITE.city}</p>}

          <div className="footer__social">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <IconWhatsApp size={19} />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <IconInstagram size={19} />
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Coleções de Experiências">
          <h2>Experiências</h2>
          <ul>
            {EXPERIENCES.map((e) => (
              <li key={e.slug}>
                <Link to={`/experiencias/${e.slug}`}>{e.short}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Navegação">
          <h2>Navegação</h2>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/experiencias">Experiências</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link to="/minha-historia">Minha História</Link>
            </li>
            <li>
              <Link to="/#faq">FAQ</Link>
            </li>
            <li>
              <Link to="/#contato">Contato</Link>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </li>
            {SITE.email && (
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {SITE.fullName}. Todos os direitos reservados.
        </p>
      </div>

      <div className="footer__closing">
        <p>Cada família tem uma história única. Vamos contar a sua?</p>
      </div>
    </footer>
  );
}
