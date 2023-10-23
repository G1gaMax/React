import React from 'react'
import { GrCart} from 'react-icons/gr';
import './cartWidget.css'



function CartWidget() {
  return (
    <div className='cartClass'>
        <GrCart />
        <p className='cartClass'>0</p>
        
      </div>
  )
}

export default CartWidget
