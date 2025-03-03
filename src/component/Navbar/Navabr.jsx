import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from '../../assets/logo.png';
import iso from '../../assets/iso_logo_new.webp';
import worldwide from '../../assets/logo_wd_member.jpg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      {/* Top Section */}
      <div className='top-bar'>
        {/* Logo */}
        <div className='logo-container'>
          <img src={logo} alt='CADMECH Logo' className='logo' />
        </div>

        {/* Contact Info */}
        <div className='contact-info'>
          <span>
            📧 <a href='mailto:mktg@cadmech.co.in'>mktg@cadmech.co.in</a>
          </span>
          <span>
            📞 <a href='tel:+918380001463'>+91 8380001463</a>
          </span>
          <span>
            📱 <a href='tel:+919763719531'>+91 9763719531</a>
          </span>
        </div>

        {/* Certifications */}
        <div className='certifications'>
          <img src={worldwide} alt='Worlddidac' />
          <img src={iso} alt='IAF' />
        </div>
      </div>

      {/* Hamburger Menu Button (Mobile & Tablet Only) */}
      <div
        className='hamburger'
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>

      {/* Mobile Navigation Menu (Toggle) */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/product'>Our Products</Link>
          </li>
          <li>
            <Link to='#'>Other Products</Link>
          </li>
          <li>
            <Link to='#'>Our Partners</Link>
          </li>
          <li>
            <Link to='#'>Our Clients</Link>
          </li>
          <li>
            <Link to='#'>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation (Hidden on Mobile & Tablet) */}
      <div className='nav-menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/product'>Our Products</Link>
          </li>
          <li>
            <Link to='#'>Other Products</Link>
          </li>
          <li>
            <Link to='#'>Our Partners</Link>
          </li>
          <li>
            <Link to='#'>Our Clients</Link>
          </li>
          <li>
            <Link to='#'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
