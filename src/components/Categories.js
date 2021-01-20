import React, { useState } from 'react';
import styled from 'styled-components';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

import colors from './colors';

export default function Categories(){
    const [first, setFirst] = useState('flex');
    const [second, setSecond] = useState('none');

    
    function previous(){
        setFirst('flex');
        setSecond('none');
    }
    function next(){
        setFirst('none');
        setSecond('flex');
    }    

    return(
        <Container first={first} second ={second}>
            <div>
                <IoIosArrowBack className='arrow' onClick={previous}/>
                <ul className='first'>
                    <li>ROMANCE</li>
                    <li>FICÇÃO</li>
                    <li>TERROR</li>
                    <li>POLICIAL</li>
                    <li>DRAMA</li>
                </ul>
                <ul className='second'>
                    <li>ANIME</li>
                    <li>FAROESTE</li>
                    <li>CULINARIA</li>
                    <li>TECNOLOGIA</li>
                    <li>DIREITO</li>
                </ul>
                
                <IoIosArrowForward className='arrow' onClick={next}/>
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
        padding: 10px 20px;
        border-radius: 5px;
        background: ${colors.black};
        margin-bottom: 10px;
        justify-content: space-between;
        display: flex;

        ul{
            overflow: hidden;
            transition: all 5000ms linear;
        }

        .first{
            display: ${(props) => props.first};
        }
        .second{
            display: ${(props) => props.second};
        }
        
        li{
            width: 150px;
            color: white;
            font-size: 20px;
            text-align: center;
            padding: 10px;
            border: 1px solid ${colors.grey};
            margin: 0 5px;
            border-radius: 5px;
            cursor: pointer;
        }  
        li:hover,.arrow:hover{
            background: ${colors.grey};
        }
        .arrow{
            width: 50px;
            height: 90%;
            font-size: 40px;
            border-radius: 50%;
            color: white;
            border: 1px solid ${colors.grey};
            cursor: pointer;
        }  
    }

    @media (max-width: 900px) {
        ul{
            width: 100%;
        }
    }
`;