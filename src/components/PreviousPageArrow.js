import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {FiArrowLeftCircle} from 'react-icons/fi';

import colors from './colors';

export default function PreviousPageArrow(props){
    const {previousPage} = props;
    const history = useHistory();

    function goPrevious(){
        history.push(previousPage);
    }
    
    return(
        <Container>
            <FiArrowLeftCircle className='arrow' onClick={goPrevious}/>
        </Container>        
    );
}

const Container = styled.div`
    position: fixed;
    top: 30px;
    left: 30px;
    .arrow{
        font-size: 40px;
        color: ${colors.blue};
        cursor: pointer;
    }
`;
