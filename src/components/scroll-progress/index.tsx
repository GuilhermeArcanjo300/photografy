import { useEffect, useState } from 'react';
import './style.scss';

function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const h = document.documentElement;
            const total = h.scrollHeight - h.clientHeight;
            setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <div className="scroll-progress" aria-hidden="true">
            <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
        </div>
    );
}

export default ScrollProgress;
