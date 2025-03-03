import React from 'react';
import './PartnerSection.css';
import cadmechLogo from '../../assets/logo.png'; // Update paths
import pentaLogo from '../../assets/penta-machine.jpg';
import vrampLogo from '../../assets/vramp.jpg';
import dobotLogo from '../../assets/dobot.png';
import wazerLogo from '../../assets/WAZER-Logo.png';
import deltaLogo from '../../assets/delta-electronics-logo.png';

const PartnersSection = () => {
  return (
    <section className='partners-section'>
      <div className='partners-content'>
        {/* Left - Text */}
        <div className='text-content'>
          <p className='regular-text'>
            Shaping hands-on learning environments.
          </p>
          <p className='bold-text'>
            Preparing students for Industry 4.0 and beyond
          </p>
        </div>

        {/* Right - Logos */}
        <div className='logos-grid'>
          <img src={cadmechLogo} alt='Cadmech' />
          <img src={pentaLogo} alt='Penta' />
          <img src={vrampLogo} alt='Vramp' />
          <img src={dobotLogo} alt='Dobot' />
          <img src={wazerLogo} alt='Wazer' />
          <img src={deltaLogo} alt='Delta' />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
