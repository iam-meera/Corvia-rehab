import {
  FaBrain,
  FaCalendarAlt,
  FaHome,
  FaProcedures,
  FaUserFriends,
  FaWalking,
} from "react-icons/fa";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Our Services</span>
          <h2>Comprehensive Rehabilitation Services</h2>
          <p>
            From neurological recovery to post-surgical care, we cover every
            stage of rehabilitation.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="icon"><FaHome aria-hidden="true" /></div>
            <h3>Home Physiotherapy</h3>
            <p>Professional physiotherapy services delivered directly to your home.</p>
          </div>
          <div className="service-card">
            <div className="icon"><FaBrain aria-hidden="true" /></div>
            <h3>Neuro Rehabilitation</h3>
            <p>Stroke recovery, Parkinson's disease, paralysis, and neurological movement disorders.</p>
          </div>
          <div className="service-card">
            <div className="icon"><FaWalking aria-hidden="true" /></div>
            <h3>Orthopedic Rehabilitation</h3>
            <p>Back pain, neck pain, sports injuries, arthritis, and joint disorders.</p>
          </div>
          <div className="service-card">
            <div className="icon"><FaUserFriends aria-hidden="true" /></div>
            <h3>Geriatric Care</h3>
            <p>Specialized physiotherapy for senior citizens focusing on mobility and independence.</p>
          </div>
          <div className="service-card">
            <div className="icon"><FaProcedures aria-hidden="true" /></div>
            <h3>Post-Surgical Rehabilitation</h3>
            <p>Recovery after joint replacement, fractures, ligament reconstruction, and orthopedic surgeries.</p>
          </div>
          <div className="service-card">
            <div className="icon"><FaCalendarAlt aria-hidden="true" /></div>
            <h3>Book Appointment</h3>
            <p>Schedule a home visit at a time that works best for you and your family.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
