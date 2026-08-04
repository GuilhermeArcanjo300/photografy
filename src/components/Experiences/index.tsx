import { Link } from 'react-router-dom';
import { EXPERIENCES, type Experience } from '../../content/experiences';
import { IconArrowUpRight, IconCamera } from '../ui/Icons';
import './style.scss';

/** Cheapest collection price, used as the "a partir de" hint on the card. */
function fromPrice(exp: Experience): string | null {
  if (!exp.collections.length) return null;
  const values = exp.collections.map((c) =>
    Number(c.price.replace(/[^\d,]/g, '').replace(/\./g, '').replace(',', '.')),
  );
  const min = Math.min(...values.filter((n) => !Number.isNaN(n)));
  if (!Number.isFinite(min)) return null;
  return min.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
}

export function ExperienceCard({
  exp,
  index = 0,
}: {
  exp: Experience;
  index?: number;
}) {
  const price = fromPrice(exp);

  return (
    <article
      className="exp-card"
      data-reveal
      data-delay={String((index % 5) + 1)}
    >
      <Link to={`/experiencias/${exp.slug}`} className="exp-card__link">
        <div className="exp-card__media">
          {exp.image ? (
            <img src={exp.image} alt={exp.name} loading="lazy" decoding="async" />
          ) : (
            <div className="exp-card__placeholder" aria-hidden="true">
              <span>{exp.short.charAt(0)}</span>
              <IconCamera size={20} />
            </div>
          )}
        </div>

        <div className="exp-card__body">
          <h3 className="exp-card__name">{exp.name}</h3>
          <p className="exp-card__summary">{exp.summary}</p>

          <div className="exp-card__foot">
            <span className="exp-card__price">
              {price ? (
                <>
                  <small>a partir de</small> {price}
                </>
              ) : (
                <small>valores sob consulta</small>
              )}
            </span>
            <IconArrowUpRight size={17} />
          </div>
        </div>
      </Link>
    </article>
  );
}

/** Experience cards — briefing item 7. */
export function Experiences({
  title = 'Experiências',
  limit,
}: {
  title?: string;
  limit?: number;
}) {
  const list = limit ? EXPERIENCES.slice(0, limit) : EXPERIENCES;

  return (
    <section className="section exp" id="experiencias">
      <div className="container">
        <header className="exp__head" data-reveal>
          <p className="kicker">Escolha o seu momento</p>
          <h2 className="section-title">
            {title} <em>para cada capítulo</em>
          </h2>
          <p className="lead">
            Cada ensaio é preparado com direção completa, sem pressa e com muito
            carinho — do primeiro contato até a entrega das suas lembranças.
          </p>
        </header>

        <div className="exp__grid">
          {list.map((exp, i) => (
            <ExperienceCard key={exp.slug} exp={exp} index={i} />
          ))}
        </div>

        {limit && limit < EXPERIENCES.length && (
          <div className="exp__more" data-reveal>
            <Link to="/experiencias" className="btn btn--ghost">
              Ver todas as experiências
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
