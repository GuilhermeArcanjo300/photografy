import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ExperienceGrid } from '../components/Experiences';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';
import { CtaBand } from '../components/ui/CtaBand';
import { HOME_HIGHLIGHTS } from '../content/experiences';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import ctaImg from '../assets/img/optimized/slide-1.webp';
import './home.scss';

/** Home — capítulo 1 do briefing "Site 02". */
export function Home() {
  useSeo({
    title: 'Deise Akemi Fotografia | Newborn, Gestante e Família',
    description:
      'O tempo passa. As lembranças permanecem. Ensaios de newborn, gestante, primeiro ano e família em Capivari e região, com direção completa do início ao fim.',
    path: '/',
  });
  useScrollReveal('home');

  return (
    <>
      <Hero />

      {/* Bloco 1 — apresentação */}
      <section className="section section--tight home-intro" id="apresentacao">
        <div className="container container--narrow" data-reveal>
          <h2 className="home-intro__title">Muito além de fotografias.</h2>
          <p className="home-intro__text">
            Cada ensaio é pensado para que você viva uma experiência leve,
            acolhedora e emocionante, transformando momentos únicos em lembranças
            que poderão atravessar gerações.
          </p>
        </div>
      </section>

      {/* Bloco 2 — pausa visual */}
      <section className="section section--tint section--tight">
        <div className="container" data-reveal>
          <div className="rule home-pause__rule">
            <span className="rule__dot" />
          </div>
          <p className="pullquote">
            Existem momentos que nunca mais voltam. Por isso eles merecem ser
            lembrados para sempre.
          </p>
        </div>
      </section>

      {/* Bloco 3 — coleções de experiências */}
      <section className="section" id="experiencias">
        <div className="container">
          <header className="home-exp__head" data-reveal>
            <p className="kicker kicker--center">Coleções de Experiências</p>
            <h2 className="section-title">
              Cada fase merece <em>ser lembrada</em>
            </h2>
          </header>

          <ExperienceGrid slugs={HOME_HIGHLIGHTS} />

          <div className="home-exp__more" data-reveal>
            <Link to="/experiencias" className="btn btn--ghost">
              Ver todas as Coleções de Experiências
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 4 — sobre a Deise */}
      <About />

      {/* Bloco 5 — depoimentos */}
      <Testimonials />

      {/* Bloco final — chamada */}
      <CtaBand
        image={ctaImg}
        focus="center 45%"
        title="Vamos guardar esse momento para sempre?"
        text="Será um prazer conhecer a sua história e ajudar a transformar esse momento em lembranças que permanecerão com você por toda a vida."
        primary={{ label: 'Quero viver essa experiência', to: '/experiencias' }}
        secondaryLabel="Solicitar orçamento"
        secondaryMessage="Olá, Deise! Vi seu site e gostaria de solicitar um orçamento."
      />

      {/* Capítulo 5 — FAQ e contato */}
      <Faq />
      <Contact />
    </>
  );
}
