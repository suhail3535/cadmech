import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="form-section">
      <div className="content-wrapper">
        <div className="content">
          <p>
            Our solutions transform ordinary labs into thriving ecosystems where
            innovation meets education.
          </p>
          <p>
            <strong>
              Together, let’s advance learning, enable progress, and empower
              futures.
            </strong>
          </p>
        </div>

        <div className="form-container">
          <form>
            <input type="text" placeholder="Name:" required />
            <input type="email" placeholder="eMail ID:" required />
            <input type="tel" placeholder="Mobile No.:" required />
            <textarea placeholder="Message"></textarea>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
