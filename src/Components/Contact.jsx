import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-bg" id="contact">
      <div className="container">
        <div className="section-head">
          <span
            className="section-tag"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            Contact Us
          </span>

          <h2>Get In Touch With Corvia Rehab</h2>

          <p>
            Reach out today and start your journey toward recovery and
            independence.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon"><FaPhoneAlt aria-hidden="true" /></div>
            <h4>Phone Number</h4>
            <a href="tel:+919656074605">+91 96560 74605</a>
          </div>

          <div className="contact-card">
            <div className="icon"><FaWhatsapp aria-hidden="true" /></div>
            <h4>WhatsApp Number</h4>
            <a
              href="https://wa.me/919656074605"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 96560 74605
            </a>
          </div>

          <div className="contact-card">
            <div className="icon"><FaEnvelope aria-hidden="true" /></div>
            <h4>Email Address</h4>
            <a href="mailto:corviarehab@gmail.com">corviarehab@gmail.com</a>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginBottom: "24px",
            color: "#cfe3fb",
          }}
        >
          Service Areas Covered: Add your serviceable cities/localities here.
        </p>

        <div className="contact-cta">
          <a
            className="btn btn-primary"
            href="https://wa.me/919656074605"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp aria-hidden="true" /> Book Your Home Visit Today
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
