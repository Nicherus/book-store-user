import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Information from '../components/Information';

export default function Product(){
    return(
        <>
            <Header />
            <Container>
                <Gallery />
                <Information />
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