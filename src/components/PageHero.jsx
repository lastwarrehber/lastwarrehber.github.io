export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="pageHero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}