import React from 'react';
import movieConfig from '../../config/themoviedb';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardMovie = styled.div`
    border-radius:10px;
    background-color:#CCCCCC;
    padding-bottom:5px;
    margin-bottom:1rem;
`;

const Title = styled.h1`
    font-size:13px;
    font-weight:bold;    
    margin:0px;
    color:#000000;
    text-decoration:none;
    min-height: 40px;
`;

const Date = styled.h2`
    font-size:13px;
    font-weight:lighter;    
    margin:0px;
    color:#000000;
    text-decoration:none;
`;

const ImageContainer = styled.div`
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border-top-right-radius: var(--imageBorderRadius);
    border-top-left-radius: var(--imageBorderRadius);    
    background: #dbdbdb;
    overflow: hidden;
`;

const Image = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
`;

const Description = styled.div`
    padding:1rem;
    min-height:100px;
    text-decoration:none;
`;

const Movie = ({item}) => {
    return ( 
        <CardMovie>
            <Link to={`/movie/${item.id}`}>
                <ImageContainer>                    
                    <Image src={`${movieConfig.imgURL}${item.poster_path}`} alt={item.title} className="img-fluid" />                    
                </ImageContainer>
                <Description>
                    <Title>{item.title}</Title>
                    <Date>{item.release_date}</Date>
                </Description>
            </Link>
        </CardMovie>
    );
}
 
export default Movie;