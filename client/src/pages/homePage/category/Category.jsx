import "./Category.css";
import React from "react";
import CategoryCard from '../../../components/CategoryCard/CategoryCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import vegetables from '../../../assets/pics/vegetables.jpg'
import fruits from '../../../assets/pics/fruits.jpg'
import dairy from '../../../assets/pics/dairy.jpg'
import snacks from '../../../assets/pics/snacks.jpg'
import beverages from '../../../assets/pics/beverages.jpg'
import bakery from '../../../assets/pics/bakery.jpg'
import meat from '../../../assets/pics/meat.jpeg'
import seafood from '../../../assets/pics/seafood.jpg'
import oils from '../../../assets/pics/oils.png'
import frozen from '../../../assets/pics/frozen.jpg'
import pantry from '../../../assets/pics/pantry.jpg'
const Category = () => {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const cardsData = [
    {
      id: 6,
      imgUrl: bakery,
      name: "Bakery",
    },
    {
      id: 1,
      imgUrl: fruits,
      name: "Fruits",
    },
    {
      id: 7,
      imgUrl: dairy,
      name: "Dairy",
    },
    {
      id: 4,
      imgUrl: snacks,
      name: "Snacks",
    },
    {
      id: 5,
      imgUrl: beverages,
      name: "Beverages",
    },
    {
      id: 3,
      imgUrl: vegetables,
      name: "Vegetables",
    },
    {
      id: 2,
      imgUrl: meat,
      name: "Meat",
    },
    {
      id: 8,
      imgUrl: seafood,
      name: "Seafood",
    },
    {
      id: 9,
      imgUrl: oils,
      name: "Oils",
    },
    {
      id: 10,
      imgUrl: frozen,
      name: "Frozen",
    },
    {
      id: 11,
      imgUrl: pantry,
      name: "Pantry",
    },
  ];

  const card = cardsData.map((item) => (
    <CategoryCard imgUrl={item.imgUrl} name={item.name} key={item.id} />
  ));

  return (
    <div className="ct-main_div">
      <h1 className='ct-heading'>shopby<span>category</span></h1>

      <div className="ct-category-container">
        <Carousel className="c-carousel"
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          {card}
        </Carousel>
      </div>
    </div>
  );
};

export default Category;
