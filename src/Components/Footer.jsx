import { Link } from "react-router-dom";
import logo from "../assets/corvia-logo.jpg";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="footer-logo" aria-label="Corvia Rehab home">
                <img src={logo} alt="Corvia Rehab" />
              </Link>
              <p>
                Restoring Movement, Rebuilding Independence. Professional
                physiotherapy and rehabilitation delivered to your home.
              </p>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/conditions">Conditions</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">Home Physiotherapy</Link></li>
                <li><Link to="/services">Neuro Rehabilitation</Link></li>
                <li><Link to="/services">Orthopedic Rehab</Link></li>
                <li><Link to="/services">Geriatric Care</Link></li>
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
