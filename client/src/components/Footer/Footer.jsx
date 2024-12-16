import React from "react";
import "./Footer.css";
import payment from "../../assets/pics/payment2.png";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="ft-footer">
      <div className="ft-box-container">
        <div className="ft-box">
          <h3>Quick Links</h3>
          <NavHashLink smooth to="/#home">Home</NavHashLink>
          <NavHashLink smooth to="/#about">About</NavHashLink>
          <NavHashLink smooth to="/#products">Products</NavHashLink>
          <NavHashLink smooth to="/#testimonials">Reviews</NavHashLink>
          <NavHashLink smooth to="/#contact">Contact</NavHashLink>
        </div>

        <div className="ft-box">
          <h3>Our Locations</h3>
          <NavHashLink to="/">Pakistan</NavHashLink>
          <NavHashLink to="/">UK</NavHashLink>
          <NavHashLink to="/">US</NavHashLink>
          <NavHashLink to="/">UAE</NavHashLink>
        </div>

        <div className="ft-box">
          <h3>Contact Info</h3>
          <p>(051) 123 456 789</p>
          <p className="ft-email-footer">grocerlynk@gmail.com</p>
          <p>Rawalpindi, Pakistan</p>
        </div>
      </div>

      <div className="ft-credit">
        {/* GrocerLynk | All copyrights reserved */}
        &copy; 2024 <a href="#" className="ft-credit">GrocerLynk.</a> All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
