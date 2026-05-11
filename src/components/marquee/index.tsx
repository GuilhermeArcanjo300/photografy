import './style.scss';

type Props = {
    items: string[];
    speed?: number;
    variant?: 'light' | 'dark' | 'accent';
};

function Marquee({ items, speed = 40, variant = 'light' }: Props) {
    const loop = [...items, ...items, ...items, ...items];
    return (
        <div className={`marquee marquee--${variant}`} aria-hidden="true">
            <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
                {loop.map((item, i) => (
                    <span key={i} className="marquee__item">
                        {item}
                        <span className="marquee__sep">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Marquee;
