import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Whychoose from '../Components/Whychoose';
import About from '../Components/Aboutus';
import Service from '../Components/Services';
import Condition from '../Components/Conditions';
import Howitwork from '../Components/Howitwork';
import Homephysio from '../Components/HomePhysio';
import Testimonal from '../Components/Testimonials';
import Faq from '../Components/FAQ';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import WhatsappButton from '../Components/WhatsAppButton';

function Home() {

  return (
    <>
      <Header/>
      <Hero/>
      <Whychoose />
      <About/>
      <Service />
      <Condition />
      <Howitwork/>
      <Homephysio/>
      <Testimonal/>
      <Faq/>
      <Contact/>
      <Footer/>
      <WhatsappButton/>
    </>
  )
}

export default Home