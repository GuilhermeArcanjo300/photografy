import { About } from '../components/About';
import { Process } from '../components/Process';
import { CtaBand } from '../components/ui/CtaBand';
import { PageHeader } from '../components/ui/PageHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSeo } from '../hooks/useSeo';

/** Minha História — briefing item 6. */
export function StoryPage() {
  useSeo({
    title: 'Minha História | Deise Akemi Fotografia',
    description:
      'Conheça Deise Akemi: especialista em fotografia newborn formada pela Escola de Fotografia Newborn, apaixonada por registrar a infância e a maternidade.',
    path: '/minha-historia',
  });
  useScrollReveal('historia');

  return (
    <>
      <PageHeader
        kicker="Minha história"
        title="Prazer, eu sou Deise Akemi"
        text="Uma paixão que começou na infância e virou profissão: registrar o que não volta."
      />

      <About full />

      <section className="section section--tint section--tight">
        <div className="container" data-reveal>
          <div className="rule" style={{ marginBottom: '2.25rem' }}>
            <span className="rule__dot" />
          </div>
          <p className="pullquote">
            Antes mesmo de nascer, já existe uma história de amor sendo escrita.
          </p>
        </div>
      </section>

      <Process />

      <CtaBand
        title="Será um privilégio contar essa história com vocês."
        text="Me chame no WhatsApp e vamos conversar sobre o seu ensaio."
        message="Olá, Deise! Li sua história no site e gostaria de conversar sobre um ensaio."
      />
    </>
  );
}
