
import React from "react";
import { Carousel } from "react-carousel3";
import "./Slider.css";
import grocery_2 from "../../../assets/pics/grocery_2.png";
import shoppingbag from "../../../assets/pics/shopping-bag.png";
import healthyfood from "../../../assets/pics/healthy-food.png";
import grocery from "../../../assets/pics/grocery.png";
import woman from "../../../assets/pics/woman.png";
import { NavHashLink } from "react-router-hash-link";

const Slider = () => {
  return (
    <div className="sd-carousel_container" id="home">
      <div className="sd-buttons_div">
        <NavHashLink smooth to="/Products/all" className="sd-button1">
          SHOP NOW
        </NavHashLink>
      </div>

      <div className="sd-carousel">
        <Carousel height={300} width={200} yOrigin={42} yRadius={48} autoPlay={true}>
          <div key={1} className="sd-pic">
            <img src={grocery_2} alt="Grocery 2" />
          </div>
          <div key={2} className="sd-pic">
            <img src={shoppingbag} alt="Shopping Bag" />
          </div>
          <div key={3} className="sd-pic">
            <img src={healthyfood} alt="Healthy Food" />
          </div>
          <div key={4} className="sd-pic">
            <img src={grocery} alt="Grocery" />
          </div>
          <div key={5} className="sd-pic">
            <img src={woman} alt="Woman Shopping" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;