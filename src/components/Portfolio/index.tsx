import newbornImg from '../../assets/img/photograph/slide-1.jpg';
import gestanteImg from '../../assets/img/photograph/shoots2.png';
import infantilImg from '../../assets/img/photograph/shoots3.png';
import detalhesImg from '../../assets/img/photograph/shoots1.png';
import familiaImg from '../../assets/img/photograph/shoots-main.jpg';
import './style.scss';

type Shoot = {
  category: string;
  caption: string;
  image: string;
  area: string;
};

const SHOOTS: Shoot[] = [
  { category: 'Newborn', caption: 'O recomeço, em cada detalhe', image: newbornImg, area: 'a' },
  { category: 'Gestante', caption: 'A espera mais doce', image: gestanteImg, area: 'b' },
  { category: 'Infantil', caption: 'Travessuras eternizadas', image: infantilImg, area: 'c' },
  { category: 'Detalhes', caption: 'Pequenos grandes momentos', image: detalhesImg, area: 'd' },
  { category: 'Família', caption: 'O amor que se multiplica', image: familiaImg, area: 'e' },
];

export function Portfolio() {
  return (
    <section className="portfolio section" id="ensaios">
      <div className="container">
        <header className="portfolio__head" data-reveal>
          <div>
            <span className="kicker">Portfólio</span>
            <h2 className="section-title">
              Ensaios que viram <em>lembrança</em>
            </h2>
          </div>
          <p className="lead portfolio__intro">
            Do primeiro sono ao primeiro sorriso, cada sessão é conduzida com
            calma e olhar artístico. Conheça alguns dos momentos que tive a honra
            de registrar.
          </p>
        </header>

        <div className="portfolio__grid" data-reveal>
          {SHOOTS.map((shoot) => (
            <article
              key={shoot.category}
              className="shoot"
              style={{ gridArea: shoot.area }}
            >
              <img src={shoot.image} alt={`Ensaio ${shoot.category}`} loading="lazy" />
              <div className="shoot__veil" />
              <div className="shoot__meta">
                <span className="shoot__cat">{shoot.category}</span>
                <span className="shoot__caption">{shoot.caption}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
