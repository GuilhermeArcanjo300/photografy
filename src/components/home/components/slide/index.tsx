import { useEffect, useRef, useState } from 'react';
import './style.scss';

import slide1 from '../../../../assets/img/photograph/slide-1.jpg';

const titleWords = ['Memórias', 'que', 'respiram', 'delicadeza'];

function Slide() {
    const [scrollY, setScrollY] = useState(0);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        const onMove = (e: MouseEvent) => {
            const rect = heroRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMouse({
                x: (e.clientX / rect.width - 0.5) * 2,
                y: (e.clientY / rect.height - 0.5) * 2,
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('mousemove', onMove);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    const parallaxY = scrollY * 0.4;
    const tiltX = mouse.x * 8;
    const tiltY = mouse.y * 8;

    return (
        <section className="hero" id="top" ref={heroRef}>
            <div
                className="hero__image"
                style={{ transform: `translate3d(${tiltX * -0.3}px, ${parallaxY + tiltY * -0.3}px, 0) scale(1.1)` }}
            >
                <img src={slide1} alt="Ensaio newborn — Deise Akemi" />
                <div className="hero__overlay" aria-hidden="true" />
            </div>

            <div className="hero__orbs" aria-hidden="true">
                <span className="hero__orb hero__orb--1" style={{ transform: `translate3d(${tiltX * 2}px, ${tiltY * 2}px, 0)` }} />
                <span className="hero__orb hero__orb--2" style={{ transform: `translate3d(${tiltX * -1.6}px, ${tiltY * -1.6}px, 0)` }} />
                <span className="hero__orb hero__orb--3" style={{ transform: `translate3d(${tiltX * 1.2}px, ${tiltY * -1.2}px, 0)` }} />
            </div>

            <div className="hero__grid" aria-hidden="true" />

            <div className="hero__content" style={{ transform: `translate3d(${tiltX * 0.6}px, ${tiltY * 0.6}px, 0)` }}>
                <span className="eyebrow hero__eyebrow">
                    <span className="hero__pulse" /> Fotografia autoral · Desde 2020
                </span>
                <h1 className="hero__title">
                    {titleWords.map((w, i) => (
                        <span
                            key={i}
                            className={`hero__word ${w === 'respiram' ? 'hero__word--em' : ''}`}
                            style={{ animationDelay: `${300 + i * 90}ms` }}
                        >
                            {w}
                        </span>
                    ))}
                </h1>
                <p className="hero__subtitle">
                    Especialidade em Newborn, gestantes, família e ensaios autorais —
                    em estúdio ou externa, com olhar atento ao detalhe.
                </p>
                <div className="hero__actions">
                    <a href="#ensaios" className="btn btn--primary" data-hover>
                        <span>Ver ensaios</span>
                        <span className="btn__arrow">→</span>
                    </a>
                    <a href="#contato" className="btn btn--ghost" data-hover>
                        <span>Agendar sessão</span>
                    </a>
                </div>
            </div>

            <div className="hero__meta">
                <div className="hero__meta-item">
                    <span className="hero__meta-label">Sessão</span>
                    <span className="hero__meta-value">Newborn · Gestante · Família</span>
                </div>
                <div className="hero__meta-item">
                    <span className="hero__meta-label">Base</span>
                    <span className="hero__meta-value">SP · Atendimento nacional</span>
                </div>
            </div>

            <a href="#ensaios" className="hero__scroll" aria-label="Rolar para ensaios">
                <span className="hero__scroll-line" />
                <span className="hero__scroll-text">Scroll</span>
            </a>
        </section>
    );
}

export default Slide;
