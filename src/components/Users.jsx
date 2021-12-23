import React, { useState, useContext } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "./UserProvider";
import "../css/User.css";

function Users() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { submit, currentUser, logOut, signIn } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => {
    handleClose();
    setShow2(true);
  };
  const handleClose2 = () => setShow2(false);

  return (
    <>
      {!currentUser ? (
        <>
          <div>
            <Button
              className="m-4 px-2 btn-dark btnSign"
              variant="primary"
              onClick={handleShow}
            >
              {" "}
              <FontAwesomeIcon
                icon={faUserPlus}
                id="logout"
                onClick={() => logOut()}
              ></FontAwesomeIcon>{" "}
            </Button>
            <Modal
              id="content"
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <label className="m-0" htmlFor="email">
                      {" "}
                      Correo Electronico{" "}
                    </label>
                    <input
                      className="m-4 px-2 btnInput"
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <label htmlFor="password" id="password">
                      {" "}
                      Contraseña{" "}
                    </label>
                    <input
                      className="m-2 px-2 btnInput"
                      type="password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <br />
                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <button
                      className=" px-2 btn-dark btnSign"
                      onClick={() => submit(email, password)}
                    >
                      Registrarse
                    </button>
                  </div>

                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <p className="m-0">Ya tenes un Usuario?</p>{" "}
                    <Button
                      className="m-4 px-2 btn-dark btnSign"
                      variant="primary"
                      onClick={handleShow2}
                    >
                      Log In
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>{" "}
          </div>
          <Modal
            id="content2"
            show={show2}
            onHide={handleClose2}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <label htmlFor="email2"> Correo Electronico </label>
                  <input
                    className="m-4 px-2 btnInput"
                    type="email2"
                    id="email2"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <label htmlFor="password2" id="password2">
                    {" "}
                    Contraseña{" "}
                  </label>
                  <input
                    className="m-4 px-2 btnInput"
                    type="password"
                    id="password2"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <button
                    className="m-4 px-2 btn-dark btnSign"
                    onClick={() => signIn(email, password)}
                  >
                    iniciar Sesion
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>{" "}
          <div></div>
        </>
      ) : (
        <div className="login">
          <div>{currentUser.email}</div>
          <div>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              id="logout"
              className="iconLogout"
              onClick={() => logOut()}
            ></FontAwesomeIcon>{" "}
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
