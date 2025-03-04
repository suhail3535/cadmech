import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    icon: '🏅',
    text: '25+ years of expertise in technical education & industrial solutions',
  },
  {
    icon: '📖',
    text: 'Recognized as a leading OEM in educational lab solutions across India',
  },
  {
    icon: '💡',
    text: 'Comprehensive in-house R&D for continuous innovation',
  },
  {
    icon: '🎧',
    text: 'Advanced smart labs with IoT, AR/VR, and simulation panels',
  },
  {
    icon: '👨‍🔧',
    text: 'Industry leading post-sales service support and training',
  },
  {
    icon: '🚚',
    text: 'PAN-India delivery and service network',
  },
];

const FeatureSection = () => {
  return (
    <div className='feature-section'>
      <div className='feature-container'>
        {features.map((feature, index) => (
          <div key={index} className='feature-card'>
            <div className='feature-icon'>{feature.icon}</div>
            <p className='feature-text'>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
