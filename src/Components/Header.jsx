import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <a href="/" className="text-[38px] font-extrabold tracking-tight">
          <span className="text-[#0D47A1]">Corvia</span>{" "}
          <span className="text-[#2E9E6B]">Rehab</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[17px] font-medium text-gray-800">
          <li>
            <a href="#home" className="hover:text-[#2E9E6B] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#2E9E6B] transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-[#2E9E6B] transition">
              Services
            </a>
          </li>

          <li>
            <a href="#conditions" className="hover:text-[#2E9E6B] transition">
              Conditions
            </a>
          </li>

          <li>
            <a href="#testimonials" className="hover:text-[#2E9E6B] transition">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-[#2E9E6B] transition">
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#2E9E6B] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+910000000000"
            className="text-[#0D47A1] font-semibold flex items-center gap-2"
          >
            📞 +91 00000 00000
          </a>

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E9E6B] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#27895e] transition"
          >
            Book Home Visit
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span
            className={`w-7 h-1 bg-black rounded transition ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>

          <span
            className={`w-7 h-1 bg-black rounded transition ${
              open ? "opacity-0" : ""
            }`}
          ></span>

          <span
            className={`w-7 h-1 bg-black rounded transition ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col px-8 py-6 gap-5 text-lg">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#conditions">Conditions</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>

            <a
              href="https://wa.me/910000000000"
              className="bg-[#2E9E6B] text-white text-center py-3 rounded-full font-semibold mt-4"
            >
              Book Home Visit
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;