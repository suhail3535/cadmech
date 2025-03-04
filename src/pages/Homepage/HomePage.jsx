import React from 'react';
import HeroSection from './HeroSection';
import PartnersSection from './PartnerSection';
import SetupSection from './SetupSection';
import FeatureSection from './FeaturesSections';
import ContactUs from './ContactUs';
import Carousel from './Carousel';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <HeroSection />
      <PartnersSection />
      <FeatureSection />
      <SetupSection />
      <ContactUs />
    </div>
  );
};

export default HomePage;
