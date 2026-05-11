import ImageProfile from '../../assets/img/photograph/profile.png';
import { useCounter, useReveal } from '../../hooks/useReveal';
import './style.scss';

function Stat({ value, suffix, label, start, delay }: { value: number; suffix?: string; label: string; start: boolean; delay: number }) {
    const v = useCounter(value, 1600, start);
    return (
        <li style={{ transitionDelay: `${delay}ms` }}>
            <strong>
                {v}
                {suffix}
            </strong>
            <span>{label}</span>
        </li>
    );
}

function About() {
    const { ref, visible } = useReveal<HTMLDivElement>(0.25);

    return (
        <section className="about" id="sobre">
            <div className="about__bg" aria-hidden="true">
                <span className="about__bg-orb about__bg-orb--1" />
                <span className="about__bg-orb about__bg-orb--2" />
                <span className="about__bg-grid" />
            </div>

            <div ref={ref} className={`about__inner ${visible ? 'is-visible' : ''}`}>
                <div className="about__media">
                    <div className="about__media-mask">
                        <img src={ImageProfile} alt="Retrato de Deise Akemi" />
                    </div>
                    <span className="about__signature">
                        <span className="about__signature-pulse" />
                        Deise Akemi
                    </span>
                    <span className="about__media-tag">/ 02 · Sobre</span>
                </div>

                <div className="about__text">
                    <span className="eyebrow about__eyebrow">A fotógrafa</span>
                    <h2 className="about__title">
                        Fotografar é meu jeito de <em>cuidar</em> do tempo.
                    </h2>
                    <p>
                        Sou Deise Akemi e trabalho com fotografia há mais de quatro
                        anos profissionalmente — mas amo essa arte desde criança.
                        Foi essa paixão que me levou a investir em equipamento e a
                        me especializar, sempre em busca de aperfeiçoar o que entrego.
                    </p>
                    <p>
                        Hoje minha especialidade é Newborn, mas também realizo
                        ensaios femininos, masculinos, infantis, gestantes e família —
                        em área externa ou estúdio.
                    </p>

                    <ul className={`about__stats ${visible ? 'is-visible' : ''}`}>
                        <Stat value={4} suffix="+" label="anos de carreira" start={visible} delay={0} />
                        <Stat value={200} suffix="+" label="famílias atendidas" start={visible} delay={120} />
                        <Stat value={100} suffix="%" label="dedicação" start={visible} delay={240} />
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
