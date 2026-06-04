import { SITE } from '../../site';
import { useScrolled } from '../../hooks/useScrolled';
import { IconWhatsApp } from '../ui/Icons';
import './style.scss';

export function WhatsAppFab() {
  const visible = useScrolled(500);

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={`wa-fab ${visible ? 'is-visible' : ''}`}
      aria-label="Agendar pelo WhatsApp"
    >
      <IconWhatsApp size={28} />
      <span className="wa-fab__label">Agendar ensaio</span>
    </a>
  );
}
