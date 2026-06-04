import { SITE } from '../../site';
import { IconInstagram, IconWhatsApp } from '../ui/Icons';
import './style.scss';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Ensaios', href: '#ensaios' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <a href="#inicio" className="footer__logo">
            <span className="footer__logo-name">{SITE.name}</span>
            <span className="footer__logo-sub">Fotografia</span>
          </a>
          <p className="footer__tagline">
            Eternizando os primeiros instantes da vida.
            <br />
            {SITE.location}
          </p>
        </div>

        <nav className="footer__nav" aria-label="Rodapé">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <IconInstagram size={20} />
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <IconWhatsApp size={20} />
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>
          © {SITE.fullName}. Todos os direitos reservados.
        </p>
        <p className="footer__credit">Feito com carinho ♥</p>
      </div>
    </footer>
  );
}
