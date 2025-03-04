import React from 'react';
import HeroSection from './HeroSection';
import PartnersSection from './PartnerSection';
import SetupSection from './SetupSection';
import FeatureSection from './FeaturesSections';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PartnersSection />
      <SetupSection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
