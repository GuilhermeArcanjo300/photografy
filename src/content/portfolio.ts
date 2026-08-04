/**
 * Portfolio galleries, grouped by category (briefing item 9).
 *
 * Only real photos from the studio are listed. To add more, drop the file in
 * src/assets/img/photograph, run `npm run images`, then import the generated
 * .webp here and add it to the right category.
 */
import imgNewborn from '../assets/img/optimized/slide-1.webp';
import imgNewbornDetail from '../assets/img/optimized/shoots1.webp';
import imgGestante from '../assets/img/optimized/shoots2.webp';
import imgInfancia from '../assets/img/optimized/shoots3.webp';
import imgBebe from '../assets/img/optimized/shoots-main.webp';

export type Shot = {
  src: string;
  alt: string;
  category: string;
  /** Portrait images get a taller cell in the mosaic. */
  portrait?: boolean;
};

export const CATEGORIES = [
  'Todos',
  'Newborn',
  'Gestante',
  'Bebê',
  'Infantil',
] as const;

export const SHOTS: Shot[] = [
  {
    src: imgNewborn,
    alt: 'Recém-nascido dormindo enrolado em manta azul com toquinha de tricô',
    category: 'Newborn',
  },
  {
    src: imgNewbornDetail,
    alt: 'Close do rosto de um recém-nascido dormindo',
    category: 'Newborn',
    portrait: true,
  },
  {
    src: imgBebe,
    alt: 'Bebê dormindo em um balanço de madeira cercado por flores brancas',
    category: 'Bebê',
  },
  {
    src: imgGestante,
    alt: 'Gestante de vestido verde segurando a barriga em ensaio externo',
    category: 'Gestante',
    portrait: true,
  },
  {
    src: imgInfancia,
    alt: 'Menina sentada em banquinho de madeira usando óculos escuros',
    category: 'Infantil',
    portrait: true,
  },
];
