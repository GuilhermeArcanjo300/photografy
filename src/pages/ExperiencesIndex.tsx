import { ExperienceGrid } from '../components/Experiences';
import { PageHeader } from '../components/ui/PageHeader';
import { IconWhatsApp } from '../components/ui/Icons';
import { WHATSAPP, whatsappLink } from '../site';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import banner from '../assets/img/optimized/slide-1.webp';
import './experiences-index.scss';

/** Coleções de Experiências — capítulo 3 do briefing. */
export function ExperiencesIndex() {
  useSeo({
    title: 'Coleções de Experiências | Deise Akemi Fotografia',
    description:
      'Revelação, gestante, newborn, primeiro ano, smash the cake, capítulos da infância e memórias de Natal. Conheça as experiências da Deise Akemi Fotografia.',
    path: '/experiencias',
  });
  useScrollReveal('experiencias');

  return (
    <>
      <PageHeader
        image={banner}
        focus="center 42%"
        title="Conheça nossas Coleções de Experiências"
        text="Cada fase da vida merece ser lembrada de uma forma única. Conheça as experiências preparadas para registrar os momentos mais importantes da sua história."
      />

      <section className="section">
        <div className="container">
          <ExperienceGrid />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container xi__closing" data-reveal>
          <h2>A próxima história pode ser a sua.</h2>
          <p>
            Cada família é única, e cada ensaio é pensado para refletir sua
            essência. Será um prazer conhecer a sua história e registrá-la com
            todo o cuidado que ela merece.
          </p>
          <a
            href={whatsappLink(
              'Olá, Deise! Vi as Coleções de Experiências no site e gostaria de agendar meu ensaio.',
            )}
            target="_blank"
            rel="noreferrer"
            className="btn btn--gold"
          >
            <IconWhatsApp size={17} />
            Agendar meu ensaio
          </a>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container xi__footnote" data-reveal>
          <p className="pullquote">
            Cada família possui uma história única. Será um prazer contar a sua.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost-gold"
          >
            <IconWhatsApp size={16} />
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
