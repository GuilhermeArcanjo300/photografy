import { Link } from 'react-router-dom';
import { EXPERIENCES } from '../content/experiences';
import { PageHeader } from '../components/ui/PageHeader';
import { CtaBand } from '../components/ui/CtaBand';
import { IconArrowUpRight, IconCamera } from '../components/ui/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import banner from '../assets/img/optimized/shoots2.webp';
import './portfolio-page.scss';

/**
 * Portfólio — capítulo 4 do briefing.
 * Deixou de ser uma galeria única: agora é a porta de entrada para a galeria
 * de cada experiência.
 */
export function PortfolioPage() {
  useSeo({
    title: 'Portfólio | Deise Akemi Fotografia',
    description:
      'Histórias que tive o privilégio de registrar. Galerias de newborn, gestante, primeiro ano, smash the cake e mais.',
    path: '/portfolio',
  });
  useScrollReveal('portfolio');

  return (
    <>
      <PageHeader
        image={banner}
        focus="center 12%"
        title="Histórias que tive o privilégio de registrar."
        text="Cada experiência tem a sua própria galeria. Escolha uma para ver as fotografias."
      />

      <section className="section">
        <div className="container">
          <div className="pf__grid">
            {EXPERIENCES.map((exp, i) => (
              <Link
                key={exp.slug}
                to={`/experiencias/${exp.slug}`}
                className="pf__card"
                data-reveal
                data-delay={String((i % 5) + 1)}
              >
                <div className="pf__media">
                  {exp.image ? (
                    <img
                      src={exp.image}
                      alt={exp.name}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="pf__placeholder" aria-hidden="true">
                      <span>{exp.short.charAt(0)}</span>
                      <IconCamera size={18} />
                    </span>
                  )}
                </div>

                <div className="pf__body">
                  <h2>{exp.short}</h2>
                  <span className="pf__link">
                    Ver galeria
                    <IconArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="A próxima história pode ser a sua."
        text="Me chame no WhatsApp e vamos combinar a data do seu ensaio."
        secondaryLabel="Falar pelo WhatsApp"
        secondaryMessage="Olá, Deise! Vi o portfólio no site e gostaria de agendar um ensaio."
      />
    </>
  );
}
