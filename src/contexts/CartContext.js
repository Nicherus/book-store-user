import React, { createContext, useState } from 'react';

const CartContext = createContext();
export default CartContext;

export function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
          {props.children}
        </CartContext.Provider>
    );
}
