import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Item/item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({ product }) => {

    const onAdd = (quantity) => {
        console.log(`Cantidad seleccionada: ${quantity}`)

    }
    return (
        <Link to={`/item/${product.id}`} className='card-text'>
        <div className='Card'>
            <img className='card-image' src={product.image} alt={product.title} />
            <p>{`Stock: ${product.rating.count}`}</p>
            
            <h5 >{product.title}</h5> 

            <div className='buttons'>

                <p>$ {product.price}</p>

                <></>

                
            </div>
        </div>
        </Link>


    );
}

export default Item


