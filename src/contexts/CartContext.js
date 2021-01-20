import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {props.children}
    </CartContext.Provider>
  );
}
