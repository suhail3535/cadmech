import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import image1 from '../../assets/carusel.png';
import image2 from '../../assets/CIM-Setup-Lucknow.webp';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        <div className='carousel-slide'>
          <img src={image1} alt='image-1' />
          <div className='carousel-text'>
            CUTTING-EDGE, USER-FRIENDLY <br />
            TECHNOLOGY INTEGRATED WITH IOT, <br /> AR/VR, AND SIMULATION TOOLS
          </div>
        </div>
        <div className='carousel-slide'>
          <img src={image2} alt='Slide 2' />
          <div className='carousel-text'>Innovative Solutions</div>
        </div>
        <div className='carousel-slide'>
          <img
            src='https://www.cadmech.co.in/images/img/about_us/CIM-Setup-Pune.webp'
            alt='Slide 3'
          />
          <div className='carousel-text'>Transforming Ideas into Reality</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
