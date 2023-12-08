import React, { useState, useEffect } from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/Spinner";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryID } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    //Products filtering
    const myProducts = categoryID
      ? query(collection(db, "productos"), where("category", "==", categoryID))
      : collection(db, "productos");

    getDocs(myProducts)
      .then((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(newProducts);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryID]);

  return loading ? (
    <div className="main-container">
      <div className="loading-container">
        <LoadingSpinner />
      </div>
    </div>
  ) : (
    <div className="main-container">
      <div className="listContainer">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
