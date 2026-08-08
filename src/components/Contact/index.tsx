import { SITE, WHATSAPP } from '../../site';
import { IconInstagram, IconWhatsApp } from '../ui/Icons';
import './style.scss';

/** Contato — capítulo 5 do briefing "Site 02". */
export function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container contact__inner" data-reveal>
        <p className="kicker kicker--center">Contato</p>
        <h2 className="section-title">Vamos conversar?</h2>
        <p className="lead contact__lead">
          Será um prazer conhecer a sua história e ajudar a transformar este
          momento em lembranças para toda a vida.
        </p>

        <div className="contact__actions">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn btn--gold"
          >
            <IconWhatsApp size={17} />
            WhatsApp
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn btn--ghost"
          >
            <IconInstagram size={17} />
            Instagram
          </a>
        </div>

        <p className="contact__meta">
          {SITE.phoneDisplay} · {SITE.instagramHandle}
          {SITE.city && ` · ${SITE.city}`}
        </p>
      </div>
    </section>
  );
}
