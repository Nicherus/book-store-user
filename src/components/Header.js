import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import colors from './colors';

export default function Header(){
    const history = useHistory();
    
    function goCart(){
        history.push('/cart');
    }
    
    return(
        <TopBar>            
            <div>
                <img src='/images/logo.png' alt='logo' />
                <h1>Book-Store</h1>
            </div>        
            <button>
                <img src='/images/cart.png' alt='carrinho' onClick={goCart}/>
            </button>
        </TopBar>
    );
}

const TopBar = styled.header`
    width: 100vw;
    height: 100px;
    background: ${colors.black};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    
    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        h1{
        color: white;
        font-size: 30px;
        }
        img{
            height: 80%;
        }
    }
    
    button{
        height: 50%;
        border-radius: 50%;
        padding: 6px;
        background: ${colors.blue};
        box-shadow: 0 0 1px 1px ${colors.grey};
        margin-right: 30px;
        img{
            height: 100%;
        }
    }
`;