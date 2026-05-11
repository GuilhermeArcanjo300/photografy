import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>(threshold = 0.15) {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -10% 0px' }
        );

        obs.observe(node);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

export function useCounter(target: number, duration: number, start: boolean) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;
        let raf = 0;
        const startTime = performance.now();
        const tick = (now: number) => {
            const t = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration, start]);

    return value;
}
