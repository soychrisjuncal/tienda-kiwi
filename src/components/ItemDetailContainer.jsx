import React, { useState, useEffect } from "react";
import "../css/ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
// import loader from "../assets/load.gif";
import "bootstrap/dist/css/bootstrap.min.css";

import { useParams } from "react-router";

import { firestoreDetailFetch } from "../utils/firestoreFetch";

const ItemDetailContainer = ({ detalle }) => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    firestoreDetailFetch(idItem)
      .then((res) => {
        setDatos(res);
      })
      .catch((err) => console.log(err));
  }, [idItem]);

  return (
    <div>
      <h4> {detalle} </h4>

      <div>
        <ItemDetail
          id={datos.id}
          img={datos.img}
          title={datos.title}
          description={datos.description}
          listPrice={datos.listPrice}
          offerPrice={datos.offerPrice}
          stock={datos.stock}
          cuotas={datos.cuotas}
        />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
