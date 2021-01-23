import React, {useEffect, useContext} from 'react';
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

