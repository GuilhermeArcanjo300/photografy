import './page-header.scss';

/** Shared header for inner pages, sitting below the fixed navbar. */
export function PageHeader({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="page-head">
      <div className="container page-head__inner">
        <p className="kicker kicker--center">{kicker}</p>
        <h1 className="page-head__title">{title}</h1>
        {text && <p className="page-head__text">{text}</p>}
      </div>
    </header>
  );
}
