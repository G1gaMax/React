import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import emptyCart from '../../assets/empty_cart.png';
import CartItems from '../../CartItems/CartItems';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

 import "./cart.css";

const Cart = () => {

    const {cart, clearCart, removeItem,quantityTotal, total} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
        <div className='mainContainer'>
            
            <div className="listContainerCart">
            <ul>
                {
                    
                cart.length > 0 ?
                cart.map( (item) => {
                    return <li>
                        <CartItems product={item.producto}/>
                                           </li>
                
                }
                )
                :
                (
                    <img
                    src={emptyCart}
                    width="700"
                    height="500"
                    className="d-inline-block align-top"
                    alt=""
                />
                )
                }

            </ul>

        
            
            </div>
            <div className='cartFooter'>
        
        <div className='total-items'>
        <p>Total items: {quantityTotal}</p>
        </div>

        <div className='total-items'>
        <p>Total: {total}</p>
        </div>

        <div className='cart-buttons'>
        {cart.length > 0 &&  <Button variant="primary">Clear cart</Button> }
        </div>
        
        </div>
        </div>
        
        </div>
    );
};

export default Cart;