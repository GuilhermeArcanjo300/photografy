import { TESTIMONIALS } from '../../content/testimonials';
import { IconQuote } from '../ui/Icons';
import './style.scss';

/**
 * Depoimentos — briefing item 10.
 *
 * Renders nothing until a real, authorized testimonial is added to
 * src/content/testimonials.ts. No placeholder reviews are invented.
 */
export function Testimonials() {
  if (!TESTIMONIALS.length) return null;

  return (
    <section className="section testi" id="depoimentos">
      <div className="container">
        <header className="testi__head" data-reveal>
          <p className="kicker kicker--center">Depoimentos</p>
          <h2 className="section-title">
            O que as famílias <em>contam depois</em>
          </h2>
        </header>

        <div className="testi__grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="testi__card"
              data-reveal
              data-delay={String((i % 5) + 1)}
            >
              <IconQuote size={26} className="testi__mark" />
              <blockquote>{t.text}</blockquote>
              <figcaption>
                {t.photo && (
                  <img src={t.photo} alt={t.name} loading="lazy" decoding="async" />
                )}
                <span>
                  <strong>{t.name}</strong>
                  {t.role && <small>{t.role}</small>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
