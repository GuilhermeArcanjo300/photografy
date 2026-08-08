/**
 * FAQ — capítulo 5 do briefing "Site 02".
 *
 * As respostas são exatamente as que o estúdio escreveu. Nada de prazo ou
 * política inventada: onde o material não define, a resposta manda falar no
 * WhatsApp.
 */
export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: 'Como faço para agendar um ensaio?',
    a: 'Basta entrar em contato pelo WhatsApp. Vou explicar todas as opções, enviar o guia completo da experiência escolhida e ajudar você a encontrar a melhor data.',
  },
  {
    q: 'Onde os ensaios são realizados?',
    a: 'Os ensaios acontecem em meu estúdio, preparado para receber cada família com conforto e segurança. Alguns ensaios também podem ser realizados em ambientes externos, conforme a proposta.',
  },
  {
    q: 'Vocês ajudam durante o ensaio?',
    a: 'Sim! Você não precisa se preocupar com poses. Durante todo o ensaio eu conduzo cada momento de forma leve e natural.',
  },
  {
    q: 'Em quanto tempo recebo as fotos?',
    a: 'Após a seleção das imagens, o prazo de entrega é informado conforme a experiência contratada.',
  },
  {
    q: 'Como solicito um orçamento?',
    a: 'É só clicar no botão do WhatsApp. Você receberá todas as informações e o guia completo da experiência desejada.',
  },
];
