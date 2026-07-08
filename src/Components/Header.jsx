import { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/corvia-logo.jpg";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <a href="/" className="site-logo" aria-label="Corvia Rehab home">
          <img src={logo} alt="Corvia Rehab" />
        </a>

        <ul className="hidden lg:flex items-center gap-10 text-[17px] font-medium text-gray-800">
          <li><a href="#home" className="hover:text-[#2E9E6B] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#2E9E6B] transition">About</a></li>
          <li><a href="#services" className="hover:text-[#2E9E6B] transition">Services</a></li>
          <li><a href="#conditions" className="hover:text-[#2E9E6B] transition">Conditions</a></li>
          <li><a href="#testimonials" className="hover:text-[#2E9E6B] transition">Testimonials</a></li>
          <li><a href="#faq" className="hover:text-[#2E9E6B] transition">FAQ</a></li>
          <li><a href="#contact" className="hover:text-[#2E9E6B] transition">Contact</a></li>
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
          className="lg:hidden flex flex-col gap-1"
        >
          <span className={`w-7 h-1 bg-black rounded transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-7 h-1 bg-black rounded transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-7 h-1 bg-black rounded transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t">
          <ul className="flex flex-col px-8 py-6 gap-5 text-lg">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#conditions" onClick={closeMenu}>Conditions</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

            <li>
              <a
                href="https://wa.me/919656074605"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#2E9E6B] text-white text-center py-3 rounded-full font-semibold mt-4"
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
