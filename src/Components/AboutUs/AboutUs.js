import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__Top">
        <h1>About Us</h1>
      </div>
      <div className="aboutus__Bottom">
        <div className="aboutus__Row">
          <div>
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Our Promise</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="aboutus__Row">
          <div>
            <h3>Our Essence</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3>Our Vibe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
