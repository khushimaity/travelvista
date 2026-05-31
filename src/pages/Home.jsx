import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyTravelVista from "../components/WhyTravelVista";
import Destinations from "../components/Destinations";
import TravelCompanion from "../components/TravelCompanion";
import Packages from "../components/Packages";
import TrustSection from "../components/TrustSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyTravelVista />
      <Destinations />
      <TravelCompanion />
      <Packages />
      <TrustSection />
      <CTA />
      <Footer />

    </>
  );
}

export default Home;