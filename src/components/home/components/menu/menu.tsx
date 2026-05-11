import { useEffect, useState } from 'react';
import Logo from '../logo';
import './style.scss';

function Menu() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setOpen(false);

    return (
        <header className={`menu ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
            <a href="#top" className="menu__brand" aria-label="Deise Akemi — início" onClick={close}>
                <Logo />
                <span className="menu__brand-text">
                    <span className="menu__brand-name">Deise Akemi</span>
                    <span className="menu__brand-tag">Fotografia</span>
                </span>
            </a>

            <button
                className="menu__toggle"
                aria-label="Abrir menu"
                aria-expanded={open}
                onClick={() => setOpen(v => !v)}
            >
                <span></span><span></span><span></span>
            </button>

            <nav className="menu__nav" onClick={close}>
                <a href="#ensaios">Ensaios</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
                <a href="#contato" className="menu__cta">Agendar</a>
            </nav>
        </header>
    );
}

export default Menu;
