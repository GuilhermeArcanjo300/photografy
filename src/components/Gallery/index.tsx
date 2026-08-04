import { useCallback, useEffect, useState } from 'react';
import type { Shot } from '../../content/portfolio';
import { IconArrowLeft, IconArrowRight, IconClose } from '../ui/Icons';
import './style.scss';

/**
 * Photo mosaic with a lightbox. Portrait shots take a taller cell so the grid
 * keeps the editorial rhythm the briefing asks for (poucas imagens, alta
 * qualidade).
 */
export function Gallery({ shots }: { shots: Shot[] }) {
  const [current, setCurrent] = useState<number | null>(null);
  const isOpen = current !== null;

  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback(
    (delta: number) =>
      setCurrent((i) => (i === null ? i : (i + delta + shots.length) % shots.length)),
    [shots.length],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, step]);

  if (!shots.length) return null;

  return (
    <>
      <div className="gallery">
        {shots.map((shot, i) => (
          <button
            key={`${shot.src}-${i}`}
            className={`gallery__item ${shot.portrait ? 'is-portrait' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ampliar: ${shot.alt}`}
            data-reveal
            data-delay={String((i % 5) + 1)}
          >
            <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
            <span className="gallery__tag">{shot.category}</span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={close}
        >
          <button className="lightbox__close" onClick={close} aria-label="Fechar">
            <IconClose size={26} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Foto anterior"
          >
            <IconArrowLeft size={24} />
          </button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={shots[current].src} alt={shots[current].alt} />
            <figcaption>{shots[current].alt}</figcaption>
          </figure>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Próxima foto"
          >
            <IconArrowRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
