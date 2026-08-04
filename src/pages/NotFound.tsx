import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { useSeo } from '../hooks/useSeo';

export function NotFound() {
  useSeo({
    title: 'Página não encontrada | Deise Akemi Fotografia',
    description: 'A página que você procura não existe ou foi movida.',
    path: '/404',
  });

  return (
    <>
      <PageHeader
        kicker="Erro 404"
        title="Não encontrei essa página"
        text="O link pode ter mudado de lugar. Mas as fotos continuam todas aqui."
      />

      <section className="section">
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.9rem',
            justifyContent: 'center',
          }}
        >
          <Link to="/" className="btn btn--primary">
            Voltar para o início
          </Link>
          <Link to="/experiencias" className="btn btn--ghost">
            Ver as experiências
          </Link>
        </div>
      </section>
    </>
  );
}
