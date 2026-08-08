import { Link } from 'react-router-dom';
import { WHATSAPP, whatsappLink } from '../../site';
import { IconWhatsApp } from './Icons';
import './cta-band.scss';

/**
 * Chamada final — capítulo 1 do briefing: fundo escuro, foto emocional ao
 * fundo, um botão principal e um secundário.
 */
export function CtaBand({
  title,
  text,
  image,
  focus = 'center 40%',
  primary,
  secondaryLabel = 'Solicitar orçamento',
  secondaryMessage,
}: {
  title: string;
  text?: string;
  image?: string;
  focus?: string;
  /** Botão principal que leva a uma página interna. */
  primary?: { label: string; to: string };
  secondaryLabel?: string;
  secondaryMessage?: string;
}) {
  return (
    <section className={`cta-band ${image ? 'cta-band--photo' : ''}`}>
      {image && (
        <div className="cta-band__media">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            style={{ objectPosition: focus }}
          />
          <div className="cta-band__veil" />
        </div>
      )}

      <div className="container cta-band__inner" data-reveal>
        <h2 className="cta-band__title">{title}</h2>
        {text && <p className="cta-band__text">{text}</p>}

        <div className="cta-band__actions">
          {primary && (
            <Link to={primary.to} className="btn btn--gold">
              {primary.label}
            </Link>
          )}
          <a
            href={secondaryMessage ? whatsappLink(secondaryMessage) : WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className={primary ? 'btn btn--ghost-light' : 'btn btn--gold'}
          >
            <IconWhatsApp size={17} />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
