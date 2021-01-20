import React, { useState } from 'react';
import styled from 'styled-components';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

import colors from './colors';

export default function Products(){
    const itens = [{url: 'https://3.bp.blogspot.com/-9hh9HbTfdzk/WswCXBhQaKI/AAAAAAAAEKk/xQrqEcQAcFkw4-mADEW-u5aLhJBHgW4DwCLcBGAs/s1600/Conhe%25C3%25A7a%2Bos%2B4%2BTipos%2Bde%2BCapas%2Bde%2BLivro%2Bque%2Bos%2BDesigners%2BNormalmente%2BDesenvolvem%2B-%2BArquiteto%2BVers%25C3%25A1til%2B-%2BRafael%2BNascimento%2B%25281%2529.jpg', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-crianca-amaldicoada-livro-8-capa-dura.png', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://livrariaconcreta.com.br/wp-content/uploads/2017/01/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-01.jpg', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://a-static.mlcdn.com.br/618x463/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/3a4f71ae095c23460bf75b1c2e82a419.jpg', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://3.bp.blogspot.com/-9hh9HbTfdzk/WswCXBhQaKI/AAAAAAAAEKk/xQrqEcQAcFkw4-mADEW-u5aLhJBHgW4DwCLcBGAs/s1600/Conhe%25C3%25A7a%2Bos%2B4%2BTipos%2Bde%2BCapas%2Bde%2BLivro%2Bque%2Bos%2BDesigners%2BNormalmente%2BDesenvolvem%2B-%2BArquiteto%2BVers%25C3%25A1til%2B-%2BRafael%2BNascimento%2B%25281%2529.jpg', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-crianca-amaldicoada-livro-8-capa-dura.png', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://livrariaconcreta.com.br/wp-content/uploads/2017/01/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-01.jpg', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    {url: 'https://a-static.mlcdn.com.br/618x463/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/3a4f71ae095c23460bf75b1c2e82a419.jpg', name: 'Harry Potter e a Criança Amaldiçoada', price:'R$ 00,00'},
    ];
    
    const [books, setBooks] = useState(itens);

    function nextBook(){
        const newOrder = books.slice(1,books.length);
        newOrder.push(books[0]);
        setBooks(newOrder);  
    }

    function previousBook(){
        const newOrder = books.slice(0,(books.length)-1);
        newOrder.unshift(books[(books.length)-1]);
        setBooks(newOrder);      
    }

    return(
        <Container>
            <div>
                <IoIosArrowBack className='arrow' onClick={previousBook}/>
                <ul>
                    {books.map( (c,i) => {                        
                        return(
                            <li key={i}>
                                <img src={c.url} />
                                <h2>{c.name}</h2>
                                <h2>{c.price}</h2>
                            </li>
                        );                        
                    })}
                </ul>                
                <IoIosArrowForward className='arrow' onClick={nextBook}/>
            </div>            
        </Container>
    );
}

const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;

    div{        
        width: 80%;
        padding: 10px 10px;
        border-radius: 5px;
        background: ${colors.black};
        margin-bottom: 10px;
        justify-content: space-between;
        align-items: center;
        display: flex;

        ul{
            overflow: hidden;
            display: flex;
        }  

        li{
            flex-shrink: 0;
            width: 20%;
            margin: 0 10px;
            padding: 10px;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            img{
                width: 100%;
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
                margin-bottom: 5px;
            }
        } 
        li:hover,.arrow:hover{
            background: ${colors.grey};
        }
        .arrow{
            flex-shrink: 0;
            margin: 0 3px;
            width: 40px;
            height: 40px;
            font-size: 40px;
            border-radius: 50%;
            color: white;
            border: 1px solid ${colors.grey};
            cursor: pointer;
        }
    }

    @media (max-width: 900px) {
        div{
            width: 100%;
            li {
            width: 80%;
            height: 300px;
        }
        }
        
    }
`;