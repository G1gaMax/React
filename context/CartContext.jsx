import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);


  //Function to add productos to cart
  const addToCart = (producto, quantity ) =>{
    if(!isInCart(producto.id)){
      setCart((prev) => [...prev, {producto, quantity}])
    }
    else
    {
      console.log("Already on cart...")
    }

  }

  //Function to check if a product is already on cart
  const isInCart = ( itemId ) => {
    return cart.some( (i) => i.producto.id === itemId)

  }

  //Function to get total items on cart
  const getTotalItems = () => {
    let cant = 0
        cart.forEach((e) => cant += e.quantity)
        return cant
  }

  //Function to remote cart items
  const removeItem = ( id ) => {
    const filterCart = cart.filter( (item) => item.producto.id !== id)
    setCart(filterCart);
  }

  const clearCart =  ( ) => {
    setCart([]);
  }




  return (

        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
                getTotalItems,
                removeItem,
                clearCart,

            }
        }>
            {children}
        </CartContext.Provider>
  );
};


