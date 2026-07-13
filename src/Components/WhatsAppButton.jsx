import { FaWhatsapp } from "react-icons/fa";

function Whatsappbutton() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/919656074605"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}

export default Whatsappbutton;
