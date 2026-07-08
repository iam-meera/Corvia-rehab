import { FaMapMarkerAlt } from "react-icons/fa";

const serviceAreas = [
  "Whitefield",
  "Marathahalli",
  "Sarjapur",
  "KR Puram",
  "Shivaji Nagar",
  "Koramangala",
  "Kalyan Nagar",
  "Hebbal",
  "Electronic City",
];

function ServiceAreas({ theme = "light" }) {
  return (
    <div className={`service-area-panel service-area-panel-${theme}`}>
      <h3>
        <FaMapMarkerAlt aria-hidden="true" /> Available across Bangalore
      </h3>
      <p>
        We provide home physiotherapy visits in key Bangalore localities,
        including:
      </p>
      <div className="area-grid" aria-label="Service areas in Bangalore">
        {serviceAreas.map((area) => (
          <span className="area-chip" key={area}>
            {area}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ServiceAreas;
