import { Link } from 'react-router-dom';
import { HOME_ABOUT } from '../../content/about';
import { IconArrowUpRight } from '../ui/Icons';
import profile from '../../assets/img/optimized/profile.webp';
import './style.scss';

/** Bloco "Sobre Deise Akemi" da home — capítulo 1, bloco 4 do briefing. */
export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <img
            src={profile}
            alt="Deise Akemi segurando sua câmera"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about__text" data-reveal data-delay="1">
          <p className="kicker">{HOME_ABOUT.kicker}</p>
          <h2 className="about__title">{HOME_ABOUT.title}</h2>

          <div className="prose about__prose">
            {HOME_ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <Link to="/minha-historia" className="btn btn--ghost about__cta">
            {HOME_ABOUT.cta}
            <IconArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
