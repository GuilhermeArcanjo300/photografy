import { useRef } from 'react';
import './style.scss';
import ImagePrincipal from '../../assets/img/photograph/shoots-main.jpg';
import ImageShoots1 from '../../assets/img/photograph/shoots1.png';
import ImageShoots2 from '../../assets/img/photograph/shoots2.png';
import ImageShoots3 from '../../assets/img/photograph/shoots3.png';
import Marquee from '../marquee';
import { useReveal } from '../../hooks/useReveal';

const categories = [
    { image: ImageShoots1, title: 'Gestantes', desc: 'Espera fotografada com leveza.', tag: '02' },
    { image: ImageShoots2, title: 'Família', desc: 'Histórias entre gerações.', tag: '03' },
    { image: ImageShoots3, title: 'Infantil', desc: 'A infância em quadros.', tag: '04' },
];

type CardProps = { image: string; title: string; desc: string; tag: string; index: number };

function ShootCard({ image, title, desc, tag, index }: CardProps) {
    const { ref, visible } = useReveal<HTMLDivElement>();
    const innerRef = useRef<HTMLDivElement>(null);

    const onMove = (e: React.MouseEvent) => {
        const el = innerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
        el.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(8px)`;
    };

    const onLeave = () => {
        if (innerRef.current) innerRef.current.style.transform = '';
    };

    return (
        <figure
            ref={ref}
            className={`shoots__card ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 120}ms` }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            data-hover
        >
            <div ref={innerRef} className="shoots__card-inner">
                <div className="shoots__card-image">
                    <img src={image} alt={`Ensaio ${title}`} />
                    <span className="shoots__card-tag">/ {tag}</span>
                </div>
            </div>
            <figcaption>
                <h4>{title}</h4>
                <p>{desc}</p>
                <span className="shoots__card-arrow">↗</span>
            </figcaption>
        </figure>
    );
}

function Shoots() {
    const header = useReveal<HTMLElement>();
    const feature = useReveal<HTMLElement>(0.2);

    return (
        <section className="shoots" id="ensaios">
            <header ref={header.ref} className={`shoots__header ${header.visible ? 'is-visible' : ''}`}>
                <span className="eyebrow">/ 01 · Portfólio</span>
                <h2 className="shoots__title">
                    <span>Ensaios</span>
                    <span className="shoots__title-em">autorais</span>
                </h2>
                <p className="shoots__intro">
                    Cada ensaio é construído com calma, escuta e olhar atento.
                    Aqui, alguns recortes do que faço.
                </p>
            </header>

            <Marquee
                items={['Newborn', 'Gestante', 'Família', 'Infantil', 'Feminino', 'Externo']}
                speed={36}
            />

            <article ref={feature.ref} className={`shoots__feature ${feature.visible ? 'is-visible' : ''}`}>
                <div className="shoots__feature-image">
                    <img src={ImagePrincipal} alt="Ensaio Newborn em destaque" />
                    <span className="shoots__feature-badge">
                        <span className="shoots__pulse" /> Em destaque
                    </span>
                </div>
                <div className="shoots__feature-text">
                    <span className="eyebrow">Especialidade</span>
                    <h3>
                        <span>New</span><span className="shoots__feature-em">born</span>
                    </h3>
                    <p>
                        Os primeiros dias de vida registrados com técnica, segurança e
                        muito carinho. Um trabalho cuidadoso, feito no tempo do bebê,
                        para guardar lembranças que duram para sempre.
                    </p>
                    <ul className="shoots__feature-list">
                        <li>Sessão segura e climatizada</li>
                        <li>Acessórios e cenários autorais</li>
                        <li>Galeria digital em até 15 dias</li>
                    </ul>
                    <a href="#contato" className="btn btn--dark" data-hover>
                        <span>Conhecer ensaios newborn</span>
                        <span className="btn__arrow">→</span>
                    </a>
                </div>
            </article>

            <div className="shoots__grid">
                {categories.map((c, i) => (
                    <ShootCard key={c.title} {...c} index={i} />
                ))}
            </div>
        </section>
    );
}

export default Shoots;
