function Hero(){
     return (
    <section className="hero" id="home">
  <div className="container">
    <div className="hero-content">
      <span className="section-tag">Trusted Home Physiotherapy</span>
      <h1>Expert Physiotherapy & Rehabilitation at <span className="accent">Your Doorstep</span></h1>
      <p>At Corvia Rehab, we bring professional physiotherapy and rehabilitation services directly to your home, helping patients recover safely, comfortably, and confidently.</p>
      <div className="hero-btns">
        <a className="btn btn-primary" href="https://wa.me/910000000000" target="_blank">💬 Book a Home Visit (WhatsApp)</a>
        <a className="btn btn-outline" href="tel:+910000000000">📞 Call Now</a>
      </div>
      <div className="hero-stats">
        <div><h3>500+</h3><p>Patients Treated</p></div>
        <div><h3>10+</h3><p>Years Experience</p></div>
        <div><h3>4.9★</h3><p>Google Rating</p></div>
      </div>
    </div>
    <div className="hero-services">
      <div className="service-pill-grid">
        <div className="pill-card"><div className="icon">🏠</div><h4>Home Physiotherapy</h4></div>
        <div className="pill-card"><div className="icon">🧠</div><h4>Neuro Rehabilitation</h4></div>
        <div className="pill-card"><div className="icon">🦴</div><h4>Orthopedic Rehab</h4></div>
        <div className="pill-card"><div className="icon">👵</div><h4>Geriatric Care</h4></div>
      </div>
    </div>
  </div>
</section>
     );
}

export default Hero;