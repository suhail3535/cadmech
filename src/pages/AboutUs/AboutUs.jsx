import React from "react";
import "./About.css";
import aboutSun from "../../assets/about-sun.png";
import prakash from "../../assets/prakash.png";
import prashant from "../../assets/prashant.png";

const AboutUs = () => {
  return (
    <div className="about-section-container">
      <div className="product-hero-section">
        <h2>ABOUT CADMECH</h2>
      </div>
      <div className="about-content-wrapper">
        <div className="about-cadmech">
          Begun in 1997 as V-Ramp Systems, the company introduced a series of
          advanced learning equipments for technical education institutions The
          overwhelming acceptance of the products prompted the company to form
          in 2000 the B. J. Engineering Company that would exclusively cater to
          customers and other industrial customers. Ultimately, the group merged
          to form the CAD Mech Engineering Pvt. Ltd. <br /> <br /> Lending
          support to its overall initiatives is the strong team of engineers
          engaged in innovation engineering. This Research & Development| team
          is the heart of CAD Mech and is constantly working on innovative
          products, new applications and more reliable performance. As true
          professionals, the engineers in CAD Mech Constantly work on devising
          efficient manufacturing process or interface with clients and
          customers to obtain feedback and further improve product and service
          quality. <br />
          <br />
          The turn of the new millennium has revolutionised the educational
          scenario in India. The wide range of computerized products in its
          stable has made "CAD Mech as the preferred brand for equipments in the
          field of technical education.
        </div>
        <section className="mission-section">
          <button className="tab">Our Mission</button>
          <div className="content-box">
            <p>
              Our mission is to offer all users true value for their equipments
              investment by a combination of factors such as value engineering,
              active service support and superior performance consistency.
            </p>
          </div>
          <div className="decorative-circle">
            <img src={aboutSun} alt="about-section-sun-circle" />
          </div>
          <button className="team-tab">Our Key Team</button>
        </section>

        <div className="our-leader">
          <div>
            <img src={prakash} alt="prakash" />
            <h4>MR. PRAKASH SULAKHE</h4>
            <p>
              MD, Electronics Engineer MBA, <br />
              PHD-Management Electronics
              <br />
            </p>
          </div>
          <div>
            <img src={prashant} alt="prashant" />
            <h4>MR. PRASHANT WAGH</h4>
            <p>Deputy MD, Mechanical Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
