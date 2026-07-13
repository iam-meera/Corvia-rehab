import Contact from "../Components/Contact";
import PageHero from "../Components/PageHero";
import PageLayout from "../Components/PageLayout";
import Testimonials from "../Components/Testimonials";
import bannerImage from "../assets/banner-testimonials.jpg";

function TestimonialsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Patient Stories"
        title="Recovery Experiences from Corvia Rehab Patients"
        description="Read how home physiotherapy helped patients and families manage recovery with professional, consistent, and compassionate support."
        image={bannerImage}
      />
      <Testimonials />
      <Contact />
    </PageLayout>
  );
}

export default TestimonialsPage;
