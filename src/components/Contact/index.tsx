import { SITE } from '../../site';
import {
  IconArrowUpRight,
  IconInstagram,
  IconPhone,
  IconWhatsApp,
} from '../ui/Icons';
import './style.scss';

const CHANNELS = [
  {
    icon: <IconWhatsApp size={26} />,
    label: 'WhatsApp',
    value: SITE.phoneDisplay,
    href: SITE.whatsapp,
    accent: true,
  },
  {
    icon: <IconInstagram size={26} />,
    label: 'Instagram',
    value: SITE.instagramHandle,
    href: SITE.instagram,
  },
  {
    icon: <IconPhone size={26} />,
    label: 'Telefone',
    value: SITE.phoneDisplay,
    href: `tel:+5519997861306`,
  },
];

export function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact__card" data-reveal>
          <span className="kicker kicker--center">Vamos conversar</span>
          <h2 className="contact__title">
            Vamos eternizar o <em>seu</em> momento?
          </h2>
          <p className="contact__text">
            Conta pra mim o que você tem em mente. Será um prazer cuidar de cada
            detalhe do seu ensaio e transformar esse momento em arte.
          </p>

          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary btn--whatsapp contact__main-cta"
          >
            <IconWhatsApp size={20} />
            Falar no WhatsApp
          </a>

          <ul className="contact__channels">
            {CHANNELS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`contact__channel ${c.accent ? 'is-accent' : ''}`}
                >
                  <span className="contact__channel-icon">{c.icon}</span>
                  <span className="contact__channel-info">
                    <span className="contact__channel-label">{c.label}</span>
                    <span className="contact__channel-value">{c.value}</span>
                  </span>
                  <IconArrowUpRight size={18} className="contact__channel-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
