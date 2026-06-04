import { SITE } from '../../site';
import profileImg from '../../assets/img/photograph/profile.png';
import './style.scss';

const STATS = [
  { value: `${SITE.yearsActive}+`, label: 'anos de fotografia' },
  { value: '6', label: 'especialidades' },
  { value: '∞', label: 'memórias eternizadas' },
];

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="about__inner container">
        <div className="about__media" data-reveal>
          <img src={profileImg} alt="Deise Akemi, fotógrafa, segurando sua câmera" />
        </div>

        <div className="about__body" data-reveal>
          <span className="kicker">Sobre</span>
          <h2 className="section-title">
            Prazer, sou a <em>Deise Akemi</em>
          </h2>

          <div className="about__text">
            <p>
              Trabalho com fotografia há mais de {SITE.yearsActive} anos
              profissionalmente, mas sou apaixonada pela arte de fotografar desde
              pequena. Foi essa fascinação que me levou a investir em equipamento
              e a me especializar — e sigo sempre em busca de mais conhecimento
              para aperfeiçoar meu trabalho.
            </p>
            <p>
              Hoje me dedico especialmente ao Newborn, mas também realizo ensaios
              femininos, masculinos, infantis, de gestantes e de família — em
              estúdio ou em área externa, sempre com olhar afetivo e cuidado em
              cada detalhe.
            </p>
          </div>

          <ul className="about__stats">
            {STATS.map((s) => (
              <li key={s.label}>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
