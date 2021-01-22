import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';

import colors from './colors';
import CartComponent from '../components/CartComponent';
import CartContext from '../contexts/CartContext';

export default function CartProducts(props){
    const {cartItems, setCartItems, total, setTotal, cart, setCart} = useContext(CartContext);
    let key = 0;
    let aux = 0;
    let productInfo = {};
    let products = [];
    console.log(cart);
    useEffect(() => {
        if (cartItems.length > 0){
            cartItems.forEach(element => {
                aux +=element.price;
                productInfo = {
                    productId: element.id,
                    amount: 1,
                    price: element.price
                }
                products.push(productInfo);
            });
        }
        setCart(products);
        setTotal(aux/100);
    }, [cartItems]);

    return(
        <Container>
            <Total ><p>Total: ${total}</p></Total>
            {(!cartItems.length) 
            ? <Text>Carrinho Vazio</Text>
            :
            <>
                {cartItems.map(i => {
                    return (<CartComponent content={{name: i.name, price: i.price, stock: i.stock, qtt: i.qtt, id:i.id}} setTotal={setTotal}/>)
                } 
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

const Text = styled.p`
    width: 70%;
    height: 400px;
    margin-top: 20px;
    border-radius: 4px;
    color: ${colors.blue};
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: white;  
`;
