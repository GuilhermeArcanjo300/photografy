import { Link } from 'react-router-dom';
import { SITE } from '../../site';
import { IconArrowUpRight } from '../ui/Icons';
import profile from '../../assets/img/optimized/profile.webp';
import './style.scss';

/** Deise's bio, in her own words. Briefing item 6 — Minha História. */
export const BIO = [
  'Meu nome é Deise Akemi. Trabalho com fotografia há mais de 4 anos profissionalmente, mas sou amante da fotografia desde pequena. Foi essa fascinação pela arte de fotografar que me levou a investir em uma máquina e me especializar na área — e continuo sempre em busca de mais conhecimentos para aperfeiçoar meu trabalho.',
  'Sou especialista em fotografia newborn, formada pela Escola de Fotografia Newborn, unindo técnica, segurança e um carinho quase materno em cada ensaio.',
  'Também trabalho com ensaios de gestante, família, infantil, masculinos e femininos, em área externa ou em estúdio. Do positivo ao primeiro aniversário, registrando cada capítulo da história da sua família.',
];

export function About({ full = false }: { full?: boolean }) {
  return (
    <section className="section about" id="sobre">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <img
            src={profile}
            alt="Deise Akemi fotografando com sua câmera"
            loading="lazy"
            decoding="async"
          />
          <span className="about__badge">
            <em>Prazer,</em> eu sou Deise Akemi
          </span>
        </div>

        <div className="about__text" data-reveal data-delay="1">
          <p className="kicker">Minha história</p>
          <h2 className="section-title">
            Fotografar é <em>guardar o que não volta</em>
          </h2>

          <div className="prose about__prose">
            {(full ? BIO : BIO.slice(0, 2)).map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <p className="about__quote">
            “Do positivo ao primeiro aniversário, registrando cada capítulo da
            história da sua família.”
          </p>

          {!full && (
            <Link to="/minha-historia" className="link-quiet about__link">
              Conheça minha história
              <IconArrowUpRight size={15} />
            </Link>
          )}

          {full && SITE.instagramHandle && (
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="link-quiet about__link"
            >
              {SITE.instagramHandle} no Instagram
              <IconArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
