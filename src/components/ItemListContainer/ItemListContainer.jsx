import React, { useState, useEffect } from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/Spinner";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Sometype+Mono&display=swap');
</style>

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  const {categoryID} = useParams()

  useEffect(() => {
    const fetchData = () => {
      return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if(categoryID){
            const filterProducts = data.filter( prod => prod.category == categoryID)
            setProducts(filterProducts)
          }
          else{
            setProducts(data)
            }
        })
        .catch((error) => console.log(error))
      }
      fetchData();
    }, [categoryID]);
    

  
    return (
      products.length === 0 ? 
        <div className="loading-container"> 
          <LoadingSpinner /> 
        </div> 
        :   
        <div className="listContainer">
          <ItemList products={products} />
        </div>
    );
    }

export default ItemListContainer;






