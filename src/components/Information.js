import React from 'react';
import styled from 'styled-components';

import colors from './colors';

export default function Information(){
    return(
        <Container>
            <div>
                <label>Título:</label>
                <h2>Harry Potter e a Pedra filosofal</h2>
            </div>  
            <div>
                <label>Autor:</label>
                <h2>JK Rolling</h2>
            </div> 
            <div>
                <label>Ano:</label>
                <h2>1997</h2>
            </div> 
            <div>
                <label>Páginas:</label>
                <h2>300</h2>
            </div>
            <div>
                <label>Gênero:</label>
                <h2>Ficção</h2>
            </div>             
            <div className='synopsis'>
                <label>Sinopse:</label>
                <h2>Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por</h2>
            </div>  
            <div>
                <label>Preço:</label>
                <h2>R$ 00,00</h2>
            </div>
            <div>
                <label>Disponível:</label>
                <h2>5</h2>
            </div>
            <button>Adicionar ao carrinho</button>        
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
    
`;