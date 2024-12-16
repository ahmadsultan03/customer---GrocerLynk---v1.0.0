import React from "react";
import "./AboutUs.css";
import { Link as ScrollLink } from "react-scroll";
import video1 from "../../../assets/videos/video1.mp4";
const AboutUs = () => {
  return (
    <div id="about" className="abt-about">
      <h1 className="abt-heading">
        <span>about</span>us
      </h1>

      <div className="abt-row">
        <div className="abt-video_container">
          <video src={video1} loop autoPlay muted></video>
        </div>

        <div className="abt-content">
          <p>
            At <em style={{
              color:'black',
              fontSize:"xx-large"
            }}>GrocerLynk</em><em style={{
              fontSize:'xxx-large',
              color:'#05bea6'
            }}>.</em>, we prioritize quality, affordability, and exceptional service. With our user-friendly platform, timely delivery, and commitment to sourcing the best products, we ensure you get value in every purchase. Whether you need everyday staples or unique finds, trust us to meet your needs with care and reliability.
          </p>
          <ScrollLink
            to="contact"
            className="abt-about-btn"
            smooth={true}
            duration={1000}
          >
            contact us
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
