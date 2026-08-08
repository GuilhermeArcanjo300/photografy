/**
 * Coleções de Experiências — conteúdo dos capítulos 3 e 4 do briefing "Site 02".
 *
 * Regra do briefing: **nenhum preço aparece no site**. A conversão acontece pelo
 * botão "Solicitar Guia Completo", que abre o WhatsApp para a Deise enviar o PDF
 * daquela experiência. A tabela de valores fica em `docs/precos-2026.md`, só para
 * consulta interna.
 *
 * Para adicionar uma experiência nova (Perfil Profissional, 15 anos, etc.):
 * basta acrescentar um objeto aqui — a home, o índice, o rodapé e o sitemap
 * passam a listá-la sozinhos.
 */
import { whatsappLink } from '../site';

import imgNewborn from '../assets/img/optimized/slide-1.webp';
import imgNewbornDetail from '../assets/img/optimized/shoots1.webp';
import imgGestante from '../assets/img/optimized/shoots2.webp';
import imgInfancia from '../assets/img/optimized/shoots3.webp';
import imgPrimeiroAno from '../assets/img/optimized/shoots-main.webp';

export type Experience = {
  slug: string;
  /** Nome completo, usado no banner da galeria. */
  name: string;
  /** Nome curto, usado em cards, menu e rodapé. */
  short: string;
  /** Uma linha no card do índice. */
  cardText: string;
  /** Parágrafos de apresentação no topo da galeria. */
  intro: string[];
  /** Foto do banner. Sem foto, entra um cartão dourado com a inicial. */
  image?: string;
  /** object-position do banner, para o recorte não cortar rostos. */
  focus?: string;
  /** Fotos da galeria. O briefing pede de 20 a 30 por experiência. */
  gallery: string[];
  /** Qual foto o estúdio deve enviar para o banner (orientação do briefing). */
  bannerBrief: string;
  order: number;
};

export const EXPERIENCES: Experience[] = [
  {
    slug: 'revelacao',
    name: 'Ensaio Revelação',
    short: 'Revelação',
    cardText: 'A emoção da descoberta registrada em fotografias e vídeo.',
    intro: [
      'A emoção da descoberta de quem está chegando merece ser vivida intensamente.',
      'Um momento único registrado através de fotografias e vídeo.',
    ],
    gallery: [],
    bannerBrief: 'Foto dos pais descobrindo o sexo do bebê.',
    order: 1,
  },
  {
    slug: 'gestante',
    name: 'Ensaio Gestante',
    short: 'Gestante',
    cardText:
      'Um ensaio pensado para celebrar a espera pelo maior amor da sua vida.',
    intro: [
      'A espera por um filho transforma tudo.',
      'Registrar esse momento é guardar para sempre o início da história do maior amor da sua vida. Um ensaio leve, elegante e que merece ser lembrado.',
    ],
    image: imgGestante,
    focus: 'center 8%',
    gallery: [imgGestante],
    bannerBrief: 'Uma gestante olhando para a barriga.',
    order: 2,
  },
  {
    slug: 'newborn',
    name: 'Ensaio Newborn',
    short: 'Newborn',
    cardText:
      'Os primeiros dias do seu bebê registrados com delicadeza, segurança e muito carinho.',
    intro: [
      'Os primeiros dias do seu bebê passam rapidamente.',
      'Registrar esse início é preservar detalhes que, com o tempo, se tornam ainda mais preciosos.',
      'Cada ensaio é realizado com segurança, paciência e respeito ao tempo do bebê, proporcionando uma experiência tranquila para toda a família.',
    ],
    image: imgNewborn,
    focus: 'center 42%',
    gallery: [imgNewborn, imgNewbornDetail],
    bannerBrief: 'Um bebê olhando para cima ou dormindo.',
    order: 3,
  },
  {
    slug: 'primeiro-ano',
    name: 'O Primeiro Ano',
    short: 'O Primeiro Ano',
    cardText: 'A recordação do crescimento do seu bebê no primeiro ano de vida.',
    intro: [
      'Cada mês traz uma nova descoberta. Um novo sorriso, uma nova conquista, um novo jeitinho de ser.',
      'Registrar esse primeiro ano é preservar a fase mais intensa do crescimento do seu bebê.',
      'Uma coleção de memórias que será ainda mais valiosa com o passar dos anos.',
    ],
    image: imgPrimeiroAno,
    focus: 'center 38%',
    gallery: [imgPrimeiroAno],
    bannerBrief: 'Bebê entre 9 e 12 meses olhando para a câmera.',
    order: 4,
  },
  {
    slug: 'smash-the-cake',
    name: 'Ensaio Smash the Cake',
    short: 'Smash the Cake',
    cardText:
      'Uma experiência divertida e personalizada para comemorar o primeiro aniversário.',
    intro: [
      'Muito mais do que um bolo. Uma comemoração cheia de sorrisos, descobertas e diversão.',
      'O primeiro aniversário merece uma comemoração inesquecível, com ou sem bolo.',
      'Cenários exclusivos preparados com carinho para sua família.',
    ],
    gallery: [],
    bannerBrief: 'Bebê sorrindo.',
    order: 5,
  },
  {
    slug: 'capitulos-da-infancia',
    name: 'Capítulos da Infância',
    short: 'Capítulos da Infância',
    cardText: 'Cada nova fase merece um novo capítulo.',
    intro: [
      'Cada aniversário representa uma nova fase. Cada fase merece um capítulo.',
      'Registrar esse crescimento é construir uma lembrança que ficará para sempre.',
      'Uma forma leve e atemporal de registrar o crescimento do seu filho.',
    ],
    image: imgInfancia,
    focus: 'center 18%',
    gallery: [imgInfancia],
    bannerBrief: 'Criança maior.',
    order: 6,
  },
  {
    slug: 'memorias-de-natal',
    name: 'Memórias de Natal',
    short: 'Memórias de Natal',
    cardText: 'Transforme o Natal em uma tradição cheia de significado.',
    intro: [
      'O Natal passa. As lembranças ficam.',
      'Porque um abraço hoje será uma lembrança preciosa amanhã.',
      'Transforme essa época em uma tradição de família através de fotografias cheias de significados.',
    ],
    gallery: [],
    bannerBrief: 'Foto de família feliz.',
    order: 7,
  },
];

/** As quatro experiências destacadas na home (briefing, capítulo 1 — bloco 3). */
export const HOME_HIGHLIGHTS = [
  'revelacao',
  'gestante',
  'newborn',
  'primeiro-ano',
];

/** WhatsApp já com o pedido do guia daquela experiência. */
export function guideLink(exp: Experience): string {
  return whatsappLink(
    `Olá, Deise! Vi o site e gostaria de receber o guia completo do ensaio ${exp.short}.`,
  );
}

export function findExperience(slug?: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}
