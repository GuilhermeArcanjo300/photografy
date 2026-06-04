import { SITE } from '../../site';
import specialtyImg from '../../assets/img/photograph/shoots-main.jpg';
import './style.scss';

const FEATURES = [
  {
    title: 'Estúdio preparado',
    text: 'Ambiente aquecido, higienizado e pensado para o conforto e a segurança do bebê.',
  },
  {
    title: 'Acessórios inclusos',
    text: 'Toucas, wraps, tiaras e cenários delicados que combinam com a história de cada família.',
  },
  {
    title: 'Manejo seguro',
    text: 'Técnica e paciência para posicionar o recém-nascido com todo o cuidado, no tempo dele.',
  },
];

export function Specialty() {
  return (
    <section className="specialty section" id="especialidade">
      <div className="specialty__inner container">
        <div className="specialty__media" data-reveal>
          <img src={specialtyImg} alt="Ensaio newborn com bebê em balanço decorado" />
          <div className="specialty__badge">
            <span className="specialty__badge-num">{SITE.yearsActive}+</span>
            <span className="specialty__badge-label">anos eternizando histórias</span>
          </div>
        </div>

        <div className="specialty__body" data-reveal>
          <span className="kicker">Especialidade</span>
          <h2 className="section-title">
            Ensaios <em>Newborn</em> feitos com afeto
          </h2>
          <p className="specialty__text">
            Os primeiros dias passam rápido demais. Meu trabalho é registrar a
            delicadeza desse momento único — os detalhes minúsculos, o sono
            tranquilo, o recomeço de uma família — em imagens atemporais que
            você vai querer revisitar para sempre.
          </p>

          <ul className="specialty__features">
            {FEATURES.map((f) => (
              <li key={f.title} className="specialty__feature">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>

          <a href="#contato" className="btn btn--dark">
            Quero agendar meu ensaio
          </a>
        </div>
      </div>
    </section>
  );
}
