import React from "react";
import HeroSection from "./HeroSection";
import PartnersSection from "./PartnerSection";
import SetupSection from "./SetupSection";
import FeatureSection from "./FeaturesSections";
import ContactUs from "./ContactUs";
import Carousel from "./Carousel";
import ProductSection from "./ProductSection";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <HeroSection />

      <FeatureSection />
      <SetupSection />
      <ProductSection />
      <ContactUs />
    </div>
  );
};

export default HomePage;
