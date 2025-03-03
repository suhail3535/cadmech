import React from 'react';
import './HeroSection.css';
import studentImage from '../../assets/student-image.png'; // Update with the actual image path

const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-content'>
        {/* Left Section - Text Content */}
        <div className='text-content'>
          <h1>
            With <span className='highlight'>Cadmech</span>, you create <br />
            <span className='bold-text'>transformative learning environs</span>
          </h1>
          <p className='subheading'>
            Inspire curiosity, creativity, and confidence
          </p>
          <p className='description'>
            Since 1997, CadMech Engineering Pvt. Ltd. has been a pioneer in
            delivering innovative, high-performance lab equipment that bridges
            the gap between academic aspirations and industry demands. With over
            25 years of experience, CadMech has built a reputation for
            delivering smart, reliable, and affordable solutions tailored for
            engineering colleges, polytechnics, ITIs, IITs, and industries
            across India. Our in-house R&D, integrated IoT, AR/VR technologies,
            and customer-first approach make us more than a supplier - we are a
            trusted partner in educational transformation.
          </p>
          <button className='cta-button'>Our Brands</button>
        </div>

        {/* Right Section - Image */}
        <div className='image-content'>
          <img src={studentImage} alt='Student' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
