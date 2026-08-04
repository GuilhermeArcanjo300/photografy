import { Link, useParams } from 'react-router-dom';
import { EXPERIENCES, findExperience, quoteLink } from '../content/experiences';
import { Gallery } from '../components/Gallery';
import { Faq } from '../components/Faq';
import { CtaBand } from '../components/ui/CtaBand';
import {
  IconArrowLeft,
  IconArrowUpRight,
  IconCheck,
  IconGift,
  IconWhatsApp,
} from '../components/ui/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import { NotFound } from './NotFound';
import './experience-detail.scss';

export function ExperienceDetail() {
  const { slug } = useParams();
  const exp = findExperience(slug);

  useScrollReveal(slug);
  useSeo({
    title: exp
      ? `${exp.name} | Deise Akemi Fotografia`
      : 'Experiência não encontrada | Deise Akemi Fotografia',
    description: exp ? `${exp.headline}. ${exp.summary}` : 'Página não encontrada.',
    path: `/experiencias/${slug ?? ''}`,
  });

  if (!exp) return <NotFound />;

  const next =
    EXPERIENCES[(EXPERIENCES.findIndex((e) => e.slug === exp.slug) + 1) % EXPERIENCES.length];

  return (
    <article className="xp">
      {/* ---------- Banner ---------- */}
      <header className={`xp__banner ${exp.image ? '' : 'xp__banner--plain'}`}>
        {exp.image && (
          <div className="xp__banner-media">
            <img
              src={exp.image}
              alt={exp.name}
              decoding="async"
              style={{ objectPosition: exp.focus ?? 'center 35%' }}
            />
            <div className="xp__banner-veil" />
          </div>
        )}

        <div className="container xp__banner-inner">
          <Link to="/experiencias" className="xp__back">
            <IconArrowLeft size={15} />
            Experiências
          </Link>
          <p className="xp__eyebrow">{exp.name}</p>
          <h1 className="xp__headline">{exp.headline}</h1>
        </div>
      </header>

      {/* ---------- Emotional copy ---------- */}
      <section className="section xp__intro">
        <div className="container container--narrow">
          <div className="prose xp__prose" data-reveal>
            {exp.intro.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>

          {exp.quote && (
            <>
              <div className="rule xp__rule" data-reveal>
                <span className="rule__dot" />
              </div>
              <p className="pullquote" data-reveal>
                {exp.quote}
              </p>
            </>
          )}
        </div>
      </section>

      {/* ---------- Collections / investimento ---------- */}
      <section className="section section--tint" id="colecoes">
        <div className="container">
          <header className="xp__section-head" data-reveal>
            <p className="kicker kicker--center">
              {exp.collections.length ? 'Coleções' : 'Investimento'}
            </p>
            <h2 className="section-title">
              {exp.collections.length
                ? 'Escolha como guardar essa lembrança'
                : 'Valores sob consulta'}
            </h2>
            {exp.collectionsNote && <p className="lead">{exp.collectionsNote}</p>}
          </header>

          {exp.collections.length ? (
            <div className="xp__collections">
              {exp.collections.map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className={`xp-col ${c.highlight ? 'is-featured' : ''}`}
                  data-reveal
                  data-delay={String((i % 5) + 1)}
                >
                  {c.highlight && <span className="xp-col__flag">{c.highlight}</span>}
                  <h3 className="xp-col__name">{c.name}</h3>

                  <ul className="check-list xp-col__items">
                    {c.items.map((item) => (
                      <li key={item}>
                        <IconCheck size={15} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="xp-col__price">
                    <strong>{c.price}</strong>
                    {c.altPrice && <em>{c.altPrice}</em>}
                    {c.installments && <span>{c.installments}</span>}
                  </div>

                  <a
                    href={quoteLink(exp)}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${c.highlight ? 'btn--gold' : 'btn--ghost'} btn--sm xp-col__cta`}
                  >
                    Quero esta coleção
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="xp__consult" data-reveal>
              <p>
                As coleções deste ensaio são montadas de acordo com o que você
                imagina para o dia. Me chame no WhatsApp que eu te envio as opções
                e os valores atualizados.
              </p>
              <a
                href={quoteLink(exp)}
                target="_blank"
                rel="noreferrer"
                className="btn btn--gold"
              >
                <IconWhatsApp size={17} />
                Pedir valores
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ---------- Included + info ---------- */}
      <section className="section">
        <div className="container xp__two-col">
          <div data-reveal>
            <p className="kicker">O que está incluso</p>
            <h2 className="xp__col-title">Tudo pensado para o seu dia</h2>
            <ul className="check-list xp__included">
              {exp.included.map((item) => (
                <li key={item}>
                  <IconCheck size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal data-delay="1">
            <p className="kicker">Como funciona</p>
            <h2 className="xp__col-title">O caminho até as suas fotos</h2>
            <ol className="xp__steps">
              {exp.howItWorks.map((step, i) => (
                <li key={step}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>

            {exp.info.length > 0 && (
              <div className="xp__info">
                <h3>Informações importantes</h3>
                <ul className="info-list">
                  {exp.info.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Editorial note (cake, clothing, timeline) ---------- */}
      {exp.note && (
        <section className="section section--wash section--tight">
          <div className="container container--narrow xp__note" data-reveal>
            <h2 className="xp__note-title">{exp.note.title}</h2>
            <div className="prose">
              {exp.note.body.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Gift ---------- */}
      {exp.gift && (
        <section className="section section--tight">
          <div className="container container--narrow xp__gift" data-reveal>
            <IconGift size={30} />
            <h2>{exp.gift.title}</h2>
            <p>{exp.gift.text}</p>
          </div>
        </section>
      )}

      {/* ---------- Gallery ---------- */}
      {exp.gallery && exp.gallery.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <header className="xp__section-head" data-reveal>
              <p className="kicker kicker--center">Galeria</p>
              <h2 className="section-title">Um pouco desse ensaio</h2>
            </header>
            <Gallery
              shots={exp.gallery.map((src) => ({
                src,
                alt: `${exp.name} — Deise Akemi Fotografia`,
                category: exp.short,
              }))}
            />
          </div>
        </section>
      )}

      <Faq title={`Dúvidas sobre o ensaio ${exp.short}`} />

      <CtaBand
        title={`Vamos agendar o seu ${exp.short}?`}
        text="Me chame no WhatsApp para verificar a disponibilidade na agenda."
        label="Pedir orçamento"
        message={`Olá, Deise! Vi seu site e gostaria de um orçamento para o ensaio ${exp.name}.`}
      />

      {/* ---------- Next experience ---------- */}
      <nav className="xp__next">
        <div className="container">
          <Link to={`/experiencias/${next.slug}`} className="xp__next-link">
            <span>Próxima experiência</span>
            <strong>
              {next.name}
              <IconArrowUpRight size={18} />
            </strong>
          </Link>
        </div>
      </nav>
    </article>
  );
}
