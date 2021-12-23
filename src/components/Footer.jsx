import React from "react";
import { Image } from "react-bootstrap";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="pepe d-flex flex-row flex-wrap justify-content-between">
        <div className="col-md-4 col-12 copy d-flex align-items-center justify-content-center">
          <p className="m-0">Todos los derechos reservados ©</p>
        </div>
        <div className="col-md-4 col-12 redes">
          <ul>
            <li>
              <button
                className="btn  btnFb"
                href="https://www.facebook.com/KiwiBoards-107433710949007/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={(fab, faFacebook)}
                  id="fb"
                ></FontAwesomeIcon>{" "}
              </button>
            </li>
            <li>
              <button
                className="btn  btnIg"
                href="https://www.instagram.com/kiwi.boards/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={(fab, faInstagram)}
                  id="ig"
                ></FontAwesomeIcon>{" "}
              </button>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-12 copyFirma">
          <a
            className="btn btnIg"
            href="https://www.linkedin.com/in/soychrisjuncal/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="imagenCopy"
              src="https://i.ibb.co/xYhgBpR/firma-Copy.png"
              fluid="true"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
