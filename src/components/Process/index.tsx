import { PROCESS } from '../../content/process';
import './style.scss';

/** How it works, from first contact to delivery. Briefing item 11. */
export function Process() {
  return (
    <section className="section section--tint process" id="processo">
      <div className="container">
        <header className="process__head" data-reveal>
          <p className="kicker kicker--center">Como funciona</p>
          <h2 className="section-title">
            Do primeiro “oi” à <em>entrega das lembranças</em>
          </h2>
        </header>

        <ol className="process__list">
          {PROCESS.map((step, i) => (
            <li
              key={step.title}
              className="process__step"
              data-reveal
              data-delay={String((i % 5) + 1)}
            >
              <span className="process__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
