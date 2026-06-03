import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyTravelVista from "../components/WhyTravelVista";
import Destinations from "../components/Destinations";
import TravelCompanion from "../components/TravelCompanion";
import Packages from "../components/Packages";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

function Home() {
  return (
       <PageTransition>
    <>
      
      <Navbar />
      <Hero />
      <WhyTravelVista />
      <Destinations />
      <TravelCompanion />
      <Packages />
      <TrustSection />
      <Testimonials />
      <CTA />
      <Footer />

    </>
    </PageTransition>
  );
}

export default Home;