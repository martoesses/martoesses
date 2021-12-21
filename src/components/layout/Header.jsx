import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderNav = styled.div`
    background-color: #000000;
    height: 64px;
    width: 100%;    
    transition: top 0.2s linear;
    position:relative;
    color:#FFFFFF;
`;

const Header = () => ( 
    <HeaderNav>
        <div className="container">
            <div className="row">
                <div className="col-md-2 p-3">
                    <img src="/logo.svg" alt="" className="img-fluid" />
                </div>
                <div className="col-md-10 text-end">
                    <Navbar />
                </div>
            </div>                
        </div>            
    </HeaderNav>
);
 
export default Header;