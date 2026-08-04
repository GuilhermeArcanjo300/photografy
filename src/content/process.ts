/** The six steps of working with the studio, from first contact to delivery. */
export type Step = { title: string; text: string };

export const PROCESS: Step[] = [
  {
    title: 'Contato',
    text: 'Você me chama no WhatsApp, conta o que está buscando e eu verifico a disponibilidade na agenda.',
  },
  {
    title: 'Planejamento',
    text: 'Conversamos sobre o seu estilo, o cenário, as roupas e cada detalhe do dia. Nada é decidido às pressas.',
  },
  {
    title: 'Ensaio',
    text: 'No dia, você recebe direção completa do início ao fim. Não precisa saber posar — esse trabalho é meu.',
  },
  {
    title: 'Seleção',
    text: 'Você recebe a galeria e escolhe com calma as fotos que mais tocaram o seu coração.',
  },
  {
    title: 'Edição',
    text: 'Cada foto escolhida passa por edição profissional e delicada. Nunca entrego imagens sem tratamento.',
  },
  {
    title: 'Entrega',
    text: 'Você recebe as fotos digitais e impressas 15x21, além do vídeo making of cinematográfico.',
  },
];
