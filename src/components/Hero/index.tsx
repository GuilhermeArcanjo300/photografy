import { Link } from 'react-router-dom';
import { SITE, WHATSAPP } from '../../site';
import { IconArrowDown, IconWhatsApp } from '../ui/Icons';
import heroImg from '../../assets/img/optimized/shoots-main.webp';
import './style.scss';

/** Full-screen banner — briefing item 5. */
export function Hero() {
  return (
    <section className="hero" aria-label="Início">
      <div className="hero__media">
        <img
          src={heroImg}
          alt="Bebê dormindo em um balanço de madeira cercado por flores brancas"
          decoding="async"
        />
      </div>

      <div className="hero__veil" />

      <div className="hero__inner container">
        <p className="hero__kicker">{SITE.role}</p>

        <h1 className="hero__title">
          Fotografia que transforma momentos em{' '}
          <em>memórias para toda a vida.</em>
        </h1>

        <p className="hero__lead">
          Ensaios newborn, gestante, família e infantil conduzidos com direção
          completa, do primeiro contato à entrega das suas lembranças.
        </p>

        <div className="hero__actions">
          <Link to="/experiencias" className="btn btn--light">
            Conheça as experiências
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost-light"
          >
            <IconWhatsApp size={17} />
            Pedir orçamento
          </a>
        </div>
      </div>

      <a href="#experiencias" className="hero__scroll" aria-label="Ver mais">
        <IconArrowDown size={20} />
      </a>
    </section>
  );
}
