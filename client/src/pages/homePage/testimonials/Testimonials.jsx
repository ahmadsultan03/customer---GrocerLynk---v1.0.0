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
          GrocerLynk has been a game-changer for me. The variety of fresh produce, pantry items, and even specialty products is fantastic. The website is easy to navigate, and the delivery is always on time. I can’t imagine going back to grocery shopping in-store!
          </p>

          <div className="rv-user">
            <img src={user} alt="" />
            <div className="rv-user-info">
              <h3>Rabia Sohail</h3>
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
          I was skeptical about ordering fresh produce online, but GrocerLynk proved me wrong. Everything was delivered fresh and well-packaged. Their customer service is responsive, and the prices are competitive. Highly recommend this service!
          </p>

          <div className="rv-user">
            <img src={user2} alt="" />
            <div className="rv-user-info">
              <h3>Ahmad Sultan</h3>
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
          GrocerLynk is a fantastic online grocery store. From ordering to delivery, everything is seamless. I highly recommend shopping from this website as it offers affordable prices too, and also has delivery services!
          </p>

          <div className="rv-user">
            <img src={user3} alt="" />
            <div className="rv-user-info">
              <h3>Shandana Khattak</h3>
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
          Shopping for groceries has never been easier since I started using GrocerLynk. The website is intuitive, and it’s so convenient to have my order delivered straight to my door. 
          </p>

          <div className="rv-user">
            <img src={user4} alt="" />
            <div className="rv-user-info">
              <h3>Samar Qaiser</h3>
              <span>Satisfied customer</span>
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