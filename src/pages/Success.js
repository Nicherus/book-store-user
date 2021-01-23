import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';
import colors from '../components/colors';

export default function Success(){    
    const history = useHistory();

    setTimeout(() => history.push('/'), 5000);
    
    return(
        <>
            <Header />
            <Container>
                <div>
                    <h1>Pedido realizado com sucesso!</h1>
                    <h2>Voltando para a tela inicial...</h2>
                    <img src='/images/load.gif' alt='load' />
                    Loading...
                </div>
            </Container>            
        </>
    );
}

const Container = styled.div`
    margin-top: 120px;
    display: flex;
    justify-content: center;
  
    div{
        padding: 40px;
        width: 80%;
        display:flex;
        flex-direction: column;
        align-items: center;        
        background: ${colors.black};
        color: white;
        border-radius: 5px;
        h1{
            font-size: 40px;
            margin-bottom: 40px;
        }
        h2{
            font-size: 26px;
            margin-bottom: 10px;
        }
        img{
            border-radius: 10px;
            width: 100px;
        }
    }    
`;