import React, { useState } from 'react';
import styled from 'styled-components';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

import colors from './colors';

export default function Gallery(){
    const itens = [{url: 'https://3.bp.blogspot.com/-9hh9HbTfdzk/WswCXBhQaKI/AAAAAAAAEKk/xQrqEcQAcFkw4-mADEW-u5aLhJBHgW4DwCLcBGAs/s1600/Conhe%25C3%25A7a%2Bos%2B4%2BTipos%2Bde%2BCapas%2Bde%2BLivro%2Bque%2Bos%2BDesigners%2BNormalmente%2BDesenvolvem%2B-%2BArquiteto%2BVers%25C3%25A1til%2B-%2BRafael%2BNascimento%2B%25281%2529.jpg'},
    {url: 'https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-crianca-amaldicoada-livro-8-capa-dura.png'},
    {url: 'https://livrariaconcreta.com.br/wp-content/uploads/2017/01/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-01.jpg'},
    {url: 'https://a-static.mlcdn.com.br/618x463/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/3a4f71ae095c23460bf75b1c2e82a419.jpg'},
    {url: 'https://3.bp.blogspot.com/-9hh9HbTfdzk/WswCXBhQaKI/AAAAAAAAEKk/xQrqEcQAcFkw4-mADEW-u5aLhJBHgW4DwCLcBGAs/s1600/Conhe%25C3%25A7a%2Bos%2B4%2BTipos%2Bde%2BCapas%2Bde%2BLivro%2Bque%2Bos%2BDesigners%2BNormalmente%2BDesenvolvem%2B-%2BArquiteto%2BVers%25C3%25A1til%2B-%2BRafael%2BNascimento%2B%25281%2529.jpg'},
    {url: 'https://opiniaobomvaleapena.com.br/imagens/livro-harry-potter-e-a-crianca-amaldicoada-livro-8-capa-dura.png'},
    {url: 'https://livrariaconcreta.com.br/wp-content/uploads/2017/01/livro-vermelho_andrew-lang_CAPA_FINAL_CURVAS-01.jpg'},
    {url: 'https://a-static.mlcdn.com.br/618x463/livro-o-menino-do-dedo-verde-capa-dura/magazineluiza/222642600/3a4f71ae095c23460bf75b1c2e82a419.jpg'},
    ];
    
    const [photos, setPhotos] = useState(itens);
    const [bigImage, setBigImage] = useState('https://3.bp.blogspot.com/-9hh9HbTfdzk/WswCXBhQaKI/AAAAAAAAEKk/xQrqEcQAcFkw4-mADEW-u5aLhJBHgW4DwCLcBGAs/s1600/Conhe%25C3%25A7a%2Bos%2B4%2BTipos%2Bde%2BCapas%2Bde%2BLivro%2Bque%2Bos%2BDesigners%2BNormalmente%2BDesenvolvem%2B-%2BArquiteto%2BVers%25C3%25A1til%2B-%2BRafael%2BNascimento%2B%25281%2529.jpg');

    function nextPhoto(){
        const newOrder = photos.slice(1,photos.length);
        newOrder.push(photos[0]);
        setPhotos(newOrder);  
    }

    function previousPhoto(){
        const newOrder = photos.slice(0,(photos.length)-1);
        newOrder.unshift(photos[(photos.length)-1]);
        setPhotos(newOrder);      
    }

    function selectImage(url){
        setBigImage(url);
    }
        
    return(
        <Container>
            <div>
                <IoIosArrowBack className='arrow' onClick={previousPhoto}/>
                <ul>
                    {photos.map( (c,i) => {                        
                        return(
                            <li key={i}>
                                <img src={c.url} onClick={() => selectImage(c.url)}/>
                            </li>
                        );                        
                    })}
                </ul>                
                <IoIosArrowForward className='arrow' onClick={nextPhoto}/>
            </div>
            <img src={bigImage} />
        </Container>
        
    );
}

const Container = styled.section`
    width: 58%;
    border-radius: 2px;
    height: calc(100vh - 140px);
    background: ${colors.black};
    display: flex;
    flex-direction: column;
    align-items: center;

    div{        
        width: 100%;
        height: 25%;
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
            width: 100%;
            height: 100%;
        }  

        li{
            flex-shrink: 0;
            width: 15%;
            margin: 0 5px;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            img{
                width: 100%;
                height: 100%;
                margin-bottom: 10px;
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
    img{
        height: 70%;
        width: auto;
    }
`;

