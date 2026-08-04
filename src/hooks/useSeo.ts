import { useEffect } from 'react';
import { SITE } from '../site';

type Seo = {
  title: string;
  description: string;
  /** Path only, e.g. `/experiencias/newborn`. */
  path: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    const [name, val] = selector.replace(/meta\[|\]/g, '').split('=');
    el.setAttribute(name, val.replace(/"/g, ''));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Keeps the document title, description, canonical URL and Open Graph tags in
 * sync with the current route (briefing item 14 — títulos únicos por página).
 */
export function useSeo({ title, description, path }: Seo) {
  useEffect(() => {
    const full = `${SITE.url}${path}`;

    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', full);

    let link = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = full;
  }, [title, description, path]);
}
