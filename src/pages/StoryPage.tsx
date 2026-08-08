import { STORY } from '../content/about';
import { VALUES } from '../content/values';
import { PageHeader } from '../components/ui/PageHeader';
import { CtaBand } from '../components/ui/CtaBand';
import {
  IconCamera,
  IconHeart,
  IconShield,
  IconSparkle,
} from '../components/ui/Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import profile from '../assets/img/optimized/profile.webp';
import './story-page.scss';

const ICONS = {
  safety: IconShield,
  direction: IconCamera,
  care: IconHeart,
  sparkle: IconSparkle,
};

/** Minha História — capítulo 2 do briefing "Site 02". */
export function StoryPage() {
  useSeo({
    title: 'Minha História | Deise Akemi Fotografia',
    description:
      'Conheça Deise Akemi, fotógrafa especializada em newborn, gestante e fotografia de família em Capivari e região.',
    path: '/minha-historia',
  });
  useScrollReveal('historia');

  return (
    <>
      <PageHeader
        image={profile}
        focus="center 20%"
        title="Minha História"
        quote={STORY.bannerQuote}
      />

      {/* Bloco 1 */}
      <section className="section story-intro">
        <div className="container container--narrow" data-reveal>
          <p className="kicker kicker--center">{STORY.intro.kicker}</p>
          <h2 className="story-intro__title">{STORY.intro.title}</h2>
          <div className="prose story-intro__prose">
            {STORY.intro.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 2 */}
      <section className="section section--tint">
        <div className="container container--narrow story-unique" data-reveal>
          <h2>{STORY.unique.title}</h2>
          <div className="prose">
            {STORY.unique.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 */}
      <section className="section section--tight">
        <div className="container" data-reveal>
          <div className="rule" style={{ marginBottom: '2.25rem' }}>
            <span className="rule__dot" />
          </div>
          <p className="pullquote">{STORY.pullquote}</p>
        </div>
      </section>

      {/* Bloco 4 — minha forma de trabalhar */}
      <section className="section section--wash">
        <div className="container">
          <header className="story-values__head" data-reveal>
            <p className="kicker kicker--center">Minha forma de trabalhar</p>
            <h2 className="section-title">O cuidado em cada etapa</h2>
          </header>

          <ul className="story-values">
            {VALUES.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <li
                  key={v.title}
                  className="story-values__item"
                  data-reveal
                  data-delay={String((i % 5) + 1)}
                >
                  <Icon size={26} />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Bloco 5 */}
      <section className="section">
        <div className="container container--narrow story-memories" data-reveal>
          <h2>{STORY.memories.title}</h2>
          <div className="prose">
            {STORY.memories.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 6 — chamada final */}
      <CtaBand
        title={STORY.closing.title}
        text={STORY.closing.text}
        primary={{ label: STORY.closing.cta, to: '/experiencias' }}
        secondaryLabel="Falar pelo WhatsApp"
        secondaryMessage="Olá, Deise! Li sua história no site e gostaria de conversar sobre um ensaio."
      />
    </>
  );
}
