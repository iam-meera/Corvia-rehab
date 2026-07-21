import { useState } from "react";
import { FaBars, FaPhoneAlt, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/corvia-logo.jpg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Conditions", to: "/conditions" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="header-nav">
        <Link to="/" className="site-logo" aria-label="Corvia Rehab home">
          <img src={logo} alt="Corvia Rehab" />
        </Link>

        <ul className="hidden lg:flex items-center gap-10 text-[17px] font-medium text-gray-800">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `hover:text-[#2E9E6B] transition ${isActive ? "text-[#2E9E6B]" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+919656074605"
            className="text-[#0D47A1] font-semibold flex items-center gap-2"
          >
            <FaPhoneAlt aria-hidden="true" /> +91 96560 74605
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="mobile-menu-toggle lg:hidden flex"
        >
          {open ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mobile-menu lg:hidden">
          <ul className="mobile-menu-list">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `mobile-menu-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li>
              <a
                href="https://wa.me/919656074605"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-book-button"
                onClick={closeMenu}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <FaWhatsapp aria-hidden="true" /> Book Home Visit
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
