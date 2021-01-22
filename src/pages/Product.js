import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Information from '../components/Information';

export default function Product(){
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [photos, setPhotos] = useState([]);
    const [bigPhoto, setBigPhoto] = useState('');

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

    return(
        <>
            <Header />
            <Container>
                <Gallery    photos={photos} 
                            setPhotos={setPhotos} 
                            bigPhoto={bigPhoto} 
                            setBigPhoto={setBigPhoto} />
                <Information product={product} />
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