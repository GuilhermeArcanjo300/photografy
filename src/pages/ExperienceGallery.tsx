import { Link, useParams } from 'react-router-dom';
import { EXPERIENCES, findExperience, guideLink } from '../content/experiences';
import { Gallery } from '../components/Gallery';
import { IconArrowLeft, IconArrowUpRight, IconWhatsApp } from '../components/ui/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import { NotFound } from './NotFound';
import './experience-gallery.scss';

/**
 * Galeria de uma experiência — capítulo 4 do briefing.
 * Banner grande, texto curto, as fotos como protagonistas e o botão do guia.
 */
export function ExperienceGallery() {
  const { slug } = useParams();
  const exp = findExperience(slug);

  useScrollReveal(slug);
  useSeo({
    title: exp
      ? `${exp.name} | Deise Akemi Fotografia`
      : 'Experiência não encontrada | Deise Akemi Fotografia',
    description: exp ? `${exp.cardText} ${exp.intro[0]}` : 'Página não encontrada.',
    path: `/experiencias/${slug ?? ''}`,
  });

  if (!exp) return <NotFound />;

  const i = EXPERIENCES.findIndex((e) => e.slug === exp.slug);
  const next = EXPERIENCES[(i + 1) % EXPERIENCES.length];

  return (
    <article className="xg">
      <header className={`xg__banner ${exp.image ? '' : 'xg__banner--plain'}`}>
        {exp.image && (
          <div className="xg__banner-media">
            <img
              src={exp.image}
              alt={exp.name}
              decoding="async"
              style={{ objectPosition: exp.focus ?? 'center 35%' }}
            />
            <div className="xg__banner-veil" />
          </div>
        )}

        <div className="container xg__banner-inner">
          <Link to="/experiencias" className="xg__back">
            <IconArrowLeft size={15} />
            Coleções de Experiências
          </Link>
          <h1 className="xg__title">{exp.name}</h1>
        </div>
      </header>

      <section className="section section--tight">
        <div className="container container--narrow xg__intro" data-reveal>
          {exp.intro.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section section--tight xg__photos">
        <div className="container">
          {exp.gallery.length > 0 ? (
            <Gallery
              shots={exp.gallery.map((src) => ({
                src,
                alt: `${exp.name} — Deise Akemi Fotografia`,
                category: exp.short,
              }))}
            />
          ) : (
            <p className="xg__empty" data-reveal>
              As fotografias desta experiência estão sendo preparadas. Enquanto
              isso, peça o guia completo pelo WhatsApp — respondo pessoalmente.
            </p>
          )}
        </div>
      </section>

      <section className="section section--tint xg__cta">
        <div className="container xg__cta-inner" data-reveal>
          <h2>Quer conhecer todos os detalhes?</h2>
          <p>
            Envio o guia completo do ensaio {exp.short} com tudo o que está
            incluso, cenários e as próximas datas disponíveis.
          </p>
          <a
            href={guideLink(exp)}
            target="_blank"
            rel="noreferrer"
            className="btn btn--gold"
          >
            <IconWhatsApp size={17} />
            Receber Guia Completo
          </a>
        </div>
      </section>

      <nav className="xg__next">
        <div className="container">
          <Link to={`/experiencias/${next.slug}`} className="xg__next-link">
            <span>Próxima experiência</span>
            <strong>
              {next.short}
              <IconArrowUpRight size={18} />
            </strong>
          </Link>
        </div>
      </nav>
    </article>
  );
}
