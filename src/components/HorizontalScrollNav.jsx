import React,{useContext} from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Movie from './movies/Movie';
import styled from 'styled-components';

const ContainerItem = styled.div`
  width:200px;
  margin-right:15px;
`;

const LeftButton = styled.button`
  margin-right:10px;
  background: transparent;
  border:0px;
  position:absolute;
  left:0px;
  z-index:9999;
`;

const RightButton = styled.button`
  margin-left:10px;
  background: transparent;
  border:0px;
  position:absolute;
  right:0px;
  z-index:9999;
  background-color:#CCCCCC;
  border-radius:10px;
  width:30px;
  height:30px;
`;

const HorizontalScrollNav = ({items}) =>  ( 
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
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

function Arrow(direction) {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  
    return direction === "Right" ? (
      <RightButton disabled={isLastItemVisible} onClick={() => scrollNext()}>
        {direction}
      </RightButton>
    ) : (
    <LeftButton disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        {direction}
      </LeftButton>
    )
}
 
export default HorizontalScrollNav;