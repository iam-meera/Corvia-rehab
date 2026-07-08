import Contact from "../Components/Contact";
import Faq from "../Components/FAQ";
import PageHero from "../Components/PageHero";
import PageLayout from "../Components/PageLayout";
import bannerImage from "../assets/banner-faq.jpg";

function FaqPage() {
  return (
    <PageLayout>
      <PageHero
        label="FAQ"
        title="Answers Before You Book a Home Visit"
        description="Find quick answers about appointment booking, session duration, home visits, elderly care, and rehabilitation support."
        image={bannerImage}
      />
      <Faq />
      <Contact />
    </PageLayout>
  );
}

export default FaqPage;
