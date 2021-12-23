import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import UserProvider from "./components/UserProvider";
import Home from "./components/Home";
import Contacto from "./components/Contacto";

function App() {
  return (
    <UserProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategory"
              element={<ItemListContainer />}
            />
            <Route
              path="/itemDetail/:idItem"
              element={<ItemDetailContainer detalle="BIENVENIDOS A KIWI" />}
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </UserProvider>
  );
}

export default App;
