import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';

const Cart = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <h1>TU CARRITO</h1>
        </div>
    );
};

export default Cart;