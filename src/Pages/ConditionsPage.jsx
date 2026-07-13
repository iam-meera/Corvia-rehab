import Conditions from "../Components/Conditions";
import Contact from "../Components/Contact";
import PageHero from "../Components/PageHero";
import PageLayout from "../Components/PageLayout";
import bannerImage from "../assets/banner-conditions.jpg";

const conditionGroups = [
  {
    title: "Pain and Joint Conditions",
    items: ["Back Pain", "Neck Pain", "Sciatica", "Shoulder Pain", "Knee Pain", "Arthritis"],
  },
  {
    title: "Neurological Recovery",
    items: ["Stroke Recovery", "Parkinson's Disease", "Paralysis", "Balance Issues", "Mobility Issues"],
  },
  {
    title: "Surgery and Injury Recovery",
    items: ["Joint Replacement", "Fracture Recovery", "Ligament Injury", "Sports Injury", "Post-Surgical Recovery"],
  },
];

function ConditionsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Conditions"
        title="Conditions We Help You Recover From"
        description="Corvia Rehab supports recovery from common pain, neurological, mobility, injury, and post-surgical conditions through home physiotherapy."
        image={bannerImage}
      />
      <Conditions />
      <section>
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Recovery Areas</span>
            <h2>Focused Support by Condition Type</h2>
          </div>
          <div className="detail-grid">
            {conditionGroups.map((group) => (
              <article className="detail-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="detail-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </PageLayout>
  );
}

export default ConditionsPage;
