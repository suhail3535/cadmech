import React from "react";
import footerLogo from "../../assets/cadmech.png";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { TbPhone } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={footerLogo} alt="footerLogo" />
          </div>
          <div className="location-links">
            <div>
              <IoLocationOutline className="location-icon" />
              <p>
                S. N. 8/11, Plot No. 30, Near Abhinav Pharmacy College, Narhe,
                Pune - 411041
              </p>
            </div>
            <div>
              <TbPhone className="icon" />
              <p>+91 8380001463</p>
            </div>
            <div>
              <CiMail className="icon" />
              <p>
                mktg@cadmech.co.in
                <br /> admin@cadmech.co.in
              </p>
            </div>
          </div>
        </div>
        <div className="vertical-separator"></div>
        <div className="right-part">
          <div className="footer-middle">
            <h3>Quick Links:</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Products</li>
              <li>Other Products</li>
              <li>Our Partners</li>
              <li>Our Clients</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-right">
            <div>
              <h3>Stay Connected:</h3>
              <div className="social-icons">
                <FaFacebook className="social-icon" />
                <FaInstagram className="social-icon" />
                <FaLinkedin className="social-icon" />
              </div>
            </div>
            <p>Copyright &copy; 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
