import { EXPERIENCES } from '../content/experiences';
import { ExperienceCard } from '../components/Experiences';
import { CtaBand } from '../components/ui/CtaBand';
import { PageHeader } from '../components/ui/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';

export function ExperiencesIndex() {
  useSeo({
    title: 'Experiências e ensaios | Deise Akemi Fotografia',
    description:
      'Ensaio gestante, newborn, revelação, smash the cake, primeiro ano, capítulos da infância, família e memórias de Natal. Veja coleções, valores e o que está incluso.',
    path: '/experiencias',
  });
  useScrollReveal('experiencias');

  return (
    <>
      <PageHeader
        kicker="Experiências"
        title="Um ensaio para cada capítulo"
        text="Do positivo ao primeiro aniversário — e em cada aniversário que vem depois. Escolha a experiência que combina com o momento que a sua família está vivendo."
      />

      <section className="section section--tight">
        <div className="container">
          <div
            className="exp__grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.75rem)',
            }}
          >
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={exp.slug} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Não sabe qual escolher?"
        text="Me chame no WhatsApp que a gente descobre juntas qual ensaio faz mais sentido para o seu momento."
        label="Falar com a Deise"
        message="Olá, Deise! Vi as experiências no site e gostaria de ajuda para escolher a ideal para o meu momento."
      />
    </>
  );
}
