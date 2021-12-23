import React from "react";

import "../css/NavBar.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";
import Users from "./Users";

const NavBar = () => {
  return (
    <div>
      <Navbar id="navbar" className="pepe" expand="lg">
        <Container>
          <Navbar.Brand id="navbar-brand">Kiwi Boards</Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="centrar" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/home">
                Home
              </Link>{" "}
              <NavDropdown
                className="link"
                title="Kiwi Tienda"
                id="basic-nav-dropdown"
              >
                <Link to="/">
                  {" "}
                  <NavDropdown.Item href="#action/3.0">
                    Todos los productos
                  </NavDropdown.Item>{" "}
                </Link>
                <Link to="/category/1">
                  {" "}
                  <NavDropdown.Item href="#action/3.1">
                    Boards
                  </NavDropdown.Item>{" "}
                </Link>
                <Link to="/category/2">
                  {" "}
                  <NavDropdown.Item href="#action/3.2">
                    Remeras
                  </NavDropdown.Item>{" "}
                </Link>
                <Link to="/category/3">
                  {" "}
                  <NavDropdown.Item href="#action/3.3">
                    Buzos
                  </NavDropdown.Item>{" "}
                </Link>
              </NavDropdown>
              <Link className="link" to="/contacto">
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Users />
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
