import { Link } from 'react-router-dom';
import {
  EXPERIENCES,
  guideLink,
  type Experience,
} from '../../content/experiences';
import { IconCamera, IconWhatsApp } from '../ui/Icons';
import './style.scss';

/**
 * Card de experiência — capítulo 3 do briefing.
 *
 * Sem preço, dois caminhos: ver a galeria ou pedir o guia no WhatsApp.
 * O briefing descreve título e botão surgindo no hover; aqui eles ficam sempre
 * visíveis porque no celular não existe hover e são as ações principais — o
 * "zoom suave" na foto foi mantido.
 */
export function ExperienceCard({
  exp,
  index = 0,
}: {
  exp: Experience;
  index?: number;
}) {
  return (
    <article
      className="exp-card"
      data-reveal
      data-delay={String((index % 5) + 1)}
    >
      <Link
        to={`/experiencias/${exp.slug}`}
        className="exp-card__media"
        aria-label={`Ver galeria — ${exp.name}`}
      >
        {exp.image ? (
          <img src={exp.image} alt={exp.name} loading="lazy" decoding="async" />
        ) : (
          <span className="exp-card__placeholder" aria-hidden="true">
            <span>{exp.short.charAt(0)}</span>
            <IconCamera size={20} />
          </span>
        )}
      </Link>

      <div className="exp-card__body">
        <h3 className="exp-card__name">
          <Link to={`/experiencias/${exp.slug}`}>{exp.short}</Link>
        </h3>
        <p className="exp-card__text">{exp.cardText}</p>

        <div className="exp-card__actions">
          <Link
            to={`/experiencias/${exp.slug}`}
            className="btn btn--ghost btn--sm exp-card__btn"
          >
            Ver galeria
          </Link>
          <a
            href={guideLink(exp)}
            target="_blank"
            rel="noreferrer"
            className="btn btn--gold btn--sm exp-card__btn"
          >
            <IconWhatsApp size={15} />
            Guia completo
          </a>
        </div>
      </div>
    </article>
  );
}

/** Grade de experiências, usada na home (4) e no índice (todas). */
export function ExperienceGrid({ slugs }: { slugs?: string[] }) {
  const list = slugs
    ? (slugs
        .map((s) => EXPERIENCES.find((e) => e.slug === s))
        .filter(Boolean) as Experience[])
    : EXPERIENCES;

  return (
    <div className="exp__grid">
      {list.map((exp, i) => (
        <ExperienceCard key={exp.slug} exp={exp} index={i} />
      ))}
    </div>
  );
}
