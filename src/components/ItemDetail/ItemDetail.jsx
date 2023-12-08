import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "../ItemDetail/itemDetail.css";
import { CartContext } from "../../../context/CartContext";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ producto }) => {
  const [quantity, SetQuantity] = useState(0);
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    SetQuantity(quantity);
    addToCart(producto, quantity);
  };

  return (
    <div className="itemDetail-Card">
      <div className="itemDetail-card-image">
        <img className="card-image" src={producto.image} alt={producto.title} />
      </div>

      <div className="itemDetail-card-title">
        <h5>{producto.title}</h5>
      </div>

      <div className="itemDetail-card-description">
        <p>{producto.description}</p>
      </div>

      <div className="itemDetail-card-price">
        <h5>{`$${producto.price}`} </h5>
        <p>{`Stock: ${producto.stock}`} </p>
      </div>
      {quantity == 0 ? (
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      ) : (
        <div>
          <Link to={"/Cart"}>
            {" "}
            <Button variant="primary">Go to cart</Button>{" "}
          </Link>
          <Link to={"/"}>
            {" "}
            <Button variant="primary">Keep shopping</Button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
