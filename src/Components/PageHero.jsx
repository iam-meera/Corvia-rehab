function PageHero({ label, title, description, image }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <div className="page-hero-content">
          <span className="section-tag">{label}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <figure className="page-hero-media">
          <img src={image} alt="" />
        </figure>
      </div>
    </section>
  );
}

export default PageHero;
