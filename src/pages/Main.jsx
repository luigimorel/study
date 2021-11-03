import React from "react";

//Components
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import FeaturedUniversities from "../components/Featured";
import Services from "../components/Services";
import News from "../components/News";
import Events from "../components/Events";
import Countries from "../components/Countries";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const Main = () => {
  return (
    <div className="bg-main-bg ">
      <div className="sm:mx-14 mx-6 ">
        <Navbar />
        <HeroSection />
      </div>
      <FeaturedUniversities />
      <Services />
      <News />
      <Events />
      <Countries />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Main;
