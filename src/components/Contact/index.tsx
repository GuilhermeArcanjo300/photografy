import { useState } from 'react';
import { SITE, WHATSAPP, whatsappLink } from '../../site';
import { EXPERIENCES } from '../../content/experiences';
import { IconInstagram, IconWhatsApp } from '../ui/Icons';
import './style.scss';

/**
 * Contato — capítulo 5 do briefing "Site 02".
 *
 * O formulário não posta em servidor nenhum: ele monta a mensagem e abre o
 * WhatsApp já preenchido. Sem backend, sem caixa de spam para vigiar, e o lead
 * cai direto no canal que o estúdio já usa.
 */
export function Contact() {
  const [form, setForm] = useState({
    name: '',
    experience: '',
    date: '',
    message: '',
  });

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Olá, Deise! Meu nome é ${form.name || '(nome)'}.`,
      form.experience && `Tenho interesse na experiência: ${form.experience}.`,
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

        <form
          className="contact__form"
          onSubmit={onSubmit}
          data-reveal
          data-delay="1"
        >
          <p className="contact__form-title">Prefere me contar por aqui?</p>

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
            <span>Qual experiência?</span>
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
            Ao enviar, o WhatsApp abre com a sua mensagem pronta — você só
            precisa confirmar o envio.
          </p>
        </form>
      </div>
    </section>
  );
}
