import { useState } from 'react';
import { SITE, WHATSAPP, whatsappLink } from '../../site';
import { EXPERIENCES } from '../../content/experiences';
import {
  IconInstagram,
  IconPhone,
  IconWhatsApp,
  IconArrowUpRight,
} from '../ui/Icons';
import './style.scss';

/**
 * Contato — briefing items 13 and 16.
 *
 * The form composes a WhatsApp message instead of posting to a server: it needs
 * no backend, can't be abused by spam bots, and lands the lead straight in the
 * channel the studio already uses.
 */
export function Contact() {
  const [form, setForm] = useState({
    name: '',
    experience: '',
    date: '',
    message: '',
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Olá, Deise! Meu nome é ${form.name || '(nome)'}.`,
      form.experience && `Tenho interesse no ensaio: ${form.experience}.`,
      form.date && `Data prevista: ${form.date}.`,
      form.message && `\n${form.message}`,
    ].filter(Boolean);

    window.open(whatsappLink(lines.join(' ')), '_blank', 'noopener');
  };

  return (
    <section className="section contact" id="contato">
      <div className="container contact__grid">
        <div className="contact__intro" data-reveal>
          <p className="kicker">Contato</p>
          <h2 className="section-title">
            Vamos combinar <em>o seu ensaio</em>
          </h2>
          <p className="lead">
            Me conte o que você está buscando que eu verifico a disponibilidade
            na agenda. Respondo pessoalmente cada mensagem.
          </p>

          <ul className="contact__channels">
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <IconWhatsApp size={19} />
                <span>
                  <small>WhatsApp</small>
                  {SITE.phoneDisplay}
                </span>
                <IconArrowUpRight size={15} />
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                <IconInstagram size={19} />
                <span>
                  <small>Instagram</small>
                  {SITE.instagramHandle}
                </span>
                <IconArrowUpRight size={15} />
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneE164}`}>
                <IconPhone size={19} />
                <span>
                  <small>Telefone</small>
                  {SITE.phoneDisplay}
                </span>
              </a>
            </li>
            {SITE.email && (
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <IconArrowUpRight size={19} />
                  <span>
                    <small>E-mail</small>
                    {SITE.email}
                  </span>
                </a>
              </li>
            )}
          </ul>

          {SITE.city && <p className="contact__city">{SITE.city}</p>}
        </div>

        <form className="contact__form" onSubmit={onSubmit} data-reveal data-delay="1">
          <p className="contact__form-title">Peça seu orçamento</p>

          <label className="field">
            <span>Seu nome</span>
            <input
              type="text"
              value={form.name}
              onChange={set('name')}
              placeholder="Como você se chama?"
              required
            />
          </label>

          <label className="field">
            <span>Qual ensaio?</span>
            <select value={form.experience} onChange={set('experience')}>
              <option value="">Escolha uma experiência</option>
              {EXPERIENCES.map((e) => (
                <option key={e.slug} value={e.name}>
                  {e.name}
                </option>
              ))}
              <option value="Ainda não sei">Ainda não sei</option>
            </select>
          </label>

          <label className="field">
            <span>Data prevista (opcional)</span>
            <input
              type="text"
              value={form.date}
              onChange={set('date')}
              placeholder="Ex: outubro, ou a data do parto"
            />
          </label>

          <label className="field">
            <span>Mensagem (opcional)</span>
            <textarea
              rows={4}
              value={form.message}
              onChange={set('message')}
              placeholder="Conte um pouco do que você imagina para o ensaio"
            />
          </label>

          <button type="submit" className="btn btn--gold contact__submit">
            <IconWhatsApp size={17} />
            Enviar pelo WhatsApp
          </button>

          <p className="contact__note">
            Ao enviar, o WhatsApp abre com a sua mensagem pronta — você só precisa
            confirmar o envio.
          </p>
        </form>
      </div>
    </section>
  );
}
