import { useState } from 'react';
import { TESTIMONIALS } from '../../content/testimonials';
import { IconArrowLeft, IconArrowRight, IconQuote } from '../ui/Icons';
import './style.scss';

/**
 * Depoimentos em carrossel — capítulo 1, bloco 5 do briefing.
 *
 * Só aparece quando houver depoimento real em src/content/testimonials.ts.
 * Nada é inventado aqui.
 */
export function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  if (!total) return null;

  const t = TESTIMONIALS[i];
  const go = (d: number) => setI((n) => (n + d + total) % total);

  return (
    <section className="section section--tint testi" id="depoimentos">
      <div className="container">
        <header className="testi__head" data-reveal>
          <p className="kicker kicker--center">Depoimentos</p>
          <h2 className="section-title">
            O que as famílias <em>contam depois</em>
          </h2>
        </header>

        <figure className="testi__card" data-reveal>
          <IconQuote size={28} className="testi__mark" />
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

        {total > 1 && (
          <div className="testi__nav">
            <button onClick={() => go(-1)} aria-label="Depoimento anterior">
              <IconArrowLeft size={20} />
            </button>

            <div className="testi__dots">
              {TESTIMONIALS.map((item, n) => (
                <button
                  key={item.name}
                  className={n === i ? 'is-active' : ''}
                  aria-label={`Depoimento ${n + 1} de ${total}`}
                  aria-current={n === i}
                  onClick={() => setI(n)}
                />
              ))}
            </div>

            <button onClick={() => go(1)} aria-label="Próximo depoimento">
              <IconArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
