import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import CartContext from '../contexts/CartContext';
import Header from '../components/Header';
import PreviousPageArrow from '../components/PreviousPageArrow';
import Gallery from '../components/Gallery';
import Information from '../components/Information';

export default function Product(){
    const { id } = useParams();
    const {cartItems, setCartItems} = useContext(CartContext);
    const [product, setProduct] = useState({});
    const [photos, setPhotos] = useState([]);
    const [bigPhoto, setBigPhoto] = useState('');
    const history = useHistory();

    useEffect(() => {
        const request = axios.get(`https://api-book-store.herokuapp.com/products/${id}`);
        request.then( resp => {
            setProduct(resp.data);
            setPhotos(resp.data.photos);
            setBigPhoto(resp.data.photos[0].link);
        }).catch( error => {
            console.log(error);
        });
    },[]);

    function addProduct(){
        const newCartItems = cartItems;
        newCartItems.push(product);
        setCartItems(newCartItems);
        history.push('/cart');
    }

    return(
        <>
            <Header />
            <PreviousPageArrow previousPage='/' />
            <Container>
                <Gallery    photos={photos} 
                            setPhotos={setPhotos} 
                            bigPhoto={bigPhoto} 
                            setBigPhoto={setBigPhoto} />
                <Information product={product} addProduct={addProduct}/>
            </Container>
        </>
    );
}

const Container = styled.div`
    margin-top: 120px;
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;