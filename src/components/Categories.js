import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

import CategorieContext from '../contexts/CategorieContext';
import colors from './colors';

export default function Categories(props){
    const {categorieId,setCategorieId} = useContext(CategorieContext);  
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        const request = axios.get('https://api-book-store.herokuapp.com/categories');
        request.then( resp => {
            setCategories(resp.data);
            setCategorieId(resp.data[0].id);
        }).catch( error => {
            console.log(error);
        });
    },[]);

    function nextCategorie(){
        const newOrder = categories.slice(1,categories.length);
        newOrder.push(categories[0]);
        setCategories(newOrder);  
    }

    function previousCategorie(){
        const newOrder = categories.slice(0,(categories.length)-1);
        newOrder.unshift(categories[(categories.length)-1]);
        setCategories(newOrder);      
    }

    function selectCategorie(id){
        setCategorieId(id);
    }

    return(
        <Container>
            <div>
                <IoIosArrowBack className='arrow' onClick={previousCategorie}/>
                <ul>
                    {categories.map((c,i) => {         
                        return(
                            <li key={c.id} 
                                className={categorieId === c.id ? 'selected' : undefined}
                                onClick={() => selectCategorie(c.id)}>
                                {c.name}
                            </li>
                        );                        
                    })}
                </ul>                
                <IoIosArrowForward className='arrow' onClick={nextCategorie}/>
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
        display: flex;

        ul{
            overflow: hidden;
            display: flex;
        }        
        li{
            flex-shrink: 0;
            width: 120px;
            height: 40px;
            color: white;
            font-size: 18px;
            text-align: center;
            padding: 10px;
            border: 1px solid ${colors.grey};
            margin: 0 5px;
            border-radius: 5px;
            cursor: pointer;
        } 
        li:hover,.arrow:hover,.selected{
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
        }
    }
`;