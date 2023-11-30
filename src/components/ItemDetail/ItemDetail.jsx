import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const ItemDetail = ({ producto }) => {

    const [quantity, SetQuantity] = useState(0)
    const {addToCart} = useContext(CartContext)

    const onAdd = (quantity) => {
        SetQuantity(quantity)
        addToCart(producto,quantity)

    }
    
    return (
        <div>
            <img className='card-image' src={producto.image} alt={producto.title} />
            <h5>{producto.title}</h5>
            <p>{producto.description}</p>
            <h5>{`$${producto.price}`} </h5>
            {quantity == 0 ?
            <ItemCount initial={1} stock={producto.rating.count} onAdd={onAdd} />
            :
            <Link to={"/Cart"}>Go to cart</Link>
            }

            <p>{`Stock: ${producto.rating.count}`} </p>
        </div>
    )
}

export default ItemDetail