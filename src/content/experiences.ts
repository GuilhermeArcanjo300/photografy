/**
 * The studio's experiences (ensaios).
 *
 * All copy, collections and prices below are transcribed from the official
 * Deise Akemi Fotografia PDFs (temporada 2026). To update a price or add a
 * photo, edit this file — every page reads from here.
 *
 * `collections: []` means the PDFs don't state a price for that experience yet,
 * and the page shows "valores sob consulta" with a WhatsApp button instead of
 * inventing numbers.
 */
import { whatsappLink } from '../site';

import imgNewborn from '../assets/img/optimized/slide-1.webp';
import imgNewbornDetail from '../assets/img/optimized/shoots1.webp';
import imgGestante from '../assets/img/optimized/shoots2.webp';
import imgInfancia from '../assets/img/optimized/shoots3.webp';
import imgPrimeiroAno from '../assets/img/optimized/shoots-main.webp';

export type Collection = {
  name: string;
  items: string[];
  price: string;
  installments?: string;
  altPrice?: string;
  highlight?: string;
};

export type Experience = {
  slug: string;
  name: string;
  /** Short label for cards and the menu. */
  short: string;
  /** Headline from the PDF cover. */
  headline: string;
  /** One-line summary used on cards. */
  summary: string;
  /** Emotional copy, one string per paragraph. */
  intro: string[];
  /** Pull quote from the PDF. */
  quote?: string;
  howItWorks: string[];
  included: string[];
  collections: Collection[];
  collectionsNote?: string;
  info: string[];
  gift?: { title: string; text: string };
  /** Extra editorial block (e.g. the cake rules, clothing tips). */
  note?: { title: string; body: string[] };
  image?: string;
  /**
   * CSS object-position for the banner crop. Portrait photos usually need the
   * focus pulled up so faces aren't cut off by the wide banner.
   */
  focus?: string;
  gallery?: string[];
  order: number;
};

const q = (name: string) =>
  whatsappLink(
    `Olá, Deise! Vi seu site e gostaria de um orçamento para o ensaio ${name}.`,
  );

export const EXPERIENCES: Experience[] = [
  {
    slug: 'gestante',
    name: 'Ensaio Gestante',
    short: 'Gestante',
    headline: 'À espera do maior amor da sua vida',
    summary:
      'Um dia pensado exclusivamente para você se sentir linda, segura e acolhida.',
    intro: [
      'Mais do que fotografar gestantes, acredito que cada mãe merece viver uma experiência inesquecível.',
      'Meu objetivo é fazer com que você se sinta linda, segura e acolhida durante todo o ensaio. Enquanto você vive esse momento, eu transformo emoções em lembranças que permanecerão por toda a vida.',
      'Porque daqui a alguns anos, essas fotografias serão uma das maiores heranças que seu filho poderá receber.',
      'Você será orientada durante todo o ensaio. Não precisa saber posar — meu trabalho é revelar sua beleza com leveza, elegância e naturalidade.',
    ],
    quote:
      'Antes mesmo de nascer, já existe uma história de amor sendo escrita.',
    howItWorks: [
      'Escolhemos a data',
      'Conversamos sobre seu estilo',
      'Realizamos o ensaio',
      'Você escolhe suas fotos',
      'Recebe suas lembranças cuidadosamente editadas',
    ],
    included: [
      'Direção completa durante todo o ensaio',
      'Ajuda na escolha dos looks',
      'Acesso ao acervo de vestidos',
      'Ensaio realizado sem pressa, respeitando o ritmo de cada gestante',
      'Entrega de fotos digitais e impressas 15x21',
      'Vídeo Making Of Cinematográfico',
    ],
    collections: [
      {
        name: 'Coleção Essencial',
        items: ['10 fotos digitais', '10 fotos impressas 15x21'],
        price: 'R$ 450,00',
      },
      {
        name: 'Coleção Elegance',
        items: ['20 fotos digitais', '20 fotos impressas 15x21'],
        price: 'R$ 690,00',
        highlight: 'mais escolhida',
      },
      {
        name: 'Coleção Signature',
        items: ['30 fotos digitais', '30 fotos impressas 15x21'],
        price: 'R$ 950,00',
      },
    ],
    collectionsNote:
      'Escolha a coleção que melhor combina com a forma como você deseja guardar essa lembrança.',
    info: [
      'Agendamento mediante sinal',
      'O ensaio dura aproximadamente 2 horas',
      'Fotos extras: R$ 30,00',
      'Álbum disponível à parte (não incluso)',
      'Entrega das fotos até 10 dias úteis após a escolha das fotos',
      'Forma de pagamento PIX ou Cartão de Crédito (com acréscimo da operadora)',
    ],
    gift: {
      title: 'Presente da Deise Akemi Fotografia',
      text: 'Todas as gestantes recebem um vídeo curto de making of do ensaio para reviver esse momento especial e compartilhar essa fase tão única.',
    },
    image: imgGestante,
    focus: 'center 8%',
    gallery: [imgGestante],
    order: 1,
  },

  {
    slug: 'newborn',
    name: 'Ensaio Newborn',
    short: 'Newborn',
    headline: 'A memória dos primeiros dias do maior amor da sua vida',
    summary:
      'Especialista em ensaio newborn seguro, com técnica humanizada e carinho quase materno.',
    intro: [
      'Especialista em fotografia newborn formada pela Escola de Fotografia Newborn, domino a arte de capturar a essência dos primeiros dias do bebê.',
      'Unindo técnica, segurança e um carinho quase materno, entrego imagens que não são apenas fotos: são histórias de amor contadas em detalhes.',
    ],
    quote:
      'Não é apenas um ensaio. É a memória dos primeiros dias do maior amor da sua vida!',
    howItWorks: [
      'Faça o pix para garantir a data na agenda',
      'Envie seus dados para emissão do contrato',
      'Receba as orientações para o grande dia',
      'Pronto! O ensaio newborn do seu bebê está garantido',
    ],
    included: [
      'Respeito total ao seu bebê, com técnica humanizada e moderna',
      'Todos os acessórios e roupinhas são por nossa conta',
      'Acessórios higienizados a cada ensaio para máxima segurança',
      'Edição profissional que realça a beleza natural do bebê',
      'Pais e irmãos podem fotografar sem nenhum custo adicional',
      'Atendimento também aos finais de semana',
    ],
    collections: [
      {
        name: 'Newborn 5',
        items: [
          '5 fotos digitais + impressas 15x21',
          '1 sessão com até 3h de duração',
          'Fotos com a família',
          'Cenário puff',
        ],
        price: 'R$ 390,00',
        installments: 'ou 2x R$ 220,00 no cartão sem juros (entrada + 1 parcela)',
        altPrice: 'à vista',
      },
      {
        name: 'Newborn 10',
        items: [
          '10 fotos digitais + impressas 15x21',
          '1 sessão com até 3h de duração',
          'Fotos com a família',
          'Cenário puff',
          'Cenário caminha',
        ],
        price: 'R$ 650,00',
        installments: 'ou 3x R$ 240,00 no cartão sem juros (entrada + 2 parcelas)',
        altPrice: 'à vista',
        highlight: 'mais escolhida',
      },
      {
        name: 'Newborn 15',
        items: [
          '15 fotos digitais + impressas 15x21',
          '1 sessão com até 3h de duração',
          'Fotos com a família',
          'Cenário puff',
          'Cenário caminha',
          'Cenário baldinho',
        ],
        price: 'R$ 950,00',
        installments: 'ou 4x R$ 270,00 no cartão sem juros (entrada + 3 parcelas)',
        altPrice: 'à vista',
      },
    ],
    info: [
      'Foto extra: R$ 40,00 cada',
      'Não entregamos fotos sem edição',
      'Não aceitamos cheques',
      'Não agendamos horário sem pagamento de sinal antecipado',
      'Preço e condições sujeitos a alteração, sem aviso prévio',
      'O simples envio do orçamento não garante disponibilidade na agenda — se tiver interesse, contrate mesmo sem saber a data exata do parto',
    ],
    image: imgNewborn,
    focus: 'center 42%',
    gallery: [imgNewborn, imgNewbornDetail],
    order: 2,
  },

  {
    slug: 'revelacao',
    name: 'Ensaio Revelação',
    short: 'Revelação',
    headline: 'O momento em que a novidade vira festa',
    summary:
      'O registro da emoção mais esperada: a revelação que a família guarda para sempre.',
    intro: [
      'Existe um instante em que a notícia deixa de ser segredo e vira festa. Um olhar, um sorriso, uma lágrima que ninguém consegue conter.',
      'O ensaio revelação nasce para guardar exatamente essa emoção — com direção completa, leveza e todo o tempo necessário para que cada reação seja registrada com naturalidade.',
    ],
    howItWorks: [
      'Conversamos sobre a ideia e a data',
      'Planejamos juntos o cenário e os detalhes',
      'Realizamos o ensaio com direção completa',
      'Você escolhe suas fotos favoritas',
      'Recebe as lembranças cuidadosamente editadas',
    ],
    included: [
      'Direção completa durante todo o ensaio',
      'Planejamento do cenário e dos detalhes',
      'Participação da família',
      'Seleção de fotos acompanhada',
      'Entrega de fotos digitais editadas',
    ],
    collections: [],
    info: [
      'Agendamento mediante sinal',
      'Pagamento via Pix ou Cartão (com acréscimo da maquininha)',
    ],
    order: 3,
  },

  {
    slug: 'smash-the-cake',
    name: 'Smash the Cake',
    short: 'Smash the Cake',
    headline: 'O primeiro aniversário merece ser lembrado para sempre',
    summary:
      'Um momento que acontece apenas uma vez, registrado de forma divertida e delicada.',
    intro: [
      'O primeiro aninho passa em um piscar de olhos. O Smash the Cake foi criado para registrar essa fase tão especial de forma divertida, delicada e inesquecível.',
      'Cada cenário é pensado e montado com carinho para contar a história do seu bebê. Muito mais que fotografias: são memórias que sua família irá guardar para sempre.',
    ],
    quote:
      'O bolo acaba. O cenário é desmontado. As roupinhas deixam de servir. Mas as fotografias permanecerão para sempre!',
    howItWorks: [
      'Cenário exclusivo',
      'Decoração personalizada',
      'Figurino disponível no estúdio',
      'Tempo livre para o bebê explorar',
      'Participação dos pais',
      'Direção completa durante todo o ensaio',
      'Ambiente climatizado',
      'Muito carinho e paciência',
    ],
    included: [
      'Cenário exclusivo (minimalista ou temático)',
      'Figurinos disponíveis no estúdio (ou traga o seu, se preferir)',
      'Banho na banheira',
      'Participação dos pais (opcional)',
      'Direção completa durante todo o ensaio',
      'Seleção de fotos',
      'Entrega de fotos digitais e impressas 15x21',
      'Vídeo Making Of Cinematográfico',
    ],
    collections: [
      {
        name: 'Coleção Essencial',
        items: ['10 fotos digitais', '10 fotos impressas 15x21'],
        price: 'R$ 550,00',
      },
      {
        name: 'Coleção Elegance',
        items: ['20 fotos digitais', '20 fotos impressas 15x21'],
        price: 'R$ 790,00',
        highlight: 'favorita das famílias',
      },
      {
        name: 'Coleção Signature',
        items: ['30 fotos digitais', '30 fotos impressas 15x21'],
        price: 'R$ 1.090,00',
      },
    ],
    collectionsNote:
      'Escolha a coleção que melhor combina com a forma como você deseja guardar essa lembrança.',
    info: [
      'Agendamento mediante sinal',
      'O ensaio dura aproximadamente 2 horas',
      'Fotos extras: R$ 25,00',
      'Álbum disponível à parte (não incluso)',
    ],
    note: {
      title: 'Sobre o bolo',
      body: [
        'Para que cada família tenha liberdade de escolher o sabor, a decoração e atender às necessidades alimentares do bebê, o bolo é de responsabilidade da família e deverá ser levado no dia do ensaio.',
        'Dica: recomendamos um bolo pequeno, com cobertura leve (chantininho ou chantilly), evitando pasta americana, para que o bebê possa interagir com conforto.',
        'Seu bebê é alérgico ou você prefere um ensaio sem bolo? Sem problemas! Todos os pacotes podem ser realizados com ou sem o bolo, mantendo toda a diversão, a delicadeza e a etapa da banheira.',
      ],
    },
    order: 4,
  },

  {
    slug: 'primeiro-ano',
    name: 'O Primeiro Ano',
    short: 'O Primeiro Ano',
    headline: 'Porque o primeiro ano passa depressa',
    summary:
      'Acompanhamento fotográfico mês a mês: cada conquista do bebê virando uma linha do tempo.',
    intro: [
      'Mil descobertas. O primeiro sorriso. A primeira gargalhada. Os primeiros dentinhos. Os primeiros passinhos.',
      'Cada fase acontece apenas uma vez. E cada fotografia será uma lembrança que sua família guardará para sempre.',
      'Cada sessão registra uma nova conquista. Quando todas se unem, contam a história do primeiro ano do seu bebê.',
    ],
    quote:
      'Porque o primeiro ano passa depressa... mas as lembranças permanecem para sempre.',
    howItWorks: [
      'Sessões mensais, bimestrais ou trimestrais',
      'Cenários exclusivos',
      'Figurinos disponíveis',
      'Direção completa',
      'Participação dos pais',
      'Muito carinho e paciência',
      'Registro da evolução do bebê',
    ],
    included: [
      'Cenários exclusivos',
      'Fotos em família (opcionais)',
      'Direção completa durante todo o ensaio',
      'Seleção de fotos',
      'Entrega de fotos digitais e impressas 15x21',
      'Vídeo Making Of Cinematográfico',
    ],
    collections: [
      {
        name: 'Trimestral',
        items: [
          '4 sessões',
          '15 fotos digitais',
          '15 fotos impressas 15x21',
          '60 fotos ao final',
        ],
        price: 'R$ 1.650,00',
        installments: '5x R$ 330,00',
        highlight: 'mais escolhida',
      },
      {
        name: 'Bimestral',
        items: [
          '6 sessões',
          '12 fotos digitais',
          '12 fotos impressas 15x21',
          '72 fotos ao final',
        ],
        price: 'R$ 1.950,00',
        installments: '5x R$ 390,00',
      },
      {
        name: 'Mensal',
        items: [
          '11 sessões',
          '10 fotos digitais',
          '10 fotos impressas 15x21',
          '110 fotos ao final',
        ],
        price: 'R$ 2.310,00',
        installments: '11x R$ 210,00',
      },
    ],
    collectionsNote:
      'Escolha a coleção que melhor representa a forma como você deseja guardar esse capítulo da infância do seu filho.',
    info: [
      'Fotos extras: R$ 20,00',
      'Álbum disponível à parte (não incluso)',
      'Pagamento via Pix ou Cartão (com acréscimo da maquininha)',
    ],
    gift: {
      title: 'Um presente para guardar para sempre',
      text: 'Ao concluir o acompanhamento do primeiro ano, sua família receberá um quadro 20x25 preparado com muito carinho para celebrar essa linda parceria. Porque algumas lembranças merecem ocupar um lugar especial dentro de casa.',
    },
    note: {
      title: 'Uma linha do tempo bem delicada',
      body: [
        '2 meses · 4 meses · 6 meses · 8 meses · 10 meses · 12 meses.',
        'Cada sessão registra uma nova conquista. Quando todas se unem, contam a história do primeiro ano do seu bebê.',
      ],
    },
    image: imgPrimeiroAno,
    focus: 'center 38%',
    gallery: [imgPrimeiroAno],
    order: 5,
  },

  {
    slug: 'capitulos-da-infancia',
    name: 'Capítulos da Infância',
    short: 'Capítulos da Infância',
    headline: 'Cada aniversário merece um novo capítulo da sua história',
    summary:
      'Para cada idade que chega, um ensaio que guarda a personalidade em formação.',
    intro: [
      'O primeiro aniversário passou. Agora surgem novas descobertas, novas brincadeiras, novas risadas e uma personalidade que cresce um pouquinho mais a cada ano.',
      'Cada idade é única. Cada sorriso conta uma nova história. E cada fotografia será uma lembrança que sua família guardará para sempre.',
    ],
    quote:
      'Porque a infância é feita de capítulos... e cada um deles merece ser lembrado.',
    howItWorks: [
      'Cenário exclusivo',
      'Decoração personalizada',
      'Figurinos disponíveis no estúdio (quando disponíveis)',
      'Participação dos pais',
      'Direção completa durante todo o ensaio',
      'Ambiente climatizado',
      'Muito carinho, paciência e diversão',
    ],
    included: [
      'Cenário exclusivo',
      'Tempo livre para brincar',
      'Fotos em família (opcionais)',
      'Direção completa durante todo o ensaio',
      'Seleção de fotos',
      'Entrega de fotos digitais e impressas 15x21',
      'Vídeo Making Of Cinematográfico',
    ],
    collections: [
      {
        name: 'Coleção Essencial',
        items: ['10 fotos digitais', '10 fotos impressas 15x21'],
        price: 'R$ 350,00',
      },
      {
        name: 'Coleção Elegance',
        items: ['20 fotos digitais', '20 fotos impressas 15x21'],
        price: 'R$ 550,00',
        highlight: 'favorita das famílias',
      },
      {
        name: 'Coleção Signature',
        items: ['30 fotos digitais', '30 fotos impressas 15x21'],
        price: 'R$ 750,00',
      },
    ],
    collectionsNote:
      'Escolha a coleção que melhor representa a forma como você deseja guardar esse capítulo da infância do seu filho.',
    info: [
      'Agendamento mediante sinal',
      'O ensaio dura aproximadamente 2 horas',
      'Fotos extras: R$ 25,00',
      'Álbum disponível à parte (não incluso)',
      'Pagamento via Pix ou Cartão (com acréscimo da maquininha)',
    ],
    note: {
      title: 'Um detalhe que deixa o dia ainda mais inesquecível',
      body: [
        'Se a família desejar, poderá trazer um mini bolo para cantar os parabéns e registrar algumas fotos comemorativas. É um item opcional, pensado para deixar esse capítulo da infância ainda mais doce.',
      ],
    },
    image: imgInfancia,
    focus: 'center 18%',
    gallery: [imgInfancia],
    order: 6,
  },

  {
    slug: 'familia',
    name: 'Ensaio Família',
    short: 'Família',
    headline: 'O retrato de quem caminha junto',
    summary:
      'Um ensaio leve para guardar a família exatamente como ela é hoje.',
    intro: [
      'As casas mudam, as rotinas mudam, as crianças crescem. O ensaio de família existe para guardar como vocês eram exatamente hoje.',
      'Sem poses rígidas: com direção completa, conversa e tempo para que os gestos verdadeiros apareçam — em estúdio ou em área externa.',
    ],
    howItWorks: [
      'Escolhemos a data e o local',
      'Conversamos sobre o estilo e as roupas',
      'Realizamos o ensaio com direção completa',
      'Vocês escolhem as fotos favoritas',
      'Recebem as lembranças cuidadosamente editadas',
    ],
    included: [
      'Direção completa durante todo o ensaio',
      'Orientação na escolha das roupas',
      'Ensaio em estúdio ou área externa',
      'Seleção de fotos acompanhada',
      'Entrega de fotos digitais editadas',
    ],
    collections: [],
    info: [
      'Agendamento mediante sinal',
      'Pagamento via Pix ou Cartão (com acréscimo da maquininha)',
    ],
    order: 7,
  },

  {
    slug: 'memorias-de-natal',
    name: 'Memórias de Natal',
    short: 'Natal',
    headline: 'Porque os melhores presentes são as lembranças que criamos em família',
    summary:
      'Mini ensaio de Natal — Temporada 2026, com cenário exclusivo da estação.',
    intro: [
      'O Natal acontece todos os anos... mas cada Natal conta uma história diferente.',
      'Que a sua família nunca deixe de registrar esses capítulos tão especiais.',
      'O cenário oficial desta temporada será divulgado mais próximo ao Natal.',
    ],
    howItWorks: [
      'Mini ensaio',
      'Duração de até 30 minutos',
      'Família e crianças',
      'Direção completa',
      'Vídeo Making Of',
      'Seleção das fotos',
    ],
    included: [
      'Cenário exclusivo da Temporada 2026',
      'Direção completa durante todo o ensaio',
      'Participação da família e das crianças',
      'Vídeo Making Of',
      'Seleção das fotos',
    ],
    collections: [
      {
        name: 'Mini Ensaio Natal',
        items: ['10 fotos digitais', 'Até 30 minutos de ensaio'],
        price: 'R$ 220,00',
        installments: 'Cliente nova',
      },
      {
        name: 'Mini Ensaio Natal',
        items: ['10 fotos digitais', 'Até 30 minutos de ensaio'],
        price: 'R$ 190,00',
        installments: 'Para clientes que já fotografam comigo',
        highlight: 'clientes fiéis',
      },
    ],
    collectionsNote:
      'Uma forma de agradecer às famílias que continuam escrevendo essa história comigo.',
    info: [
      'Temporada 2026',
      'O cenário oficial será divulgado mais próximo ao Natal',
      'Agendamento mediante sinal',
    ],
    note: {
      title: 'Sugestão de roupas',
      body: [
        'Para harmonizar com qualquer cenário da Temporada de Natal 2026, recomendamos roupas em tons neutros, como branco, bege, cinza, preto, vinho e verde-musgo.',
        'Evite estampas muito chamativas e personagens infantis para valorizar ainda mais as fotografias.',
      ],
    },
    order: 8,
  },
];

/** WhatsApp link pre-filled for a specific experience. */
export function quoteLink(exp: Experience): string {
  return q(exp.name);
}

export function findExperience(slug?: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}
