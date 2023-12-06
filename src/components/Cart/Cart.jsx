import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext';
import emptyCart from '../../assets/empty_cart.png';
import CartItems from '../../CartItems/CartItems';
import Button from 'react-bootstrap/Button';
import "./cart.css";
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart, clearCart,quantityTotal, total, removeItem} = useContext(CartContext)
    return (
        <div>
        <div className='mainContainer'>
            
            <div className="listContainerCart">
            <ul>
                {
                    
                cart.length > 0 ?
                cart.map( (item, index) => {
                    return <li key={index}>
                        <CartItems  product={item.producto}/>
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
        {cart.length > 0 &&  <p>Total items: {quantityTotal}</p>}
        </div>

        <div className='total-items'>
        {cart.length > 0 &&  <p>Total: ${total.toFixed(0)}</p>}
        </div>

        <div className='cart-buttons'>
        {cart.length > 0 &&  <Button onClick={clearCart} variant="primary">Clear cart</Button> }
        {cart.length > 0 &&  <Link to="/checkout">  <Button variant="primary">Checkout</Button> </Link>}
        </div>
        
        </div>
        </div>
        
        </div>
    );
};

export default Cart;