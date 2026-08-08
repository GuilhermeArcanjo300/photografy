import { Link } from 'react-router-dom';
import { IconArrowDown } from '../ui/Icons';
import heroImg from '../../assets/img/optimized/shoots-main.webp';
import './style.scss';

/** Banner principal — capítulo 1 do briefing "Site 02". */
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
        <p className="hero__kicker">
          Especialista em Newborn <i>•</i> Gestante <i>•</i> Família
        </p>

        <h1 className="hero__title">
          O tempo passa. As lembranças permanecem.{' '}
          <em>Guarde as mais importantes para sempre.</em>
        </h1>

        <div className="hero__actions">
          <Link to="/experiencias" className="btn btn--light">
            Conheça nossas Coleções de Experiências
          </Link>
        </div>
      </div>

      <a href="#apresentacao" className="hero__scroll" aria-label="Ver mais">
        <IconArrowDown size={20} />
      </a>
    </section>
  );
}
