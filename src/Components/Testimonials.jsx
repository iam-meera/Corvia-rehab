import { FaStar } from "react-icons/fa";

const rating = Array.from({ length: 5 }, (_, index) => (
  <FaStar key={index} aria-hidden="true" />
));

function Testimonial() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Testimonials</span>
          <h2>What Our Patients Say</h2>
          <p>Real stories from patients we've helped recover.</p>
        </div>
        <div className="testimonial-grid">
          <div className="testi-card">
            <div className="stars" aria-label="5 out of 5 stars">{rating}</div>
            <p>
              "The physiotherapist was punctual, professional, and helped my
              father recover mobility after his surgery - all from home."
            </p>
            <div className="who"><div className="avatar">R</div><div><h5>Ramesh K.</h5><span>Post-Surgical Care</span></div></div>
          </div>
          <div className="testi-card">
            <div className="stars" aria-label="5 out of 5 stars">{rating}</div>
            <p>
              "Excellent care for my mother's stroke recovery. The sessions were
              personalized and the team was incredibly patient."
            </p>
            <div className="who"><div className="avatar">S</div><div><h5>Sunitha M.</h5><span>Neuro Rehabilitation</span></div></div>
          </div>
          <div className="testi-card">
            <div className="stars" aria-label="5 out of 5 stars">{rating}</div>
            <p>
              "Convenient, professional, and effective. My chronic back pain has
              improved significantly within a few weeks."
            </p>
            <div className="who"><div className="avatar">A</div><div><h5>Anil P.</h5><span>Orthopedic Rehab</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
