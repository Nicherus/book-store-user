import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Button from '../components/Button';
import CheckoutButton from '../components/CheckoutButton';
import CartProducts from '../components/CartProducts';

export default function Home(){

    return(
        <>
            <Header />
            <CartBody>
                <Button content={"TOTAL"} />
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