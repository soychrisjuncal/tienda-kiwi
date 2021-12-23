import React, { useContext } from "react";
import "../css/CartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const test = useContext(CartContext);
  return (
    <>
      <div className="d-flex flex-row">
        <FontAwesomeIcon icon={faShoppingCart} id="carrito"></FontAwesomeIcon>{" "}
        <div id="circle"> {test.calcItemCart()}</div>
      </div>
    </>
  );
};

export default CartWidget;
