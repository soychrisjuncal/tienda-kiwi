import React from "react";
import "../css/Item.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Item({
  id,
  img,
  img2,
  img3,
  title,
  description,
  listPrice,
  offerPrice,
  cuotas,
}) {
  return (
    <>
      <div className="m-4 contenedor-producto row justify-content-center">
        <Link to={`/itemDetail/${id}`} className="link">
          <div className="producto-info">
            <Carousel fade>
              <Carousel.Item className="borderR">
                <img
                  className="d-block w-100 borderR"
                  src={img}
                  alt="First slide"
                  fluid="true"
                />
              </Carousel.Item>
              <Carousel.Item className="borderR">
                <img
                  className="d-block w-100 borderR"
                  src={img2}
                  alt="Second slide"
                  fluid="true"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="item-info-producto">
            <h4>{title}</h4>
            <div>{description}</div>
            <div className="producto_precio">
              <p>
                {" "}
                <del className="precioLista">${listPrice}</del>{" "}
                <span className="precioFinal">${offerPrice}</span>
              </p>
              <p>
                12 cuotas sin Interés de{" "}
                <span className="cuotas">${cuotas}</span>
              </p>
            </div>
            <div className="contenedorBtn">
              <Link to={`/itemDetail/${id}`}>
                {" "}
                <button className="btnComprar btnSign">Comprar</button>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
