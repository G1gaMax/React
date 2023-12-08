import React from "react";
import { Link } from "react-router-dom";
import "../Item/item.css";

const Item = ({ product }) => {
  const onAdd = (quantity) => {};
  return (
    <Link to={`/item/${product.id}`} className="card-text">
      <div className="Card">
        <div className="card-image">
          <img src={product.image} alt={product.title} />
        </div>
        <hr className="hr" />

        <div className="card-stock">
          <p>{`Stock: ${product.stock}`}</p>
        </div>

        <div className="card-title">
          <p>{product.title}</p>
        </div>

        <div className="card-price">
          <p>$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
