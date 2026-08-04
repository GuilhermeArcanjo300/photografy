import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Experiences } from '../components/Experiences';
import { About } from '../components/About';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { Process } from '../components/Process';
import { Faq } from '../components/Faq';
import { Contact } from '../components/Contact';
import { CtaBand } from '../components/ui/CtaBand';
import { IconArrowUpRight } from '../components/ui/Icons';
import { SHOTS } from '../content/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';

/** Home page, following the wireframe in the briefing. */
export function Home() {
  useSeo({
    title: 'Deise Akemi Fotografia | Newborn, Gestante e Família',
    description:
      'Fotografia que transforma momentos em memórias para toda a vida. Especialista em ensaio newborn seguro, gestante, smash the cake e acompanhamento do primeiro ano.',
    path: '/',
  });
  useScrollReveal('home');

  return (
    <>
      <Hero />

      <Experiences />

      {/* Manifesto — Deise's own words, from the studio material. */}
      <section className="section section--tint section--tight">
        <div className="container" data-reveal>
          <div className="rule" style={{ marginBottom: '2.25rem' }}>
            <span className="rule__dot" />
          </div>
          <p className="pullquote">
            Não é apenas um ensaio. É a memória dos primeiros dias do maior amor
            da sua vida.
          </p>
        </div>
      </section>

      <About />

      {/* Galeria destaque */}
      <section className="section section--tight" id="galeria">
        <div className="container">
          <header
            className="home__gallery-head"
            data-reveal
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            <div>
              <p className="kicker">Portfólio</p>
              <h2 className="section-title">
                Alguns <em>momentos guardados</em>
              </h2>
            </div>
            <Link to="/portfolio" className="link-quiet">
              Ver o portfólio completo
              <IconArrowUpRight size={15} />
            </Link>
          </header>

          <Gallery shots={SHOTS} />
        </div>
      </section>

      <Testimonials />

      <Process />

      <Faq />

      <CtaBand
        title="Que tal guardar esse momento para sempre?"
        text="Me conte o que você está buscando e eu verifico a disponibilidade na agenda."
      />

      <Contact />
    </>
  );
}
