import './page-header.scss';

/**
 * Cabeçalho das páginas internas. Com `image` vira um banner fotográfico
 * (capítulos 3 e 4 do briefing); sem imagem, uma faixa bege clara.
 */
export function PageHeader({
  kicker,
  title,
  text,
  image,
  focus = 'center 40%',
  quote,
}: {
  kicker?: string;
  title: string;
  text?: string;
  image?: string;
  focus?: string;
  /** Frase sobreposta ao banner, como no capítulo 2. */
  quote?: string;
}) {
  if (image) {
    return (
      <header className="page-head page-head--photo">
        <div className="page-head__media">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            decoding="async"
            style={{ objectPosition: focus }}
          />
          <div className="page-head__veil" />
        </div>

        <div className="container page-head__inner">
          {kicker && <p className="kicker kicker--center kicker--light">{kicker}</p>}
          <h1 className="page-head__title">{title}</h1>
          {text && <p className="page-head__text">{text}</p>}
          {quote && <p className="page-head__quote">{quote}</p>}
        </div>
      </header>
    );
  }

  return (
    <header className="page-head">
      <div className="container page-head__inner">
        {kicker && <p className="kicker kicker--center">{kicker}</p>}
        <h1 className="page-head__title">{title}</h1>
        {text && <p className="page-head__text">{text}</p>}
      </div>
    </header>
  );
}
