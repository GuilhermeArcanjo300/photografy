import { useMemo, useState } from 'react';
import { CATEGORIES, SHOTS } from '../content/portfolio';
import { Gallery } from '../components/Gallery';
import { CtaBand } from '../components/ui/CtaBand';
import { PageHeader } from '../components/ui/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';
import './portfolio-page.scss';

/** Galleries organised by category — briefing item 9. */
export function PortfolioPage() {
  const [active, setActive] = useState<string>('Todos');

  useSeo({
    title: 'Portfólio | Deise Akemi Fotografia',
    description:
      'Galerias de ensaios newborn, gestante, bebê e infantil fotografados por Deise Akemi.',
    path: '/portfolio',
  });
  useScrollReveal(`portfolio-${active}`);

  const shots = useMemo(
    () => (active === 'Todos' ? SHOTS : SHOTS.filter((s) => s.category === active)),
    [active],
  );

  // Only offer filters that actually have photos behind them.
  const available = CATEGORIES.filter(
    (c) => c === 'Todos' || SHOTS.some((s) => s.category === c),
  );

  return (
    <>
      <PageHeader
        kicker="Portfólio"
        title="Momentos que já viraram lembrança"
        text="Poucas imagens, escolhidas com carinho. Clique em qualquer foto para ampliar."
      />

      <section className="section section--tight">
        <div className="container">
          <div className="pf__filters" role="tablist" aria-label="Categorias">
            {available.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`pf__filter ${active === cat ? 'is-active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <Gallery shots={shots} />
        </div>
      </section>

      <CtaBand
        title="Quer ver o seu ensaio aqui?"
        text="Me chame no WhatsApp e vamos combinar a data."
        message="Olá, Deise! Vi o portfólio no site e gostaria de agendar um ensaio."
      />
    </>
  );
}
