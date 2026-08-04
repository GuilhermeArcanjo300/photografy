import { useEffect } from 'react';

/**
 * Reveals every `[data-reveal]` element as it scrolls into view by toggling an
 * `is-visible` class. The accompanying CSS handles the transition and honours
 * `prefers-reduced-motion`. Falls back to showing everything when
 * IntersectionObserver is unavailable.
 *
 * Pass a `key` (usually the route path) so the observer is rebuilt whenever the
 * page swaps its content.
 */
export function useScrollReveal(key?: string) {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}
