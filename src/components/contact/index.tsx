import './style.scss';
import Detail4 from '../../assets/img/details-page/detail4.png';
import Marquee from '../marquee';
import { useReveal } from '../../hooks/useReveal';

export function Contact() {
    const year = new Date().getFullYear();
    const reveal = useReveal<HTMLDivElement>(0.2);

    return (
        <>
            <Marquee
                items={["Vamos criar algo bonito juntos", "Newborn · Família · Autoral", "Disponível 2026"]}
                speed={42}
                variant="dark"
            />

            <section className="contact" id="contato">
                <div className="contact__bg" aria-hidden="true">
                    <span className="contact__bg-orb contact__bg-orb--1" />
                    <span className="contact__bg-orb contact__bg-orb--2" />
                </div>

                <div
                    ref={reveal.ref}
                    className={`contact__panel ${reveal.visible ? 'is-visible' : ''}`}
                    style={{ backgroundImage: `url(${Detail4})` }}
                >
                    <div className="contact__inner">
                        <span className="eyebrow">/ 03 · Contato</span>
                        <h2 className="contact__title">
                            Pronta para <em>guardar</em><br/>esse momento com você.
                        </h2>
                        <p className="contact__lede">
                            Me chame por WhatsApp ou Instagram. Combinamos data,
                            local e cada detalhe para o seu ensaio ser leve do começo ao fim.
                        </p>

                        <ul className="contact__list">
                            <li data-hover>
                                <span className="contact__label">01 · WhatsApp</span>
                                <a href="https://wa.me/5519997861306" target="_blank" rel="noreferrer">
                                    <span>(19) 99786-1306</span>
                                    <span className="contact__arrow">↗</span>
                                </a>
                            </li>
                            <li data-hover>
                                <span className="contact__label">02 · Instagram</span>
                                <a href="https://instagram.com/deise.akemi" target="_blank" rel="noreferrer">
                                    <span>@deise.akemi</span>
                                    <span className="contact__arrow">↗</span>
                                </a>
                            </li>
                            <li data-hover>
                                <span className="contact__label">03 · Facebook</span>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                                    <span>Deise Akemi Fotografia</span>
                                    <span className="contact__arrow">↗</span>
                                </a>
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/5519997861306"
                            className="btn btn--dark contact__cta"
                            target="_blank"
                            rel="noreferrer"
                            data-hover
                        >
                            <span>Agendar pelo WhatsApp</span>
                            <span className="btn__arrow">→</span>
                        </a>
                    </div>
                </div>

                <footer className="footer">
                    <div className="footer__inner">
                        <p className="footer__brand">
                            <span className="footer__brand-name">Deise Akemi</span>
                            <span>· Fotografia</span>
                        </p>
                        <p className="footer__copy">© {year} · Todos os direitos reservados</p>
                    </div>
                </footer>
            </section>
        </>
    );
}
