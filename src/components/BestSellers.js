import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import colors from './colors';

export default function BestSellers(){
    const [bestSellers, setBestSellers] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() =>{
        setLoading(true);
        const request = axios.get('https://api-book-store.herokuapp.com/products/top-selling');
        request.then( resp => {
            setBestSellers(resp.data);
            setLoading(false);
        }).catch( error => {
            console.log(error);
        });
    },[]);

    function selectProduct(id){
        history.push(`/product/${id}`);
    }

    return(
        <Container>
            <section>
                <h1>MAIS VENDIDOS</h1>
            </section>
            <List>
                {loading ? 
                    <Load>
                        <img src='/images/load.gif' alt='load' />
                        <h2>Loading...</h2>
                    </Load>
                    :
                    <>
                    {bestSellers.map( (b,i) => {
                        const price = ((b.price)/100).toFixed(2);
                        return(
                            <li key={b.id} onClick={() => selectProduct(b.id)}>
                                <img src={b.photos[0].link} />
                                <h2>{b.name}</h2>
                                <h2>R$ {price}</h2>
                            </li>
                        );
                    })} 
                    </>
                }            
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
        width: 200px;
        height: 300px;
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

const Load = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    img{
        border-radius: 10px;
        width: 100%;
    }
`;