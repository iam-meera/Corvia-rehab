import Contact from "../Components/Contact";
import PageHero from "../Components/PageHero";
import PageLayout from "../Components/PageLayout";
import bannerImage from "../assets/banner-contact.jpg";

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        label="Contact"
        title="Book a Home Physiotherapy Visit"
        description="Call, email, or message Corvia Rehab on WhatsApp to schedule a home visit and begin your recovery plan."
        image={bannerImage}
      />
      <Contact />
    </PageLayout>
  );
}

export default ContactPage;
