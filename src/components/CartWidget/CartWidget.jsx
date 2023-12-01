import React, { useContext } from 'react'
import { GrCart} from 'react-icons/gr';
import './cartWidget.css'
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';



function CartWidget() {

  const {getTotalItems} = useContext(CartContext)
  return (
    <div className='cartClass'>
        <Link to={"/Cart"}> 
        <GrCart />

        </Link>
        <p className='cartClass'>{getTotalItems()}</p>
        
      </div>
  )
}

export default CartWidget
