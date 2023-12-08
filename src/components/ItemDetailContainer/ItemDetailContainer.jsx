import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/Spinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const newDoc = doc(db, "productos", productID);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: doc.id, ...data };
        setProduct(newProduct);
      })
      .catch((error) => console.log(error));
  }, [productID]);

  return (
    <section className="detailContainer">
      <div className="Card-detail">
        {product ? <ItemDetail producto={product} /> : <LoadingSpinner />}
      </div>
    </section>
  );
};

export default ItemDetailContainer;
