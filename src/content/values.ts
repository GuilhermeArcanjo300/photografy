/** "Minha forma de trabalhar" — capítulo 2, bloco 4 do briefing "Site 02". */
export type Value = { icon: 'safety' | 'direction' | 'care' | 'sparkle'; title: string; text: string };

export const VALUES: Value[] = [
  {
    icon: 'safety',
    title: 'Segurança',
    text: 'Especialização em fotografia newborn, sempre respeitando o tempo e o conforto do bebê.',
  },
  {
    icon: 'direction',
    title: 'Direção completa',
    text: 'Você não precisa saber posar. Eu conduzo todo o ensaio de forma leve e natural.',
  },
  {
    icon: 'care',
    title: 'Atendimento personalizado',
    text: 'Cada família recebe atenção desde o primeiro contato até a entrega das fotografias.',
  },
  {
    icon: 'sparkle',
    title: 'Experiência',
    text: 'Mais do que fotografar, quero que vocês vivam um momento especial.',
  },
];
