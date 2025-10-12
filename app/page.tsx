import Hero from "./components/landing/Hero";
import AboutUs from "./components/landing/AboutUs";
import Advantages from "./components/landing/Advantages";
import ProductSection from "./components/landing/ProductSection";
import Reviews from "./components/landing/Reviews";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Advantages />
      <ProductSection />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}