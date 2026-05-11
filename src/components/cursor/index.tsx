import { useEffect, useRef } from 'react';
import './style.scss';

function Cursor() {
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let raf = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
        };

        const tick = () => {
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            }
            raf = requestAnimationFrame(tick);
        };

        const hoverables = 'a, button, [data-hover]';
        const enter = () => {
            ringRef.current?.classList.add('is-hover');
            dotRef.current?.classList.add('is-hover');
        };
        const leave = () => {
            ringRef.current?.classList.remove('is-hover');
            dotRef.current?.classList.remove('is-hover');
        };

        document.addEventListener('mousemove', onMove);
        document.querySelectorAll(hoverables).forEach((el) => {
            el.addEventListener('mouseenter', enter);
            el.addEventListener('mouseleave', leave);
        });
        document.body.classList.add('has-custom-cursor');
        raf = requestAnimationFrame(tick);

        const observer = new MutationObserver(() => {
            document.querySelectorAll(hoverables).forEach((el) => {
                el.removeEventListener('mouseenter', enter);
                el.removeEventListener('mouseleave', leave);
                el.addEventListener('mouseenter', enter);
                el.addEventListener('mouseleave', leave);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.body.classList.remove('has-custom-cursor');
            observer.disconnect();
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        </>
    );
}

export default Cursor;
