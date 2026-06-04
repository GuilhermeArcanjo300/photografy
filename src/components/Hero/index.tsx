import { SITE } from '../../site';
import { IconArrowDown } from '../ui/Icons';
import heroImg from '../../assets/img/photograph/slide-1.jpg';
import './style.scss';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroImg})` }}
        role="img"
        aria-label="Recém-nascido dormindo durante ensaio newborn"
      />
      <div className="hero__overlay" />

      <div className="hero__content container">
        <span className="hero__kicker">
          Newborn · Gestante · Família
        </span>
        <h1 className="hero__title">
          Eternizando os <em>primeiros</em> instantes da vida
        </h1>
        <p className="hero__text">
          Fotografia afetiva e atemporal por {SITE.name}. Há mais de{' '}
          {SITE.yearsActive} anos transformando emoções delicadas em memórias
          para sempre.
        </p>

        <div className="hero__actions">
          <a href="#ensaios" className="btn btn--primary">
            Explorar ensaios
          </a>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost-light"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>

      <a href="#especialidade" className="hero__scroll" aria-label="Rolar para baixo">
        <span>Role para descobrir</span>
        <IconArrowDown size={20} />
      </a>
    </section>
  );
}
