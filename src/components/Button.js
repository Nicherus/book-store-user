import React from 'react';
import styled from 'styled-components';

import colors from './colors';

export default function Button(props){
    const {content} = props;
    return(
        <Container>            
            {content}
        </Container>
    );
}

const Container = styled.button`
    width: 70%;
    height: 70px;
    background: ${colors.black};
    margin-top: 20px;
    border-radius: 4px;
    color: white;
    text-align: center;
    
`;