import { useEffect, useState } from 'react';
import { SITE } from '../../site';
import { useScrolled } from '../../hooks/useScrolled';
import { IconClose, IconMenu } from '../ui/Icons';
import './style.scss';

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Ensaios', href: '#ensaios' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-name">{SITE.name}</span>
          <span className="nav__brand-sub">Fotografia</span>
        </a>

        <nav className="nav__links" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary nav__cta"
        >
          Agendar ensaio
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
            <a
              key={link.href}
              href={link.href}
              className="nav__drawer-link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
          onClick={() => setOpen(false)}
        >
          Agendar ensaio
        </a>
      </div>
    </header>
  );
}
