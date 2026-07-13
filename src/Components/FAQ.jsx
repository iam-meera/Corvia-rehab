import { useState } from "react";

const faqs = [
  {
    question: "Do you provide physiotherapy at home?",
    answer:
      "Yes, all our physiotherapy and rehabilitation services are delivered directly at your home by qualified professionals.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book a home visit instantly via WhatsApp or by calling us directly. Our team will confirm your appointment shortly after.",
  },
  {
    question: "How long is each session?",
    answer:
      "Sessions typically last between 45 minutes to 1 hour, depending on the treatment plan and condition being addressed.",
  },
  {
    question: "Do you treat elderly patients?",
    answer:
      "Yes, we specialize in geriatric care, focusing on improving mobility, balance, and independence for senior citizens.",
  },
  {
    question: "Do you provide post-surgery rehabilitation?",
    answer:
      "Absolutely. We support recovery after joint replacements, fractures, ligament reconstruction, and other orthopedic surgeries.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="services-bg" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div className={`faq-item ${isOpen ? "active" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a" id={`faq-answer-${index}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
