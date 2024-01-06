import Image from "next/image";
import MenuNav from "./components/menu";
import MainContent from "./components/main";
import Footer from "./components/footer";
import ContactForm from "./components/contact-form";
import About from "./components/about";
import Servicing from "./components/servicing";
import BackToTopButton from "./components/back-top-button";

export default function Home() {
  return (
    <>
      <MenuNav />
      <MainContent />
      <About />
      <Servicing />
      <ContactForm />
      <Footer />
      <BackToTopButton />
    </>
  );
}
