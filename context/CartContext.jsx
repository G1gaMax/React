import React, { createContext, useState } from 'react';
export const CartContext = createContext();


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0) //valor en guita
  const [quantityTotal,setQuantityTotal] = useState(0) //cantidad de items total



  const addToCart = (producto, quantity) => {
    const productExist = cart.find(prod => prod.producto.id === producto.id);

    if (!productExist) {
        setCart(prev => [...prev, { producto, quantity }]);
        setQuantityTotal(prev => prev + quantity);
        setTotal(prev => prev + producto.precio * quantity);
    } else {
        const updatedCart = cart.map(prod => {
            if (prod.producto.id === producto.id) {
                return { ...prod, quantity: prod.quantity + quantity };
            } else {
                return prod;
            }
        });

        setCart(updatedCart);
        setQuantityTotal(prev => prev + quantity);
        setTotal(prev => prev + producto.price * quantity);
    }
};


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
    setCantidadTotal(0);
    setTotal(0);
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
                total,
                quantityTotal,


            }
        }>
            {children}
        </CartContext.Provider>
  );
};


