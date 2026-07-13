import About from "../Components/Aboutus";
import Howitwork from "../Components/Howitwork";
import PageHero from "../Components/PageHero";
import PageLayout from "../Components/PageLayout";
import ServiceAreas from "../Components/ServiceAreas";
import Whychoose from "../Components/Whychoose";
import bannerImage from "../assets/banner-about.jpg";

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        label="About Corvia Rehab"
        title="Home-Based Rehabilitation Built Around Your Recovery"
        description="Corvia Rehab brings professional physiotherapy care into the home, helping patients regain mobility, reduce pain, and rebuild daily confidence."
        image={bannerImage}
      />
      <About />
      <section>
        <div className="container">
          <div className="section-head">
            <span className="section-tag">Service Locations</span>
            <h2>Home Physiotherapy Coverage in Bangalore</h2>
            <p>
              Corvia Rehab brings physiotherapy and rehabilitation care to your
              home across major Bangalore neighborhoods.
            </p>
          </div>
          <ServiceAreas />
        </div>
      </section>
      <Whychoose />
      <Howitwork />
    </PageLayout>
  );
}

export default AboutPage;
