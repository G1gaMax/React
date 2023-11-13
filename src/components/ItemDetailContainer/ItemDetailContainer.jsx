import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './itemDetailContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {



    const [product, setProduct] = useState(null);
    const apiUrl = "https://fakestoreapi.com/products";
    const {productID} = useParams()

    useEffect(() => {
        const fetchData = () => {
            return fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    
                    const foundProduct = data.find( (item) => item.id == productID)
                    setProduct(foundProduct)
                    
                })
                .catch((error) => console.log(error))
        }
        fetchData();
    }, [productID]);



    return (
        <section className='detailContainer'>

            <div className='Card-detail'>
            {product ? <ItemDetail producto= {product} /> : <LoadingSpinner /> }
            
            </div>

        </section>
    )
}

export default ItemDetailContainer