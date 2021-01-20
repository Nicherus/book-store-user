import React from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';


import colors from './colors';

export default function CheckoutButton(props){
    const {content} = props;
    const history = useHistory();

    function checkOut(){
        history.push('/checkout');
    }
    return(
        <Container onClick={checkOut}>            
            {content}
        </Container>
    );
}

const Container = styled.button`
    width: 56%;
    height: 70px;
    background: ${colors.black};
    margin: 20px 20px;
    border-radius: 4px;
    color: white;
    text-align: center;
    position: fixed;
    bottom:0;

`;