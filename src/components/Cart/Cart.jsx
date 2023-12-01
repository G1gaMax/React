import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import Item from '../Item/Item';
import "./cart.css";

const Cart = () => {

    const {cart, clearCart} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            
            <div >
            <ul className="listContainerCart">
                {
                    
                cart.length > 0 ?
                cart.map( (item) => {
                    return <li>
                        <Item product={item.producto}/>
                    </li>
                })
                :
                (
                    <h3>No products yet...</h3>
                )
                }

            </ul>

            </div>
        </div>
    );
};

export default Cart;