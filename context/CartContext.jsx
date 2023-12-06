import React, { createContext, useState } from 'react';
export const CartContext = createContext();


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0) //valor en guita
  const [quantityTotal,setQuantityTotal] = useState(0) //cantidad de items total
  // const [itemQuantity, setItemQuantity] = useState(0)



  const addToCart = (producto, quantity) => {
    const productExist = cart.find(prod => prod.producto.id === producto.id);

    if (!productExist) {
        setCart(prev => [...prev, { producto, quantity }]);
        setQuantityTotal(prev => prev + quantity);
        setTotal(prev => prev + producto.price * quantity);
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



const itemQuantity = (productId) => {
  const item = cart.find((product) => product.producto.id === productId);
  return item ? item.quantity : 0;
};


  //Function to check if a product is already on cart
  const isInCart = ( itemId ) => {
    return cart.some( (i) => i.producto.id === itemId)

  }

  const calculateTotalPrice = (product) => {
    const item = cart.find((cartItem) => cartItem.producto.id === product.id);
    return item ? item.quantity * product.price : 0;
  };

  //Function to get total items on cart
  const getTotalItems = () => {
    let cant = 0
        cart.forEach((e) => cant += e.quantity)
        return cant
  }

  //Function to remove cart items
  const removeItem = (id) => {
    const removedItem = cart.find((item) => item.producto.id === id);
  
    if (removedItem) {
      const filterCart = cart.filter((item) => item.producto.id !== id);
      setCart(filterCart);
  
      setQuantityTotal((prev) => prev - removedItem.quantity);
      setTotal((prev) => prev - removedItem.producto.price * removedItem.quantity);
    }
  };

  const clearCart =  ( ) => {
    setCart([]);
    setQuantityTotal(0);
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
                itemQuantity,
                calculateTotalPrice,


            }
        }>
            {children}
        </CartContext.Provider>
  );
};


