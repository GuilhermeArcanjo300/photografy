import { WHATSAPP } from '../../site';
import { useScrolled } from '../../hooks/useScrolled';
import { IconWhatsApp } from '../ui/Icons';
import './style.scss';

/**
 * Atalho permanente para o WhatsApp.
 * No desktop aparece depois da primeira rolagem; no celular fica sempre
 * visível, como o briefing pede ("garantir que o botão do WhatsApp apareça
 * sempre no celular").
 */
export function WhatsAppFab() {
  const scrolled = useScrolled(520);

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={`fab ${scrolled ? 'is-visible' : ''}`}
      aria-label="Falar pelo WhatsApp"
    >
      <IconWhatsApp size={23} />
      <span className="fab__label">Falar pelo WhatsApp</span>
    </a>
  );
}
