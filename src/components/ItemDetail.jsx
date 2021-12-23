import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({
  id,
  img,
  title,
  description,
  listPrice,
  offerPrice,
  stock,
  cuotas,
  currentUser,
}) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);

  const onAddCart = (qty, reStock) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);

    if (reStock > 5) {
      alert("Has superado la cantidad de stock disponible");
    }
    alert("you rest " + reStock);

    setItemStock(reStock);
    test.addToCart(id, img, title, offerPrice, reStock, qty, currentUser);
    toast.success("You have selected " + qty + " items.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="contenedor-padre flex-wrap">
        <div className="col-md-6 col-12 contenedor-imagen">
          <img src={img} className="imgDetail" alt="producto" />
        </div>

        <div className="col-md-6 col-12 item-info-producto">
          {/* <h2 className="titulo">{title}</h2> */}

          <div className="description">{description}</div>
          <div className="producto_precio">
            <p className="precio">
              {" "}
              Precio Final:{" "}
              <del className="precioListaDetail">${listPrice}</del>{" "}
              <span className="precioFinalDetail">${offerPrice}</span>
            </p>
            <p>
              12 cuotas sin Interés de{" "}
              <span className="cuotasDetail">${cuotas}</span>{" "}
            </p>
          </div>
          <div>
            {itemCount === 0 ? (
              <ItemCount stock={parseInt(stock)} onAddCart={onAddCart} />
            ) : (
              <Link to="/cart">
                {" "}
                <button className="btn-dark p-2">Finalizar Compra</button>{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
