import React from 'react';
import styled from 'styled-components';

import colors from './colors';

export default function Gallery(){
    return(
        <Container>
        </Container>
        
    );
}

const Container = styled.section`
    width: 58%;
    border-radius: 2px;
    height: calc(100vh - 140px);
    background: ${colors.black};
`;

