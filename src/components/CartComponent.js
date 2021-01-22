import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import colors from './colors';
import { CartContext } from '../contexts/CartContext';

export default function CartComponent(props){
    const [qtt, setQtt] = useState(1);
    const {content} = props;
    const {cartItems, setCartItems} = useContext(CartContext);
    console.log(cartItems);
    
    function addBook(){
        const newqtt = qtt + 1;
        setQtt(newqtt);
    }

    function subtractBook(){
        const newqtt = qtt - 1;
        if(newqtt == 0){
            
        }
        setQtt(newqtt);
    }

    return(
        <Container>
            <ProductContent>
                <button>            
                    <BookImage src="https://a-static.mlcdn.com.br/618x463/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/3a4f71ae095c23460bf75b1c2e82a419.jpg" />
                </button>
                    <ProductInformation>
                        <button>
                            <p>{`${content.name}`}</p>
                        </button>
                        <QuantityContainer>
                            <p>Quantidade: </p>
                            <button onClick={addBook}>+</button>
                            <p>{` ${qtt}`}</p>
                            <button onClick={subtractBook}>-</button>
                        </QuantityContainer>
                        <p>{`Estoque: ${content.stock}`}</p>
                    </ProductInformation>
            </ProductContent>
            <Price>
                <p>{`R$${content.price}`}</p>
            </Price>
        </Container>
    );
}

const Container = styled.div`
    width: 70%;
    background: ${colors.grey};
    margin-top: 20px;
    border-radius: 4px;
    color: white;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    font-size: 20px;
`;

const BookImage = styled.img`
    width:100px;
    height: 150px;
`;

const ProductContent = styled.div`
    display: flex;
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center; 
    button {
        border: 1px solid black;
        height: 20px;
        width: 20px;
        margin: 5px;
        display: inline-block;
        line-height: 5px;
        text-align: center;
    }
`;

const ProductInformation = styled.div`
    margin: 0 0 5px 20px;
    vertical-align: baseline;
    p {
        margin-bottom: 5px;
    }
`;
const Price = styled.div`
    margin: 0 20px;
`;