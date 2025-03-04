import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed (ms)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time per slide (ms)
    arrows: false, // Hide next/prev arrows
    pauseOnDotsHover: true, // Pause when hovering over dots
    pauseOnFocus: true, // Pause when interacting with dots
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        <div>
          <img
            src='https://www.cadmech.co.in/images/img/about_us/CIM-Setup-Pune.webp'
            alt='Slide 1'
          />
        </div>
        <div>
          <img
            src='https://www.cadmech.co.in/images/img/about_us/CIM-Setup-Pune.webp'
            alt='Slide 2'
          />
        </div>
        <div>
          <img
            src='https://www.cadmech.co.in/images/img/about_us/CIM-Setup-Pune.webp'
            alt='Slide 3'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
