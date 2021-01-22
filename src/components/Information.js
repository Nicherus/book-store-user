import React, { useState } from 'react';
import styled from 'styled-components';

import colors from './colors';

export default function Information(props){
    const {product} = props;
    const price = ((product.price)/100).toFixed(2);
    const [enable, setEnable] = useState(true);
    
    if (product.amountStock === 0){
        setEnable(false);
    }

    return(
        <Container>
            {Object.keys(product).length !== 0 ? 
            <>
            
            <div>
                <label>Título:</label>
                <h2>{product.name}</h2>
            </div>  
            <div>
                <label>Autor:</label>
                <h2>{product.author}</h2>
            </div> 
            <div>
                <label>Ano:</label>
                <h2>{product.year}</h2>
            </div> 
            <div>
                <label>Páginas:</label>
                <h2>{product.pages}</h2>
            </div>
            <div>
                <label>Gênero:</label>
                <h2>{product.categories[0].name}</h2>
            </div>             
            <div className='synopsis'>
                <label>Sinopse:</label>
                <h2>{product.synopsis}</h2>
            </div>  
            <div>
                <label>Preço:</label>
                <h2>R$ {price}</h2>
            </div>
            <div>
                <label>Disponível:</label>
                <h2>{product.amountStock}</h2>
            </div>
            <button className={!enable ? 'disabled' : undefined} disabled={!enable} onClick={() => console.log('teste')}>Adicionar ao carrinho</button> 
            </>
            :
            <Load>
                <img src='/images/load.gif' alt='load' />
                <h2>Loading...</h2>
            </Load>
            }          
        </Container>
    );
}

const Container = styled.section`
    width: 40%;
    border-radius: 2px;
    height: calc(100vh - 140px);
    background: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 10px 20px;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        font-size: 16px;

        h2{
            width: 80%;
            background: ${colors.grey};
            margin: 5px 0;
            padding: 5px 10px;
            border-radius: 10px;
        }
    }
    .synopsis{
        text-align: justify;
        
        h2{
            font-size: 14px;
            height: 150px;
            overflow: scroll;
            overflow-x: hidden;
            padding: 15px;
            padding-bottom: 30px;
        }
    }

    button{
        margin-top: 20px;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        color: white;
        border: 1px solid ${colors.grey};
        background: ${colors.blue};
    }
    button:hover{
        background: lightblue;
        color: ${colors.black};
    }
    .disabled,.disabled:hover{
        background-color: rgba(255,0,0,0.1);
        color: ${colors.black};
    }
    
`;

const Load = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    img{
        border-radius: 10px;
    }
`;