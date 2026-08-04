/**
 * Frequently asked questions.
 *
 * Answers are grounded in the official PDFs (valores, prazos, formas de
 * pagamento). Anything the material doesn't define — such as a reschedule
 * policy — points the client to WhatsApp instead of stating a rule.
 */
export type FaqItem = { q: string; a: string };

export const FAQ: FaqItem[] = [
  {
    q: 'O que eu preciso levar? Vocês emprestam roupas?',
    a: 'Depende do ensaio. No newborn, todos os acessórios e roupinhas são por nossa conta — você só precisa relaxar e curtir. No gestante, você tem acesso ao acervo de vestidos e ajuda na escolha dos looks. No Smash the Cake e nos Capítulos da Infância há figurinos disponíveis no estúdio, e a família também pode trazer o seu.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'O pagamento é via Pix ou cartão de crédito (com acréscimo da operadora). O agendamento é confirmado mediante sinal, e não trabalhamos com cheques. No newborn também há opção de parcelamento no cartão sem juros.',
  },
  {
    q: 'Preciso pagar para reservar a data?',
    a: 'Sim. A data só é garantida na agenda após o pagamento do sinal. No caso do newborn, o ideal é contratar mesmo antes de saber a data exata do parto — o simples envio do orçamento não reserva a agenda.',
  },
  {
    q: 'Posso comprar fotos extras depois?',
    a: 'Pode! O valor da foto extra varia por ensaio: R$ 20,00 no acompanhamento do Primeiro Ano, R$ 25,00 no Smash the Cake e nos Capítulos da Infância, R$ 30,00 no gestante e R$ 40,00 no newborn.',
  },
  {
    q: 'Qual é o prazo de entrega das fotos?',
    a: 'No ensaio gestante, a entrega acontece em até 10 dias úteis após a sua escolha das fotos. Nos demais ensaios o prazo é combinado no momento da contratação — todas as fotos entregues passam por edição profissional, e não entregamos imagens sem tratamento.',
  },
  {
    q: 'Quanto tempo dura o ensaio?',
    a: 'O gestante, o Smash the Cake e os Capítulos da Infância duram aproximadamente 2 horas. O newborn tem até 3 horas, respeitando totalmente o ritmo do bebê. O mini ensaio de Natal dura até 30 minutos.',
  },
  {
    q: 'A família pode participar das fotos?',
    a: 'Sim, e sem custo adicional. No newborn, pais e irmãos podem fotografar com o bebê em todos os planos. Nos outros ensaios a participação da família também está inclusa (opcional).',
  },
  {
    q: 'Preciso reagendar o ensaio. Como faço?',
    a: 'Me chame no WhatsApp o quanto antes que a gente encontra a melhor solução juntas. Cada situação é conversada caso a caso, especialmente em ensaios newborn, que dependem da data de nascimento do bebê.',
  },
  {
    q: 'O álbum está incluso?',
    a: 'O álbum é um item à parte e não está incluso nas coleções. As coleções incluem as fotos digitais e as impressas 15x21 — se você quiser um álbum, me chame no WhatsApp que eu te passo as opções.',
  },
  {
    q: 'Vocês atendem nos fins de semana?',
    a: 'Sim, o ensaio newborn tem atendimento também aos finais de semana. Para os outros ensaios, a data é combinada de acordo com a agenda.',
  },
];
