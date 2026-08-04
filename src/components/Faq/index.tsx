import { useState } from 'react';
import { FAQ, type FaqItem } from '../../content/faq';
import { IconPlus } from '../ui/Icons';
import './style.scss';

/** Accordion of frequent questions — briefing item 12. */
export function Faq({
  items = FAQ,
  title = 'Perguntas frequentes',
  tint = true,
}: {
  items?: FaqItem[];
  title?: string;
  tint?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <section
      className={`section faq ${tint ? 'section--wash' : ''}`}
      id="faq"
    >
      <div className="container container--narrow">
        <header className="faq__head" data-reveal>
          <p className="kicker kicker--center">Dúvidas</p>
          <h2 className="section-title">{title}</h2>
        </header>

        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`faq__item ${isOpen ? 'is-open' : ''}`}
                data-reveal
              >
                <h3>
                  <button
                    className="faq__q"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                  >
                    <span>{item.q}</span>
                    <IconPlus size={18} className="faq__icon" />
                  </button>
                </h3>
                <div className="faq__a" id={`faq-a-${i}`} role="region" hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
