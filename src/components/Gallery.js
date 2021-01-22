import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

import colors from './colors';

export default function Gallery(props){
    const {photos, setPhotos, bigPhoto, setBigPhoto} = props; 
    console.log(photos);     

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

    function selectImage(link){
        setBigPhoto(link);
    }
        
    return(
        <Container>
            {photos.length !== 0 ? 
            <>
                <div>
                    <IoIosArrowBack className='arrow' onClick={previousPhoto}/>
                    <ul>
                        {photos.map( p => {                        
                            return(
                                <li key={p.id}>
                                    <img src={p.link} onClick={() => selectImage(p.link)}/>
                                </li>
                            );                        
                        })}
                    </ul>                
                    <IoIosArrowForward className='arrow' onClick={nextPhoto}/>
                </div>
                <img src={bigPhoto} /> 
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

const Load = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    img{
        border-radius: 10px;
    }
`;

