import { WHATSAPP } from '../../site';
import { useScrolled } from '../../hooks/useScrolled';
import { IconWhatsApp } from '../ui/Icons';
import './style.scss';

/** Persistent quote shortcut — briefing item 17 (conversão). */
export function WhatsAppFab() {
  const visible = useScrolled(520);

  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={`fab ${visible ? 'is-visible' : ''}`}
      aria-label="Pedir orçamento pelo WhatsApp"
    >
      <IconWhatsApp size={23} />
      <span className="fab__label">Pedir orçamento</span>
    </a>
  );
}
