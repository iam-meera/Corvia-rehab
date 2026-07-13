import Contact from "../Components/Contact";
import Homephysio from "../Components/HomePhysio";
import PageHero from "../Components/PageHero";
import PageLayout from "../Components/PageLayout";
import Services from "../Components/Services";
import bannerImage from "../assets/banner-services.jpg";

const serviceDetails = [
  {
    title: "Home Physiotherapy",
    description:
      "One-on-one physiotherapy sessions at home for pain relief, mobility, strength, balance, and functional recovery.",
  },
  {
    title: "Neuro Rehabilitation",
    description:
      "Structured rehabilitation support for stroke recovery, Parkinson's disease, paralysis, and movement-related neurological conditions.",
  },
  {
    title: "Orthopedic Rehabilitation",
    description:
      "Care for back pain, neck pain, shoulder pain, knee pain, arthritis, sports injuries, and joint movement limitations.",
  },
  {
    title: "Post-Surgical Rehabilitation",
    description:
      "Recovery support after joint replacement, fracture management, ligament reconstruction, and other orthopedic surgeries.",
  },
  {
    title: "Geriatric Physiotherapy",
    description:
      "Senior-focused physiotherapy to improve balance, walking confidence, strength, posture, and independence at home.",
  },
  {
    title: "Pain Management",
    description:
      "Evidence-based movement therapy and exercise planning for long-term pain control and better daily function.",
  },
];

function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="Services"
        title="Physiotherapy and Rehabilitation Services at Home"
        description="Choose focused, home-based care for neurological, orthopedic, post-surgical, geriatric, and pain-related recovery needs."
        image={bannerImage}
      />
      <Services />
      <section className="services-bg">
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Treatment Focus</span>
            <h2>Care Plans for Different Recovery Needs</h2>
          </div>
          <div className="detail-grid">
            {serviceDetails.map((service) => (
              <article className="detail-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Homephysio />
      <Contact />
    </PageLayout>
  );
}

export default ServicesPage;
