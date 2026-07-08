import logo from "../assets/corvia-logo.jpg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="/" className="footer-logo" aria-label="Corvia Rehab home">
                <img src={logo} alt="Corvia Rehab" />
              </a>
              <p>
                Restoring Movement, Rebuilding Independence. Professional
                physiotherapy and rehabilitation delivered to your home.
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#conditions">Conditions</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Home Physiotherapy</a></li>
                <li><a href="#services">Neuro Rehabilitation</a></li>
                <li><a href="#services">Orthopedic Rehab</a></li>
                <li><a href="#services">Geriatric Care</a></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="tel:+919656074605">+91 96560 74605</a>
                </li>
                <li>
                  <a href="mailto:corviarehab@gmail.com">
                    corviarehab@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            &copy; 2026 Corvia Rehab. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
