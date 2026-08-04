/**
 * Client testimonials.
 *
 * IMPORTANT: only real, authorized reviews belong here — the briefing asks for
 * "avaliações reais com nome e foto quando autorizado". Nothing is invented, so
 * this list starts empty and the Depoimentos section simply doesn't render
 * until the first real testimonial is added.
 *
 * To add one, copy the block below (photo is optional):
 *
 *   {
 *     name: 'Nome da cliente',
 *     role: 'Ensaio Newborn · 2026',
 *     text: 'Texto do depoimento exatamente como a cliente escreveu.',
 *     photo: '',
 *   },
 */
export type Testimonial = {
  name: string;
  role?: string;
  text: string;
  /** Optional imported image, used only when the client authorized it. */
  photo?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
