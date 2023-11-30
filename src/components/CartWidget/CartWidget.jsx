import React, { useContext } from 'react'
import { GrCart} from 'react-icons/gr';
import './cartWidget.css'
import { CartContext } from '../../../context/CartContext';




function CartWidget() {

  const {getTotalItems} = useContext(CartContext)
  return (
    <div className='cartClass'>
        <GrCart />
        <p className='cartClass'>{getTotalItems()}</p>

        
      </div>
  )
}

export default CartWidget
