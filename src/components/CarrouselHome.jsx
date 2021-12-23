import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/NavBar.css";

function CarrouselHome() {
  return (
    <div>
      <Carousel className="padCarrousel" fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/q00Xvy3/banner1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/PGghyR4/banner4.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/1msq0Rq/banner5.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarrouselHome;
