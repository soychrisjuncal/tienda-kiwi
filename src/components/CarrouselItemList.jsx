import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/NavBar.css";

function CarrouselItemList() {
  return (
    <div>
      <Carousel className="padCarrousel" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/xHyMgtt/banner2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/tpSnJqf/banner3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselItemList;
