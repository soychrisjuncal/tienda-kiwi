import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Cart.css";
import { CartContext } from "./CartContext";
import {
  collection,
  doc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "firebase/auth";
import { UserContext } from "./UserProvider";

const Cart = () => {
  const test = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const createOrder = () => {
    if (currentUser == null) {
      alert("Debera iniciar sesion o registrarse");
    } else {
      let order = {
        buyer: {
          name: "admin ",
          email: currentUser.email,
          phone: "1130540430",
        },
        item: test.cartList.map((item) => ({
          id: item.idItem,
          title: item.titleItem,
          price: item.offerItem,
          stock: item.stockItem,
          qty: item.qtyItem,
        })),
        total: parseFloat(test.calcTotal()),
      };

      const orderInFireS = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      };

      orderInFireS()
        .then((res) =>
          alert(`Compra Confirmada! Su id de compra es: ${res.id}`)
        )
        .catch((err) => console.log(err));

      test.cartList.forEach(async (item) => {
        const itemRef = doc(db, "productos", item.idItem);
        await updateDoc(itemRef, {
          stock: increment(-item.qtyItem),
        });
      });

      test.removeAll();
    }
  };

  return (
    <>
      <ToastContainer />

      <h2 className="titleItem text-center">Carrito de Compras</h2>
      <div className="contenedor">
        <div className="d-flex justify-content-center">
          <Link to="/">
            <button className="btn-dark btnContinue btnSign">
              CONTINUE SHOPPING
            </button>
          </Link>
          <button
            className="btn-dark btnVaciar btnSign"
            onClick={test.removeAll}
          >
            Vaciar Carrito
          </button>
        </div>
        <div className=" contenedorTotal">
          <div className="col-12 col-md-8">
            {test.cartList.map((item) => (
              <div className="d-flex flex-column ">
                <div className="contenedorList text-left">
                  <img src={item.imgItem} className="imgItem" alt="producto" />
                  <h4 className="titleItem">Producto : {item.titleItem}</h4>
                  <h5 className="titleItem">Cantidad : {item.qtyItem} </h5>
                  <h5 className="titleItem">Precio : {item.offerItem} x U. </h5>
                  <h5 className="titleItem mt-1">
                    Stock Disponible : {item.stockItem}
                  </h5>
                  <h5 className="titleItem">
                    Subtotal: ${test.totalItems(item.idItem)}
                  </h5>
                  <button
                    className="btn-dark btnBorrar btnSign"
                    onClick={() => test.deleteItem(item.idItem, toast)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-md-4">
            {test.cartList.length > 0 && (
              <div className="d-flex flex-column justify-content-center contenedorResumen">
                <h4 className="p-2 text-center">Resumen de Compra</h4>
                <h5 className="p-3 text-left">Subtotal: {test.subTotal()}</h5>
                <h5 className="p-3 text-left">IVA 21%: {test.calcIva()}</h5>
                <h3 className="p-3 text-left">TOTAL: {test.calcTotal()}</h3>
                <button
                  onClick={createOrder}
                  className="btn-dark btnConfirmar btnSign"
                >
                  Confirmar Compra
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
