import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {

    const onAdd = (quantity) => {
        console.log(`Cantidad seleccionada: ${quantity}`)

    }
    
    return (
        <div>
            <img className='card-image' src={producto.image} alt={producto.title} />
            <h5>{producto.title}</h5>
            <p>{producto.description}</p>
            <h5>{`$${producto.price}`} </h5>
            <ItemCount initial={1} stock={producto.rating.count} onAdd={onAdd} />
            <p>{`Stock: ${producto.rating.count}`} </p>
        </div>
    )
}

export default ItemDetail