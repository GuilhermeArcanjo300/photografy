import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On navigation: jump to the top for a new page, or smooth-scroll to the
 * section when the URL carries a hash (used by the Depoimentos / FAQ / Contato
 * menu links, which point at sections of the home page).
 */
export function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait one frame so the target section exists before scrolling.
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}
