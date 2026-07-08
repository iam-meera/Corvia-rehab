import Header from "./Header";
import Footer from "./Footer";
import WhatsappButton from "./WhatsAppButton";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default PageLayout;
