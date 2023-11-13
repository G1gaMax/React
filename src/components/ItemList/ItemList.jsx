import React from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {
  return (
    <>
        {products.map ((element) => (
         <Item key = {element.id} product = {element} />
         ))
        }
    </>
  )
}

export default ItemList


