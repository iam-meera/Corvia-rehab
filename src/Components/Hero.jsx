import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import heroImage from "../assets/generated-hero-rehab.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <span className="section-tag">Trusted Home Physiotherapy</span>
          <h1>
            Expert Physiotherapy & Rehabilitation at{" "}
            <span className="accent">Your Doorstep</span>
          </h1>
          <p>
            At Corvia Rehab, we bring professional physiotherapy and
            rehabilitation services directly to your home, helping patients
            recover safely, comfortably, and confidently.
          </p>
          <div className="hero-btns">
            <a
              className="btn btn-primary"
              href="https://wa.me/919656074605"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" /> Book a Home Visit
            </a>
            <a className="btn btn-outline" href="tel:+919656074605">
              <FaPhoneAlt aria-hidden="true" /> Call Now
            </a>
          </div>
          <div className="hero-stats">
            <div><h3>300+</h3><p>Patients Treated</p></div>
            <div><h3>3+</h3><p>Years Experience</p></div>
          </div>
        </div>
        <figure className="hero-image">
          <img src={heroImage} alt="Home physiotherapy mobility session" />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
  