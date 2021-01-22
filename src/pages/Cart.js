import React from 'react';
import styled from 'styled-components';

import colors from '../components/colors';

import Header from '../components/Header';
import CheckoutButton from '../components/CheckoutButton';
import CartProducts from '../components/CartProducts';

export default function Home(){

    return(
        <>
            <Header />
            <CartBody>
                <Total ><p>Total</p></Total>
                <CartProducts/>
                <CheckoutButton content={"FECHAR PEDIDO"} />
            </CartBody>
        </>
    );
}

const CartBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 150px auto;
`;

const Total = styled.div`
    width: 70%;
    height: 70px;
    background: ${colors.black};
    margin-top: 20px;
    border-radius: 4px;
    color: white;
    display: flex;
    justify-content:center;
    align-items: center;  
`;