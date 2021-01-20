import React from 'react';
import styled from 'styled-components';

import colors from './colors';

export default function BestSellers(){
    return(
        <Container>
            <section>
                <h1>MAIS VENDIDOS</h1>
            </section>
            <List>
                <li>
                    <img src="https://3.bp.blogspot.com/-9hh9HbTfdzk/WswCXBhQaKI/AAAAAAAAEKk/xQrqEcQAcFkw4-mADEW-u5aLhJBHgW4DwCLcBGAs/s1600/Conhe%25C3%25A7a%2Bos%2B4%2BTipos%2Bde%2BCapas%2Bde%2BLivro%2Bque%2Bos%2BDesigners%2BNormalmente%2BDesenvolvem%2B-%2BArquiteto%2BVers%25C3%25A1til%2B-%2BRafael%2BNascimento%2B%25281%2529.jpg" />
                    <h2>Harry Potter e a Criança Amaldiçoada</h2>
                    <h2>R$ 00,00</h2>
                </li>
                <li>
                    <img src="https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-crianca-amaldicoada-livro-8-capa-dura.png" />
                    <h2>Harry Potter e a Criança Amaldiçoada</h2>
                    <h2>R$ 00,00</h2>
                </li>
                <li>
                    <img src="https://livrariaconcreta.com.br/wp-content/uploads/2017/01/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-01.jpg" />
                    <h2>Harry Potter e a Criança Amaldiçoada</h2>
                    <h2>R$ 00,00</h2>
                </li>
                <li>
                    <img src="https://a-static.mlcdn.com.br/618x463/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/3a4f71ae095c23460bf75b1c2e82a419.jpg" />
                    <h2>Harry Potter e a Criança Amaldiçoada</h2>
                    <h2>R$ 00,00</h2>
                </li>               
            </List>
        </Container>
    );
}

const Container = styled.section`
    margin-top: 120px;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;

    section{        
        width: 80%;
        padding: 10px;
        border-radius: 5px;
        background: ${colors.black};
        justify-content: center;
        margin-bottom: 10px;
        display: flex;
        
        h1{
            color: white;
            font-size: 20px;
        }     
    }

    @media (max-width: 900px) {
        section{
            width: 100%;
        }
    }
`;

const List = styled.ul`
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    background: ${colors.black};
    justify-content: center;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li{
        width: 20%;
        margin: 0 10px;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;

        img{
            width:100%;
            height: 80%;
            margin-bottom: 10px;
        }
        h2{
            max-width: 20ch;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: white;
            font-size: 16px;
            margin-bottom: 10px;
        }
    }  
    li:hover{
        background: ${colors.grey};
    }

    @media (max-width: 800px) {
        width: 100%;
        li {
            width: 40%;
            height: 300px ;
        }
    }
`;