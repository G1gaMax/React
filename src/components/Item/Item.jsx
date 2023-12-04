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

        <div className='card-image'>
            
            <img src={product.image} alt={product.title} />
        </div>

        <div className='card-stock'>
        
            <p>{`Stock: ${product.stock}`}</p>
            </div>
        
        <div className='card-title'>
            <h5 >{product.title}</h5> 
            </div>

        <div className='card-price'>
            <p>$ {product.price}</p>
        </div>
        </div>
        </Link>


    );
}

export default Item


