import React, { createContext, useState } from 'react';

const CartContext = createContext();
export default CartContext;

export function CartProvider(props) {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cartItems, setCartItems, total, setTotal, cart, setCart}}>
          {props.children}
        </CartContext.Provider>
    );
}
