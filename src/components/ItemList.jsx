import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex-wrap d-flex flex-row w-100 justify-content-center">
      {productos.map((dato) => (
        <div
          key={dato.id}
          className="col-md-4 col-12 d-flex justify-content-center"
        >
          <Item
            id={dato.id}
            img={dato.img}
            img2={dato.img2}
            img3={dato.img3}
            title={dato.title}
            description={dato.description}
            stock={dato.stock}
            listPrice={dato.listPrice}
            offerPrice={dato.offerPrice}
            cuotas={dato.cuotas}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
