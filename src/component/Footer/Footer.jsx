import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Logo & Contact Info */}
        <div className='footer-left'>
          <img src={logo} alt='CADMECH Logo' className='footer-logo' />
          <p>
            S. N. 8/11, Plot No. 30, Near Abhinav Pharmacy College, Narhe, Pune
            - 411041
          </p>
          <p>📞 +91 8380001463</p>
          <p>
            📧 <a href='mailto:mktg@cadmech.co.in'>mktg@cadmech.co.in</a>
          </p>
          <p>
            📧 <a href='mailto:admin@cadmech.co.in'>admin@cadmech.co.in</a>
          </p>
        </div>

        {/* Quick Links */}
        <div className='footer-middle'>
          <h4>Quick Links:</h4>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About Us</a>
            </li>
            <li>
              <a href='/products'>Our Products</a>
            </li>
            <li>
              <a href='/other-products'>Other Products</a>
            </li>
            <li>
              <a href='/partners'>Our Partners</a>
            </li>
            <li>
              <a href='/clients'>Our Clients</a>
            </li>
            <li>
              <a href='/contact'>Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className='footer-right'>
          <h4>Stay Connected:</h4>
          <div className='social-icons'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebookF />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright ©2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
