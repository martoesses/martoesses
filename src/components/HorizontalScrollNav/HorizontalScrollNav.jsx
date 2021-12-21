import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Movie from '../movies/Movie';
import styled from 'styled-components';
import Arrow from './Arrow';

const ContainerItem = styled.div`
  width:200px;
  margin-right:15px;
`;

const HorizontalScrollNav = ({items}) =>  ( 
  <ScrollMenu LeftArrow={()=>Arrow('Left')} RightArrow={()=>Arrow('Right')}>
    {items.map((item) => (
      <ContainerItem
        itemId={item.id}
        key={item.id}              
        tabIndex={0}
      >
        <Movie 
          item={item}                
        />
      </ContainerItem>
    ))}
</ScrollMenu>
)
 
export default HorizontalScrollNav;