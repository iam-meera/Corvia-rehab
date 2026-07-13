import {
  FaBullseye,
  FaCar,
  FaChartLine,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import homePhysioImage from "../assets/generated-home-physio.jpg";

function Homephysio() {
  return (
    <section className="services-bg">
      <div className="container split">
        <figure className="split-img">
          <img src={homePhysioImage} alt="Home physiotherapy session" />
        </figure>
        <div className="split-list">
          <span className="section-tag">Why Home Physiotherapy?</span>
          <h2 style={{ marginBottom: "24px" }}>Recover Better, In Comfort</h2>
          <div className="feature">
            <div className="icon"><FaHome aria-hidden="true" /></div>
            <div><h4>Comfortable Home Environment</h4><p>Heal in familiar, stress-free surroundings.</p></div>
          </div>
          <div className="feature">
            <div className="icon"><FaCar aria-hidden="true" /></div>
            <div><h4>No Travel Required</h4><p>Skip the commute and clinic wait times.</p></div>
          </div>
          <div className="feature">
            <div className="icon"><FaUsers aria-hidden="true" /></div>
            <div><h4>Family Involvement</h4><p>Loved ones can support recovery directly.</p></div>
          </div>
          <div className="feature">
            <div className="icon"><FaBullseye aria-hidden="true" /></div>
            <div><h4>One-on-One Attention</h4><p>Fully personalized, undistracted sessions.</p></div>
          </div>
          <div className="feature">
            <div className="icon"><FaChartLine aria-hidden="true" /></div>
            <div><h4>Better Compliance & Outcomes</h4><p>Comfort and convenience improve recovery rates.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homephysio;
