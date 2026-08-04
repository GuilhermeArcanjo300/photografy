import { WHATSAPP, whatsappLink } from '../../site';
import { IconWhatsApp } from './Icons';
import './cta-band.scss';

/**
 * Closing call to action, repeated after the important sections
 * (briefing item 17 — CTA após cada seção importante).
 */
export function CtaBand({
  kicker = 'Vamos conversar',
  title,
  text,
  label = 'Pedir orçamento pelo WhatsApp',
  message,
}: {
  kicker?: string;
  title: string;
  text?: string;
  label?: string;
  message?: string;
}) {
  return (
    <section className="cta-band section--dark">
      <div className="container cta-band__inner" data-reveal>
        <p className="kicker kicker--center kicker--light">{kicker}</p>
        <h2 className="cta-band__title">{title}</h2>
        {text && <p className="cta-band__text">{text}</p>}

        <a
          href={message ? whatsappLink(message) : WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="btn btn--gold"
        >
          <IconWhatsApp size={17} />
          {label}
        </a>
      </div>
    </section>
  );
}
