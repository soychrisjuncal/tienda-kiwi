import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import CarrouselHome from "./CarrouselHome";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "firebase/auth";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="titleHome">
          <Image
            className="imagenBN"
            src="https://i.ibb.co/5GgG5Qh/banner6-copia.jpg"
            fluid="true"
          />
          <div className="cajaTitulo">
            <h1 className="titulo">EXPLORANDO EL EQUILIBRIO.</h1>
          </div>
        </div>

        <div className="bloque1">
          <div className="col-md-6 col-12">
            <Image
              className="imagen1"
              src="https://i.ibb.co/CJDPwJS/02.jpg"
              fluid="true"
            />
          </div>

          <div className="col-md-6 col-12 textImg1">
            <h2>Sumate a Kiwi!</h2>
            <p>Entrená Cuerpo y Mente de manera divertida y super dinamica.</p>
            <p>
              Se parte de esta nueva disciplina! Se parte de la revolucion del
              Equilibrio!
            </p>
            <Link to="/">
              {" "}
              <button className="btn-dark btnSign px-3">+ Info</button>
            </Link>
          </div>
        </div>
        <div className="carrousel">
          <CarrouselHome />
        </div>

        <div className="bloque2">
          <div className="col-md-6 col-12">
            <div className="textImg2">
              <h2>Destacado de la Semana!</h2>
              <p>Remeras Kiwi Emoticon</p>
              <p className="parrafo2">
                Estilo basico con una distinticion en su parte trasera, Hechas a
                mano en ARG
              </p>
              <Link to="/">
                {" "}
                <button className="btn-dark btnSign px-3">+ Info</button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              className="imagen2"
              src="https://i.ibb.co/djyJ8SY/remera-Emoticon1.png"
              fluid="true"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
