import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SITE, WHATSAPP } from '../../site';
import { TESTIMONIALS } from '../../content/testimonials';
import { useScrolled } from '../../hooks/useScrolled';
import { IconClose, IconMenu, IconWhatsApp } from '../ui/Icons';
import './style.scss';

/** Menu exactly as specified in the briefing (item 4). */
const LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Experiências', to: '/experiencias' },
  { label: 'Portfólio', to: '/portfolio' },
  { label: 'Minha História', to: '/minha-historia' },
  // Depoimentos only appears once there is at least one real testimonial.
  ...(TESTIMONIALS.length ? [{ label: 'Depoimentos', to: '/#depoimentos' }] : []),
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contato', to: '/#contato' },
];

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Only the home page has a full-bleed hero for the bar to float over.
  const overHero = pathname === '/' && !scrolled;

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`nav ${overHero ? 'is-over-hero' : 'is-solid'} ${
        open ? 'is-open' : ''
      }`}
    >
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" aria-label={SITE.fullName}>
          <span className="nav__brand-name">{SITE.name}</span>
          <span className="nav__brand-sub">Fotografia</span>
        </Link>

        <nav className="nav__links" aria-label="Navegação principal">
          {LINKS.map((link) =>
            link.to.includes('#') ? (
              <Link key={link.to} to={link.to} className="nav__link">
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav__link ${isActive ? 'is-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn btn--gold btn--sm nav__cta"
        >
          <IconWhatsApp size={16} />
          Orçamento
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        <nav className="nav__drawer-links" aria-label="Navegação mobile">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav__drawer-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn btn--gold"
          onClick={() => setOpen(false)}
        >
          <IconWhatsApp size={16} />
          Pedir orçamento
        </a>

        <p className="nav__drawer-meta">
          {SITE.phoneDisplay} · {SITE.instagramHandle}
        </p>
      </div>
    </header>
  );
}
