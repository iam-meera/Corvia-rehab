import {
  FaClipboardList,
  FaDoorOpen,
  FaGraduationCap,
  FaHandsHelping,
  FaHeart,
  FaHome,
} from "react-icons/fa";

function Whychoose() {
  return (
    <section id="why">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Why Corvia Rehab</span>
          <h2>Why Choose Corvia Rehab?</h2>
          <p>
            We combine clinical expertise with the comfort of home to deliver
            outcomes that matter.
          </p>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="icon"><FaHome aria-hidden="true" /></div>
            <h4>Personalized Home-Based Care</h4>
            <p>Treatment plans designed around your home environment and daily routine.</p>
          </div>
          <div className="why-card">
            <div className="icon"><FaGraduationCap aria-hidden="true" /></div>
            <h4>Experienced Physiotherapists</h4>
            <p>Qualified professionals with deep clinical experience across conditions.</p>
          </div>
          <div className="why-card">
            <div className="icon"><FaHandsHelping aria-hidden="true" /></div>
            <h4>One-on-One Treatment</h4>
            <p>Dedicated, undivided attention during every single session.</p>
          </div>
          <div className="why-card">
            <div className="icon"><FaClipboardList aria-hidden="true" /></div>
            <h4>Customized Recovery Plans</h4>
            <p>Plans built around your specific condition, goals, and pace of recovery.</p>
          </div>
          <div className="why-card">
            <div className="icon"><FaDoorOpen aria-hidden="true" /></div>
            <h4>Convenient Home Visits</h4>
            <p>No travel, no waiting rooms - care comes to you, on your schedule.</p>
          </div>
          <div className="why-card">
            <div className="icon"><FaHeart aria-hidden="true" /></div>
            <h4>Compassionate Support</h4>
            <p>Patient-first care delivered with empathy at every step of recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whychoose;
