import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/navlogo.png";
import iso from "../../assets/iso_logo_new.webp";
import worldwide from "../../assets/logo_wd_member.jpg";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { TbPhone } from "react-icons/tb";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo} alt="CADMECH Logo" className="logo" />
        </div>

        <div className="contact-info">
          <span className="top-nav">
            <CiMail />
            <a href="mailto:mktg@cadmech.co.in">mktg@cadmech.co.in</a>
          </span>
          <span className="top-nav">
            <TbPhone /> <a href="tel:+918380001463">+91 8380001463</a>
          </span>
          <span className="top-nav">
            <FaWhatsapp />
            <a href="tel:+919763719531">+91 9763719531</a>
          </span>
        </div>

        <div className="certifications">
          <img src={worldwide} alt="Worlddidac" />
          <img src={iso} alt="IAF" />
        </div>
      </div>

      <div
        className="hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <IoMdMenu />
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/product" onClick={closeMobileMenu}>
              Our Products
            </Link>
          </li>
          <li>
            <Link to="#" onClick={closeMobileMenu}>
              Other Products
            </Link>
          </li>
          <li>
            <Link to="#" onClick={closeMobileMenu}>
              Our Partners
            </Link>
          </li>
          <li>
            <Link to="#" onClick={closeMobileMenu}>
              Our Clients
            </Link>
          </li>
          <li>
            <Link to="#" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation (Hidden on Mobile & Tablet) */}
      <div className="nav-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/product">Our Products</Link>
          </li>
          <li>
            <Link to="#">Other Products</Link>
          </li>
          <li>
            <Link to="#">Our Partners</Link>
          </li>
          <li>
            <Link to="#">Our Clients</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
