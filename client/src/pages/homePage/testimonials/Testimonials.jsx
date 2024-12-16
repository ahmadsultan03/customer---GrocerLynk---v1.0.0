import React from "react";
import "./Testimonials.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import user from "../../../assets/pics/img11.png";
import user2 from '../../../assets/pics/user2.jpg'
import user3 from '../../../assets/pics/user3.jpg'
import user4 from '../../../assets/pics/user4.jpg'
const Testimonials = () => {
  return (
    <div className="rv-review" id="testimonials">
      <h1 className="rv-heading">
        <span>reviews</span>
      </h1>

      <div className="rv-box-container">
        <div className="rv-box">
          <div className="rv-stars">
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
          </div>
          <p>
            GrocerLynk is my grocery escape! Wallet-friendly, trendy finds, and a
            shopping experience that's as easy as it is amazing.
          </p>

          <div className="rv-user">
            <img src={user} alt="" />
            <div className="rv-user-info">
              <h3> Samar S.</h3>
              <span>Satisfied customer</span>
            </div>
          </div>

          <span className="rv-quote-right">
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </div>

        <div className="rv-box">
          <div className="rv-stars">
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
          </div>
          <p>
            GrocerLynk, Smooth navigation, speedy
            deliveries, & a grocery haven for trendsetters like me.
          </p>

          <div className="rv-user">
            <img src={user2} alt="" />
            <div className="rv-user-info">
              <h3> Ahmad S.</h3>
              <span>Satisfied customer</span>
            </div>
          </div>

          <span className="rv-quote-right">
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </div>
        <div className="rv-box">
          <div className="rv-stars">
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
          </div>
          <p>
            GrocerLynk is where grocery meets savings! Always in vogue, my ultimate go-to for grocery without the hefty price
            tag.
          </p>

          <div className="rv-user">
            <img src={user3} alt="" />
            <div className="rv-user-info">
              <h3>Shandana.</h3>
              <span>Happy customer</span>
            </div>
          </div>

          <span className="rv-quote-right">
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </div>

        <div className="rv-box">
          <div className="rv-stars">
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
            <FontAwesomeIcon icon={faStar} className="rv-star" />
          </div>
          <p>
            GrocerLynk,you'ce got it all, you've won my heart! Diverse choices. It's
            my grocery destination!.
          </p>

          <div className="rv-user">
            <img src={user4} alt="" />
            <div className="rv-user-info">
              <h3>Bareera.</h3>
              <span>Happy customer</span>
            </div>
          </div>

          <span className="rv-quote-right">
            <FontAwesomeIcon icon={faQuoteRight} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
