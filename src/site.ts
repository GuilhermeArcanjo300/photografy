/**
 * Central place for the studio's identity and contact details.
 *
 * Every value below comes from the official Deise Akemi Fotografia material.
 * Fields left empty are the ones the PDFs never state — fill them in and they
 * appear on the site automatically (the UI hides empty values).
 */
export const SITE = {
  name: 'Deise Akemi',
  fullName: 'Deise Akemi Fotografia',
  role: 'Especialista em Newborn, Gestante e Fotografia de Família',
  tagline:
    'O tempo passa. As lembranças permanecem. Guarde as mais importantes para sempre.',
  phoneDisplay: '(19) 99786-1306',
  phoneE164: '+5519997861306',
  instagramHandle: '@deise.akemi',
  instagram: 'https://www.instagram.com/deise.akemi/',

  /** TODO: preencher com o e-mail real do estúdio (ainda não informado). */
  email: '',
  /** Região de atendimento (briefing "Site 02", rodapé). */
  city: 'Capivari e região',
  /** TODO: endereço do estúdio, se quiser exibir mapa. */
  address: '',

  /** Site URL used for canonical tags and the sitemap. */
  url: 'https://photografy.vercel.app',
} as const;

/** Builds a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  const digits = SITE.phoneE164.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Default WhatsApp link used by the navbar, hero and floating button. */
export const WHATSAPP = whatsappLink(
  'Olá, Deise! Vi seu site e gostaria de saber mais sobre os ensaios.',
);
