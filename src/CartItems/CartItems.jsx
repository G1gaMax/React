import React, {useContext} from 'react';
import '../CartItems/cartItem.css';
import { Link } from 'react-router-dom';
import { BsCartXFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext';

const CartItem = ({ product }) => {

    const {cart,removeItem, total, quantityTotal, itemQuantity, calculateTotalPrice} = useContext(CartContext)    
    const totalPerProduct = calculateTotalPrice(product);

    const onAdd = (quantity) => {
        console.log(`Cantidad seleccionada: ${quantity}`)

    }
    return (
                
        <div className='cartItemsContainer'>
            
        <div className='quantity-item'> 
        <p>{itemQuantity(product.id)}</p>        
        </div>

        <div className='cartCard'>       
        <img className='cartCard-image' src={product.image} alt={product.title} /> 
        

        <div className='cartDescription'>
            <h5 >{product.title}</h5> 
        </div>
        
        <div className='cartPrice'>
            <p>{`Unit  $${product.price}`}</p>
            <p>{`Total $${totalPerProduct}`}</p>
            
        </div>

        </div>

        

        <div className='remove-item'> 
        <BsCartXFill onClick={() =>removeItem(product.id)} size={32} />
        
        </div>
       
       



        </div>

        


    );
}

export default CartItem


