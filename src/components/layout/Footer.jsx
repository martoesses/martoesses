import React from 'react';
import styled from 'styled-components';

const FooterCSS = styled.div`
    background-color: #000000;
    height: 50px;
    width: 100%;    
    transition: top 0.2s linear;
    position:relative;
    color:#FFFFFF;
    text-align:center;
    line-height:50px;
    margin-top:30px;
`;

const Footer = () => {
    return ( 
        <FooterCSS>
            Todos los derechos Reservados
        </FooterCSS>
     );
}
 
export default Footer;