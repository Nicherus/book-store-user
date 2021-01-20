import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import colors from './colors';
import CartComponent from '../components/CartComponent';
import { CartContext } from '../contexts/CartContext';

export default function CartProducts(props){
    const {content} = props;
    const {cartItems, setCartItems} = useContext(CartContext);
    console.log(cartItems.lenght);

    return(
        <Container>
            {(cartItems.lenght) 
            ? <CartComponent content={{name: "Senhor dos ALALALALLALALneis", price: 10, stock: 2}}/> 
            :
            <>
                <CartComponent content={{name: "Senhor dos Aneis", price: 10, stock: 2}}/>
                <CartComponent content={{name: "Senhor dos Aneis", price: 10, stock: 2}}/>
                <CartComponent content={{name: "Senhor dos Aneis", price: 10, stock: 2}}/>
                <CartComponent content={{name: "Senhor dos Aneis", price: 10, stock: 2}}/>
                <CartComponent content={{name: "Senhor dos Aneis", price: 10, stock: 2}}/>
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