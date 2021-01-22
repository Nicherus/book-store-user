import React, {useEffect, useContext} from 'react';
import styled from 'styled-components';

import colors from './colors';
import CartComponent from '../components/CartComponent';
import CartContext from '../contexts/CartContext';

export default function CartProducts(props){
    const {cartItems, setCartItems} = useContext(CartContext);
    const {content} = props;

    return(
        <Container>
            {(!cartItems.length) 
            ? <CartComponent content={{name: "Senhor dos ALALALALLALALneis", price: 10, stock: 2}}/> 
            :
            <>
                {cartItems.map(i => 
                    <CartComponent content={{name: i.name, price: i.price, stock: i.stock, qtt: i.qtt}}/> 
                )}
            </>
            }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0px auto;
`;